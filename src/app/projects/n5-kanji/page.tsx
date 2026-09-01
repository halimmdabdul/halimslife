import type { Metadata } from "next";
import Link from "next/link";

import { InnerPageShell } from "@/components/inner-page-shell";
import { Kanji30DayPlan } from "@/components/kanji-30-day-plan";
import { basicN5Kanji } from "@/lib/n5-kanji-100";
import { kanjiDayPlan } from "@/lib/n5-kanji-30-day-plan";

import styles from "./n5-kanji.module.css";

export const metadata: Metadata = {
  title: "N5 Kanji 100 | 30-Day Japanese Kanji Learning Plan",
  description: "JLPT N5-এর ১০০টি basic kanji ৩০ দিনের plan-এ ভাগ করে প্রতিদিন অল্প অল্প করে শিখুন—meaning, reading এবং example sentence সহ, progress এই browser-এ সংরক্ষিত থাকে।",
  alternates: { canonical: "/projects/n5-kanji" },
};

export default function N5KanjiPage() {
  return (
    <InnerPageShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div>
            <Link href="/projects" className={styles.back}>← সব project</Link>
            <span>Japanese Learning Project</span>
            <h1>N5 Kanji <em>100</em></h1>
            <p>
              JLPT N5 level-এর সবচেয়ে basic {basicN5Kanji.length}টি kanji—৩০ দিনের plan-এ ভাগ করা,
              প্রতিদিন মাত্র ৩–৪টি নতুন kanji। Card-এ click করে reading ও example দেখুন, মনে থাকলে ✓ দিন।
            </p>
          </div>
          <div className={styles.sheet} aria-hidden="true">
            <i>漢</i>
            <b>KANJI</b>
            <strong>30 Days · {basicN5Kanji.length}</strong>
          </div>
        </section>

        <section className={styles.body}>
          <Kanji30DayPlan dayPlan={kanjiDayPlan} totalKanji={basicN5Kanji.length} />
        </section>

        <p className={styles.legal}>
          এটি একটি independent learning project। মূল textbook-এর copyrighted
          content পুনর্মুদ্রণ করা হয়নি।
        </p>
      </main>
    </InnerPageShell>
  );
}
