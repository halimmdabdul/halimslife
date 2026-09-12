import { basicN4Kanji, n4ReferenceRows } from "@/lib/n4-kanji-104";
import {
  radicalFor,
  type KanjiLearningItem,
  type KanjiLearningStage,
} from "@/lib/n5-kanji-learning-path";

export const n4KanjiCategories = [
  "ঋতু, সময় ও প্রকৃতি",
  "বিজ্ঞান ও শিক্ষা",
  "ভাষা, সংগীত ও ভাবনা",
  "মানুষ ও শরীর",
  "বাড়ি, কেনাকাটা ও দৈনন্দিন",
  "খাবার ও প্রাণী",
  "চলাচল ও ভ্রমণ",
  "স্থান ও প্রশাসন",
  "কাজ, শক্তি ও শিল্প",
  "সংস্কৃতি ও ধরন",
] as const;

const categoryGroups: Array<{ category: (typeof n4KanjiCategories)[number]; members: string }> = [
  { category: "ঋতু, সময় ও প্রকৃতি", members: "春夏秋冬朝夜風明" },
  { category: "বিজ্ঞান ও শিক্ষা", members: "化物理科試験考知思勉強習教正答質問" },
  { category: "ভাষা, সংগীত ও ভাবনা", members: "音楽歌声話説作合心英字文漢" },
  { category: "মানুষ ও শরীর", members: "自員私体者病死" },
  { category: "বাড়ি, কেনাকাটা ও দৈনন্দিন", members: "安高売買部屋品家使用好不開閉門店" },
  { category: "খাবার ও প্রাণী", members: "田肉野菜犬鳥牛" },
  { category: "চলাচল ও ভ্রমণ", members: "運転通旅近遠発着走歩止短" },
  { category: "স্থান ও প্রশাসন", members: "場所方住地図広室館院県市区町" },
  { category: "কাজ, শক্তি ও শিল্প", members: "重動働力工事産業" },
  { category: "সংস্কৃতি ও ধরন", members: "和洋" },
];

const strokeGroups: Record<number, string> = {
  2: "力",
  3: "工",
  4: "化心文不犬牛方止区",
  5: "冬用田正広市",
  6: "安自合考字肉好地死",
  7: "売私体声作近住走町図",
  8: "物使知英夜所和明歩門店事者",
  9: "春秋科屋品音思重風発洋室県",
  10: "夏高家員通勉旅病院",
  11: "理部動野菜転鳥強習教問閉産",
  12: "買運朝答場着短開",
  13: "試楽話働漢遠業",
  14: "歌説",
  15: "質",
  16: "館",
  18: "験",
};

const stageTitles = [
  "চার ঋতু", "বিজ্ঞান", "নিরাপদ কেনাকাটা", "ঘর ও পরিবার", "নিজ ও শরীর",
  "পরীক্ষা ও ব্যবহার", "সংগীত ও কণ্ঠ", "কথা ও সৃষ্টি", "মন ও চিন্তা", "শক্তি ও কাজ",
  "ভাষা ও লিপি", "খাদ্য ও শস্য", "যাতায়াত", "প্রাণী", "অধ্যয়ন",
  "দিন ও ভ্রমণ", "প্রশ্ন ও উত্তর", "দূরত্ব ও স্থান", "বসবাস ও মানচিত্র", "যাত্রা ও সংস্কৃতি",
  "বিস্তার ও ভবন", "গতি ও দৈর্ঘ্য", "দরজা ও দোকান", "শিল্প ও পেশা", "স্বাস্থ্য ও মানুষ",
  "প্রশাসনিক এলাকা",
] as const;

function strokeCountFor(kanji: string) {
  const match = Object.entries(strokeGroups).find(([, members]) => members.includes(kanji));
  return match ? Number(match[0]) : 99;
}

function categoryFor(kanji: string) {
  return categoryGroups.find((group) => group.members.includes(kanji))?.category ?? n4KanjiCategories[0];
}

function difficulty(strokeCount: number): KanjiLearningItem["difficulty"] {
  if (strokeCount <= 6) return "সহজ";
  if (strokeCount <= 11) return "মাঝারি";
  return "চ্যালেঞ্জ";
}

export function buildN4KanjiLearningPath(): KanjiLearningStage[] {
  const byKanji = new Map(
    basicN4Kanji.map((item, index) => {
      const strokeCount = strokeCountFor(item.kanji);
      const learningItem: KanjiLearningItem = {
        ...item,
        order: index + 1,
        strokeCount,
        difficulty: difficulty(strokeCount),
        category: categoryFor(item.kanji),
        radical: radicalFor(item.kanji),
      };
      return [item.kanji, learningItem];
    }),
  );

  let start = 0;
  return n4ReferenceRows.map((row, index) => {
    const kanji = Array.from(row).map((character) => byKanji.get(character)).filter((item): item is KanjiLearningItem => Boolean(item));
    const stage: KanjiLearningStage = {
      id: `n4-reference-${String(index + 1).padStart(2, "0")}`,
      level: index + 1,
      title: stageTitles[index],
      subtitle: `ক্রম ${start + 1}–${start + kanji.length} · reference row`,
      story: "আপনার দেওয়া চারটি Kanji একই row ও একই serial-এ রেখে reading, meaning ও shape-story অনুশীলন করুন।",
      mission: "চারটি card-এর meaning, reading ও shape-story recall করুন",
      kanji,
    };
    start += kanji.length;
    return stage;
  });
}

export const n4KanjiLearningPath = buildN4KanjiLearningPath();
