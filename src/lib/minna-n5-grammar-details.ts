export type GrammarDetail = {
  title: string;
  structure: string;
  explanation: string;
  notes: string[];
  visual: {
    tokens: Array<{ text: string; role: string; accent?: boolean }>;
    romaji: string;
    bengali: string;
  };
  examples: Array<{ japanese: string; romaji: string; bengali: string }>;
};

const unit1GrammarDetails: GrammarDetail[] = [
  {
    title: "Topic ও পরিচয় বলা",
    structure: "N₁ は N₂ です。",
    explanation: "は বাক্যের topic চিহ্নিত করে—অর্থাৎ এখন কার বা কিসের কথা বলা হচ্ছে। Particle হিসেবে は লেখা হলেও উচ্চারণ হয় ‘wa’। Topic-এর পরে N₂ দিয়ে পরিচয়, পেশা, জাতীয়তা বা অন্য তথ্য বলা হয়। です বাক্যকে ভদ্র ও সম্পূর্ণ করে।",
    notes: [
      "は-এর আগে topic এবং です-এর আগে topic সম্পর্কে তথ্য বসে।",
      "です-কে আলাদা করে বাংলা ‘হয়’ অনুবাদ করতে হয় না; এটি polite sentence ending হিসেবেও কাজ করে।",
      "Japanese-এ context স্পষ্ট হলে わたし বারবার বলা প্রয়োজন নেই।",
    ],
    visual: {
      tokens: [{ text: "わたし", role: "Topic" }, { text: "は", role: "Topic marker", accent: true }, { text: "かいしゃいん", role: "পরিচয়/পেশা" }, { text: "です", role: "Polite ending", accent: true }],
      romaji: "Watashi wa kaishain desu.",
      bengali: "আমি কোম্পানির কর্মচারী।",
    },
    examples: [
      { japanese: "わたしは マイク・ミラーです。", romaji: "Watashi wa Maiku Miraa desu.", bengali: "আমি মাইক মিলার।" },
      { japanese: "わたしは かいしゃいんです。", romaji: "Watashi wa kaishain desu.", bengali: "আমি কোম্পানির কর্মচারী।" },
    ],
  },
  {
    title: "Negative পরিচয়",
    structure: "N₁ は N₂ じゃありません。／ではありません。",
    explanation: "কেউ বা কিছু N₂ নয় বলতে です-এর negative form ব্যবহার করা হয়। じゃありません সাধারণ ভদ্র কথোপকথনে স্বাভাবিক; ではありません তুলনামূলক formal এবং লেখা বা আনুষ্ঠানিক পরিস্থিতিতে বেশি দেখা যায়।",
    notes: [
      "じゃありません ও ではありません একই অর্থ দেয়; formality আলাদা।",
      "です-এর পরে じゃありません যোগ করবেন না—です-কে negative ending দিয়ে বদলাতে হবে।",
      "Casual じゃない এই Unit-এর polite style নয়; শুরুতে じゃありません ব্যবহার করাই নিরাপদ।",
    ],
    visual: {
      tokens: [{ text: "サントスさん", role: "Topic" }, { text: "は", role: "Topic marker", accent: true }, { text: "がくせい", role: "যে পরিচয়টি নয়" }, { text: "じゃありません", role: "নয়", accent: true }],
      romaji: "Santosu-san wa gakusei ja arimasen.",
      bengali: "সান্তোস-সান শিক্ষার্থী নন।",
    },
    examples: [
      { japanese: "サントスさんは がくせいじゃありません。", romaji: "Santosu-san wa gakusei ja arimasen.", bengali: "সান্তোস-সান শিক্ষার্থী নন।" },
      { japanese: "ミラーさんは せんせいではありません。", romaji: "Miraa-san wa sensei dewa arimasen.", bengali: "মিলার-সান শিক্ষক নন।" },
    ],
  },
  {
    title: "হ্যাঁ/না ও information question",
    structure: "N₁ は N₂ ですか。",
    explanation: "Statement-এর শেষে か যোগ করলে word order না বদলিয়েই polite question হয়। কথার সময় sentence-এর শেষে স্বর কিছুটা ওপরে ওঠে। だれ／どなた, なんさい／おいくつ-এর মতো question word দিয়েও একইভাবে শেষে か থাকে।",
    notes: [
      "হ্যাঁ/না question-এর উত্তরে はい বা いいえ দিয়ে সম্পূর্ণ বাক্য বলা সবচেয়ে পরিষ্কার।",
      "Question-এর জন্য English-এর মতো subject ও verb-এর স্থান বদলাতে হয় না।",
      "どなた হলো だれ-এর এবং おいくつ হলো なんさい-এর বেশি ভদ্র রূপ।",
    ],
    visual: {
      tokens: [{ text: "ミラーさん", role: "Topic" }, { text: "は", role: "Topic marker", accent: true }, { text: "アメリカじん", role: "জানতে চাওয়া তথ্য" }, { text: "ですか", role: "Question ending", accent: true }],
      romaji: "Miraa-san wa Amerika-jin desu ka.",
      bengali: "মিলার-সান কি আমেরিকান?",
    },
    examples: [
      { japanese: "ミラーさんは アメリカじんですか。", romaji: "Miraa-san wa Amerika-jin desu ka.", bengali: "মিলার-সান কি আমেরিকান?" },
      { japanese: "はい、アメリカじんです。", romaji: "Hai, Amerika-jin desu.", bengali: "হ্যাঁ, তিনি আমেরিকান।" },
      { japanese: "あのかたは どなたですか。", romaji: "Ano kata wa donata desu ka.", bengali: "ওই ভদ্রলোক/ভদ্রমহিলা কে?" },
    ],
  },
  {
    title: "একই তথ্য যোগ করা",
    structure: "N₁ も N₂ です。",
    explanation: "আগে বলা কারও বা কিছুর সঙ্গে একই তথ্য আরেকজনের ক্ষেত্রেও সত্য হলে は-এর জায়গায় も বসে। এর অর্থ ‘ও’, ‘এছাড়াও’ বা ‘আমিও’। は এবং も একসঙ্গে ব্যবহার করা হয় না।",
    notes: [
      "প্রথম sentence-এ সাধারণত は দিয়ে তথ্য স্থাপন করা হয়; পরের matching topic-এ も ব্যবহার করা যায়।",
      "わたしはも ভুল; সঠিক হলো わたしも।",
    ],
    visual: {
      tokens: [{ text: "グプタさん", role: "নতুন topic" }, { text: "も", role: "ও/also", accent: true }, { text: "かいしゃいん", role: "একই পরিচয়" }, { text: "です", role: "Polite ending", accent: true }],
      romaji: "Guputa-san mo kaishain desu.",
      bengali: "গুপ্তা-সানও কোম্পানির কর্মচারী।",
    },
    examples: [
      { japanese: "ミラーさんは かいしゃいんです。", romaji: "Miraa-san wa kaishain desu.", bengali: "মিলার-সান কোম্পানির কর্মচারী।" },
      { japanese: "グプタさんも かいしゃいんです。", romaji: "Guputa-san mo kaishain desu.", bengali: "গুপ্তা-সানও কোম্পানির কর্মচারী।" },
    ],
  },
  {
    title: "দুইটি noun-এর সম্পর্ক",
    structure: "N₁ の N₂",
    explanation: "の দুইটি noun-কে যুক্ত করে। N₁ বলে N₂ কোন প্রতিষ্ঠান, দেশ, দল, ক্ষেত্র বা মালিকের সঙ্গে সম্পর্কিত। এই Unit-এ এটি বিশেষ করে company, university বা organisation-এর affiliation বোঝাতে ব্যবহৃত হয়। মূল noun হলো N₂।",
    notes: [
      "IMCの しゃいん মানে IMC-এর কর্মচারী; এখানে しゃいん হলো মূল পরিচয়।",
      "の শুধু possession নয়—affiliation, origin, category এবং field-ও বোঝাতে পারে।",
      "Japanese noun order বাংলা/English-এর থেকে উল্টো মনে হতে পারে: আগে qualifier, পরে main noun।",
    ],
    visual: {
      tokens: [{ text: "IMC", role: "প্রতিষ্ঠান" }, { text: "の", role: "সম্পর্ক/এর", accent: true }, { text: "しゃいん", role: "মূল noun" }],
      romaji: "IMC no shain",
      bengali: "IMC-এর কর্মচারী",
    },
    examples: [
      { japanese: "ミラーさんは IMCの しゃいんです。", romaji: "Miraa-san wa IMC no shain desu.", bengali: "মিলার-সান IMC-এর কর্মচারী।" },
      { japanese: "わたしは さくらだいがくの がくせいです。", romaji: "Watashi wa Sakura daigaku no gakusei desu.", bengali: "আমি সাকুরা বিশ্ববিদ্যালয়ের শিক্ষার্থী।" },
    ],
  },
  {
    title: "সম্মানসূচক নাম ও সম্বোধন",
    structure: "নাম + さん／ちゃん",
    explanation: "さん অন্য ব্যক্তির নামের পরে যোগ করে সম্মান দেখানো হয়। ছোট শিশু বা খুব ঘনিষ্ঠ কারও নামের পরে ちゃん ব্যবহার করা যায়। নিজের নাম বলার সময় নিজের নামের পরে さん ব্যবহার করা হয় না।",
    notes: [
      "অপরিচিত বা কর্মক্ষেত্রের মানুষের জন্য さん নিরাপদ ও ভদ্র সম্বোধন।",
      "আপনি বলে あなた বারবার বলার বদলে নাম + さん ব্যবহার Japanese-এ বেশি স্বাভাবিক।",
      "ちゃん formal workplace address নয়; সম্পর্ক ও বয়স বুঝে ব্যবহার করতে হবে।",
    ],
    visual: {
      tokens: [{ text: "たなか", role: "অন্য ব্যক্তির নাম" }, { text: "さん", role: "সম্মানসূচক", accent: true }],
      romaji: "Tanaka-san",
      bengali: "তানাকা-সান / জনাব-জনাবা তানাকা",
    },
    examples: [
      { japanese: "あのかたは ミラーさんです。", romaji: "Ano kata wa Miraa-san desu.", bengali: "ওই ভদ্রলোক মিস্টার মিলার।" },
      { japanese: "はなちゃんは ごさいです。", romaji: "Hana-chan wa go-sai desu.", bengali: "হানা-চানের বয়স পাঁচ বছর।" },
    ],
  },
];

export function getMinnaN5GrammarDetails(unitNumber: number) {
  return unitNumber === 1 ? unit1GrammarDetails : [];
}
