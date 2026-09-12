import type { Metadata } from "next";
import Link from "next/link";

import { InnerPageShell } from "@/components/inner-page-shell";
import { KanjiStoryLab } from "@/components/kanji-story-lab";
import { basicN4Kanji } from "@/lib/n4-kanji-104";
import { n4KanjiCategories, n4KanjiLearningPath } from "@/lib/n4-kanji-learning-path";
import { n4KanjiMnemonics } from "@/lib/n4-kanji-mnemonics";

import styles from "../n5-kanji/n5-kanji.module.css";

export const metadata: Metadata = {
  title: "N4 Kanji 104 | বাংলা Shape Story ও Active Recall",
  description: "আপনার reference order-এ ১০৪টি N4 Kanji—বাংলা meaning, reading, shape-story, category এবং active recall সহ।",
  alternates: { canonical: "/projects/n4-kanji" },
};

export default function N4KanjiPage() {
  return (
    <InnerPageShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <Link href="/projects" className={styles.back}>← সব project</Link>
            <span className={styles.kicker}>N4 · 104 Kanji · Exact reference sequence</span>
            <h1>বাংলা story দিয়ে <em>N4 Kanji</em> মনে রাখুন</h1>
            <p>
              আপনার দেওয়া {basicN4Kanji.length}টি Kanji ঠিক একই row ও serial-এ রাখা হয়েছে। Front side-এ meaning ও reading,
              আর card উল্টালে “কেন এমন?” shape-story, example এবং মনে রাখার গল্প পাওয়া যাবে।
            </p>
            <div className={styles.heroActions}>
              <a href="#learning-lab">N4 Story শুরু করুন <b>→</b></a>
              <span><i /> N4 progress এই browser-এ আলাদাভাবে save থাকে</span>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.orbit}>
              <span className={styles.seed}>春<small>বসন্ত</small></span>
              <span className={styles.branch}>夏<small>গ্রীষ্ম</small></span>
              <span className={styles.branch}>秋<small>শরৎ</small></span>
              <i>shape → story</i>
            </div>
            <div className={styles.pathBadge}><b>{n4KanjiLearningPath.length}</b><span>reference<br />stages</span></div>
          </div>
        </section>

        <section className={styles.method} aria-label="N4 Kanji শেখার পদ্ধতি">
          <article><i>01</i><b>Exact row order</b><p>আপনার প্রতি row-এর চারটি Kanji একই ক্রমে শিখুন।</p></article>
          <article><i>02</i><b>Reading সামনে</b><p>Kanji, বাংলা meaning ও reading এক নজরে দেখুন।</p></article>
          <article><i>03</i><b>কেন এমন?</b><p>Shape-এর অংশ দিয়ে বাংলা visual story মনে রাখুন।</p></article>
          <article><i>04</i><b>Active recall</b><p>কঠিন card দ্রুত ফিরে আসবে; শেখার progress save থাকবে।</p></article>
        </section>

        <section id="learning-lab" className={styles.body}>
          <KanjiStoryLab
            stages={n4KanjiLearningPath}
            categories={n4KanjiCategories}
            mnemonics={n4KanjiMnemonics}
            storageNamespace="n4-kanji-104"
            legacyRememberedKey=""
            trailLabel="N4 · exact row order"
          />
        </section>

        <p className={styles.legal}>
          Shape-story ও mnemonic-গুলো স্মৃতি সহায়ক learning aid—academic etymology নয়।
        </p>
      </main>
    </InnerPageShell>
  );
}
