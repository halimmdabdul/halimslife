import { yenReading } from "./japanese-numbers";

export type DirectionCommand = "straight" | "left" | "right";
export type MapPosition = { x: number; y: number; heading: number };
export const mapStart: MapPosition = { x: 2, y: 4, heading: 0 };
export const compass = [
  { japanese: "北", meaning: "উত্তর" }, { japanese: "東", meaning: "পূর্ব" },
  { japanese: "南", meaning: "দক্ষিণ" }, { japanese: "西", meaning: "পশ্চিম" },
];
export const directionCommands = {
  straight: { japanese: "まっすぐ行ってください。", reading: "Massugu itte kudasai.", meaning: "সোজা যান", symbol: "↑" },
  left: { japanese: "左に曲がってください。", reading: "Hidari ni magatte kudasai.", meaning: "বামে ঘুরুন", symbol: "↶" },
  right: { japanese: "右に曲がってください。", reading: "Migi ni magatte kudasai.", meaning: "ডানে ঘুরুন", symbol: "↷" },
};
export const mapPlaces = [
  { id: "station", japanese: "駅", reading: "Eki", meaning: "স্টেশন", icon: "🚉", x: 4, y: 2, commands: ["straight", "straight", "right", "straight", "straight"] },
  { id: "restaurant", japanese: "レストラン", reading: "Resutoran", meaning: "রেস্তোরাঁ", icon: "🍽️", x: 0, y: 2, commands: ["straight", "straight", "left", "straight", "straight"] },
  { id: "park", japanese: "公園", reading: "Kouen", meaning: "পার্ক", icon: "🌳", x: 2, y: 0, commands: ["straight", "straight", "straight", "straight"] },
  { id: "shop", japanese: "店", reading: "Mise", meaning: "দোকান", icon: "🏪", x: 4, y: 0, commands: ["straight", "straight", "right", "straight", "straight", "left", "straight", "straight"] },
] satisfies { id: string; japanese: string; reading: string; meaning: string; icon: string; x: number; y: number; commands: DirectionCommand[] }[];

export function isMapRoad(x: number, y: number): boolean {
  return Number.isInteger(x) && Number.isInteger(y) && x >= 0 && x <= 4 && y >= 0 && y <= 4 && (x === 2 || y === 2 || (x === 4 && y <= 2) || (y === 0 && x >= 2));
}
export function moveOnMap(position: MapPosition, command: DirectionCommand): { position: MapPosition; blocked: boolean } {
  if (!isMapRoad(position.x, position.y) || !Number.isInteger(position.heading) || position.heading < 0 || position.heading > 3) return { position: { ...position }, blocked: true };
  if (command === "left" || command === "right") return { position: { ...position, heading: (position.heading + (command === "left" ? 3 : 1)) % 4 }, blocked: false };
  const [dx, dy] = [[0, -1], [1, 0], [0, 1], [-1, 0]][position.heading];
  const x = position.x + dx;
  const y = position.y + dy;
  return isMapRoad(x, y) ? { position: { ...position, x, y }, blocked: false } : { position: { ...position }, blocked: true };
}
export function hasArrived(position: MapPosition, destination: string): boolean {
  const place = mapPlaces.find((item) => item.id === destination);
  return !!place && position.x === place.x && position.y === place.y;
}

export const directionsPhrases = [
  { japanese: "すみません。駅はどこですか。", reading: "Sumimasen. Eki wa doko desu ka?", meaning: "মাফ করবেন, স্টেশন কোথায়?" },
  { japanese: "レストランまで、どうやって行きますか。", reading: "Resutoran made, dou yatte ikimasu ka?", meaning: "রেস্তোরাঁ পর্যন্ত কীভাবে যাব?" },
  { ...directionCommands.straight, meaning: "সোজা যান। পথের নির্দেশ বোঝাতে।" },
  { ...directionCommands.left, meaning: "বামে ঘুরুন। আপনি যেদিকে মুখ করে আছেন, তার বাম।" },
  { ...directionCommands.right, meaning: "ডানে ঘুরুন। আপনি যেদিকে মুখ করে আছেন, তার ডান।" },
  { japanese: "このバスは空港に行きますか。", reading: "Kono basu wa kuukou ni ikimasu ka?", meaning: "এই বাস বিমানবন্দরে যায়?" },
  { japanese: "ここで降りますか。", reading: "Koko de orimasu ka?", meaning: "এখানে নামব? নিজের নামার জায়গা নিশ্চিত করতে।" },
  { japanese: "もう一度、ゆっくりお願いします。", reading: "Mou ichido, yukkuri onegaishimasu.", meaning: "আবার একবার ধীরে বলুন, অনুগ্রহ করে।" },
];
export const travelDestinations = [
  { id: "airport", japanese: "空港", reading: "Kuukou", meaning: "বিমানবন্দর", busFare: 600, busMinutes: 30, trainFare: 800, trainMinutes: 20 },
  { id: "station", japanese: "駅", reading: "Eki", meaning: "স্টেশন", busFare: 200, busMinutes: 10, trainFare: 300, trainMinutes: 5 },
  { id: "park", japanese: "公園", reading: "Kouen", meaning: "পার্ক", busFare: 250, busMinutes: 15, trainFare: 400, trainMinutes: 10 },
];
export const travelModes = [
  { id: "bus", japanese: "バス", reading: "Basu", meaning: "বাস" },
  { id: "train", japanese: "電車", reading: "Densha", meaning: "ট্রেন" },
];
export type TravelProfile = { destination: string; mode: string };
export const emptyTravel: TravelProfile = { destination: "", mode: "" };
export type TravelLine = { role: "traveller" | "helper"; japanese: string; reading: string; meaning: string };
export function travelSelection(profile: TravelProfile) {
  const destination = travelDestinations.find((item) => item.id === profile.destination);
  const mode = travelModes.find((item) => item.id === profile.mode);
  if (!destination || !mode) return undefined;
  return { destination, mode, fare: mode.id === "bus" ? destination.busFare : destination.trainFare, minutes: mode.id === "bus" ? destination.busMinutes : destination.trainMinutes };
}
const minuteReadings: Record<number, string> = { 5: "Go-fun", 10: "Juppun", 15: "Juu go-fun", 20: "Ni-juppun", 30: "San-juppun" };
export function buildTravelScript(profile: TravelProfile): TravelLine[] {
  const selection = travelSelection(profile);
  if (!selection) return [];
  const { destination, mode, fare, minutes } = selection;
  return [
    { role: "traveller", japanese: `すみません。この${mode.japanese}は${destination.japanese}に行きますか。`, reading: `Sumimasen. Kono ${mode.reading} wa ${destination.reading} ni ikimasu ka?`, meaning: `মাফ করবেন, এই ${mode.meaning} ${destination.meaning}-এ যায়?` },
    { role: "helper", japanese: "はい、行きます。", reading: "Hai, ikimasu.", meaning: "হ্যাঁ, যায়। (এই fictional scenario-তে।)" },
    { role: "traveller", japanese: `${destination.japanese}まで、いくらですか。`, reading: `${destination.reading} made, ikura desu ka?`, meaning: `${destination.meaning} পর্যন্ত ভাড়া কত?` },
    { role: "helper", japanese: `${fare}円です。`, reading: `${yenReading(fare)!.romaji} desu.`, meaning: `Sample ভাড়া ${fare} yen।` },
    { role: "traveller", japanese: "どのくらいかかりますか。", reading: "Dono kurai kakarimasu ka?", meaning: "কত সময় লাগে?" },
    { role: "helper", japanese: `${minutes}分ぐらいかかります。`, reading: `${minuteReadings[minutes]} gurai kakarimasu.`, meaning: `আনুমানিক ${minutes} মিনিট লাগে। (Sample সময়।)` },
    { role: "traveller", japanese: "ありがとうございます。", reading: "Arigatou gozaimasu.", meaning: "ধন্যবাদ।" },
  ];
}
export const directionListening = [
  { japanese: "左に曲がってください。", reading: "Hidari ni magatte kudasai.", options: ["বামে ঘুরুন।", "ডানে ঘুরুন।", "এখানে নামুন।"], answer: 0 },
  { japanese: "まっすぐ行ってください。", reading: "Massugu itte kudasai.", options: ["বামে ঘুরুন।", "সোজা যান।", "দাম কত?"], answer: 1 },
  { japanese: "20分ぐらいかかります。", reading: "Ni-juppun gurai kakarimasu.", options: ["২০ yen।", "২ ঘণ্টা।", "আনুমানিক ২০ মিনিট লাগে।"], answer: 2 },
];
export const directionQuestions = [
  { prompt: "স্টেশন কোথায়—কোনটি বলবেন?", options: ["駅はどこですか。", "駅はいくらですか。", "駅はだれですか。"], answer: 0, explanation: "どこ দিয়ে জায়গা জিজ্ঞেস করি।" },
  { prompt: "বাস বিমানবন্দরে যায়: このバスは空港［　］行きます。", options: ["を", "に", "で"], answer: 1, explanation: "গন্তব্যের পরে に। যানবাহন বোঝাতে অন্য pattern: バスで行きます。" },
  { prompt: "右 মানে কী?", options: ["বাম", "উত্তর", "ডান"], answer: 2, explanation: "右 = みぎ = ডান; 左 = ひだり = বাম। বাম/ডান আপনার মুখের দিক অনুযায়ী বদলায়।" },
  { prompt: "আনুমানিক ৩০ মিনিট—কোনটি ঠিক?", options: ["30分ぐらい", "30円ぐらい", "30年ぐらい"], answer: 0, explanation: "分 = মিনিট। ぐらい এখানে আনুমানিক পরিমাণ বোঝায়।" },
];
