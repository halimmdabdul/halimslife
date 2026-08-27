import type { CompanionUnit } from "@/lib/minna-n5-companion";

const vocabularyBanks: Record<number, string[]> = {};

function wordKey(item: string) {
  return item.split("—")[0].trim();
}

export function getMinnaN4UnitVocabulary(unit: CompanionUnit) {
  const bank = vocabularyBanks[Math.ceil((unit.number - 25) / 5)] ?? [];
  const unique = new Map<string, string>();
  [...unit.vocabulary, ...bank].forEach((item) => unique.set(wordKey(item), item));
  return Array.from(unique.values()).slice(0, 22);
}
