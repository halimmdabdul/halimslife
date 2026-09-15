export type RoutineDay = "weekday" | "weekend";
export type RoutineProfile = {
  wake: string; breakfast: string; departure: string; destination: string;
  transport: string; lunch: string; study: string; sleep: string;
};
export type RoutineLine = { label: string; japanese: string; reading: string; meaning: string };
export const emptyRoutine: RoutineProfile = { wake: "", breakfast: "", departure: "", destination: "", transport: "", lunch: "", study: "", sleep: "" };
export const routineDays = {
  weekday: { japanese: "平日は", reading: "Heijitsu wa", meaning: "সপ্তাহের কর্মদিবসে" },
  weekend: { japanese: "週末は", reading: "Shuumatsu wa", meaning: "সপ্তাহের শেষে" },
};

const romanHours = ["rei", "ichi", "ni", "san", "yo", "go", "roku", "shichi", "hachi", "ku", "juu", "juuichi", "juuni"];

// Only whole hours and half hours are offered: no guessed minute-counter readings.
export function routineTime(value: string) {
  if (!/^(?:[01]\d|2[0-3]):(?:00|30)$/u.test(value)) return undefined;
  const [hourText, minutes] = value.split(":");
  const hour = Number(hourText);
  const clockHour = hour % 12 || 12;
  const prefix = hour === 0 ? "夜の" : hour === 12 ? "昼の" : hour < 12 ? "午前" : "午後";
  const romanPrefix = hour === 0 ? "Yoru no" : hour === 12 ? "Hiru no" : hour < 12 ? "Gozen" : "Gogo";
  const half = minutes === "30";
  return {
    japanese: `${prefix}${clockHour}時${half ? "半" : ""}`,
    reading: `${romanPrefix} ${romanHours[clockHour]}-ji${half ? " han" : ""}`,
    meaning: `${hour < 12 ? "AM" : "PM"} ${clockHour}:${minutes}`,
  };
}
export const routineTimeOptions = Array.from({ length: 48 }, (_, index) => {
  const value = `${String(Math.floor(index / 2)).padStart(2, "0")}:${index % 2 ? "30" : "00"}`;
  return { value, label: `${value} · ${routineTime(value)!.meaning}` };
});
export const destinations = [
  { id: "work", japanese: "会社に行きます。", reading: "Kaisha ni ikimasu.", meaning: "অফিসে যাই।", label: "অফিস · かいしゃ" },
  { id: "school", japanese: "学校に行きます。", reading: "Gakkou ni ikimasu.", meaning: "স্কুলে যাই।", label: "স্কুল · がっこう" },
  { id: "home", japanese: "家で過ごします。", reading: "Ie de sugoshimasu.", meaning: "বাড়িতে সময় কাটাই।", label: "বাড়িতে থাকি · いえ" },
];
export const transports = [
  { id: "train", japanese: "電車で", reading: "Densha de", label: "ট্রেন · でんしゃ", meaning: "ট্রেনে" },
  { id: "bus", japanese: "バスで", reading: "Basu de", label: "বাস · バス", meaning: "বাসে" },
  { id: "bicycle", japanese: "自転車で", reading: "Jitensha de", label: "সাইকেল · じてんしゃ", meaning: "সাইকেলে" },
  { id: "walk", japanese: "歩いて", reading: "Aruite", label: "হেঁটে · あるいて", meaning: "হেঁটে" },
];
const activities = [
  { field: "wake", label: "Wake up", japanese: "起きます。", reading: "okimasu.", meaning: "ঘুম থেকে উঠি।" },
  { field: "breakfast", label: "Breakfast", japanese: "朝ごはんを食べます。", reading: "asagohan o tabemasu.", meaning: "সকালের খাবার খাই।" },
  { field: "lunch", label: "Lunch", japanese: "昼ごはんを食べます。", reading: "hirugohan o tabemasu.", meaning: "দুপুরের খাবার খাই।" },
  { field: "study", label: "Study", japanese: "日本語を勉強します。", reading: "Nihongo o benkyou shimasu.", meaning: "জাপানি পড়ি।" },
  { field: "sleep", label: "Sleep", japanese: "寝ます。", reading: "nemasu.", meaning: "ঘুমাতে যাই।" },
] as const;

export function buildRoutine(day: RoutineDay, profile: RoutineProfile): RoutineLine[] {
  const lines: RoutineLine[] = [];
  for (const activity of activities) {
    const time = routineTime(profile[activity.field]);
    if (time) lines.push({ label: activity.label, japanese: `${time.japanese}に${activity.japanese}`, reading: `${time.reading} ni ${activity.reading}`, meaning: `${time.meaning}-এ ${activity.meaning}` });
  }
  const destination = destinations.find((item) => item.id === profile.destination);
  if (destination) {
    const time = destination.id === "home" ? undefined : routineTime(profile.departure);
    const transport = destination.id === "home" ? undefined : transports.find((item) => item.id === profile.transport);
    const line = { label: "Daytime", japanese: `${time ? `${time.japanese}に` : ""}${transport?.japanese ?? ""}${destination.japanese}`, reading: `${time ? `${time.reading} ni ` : ""}${transport ? `${transport.reading} ` : ""}${destination.reading}`, meaning: `${time ? `${time.meaning}-এ ` : ""}${transport ? `${transport.meaning} ` : ""}${destination.meaning}` };
    const lunchIndex = lines.findIndex((item) => item.label === "Lunch" || item.label === "Study" || item.label === "Sleep");
    lines.splice(lunchIndex < 0 ? lines.length : lunchIndex, 0, line);
  }
  if (lines.length) {
    const context = routineDays[day];
    lines[0] = { ...lines[0], japanese: `${context.japanese}、${lines[0].japanese}`, reading: `${context.reading}, ${lines[0].reading}`, meaning: `${context.meaning}, ${lines[0].meaning}` };
  }
  return lines;
}

export const routinePhrases = [
  { japanese: "毎日、午前7時に起きます。", reading: "Mainichi, gozen shichi-ji ni okimasu.", meaning: "প্রতিদিন সকাল ৭টায় ঘুম থেকে উঠি।" },
  { japanese: "朝ごはんを食べます。", reading: "Asagohan o tabemasu.", meaning: "সকালের খাবার খাই।" },
  { japanese: "電車で会社に行きます。", reading: "Densha de kaisha ni ikimasu.", meaning: "ট্রেনে অফিসে যাই।" },
  { japanese: "学校で勉強します。", reading: "Gakkou de benkyou shimasu.", meaning: "স্কুলে পড়াশোনা করি।" },
  { japanese: "昼ごはんを食べます。", reading: "Hirugohan o tabemasu.", meaning: "দুপুরের খাবার খাই।" },
  { japanese: "午後6時に家に帰ります。", reading: "Gogo roku-ji ni ie ni kaerimasu.", meaning: "সন্ধ্যা ৬টায় বাড়ি ফিরি।" },
  { japanese: "夜、日本語を勉強します。", reading: "Yoru, Nihongo o benkyou shimasu.", meaning: "রাতে জাপানি পড়ি।" },
  { japanese: "午後11時半ごろ寝ます。", reading: "Gogo juuichi-ji han goro nemasu.", meaning: "রাত সাড়ে ১১টার দিকে ঘুমাতে যাই।" },
];
export const routinePatterns = [
  { title: "সময় + に + কাজ", japanese: "午前7時に起きます。", reading: "Gozen shichi-ji ni okimasu.", meaning: "নির্দিষ্ট সময়ের পরে に। সকাল ৭টায় উঠি। 毎日 (প্রতিদিন)-এর ঠিক পরে এখানে に লাগে না।" },
  { title: "সময় + ごろ + কাজ", japanese: "午後11時ごろ寝ます。", reading: "Gogo juuichi-ji goro nemasu.", meaning: "ごろ মানে ‘আনুমানিক / ওই সময়ের দিকে’। Builder-এ に দিয়ে নির্দিষ্ট সময় বলা হয়।" },
  { title: "খাবার / বিষয় + を", japanese: "日本語を勉強します。", reading: "Nihongo o benkyou shimasu.", meaning: "কী পড়ি বা কী খাই তার পরে を। Particle を-এর উচ্চারণ ‘o’।" },
  { title: "কোথায় যাই + に", japanese: "学校に行きます。", reading: "Gakkou ni ikimasu.", meaning: "যাওয়ার গন্তব্যের পরে に। কোথায় কাজটি করি বোঝাতে で: 学校で勉強します。" },
  { title: "যানবাহন + で", japanese: "バスで会社に行きます。", reading: "Basu de kaisha ni ikimasu.", meaning: "バスで = বাসে। কিন্তু হেঁটে যাওয়া হলো 歩いて; 歩いてで নয়।" },
  { title: "কর্মদিবস বনাম weekend", japanese: "週末は、家で過ごします。", reading: "Shuumatsu wa, ie de sugoshimasu.", meaning: "週末は = সপ্তাহের শেষে; 平日は = কর্মদিবসে। Particle は-এর উচ্চারণ ‘wa’।" },
];
export const routineConversations = [
  { question: "毎日、何時に起きますか。", reading: "Mainichi, nan-ji ni okimasu ka?", meaning: "প্রতিদিন কয়টায় ঘুম থেকে ওঠেন?", answer: "午前7時に起きます。", answerReading: "Gozen shichi-ji ni okimasu.", answerMeaning: "সকাল ৭টায় উঠি।", field: "wake" },
  { question: "どうやって会社に行きますか。", reading: "Dou yatte kaisha ni ikimasu ka?", meaning: "অফিসে কীভাবে যান? অফিসে না গেলে নিজের গন্তব্য বসান।", answer: "電車で会社に行きます。", answerReading: "Densha de kaisha ni ikimasu.", answerMeaning: "ট্রেনে অফিসে যাই।", field: "destination" },
  { question: "いつ日本語を勉強しますか。", reading: "Itsu Nihongo o benkyou shimasu ka?", meaning: "কখন জাপানি পড়েন?", answer: "午後8時に日本語を勉強します。", answerReading: "Gogo hachi-ji ni Nihongo o benkyou shimasu.", answerMeaning: "রাত ৮টায় জাপানি পড়ি।", field: "study" },
  { question: "週末は、何をしますか。", reading: "Shuumatsu wa, nani o shimasu ka?", meaning: "সপ্তাহের শেষে কী করেন?", answer: "家で過ごします。", answerReading: "Ie de sugoshimasu.", answerMeaning: "বাড়িতে সময় কাটাই।", field: "weekend" },
  { question: "何時に寝ますか。", reading: "Nan-ji ni nemasu ka?", meaning: "কয়টায় ঘুমাতে যান?", answer: "午後11時半ごろ寝ます。", answerReading: "Gogo juuichi-ji han goro nemasu.", answerMeaning: "রাত সাড়ে ১১টার দিকে ঘুমাতে যাই।", field: "sleep" },
];
export const routineQuestions = [
  { prompt: "সকাল ৭টায় উঠি: 午前7時［　］起きます。", options: ["を", "に", "で"], answer: 1, explanation: "নির্দিষ্ট সময়ের পরে に: 午前7時に起きます。" },
  { prompt: "4時-এর সঠিক উচ্চারণ কোনটি?", options: ["よじ / yo-ji", "よんじ / yon-ji", "しじ / shi-ji"], answer: 0, explanation: "সময় বলার সময় 4時 = よじ। 7時 = しちじ; 9時 = くじ।" },
  { prompt: "ট্রেনে অফিসে যাই: 電車［　］会社に行きます。", options: ["に", "を", "で"], answer: 2, explanation: "যানবাহনের পরে で: 電車で会社に行きます。" },
  { prompt: "সাড়ে ১১টার দিকে: 11時半［　］寝ます。", options: ["ごろ", "を", "から"], answer: 0, explanation: "半 = সাড়ে / অর্ধেক ঘণ্টা; ごろ = ওই সময়ের দিকে।" },
];

export const exampleRoutine: RoutineProfile = { wake: "07:00", breakfast: "07:30", departure: "08:00", destination: "work", transport: "train", lunch: "12:00", study: "20:00", sleep: "23:00" };
