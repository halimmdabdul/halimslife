import { minnaN5KanjiByUnit, type UnitKanji } from "@/lib/minna-n5-unit-kanji";

// Exact printed sequence from the owner's supplied N5 reference page.
// Handwritten margin notes and circles are annotations, not list entries.
export const n5ReferenceOrder = Array.from(
  "一二三四五六七八九十百千万円曜週年日月火水木金土午今分半毎何時計間男女父母子友人手目足耳口右左前後上下中外北南西東白花川山空天気雨学校生先体本書読見聞言語車駅会社行来出入国道安高飲食魚長古新小大少多買電名立",
);

const supplementalKanji: UnitKanji[] = [
  { kanji: "計", meaning: "গণনা/মাপা", readings: "けい・はか(る)", example: "時計 · とけい／計ります · はかります" },
  { kanji: "目", meaning: "চোখ", readings: "め・もく", example: "目 · め" },
  { kanji: "足", meaning: "পা/যথেষ্ট হওয়া", readings: "あし・そく・た(りる)", example: "足 · あし" },
  { kanji: "耳", meaning: "কান", readings: "みみ・じ", example: "耳 · みみ" },
  { kanji: "口", meaning: "মুখ/প্রবেশপথ", readings: "くち・こう", example: "口 · くち" },
  { kanji: "南", meaning: "দক্ষিণ", readings: "みなみ・なん", example: "南 · みなみ" },
  { kanji: "川", meaning: "নদী", readings: "かわ・せん", example: "川 · かわ" },
  { kanji: "空", meaning: "আকাশ/খালি", readings: "そら・くう・あ(く)", example: "空 · そら" },
  { kanji: "体", meaning: "শরীর", readings: "からだ・たい", example: "体 · からだ" },
  { kanji: "少", meaning: "অল্প/কম", readings: "すく(ない)・しょう", example: "少ない · すくない" },
  { kanji: "多", meaning: "বেশি/অনেক", readings: "おお(い)・た", example: "多い · おおい" },
];

function buildBasicN5Kanji(): UnitKanji[] {
  const source = new Map(
    [...Object.values(minnaN5KanjiByUnit).flat(), ...supplementalKanji]
      .map((item) => [item.kanji, item]),
  );

  return n5ReferenceOrder.map((kanji) => {
    const item = source.get(kanji);
    if (!item) throw new Error(`Missing N5 reference data for ${kanji}`);
    return item;
  });
}

export const basicN5Kanji: UnitKanji[] = buildBasicN5Kanji();
