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

const unitFourPractice: UnitPracticeDetails = {
  heroImage: "/images/projects/n5-practice/unit-04-time-schedule.png",
  heroAlt: "ঘড়ি, আন্তর্জাতিক telephone call, weekly schedule এবং সকাল থেকে রাতের routine নিয়ে রঙিন Japanese practice illustration",
  dialogueImage: "/images/projects/n5-practice/unit-04-time-schedule.png",
  heroEyebrow: "UNIT 04 · TIME & SCHEDULE PRACTICE",
  heroTitle: "ঘড়ি দেখুন, সময় বলুন, schedule তৈরি করুন",
  heroDescription: "何時・何分, verb tense, に, から／まで, と এবং ね ব্যবহার করে daily routine ও business hour বলুন।",
  dialogueTitle: "Telephone-এ business hour জিজ্ঞেস করা",
  dialogueAlt: "ভিন্ন time zone-এর office worker telephone-এ business hour জিজ্ঞেস করছেন",
  dialogueCaption: [{name:"ミラー",text:"telephone number ও closing time জিজ্ঞেস করছেন"},{name:"店の人",text:"business hour জানাচ্ছেন"},{name:"時計",text:"ভিন্ন শহরের সময় দেখাচ্ছে"}],
  modelLabel: "一日の予定",
  modelTitle: "DAILY SCHEDULE MODEL",
  usefulWords: [
    {japanese:"何時／何分",romaji:"nan-ji / nan-pun",bengali:"কয়টা / কত মিনিট"},{japanese:"午前／午後",romaji:"gozen / gogo",bengali:"সকাল a.m. / দুপুরের পর p.m."},{japanese:"～から／～まで",romaji:"~ kara / ~ made",bengali:"～থেকে / ～পর্যন্ত"},{japanese:"毎朝／毎晩",romaji:"maiasa / maiban",bengali:"প্রতি সকাল / প্রতি রাত"},{japanese:"休み",romaji:"yasumi",bengali:"ছুটি / বিশ্রাম"},{japanese:"何曜日",romaji:"nan-youbi",bengali:"কী বার"},
  ],
  answerPatterns: [
    {japanese:"今 7時10分です。",romaji:"Ima shichi-ji juppun desu.",bengali:"এখন ৭টা ১০ মিনিট।",positive:true},
    {japanese:"9時から 5時までです。",romaji:"Ku-ji kara go-ji made desu.",bengali:"৯টা থেকে ৫টা পর্যন্ত।",positive:true},
    {japanese:"いいえ、働きませんでした。",romaji:"Iie, hatarakimasen deshita.",bengali:"না, কাজ করিনি।",positive:false},
  ],
  memoryPoints: [
    {symbol:"時",meaning:"ঘণ্টার counter; 4時＝よじ, 7時＝しちじ, 9時＝くじ"},{symbol:"分",meaning:"মিনিট; ふん／ぷん reading বদলায়"},{symbol:"に",meaning:"exact time-এর পরে; 今日・明日・毎日-এর পরে নয়"},{symbol:"から",meaning:"শুরুর সময় বা স্থান"},{symbol:"まで",meaning:"শেষের সময় বা স্থান"},{symbol:"ね",meaning:"সম্মতি বা সহমর্মিতা—তাই না"},
  ],
  selfIntroduction: {japanese:"毎朝 6時半に 起きます。9時から 5時まで 働きます。土曜日と 日曜日は 休みです。",romaji:"Maiasa roku-ji han ni okimasu. Ku-ji kara go-ji made hatarakimasu. Doyoubi to nichiyoubi wa yasumi desu.",bengali:"প্রতি সকাল সাড়ে ৬টায় উঠি। ৯টা থেকে ৫টা পর্যন্ত কাজ করি। শনিবার ও রবিবার ছুটি।"},
  grammarQuiz: [
    {question:"‘এখন ৪টা ৫ মিনিট’—সঠিকটি কোনটি?",options:["今 4時5分です。","今 4分5時です。","今に 4時です。","4時を 5分です。"],correctAnswer:"今 4時5分です。",explanation:"সময় বলার order হলো 今 + hour 時 + minute 分 + です।"},
    {question:"4時-এর স্বাভাবিক reading কোনটি?",options:["よじ","よんじ","しじ","よつじ"],correctAnswer:"よじ",explanation:"৪টার special reading よじ।"},
    {question:"‘প্রতি সকাল ৬টায় উঠি’—কোনটি ঠিক?",options:["毎朝 6時に 起きます。","毎朝に 6時を 起きます。","毎朝 6時で 起きます。","毎朝 6時 起きました。"],correctAnswer:"毎朝 6時に 起きます。",explanation:"Exact clock time 6時-এর পরে に বসে।"},
    {question:"‘গতকাল পড়াশোনা করিনি’—সঠিক tense?",options:["昨日 勉強しませんでした。","昨日 勉強しません。","昨日 勉強します。","昨日 勉強でした。"],correctAnswer:"昨日 勉強しませんでした。",explanation:"Past negative polite ending হলো ませんでした।"},
    {question:"‘৯টা থেকে ৫টা পর্যন্ত’—কোনটি ঠিক?",options:["9時から 5時まで","9時まで 5時から","9時と 5時に","9時に 5時を"],correctAnswer:"9時から 5時まで",explanation:"から শুরু এবং まで শেষের সীমা দেখায়।"},
    {question:"‘ছুটি শনিবার ও রবিবার’—কোন particle?",options:["土曜日と 日曜日","土曜日に 日曜日","土曜日から 日曜日","土曜日を 日曜日"],correctAnswer:"土曜日と 日曜日",explanation:"দুইটি noun সম্পূর্ণ তালিকা হিসেবে যুক্ত করতে と।"},
    {question:"今日-এর পরে সাধারণত কোনটি ঠিক?",options:["今日 働きます。","今日に 働きます。","今日を 働きます。","今日で 起きます。"],correctAnswer:"今日 働きます。",explanation:"今日・明日・毎日-এর মতো relative time word-এর পরে সাধারণত に লাগে না।"},
    {question:"‘কষ্টকর, তাই না’—কোনটি ঠিক?",options:["大変ですね。","大変ですかに。","大変をね。","大変とです。"],correctAnswer:"大変ですね。",explanation:"Sentence শেষে ね shared feeling বা agreement প্রকাশ করে।"},
  ],
  dialogue: [
    {speaker:"ミラー",japanese:"すみません。「あすか」の 電話番号は 何番ですか。",romaji:"Sumimasen. Asuka no denwa bangou wa nan-ban desu ka.",bengali:"মাফ করবেন, ‘আসুকা’-র telephone number কত?"},
    {speaker:"佐藤",japanese:"5275の 2725です。",romaji:"Go-ni-nana-go no ni-nana-ni-go desu.",bengali:"৫২৭৫-২৭২৫।"},
    {speaker:"ミラー",japanese:"どうも ありがとうございます。",romaji:"Doumo arigatou gozaimasu.",bengali:"অনেক ধন্যবাদ।"},
    {speaker:"店の人",japanese:"はい、「あすか」です。",romaji:"Hai, Asuka desu.",bengali:"হ্যালো, ‘আসুকা’ বলছি।"},
    {speaker:"ミラー",japanese:"すみません。そちらは 何時までですか。",romaji:"Sumimasen. Sochira wa nan-ji made desu ka.",bengali:"মাফ করবেন, আপনারা কয়টা পর্যন্ত খোলা?"},
    {speaker:"店の人",japanese:"10時までです。休みは 日曜日です。",romaji:"Juu-ji made desu. Yasumi wa nichiyoubi desu.",bengali:"রাত ১০টা পর্যন্ত। রবিবার ছুটি।"},
    {speaker:"ミラー",japanese:"そうですか。どうも。",romaji:"Sou desu ka. Doumo.",bengali:"ও, বুঝলাম। ধন্যবাদ।"},
  ],
  profiles: [],
  modules: [
    {step:"01",title:"Clock reading",instruction:"ঘড়ির cue অনুযায়ী hour ও minute-সহ সম্পূর্ণ সময় বলুন।",questions:[
      {prompt:"4:05 — এখন কয়টা?",answer:"今 4時5分です。",romaji:"Ima yo-ji go-fun desu.",bengali:"এখন ৪টা ৫ মিনিট।"},{prompt:"9:30 — 半 ব্যবহার করুন।",answer:"今 9時半です。",romaji:"Ima ku-ji han desu.",bengali:"এখন সাড়ে ৯টা।"},{prompt:"2:10 — সম্পূর্ণ sentence বলুন।",answer:"今 2時10分です。",romaji:"Ima ni-ji juppun desu.",bengali:"এখন ২টা ১০ মিনিট।"},{prompt:"7:45 — 午後 যোগ করুন।",answer:"今 午後7時45分です。",romaji:"Ima gogo shichi-ji yonjuu-go-fun desu.",bengali:"এখন সন্ধ্যা ৭টা ৪৫ মিনিট।"},
    ]},
    {step:"02",title:"World-time challenge",instruction:"একই মুহূর্তে শহরভেদে সময় বদলায়—city cue দেখে Japanese-এ উত্তর দিন।",questions:[
      {prompt:"東京 18:00 — 東京は 今 何時ですか。",answer:"東京は 今 午後6時です。",romaji:"Toukyou wa ima gogo roku-ji desu.",bengali:"টোকিওতে এখন সন্ধ্যা ৬টা।"},{prompt:"ロンドン 10:00 — ロンドンは 今 何時ですか。",answer:"ロンドンは 今 午前10時です。",romaji:"Rondon wa ima gozen juu-ji desu.",bengali:"লন্ডনে এখন সকাল ১০টা।"},{prompt:"ニューヨーク 05:00 — time বলুন।",answer:"ニューヨークは 今 午前5時です。",romaji:"Nyuuyooku wa ima gozen go-ji desu.",bengali:"নিউইয়র্কে এখন সকাল ৫টা।"},{prompt:"北京 17:00 — time বলুন।",answer:"北京は 今 午後5時です。",romaji:"Pekin wa ima gogo go-ji desu.",bengali:"বেইজিংয়ে এখন বিকেল ৫টা।"},
    ]},
    {step:"03",title:"Weekly schedule",instruction:"Weekday ও activity মিলিয়ে 何曜日 question-এর উত্তর তৈরি করুন।",questions:[
      {prompt:"休み: 土曜日・日曜日 — 休みは 何曜日ですか。",answer:"休みは 土曜日と 日曜日です。",romaji:"Yasumi wa doyoubi to nichiyoubi desu.",bengali:"ছুটি শনিবার ও রবিবার।"},{prompt:"会議: 火曜日 — sentence বলুন।",answer:"会議は 火曜日です。",romaji:"Kaigi wa kayoubi desu.",bengali:"মিটিং মঙ্গলবার।"},{prompt:"試験: 金曜日 — sentence বলুন।",answer:"試験は 金曜日です。",romaji:"Shiken wa kinyoubi desu.",bengali:"পরীক্ষা শুক্রবার।"},{prompt:"映画: 水曜日 — question তৈরি করুন।",answer:"映画は 何曜日ですか。水曜日です。",romaji:"Eiga wa nan-youbi desu ka. Suiyoubi desu.",bengali:"সিনেমা কী বার? বুধবার।"},
    ]},
    {step:"04",title:"Opening hours",instruction:"Place ও সময় দেখে から／まで ব্যবহার করে business hour বলুন।",questions:[
      {prompt:"銀行 9:00–15:00",answer:"銀行は 9時から 3時までです。",romaji:"Ginkou wa ku-ji kara san-ji made desu.",bengali:"ব্যাংক ৯টা থেকে ৩টা পর্যন্ত।"},{prompt:"郵便局 9:00–17:00",answer:"郵便局は 9時から 5時までです。",romaji:"Yuubinkyoku wa ku-ji kara go-ji made desu.",bengali:"ডাকঘর ৯টা থেকে ৫টা পর্যন্ত।"},{prompt:"図書館 9:00–18:30",answer:"図書館は 9時から 6時半までです。",romaji:"Toshokan wa ku-ji kara roku-ji han made desu.",bengali:"লাইব্রেরি ৯টা থেকে সাড়ে ৬টা পর্যন্ত।"},{prompt:"会社 9:15–17:45",answer:"会社は 9時15分から 5時45分までです。",romaji:"Kaisha wa ku-ji juu-go-fun kara go-ji yonjuu-go-fun made desu.",bengali:"কোম্পানি ৯:১৫ থেকে ৫:৪৫ পর্যন্ত।"},
    ]},
    {step:"05",title:"Daily routine",instruction:"Routine cue-তে exact time-এর পরে に বসিয়ে sentence তৈরি করুন।",questions:[
      {prompt:"毎朝／起きます／6:30",answer:"毎朝 6時半に 起きます。",romaji:"Maiasa roku-ji han ni okimasu.",bengali:"প্রতি সকাল সাড়ে ৬টায় উঠি।"},{prompt:"毎晩／寝ます／11:00",answer:"毎晩 11時に 寝ます。",romaji:"Maiban juuichi-ji ni nemasu.",bengali:"প্রতি রাত ১১টায় ঘুমাই।"},{prompt:"毎日／働きます／9:00–17:00",answer:"毎日 9時から 5時まで 働きます。",romaji:"Mainichi ku-ji kara go-ji made hatarakimasu.",bengali:"প্রতিদিন ৯টা থেকে ৫টা পর্যন্ত কাজ করি।"},{prompt:"今晩／勉強します／7:00–8:30",answer:"今晩 7時から 8時半まで 勉強します。",romaji:"Konban shichi-ji kara hachi-ji han made benkyou shimasu.",bengali:"আজ রাতে ৭টা থেকে সাড়ে ৮টা পর্যন্ত পড়ব।"},
    ]},
    {step:"06",title:"Tense transformation",instruction:"Time cue দেখে ます ending-কে present, negative, past বা past-negative করুন।",questions:[
      {prompt:"毎日 勉強します → きのう（affirmative）",answer:"きのう 勉強しました。",romaji:"Kinou benkyou shimashita.",bengali:"গতকাল পড়াশোনা করেছি।"},{prompt:"毎日 働きます → あした（negative）",answer:"あした 働きません。",romaji:"Ashita hatarakimasen.",bengali:"আগামীকাল কাজ করব না।"},{prompt:"毎朝 6時に 起きます → きのう（past negative）",answer:"きのう 6時に 起きませんでした。",romaji:"Kinou roku-ji ni okimasen deshita.",bengali:"গতকাল ৬টায় উঠিনি।"},{prompt:"毎晩 11時に 寝ます → おととい（past）",answer:"おととい 11時に 寝ました。",romaji:"Ototoi juuichi-ji ni nemashita.",bengali:"গত পরশু ১১টায় ঘুমিয়েছি।"},
    ]},
    {step:"07",title:"Telephone conversation",instruction:"Business-hour dialogue-এর missing expression সম্পূর্ণ করুন।",questions:[
      {prompt:"「あすか」の 電話番号は ＿＿ですか。",answer:"「あすか」の 電話番号は 何番ですか。",romaji:"Asuka no denwa bangou wa nan-ban desu ka.",bengali:"আসুকা-র telephone number কত?"},{prompt:"そちらは 何時＿＿ですか。",answer:"そちらは 何時までですか。",romaji:"Sochira wa nan-ji made desu ka.",bengali:"আপনারা কয়টা পর্যন্ত খোলা?"},{prompt:"10時＿＿です。",answer:"10時までです。",romaji:"Juu-ji made desu.",bengali:"১০টা পর্যন্ত।"},{prompt:"休みは 何曜日ですか。— ＿＿。",answer:"日曜日です。",romaji:"Nichiyoubi desu.",bengali:"রবিবার।"},
    ]},
  ],
};

const unitFivePractice: UnitPracticeDetails = {
  heroImage:"/images/projects/n5-practice/unit-05-travel.png",heroAlt:"Japanese station-এ ticket counter, route map, train, bus, airplane ও castle-সহ রঙিন travel practice illustration",
  dialogueImage:"/images/projects/n5-practice/unit-05-travel.png",heroEyebrow:"UNIT 05 · TRAVEL PRACTICE",heroTitle:"কোথায়, কীভাবে, কখন ও কার সঙ্গে যাবেন?",heroDescription:"Destination へ, transport で, companion と, date に এবং movement verb ব্যবহার করে সম্পূর্ণ travel sentence তৈরি করুন।",
  dialogueTitle:"Ticket counter-এ route ও fare জিজ্ঞেস করা",dialogueAlt:"Station ticket counter-এ traveller train destination ও fare জিজ্ঞেস করছেন",dialogueCaption:[{name:"サントス",text:"甲子園 যাওয়ার train ও fare জানতে চাইছেন"},{name:"女の人",text:"route ও ticket price জানাচ্ছেন"},{name:"切符",text:"destination ও platform-এর clue"}],
  modelLabel:"旅行の予定",modelTitle:"TRAVEL PLAN MODEL",
  usefulWords:[{japanese:"どこへ",romaji:"doko e",bengali:"কোথায়/কোন দিকে"},{japanese:"何で",romaji:"nan de",bengali:"কী দিয়ে/কীভাবে"},{japanese:"だれと",romaji:"dare to",bengali:"কার সঙ্গে"},{japanese:"いつ",romaji:"itsu",bengali:"কখন"},{japanese:"～番線",romaji:"~ bansen",bengali:"～নম্বর platform"},{japanese:"いくら",romaji:"ikura",bengali:"কত দাম"}],
  answerPatterns:[{japanese:"～へ 行きます。",romaji:"~ e ikimasu.",bengali:"～এ/দিকে যাই।",positive:true},{japanese:"～で 行きました。",romaji:"~ de ikimashita.",bengali:"～দিয়ে গিয়েছিলাম।",positive:true},{japanese:"どこへも 行きませんでした。",romaji:"Doko e mo ikimasen deshita.",bengali:"কোথাও যাইনি।",positive:false}],
  memoryPoints:[{symbol:"へ",meaning:"destination; লেখা he, উচ্চারণ e"},{symbol:"で",meaning:"vehicle বা যাতায়াতের মাধ্যম"},{symbol:"と",meaning:"person/animal companion"},{symbol:"に",meaning:"exact date; 7月25日に"},{symbol:"いつ",meaning:"কখন—এর পরে に নয়"},{symbol:"も",meaning:"どこへも + negative = কোথাও না"}],
  selfIntroduction:{japanese:"来週 友達と 京都へ 行きます。新幹線で 行きます。7月25日に 帰ります。",romaji:"Raishuu tomodachi to Kyouto e ikimasu. Shinkansen de ikimasu. Shichi-gatsu nijuu-go-nichi ni kaerimasu.",bengali:"আগামী সপ্তাহে বন্ধুর সঙ্গে কিয়োটো যাব। শিনকানসেনে যাব। ২৫ জুলাই ফিরব।"},
  grammarQuiz:[
    {question:"‘কিয়োটো যাই’—destination particle কোনটি?",options:["京都へ 行きます。","京都で 行きます。","京都と 行きます。","京都を 行きます。"],correctAnswer:"京都へ 行きます。",explanation:"Movement destination-এর পরে へ বসে এবং ‘e’ উচ্চারিত হয়।"},
    {question:"‘Train-এ Tokyo যাই’—সঠিকটি?",options:["電車で 東京へ 行きます。","電車へ 東京で 行きます。","電車と 東京を 行きます。","東京で 電車に 行きます。"],correctAnswer:"電車で 東京へ 行きます。",explanation:"Vehicle-এর পরে で এবং destination-এর পরে へ।"},
    {question:"‘বন্ধুর সঙ্গে’—কোনটি?",options:["友達と","友達で","友達へ","友達も"],correctAnswer:"友達と",explanation:"Companion-এর পরে と বসে।"},
    {question:"‘একা Tokyo যাই’—সঠিকটি?",options:["一人で 東京へ 行きます。","一人と 東京へ 行きます。","一人へ 東京で 行きます。","一人も 東京を 行きます。"],correctAnswer:"一人で 東京へ 行きます。",explanation:"একা বোঝাতে fixed expression 一人で।"},
    {question:"‘গতকাল কোথাও যাইনি’—কোনটি?",options:["昨日 どこへも 行きませんでした。","昨日 どこへも 行きました。","昨日 どこで 行きません。","昨日 どこかも 行きます。"],correctAnswer:"昨日 どこへも 行きませんでした。",explanation:"どこへも-এর সঙ্গে negative past verb লাগে।"},
    {question:"‘কখন Japan-এ এসেছেন?’—সঠিক প্রশ্ন?",options:["いつ 日本へ 来ましたか。","いつに 日本へ 来ましたか。","何時で 日本を 来ましたか。","どこ 日本へ 来ますか。"],correctAnswer:"いつ 日本へ 来ましたか。",explanation:"Broad time question いつ-এর পরে に বসে না।"},
    {question:"Exact date-এর সঠিক pattern কোনটি?",options:["7月25日に 来ました。","7月25日へ 来ました。","7月25日で 来ました。","7月25日と 来ました。"],correctAnswer:"7月25日に 来ました。",explanation:"নির্দিষ্ট calendar date-এর পরে に বসে।"},
    {question:"হেঁটে school যাই—কোনটি?",options:["歩いて 学校へ 行きます。","歩いてで 学校へ 行きます。","歩くと 学校で 行きます。","歩いて 学校を 行きます。"],correctAnswer:"歩いて 学校へ 行きます。",explanation:"歩いて নিজেই manner expression; অতিরিক্ত で লাগে না।"},
  ],
  dialogue:[
    {speaker:"サントス",japanese:"すみません。この電車は 甲子園へ 行きますか。",romaji:"Sumimasen. Kono densha wa Koushien e ikimasu ka.",bengali:"মাফ করবেন, এই train কি কোশিয়েন যায়?"},{speaker:"女の人",japanese:"はい、行きます。",romaji:"Hai, ikimasu.",bengali:"হ্যাঁ, যায়।"},{speaker:"サントス",japanese:"甲子園まで いくらですか。",romaji:"Koushien made ikura desu ka.",bengali:"কোশিয়েন পর্যন্ত ভাড়া কত?"},{speaker:"女の人",japanese:"350円です。",romaji:"Sanbyaku gojuu-en desu.",bengali:"৩৫০ yen।"},{speaker:"サントス",japanese:"ありがとうございます。",romaji:"Arigatou gozaimasu.",bengali:"ধন্যবাদ।"},{speaker:"女の人",japanese:"どういたしまして。",romaji:"Dou itashimashite.",bengali:"স্বাগতম।"},
  ],profiles:[],
  modules:[
    {step:"01",title:"Destination builder",instruction:"Time cue ও destination মিলিয়ে present/past movement sentence বলুন।",questions:[
      {prompt:"あした／京都／行きます",answer:"あした 京都へ 行きます。",romaji:"Ashita Kyouto e ikimasu.",bengali:"আগামীকাল কিয়োটো যাব।"},{prompt:"日曜日／大阪城／行きました",answer:"日曜日に 大阪城へ 行きました。",romaji:"Nichiyoubi ni Oosakajou e ikimashita.",bengali:"রবিবার ওসাকা দুর্গে গিয়েছিলাম।"},{prompt:"来月／国／帰ります",answer:"来月 国へ 帰ります。",romaji:"Raigetsu kuni e kaerimasu.",bengali:"আগামী মাসে দেশে ফিরব।"},{prompt:"去年／日本／来ました",answer:"去年 日本へ 来ました。",romaji:"Kyonen Nihon e kimashita.",bengali:"গত বছর জাপানে এসেছি।"},
    ]},
    {step:"02",title:"Transport drill",instruction:"Route-এর vehicle দেখে で অথবা 歩いて ব্যবহার করুন।",questions:[
      {prompt:"東京へ／新幹線",answer:"新幹線で 東京へ 行きます。",romaji:"Shinkansen de Toukyou e ikimasu.",bengali:"শিনকানসেনে টোকিও যাই।"},{prompt:"学校へ／バス",answer:"バスで 学校へ 行きます。",romaji:"Basu de gakkou e ikimasu.",bengali:"বাসে স্কুলে যাই।"},{prompt:"駅へ／自転車",answer:"自転車で 駅へ 行きます。",romaji:"Jitensha de eki e ikimasu.",bengali:"সাইকেলে স্টেশনে যাই।"},{prompt:"駅から うちへ／on foot",answer:"駅から うちへ 歩いて 帰ります。",romaji:"Eki kara uchi e aruite kaerimasu.",bengali:"স্টেশন থেকে বাড়ি হেঁটে ফিরি।"},
    ]},
    {step:"03",title:"Companion mission",instruction:"Person cue দেখে と, একা হলে 一人で ব্যবহার করুন।",questions:[
      {prompt:"家族／日本へ 来ました",answer:"家族と 日本へ 来ました。",romaji:"Kazoku to Nihon e kimashita.",bengali:"পরিবারের সঙ্গে জাপানে এসেছি।"},{prompt:"友達／デパートへ 行きます",answer:"友達と デパートへ 行きます。",romaji:"Tomodachi to depaato e ikimasu.",bengali:"বন্ধুর সঙ্গে ডিপার্টমেন্ট স্টোরে যাই।"},{prompt:"alone／東京へ 行きます",answer:"一人で 東京へ 行きます。",romaji:"Hitori de Toukyou e ikimasu.",bengali:"একা টোকিও যাই।"},{prompt:"কার সঙ্গে Kyoto গিয়েছিলেন?",answer:"だれと 京都へ 行きましたか。",romaji:"Dare to Kyouto e ikimashita ka.",bengali:"কার সঙ্গে কিয়োটো গিয়েছিলেন?"},
    ]},
    {step:"04",title:"Calendar & date",instruction:"いつ, month/date reading এবং に ব্যবহার করে question-answer সম্পূর্ণ করুন।",questions:[
      {prompt:"日本へ কখন এসেছেন? — 4月3日",answer:"いつ 日本へ 来ましたか。— 4月3日に 来ました。",romaji:"Itsu Nihon e kimashita ka. — Shi-gatsu mikka ni kimashita.",bengali:"কখন জাপানে এসেছেন? — ৩ এপ্রিল।"},{prompt:"জন্মদিন কবে? — 6月13日",answer:"誕生日は いつですか。— 6月13日です。",romaji:"Tanjoubi wa itsu desu ka. — Roku-gatsu juu-san-nichi desu.",bengali:"জন্মদিন কবে? — ১৩ জুন।"},{prompt:"Tokyo কবে যাবেন? — 来週",answer:"いつ 東京へ 行きますか。— 来週 行きます。",romaji:"Itsu Toukyou e ikimasu ka. — Raishuu ikimasu.",bengali:"কখন টোকিও যাবেন? — আগামী সপ্তাহে।"},{prompt:"কত তারিখে ফিরবেন? — 7月25日",answer:"何日に 帰りますか。— 7月25日に 帰ります。",romaji:"Nan-nichi ni kaerimasu ka. — Shichi-gatsu nijuu-go-nichi ni kaerimasu.",bengali:"কত তারিখে ফিরবেন? — ২৫ জুলাই।"},
    ]},
    {step:"05",title:"Travel story",instruction:"স্থান → activity → companion/transport cue এক sentence বা ছোট flow-তে বলুন।",questions:[
      {prompt:"アメリカ → airplane → alone",answer:"一人で 飛行機で アメリカへ 行きました。",romaji:"Hitori de hikouki de Amerika e ikimashita.",bengali:"একা বিমানে আমেরিকা গিয়েছিলাম।"},{prompt:"埼玉 → train → friend",answer:"友達と 電車で 埼玉へ 行きました。",romaji:"Tomodachi to densha de Saitama e ikimashita.",bengali:"বন্ধুর সঙ্গে ট্রেনে সাইতামা গিয়েছিলাম।"},{prompt:"学校 → bicycle → today",answer:"きょう 自転車で 学校へ 行きました。",romaji:"Kyou jitensha de gakkou e ikimashita.",bengali:"আজ সাইকেলে স্কুলে গিয়েছি।"},{prompt:"東京 → bus → tomorrow",answer:"あした バスで 東京へ 行きます。",romaji:"Ashita basu de Toukyou e ikimasu.",bengali:"আগামীকাল বাসে টোকিও যাব।"},
    ]},
    {step:"06",title:"Ticket-counter conversation",instruction:"甲子園 যাওয়ার dialogue-এর missing অংশ পূরণ করুন।",questions:[
      {prompt:"この電車は 甲子園へ ＿＿か。",answer:"この電車は 甲子園へ 行きますか。",romaji:"Kono densha wa Koushien e ikimasu ka.",bengali:"এই train কি কোশিয়েন যায়?"},{prompt:"甲子園＿＿ いくらですか。",answer:"甲子園まで いくらですか。",romaji:"Koushien made ikura desu ka.",bengali:"কোশিয়েন পর্যন্ত ভাড়া কত?"},{prompt:"Fare: 350 yen",answer:"350円です。",romaji:"Sanbyaku gojuu-en desu.",bengali:"৩৫০ yen।"},{prompt:"ありがとう ございました。— ＿＿。",answer:"どういたしまして。",romaji:"Dou itashimashite.",bengali:"স্বাগতম।"},
    ]},
    {step:"07",title:"Final mixed recall",instruction:"Bangla cue দেখে destination, vehicle, companion ও date একত্রে বলুন।",questions:[
      {prompt:"আগামীকাল বন্ধুর সঙ্গে bus-এ Kyoto যাব।",answer:"あした 友達と バスで 京都へ 行きます。",romaji:"Ashita tomodachi to basu de Kyouto e ikimasu.",bengali:"আগামীকাল বন্ধুর সঙ্গে বাসে কিয়োটো যাব।"},{prompt:"গত রবিবার পরিবারের সঙ্গে Tokyo গিয়েছিলাম।",answer:"先週の 日曜日に 家族と 東京へ 行きました。",romaji:"Senshuu no nichiyoubi ni kazoku to Toukyou e ikimashita.",bengali:"গত রবিবার পরিবারের সঙ্গে টোকিও গিয়েছিলাম।"},{prompt:"আজ সকালে কোথাও যাইনি।",answer:"けさ どこへも 行きませんでした。",romaji:"Kesa doko e mo ikimasen deshita.",bengali:"আজ সকালে কোথাও যাইনি।"},{prompt:"২৫ জুলাই plane-এ Japan এসেছি।",answer:"7月25日に 飛行機で 日本へ 来ました。",romaji:"Shichi-gatsu nijuu-go-nichi ni hikouki de Nihon e kimashita.",bengali:"২৫ জুলাই বিমানে জাপানে এসেছি।"},
    ]},
  ],
};

const unitSixPractice: UnitPracticeDetails = {
  heroImage:"/images/projects/n5-practice/unit-06-actions.png",
  heroAlt:"Osaka Castle-এর সামনে বন্ধুকে invitation দেওয়া এবং পাশে reading, shopping, photography, lunch, tennis ও homework-এর colorful Japanese textbook illustration",
  dialogueImage:"/images/projects/n5-practice/unit-06-actions.png",
  heroEyebrow:"UNIT 06 · ACTION & INVITATION PRACTICE",
  heroTitle:"কী করেন, কোথায় করেন—এবং একসঙ্গে করবেন?",
  heroDescription:"Object を, action-place で, 何を question, ませんか invitation ও ましょう suggestion ব্যবহার করে action থেকে conversation তৈরি করুন।",
  dialogueTitle:"いっしょに 行きませんか—Osaka Castle invitation",
  dialogueAlt:"Osaka Castle ও cherry blossom-এর সামনে দুই বন্ধু পরের দিনের outing নিয়ে কথা বলছেন",
  dialogueCaption:[{name:"ミラー",text:"আগামীকাল একসঙ্গে お花見 করার invitation দিচ্ছেন"},{name:"佐藤",text:"স্থান ও meeting time জেনে invitation গ্রহণ করছেন"},{name:"大阪城",text:"action-place ও outing-এর visual clue"}],
  modelLabel:"行動と誘い方",
  modelTitle:"ACTION → PLACE → INVITATION",
  challengeTitle:"আজকের action map",
  challengeDescription:"প্রথমে object ও action মিলিয়ে sentence বলুন; পরে place, time ও invitation যোগ করে mini conversation তৈরি করুন।",
  usefulWords:[
    {japanese:"何を",romaji:"nani o",bengali:"কী (action-এর object)"},{japanese:"どこで",romaji:"doko de",bengali:"কোথায় action হয়"},{japanese:"いっしょに",romaji:"issho ni",bengali:"একসঙ্গে"},{japanese:"ちょっと",romaji:"chotto",bengali:"একটু; নরমভাবে decline"},{japanese:"それから",romaji:"sorekara",bengali:"তারপর"},{japanese:"お花見",romaji:"ohanami",bengali:"চেরি ফুল দেখা"},
  ],
  answerPatterns:[
    {japanese:"Nを Vます。",romaji:"N o V-masu.",bengali:"N নিয়ে/কে action করি।",positive:true},
    {japanese:"Placeで Vます。",romaji:"Place de V-masu.",bengali:"কোনো স্থানে action করি।",positive:true},
    {japanese:"いっしょに Vませんか。",romaji:"Issho ni V-masen ka.",bengali:"একসঙ্গে করবেন?",positive:true},
    {japanese:"すみません、ちょっと…。",romaji:"Sumimasen, chotto...",bengali:"দুঃখিত, একটু অসুবিধা…।",positive:false},
  ],
  memoryPoints:[
    {symbol:"を",meaning:"direct object; লেখা wo, উচ্চারণ o"},{symbol:"で",meaning:"action যে place-এ ঘটে"},{symbol:"何",meaning:"何を＝なにを, 何ですか＝なんですか"},{symbol:"ませんか",meaning:"চাপ না দিয়ে polite invitation"},{symbol:"ましょう",meaning:"চলুন—positive suggestion"},{symbol:"か",meaning:"question বা শোনা তথ্য echo করে নিশ্চিত করা"},
  ],
  selfIntroduction:{japanese:"毎朝 新聞を 読みます。会社で 仕事を します。時々 友達と テニスを します。",romaji:"Maiasa shinbun o yomimasu. Kaisha de shigoto o shimasu. Tokidoki tomodachi to tenisu o shimasu.",bengali:"প্রতি সকালে সংবাদপত্র পড়ি। কোম্পানিতে কাজ করি। মাঝে মাঝে বন্ধুর সঙ্গে টেনিস খেলি।"},
  grammarQuiz:[
    {question:"‘জুস পান করি’—object particle কোনটি?",options:["ジュースを 飲みます。","ジュースで 飲みます。","ジュースへ 飲みます。","ジュースに 飲みます。"],correctAnswer:"ジュースを 飲みます。",explanation:"পান করার direct object ジュース-এর পরে を বসে।"},
    {question:"‘Station-এ সংবাদপত্র কিনি’—সঠিক sentence?",options:["駅で 新聞を 買います。","駅を 新聞で 買います。","駅へ 新聞に 買います。","駅に 新聞へ 買います。"],correctAnswer:"駅で 新聞を 買います。",explanation:"Action-place 駅-এর পরে で এবং object 新聞-এর পরে を।"},
    {question:"‘কী করবেন?’—何-এর reading কোনটি?",options:["何を しますか。（なにを）","何を しますか。（なんを）","何で しますを。","何かを です。"],correctAnswer:"何を しますか。（なにを）",explanation:"を-এর আগে 何 সাধারণত なに পড়া হয়।"},
    {question:"‘একসঙ্গে সিনেমা দেখবেন?’—নরম invitation কোনটি?",options:["いっしょに 映画を 見ませんか。","いっしょに 映画を 見ません。","映画で いっしょに ですか。","映画へ 見ましょうかを。"],correctAnswer:"いっしょに 映画を 見ませんか。",explanation:"Vませんか polite invitation তৈরি করে।"},
    {question:"Invitation গ্রহণ করে ‘চলুন যাই’ কীভাবে বলবেন?",options:["行きましょう。","行きません。","行きましたか。","行きです。"],correctAnswer:"行きましょう。",explanation:"ます বাদ দিয়ে ましょう বসালে positive suggestion হয়।"},
    {question:"‘বাড়িতে homework করি’—action-place particle?",options:["うちで 宿題を します。","うちへ 宿題で します。","うちを 宿題に します。","うちに 宿題へ します。"],correctAnswer:"うちで 宿題を します。",explanation:"Homework করার স্থান うち-এর পরে で।"},
    {question:"Invitation নরমভাবে decline করার স্বাভাবিক response?",options:["すみません、今日は ちょっと…。","いいえ、絶対 行きません。","何を しますか。","はい、ちがいます。"],correctAnswer:"すみません、今日は ちょっと…。",explanation:"ちょっと… কারণ পুরো না বলেও ভদ্রভাবে অসুবিধা বোঝায়।"},
    {question:"‘ও, Kyoto নাকি?’—শোনা তথ্য echo করে কোনটি?",options:["京都ですか。","京都を します。","京都ませんか。","京都で 何を。"],correctAnswer:"京都ですか。",explanation:"শোনা গুরুত্বপূর্ণ তথ্য পুনরাবৃত্তি করে か যোগ করলে confirmation/interest বোঝায়।"},
  ],
  dialogue:[
    {speaker:"ミラー",japanese:"佐藤さん。",romaji:"Satou-san.",bengali:"সাতো-সান।"},
    {speaker:"佐藤",japanese:"何ですか。",romaji:"Nan desu ka.",bengali:"কী ব্যাপার?"},
    {speaker:"ミラー",japanese:"あした 友達と お花見を します。佐藤さんも いっしょに 行きませんか。",romaji:"Ashita tomodachi to ohanami o shimasu. Satou-san mo issho ni ikimasen ka.",bengali:"আগামীকাল বন্ধুদের সঙ্গে চেরি ফুল দেখতে যাব। সাতো-সানও একসঙ্গে যাবেন?"},
    {speaker:"佐藤",japanese:"いいですね。どこへ 行きますか。",romaji:"Ii desu ne. Doko e ikimasu ka.",bengali:"বেশ ভালো। কোথায় যাবেন?"},
    {speaker:"ミラー",japanese:"大阪城です。",romaji:"Oosakajou desu.",bengali:"ওসাকা দুর্গে।"},
    {speaker:"佐藤",japanese:"何時に 行きますか。",romaji:"Nan-ji ni ikimasu ka.",bengali:"কয়টায় যাবেন?"},
    {speaker:"ミラー",japanese:"10時に 大阪駅で 会いましょう。",romaji:"Juu-ji ni Oosaka-eki de aimashou.",bengali:"১০টায় ওসাকা স্টেশনে দেখা করি চলুন।"},
    {speaker:"佐藤",japanese:"分かりました。",romaji:"Wakarimashita.",bengali:"বুঝেছি।"},
    {speaker:"ミラー",japanese:"じゃ、また あした。",romaji:"Ja, mata ashita.",bengali:"তাহলে, কাল আবার দেখা হবে।"},
  ],
  profiles:[],
  modules:[
    {step:"01",title:"Object + action builder",instruction:"ছবির বই, খাবার, পানীয় ও camera cue দেখে を সহ sentence তৈরি করুন।",questions:[
      {prompt:"新聞／読みます",answer:"新聞を 読みます。",romaji:"Shinbun o yomimasu.",bengali:"সংবাদপত্র পড়ি।"},{prompt:"パン／食べます",answer:"パンを 食べます。",romaji:"Pan o tabemasu.",bengali:"রুটি খাই।"},{prompt:"ジュース／飲みます",answer:"ジュースを 飲みます。",romaji:"Juusu o nomimasu.",bengali:"জুস পান করি।"},{prompt:"写真／撮ります",answer:"写真を 撮ります。",romaji:"Shashin o torimasu.",bengali:"ছবি তুলি।"},
    ]},
    {step:"02",title:"何を／何ですか",instruction:"何-এর reading ও action cue দেখে question-answer সম্পূর্ণ করুন।",questions:[
      {prompt:"毎朝 ＿＿ 食べますか。— パンと 卵を 食べます。",answer:"毎朝 何を 食べますか。— パンと 卵を 食べます。",romaji:"Maiasa nani o tabemasu ka. — Pan to tamago o tabemasu.",bengali:"প্রতি সকালে কী খান? — রুটি ও ডিম খাই।"},{prompt:"きのう ＿＿ しましたか。— サッカーを しました。",answer:"きのう 何を しましたか。— サッカーを しました。",romaji:"Kinou nani o shimashita ka. — Sakkaa o shimashita.",bengali:"গতকাল কী করেছিলেন? — ফুটবল খেলেছি।"},{prompt:"これは ＿＿。— 日本語の 本です。",answer:"これは 何ですか。— 日本語の 本です。",romaji:"Kore wa nan desu ka. — Nihongo no hon desu.",bengali:"এটি কী? — জাপানি ভাষার বই।"},{prompt:"何を 買いますか。— magazine",answer:"雑誌を 買います。",romaji:"Zasshi o kaimasu.",bengali:"ম্যাগাজিন কিনি।"},
    ]},
    {step:"03",title:"Where the action happens",instruction:"Place cue-এর পরে で এবং object-এর পরে を বসিয়ে পূর্ণ sentence বলুন।",questions:[
      {prompt:"駅／新聞／買います",answer:"駅で 新聞を 買います。",romaji:"Eki de shinbun o kaimasu.",bengali:"স্টেশনে সংবাদপত্র কিনি।"},{prompt:"食堂／昼ごはん／食べます",answer:"食堂で 昼ごはんを 食べます。",romaji:"Shokudou de hirugohan o tabemasu.",bengali:"ক্যান্টিনে দুপুরের খাবার খাই।"},{prompt:"大学／日本語／勉強します",answer:"大学で 日本語を 勉強します。",romaji:"Daigaku de Nihongo o benkyou shimasu.",bengali:"বিশ্ববিদ্যালয়ে জাপানি পড়ি।"},{prompt:"庭／テニス／します",answer:"庭で テニスを します。",romaji:"Niwa de tenisu o shimasu.",bengali:"বাগানে টেনিস খেলি।"},
    ]},
    {step:"04",title:"Picture sequence recall",instruction:"Time ও place cue মিলিয়ে ছবির action flow Japanese-এ বলুন।",questions:[
      {prompt:"毎朝 7時／コーヒー",answer:"毎朝 7時に コーヒーを 飲みます。",romaji:"Maiasa shichi-ji ni koohii o nomimasu.",bengali:"প্রতি সকাল ৭টায় কফি পান করি।"},{prompt:"昼／会社の食堂／ごはん",answer:"昼 会社の 食堂で ごはんを 食べます。",romaji:"Hiru kaisha no shokudou de gohan o tabemasu.",bengali:"দুপুরে কোম্পানির ক্যান্টিনে খাবার খাই।"},{prompt:"土曜日／図書館／本",answer:"土曜日 図書館で 本を 読みます。",romaji:"Doyoubi toshokan de hon o yomimasu.",bengali:"শনিবার লাইব্রেরিতে বই পড়ি।"},{prompt:"日曜日／友達／映画",answer:"日曜日 友達と 映画を 見ます。",romaji:"Nichiyoubi tomodachi to eiga o mimasu.",bengali:"রবিবার বন্ধুর সঙ্গে সিনেমা দেখি।"},
    ]},
    {step:"05",title:"Invitation & response",instruction:"Activity cue দিয়ে ませんか invitation দিন; accept বা soft decline response বলুন।",questions:[
      {prompt:"お花見／tomorrow／invite",answer:"あした いっしょに お花見を しませんか。",romaji:"Ashita issho ni ohanami o shimasen ka.",bengali:"আগামীকাল একসঙ্গে চেরি ফুল দেখবেন?"},{prompt:"テニス／Sunday／invite",answer:"日曜日 いっしょに テニスを しませんか。",romaji:"Nichiyoubi issho ni tenisu o shimasen ka.",bengali:"রবিবার একসঙ্গে টেনিস খেলবেন?"},{prompt:"Accept এবং lunch suggest করুন",answer:"ええ、いいですね。昼ごはんを 食べましょう。",romaji:"Ee, ii desu ne. Hirugohan o tabemashou.",bengali:"হ্যাঁ, বেশ ভালো। চলুন দুপুরের খাবার খাই।"},{prompt:"আজ সম্ভব নয়—soft decline",answer:"すみません、今日は ちょっと…。",romaji:"Sumimasen, kyou wa chotto...",bengali:"দুঃখিত, আজ একটু অসুবিধা…।"},
    ]},
    {step:"06",title:"Osaka Castle dialogue",instruction:"Conversation-এর missing expression বসিয়ে invitation থেকে meeting plan সম্পূর্ণ করুন।",questions:[
      {prompt:"佐藤さんも いっしょに ＿＿。",answer:"佐藤さんも いっしょに 行きませんか。",romaji:"Satou-san mo issho ni ikimasen ka.",bengali:"সাতো-সানও একসঙ্গে যাবেন?"},{prompt:"いいですね。＿＿ 行きますか。",answer:"いいですね。どこへ 行きますか。",romaji:"Ii desu ne. Doko e ikimasu ka.",bengali:"বেশ ভালো। কোথায় যাবেন?"},{prompt:"10時に 大阪駅で ＿＿。",answer:"10時に 大阪駅で 会いましょう。",romaji:"Juu-ji ni Oosaka-eki de aimashou.",bengali:"১০টায় ওসাকা স্টেশনে দেখা করি চলুন।"},{prompt:"Plan বুঝেছেন—response",answer:"分かりました。じゃ、また あした。",romaji:"Wakarimashita. Ja, mata ashita.",bengali:"বুঝেছি। তাহলে, কাল দেখা হবে।"},
    ]},
    {step:"07",title:"Final mixed self-test",instruction:"বাংলা cue দেখে time, place, object ও action একসঙ্গে Japanese-এ বলুন।",questions:[
      {prompt:"প্রতি সকালে বাড়িতে সংবাদপত্র পড়ি।",answer:"毎朝 うちで 新聞を 読みます。",romaji:"Maiasa uchi de shinbun o yomimasu.",bengali:"প্রতি সকালে বাড়িতে সংবাদপত্র পড়ি।"},{prompt:"গতকাল department store-এ camera কিনেছি।",answer:"きのう デパートで カメラを 買いました。",romaji:"Kinou depaato de kamera o kaimashita.",bengali:"গতকাল ডিপার্টমেন্ট স্টোরে ক্যামেরা কিনেছি।"},{prompt:"আগামীকাল বন্ধুর সঙ্গে কোথায় lunch খাবেন?",answer:"あした 友達と どこで 昼ごはんを 食べますか。",romaji:"Ashita tomodachi to doko de hirugohan o tabemasu ka.",bengali:"আগামীকাল বন্ধুর সঙ্গে কোথায় দুপুরের খাবার খাবেন?"},{prompt:"একসঙ্গে Osaka Castle-এ ছবি তুলবেন?",answer:"いっしょに 大阪城で 写真を 撮りませんか。",romaji:"Issho ni Oosakajou de shashin o torimasen ka.",bengali:"একসঙ্গে ওসাকা দুর্গে ছবি তুলবেন?"},
    ]},
  ],
};

const unitSevenPractice: UnitPracticeDetails = {
  heroImage:"/images/projects/n5-practice/unit-07-giving.png",
  heroAlt:"Japanese home visit-এ guest ও host greeting, gift দেওয়া, coffee নেওয়া এবং tool, email, lending ও already-not-yet practice-এর colorful illustration",
  dialogueImage:"/images/projects/n5-practice/unit-07-giving.png",
  heroEyebrow:"UNIT 07 · TOOLS, GIVING & HOME VISIT",
  heroTitle:"কী দিয়ে করেন—কাকে দেন, কার কাছ থেকে পান?",
  heroDescription:"Tool/language で, giver–receiver particle map, もう／まだ এবং Japanese home-visit etiquette মিলিয়ে sentence ও conversation practice করুন।",
  dialogueTitle:"いらっしゃい—Japanese বাড়িতে অতিথি আপ্যায়ন",
  dialogueAlt:"অতিথি দরজায় bow করছেন, host ভেতরে ডাকছেন, gift ও coffee দেওয়া হচ্ছে—রঙিন Japanese home-visit scene",
  dialogueCaption:[{name:"サントス",text:"বাড়িতে ঢোকার সময় 失礼します বলেন ও coffee গ্রহণ করেন"},{name:"山田一郎",text:"いらっしゃい বলে অতিথিকে ভেতরে ডাকেন"},{name:"山田友子",text:"coffee offer করেন এবং souvenir-এর গল্প বলেন"}],
  modelLabel:"道具・授受・訪問",
  modelTitle:"TOOL → GIVER/RECEIVER → POLITE VISIT",
  challengeTitle:"দেওয়া–পাওয়ার arrow map",
  challengeDescription:"প্রথমে tool で দিয়ে কাজ বলুন, তারপর あげます/もらいます-এ arrow-এর দিক দেখে に বা から বেছে নিন।",
  usefulWords:[
    {japanese:"何で",romaji:"nan de",bengali:"কী দিয়ে/কোন মাধ্যমে"},{japanese:"だれに",romaji:"dare ni",bengali:"কাকে/কার কাছে"},{japanese:"だれから",romaji:"dare kara",bengali:"কার কাছ থেকে"},{japanese:"もう",romaji:"mou",bengali:"ইতোমধ্যে"},{japanese:"まだ",romaji:"mada",bengali:"এখনো/এখনো নয়"},{japanese:"いかがですか",romaji:"ikaga desu ka",bengali:"কেমন হবে?—ভদ্র offer"},
  ],
  answerPatterns:[
    {japanese:"Nで Vます。",romaji:"N de V-masu.",bengali:"N দিয়ে/মাধ্যমে কাজ করি।",positive:true},
    {japanese:"Aは Bに Nを あげます。",romaji:"A wa B ni N o agemasu.",bengali:"A, B-কে N দেয়।",positive:true},
    {japanese:"Aは Bに／から Nを もらいます。",romaji:"A wa B ni/kara N o moraimasu.",bengali:"A, B-এর কাছ থেকে N পায়।",positive:true},
    {japanese:"いいえ、まだです。",romaji:"Iie, mada desu.",bengali:"না, এখনো নয়।",positive:false},
  ],
  memoryPoints:[
    {symbol:"で",meaning:"tool, means বা language"},{symbol:"に",meaning:"あげます-এর receiver; person source-ও হতে পারে"},{symbol:"から",meaning:"もらいます-এর source; organisation-এ বিশেষভাবে স্বাভাবিক"},{symbol:"を",meaning:"দেওয়া/পাওয়া বস্তু"},{symbol:"もう",meaning:"কাজ ইতোমধ্যে complete"},{symbol:"まだ",meaning:"কাজ এখনো complete হয়নি"},
  ],
  selfIntroduction:{japanese:"わたしは 母に 花を あげました。父から 時計を もらいました。もう お礼の メールを 送りました。",romaji:"Watashi wa haha ni hana o agemashita. Chichi kara tokei o moraimashita. Mou orei no meeru o okurimashita.",bengali:"আমি মাকে ফুল দিয়েছি। বাবার কাছ থেকে ঘড়ি পেয়েছি। ইতোমধ্যে ধন্যবাদ জানিয়ে ই-মেইল পাঠিয়েছি।"},
  grammarQuiz:[
    {question:"‘চপস্টিক দিয়ে ভাত খাই’—সঠিক sentence?",options:["箸で ごはんを 食べます。","箸に ごはんで 食べます。","箸を ごはんに 食べます。","箸から ごはんを 食べます。"],correctAnswer:"箸で ごはんを 食べます。",explanation:"কাজের tool 箸-এর পরে で বসে।"},
    {question:"‘Japanese-এ report লিখি’—language particle কোনটি?",options:["日本語で レポートを 書きます。","日本語に レポートで 書きます。","日本語を レポートに 書きます。","日本語から レポートを 書きます。"],correctAnswer:"日本語で レポートを 書きます。",explanation:"কাজের ভাষা বা মাধ্যমের পরে で।"},
    {question:"‘আমি Kimura-san-কে ফুল দিই’—সঠিক particle map?",options:["わたしは 木村さんに 花を あげます。","わたしに 木村さんは 花を あげます。","わたしは 木村さんから 花を あげます。","木村さんで わたしを 花に あげます。"],correctAnswer:"わたしは 木村さんに 花を あげます。",explanation:"あげます-এ receiver 木村さん-এর পরে に।"},
    {question:"‘বন্ধুর কাছ থেকে chocolate পেয়েছি’—কোনটি?",options:["友達に チョコレートを もらいました。","友達を チョコレートに あげました。","友達で チョコレートを もらいます。","友達は チョコレートから あげました。"],correctAnswer:"友達に チョコレートを もらいました。",explanation:"もらいます-এ person source-এর পরে に বা から বসতে পারে।"},
    {question:"Company থেকে souvenir পেয়েছি—source particle কোনটি বেশি স্বাভাবিক?",options:["会社から お土産を もらいました。","会社に お土産を あげました。","会社で お土産に もらいました。","会社を お土産から もらいました。"],correctAnswer:"会社から お土産を もらいました。",explanation:"Organisation source-এর সঙ্গে から বেশি স্বাভাবিক।"},
    {question:"‘ইতোমধ্যে mail পাঠিয়েছেন?’—সঠিক প্রশ্ন?",options:["もう メールを 送りましたか。","まだ メールを 送りますか。","もう メールに 送りません。","メールから もうですか。"],correctAnswer:"もう メールを 送りましたか。",explanation:"Completion জানতে もう + Vましたか ব্যবহার হয়।"},
    {question:"কাজ এখনো হয়নি—সংক্ষিপ্ত natural উত্তর?",options:["いいえ、まだです。","はい、もうです。","いいえ、あげます。","まだ でしたか。"],correctAnswer:"いいえ、まだです。",explanation:"Context পরিষ্কার থাকলে verb পুনরাবৃত্তি না করে まだです বলা যায়।"},
    {question:"বাড়িতে অতিথিকে coffee offer করার ভদ্র expression?",options:["コーヒーは いかがですか。","コーヒーを あげません。","コーヒーから 何ですか。","コーヒーで 失礼します。"],correctAnswer:"コーヒーは いかがですか。",explanation:"～は いかがですか ভদ্র offer।"},
  ],
  dialogue:[
    {speaker:"山田一郎",japanese:"はい。",romaji:"Hai.",bengali:"জি।"},
    {speaker:"サントス",japanese:"サントスです。",romaji:"Santosu desu.",bengali:"আমি সান্তোস।"},
    {speaker:"山田一郎",japanese:"いらっしゃい。どうぞ お上がりください。",romaji:"Irasshai. Douzo oagari kudasai.",bengali:"স্বাগতম। অনুগ্রহ করে ভেতরে আসুন।"},
    {speaker:"サントス",japanese:"失礼します。",romaji:"Shitsurei shimasu.",bengali:"অনুমতি নিচ্ছি।"},
    {speaker:"山田友子",japanese:"コーヒーは いかがですか。",romaji:"Koohii wa ikaga desu ka.",bengali:"কফি কেমন হবে?"},
    {speaker:"サントス",japanese:"ありがとうございます。",romaji:"Arigatou gozaimasu.",bengali:"ধন্যবাদ।"},
    {speaker:"山田友子",japanese:"どうぞ。",romaji:"Douzo.",bengali:"অনুগ্রহ করে নিন।"},
    {speaker:"サントス",japanese:"いただきます。この スプーン、すてきですね。",romaji:"Itadakimasu. Kono supuun, suteki desu ne.",bengali:"গ্রহণ করছি। এই চামচটি চমৎকার, তাই না!"},
    {speaker:"山田友子",japanese:"ええ。会社の 人に もらいました。",romaji:"Ee. Kaisha no hito ni moraimashita.",bengali:"হ্যাঁ। কোম্পানির একজনের কাছ থেকে পেয়েছি।"},
    {speaker:"山田一郎",japanese:"メキシコの お土産です。",romaji:"Mekishiko no omiyage desu.",bengali:"এটি মেক্সিকোর স্মারক উপহার।"},
  ],
  profiles:[],
  modules:[
    {step:"01",title:"Tool দিয়ে action",instruction:"Textbook picture cue-এর tool বেছে で এবং object を দিয়ে sentence তৈরি করুন।",questions:[
      {prompt:"はし／ごはん／食べます",answer:"箸で ごはんを 食べます。",romaji:"Hashi de gohan o tabemasu.",bengali:"চপস্টিক দিয়ে ভাত খাই।"},{prompt:"ナイフと フォーク／ごはん",answer:"ナイフと フォークで ごはんを 食べます。",romaji:"Naifu to fooku de gohan o tabemasu.",bengali:"ছুরি ও কাঁটাচামচ দিয়ে খাবার খাই।"},{prompt:"はさみ／紙／切ります",answer:"はさみで 紙を 切ります。",romaji:"Hasami de kami o kirimasu.",bengali:"কাঁচি দিয়ে কাগজ কাটি।"},{prompt:"ケータイ／写真／撮ります",answer:"ケータイで 写真を 撮ります。",romaji:"Keetai de shashin o torimasu.",bengali:"মোবাইল দিয়ে ছবি তুলি।"},
    ]},
    {step:"02",title:"Language conversion drill",instruction:"কোন ভাষায় লেখা/বলা হচ্ছে তা で দিয়ে বলুন এবং 何ですか question বানান।",questions:[
      {prompt:"日本語／レポート／書きます",answer:"日本語で レポートを 書きます。",romaji:"Nihongo de repooto o kakimasu.",bengali:"জাপানিতে রিপোর্ট লিখি।"},{prompt:"『ありがとう』／英語／何ですか",answer:"『ありがとう』は 英語で 何ですか。",romaji:"Arigatou wa eigo de nan desu ka.",bengali:"‘আরিগাতো’ ইংরেজিতে কী?"},{prompt:"『Thank you』／日本語",answer:"『Thank you』は 日本語で 『ありがとう』です。",romaji:"Thank you wa nihongo de arigatou desu.",bengali:"‘Thank you’ জাপানিতে ‘আরিগাতো’।"},{prompt:"『Gracias』／スペイン語／ありがとう",answer:"『Gracias』は スペイン語で 『ありがとう』です。",romaji:"Gracias wa supeingo de arigatou desu.",bengali:"‘Gracias’ স্প্যানিশে ‘ধন্যবাদ’।"},
    ]},
    {step:"03",title:"あげます—giver থেকে receiver",instruction:"Arrow A → B ধরে receiver-এর পরে に এবং gift-এর পরে を বসান।",questions:[
      {prompt:"わたし → 木村さん／花",answer:"わたしは 木村さんに 花を あげます。",romaji:"Watashi wa Kimura-san ni hana o agemasu.",bengali:"আমি কিমুরা-সানকে ফুল দিই।"},{prompt:"わたし → 友達／チョコレート",answer:"わたしは 友達に チョコレートを あげます。",romaji:"Watashi wa tomodachi ni chokoreeto o agemasu.",bengali:"আমি বন্ধুকে chocolate দিই।"},{prompt:"カリナさん → ワットさん／本",answer:"カリナさんは ワットさんに 本を あげました。",romaji:"Karina-san wa Watto-san ni hon o agemashita.",bengali:"কারিনা-সান ওয়াট-সানকে বই দিয়েছেন।"},{prompt:"サントスさん → 父／シャツ",answer:"サントスさんは 父に シャツを あげました。",romaji:"Santosu-san wa chichi ni shatsu o agemashita.",bengali:"সান্তোস-সান তার বাবাকে শার্ট দিয়েছেন।"},
    ]},
    {step:"04",title:"もらいます—receiver-এর viewpoint",instruction:"Arrow B → A দেখে source-এর পরে に／から এবং received item-এর পরে を বসান।",questions:[
      {prompt:"わたし ← ワットさん／本",answer:"わたしは ワットさんに 本を もらいました。",romaji:"Watashi wa Watto-san ni hon o moraimashita.",bengali:"আমি ওয়াট-সানের কাছ থেকে বই পেয়েছি।"},{prompt:"わたし ← 会社の人／スプーン",answer:"わたしは 会社の 人に スプーンを もらいました。",romaji:"Watashi wa kaisha no hito ni supuun o moraimashita.",bengali:"আমি কোম্পানির একজনের কাছ থেকে চামচ পেয়েছি।"},{prompt:"山田さん ← 銀行／カレンダー",answer:"山田さんは 銀行から カレンダーを もらいました。",romaji:"Yamada-san wa ginkou kara karendaa o moraimashita.",bengali:"ইয়ামাদা-সান ব্যাংক থেকে calendar পেয়েছেন।"},{prompt:"母 ← わたし／花",answer:"母は わたしに 花を もらいました。",romaji:"Haha wa watashi ni hana o moraimashita.",bengali:"মা আমার কাছ থেকে ফুল পেয়েছেন।"},
    ]},
    {step:"05",title:"Borrow, lend, teach ও learn",instruction:"একই に/から source–receiver map দিয়ে textbook-এর action pairগুলো সম্পূর্ণ করুন।",questions:[
      {prompt:"わたし／山田さん／手紙を 書きます → teaching",answer:"わたしは 山田さんに 手紙の 書き方を 教えます。",romaji:"Watashi wa Yamada-san ni tegami no kakikata o oshiemasu.",bengali:"আমি ইয়ামাদা-সানকে চিঠি লেখার পদ্ধতি শেখাই।"},{prompt:"わたし ← 先生／英語",answer:"わたしは 先生に 英語を 習いました。",romaji:"Watashi wa sensei ni eigo o naraimashita.",bengali:"আমি শিক্ষকের কাছে ইংরেজি শিখেছি।"},{prompt:"わたし → 友達／レポート",answer:"わたしは 友達に レポートを 貸しました。",romaji:"Watashi wa tomodachi ni repooto o kashimashita.",bengali:"আমি বন্ধুকে রিপোর্ট ধার দিয়েছি।"},{prompt:"わたし ← 友達／CD",answer:"わたしは 友達に CDを 借りました。",romaji:"Watashi wa tomodachi ni shiidii o karimashita.",bengali:"আমি বন্ধুর কাছ থেকে CD ধার নিয়েছি।"},
    ]},
    {step:"06",title:"もう／まだ completion check",instruction:"কাজটি হয়েছে কি না দেখে もう Vましたか এবং দুই ধরনের উত্তর practice করুন।",questions:[
      {prompt:"昼ごはん／completed",answer:"もう 昼ごはんを 食べましたか。— はい、もう 食べました。",romaji:"Mou hirugohan o tabemashita ka. — Hai, mou tabemashita.",bengali:"দুপুরের খাবার খেয়েছেন? — হ্যাঁ, ইতোমধ্যে খেয়েছি।"},{prompt:"クリスマスカード／not yet",answer:"もう クリスマスカードを 書きましたか。— いいえ、まだです。",romaji:"Mou kurisumasu kaado o kakimashita ka. — Iie, mada desu.",bengali:"বড়দিনের card লিখেছেন? — না, এখনো নয়।"},{prompt:"荷物／sent",answer:"もう 荷物を 送りましたか。— はい、送りました。",romaji:"Mou nimotsu o okurimashita ka. — Hai, okurimashita.",bengali:"পার্সেল পাঠিয়েছেন? — হ্যাঁ, পাঠিয়েছি।"},{prompt:"宿題／not yet",answer:"もう 宿題を しましたか。— いいえ、まだです。",romaji:"Mou shukudai o shimashita ka. — Iie, mada desu.",bengali:"বাড়ির কাজ করেছেন? — না, এখনো নয়।"},
    ]},
    {step:"07",title:"Home-visit conversation & final review",instruction:"Dialogue etiquette ও mixed Bengali cue থেকে সম্পূর্ণ Japanese response তৈরি করুন।",questions:[
      {prompt:"Host: どうぞ お上がりください。— Guest কী বলবেন?",answer:"失礼します。",romaji:"Shitsurei shimasu.",bengali:"অনুমতি নিচ্ছি।"},{prompt:"コーヒーは いかがですか。— গ্রহণ করুন",answer:"ありがとうございます。いただきます。",romaji:"Arigatou gozaimasu. Itadakimasu.",bengali:"ধন্যবাদ। গ্রহণ করছি।"},{prompt:"এই spoon সুন্দর—কোথা থেকে পেয়েছেন?",answer:"この スプーン、すてきですね。だれに もらいましたか。",romaji:"Kono supuun, suteki desu ne. Dare ni moraimashita ka.",bengali:"এই চামচটি চমৎকার। কার কাছ থেকে পেয়েছেন?"},{prompt:"গতকাল library গিয়ে Tarou-কে বই ধার দিয়েছি।",answer:"きのう 図書館へ 行きました。太郎ちゃんに 本を 貸しました。",romaji:"Kinou toshokan e ikimashita. Tarou-chan ni hon o kashimashita.",bengali:"গতকাল লাইব্রেরিতে গিয়েছি। তারোকে বই ধার দিয়েছি।"},
    ]},
  ],
};

const unitEightPractice: UnitPracticeDetails = {
  heroImage:"/images/projects/n5-practice/unit-08-adjectives.png",
  heroAlt:"Japanese বাড়িতে অতিথি, coffee offer, ফুল, বড় ঘর, পুরোনো cabinet ও Fuji view দিয়ে adjective বোঝানোর রঙিন illustration",
  dialogueImage:"/images/projects/n5-practice/unit-08-adjectives.png",
  heroEyebrow:"UNIT 08 · ADJECTIVE PRACTICE",
  heroTitle:"কেমন মানুষ, জায়গা ও জিনিস—সহজে বর্ণনা করুন",
  heroDescription:"い-adjective ও な-adjective-এর positive/negative form, noun modification, が, とても／あまり, どう／どんな—ছবি ও dialogue দিয়ে practice করুন।",
  dialogueTitle:"そろそろ 失礼します—অতিথি বিদায়ের polite flow",
  dialogueAlt:"Japanese couple অতিথিদের coffee দিচ্ছেন; অতিথিরা বিদায় নেওয়ার আগে ঘর, কাজ ও জীবন নিয়ে কথা বলছেন",
  dialogueCaption:[{name:"山田",text:"Japan-এর জীবন ও কাজ কেমন জিজ্ঞেস করছেন"},{name:"マリア",text:"毎日とても楽しいです বলে অনুভূতি জানাচ্ছেন"},{name:"サントス",text:"忙しいですが、おもしろいです বলে contrast করছেন"}],
  modelLabel:"形容詞・会話・読解",
  modelTitle:"DESCRIPTION → CONTRAST → CONVERSATION",
  challengeTitle:"Adjective form map",
  challengeDescription:"শব্দটি い-adjective না な-adjective চিহ্নিত করুন; তারপর affirmative, negative ও noun-এর আগের সঠিক form বেছে নিন।",
  usefulWords:[
    {japanese:"どう",romaji:"dou",bengali:"কেমন"},{japanese:"どんな N",romaji:"donna N",bengali:"কেমন ধরনের N"},{japanese:"とても",romaji:"totemo",bengali:"খুব"},{japanese:"あまり",romaji:"amari",bengali:"খুব একটা—negative-এর সঙ্গে"},{japanese:"そして",romaji:"soshite",bengali:"এবং/তারপর"},{japanese:"～が、～",romaji:"~ ga, ~",bengali:"～, কিন্তু ～"},
  ],
  answerPatterns:[
    {japanese:"Nは い-adjです。",romaji:"N wa i-adj desu.",bengali:"N ～/গুণটি আছে।",positive:true},
    {japanese:"Nは な-adjです。",romaji:"N wa na-adj desu.",bengali:"N ～/গুণটি আছে।",positive:true},
    {japanese:"い-adjくないです。",romaji:"i-adj-ku nai desu.",bengali:"～ নয়।",positive:false},
    {japanese:"な-adjじゃありません。",romaji:"na-adj ja arimasen.",bengali:"～ নয়।",positive:false},
  ],
  memoryPoints:[
    {symbol:"い",meaning:"noun-এর আগে সরাসরি: 高い 山"},{symbol:"な",meaning:"な-adjective + noun: きれいな 町"},{symbol:"くない",meaning:"い-adjective negative ending"},{symbol:"じゃありません",meaning:"な-adjective polite negative"},{symbol:"が",meaning:"দুই বিপরীত তথ্য—কিন্তু"},{symbol:"あまり",meaning:"সবসময় negative predicate-এর সঙ্গে"},
  ],
  selfIntroduction:{japanese:"わたしの 町は 大きくないですが、きれいです。古い お寺と 有名な 公園が あります。",romaji:"Watashi no machi wa ookiku nai desu ga, kirei desu. Furui otera to yuumei na kouen ga arimasu.",bengali:"আমার শহর বড় নয়, কিন্তু সুন্দর। এখানে পুরোনো মন্দির ও বিখ্যাত পার্ক আছে।"},
  grammarQuiz:[
    {question:"‘Nara সুন্দর’—সঠিক sentence কোনটি?",options:["奈良は きれいです。","奈良は きれいなです。","奈良は きれくです。","奈良は きれいくないです。"],correctAnswer:"奈良は きれいです。",explanation:"きれい একটি な-adjective; sentence শেষে な লাগে না।"},
    {question:"‘সুন্দর শহর’—কোনটি ঠিক?",options:["きれいな 町","きれい 町","きれいの 町","きれいく 町"],correctAnswer:"きれいな 町",explanation:"な-adjective noun-এর আগে এলে な যোগ হয়।"},
    {question:"高い-এর polite negative কোনটি?",options:["高くないです。","高いじゃありません。","高くありませんです。","高いないです。"],correctAnswer:"高くないです。",explanation:"い বাদ দিয়ে くないです হয়।"},
    {question:"にぎやか-এর polite negative কোনটি?",options:["にぎやかじゃありません。","にぎやかくないです。","にぎやかなありません。","にぎやかないです。"],correctAnswer:"にぎやかじゃありません。",explanation:"な-adjective negative: じゃありません।"},
    {question:"‘খুব ঠান্ডা’—সঠিকটি?",options:["とても 寒いです。","あまり 寒いです。","とても 寒くないですか。","寒い とてもです。"],correctAnswer:"とても 寒いです。",explanation:"とても positive adjective-কে জোরালো করে।"},
    {question:"‘খুব একটা ঠান্ডা নয়’—সঠিকটি?",options:["あまり 寒くないです。","あまり 寒いです。","とても 寒くです。","寒いじゃありません。"],correctAnswer:"あまり 寒くないです。",explanation:"あまり-এর পরে negative predicate লাগে।"},
    {question:"‘পুরোনো কিন্তু সুবিধাজনক’—কোনটি?",options:["古いですが、便利です。","古いそして 便利です。","古いな 便利です。","古くないが 便利なです。"],correctAnswer:"古いですが、便利です。",explanation:"Contrast করতে প্রথম clause-এর শেষে が বসে।"},
    {question:"‘কেমন শহর?’—সঠিক question?",options:["どんな 町ですか。","町は どうなですか。","何の 町がですか。","どこな 町ですか。"],correctAnswer:"どんな 町ですか。",explanation:"Noun-এর ধরন জানতে どんな + noun ব্যবহার হয়।"},
  ],
  dialogue:[
    {speaker:"山田",japanese:"マリアさん、日本の 生活は どうですか。",romaji:"Maria-san, Nihon no seikatsu wa dou desu ka.",bengali:"মারিয়া-সান, জাপানের জীবন কেমন?"},
    {speaker:"マリア",japanese:"毎日 とても 楽しいです。",romaji:"Mainichi totemo tanoshii desu.",bengali:"প্রতিদিন খুব আনন্দের।"},
    {speaker:"山田",japanese:"サントスさん、お仕事は どうですか。",romaji:"Santosu-san, oshigoto wa dou desu ka.",bengali:"সান্তোস-সান, কাজ কেমন?"},
    {speaker:"サントス",japanese:"忙しいですが、おもしろいです。",romaji:"Isogashii desu ga, omoshiroi desu.",bengali:"ব্যস্ত, কিন্তু মজার।"},
    {speaker:"山田友子",japanese:"コーヒー、もう 一杯 いかがですか。",romaji:"Koohii, mou ippai ikaga desu ka.",bengali:"আর এক কাপ coffee কেমন হবে?"},
    {speaker:"マリア",japanese:"いいえ、けっこうです。",romaji:"Iie, kekkou desu.",bengali:"না, ধন্যবাদ—যথেষ্ট হয়েছে।"},
    {speaker:"マリア",japanese:"あ、もう 6時ですね。そろそろ 失礼します。",romaji:"A, mou roku-ji desu ne. Sorosoro shitsurei shimasu.",bengali:"ওহ, ইতোমধ্যে ৬টা। এবার উঠি।"},
    {speaker:"サントス",japanese:"きょうは どうも ありがとうございました。",romaji:"Kyou wa doumo arigatou gozaimashita.",bengali:"আজকের জন্য অনেক ধন্যবাদ।"},
    {speaker:"山田友子",japanese:"いいえ。また いらっしゃって ください。",romaji:"Iie. Mata irasshatte kudasai.",bengali:"কিছু নয়। আবার আসবেন।"},
  ],
  profiles:[],
  modules:[
    {step:"01",title:"文型 warm-up",instruction:"Textbook-এর চারটি model pattern দেখে adjective predicate ও noun modifier তৈরি করুন।",questions:[
      {prompt:"奈良／きれい",answer:"奈良は きれいです。",romaji:"Nara wa kirei desu.",bengali:"নারা সুন্দর।"},{prompt:"富士山／高い",answer:"富士山は 高いです。",romaji:"Fujisan wa takai desu.",bengali:"ফুজি পর্বত উঁচু।"},{prompt:"桜／きれい／花",answer:"桜は きれいな 花です。",romaji:"Sakura wa kirei na hana desu.",bengali:"সাকুরা সুন্দর ফুল।"},{prompt:"富士山／高い／山",answer:"富士山は 高い 山です。",romaji:"Fujisan wa takai yama desu.",bengali:"ফুজি একটি উঁচু পাহাড়।"},
    ]},
    {step:"02",title:"練習A · Form laboratory",instruction:"な-adjective ও い-adjective-এর affirmative, negative এবং noun-এর আগের form বদলান।",questions:[
      {prompt:"きれい → negative",answer:"きれいじゃありません。",romaji:"Kirei ja arimasen.",bengali:"সুন্দর নয়।"},{prompt:"高い → negative",answer:"高くないです。",romaji:"Takaku nai desu.",bengali:"উঁচু/দামি নয়।"},{prompt:"いい → negative",answer:"よくないです。",romaji:"Yoku nai desu.",bengali:"ভালো নয়।"},{prompt:"奈良／静か／町",answer:"奈良は 静かな 町です。",romaji:"Nara wa shizuka na machi desu.",bengali:"নারা একটি শান্ত শহর।"},
    ]},
    {step:"03",title:"練習B · Picture descriptions",instruction:"ছবি-কল্পনার cue দেখে adjective sentence বলুন; দরকার হলে じゃありません বা くないです ব্যবহার করুন।",questions:[
      {prompt:"イーさん／元気",answer:"イーさんは 元気です。",romaji:"Ii-san wa genki desu.",bengali:"ই-সান প্রাণবন্ত/সুস্থ।"},{prompt:"ワットさん／ハンサム",answer:"ワットさんは ハンサムです。",romaji:"Watto-san wa hansamu desu.",bengali:"ওয়াট-সান সুদর্শন।"},{prompt:"山田さん／元気／negative",answer:"山田さんは 元気じゃありません。",romaji:"Yamada-san wa genki ja arimasen.",bengali:"ইয়ামাদা-সান সুস্থ/প্রাণবন্ত নন।"},{prompt:"この 自転車／新しい",answer:"この 自転車は 新しいです。",romaji:"Kono jitensha wa atarashii desu.",bengali:"এই সাইকেলটি নতুন।"},
    ]},
    {step:"04",title:"とても・あまり・が",instruction:"Degree ও contrast cue বসিয়ে natural দুই-clause answer তৈরি করুন।",questions:[
      {prompt:"北京／今／寒い／very",answer:"北京は 今 とても 寒いです。",romaji:"Pekin wa ima totemo samui desu.",bengali:"বেইজিং এখন খুব ঠান্ডা।"},{prompt:"上海／寒い／not very",answer:"上海は あまり 寒くないです。",romaji:"Shanhai wa amari samuku nai desu.",bengali:"সাংহাই খুব একটা ঠান্ডা নয়।"},{prompt:"大学の 寮／古い + 便利",answer:"大学の 寮は 古いですが、便利です。",romaji:"Daigaku no ryou wa furui desu ga, benri desu.",bengali:"বিশ্ববিদ্যালয়ের dorm পুরোনো, কিন্তু সুবিধাজনক।"},{prompt:"日本の 食べ物／おいしい + 高い",answer:"日本の 食べ物は おいしいですが、高いです。",romaji:"Nihon no tabemono wa oishii desu ga, takai desu.",bengali:"জাপানি খাবার সুস্বাদু, কিন্তু দামি।"},
    ]},
    {step:"05",title:"どう・どんな question drill",instruction:"সামগ্রিক অবস্থা জানতে どう, noun-এর ধরন জানতে どんな ব্যবহার করুন।",questions:[
      {prompt:"日本の 生活／কেমন?",answer:"日本の 生活は どうですか。",romaji:"Nihon no seikatsu wa dou desu ka.",bengali:"জাপানের জীবন কেমন?"},{prompt:"松本さんの うち／কেমন ধরনের বাড়ি?",answer:"松本さんの うちは どんな うちですか。",romaji:"Matsumoto-san no uchi wa donna uchi desu ka.",bengali:"মাতসুমোতো-সানের বাড়ি কেমন ধরনের?"},{prompt:"Answer: সুন্দর এবং বড় বাড়ি",answer:"きれいな うちです。そして、大きい うちです。",romaji:"Kirei na uchi desu. Soshite, ookii uchi desu.",bengali:"সুন্দর বাড়ি। আর বড়ও।"},{prompt:"奈良／শান্ত শহর",answer:"奈良は どんな 町ですか。— 静かな 町です。",romaji:"Nara wa donna machi desu ka. — Shizuka na machi desu.",bengali:"নারা কেমন শহর? — শান্ত শহর।"},
    ]},
    {step:"06",title:"練習C · Conversation completion",instruction:"Situation cue থেকে short dialogue-এর missing reply বলুন।",questions:[
      {prompt:"A: お元気ですか。 B: ＿＿。",answer:"はい、元気です。",romaji:"Hai, genki desu.",bengali:"হ্যাঁ, ভালো আছি।"},{prompt:"A: お仕事は どうですか。 B: busy but interesting",answer:"忙しいですが、おもしろいです。",romaji:"Isogashii desu ga, omoshiroi desu.",bengali:"ব্যস্ত, কিন্তু মজার।"},{prompt:"A: その かばんを 見せて ください。 B: これですか。 A: not this, red one",answer:"いいえ、その 赤い かばんです。",romaji:"Iie, sono akai kaban desu.",bengali:"না, ওই লাল ব্যাগটি।"},{prompt:"A: 金閣寺は どんな 所ですか。 B: beautiful place",answer:"きれいな 所ですよ。写真を 見ますか。",romaji:"Kirei na tokoro desu yo. Shashin o mimasu ka.",bengali:"সুন্দর জায়গা। ছবি দেখবেন?"},
    ]},
    {step:"07",title:"会話 · そろそろ失礼します",instruction:"Home-visit conversation-এর polite order ও adjective reply সম্পূর্ণ করুন।",questions:[
      {prompt:"日本の 生活は どうですか。",answer:"毎日 とても 楽しいです。",romaji:"Mainichi totemo tanoshii desu.",bengali:"প্রতিদিন খুব আনন্দের।"},{prompt:"コーヒー、もう 一杯 いかがですか。— decline politely",answer:"いいえ、けっこうです。",romaji:"Iie, kekkou desu.",bengali:"না, ধন্যবাদ—যথেষ্ট।"},{prompt:"সময় 6টা; বিদায় শুরু করুন",answer:"もう 6時ですね。そろそろ 失礼します。",romaji:"Mou roku-ji desu ne. Sorosoro shitsurei shimasu.",bengali:"ইতোমধ্যে ৬টা। এবার উঠি।"},{prompt:"Host: また ＿＿ ください。",answer:"また いらっしゃって ください。",romaji:"Mata irasshatte kudasai.",bengali:"আবার আসবেন।"},
    ]},
    {step:"08",title:"問題 · Reading & self-test",instruction:"Watto先生-এর paragraph পড়ে adjective ও factual answer দিন।",questions:[
      {prompt:"ワットさんは どんな 先生ですか。",hint:"さくら大学・英語",answer:"さくら大学の 英語の 先生です。",romaji:"Sakura Daigaku no eigo no sensei desu.",bengali:"তিনি সাকুরা বিশ্ববিদ্যালয়ের ইংরেজির শিক্ষক।"},{prompt:"さくら大学は どんな 大学ですか。",answer:"大きい 大学です。",romaji:"Ookii daigaku desu.",bengali:"এটি বড় বিশ্ববিদ্যালয়।"},{prompt:"食堂は 12時から 1時まで どうですか。",answer:"とても にぎやかです。",romaji:"Totemo nigiyaka desu.",bengali:"খুব জমজমাট।"},{prompt:"大学の 仕事は どうですか。",answer:"忙しいですが、楽しいです。",romaji:"Isogashii desu ga, tanoshii desu.",bengali:"ব্যস্ত, কিন্তু আনন্দের।"},
    ]},
  ],
};

export function getMinnaN5PracticeDetails(unitNumber: number) {
  if (unitNumber === 1) return unitOnePractice;
  if (unitNumber === 2) return unitTwoPractice;
  if (unitNumber === 3) return unitThreePractice;
  if (unitNumber === 4) return unitFourPractice;
  if (unitNumber === 5) return unitFivePractice;
  if (unitNumber === 6) return unitSixPractice;
  if (unitNumber === 7) return unitSevenPractice;
  if (unitNumber === 8) return unitEightPractice;
  return undefined;
}
