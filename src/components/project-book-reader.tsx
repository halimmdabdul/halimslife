"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { CourseSection } from "@/components/course-player";
import { RichTextContent, markdownToPlainText } from "@/components/rich-text-content";
import { VocabQuiz } from "@/components/vocab-quiz";
import type { CompanionUnit } from "@/lib/minna-n5-companion";
import type { UnitKanji } from "@/lib/minna-n5-unit-kanji";
import { getMinnaN5UnitVocabulary } from "@/lib/minna-n5-vocabulary";
import { getMinnaN4UnitVocabulary } from "@/lib/minna-n4-vocabulary";

import styles from "./project-book-reader.module.css";
import singleStyles from "./project-book-reader-single.module.css";

type UnitView = "lesson" | "vocabulary" | "grammar" | "kanji" | "practice";

export type BookReaderConfig = {
  bookId: "n5" | "n4";
  bookLabel: string;
  bookTitle: string;
  unitRangeLabel: string;
  storageKey: string;
  kanjiByUnit: Record<number, UnitKanji[]>;
  vocabularyImageBase?: string;
};

const vocabularyGetters = {
  n5: getMinnaN5UnitVocabulary,
  n4: getMinnaN4UnitVocabulary,
};

type Props = { sections: CourseSection[]; units: CompanionUnit[]; config: BookReaderConfig };

const unitViews: Array<{ id: UnitView; label: string; icon: string }> = [
  { id: "lesson", label: "পাঠ", icon: "文" },
  { id: "vocabulary", label: "Vocabulary", icon: "語" },
  { id: "grammar", label: "Grammar", icon: "型" },
  { id: "kanji", label: "Kanji", icon: "漢" },
  { id: "practice", label: "Practice", icon: "練" },
];

export function ProjectBookReader({ sections, units, config }: Props) {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [unitView, setUnitView] = useState<UnitView>("lesson");
  const [completed, setCompleted] = useState<number[]>([]);
  const [answer, setAnswer] = useState<string | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try { setCompleted(JSON.parse(localStorage.getItem(config.storageKey) || "[]")); } catch { setCompleted([]); }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [config.storageKey]);

  const chapter = activeChapter === null ? null : sections[activeChapter];
  const unit = activeChapter && activeChapter > 0 ? units[activeChapter - 1] : null;
  const unitKanji = unit ? config.kanjiByUnit[unit.number] ?? [] : [];
  const unitVocabulary = unit ? vocabularyGetters[config.bookId](unit) : [];
  const vocabularyScene = unit && config.vocabularyImageBase ? `${config.vocabularyImageBase}${String(unit.number).padStart(2,"0")}.webp` : null;
  const guide = chapter?.lessons[0];
  const practice = chapter?.lessons[1];
  const test = guide?.practiceTest;
  const progress = Math.round((completed.length / sections.length) * 100);

  const chapterSummary = useMemo(() => sections.map((section) => {
    const text = markdownToPlainText(section.lessons[0]?.overview || "");
    return text.length > 105 ? `${text.slice(0, 105)}…` : text;
  }), [sections]);

  function unitNumberFor(index: number) {
    return index === 0 ? null : units[index - 1]?.number ?? null;
  }

  function openChapter(index: number | null, view: UnitView = "lesson") {
    setActiveChapter(index);
    setUnitView(view);
    setAnswer(null);
    window.requestAnimationFrame(() => document.getElementById("digital-book")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function toggleComplete() {
    if (activeChapter === null) return;
    const next = completed.includes(activeChapter) ? completed.filter((item) => item !== activeChapter) : [...completed, activeChapter].sort((a,b) => a-b);
    setCompleted(next);
    localStorage.setItem(config.storageKey, JSON.stringify(next));
  }

  return <div className={styles.project}>
    <section className={styles.bookHero}>
      <div className={styles.cover} aria-label={`${config.bookTitle} বাংলা learning project book cover`}>
        <span>HALIM&apos;S LIFE · LEARNING PROJECT</span>
        <b>みんなの<br/>日本語</b>
        <i />
        <h1>{config.bookTitle}</h1>
        <p>বাংলা Learning Companion</p>
        <small>START HERE + {config.unitRangeLabel}</small>
      </div>
      <div className={styles.heroCopy}><span>Independent digital book project</span><h2>বই পড়ার অনুভূতিতে<br/>Japanese শিখুন।</h2><p>সূচিপত্র থেকে chapter বেছে নিন। প্রতিটি chapter-এ original বাংলা explanation, Japanese examples, grammar notes, practice এবং self-test একসঙ্গে পড়ুন।</p><div><a href="#digital-book">সূচিপত্র খুলুন ↓</a><Link href="/projects">সব projects</Link></div><dl><div><dt>{units.length}</dt><dd>Core units</dd></div><div><dt>{units.length * 2}</dt><dd>Original lessons</dd></div><div><dt>{progress}%</dt><dd>Reading progress</dd></div></dl></div>
    </section>

    <section className={styles.reader} id="digital-book">
      <aside className={styles.contents}>
        <div className={styles.contentsHead}><span>সূচিপত্র</span><strong>{completed.length}/{sections.length} পড়া</strong></div>
        <button className={activeChapter === null ? styles.current : ""} onClick={() => openChapter(null)}><b>⌂</b><span><strong>বইয়ের সূচিপত্র</strong><small>সব Unit একসঙ্গে দেখুন</small></span></button>
        <nav aria-label="Book chapters">{sections.map((section,index) => <div className={singleStyles.unitGroup} key={section.title}><button className={activeChapter === index ? styles.current : ""} onClick={() => openChapter(index)}><b>{index === 0 ? "শুরু" : String(unitNumberFor(index)).padStart(2,"0")}</b><span><strong>{index === 0 ? "পড়ার আগে" : `Unit ${String(unitNumberFor(index)).padStart(2,"0")}`}</strong><small>{section.title.replace(/^Unit\s+\d+\s*[·-]\s*/i, "")}</small></span><i>{completed.includes(index) ? "✓" : ""}</i></button>{activeChapter === index && index > 0 ? <div className={singleStyles.unitMenu}>{unitViews.map((view) => <button className={unitView === view.id ? singleStyles.activeUnitMenu : ""} onClick={() => openChapter(index, view.id)} key={view.id}><b>{view.icon}</b><span>{view.label}</span></button>)}</div> : null}</div>)}</nav>
      </aside>

      <div className={styles.bookShell}>
        <header className={styles.bookBar}><button onClick={() => openChapter(null)}>☰ সূচিপত্র</button><span>{chapter ? `${chapter.title} · ${unitView}` : `${config.bookTitle} · বাংলা Companion`}</span><div><i style={{width:`${progress}%`}}/></div></header>
        {chapter && guide ? <>
          <div className={`${styles.spread} ${singleStyles.spread}`}>
            <article className={`${styles.page} ${singleStyles.page}`}>
              <div className={styles.runningHead}><span>MINNA NO NIHONGO · {config.bookLabel}</span><b>{activeChapter === 0 ? "START" : `UNIT ${String(unit?.number).padStart(2,"0")}`}</b></div>
              <span className={styles.chapterLabel}>{activeChapter === 0 ? "শুরু করার আগে" : `Unit ${String(unit?.number).padStart(2,"0")} · ${unitViews.find((item) => item.id === unitView)?.label}`}</span>
              <h1>{unit ? unit.title : guide.title.replace(/^Unit\s+\d+\s+guide\s*[·-]\s*/i, "")}</h1>

              {!unit || unitView === "lesson" ? <>
                <div className={styles.bookText}><RichTextContent content={guide.overview || guide.content || ""}/></div>
                <div className={singleStyles.divider}><span>ব্যাখ্যা · নোট</span><i /></div>
                <div className={styles.bookText}><RichTextContent content={guide.studyNotes || practice?.overview || ""}/></div>
              </> : null}

              {unit && unitView === "vocabulary" ? <section className={singleStyles.unitSection}>
                <div className={singleStyles.unitIntro}><b>語</b><div><h2>এই Unit-এর Vocabulary</h2><p>শব্দগুলো আগে উচ্চারণ করুন, তারপর অর্থ না দেখে recall করুন।</p></div></div>
                {vocabularyScene ? <figure className={singleStyles.memoryScene}><Image src={vocabularyScene} alt={`Unit ${unit.number} vocabulary মনে রাখার watercolor illustration`} width={1400} height={933} sizes="(max-width: 900px) 100vw, 780px"/><figcaption><strong>Unit {String(unit.number).padStart(2,"0")} visual memory</strong><span>এই Unit-এর মানুষ, object ও action-এর সঙ্গে নিচের শব্দগুলো মিলিয়ে মনে রাখুন।</span></figcaption></figure> : null}
                <div className={singleStyles.vocabCount}><strong>{unitVocabulary.length}টি শব্দ</strong><span>দেখুন → বলুন → ঢেকে recall করুন</span></div>
                <div className={singleStyles.vocabGrid}>{unitVocabulary.map((item,index) => { const [word,...meaning] = item.split("—"); return <article className={singleStyles.vocabCard} key={item}><span>{String(index + 1).padStart(2,"0")}</span><h3>{word.trim()}</h3><p>{meaning.join("—").trim()}</p></article>; })}</div>
                <div className={singleStyles.studyTip}><strong>মনে রাখার কৌশল</strong><p>প্রতি শব্দ দিয়ে একটি নিজের sentence বানান। শুধু বাংলা অর্থ মুখস্থ না করে situation-এর সঙ্গে শব্দটি জুড়ে দিন।</p></div>
              </section> : null}

              {unit && unitView === "grammar" ? <section className={singleStyles.unitSection}>
                <div className={singleStyles.unitIntro}><b>型</b><div><h2>Grammar patterns</h2><p>{unit.explanation}</p></div></div>
                <div className={singleStyles.patternList}>{unit.patterns.map((pattern,index) => <article key={pattern}><span>{String(index + 1).padStart(2,"0")}</span><code>{pattern}</code></article>)}</div>
                <div className={singleStyles.divider}><span>নিজস্ব উদাহরণ</span><i /></div>
                <div className={singleStyles.exampleList}>{unit.examples.map(([japanese,bengali]) => <article key={japanese}><strong>{japanese}</strong><p>{bengali}</p></article>)}</div>
              </section> : null}

              {unit && unitView === "kanji" ? <section className={singleStyles.unitSection}>
                <div className={singleStyles.unitIntro}><b>漢</b><div><h2>এই Unit-এর Kanji</h2><p>Meaning, reading এবং একটি পরিচিত example একসঙ্গে পড়ুন।</p></div></div>
                <div className={singleStyles.kanjiGrid}>{unitKanji.map((item) => <article className={singleStyles.kanjiCard} key={item.kanji}><b>{item.kanji}</b><div><h3>{item.meaning}</h3><span>{item.readings}</span><p>{item.example}</p></div></article>)}</div>
                <div className={singleStyles.studyTip}><strong>লেখার practice</strong><p>প্রতিটি Kanji পাঁচবার লিখুন, তারপর reading না দেখে exampleটি পড়ার চেষ্টা করুন।</p></div>
              </section> : null}

              {unit && unitView === "practice" ? <section className={singleStyles.unitSection}>
                <div className={singleStyles.unitIntro}><b>練</b><div><h2>Unit practice</h2><p>দেখে লেখা, না দেখে বলা এবং শেষে self-test—এই তিন ধাপে করুন।</p></div></div>
                <ol className={singleStyles.practiceList}>{unit.practice.map((item) => <li key={item}>{item}</li>)}</ol>
                <div className={singleStyles.mistakeBox}><strong>সাধারণ ভুল</strong><ul>{unit.mistakes.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className={singleStyles.divider}><span>শব্দ চেনার Quiz</span><i /></div>
                <VocabQuiz words={unitVocabulary} resetKey={unit.number}/>
                {test?.question ? <div className={styles.quiz}><span>Grammar self-test</span><h3>{test.question}</h3><div>{test.options?.map((option) => { const isAnswer = option === test.correctAnswer; const isPicked = option === answer; const stateClass = answer ? (isAnswer ? styles.correctOption : isPicked ? styles.wrongOption : "") : ""; return <button disabled={Boolean(answer)} className={stateClass} onClick={() => { if (!answer) setAnswer(option); }} key={option}>{option}</button>; })}</div>{answer ? <p className={answer === test.correctAnswer ? styles.correct : styles.wrong}>{answer === test.correctAnswer ? "সঠিক উত্তর ✓" : `ভুল উত্তর। সঠিক: ${test.correctAnswer}`}{test.explanation ? <small>{test.explanation}</small> : null}</p> : null}</div> : null}
              </section> : null}
              <footer><span>Halim&apos;s Life · Independent study companion</span><b>{(activeChapter ?? 0) + 1}</b></footer>
            </article>
          </div>
          <nav className={styles.pageNav}><button disabled={activeChapter === 0} onClick={() => openChapter(Math.max(0,(activeChapter ?? 0)-1))}>← আগের chapter</button><button className={completed.includes(activeChapter ?? -1) ? styles.done : ""} onClick={toggleComplete}>{completed.includes(activeChapter ?? -1) ? "পড়া হয়েছে ✓" : "পড়া শেষ হিসেবে রাখুন"}</button><button disabled={activeChapter === sections.length-1} onClick={() => openChapter(Math.min(sections.length-1,(activeChapter ?? 0)+1))}>পরের chapter →</button></nav>
        </> : <div className={`${styles.spread} ${styles.indexSpread} ${singleStyles.spread}`}>
          <article className={`${styles.page} ${singleStyles.page}`}><div className={styles.runningHead}><span>TABLE OF CONTENTS</span><b>{config.bookLabel} · {config.unitRangeLabel}</b></div><span className={styles.chapterLabel}>সূচিপত্র</span><h1>আপনার {config.bookLabel} reading journey</h1><p className={styles.indexIntro}>প্রথমে foundation পড়ুন, তারপর প্রথম Unit থেকে ধারাবাহিকভাবে এগিয়ে যান। একটি chapter শেষ হলে check mark দিন—progress এই browser-এ সংরক্ষিত থাকবে।</p><div className={styles.indexStats}><span><b>{units.length}</b> grammar units</span><span><b>{units.length * 2}</b> reading & practice lessons</span><span><b>1</b> clear learning path</span></div><blockquote>অল্প অল্প করে, কিন্তু প্রতিদিন—language learning-এর সবচেয়ে শক্তিশালী নিয়ম।</blockquote><div className={singleStyles.divider}><span>Chapter Index</span><i /></div><div className={styles.indexList}>{sections.map((section,index) => <button onClick={() => openChapter(index)} key={section.title}><b>{index === 0 ? "শুরু" : String(unitNumberFor(index)).padStart(2,"0")}</b><span><strong>{index === 0 ? "Foundation" : section.title.replace(/^Unit\s+\d+\s*[·-]\s*/i, "")}</strong><small>{chapterSummary[index]}</small></span><i>{completed.includes(index) ? "✓" : "→"}</i></button>)}</div><footer><span>Halim&apos;s Life Learning Project</span><b>i</b></footer></article>
        </div>}
        <p className={styles.legal}>এটি একটি independent learning project। মূল textbook-এর copyrighted dialogue, vocabulary list বা exercise পুনর্মুদ্রণ করা হয়নি।</p>
      </div>
    </section>
  </div>;
}
