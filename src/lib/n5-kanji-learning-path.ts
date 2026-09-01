import type { UnitKanji } from "@/lib/minna-n5-unit-kanji";
import { basicN5Kanji } from "@/lib/n5-kanji-100";

export type RadicalProfile = {
  symbol: string;
  name: string;
  clue: string;
};

export type KanjiLearningItem = UnitKanji & {
  order: number;
  strokes: "সহজ" | "মাঝারি" | "চ্যালেঞ্জ";
  radical: RadicalProfile;
};

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

const stageBlueprints = [
  {
    id: "picture-seeds",
    title: "ছবি থেকে Kanji",
    subtitle: "এক stroke, এক ছবি",
    story: "ভোরে একজন মানুষ পাহাড়ের পাশে দাঁড়িয়ে সূর্য, চাঁদ, গাছ, নদী ও ক্ষেত দেখল। Kanji-র শুরু প্রকৃতির এই ছবিগুলো থেকেই।",
    mission: "অক্ষর না ভেবে silhouette চিনুন",
    order: "一人大中日本土上下方",
  },
  {
    id: "number-ladder",
    title: "পরিচয়ের দরজা",
    subtitle: "আমি, নাম, দেশ ও পরিচয়",
    story: "একজন নতুন বন্ধুর সঙ্গে দেখা: আমি কে, নাম কী, কোন দেশের মানুষ—সহজ shape দিয়ে পুরো পরিচয় বলা যায়।",
    mission: "নিজের পরিচয় kanji ধরে বলুন",
    order: "私先姓名何国韓英歳",
  },
  {
    id: "space-map",
    title: "শেখার Workshop",
    subtitle: "শিক্ষা থেকে গবেষণা",
    story: "ছাদের নিচে ছাত্র শেখে, শিক্ষক বোঝান, তারপর পাথর ঘষে উত্তর খোঁজার মতো গবেষণা চলে।",
    mission: "প্রতিটি complex kanji-তে ছোট অংশ খুঁজুন",
    order: "学教師研究勉強新",
  },
  {
    id: "clock-river",
    title: "কাজের শহর",
    subtitle: "মানুষ থেকে প্রতিষ্ঠান",
    story: "মানুষ একা নয়—company, bank, hospital ও office-এ ভিন্ন ভিন্ন ভূমিকায় কাজ করে। পরিচিত radical নতুন পেশা বানায়।",
    mission: "亻, 金 ও 疒 radical আগে ধরুন",
    order: "会社員銀行医者病院働休",
  },
  {
    id: "people-village",
    title: "শব্দের Newsroom",
    subtitle: "বই, খবর ও ভাষা",
    story: "একটি newsroom-এ dictionary, book, newspaper ও magazine; কেউ পড়ে, কেউ শোনে, কেউ কথা বলে।",
    mission: "言 ও 門 family আলাদা করে চিনুন",
    order: "辞書聞雑誌話語図館",
  },
  {
    id: "school-voices",
    title: "Building Explorer",
    subtitle: "ঘর থেকে meeting room",
    story: "একটি building-এ reception, room, dining hall, office ও meeting room—প্রতিটি জায়গায় আলাদা কাজ।",
    mission: "স্থান বোঝানো radical আগে বলুন",
    order: "場所室食堂事務議受付部屋",
  },
  {
    id: "moving-city",
    title: "দিনের Route",
    subtitle: "তলা, সিঁড়ি ও চলাচল",
    story: "ঘুম থেকে উঠে stairs দিয়ে নিচে, car-এ post office ও library—একটি route-এ place এবং action একসঙ্গে মনে থাকে।",
    mission: "ছবির route ধরে kanji বলুন",
    order: "階段地起寝終郵便局車",
  },
  {
    id: "compound-mountain",
    title: "Machine Market",
    subtitle: "বিদ্যুৎ, মেশিন ও টাকা",
    story: "বিদ্যুৎ চালু হলে vending machine নিজে বিক্রি করে; পাশে ১০০, ১,০০০ ও ১০,০০০ yen-এর হিসাব।",
    mission: "compound ভেঙে অর্থ অনুমান করুন",
    order: "電気自動販売機百千万円産",
  },
  {
    id: "symbol-summit",
    title: "Symbol Summit",
    subtitle: "নাম ও সংস্কৃতির complex shape",
    story: "শেষ চূড়ায় Kobe, Fuji, shrine, shoes ও beauty—কম ব্যবহৃত কিন্তু distinctive shape-গুলো নিজস্ব দৃশ্য পায়।",
    mission: "প্রতিটি shape দিয়ে নিজের গল্প বানান",
    order: "神戸富士靴美",
  },
] as const;

function difficulty(index: number): KanjiLearningItem["strokes"] {
  if (index < 32) return "সহজ";
  if (index < 72) return "মাঝারি";
  return "চ্যালেঞ্জ";
}

export function buildKanjiLearningPath(items = basicN5Kanji): KanjiLearningStage[] {
  const source = new Map(items.map((item) => [item.kanji, item]));
  const used = new Set<string>();
  let runningOrder = 0;

  const stages: KanjiLearningStage[] = stageBlueprints.map((stage, index) => {
    const kanji = Array.from(stage.order)
      .filter((character) => source.has(character) && !used.has(character))
      .map((character) => {
        used.add(character);
        const item = source.get(character)!;
        return {
          ...item,
          order: ++runningOrder,
          strokes: difficulty(runningOrder - 1),
          radical: radicalFor(character),
        };
      });

    return { ...stage, level: index + 1, kanji };
  });

  const remaining = items
    .filter((item) => !used.has(item.kanji))
    .map((item) => ({
      ...item,
      order: ++runningOrder,
      strokes: difficulty(runningOrder - 1),
      radical: radicalFor(item.kanji),
    }));

  if (remaining.length) {
    stages.push({
      id: "final-expedition",
      level: stages.length + 1,
      title: "Final Expedition",
      subtitle: "বাকি shape-গুলোর অভিযান",
      story: "সব foundational skill ব্যবহার করে নতুন kanji ভাঙুন: radical খুঁজুন, পরিচিত অংশ ধরুন, তারপর নিজস্ব গল্প বানান।",
      mission: "নিজের mnemonic মুখে বলুন",
      kanji: remaining,
    });
  }

  return stages.filter((stage) => stage.kanji.length > 0);
}

export const n5KanjiLearningPath = buildKanjiLearningPath();
