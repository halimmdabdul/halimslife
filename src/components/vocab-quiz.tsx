"use client";

import { useEffect, useState } from "react";

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

function chooseQuestion(pairs: Pair[]) {
  const picked = pairs[Math.floor(Math.random() * pairs.length)];
  const distractors = shuffleArray(pairs.filter((pair) => pair.word !== picked.word)).slice(0, 3);
  const options = shuffleArray([picked.meaning, ...distractors.map((pair) => pair.meaning)]);
  return { picked, options };
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
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const pairs = parseWords(words);
      if (pairs.length < 4) { setQuestion(null); return; }
      const { picked, options: nextOptions } = chooseQuestion(pairs);
      setQuestion(picked);
      setOptions(nextOptions);
      setSelected(null);
      setScore({ correct: 0, total: 0 });
      speak(picked.word);
    });
    return () => window.cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  function answer(value: string) {
    if (!question || selected) return;
    setSelected(value);
    setScore((current) => ({ correct: current.correct + (value === question.meaning ? 1 : 0), total: current.total + 1 }));
  }

  function next() {
    const pairs = parseWords(words);
    const { picked, options: nextOptions } = chooseQuestion(pairs);
    setQuestion(picked);
    setOptions(nextOptions);
    setSelected(null);
    speak(picked.word);
  }

  if (!question) return null;

  return <div className={styles.vocabQuiz}>
    <div className={styles.vocabQuizScore}>Score: <b>{score.correct}</b>/{score.total}</div>
    <div className={styles.vocabQuizWord}>{question.word}<button className={styles.vocabQuizReplay} onClick={() => speak(question.word)} aria-label="আবার শুনুন">🔊</button></div>
    <div className={styles.vocabQuizOptions}>{options.map((option) => {
      const isAnswer = option === question.meaning;
      const isPicked = option === selected;
      const stateClass = selected ? (isAnswer ? styles.vocabQuizCorrect : isPicked ? styles.vocabQuizWrong : "") : "";
      return <button key={option} disabled={Boolean(selected)} className={stateClass} onClick={() => answer(option)}>{option}</button>;
    })}</div>
    {selected ? <div className={styles.vocabQuizFeedback}>
      <span className={selected === question.meaning ? styles.vocabQuizFeedbackCorrect : styles.vocabQuizFeedbackWrong}>{selected === question.meaning ? "✓ সঠিক!" : `✗ ভুল। সঠিক অর্থ: ${question.meaning}`}</span>
      <button className={styles.vocabQuizNext} onClick={next}>পরের শব্দ →</button>
    </div> : null}
  </div>;
}
