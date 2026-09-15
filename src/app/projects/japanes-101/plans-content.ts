import { calendarDay, calendarMonth } from "./japanese-numbers";
import { routineTime } from "./daily-routine-content";

export type PlanProfile = {
  activity: string; dateMode: "weekday" | "date"; weekday: string;
  month: string; day: string; time: string; place: string; response: string;
};
export type PlanLine = { role: "you" | "friend"; japanese: string; reading: string; meaning: string };
export const emptyPlan: PlanProfile = { activity: "", dateMode: "weekday", weekday: "", month: "", day: "", time: "", place: "", response: "" };
export const planWeekdays = [
  { id: "mon", japanese: "月曜日", reading: "Getsuyoubi", meaning: "সোমবার" },
  { id: "tue", japanese: "火曜日", reading: "Kayoubi", meaning: "মঙ্গলবার" },
  { id: "wed", japanese: "水曜日", reading: "Suiyoubi", meaning: "বুধবার" },
  { id: "thu", japanese: "木曜日", reading: "Mokuyoubi", meaning: "বৃহস্পতিবার" },
  { id: "fri", japanese: "金曜日", reading: "Kinyoubi", meaning: "শুক্রবার" },
  { id: "sat", japanese: "土曜日", reading: "Doyoubi", meaning: "শনিবার" },
  { id: "sun", japanese: "日曜日", reading: "Nichiyoubi", meaning: "রবিবার" },
];
export const planActivities = [
  { id: "coffee", japanese: "いっしょにコーヒーを飲みませんか。", reading: "Issho ni koohii o nomimasen ka?", meaning: "একসঙ্গে কফি খাবেন?", label: "কফি খাওয়া" },
  { id: "lunch", japanese: "いっしょに昼ごはんを食べに行きませんか。", reading: "Issho ni hirugohan o tabe ni ikimasen ka?", meaning: "একসঙ্গে দুপুরের খাবার খেতে যাবেন?", label: "দুপুরের খাবার" },
  { id: "movie", japanese: "いっしょに映画を見に行きませんか。", reading: "Issho ni eiga o mi ni ikimasen ka?", meaning: "একসঙ্গে সিনেমা দেখতে যাবেন?", label: "সিনেমা দেখা" },
];
export const planPlaces = [
  { id: "station", japanese: "駅の入口", reading: "Eki no iriguchi", meaning: "স্টেশনের প্রবেশপথ" },
  { id: "cafe", japanese: "カフェの入口", reading: "Kafe no iriguchi", meaning: "ক্যাফের প্রবেশপথ" },
  { id: "park", japanese: "公園の入口", reading: "Kouen no iriguchi", meaning: "পার্কের প্রবেশপথ" },
];
export const planResponses = [
  { id: "accept", label: "আমন্ত্রণ গ্রহণ", japanese: "いいですね。大丈夫です。", reading: "Ii desu ne. Daijoubu desu.", meaning: "ভালো তো! আমার জন্য ঠিক আছে।" },
  { id: "decline", label: "ভদ্রভাবে না বলা", japanese: "すみません。その日はちょっと……。", reading: "Sumimasen. Sono hi wa chotto...", meaning: "দুঃখিত, ওই দিনটা আমার জন্য একটু অসুবিধা…।" },
];
export function daysInPlanMonth(month: string): number {
  if (!/^(?:[1-9]|1[0-2])$/u.test(month)) return 31;
  // No year is chosen: use February 28 so the exercise never promises a leap day.
  return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][Number(month) - 1];
}
export function planDate(profile: PlanProfile) {
  if (profile.dateMode === "weekday") return planWeekdays.find((item) => item.id === profile.weekday);
  if (profile.dateMode !== "date" || !/^(?:[1-9]|1[0-2])$/u.test(profile.month) || !/^(?:[1-9]|[12]\d|3[01])$/u.test(profile.day)) return undefined;
  const month = calendarMonth(Number(profile.month));
  const day = calendarDay(Number(profile.day));
  if (!month || !day || Number(profile.day) > daysInPlanMonth(profile.month)) return undefined;
  return { japanese: `${profile.month}月${profile.day}日`, reading: `${month.romaji} ${day.romaji}`, meaning: `${profile.month} মাসের ${profile.day} তারিখ` };
}
export function buildPlanScript(profile: PlanProfile): PlanLine[] {
  const activity = planActivities.find((item) => item.id === profile.activity);
  const date = planDate(profile);
  const time = routineTime(profile.time);
  const place = planPlaces.find((item) => item.id === profile.place);
  const response = planResponses.find((item) => item.id === profile.response);
  if (!activity || !date || !time || !place || !response) return [];
  const lines: PlanLine[] = [
    { role: "you", ...activity },
    { role: "friend", japanese: "いつですか。", reading: "Itsu desu ka?", meaning: "কখন?" },
    { role: "you", japanese: `${date.japanese}の${time.japanese}はどうですか。`, reading: `${date.reading} no ${time.reading} wa dou desu ka?`, meaning: `${date.meaning}, ${time.meaning} হলে কেমন হয়?` },
  ];
  if (response.id === "decline") return [...lines,
    { role: "friend", japanese: `すみません。${date.japanese}はちょっと……。`, reading: `Sumimasen. ${date.reading} wa chotto...`, meaning: `দুঃখিত, ${date.meaning} আমার জন্য অসুবিধা…।` },
    { role: "you", japanese: "わかりました。じゃあ、また今度。", reading: "Wakarimashita. Jaa, mata kondo.", meaning: "বুঝেছি। তাহলে অন্য কোনো সময়। এখন কোনো plan ঠিক হলো না।" },
  ];
  return [...lines,
    { role: "friend", ...response },
    { role: "friend", japanese: "どこで会いますか。", reading: "Doko de aimasu ka?", meaning: "কোথায় দেখা করব?" },
    { role: "you", japanese: `${time.japanese}に${place.japanese}で会いましょう。`, reading: `${time.reading} ni ${place.reading} de aimashou.`, meaning: `${time.meaning}-এ ${place.meaning}-এ দেখা করি।` },
    { role: "friend", japanese: "はい。じゃあ、また。", reading: "Hai. Jaa, mata.", meaning: "ঠিক আছে। তাহলে আবার দেখা হবে।" },
  ];
}
export const planPhrases = [
  ...planActivities,
  { japanese: "いつですか。", reading: "Itsu desu ka?", meaning: "কখন? দিন/তারিখ জানতে জিজ্ঞেস করুন।" },
  { japanese: "何時に会いますか。", reading: "Nan-ji ni aimasu ka?", meaning: "কয়টায় দেখা করব?" },
  { japanese: "どこで会いますか。", reading: "Doko de aimasu ka?", meaning: "কোথায় দেখা করব? দেখা করার জায়গার পরে で।" },
  ...planResponses,
  { japanese: "じゃあ、また今度。", reading: "Jaa, mata kondo.", meaning: "তাহলে অন্য কোনো সময়। না বললে চাপ না দিয়ে কথাটি বলুন।" },
];
export const planListening = [
  { japanese: "土曜日の午後3時半はどうですか。", prompt: "কখন দেখা করার প্রস্তাব দিলেন?", options: ["শনিবার বিকেল ৩:৩০", "শনিবার সকাল ৩:৩০", "রবিবার বিকেল ৩টা"], answer: 0, meaning: "শনিবার বিকেল সাড়ে ৩টা হলে কেমন হয়?" },
  { japanese: "4月14日に会いましょう。", prompt: "কোন তারিখে দেখা করতে বললেন?", options: ["৪ এপ্রিল", "১৪ এপ্রিল", "১৪ জুলাই"], answer: 1, meaning: "১৪ এপ্রিল দেখা করি।" },
  { japanese: "すみません。日曜日はちょっと……。", prompt: "এই প্রসঙ্গে উত্তরটির অর্থ কী?", options: ["রবিবার দেখা করা ঠিক হয়েছে", "রবিবার একটু আগে আসবেন", "রবিবার সুবিধা হচ্ছে না"], answer: 2, meaning: "দুঃখিত, রবিবার আমার জন্য একটু অসুবিধা…। ভদ্রভাবে না বলা।" },
];
export const planQuestions = [
  { prompt: "আমন্ত্রণ জানানোর expression কোনটি?", options: ["飲みます。", "飲みませんか。", "飲みません。"], answer: 1, explanation: "飲みませんか。 = খাবেন কি? এখানে negative question দিয়ে আমন্ত্রণ; 飲みません。 = খাব না।" },
  { prompt: "স্টেশনে দেখা করি: 駅［　］会いましょう。", options: ["で", "を", "へ"], answer: 0, explanation: "কাজটি কোথায় করি: 駅で会いましょう。 সময়ের পরে に: 午後3時に。" },
  { prompt: "ক্যালেন্ডারের 20日-এর reading কী?", options: ["にじゅうにち", "にじゅうか", "はつか"], answer: 2, explanation: "তারিখ 20日 = はつか。 14日 = じゅうよっか; 24日 = にじゅうよっか।" },
  { prompt: "আমন্ত্রণে 土曜日はちょっと……。 শুনলে কী করবেন?", options: ["তবুও শনিবারের plan confirm", "ভদ্রভাবে মেনে নিয়ে অন্য সময়ের কথা বলুন", "মানে অবশ্যই রাজি হয়েছেন"], answer: 1, explanation: "এই invitation context-এ ちょっと…… ভদ্রভাবে না বলা। じゃあ、また今度。 বলে চাপ না দিয়ে শেষ করুন।" },
];
