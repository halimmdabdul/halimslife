"use client";

import { useEffect, useState } from "react";

import type { KanjiDay } from "@/lib/n5-kanji-30-day-plan";
import { kanjiMnemonics } from "@/lib/n5-kanji-mnemonics";

import styles from "./kanji-flashcard-grid.module.css";
import dayStyles from "./kanji-30-day-plan.module.css";

const storageKey = "n5-kanji-100-remembered";
const dayStorageKey = "n5-kanji-100-active-day";

export function Kanji30DayPlan({ dayPlan, totalKanji }: { dayPlan: KanjiDay[]; totalKanji: number }) {
  const [remembered, setRemembered] = useState<string[]>([]);
  const [activeDay, setActiveDay] = useState(1);
  const [flipped, setFlipped] = useState<string | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]");
        if (Array.isArray(saved)) setRemembered(saved);
      } catch {
        window.localStorage.removeItem(storageKey);
      }
      const savedDay = Number(window.localStorage.getItem(dayStorageKey));
      if (Number.isInteger(savedDay) && savedDay >= 1 && savedDay <= dayPlan.length) {
        setActiveDay(savedDay);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [dayPlan.length]);

  function toggleRemembered(kanji: string) {
    const next = remembered.includes(kanji)
      ? remembered.filter((item) => item !== kanji)
      : [...remembered, kanji];
    setRemembered(next);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
  }

  function selectDay(day: number) {
    setActiveDay(day);
    setFlipped(null);
    window.localStorage.setItem(dayStorageKey, String(day));
  }

  const current = dayPlan.find((item) => item.day === activeDay) ?? dayPlan[0];
  const dayRememberedCount = (day: KanjiDay) =>
    day.kanji.filter((item) => remembered.includes(item.kanji)).length;
  const overallPercent = Math.round((remembered.length / totalKanji) * 100);
  const isDayComplete = (day: KanjiDay) => dayRememberedCount(day) === day.kanji.length;

  return (
    <div className={dayStyles.wrap}>
      <div className={styles.progressBar}>
        <div>
          <span>{remembered.length}/{totalKanji} মনে আছে</span>
          <b>{overallPercent}%</b>
        </div>
        <div className={styles.track}><i style={{ width: `${overallPercent}%` }} /></div>
      </div>

      <div className={dayStyles.dayGrid}>
        {dayPlan.map((day) => (
          <button
            key={day.day}
            className={`${dayStyles.dayButton} ${day.day === activeDay ? dayStyles.dayActive : ""} ${isDayComplete(day) ? dayStyles.dayComplete : ""}`}
            onClick={() => selectDay(day.day)}
          >
            <b>{String(day.day).padStart(2, "0")}</b>
            <small>{dayRememberedCount(day)}/{day.kanji.length}</small>
          </button>
        ))}
      </div>

      <div className={dayStyles.dayPanel}>
        <div className={dayStyles.dayPanelHead}>
          <span>Day {current.day}</span>
          <h3>আজকের {current.kanji.length}টি kanji</h3>
        </div>
        <div className={styles.grid}>
          {current.kanji.map((item) => {
            const isRemembered = remembered.includes(item.kanji);
            const isFlipped = flipped === item.kanji;
            const info = kanjiMnemonics[item.kanji];
            return (
              <article className={`${styles.card} ${isRemembered ? styles.cardRemembered : ""}`} key={item.kanji}>
                <button
                  type="button"
                  className={styles.rememberButton}
                  aria-pressed={isRemembered}
                  aria-label={`${item.kanji} মনে আছে হিসেবে চিহ্নিত করুন`}
                  onClick={() => toggleRemembered(item.kanji)}
                >
                  ✓
                </button>
                <button
                  type="button"
                  className={`${styles.flip} ${isFlipped ? styles.flipped : ""}`}
                  aria-pressed={isFlipped}
                  onClick={() => setFlipped(isFlipped ? null : item.kanji)}
                >
                  <span className={styles.flipInner}>
                    <span className={styles.front}>
                      {info ? <span className={dayStyles.illustration} aria-hidden="true">{info.emoji}</span> : null}
                      <b>{item.kanji}</b>
                      <small>Click করে reading দেখুন ↻</small>
                    </span>
                    <span className={styles.back}>
                      <strong>{item.meaning}</strong>
                      <em>{item.readings}</em>
                      <p>{item.example}</p>
                    </span>
                  </span>
                </button>
                {info ? (
                  <details className={dayStyles.mnemonicBox}>
                    <summary>🧠 Background ও মনে রাখার Trick</summary>
                    <p><b>উৎপত্তি:</b> {info.origin}</p>
                    <p><b>মনে রাখার Trick:</b> {info.mnemonic}</p>
                  </details>
                ) : null}
              </article>
            );
          })}
        </div>
        <div className={dayStyles.dayNav}>
          <button disabled={activeDay === 1} onClick={() => selectDay(activeDay - 1)}>← আগের দিন</button>
          <button disabled={activeDay === dayPlan.length} onClick={() => selectDay(activeDay + 1)}>পরের দিন →</button>
        </div>
      </div>
    </div>
  );
}
