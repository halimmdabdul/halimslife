"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import type { CourseSection } from "@/components/course-player";
import { RichTextContent, markdownToPlainText } from "@/components/rich-text-content";

import styles from "./project-book-reader.module.css";

type Props = { sections: CourseSection[] };

export function ProjectBookReader({ sections }: Props) {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);
  const [answer, setAnswer] = useState<string | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try { setCompleted(JSON.parse(localStorage.getItem("minna-n5-book-progress") || "[]")); } catch { setCompleted([]); }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const chapter = activeChapter === null ? null : sections[activeChapter];
  const guide = chapter?.lessons[0];
  const practice = chapter?.lessons[1];
  const test = guide?.practiceTest;
  const progress = Math.round((completed.length / sections.length) * 100);

  const chapterSummary = useMemo(() => sections.map((section) => {
    const text = markdownToPlainText(section.lessons[0]?.overview || "");
    return text.length > 105 ? `${text.slice(0, 105)}…` : text;
  }), [sections]);

  function openChapter(index: number | null) {
    setActiveChapter(index);
    setAnswer(null);
    window.requestAnimationFrame(() => document.getElementById("digital-book")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function toggleComplete() {
    if (activeChapter === null) return;
    const next = completed.includes(activeChapter) ? completed.filter((item) => item !== activeChapter) : [...completed, activeChapter].sort((a,b) => a-b);
    setCompleted(next);
    localStorage.setItem("minna-n5-book-progress", JSON.stringify(next));
  }

  return <div className={styles.project}>
    <section className={styles.bookHero}>
      <div className={styles.cover} aria-label="Minna no Nihongo N5 বাংলা learning project book cover">
        <span>HALIM&apos;S LIFE · LEARNING PROJECT</span>
        <b>みんなの<br/>日本語</b>
        <i />
        <h1>Minna no Nihongo N5</h1>
        <p>বাংলা Learning Companion</p>
        <small>START HERE + UNIT 01–25</small>
      </div>
      <div className={styles.heroCopy}><span>Independent digital book project</span><h2>বই পড়ার অনুভূতিতে<br/>Japanese শিখুন।</h2><p>সূচিপত্র থেকে chapter বেছে নিন। প্রতিটি chapter-এ original বাংলা explanation, Japanese examples, grammar notes, practice এবং self-test একসঙ্গে পড়ুন।</p><div><a href="#digital-book">সূচিপত্র খুলুন ↓</a><Link href="/projects">সব projects</Link></div><dl><div><dt>25</dt><dd>Core units</dd></div><div><dt>52</dt><dd>Original lessons</dd></div><div><dt>{progress}%</dt><dd>Reading progress</dd></div></dl></div>
    </section>

    <section className={styles.reader} id="digital-book">
      <aside className={styles.contents}>
        <div className={styles.contentsHead}><span>সূচিপত্র</span><strong>{completed.length}/{sections.length} পড়া</strong></div>
        <button className={activeChapter === null ? styles.current : ""} onClick={() => openChapter(null)}><b>⌂</b><span><strong>বইয়ের সূচিপত্র</strong><small>সব chapter একসঙ্গে দেখুন</small></span></button>
        <nav aria-label="Book chapters">{sections.map((section,index) => <button className={activeChapter === index ? styles.current : ""} onClick={() => openChapter(index)} key={section.title}><b>{index === 0 ? "শুরু" : String(index).padStart(2,"0")}</b><span><strong>{index === 0 ? "পড়ার আগে" : `Unit ${String(index).padStart(2,"0")}`}</strong><small>{section.title.replace(/^Unit\s+\d+\s*[·-]\s*/i, "")}</small></span><i>{completed.includes(index) ? "✓" : ""}</i></button>)}</nav>
      </aside>

      <div className={styles.bookShell}>
        <header className={styles.bookBar}><button onClick={() => openChapter(null)}>☰ সূচিপত্র</button><span>{chapter ? chapter.title : "Minna no Nihongo N5 · বাংলা Companion"}</span><div><i style={{width:`${progress}%`}}/></div></header>
        {chapter && guide ? <>
          <div className={styles.spread}>
            <article className={`${styles.page} ${styles.leftPage}`}>
              <div className={styles.runningHead}><span>MINNA NO NIHONGO · N5</span><b>{activeChapter === 0 ? "START" : `UNIT ${String(activeChapter).padStart(2,"0")}`}</b></div>
              <span className={styles.chapterLabel}>{activeChapter === 0 ? "শুরু করার আগে" : `অধ্যায় ${activeChapter}`}</span>
              <h1>{guide.title.replace(/^Unit\s+\d+\s+guide\s*[·-]\s*/i, "")}</h1>
              <div className={styles.bookText}><RichTextContent content={guide.overview || guide.content || ""}/></div>
              <footer><span>Halim&apos;s Life Learning Project</span><b>{(activeChapter ?? 0) * 2 + 1}</b></footer>
            </article>
            <article className={`${styles.page} ${styles.rightPage}`}>
              <div className={styles.runningHead}><b>ব্যাখ্যা · নোট · অনুশীলন</b><span>বাংলা EDITION</span></div>
              <div className={styles.bookText}><RichTextContent content={guide.studyNotes || practice?.overview || ""}/>{practice?.overview ? <><hr/><RichTextContent content={practice.overview}/></> : null}</div>
              {test?.question ? <div className={styles.quiz}><span>নিজেকে যাচাই করুন</span><h3>{test.question}</h3><div>{test.options?.map((option) => <button className={answer === option ? styles.selectedAnswer : ""} onClick={() => setAnswer(option)} key={option}>{option}</button>)}</div>{answer ? <p className={answer === test.correctAnswer ? styles.correct : styles.wrong}>{answer === test.correctAnswer ? "সঠিক উত্তর ✓" : "আবার চেষ্টা করুন"}{answer === test.correctAnswer && test.explanation ? <small>{test.explanation}</small> : null}</p> : null}</div> : null}
              <footer><b>{(activeChapter ?? 0) * 2 + 2}</b><span>Independent study companion</span></footer>
            </article>
          </div>
          <nav className={styles.pageNav}><button disabled={activeChapter === 0} onClick={() => openChapter(Math.max(0,(activeChapter ?? 0)-1))}>← আগের chapter</button><button className={completed.includes(activeChapter ?? -1) ? styles.done : ""} onClick={toggleComplete}>{completed.includes(activeChapter ?? -1) ? "পড়া হয়েছে ✓" : "পড়া শেষ হিসেবে রাখুন"}</button><button disabled={activeChapter === sections.length-1} onClick={() => openChapter(Math.min(sections.length-1,(activeChapter ?? 0)+1))}>পরের chapter →</button></nav>
        </> : <div className={`${styles.spread} ${styles.indexSpread}`}>
          <article className={`${styles.page} ${styles.leftPage}`}><div className={styles.runningHead}><span>TABLE OF CONTENTS</span><b>সূচিপত্র</b></div><span className={styles.chapterLabel}>কীভাবে পড়বেন</span><h1>আপনার N5 reading journey</h1><p className={styles.indexIntro}>প্রথমে foundation পড়ুন, তারপর Unit 01 থেকে ধারাবাহিকভাবে এগিয়ে যান। একটি chapter শেষ হলে check mark দিন—progress এই browser-এ সংরক্ষিত থাকবে।</p><div className={styles.indexStats}><span><b>25</b> grammar units</span><span><b>52</b> reading & practice lessons</span><span><b>1</b> clear learning path</span></div><blockquote>অল্প অল্প করে, কিন্তু প্রতিদিন—language learning-এর সবচেয়ে শক্তিশালী নিয়ম।</blockquote><footer><span>Halim&apos;s Life Learning Project</span><b>i</b></footer></article>
          <article className={`${styles.page} ${styles.rightPage}`}><div className={styles.runningHead}><b>CHAPTER INDEX</b><span>N5 · 01–25</span></div><div className={styles.indexList}>{sections.map((section,index) => <button onClick={() => openChapter(index)} key={section.title}><b>{index === 0 ? "শুরু" : String(index).padStart(2,"0")}</b><span><strong>{index === 0 ? "Foundation" : section.title.replace(/^Unit\s+\d+\s*[·-]\s*/i, "")}</strong><small>{chapterSummary[index]}</small></span><i>{completed.includes(index) ? "✓" : "→"}</i></button>)}</div><footer><b>ii</b><span>সূচিপত্র</span></footer></article>
        </div>}
        <p className={styles.legal}>এটি একটি independent learning project। মূল textbook-এর copyrighted dialogue, vocabulary list বা exercise পুনর্মুদ্রণ করা হয়নি।</p>
      </div>
    </section>
  </div>;
}
