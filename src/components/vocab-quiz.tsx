"use client";

import { useEffect, useState } from "react";

import { renderFuriganaText } from "@/components/furigana";
import styles from "./vocab-quiz.module.css";

type Pair = { word: string; meaning: string };

function parseWords(items: string[]): Pair[] {
  return items.map((item) => {
    const [word, ...rest] = item.split("—");
    return { word: word.trim(), meaning: rest.join("—").trim() };
  });
}

function shuffleArray<T>(items: T[]) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapWith = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapWith]] = [shuffled[swapWith], shuffled[index]];
  }
  return shuffled;
}

function chooseOptions(picked: Pair, pairs: Pair[]) {
  const distractors = shuffleArray(pairs.filter((pair) => pair.word !== picked.word)).slice(0, 3);
  const options = shuffleArray([picked.meaning, ...distractors.map((pair) => pair.meaning)]);
  return options;
}

function speak(value: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(value);
  utterance.lang = "ja-JP";
  utterance.rate = 0.8;
  window.speechSynthesis.speak(utterance);
}

export function VocabQuiz({ words, resetKey }: { words: string[]; resetKey: number }) {
  const [question, setQuestion] = useState<Pair | null>(null);
  const [round, setRound] = useState<Pair[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [finished, setFinished] = useState(false);

  function startRound() {
    const pairs = parseWords(words);
    if (pairs.length < 4) { setQuestion(null); return; }
    const nextRound = shuffleArray(pairs).slice(0, Math.min(10, pairs.length));
    setRound(nextRound);
    setQuestionIndex(0);
    setQuestion(nextRound[0]);
    setOptions(chooseOptions(nextRound[0], pairs));
    setSelected(null);
    setScore({ correct: 0, total: 0 });
    setFinished(false);
    speak(nextRound[0].word);
  }

  useEffect(() => {
    const frame = window.requestAnimationFrame(startRound);
    return () => window.cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  function answer(value: string) {
    if (!question || selected) return;
    setSelected(value);
    setScore((current) => ({ correct: current.correct + (value === question.meaning ? 1 : 0), total: current.total + 1 }));
  }

  function next() {
    const nextIndex = questionIndex + 1;
    if (nextIndex >= round.length) {
      setFinished(true);
      return;
    }
    const pairs = parseWords(words);
    const picked = round[nextIndex];
    setQuestionIndex(nextIndex);
    setQuestion(picked);
    setOptions(chooseOptions(picked, pairs));
    setSelected(null);
    speak(picked.word);
  }

  if (!question) return null;

  if (finished) return <div className={`${styles.vocabQuiz} ${styles.vocabQuizComplete}`}>
    <span>ROUND COMPLETE ✓</span>
    <strong>{score.correct}/{round.length}</strong>
    <h3>শব্দ চেনার Quiz শেষ হয়েছে</h3>
    <p>{score.correct === round.length ? "দারুণ—সব উত্তর সঠিক!" : `${round.length - score.correct}টি ভুল শব্দ আবার Vocabulary card থেকে দেখে নিন।`}</p>
    <button className={styles.vocabQuizNext} onClick={startRound}>আবার ১০টি শব্দ →</button>
  </div>;

  return <div className={styles.vocabQuiz}>
    <div className={styles.vocabQuizProgress}><span style={{width:`${((questionIndex + 1) / round.length) * 100}%`}}/></div>
    <div className={styles.vocabQuizScore}>প্রশ্ন {questionIndex + 1}/{round.length} · Score: <b>{score.correct}</b>/{score.total}</div>
    <div className={styles.vocabQuizWord}>{renderFuriganaText(question.word)}<button className={styles.vocabQuizReplay} onClick={() => speak(question.word)} aria-label="আবার শুনুন">🔊</button></div>
    <div className={styles.vocabQuizOptions}>{options.map((option) => {
      const isAnswer = option === question.meaning;
      const isPicked = option === selected;
      const stateClass = selected ? (isAnswer ? styles.vocabQuizCorrect : isPicked ? styles.vocabQuizWrong : "") : "";
      return <button key={option} disabled={Boolean(selected)} className={stateClass} onClick={() => answer(option)}>{option}</button>;
    })}</div>
    {selected ? <div className={styles.vocabQuizFeedback}>
      <span className={selected === question.meaning ? styles.vocabQuizFeedbackCorrect : styles.vocabQuizFeedbackWrong}>{selected === question.meaning ? "✓ সঠিক!" : `✗ ভুল। সঠিক অর্থ: ${question.meaning}`}</span>
      <button className={styles.vocabQuizNext} onClick={next}>{questionIndex + 1 === round.length ? "ফলাফল দেখুন ✓" : "পরের শব্দ →"}</button>
    </div> : null}
  </div>;
}
