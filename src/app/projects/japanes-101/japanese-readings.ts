import { calendarDay, calendarMonth, drinkQuantity, shoppingQuantity, yenReading } from "./japanese-numbers";

// Curated readings for these lessons, not a general-purpose name/kanji translator.
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
  毎日: "まいにち", 毎朝: "まいあさ", 生活: "せいかつ", 平日: "へいじつ", 週末: "しゅうまつ",
  午前: "ごぜん", 午後: "ごご", 何時: "なんじ", 朝: "あさ", 昼: "ひる", 夜: "よる", 半: "はん",
  会社: "かいしゃ", 学校: "がっこう", 電車: "でんしゃ", 自転車: "じてんしゃ", 家: "いえ",
  物: "もの", 円: "えん", 冊: "さつ", 枚: "まい", 全部: "ぜんぶ", 現金: "げんきん",
  一度: "いちど", 白: "しろ", 黒: "くろ", 青: "あお", 赤: "あか",
  注文: "ちゅうもん", 決: "き", 水: "みず", 茶: "ちゃ", 会計: "かいけい", 杯: "はい",
  苦手: "にがて", 卵: "たまご", 牛乳: "ぎゅうにゅう", 肉: "にく", 確認: "かくにん", 少々: "しょうしょう",
  道案内: "みちあんない", 交通: "こうつう", 駅: "えき", 公園: "こうえん", 店: "みせ", 空港: "くうこう",
  左: "ひだり", 右: "みぎ", 曲: "ま", 北: "きた", 東: "ひがし", 南: "みなみ", 西: "にし", 分: "ふん",
  予定: "よてい", 月曜日: "げつようび", 火曜日: "かようび", 水曜日: "すいようび",
  木曜日: "もくようび", 金曜日: "きんようび", 土曜日: "どようび", 日曜日: "にちようび",
  入口: "いりぐち", 映画: "えいが", 大丈夫: "だいじょうぶ", 今度: "こんど",
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
  const pattern = /\d+年|\d+時|\d+円|\d+冊|\d+枚|\d+杯|\d+分|\d+月|\d+日|[一-鿿々]+/gu;
  let lastIndex = 0;
  for (const match of text.matchAll(pattern)) {
    const word = match[0];
    const offset = match.index;
    if (offset > lastIndex) segments.push({ text: text.slice(lastIndex, offset) });
    const after = text.slice(offset + word.length);
    let reading = /\d+年/u.test(word) ? yearReading(Number(word.slice(0, -1))) : readings[word];
    if (/^\d+円$/u.test(word)) reading = yenReading(Number(word.slice(0, -1)))?.kana;
    if (/^\d+月$/u.test(word)) reading = calendarMonth(Number(word.slice(0, -1)))?.kana;
    if (/^\d+日$/u.test(word)) reading = calendarDay(Number(word.slice(0, -1)))?.kana;
    if (word === "誘") reading = after.startsWith("い") ? "さそ" : undefined;
    if (word === "会") reading = after.startsWith("い") || after.startsWith("う") ? "あ" : undefined;
    if (word === "見") reading = after.startsWith("に") || after.startsWith("ま") || after.startsWith("る") ? "み" : undefined;
    if (word === "日" && text.slice(0, offset).endsWith("その")) reading = "ひ";
    if (/^\d+[冊枚]$/u.test(word)) reading = shoppingQuantity(word.endsWith("冊") ? "satsu" : "mai", Number(word.slice(0, -1)))?.kana;
    if (/^\d+杯$/u.test(word)) reading = drinkQuantity(Number(word.slice(0, -1)))?.kana;
    if (/^\d+分$/u.test(word)) {
      const minutes: Record<number, string> = { 5: "ごふん", 10: "じゅっぷん", 15: "じゅうごふん", 20: "にじゅっぷん", 30: "さんじゅっぷん" };
      reading = minutes[Number(word.slice(0, -1))];
    }
    if (word === "降") reading = after.startsWith("り") || after.startsWith("る") ? "お" : undefined;
    if (word === "入") reading = after.startsWith("って") ? "はい" : undefined;
    if (word === "飲") reading = after.startsWith("み") || after.startsWith("む") ? "の" : undefined;
    if (word === "待") reading = after.startsWith("ち") || after.startsWith("つ") ? "ま" : undefined;
    if (word === "辛") reading = after.startsWith("い料理") ? "から" : undefined;
    if (word === "買") reading = after.startsWith("い") || after.startsWith("う") ? "か" : undefined;
    if (word === "払") reading = after.startsWith("え") || after.startsWith("い") || after.startsWith("う") ? "はら" : undefined;
    if (/^\d+時$/u.test(word)) {
      const hour = Number(word.slice(0, -1));
      const hours = ["れいじ", "いちじ", "にじ", "さんじ", "よじ", "ごじ", "ろくじ", "しちじ", "はちじ", "くじ", "じゅうじ", "じゅういちじ", "じゅうにじ"];
      reading = Number.isInteger(hour) && hour >= 0 && hour <= 12 ? hours[hour] : undefined;
    }
    if (word === "起") reading = after.startsWith("き") ? "お" : undefined;
    if (word === "食") reading = after.startsWith("べ") ? "た" : undefined;
    if (word === "行") reading = after.startsWith("き") || after.startsWith("く") || after.startsWith("って") ? "い" : undefined;
    if (word === "寝") reading = after.startsWith("ま") || after.startsWith("る") ? "ね" : undefined;
    if (word === "帰") reading = after.startsWith("り") || after.startsWith("る") ? "かえ" : undefined;
    if (word === "歩") reading = after.startsWith("いて") ? "ある" : undefined;
    if (word === "過") reading = after.startsWith("ご") ? "す" : undefined;
    if (word === "来") reading = after.startsWith("ました") ? "き" : after.startsWith("る") ? "く" : undefined;
    if (word === "何") reading = after.startsWith("です") ? "なん" : after.startsWith("を") || after.startsWith("が") ? "なに" : undefined;
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
