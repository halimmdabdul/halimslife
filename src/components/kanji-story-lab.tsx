"use client";

import { useEffect, useMemo, useState } from "react";

import type { KanjiLearningItem, KanjiLearningStage } from "@/lib/n5-kanji-learning-path";
import { kanjiMnemonics } from "@/lib/n5-kanji-mnemonics";

import styles from "./kanji-story-lab.module.css";

type Mode = "story" | "recall" | "radicals" | "library";
type ReviewRecord = { level: number; dueAt: number; lastReviewed: number };
type ReviewState = Record<string, ReviewRecord>;

const reviewKey = "n5-kanji-story-review-v1";
const oldRememberedKey = "n5-kanji-100-remembered";
const stageKey = "n5-kanji-story-stage-v1";
const intervals = [0, 10 * 60_000, 24 * 60 * 60_000, 3 * 24 * 60 * 60_000, 7 * 24 * 60 * 60_000, 21 * 24 * 60 * 60_000];

function allItems(stages: KanjiLearningStage[]) {
  return stages.flatMap((stage) => stage.kanji);
}

function nextReview(record: ReviewRecord | undefined, confidence: "again" | "hard" | "know") {
  const current = record?.level ?? 0;
  const level = confidence === "again" ? 0 : confidence === "hard" ? Math.max(1, current) : Math.min(5, current + 1);
  const now = Date.now();
  return { level, lastReviewed: now, dueAt: now + intervals[level] };
}

function dueLabel(dueAt: number, now: number) {
  const difference = dueAt - now;
  if (difference <= 0) return "এখন review";
  const hours = Math.ceil(difference / 3_600_000);
  if (hours < 24) return `${hours} ঘণ্টা পরে`;
  return `${Math.ceil(hours / 24)} দিন পরে`;
}

export function KanjiStoryLab({ stages }: { stages: KanjiLearningStage[] }) {
  const items = useMemo(() => allItems(stages), [stages]);
  const [mode, setMode] = useState<Mode>("story");
  const [activeStage, setActiveStage] = useState(stages[0]?.id ?? "");
  const [reviews, setReviews] = useState<ReviewState>({});
  const [flipped, setFlipped] = useState<string | null>(null);
  const [recallIndex, setRecallIndex] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<"সব" | KanjiLearningItem["strokes"]>("সব");
  const [ready, setReady] = useState(false);
  const [clock, setClock] = useState(0);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      let savedReviews: ReviewState = {};
      try {
        savedReviews = JSON.parse(window.localStorage.getItem(reviewKey) ?? "{}");
        if (!savedReviews || Array.isArray(savedReviews)) savedReviews = {};
      } catch {
        savedReviews = {};
      }

      try {
        const oldRemembered = JSON.parse(window.localStorage.getItem(oldRememberedKey) ?? "[]");
        if (Array.isArray(oldRemembered)) {
          const now = Date.now();
          for (const kanji of oldRemembered) {
            if (typeof kanji === "string" && !savedReviews[kanji]) {
              savedReviews[kanji] = { level: 3, lastReviewed: now, dueAt: now + intervals[3] };
            }
          }
        }
      } catch {
        // A broken legacy value should not block the new trainer.
      }

      const savedStage = window.localStorage.getItem(stageKey);
      if (savedStage && stages.some((stage) => stage.id === savedStage)) setActiveStage(savedStage);
      setReviews(savedReviews);
      setClock(Date.now());
      setReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [stages]);

  const currentStage = stages.find((stage) => stage.id === activeStage) ?? stages[0];
  const mastered = items.filter((item) => (reviews[item.kanji]?.level ?? 0) >= 3).length;
  const learned = items.filter((item) => (reviews[item.kanji]?.level ?? 0) > 0).length;
  const progress = items.length ? Math.round((mastered / items.length) * 100) : 0;

  const recallQueue = useMemo(() => {
    return [...items].sort((a, b) => {
      const aReview = reviews[a.kanji];
      const bReview = reviews[b.kanji];
      const aDue = !aReview || aReview.dueAt <= clock ? 0 : 1;
      const bDue = !bReview || bReview.dueAt <= clock ? 0 : 1;
      if (aDue !== bDue) return aDue - bDue;
      if ((aReview?.level ?? 0) !== (bReview?.level ?? 0)) return (aReview?.level ?? 0) - (bReview?.level ?? 0);
      return a.order - b.order;
    });
  }, [clock, items, reviews]);

  const recallItem = recallQueue[recallIndex % Math.max(1, recallQueue.length)];
  const dueCount = items.filter((item) => !reviews[item.kanji] || reviews[item.kanji].dueAt <= clock).length;

  function remember(item: KanjiLearningItem, confidence: "again" | "hard" | "know", advanceRecall = false) {
    const next = { ...reviews, [item.kanji]: nextReview(reviews[item.kanji], confidence) };
    setReviews(next);
    setClock(next[item.kanji].lastReviewed);
    window.localStorage.setItem(reviewKey, JSON.stringify(next));
    if (advanceRecall) {
      setRecallIndex((value) => (value + 1) % Math.max(1, recallQueue.length));
      setAnswerVisible(false);
    }
  }

  function chooseStage(id: string) {
    setActiveStage(id);
    setFlipped(null);
    window.localStorage.setItem(stageKey, id);
  }

  const filteredItems = items.filter((item) => {
    const needle = search.trim().toLocaleLowerCase();
    const matchesSearch = !needle || `${item.kanji} ${item.meaning} ${item.readings} ${item.example}`.toLocaleLowerCase().includes(needle);
    return matchesSearch && (difficulty === "সব" || item.strokes === difficulty);
  });

  const radicalGroups = Array.from(
    items.reduce((groups, item) => {
      const key = `${item.radical.symbol}-${item.radical.name}`;
      const current = groups.get(key) ?? { radical: item.radical, items: [] as KanjiLearningItem[] };
      current.items.push(item);
      groups.set(key, current);
      return groups;
    }, new Map<string, { radical: KanjiLearningItem["radical"]; items: KanjiLearningItem[] }>()).values(),
  ).sort((a, b) => b.items.length - a.items.length);

  return (
    <div className={styles.lab}>
      <section className={styles.dashboard} aria-label="শেখার অগ্রগতি">
        <div className={styles.progressRing} style={{ "--progress": `${progress * 3.6}deg` } as React.CSSProperties}>
          <span><b>{progress}%</b><small>mastered</small></span>
        </div>
        <div className={styles.dashboardCopy}>
          <span className={styles.eyebrow}>আপনার Kanji journey</span>
          <h2>{ready ? (learned ? "যেখান থেকে থেমেছিলেন, সেখান থেকেই শুরু" : "প্রথম গল্পটি দিয়ে শুরু করুন") : "Progress তৈরি হচ্ছে…"}</h2>
          <div className={styles.stats}>
            <span><b>{mastered}</b> দৃঢ়</span>
            <span><b>{learned - mastered}</b> শিখছি</span>
            <span><b>{dueCount}</b> recall বাকি</span>
          </div>
          <div className={styles.progressTrack}><i style={{ width: `${progress}%` }} /></div>
        </div>
        <button className={styles.recallCta} onClick={() => setMode("recall")}>
          <span>আজকের recall</span><b>{dueCount}</b><small>cards প্রস্তুত →</small>
        </button>
      </section>

      <nav className={styles.modeNav} aria-label="শেখার mode">
        {([
          ["story", "物語", "Story path"],
          ["recall", "思", "Active recall"],
          ["radicals", "部", "Radical map"],
          ["library", "百", "সব Kanji"],
        ] as const).map(([value, icon, label]) => (
          <button key={value} className={mode === value ? styles.modeActive : ""} onClick={() => setMode(value)}>
            <b>{icon}</b><span>{label}</span>
          </button>
        ))}
      </nav>

      {mode === "story" && currentStage ? (
        <section className={styles.storyLayout}>
          <aside className={styles.trail}>
            <div className={styles.sectionIntro}>
              <span>সহজ → complex</span>
              <h2>Learning trail</h2>
              <p>প্রতিটি stage আগের shape ব্যবহার করে।</p>
            </div>
            <div className={styles.stageList}>
              {stages.map((stage) => {
                const count = stage.kanji.filter((item) => (reviews[item.kanji]?.level ?? 0) >= 3).length;
                const complete = count === stage.kanji.length;
                return (
                  <button key={stage.id} onClick={() => chooseStage(stage.id)} className={`${activeStage === stage.id ? styles.stageActive : ""} ${complete ? styles.stageComplete : ""}`}>
                    <i>{complete ? "✓" : stage.level}</i>
                    <span><b>{stage.title}</b><small>{count}/{stage.kanji.length} mastered</small></span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className={styles.storyMain}>
            <header className={styles.storyHeader}>
              <div>
                <span>Stage {currentStage.level} · {currentStage.subtitle}</span>
                <h2>{currentStage.title}</h2>
                <p>{currentStage.story}</p>
              </div>
              <div className={styles.storyScene} aria-hidden="true">
                {currentStage.kanji.slice(0, 7).map((item, index) => <i key={item.kanji} style={{ "--i": index } as React.CSSProperties}>{item.kanji}</i>)}
              </div>
              <div className={styles.mission}><b>আজকের mission</b><span>{currentStage.mission}</span></div>
            </header>

            <div className={styles.cardGrid}>
              {currentStage.kanji.map((item) => {
                const isFlipped = flipped === item.kanji;
                const review = reviews[item.kanji];
                const mnemonic = kanjiMnemonics[item.kanji];
                return (
                  <article key={item.kanji} className={`${styles.kanjiCard} ${(review?.level ?? 0) >= 3 ? styles.cardMastered : ""}`}>
                    <button className={styles.flipButton} onClick={() => setFlipped(isFlipped ? null : item.kanji)} aria-expanded={isFlipped}>
                      <span className={styles.cardTop}><i>#{String(item.order).padStart(2, "0")}</i><em>{item.strokes}</em></span>
                      {!isFlipped ? (
                        <span className={styles.cardFront}>
                          <b>{item.kanji}</b>
                          <strong>{item.meaning}</strong>
                          <small><i>{item.radical.symbol}</i> {item.radical.name} radical</small>
                          <em>উল্টে গল্প দেখুন ↻</em>
                        </span>
                      ) : (
                        <span className={styles.cardBack}>
                          <strong>{item.readings}</strong>
                          <span>{item.example}</span>
                          <small><b>Shape clue</b>{item.radical.clue}</small>
                          <p>{mnemonic?.mnemonic ?? "অংশগুলো দেখুন এবং নিজের একটি ছোট দৃশ্য বানান।"}</p>
                        </span>
                      )}
                    </button>
                    <div className={styles.cardActions}>
                      <button onClick={() => remember(item, "again")} title="শিগগির আবার দেখাবে">↺</button>
                      <button onClick={() => remember(item, "hard")} title="কঠিন হিসেবে রাখুন">◐</button>
                      <button className={(review?.level ?? 0) >= 3 ? styles.known : ""} onClick={() => remember(item, "know")} title="মনে আছে">✓</button>
                    </div>
                    {review ? <span className={styles.nextDue}>{dueLabel(review.dueAt, clock)}</span> : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {mode === "recall" ? (
        <section className={styles.recallMode}>
          <div className={styles.sectionIntro}>
            <span>দেখা নয়—মস্তিষ্ক থেকে বের করুন</span>
            <h2>Active Recall Deck</h2>
            <p>উত্তর দেখার আগে অন্তত একবার উচ্চারণ, অর্থ ও shape মনে করার চেষ্টা করুন।</p>
          </div>
          {recallItem ? (
            <div className={styles.recallDesk}>
              <div className={styles.recallMeta}><span>Card {recallIndex + 1}/{recallQueue.length}</span><span>Level {reviews[recallItem.kanji]?.level ?? 0}/5</span></div>
              <div className={`${styles.recallCard} ${answerVisible ? styles.answerVisible : ""}`}>
                <small>{recallIndex % 2 === 0 ? "এই kanji-র অর্থ ও reading কী?" : "এই অর্থের kanji কী?"}</small>
                <b>{recallIndex % 2 === 0 ? recallItem.kanji : recallItem.meaning}</b>
                {answerVisible ? (
                  <div><strong>{recallItem.kanji} · {recallItem.meaning}</strong><em>{recallItem.readings}</em><p>{recallItem.example}</p><span>{kanjiMnemonics[recallItem.kanji]?.mnemonic}</span></div>
                ) : <button onClick={() => setAnswerVisible(true)}>উত্তর দেখুন</button>}
              </div>
              {answerVisible ? (
                <div className={styles.recallActions}>
                  <button onClick={() => remember(recallItem, "again", true)}><b>↺ আবার</b><small>১০ মিনিট</small></button>
                  <button onClick={() => remember(recallItem, "hard", true)}><b>◐ কঠিন</b><small>শিগগির</small></button>
                  <button onClick={() => remember(recallItem, "know", true)}><b>✓ মনে আছে</b><small>interval বাড়বে</small></button>
                </div>
              ) : null}
              <p className={styles.recallHint}>Tip: শুধু চিনতে পারা নয়—না দেখে লিখতে পারলে তবেই “মনে আছে” দিন।</p>
            </div>
          ) : null}
        </section>
      ) : null}

      {mode === "radicals" ? (
        <section className={styles.radicalMode}>
          <div className={styles.sectionIntro}>
            <span>Kanji-র building blocks</span><h2>Radical family map</h2><p>একই অংশ বারবার চিনলে নতুন kanji আর নতুন ছবি থাকে না।</p>
          </div>
          <div className={styles.radicalGrid}>
            {radicalGroups.map((group) => (
              <article key={`${group.radical.symbol}-${group.radical.name}`}>
                <header><b>{group.radical.symbol}</b><span><strong>{group.radical.name}</strong><small>{group.radical.clue}</small></span></header>
                <div>{group.items.map((item) => <button key={item.kanji} onClick={() => { chooseStage(stages.find((stage) => stage.kanji.some((entry) => entry.kanji === item.kanji))?.id ?? stages[0].id); setMode("story"); setFlipped(item.kanji); }}>{item.kanji}<small>{item.meaning}</small></button>)}</div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {mode === "library" ? (
        <section className={styles.libraryMode}>
          <div className={styles.libraryHead}>
            <div className={styles.sectionIntro}><span>Search · filter · review</span><h2>সব {items.length} Kanji</h2></div>
            <div className={styles.searchTools}>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Kanji, বাংলা অর্থ বা reading…" aria-label="Kanji খুঁজুন" />
              <select value={difficulty} onChange={(event) => setDifficulty(event.target.value as typeof difficulty)} aria-label="কঠিনতার স্তর"><option>সব</option><option>সহজ</option><option>মাঝারি</option><option>চ্যালেঞ্জ</option></select>
            </div>
          </div>
          <div className={styles.libraryGrid}>
            {filteredItems.map((item) => (
              <article key={item.kanji}><b>{item.kanji}</b><span><strong>{item.meaning}</strong><em>{item.readings}</em><small>{item.radical.symbol} · {item.radical.name}</small></span><i>Lv {reviews[item.kanji]?.level ?? 0}</i></article>
            ))}
          </div>
          {!filteredItems.length ? <p className={styles.empty}>এই filter-এ কোনো kanji পাওয়া যায়নি।</p> : null}
        </section>
      ) : null}
    </div>
  );
}
