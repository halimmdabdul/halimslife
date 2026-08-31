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

const unit4GrammarDetails: GrammarDetail[] = [
  {
    title: "ঘড়ির সময় বলা ও জিজ্ঞেস করা",
    structure: "今 ～時 ～分です。／何時ですか。",
    explanation: "বর্তমান সময় বলতে 今-এর পরে hour counter 時（じ） ও minute counter 分（ふん／ぷん） বসে। সময় জানতে 今 何時ですか বলা হয়। Japanese-এ hour-এর জন্য 4時＝よじ, 7時＝しちじ এবং 9時＝くじ—এই বিশেষ readingগুলো আলাদা করে মনে রাখতে হবে।",
    notes: ["৩০ মিনিটকে 三十分 বলার পাশাপাশি 半 ব্যবহার করা যায়: 7時半 = সাড়ে ৭টা।", "分-এর reading সংখ্যাভেদে ふん বা ぷん হয়: 5分＝ごふん, 10分＝じゅっぷん।", "午前 হলো a.m. এবং 午後 হলো p.m.; এগুলো সময়ের আগে বসে।"],
    visual: { tokens: [{text:"今",role:"এখন"},{text:"7時",role:"ঘণ্টা",accent:true},{text:"10分",role:"মিনিট",accent:true},{text:"です",role:"Polite ending"}], romaji:"Ima shichi-ji juppun desu.", bengali:"এখন ৭টা ১০ মিনিট।" },
    examples: [{japanese:"今 何時ですか。",romaji:"Ima nan-ji desu ka.",bengali:"এখন কয়টা?"},{japanese:"午前 6時半です。",romaji:"Gozen roku-ji han desu.",bengali:"এখন সকাল সাড়ে ৬টা।"},{japanese:"午後 9時15分です。",romaji:"Gogo ku-ji juu-go-fun desu.",bengali:"এখন রাত ৯টা ১৫ মিনিট।"}],
  },
  {
    title: "Polite verb-এর non-past ও past",
    structure: "Vます／Vません／Vました／Vませんでした",
    explanation: "ます-form বর্তমান অভ্যাস ও ভবিষ্যৎ—দুই ক্ষেত্রেই ব্যবহৃত হয়। Negative non-past করতে ません, past affirmative করতে ました এবং past negative করতে ませんでした বসে। Verb stem অপরিবর্তিত থাকে; শুধু polite ending বদলায়।",
    notes: ["毎日-এর মতো habit এবং 明日-এর মতো future—দুটিতেই Vます হতে পারে।", "昨日-এর মতো past time থাকলে ました／ませんでした ব্যবহার করুন।", "ませんでした-কে ましたじゃありません বানানো যাবে না।"],
    visual: { tokens: [{text:"きのう",role:"Past time"},{text:"勉強し",role:"Verb stem"},{text:"ませんでした",role:"Past negative",accent:true}], romaji:"Kinou benkyou shimasen deshita.", bengali:"গতকাল পড়াশোনা করিনি।" },
    examples: [{japanese:"毎日 勉強します。",romaji:"Mainichi benkyou shimasu.",bengali:"প্রতিদিন পড়াশোনা করি।"},{japanese:"あした 働きません。",romaji:"Ashita hatarakimasen.",bengali:"আগামীকাল কাজ করব না।"},{japanese:"きのう 6時に 起きました。",romaji:"Kinou roku-ji ni okimashita.",bengali:"গতকাল ৬টায় উঠেছি।"},{japanese:"おととい 勉強しませんでした。",romaji:"Ototoi benkyou shimasen deshita.",bengali:"গত পরশু পড়াশোনা করিনি।"}],
  },
  {
    title: "কাজটি কখন হয়—সময় particle に",
    structure: "N（time）に V",
    explanation: "কোনো কাজ সংঘটিত হওয়ার নির্দিষ্ট সময়ের পরে に বসে। Hour, minute এবং নির্দিষ্ট calendar date-এর সঙ্গে に ব্যবহার হয়। কিন্তু 今, 今日, 明日, 毎日-এর মতো relative বা নিয়মিত time word-এর পরে সাধারণত に বসে না।",
    notes: ["6時に 起きます = ৬টায় উঠি; に কাজের exact point দেখায়।", "今日に／明日に／毎日に সাধারণ beginner usage-এ ভুল; particle বাদ দিন।", "Question-এ সময়ের জায়গায় 何時に বসে: 何時に 寝ますか。"],
    visual: { tokens: [{text:"毎朝",role:"নিয়মিত সময়"},{text:"6時",role:"Exact time"},{text:"に",role:"সময় marker",accent:true},{text:"起きます",role:"Action"}], romaji:"Maiasa roku-ji ni okimasu.", bengali:"প্রতিদিন সকাল ৬টায় উঠি।" },
    examples: [{japanese:"毎朝 6時に 起きます。",romaji:"Maiasa roku-ji ni okimasu.",bengali:"প্রতিদিন সকাল ৬টায় উঠি।"},{japanese:"7月2日に 日本へ 来ました。",romaji:"Shichi-gatsu futsuka ni Nihon e kimashita.",bengali:"২ জুলাই জাপানে এসেছি।"},{japanese:"何時に 寝ますか。",romaji:"Nan-ji ni nemasu ka.",bengali:"কয়টায় ঘুমান?"}],
  },
  {
    title: "শুরু ও শেষের সীমা",
    structure: "N₁ から N₂ まで",
    explanation: "から শুরু হওয়ার সময় বা জায়গা এবং まで শেষ হওয়ার সময় বা জায়গা দেখায়। দুটি একসঙ্গে বা প্রয়োজন অনুযায়ী আলাদাও ব্যবহার করা যায়। Action sentence-এর পাশাপাশি shop, bank বা office-এর schedule-এও patternটি ব্যবহৃত হয়।",
    notes: ["から = থেকে; まで = পর্যন্ত—ক্রমটি উল্টাবেন না।", "শুধু শুরু জানা থাকলে から এবং শুধু শেষ জানা থাকলে まで একাই ব্যবহার করা যায়।", "সময় ছাড়াও 大阪から東京まで-এর মতো place range বোঝায়।"],
    visual: { tokens: [{text:"9時",role:"শুরু"},{text:"から",role:"থেকে",accent:true},{text:"5時",role:"শেষ"},{text:"まで",role:"পর্যন্ত",accent:true},{text:"働きます",role:"Action"}], romaji:"Ku-ji kara go-ji made hatarakimasu.", bengali:"৯টা থেকে ৫টা পর্যন্ত কাজ করি।" },
    examples: [{japanese:"銀行は 9時から 3時までです。",romaji:"Ginkou wa ku-ji kara san-ji made desu.",bengali:"ব্যাংক ৯টা থেকে ৩টা পর্যন্ত।"},{japanese:"昼休みは 12時からです。",romaji:"Hiruyasumi wa juu-ni-ji kara desu.",bengali:"দুপুরের বিরতি ১২টা থেকে।"},{japanese:"大阪から 東京まで 3時間かかります。",romaji:"Oosaka kara Toukyou made san-jikan kakarimasu.",bengali:"ওসাকা থেকে টোকিও যেতে ৩ ঘণ্টা লাগে।"}],
  },
  {
    title: "দুইটি noun সমানভাবে যুক্ত করা",
    structure: "N₁ と N₂",
    explanation: "と দুইটি noun-কে ‘এবং’ অর্থে সম্পূর্ণ তালিকা হিসেবে যুক্ত করে। এই Unit-এ ছুটির দিন, প্রতিষ্ঠান বা schedule-এর দুইটি item একসঙ্গে বলতে এটি ব্যবহৃত হয়।",
    notes: ["土曜日と 日曜日 = শনিবার এবং রবিবার।", "と-এর আগে ও পরে noun বসে; verb বা সম্পূর্ণ sentence সরাসরি যুক্ত করার beginner pattern এটি নয়।", "তালিকাটি অসম্পূর্ণ বোঝাতে পরে শেখা や ব্যবহৃত হয়; と সাধারণত উল্লিখিত সব item বোঝায়।"],
    visual: { tokens: [{text:"土曜日",role:"Noun 1"},{text:"と",role:"এবং",accent:true},{text:"日曜日",role:"Noun 2"},{text:"です",role:"Ending"}], romaji:"Doyoubi to nichiyoubi desu.", bengali:"শনিবার ও রবিবার।" },
    examples: [{japanese:"銀行の 休みは 土曜日と 日曜日です。",romaji:"Ginkou no yasumi wa doyoubi to nichiyoubi desu.",bengali:"ব্যাংকের ছুটি শনিবার ও রবিবার।"},{japanese:"休みは 月曜日と 木曜日です。",romaji:"Yasumi wa getsuyoubi to mokuyoubi desu.",bengali:"ছুটি সোমবার ও বৃহস্পতিবার।"}],
  },
  {
    title: "শ্রোতার সম্মতি বা সহমর্মিতা—ね",
    structure: "Sentence + ね。",
    explanation: "Sentence-এর শেষে ね বসিয়ে বক্তা শ্রোতার agreement চায়, একই অনুভূতি ভাগ করে বা কোনো তথ্যের ওপর কোমল emphasis দেয়। বাংলায় context অনুযায়ী ‘তাই না’, ‘না’ বা ‘সত্যিই’ অর্থ হতে পারে।",
    notes: ["ね নতুন তথ্যের সরাসরি question নয়; shared feeling বা confirmation তৈরি করে।", "大変ですね সহমর্মিতা দেখায়—‘কষ্টকর, তাই না!’", "Intonation নরম রাখলে expressionটি স্বাভাবিক ও friendly শোনায়।"],
    visual: { tokens: [{text:"毎日 勉強します",role:"Situation"},{text:"大変です",role:"Evaluation"},{text:"ね",role:"সম্মতি/সহমর্মিতা",accent:true}], romaji:"Mainichi benkyou shimasu. Taihen desu ne.", bengali:"প্রতিদিন পড়েন—কষ্টকর, তাই না!" },
    examples: [{japanese:"毎日 10時まで 働きますか。大変ですね。",romaji:"Mainichi juu-ji made hatarakimasu ka. Taihen desu ne.",bengali:"প্রতিদিন ১০টা পর্যন্ত কাজ করেন? খুব কষ্টকর, তাই না!"},{japanese:"今日は 暑いですね。",romaji:"Kyou wa atsui desu ne.",bengali:"আজ গরম, তাই না?"}],
  },
];

const unit5GrammarDetails: GrammarDetail[] = [
  {
    title:"যাওয়ার destination দেখানো",structure:"N（place）へ 行きます／来ます／帰ります",
    explanation:"Movement verb 行きます, 来ます ও 帰ります-এর destination-এর পরে へ particle বসে। Particle হিসেবে へ লেখা হলেও উচ্চারণ হয় ‘e’। 行きます বক্তার বর্তমান স্থান থেকে যাওয়া, 来ます বক্তার/কথার কেন্দ্রের দিকে আসা এবং 帰ります নিজের home বা base-এ ফেরা বোঝায়।",
    notes:["へ movement-এর direction দেখায়; এই lesson-এ destination-এর জন্য に-ও ব্যবহার করা যায়, তবে へ-তে direction-এর অনুভূতি স্পষ্ট।","Place-এর পরে へ, vehicle-এর পরে で—দুটি particle-এর কাজ আলাদা।","Question-এ destination-এর জায়গায় どこへ বসে।"],
    visual:{tokens:[{text:"わたしは",role:"Topic"},{text:"京都",role:"Destination"},{text:"へ",role:"দিকে",accent:true},{text:"行きます",role:"Movement"}],romaji:"Watashi wa Kyouto e ikimasu.",bengali:"আমি কিয়োটো যাই।"},
    examples:[{japanese:"京都へ 行きます。",romaji:"Kyouto e ikimasu.",bengali:"কিয়োটো যাই।"},{japanese:"バングラデシュから 日本へ 来ました。",romaji:"Banguradeshu kara Nihon e kimashita.",bengali:"বাংলাদেশ থেকে জাপানে এসেছি।"},{japanese:"あした うちへ 帰ります。",romaji:"Ashita uchi e kaerimasu.",bengali:"আগামীকাল বাড়ি ফিরব।"}],
  },
  {
    title:"কোথাও যাই না—সম্পূর্ণ negative",structure:"どこへも Vません／Vませんでした",
    explanation:"Question word どこ-এর সঙ্গে へも বসিয়ে এবং verb negative করলে ‘কোথাও না’ বোঝায়। も সব destination-কে cover করে, তাই positive movement verb ব্যবহার করা যাবে না। Past context হলে Vませんでした বসে।",
    notes:["どこへも 行きます ভুল; affirmative হলে নির্দিষ্ট destination বা どこかへ দরকার।","বর্তমান/future negative: 行きません; past negative: 行きませんでした।","へ ও も একসঙ্গে へも হয়; どこもへ নয়।"],
    visual:{tokens:[{text:"きょう",role:"সময়"},{text:"どこ",role:"কোথাও"},{text:"へも",role:"একটিও destination নয়",accent:true},{text:"行きません",role:"Negative movement",accent:true}],romaji:"Kyou doko e mo ikimasen.",bengali:"আজ কোথাও যাব না।"},
    examples:[{japanese:"日曜日は どこへも 行きません。",romaji:"Nichiyoubi wa doko e mo ikimasen.",bengali:"রবিবার কোথাও যাই না।"},{japanese:"きのう どこへも 行きませんでした。",romaji:"Kinou doko e mo ikimasen deshita.",bengali:"গতকাল কোথাও যাইনি।"}],
  },
  {
    title:"কোন transport দিয়ে যাওয়া",structure:"N（vehicle）で 行きます／来ます／帰ります",
    explanation:"যাতায়াতের মাধ্যম বা vehicle-এর পরে で বসে। 電車で মানে train-এ/দিয়ে, タクシーで মানে taxi-তে। হেঁটে যাওয়ার fixed expression 歩いて; এর পরে অতিরিক্ত で বসে না।",
    notes:["Vehicle + で এবং destination + へ: 電車で 東京へ 行きます।","歩いてで ভুল; শুধু 歩いて 行きます বলুন।","何で দিয়ে ‘কীভাবে/কোন মাধ্যমে’ জিজ্ঞেস করা যায়; context-এ なんで উচ্চারণ হয়।"],
    visual:{tokens:[{text:"電車",role:"Vehicle"},{text:"で",role:"মাধ্যম",accent:true},{text:"東京",role:"Destination"},{text:"へ 行きます",role:"Movement"}],romaji:"Densha de Toukyou e ikimasu.",bengali:"ট্রেনে টোকিও যাই।"},
    examples:[{japanese:"電車で 東京へ 行きます。",romaji:"Densha de Toukyou e ikimasu.",bengali:"ট্রেনে টোকিও যাই।"},{japanese:"タクシーで 来ました。",romaji:"Takushii de kimashita.",bengali:"Taxi-তে এসেছি।"},{japanese:"駅から 歩いて 帰りました。",romaji:"Eki kara aruite kaerimashita.",bengali:"স্টেশন থেকে হেঁটে ফিরেছি।"}],
  },
  {
    title:"কার সঙ্গে—companion と",structure:"N（person／animal）と V／一人で V",
    explanation:"কারও সঙ্গে কোনো কাজ বা movement করলে person বা animal-এর পরে と বসে। একা করার ক্ষেত্রে companion নেই, তাই fixed expression 一人で ব্যবহার হয়—ひとりと নয়। কার সঙ্গে জানতে だれと বলা হয়।",
    notes:["友達と = বন্ধুর সঙ্গে; 家族と = পরিবারের সঙ্গে।","一人で-এর で ‘নিজে/একা করে’ manner বোঝায়।","Object জোড়া লাগানোর と এবং companion と একই particle হলেও sentence-এ ভূমিকা context থেকে বোঝা যায়।"],
    visual:{tokens:[{text:"家族",role:"Companion"},{text:"と",role:"সঙ্গে",accent:true},{text:"日本",role:"Destination"},{text:"へ 来ました",role:"Movement"}],romaji:"Kazoku to Nihon e kimashita.",bengali:"পরিবারের সঙ্গে জাপানে এসেছি।"},
    examples:[{japanese:"友達と 大阪へ 行きます。",romaji:"Tomodachi to Oosaka e ikimasu.",bengali:"বন্ধুর সঙ্গে ওসাকা যাই।"},{japanese:"だれと 京都へ 行きましたか。",romaji:"Dare to Kyouto e ikimashita ka.",bengali:"কার সঙ্গে কিয়োটো গিয়েছিলেন?"},{japanese:"一人で 東京へ 行きます。",romaji:"Hitori de Toukyou e ikimasu.",bengali:"একা টোকিও যাই।"}],
  },
  {
    title:"কখন—time question いつ",structure:"いつ Vますか。／N（date）に V",
    explanation:"কোনো action কখন হবে বা হয়েছিল জানতে いつ ব্যবহার হয়। いつ-এর পরে に বসে না। উত্তরে নির্দিষ্ট date বা calendar point হলে に বসতে পারে—3月25日に 来ました। কিন্তু 今日, 明日, 来週, 去年-এর মতো relative time expression-এর পরে সাধারণত に লাগে না।",
    notes:["いつに ভুল; সঠিক いつ 日本へ 来ましたか।","Exact date: 7月7日に; relative time: 来週 行きます।","何時に exact clock time জিজ্ঞেস করে, いつ broader ‘কখন’ জিজ্ঞেস করে।"],
    visual:{tokens:[{text:"いつ",role:"কখন",accent:true},{text:"広島",role:"Destination"},{text:"へ",role:"দিকে"},{text:"行きますか",role:"Question"}],romaji:"Itsu Hiroshima e ikimasu ka.",bengali:"কখন হিরোশিমা যাবেন?"},
    examples:[{japanese:"いつ 日本へ 来ましたか。",romaji:"Itsu Nihon e kimashita ka.",bengali:"কখন জাপানে এসেছেন?"},{japanese:"3月25日に 来ました。",romaji:"San-gatsu nijuu-go-nichi ni kimashita.",bengali:"২৫ মার্চ এসেছি।"},{japanese:"来週 広島へ 行きます。",romaji:"Raishuu Hiroshima e ikimasu.",bengali:"আগামী সপ্তাহে হিরোশিমা যাব।"}],
  },
  {
    title:"নতুন তথ্য জোর দিয়ে বলা—よ",structure:"Sentence + よ。",
    explanation:"Sentence-এর শেষে よ বসিয়ে বক্তা এমন তথ্য জোর দিয়ে জানান যা শ্রোতা হয়তো জানে না, অথবা নিজের judgement দৃঢ়ভাবে প্রকাশ করেন। বাংলায় ‘জানেন’, ‘কিন্তু’ বা emphasis-এর স্বরে প্রকাশ পেতে পারে।",
    notes:["よ statement-কে informative/assertive করে; এটি question particle নয়।","Tone খুব শক্ত হলে commanding শোনাতে পারে, তাই beginner conversation-এ নরম intonation রাখুন।","ね shared agreement চায়; よ নতুন তথ্য শ্রোতার দিকে দেয়।"],
    visual:{tokens:[{text:"この電車は",role:"Topic"},{text:"京都へ 行きません",role:"নতুন তথ্য"},{text:"よ",role:"জোর/সতর্কতা",accent:true}],romaji:"Kono densha wa Kyouto e ikimasen yo.",bengali:"এই train কিয়োটো যায় না, জানেন।"},
    examples:[{japanese:"この電車は 新大阪へ 行きますよ。",romaji:"Kono densha wa Shin-Oosaka e ikimasu yo.",bengali:"এই train শিন-ওসাকা যায়, জানেন।"},{japanese:"次の 急行は 8時ですよ。",romaji:"Tsugi no kyuukou wa hachi-ji desu yo.",bengali:"পরের rapid train ৮টায় কিন্তু।"}],
  },
  {
    title:"তথ্য মেনে নেওয়া—そうですね",structure:"そうですね。",
    explanation:"そうですね দিয়ে বক্তা আগের তথ্যের সঙ্গে সম্মতি, সহানুভূতি বা acknowledgement দেখান। নতুন তথ্য শুনে ‘হ্যাঁ, তাই তো/ঠিক বলেছেন’ বলার স্বাভাবিক response এটি। そうですか শুধু ‘ও, তাই নাকি’ বলে তথ্য গ্রহণ করে; そうですね বেশি agreement প্রকাশ করে।",
    notes:["ね শ্রোতা ও বক্তার shared understanding তৈরি করে।","Decision নেওয়ার আগে ভাবতে সময় নিতেও そうですね… বলা যায়।","そうですね এবং そうですよ-এর nuance আলাদা—প্রথমটি agree করে, দ্বিতীয়টি জোর দিয়ে জানায়।"],
    visual:{tokens:[{text:"あしたは",role:"আগের topic"},{text:"日曜日",role:"তথ্য"},{text:"ですね",role:"সম্মতি",accent:true}],romaji:"Ashita wa nichiyoubi desu ne. — Sou desu ne.",bengali:"আগামীকাল রবিবার, তাই না? — হ্যাঁ, তাই।"},
    examples:[{japanese:"あしたは 日曜日ですね。— そうですね。",romaji:"Ashita wa nichiyoubi desu ne. — Sou desu ne.",bengali:"আগামীকাল রবিবার, তাই না? — হ্যাঁ, তাই।"},{japanese:"来週 京都へ 行きましょう。— そうですね。",romaji:"Raishuu Kyouto e ikimashou. — Sou desu ne.",bengali:"আগামী সপ্তাহে কিয়োটো যাই। — হ্যাঁ, ভালো হবে।"}],
  },
];

const unit6GrammarDetails: GrammarDetail[] = [
  {
    title:"কাজের সরাসরি object—を",structure:"N（object）を V（transitive）ます。",
    explanation:"কোনো action সরাসরি যে জিনিসটির ওপর হচ্ছে, সেই direct object-এর পরে を বসে। Particleটি লেখা を হলেও আধুনিক Japanese-এ উচ্চারণ হয় ‘o’। 食べます, 飲みます, 見ます, 読みます, 書きます-এর মতো transitive verb-এর আগে object + を ব্যবহার করুন।",
    notes:["を action-এর target চিহ্নিত করে; topic は বা subject が-এর কাজ করে না।","Japanese word order সাধারণত object + を + verb; verb বাক্যের শেষে থাকে।","を-কে romaji-তে সাধারণত o লেখা হয়, wo নয়।"],
    visual:{tokens:[{text:"ジュース",role:"Direct object"},{text:"を",role:"Object marker",accent:true},{text:"飲みます",role:"Action"}],romaji:"Juusu o nomimasu.",bengali:"জুস পান করি।"},
    examples:[{japanese:"ジュースを 飲みます。",romaji:"Juusu o nomimasu.",bengali:"জুস পান করি।"},{japanese:"新聞を 読みます。",romaji:"Shinbun o yomimasu.",bengali:"সংবাদপত্র পড়ি।"},{japanese:"写真を 撮ります。",romaji:"Shashin o torimasu.",bengali:"ছবি তুলি।"}],
  },
  {
    title:"Activity noun-এর সঙ্গে します",structure:"N（activity／event）を します。",
    explanation:"Sports, game, gathering, event, homework বা work-এর মতো activity noun-এর পরে を します বসিয়ে ‘সেই কাজটি করি’ বলা হয়। কথাবার্তায় কিছু পরিচিত activity সরাসরি noun + します-ও হতে পারে, কিন্তু এই Unit-এ object pattern পরিষ্কার করতে を সহ form শিখুন।",
    notes:["Sports/game: サッカーを します, テニスを します।","Event: パーティーを します, 会議を します।","Task: 宿題を します, 仕事を します।"],
    visual:{tokens:[{text:"サッカー",role:"Sport/activity"},{text:"を",role:"Object marker",accent:true},{text:"します",role:"করি",accent:true}],romaji:"Sakkaa o shimasu.",bengali:"ফুটবল খেলি।"},
    examples:[{japanese:"日曜日に サッカーを します。",romaji:"Nichiyoubi ni sakkaa o shimasu.",bengali:"রবিবার ফুটবল খেলি।"},{japanese:"うちで パーティーを します。",romaji:"Uchi de paatii o shimasu.",bengali:"বাড়িতে পার্টি করি।"},{japanese:"毎晩 宿題を します。",romaji:"Maiban shukudai o shimasu.",bengali:"প্রতি রাতে বাড়ির কাজ করি।"}],
  },
  {
    title:"কী করেন—action জানতে চাওয়া",structure:"何を しますか。",
    explanation:"কারও action বা plan জানতে object-এর জায়গায় 何を বসিয়ে প্রশ্ন করা হয়। এখানে 何-এর reading なに: なにを しますか। উত্তরে সেই জায়গায় নির্দিষ্ট object/activity বসিয়ে একই sentence structure রাখা যায়।",
    notes:["何を-এর উচ্চারণ なにを (nani o)।","Question-এর শেষে か এবং স্বাভাবিক rising intonation থাকে।","সময় যোগ করা যায়: きのう 何を しましたか。"],
    visual:{tokens:[{text:"きのう",role:"সময়"},{text:"何",role:"কী",accent:true},{text:"を",role:"Object marker"},{text:"しましたか",role:"Past question",accent:true}],romaji:"Kinou nani o shimashita ka.",bengali:"গতকাল কী করেছিলেন?"},
    examples:[{japanese:"月曜日 何を しますか。",romaji:"Getsuyoubi nani o shimasu ka.",bengali:"সোমবার কী করবেন?"},{japanese:"京都へ 行きます。",romaji:"Kyouto e ikimasu.",bengali:"কিয়োটো যাব।"},{japanese:"きのう 何を しましたか。",romaji:"Kinou nani o shimashita ka.",bengali:"গতকাল কী করেছিলেন?"}],
  },
  {
    title:"何-এর দুই reading—なん ও なに",structure:"なん + です／counter　｜　なに + particle／verb",
    explanation:"Kanji 何 context অনুযায়ী なん বা なに পড়া হয়। です-এর আগে এবং time/number counter-এর আগে সাধারণত なん: 何ですか, 何時, 何分। を-এর আগে এবং ‘কী করব/খাব/দেখব’ ধরনের action question-এ সাধারণত なに: 何を しますか।",
    notes:["何ですか = なんですか; 何の本 = なんの ほん।","何を／何が／何か সাধারণত なにを／なにが／なにか।","何で context অনুযায়ী なんで (‘কী দিয়ে/কেন’) পড়া হয়—অর্থ context থেকে বোঝুন।"],
    visual:{tokens:[{text:"何ですか",role:"nan desu ka",accent:true},{text:"／",role:"Reading বদল"},{text:"何を しますか",role:"nani o shimasu ka",accent:true}],romaji:"Nan desu ka? / Nani o shimasu ka?",bengali:"এটি কী? / কী করবেন?"},
    examples:[{japanese:"それは 何ですか。",romaji:"Sore wa nan desu ka.",bengali:"সেটি কী?"},{japanese:"何の 本ですか。",romaji:"Nan no hon desu ka.",bengali:"কিসের/কোন বিষয়ের বই?"},{japanese:"何を 買いますか。",romaji:"Nani o kaimasu ka.",bengali:"কী কিনবেন?"}],
  },
  {
    title:"Action কোথায় হয়—place で",structure:"N（place）で Vます。",
    explanation:"কোনো action যে স্থানে ঘটে সেই place-এর পরে で বসে। 駅で 新聞を 買います মানে station-এ সংবাদপত্র কেনার action হচ্ছে। Unit 03-এর location です বা existence-এর に-এর সঙ্গে এটি গুলিয়ে ফেলবেন না।",
    notes:["Action location: レストランで 食べます।","Destination: 学校へ 行きます—movement destination-এ へ; স্কুলে পড়ার action হলে 学校で 勉強します।","Sentence map: Place で + Object を + Verb।"],
    visual:{tokens:[{text:"駅",role:"Action place"},{text:"で",role:"ঘটনার স্থান",accent:true},{text:"新聞",role:"Object"},{text:"を 買います",role:"Action"}],romaji:"Eki de shinbun o kaimasu.",bengali:"স্টেশনে সংবাদপত্র কিনি।"},
    examples:[{japanese:"駅で 新聞を 買います。",romaji:"Eki de shinbun o kaimasu.",bengali:"স্টেশনে সংবাদপত্র কিনি।"},{japanese:"レストランで 昼ごはんを 食べます。",romaji:"Resutoran de hirugohan o tabemasu.",bengali:"রেস্তোরাঁয় দুপুরের খাবার খাই।"},{japanese:"学校で 日本語を 勉強します。",romaji:"Gakkou de Nihongo o benkyou shimasu.",bengali:"স্কুলে জাপানি পড়ি।"}],
  },
  {
    title:"নরম ও ভদ্র invitation",structure:"いっしょに Vませんか。",
    explanation:"কাউকে নিজের সঙ্গে কোনো কাজ করার আমন্ত্রণ দিতে verb-এর polite negative form Vません-এর পরে か বসে। Literal negative question মনে হলেও Japanese-এ এটি চাপ না দিয়ে ‘করবেন?’ বলার স্বাভাবিক invitation। いっしょに যোগ করলে ‘একসঙ্গে’ অর্থ স্পষ্ট হয়।",
    notes:["飲みます → 飲みませんか; 見ます → 見ませんか।","Accept: ええ、いいですね／はい、しましょう। Soft decline: すみません、ちょっと…。","সরাসরি いいえ বলার চেয়ে ちょっと… বেশি নরম ও স্বাভাবিক।"],
    visual:{tokens:[{text:"いっしょに",role:"একসঙ্গে"},{text:"京都へ",role:"Destination"},{text:"行きませんか",role:"Invitation",accent:true}],romaji:"Issho ni Kyouto e ikimasen ka.",bengali:"একসঙ্গে কিয়োটো যাবেন?"},
    examples:[{japanese:"いっしょに 京都へ 行きませんか。",romaji:"Issho ni Kyouto e ikimasen ka.",bengali:"একসঙ্গে কিয়োটো যাবেন?"},{japanese:"いっしょに 映画を 見ませんか。",romaji:"Issho ni eiga o mimasen ka.",bengali:"একসঙ্গে সিনেমা দেখবেন?"},{japanese:"すみません、今日は ちょっと…。",romaji:"Sumimasen, kyou wa chotto...",bengali:"দুঃখিত, আজ একটু অসুবিধা…।"}],
  },
  {
    title:"চলুন করি—positive suggestion",structure:"Vましょう。",
    explanation:"বক্তা ও শ্রোতা মিলে কোনো কাজ করার positive proposal দিতে verb-এর ます বাদ দিয়ে ましょう বসে। Invitation গ্রহণ করেও এটি বলা যায়: ええ、食べましょう—‘হ্যাঁ, চলুন খাই।’ ませんか-এর চেয়ে ましょう একটু বেশি সরাসরি।",
    notes:["食べます → 食べましょう; 行きます → 行きましょう।","নিজের একার future plan বলতে ましょう নয়; তখন Vます ব্যবহার করুন।","Question করলে Vましょうか সাধারণত offer/proposal হয়; সেটি পরের স্তরে বিস্তারিত আসবে।"],
    visual:{tokens:[{text:"ちょっと",role:"অল্প বিরতি"},{text:"休み",role:"Verb stem"},{text:"ましょう",role:"চলুন",accent:true}],romaji:"Chotto yasumimashou.",bengali:"চলুন একটু বিশ্রাম নিই।"},
    examples:[{japanese:"ちょっと 休みましょう。",romaji:"Chotto yasumimashou.",bengali:"চলুন একটু বিশ্রাম নিই।"},{japanese:"いっしょに 昼ごはんを 食べましょう。",romaji:"Issho ni hirugohan o tabemashou.",bengali:"চলুন একসঙ্গে দুপুরের খাবার খাই।"},{japanese:"京都へ 行きましょう。",romaji:"Kyouto e ikimashou.",bengali:"চলুন কিয়োটো যাই।"}],
  },
  {
    title:"শোনা তথ্য echo করে নিশ্চিত হওয়া—か",structure:"Repeated information + か。",
    explanation:"শ্রোতা নতুন বা অপ্রত্যাশিত তথ্য শুনে সেটির গুরুত্বপূর্ণ অংশ পুনরাবৃত্তি করে শেষে か বসাতে পারেন। এটি পূর্ণ information question নয়; বরং ‘ও, … নাকি?’ বলে তথ্য গ্রহণ, নিশ্চিত হওয়া বা হালকা বিস্ময় দেখায়। Intonation সাধারণ question-এর তুলনায় নরম হতে পারে।",
    notes:["そうですか একইভাবে ‘ও, তাই নাকি’ বলে নতুন তথ্য গ্রহণ করে।","Echo করা অংশ context অনুযায়ী ছোট হতে পারে: 京都ですか。","এটি invitation-এর ませんか বা সাধারণ yes/no question-এর か থেকে function-এ আলাদা।"],
    visual:{tokens:[{text:"日曜日 京都へ 行きました",role:"নতুন তথ্য"},{text:"京都です",role:"শ্রোতার echo"},{text:"か",role:"গ্রহণ/নিশ্চিতকরণ",accent:true}],romaji:"Nichiyoubi Kyouto e ikimashita. — Kyouto desu ka.",bengali:"রবিবার কিয়োটো গিয়েছিলাম। — ও, কিয়োটো নাকি?"},
    examples:[{japanese:"日曜日 京都へ 行きました。— 京都ですか。いいですね。",romaji:"Nichiyoubi Kyouto e ikimashita. — Kyouto desu ka. Ii desu ne.",bengali:"রবিবার কিয়োটো গিয়েছিলাম। — ও, কিয়োটো নাকি? বেশ ভালো।"},{japanese:"駅で 田中さんに 会いました。— 田中さんですか。",romaji:"Eki de Tanaka-san ni aimashita. — Tanaka-san desu ka.",bengali:"স্টেশনে তানাকা-সানের সঙ্গে দেখা হয়েছে। — তানাকা-সান নাকি?"}],
  },
];

const unit7GrammarDetails: GrammarDetail[] = [
  {
    title:"কোন উপায় বা যন্ত্রে কাজ হচ্ছে—で",structure:"N（tool／means）で Vます。",
    explanation:"কোনো কাজ করতে যে যন্ত্র, উপকরণ বা মাধ্যম ব্যবহার করা হয়, তার পরে で বসে। 箸で 食べます-এ chopsticks হলো খাওয়ার tool; 日本語で レポートを 書きます-এ Japanese হলো কাজের ভাষা বা মাধ্যম। Place で-ও একই particle, কিন্তু সেখানে অর্থ ‘কোথায় action হচ্ছে’।",
    notes:["Tool/means + で, direct object + を, তারপর verb।","交通手段-ও means: バスで 行きます।","হাত দিয়ে করলে 手で; language ব্যবহার করলে 日本語で／英語で।"],
    visual:{tokens:[{text:"はさみ",role:"Tool"},{text:"で",role:"কী দিয়ে",accent:true},{text:"紙",role:"Object"},{text:"を 切ります",role:"Action"}],romaji:"Hasami de kami o kirimasu.",bengali:"কাঁচি দিয়ে কাগজ কাটি।"},
    examples:[{japanese:"箸で ごはんを 食べます。",romaji:"Hashi de gohan o tabemasu.",bengali:"চপস্টিক দিয়ে ভাত খাই।"},{japanese:"パソコンで メールを 送ります。",romaji:"Pasokon de meeru o okurimasu.",bengali:"কম্পিউটার দিয়ে ই-মেইল পাঠাই।"},{japanese:"英語で レポートを 書きます。",romaji:"Eigo de repooto o kakimasu.",bengali:"ইংরেজিতে রিপোর্ট লিখি।"}],
  },
  {
    title:"অন্য ভাষায় কী বলে—～語で 何ですか",structure:"「Word／sentence」は ～語で 何ですか。",
    explanation:"একটি শব্দ বা বাক্য অন্য ভাষায় কী বলা হয় জানতে উদ্ধৃত অংশকে は দিয়ে topic করুন, target language-এর পরে で বসান, শেষে 何ですか বলুন। এখানে で ভাষাকে expression-এর মাধ্যম হিসেবে দেখায়। উত্তরে ～です বা target word সরাসরি বলা যায়।",
    notes:["何ですか-এর 何 এখানে なん পড়া হয়।","Language: 日本語, 英語, 中国語 ইত্যাদি।","Question pattern: X は + language で + 何ですか。"],
    visual:{tokens:[{text:"『ありがとう』",role:"জানা expression"},{text:"は",role:"Topic"},{text:"英語で",role:"Target language",accent:true},{text:"何ですか",role:"কী বলে?",accent:true}],romaji:"Arigatou wa eigo de nan desu ka.",bengali:"‘আরিগাতো’ ইংরেজিতে কী?"},
    examples:[{japanese:"『ありがとう』は 英語で 何ですか。",romaji:"Arigatou wa eigo de nan desu ka.",bengali:"‘আরিগাতো’ ইংরেজিতে কী?"},{japanese:"『Thank you』は 日本語で 何ですか。",romaji:"Thank you wa nihongo de nan desu ka.",bengali:"‘Thank you’ জাপানিতে কী?"},{japanese:"『はさみ』は 英語で scissors です。",romaji:"Hasami wa eigo de scissors desu.",bengali:"‘হাসামি’ ইংরেজিতে scissors।"}],
  },
  {
    title:"কাউকে কিছু দেওয়া—あげます",structure:"A（giver）は B（receiver）に Nを あげます。",
    explanation:"বক্তা বা অন্য কেউ কাউকে কোনো বস্তু দিলে giver-কে は, receiver-কে に এবং দেওয়া জিনিসকে を দিয়ে চিহ্নিত করা হয়। বাক্যের viewpoint giver-এর দিকে: কে দিল → কাকে দিল → কী দিল। নিজের কাজের জন্য わたしは context পরিষ্কার হলে বাদ দেওয়া যায়।",
    notes:["Recipient সাধারণত person + に।","あげます দিয়ে সাধারণত নিজের থেকে উচ্চ মর্যাদার ব্যক্তিকে উপহার দেওয়ার কথা খুব সরাসরি বলা এড়ানো হয়; context ও politeness খেয়াল করুন।","Subject বদলালে giver-ও বদলে যায়—arrow সবসময় A → B।"],
    visual:{tokens:[{text:"わたし",role:"Giver A"},{text:"は",role:"Topic"},{text:"妹",role:"Receiver B"},{text:"に",role:"প্রাপক",accent:true},{text:"花を あげます",role:"Gift + give",accent:true}],romaji:"Watashi wa imouto ni hana o agemasu.",bengali:"আমি ছোট বোনকে ফুল দিই।"},
    examples:[{japanese:"わたしは 妹に 花を あげます。",romaji:"Watashi wa imouto ni hana o agemasu.",bengali:"আমি ছোট বোনকে ফুল দিই।"},{japanese:"木村さんは リーさんに プレゼントを あげました。",romaji:"Kimura-san wa Rii-san ni purezento o agemashita.",bengali:"কিমুরা-সান লি-সানকে উপহার দিয়েছেন।"},{japanese:"子どもに お菓子を あげます。",romaji:"Kodomo ni okashi o agemasu.",bengali:"শিশুকে মিষ্টি দিই।"}],
  },
  {
    title:"কারও কাছ থেকে কিছু পাওয়া—もらいます",structure:"A（receiver）は B（source）に／から Nを もらいます。",
    explanation:"কেউ কারও কাছ থেকে কিছু পেলে receiver-কে は, source person-কে に বা から এবং পাওয়া জিনিসকে を দিয়ে চিহ্নিত করা হয়। Viewpoint এবার receiver-এর দিকে: কে পেল ← কার কাছ থেকে ← কী পেল। ব্যক্তি হলে に/から দুটোই চলে; company, school বা organisation-এর মতো উৎসে から বেশি স্বাভাবিক।",
    notes:["あげます-এর arrow A → B; もらいます-এর arrow B → A।","Person source: 友達に／から; organisation source: 会社から।","নিজের teacher বা ঊর্ধ্বতন ব্যক্তির কাছ থেকে পাওয়া বোঝাতে に／から ব্যবহার করা যায়।"],
    visual:{tokens:[{text:"わたし",role:"Receiver A"},{text:"は",role:"Topic"},{text:"友達",role:"Source B"},{text:"に／から",role:"কার কাছ থেকে",accent:true},{text:"花を もらいました",role:"Received item",accent:true}],romaji:"Watashi wa tomodachi ni hana o moraimashita.",bengali:"আমি বন্ধুর কাছ থেকে ফুল পেয়েছি।"},
    examples:[{japanese:"わたしは 友達に 花を もらいました。",romaji:"Watashi wa tomodachi ni hana o moraimashita.",bengali:"আমি বন্ধুর কাছ থেকে ফুল পেয়েছি।"},{japanese:"カリナさんから CDを 借りました。",romaji:"Karina-san kara shiidii o karimashita.",bengali:"কারিনা-সানের কাছ থেকে CD ধার নিয়েছি।"},{japanese:"銀行から お金を 借りました。",romaji:"Ginkou kara okane o karimashita.",bengali:"ব্যাংক থেকে টাকা ধার নিয়েছি।"}],
  },
  {
    title:"ইতোমধ্যে হয়েছে কি—もう／まだ",structure:"もう Vましたか。— はい、Vました。／いいえ、まだです。",
    explanation:"もう + past verb দিয়ে কোনো কাজ ইতোমধ্যে সম্পন্ন হয়েছে বোঝায়। もう Vましたか প্রশ্নে কাজ শেষ হয়েছে কি না জানতে চাওয়া হয়। না হলে সংক্ষিপ্ত ও স্বাভাবিক উত্তর いいえ、まだです—‘না, এখনো নয়’; affirmative present いいえ、まだ Vません-ও context অনুযায়ী বলা যায়।",
    notes:["もう সাধারণত completed past Vました-এর সঙ্গে আসে।","Positive: はい、もう Vました বা শুধু はい、Vました।","まだです-এর পরে একই verb পুনরাবৃত্তি না করলেও context থেকে বোঝা যায়।"],
    visual:{tokens:[{text:"もう",role:"ইতোমধ্যে",accent:true},{text:"宿題を しましたか",role:"Completed question"},{text:"いいえ",role:"না"},{text:"まだです",role:"এখনো নয়",accent:true}],romaji:"Mou shukudai o shimashita ka. — Iie, mada desu.",bengali:"বাড়ির কাজ ইতোমধ্যে করেছেন? — না, এখনো নয়।"},
    examples:[{japanese:"もう 荷物を 送りましたか。— はい、送りました。",romaji:"Mou nimotsu o okurimashita ka. — Hai, okurimashita.",bengali:"পার্সেল পাঠিয়েছেন? — হ্যাঁ, পাঠিয়েছি।"},{japanese:"もう 昼ごはんを 食べましたか。— いいえ、まだです。",romaji:"Mou hirugohan o tabemashita ka. — Iie, mada desu.",bengali:"দুপুরের খাবার খেয়েছেন? — না, এখনো নয়।"},{japanese:"もう 年賀状を 書きました。",romaji:"Mou nengajou o kakimashita.",bengali:"নববর্ষের কার্ড ইতোমধ্যে লিখেছি।"}],
  },
  {
    title:"কথ্য ভাষায় particle বাদ দেওয়া",structure:"[Topic／object]（は／を／に）…？",
    explanation:"সম্পর্ক ও context একেবারে পরিষ্কার হলে informal conversation-এ は, を, に-এর মতো particle অনেক সময় বাদ যায়। その スプーンは すてきですね → その スプーン、すてきですね। কিন্তু beginner writing, formal speech বা অর্থ অস্পষ্ট হওয়ার আশঙ্কায় particle রেখে বলাই নিরাপদ।",
    notes:["বাদ পড়লেও মনে মনে sentence map ঠিক রাখতে হবে।","です／ます বজায় থাকলে sentence polite হতে পারে, যদিও particle omitted।","で, から বা contrast-এর は বাদ দিলে অর্থ বদলে যেতে পারে—অযথা বাদ দেবেন না।"],
    visual:{tokens:[{text:"その スプーン",role:"Clear topic"},{text:"（は）",role:"কথায় বাদ",accent:true},{text:"すてきですね",role:"Comment"}],romaji:"Sono supuun, suteki desu ne.",bengali:"ওই চামচটি চমৎকার, তাই না!"},
    examples:[{japanese:"その スプーン、すてきですね。",romaji:"Sono supuun, suteki desu ne.",bengali:"ওই চামচটি চমৎকার, তাই না!"},{japanese:"もう 荷物、送りましたか。",romaji:"Mou nimotsu, okurimashita ka.",bengali:"পার্সেল ইতোমধ্যে পাঠিয়েছেন?"},{japanese:"コーヒー、いかがですか。",romaji:"Koohii, ikaga desu ka.",bengali:"কফি কেমন হবে?"}],
  },
];

const unit8GrammarDetails: GrammarDetail[] = [
  {
    title:"Adjective-এর দুই family",structure:"い-adjective ／ な-adjective",
    explanation:"Japanese adjective দুই family: い-adjective সাধারণত い-তে শেষ হয়; な-adjective noun-এর আগে な নেয়। きれい ও ゆうめい দেখতে い-তে শেষ হলেও な-adjective। Vocabulary শেখার সময় প্রতিটি শব্দের family-ও একসঙ্গে মনে রাখুন।",
    notes:["い-family: 大きい・新しい・高い।","な-family: 静か［な］・便利［な］・有名［な］।","きれい［な］ ব্যতিক্রম—きれいい নয়。"],
    visual:{tokens:[{text:"大きい",role:"い-adjective",accent:true},{text:"山",role:"Noun"},{text:"静かな",role:"な-adjective + な",accent:true},{text:"町",role:"Noun"}],romaji:"Ookii yama / shizuka na machi",bengali:"বড় পাহাড় / শান্ত শহর"},
    examples:[{japanese:"富士山は 大きい 山です。",romaji:"Fujisan wa ookii yama desu.",bengali:"ফুজি একটি বড় পাহাড়।"},{japanese:"奈良は 静かな 町です。",romaji:"Nara wa shizuka na machi desu.",bengali:"নারা একটি শান্ত শহর।"},{japanese:"これは きれいな 花です。",romaji:"Kore wa kirei na hana desu.",bengali:"এটি সুন্দর ফুল।"}],
  },
  {
    title:"Adjective দিয়ে পরিচয়/বর্ণনা",structure:"N は な-adj です。／ N は い-adj です。",
    explanation:"Adjective predicate হিসেবে বাক্যের শেষে বসে noun-এর অবস্থা বা গুণ বলে। な-adjective predicate হলে な থাকে না: 町は 静かです। い-adjective নিজের い রেখেই です নেয়: 山は 高いです。",
    notes:["Predicate な-adjective-এর পরে な নয়।","です tense/politeness দেখায়; adjective-এর অর্থ বদলায় না।","Topic は-এর পরে description বসে।"],
    visual:{tokens:[{text:"奈良",role:"Topic"},{text:"は",role:"Topic marker"},{text:"静か",role:"Description",accent:true},{text:"です",role:"Polite ending"}],romaji:"Nara wa shizuka desu.",bengali:"নারা শান্ত।"},
    examples:[{japanese:"ワット先生は 親切です。",romaji:"Watto-sensei wa shinsetsu desu.",bengali:"ওয়াত্তো-সেনসেই সদয়।"},{japanese:"富士山は 高いです。",romaji:"Fujisan wa takai desu.",bengali:"ফুজি পর্বত উঁচু।"},{japanese:"日本の 食べ物は おいしいです。",romaji:"Nihon no tabemono wa oishii desu.",bengali:"জাপানি খাবার সুস্বাদু।"}],
  },
  {
    title:"Adjective negative",structure:"な-adj じゃありません ／ い-adj くないです",
    explanation:"な-adjective negative করতে じゃありません／ではありません যোগ হয়। い-adjective-এর শেষ い বাদ দিয়ে くないです বসে। いい-এর negative অনিয়মিত: よくないです।",
    notes:["静か → 静かじゃありません。","高い → 高くないです。","いい → よくないです; いくないです ভুল।"],
    visual:{tokens:[{text:"この 町は",role:"Topic"},{text:"静か",role:"な-adj"},{text:"じゃありません",role:"Negative",accent:true}],romaji:"Kono machi wa shizuka ja arimasen.",bengali:"এই শহরটি শান্ত নয়।"},
    examples:[{japanese:"桜大学は 有名じゃありません。",romaji:"Sakura daigaku wa yuumei ja arimasen.",bengali:"সাকুরা বিশ্ববিদ্যালয় বিখ্যাত নয়।"},{japanese:"この 本は おもしろくないです。",romaji:"Kono hon wa omoshirokunai desu.",bengali:"এই বইটি আকর্ষণীয় নয়।"},{japanese:"この レストランは よくないです。",romaji:"Kono resutoran wa yokunai desu.",bengali:"এই রেস্তোরাঁটি ভালো নয়।"}],
  },
  {
    title:"Contrast—কিন্তু",structure:"Sentence A が、Sentence B。",
    explanation:"একই subject সম্পর্কে বিপরীত বা contrast তথ্য জোড়া দিতে প্রথম clause-এর শেষে が বসে। বাংলায় ‘কিন্তু’। が-এর পরে নতুন sentence শুরু হলেও topic একই হলে পুনরাবৃত্তি না করাই স্বাভাবিক।",
    notes:["が এখানে subject marker নয়; conjunction।","Positive + が + negative/contrast খুব সাধারণ।","Comma pause দিয়ে বলুন।"],
    visual:{tokens:[{text:"日本の 食べ物は おいしいです",role:"Positive"},{text:"が",role:"কিন্তু",accent:true},{text:"高いです",role:"Contrast"}],romaji:"Nihon no tabemono wa oishii desu ga, takai desu.",bengali:"জাপানি খাবার সুস্বাদু, কিন্তু দামি।"},
    examples:[{japanese:"日本の 生活は 忙しいですが、楽しいです。",romaji:"Nihon no seikatsu wa isogashii desu ga, tanoshii desu.",bengali:"জাপানের জীবন ব্যস্ত, কিন্তু আনন্দদায়ক।"},{japanese:"この 寮は 古いですが、きれいです。",romaji:"Kono ryou wa furui desu ga, kirei desu.",bengali:"এই dormitory পুরোনো, কিন্তু পরিষ্কার।"},{japanese:"富士山は 高いですが、すてきです。",romaji:"Fujisan wa takai desu ga, suteki desu.",bengali:"ফুজি উঁচু, কিন্তু দারুণ।"}],
  },
  {
    title:"Degree—খুব / খুব একটা নয়",structure:"とても + adjective ／ あまり + negative",
    explanation:"とても adjective-এর মাত্রা বাড়ায়—‘খুব’। あまり ‘খুব একটা’ অর্থে সবসময় negative predicate-এর সঙ্গে আসে। Positive adjective-এর আগে あまり বসাবেন না।",
    notes:["とても 高いです = খুব উঁচু/দামি।","あまり 高くないです = খুব একটা দামি নয়।","あまり 静かじゃありません = খুব একটা শান্ত নয়।"],
    visual:{tokens:[{text:"富士山は",role:"Topic"},{text:"とても",role:"Degree",accent:true},{text:"高いです",role:"Adjective"}],romaji:"Fujisan wa totemo takai desu.",bengali:"ফুজি পর্বত খুব উঁচু।"},
    examples:[{japanese:"上海は とても にぎやかです。",romaji:"Shanhai wa totemo nigiyaka desu.",bengali:"সাংহাই খুব প্রাণবন্ত।"},{japanese:"ここは あまり 静かじゃありません。",romaji:"Koko wa amari shizuka ja arimasen.",bengali:"এখানে খুব একটা শান্ত নয়।"},{japanese:"この 本は あまり 難しくないです。",romaji:"Kono hon wa amari muzukashikunai desu.",bengali:"এই বইটি খুব একটা কঠিন নয়।"}],
  },
  {
    title:"Impression জানতে—どう",structure:"N は どうですか。",
    explanation:"কোনো জায়গা, বস্তু, কাজ, জীবন বা অভিজ্ঞতা কেমন—সামগ্রিক impression জানতে どうですか ব্যবহার হয়। উত্তরে adjective predicate বা একটি ছোট description দিন।",
    notes:["どう = কেমন/কীভাবে।","Question-এর noun-ই উত্তরেও topic থাকে; পুনরাবৃত্তি না করলেও চলে।","Opinion-এর উত্তর একাধিক adjective দিয়ে হতে পারে।"],
    visual:{tokens:[{text:"日本の 生活",role:"যে বিষয়ে মত"},{text:"は",role:"Topic"},{text:"どうですか",role:"কেমন?",accent:true}],romaji:"Nihon no seikatsu wa dou desu ka.",bengali:"জাপানের জীবন কেমন?"},
    examples:[{japanese:"お仕事は どうですか。— 忙しいですが、楽しいです。",romaji:"Oshigoto wa dou desu ka. — Isogashii desu ga, tanoshii desu.",bengali:"কাজ কেমন? — ব্যস্ত, তবে আনন্দদায়ক।"},{japanese:"京都は どうですか。— とても きれいです。",romaji:"Kyouto wa dou desu ka. — Totemo kirei desu.",bengali:"কিয়োটো কেমন? — খুব সুন্দর।"},{japanese:"日本の 食べ物は どうですか。",romaji:"Nihon no tabemono wa dou desu ka.",bengali:"জাপানি খাবার কেমন?"}],
  },
  {
    title:"কেমন ধরনের noun—どんな",structure:"N₁ は どんな N₂ ですか。",
    explanation:"একটি ব্যক্তি, জায়গা বা বস্তু কেমন ধরনের category/গুণের—তা জানতে どんな সরাসরি noun-এর আগে বসে। どう আলাদা predicate question; どんな-এর পরে অবশ্যই noun প্রয়োজন।",
    notes:["どんな + noun; শুধু どんなですか নয়।","উত্তর: adjective + noun です।","どれ = কয়েকটির মধ্যে কোনটি; どんな = কেমন ধরনের।"],
    visual:{tokens:[{text:"奈良",role:"Topic"},{text:"は",role:"Topic marker"},{text:"どんな",role:"কেমন ধরনের",accent:true},{text:"町ですか",role:"Noun + question"}],romaji:"Nara wa donna machi desu ka.",bengali:"নারা কেমন শহর?"},
    examples:[{japanese:"奈良は どんな 町ですか。— 古い 町です。",romaji:"Nara wa donna machi desu ka. — Furui machi desu.",bengali:"নারা কেমন শহর? — পুরোনো শহর।"},{japanese:"富士山は どんな 山ですか。— 高い 山です。",romaji:"Fujisan wa donna yama desu ka. — Takai yama desu.",bengali:"ফুজি কেমন পাহাড়? — উঁচু পাহাড়।"},{japanese:"ワット先生は どんな 先生ですか。— 親切な 先生です。",romaji:"Watto-sensei wa donna sensei desu ka. — Shinsetsu na sensei desu.",bengali:"ওয়াত্তো কেমন শিক্ষক? — সদয় শিক্ষক।"}],
  },
  {
    title:"ভাবার সময়—そうですね",structure:"Question。— そうですね…。",
    explanation:"উত্তর দেওয়ার আগে একটু ভাবার সময়, নরম agreement বা conversational pause হিসেবে そうですね বলা হয়। এখানে এটি সবসময় সরাসরি ‘ঠিক তাই’ নয়; tone ও pause অনুযায়ী ‘হুম, দেখি…’ অর্থও দেয়।",
    notes:["そうですね… বলার পরে মূল উত্তর দিন।","Long vowel: そう; ছোট そ নয়।","শুধু agreement নয়, thinking signal হিসেবেও শিখুন।"],
    visual:{tokens:[{text:"日本の 生活は どうですか",role:"Question"},{text:"そうですね…",role:"Thinking pause",accent:true},{text:"楽しいです",role:"Answer"}],romaji:"Sou desu ne... Tanoshii desu.",bengali:"হুম… আনন্দদায়ক।"},
    examples:[{japanese:"奈良は どうですか。— そうですね。静かです。",romaji:"Nara wa dou desu ka. — Sou desu ne. Shizuka desu.",bengali:"নারা কেমন? — হুম, শান্ত।"},{japanese:"お仕事は どうですか。— そうですね。忙しいです。",romaji:"Oshigoto wa dou desu ka. — Sou desu ne. Isogashii desu.",bengali:"কাজ কেমন? — হুম, ব্যস্ত।"},{japanese:"どれが いいですか。— そうですね。これが いいです。",romaji:"Dore ga ii desu ka. — Sou desu ne. Kore ga ii desu.",bengali:"কোনটি ভালো? — হুম, এটি ভালো।"}],
  },
];

export function getMinnaN5GrammarDetails(unitNumber: number) {
  if (unitNumber === 1) return unit1GrammarDetails;
  if (unitNumber === 2) return unit2GrammarDetails;
  if (unitNumber === 3) return unit3GrammarDetails;
  if (unitNumber === 4) return unit4GrammarDetails;
  if (unitNumber === 5) return unit5GrammarDetails;
  if (unitNumber === 6) return unit6GrammarDetails;
  if (unitNumber === 7) return unit7GrammarDetails;
  if (unitNumber === 8) return unit8GrammarDetails;
  return [];
}
