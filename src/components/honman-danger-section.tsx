"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { DangerPredictionProblem } from "@/lib/honman-danger-problems";

import feedbackStyles from "./honman-danger-feedback.module.css";
import lockStyles from "./honman-exam-lock.module.css";
import styles from "./honman-danger-section.module.css";

type Answer = "true" | "false";

export function HonmanDangerSection({ problems, testNumber = 1 }: { problems: DangerPredictionProblem[]; testNumber?: number }) {
  const storageKey = `honman-danger-problems-${testNumber}-answers`;
  const sessionKey = `honman-test-${testNumber}-session-v3`;
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [timeExpired, setTimeExpired] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const session = window.localStorage.getItem(sessionKey);
        const saved = window.localStorage.getItem(storageKey);
        if (session && saved) setAnswers(JSON.parse(saved));
      } catch { /* localStorage can be unavailable */ }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [sessionKey, storageKey]);

  useEffect(() => {
    const checkDeadline = () => {
      try {
        const savedSession = window.localStorage.getItem(sessionKey);
        if (!savedSession) {
          setExamStarted(false);
          return;
        }
        const session: { deadline: number; finished?: boolean } = JSON.parse(savedSession);
        setExamStarted(true);
        setTimeExpired(session.deadline <= Date.now());
        setExamFinished(Boolean(session.finished));
      } catch { /* localStorage can be unavailable */ }
    };
    checkDeadline();
    const timer = window.setInterval(checkDeadline, 1000);
    const handleStart = () => {
      setAnswers({});
      setExamStarted(true);
      setTimeExpired(false);
      setExamFinished(false);
    };
    window.addEventListener("honman-exam-started", handleStart);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("honman-exam-started", handleStart);
    };
  }, [sessionKey]);

  const total = problems.reduce((sum, problem) => sum + problem.statements.length, 0);
  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / total) * 100);
  const answersLocked = !examStarted || examFinished || timeExpired;

  function choose(key: string, value: Answer) {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
  }

  function reset() {
    setAnswers({});
    window.localStorage.removeItem(storageKey);
  }

  return <section className={styles.section} aria-labelledby="danger-title">
    <header className={styles.header}>
      <div><span>SCENARIO PRACTICE</span><h2 id="danger-title">Danger Prediction Problems <b>{String(testNumber).padStart(2, "0")}</b></h2><p>Road scene দেখে প্রতিটি driving decision True অথবা False হিসেবে evaluate করুন।</p></div>
      <div className={styles.progress}><strong>{answered}/{total}</strong><span>decisions answered</span><i><b style={{ width: `${progress}%` }}/></i></div>
    </header>

    <div className={styles.problems}>{problems.map((problem) => <article className={styles.problem} key={problem.id}>
      <div className={styles.problemHead}><span>Problem <b>{problem.id}</b></span><small>{problem.speed}</small><h3>{problem.prompt}</h3></div>
      <div className={styles.problemBody}>
        <figure className={testNumber === 2 || testNumber === 3 ? styles.sourceFigure : undefined}><Image src={problem.image.src} alt={problem.image.alt} fill sizes="(max-width: 850px) 100vw, 52vw"/></figure>
        <div className={feedbackStyles.decisionPanel}><ol>{problem.statements.map((statement, index) => {
          const key = `${problem.id}-${index + 1}`;
          const selected = answers[key];
          const correctAnswer = problem.answers[index];
          return <li className={answers[key] ? styles.chosen : ""} key={key}>
            <span>{index + 1}</span><p>{statement}</p>
            <div aria-label={`Answer for problem ${problem.id}, statement ${index + 1}`}>
              <button disabled={answersLocked} aria-pressed={selected === "true"} className={`${selected === "true" ? `${styles.active} ${correctAnswer === "true" ? feedbackStyles.correctChoice : feedbackStyles.wrongChoice}` : ""} ${answersLocked ? lockStyles.locked : ""}`} onClick={() => choose(key,"true")}>○ True</button>
              <button disabled={answersLocked} aria-pressed={selected === "false"} className={`${selected === "false" ? `${styles.active} ${correctAnswer === "false" ? feedbackStyles.correctChoice : feedbackStyles.wrongChoice}` : ""} ${answersLocked ? lockStyles.locked : ""}`} onClick={() => choose(key,"false")}>× False</button>
            </div>
            {selected ? <em className={selected === correctAnswer ? feedbackStyles.correctLabel : feedbackStyles.wrongLabel}>{selected === correctAnswer ? "✓ Correct" : `× Incorrect · Answer: ${correctAnswer.toUpperCase()}`}</em> : null}
          </li>;
        })}</ol>{problem.statements.every((_, index) => answers[`${problem.id}-${index + 1}`]) ? <aside className={feedbackStyles.explanation}><strong>Official explanation</strong><p>{problem.explanation}</p></aside> : null}</div>
      </div>
    </article>)}</div>

    <footer><p>{!examStarted ? <><b>Exam not started:</b> উপরের Start Full Exam button চাপলে এই section unlock হবে।</> : examFinished ? <><b>Exam submitted:</b> নতুন attempt শুরু না করা পর্যন্ত answers locked থাকবে।</> : timeExpired ? <><b>Time is up:</b> নতুন ৫০ মিনিটের attempt শুরু না করা পর্যন্ত answers locked থাকবে।</> : <><b>Official answer sheet:</b> আপনার result এবং choices এই browser-এ save থাকবে।</>}</p><button className={answersLocked ? lockStyles.locked : ""} disabled={answersLocked} onClick={reset}>Scenario answers reset করুন</button></footer>
  </section>;
}
