import type { UnitKanji } from "@/lib/minna-n5-unit-kanji";
import { basicN5Kanji } from "@/lib/n5-kanji-100";

export type RadicalProfile = {
  symbol: string;
  name: string;
  clue: string;
};

export type KanjiLearningItem = UnitKanji & {
  order: number;
  strokeCount: number;
  difficulty: "সহজ" | "মাঝারি" | "চ্যালেঞ্জ";
  category: KanjiCategory;
  radical: RadicalProfile;
};

export const kanjiCategories = [
  "ভিত্তি, সংখ্যা ও পরিমাণ",
  "সময় ও দিন",
  "মানুষ ও পরিচয়",
  "শিক্ষা ও ভাষা",
  "কাজ ও প্রতিষ্ঠান",
  "স্থান ও ভবন",
  "চলাচল ও দৈনন্দিন কাজ",
  "কেনাকাটা, প্রযুক্তি ও সংস্কৃতি",
] as const;

export type KanjiCategory = (typeof kanjiCategories)[number];

export type KanjiLearningStage = {
  id: string;
  level: number;
  title: string;
  subtitle: string;
  story: string;
  mission: string;
  kanji: KanjiLearningItem[];
};

const radicals: Array<{ members: string; profile: RadicalProfile }> = [
  { members: "休体住何作先", profile: { symbol: "亻", name: "মানুষ", clue: "বাঁ পাশে দাঁড়ানো মানুষ দেখুন" } },
  { members: "語話読記計誰誌議", profile: { symbol: "言", name: "কথা", clue: "কথা, ভাষা বা তথ্যের ইঙ্গিত" } },
  { members: "海酒洗池", profile: { symbol: "氵", name: "পানি", clue: "তিন ফোঁটা পানি বাঁ পাশে" } },
  { members: "校村林森本机機", profile: { symbol: "木", name: "গাছ", clue: "কাঠ, গাছ বা তৈরি জিনিস" } },
  { members: "時明晩曜", profile: { symbol: "日", name: "সূর্য/দিন", clue: "সময় ও আলোর পরিবার" } },
  { members: "聞間開閉", profile: { symbol: "門", name: "দরজা", clue: "দুই পাল্লার দরজার ভেতর দেখুন" } },
  { members: "学字安家室", profile: { symbol: "宀", name: "ছাদ", clue: "উপরে একটি নিরাপদ ছাদ" } },
  { members: "姉妹好女母", profile: { symbol: "女", name: "নারী", clue: "পরিবার ও নারী-সম্পর্কিত shape" } },
  { members: "電雪雨", profile: { symbol: "雨", name: "বৃষ্টি", clue: "মেঘের বাক্স থেকে ফোঁটা নামে" } },
  { members: "行道週近遠", profile: { symbol: "辶", name: "চলা", clue: "রাস্তা ধরে এগিয়ে যাওয়ার লেজ" } },
  { members: "食飲飯", profile: { symbol: "食", name: "খাবার", clue: "খাওয়া ও পান করার পরিবার" } },
  { members: "買員円貝販", profile: { symbol: "貝", name: "টাকা", clue: "পুরোনো ঝিনুক-মুদ্রা" } },
  { members: "男田町", profile: { symbol: "田", name: "ক্ষেত", clue: "চার ভাগ করা ধানের ক্ষেত" } },
  { members: "花英", profile: { symbol: "艹", name: "ঘাস", clue: "উপরে দুই পাতার মুকুট" } },
  { members: "国園図", profile: { symbol: "囗", name: "ঘেরা স্থান", clue: "বাইরের বড় ঘেরটি লক্ষ্য করুন" } },
  { members: "駅験", profile: { symbol: "馬", name: "ঘোড়া", clue: "যাত্রা ও চলাচলের পুরোনো সঙ্গী" } },
  { members: "電気汽", profile: { symbol: "气", name: "বাষ্প/শক্তি", clue: "বাতাসের ঢেউয়ের shape" } },
  { members: "銀金", profile: { symbol: "金", name: "ধাতু", clue: "ধাতু ও মূল্যের ইঙ্গিত" } },
  { members: "病院医", profile: { symbol: "疒", name: "অসুস্থতা", clue: "বিছানায় শোয়া শরীরের shape" } },
  { members: "院階段部郵", profile: { symbol: "阝", name: "স্থান", clue: "পাহাড়, অঞ্চল বা প্রতিষ্ঠানের পাশ" } },
  { members: "地場", profile: { symbol: "土", name: "মাটি", clue: "স্থান ও মাটির ছোট স্তম্ভ" } },
  { members: "社神", profile: { symbol: "礻", name: "বেদি", clue: "বাঁ পাশে উপাসনার বেদি" } },
  { members: "屋局", profile: { symbol: "尸", name: "আশ্রয়", clue: "উপরে ঘর বা ছাউনির shape" } },
  { members: "動勉働", profile: { symbol: "力", name: "শক্তি", clue: "কাজ করার বাঁকানো বাহু" } },
  { members: "終強", profile: { symbol: "糸", name: "সুতা", clue: "সূক্ষ্ম সুতা বা সংযোগের shape" } },
  { members: "研究", profile: { symbol: "石", name: "পাথর", clue: "পাথর ঘষে উত্তর খোঁজার ছবি" } },
  { members: "教", profile: { symbol: "攵", name: "ক্রিয়া", clue: "হাতে কাজ বা নির্দেশ দেওয়ার shape" } },
  { members: "行", profile: { symbol: "彳", name: "পথ", clue: "বাঁ পাশে ছোট ছোট পদক্ষেপ" } },
];

const fallbackRadical: RadicalProfile = {
  symbol: "形",
  name: "মূল shape",
  clue: "পুরো অক্ষরটিকে একটি ছবি হিসেবে দেখুন",
};

export function radicalFor(kanji: string): RadicalProfile {
  return radicals.find((group) => group.members.includes(kanji))?.profile ?? {
    ...fallbackRadical,
    symbol: kanji,
  };
}

// Accepted stroke counts from KANJIDIC2. Characters in the same stroke group
// retain their Minna no Nihongo introduction order as a pedagogical tie-break.
const strokeGroups: Record<number, string> = {
  1: "一",
  2: "人",
  3: "万下千土士大",
  4: "中今円分午戸方日",
  5: "付半本生",
  6: "休会先名地気百自行",
  7: "何医図売局社私究車",
  8: "事受国夜学所明者英",
  9: "便前室屋後昨昼段研神美食",
  10: "勉員師時書病起院",
  11: "動務堂強教産終術販部郵",
  12: "場富晩朝階",
  13: "働寝新歳話辞電靴",
  14: "聞誌語銀雑",
  16: "機館",
  18: "韓",
  20: "議",
};

const categoryGroups: Array<{ category: KanjiCategory; members: string }> = [
  { category: "ভিত্তি, সংখ্যা ও পরিমাণ", members: "一大中本土百千万円分半" },
  { category: "সময় ও দিন", members: "日今時午前後朝昼晩夜昨明" },
  { category: "মানুষ ও পরিচয়", members: "人私方先生名何者韓国英歳" },
  { category: "শিক্ষা ও ভাষা", members: "学教師研究辞書新聞雑誌話語勉強" },
  { category: "কাজ ও প্রতিষ্ঠান", members: "会社員銀行医病院事務議働休" },
  { category: "স্থান ও ভবন", members: "場所室堂部屋階段地下戸郵便局図館" },
  { category: "চলাচল ও দৈনন্দিন কাজ", members: "車電気自動機起寝終受付" },
  { category: "কেনাকাটা, প্রযুক্তি ও সংস্কৃতি", members: "神富士産食販売靴美術" },
];

const stageBlueprints = [
  { id: "first-marks", title: "প্রথম রেখা", story: "এক থেকে চার stroke-এর স্পষ্ট shape দিয়ে Kanji পড়া শুরু করুন।", mission: "shape দেখে অর্থ বলুন" },
  { id: "picture-blocks", title: "ছবির Building Blocks", story: "সহজ রেখাগুলো জুড়ে familiar picture ও direction তৈরি হচ্ছে।", mission: "আগের shape নতুন অক্ষরে খুঁজুন" },
  { id: "familiar-forms", title: "পরিচিত Form", story: "পাঁচ ও ছয় stroke-এর Kanji দৈনন্দিন শব্দের ভিত্তি তৈরি করে।", mission: "দেখে reading মনে করুন" },
  { id: "first-compounds", title: "প্রথম Compound", story: "সহজ অংশ মিলিয়ে একটু বড় Kanji কীভাবে তৈরি হয় তা দেখুন।", mission: "অক্ষরটি ছোট অংশে ভাঙুন" },
  { id: "meaning-links", title: "Meaning Link", story: "একই shape ও radical বিভিন্ন meaning-এর সঙ্গে যুক্ত করুন।", mission: "radical থেকে category অনুমান করুন" },
  { id: "daily-patterns", title: "দৈনন্দিন Pattern", story: "সময়, স্থান, মানুষ ও কাজের পরিচিত Kanji এখন আরও detail পাচ্ছে।", mission: "example শব্দটি না দেখে বলুন" },
  { id: "multi-part-kanji", title: "Multi-part Kanji", story: "দশ ও এগারো stroke-এর Kanji-তে একাধিক পরিচিত অংশ একসঙ্গে পড়ুন।", mission: "প্রতিটি অংশের visual clue ধরুন" },
  { id: "complex-patterns", title: "Complex Pattern", story: "আরও dense shape-এ stroke order ও component balance লক্ষ্য করুন।", mission: "না দেখে একবার লিখুন" },
  { id: "dense-everyday", title: "Dense Everyday Kanji", story: "দৈনন্দিন ব্যবহারের জটিল Kanji-গুলোকে radical ও mnemonic দিয়ে সহজ করুন।", mission: "reading, meaning ও shape recall করুন" },
  { id: "final-summit", title: "Final Challenge", story: "সবচেয়ে বেশি stroke-এর Kanji দিয়ে 100টির easy-to-complex পথ শেষ করুন।", mission: "নিজের mnemonic বানিয়ে লিখুন" },
] as const;

function strokeCountFor(kanji: string) {
  const match = Object.entries(strokeGroups).find(([, members]) => members.includes(kanji));
  return match ? Number(match[0]) : 99;
}

function categoryFor(kanji: string): KanjiCategory {
  return categoryGroups.find((group) => group.members.includes(kanji))?.category ?? kanjiCategories[0];
}

function difficulty(strokeCount: number): KanjiLearningItem["difficulty"] {
  if (strokeCount <= 6) return "সহজ";
  if (strokeCount <= 11) return "মাঝারি";
  return "চ্যালেঞ্জ";
}

export function buildKanjiLearningPath(items = basicN5Kanji): KanjiLearningStage[] {
  const sorted = items
    .map((item, originalIndex) => ({ item, originalIndex, strokeCount: strokeCountFor(item.kanji) }))
    .sort((a, b) => a.strokeCount - b.strokeCount || a.originalIndex - b.originalIndex)
    .map(({ item, strokeCount }, index): KanjiLearningItem => ({
      ...item,
      order: index + 1,
      strokeCount,
      difficulty: difficulty(strokeCount),
      category: categoryFor(item.kanji),
      radical: radicalFor(item.kanji),
    }));

  return stageBlueprints.map((stage, index) => {
    const kanji = sorted.slice(index * 10, index * 10 + 10);
    const firstStroke = kanji[0]?.strokeCount ?? 0;
    const lastStroke = kanji.at(-1)?.strokeCount ?? firstStroke;
    return {
      ...stage,
      level: index + 1,
      subtitle: `${firstStroke}–${lastStroke} stroke · easy → complex`,
      kanji,
    };
  }).filter((stage) => stage.kanji.length > 0);
}

export const n5KanjiLearningPath = buildKanjiLearningPath();
