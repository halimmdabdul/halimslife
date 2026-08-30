"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import type { CourseSection } from "@/components/course-player";
import { RichTextContent, markdownToPlainText } from "@/components/rich-text-content";
import { VocabQuiz } from "@/components/vocab-quiz";
import { GrammarQuiz, type GrammarQuizQuestion } from "@/components/grammar-quiz";
import { ListeningPractice, type ListeningClip } from "@/components/listening-practice";
import type { CompanionUnit } from "@/lib/minna-n5-companion";
import type { UnitKanji } from "@/lib/minna-n5-unit-kanji";
import { getMinnaN5UnitVocabulary } from "@/lib/minna-n5-vocabulary";
import { getMinnaN5VocabularyExample } from "@/lib/minna-n5-vocabulary-examples";
import { getMinnaN5GrammarDetails } from "@/lib/minna-n5-grammar-details";
import { getMinnaN5KanjiExample } from "@/lib/minna-n5-kanji-examples";
import { getMinnaN5PracticeDetails } from "@/lib/minna-n5-practice-details";
import { getMinnaN5LessonDetails } from "@/lib/minna-n5-lesson-details";
import { getMinnaN4UnitVocabulary } from "@/lib/minna-n4-vocabulary";

import styles from "./project-book-reader.module.css";
import singleStyles from "./project-book-reader-single.module.css";

type UnitView = "lesson" | "vocabulary" | "grammar" | "listening" | "kanji" | "practice";

export type BookReaderConfig = {
  bookId: "n5" | "n4";
  bookLabel: string;
  bookTitle: string;
  unitRangeLabel: string;
  storageKey: string;
  kanjiByUnit: Record<number, UnitKanji[]>;
  vocabularyImageBase?: string;
  unitViewsInModal?: boolean;
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
  { id: "listening", label: "Listening", icon: "聴" },
  { id: "kanji", label: "Kanji", icon: "漢" },
  { id: "practice", label: "Practice", icon: "練" },
];

function highlightedVocabulary(sentence: string, wordLabel: string) {
  const parenthetical = Array.from(wordLabel.matchAll(/[（(]([^）)]+)[）)]/g), (match) => match[1]);
  const primary = wordLabel.split(/[（(]/)[0];
  const candidates = [primary, ...parenthetical]
    .map((candidate) => candidate.replace(/[～~]/g, "").trim())
    .filter(Boolean)
    .sort((a,b) => b.length - a.length);
  const target = candidates.find((candidate) => sentence.includes(candidate));
  if (!target) return sentence;
  const start = sentence.indexOf(target);
  return <>{sentence.slice(0,start)}<mark className={singleStyles.focusVocabulary}>{target}</mark>{sentence.slice(start + target.length)}</>;
}

export function ProjectBookReader({ sections, units, config }: Props) {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [unitView, setUnitView] = useState<UnitView>("lesson");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [completed, setCompleted] = useState<number[]>([]);
  const [unlockedUnitViews, setUnlockedUnitViews] = useState<Record<number, number>>({});
  const [flippedVocabularyIndex, setFlippedVocabularyIndex] = useState<number | null>(null);
  const [flippedKanji, setFlippedKanji] = useState<string | null>(null);
  const [rememberedVocabulary, setRememberedVocabulary] = useState<string[]>([]);
  const [rememberedKanji, setRememberedKanji] = useState<string[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalShellRef = useRef<HTMLDivElement>(null);
  const modalTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try { setCompleted(JSON.parse(localStorage.getItem(config.storageKey) || "[]")); } catch { setCompleted([]); }
      try { setUnlockedUnitViews(JSON.parse(localStorage.getItem(`${config.storageKey}-unit-views`) || "{}")); } catch { setUnlockedUnitViews({}); }
      try { setRememberedVocabulary(JSON.parse(localStorage.getItem(`${config.storageKey}-remembered-vocabulary`) || "[]")); } catch { setRememberedVocabulary([]); }
      try { setRememberedKanji(JSON.parse(localStorage.getItem(`${config.storageKey}-remembered-kanji`) || "[]")); } catch { setRememberedKanji([]); }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [config.storageKey]);

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        window.requestAnimationFrame(() => modalTriggerRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = modalShellRef.current?.querySelectorAll<HTMLElement>("button:not(:disabled), a[href], input:not(:disabled), [tabindex]:not([tabindex='-1'])");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const chapter = activeChapter === null ? null : sections[activeChapter];
  const unit = activeChapter && activeChapter > 0 ? units[activeChapter - 1] : null;
  const unitKanji = unit ? config.kanjiByUnit[unit.number] ?? [] : [];
  const unitVocabulary = unit ? vocabularyGetters[config.bookId](unit) : [];
  const unitGrammarDetails = unit && config.bookId === "n5" ? getMinnaN5GrammarDetails(unit.number) : [];
  const unitPracticeDetails = unit && config.bookId === "n5" ? getMinnaN5PracticeDetails(unit.number) : undefined;
  const unitLessonDetails = unit && config.bookId === "n5" ? getMinnaN5LessonDetails(unit.number) : undefined;
  const vocabularyScene = unit && config.vocabularyImageBase ? `${config.vocabularyImageBase}${String(unit.number).padStart(2,"0")}.webp` : null;
  const guide = chapter?.lessons[0];
  const practice = chapter?.lessons[1];
  const test = guide?.practiceTest;
  const grammarQuizQuestions: GrammarQuizQuestion[] = unitPracticeDetails?.grammarQuiz ?? (test?.question && test.options?.length && test.correctAnswer ? [{ question: test.question, options: test.options, correctAnswer: test.correctAnswer, explanation: test.explanation }] : []);
  const vocabularyListeningClips: ListeningClip[] = unit ? unitVocabulary.flatMap((_,index) => { const example = config.bookId === "n5" ? getMinnaN5VocabularyExample(unit.number,index) : undefined; return example ? [{japanese:example.japanese,romaji:example.romaji,bengali:example.bengali}] : []; }) : [];
  const listeningClips: ListeningClip[] = vocabularyListeningClips.length >= 4 ? vocabularyListeningClips : unit?.examples.map(([japanese,bengali]) => ({japanese,bengali})) ?? [];
  const chapterIsVisible = Boolean(chapter && (!config.unitViewsInModal || isModalOpen));
  const progress = Math.round((completed.length / sections.length) * 100);
  const currentViewIndex = unitViews.findIndex((item) => item.id === unitView);
  const unlockedViewIndex = unit ? (completed.includes(activeChapter ?? -1) ? unitViews.length - 1 : unlockedUnitViews[unit.number] ?? 0) : 0;
  const vocabularyCards = unitVocabulary.map((item,index) => ({
    item,
    index,
    memoryKey: `${unit?.number ?? 0}:${item.split("—")[0].trim()}`,
  })).sort((a,b) => Number(rememberedVocabulary.includes(a.memoryKey)) - Number(rememberedVocabulary.includes(b.memoryKey)) || a.index - b.index);
  const kanjiCards = unitKanji.map((item,index) => ({
    item,
    index,
    memoryKey: `${unit?.number ?? 0}:${item.kanji}`,
  })).sort((a,b) => Number(rememberedKanji.includes(a.memoryKey)) - Number(rememberedKanji.includes(b.memoryKey)) || a.index - b.index);

  const chapterSummary = useMemo(() => sections.map((section) => {
    const text = markdownToPlainText(section.lessons[0]?.overview || "");
    return text.length > 105 ? `${text.slice(0, 105)}…` : text;
  }), [sections]);
  const grammarOverviewParagraphs = unit?.explanation.split(/(?<=।)\s+/).filter(Boolean) ?? [];

  function unitNumberFor(index: number) {
    return index === 0 ? null : units[index - 1]?.number ?? null;
  }

  function unlockedViewForChapter(index: number) {
    const unitNumber = unitNumberFor(index);
    return unitNumber === null ? 0 : completed.includes(index) ? unitViews.length - 1 : unlockedUnitViews[unitNumber] ?? 0;
  }

  function openChapter(index: number | null, view: UnitView = "lesson", asModal = false) {
    if (asModal && !isModalOpen && document.activeElement instanceof HTMLButtonElement) modalTriggerRef.current = document.activeElement;
    const targetUnlockedView = index === null ? 0 : unlockedViewForChapter(index);
    const requestedViewIndex = unitViews.findIndex((item) => item.id === view);
    const safeView = config.unitViewsInModal && requestedViewIndex > targetUnlockedView ? "lesson" : view;
    setActiveChapter(index);
    setUnitView(safeView);
    setFlippedVocabularyIndex(null);
    setFlippedKanji(null);
    setIsModalOpen(asModal);
    if (asModal) window.requestAnimationFrame(() => modalShellRef.current?.scrollTo({ top: 0, behavior: "smooth" }));
    if (!asModal) window.requestAnimationFrame(() => document.getElementById("digital-book")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function closeModal() {
    setIsModalOpen(false);
    window.requestAnimationFrame(() => modalTriggerRef.current?.focus());
  }

  function toggleComplete() {
    if (activeChapter === null) return;
    const next = completed.includes(activeChapter) ? completed.filter((item) => item !== activeChapter) : [...completed, activeChapter].sort((a,b) => a-b);
    setCompleted(next);
    localStorage.setItem(config.storageKey, JSON.stringify(next));
  }

  function markComplete(index: number) {
    setCompleted((current) => {
      if (current.includes(index)) return current;
      const next = [...current, index].sort((a,b) => a-b);
      localStorage.setItem(config.storageKey, JSON.stringify(next));
      return next;
    });
  }

  function toggleRememberedVocabulary(memoryKey: string) {
    setFlippedVocabularyIndex(null);
    setFlippedKanji(null);
    setRememberedVocabulary((current) => {
      const next = current.includes(memoryKey) ? current.filter((item) => item !== memoryKey) : [...current, memoryKey];
      localStorage.setItem(`${config.storageKey}-remembered-vocabulary`, JSON.stringify(next));
      return next;
    });
  }

  function toggleRememberedKanji(memoryKey: string) {
    setFlippedKanji(null);
    setRememberedKanji((current) => {
      const next = current.includes(memoryKey) ? current.filter((item) => item !== memoryKey) : [...current, memoryKey];
      localStorage.setItem(`${config.storageKey}-remembered-kanji`, JSON.stringify(next));
      return next;
    });
  }

  function showUnitView(view: UnitView) {
    const nextViewIndex = unitViews.findIndex((item) => item.id === view);
    if (unit && nextViewIndex > unlockedViewIndex) {
      setUnlockedUnitViews((current) => {
        const next = { ...current, [unit.number]: nextViewIndex };
        localStorage.setItem(`${config.storageKey}-unit-views`, JSON.stringify(next));
        return next;
      });
    }
    setUnitView(view);
    setFlippedVocabularyIndex(null);
    window.requestAnimationFrame(() => modalShellRef.current?.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function goToNextLearningStep() {
    if (activeChapter === null) return;

    if (!unit) {
      markComplete(activeChapter);
      openChapter(Math.min(1, sections.length - 1), "lesson", true);
      return;
    }

    if (currentViewIndex < unitViews.length - 1) {
      showUnitView(unitViews[currentViewIndex + 1].id);
      return;
    }

    markComplete(activeChapter);
    if (activeChapter < sections.length - 1) {
      openChapter(activeChapter + 1, "lesson", true);
    } else {
      closeModal();
    }
  }

  function goToPreviousLearningStep() {
    if (!unit || currentViewIndex <= 0) return;
    showUnitView(unitViews[currentViewIndex - 1].id);
  }

  const nextLearningLabel = !unit
    ? "Foundation শেষ · Unit 01 →"
    : currentViewIndex < unitViews.length - 1
      ? `পরের অংশ · ${unitViews[currentViewIndex + 1].label} →`
      : activeChapter === sections.length - 1
        ? "শেষ Unit সম্পন্ন করুন ✓"
        : `Unit শেষ · Unit ${String((unit?.number ?? 0) + 1).padStart(2,"0")} →`;

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

    <section className={`${styles.reader} ${config.unitViewsInModal ? styles.tocOnly : ""}`} id="digital-book">
      <aside className={styles.contents}>
        <div className={styles.contentsHead}><span>সূচিপত্র</span><strong>{completed.length}/{sections.length} পড়া</strong></div>
        <button className={activeChapter === null ? styles.current : ""} onClick={() => openChapter(null)}><b>⌂</b><span><strong>বইয়ের সূচিপত্র</strong><small>সব Unit একসঙ্গে দেখুন</small></span></button>
        <nav aria-label="Book chapters">{sections.map((section,index) => <div className={singleStyles.unitGroup} key={section.title}><button className={activeChapter === index ? styles.current : ""} onClick={() => openChapter(index, "lesson", Boolean(config.unitViewsInModal && index === 0))}><b>{index === 0 ? "শুরু" : String(unitNumberFor(index)).padStart(2,"0")}</b><span><strong>{index === 0 ? "পড়ার আগে" : `Unit ${String(unitNumberFor(index)).padStart(2,"0")}`}</strong><small>{section.title.replace(/^Unit\s+\d+\s*[·-]\s*/i, "")}</small></span><i>{completed.includes(index) ? "✓" : ""}</i></button>{activeChapter === index && index > 0 ? <div className={singleStyles.unitMenu}>{unitViews.map((view,viewIndex) => <button className={unitView === view.id ? singleStyles.activeUnitMenu : ""} onClick={() => openChapter(index, view.id, config.unitViewsInModal)} key={view.id} aria-haspopup={config.unitViewsInModal ? "dialog" : undefined} disabled={Boolean(config.unitViewsInModal && viewIndex > unlockedViewForChapter(index))}><b>{view.icon}</b><span>{view.label}</span></button>)}</div> : null}</div>)}</nav>
      </aside>

      {isModalOpen ? <button className={styles.modalBackdrop} onClick={closeModal} aria-label="Reader বন্ধ করুন" tabIndex={-1}/> : null}
      <div ref={modalShellRef} className={`${styles.bookShell} ${isModalOpen ? styles.modalShell : ""}`} role={isModalOpen ? "dialog" : undefined} aria-modal={isModalOpen || undefined} aria-label={isModalOpen && chapter ? `${chapter.title} · ${unitViews.find((item) => item.id === unitView)?.label}` : undefined}>
        <header className={styles.bookBar}><button ref={closeButtonRef} onClick={isModalOpen ? closeModal : () => openChapter(null)}>{isModalOpen ? "× বন্ধ করুন" : "☰ সূচিপত্র"}</button><span>{chapterIsVisible && chapter ? `${chapter.title} · ${unitView}` : `${config.bookTitle} · বাংলা Companion`}</span><div><i style={{width:`${progress}%`}}/></div></header>
        {chapterIsVisible && chapter && guide ? <>
          <div className={`${styles.spread} ${singleStyles.spread}`}>
            <article className={`${styles.page} ${singleStyles.page}`}>
              <div className={styles.runningHead}><span>MINNA NO NIHONGO · {config.bookLabel}</span><b>{activeChapter === 0 ? "START" : `UNIT ${String(unit?.number).padStart(2,"0")}`}</b></div>
              <span className={styles.chapterLabel}>{activeChapter === 0 ? "শুরু করার আগে" : `Unit ${String(unit?.number).padStart(2,"0")} · ${unitViews.find((item) => item.id === unitView)?.label}`}</span>
              <h1>{unit ? unit.title : guide.title.replace(/^Unit\s+\d+\s+guide\s*[·-]\s*/i, "")}</h1>
              {config.unitViewsInModal && unit ? <nav className={singleStyles.modalSteps} aria-label="Unit learning progress">{unitViews.map((view,index) => <button className={index === currentViewIndex ? singleStyles.currentStep : index <= unlockedViewIndex ? singleStyles.finishedStep : ""} onClick={() => showUnitView(view.id)} disabled={index > unlockedViewIndex} key={view.id} aria-current={index === currentViewIndex ? "step" : undefined}><b>{view.icon}</b><small>{view.label}</small></button>)}</nav> : null}

              {!unit || unitView === "lesson" ? unitLessonDetails && unit ? <section className={singleStyles.lessonDashboard}>
                <header className={singleStyles.lessonHero}><div><small>{unitLessonDetails.label}</small><span>UNIT {String(unit.number).padStart(2,"0")} · পাঠ</span><h2>{unitLessonDetails.headline}</h2><p>{unitLessonDetails.summary}</p></div><aside><b>এই পাঠের ফলাফল</b><p>{unitLessonDetails.outcome}</p></aside></header>
                <div className={singleStyles.lessonRoadmap}>{unitLessonDetails.roadmap.map((step) => <article key={step.title}><span>{step.icon}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></article>)}</div>
                <section className={singleStyles.lessonConcepts}><header><small>CORE MAP</small><h3>{unitLessonDetails.conceptTitle}</h3></header><div>{unitLessonDetails.concepts.map((concept) => <article className={singleStyles[`lesson_${concept.tone}`]} key={concept.japanese}><small>{concept.label}</small><strong>{concept.japanese}</strong><p>{concept.note}</p></article>)}</div></section>
                <section className={singleStyles.lessonDialogue}><header><span>会話</span><div><small>REAL-LIFE MINI DIALOGUE</small><h3>Patternগুলো কথায় দেখুন</h3></div></header><div>{unitLessonDetails.dialogue.map((line) => <article key={`${line.speaker}-${line.japanese}`}><b>{line.speaker}</b><div><strong>{line.japanese}</strong><i>{line.romaji}</i><p>{line.bengali}</p></div></article>)}</div></section>
                <section className={singleStyles.lessonChecklist}><header><small>LESSON CHECK</small><h3>পরের section-এ যাওয়ার আগে</h3></header><div>{unitLessonDetails.checklist.map((item) => <span key={item}>✓ {item}</span>)}</div></section>
                <details className={singleStyles.lessonDeepRead}><summary><span>বিস্তারিত explanation ও study notes</span><b>খুলুন ＋</b></summary><div className={singleStyles.lessonDeepBody}><section className={singleStyles.lessonDeepContent}><header><span>01</span><div><small>DETAILED LESSON</small><h3>মূল explanation ও examples</h3></div></header><div className={`${styles.bookText} ${singleStyles.lessonDeepRich}`}><RichTextContent content={guide.overview || guide.content || ""}/></div></section><section className={`${singleStyles.lessonDeepContent} ${singleStyles.lessonDeepNotes}`}><header><span>02</span><div><small>STUDY NOTES</small><h3>Vocabulary, ভুল ও recall routine</h3></div></header><div className={`${styles.bookText} ${singleStyles.lessonDeepRich}`}><RichTextContent content={guide.studyNotes || practice?.overview || ""}/></div></section></div></details>
              </section> : <><div className={styles.bookText}><RichTextContent content={guide.overview || guide.content || ""}/></div><div className={singleStyles.divider}><span>ব্যাখ্যা · নোট</span><i /></div><div className={styles.bookText}><RichTextContent content={guide.studyNotes || practice?.overview || ""}/></div></> : null}

              {unit && unitView === "vocabulary" ? <section className={singleStyles.unitSection}>
                <div className={singleStyles.unitIntro}><b>語</b><div><h2>এই Unit-এর Vocabulary</h2><p>শব্দগুলো আগে উচ্চারণ করুন, তারপর অর্থ না দেখে recall করুন।</p></div></div>
                {vocabularyScene ? <figure className={singleStyles.memoryScene}><Image src={vocabularyScene} alt={`Unit ${unit.number} vocabulary মনে রাখার watercolor illustration`} width={1400} height={933} sizes="(max-width: 900px) 100vw, 780px"/><figcaption><strong>Unit {String(unit.number).padStart(2,"0")} visual memory</strong><span>এই Unit-এর মানুষ, object ও action-এর সঙ্গে নিচের শব্দগুলো মিলিয়ে মনে রাখুন।</span></figcaption></figure> : null}
                <div className={singleStyles.vocabCount}><strong>{unitVocabulary.length}টি শব্দ</strong><span>দেখুন → বলুন → ঢেকে recall করুন</span></div>
                <div className={singleStyles.vocabGrid}>{vocabularyCards.map(({item,index,memoryKey}) => { const [word,...meaning] = item.split("—"); const cleanWord = word.trim(); const mnemonic = config.bookId === "n5" && unit.number === 1 ? { columns:8, rows:5, image:"/images/projects/n5-vocabulary/unit-01-sprites.png" } : config.bookId === "n5" && unit.number === 2 ? { columns:6, rows:5, image:"/images/projects/n5-vocabulary/unit-02-sprites.png" } : config.bookId === "n5" && unit.number === 3 ? { columns:6, rows:6, image:"/images/projects/n5-vocabulary/unit-03-sprites.png" } : null; const example = config.bookId === "n5" ? getMinnaN5VocabularyExample(unit.number, index) : undefined; const spritePosition = mnemonic ? `${(index % mnemonic.columns) * (100 / (mnemonic.columns - 1))}% ${Math.floor(index / mnemonic.columns) * (100 / (mnemonic.rows - 1))}%` : undefined; const isRemembered = rememberedVocabulary.includes(memoryKey); const memoryButton = <button type="button" className={`${singleStyles.rememberButton} ${isRemembered ? singleStyles.rememberedButton : ""}`} onClick={() => toggleRememberedVocabulary(memoryKey)} aria-pressed={isRemembered} aria-label={`${cleanWord} ${isRemembered ? "মনে নেই হিসেবে রাখুন" : "মনে আছে হিসেবে রাখুন"}`} title={isRemembered ? "মনে আছে ✓" : "মনে আছে হিসেবে চিহ্নিত করুন"}>✓</button>; if (mnemonic && example) { const isFlipped = flippedVocabularyIndex === index; return <article className={`${singleStyles.vocabCardWrap} ${isRemembered ? singleStyles.rememberedCard : ""}`} key={item}>{memoryButton}<button type="button" className={`${singleStyles.vocabCard} ${singleStyles.vocabFlipCard} ${isFlipped ? singleStyles.flippedCard : ""}`} onClick={() => setFlippedVocabularyIndex(isFlipped ? null : index)} aria-pressed={isFlipped} aria-label={`${cleanWord} card—${isFlipped ? "শব্দ দেখুন" : "example sentence দেখুন"}`}><span className={singleStyles.vocabNumber}>{String(index + 1).padStart(2,"0")}</span><span className={singleStyles.vocabFlipInner}><span className={singleStyles.vocabCardFront}><span className={singleStyles.vocabImage} style={{backgroundImage:`url(${mnemonic.image})`,backgroundSize:`${mnemonic.columns * 100}% ${mnemonic.rows * 100}%`,backgroundPosition:spritePosition}} role="img" aria-label={`${cleanWord} মনে রাখার ছবি`}/><span className={singleStyles.vocabCopy}><strong>{cleanWord}</strong><small>{meaning.join("—").trim()}</small><i>Click করে example দেখুন ↻</i></span></span><span className={singleStyles.vocabCardBack}><small className={singleStyles.focusWordBadge}>Focus word · {cleanWord}</small><strong>{highlightedVocabulary(example.japanese, cleanWord)}</strong><span>{example.romaji}</span><p>{example.bengali}</p><i>শব্দে ফিরুন ↻</i></span></span></button></article>; } return <article className={`${singleStyles.vocabCardWrap} ${isRemembered ? singleStyles.rememberedCard : ""}`} key={item}>{memoryButton}<div className={singleStyles.vocabCard}><span className={singleStyles.vocabNumber}>{String(index + 1).padStart(2,"0")}</span><div className={singleStyles.vocabCopy}><h3>{cleanWord}</h3><p>{meaning.join("—").trim()}</p></div></div></article>; })}</div>
                <div className={singleStyles.studyTip}><strong>মনে রাখার কৌশল</strong><p>প্রতি শব্দ দিয়ে একটি নিজের sentence বানান। শুধু বাংলা অর্থ মুখস্থ না করে situation-এর সঙ্গে শব্দটি জুড়ে দিন।</p></div>
              </section> : null}

              {unit && unitView === "grammar" ? <section className={singleStyles.unitSection}>
                <div className={`${singleStyles.unitIntro} ${singleStyles.grammarIntro}`}><b>型</b><div><span>UNIT {String(unit.number).padStart(2,"0")} · GRAMMAR</span><h2>Grammar patterns</h2><p>{unit.patterns.length}টি connected rule ধাপে ধাপে বুঝুন।</p></div></div>
                <div className={singleStyles.grammarOverview}><span>সহজ ব্যাখ্যা</span><div>{grammarOverviewParagraphs.map((paragraph,index) => <p key={`${index}-${paragraph}`}>{paragraph}</p>)}</div></div>
                <div className={singleStyles.patternList}>{unit.patterns.map((pattern,index) => <article key={pattern}><span>{String(index + 1).padStart(2,"0")}</span><code>{pattern}</code></article>)}</div>
                {unitGrammarDetails.length ? <><div className={singleStyles.divider}><span>বিস্তারিত Grammar Guide</span><i /></div><div className={singleStyles.grammarDetailList}>{unitGrammarDetails.map((detail,index) => <article className={singleStyles.grammarDetailCard} key={detail.structure}><header><span>{String(index + 1).padStart(2,"0")}</span><div><small>{detail.title}</small><code>{detail.structure}</code></div></header><div className={singleStyles.grammarUsage}><span>এভাবে sentence তৈরি হয়</span><div>{detail.visual.tokens.map((token) => <div className={token.accent ? singleStyles.grammarTokenAccent : ""} key={`${token.text}-${token.role}`}><strong>{token.text}</strong><small>{token.role}</small></div>)}</div><p><i>{detail.visual.romaji}</i><b>{detail.visual.bengali}</b></p></div><p>{detail.explanation}</p><ul>{detail.notes.map((note) => <li key={note}>{note}</li>)}</ul><div className={singleStyles.grammarExamples}>{detail.examples.map((example) => <div key={example.japanese}><strong>{example.japanese}</strong><i>{example.romaji}</i><p>{example.bengali}</p></div>)}</div></article>)}</div></> : null}
                <div className={singleStyles.divider}><span>নিজস্ব উদাহরণ</span><i /></div>
                <div className={singleStyles.exampleList}>{unit.examples.map(([japanese,bengali]) => <article key={japanese}><strong>{japanese}</strong><p>{bengali}</p></article>)}</div>
              </section> : null}

              {unit && unitView === "listening" ? <section className={singleStyles.unitSection}>
                <div className={singleStyles.unitIntro}><b>聴</b><div><h2>Japanese Listening</h2><p>Sentence না দেখে আগে শুনুন, সঠিক বাংলা অর্থ বাছুন, তারপর transcript দেখে shadowing করুন।</p></div></div>
                <ListeningPractice clips={listeningClips} resetKey={unit.number}/>
                <div className={singleStyles.studyTip}><strong>কীভাবে practice করবেন</strong><p>প্রথমবার স্বাভাবিক গতিতে শুনুন। না বুঝলে ধীর গতিতে আরেকবার শুনুন। উত্তর দেখার পরে audio-এর সঙ্গে একই rhythm-এ sentenceটি দুইবার বলুন।</p></div>
              </section> : null}

              {unit && unitView === "kanji" ? <section className={singleStyles.unitSection}>
                <div className={singleStyles.unitIntro}><b>漢</b><div><h2>এই Unit-এর Kanji</h2><p>Meaning, reading এবং একটি পরিচিত example একসঙ্গে পড়ুন।</p></div></div>
                <div className={singleStyles.kanjiGrid}>{kanjiCards.map(({item,memoryKey}) => { const sentence = config.bookId === "n5" ? getMinnaN5KanjiExample(unit.number, item.kanji) : undefined; const isRemembered = rememberedKanji.includes(memoryKey); const memoryButton = <button type="button" className={`${singleStyles.rememberButton} ${isRemembered ? singleStyles.rememberedButton : ""}`} onClick={() => toggleRememberedKanji(memoryKey)} aria-pressed={isRemembered} aria-label={`${item.kanji} ${isRemembered ? "মনে নেই হিসেবে রাখুন" : "মনে আছে হিসেবে রাখুন"}`} title={isRemembered ? "মনে আছে ✓" : "মনে আছে হিসেবে চিহ্নিত করুন"}>✓</button>; if (!sentence) return <article className={`${singleStyles.kanjiCardWrap} ${isRemembered ? singleStyles.rememberedKanjiCard : ""}`} key={item.kanji}>{memoryButton}<div className={singleStyles.kanjiCard}><b>{item.kanji}</b><div><h3>{item.meaning}</h3><span>{item.readings}</span><p>{item.example}</p></div></div></article>; const isFlipped = flippedKanji === item.kanji; return <article className={`${singleStyles.kanjiCardWrap} ${isRemembered ? singleStyles.rememberedKanjiCard : ""}`} key={item.kanji}>{memoryButton}<button type="button" className={`${singleStyles.kanjiCard} ${singleStyles.kanjiFlipCard} ${isFlipped ? singleStyles.flippedKanjiCard : ""}`} onClick={() => setFlippedKanji(isFlipped ? null : item.kanji)} aria-pressed={isFlipped} aria-label={`${item.kanji} card—${isFlipped ? "Kanji details দেখুন" : "example sentence দেখুন"}`}><span className={singleStyles.kanjiFlipInner}><span className={singleStyles.kanjiCardFront}><b>{item.kanji}</b><span><strong>{item.meaning}</strong><i>{item.readings}</i><p>{item.example}</p><small>Click করে sentence দেখুন ↻</small></span></span><span className={singleStyles.kanjiCardBack}><small>Focus Kanji · {item.kanji}</small><strong>{highlightedVocabulary(sentence.japanese, item.kanji)}</strong><i>{sentence.romaji}</i><p>{sentence.bengali}</p><span>Kanji-তে ফিরুন ↻</span></span></span></button></article>; })}</div>
                <div className={singleStyles.studyTip}><strong>লেখার practice</strong><p>প্রতিটি Kanji পাঁচবার লিখুন, তারপর reading না দেখে exampleটি পড়ার চেষ্টা করুন।</p></div>
              </section> : null}

              {unit && unitView === "practice" ? <section className={singleStyles.unitSection}>
                <div className={singleStyles.unitIntro}><b>練</b><div><h2>Unit practice</h2><p>দেখে লেখা, না দেখে বলা এবং শেষে self-test—এই তিন ধাপে করুন।</p></div></div>
                {unitPracticeDetails ? <div className={singleStyles.practiceGuide}>
                  <figure className={singleStyles.practiceHero}><Image src={unitPracticeDetails.heroImage} alt={unitPracticeDetails.heroAlt} width={1536} height={1024} sizes="(max-width: 900px) 100vw, 780px"/><figcaption><small>{unitPracticeDetails.heroEyebrow ?? `UNIT ${String(unit.number).padStart(2,"0")} · VISUAL PRACTICE`}</small><strong>{unitPracticeDetails.heroTitle ?? "ছবিটি দেখে পরিচয় তৈরি করুন"}</strong><span>{unitPracticeDetails.heroDescription ?? "নাম, দেশ, পেশা ও বয়স—কাকে কী প্রশ্ন করবেন, আগে মুখে বলুন।"}</span></figcaption></figure>
                  <section className={singleStyles.practiceReference} aria-label={`Unit ${unit.number} quick reference`}><article><header><span>単語</span><h3>Useful words</h3></header><ul>{unitPracticeDetails.usefulWords.map((word) => <li key={word.japanese}><strong>{word.japanese}</strong><i>{word.romaji}</i><span>{word.bengali}</span></li>)}</ul></article><article><header><span>返事</span><h3>How to answer</h3></header><div className={singleStyles.answerPatterns}>{unitPracticeDetails.answerPatterns.map((pattern) => <div className={pattern.positive ? singleStyles.positiveAnswer : singleStyles.negativeAnswer} key={pattern.japanese}><b aria-hidden="true">{pattern.positive ? "✓" : "×"}</b><span><strong>{pattern.japanese}</strong><i>{pattern.romaji}</i><small>{pattern.bengali}</small></span></div>)}</div></article><article><header><span>要点</span><h3>Points to remember</h3></header><dl>{unitPracticeDetails.memoryPoints.map((point) => <div key={point.symbol}><dt>{point.symbol}</dt><dd>{point.meaning}</dd></div>)}</dl></article></section>
                  <article className={singleStyles.dialogueScene}><header><span>会話</span><div><small>WARM-UP CONVERSATION</small><h3>{unitPracticeDetails.dialogueTitle ?? "প্রথম পরিচয়ের flow"}</h3></div></header><figure className={singleStyles.dialogueIllustration}><Image src={unitPracticeDetails.dialogueImage} alt={unitPracticeDetails.dialogueAlt ?? unitPracticeDetails.heroAlt} width={1536} height={1024} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>{(unitPracticeDetails.dialogueCaption ?? [{name:"ミラー",text:"America থেকে এসেছেন"},{name:"山田",text:"পরিচয় করাচ্ছেন"},{name:"佐藤",text:"greeting করছেন"}]).map((caption) => <span key={caption.name}><b>{caption.name}</b> {caption.text}</span>)}</figcaption></figure><div>{unitPracticeDetails.dialogue.map((line,index) => <div className={singleStyles.dialogueLine} key={`${line.speaker}-${line.japanese}`}><b>{line.speaker}</b><span><strong>{line.japanese}</strong><i>{line.romaji}</i><p>{line.bengali}</p></span><em>{String(index + 1).padStart(2,"0")}</em></div>)}</div></article>
                  <article className={singleStyles.selfIntroduction}><span>{unitPracticeDetails.modelLabel ?? "自己紹介"}</span><div><small>{unitPracticeDetails.modelTitle ?? "SELF INTRODUCTION MODEL"}</small><strong>{unitPracticeDetails.selfIntroduction.japanese}</strong><i>{unitPracticeDetails.selfIntroduction.romaji}</i><p>{unitPracticeDetails.selfIntroduction.bengali}</p></div></article>
                  {unitPracticeDetails.profileImage && unitPracticeDetails.profiles.length ? <section className={singleStyles.profileChallenge}><header><small>LOOK · ASK · ANSWER</small><h3>Profile challenge</h3><p>ছবি, নাম, দেশ, বয়স ও পেশা দেখে নিচের প্রশ্নগুলোর উত্তর দিন।</p></header><div>{unitPracticeDetails.profiles.map((profile) => <article className={singleStyles[`profile_${profile.accent}`]} key={profile.name}><span className={singleStyles.profilePortrait} style={{backgroundImage:`url(${unitPracticeDetails.profileImage})`,backgroundPosition:`${(profile.imageIndex % 5) * 25}% ${Math.floor(profile.imageIndex / 5) * 100}%`}} role="img" aria-label={`${profile.name}—${profile.country}, ${profile.role}`}/><strong>{profile.name}{profile.age ? <sup>{profile.age}</sup> : null}</strong><small>{profile.country}</small><b>{profile.role}</b>{profile.organization ? <em>{profile.organization}</em> : null}</article>)}</div></section> : null}
                  {unitPracticeDetails.objectImage && unitPracticeDetails.objects?.length ? <section className={singleStyles.objectChallenge}><header><small>SEE · POINT · SAY</small><h3>{unitPracticeDetails.challengeTitle ?? "Object challenge"}</h3><p>{unitPracticeDetails.challengeDescription}</p></header><div className={singleStyles.objectGrid}>{unitPracticeDetails.objects.map((object) => <article key={object.word}><span className={singleStyles.objectPortrait} style={{backgroundImage:`url(${unitPracticeDetails.objectImage})`,backgroundPosition:`${(object.imageIndex % 6) * 20}% ${Math.floor(object.imageIndex / 6) * 25}%`}} role="img" aria-label={object.bengali}/><div><strong>{object.word}</strong><i>{object.romaji} · {object.bengali}</i><p>{object.prompt}</p></div></article>)}</div></section> : null}
                  <div className={singleStyles.practiceModules}>{unitPracticeDetails.modules.map((module) => <article className={singleStyles.practiceModule} key={module.step}><header><span>{module.step}</span><div><small>PRACTICE STEP</small><h3>{module.title}</h3><p>{module.instruction}</p></div></header><ol>{module.questions.map((question,index) => <li key={`${module.step}-${question.prompt}`}><span className={singleStyles.practiceQuestionNumber}>{String(index + 1).padStart(2,"0")}</span><div><strong>{question.prompt}</strong>{question.hint ? <small>{question.hint}</small> : null}<details><summary>উত্তর দেখুন</summary><div><b>{question.answer}</b><i>{question.romaji}</i><p>{question.bengali}</p></div></details></div></li>)}</ol></article>)}</div>
                  <div className={singleStyles.practiceMethod}><b>3× Recall rule</b><span><strong>①</strong> দেখে বলুন</span><span><strong>②</strong> উত্তর ঢেকে বলুন</span><span><strong>③</strong> নিজের তথ্য দিয়ে বলুন</span></div>
                </div> : null}
                <div className={singleStyles.divider}><span>আরও অনুশীলন</span><i /></div>
                <ol className={singleStyles.practiceList}>{unit.practice.map((item) => <li key={item}>{item}</li>)}</ol>
                <div className={singleStyles.mistakeBox}><strong>সাধারণ ভুল</strong><ul>{unit.mistakes.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className={singleStyles.divider}><span>শব্দ চেনার Quiz</span><i /></div>
                <VocabQuiz words={unitVocabulary} resetKey={unit.number}/>
                {grammarQuizQuestions.length ? <GrammarQuiz questions={grammarQuizQuestions} resetKey={unit.number}/> : null}
              </section> : null}
              <footer><span>Halim&apos;s Life · Independent study companion</span><b>{(activeChapter ?? 0) + 1}</b></footer>
            </article>
          </div>
          {config.unitViewsInModal && isModalOpen ? <nav className={styles.pageNav}><button disabled={!unit || currentViewIndex === 0} onClick={goToPreviousLearningStep}>← আগের অংশ</button><span className={styles.stepStatus}>{completed.includes(activeChapter ?? -1) ? "Unit সম্পন্ন ✓" : unit ? `${currentViewIndex + 1}/${unitViews.length} অংশ` : "Foundation"}</span><button onClick={goToNextLearningStep}>{nextLearningLabel}</button></nav> : <nav className={styles.pageNav}><button disabled={activeChapter === 0} onClick={() => openChapter(Math.max(0,(activeChapter ?? 0)-1), "lesson", isModalOpen)}>← আগের chapter</button><button className={completed.includes(activeChapter ?? -1) ? styles.done : ""} onClick={toggleComplete}>{completed.includes(activeChapter ?? -1) ? "পড়া হয়েছে ✓" : "পড়া শেষ হিসেবে রাখুন"}</button><button disabled={activeChapter === sections.length-1} onClick={() => openChapter(Math.min(sections.length-1,(activeChapter ?? 0)+1), "lesson", isModalOpen)}>পরের chapter →</button></nav>}
        </> : <div className={`${styles.spread} ${styles.indexSpread} ${singleStyles.spread}`}>
          <article className={`${styles.page} ${singleStyles.page}`}><div className={styles.runningHead}><span>TABLE OF CONTENTS</span><b>{config.bookLabel} · {config.unitRangeLabel}</b></div><span className={styles.chapterLabel}>সূচিপত্র</span><h1>আপনার {config.bookLabel} reading journey</h1><p className={styles.indexIntro}>প্রথমে foundation পড়ুন, তারপর প্রথম Unit থেকে ধারাবাহিকভাবে এগিয়ে যান। একটি chapter শেষ হলে check mark দিন—progress এই browser-এ সংরক্ষিত থাকবে।</p><div className={styles.indexStats}><span><b>{units.length}</b> grammar units</span><span><b>{units.length * 2}</b> reading & practice lessons</span><span><b>1</b> clear learning path</span></div><blockquote>অল্প অল্প করে, কিন্তু প্রতিদিন—language learning-এর সবচেয়ে শক্তিশালী নিয়ম।</blockquote><div className={singleStyles.divider}><span>Chapter Index</span><i /></div><div className={styles.indexList}>{sections.map((section,index) => <div className={singleStyles.indexUnit} key={section.title}><button className={activeChapter === index ? styles.current : ""} onClick={() => openChapter(index, "lesson", Boolean(config.unitViewsInModal && index === 0))}><b>{index === 0 ? "শুরু" : String(unitNumberFor(index)).padStart(2,"0")}</b><span><strong>{index === 0 ? "Foundation" : section.title.replace(/^Unit\s+\d+\s*[·-]\s*/i, "")}</strong><small>{chapterSummary[index]}</small></span><i>{completed.includes(index) ? "✓" : "→"}</i></button>{activeChapter === index && index > 0 ? <div className={singleStyles.unitMenu}>{unitViews.map((view,viewIndex) => <button className={unitView === view.id ? singleStyles.activeUnitMenu : ""} onClick={() => openChapter(index, view.id, config.unitViewsInModal)} key={view.id} aria-haspopup={config.unitViewsInModal ? "dialog" : undefined} disabled={Boolean(config.unitViewsInModal && viewIndex > unlockedViewForChapter(index))}><b>{view.icon}</b><span>{view.label}</span></button>)}</div> : null}</div>)}</div><footer><span>Halim&apos;s Life Learning Project</span><b>i</b></footer></article>
        </div>}
        <p className={styles.legal}>এটি একটি independent learning project। মূল textbook-এর copyrighted dialogue, vocabulary list বা exercise পুনর্মুদ্রণ করা হয়নি।</p>
      </div>
    </section>
  </div>;
}
