"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { DangerPredictionProblem } from "@/lib/honman-danger-problems";

import feedbackStyles from "./honman-danger-feedback.module.css";
import styles from "./honman-danger-section.module.css";

type Answer = "true" | "false";
const storageKey = "honman-danger-problems-1-answers";

export function HonmanDangerSection({ problems }: { problems: DangerPredictionProblem[] }) {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved) setAnswers(JSON.parse(saved));
      } catch { /* localStorage can be unavailable */ }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const total = problems.reduce((sum, problem) => sum + problem.statements.length, 0);
  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / total) * 100);

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
      <div><span>SCENARIO PRACTICE</span><h2 id="danger-title">Danger Prediction Problems <b>01</b></h2><p>Road scene দেখে প্রতিটি driving decision True অথবা False হিসেবে evaluate করুন।</p></div>
      <div className={styles.progress}><strong>{answered}/{total}</strong><span>decisions answered</span><i><b style={{ width: `${progress}%` }}/></i></div>
    </header>

    <div className={styles.problems}>{problems.map((problem) => <article className={styles.problem} key={problem.id}>
      <div className={styles.problemHead}><span>Problem <b>{problem.id}</b></span><small>{problem.speed}</small><h3>{problem.prompt}</h3></div>
      <div className={styles.problemBody}>
        <figure><Image src={problem.image.src} alt={problem.image.alt} fill sizes="(max-width: 850px) 100vw, 52vw"/></figure>
        <div className={feedbackStyles.decisionPanel}><ol>{problem.statements.map((statement, index) => {
          const key = `${problem.id}-${index + 1}`;
          const selected = answers[key];
          const correctAnswer = problem.answers[index];
          return <li className={answers[key] ? styles.chosen : ""} key={key}>
            <span>{index + 1}</span><p>{statement}</p>
            <div aria-label={`Answer for problem ${problem.id}, statement ${index + 1}`}>
              <button aria-pressed={selected === "true"} className={selected === "true" ? `${styles.active} ${correctAnswer === "true" ? feedbackStyles.correctChoice : feedbackStyles.wrongChoice}` : ""} onClick={() => choose(key,"true")}>○ True</button>
              <button aria-pressed={selected === "false"} className={selected === "false" ? `${styles.active} ${correctAnswer === "false" ? feedbackStyles.correctChoice : feedbackStyles.wrongChoice}` : ""} onClick={() => choose(key,"false")}>× False</button>
            </div>
            {selected ? <em className={selected === correctAnswer ? feedbackStyles.correctLabel : feedbackStyles.wrongLabel}>{selected === correctAnswer ? "✓ Correct" : `× Incorrect · Answer: ${correctAnswer.toUpperCase()}`}</em> : null}
          </li>;
        })}</ol>{problem.statements.every((_, index) => answers[`${problem.id}-${index + 1}`]) ? <aside className={feedbackStyles.explanation}><strong>Official explanation</strong><p>{problem.explanation}</p></aside> : null}</div>
      </div>
    </article>)}</div>

    <footer><p><b>Official answer sheet:</b> আপনার result এবং choices এই browser-এ save থাকবে।</p><button onClick={reset}>Scenario answers reset করুন</button></footer>
  </section>;
}
