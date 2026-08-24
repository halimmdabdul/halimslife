import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import kanaArt from "@/assets/homepage/project-kana.png";
import japaneseArt from "@/assets/homepage/path-japanese.png";
import { InnerPageShell } from "@/components/inner-page-shell";

import { KanaPractice } from "./kana-practice";
import styles from "./learn-kana.module.css";

export const metadata: Metadata = {
  title: "KanaStory — Hiragana ও Katakana শিখুন",
  description: "বাংলায় structured process, pronunciation এবং interactive practice-এর মাধ্যমে Japanese Hiragana ও Katakana শিখুন।",
  alternates: { canonical: "/learn-kana" },
};

const steps = [
  ["01", "Sound চিনুন", "a, i, u, e, o—এই পাঁচটি vowel sound আগে পরিষ্কার করুন।"],
  ["02", "Hiragana শিখুন", "প্রতিদিন ৫–১০টি character: দেখুন, শুনুন, লিখুন ও recall করুন।"],
  ["03", "Katakana শিখুন", "একই sound-এর নতুন shape শিখে foreign word পড়ার অভ্যাস করুন।"],
  ["04", "Special sound", "Dakuten, combination এবং small っ-এর নিয়ম আয়ত্ত করুন।"],
  ["05", "শব্দ পড়ুন", "Romaji বাদ দিয়ে kana দেখে ছোট শব্দ ও বাক্য পড়ুন।"],
];

const soundGroups = [
  { title: "Dakuten · 濁音", examples: "が ぎ ぐ げ ご · ざ じ ず ぜ ぞ · だ ぢ づ で ど · ば び ぶ べ ぼ", text: "゛চিহ্ন K→G, S→Z, T→D এবং H→B sound তৈরি করে।" },
  { title: "Handakuten · 半濁音", examples: "ぱ ぴ ぷ ぺ ぽ", text: "H-row-তে ゜যোগ হলে P sound হয়।" },
  { title: "Combined sound · 拗音", examples: "きゃ kya · しゅ shu · ちょ cho · りゅ ryu", text: "い-column kana-এর পরে ছোট ゃ/ゅ/ょ বসে একসঙ্গে একটি sound হয়।" },
  { title: "Small tsu · 促音", examples: "きって kitte · がっこう gakkou", text: "ছোট っ পরের consonant-কে এক beat থামিয়ে double করে।" },
];

export default function LearnKanaPage() {
  return <InnerPageShell><main className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroCopy}><span className={styles.kicker}>KanaStory · Japanese Foundations</span><h1>Hiragana ও Katakana—<br/><em>গল্প, sound ও practice</em> দিয়ে শিখুন।</h1><p>Japanese পড়ার প্রথম দরজা হলো Kana। মুখস্থ করার চাপ না নিয়ে সঠিক sequence-এ sound, shape, writing এবং recall practice করুন।</p><div className={styles.heroActions}><a href="#practice">শেখা শুরু করুন ↓</a><Link href="/projects">Projects-এ ফিরুন</Link></div><div className={styles.heroStats}><span><b>46</b> basic Hiragana</span><span><b>46</b> basic Katakana</span><span><b>5</b> learning stages</span></div></div>
      <div className={styles.heroArt}><Image src={kanaArt} alt="KanaStory Japanese kana learning illustration" fill priority sizes="(max-width:800px) 100vw, 52vw" /></div>
    </section>

    <section className={styles.roadmap}><div className={styles.sectionTitle}><span>শেখার roadmap</span><h2>এই ক্রমে এগোলে Kana সহজ হবে।</h2></div><div>{steps.map(([number,title,text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <KanaPractice />

    <section className={styles.special}><div className={styles.sectionTitle}><span>Basic 46-এর পরে</span><h2>Special sound-এর চারটি জরুরি নিয়ম</h2></div><div>{soundGroups.map((item) => <article key={item.title}><h3>{item.title}</h3><strong>{item.examples}</strong><p>{item.text}</p></article>)}</div></section>

    <section className={styles.routine}><div><span>প্রতিদিন ২০ মিনিট</span><h2>একটি ছোট routine,<br/>কিন্তু নিয়মিত practice.</h2><ol><li><b>5 min</b> আগের character recall</li><li><b>5 min</b> নতুন পাঁচটি sound ও shape</li><li><b>5 min</b> কাগজে না দেখে লেখা</li><li><b>5 min</b> ছোট Japanese শব্দ পড়া</li></ol></div><div className={styles.wordPractice}><Image src={japaneseArt} alt="Japanese learning watercolor illustration" fill sizes="40vw"/><div><span>আজ পড়ুন</span><p>さくら <small>sakura · cherry blossom</small></p><p>ねこ <small>neko · cat</small></p><p>テレビ <small>terebi · television</small></p><p>コーヒー <small>koohii · coffee</small></p></div></div></section>

    <section className={styles.next}><div><span>পরবর্তী ধাপ</span><h2>Kana চিনতে পারছেন? এবার JLPT N5 শুরু করুন।</h2><p>Romaji-এর ওপর নির্ভরতা কমিয়ে vocabulary, grammar এবং daily conversation-এ এগিয়ে যান।</p></div><div><Link href="/academy/japanese-n5">N5 Course শুরু করুন →</Link><Link href="/academy">Academy দেখুন</Link></div></section>
  </main></InnerPageShell>;
}
