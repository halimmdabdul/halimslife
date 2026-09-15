import { shoppingQuantity, yenReading, type ShoppingCounter } from "./japanese-numbers";

export type ShoppingProfile = { item: string; quantity: string; colour: string; size: string; payment: string };
export const emptyShopping: ShoppingProfile = { item: "", quantity: "", colour: "", size: "", payment: "" };
export const shopProducts: { id: string; japanese: string; reading: string; meaning: string; price: number; counter: ShoppingCounter; icon: string }[] = [
  { id: "apple", japanese: "りんご", reading: "Ringo", meaning: "আপেল", price: 150, counter: "tsu", icon: "🍎" },
  { id: "notebook", japanese: "ノート", reading: "Nooto", meaning: "খাতা", price: 380, counter: "satsu", icon: "📓" },
  { id: "shirt", japanese: "ティーシャツ", reading: "Tii-shatsu", meaning: "টি-শার্ট", price: 1800, counter: "mai", icon: "👕" },
];
export const shopColours = [
  { id: "white", japanese: "白い", reading: "Shiroi", meaning: "সাদা", swatch: "#f4f4ee" },
  { id: "black", japanese: "黒い", reading: "Kuroi", meaning: "কালো", swatch: "#26322e" },
  { id: "blue", japanese: "青い", reading: "Aoi", meaning: "নীল", swatch: "#377fbd" },
  { id: "red", japanese: "赤い", reading: "Akai", meaning: "লাল", swatch: "#ba4b49" },
];
export const shopSizes = [
  { id: "s", japanese: "エス", reading: "Esu", label: "S · エス" },
  { id: "m", japanese: "エム", reading: "Emu", label: "M · エム" },
  { id: "l", japanese: "エル", reading: "Eru", label: "L · エル" },
];
export const shopPayments = [
  { id: "cash", japanese: "現金でお願いします。", reading: "Genkin de onegaishimasu.", meaning: "নগদে দেব।" },
  { id: "card", japanese: "カードで払えますか。", reading: "Kaado de haraemasu ka?", meaning: "কার্ডে দিতে পারব?" },
];
export type ShoppingLine = { role: "customer" | "clerk"; japanese: string; reading: string; meaning: string };

export function shoppingSelection(profile: ShoppingProfile) {
  const product = shopProducts.find((item) => item.id === profile.item);
  if (!product) return undefined;
  const quantity = /^[1-5]$/u.test(profile.quantity) ? shoppingQuantity(product.counter, Number(profile.quantity)) : undefined;
  const colour = product.id === "shirt" ? shopColours.find((item) => item.id === profile.colour) : undefined;
  const size = product.id === "shirt" ? shopSizes.find((item) => item.id === profile.size) : undefined;
  const total = quantity ? product.price * Number(profile.quantity) : undefined;
  return { product, quantity, colour, size, total };
}

export function buildShoppingScript(profile: ShoppingProfile): ShoppingLine[] {
  const selection = shoppingSelection(profile);
  if (!selection) return [];
  const { product, colour, size, quantity, total } = selection;
  const item = `${colour?.japanese ?? ""}${product.japanese}`;
  const itemReading = `${colour ? `${colour.reading} ` : ""}${product.reading}`;
  const lines: ShoppingLine[] = [
    { role: "customer", japanese: `すみません。この${product.japanese}はいくらですか。`, reading: `Sumimasen. Kono ${product.reading} wa ikura desu ka?`, meaning: `মাফ করবেন, এই ${product.meaning}-এর দাম কত?` },
    { role: "clerk", japanese: `${product.price}円です。`, reading: `${yenReading(product.price)!.romaji} desu.`, meaning: `একটির দাম ${product.price} yen।` },
  ];
  if (colour) lines.push(
    { role: "customer", japanese: `${item}はありますか。`, reading: `${itemReading} wa arimasu ka?`, meaning: `${colour.meaning} ${product.meaning} আছে?` },
    { role: "clerk", japanese: "はい、あります。", reading: "Hai, arimasu.", meaning: "হ্যাঁ, আছে। (এই sample shop-এ আছে ধরে নেওয়া হয়েছে।)" },
  );
  if (size) lines.push(
    { role: "customer", japanese: `${size.japanese}サイズはありますか。`, reading: `${size.reading} saizu wa arimasu ka?`, meaning: `${size.id.toUpperCase()} size আছে?` },
    { role: "clerk", japanese: "はい、あります。", reading: "Hai, arimasu.", meaning: "হ্যাঁ, আছে। (Sample response।)" },
  );
  if (quantity && total !== undefined) {
    lines.push({ role: "customer", japanese: `${item}を${quantity.japanese}ください。`, reading: `${itemReading} o ${quantity.romaji} kudasai.`, meaning: `${colour ? `${colour.meaning} ` : ""}${product.meaning} ${profile.quantity}টি দিন।` });
    if (size) lines.push({ role: "customer", japanese: `サイズは${size.japanese}でお願いします。`, reading: `Saizu wa ${size.reading} de onegaishimasu.`, meaning: `${size.id.toUpperCase()} size দিন।` });
    lines.push({ role: "clerk", japanese: `全部で${total}円です。`, reading: `Zenbu de ${yenReading(total)!.romaji} desu.`, meaning: `সব মিলিয়ে ${total} yen।` });
    const payment = shopPayments.find((item) => item.id === profile.payment);
    if (payment) {
      lines.push({ role: "customer", ...payment });
      if (payment.id === "card") lines.push({ role: "clerk", japanese: "はい、カードで払えます。", reading: "Hai, kaado de haraemasu.", meaning: "হ্যাঁ, কার্ডে দিতে পারবেন। (Sample shop-এর উত্তর; বাস্তবে আগে জিজ্ঞেস করুন।)" });
    }
    lines.push({ role: "customer", japanese: "ありがとうございます。", reading: "Arigatou gozaimasu.", meaning: "ধন্যবাদ।" });
  }
  return lines;
}

export const shoppingPhrases = [
  { japanese: "すみません。", reading: "Sumimasen.", meaning: "দোকানদারের মনোযোগ চাইতে: মাফ করবেন।" },
  { japanese: "これはいくらですか。", reading: "Kore wa ikura desu ka?", meaning: "এটার দাম কত?" },
  { japanese: "これをください。", reading: "Kore o kudasai.", meaning: "এটা দিন। これ নিজে noun; この-এর পরে পণ্যের নাম লাগে।" },
  { japanese: "りんごをふたつください。", reading: "Ringo o futatsu kudasai.", meaning: "দুটি আপেল দিন।" },
  { japanese: "白いティーシャツはありますか。", reading: "Shiroi tii-shatsu wa arimasu ka?", meaning: "সাদা টি-শার্ট আছে?" },
  { japanese: "エムサイズはありますか。", reading: "Emu saizu wa arimasu ka?", meaning: "M size আছে?" },
  { japanese: "カードで払えますか。", reading: "Kaado de haraemasu ka?", meaning: "কার্ডে দিতে পারব?" },
  { japanese: "もう一度お願いします。", reading: "Mou ichido onegaishimasu.", meaning: "আবার একবার বলুন, অনুগ্রহ করে। দাম না বুঝলে কাজে লাগবে।" },
];
export const priceExamples = [100, 300, 600, 800, 1000, 3000, 8000, 10000];
// Deterministic questions avoid SSR randomness and let learners replay each price.
export const priceChallenges = [
  { price: 300, options: [300, 3000, 30] },
  { price: 600, options: [60, 6000, 600] },
  { price: 1800, options: [800, 1800, 18000] },
  { price: 380, options: [3800, 380, 830] },
  { price: 8000, options: [8000, 800, 1800] },
];
export function checkPriceAnswer(index: number, answer: number): boolean {
  const challenge = priceChallenges[index];
  return !!challenge && challenge.options.includes(answer) && answer === challenge.price;
}
export const shoppingQuestions = [
  { prompt: "এটার দাম কত—কোন বাক্যটি বলবেন?", options: ["これはいくらですか。", "これはだれですか。", "これはいつですか。"], answer: 0, explanation: "いくら দিয়ে দাম জিজ্ঞেস করি।" },
  { prompt: "দুটি আপেল দিন: りんごを［　］ください。", options: ["にまい", "ふたつ", "にさつ"], answer: 1, explanation: "এই practice-এ আপেল গণনায় つ: ひとつ、ふたつ、みっつ। খাতায় 冊, পোশাকে 枚।" },
  { prompt: "600円-এর সঠিক reading?", options: ["ろくひゃくえん", "ろくせんえん", "ろっぴゃくえん"], answer: 2, explanation: "600円 = ろっぴゃくえん। 300円 = さんびゃくえん; 800円 = はっぴゃくえん।" },
  { prompt: "টি-শার্টের M size চাইছেন—কোনটি ঠিক?", options: ["エムサイズはありますか。", "エムサイズは何時ですか。", "エムサイズに起きます。"], answer: 0, explanation: "ありますか দিয়ে কোনো জিনিস / size আছে কি না জানতে চাই।" },
];
