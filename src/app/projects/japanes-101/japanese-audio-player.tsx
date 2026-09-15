"use client";

import { useEffect, useId, useSyncExternalStore } from "react";
import { createJapaneseAudio, initialAudioSnapshot, speechTextIsComplete } from "./japanese-audio";
import styles from "./japanes-101.module.css";

let browserAudio: ReturnType<typeof createJapaneseAudio> | undefined;

function getAudio() {
  if (!browserAudio) browserAudio = createJapaneseAudio(
    "speechSynthesis" in window ? window.speechSynthesis : null,
    typeof window.SpeechSynthesisUtterance === "function" ? (text) => new window.SpeechSynthesisUtterance(text) : null,
  );
  return browserAudio;
}

function subscribe(listener: () => void) {
  const audio = getAudio();
  const unsubscribe = audio.subscribe(listener);
  return () => {
    unsubscribe();
    if (audio.subscriberCount() === 0) {
      audio.dispose();
      if (browserAudio === audio) browserAudio = undefined;
    }
  };
}

const getSnapshot = () => browserAudio?.getSnapshot() ?? initialAudioSnapshot;
const getServerSnapshot = () => initialAudioSnapshot;

export function JapaneseAudioGuide() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <div className={styles.audioGuide}>
    <b>শুনুন → ছোট অংশে repeat করুন → তারপর নিজে বলুন</b>
    <p>এটি browser-generated Japanese speech, teacher recording নয়। Voice quality device অনুযায়ী আলাদা হতে পারে। নিজের নাম hiragana/katakana-তে দিলে pronunciation বোঝা সহজ হবে।</p>
    <p role="status">{state.error || (state.availability === "checking" ? "Japanese voice প্রস্তুত হচ্ছে…" : state.availability === "missing-voice" ? "Japanese voice পাওয়া যায়নি। Device/browser-এর speech settings-এ Japanese voice সক্রিয় করুন বা অন্য browser-এ চেষ্টা করুন।" : state.availability === "unsupported" ? "এই browser speech audio support করে না। অন্য browser-এ চেষ্টা করুন।" : "Japanese audio প্রস্তুত। ▶ শুনুন বা ধীরে শুনুন চাপুন।")}</p>
    {state.availability === "missing-voice" && <button type="button" className={styles.secondaryButton} onClick={() => getAudio().refreshVoices()}>Voice আবার check করুন</button>}
  </div>;
}

export function JapaneseAudioPlayer({ text, label = "Japanese sentence", disabledReason = "" }: { text: string; label?: string; disabledReason?: string }) {
  const id = useId();
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const playing = state.activeId === id;
  const unavailable = state.availability !== "ready";
  const reason = disabledReason || (!speechTextIsComplete(text) ? "আগে bracket-এর জায়গায় আপনার তথ্য যোগ করুন।" : "");

  useEffect(() => () => { browserAudio?.stop(id); }, [id, text]);

  function play(rate: number) {
    if (playing && state.rate === rate) getAudio().stop(id);
    else getAudio().play(id, text, rate);
  }

  return <div className={styles.audioPlayer} data-japanese-audio="true" role="group" aria-label={`${label} audio`}>
    <button type="button" disabled={!!reason || unavailable} aria-pressed={playing && state.rate === 1} title={reason || (unavailable ? "উপরের audio availability message দেখুন।" : "Japanese audio · normal speed")} onClick={() => play(1)}>{playing && state.rate === 1 ? "■ বন্ধ করুন" : "▶ শুনুন"}</button>
    <button type="button" disabled={!!reason || unavailable} aria-pressed={playing && state.rate === .7} title={reason || (unavailable ? "উপরের audio availability message দেখুন।" : "Japanese audio · slow speed")} onClick={() => play(.7)}>{playing && state.rate === .7 ? "■ বন্ধ করুন" : "▶ ধীরে শুনুন"}</button>
    {reason && <small>{reason}</small>}
  </div>;
}
