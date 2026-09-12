import { minnaN4KanjiByUnit } from "@/lib/minna-n4-unit-kanji";
import { minnaN5KanjiByUnit, type UnitKanji } from "@/lib/minna-n5-unit-kanji";

// Exact sequence supplied by the owner. Each four-character row becomes one stage.
export const n4ReferenceRows = [
  "春夏秋冬", "化物理科", "安高売買", "部屋品家", "自員私体", "試験使用",
  "音楽歌声", "話説作合", "考知思心", "重動働力", "英字文漢", "田肉野菜",
  "運転通不", "犬鳥牛好", "勉強習教", "朝夜旅風", "正答質問", "近遠場所",
  "方住地図", "発着和洋", "広明室館", "走歩止短", "開閉門店", "工事産業",
  "病院死者", "県市区町",
] as const;

export const n4ReferenceOrder = Array.from(n4ReferenceRows.join(""));

const supplementalKanji: UnitKanji[] = [
  { kanji: "夏", meaning: "গ্রীষ্মকাল", readings: "なつ・か", example: "夏休み · なつやすみ" },
  { kanji: "秋", meaning: "শরৎকাল", readings: "あき・しゅう", example: "秋 · あき" },
  { kanji: "冬", meaning: "শীতকাল", readings: "ふゆ・とう", example: "冬 · ふゆ" },
  { kanji: "化", meaning: "পরিবর্তন/রূপান্তর", readings: "か・ば(ける)", example: "変化 · へんか" },
  { kanji: "科", meaning: "বিষয়/বিভাগ", readings: "か", example: "科学 · かがく" },
  { kanji: "品", meaning: "পণ্য/জিনিস", readings: "しな・ひん", example: "品物 · しなもの" },
  { kanji: "体", meaning: "শরীর", readings: "からだ・たい", example: "体 · からだ" },
  { kanji: "歌", meaning: "গান", readings: "うた・か", example: "歌 · うた" },
  { kanji: "声", meaning: "কণ্ঠস্বর", readings: "こえ・せい", example: "声 · こえ" },
  { kanji: "説", meaning: "ব্যাখ্যা/মতবাদ", readings: "せつ・と(く)", example: "説明 · せつめい" },
  { kanji: "考", meaning: "চিন্তা করা", readings: "かんが(える)・こう", example: "考えます · かんがえます" },
  { kanji: "重", meaning: "ভারী/গুরুত্বপূর্ণ", readings: "おも(い)・じゅう", example: "重い · おもい" },
  { kanji: "運", meaning: "বহন/ভাগ্য", readings: "うん・はこ(ぶ)", example: "運びます · はこびます" },
  { kanji: "不", meaning: "না/অ-", readings: "ふ・ぶ", example: "不便 · ふべん" },
  { kanji: "旅", meaning: "ভ্রমণ", readings: "たび・りょ", example: "旅行 · りょこう" },
  { kanji: "答", meaning: "উত্তর", readings: "こた(える)・とう", example: "答え · こたえ" },
  { kanji: "遠", meaning: "দূর", readings: "とお(い)・えん", example: "遠い · とおい" },
  { kanji: "発", meaning: "শুরু/রওনা", readings: "はつ・はっ", example: "発車 · はっしゃ" },
  { kanji: "和", meaning: "মিল/জাপানি ধরন", readings: "わ・やわ(らぐ)", example: "和食 · わしょく" },
  { kanji: "洋", meaning: "পাশ্চাত্য/মহাসাগর", readings: "よう", example: "洋食 · ようしょく" },
  { kanji: "広", meaning: "প্রশস্ত", readings: "ひろ(い)・こう", example: "広い · ひろい" },
  { kanji: "短", meaning: "ছোট/খাটো", readings: "みじか(い)・たん", example: "短い · みじかい" },
  { kanji: "門", meaning: "ফটক/দরজা", readings: "もん", example: "門 · もん" },
  { kanji: "工", meaning: "নির্মাণ/কারিগরি", readings: "こう・く", example: "工場 · こうじょう" },
  { kanji: "死", meaning: "মৃত্যু/মারা যাওয়া", readings: "し・し(ぬ)", example: "死にます · しにます" },
  { kanji: "区", meaning: "ওয়ার্ড/এলাকা", readings: "く", example: "区役所 · くやくしょ" },
];

function buildBasicN4Kanji(): UnitKanji[] {
  const source = new Map(
    [
      ...Object.values(minnaN5KanjiByUnit).flat(),
      ...Object.values(minnaN4KanjiByUnit).flat(),
      ...supplementalKanji,
    ].map((item) => [item.kanji, item]),
  );

  return n4ReferenceOrder.map((kanji) => {
    const item = source.get(kanji);
    if (!item) throw new Error(`Missing N4 reference data for ${kanji}`);
    return item;
  });
}

export const basicN4Kanji = buildBasicN4Kanji();
