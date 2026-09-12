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
  category: string;
  radical: RadicalProfile;
};

export const kanjiCategories = [
  "সংখ্যা ও পরিমাণ",
  "সময় ও ক্যালেন্ডার",
  "মানুষ ও শরীর",
  "দিক, স্থান ও প্রকৃতি",
  "শিক্ষা ও ভাষা",
  "চলাচল ও সমাজ",
  "বর্ণনা ও অবস্থা",
  "খাবার, কেনাকাটা ও প্রযুক্তি",
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

// Accepted stroke counts from KANJIDIC2. These label card complexity while
// display order remains identical to the owner's printed reference sequence.
const strokeGroups: Record<number, string> = {
  1: "一",
  2: "二七八九十人入",
  3: "三千万土女子口上下川山小大",
  4: "五六円日月火水木午今分父友手中天少",
  5: "四半母目右左外北白生本出古立",
  6: "百年毎耳西気先会行安多名",
  7: "何男足花体見言車社来",
  8: "金東空雨学国長",
  9: "計前後南食",
  10: "時校書高",
  11: "週魚",
  12: "間道飲買",
  13: "新電",
  14: "読聞語駅",
  18: "曜",
};

const categoryGroups: Array<{ category: KanjiCategory; members: string }> = [
  { category: "সংখ্যা ও পরিমাণ", members: "一二三四五六七八九十百千万円" },
  { category: "সময় ও ক্যালেন্ডার", members: "曜週年日月火水木金土午今分半毎何時計間" },
  { category: "মানুষ ও শরীর", members: "男女父母子友人手目足耳口体" },
  { category: "দিক, স্থান ও প্রকৃতি", members: "右左前後上下中外北南西東白花川山空天気雨" },
  { category: "শিক্ষা ও ভাষা", members: "学校生先本書読見聞言語" },
  { category: "চলাচল ও সমাজ", members: "車駅会社行来出入国道" },
  { category: "বর্ণনা ও অবস্থা", members: "安高長古新小大少多名立" },
  { category: "খাবার, কেনাকাটা ও প্রযুক্তি", members: "飲食魚買電" },
];

const stageBlueprints = [
  { id: "reference-01", title: "সংখ্যার শুরু" },
  { id: "reference-02", title: "সংখ্যা ও Calendar" },
  { id: "reference-03", title: "দিন ও সময়" },
  { id: "reference-04", title: "সময় ও পরিবার" },
  { id: "reference-05", title: "শরীর ও দিক" },
  { id: "reference-06", title: "দিক ও প্রকৃতি" },
  { id: "reference-07", title: "প্রকৃতি ও শিক্ষা" },
  { id: "reference-08", title: "পড়া ও ভাষা" },
  { id: "reference-09", title: "যাত্রা ও সমাজ" },
  { id: "reference-10", title: "খাবার ও বর্ণনা" },
  { id: "reference-11", title: "শেষ ধাপ" },
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
  const ordered = items.map((item, index): KanjiLearningItem => {
    const strokeCount = strokeCountFor(item.kanji);
    return {
      ...item,
      order: index + 1,
      strokeCount,
      difficulty: difficulty(strokeCount),
      category: categoryFor(item.kanji),
      radical: radicalFor(item.kanji),
    };
  });

  return stageBlueprints.map((stage, index) => {
    const start = index * 10;
    const kanji = ordered.slice(start, start + 10);
    return {
      ...stage,
      level: index + 1,
      subtitle: `ক্রম ${start + 1}–${start + kanji.length} · reference order`,
      story: "ছবির printed তালিকায় যে ক্রম আছে, সেই ক্রমেই meaning, reading ও example অনুশীলন করুন।",
      mission: "serial না বদলে cardগুলো recall করুন",
      kanji,
    };
  }).filter((stage) => stage.kanji.length > 0);
}

export const n5KanjiLearningPath = buildKanjiLearningPath();
