export const situations = {
  class: { label: "Class / নতুন পরিচয়", advice: "নাম, background ও একটি hobby দিয়ে কথোপকথনের সুযোগ তৈরি করুন। です／ます যথেষ্ট; খুব বেশি keigo দরকার নেই।" },
  workplace: { label: "Workplace / সহকর্মী", advice: "কাজের পরিচয়, প্রাসঙ্গিক experience ও সহযোগিতার মনোভাব তুলে ধরুন। নিজের সম্পর্কে সত্য এমন তথ্যই যোগ করুন।" },
  interview: { label: "Interview / formal", advice: "সময় দেওয়ার জন্য ধন্যবাদ → নাম → relevant background → সংক্ষিপ্ত strength → closing। দীর্ঘ 自己PR নয়; interviewer যত সময় দেন তা মেনে চলুন।" },
} as const;

export type Situation = keyof typeof situations;

export const backgrounds = [
  { id: "language-student", label: "Japanese language school-এর শিক্ষার্থী", kind: "study", japanese: "現在、日本語学校で日本語を勉強しています。", reading: "Genzai, nihongo gakkou de nihongo o benkyou shite imasu.", meaning: "বর্তমানে Japanese language school-এ Japanese পড়ছি।" },
  { id: "university-student", label: "বিশ্ববিদ্যালয় · Information engineering", kind: "study", japanese: "現在、大学で情報工学を勉強しています。", reading: "Genzai, daigaku de jouhou kougaku o benkyou shite imasu.", meaning: "বর্তমানে বিশ্ববিদ্যালয়ে information engineering পড়ছি।" },
  { id: "engineer", label: "কর্মরত · Engineer", kind: "work", japanese: "現在、エンジニアとして働いています。", reading: "Genzai, enjinia to shite hataraite imasu.", meaning: "বর্তমানে engineer হিসেবে কাজ করছি।" },
  { id: "company-worker", label: "কর্মরত · Company employee", kind: "work", japanese: "現在、会社員として働いています。", reading: "Genzai, kaishain to shite hataraite imasu.", meaning: "বর্তমানে কোম্পানির কর্মী হিসেবে কাজ করছি।" },
] as const;

export const strengths = [
  { id: "responsibility", label: "দায়িত্ব নিয়ে শেষ পর্যন্ত কাজ করা", japanese: "私の強みは、最後まで責任を持って取り組むことです。", reading: "Watashi no tsuyomi wa, saigo made sekinin o motte torikumu koto desu.", meaning: "আমার শক্তি হলো দায়িত্ব নিয়ে শেষ পর্যন্ত কাজ করা।" },
  { id: "learning", label: "নতুন বিষয় নিয়মিত শেখা", japanese: "私の強みは、新しいことを積極的に学ぶ姿勢です。", reading: "Watashi no tsuyomi wa, atarashii koto o sekkyokuteki ni manabu shisei desu.", meaning: "আমার শক্তি হলো সক্রিয়ভাবে নতুন বিষয় শেখার মনোভাব।" },
  { id: "teamwork", label: "দল হিসেবে সহযোগিতা করা", japanese: "私の強みは、チームで協力して仕事を進めることです。", reading: "Watashi no tsuyomi wa, chiimu de kyouryoku shite shigoto o susumeru koto desu.", meaning: "আমার শক্তি হলো দলের সঙ্গে সহযোগিতা করে কাজ এগিয়ে নেওয়া।" },
] as const;

export const goals = [
  { id: "communication", label: "Japanese communication উন্নত করা", japanese: "今後は、日本語でより円滑にコミュニケーションが取れるようになりたいです。", reading: "Kongo wa, nihongo de yori enkatsu ni komyunikeeshon ga toreru you ni naritai desu.", meaning: "আগামীতে Japanese-এ আরও সহজভাবে যোগাযোগ করতে চাই।" },
  { id: "work", label: "Japanese ব্যবহার করে কাজ করা", japanese: "今後は、日本語で仕事ができるようになりたいです。", reading: "Kongo wa, nihongo de shigoto ga dekiru you ni naritai desu.", meaning: "আগামীতে Japanese ব্যবহার করে কাজ করতে চাই।" },
  { id: "contribution", label: "অভিজ্ঞতা কাজে লাগিয়ে team-এ অবদান রাখা", japanese: "今後は、これまでの経験を活かして、チームに貢献したいと考えています。", reading: "Kongo wa, kore made no keiken o ikashite, chiimu ni kouken shitai to kangaete imasu.", meaning: "আগামীতে আগের অভিজ্ঞতা কাজে লাগিয়ে দলে অবদান রাখতে চাই।" },
] as const;

export const hobbies = [
  { id: "reading", label: "বই পড়া", japanese: "趣味は読書です。", reading: "Shumi wa dokusho desu.", meaning: "আমার শখ বই পড়া।" },
  { id: "travel", label: "ভ্রমণ", japanese: "趣味は旅行です。", reading: "Shumi wa ryokou desu.", meaning: "আমার শখ ভ্রমণ।" },
  { id: "cooking", label: "রান্না", japanese: "趣味は料理です。", reading: "Shumi wa ryouri desu.", meaning: "আমার শখ রান্না।" },
] as const;

export type Profile = {
  situation: Situation;
  name: string;
  country: string;
  background: string;
  years: string;
  strength: string;
  evidence: string;
  goal: string;
  hobby: string;
  length: "brief" | "full";
};

export type IntroductionLine = { label: string; japanese: string; meaning: string; reading?: string };

// Templates only: no automatic translation or invented achievements.
export function buildIntroduction(profile: Profile): IntroductionLine[] {
  const lines: IntroductionLine[] = [];
  const formal = profile.situation !== "class";
  const name = profile.name.trim() || "［名前］";
  const background = backgrounds.find((item) => item.id === profile.background);
  const add = (label: string, japanese: string, meaning: string, reading?: string) => lines.push({ label, japanese, meaning, reading });

  add("Opening", profile.situation === "interview" ? "本日はお時間をいただき、ありがとうございます。" : "はじめまして。", profile.situation === "interview" ? "আজ আমাকে সময় দেওয়ার জন্য ধন্যবাদ।" : "প্রথম পরিচয়ের greeting।", profile.situation === "interview" ? "Honjitsu wa ojikan o itadaki, arigatou gozaimasu." : "Hajimemashite.");
  add("Name", formal ? `${name}と申します。` : `${name}です。`, `আমার নাম ${name}।${formal ? " নিজের নাম বলার humble expression।" : ""}`, formal ? "[your name] to moushimasu." : "[your name] desu.");
  const countryReadings: Record<string, string> = { "バングラデシュ": "Banguradeshu", "インド": "Indo", "ネパール": "Nepaaru", "日本": "Nihon" };
  const countryReading = countryReadings[profile.country.trim()];
  if (profile.country.trim()) add("Origin", `${profile.country.trim()}出身です。`, "আমার দেশ/আদি নিবাস—এটি থেকে এসেছেন বোঝায়; সম্প্রতি Japan-এ আসার দাবি নয়।", countryReading ? `${countryReading} shusshin desu.` : undefined);
  if (background) add("Background", background.japanese, background.meaning, background.reading);

  if (profile.length === "full") {
    const years = Number(profile.years);
    if (background?.kind === "work" && Number.isInteger(years) && years >= 1 && years <= 50) {
      add("Experience", `この分野で${years}年の経験があります。`, `এই ক্ষেত্রে আমার ${years} বছরের অভিজ্ঞতা আছে।`);
    }
    const strength = strengths.find((item) => item.id === profile.strength);
    if (strength) add("Strength", strength.japanese, strength.meaning, strength.reading);
    const evidence = profile.evidence.trim();
    if (evidence) add("Your example", /[。！？.!?]$/u.test(evidence) ? evidence : `${evidence}。`, "আপনার নিজের Japanese sentence; grammar/translation স্বয়ংক্রিয়ভাবে যাচাই করা হয়নি।");
    const goal = goals.find((item) => item.id === profile.goal);
    if (goal) add("Goal", goal.japanese, goal.meaning, goal.reading);
    const hobby = hobbies.find((item) => item.id === profile.hobby);
    if (hobby && profile.situation !== "interview") add("Personal touch", hobby.japanese, hobby.meaning, hobby.reading);
  }
  add("Closing", profile.situation === "interview" ? "本日はどうぞよろしくお願いいたします。" : formal ? "どうぞよろしくお願いいたします。" : "どうぞよろしくお願いします。", "পরিস্থিতি অনুযায়ী polite closing।", profile.situation === "interview" ? "Honjitsu wa douzo yoroshiku onegai itashimasu." : formal ? "Douzo yoroshiku onegai itashimasu." : "Douzo yoroshiku onegaishimasu.");
  return lines;
}

export const professionalPatterns = [
  { japanese: "［名前］と申します。", audioExample: "ハリムと申します。", reading: "[name] to moushimasu.", meaning: "আমার নাম…।", note: "申します নিজের নাম বলার humble form। নিজের পরিচয়ে とおっしゃいます ব্যবহার করবেন না।" },
  { japanese: "［国・町］出身です。", audioExample: "バングラデシュ出身です。", reading: "[country / town] shusshin desu.", meaning: "আমি …-এর মানুষ / সেখানকার।", note: "出身 নিজের origin বোঝায়; 住んでいます বর্তমান বাসস্থান বোঝায়। একই তথ্য নয়।" },
  { japanese: "現在、［仕事］として働いています。", audioExample: "現在、エンジニアとして働いています。", reading: "Genzai, [job] to shite hataraite imasu.", meaning: "বর্তমানে … হিসেবে কাজ করছি।", note: "として role বোঝায়। কাজ না করলে পড়াশোনার sentence ব্যবহার করুন।" },
  { japanese: "大学で［分野］を勉強しています。", audioExample: "大学で情報工学を勉強しています。", reading: "Daigaku de [field] o benkyou shite imasu.", meaning: "বিশ্ববিদ্যালয়ে … পড়ছি।", note: "で কোথায়, を কী পড়ছেন বোঝায়। নিজের institution ও field দিয়েই practice করুন।" },
  { japanese: "この分野で［数字］年の経験があります。", audioExample: "この分野で3年の経験があります。", reading: "Kono bunya de [number] nen no keiken ga arimasu.", meaning: "এই ক্ষেত্রে … বছরের experience আছে।", note: "বাস্তব experience থাকলেই বলুন। 1年 = ichinen, 3年 = sannen, 4年 = yonen।" },
  { japanese: "私の強みは、［内容］です。", audioExample: "私の強みは、チームで協力して仕事を進めることです。", reading: "Watashi no tsuyomi wa, [strength] desu.", meaning: "আমার শক্তি হলো …।", note: "শুধু ‘hard-working’ নয়—কী করেন ও বাস্তব ছোট example দিয়ে পরিষ্কার করুন।" },
  { japanese: "今後は、［目標］たいと考えています。", audioExample: "今後は、チームに貢献したいと考えています。", reading: "Kongo wa, [verb stem] tai to kangaete imasu.", meaning: "আগামীতে … করতে চাই বলে ভাবছি।", note: "たい-এর আগে verb-এর ます-stem লাগে: 貢献します → 貢献したい। এখানে যেকোনো noun বসাবেন না।" },
  { japanese: "どうぞよろしくお願いいたします。", audioExample: "どうぞよろしくお願いいたします。", reading: "Douzo yoroshiku onegai itashimasu.", meaning: "ভদ্রভাবে পরিচয় শেষ করার expression।", note: "Formal setting-এ উপযুক্ত; everyday class introduction-এ お願いします-ও স্বাভাবিক। Pro মানে প্রতিটি বাক্যে কঠিন keigo নয়।" },
] as const;

export const followUps = [
  { question: "どんなお仕事をされていますか。", reading: "Donna oshigoto o sarete imasu ka?", meaning: "আপনি কী ধরনের কাজ করেন?", answer: "エンジニアとして働いています。", answerReading: "Enjinia to shite hataraite imasu.", tip: "শিক্ষার্থী হলে: 現在、学生です。大学で［分野］を勉強しています。" },
  { question: "どうして日本語を勉強しているんですか。", reading: "Doushite nihongo o benkyou shite irun desu ka?", meaning: "কেন Japanese শিখছেন?", answer: "日本語で仕事ができるようになりたいからです。", answerReading: "Nihongo de shigoto ga dekiru you ni naritai kara desu.", tip: "কারণ বলার pattern: ［কারণ］からです। নিজের সত্য কারণ দিয়ে উত্তর দিন।" },
  { question: "あなたの強みを教えてください。", reading: "Anata no tsuyomi o oshiete kudasai.", meaning: "আপনার strength সম্পর্কে বলুন।", answer: "私の強みは、新しいことを積極的に学ぶ姿勢です。", answerReading: "Watashi no tsuyomi wa, atarashii koto o sekkyokuteki ni manabu shisei desu.", tip: "এর পরে 例えば দিয়ে নিজের বাস্তব example যোগ করুন—এটি মুখস্থ claim নয়।" },
  { question: "趣味は何ですか。", reading: "Shumi wa nan desu ka?", meaning: "আপনার hobby কী?", answer: "趣味は読書です。特に小説が好きです。", answerReading: "Shumi wa dokusho desu. Toku ni shousetsu ga suki desu.", tip: "একটি extra detail দিন যাতে conversation এগোয়। Interview-এ জিজ্ঞেস করলে উত্তর দিন।" },
] as const;
