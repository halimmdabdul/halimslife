import { basicN5Kanji } from "@/lib/n5-kanji-100";
import type { UnitKanji } from "@/lib/minna-n5-unit-kanji";

export type KanjiDay = {
  day: number;
  kanji: UnitKanji[];
};

const TOTAL_DAYS = 30;

// Spreads the 100 basic kanji across a 30-day plan: 20 lighter days of 3
// kanji and 10 slightly heavier days of 4 kanji (20×3 + 10×4 = 100), so a
// learner can commit to "a few new kanji a day" instead of one big list.
function buildDayPlan(): KanjiDay[] {
  const plan: KanjiDay[] = [];
  let cursor = 0;
  for (let day = 1; day <= TOTAL_DAYS; day++) {
    const count = day > 20 ? 4 : 3;
    plan.push({ day, kanji: basicN5Kanji.slice(cursor, cursor + count) });
    cursor += count;
  }
  return plan;
}

export const kanjiDayPlan: KanjiDay[] = buildDayPlan();
