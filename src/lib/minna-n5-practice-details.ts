export type PracticeDialogueLine = {
  speaker: string;
  japanese: string;
  romaji: string;
  bengali: string;
};

export type PracticeProfile = {
  name: string;
  country: string;
  role: string;
  accent: "teal" | "coral" | "gold" | "blue" | "plum";
  icon: string;
};

export type PracticeQuestion = {
  prompt: string;
  hint?: string;
  answer: string;
  romaji: string;
  bengali: string;
};

export type PracticeModule = {
  step: string;
  title: string;
  instruction: string;
  questions: PracticeQuestion[];
};

export type UnitPracticeDetails = {
  heroImage: string;
  heroAlt: string;
  dialogueImage: string;
  dialogue: PracticeDialogueLine[];
  profiles: PracticeProfile[];
  modules: PracticeModule[];
};

const unitOnePractice: UnitPracticeDetails = {
  heroImage: "/images/projects/n5-practice/unit-01-introductions.png",
  heroAlt: "বিভিন্ন দেশের শিক্ষার্থী ও পেশাজীবীরা অফিসে জাপানিতে পরিচিত হচ্ছেন—রঙিন illustration",
  dialogueImage: "/images/projects/n5-practice/unit-01-conversation.png",
  dialogue: [
    {
      speaker: "山田",
      japanese: "おはようございます。",
      romaji: "Ohayou gozaimasu.",
      bengali: "সুপ্রভাত।",
    },
    {
      speaker: "佐藤",
      japanese: "おはようございます。",
      romaji: "Ohayou gozaimasu.",
      bengali: "সুপ্রভাত।",
    },
    {
      speaker: "山田",
      japanese: "佐藤さん、こちらは マイク・ミラーさんです。",
      romaji: "Satou-san, kochira wa Maiku Miraa-san desu.",
      bengali: "সাতো-সান, ইনি মাইক মিলার।",
    },
    {
      speaker: "ミラー",
      japanese: "初めまして。マイク・ミラーです。アメリカから来ました。どうぞよろしく。",
      romaji: "Hajimemashite. Maiku Miraa desu. Amerika kara kimashita. Douzo yoroshiku.",
      bengali: "প্রথম পরিচয়। আমি মাইক মিলার। আমেরিকা থেকে এসেছি। পরিচিত হয়ে ভালো লাগল।",
    },
    {
      speaker: "佐藤",
      japanese: "佐藤けい子です。どうぞよろしく。",
      romaji: "Satou Keiko desu. Douzo yoroshiku.",
      bengali: "আমি কেইকো সাতো। পরিচিত হয়ে ভালো লাগল।",
    },
  ],
  profiles: [
    { name: "ミラー", country: "アメリカ", role: "会社員", accent: "blue", icon: "💼" },
    { name: "山田", country: "日本", role: "銀行員", accent: "teal", icon: "🏦" },
    { name: "ワット", country: "イギリス", role: "先生", accent: "gold", icon: "📚" },
    { name: "ワン", country: "中国", role: "医者", accent: "coral", icon: "🩺" },
    { name: "カリナ", country: "インドネシア", role: "学生", accent: "plum", icon: "🎓" },
  ],
  modules: [
    {
      step: "01",
      title: "Sentence builder",
      instruction: "Bracket-এর তথ্য বসিয়ে আগে নিজে sentence বলুন; তারপর উত্তর খুলুন।",
      questions: [
        {
          prompt: "わたしは（マイク・ミラー）＿＿＿＿。",
          hint: "নিজের পরিচয় · N₁ は N₂ です",
          answer: "わたしは マイク・ミラーです。",
          romaji: "Watashi wa Maiku Miraa desu.",
          bengali: "আমি মাইক মিলার।",
        },
        {
          prompt: "サントスさんは（学生 ×）＿＿＿＿。",
          hint: "Negative · じゃありません",
          answer: "サントスさんは 学生じゃありません。",
          romaji: "Santosu-san wa gakusei ja arimasen.",
          bengali: "সান্তোস শিক্ষার্থী নন।",
        },
        {
          prompt: "ミラーさんは（会社員？）＿＿＿＿。",
          hint: "Question · শেষে か",
          answer: "ミラーさんは 会社員ですか。",
          romaji: "Miraa-san wa kaishain desu ka.",
          bengali: "মিলার কি কোম্পানির কর্মচারী?",
        },
        {
          prompt: "サントスさん＿＿ 会社員です。",
          hint: "একই তথ্য যোগ করুন · も",
          answer: "サントスさんも 会社員です。",
          romaji: "Santosu-san mo kaishain desu.",
          bengali: "সান্তোসও কোম্পানির কর্মচারী।",
        },
        {
          prompt: "ワットさんは（さくら大学／先生）＿＿＿＿。",
          hint: "Affiliation · N₁ の N₂",
          answer: "ワットさんは さくら大学の先生です。",
          romaji: "Watto-san wa Sakura Daigaku no sensei desu.",
          bengali: "ওয়াট সাকুরা বিশ্ববিদ্যালয়ের শিক্ষক।",
        },
        {
          prompt: "テレーザちゃんは（9）＿＿＿＿。",
          hint: "বয়স · ～歳",
          answer: "テレーザちゃんは 9歳です。",
          romaji: "Tereeza-chan wa kyuu-sai desu.",
          bengali: "তেরেজার বয়স ৯ বছর।",
        },
      ],
    },
    {
      step: "02",
      title: "Profile Q&A",
      instruction: "উপরের profile দেখে প্রশ্নের উত্তর দিন। ছোট উত্তর দিলেও ঠিক।",
      questions: [
        {
          prompt: "ミラーさんは アメリカ人ですか。",
          answer: "はい、アメリカ人です。",
          romaji: "Hai, Amerika-jin desu.",
          bengali: "হ্যাঁ, তিনি আমেরিকান।",
        },
        {
          prompt: "山田さんは 先生ですか。",
          answer: "いいえ、先生じゃありません。銀行員です。",
          romaji: "Iie, sensei ja arimasen. Ginkouin desu.",
          bengali: "না, তিনি শিক্ষক নন। তিনি ব্যাংককর্মী।",
        },
        {
          prompt: "あの方は どなたですか。（ワット）",
          answer: "ワットさんです。イギリス人の先生です。",
          romaji: "Watto-san desu. Igirisu-jin no sensei desu.",
          bengali: "তিনি ওয়াট। একজন ব্রিটিশ শিক্ষক।",
        },
        {
          prompt: "ワンさんは 会社員ですか。",
          answer: "いいえ、会社員じゃありません。医者です。",
          romaji: "Iie, kaishain ja arimasen. Isha desu.",
          bengali: "না, তিনি কোম্পানির কর্মচারী নন। তিনি ডাক্তার।",
        },
        {
          prompt: "カリナさんも 学生ですか。",
          answer: "はい、カリナさんも 学生です。",
          romaji: "Hai, Karina-san mo gakusei desu.",
          bengali: "হ্যাঁ, কারিনাও শিক্ষার্থী।",
        },
      ],
    },
    {
      step: "03",
      title: "Mini conversation",
      instruction: "Situation পড়ে দুজনের role বদলে dialogue বলুন। নিজের নাম ও দেশ বসান।",
      questions: [
        {
          prompt: "প্রথম দেখা: নাম বলুন → দেশ বলুন → ভদ্রভাবে শেষ করুন।",
          answer: "初めまして。ラヒムです。バングラデシュから来ました。どうぞよろしく。",
          romaji: "Hajimemashite. Rahimu desu. Banguradeshu kara kimashita. Douzo yoroshiku.",
          bengali: "প্রথম পরিচয়। আমি রহিম। বাংলাদেশ থেকে এসেছি। পরিচিত হয়ে ভালো লাগল।",
        },
        {
          prompt: "কারও নাম ভদ্রভাবে জিজ্ঞেস করুন, তারপর নিজের নাম বলুন।",
          answer: "失礼ですが、お名前は？ ― サラです。あなたは？ ― アリです。",
          romaji: "Shitsurei desu ga, onamae wa? — Sara desu. Anata wa? — Ari desu.",
          bengali: "মাফ করবেন, আপনার নাম? — সারা। আপনার? — আলী।",
        },
        {
          prompt: "একজন সহকর্মীকে আরেকজনের সঙ্গে পরিচয় করিয়ে দিন।",
          answer: "こちらは リーさんです。ABCの会社員です。",
          romaji: "Kochira wa Rii-san desu. ABC no kaishain desu.",
          bengali: "ইনি লি। তিনি ABC কোম্পানির কর্মচারী।",
        },
      ],
    },
    {
      step: "04",
      title: "Final recall",
      instruction: "Hint না দেখে Japanese-এ উত্তর দিন। শেষে answer মিলিয়ে ভুলগুলো আবার বলুন।",
      questions: [
        {
          prompt: "আপনি কি শিক্ষার্থী?",
          answer: "あなたは 学生ですか。",
          romaji: "Anata wa gakusei desu ka.",
          bengali: "আপনি কি শিক্ষার্থী?",
        },
        {
          prompt: "না, আমি শিক্ষার্থী নই। আমি কোম্পানির কর্মচারী।",
          answer: "いいえ、学生じゃありません。会社員です。",
          romaji: "Iie, gakusei ja arimasen. Kaishain desu.",
          bengali: "না, আমি শিক্ষার্থী নই। কোম্পানির কর্মচারী।",
        },
        {
          prompt: "ঐ ভদ্রলোক কে?",
          answer: "あの方は どなたですか。",
          romaji: "Ano kata wa donata desu ka.",
          bengali: "ঐ ভদ্রলোক/ভদ্রমহিলা কে?",
        },
        {
          prompt: "সুজুকিও একজন ডাক্তার।",
          answer: "鈴木さんも 医者です。",
          romaji: "Suzuki-san mo isha desu.",
          bengali: "সুজুকিও একজন ডাক্তার।",
        },
        {
          prompt: "মারিয়ার বয়স কত? (ভদ্রভাবে)",
          answer: "マリアさんは おいくつですか。",
          romaji: "Maria-san wa oikutsu desu ka.",
          bengali: "মারিয়ার বয়স কত?",
        },
      ],
    },
  ],
};

export function getMinnaN5PracticeDetails(unitNumber: number) {
  return unitNumber === 1 ? unitOnePractice : undefined;
}
