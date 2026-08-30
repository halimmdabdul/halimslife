"use client";

import { useEffect, useMemo, useState } from "react";

import styles from "./listening-practice.module.css";

export type ListeningClip = {
  japanese: string;
  romaji?: string;
  bengali: string;
};

function shuffle<T>(items: T[]) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function speakJapanese(text: string, rate = 0.78) {
  if (!("speechSynthesis" in window)) return false;
  window.speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "ja-JP";
  speech.rate = rate;
  const japaneseVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith("ja"));
  if (japaneseVoice) speech.voice = japaneseVoice;
  window.speechSynthesis.speak(speech);
  return true;
}

export function ListeningPractice({ clips, resetKey }: { clips: ListeningClip[]; resetKey: number }) {
  const [round, setRound] = useState<ListeningClip[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [played, setPlayed] = useState(false);
  const [audioUnavailable, setAudioUnavailable] = useState(false);

  function restart() {
    setRound(shuffle(clips).slice(0, Math.min(5, clips.length)));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setPlayed(false);
    setAudioUnavailable(false);
  }

  useEffect(() => {
    const frame = window.requestAnimationFrame(restart);
    return () => {
      window.cancelAnimationFrame(frame);
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  const current = round[index];
  const options = useMemo(() => current ? shuffle([current.bengali, ...shuffle(clips.filter((clip) => clip.bengali !== current.bengali)).slice(0, 3).map((clip) => clip.bengali)]) : [], [clips, current]);

  if (!current) return <p className={styles.empty}>এই Unit-এর listening clips প্রস্তুত হচ্ছে।</p>;

  function play(rate = 0.78) {
    setPlayed(true);
    setAudioUnavailable(!speakJapanese(current.japanese, rate));
  }

  function choose(option: string) {
    if (selected || !played) return;
    setSelected(option);
    if (option === current.bengali) setScore((value) => value + 1);
  }

  function next() {
    if (index + 1 === round.length) { setFinished(true); return; }
    setIndex((value) => value + 1);
    setSelected(null);
    setPlayed(false);
  }

  if (finished) return <div className={`${styles.listening} ${styles.complete}`}><span>LISTENING COMPLETE ✓</span><strong>{score}/{round.length}</strong><h3>Listening round শেষ হয়েছে</h3><p>{score === round.length ? "সবগুলো audio সঠিক বুঝেছেন।" : `${round.length - score}টি sentence আবার slow speed-এ শুনুন।`}</p><button onClick={restart}>আবার শুনুন →</button></div>;

  return <div className={styles.listening}>
    <div className={styles.progress}><span style={{width:`${((index + 1) / round.length) * 100}%`}}/></div>
    <header><div><small>LISTEN · UNDERSTAND · REPEAT</small><h3>শুনে সঠিক অর্থ বাছুন</h3></div><b>{index + 1}/{round.length}</b></header>
    <section className={styles.audioStage}><span className={played ? styles.played : ""}>聴</span><p>{played ? "শুনেছেন—এখন অর্থ বাছুন" : "Japanese sentence শুনতে button চাপুন"}</p><div><button onClick={() => play(.78)}>▶ স্বাভাবিক গতিতে শুনুন</button><button onClick={() => play(.58)}>◀ ধীরে শুনুন</button></div>{audioUnavailable ? <em>এই browser-এ speech audio পাওয়া যাচ্ছে না।</em> : null}</section>
    <div className={styles.options}>{options.map((option) => { const correct = option === current.bengali; const picked = option === selected; const state = selected ? (correct ? styles.correct : picked ? styles.wrong : "") : ""; return <button className={state} disabled={!played || Boolean(selected)} onClick={() => choose(option)} key={option}>{option}</button>; })}</div>
    {selected ? <section className={styles.transcript}><small>{selected === current.bengali ? "সঠিক ✓" : "আবার শুনুন"}</small><strong>{current.japanese}</strong>{current.romaji ? <i>{current.romaji}</i> : null}<p>{current.bengali}</p><div><button onClick={() => play(.58)}>🔊 আবার শুনুন</button><button onClick={next}>{index + 1 === round.length ? "ফলাফল দেখুন ✓" : "পরের audio →"}</button></div></section> : null}
    <aside><b>Shadowing tip</b><span>Audio শেষ হওয়ার সঙ্গে সঙ্গে একই rhythm-এ Japanese sentenceটি দুইবার বলুন।</span></aside>
  </div>;
}
