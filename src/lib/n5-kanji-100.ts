import { minnaN5KanjiByUnit, type UnitKanji } from "@/lib/minna-n5-unit-kanji";

// The first 100 unique kanji introduced across Minna no Nihongo N5 units
// 1–25, in the order they first appear. Reuses the already-reviewed
// meaning/reading/example data from minna-n5-unit-kanji.ts instead of a
// separately authored "official N5 list", since JLPT no longer publishes an
// official kanji list and third-party lists disagree—this keeps the data
// consistent with the rest of the N5 book project and genuinely reflects
// the most basic, earliest-taught kanji in this course.
function buildBasicN5Kanji(): UnitKanji[] {
  const seen = new Set<string>();
  const result: UnitKanji[] = [];

  const unitNumbers = Object.keys(minnaN5KanjiByUnit)
    .map(Number)
    .sort((a, b) => a - b);

  for (const unitNumber of unitNumbers) {
    for (const item of minnaN5KanjiByUnit[unitNumber]) {
      if (seen.has(item.kanji)) continue;
      seen.add(item.kanji);
      result.push(item);
      if (result.length === 100) return result;
    }
  }

  return result;
}

export const basicN5Kanji: UnitKanji[] = buildBasicN5Kanji();
