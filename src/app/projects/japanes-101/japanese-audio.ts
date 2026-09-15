export type AudioSnapshot = {
  availability: "checking" | "ready" | "missing-voice" | "unsupported";
  activeId: string | null;
  rate: number | null;
  error: string;
};

export const initialAudioSnapshot: AudioSnapshot = Object.freeze({ availability: "checking", activeId: null, rate: null, error: "" });
type SpeechEngine = Pick<SpeechSynthesis, "getVoices" | "speak" | "cancel" | "resume" | "addEventListener" | "removeEventListener">;
type UtteranceFactory = (text: string) => SpeechSynthesisUtterance;

export function speechTextIsComplete(text: string): boolean {
  return !!text.trim() && !/[［\[][^］\]]*[］\]]/u.test(text);
}

export function createJapaneseAudio(engine: SpeechEngine | null, factory: UtteranceFactory | null, voiceWaitMs = 2000) {
  let snapshot = initialAudioSnapshot;
  const listeners = new Set<() => void>();
  let current: SpeechSynthesisUtterance | null = null;
  let generation = 0;
  let disposed = false;
  let voiceTimer: ReturnType<typeof setTimeout> | undefined;

  function update(changes: Partial<AudioSnapshot>) {
    snapshot = { ...snapshot, ...changes };
    for (const listener of listeners) listener();
  }

  function findVoice() {
    const voices = engine?.getVoices().filter((voice) => /^ja(?:[-_]|$)/iu.test(voice.lang)) ?? [];
    return voices.find((voice) => voice.localService && voice.default) ?? voices.find((voice) => voice.localService) ?? voices.find((voice) => voice.default) ?? voices[0];
  }

  function refreshVoices() {
    if (disposed || !engine || !factory) return;
    try {
      if (findVoice()) {
        clearTimeout(voiceTimer);
        update({ availability: "ready" });
      } else if (snapshot.availability === "ready") {
        stop();
        update({ availability: "missing-voice" });
      }
    } catch {
      stop();
      update({ availability: "unsupported", error: "এই browser-এ speech audio পাওয়া যাচ্ছে না।" });
    }
  }

  function stop(owner?: string) {
    if (owner && snapshot.activeId !== owner) return;
    generation += 1;
    const hadAudio = current !== null;
    if (current) { current.onend = null; current.onerror = null; }
    current = null;
    if (hadAudio) {
      try { engine?.cancel(); } catch { /* Release UI even if the engine fails. */ }
    }
    update({ activeId: null, rate: null });
  }

  function play(id: string, text: string, rate: number) {
    if (disposed || !engine || !factory) return false;
    if (!speechTextIsComplete(text)) {
      update({ error: "আগে নাম ও bracket-এর জায়গায় আপনার তথ্য যোগ করুন।" });
      return false;
    }
    try {
      const voice = findVoice();
      if (!voice) { stop(); update({ availability: "missing-voice", error: "" }); return false; }
      stop();
      engine.cancel();
      const token = generation;
      const utterance = factory(text.trim());
      current = utterance; // Keep a reference until completion.
      utterance.lang = "ja-JP";
      utterance.voice = voice;
      utterance.rate = rate === .7 ? .7 : 1;
      utterance.pitch = 1;
      utterance.volume = 1;
      const finish = (error = "") => {
        if (disposed || token !== generation) return;
        current = null;
        update({ activeId: null, rate: null, error });
      };
      utterance.onend = () => finish();
      utterance.onerror = (event) => finish(event.error === "canceled" || event.error === "interrupted" ? "" : "Audio play হয়নি। আবার চেষ্টা করুন; device volume ও Japanese voice settings দেখুন।");
      update({ availability: "ready", activeId: id, rate: utterance.rate, error: "" });
      engine.resume();
      engine.speak(utterance);
      return true;
    } catch {
      stop();
      update({ error: "Audio play করা যায়নি। অন্য browser-এ চেষ্টা করুন অথবা Japanese voice সক্রিয় করুন।" });
      return false;
    }
  }

  if (!engine || !factory) {
    update({ availability: "unsupported" });
  } else {
    engine.addEventListener("voiceschanged", refreshVoices);
    refreshVoices();
    if (snapshot.availability === "checking") voiceTimer = setTimeout(() => {
      refreshVoices();
      if (snapshot.availability === "checking") update({ availability: "missing-voice" });
    }, voiceWaitMs);
  }

  return {
    getSnapshot: () => snapshot,
    subscriberCount: () => listeners.size,
    subscribe(listener: () => void) { listeners.add(listener); return () => { listeners.delete(listener); }; },
    refreshVoices,
    play,
    stop,
    dispose() {
      stop();
      disposed = true;
      clearTimeout(voiceTimer);
      engine?.removeEventListener("voiceschanged", refreshVoices);
      listeners.clear();
    },
  };
}
