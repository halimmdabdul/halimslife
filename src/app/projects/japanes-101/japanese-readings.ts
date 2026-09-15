// Curated readings for this lesson, not a general-purpose name/kanji translator.
const readings: Record<string, string> = {
  自己紹介: "じこしょうかい", 自己: "じこ", 名前: "なまえ", 私: "わたし",
  日本: "にほん", 日本語: "にほんご", 日本語学校: "にほんごがっこう",
  現在: "げんざい", 大学: "だいがく", 情報工学: "じょうほうこうがく",
  学生: "がくせい", 会社員: "かいしゃいん", 教師: "きょうし",
  勉強: "べんきょう", 働: "はたら", 申: "もう", 願: "ねが",
  出身: "しゅっしん", 国: "くに", 町: "まち", 住: "す",
  仕事: "しごと", 分野: "ぶんや", 数字: "すうじ", 年: "ねん",
  経験: "けいけん", 強: "つよ", 内容: "ないよう", 最後: "さいご",
  責任: "せきにん", 持: "も", 取: "と", 組: "く", 新: "あたら",
  積極的: "せっきょくてき", 学: "まな", 姿勢: "しせい", 協力: "きょうりょく",
  進: "すす", 今後: "こんご", 円滑: "えんかつ", 活: "い",
  貢献: "こうけん", 考: "かんが", 目標: "もくひょう", 趣味: "しゅみ",
  読書: "どくしょ", 旅行: "りょこう", 料理: "りょうり", 本日: "ほんじつ",
  時間: "じかん", 長: "なが", 教: "おし", 特: "とく", 小説: "しょうせつ",
  好: "す", 作: "つく",
};

function yearReading(years: number): string | undefined {
  if (!Number.isInteger(years) || years < 1 || years > 50) return undefined;
  const units = ["", "いちねん", "にねん", "さんねん", "よねん", "ごねん", "ろくねん", "ななねん", "はちねん", "きゅうねん"];
  const tens = ["", "じゅう", "にじゅう", "さんじゅう", "よんじゅう", "ごじゅう"];
  return `${tens[Math.floor(years / 10)]}${years % 10 === 0 ? "ねん" : units[years % 10]}`;
}

export type JapaneseSegment = { text: string; reading?: string };

// Keep kana/particles separate so they cannot be swallowed by a reading parser.
export function japaneseSegments(text: string): JapaneseSegment[] {
  const segments: JapaneseSegment[] = [];
  const pattern = /\d+年|[一-鿿々]+/gu;
  let lastIndex = 0;
  for (const match of text.matchAll(pattern)) {
    const word = match[0];
    const offset = match.index;
    if (offset > lastIndex) segments.push({ text: text.slice(lastIndex, offset) });
    const after = text.slice(offset + word.length);
    let reading = /\d+年/u.test(word) ? yearReading(Number(word.slice(0, -1))) : readings[word];
    if (word === "来") reading = after.startsWith("ました") ? "き" : after.startsWith("る") ? "く" : undefined;
    if (word === "何") reading = after.startsWith("です") ? "なん" : undefined;
    if (word === "例") reading = after.startsWith("えば") ? "たと" : "れい";
    segments.push({ text: word, reading });
    lastIndex = offset + word.length;
  }
  if (lastIndex < text.length) segments.push({ text: text.slice(lastIndex) });
  return segments;
}

export function annotateJapaneseText(text: string): string {
  return japaneseSegments(text).map((segment) => segment.reading ? `${segment.reading}（${segment.text}）` : segment.text).join("");
}
