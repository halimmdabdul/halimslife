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

const unit2GrammarDetails: GrammarDetail[] = [
  {
    title: "একটি জিনিস নির্দেশ করা",
    structure: "これ／それ／あれは N です。",
    explanation: "これ, それ ও あれ নিজেই pronoun-এর মতো একটি জিনিসকে বোঝায়। これ বক্তার কাছে, それ শ্রোতার কাছে এবং あれ দুজনের থেকেই দূরের জিনিস নির্দেশ করে। এগুলোর পরে সরাসরি আরেকটি noun বসে না।",
    notes: ["これ + 本 বলা যাবে না; これは 本です বলতে হবে।", "জিনিসের distance কার দিক থেকে বিচার হচ্ছে, সেটি আগে দেখুন।"],
    visual: { tokens: [{text:"これ",role:"বক্তার কাছের জিনিস",accent:true},{text:"は",role:"Topic marker"},{text:"本",role:"জিনিসের পরিচয়"},{text:"です",role:"Polite ending"}], romaji:"Kore wa hon desu.", bengali:"এটি একটি বই।" },
    examples: [
      {japanese:"これは 本です。",romaji:"Kore wa hon desu.",bengali:"এটি বই।"},
      {japanese:"それは 辞書です。",romaji:"Sore wa jisho desu.",bengali:"সেটি অভিধান।"},
      {japanese:"あれは テレビです。",romaji:"Are wa terebi desu.",bengali:"ওটি টেলিভিশন।"},
    ],
  },
  {
    title: "Noun-এর আগে এই/সেই/ঐ",
    structure: "この／その／あの + N",
    explanation: "この, その ও あの determiner—তাই এদের পরে অবশ্যই noun লাগে। この本 হলো বক্তার কাছের এই বই, その本 শ্রোতার কাছের সেই বই এবং あの本 দুজনের থেকে দূরের ঐ বই।",
    notes: ["この একা বলা যায় না; この本-এর মতো noun প্রয়োজন।", "これ বনাম この-এর পার্থক্য: これ নিজে দাঁড়ায়, この noun-কে modify করে।"],
    visual: { tokens: [{text:"その",role:"শ্রোতার কাছের",accent:true},{text:"ノート",role:"Noun"},{text:"は",role:"Topic marker"},{text:"新しいです",role:"তথ্য"}], romaji:"Sono nooto wa atarashii desu.", bengali:"সেই খাতাটি নতুন।" },
    examples: [
      {japanese:"この本は おもしろいです。",romaji:"Kono hon wa omoshiroi desu.",bengali:"এই বইটি মজার।"},
      {japanese:"そのノートは 新しいです。",romaji:"Sono nooto wa atarashii desu.",bengali:"সেই খাতাটি নতুন।"},
      {japanese:"あの車は ミラーさんのです。",romaji:"Ano kuruma wa Miraa-san no desu.",bengali:"ঐ গাড়িটি মিলার-সানের।"},
    ],
  },
  {
    title: "দুইটি option-এর মধ্যে কোনটি",
    structure: "N₁ ですか、N₂ ですか。",
    explanation: "একটি জিনিস দুইটি পরিচয়ের মধ্যে কোনটি জানতে দুই option-এর প্রত্যেকটির পরে ですか বলা যায়। উত্তরে はい／いいえ নয়; সঠিক option-টি সরাসরি বলা স্বাভাবিক।",
    notes: ["এটি yes/no question নয়—একটি option বেছে উত্তর দিন।", "Question-এর শেষে Japanese question mark না দিলেও か question বোঝায়।"],
    visual: { tokens: [{text:"これは",role:"এই জিনিস"},{text:"本ですか",role:"Option 1",accent:true},{text:"辞書ですか",role:"Option 2",accent:true}], romaji:"Kore wa hon desu ka, jisho desu ka.", bengali:"এটি বই, নাকি অভিধান?" },
    examples: [
      {japanese:"これは 本ですか、辞書ですか。",romaji:"Kore wa hon desu ka, jisho desu ka.",bengali:"এটি বই, নাকি অভিধান?"},
      {japanese:"辞書です。",romaji:"Jisho desu.",bengali:"এটি অভিধান।"},
    ],
  },
  {
    title: "জিনিসের নাম জানতে চাওয়া",
    structure: "これは なんですか。",
    explanation: "কোনো জিনিস কী জানতে demonstrative-এর পরে は なんですか ব্যবহার করুন। 何 সাধারণত এই pattern-এ なん উচ্চারিত হয়। কাছাকাছি context অনুযায়ী それは？ বলেও সংক্ষিপ্ত follow-up question করা যায়।",
    notes: ["মানুষের জন্য だれ／どなた; জিনিসের জন্য なん ব্যবহার করুন।", "それは？ কথোপকথনে ‘আর সেটি?’ অর্থে স্বাভাবিক।"],
    visual: { tokens: [{text:"これ",role:"দেখানো জিনিস",accent:true},{text:"は",role:"Topic"},{text:"なん",role:"কী",accent:true},{text:"ですか",role:"Question"}], romaji:"Kore wa nan desu ka.", bengali:"এটি কী?" },
    examples: [
      {japanese:"これは なんですか。",romaji:"Kore wa nan desu ka.",bengali:"এটি কী?"},
      {japanese:"カメラです。",romaji:"Kamera desu.",bengali:"ক্যামেরা।"},
    ],
  },
  {
    title: "জিনিসের ধরন বা বিষয়",
    structure: "N₁ の N₂",
    explanation: "Unit 01-এ の affiliation দেখিয়েছে; এখানে একই particle জিনিসের category, content, language বা origin যুক্ত করে। Main noun সবসময় শেষে থাকে—英語の本 মানে ইংরেজি ভাষার বই।",
    notes: ["N₂ হলো main object; N₁ সেটির ধরন বা সম্পর্ক ব্যাখ্যা করে।", "日本の車 context অনুযায়ী জাপানের বা Japanese car বোঝাতে পারে।"],
    visual: { tokens: [{text:"英語",role:"ভাষা/category"},{text:"の",role:"সংযোগ",accent:true},{text:"本",role:"Main noun"}], romaji:"Eigo no hon desu.", bengali:"ইংরেজি ভাষার বই।" },
    examples: [
      {japanese:"これは 英語の 本です。",romaji:"Kore wa Eigo no hon desu.",bengali:"এটি ইংরেজি ভাষার বই।"},
      {japanese:"これは 日本の 車です。",romaji:"Kore wa Nihon no kuruma desu.",bengali:"এটি জাপানি গাড়ি।"},
    ],
  },
  {
    title: "মালিকানা জিজ্ঞেস ও উত্তর",
    structure: "これは だれの N ですか。／N のです。",
    explanation: "কার জিনিস জানতে だれの ব্যবহার হয়। জিনিসটি context-এ স্পষ্ট হলে উত্তরে noun আবার না বলে のです-এ থামা যায়—わたしのです মানে ‘আমারটি’।",
    notes: ["だれの-এর পরে noun রাখা যায়: だれの かばん।", "শুধু だれですか বললে ‘কে?’ হয়; だれのですか বললে ‘কারটি?’ হয়।"],
    visual: { tokens: [{text:"このかばん",role:"এই ব্যাগ"},{text:"は",role:"Topic"},{text:"だれの",role:"কার",accent:true},{text:"ですか",role:"Question"}], romaji:"Kono kaban wa dare no desu ka.", bengali:"এই ব্যাগটি কার?" },
    examples: [
      {japanese:"このかばんは だれのですか。",romaji:"Kono kaban wa dare no desu ka.",bengali:"এই ব্যাগটি কার?"},
      {japanese:"わたしのです。",romaji:"Watashi no desu.",bengali:"আমারটি।"},
    ],
  },
  {
    title: "তথ্য confirm, deny ও বুঝে নেওয়া",
    structure: "そうです。／そうじゃありません。／そうですか。",
    explanation: "আগের প্রশ্ন বা তথ্য পুনরাবৃত্তি না করে そう দিয়ে উত্তর দেওয়া যায়। はい、そうです হলো ‘হ্যাঁ, তাই’; いいえ、そうじゃありません／ちがいます হলো ‘না, তা নয়’। そうですか নিচু স্বরে বললে ‘ও, তাই নাকি/বুঝলাম’ বোঝায়।",
    notes: ["そうですか সবসময় question চাওয়া নয়; নতুন তথ্য বুঝে নেওয়ার response-ও হতে পারে।", "ちがいます সরাসরি ‘তা নয়/ভিন্ন’ বোঝায়।"],
    visual: { tokens: [{text:"はい",role:"হ্যাঁ"},{text:"そう",role:"আগের তথ্য",accent:true},{text:"です",role:"Polite ending"}], romaji:"Hai, sou desu.", bengali:"হ্যাঁ, তাই।" },
    examples: [
      {japanese:"これは 辞書ですか。― はい、そうです。",romaji:"Kore wa jisho desu ka. — Hai, sou desu.",bengali:"এটি কি অভিধান? — হ্যাঁ, তাই।"},
      {japanese:"いいえ、ちがいます。",romaji:"Iie, chigaimasu.",bengali:"না, তা নয়।"},
      {japanese:"そうですか。",romaji:"Sou desu ka.",bengali:"ও, তাই নাকি/বুঝলাম।"},
    ],
  },
];

const unit3GrammarDetails: GrammarDetail[] = [
  {
    title: "কাছের ও দূরের জায়গা দেখানো", structure: "ここ／そこ／あそこ／どこ",
    explanation: "ここ বক্তার কাছের, そこ শ্রোতার কাছের এবং あそこ দুজনের থেকেই দূরের জায়গা বোঝায়। জায়গা কোথায় জানতে どこ ব্যবহার হয়। এগুলো place pronoun, তাই পরে noun বসাতে হয় না।",
    notes: ["ここ・そこ・あそこ শুধু জায়গার জন্য; জিনিসের জন্য これ・それ・あれ।", "কথক ও শ্রোতার অবস্থান বদলালে ここ এবং そこ-ও বদলে যায়।", "Question-এ どこ-এর পরে সাধারণত ですか থাকে।"],
    visual: { tokens: [{text:"トイレ",role:"যে স্থানটি খুঁজছি"},{text:"は",role:"Topic",accent:true},{text:"どこ",role:"কোথায়",accent:true},{text:"ですか",role:"Question"}], romaji:"Toire wa doko desu ka.", bengali:"টয়লেট কোথায়?" },
    examples: [{japanese:"ここは 受付です。",romaji:"Koko wa uketsuke desu.",bengali:"এখানে reception।"},{japanese:"そこは ロビーです。",romaji:"Soko wa robii desu.",bengali:"সেখানে lobby।"},{japanese:"あそこは 食堂です。",romaji:"Asoko wa shokudou desu.",bengali:"ওখানে ক্যান্টিন।"}],
  },
  {
    title: "কোনো স্থান বা ব্যক্তি কোথায়", structure: "N は Place です。",
    explanation: "কোনো room, facility বা ব্যক্তির অবস্থান জানাতে topic-এর পরে は এবং location-এর পরে です বসে। প্রশ্নে location-এর জায়গায় どこ বসে। এটি existence নয়; পরিচিত N-এর অবস্থানকে সরাসরি location হিসেবে চিহ্নিত করে।",
    notes: ["駅は ここです এবং 受付は あそこです—দুটোতেই একই word order।", "মানুষের location-ও beginner conversation-এ N は Place です দিয়ে বলা যায়।", "Place-এর পরে অতিরিক্ত に দরকার নেই যখন ending です।"],
    visual: { tokens: [{text:"会議室",role:"Topic"},{text:"は",role:"Topic marker",accent:true},{text:"あそこ",role:"Location",accent:true},{text:"です",role:"Ending"}], romaji:"Kaigishitsu wa asoko desu.", bengali:"সভাকক্ষ ওখানে।" },
    examples: [{japanese:"受付は ここです。",romaji:"Uketsuke wa koko desu.",bengali:"Reception এখানে।"},{japanese:"山田さんは 事務所です。",romaji:"Yamada-san wa jimusho desu.",bengali:"ইয়ামাদা অফিসে।"}],
  },
  {
    title: "Polite location ও direction", structure: "こちら／そちら／あちら／どちら",
    explanation: "こちら・そちら・あちら হলো ここ・そこ・あそこ-এর ভদ্র রূপ এবং ‘এই/সেই/ওই দিক’ও বোঝায়। どちら হলো polite question form—কোন দিক, কোন জায়গা বা context অনুযায়ী কোনটি।",
    notes: ["Direction বা customer service-এ どちら বেশি স্বাভাবিক।", "こちらは～です দিয়ে কাউকে ভদ্রভাবে পরিচয়ও করানো যায়।", "দুটি option থেকে বাছতে どちら ব্যবহার করা যায়।"],
    visual: { tokens: [{text:"エレベーター",role:"খোঁজা facility"},{text:"は",role:"Topic"},{text:"どちら",role:"কোন দিকে",accent:true},{text:"ですか",role:"Question"}], romaji:"Erebeetaa wa dochira desu ka.", bengali:"লিফট কোন দিকে?" },
    examples: [{japanese:"お手洗いは あちらです。",romaji:"Otearai wa achira desu.",bengali:"বিশ্রামাগার ওই দিকে।"},{japanese:"受付は どちらですか。",romaji:"Uketsuke wa dochira desu ka.",bengali:"Reception কোন দিকে?"}],
  },
  {
    title: "Noun দিয়ে সম্পর্ক ও origin", structure: "N₁ の N₂",
    explanation: "の দুটি noun যুক্ত করে ownership ছাড়াও company, country, origin ও category-এর সম্পর্ক দেখায়। Main noun থাকে শেষে; প্রথম noun দ্বিতীয়টিকে ব্যাখ্যা করে।",
    notes: ["日本の会社 = জাপানের/Japanese company।", "会社の電話 = company-এর telephone।", "Context অনুযায়ী の-এর বাংলা ‘এর’, ‘দেশের’ বা ‘তৈরি’ হতে পারে।"],
    visual: { tokens: [{text:"日本",role:"দেশ/origin"},{text:"の",role:"সম্পর্ক",accent:true},{text:"会社",role:"Main noun"}], romaji:"Nihon no kaisha desu.", bengali:"জাপানি কোম্পানি।" },
    examples: [{japanese:"IMCは 日本の会社です。",romaji:"IMC wa Nihon no kaisha desu.",bengali:"IMC একটি জাপানি কোম্পানি।"},{japanese:"これは 会社の電話です。",romaji:"Kore wa kaisha no denwa desu.",bengali:"এটি company-এর telephone।"}],
  },
  {
    title: "Place demonstrative-এর পূর্ণ family", structure: "ここ／そこ／あそこ ↔ こちら／そちら／あちら",
    explanation: "একই distance system জিনিস, জায়গা এবং polite direction-এ আলাদা শব্দ নেয়। これ হলো জিনিস, ここ হলো জায়গা, আর こちら হলো ভদ্র জায়গা/দিক। বহুবচনে これら・それら・あれら ব্যবহার করা যায়, তবে এই lesson-এ singular set-টিই মূল।",
    notes: ["これ・ここ・こちら—তিনটির distance একই, grammatical কাজ আলাদা।", "どれ = কোন জিনিস; どこ = কোথায়; どちら = কোন দিক/ভদ্র কোথায়।", "একই scene দেখে তিনটি family আলাদা করে বলার practice করুন।"],
    visual: { tokens: [{text:"これ",role:"জিনিস"},{text:"ここ",role:"জায়গা",accent:true},{text:"こちら",role:"ভদ্র দিক/স্থান"}], romaji:"Kore / koko / kochira", bengali:"এটি / এখানে / এই দিকে" },
    examples: [{japanese:"これは 電話です。ここは 事務所です。",romaji:"Kore wa denwa desu. Koko wa jimusho desu.",bengali:"এটি telephone। এখানে office।"},{japanese:"エレベーターは こちらです。",romaji:"Erebeetaa wa kochira desu.",bengali:"Lift এই দিকে।"}],
  },
  {
    title: "কোনো জায়গায় বস্তু বা মানুষ আছে", structure: "Place に N が あります／います。",
    explanation: "কোনো জায়গায় কী আছে তা নতুন করে জানাতে Place に N が pattern ব্যবহার হয়। বস্তু, facility বা উদ্ভিদের জন্য あります; মানুষ ও প্রাণীর জন্য います। পরিচিত N কোথায় আছে বলতে N は Place に あります／います বলা যায়।",
    notes: ["に অস্তিত্বের location এবং が সেখানে থাকা entity চিহ্নিত করে।", "電話・机・自動販売機 → あります; 先生・山田さん → います।", "です দিয়ে location বলার pattern এবং あります／います দিয়ে অস্তিত্ব বলার nuance আলাদা।"],
    visual: { tokens: [{text:"ロビー",role:"Location"},{text:"に",role:"অস্তিত্বের স্থান",accent:true},{text:"電話",role:"বস্তু"},{text:"が あります",role:"আছে",accent:true}], romaji:"Robii ni denwa ga arimasu.", bengali:"Lobby-তে telephone আছে।" },
    examples: [{japanese:"食堂に 自動販売機が あります。",romaji:"Shokudou ni jidouhanbaiki ga arimasu.",bengali:"ক্যান্টিনে vending machine আছে।"},{japanese:"先生は 教室に います。",romaji:"Sensei wa kyoushitsu ni imasu.",bengali:"শিক্ষক শ্রেণিকক্ষে আছেন।"},{japanese:"電話は 事務所に あります。",romaji:"Denwa wa jimusho ni arimasu.",bengali:"Telephone অফিসে আছে।"}],
  },
  {
    title: "Noun sentence-এর negative", structure: "N は N ではありません。",
    explanation: "কোনো জিনিস বা জায়গার পরিচয় অস্বীকার করতে です-এর জায়গায় ではありません বা কথোপকথনে じゃありません বসে। এটি location word-এর সঙ্গেও ব্যবহার করা যায়।",
    notes: ["これは 駅ではありません = এটি station নয়।", "ですではありません বলা যাবে না; です পুরোপুরি বদলে যায়।", "Negative answer-এর পরে সঠিক তথ্য যোগ করলে কথা আরও পরিষ্কার হয়।"],
    visual: {tokens:[{text:"ここ",role:"Topic"},{text:"は",role:"Marker"},{text:"駅",role:"যে পরিচয়টি নয়"},{text:"ではありません",role:"নয়",accent:true}],romaji:"Koko wa eki dewa arimasen.",bengali:"এখানে station নয়।"},
    examples: [{japanese:"これは エレベーターではありません。",romaji:"Kore wa erebeetaa dewa arimasen.",bengali:"এটি lift নয়।"},{japanese:"ここは 受付じゃありません。ロビーです。",romaji:"Koko wa uketsuke ja arimasen. Robii desu.",bengali:"এখানে reception নয়; lobby।"}],
  },
  {
    title: "দাম জিজ্ঞেস ও yen-এ উত্তর", structure: "この N は いくらですか。／Number 円です。",
    explanation: "কোনো জিনিসের দাম জানতে いくらですか ব্যবহার হয়। নির্দিষ্ট জিনিস দেখালে この＋noun এবং দূরত্ব অনুযায়ী その／あの ব্যবহার করুন। উত্তরে সংখ্যার পরে সরাসরি 円（えん） বসে।",
    notes: ["いくら = কত দাম; どこ = কোথায়—দুটি গুলিয়ে ফেলবেন না।", "百・千・万 দিয়ে বড় দাম পড়ুন: 2,800円 = にせんはっぴゃくえん।৮০০-এর reading はっぴゃく।", "Floor-এর 階 এবং price-এর 円 আলাদা counter।"],
    visual: {tokens:[{text:"このワイン",role:"পণ্য"},{text:"は",role:"Topic"},{text:"いくら",role:"কত দাম",accent:true},{text:"ですか",role:"Question"}],romaji:"Kono wain wa ikura desu ka.",bengali:"এই wine-এর দাম কত?"},
    examples: [{japanese:"このワインは いくらですか。",romaji:"Kono wain wa ikura desu ka.",bengali:"এই wine-এর দাম কত?"},{japanese:"二千五百円です。",romaji:"Ni-sen go-hyaku-en desu.",bengali:"দাম ২,৫০০ yen।"},{japanese:"このかばんは 七千三百円です。",romaji:"Kono kaban wa nana-sen san-byaku-en desu.",bengali:"এই bag-এর দাম ৭,৩০০ yen।"}],
  },
];

export function getMinnaN5GrammarDetails(unitNumber: number) {
  if (unitNumber === 1) return unit1GrammarDetails;
  if (unitNumber === 2) return unit2GrammarDetails;
  if (unitNumber === 3) return unit3GrammarDetails;
  return [];
}
