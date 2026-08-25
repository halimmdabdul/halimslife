"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { HonmanOfficialAnswer } from "@/lib/honman-official-answers";
import type { HonmanQuestion } from "@/lib/honman-tests";

import feedbackStyles from "./honman-answer-feedback.module.css";
import startStyles from "./honman-exam-start.module.css";
import timerStyles from "./honman-exam-timer.module.css";
import paperStyles from "./honman-paper-exam.module.css";
import styles from "./honman-test-runner.module.css";

type Answer = "true" | "false";
type ExamSession = { order: number[]; deadline: number };

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
          if (seconds === 0) setFinished(true);
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
      if (seconds === 0) setFinished(true);
    };
    updateTimer();
    const timer = window.setInterval(updateTimer, 1000);
    return () => window.clearInterval(timer);
  }, [deadline, finished, reviewMode, started]);

  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / questions.length) * 100);
  const unanswered = useMemo(() => orderedQuestions.filter((item) => !answers[item.id]), [answers, orderedQuestions]);
  const incorrectQuestions = useMemo(() => orderedQuestions.filter((item) => answers[item.id] && answers[item.id] !== answerKey[item.id]?.answer), [answerKey, answers, orderedQuestions]);
  const visibleQuestions = reviewMode ? incorrectQuestions : orderedQuestions;
  const question = visibleQuestions[current];
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
    window.localStorage.setItem(sessionStorageKey, JSON.stringify({ order: shuffled.map((question) => question.id), deadline: nextDeadline } satisfies ExamSession));
    window.dispatchEvent(new CustomEvent("honman-exam-started"));
  }

  function reviewIncorrect() {
    if (!incorrectQuestions.length) return;
    setReviewMode(true);
    setFinished(false);
    setCurrent(0);
  }

  if (!started) return <section className={`${startStyles.start} ${paperStyles.cover}`} id="selected-test"><div className={paperStyles.coverLabel}>DRIVER&apos;S LICENSE WRITTEN EXAMINATION · TEST 1</div><span>HONMAN FULL EXAM</span><h2>আপনি প্রস্তুত হলে exam শুরু করুন</h2><p>Start button চাপার পর প্রশ্নগুলো random order-এ সাজবে এবং ৫০ মিনিটের countdown শুরু হবে। Refresh করলে একই attempt resume হবে।</p><div><article><b>50</b><small>minutes</small></article><article><b>{questions.length}</b><small>questions</small></article><article><b>T / F</b><small>answer format</small></article></div><div className={paperStyles.candidate}><span>Candidate name</span><i/><span>Date</span><i/></div><button onClick={startExam}>Start Full Exam →</button></section>;

  if (finished) return <section className={styles.result} id="selected-test"><span>{remainingSeconds === 0 ? "Time is up" : "Test 1 complete"}</span><h2>{correct}/{questions.length} correct</h2><p>{answered}/{questions.length} questions answered · {incorrectQuestions.length} wrong। নতুন attempt-এ questions আবার shuffle হবে এবং নতুন ৫০ মিনিট শুরু হবে।</p>{remainingSeconds > 0 && unanswered.length ? <button onClick={() => { setFinished(false); setCurrent(orderedQuestions.indexOf(unanswered[0])); }}>Unanswered question দেখুন</button> : null}{incorrectQuestions.length ? <button onClick={reviewIncorrect}>ভুল answers review করুন ({incorrectQuestions.length})</button> : null}<button onClick={startExam}>নতুন shuffled exam শুরু করুন</button></section>;

  return <section className={`${styles.runner} ${paperStyles.paper}`} id="selected-test">
    <header className={paperStyles.paperHeader}><div className={paperStyles.examTitle}><span>{reviewMode ? "ANSWER REVIEW SHEET" : "DRIVER'S LICENSE WRITTEN EXAMINATION"}</span><h2>{reviewMode ? `${incorrectQuestions.length} wrong answers` : "Honman Test 1"}</h2><small>{reviewMode ? "Official answers and explanations" : `True / False · ${questions.length} questions · 50 minutes`}</small></div><div className={timerStyles.examStatus}><div className={!reviewMode && remainingSeconds <= 300 ? timerStyles.urgent : ""}><span>{reviewMode ? "REVIEW MODE" : "TIME LEFT"}</span><strong>{reviewMode ? "PAUSED" : formatTime(remainingSeconds)}</strong></div><div className={styles.progress}><span>{answered}/{questions.length} answered</span><i><b style={{ width: `${progress}%` }}/></i></div></div></header>
    <div className={`${styles.layout} ${paperStyles.paperLayout}`}>
      <nav className={paperStyles.answerSheet} aria-label={reviewMode ? "Incorrect answers to review" : "Test 1 questions"}>{visibleQuestions.map((item,index) => <button className={`${current === index ? styles.current : ""} ${answers[item.id] ? styles.answered : ""} ${reviewMode && answers[item.id] && answers[item.id] !== answerKey[item.id]?.answer ? feedbackStyles.incorrectNav : ""}`} onClick={() => setCurrent(index)} key={item.id}>{String(item.id).padStart(2,"0")}</button>)}</nav>
      <article className={`${styles.questionCard} ${paperStyles.questionPaper}`}>
        <div className={`${styles.questionNumber} ${paperStyles.questionNumber}`}><span>Question {current + 1} of {visibleQuestions.length}</span><b>{String(question.id).padStart(2,"0")}</b></div>
        {!reviewMode ? <p className={paperStyles.instruction}>Read the statement carefully and mark only one answer.</p> : null}
        <h3>{question.text}</h3>
        {question.figure ? <figure><Image src={question.figure.src} alt={question.figure.alt} width={760} height={470} priority={question.id === 5}/><figcaption>{question.figure.alt}</figcaption></figure> : null}
        <div className={`${styles.answers} ${paperStyles.paperAnswers}`}><button disabled={reviewMode} className={selectedAnswer === "true" ? `${styles.selectedAnswer} ${paperStyles.marked} ${reviewMode ? (official?.answer === "true" ? feedbackStyles.correctAnswer : feedbackStyles.wrongAnswer) : ""}` : ""} onClick={() => choose("true")}><b>T</b><span>TRUE</span><small>Statement is correct</small></button><button disabled={reviewMode} className={selectedAnswer === "false" ? `${styles.selectedAnswer} ${paperStyles.marked} ${reviewMode ? (official?.answer === "false" ? feedbackStyles.correctAnswer : feedbackStyles.wrongAnswer) : ""}` : ""} onClick={() => choose("false")}><b>F</b><span>FALSE</span><small>Statement is incorrect</small></button></div>
        {reviewMode && selectedAnswer && official ? <aside className={`${feedbackStyles.explanation} ${selectedAnswer === official.answer ? feedbackStyles.correct : feedbackStyles.incorrect}`} aria-live="polite"><strong>{selectedAnswer === official.answer ? "✓ Correct answer" : "× Your answer was incorrect"}</strong><span>Official answer: <b>{official.answer.toUpperCase()}</b></span><p>{official.explanation}</p></aside> : null}
        <footer className={paperStyles.paperFooter}><button disabled={current === 0} onClick={() => setCurrent((value) => Math.max(0,value - 1))}>← Previous</button>{reviewMode ? <>{current < visibleQuestions.length - 1 ? <button onClick={() => setCurrent((value) => Math.min(visibleQuestions.length - 1,value + 1))}>Next wrong answer →</button> : null}<button onClick={() => { setReviewMode(false); setFinished(true); }}>← Back to result</button></> : current < visibleQuestions.length - 1 ? <button onClick={() => setCurrent((value) => Math.min(visibleQuestions.length - 1,value + 1))}>Next question →</button> : <button onClick={() => setFinished(true)}>Submit answer sheet →</button>}</footer>
      </article>
    </div>
  </section>;
}
