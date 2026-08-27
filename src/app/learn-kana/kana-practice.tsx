"use client";

import { useEffect, useMemo, useState } from "react";

import styles from "./learn-kana.module.css";

type ScriptName = "hiragana" | "katakana";
type Mode = "chart" | "quiz";
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

function poolForGroup(groupValue: string) {
  return groupValue === "সব" ? kana : kana.filter((item) => item.group === groupValue);
}

function shuffleArray<T>(items: T[]) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapWith = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapWith]] = [shuffled[swapWith], shuffled[index]];
  }
  return shuffled;
}

function chooseQuestion(pool: Kana[], currentScript: ScriptName, currentLearned: string[]) {
  const weighted = pool.flatMap((item) => (currentLearned.includes(`${currentScript}:${item.roman}`) ? [item] : [item, item, item]));
  const source = weighted.length ? weighted : pool;
  const picked = source[Math.floor(Math.random() * source.length)];
  const distractors = shuffleArray(kana.filter((item) => item.roman !== picked.roman)).slice(0, 3);
  const options = shuffleArray([picked.roman, ...distractors.map((item) => item.roman)]);
  return { picked, options };
}

export function KanaPractice() {
  const [script, setScript] = useState<ScriptName>("hiragana");
  const [group, setGroup] = useState("সব");
  const [mode, setMode] = useState<Mode>("chart");
  const [learned, setLearned] = useState<string[]>([]);
  const [question, setQuestion] = useState<Kana | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [sessionScore, setSessionScore] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try { setLearned(JSON.parse(localStorage.getItem("halim-kana-progress") || "[]")); } catch { setLearned([]); }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const visible = useMemo(() => poolForGroup(group), [group]);
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

  function markLearned(item: Kana, currentScript: ScriptName, currentLearned: string[]) {
    const key = `${currentScript}:${item.roman}`;
    if (currentLearned.includes(key)) return currentLearned;
    const next = [...currentLearned, key];
    localStorage.setItem("halim-kana-progress", JSON.stringify(next));
    return next;
  }

  function pickQuestion(pool: Kana[], currentScript: ScriptName, currentLearned: string[]) {
    const { picked, options: nextOptions } = chooseQuestion(pool, currentScript, currentLearned);
    setQuestion(picked);
    setOptions(nextOptions);
    setSelected(null);
    speak(picked[currentScript]);
  }

  function startQuiz() {
    setMode("quiz");
    setSessionScore({ correct: 0, total: 0 });
    pickQuestion(poolForGroup(group), script, learned);
  }

  function changeGroup(value: string) {
    setGroup(value);
    if (mode === "quiz") pickQuestion(poolForGroup(value), script, learned);
  }

  function answer(value: string) {
    if (!question || selected) return;
    setSelected(value);
    const isCorrect = value === question.roman;
    setSessionScore((current) => ({ correct: current.correct + (isCorrect ? 1 : 0), total: current.total + 1 }));
    if (isCorrect) setLearned((current) => markLearned(question, script, current));
  }

  function nextQuestion() {
    pickQuestion(poolForGroup(group), script, learned);
  }

  return <section className={styles.practice} id="practice">
    <div className={styles.practiceHeading}>
      <div><span>Interactive Kana {mode === "chart" ? "Chart" : "Quiz"}</span><h2>{mode === "chart" ? "দেখুন, শুনুন, তারপর মনে রাখুন।" : "Kana দেখে সঠিক sound বেছে নিন।"}</h2><p>{mode === "chart" ? "Character চাপলে উচ্চারণ শুনবেন। ✓ চাপলে শেখা হিসেবে progress save হবে।" : "সঠিক উত্তর দিলে সেটি automatically শেখা হিসেবে save হবে।"}</p></div>
      <div className={styles.progress}><strong>{completed}<small>/ 46</small></strong><span>{script === "hiragana" ? "Hiragana" : "Katakana"} complete</span><i><b style={{ width: `${(completed / 46) * 100}%` }} /></i></div>
    </div>
    <div className={styles.controls}>
      <div className={styles.modeTabs}><button className={mode === "chart" ? styles.active : ""} onClick={() => setMode("chart")}>📖 Chart</button><button className={mode === "quiz" ? styles.active : ""} onClick={() => { if (mode !== "quiz") startQuiz(); }}>📝 Quiz</button></div>
      <div className={styles.scriptTabs}><button className={script === "hiragana" ? styles.active : ""} onClick={() => setScript("hiragana")}>あ Hiragana</button><button className={script === "katakana" ? styles.active : ""} onClick={() => setScript("katakana")}>ア Katakana</button></div>
      <div className={styles.groupTabs}>{groups.map((value) => <button key={value} className={group === value ? styles.activeGroup : ""} onClick={() => changeGroup(value)}>{value}</button>)}</div>
    </div>
    {mode === "chart" ? <div className={styles.kanaGrid}>{visible.map((item) => {
      const value = item[script];
      const done = learned.includes(`${script}:${item.roman}`);
      return <article className={done ? styles.learned : ""} key={item.roman}>
        <button className={styles.soundButton} onClick={() => speak(value)} aria-label={`${value}, ${item.roman} উচ্চারণ শুনুন`}><b>{value}</b><span>{item.roman}</span><small>শুনুন ♪</small></button>
        <button className={styles.checkButton} onClick={() => toggle(item)} aria-label={done ? `${item.roman} progress থেকে বাদ দিন` : `${item.roman} শেখা হয়েছে`}>{done ? "✓" : "○"}</button>
      </article>;
    })}</div> : question ? <div className={styles.quizPanel}>
      <div className={styles.quizScore}>Session score: <b>{sessionScore.correct}</b>/{sessionScore.total}</div>
      <div className={styles.quizCard}>
        <b>{question[script]}</b>
        <button className={styles.quizReplay} onClick={() => speak(question[script])} aria-label="আবার শুনুন">🔊 আবার শুনুন</button>
      </div>
      <div className={styles.quizOptions}>{options.map((option) => {
        const isAnswer = option === question.roman;
        const isPicked = option === selected;
        const stateClass = selected ? (isAnswer ? styles.quizCorrect : isPicked ? styles.quizWrong : "") : "";
        return <button key={option} disabled={Boolean(selected)} className={stateClass} onClick={() => answer(option)}>{option}</button>;
      })}</div>
      <div className={styles.quizFeedback}>
        {selected ? <><span className={selected === question.roman ? styles.quizFeedbackCorrect : styles.quizFeedbackWrong}>{selected === question.roman ? "✓ সঠিক!" : `✗ ভুল। সঠিক উত্তর: ${question.roman}`}</span><button className={styles.quizNext} onClick={nextQuestion}>পরের প্রশ্ন →</button></> : null}
      </div>
    </div> : null}
  </section>;
}
