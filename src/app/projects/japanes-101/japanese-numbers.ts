type NumberReading = { kana: string; romaji: string };
const units = ["", "いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう"];
const romanUnits = ["", "ichi", "ni", "san", "yon", "go", "roku", "nana", "hachi", "kyuu"];
const hundreds = ["", "ひゃく", "にひゃく", "さんびゃく", "よんひゃく", "ごひゃく", "ろっぴゃく", "ななひゃく", "はっぴゃく", "きゅうひゃく"];
const romanHundreds = ["", "hyaku", "nihyaku", "sanbyaku", "yonhyaku", "gohyaku", "roppyaku", "nanahyaku", "happyaku", "kyuuhyaku"];
const thousands = ["", "せん", "にせん", "さんぜん", "よんせん", "ごせん", "ろくせん", "ななせん", "はっせん", "きゅうせん"];
const romanThousands = ["", "sen", "nisen", "sanzen", "yonsen", "gosen", "rokusen", "nanasen", "hassen", "kyuusen"];

// Bounded to the lesson's positive whole-yen prices; no decimal/counter guessing.
export function japaneseNumber(value: number): NumberReading | undefined {
  if (!Number.isInteger(value) || value < 1 || value > 99999) return undefined;
  const man = Math.floor(value / 10000);
  const thousand = Math.floor(value / 1000) % 10;
  const hundred = Math.floor(value / 100) % 10;
  const ten = Math.floor(value / 10) % 10;
  const unit = value % 10;
  const kana = [man ? `${units[man]}まん` : "", thousands[thousand], hundreds[hundred], ten ? `${ten === 1 ? "" : units[ten]}じゅう` : "", units[unit]].join("");
  const romaji = [man ? `${romanUnits[man]}man` : "", romanThousands[thousand], romanHundreds[hundred], ten ? `${ten === 1 ? "" : romanUnits[ten]}juu` : "", romanUnits[unit]].filter(Boolean).join(" ");
  return { kana, romaji };
}

export function yenReading(value: number): NumberReading | undefined {
  const number = japaneseNumber(value);
  return number ? { kana: `${number.kana}えん`, romaji: `${number.romaji}-en` } : undefined;
}

// Calendar dates, not elapsed-day counters. Keep irregular readings explicit.
export function calendarMonth(value: number): NumberReading | undefined {
  if (!Number.isInteger(value) || value < 1 || value > 12) return undefined;
  const special: Record<number, NumberReading> = {
    4: { kana: "し", romaji: "shi" }, 7: { kana: "しち", romaji: "shichi" }, 9: { kana: "く", romaji: "ku" },
  };
  const number = special[value] ?? japaneseNumber(value)!;
  return { kana: `${number.kana}がつ`, romaji: `${number.romaji}-gatsu` };
}

export function calendarDay(value: number): NumberReading | undefined {
  if (!Number.isInteger(value) || value < 1 || value > 31) return undefined;
  const special: Record<number, NumberReading> = {
    1: { kana: "ついたち", romaji: "tsuitachi" }, 2: { kana: "ふつか", romaji: "futsuka" },
    3: { kana: "みっか", romaji: "mikka" }, 4: { kana: "よっか", romaji: "yokka" },
    5: { kana: "いつか", romaji: "itsuka" }, 6: { kana: "むいか", romaji: "muika" },
    7: { kana: "なのか", romaji: "nanoka" }, 8: { kana: "ようか", romaji: "youka" },
    9: { kana: "ここのか", romaji: "kokonoka" }, 10: { kana: "とおか", romaji: "tooka" },
    14: { kana: "じゅうよっか", romaji: "juu yokka" }, 17: { kana: "じゅうしちにち", romaji: "juu shichi-nichi" },
    19: { kana: "じゅうくにち", romaji: "juu ku-nichi" }, 20: { kana: "はつか", romaji: "hatsuka" },
    24: { kana: "にじゅうよっか", romaji: "nijuu yokka" }, 27: { kana: "にじゅうしちにち", romaji: "nijuu shichi-nichi" },
    29: { kana: "にじゅうくにち", romaji: "nijuu ku-nichi" },
  };
  if (special[value]) return special[value];
  const number = japaneseNumber(value)!;
  return { kana: `${number.kana}にち`, romaji: `${number.romaji}-nichi` };
}

export type ShoppingCounter = "tsu" | "satsu" | "mai";
export function drinkQuantity(value: number) {
  if (!Number.isInteger(value) || value < 1 || value > 3) return undefined;
  return { japanese: `${value}杯`, kana: ["", "いっぱい", "にはい", "さんばい"][value], romaji: ["", "ippai", "ni-hai", "san-bai"][value] };
}

export function shoppingQuantity(counter: ShoppingCounter, value: number) {
  if (!Number.isInteger(value) || value < 1 || value > 5) return undefined;
  if (counter === "tsu") {
    const kana = ["", "ひとつ", "ふたつ", "みっつ", "よっつ", "いつつ"][value];
    return { japanese: kana, kana, romaji: ["", "hitotsu", "futatsu", "mittsu", "yottsu", "itsutsu"][value] };
  }
  if (counter === "satsu") return { japanese: `${value}冊`, kana: ["", "いっさつ", "にさつ", "さんさつ", "よんさつ", "ごさつ"][value], romaji: ["", "issatsu", "ni-satsu", "san-satsu", "yon-satsu", "go-satsu"][value] };
  if (counter === "mai") return { japanese: `${value}枚`, kana: `${units[value]}まい`, romaji: `${romanUnits[value]}-mai` };
  return undefined;
}
