"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { HonmanOfficialAnswer } from "@/lib/honman-official-answers";
import type { HonmanQuestion } from "@/lib/honman-tests";

import feedbackStyles from "./honman-answer-feedback.module.css";
import startStyles from "./honman-exam-start.module.css";
import timerStyles from "./honman-exam-timer.module.css";
import gridStyles from "./honman-question-grid.module.css";
import styles from "./honman-test-runner.module.css";

type Answer = "true" | "false";
type ExamSession = { order: number[]; deadline: number; finished?: boolean };

const answerStorageKey = "honman-test-1-answers";
const sessionStorageKey = "honman-test-1-session-v3";
const examDurationMs = 50 * 60 * 1000;

function shuffleQuestions(questions: HonmanQuestion[]) {
  const shuffled = [...questions];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapWith = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapWith]] = [shuffled[swapWith], shuffled[index]];
  }
  return shuffled;
}

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function HonmanTestRunner({ questions, answerKey }: { questions: HonmanQuestion[]; answerKey: Record<number, HonmanOfficialAnswer> }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [orderedQuestions, setOrderedQuestions] = useState(questions);
  const [deadline, setDeadline] = useState<number | null>(null);
  const [remainingSeconds, setRemainingSeconds] = useState(examDurationMs / 1000);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const savedSession = window.localStorage.getItem(sessionStorageKey);
        if (savedSession) {
          const session: ExamSession = JSON.parse(savedSession);
          const questionMap = new Map(questions.map((question) => [question.id, question]));
          const restored = session.order.map((id) => questionMap.get(id)).filter((question): question is HonmanQuestion => Boolean(question));
          if (restored.length === questions.length) setOrderedQuestions(restored);
          setDeadline(session.deadline);
          const seconds = Math.max(0, Math.ceil((session.deadline - Date.now()) / 1000));
          setRemainingSeconds(seconds);
          if (session.finished || seconds === 0) setFinished(true);
          const savedAnswers = window.localStorage.getItem(answerStorageKey);
          if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
          setStarted(true);
        } else {
          window.localStorage.removeItem(answerStorageKey);
          window.localStorage.removeItem("honman-danger-problems-1-answers");
        }
      } catch { /* localStorage can be unavailable */ }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [questions]);

  useEffect(() => {
    if (!started || !deadline || finished || reviewMode) return;
    const updateTimer = () => {
      const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setRemainingSeconds(seconds);
      if (seconds === 0) {
        setFinished(true);
        window.localStorage.setItem(sessionStorageKey, JSON.stringify({ order: orderedQuestions.map((question) => question.id), deadline, finished: true } satisfies ExamSession));
      }
    };
    updateTimer();
    const timer = window.setInterval(updateTimer, 1000);
    return () => window.clearInterval(timer);
  }, [deadline, finished, orderedQuestions, reviewMode, started]);

  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / questions.length) * 100);
  const incorrectQuestions = useMemo(() => orderedQuestions.filter((item) => answers[item.id] && answers[item.id] !== answerKey[item.id]?.answer), [answerKey, answers, orderedQuestions]);
  const visibleQuestions = reviewMode ? incorrectQuestions : orderedQuestions;
  const question = visibleQuestions[current];
  const displayQuestionNumber = reviewMode ? orderedQuestions.indexOf(question) + 1 : current + 1;
  const correct = useMemo(() => questions.filter((item) => answers[item.id] === answerKey[item.id]?.answer).length, [answerKey, answers, questions]);
  const official = answerKey[question.id];
  const selectedAnswer = answers[question.id];

  function choose(value: Answer) {
    if (reviewMode) return;
    const next = { ...answers, [question.id]: value };
    setAnswers(next);
    window.localStorage.setItem(answerStorageKey, JSON.stringify(next));
  }

  function startExam() {
    setAnswers({});
    setCurrent(0);
    setFinished(false);
    setReviewMode(false);
    setStarted(true);
    const shuffled = shuffleQuestions(questions);
    const nextDeadline = Date.now() + examDurationMs;
    setOrderedQuestions(shuffled);
    setDeadline(nextDeadline);
    setRemainingSeconds(examDurationMs / 1000);
    window.localStorage.removeItem(answerStorageKey);
    window.localStorage.removeItem("honman-danger-problems-1-answers");
    window.localStorage.setItem(sessionStorageKey, JSON.stringify({ order: shuffled.map((question) => question.id), deadline: nextDeadline, finished: false } satisfies ExamSession));
    window.dispatchEvent(new CustomEvent("honman-exam-started"));
  }

  function finishExam() {
    setFinished(true);
    window.localStorage.setItem(sessionStorageKey, JSON.stringify({ order: orderedQuestions.map((question) => question.id), deadline: deadline ?? Date.now(), finished: true } satisfies ExamSession));
  }

  function reviewIncorrect() {
    if (!incorrectQuestions.length) return;
    setReviewMode(true);
    setFinished(false);
    setCurrent(0);
  }

  if (!started) return <section className={startStyles.start} id="selected-test"><span>HONMAN TEST 1 · FULL EXAM</span><h2>আপনি প্রস্তুত হলে exam শুরু করুন</h2><p>Start button চাপার পর প্রশ্নগুলো random order-এ সাজবে এবং ৫০ মিনিটের countdown শুরু হবে। Refresh করলে একই attempt resume হবে।</p><div><article><b>50</b><small>minutes</small></article><article><b>{questions.length}</b><small>questions</small></article><article><b>Random</b><small>question order</small></article></div><button onClick={startExam}>Start Full Exam →</button></section>;

  if (finished) return <section className={styles.result} id="selected-test"><span>{remainingSeconds === 0 ? "Time is up" : "Test 1 complete"}</span><h2>{correct}/{questions.length} correct</h2><p>{answered}/{questions.length} questions answered · {incorrectQuestions.length} wrong। এই result refresh করার পরও থাকবে; নতুন attempt শুরু করলে নতুন ৫০ মিনিট ও shuffled questions পাবেন।</p>{incorrectQuestions.length ? <button onClick={reviewIncorrect}>ভুল answers review করুন ({incorrectQuestions.length})</button> : null}<button onClick={startExam}>নতুন shuffled exam শুরু করুন</button></section>;

  return <section className={styles.runner} id="selected-test">
    <header><div><span>HONMAN TEST 1 · {reviewMode ? "WRONG ANSWER REVIEW" : "FULL EXAM"}</span><h2>{reviewMode ? `${incorrectQuestions.length} answers to review` : "True or False"}</h2></div><div className={timerStyles.examStatus}><div className={!reviewMode && remainingSeconds <= 300 ? timerStyles.urgent : ""}><span>{reviewMode ? "REVIEW MODE" : "TIME LEFT"}</span><strong>{reviewMode ? "PAUSED" : formatTime(remainingSeconds)}</strong></div><div className={styles.progress}><span>{answered}/{questions.length} answered</span><i><b style={{ width: `${progress}%` }}/></i></div></div></header>
    <div className={`${styles.layout} ${gridStyles.singleColumn}`}>
      <article className={styles.questionCard}>
        <div className={styles.questionNumber}><span>Question</span><b>{String(displayQuestionNumber).padStart(2,"0")}</b></div>
        <h3>{question.text}</h3>
        {question.figure ? <figure><Image src={question.figure.src} alt={question.figure.alt} width={760} height={470} priority={question.id === 5}/><figcaption>{question.figure.alt}</figcaption></figure> : null}
        <div className={styles.answers}><button disabled={reviewMode} className={selectedAnswer === "true" ? `${styles.selectedAnswer} ${official?.answer === "true" ? feedbackStyles.correctAnswer : feedbackStyles.wrongAnswer}` : ""} onClick={() => choose("true")}><b>○</b><span>TRUE</span><small>Statement is correct</small></button><button disabled={reviewMode} className={selectedAnswer === "false" ? `${styles.selectedAnswer} ${official?.answer === "false" ? feedbackStyles.correctAnswer : feedbackStyles.wrongAnswer}` : ""} onClick={() => choose("false")}><b>×</b><span>FALSE</span><small>Statement is incorrect</small></button></div>
        {selectedAnswer && official ? <aside className={`${feedbackStyles.explanation} ${selectedAnswer === official.answer ? feedbackStyles.correct : feedbackStyles.incorrect}`} aria-live="polite"><strong>{selectedAnswer === official.answer ? "✓ Correct answer" : "× Incorrect answer"}</strong><span>Official answer: <b>{official.answer.toUpperCase()}</b></span><p>{official.explanation}</p></aside> : null}
        <footer><button disabled={current === 0} onClick={() => setCurrent((value) => Math.max(0,value - 1))}>← Previous</button>{reviewMode ? <>{current < visibleQuestions.length - 1 ? <button onClick={() => setCurrent((value) => Math.min(visibleQuestions.length - 1,value + 1))}>Next wrong answer →</button> : null}<button onClick={() => { setReviewMode(false); setFinished(true); }}>← Back to result</button></> : current < visibleQuestions.length - 1 ? <button onClick={() => setCurrent((value) => Math.min(visibleQuestions.length - 1,value + 1))}>Next question →</button> : <button onClick={finishExam}>Finish test →</button>}</footer>
      </article>
    </div>
  </section>;
}
