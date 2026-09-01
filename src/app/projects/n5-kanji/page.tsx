import type { Metadata } from "next";
import Link from "next/link";

import { InnerPageShell } from "@/components/inner-page-shell";
import { KanjiStoryLab } from "@/components/kanji-story-lab";
import { basicN5Kanji } from "@/lib/n5-kanji-100";
import { n5KanjiLearningPath } from "@/lib/n5-kanji-learning-path";

import styles from "./n5-kanji.module.css";

export const metadata: Metadata = {
  title: "N5 Kanji Story Path | Radical ও Active Recall",
  description: "Radical family, visual story, easy-to-complex learning order এবং spaced active recall দিয়ে JLPT N5 kanji শিখুন।",
  alternates: { canonical: "/projects/n5-kanji" },
};

export default function N5KanjiPage() {
  return (
    <InnerPageShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <Link href="/projects" className={styles.back}>← সব project</Link>
            <span className={styles.kicker}>N5 · Kanji learning system</span>
            <h1>Kanji মুখস্থ নয়—<em>গল্পের ভেতর</em> দিয়ে শিখুন</h1>
            <p>
              {basicN5Kanji.length}টি kanji এখন textbook order-এ নয়। প্রথমে সহজ ছবি ও radical,
              তারপর related shape, compound এবং active recall—যাতে চোখ শুধু চিনে না, মস্তিষ্ক
              নিজে থেকে উত্তর বের করতে শেখে।
            </p>
            <div className={styles.heroActions}>
              <a href="#learning-lab">Story শুরু করুন <b>→</b></a>
              <span><i /> progress এই browser-এ save থাকে</span>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.orbit}>
              <span className={styles.seed}>人<small>মানুষ</small></span>
              <span className={styles.branch}>休<small>বিশ্রাম</small></span>
              <span className={styles.branch}>体<small>শরীর</small></span>
              <i>亻 radical</i>
            </div>
            <div className={styles.pathBadge}><b>{n5KanjiLearningPath.length}</b><span>story<br />stages</span></div>
          </div>
        </section>

        <section className={styles.method} aria-label="শেখার পদ্ধতি">
          <article><i>01</i><b>Shape first</b><p>একটি kanji-কে আগে ছবি ও radical হিসেবে চিনুন।</p></article>
          <article><i>02</i><b>Story link</b><p>পরিচিত অংশ দিয়ে ছোট, vivid একটি দৃশ্য বানান।</p></article>
          <article><i>03</i><b>Recall, not reread</b><p>উত্তর লুকিয়ে meaning, reading ও shape মনে করুন।</p></article>
          <article><i>04</i><b>Spaced return</b><p>যেটা কঠিন, সেটাই দ্রুত ফিরে আসবে; জানা card পরে।</p></article>
        </section>

        <section id="learning-lab" className={styles.body}>
          <KanjiStoryLab stages={n5KanjiLearningPath} />
        </section>

        <p className={styles.legal}>
          এটি একটি independent learning project। Mnemonic-গুলো স্মৃতি সহায়ক visual story—academic etymology নয়।
        </p>
      </main>
    </InnerPageShell>
  );
}
