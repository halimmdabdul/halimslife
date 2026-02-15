import type { Lang } from "@/contexts/LanguageContext";

export type BlogCategory = "japanese" | "programming" | "eng-life" | "japan-life" | "career";

export interface Post {
  slug: string;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  date: string; // ISO
  readingMinutes: number;
  category: BlogCategory;
  tags: string[];
  featured?: boolean;
  contentMd: Record<Lang, string>;
}

export const categoryMeta: Record<
  BlogCategory,
  { label: Record<Lang, string>; description: Record<Lang, string> }
> = {
  japanese: {
    label: { bn: "Japanese Study (N5–N1)", en: "Japanese Study (N5–N1)", ja: "日本語学習（N5–N1）" },
    description: {
      bn: "বাংলা ভাষায় জাপানি শেখা",
      en: "Learn Japanese in Bengali-friendly way",
      ja: "ベンガル語でも学べる日本語",
    },
  },
  programming: {
    label: { bn: "Programming", en: "Programming", ja: "プログラミング" },
    description: {
      bn: "ফান্ডামেন্টাল থেকে প্র্যাকটিস",
      en: "From fundamentals to practice",
      ja: "基礎から実践まで",
    },
  },
  "eng-life": {
    label: {
      bn: "Engineering Life in Japan",
      en: "Engineering Life in Japan",
      ja: "日本でのエンジニア生活",
    },
    description: {
      bn: "জাপানে টেক ক্যারিয়ার",
      en: "Building a tech career in Japan",
      ja: "日本でのテックキャリア",
    },
  },
  "japan-life": {
    label: { bn: "Japan Life", en: "Japan Life", ja: "日本の暮らし" },
    description: {
      bn: "লাইফস্টাইল ও কালচার",
      en: "Lifestyle and culture",
      ja: "ライフスタイルと文化",
    },
  },
  career: {
    label: { bn: "Career & Motivation", en: "Career & Motivation", ja: "キャリア & モチベ" },
    description: {
      bn: "ক্যারিয়ার জার্নি",
      en: "Career journey",
      ja: "キャリアの道のり",
    },
  },
};

export const posts: Post[] = [
  {
    slug: "japanese-n5-kana-starter",
    title: {
      bn: "জাপানি N5 শুরু: হিরাগানা-কাতাকানা শেখার সিম্পল রোডম্যাপ",
      en: "Start Japanese N5: A simple Hiragana/Katakana roadmap",
      ja: "日本語N5入門：ひらがな・カタカナのシンプルなロードマップ",
    },
    excerpt: {
      bn: "কানার ভয় কাটাতে ১৪ দিনের একটি বাস্তবসম্মত প্ল্যান — কীভাবে রিভিশন করবেন, কীভাবে ভুল ধরবেন।",
      en: "A realistic 14-day plan to master kana — revision strategy and common mistakes.",
      ja: "かなの不安を減らす14日プラン。復習のやり方とよくあるミスを整理します。",
    },
    date: "2026-02-01",
    readingMinutes: 7,
    category: "japanese",
    tags: ["N5", "Kana", "Study Plan"],
    featured: true,
    contentMd: {
      bn: `# জাপানি N5 শুরু: হিরাগানা-কাতাকানা শেখার সিম্পল রোডম্যাপ

এই পোস্টটি ডেমো কনটেন্ট। পরে আপনি চাইলে আমি এটি পূর্ণাঙ্গভাবে লিখে দেব।

## ১৪ দিনের প্ল্যান
- দিন ১–৩: হিরাগানা বেসিক
- দিন ৪–৬: কাতাকানা বেসিক
- দিন ৭–১৪: মিক্সড প্র্যাকটিস + রিভিশন

## টিপস
- ফ্ল্যাশকার্ড + উচ্চারণ
- ছোট ছোট কুইজ
- লিখে লিখে মনে রাখা
`,
      en: `# Start Japanese N5: A simple kana roadmap

This is demo content. I can expand it into a full post later.

## A 14-day plan
- Days 1–3: Hiragana basics
- Days 4–6: Katakana basics
- Days 7–14: Mixed practice + review

## Tips
- Flashcards + pronunciation
- Small daily quizzes
- Write by hand to retain
`,
      ja: `# 日本語N5入門：かな学習ロードマップ

これはデモ記事です。後で内容を充実させられます。

## 14日プラン
- 1〜3日目：ひらがな基礎
- 4〜6日目：カタカナ基礎
- 7〜14日目：ミックス練習 + 復習

## コツ
- フラッシュカード + 発音
- 毎日の小テスト
- 手書きで定着
`,
    },
  },
  {
    slug: "programming-fundamentals-from-zero",
    title: {
      bn: "প্রোগ্রামিং ফান্ডামেন্টাল: Zero থেকে Strong Base (একটি ফ্রেমওয়ার্ক)",
      en: "Programming fundamentals: from zero to a strong base",
      ja: "プログラミング基礎：ゼロから土台を作るフレームワーク",
    },
    excerpt: {
      bn: "Syntax-এর বাইরে গিয়ে চিন্তা করা — problem decomposition, debugging mindset, এবং প্র্যাকটিস রুটিন।",
      en: "Beyond syntax — problem decomposition, debugging mindset, and practice routine.",
      ja: "文法だけでなく、分解思考・デバッグ習慣・練習ルーティンを整理します。",
    },
    date: "2026-01-18",
    readingMinutes: 9,
    category: "programming",
    tags: ["Fundamentals", "Learning", "Practice"],
    featured: true,
    contentMd: {
      bn: `# প্রোগ্রামিং ফান্ডামেন্টাল: Zero থেকে Strong Base

এই পোস্টটি ডেমো কনটেন্ট।

## Framework
1. ইনপুট/আউটপুট বোঝা
2. ডেটা স্ট্রাকচার (array, map)
3. Control flow
4. Functions
5. Testing mindset
`,
      en: `# Programming fundamentals: from zero to a strong base

This is demo content.

## Framework
1. Understand input/output
2. Data structures (arrays, maps)
3. Control flow
4. Functions
5. Testing mindset
`,
      ja: `# プログラミング基礎：ゼロから土台を作る

これはデモ記事です。

## フレームワーク
1. 入出力を理解する
2. データ構造（配列、map）
3. 制御構文
4. 関数
5. テスト思考
`,
    },
  },
  {
    slug: "engineering-life-first-90-days-japan",
    title: {
      bn: "জাপানে ইঞ্জিনিয়ারিং লাইফ: প্রথম ৯০ দিনের বাস্তব অভিজ্ঞতা",
      en: "Engineering life in Japan: my first 90 days",
      ja: "日本のエンジニア生活：最初の90日",
    },
    excerpt: {
      bn: "কাজের কালচার, কমিউনিকেশন, এবং প্রোডাক্টিভিটি — কীভাবে অ্যাডাপ্ট করবেন।",
      en: "Work culture, communication, productivity — how to adapt.",
      ja: "仕事の文化・コミュニケーション・生産性。どう適応するかをまとめます。",
    },
    date: "2025-12-22",
    readingMinutes: 8,
    category: "eng-life",
    tags: ["Japan", "Engineering", "Career"],
    featured: true,
    contentMd: {
      bn: `# জাপানে ইঞ্জিনিয়ারিং লাইফ: প্রথম ৯০ দিনের বাস্তব অভিজ্ঞতা

এই পোস্টটি ডেমো কনটেন্ট।

## Highlights
- মিটিং কালচার
- ডকুমেন্টেশন
- কোড রিভিউ
`,
      en: `# Engineering life in Japan: my first 90 days

This is demo content.

## Highlights
- Meeting culture
- Documentation
- Code review
`,
      ja: `# 日本のエンジニア生活：最初の90日

これはデモ記事です。

## ハイライト
- ミーティング文化
- ドキュメント
- コードレビュー
`,
    },
  },
  {
    slug: "japan-life-weekend-routine",
    title: {
      bn: "Japan Life: উইকএন্ড রুটিন — কাজের বাইরে কীভাবে রিচার্জ করি",
      en: "Japan life: a weekend routine to recharge",
      ja: "日本の暮らし：週末ルーティンでリチャージ",
    },
    excerpt: {
      bn: "ছোট ছোট অভ্যাস, ভ্রমণ, ক্যাফে-ওয়াক — মানসিকভাবে ফ্রেশ থাকার কিছু আইডিয়া।",
      en: "Small habits, walks, and mini-trips to stay refreshed.",
      ja: "小さな習慣、散歩、ミニ旅。心を整えるアイデア。",
    },
    date: "2025-11-03",
    readingMinutes: 6,
    category: "japan-life",
    tags: ["Lifestyle", "Routine"],
    contentMd: {
      bn: `# Japan Life: উইকএন্ড রুটিন

এই পোস্টটি ডেমো কনটেন্ট।
`,
      en: `# Japan life: weekend routine

This is demo content.
`,
      ja: `# 日本の暮らし：週末ルーティン

これはデモ記事です。
`,
    },
  },
  {
    slug: "career-motivation-staying-consistent",
    title: {
      bn: "Career & Motivation: Consistency ধরে রাখার ৫টি বাস্তব টেকনিক",
      en: "Career & motivation: 5 practical ways to stay consistent",
      ja: "キャリア&モチベ：継続するための実践テク5選",
    },
    excerpt: {
      bn: "ইচ্ছাশক্তি নয় — সিস্টেম বানান। ছোট স্কোপ, ট্র্যাকিং, এবং রিওয়ার্ড লুপ।",
      en: "Not willpower — build systems: small scope, tracking, and reward loops.",
      ja: "意志ではなく仕組み。小さく始めて、記録して、報酬ループを作る。",
    },
    date: "2025-10-10",
    readingMinutes: 5,
    category: "career",
    tags: ["Motivation", "Systems"],
    contentMd: {
      bn: `# Career & Motivation: Consistency ধরে রাখার ৫টি বাস্তব টেকনিক

এই পোস্টটি ডেমো কনটেন্ট।
`,
      en: `# Career & motivation: staying consistent

This is demo content.
`,
      ja: `# 継続のコツ

これはデモ記事です。
`,
    },
  },
];

export function getFeaturedPosts(limit = 3) {
  return posts
    .filter((p) => p.featured)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
