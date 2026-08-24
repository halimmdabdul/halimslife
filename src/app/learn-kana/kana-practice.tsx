"use client";

import { useEffect, useMemo, useState } from "react";

import styles from "./learn-kana.module.css";

type ScriptName = "hiragana" | "katakana";
type Kana = { roman: string; hiragana: string; katakana: string; group: string };

const kana: Kana[] = [
  ["a","あ","ア","স্বর"],["i","い","イ","স্বর"],["u","う","ウ","স্বর"],["e","え","エ","স্বর"],["o","お","オ","স্বর"],
  ["ka","か","カ","K"],["ki","き","キ","K"],["ku","く","ク","K"],["ke","け","ケ","K"],["ko","こ","コ","K"],
  ["sa","さ","サ","S"],["shi","し","シ","S"],["su","す","ス","S"],["se","せ","セ","S"],["so","そ","ソ","S"],
  ["ta","た","タ","T"],["chi","ち","チ","T"],["tsu","つ","ツ","T"],["te","て","テ","T"],["to","と","ト","T"],
  ["na","な","ナ","N"],["ni","に","ニ","N"],["nu","ぬ","ヌ","N"],["ne","ね","ネ","N"],["no","の","ノ","N"],
  ["ha","は","ハ","H"],["hi","ひ","ヒ","H"],["fu","ふ","フ","H"],["he","へ","ヘ","H"],["ho","ほ","ホ","H"],
  ["ma","ま","マ","M"],["mi","み","ミ","M"],["mu","む","ム","M"],["me","め","メ","M"],["mo","も","モ","M"],
  ["ya","や","ヤ","Y"],["yu","ゆ","ユ","Y"],["yo","よ","ヨ","Y"],
  ["ra","ら","ラ","R"],["ri","り","リ","R"],["ru","る","ル","R"],["re","れ","レ","R"],["ro","ろ","ロ","R"],
  ["wa","わ","ワ","W"],["wo / o","を","ヲ","W"],["n","ん","ン","N শেষ"],
].map(([roman, hiragana, katakana, group]) => ({ roman, hiragana, katakana, group }));

const groups = ["সব", "স্বর", "K", "S", "T", "N", "H", "M", "Y", "R", "W", "N শেষ"];

export function KanaPractice() {
  const [script, setScript] = useState<ScriptName>("hiragana");
  const [group, setGroup] = useState("সব");
  const [learned, setLearned] = useState<string[]>([]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try { setLearned(JSON.parse(localStorage.getItem("halim-kana-progress") || "[]")); } catch { setLearned([]); }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const visible = useMemo(() => group === "সব" ? kana : kana.filter((item) => item.group === group), [group]);
  const completed = kana.filter((item) => learned.includes(`${script}:${item.roman}`)).length;

  function speak(value: string) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(value);
    utterance.lang = "ja-JP";
    utterance.rate = 0.72;
    window.speechSynthesis.speak(utterance);
  }

  function toggle(item: Kana) {
    const key = `${script}:${item.roman}`;
    const next = learned.includes(key) ? learned.filter((value) => value !== key) : [...learned, key];
    setLearned(next);
    localStorage.setItem("halim-kana-progress", JSON.stringify(next));
  }

  return <section className={styles.practice} id="practice">
    <div className={styles.practiceHeading}>
      <div><span>Interactive Kana Chart</span><h2>দেখুন, শুনুন, তারপর মনে রাখুন।</h2><p>Character চাপলে উচ্চারণ শুনবেন। ✓ চাপলে শেখা হিসেবে progress save হবে।</p></div>
      <div className={styles.progress}><strong>{completed}<small>/ 46</small></strong><span>{script === "hiragana" ? "Hiragana" : "Katakana"} complete</span><i><b style={{ width: `${(completed / 46) * 100}%` }} /></i></div>
    </div>
    <div className={styles.controls}>
      <div className={styles.scriptTabs}><button className={script === "hiragana" ? styles.active : ""} onClick={() => setScript("hiragana")}>あ Hiragana</button><button className={script === "katakana" ? styles.active : ""} onClick={() => setScript("katakana")}>ア Katakana</button></div>
      <div className={styles.groupTabs}>{groups.map((value) => <button key={value} className={group === value ? styles.activeGroup : ""} onClick={() => setGroup(value)}>{value}</button>)}</div>
    </div>
    <div className={styles.kanaGrid}>{visible.map((item) => {
      const value = item[script];
      const done = learned.includes(`${script}:${item.roman}`);
      return <article className={done ? styles.learned : ""} key={item.roman}>
        <button className={styles.soundButton} onClick={() => speak(value)} aria-label={`${value}, ${item.roman} উচ্চারণ শুনুন`}><b>{value}</b><span>{item.roman}</span><small>শুনুন ♪</small></button>
        <button className={styles.checkButton} onClick={() => toggle(item)} aria-label={done ? `${item.roman} progress থেকে বাদ দিন` : `${item.roman} শেখা হয়েছে`}>{done ? "✓" : "○"}</button>
      </article>;
    })}</div>
  </section>;
}
