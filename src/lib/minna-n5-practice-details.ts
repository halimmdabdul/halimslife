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
  organization?: string;
  age?: number;
  imageIndex: number;
  accent: "teal" | "coral" | "gold" | "blue" | "plum";
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
  profileImage?: string;
  objectImage?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  dialogueTitle?: string;
  dialogueAlt?: string;
  dialogueCaption?: Array<{ name: string; text: string }>;
  modelLabel?: string;
  modelTitle?: string;
  challengeTitle?: string;
  challengeDescription?: string;
  objects?: Array<{ word: string; romaji: string; bengali: string; prompt: string; imageIndex: number }>;
  usefulWords: Array<{ japanese: string; romaji: string; bengali: string }>;
  answerPatterns: Array<{ japanese: string; romaji: string; bengali: string; positive: boolean }>;
  memoryPoints: Array<{ symbol: string; meaning: string }>;
  selfIntroduction: { japanese: string; romaji: string; bengali: string };
  grammarQuiz: Array<{ question: string; options: string[]; correctAnswer: string; explanation: string }>;
  dialogue: PracticeDialogueLine[];
  profiles: PracticeProfile[];
  modules: PracticeModule[];
};

const unitOnePractice: UnitPracticeDetails = {
  heroImage: "/images/projects/n5-practice/unit-01-introductions.png",
  heroAlt: "বিভিন্ন দেশের শিক্ষার্থী ও পেশাজীবীরা অফিসে জাপানিতে পরিচিত হচ্ছেন—রঙিন illustration",
  dialogueImage: "/images/projects/n5-practice/unit-01-conversation.png",
  profileImage: "/images/projects/n5-practice/unit-01-profile-sprites.png",
  usefulWords: [
    { japanese: "あの人", romaji: "ano hito", bengali: "ঐ ব্যক্তি" },
    { japanese: "あの方", romaji: "ano kata", bengali: "ঐ ব্যক্তি—ভদ্রভাবে" },
    { japanese: "だれ", romaji: "dare", bengali: "কে" },
    { japanese: "どなた", romaji: "donata", bengali: "কে—ভদ্রভাবে" },
    { japanese: "こちら", romaji: "kochira", bengali: "ইনি / এই দিক—ভদ্রভাবে" },
    { japanese: "方", romaji: "kata", bengali: "ব্যক্তি—সম্মানসূচক" },
  ],
  answerPatterns: [
    { japanese: "はい、～です。", romaji: "Hai, ~ desu.", bengali: "হ্যাঁ, ～।", positive: true },
    { japanese: "いいえ、～じゃありません。", romaji: "Iie, ~ ja arimasen.", bengali: "না, ～ নয়।", positive: false },
  ],
  memoryPoints: [
    { symbol: "は", meaning: "topic বা আলোচ্য বিষয়" },
    { symbol: "か", meaning: "question তৈরি করে" },
    { symbol: "も", meaning: "ও / এছাড়াও" },
    { symbol: "の", meaning: "সম্পর্ক, affiliation বা ～এর" },
    { symbol: "歳", meaning: "বয়স—কত বছর" },
  ],
  selfIntroduction: {
    japanese: "初めまして。わたしは ハリムです。バングラデシュから来ました。会社員です。どうぞよろしくお願いします。",
    romaji: "Hajimemashite. Watashi wa Harimu desu. Banguradeshu kara kimashita. Kaishain desu. Douzo yoroshiku onegaishimasu.",
    bengali: "প্রথম পরিচয়। আমি হালিম। বাংলাদেশ থেকে এসেছি। আমি কোম্পানির কর্মচারী। পরিচিত হয়ে ভালো লাগল।",
  },
  grammarQuiz: [
    { question: "‘আমি মাইক মিলার’—সঠিক sentence কোনটি?", options: ["わたしは マイク・ミラーです。", "わたしも マイク・ミラーか。", "わたしの マイク・ミラーです。", "わたしを マイク・ミラーです。"], correctAnswer: "わたしは マイク・ミラーです。", explanation: "পরিচয় দেওয়ার basic pattern হলো N₁ は N₂ です।" },
    { question: "‘সান্তোস শিক্ষার্থী নন’—সঠিক negative কোনটি?", options: ["サントスさんは 学生です。", "サントスさんは 学生じゃありません。", "サントスさんも 学生か。", "サントスさんの 学生です。"], correctAnswer: "サントスさんは 学生じゃありません。", explanation: "です-এর negative polite form হলো じゃありません।" },
    { question: "কোন sentence-টি question?", options: ["ミラーさんは 会社員です。", "ミラーさんは 会社員も。", "ミラーさんは 会社員ですか。", "ミラーさんの 会社員です。"], correctAnswer: "ミラーさんは 会社員ですか。", explanation: "Sentence-এর শেষে か যোগ করলে question হয়।" },
    { question: "‘সান্তোসও কোম্পানির কর্মচারী’—কোনটি ঠিক?", options: ["サントスさんはも 会社員です。", "サントスさんも 会社員です。", "サントスさんの 会社員です。", "サントスさんか 会社員です。"], correctAnswer: "サントスさんも 会社員です。", explanation: "একই তথ্য যোগ করতে は-এর জায়গায় も বসে; はも নয়।" },
    { question: "‘IMC-এর কর্মচারী’—কোন phrase-টি ঠিক?", options: ["IMCは 会社員", "IMCも 会社員", "IMCの 会社員", "IMCか 会社員"], correctAnswer: "IMCの 会社員", explanation: "দুই noun-এর সম্পর্ক বা affiliation দেখাতে の ব্যবহার হয়।" },
    { question: "‘তেরেজার বয়স ৯ বছর’—সঠিক sentence কোনটি?", options: ["テレーザちゃんは 9歳です。", "テレーザちゃんは 9人です。", "テレーザちゃんの 9です。", "テレーザちゃんは 9か。"], correctAnswer: "テレーザちゃんは 9歳です。", explanation: "বয়সের সংখ্যার পরে 歳（さい）ব্যবহার হয়।" },
    { question: "‘ঐ ভদ্রলোক কে?’—ভদ্রভাবে কোনটি বলবেন?", options: ["あの人は なんですか。", "あの方は どなたですか。", "あの方も だれです。", "あの人の どなたですか。"], correctAnswer: "あの方は どなたですか。", explanation: "方 এবং どなた—দুটিই respectful expression।" },
  ],
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
    { name: "ミラー", country: "アメリカ", role: "会社員", age: 28, imageIndex: 0, accent: "blue" },
    { name: "山田", country: "日本", role: "銀行員", age: 38, imageIndex: 1, accent: "teal" },
    { name: "ワット", country: "イギリス", role: "先生", age: 45, imageIndex: 2, accent: "gold" },
    { name: "タワポン", country: "タイ", role: "学生", age: 19, imageIndex: 3, accent: "coral" },
    { name: "シュミット", country: "ドイツ", role: "会社員", age: 52, imageIndex: 4, accent: "plum" },
    { name: "グプタ", country: "インド", role: "会社員", organization: "IMC", imageIndex: 5, accent: "coral" },
    { name: "リー", country: "韓国", role: "研究者", organization: "AKC", age: 35, imageIndex: 6, accent: "blue" },
    { name: "ワン", country: "中国", role: "医者", organization: "神戸病院", age: 29, imageIndex: 7, accent: "teal" },
    { name: "カリナ", country: "インドネシア", role: "学生", organization: "富士大学", age: 24, imageIndex: 8, accent: "gold" },
    { name: "サントス", country: "ブラジル", role: "会社員", organization: "ブラジルエアー", age: 39, imageIndex: 9, accent: "plum" },
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
        {
          prompt: "あの 方は（どなた？）＿＿＿＿。",
          hint: "ভদ্রভাবে পরিচয় জানতে · どなた",
          answer: "あの方は どなたですか。",
          romaji: "Ano kata wa donata desu ka.",
          bengali: "ঐ ভদ্রলোক/ভদ্রমহিলা কে?",
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
          prompt: "タワポンさんは 会社員ですか。",
          answer: "いいえ、会社員じゃありません。学生です。",
          romaji: "Iie, kaishain ja arimasen. Gakusei desu.",
          bengali: "না, তিনি কোম্পানির কর্মচারী নন। তিনি শিক্ষার্থী।",
        },
        {
          prompt: "シュミットさんは 何歳ですか。",
          answer: "52歳です。",
          romaji: "Gojuu-ni-sai desu.",
          bengali: "তাঁর বয়স ৫২ বছর।",
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
    {
      step: "05",
      title: "Person detective",
      instruction: "দ্বিতীয় সারির profile থেকে person, organisation ও profession মিলিয়ে উত্তর দিন।",
      questions: [
        {
          prompt: "あの方は どなたですか。（IMC）",
          answer: "グプタさんです。IMCの会社員です。",
          romaji: "Guputa-san desu. IMC no kaishain desu.",
          bengali: "তিনি গুপ্তা। IMC-এর কোম্পানি কর্মচারী।",
        },
        {
          prompt: "リーさんは 銀行員ですか。",
          answer: "いいえ、銀行員じゃありません。AKCの研究者です。",
          romaji: "Iie, ginkouin ja arimasen. AKC no kenkyuusha desu.",
          bengali: "না, তিনি ব্যাংককর্মী নন। AKC-এর গবেষক।",
        },
        {
          prompt: "ワンさんは 何歳ですか。",
          answer: "29歳です。神戸病院の医者です。",
          romaji: "Nijuu-kyuu-sai desu. Koube Byouin no isha desu.",
          bengali: "তাঁর বয়স ২৯ বছর। তিনি কোবে হাসপাতালের ডাক্তার।",
        },
        {
          prompt: "カリナさんも 会社員ですか。",
          answer: "いいえ、会社員じゃありません。富士大学の学生です。",
          romaji: "Iie, kaishain ja arimasen. Fuji Daigaku no gakusei desu.",
          bengali: "না, তিনি কর্মচারী নন। ফুজি বিশ্ববিদ্যালয়ের শিক্ষার্থী।",
        },
        {
          prompt: "サントスさんは ブラジル人ですか。",
          answer: "はい、ブラジル人です。ブラジルエアーの会社員です。",
          romaji: "Hai, Burajiru-jin desu. Burajiru Eaa no kaishain desu.",
          bengali: "হ্যাঁ, তিনি ব্রাজিলিয়ান এবং Brasil Air-এর কর্মচারী।",
        },
      ],
    },
    {
      step: "06",
      title: "Conversation completion",
      instruction: "Situation দেখে blank পূরণ করুন এবং পুরো dialogue জোরে বলুন।",
      questions: [
        {
          prompt: "A: 初めまして。＿＿です。 B: ＿＿から 来ました。",
          answer: "A: 初めまして。ハリムです。 B: バングラデシュから 来ました。",
          romaji: "Hajimemashite. Harimu desu. Banguradeshu kara kimashita.",
          bengali: "প্রথম পরিচয়। আমি হালিম। বাংলাদেশ থেকে এসেছি।",
        },
        {
          prompt: "A: 失礼ですが、お名前は？ B: ＿＿です。",
          answer: "A: 失礼ですが、お名前は？ B: 山田です。",
          romaji: "Shitsurei desu ga, onamae wa? Yamada desu.",
          bengali: "মাফ করবেন, আপনার নাম? — ইয়ামাদা।",
        },
        {
          prompt: "A: あなたは 先生ですか。 B: いいえ、＿＿。＿＿です。",
          answer: "いいえ、先生じゃありません。会社員です。",
          romaji: "Iie, sensei ja arimasen. Kaishain desu.",
          bengali: "না, শিক্ষক নই। কোম্পানির কর্মচারী।",
        },
        {
          prompt: "A: おいくつですか。 B: ＿＿。",
          answer: "28歳です。",
          romaji: "Nijuu-hassai desu.",
          bengali: "বয়স ২৮ বছর।",
        },
      ],
    },
  ],
};

const unitTwoPractice: UnitPracticeDetails = {
  heroImage: "/images/projects/n5-practice/unit-02-souvenir.png",
  heroAlt: "অফিসে মিস্টার মিলার সাতোকে উপহার দিচ্ছেন; আশেপাশে বই, নোট, ক্যামেরা, ব্যাগ, টিভি ও গাড়ির মডেল আছে",
  dialogueImage: "/images/projects/n5-practice/unit-02-souvenir.png",
  objectImage: "/images/projects/n5-vocabulary/unit-02-sprites.png",
  heroEyebrow: "UNIT 02 · VISUAL PRACTICE",
  heroTitle: "দূরত্ব দেখে সঠিক demonstrative বলুন",
  heroDescription: "বক্তার কাছে これ／この, শ্রোতার কাছে それ／その, আর দুজনের থেকে দূরে あれ／あの ব্যবহার করুন।",
  dialogueTitle: "উপহার দেওয়ার conversation flow",
  dialogueAlt: "মিলার দুই হাতে সাতোকে একটি souvenir gift দিচ্ছেন",
  dialogueCaption: [
    { name: "ミラー", text: "お土産を দিচ্ছেন" },
    { name: "佐藤", text: "উপহার গ্রহণ করছেন" },
    { name: "物", text: "দূরত্ব দেখে শব্দ বাছুন" },
  ],
  modelLabel: "物の説明",
  modelTitle: "OBJECT DESCRIPTION MODEL",
  challengeTitle: "Object challenge",
  challengeDescription: "ছবির বস্তু দেখে これ・それ・あれ অথবা この・その・あの দিয়ে একটি বাক্য বলুন।",
  usefulWords: [
    { japanese: "これ", romaji: "kore", bengali: "এটি—বক্তার কাছে" },
    { japanese: "それ", romaji: "sore", bengali: "সেটি—শ্রোতার কাছে" },
    { japanese: "あれ", romaji: "are", bengali: "ওটি—দুজনের থেকে দূরে" },
    { japanese: "この／その／あの", romaji: "kono / sono / ano", bengali: "এই／সেই／ওই—এর পরে noun চাই" },
    { japanese: "何", romaji: "nan", bengali: "কী / কোন ধরনের" },
    { japanese: "だれの", romaji: "dare no", bengali: "কার / কারটি" },
  ],
  answerPatterns: [
    { japanese: "はい、そうです。", romaji: "Hai, sou desu.", bengali: "হ্যাঁ, ঠিক তাই।", positive: true },
    { japanese: "いいえ、ちがいます。", romaji: "Iie, chigaimasu.", bengali: "না, তা নয়।", positive: false },
    { japanese: "いいえ、そうじゃありません。", romaji: "Iie, sou ja arimasen.", bengali: "না, ঠিক তা নয়।", positive: false },
  ],
  memoryPoints: [
    { symbol: "これ", meaning: "একা বসে; বক্তার কাছের বস্তু" },
    { symbol: "この", meaning: "এর পরে অবশ্যই noun বসে" },
    { symbol: "の", meaning: "মালিকানা, দেশ, ধরন বা category যুক্ত করে" },
    { symbol: "何", meaning: "বস্তু বা ধরন জানতে—何／何の" },
    { symbol: "誰", meaning: "মালিক জানতে—だれの" },
  ],
  selfIntroduction: {
    japanese: "これは 京都の お土産です。チョコレートです。どうぞ。",
    romaji: "Kore wa Kyouto no omiyage desu. Chokoreeto desu. Douzo.",
    bengali: "এটি কিয়োটোর স্মারক উপহার। এটি চকলেট। নিন।",
  },
  grammarQuiz: [
    { question: "বক্তার হাতে থাকা জিনিসটি দেখিয়ে ‘এটি বই’—কোনটি ঠিক?", options: ["これは 本です。", "このは 本です。", "それは 本です。", "あの 本です。"], correctAnswer: "これは 本です。", explanation: "これ নিজেই pronoun; বক্তার কাছের বস্তু বোঝায়।" },
    { question: "‘এই dictionary’—সঠিক phrase কোনটি?", options: ["これ 辞書", "この 辞書", "それの 辞書", "あれ 辞書"], correctAnswer: "この 辞書", explanation: "この সরাসরি noun-এর আগে বসে: この＋辞書।" },
    { question: "শ্রোতার কাছে থাকা bag দেখিয়ে কোনটি বলবেন?", options: ["この かばん", "その かばん", "あの かばん", "これ かばん"], correctAnswer: "その かばん", explanation: "その＋noun শ্রোতার কাছের বস্তু বোঝায়।" },
    { question: "দুজনের থেকে দূরের TV—কোনটি ঠিক?", options: ["これ テレビ", "その テレビ", "あの テレビ", "このは テレビ"], correctAnswer: "あの テレビ", explanation: "あの＋noun দুজনের থেকেই দূরের বস্তু নির্দেশ করে।" },
    { question: "‘এটি কী?’—সঠিক প্রশ্ন কোনটি?", options: ["これは 何ですか。", "これは だれですか。", "この 何ですか。", "何は これですか。"], correctAnswer: "これは 何ですか。", explanation: "বস্তুর পরিচয় জানতে 何ですか ব্যবহার হয়।" },
    { question: "‘এটি কীসের magazine?’—কোনটি ঠিক?", options: ["これは 何の 雑誌ですか。", "これは だれの 雑誌ですか。", "これは 何 雑誌ですか。", "これは 雑誌の 何ですか。"], correctAnswer: "これは 何の 雑誌ですか。", explanation: "ধরন বা বিষয় জানতে 何の＋noun ব্যবহার হয়।" },
    { question: "‘ওই bag কার?’—সঠিক প্রশ্ন কোনটি?", options: ["あれは だれの かばんですか。", "あれは 何の かばんですか。", "あのは だれですか。", "あれの かばんは 何ですか。"], correctAnswer: "あれは だれの かばんですか。", explanation: "মালিক জানতে だれの ব্যবহার করুন।" },
    { question: "‘এটি মিলারেরটি কি?’—সঠিক বাক্য কোনটি?", options: ["これは ミラーさんのですか。", "これは ミラーさんですか。", "このは ミラーさんのですか。", "これは ミラーさんの か。"], correctAnswer: "これは ミラーさんのですか。", explanation: "আগের noun স্পষ্ট হলে Nの-এর পরে noun বাদ দেওয়া যায়: ミラーさんのですか。" },
  ],
  dialogue: [
    { speaker: "ミラー", japanese: "これは 何ですか。", romaji: "Kore wa nan desu ka.", bengali: "এটি কী?" },
    { speaker: "佐藤", japanese: "日本語の 本です。", romaji: "Nihongo no hon desu.", bengali: "এটি জাপানি ভাষার বই।" },
    { speaker: "ミラー", japanese: "それは？", romaji: "Sore wa?", bengali: "সেটি কী?" },
    { speaker: "佐藤", japanese: "辞書です。", romaji: "Jisho desu.", bengali: "এটি dictionary।" },
    { speaker: "ミラー", japanese: "これは どうぞ。", romaji: "Kore wa douzo.", bengali: "এটি নিন।" },
    { speaker: "佐藤", japanese: "チョコレートですか。", romaji: "Chokoreeto desu ka.", bengali: "এটি কি চকলেট?" },
    { speaker: "ミラー", japanese: "はい、どうぞ。", romaji: "Hai, douzo.", bengali: "হ্যাঁ, নিন।" },
    { speaker: "佐藤", japanese: "ありがとうございます。", romaji: "Arigatou gozaimasu.", bengali: "অনেক ধন্যবাদ।" },
    { speaker: "ミラー", japanese: "どういたしまして。", romaji: "Dou itashimashite.", bengali: "স্বাগতম / ধন্যবাদের প্রয়োজন নেই।" },
  ],
  profiles: [],
  objects: [
    { word: "本", romaji: "hon", bengali: "বই", prompt: "これは 本です。", imageIndex: 6 },
    { word: "辞書", romaji: "jisho", bengali: "অভিধান", prompt: "この辞書は 日本語の辞書です。", imageIndex: 7 },
    { word: "ノート", romaji: "nooto", bengali: "নোটবুক", prompt: "それは ノートです。", imageIndex: 8 },
    { word: "雑誌", romaji: "zasshi", bengali: "ম্যাগাজিন", prompt: "その雑誌は 何の雑誌ですか。", imageIndex: 10 },
    { word: "かばん", romaji: "kaban", bengali: "ব্যাগ", prompt: "あれは だれのかばんですか。", imageIndex: 11 },
    { word: "電話", romaji: "denwa", bengali: "টেলিফোন", prompt: "これは 電話です。", imageIndex: 12 },
    { word: "テレビ", romaji: "terebi", bengali: "টেলিভিশন", prompt: "あのテレビは ミラーさんのです。", imageIndex: 13 },
    { word: "カメラ", romaji: "kamera", bengali: "ক্যামেরা", prompt: "そのカメラは だれのですか。", imageIndex: 14 },
    { word: "コンピューター", romaji: "konpyuutaa", bengali: "কম্পিউটার", prompt: "これは コンピューターです。", imageIndex: 15 },
    { word: "車", romaji: "kuruma", bengali: "গাড়ি", prompt: "あの車は 日本の車です。", imageIndex: 16 },
  ],
  modules: [
    {
      step: "01", title: "8-pattern builder", instruction: "Bracket-এর cue দেখে সম্পূর্ণ বাক্য বলুন; তারপর answer খুলে মিলিয়ে নিন।",
      questions: [
        { prompt: "これは（辞書）＿＿。", hint: "বস্তুর পরিচয় · N は N です", answer: "これは 辞書です。", romaji: "Kore wa jisho desu.", bengali: "এটি অভিধান।" },
        { prompt: "それは（わたし／傘）＿＿。", hint: "মালিকানা · N の N", answer: "それは わたしの 傘です。", romaji: "Sore wa watashi no kasa desu.", bengali: "সেটি আমার ছাতা।" },
        { prompt: "この本は（わたし）＿＿。", hint: "noun জানা থাকলে বাদ যায়", answer: "この本は わたしのです。", romaji: "Kono hon wa watashi no desu.", bengali: "এই বইটি আমার।" },
        { prompt: "これは（9？）＿＿。", hint: "নাম বা চিহ্ন confirm করুন", answer: "これは「9」ですか。", romaji: "Kore wa kyuu desu ka.", bengali: "এটি কি ‘৯’?" },
        { prompt: "それは（何／雑誌？）＿＿。", hint: "ধরন জানতে · 何の", answer: "それは 何の 雑誌ですか。", romaji: "Sore wa nan no zasshi desu ka.", bengali: "সেটি কীসের ম্যাগাজিন?" },
        { prompt: "あれは（だれ／かばん？）＿＿。", hint: "মালিক জানতে · だれの", answer: "あれは だれの かばんですか。", romaji: "Are wa dare no kaban desu ka.", bengali: "ওই ব্যাগটি কার?" },
        { prompt: "これは（ミラーさん／もの？）＿＿。", hint: "আগের noun বাদ দিন", answer: "これは ミラーさんのですか。", romaji: "Kore wa Miraa-san no desu ka.", bengali: "এটি কি মিলারের?" },
        { prompt: "このかぎは（だれ？）＿＿。", hint: "কারটি? · だれのですか", answer: "このかぎは だれのですか。", romaji: "Kono kagi wa dare no desu ka.", bengali: "এই চাবিটি কার?" },
      ],
    },
    {
      step: "02", title: "Distance challenge", instruction: "কথকের জায়গা কল্পনা করে これ・それ・あれ বা この・その・あの বাছুন।",
      questions: [
        { prompt: "আমার হাতে থাকা বই: ＿＿は 本です。", answer: "これは 本です。", romaji: "Kore wa hon desu.", bengali: "এটি বই।" },
        { prompt: "আপনার পাশে থাকা camera: ＿＿は カメラです。", answer: "それは カメラです。", romaji: "Sore wa kamera desu.", bengali: "সেটি ক্যামেরা।" },
        { prompt: "দুজনের থেকে দূরের TV: ＿＿は テレビです。", answer: "あれは テレビです。", romaji: "Are wa terebi desu.", bengali: "ওটি টেলিভিশন।" },
        { prompt: "আমার কাছের notebook: ＿＿ノートは 新しいです。", answer: "このノートは 新しいです。", romaji: "Kono nooto wa atarashii desu.", bengali: "এই নোটবুকটি নতুন।" },
        { prompt: "আপনার কাছের bag: ＿＿かばんは 大きいです。", answer: "そのかばんは 大きいです。", romaji: "Sono kaban wa ookii desu.", bengali: "সেই ব্যাগটি বড়।" },
        { prompt: "দূরের car: ＿＿車は 日本の車です。", answer: "あの車は 日本の車です。", romaji: "Ano kuruma wa Nihon no kuruma desu.", bengali: "ওই গাড়িটি জাপানি গাড়ি।" },
      ],
    },
    {
      step: "03", title: "Ownership Q&A", instruction: "প্রশ্নটি মুখে বলুন, তারপর full answer দিন—positive ও correction দুটোই practice করুন।",
      questions: [
        { prompt: "そのかばんは だれのですか。", answer: "わたしのです。", romaji: "Watashi no desu.", bengali: "এটি আমার।" },
        { prompt: "このCDは サントスさんのですか。", answer: "はい、そうです。", romaji: "Hai, sou desu.", bengali: "হ্যাঁ, ঠিক তাই।" },
        { prompt: "あれは ミラーさんの車ですか。", answer: "いいえ、ミラーさんのじゃありません。シュミットさんのです。", romaji: "Iie, Miraa-san no ja arimasen. Shumitto-san no desu.", bengali: "না, মিলারের নয়। এটি শুমিটের।" },
        { prompt: "これは 何の本ですか。", answer: "日本語の本です。", romaji: "Nihongo no hon desu.", bengali: "এটি জাপানি ভাষার বই।" },
        { prompt: "このかぎは だれのですか。", answer: "カリナさんのです。", romaji: "Karina-san no desu.", bengali: "এটি কারিনার।" },
      ],
    },
    {
      step: "04", title: "Conversation completion", instruction: "ফাঁকা অংশ পূরণ করে ছোট dialogue তৈরি করুন; answer খোলার আগে দুজনের ভূমিকায় বলুন।",
      questions: [
        { prompt: "A: これは 何ですか。 B: ＿＿。", answer: "辞書です。", romaji: "Jisho desu.", bengali: "এটি অভিধান।" },
        { prompt: "A: そのかばんは だれのですか。 B: ＿＿。", answer: "わたしのです。", romaji: "Watashi no desu.", bengali: "এটি আমার।" },
        { prompt: "A: これは どうぞ。 B: チョコレートですか。 A: ＿＿。", answer: "はい、どうぞ。", romaji: "Hai, douzo.", bengali: "হ্যাঁ, নিন।" },
        { prompt: "A: これは ミラーさんのカメラですか。 B: ＿＿、＿＿。佐藤さんのです。", answer: "いいえ、ちがいます。", romaji: "Iie, chigaimasu.", bengali: "না, তা নয়। এটি সাতোর।" },
      ],
    },
    {
      step: "05", title: "Final recall", instruction: "Bangla cue দেখে Japanese বলুন—তারপর Romaji ও বাংলা অর্থ দিয়ে নিজে যাচাই করুন।",
      questions: [
        { prompt: "এটি কী?", answer: "これは 何ですか。", romaji: "Kore wa nan desu ka.", bengali: "এটি কী?" },
        { prompt: "সেটি ইংরেজি dictionary।", answer: "それは 英語の辞書です。", romaji: "Sore wa eigo no jisho desu.", bengali: "সেটি ইংরেজি অভিধান।" },
        { prompt: "ওই camera-টি কার?", answer: "あのカメラは だれのですか。", romaji: "Ano kamera wa dare no desu ka.", bengali: "ওই ক্যামেরাটি কার?" },
        { prompt: "এটি আমার নয়।", answer: "これは わたしのじゃありません。", romaji: "Kore wa watashi no ja arimasen.", bengali: "এটি আমার নয়।" },
        { prompt: "অনেক ধন্যবাদ। — স্বাগতম।", answer: "ありがとうございます。— どういたしまして。", romaji: "Arigatou gozaimasu. — Dou itashimashite.", bengali: "অনেক ধন্যবাদ। — স্বাগতম।" },
      ],
    },
  ],
};

const unitThreePractice: UnitPracticeDetails = {
  heroImage: "/images/projects/n5-vocabulary/unit-03.webp",
  heroAlt: "স্টেশন ও shopping floor-এ reception, elevator, restroom এবং বিভিন্ন location দেখানো রঙিন দৃশ্য",
  dialogueImage: "/images/projects/n5-vocabulary/unit-03.webp",
  heroEyebrow: "UNIT 03 · LOCATION PRACTICE",
  heroTitle: "ছবিতে জায়গা খুঁজে Japanese-এ বলুন",
  heroDescription: "Reception, elevator, restroom ও shop-এর অবস্থান দেখে ここ・そこ・あそこ এবং こちら・そちら・あちら ব্যবহার করুন।",
  dialogueTitle: "Reception-এ পথ জিজ্ঞেস করা",
  dialogueAlt: "Reception desk-এ visitor elevator ও restroom-এর পথ জিজ্ঞেস করছেন",
  dialogueCaption: [{name:"受付",text:"visitor-কে সাহায্য করছেন"},{name:"客",text:"location জিজ্ঞেস করছেন"},{name:"案内",text:"দিক নির্দেশ করছে"}],
  modelLabel: "場所案内",
  modelTitle: "LOCATION GUIDE MODEL",
  usefulWords: [
    {japanese:"ここ／そこ／あそこ",romaji:"koko / soko / asoko",bengali:"এখানে / সেখানে / ওখানে"},
    {japanese:"どこ",romaji:"doko",bengali:"কোথায়"},
    {japanese:"こちら／そちら／あちら",romaji:"kochira / sochira / achira",bengali:"এই / সেই / ওই দিকে—polite"},
    {japanese:"どちら",romaji:"dochira",bengali:"কোন দিকে / কোথায়—polite"},
    {japanese:"あります",romaji:"arimasu",bengali:"বস্তু/স্থান আছে"},
    {japanese:"います",romaji:"imasu",bengali:"মানুষ/প্রাণী আছে"},
  ],
  answerPatterns: [
    {japanese:"ここです。",romaji:"Koko desu.",bengali:"এখানে।",positive:true},
    {japanese:"あちらです。",romaji:"Achira desu.",bengali:"ওই দিকে।",positive:true},
    {japanese:"ここには ありません。",romaji:"Koko ni wa arimasen.",bengali:"এখানে নেই।",positive:false},
  ],
  memoryPoints: [
    {symbol:"ここ",meaning:"জায়গা; বক্তার কাছে"},{symbol:"こちら",meaning:"polite জায়গা বা direction"},{symbol:"どこ",meaning:"কোথায়—place question"},{symbol:"に",meaning:"যেখানে অস্তিত্ব আছে"},{symbol:"が",meaning:"যে বস্তু/ব্যক্তি সেখানে আছে"},
  ],
  selfIntroduction: {japanese:"受付は ここです。エレベーターは あちらです。ロビーに 電話が あります。",romaji:"Uketsuke wa koko desu. Erebeetaa wa achira desu. Robii ni denwa ga arimasu.",bengali:"Reception এখানে। Lift ওই দিকে। Lobby-তে telephone আছে।"},
  grammarQuiz: [
    {question:"‘Reception এখানে’—কোনটি ঠিক?",options:["受付は ここです。","受付は これです。","受付を ここです。","受付は どれです。"],correctAnswer:"受付は ここです。",explanation:"Location-এর জন্য ここ; জিনিসের pronoun これ নয়।"},
    {question:"‘টয়লেট কোথায়?’—সঠিক প্রশ্ন কোনটি?",options:["トイレは どこですか。","トイレは どれですか。","トイレが 何ですか。","トイレを こちらですか。"],correctAnswer:"トイレは どこですか。",explanation:"Place জানতে どこ ব্যবহার হয়।"},
    {question:"Polite ভাবে ‘Lift কোন দিকে?’",options:["エレベーターは どちらですか。","エレベーターは だれですか。","エレベーターは どのですか。","エレベーターが いくらですか。"],correctAnswer:"エレベーターは どちらですか。",explanation:"Direction বা polite location question-এ どちら।"},
    {question:"‘Meeting room ওখানে’—কোনটি ঠিক?",options:["会議室は あそこです。","会議室は あれです。","会議室に どこです。","会議室が あちらか。"],correctAnswer:"会議室は あそこです。",explanation:"দুজনের থেকে দূরের জায়গা あそこ।"},
    {question:"‘Japanese company’—সঠিক phrase?",options:["日本の会社","日本は会社","日本が会社","会社の日本"],correctAnswer:"日本の会社",explanation:"Origin/category-এর সম্পর্ক N₁のN₂ দিয়ে হয়; main noun শেষে।"},
    {question:"‘Lobby-তে telephone আছে’—কোনটি ঠিক?",options:["ロビーに 電話が あります。","ロビーで 電話が います。","ロビーは 電話を です。","電話に ロビーが あります。"],correctAnswer:"ロビーに 電話が あります。",explanation:"বস্তুর existence: Place に N が あります।"},
    {question:"‘শিক্ষক classroom-এ আছেন’—কোনটি ঠিক?",options:["先生は 教室に います。","先生は 教室に あります。","先生が 教室で です。","教室は 先生を います。"],correctAnswer:"先生は 教室に います。",explanation:"মানুষ/প্রাণীর existence-এ います ব্যবহার হয়।"},
    {question:"Vending machine-এর জন্য কোন verb?",options:["あります","います","ですいます","あります人"],correctAnswer:"あります",explanation:"Vending machine একটি non-living object, তাই あります।"},
    {question:"‘Camera counter কোন তলায়?’—সঠিক প্রশ্ন কোনটি?",options:["カメラ売り場は 何階ですか。","カメラ売り場は いくらですか。","カメラ売り場は どれ円ですか。","カメラ売り場が 何ですか。"],correctAnswer:"カメラ売り場は 何階ですか。",explanation:"Floor জানতে 何階（なんがい）ব্যবহার হয়।"},
    {question:"‘এই wine-এর দাম কত?’—সঠিক প্রশ্ন কোনটি?",options:["このワインは いくらですか。","このワインは どこですか。","このワインは 何階ですか。","このワインが だれですか。"],correctAnswer:"このワインは いくらですか。",explanation:"Price জানতে いくらですか ব্যবহার হয়।"},
    {question:"‘এটি station নয়’—কোনটি ঠিক?",options:["これは 駅ではありません。","これは 駅ですありません。","これは 駅に ありません。","これは 駅を いません。"],correctAnswer:"これは 駅ではありません。",explanation:"Noun sentence negative করতে です বদলে ではありません হয়।"},
  ],
  dialogue: [
    {speaker:"客",japanese:"すみません。お手洗いは どちらですか。",romaji:"Sumimasen. Otearai wa dochira desu ka.",bengali:"মাফ করবেন, restroom কোন দিকে?"},
    {speaker:"受付",japanese:"あちらです。",romaji:"Achira desu.",bengali:"ওই দিকে।"},
    {speaker:"客",japanese:"エレベーターは どこですか。",romaji:"Erebeetaa wa doko desu ka.",bengali:"Lift কোথায়?"},
    {speaker:"受付",japanese:"そこです。階段の となりです。",romaji:"Soko desu. Kaidan no tonari desu.",bengali:"সেখানে। সিঁড়ির পাশে।"},
    {speaker:"客",japanese:"ロビーに 電話が ありますか。",romaji:"Robii ni denwa ga arimasu ka.",bengali:"Lobby-তে telephone আছে কি?"},
    {speaker:"受付",japanese:"はい、あります。",romaji:"Hai, arimasu.",bengali:"হ্যাঁ, আছে।"},
    {speaker:"客",japanese:"ありがとうございます。",romaji:"Arigatou gozaimasu.",bengali:"অনেক ধন্যবাদ।"},
  ],
  profiles: [],
  modules: [
    {step:"01",title:"Location word builder",instruction:"Distance cue দেখে ここ・そこ・あそこ・どこ বসান।",questions:[
      {prompt:"বক্তার পাশের reception: ＿＿は 受付です。",answer:"ここは 受付です。",romaji:"Koko wa uketsuke desu.",bengali:"এখানে reception।"},
      {prompt:"শ্রোতার পাশের lobby: ＿＿は ロビーです。",answer:"そこは ロビーです。",romaji:"Soko wa robii desu.",bengali:"সেখানে lobby।"},
      {prompt:"দুজনের থেকে দূরের canteen: ＿＿は 食堂です。",answer:"あそこは 食堂です。",romaji:"Asoko wa shokudou desu.",bengali:"ওখানে canteen।"},
      {prompt:"Meeting room কোথায়: 会議室は ＿＿ですか。",answer:"会議室は どこですか。",romaji:"Kaigishitsu wa doko desu ka.",bengali:"Meeting room কোথায়?"},
    ]},
    {step:"02",title:"Polite direction drill",instruction:"Customer-service tone-এ こちら・そちら・あちら・どちら ব্যবহার করুন।",questions:[
      {prompt:"Lift এই দিকে।",answer:"エレベーターは こちらです。",romaji:"Erebeetaa wa kochira desu.",bengali:"Lift এই দিকে।"},
      {prompt:"Restroom ওই দিকে।",answer:"お手洗いは あちらです。",romaji:"Otearai wa achira desu.",bengali:"Restroom ওই দিকে।"},
      {prompt:"Reception কোন দিকে?",answer:"受付は どちらですか。",romaji:"Uketsuke wa dochira desu ka.",bengali:"Reception কোন দিকে?"},
      {prompt:"Escalator সেই দিকে।",answer:"エスカレーターは そちらです。",romaji:"Esukareetaa wa sochira desu.",bengali:"Escalator সেই দিকে।"},
    ]},
    {step:"03",title:"あります or います",instruction:"Entity মানুষ/প্রাণী নাকি বস্তু—দেখে সঠিক existence verb বাছুন।",questions:[
      {prompt:"食堂に 自動販売機が ＿＿。",answer:"食堂に 自動販売機が あります。",romaji:"Shokudou ni jidouhanbaiki ga arimasu.",bengali:"Canteen-এ vending machine আছে।"},
      {prompt:"事務所に 山田さんが ＿＿。",answer:"事務所に 山田さんが います。",romaji:"Jimusho ni Yamada-san ga imasu.",bengali:"Office-এ ইয়ামাদা আছেন।"},
      {prompt:"ロビーに 電話が ＿＿。",answer:"ロビーに 電話が あります。",romaji:"Robii ni denwa ga arimasu.",bengali:"Lobby-তে telephone আছে।"},
      {prompt:"教室に 先生が ＿＿。",answer:"教室に 先生が います。",romaji:"Kyoushitsu ni sensei ga imasu.",bengali:"Classroom-এ শিক্ষক আছেন।"},
    ]},
    {step:"04",title:"Conversation completion",instruction:"প্রশ্ন ও উত্তর মিলিয়ে reception dialogue সম্পূর্ণ করুন।",questions:[
      {prompt:"A: トイレは どこですか。 B: ＿＿。",answer:"あそこです。",romaji:"Asoko desu.",bengali:"ওখানে।"},
      {prompt:"A: エレベーターは どちらですか。 B: ＿＿。",answer:"こちらです。",romaji:"Kochira desu.",bengali:"এই দিকে।"},
      {prompt:"A: 事務所に 田中さんが いますか。 B: ＿＿。",answer:"はい、います。",romaji:"Hai, imasu.",bengali:"হ্যাঁ, আছেন।"},
      {prompt:"A: ロビーに 電話が ありますか。 B: いいえ、＿＿。",answer:"いいえ、ありません。",romaji:"Iie, arimasen.",bengali:"না, নেই।"},
    ]},
    {step:"05",title:"Final recall",instruction:"Bangla cue দেখে সম্পূর্ণ Japanese sentence বলুন।",questions:[
      {prompt:"Classroom এখানে।",answer:"教室は ここです。",romaji:"Kyoushitsu wa koko desu.",bengali:"Classroom এখানে।"},
      {prompt:"Office কোথায়?",answer:"事務所は どこですか。",romaji:"Jimusho wa doko desu ka.",bengali:"Office কোথায়?"},
      {prompt:"IMC একটি Japanese company।",answer:"IMCは 日本の会社です。",romaji:"IMC wa Nihon no kaisha desu.",bengali:"IMC একটি Japanese company।"},
      {prompt:"Reception-এ একজন মানুষ আছেন।",answer:"受付に 人が います。",romaji:"Uketsuke ni hito ga imasu.",bengali:"Reception-এ একজন মানুষ আছেন।"},
    ]},
    {step:"06",title:"Floor & price challenge",instruction:"何階・いくら・円 ব্যবহার করে department-store information সম্পূর্ণ করুন।",questions:[
      {prompt:"カメラ売り場は ＿＿ですか。― 五階です。",hint:"কোন তলায়?",answer:"カメラ売り場は 何階ですか。― 五階です。",romaji:"Kamera uriba wa nan-gai desu ka. — Go-kai desu.",bengali:"Camera counter কোন তলায়? — পঞ্চম তলায়।"},
      {prompt:"このワインは ＿＿ですか。― 2,500円です。",hint:"কত দাম?",answer:"このワインは いくらですか。― 二千五百円です。",romaji:"Kono wain wa ikura desu ka. — Ni-sen go-hyaku-en desu.",bengali:"এই wine-এর দাম কত? — ২,৫০০ yen।"},
      {prompt:"এই bag-এর দাম ৭,৩০০ yen।",answer:"このかばんは 七千三百円です。",romaji:"Kono kaban wa nana-sen san-byaku-en desu.",bengali:"এই bag-এর দাম ৭,৩০০ yen।"},
      {prompt:"Camera counter basement-এ নয়; পঞ্চম তলায়।",answer:"カメラ売り場は 地下ではありません。五階です。",romaji:"Kamera uriba wa chika dewa arimasen. Go-kai desu.",bengali:"Camera counter basement-এ নয়; পঞ্চম তলায়।"},
      {prompt:"靴売り場は どちらですか。",answer:"あちらです。二階です。",romaji:"Achira desu. Ni-kai desu.",bengali:"ওই দিকে। দ্বিতীয় তলায়।"},
    ]},
    {step:"07",title:"Wine shop conversation",instruction:"ছবির conversation-এর flow অনুযায়ী shop dialogue সম্পূর্ণ করুন।",questions:[
      {prompt:"マリア: すみません。そのワインを ＿＿ください。",answer:"見せてください。",romaji:"Misete kudasai.",bengali:"অনুগ্রহ করে ওই wine-টি দেখান।"},
      {prompt:"マリア: 日本のワインは ありますか。 店員: ＿＿。",answer:"はい、あります。",romaji:"Hai, arimasu.",bengali:"হ্যাঁ, আছে।"},
      {prompt:"マリア: それは ＿＿ですか。 店員: 2,500円です。",answer:"いくらですか。",romaji:"Ikura desu ka.",bengali:"ওটির দাম কত?"},
      {prompt:"店員: これは イタリアのワインです。 マリア: 日本のは ＿＿ですか。",answer:"どれですか。",romaji:"Dore desu ka.",bengali:"Japanese-টি কোনটি?"},
    ]},
  ],
};

export function getMinnaN5PracticeDetails(unitNumber: number) {
  if (unitNumber === 1) return unitOnePractice;
  if (unitNumber === 2) return unitTwoPractice;
  if (unitNumber === 3) return unitThreePractice;
  return undefined;
}
