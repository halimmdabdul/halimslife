import { drinkQuantity, shoppingQuantity, yenReading } from "./japanese-numbers";

export type FoodOrderProfile = { food: string; foodCount: string; drink: string; drinkCount: string; service: string; extra: string; ingredient: string };
export const emptyFoodOrder: FoodOrderProfile = { food: "", foodCount: "", drink: "", drinkCount: "", service: "", extra: "", ingredient: "" };
export const restaurantFoods = [
  { id: "burger", japanese: "ハンバーガー", reading: "Hanbaagaa", meaning: "বার্গার", price: 480, icon: "🍔" },
  { id: "udon", japanese: "うどん", reading: "Udon", meaning: "উদন নুডলস", price: 550, icon: "🍜" },
  { id: "curry", japanese: "カレー", reading: "Karee", meaning: "কারি", price: 650, icon: "🍛" },
];
export const restaurantDrinks = [
  { id: "coffee", japanese: "ホットコーヒー", reading: "Hotto koohii", meaning: "গরম কফি", price: 200, icon: "☕" },
  { id: "tea", japanese: "お茶", reading: "Ocha", meaning: "চা", price: 180, icon: "🍵" },
  { id: "juice", japanese: "オレンジジュース", reading: "Orenji juusu", meaning: "কমলার জুস", price: 250, icon: "🧃" },
];
export const restaurantServices = [
  { id: "here", japanese: "ここで食べます。", reading: "Koko de tabemasu.", meaning: "এখানে খাব।", label: "Dine-in · এখানে খাব" },
  { id: "takeaway", japanese: "テイクアウトでお願いします。", reading: "Teikuauto de onegaishimasu.", meaning: "সঙ্গে নিয়ে যাব।", label: "Takeaway · সঙ্গে নেব" },
];
export const restaurantExtras = [
  { id: "water", japanese: "お水をください。", reading: "Omizu o kudasai.", meaning: "পানি দিন।" },
  { id: "spoon", japanese: "スプーンをください。", reading: "Supuun o kudasai.", meaning: "চামচ দিন।" },
  { id: "chopsticks", japanese: "おはしをください。", reading: "Ohashi o kudasai.", meaning: "চপস্টিক দিন।" },
];
export const restaurantIngredients = [
  { id: "egg", japanese: "卵", reading: "Tamago", meaning: "ডিম" },
  { id: "milk", japanese: "牛乳", reading: "Gyuunyuu", meaning: "দুধ" },
  { id: "meat", japanese: "肉", reading: "Niku", meaning: "মাংস" },
];
export type RestaurantLine = { role: "customer" | "staff"; japanese: string; reading: string; meaning: string };
const validCount = (value: string) => /^[1-3]$/u.test(value);

export function restaurantSelection(profile: FoodOrderProfile) {
  const food = restaurantFoods.find((item) => item.id === profile.food);
  const drink = restaurantDrinks.find((item) => item.id === profile.drink);
  const foodQuantity = food && validCount(profile.foodCount) ? shoppingQuantity("tsu", Number(profile.foodCount)) : undefined;
  const cupQuantity = drink && validCount(profile.drinkCount) ? drinkQuantity(Number(profile.drinkCount)) : undefined;
  const complete = !!(foodQuantity || cupQuantity) && (!food || !!foodQuantity) && (!drink || !!cupQuantity);
  const subtotal = (foodQuantity ? food!.price * Number(profile.foodCount) : 0) + (cupQuantity ? drink!.price * Number(profile.drinkCount) : 0);
  return { food, drink, foodQuantity, cupQuantity, complete, total: complete ? subtotal : undefined };
}

export function buildRestaurantScript(profile: FoodOrderProfile): RestaurantLine[] {
  const { food, drink, foodQuantity, cupQuantity, complete, total } = restaurantSelection(profile);
  if (!complete || total === undefined) return [];
  const lines: RestaurantLine[] = [{ role: "staff", japanese: "いらっしゃいませ。ご注文はお決まりですか。", reading: "Irasshaimase. Gochuumon wa okimari desu ka?", meaning: "স্বাগতম। কী order করবেন ঠিক করেছেন?" }];
  if (food && foodQuantity) lines.push({ role: "customer", japanese: `${food.japanese}を${foodQuantity.japanese}ください。`, reading: `${food.reading} o ${foodQuantity.romaji} kudasai.`, meaning: `${food.meaning} ${profile.foodCount}টি serving দিন।` });
  if (drink && cupQuantity) lines.push({ role: "customer", japanese: `${drink.japanese}を${cupQuantity.japanese}お願いします。`, reading: `${drink.reading} o ${cupQuantity.romaji} onegaishimasu.`, meaning: `${drink.meaning} ${profile.drinkCount} কাপ/গ্লাস দিন।` });
  const service = restaurantServices.find((item) => item.id === profile.service);
  if (service) lines.push(
    { role: "staff", japanese: "こちらでおめしあがりですか。", reading: "Kochira de omeshiagari desu ka?", meaning: "এখানে খাবেন? Staff-এর ভদ্র expression।" },
    { role: "customer", japanese: service.id === "here" && !food ? "ここで飲みます。" : service.japanese, reading: service.id === "here" && !food ? "Koko de nomimasu." : service.reading, meaning: service.id === "here" && !food ? "এখানে পান করব।" : service.meaning },
  );
  const extra = restaurantExtras.find((item) => item.id === profile.extra);
  if (extra) lines.push({ role: "customer", ...extra });
  lines.push(
    { role: "staff", japanese: `全部で${total}円です。`, reading: `Zenbu de ${yenReading(total)!.romaji} desu.`, meaning: `সব মিলিয়ে sample মোট ${total} yen।` },
    { role: "customer", japanese: "ありがとうございます。", reading: "Arigatou gozaimasu.", meaning: "ধন্যবাদ।" },
  );
  return lines;
}

// Separate from ordering: an ingredient question never produces a safety assurance.
export function buildIngredientPractice(profile: FoodOrderProfile): RestaurantLine[] {
  const food = restaurantFoods.find((item) => item.id === profile.food);
  const ingredient = restaurantIngredients.find((item) => item.id === profile.ingredient);
  if (!food || !ingredient) return [];
  return [
    { role: "customer", japanese: `この${food.japanese}に${ingredient.japanese}は入っていますか。`, reading: `Kono ${food.reading} ni ${ingredient.reading} wa haitte imasu ka?`, meaning: `এই ${food.meaning}-এ ${ingredient.meaning} আছে?` },
    { role: "staff", japanese: "確認します。少々お待ちください。", reading: "Kakunin shimasu. Shoushou omachi kudasai.", meaning: "যাচাই করছি। একটু অপেক্ষা করুন। এটি চূড়ান্ত ingredient answer নয়।" },
  ];
}

export const restaurantPhrases = [
  { japanese: "メニューをください。", reading: "Menyuu o kudasai.", meaning: "Menu দিন।" },
  { japanese: "うどんをひとつください。", reading: "Udon o hitotsu kudasai.", meaning: "এক serving উদন দিন। এখানে খাবারের serving-এ つ ব্যবহার করছি।" },
  { japanese: "ホットコーヒーを1杯お願いします。", reading: "Hotto koohii o ippai onegaishimasu.", meaning: "এক কাপ গরম কফি দিন। কাপ/গ্লাস গণনায় 杯।" },
  { japanese: "ここで食べます。", reading: "Koko de tabemasu.", meaning: "এখানে খাব। で এখানে কাজ করার জায়গা বোঝায়।" },
  { japanese: "テイクアウトでお願いします。", reading: "Teikuauto de onegaishimasu.", meaning: "সঙ্গে নিয়ে যাব।" },
  ...restaurantExtras.map(({ japanese, reading, meaning }) => ({ japanese, reading, meaning })),
  { japanese: "お会計をお願いします。", reading: "Okaikei o onegaishimasu.", meaning: "বিল দিন / হিসাব করে দিন।" },
  { japanese: "もう一度お願いします。", reading: "Mou ichido onegaishimasu.", meaning: "আবার একবার বলুন, অনুগ্রহ করে।" },
];
export const foodPreferenceExamples = [
  { japanese: "何が好きですか。", reading: "Nani ga suki desu ka?", meaning: "কী পছন্দ করেন?" },
  { japanese: "うどんが好きです。", reading: "Udon ga suki desu.", meaning: "উদন পছন্দ করি। পছন্দের জিনিসের পরে が।" },
  { japanese: "コーヒーは苦手です。", reading: "Koohii wa nigate desu.", meaning: "কফি আমার তেমন পছন্দ নয় / কফি নিতে স্বাচ্ছন্দ্য বোধ করি না। এটি allergy বোঝায় না।" },
  { japanese: "辛い料理は苦手です。", reading: "Karai ryouri wa nigate desu.", meaning: "ঝাল খাবার তেমন পছন্দ করি না / খেতে অসুবিধা হয়।" },
  { japanese: "この料理には何が入っていますか。", reading: "Kono ryouri ni wa nani ga haitte imasu ka?", meaning: "এই খাবারে কী কী উপাদান আছে?" },
  { japanese: "この料理に卵は入っていますか。", reading: "Kono ryouri ni tamago wa haitte imasu ka?", meaning: "এই খাবারে ডিম আছে?" },
];
export const restaurantListening = [
  { japanese: "こちらでおめしあがりですか。", reading: "Kochira de omeshiagari desu ka?", options: ["এখানে খাবেন?", "কয় কাপ নেবেন?", "কী পছন্দ করেন?"], answer: 0, explanation: "Staff জানতে চাইছেন dine-in করবেন কি না। Takeaway হলে: テイクアウトでお願いします。" },
  { japanese: "ご注文はお決まりですか。", reading: "Gochuumon wa okimari desu ka?", options: ["বিল দেবেন?", "কী order করবেন ঠিক করেছেন?", "ডিম আছে?"], answer: 1, explanation: "Order প্রস্তুত কি না জানতে চাইছেন। নিজের menu selection দিয়ে উত্তর দিন।" },
  { japanese: "少々お待ちください。", reading: "Shoushou omachi kudasai.", options: ["পানি দিন।", "আবার বলুন।", "একটু অপেক্ষা করুন।"], answer: 2, explanation: "Staff একটু অপেক্ষা করতে বলছেন।" },
];
export const restaurantQuestions = [
  { prompt: "দুই কাপ কফি: コーヒーを［　］お願いします。", options: ["2杯", "2冊", "2枚"], answer: 0, explanation: "কাপ/গ্লাসে 杯: 1杯 = いっぱい、2杯 = にはい、3杯 = さんばい।" },
  { prompt: "খাবার সঙ্গে নিয়ে যাবেন—কোনটি বলবেন?", options: ["ここで食べます。", "テイクアウトでお願いします。", "何が好きですか。"], answer: 1, explanation: "テイクアウト = takeaway।" },
  { prompt: "চামচ চাইবেন—কোন বাক্যটি ঠিক?", options: ["スプーンに行きます。", "スプーンは何時ですか。", "スプーンをください。"], answer: 2, explanation: "চাইতে: জিনিস + をください।" },
  { prompt: "উদন পছন্দ করি: うどん［　］好きです。", options: ["が", "を", "で"], answer: 0, explanation: "এই পছন্দের pattern-এ が: うどんが好きです。" },
];
