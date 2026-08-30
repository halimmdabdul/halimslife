"use client";

import { useEffect, useState } from "react";

import styles from "./grammar-quiz.module.css";

export type GrammarQuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
};

export function GrammarQuiz({ questions, resetKey }: { questions: GrammarQuizQuestion[]; resetKey: number }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setQuestionIndex(0);
      setAnswer(null);
      setCorrect(0);
      setFinished(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [resetKey]);

  if (!questions.length) return null;

  function restart() {
    setQuestionIndex(0);
    setAnswer(null);
    setCorrect(0);
    setFinished(false);
  }

  if (finished) return <div className={`${styles.grammarQuiz} ${styles.complete}`}>
    <span>SELF-TEST COMPLETE ✓</span>
    <strong>{correct}/{questions.length}</strong>
    <h3>Grammar self-test শেষ হয়েছে</h3>
    <p>{correct === questions.length ? "সব pattern ঠিক হয়েছে। চমৎকার!" : `${questions.length - correct}টি pattern-এর explanation আবার দেখে নিন।`}</p>
    <button onClick={restart}>আবার শুরু করুন →</button>
  </div>;

  const current = questions[questionIndex];
  const isLast = questionIndex + 1 === questions.length;

  function choose(option: string) {
    if (answer) return;
    setAnswer(option);
    if (option === current.correctAnswer) setCorrect((value) => value + 1);
  }

  function next() {
    if (isLast) { setFinished(true); return; }
    setQuestionIndex((value) => value + 1);
    setAnswer(null);
  }

  return <div className={styles.grammarQuiz}>
    <div className={styles.progress}><span style={{width:`${((questionIndex + 1) / questions.length) * 100}%`}}/></div>
    <header><span>Grammar self-test</span><b>প্রশ্ন {questionIndex + 1}/{questions.length}</b></header>
    <h3>{current.question}</h3>
    <div className={styles.options}>{current.options.map((option) => { const isCorrect = option === current.correctAnswer; const isPicked = option === answer; const state = answer ? (isCorrect ? styles.correct : isPicked ? styles.wrong : "") : ""; return <button className={state} disabled={Boolean(answer)} onClick={() => choose(option)} key={option}>{option}</button>; })}</div>
    {answer ? <div className={styles.feedback}><p className={answer === current.correctAnswer ? styles.correctText : styles.wrongText}>{answer === current.correctAnswer ? "সঠিক উত্তর ✓" : `ভুল। সঠিক: ${current.correctAnswer}`}{current.explanation ? <small>{current.explanation}</small> : null}</p><button onClick={next}>{isLast ? "ফলাফল দেখুন ✓" : "পরের প্রশ্ন →"}</button></div> : null}
  </div>;
}
