"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { HonmanOfficialAnswer } from "@/lib/honman-official-answers";
import type { HonmanQuestion } from "@/lib/honman-tests";

import feedbackStyles from "./honman-answer-feedback.module.css";
import styles from "./honman-test-runner.module.css";

type Answer = "true" | "false";

export function HonmanTestRunner({ questions, answerKey }: { questions: HonmanQuestion[]; answerKey: Record<number, HonmanOfficialAnswer> }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem("honman-test-1-answers");
        if (saved) setAnswers(JSON.parse(saved));
      } catch { /* localStorage can be unavailable */ }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const answered = Object.keys(answers).length;
  const question = questions[current];
  const progress = Math.round((answered / questions.length) * 100);
  const unanswered = useMemo(() => questions.filter((item) => !answers[item.id]), [answers, questions]);
  const correct = useMemo(() => questions.filter((item) => answers[item.id] === answerKey[item.id]?.answer).length, [answerKey, answers, questions]);
  const official = answerKey[question.id];
  const selectedAnswer = answers[question.id];

  function choose(value: Answer) {
    const next = { ...answers, [question.id]: value };
    setAnswers(next);
    window.localStorage.setItem("honman-test-1-answers", JSON.stringify(next));
  }

  function reset() {
    setAnswers({});
    setCurrent(0);
    setFinished(false);
    window.localStorage.removeItem("honman-test-1-answers");
  }

  if (finished) return <section className={styles.result} id="selected-test"><span>Test 1 complete</span><h2>{correct}/{questions.length} correct</h2><p>{answered}/{questions.length} questions answered। আপনার selected answers ও progress এই browser-এ সংরক্ষিত হয়েছে।</p>{unanswered.length ? <button onClick={() => { setFinished(false); setCurrent(questions.indexOf(unanswered[0])); }}>Unanswered question দেখুন</button> : null}<button onClick={reset}>আবার শুরু করুন</button></section>;

  return <section className={styles.runner} id="selected-test">
    <header><div><span>HONMAN TEST 1</span><h2>True or False</h2></div><div className={styles.progress}><span>{answered}/{questions.length} answered</span><i><b style={{ width: `${progress}%` }}/></i></div></header>
    <div className={styles.layout}>
      <nav aria-label="Test 1 questions">{questions.map((item,index) => <button className={`${current === index ? styles.current : ""} ${answers[item.id] ? styles.answered : ""} ${answers[item.id] && answers[item.id] !== answerKey[item.id]?.answer ? feedbackStyles.incorrectNav : ""}`} onClick={() => setCurrent(index)} key={item.id}>{String(item.id).padStart(2,"0")}</button>)}</nav>
      <article className={styles.questionCard}>
        <div className={styles.questionNumber}><span>Question</span><b>{String(question.id).padStart(2,"0")}</b></div>
        <h3>{question.text}</h3>
        {question.figure ? <figure><Image src={question.figure.src} alt={question.figure.alt} width={760} height={470} priority={question.id === 5}/><figcaption>{question.figure.alt}</figcaption></figure> : null}
        <div className={styles.answers}><button className={selectedAnswer === "true" ? `${styles.selectedAnswer} ${official?.answer === "true" ? feedbackStyles.correctAnswer : feedbackStyles.wrongAnswer}` : ""} onClick={() => choose("true")}><b>○</b><span>TRUE</span><small>Statement is correct</small></button><button className={selectedAnswer === "false" ? `${styles.selectedAnswer} ${official?.answer === "false" ? feedbackStyles.correctAnswer : feedbackStyles.wrongAnswer}` : ""} onClick={() => choose("false")}><b>×</b><span>FALSE</span><small>Statement is incorrect</small></button></div>
        {selectedAnswer && official ? <aside className={`${feedbackStyles.explanation} ${selectedAnswer === official.answer ? feedbackStyles.correct : feedbackStyles.incorrect}`} aria-live="polite"><strong>{selectedAnswer === official.answer ? "✓ Correct answer" : "× Incorrect answer"}</strong><span>Official answer: <b>{official.answer.toUpperCase()}</b></span><p>{official.explanation}</p></aside> : null}
        <footer><button disabled={current === 0} onClick={() => setCurrent((value) => Math.max(0,value - 1))}>← Previous</button>{current < questions.length - 1 ? <button onClick={() => setCurrent((value) => Math.min(questions.length - 1,value + 1))}>Next question →</button> : <button onClick={() => setFinished(true)}>Finish test →</button>}</footer>
      </article>
    </div>
  </section>;
}
