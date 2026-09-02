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

const unitNinePractice: UnitPracticeDetails = {
  heroImage: "/images/projects/n5-practice/unit-09-likes-invitation.png",
  heroAlt: "ক্লাসিক্যাল কনসার্টে আমন্ত্রণ, ফোনে কথা এবং ক্যালেন্ডার দেখে ভদ্রভাবে উত্তর দেওয়ার রঙিন illustration",
  dialogueImage: "/images/projects/n5-practice/unit-09-likes-invitation.png",
  heroEyebrow: "UNIT 09 · 好き・上手・分かります・から",
  heroTitle: "পছন্দ, দক্ষতা, বোঝাপড়া ও কারণ বলা",
  heroDescription: "「が」দিয়ে পছন্দ ও দক্ষতা বলুন, degree adverb দিয়ে পরিমাণ বোঝান, তারপর 「から」দিয়ে নিজের উত্তরের কারণ দিন।",
  dialogueTitle: "残念ですが · কনসার্টের আমন্ত্রণ",
  dialogueAlt: "মিলার কিমুরাকে কনসার্টে আমন্ত্রণ করছেন এবং কিমুরা ক্যালেন্ডার দেখে উত্তর দিচ্ছেন",
  dialogueCaption: [
    { name: "ミラー", text: "クラシックの コンサート、いっしょに いかがですか。" },
    { name: "木村", text: "残念ですが、友達と 約束が ありますから…。" },
  ],
  modelLabel: "文型モデル",
  modelTitle: "N が 好きです／上手です／分かります + reason から result",
  challengeTitle: "নিজের পছন্দ ও ব্যস্ততার কারণ বলুন",
  challengeDescription: "好きなもの, 分かる言語 এবং একটি invitation-এ যেতে পারা বা না-পারার কারণ মিলিয়ে তিনটি sentence বলুন।",
  usefulWords: [
    { japanese: "どんな", romaji: "donna", bengali: "কেমন ধরনের" },
    { japanese: "よく", romaji: "yoku", bengali: "ভালোভাবে / প্রায়ই" },
    { japanese: "少し", romaji: "sukoshi", bengali: "অল্প" },
    { japanese: "あまり", romaji: "amari", bengali: "খুব একটা—negative-এর সঙ্গে" },
    { japanese: "全然", romaji: "zenzen", bengali: "একদমই—negative-এর সঙ্গে" },
    { japanese: "どうして", romaji: "doushite", bengali: "কেন" },
  ],
  answerPatterns: [
    { japanese: "はい、好きです。", romaji: "Hai, suki desu.", bengali: "হ্যাঁ, পছন্দ করি।", positive: true },
    { japanese: "いいえ、好きじゃありません。", romaji: "Iie, suki ja arimasen.", bengali: "না, পছন্দ করি না।", positive: false },
    { japanese: "はい、よく 分かります。", romaji: "Hai, yoku wakarimasu.", bengali: "হ্যাঁ, ভালোভাবে বুঝি।", positive: true },
    { japanese: "いいえ、全然 分かりません。", romaji: "Iie, zenzen wakarimasen.", bengali: "না, একদমই বুঝি না।", positive: false },
  ],
  memoryPoints: [
    { symbol: "が", meaning: "好き・上手・分かります・あります-এর target চিহ্নিত করে" },
    { symbol: "どんな", meaning: "কেমন ধরনের—এর পরে noun বসে" },
    { symbol: "よく／少し", meaning: "positive predicate-এর degree দেখায়" },
    { symbol: "あまり／全然", meaning: "সাধারণত negative predicate-এর সঙ্গে ব্যবহৃত হয়" },
    { symbol: "から", meaning: "আগের clause-টিকে কারণ বানায়" },
    { symbol: "どうして", meaning: "কারণ জানতে ‘কেন?’ প্রশ্ন করে" },
  ],
  selfIntroduction: {
    japanese: "わたしは 音楽が 好きです。日本語が 少し 分かります。毎日 練習しますから、勉強が 楽しいです。",
    romaji: "Watashi wa ongaku ga suki desu. Nihongo ga sukoshi wakarimasu. Mainichi renshuu shimasu kara, benkyou ga tanoshii desu.",
    bengali: "আমি সংগীত পছন্দ করি। জাপানি অল্প বুঝি। প্রতিদিন অনুশীলন করি বলে পড়াশোনা আনন্দের।",
  },
  grammarQuiz: [
    { question: "‘আমি ইতালিয়ান খাবার পছন্দ করি’—সঠিক particle কোনটি?", options: ["イタリア料理が 好きです。", "イタリア料理を 好きです。", "イタリア料理に 好きです。", "イタリア料理で 好きです。"], correctAnswer: "イタリア料理が 好きです。", explanation: "好きです-এর পছন্দের বস্তু が দিয়ে চিহ্নিত হয়।" },
    { question: "‘পছন্দ করি না’—সঠিক polite form কোনটি?", options: ["好きじゃありません。", "好きくないです。", "好きをありません。", "好きません。"], correctAnswer: "好きじゃありません。", explanation: "好き একটি な-adjective; এর negative হলো 好きじゃありません।" },
    { question: "‘জাপানি অল্প বুঝি’—সঠিক sentence?", options: ["日本語が 少し 分かります。", "日本語を 少し 分かります。", "日本語が 全然 分かります。", "日本語は 少し 好きます。"], correctAnswer: "日本語が 少し 分かります。", explanation: "分かります-এর target が এবং positive অল্প পরিমাণে 少し ব্যবহৃত হয়।" },
    { question: "‘একদম বুঝি না’—কোন adverb সবচেয়ে natural?", options: ["全然", "とても", "たくさん", "上手"], correctAnswer: "全然", explanation: "全然 সাধারণত negative form-এর সঙ্গে: 全然 分かりません।" },
    { question: "‘কেমন ধরনের sport পছন্দ?’—সঠিক question?", options: ["どんな スポーツが 好きですか。", "どう スポーツが 好きですか。", "何を スポーツが 好きですか。", "どこの スポーツを 好きですか。"], correctAnswer: "どんな スポーツが 好きですか。", explanation: "কোনো category-এর ধরন জানতে どんな + noun ব্যবহৃত হয়।" },
    { question: "‘আমার টাকা আছে’—সঠিক pattern?", options: ["お金が あります。", "お金を あります。", "お金が います。", "お金に 好きです。"], correctAnswer: "お金が あります。", explanation: "জড় বস্তু থাকা বোঝাতে N が あります।" },
    { question: "‘সময় নেই বলে পড়ি না’—সঠিক order কোনটি?", options: ["時間が ありませんから、読みません。", "読みませんから、時間が ありません。", "時間を ありませんが、読みません。", "時間が ありませんまで、読みません。"], correctAnswer: "時間が ありませんから、読みません。", explanation: "কারণ + から, তারপর ফলাফল বলা হয়।" },
    { question: "どうして-এর উত্তরে কোনটি সবচেয়ে সম্পূর্ণ?", options: ["用事が ありましたから。", "用事を ありました。", "はい、どうしてです。", "何も あります。"], correctAnswer: "用事が ありましたから。", explanation: "どうして-এর উত্তরে কারণের শেষে から রাখা যায়।" },
  ],
  dialogue: [
    { speaker: "ミラー", japanese: "はい、木村さんですか。ミラーです。", romaji: "Hai, Kimura-san desu ka. Miraa desu.", bengali: "হ্যালো, কিমুরা-সান? আমি মিলার।" },
    { speaker: "木村", japanese: "ああ、ミラーさん、こんばんは。お元気ですか。", romaji: "Aa, Miraa-san, konbanwa. Ogenki desu ka.", bengali: "আহ, মিলার-সান। শুভ সন্ধ্যা। ভালো আছেন?" },
    { speaker: "ミラー", japanese: "ええ、元気です。クラシックの コンサート、いっしょに いかがですか。", romaji: "Ee, genki desu. Kurashikku no konsaato, issho ni ikaga desu ka.", bengali: "হ্যাঁ, ভালো আছি। একসঙ্গে classical concert-এ কেমন হয়?" },
    { speaker: "木村", japanese: "いいですね。いつですか。", romaji: "Ii desu ne. Itsu desu ka.", bengali: "ভালো তো। কবে?" },
    { speaker: "ミラー", japanese: "来週の 金曜日の 晩です。", romaji: "Raishuu no kinyoubi no ban desu.", bengali: "আগামী শুক্রবার সন্ধ্যায়।" },
    { speaker: "木村", japanese: "金曜日ですか。金曜日の 晩は ちょっと…。", romaji: "Kinyoubi desu ka. Kinyoubi no ban wa chotto...", bengali: "শুক্রবার? শুক্রবার সন্ধ্যাটা একটু…।" },
    { speaker: "ミラー", japanese: "だめですか。", romaji: "Dame desu ka.", bengali: "সম্ভব হবে না?" },
    { speaker: "木村", japanese: "ええ、残念ですが、友達と 約束が ありますから…。", romaji: "Ee, zannen desu ga, tomodachi to yakusoku ga arimasu kara...", bengali: "হ্যাঁ, দুঃখিত; বন্ধুর সঙ্গে কথা দেওয়া আছে বলে…।" },
    { speaker: "ミラー", japanese: "そうですか。残念ですね。", romaji: "Sou desu ka. Zannen desu ne.", bengali: "তাই নাকি। দুঃখের ব্যাপার।" },
    { speaker: "木村", japanese: "ええ。また 今度 お願いします。", romaji: "Ee. Mata kondo onegaishimasu.", bengali: "হ্যাঁ। পরেরবার অবশ্যই বলবেন।" },
  ],
  profiles: [],
  modules: [
    { step: "01", title: "文型 · Core pattern warm-up", instruction: "Textbook-এর তিনটি model থেকে পছন্দ, বোঝা এবং কারণসহ ফলাফল তৈরি করুন।", questions: [
      { prompt: "わたし／イタリア料理／好き", answer: "わたしは イタリア料理が 好きです。", romaji: "Watashi wa Itaria ryouri ga suki desu.", bengali: "আমি ইতালিয়ান খাবার পছন্দ করি।" },
      { prompt: "わたし／日本語／少し／分かります", answer: "わたしは 日本語が 少し 分かります。", romaji: "Watashi wa Nihongo ga sukoshi wakarimasu.", bengali: "আমি জাপানি অল্প বুঝি।" },
      { prompt: "きょう／子どもの 誕生日／早く 帰ります", answer: "きょうは 子どもの 誕生日ですから、早く 帰ります。", romaji: "Kyou wa kodomo no tanjoubi desu kara, hayaku kaerimasu.", bengali: "আজ সন্তানের জন্মদিন বলে তাড়াতাড়ি ফিরব।" },
      { prompt: "カリナさん／絵／とても／上手", answer: "カリナさんは 絵が とても 上手です。", romaji: "Karina-san wa e ga totemo jouzu desu.", bengali: "কারিনা ছবি আঁকায় খুব দক্ষ।" },
    ] },
    { step: "02", title: "練習A · が target builder", instruction: "好き・上手・分かります・あります-এর আগে が রেখে sentence সম্পূর্ণ করুন।", questions: [
      { prompt: "あなた／どんな スポーツ／好き", answer: "どんな スポーツが 好きですか。— サッカーが 好きです。", romaji: "Donna supootsu ga suki desu ka. — Sakkaa ga suki desu.", bengali: "কেমন sport পছন্দ? — Football পছন্দ।" },
      { prompt: "サントスさん／料理／上手", answer: "サントスさんは 料理が 上手です。", romaji: "Santosu-san wa ryouri ga jouzu desu.", bengali: "সান্তোস রান্নায় দক্ষ।" },
      { prompt: "わたし／ひらがな／分かります", answer: "わたしは ひらがなが 分かります。", romaji: "Watashi wa hiragana ga wakarimasu.", bengali: "আমি hiragana বুঝি।" },
      { prompt: "わたし／約束／あります", answer: "わたしは 約束が あります。", romaji: "Watashi wa yakusoku ga arimasu.", bengali: "আমার একটি appointment/কথা দেওয়া আছে।" },
    ] },
    { step: "03", title: "程度副詞 · Degree ladder", instruction: "よく・少し positive-এর সঙ্গে এবং あまり・全然 negative-এর সঙ্গে বসান।", questions: [
      { prompt: "英語／well understand", answer: "英語が よく 分かります。", romaji: "Eigo ga yoku wakarimasu.", bengali: "ইংরেজি ভালোভাবে বুঝি।" },
      { prompt: "日本語／a little understand", answer: "日本語が 少し 分かります。", romaji: "Nihongo ga sukoshi wakarimasu.", bengali: "জাপানি অল্প বুঝি।" },
      { prompt: "ドイツ語／not very understand", answer: "ドイツ語が あまり 分かりません。", romaji: "Doitsugo ga amari wakarimasen.", bengali: "জার্মান খুব একটা বুঝি না।" },
      { prompt: "インドネシア語／not at all understand", answer: "インドネシア語が 全然 分かりません。", romaji: "Indoneshiago ga zenzen wakarimasen.", bengali: "ইন্দোনেশীয় একদম বুঝি না।" },
    ] },
    { step: "04", title: "練習B · どんな & skill interview", instruction: "Category ও person cue দেখে natural question-answer বলুন।", questions: [
      { prompt: "スポーツ／テニス", answer: "どんな スポーツが 好きですか。— テニスが 好きです。", romaji: "Donna supootsu ga suki desu ka. — Tenisu ga suki desu.", bengali: "কেমন sport পছন্দ? — Tennis পছন্দ।" },
      { prompt: "音楽／クラシック", answer: "どんな 音楽が 好きですか。— クラシックが 好きです。", romaji: "Donna ongaku ga suki desu ka. — Kurashikku ga suki desu.", bengali: "কেমন সংগীত পছন্দ? — Classical music।" },
      { prompt: "佐藤さん／歌／上手", answer: "佐藤さんは 歌が 上手ですか。— はい、とても 上手です。", romaji: "Satou-san wa uta ga jouzu desu ka. — Hai, totemo jouzu desu.", bengali: "সাতো গান গাওয়ায় দক্ষ? — হ্যাঁ, খুব দক্ষ।" },
      { prompt: "松本さん／テニス／not skilled", answer: "松本さんは テニスが 上手ですか。— いいえ、あまり 上手じゃありません。", romaji: "Matsumoto-san wa tenisu ga jouzu desu ka. — Iie, amari jouzu ja arimasen.", bengali: "মাতসুমোতো tennis-এ দক্ষ? — না, খুব একটা নন।" },
    ] },
    { step: "05", title: "どうして・から · Reason chain", instruction: "প্রথমে どうして দিয়ে কারণ জিজ্ঞেস করুন, তারপর reason + から দিয়ে উত্তর দিন।", questions: [
      { prompt: "毎朝 新聞を 読みません／時間が ありません", answer: "どうして 毎朝 新聞を 読みませんか。— 時間が ありませんから。", romaji: "Doushite maiasa shinbun o yomimasen ka. — Jikan ga arimasen kara.", bengali: "প্রতি সকালে সংবাদপত্র পড়েন না কেন? — সময় নেই বলে।" },
      { prompt: "きのう 早く 帰りました／用事が ありました", answer: "どうして きのう 早く 帰りましたか。— 用事が ありましたから。", romaji: "Doushite kinou hayaku kaerimashita ka. — Youji ga arimashita kara.", bengali: "কাল তাড়াতাড়ি ফিরেছিলেন কেন? — কাজ ছিল বলে।" },
      { prompt: "タクシーで 行きます／時間が ありません", answer: "時間が ありませんから、タクシーで 行きます。", romaji: "Jikan ga arimasen kara, takushii de ikimasu.", bengali: "সময় নেই বলে taxi-তে যাব।" },
      { prompt: "テレビを 見ません／テレビが 壊れました", answer: "テレビが 壊れましたから、見ません。", romaji: "Terebi ga kowaremashita kara, mimasen.", bengali: "TV নষ্ট হয়েছে বলে দেখি না।" },
    ] },
    { step: "06", title: "練習C · Possession & invitation", instruction: "কিছু থাকা জিজ্ঞেস করা, ধার চাওয়া ও একসঙ্গে যাওয়ার dialogue সম্পূর্ণ করুন।", questions: [
      { prompt: "消しゴム／ありますか／borrow", answer: "消しゴムが ありますか。— ええ、あります。— ちょっと 貸して ください。", romaji: "Keshigomu ga arimasu ka. — Ee, arimasu. — Chotto kashite kudasai.", bengali: "Eraser আছে? — হ্যাঁ। — একটু ধার দিন।" },
      { prompt: "コンサートの チケット／いっしょに", answer: "コンサートの チケットを もらいました。いっしょに 行きませんか。", romaji: "Konsaato no chiketto o moraimashita. Issho ni ikimasen ka.", bengali: "Concert-এর ticket পেয়েছি। একসঙ্গে যাবেন?" },
      { prompt: "A: いつですか。／来週の 土曜日", answer: "来週の 土曜日です。", romaji: "Raishuu no doyoubi desu.", bengali: "আগামী শনিবার।" },
      { prompt: "decline／仕事が あります", answer: "土曜日ですか。残念ですが、仕事が ありますから。", romaji: "Doyoubi desu ka. Zannen desu ga, shigoto ga arimasu kara.", bengali: "শনিবার? দুঃখিত, কাজ আছে বলে।" },
    ] },
    { step: "07", title: "会話 · 残念ですが", instruction: "Phone invitation-টি cue অনুযায়ী ভদ্র ও natural Japanese-এ সম্পূর্ণ করুন।", questions: [
      { prompt: "Invite: classical concert together", answer: "クラシックの コンサート、いっしょに いかがですか。", romaji: "Kurashikku no konsaato, issho ni ikaga desu ka.", bengali: "একসঙ্গে classical concert-এ কেমন হয়?" },
      { prompt: "Ask the date", answer: "いいですね。いつですか。", romaji: "Ii desu ne. Itsu desu ka.", bengali: "ভালো তো। কবে?" },
      { prompt: "Friday evening is inconvenient—soft reply", answer: "金曜日の 晩は ちょっと…。", romaji: "Kinyoubi no ban wa chotto...", bengali: "শুক্রবার সন্ধ্যাটা একটু…।" },
      { prompt: "Reason: promise with a friend", answer: "残念ですが、友達と 約束が ありますから…。", romaji: "Zannen desu ga, tomodachi to yakusoku ga arimasu kara...", bengali: "দুঃখিত, বন্ধুর সঙ্গে কথা দেওয়া আছে বলে…।" },
    ] },
    { step: "08", title: "問題 · Reading & self-test", instruction: "Yamada-san-এর passage-এর তথ্য পড়ে সত্যতা যাচাই ও প্রশ্নের উত্তর দিন।", questions: [
      { prompt: "山田さんは 何が 好きですか。", answer: "ダンスが 好きです。", romaji: "Dansu ga suki desu.", bengali: "তিনি dance পছন্দ করেন।" },
      { prompt: "どうして 毎日 楽しいですか。", answer: "きれいな 先生に ダンスを 習いますから。", romaji: "Kirei na sensei ni dansu o naraimasu kara.", bengali: "সুন্দর শিক্ষকের কাছে dance শেখেন বলে।" },
      { prompt: "先生は 山田さんに 何を あげましたか。", answer: "コンサートの チケットを あげました。", romaji: "Konsaato no chiketto o agemashita.", bengali: "Concert-এর ticket দিয়েছিলেন।" },
      { prompt: "山田さんは 先生と コンサートへ 行きましたか。", answer: "いいえ、行きませんでした。先生は 友達と 行きました。", romaji: "Iie, ikimasen deshita. Sensei wa tomodachi to ikimashita.", bengali: "না। শিক্ষক বন্ধুর সঙ্গে গিয়েছিলেন।" },
    ] },
  ],
};

const unitTenPractice: UnitPracticeDetails = {
  heroImage: "/images/projects/n5-practice/unit-10-location.png",
  heroAlt: "জাপানি supermarket-এর ভিতর ও বাইরে মানুষ, প্রাণী এবং বিভিন্ন বস্তু দিয়ে অবস্থান বোঝানোর রঙিন illustration",
  dialogueImage: "/images/projects/n5-practice/unit-10-location.png",
  heroEyebrow: "UNIT 10 · あります／います · LOCATION PRACTICE",
  heroTitle: "কোথায় কী আছে এবং কে আছে?",
  heroDescription: "あります・います, place に N が, N は place に এবং 上・下・前・後ろ・隣・間 ব্যবহার করে ছবির মানুষ, প্রাণী ও বস্তুর অবস্থান বলুন।",
  dialogueTitle: "ナンプラー、ありますか · Supermarket conversation",
  dialogueAlt: "একজন শিক্ষার্থী supermarket-এর কর্মীর কাছে Asia Store এবং fish sauce-এর অবস্থান জিজ্ঞেস করছেন",
  dialogueCaption: [
    { name: "ミラー", text: "すみません。アジアストアは どこですか。" },
    { name: "店員", text: "あちらに タイ料理の コーナーが あります。ナンプラーは いちばん 下です。" },
  ],
  modelLabel: "文型モデル",
  modelTitle: "Place に N が あります／います · N は Place に あります／います",
  challengeTitle: "একটি room map বর্ণনা করুন",
  challengeDescription: "আপনার ঘরের পাঁচটি বস্তু ও দুইজন মানুষ/প্রাণীর অবস্থান বলুন। অন্তত তিনটি position word এবং একবার や～など ব্যবহার করুন।",
  usefulWords: [
    { japanese: "上", romaji: "ue", bengali: "উপরে" },
    { japanese: "下", romaji: "shita", bengali: "নিচে" },
    { japanese: "前", romaji: "mae", bengali: "সামনে" },
    { japanese: "後ろ", romaji: "ushiro", bengali: "পেছনে" },
    { japanese: "隣", romaji: "tonari", bengali: "পাশে" },
    { japanese: "近く", romaji: "chikaku", bengali: "কাছে" },
    { japanese: "間", romaji: "aida", bengali: "মাঝে" },
    { japanese: "いちばん下", romaji: "ichiban shita", bengali: "একদম নিচে" },
  ],
  answerPatterns: [
    { japanese: "はい、あります。", romaji: "Hai, arimasu.", bengali: "হ্যাঁ, আছে—জড় বস্তু।", positive: true },
    { japanese: "いいえ、ありません。", romaji: "Iie, arimasen.", bengali: "না, নেই—জড় বস্তু।", positive: false },
    { japanese: "はい、います。", romaji: "Hai, imasu.", bengali: "হ্যাঁ, আছে—মানুষ বা প্রাণী।", positive: true },
    { japanese: "いいえ、いません。", romaji: "Iie, imasen.", bengali: "না, নেই—মানুষ বা প্রাণী।", positive: false },
  ],
  memoryPoints: [
    { symbol: "あります", meaning: "জড় বস্তু, গাছপালা বা কোনো event-এর অস্তিত্ব" },
    { symbol: "います", meaning: "মানুষ ও প্রাণীর অস্তিত্ব" },
    { symbol: "に", meaning: "যে স্থানে ব্যক্তি বা বস্তু আছে" },
    { symbol: "が", meaning: "নতুন করে বলা ব্যক্তি বা বস্তু" },
    { symbol: "は", meaning: "পরিচিত ব্যক্তি/বস্তুকে topic করে তার location বলা" },
    { symbol: "の", meaning: "N の 上／下／前-এর মতো relative position যুক্ত করে" },
    { symbol: "や～など", meaning: "অসম্পূর্ণ উদাহরণ-list: A, B ইত্যাদি" },
  ],
  selfIntroduction: {
    japanese: "わたしの うちは 静かな 所に あります。うちの 近くに 公園や スーパーなどが あります。部屋に 猫が います。",
    romaji: "Watashi no uchi wa shizuka na tokoro ni arimasu. Uchi no chikaku ni kouen ya suupaa nado ga arimasu. Heya ni neko ga imasu.",
    bengali: "আমার বাড়ি শান্ত জায়গায়। বাড়ির কাছে পার্ক, supermarket ইত্যাদি আছে। ঘরে একটি বিড়াল আছে।",
  },
  grammarQuiz: [
    { question: "‘সেখানে একটি convenience store আছে’—সঠিক sentence?", options: ["あそこに コンビニが あります。", "あそこに コンビニが います。", "あそこを コンビニが あります。", "コンビニに あそこが います。"], correctAnswer: "あそこに コンビニが あります。", explanation: "জড় বস্তু বা স্থান বলায় あります এবং location-এর পরে に বসে।" },
    { question: "‘Lobby-তে Satou-san আছেন’—কোনটি ঠিক?", options: ["ロビーに 佐藤さんが います。", "ロビーに 佐藤さんが あります。", "佐藤さんを ロビーに います。", "ロビーが 佐藤さんに います。"], correctAnswer: "ロビーに 佐藤さんが います。", explanation: "মানুষের অস্তিত্বে います ব্যবহার হয়।" },
    { question: "Tokyo Disneyland কোথায়—location answer কোন pattern?", options: ["東京ディズニーランドは 千葉県に あります。", "東京ディズニーランドに 千葉県が います。", "千葉県を 東京ディズニーランドがあります。", "東京ディズニーランドは 千葉県で います。"], correctAnswer: "東京ディズニーランドは 千葉県に あります。", explanation: "পরিচিত বস্তু topic হলে N は Place に あります।" },
    { question: "‘Desk-এর উপরে বই’—সঠিক phrase?", options: ["机の 上に 本が あります。", "机が 上の 本に あります。", "本の 机に 上が います。", "机を 上で 本が あります。"], correctAnswer: "机の 上に 本が あります。", explanation: "Relative position হলো reference noun + の + position।" },
    { question: "‘Box-এর মধ্যে পুরোনো চিঠি, ছবি ইত্যাদি আছে’—সঠিক list marker?", options: ["古い 手紙や 写真などが あります。", "古い 手紙と 写真だけが います。", "古い 手紙を 写真に あります。", "古い 手紙も 写真で います。"], correctAnswer: "古い 手紙や 写真などが あります。", explanation: "や এবং など দিয়ে অসম্পূর্ণ উদাহরণ-list তৈরি হয়।" },
    { question: "庭ে কে আছে?—সঠিক question word কোনটি?", options: ["庭に だれが いますか。", "庭に 何が いますか。", "庭を どこが ありますか。", "庭は いつに いますか。"], correctAnswer: "庭に だれが いますか。", explanation: "মানুষ জানতে だれが; বস্তু জানতে 何が ব্যবহার করুন।" },
    { question: "A ও B-এর মাঝে—সঠিক position phrase?", options: ["Aと Bの 間", "Aの Bと 間", "Aが Bに 間", "Aや Bを 間"], correctAnswer: "Aと Bの 間", explanation: "দুই reference-এর মাঝখান বোঝাতে A と B の 間।" },
    { question: "‘কেউ নেই’—natural answer কোনটি?", options: ["だれも いません。", "だれも あります。", "何も います。", "だれが いませんか。"], correctAnswer: "だれも いません。", explanation: "だれも + negative দিয়ে ‘কেউ নেই’ বলা হয়।" },
  ],
  dialogue: [
    { speaker: "ミラー", japanese: "すみません。アジアストアは どこですか。", romaji: "Sumimasen. Ajia Sutoa wa doko desu ka.", bengali: "মাফ করবেন। Asia Store কোথায়?" },
    { speaker: "女の人", japanese: "あそこに 白い ビルが ありますね。あの ビルの 中です。", romaji: "Asoko ni shiroi biru ga arimasu ne. Ano biru no naka desu.", bengali: "ওখানে সাদা ভবনটি দেখছেন? ওই ভবনের ভিতরে।" },
    { speaker: "ミラー", japanese: "そうですか。どうも すみません。", romaji: "Sou desu ka. Doumo sumimasen.", bengali: "বুঝলাম। অনেক ধন্যবাদ।" },
    { speaker: "女の人", japanese: "いいえ。", romaji: "Iie.", bengali: "কোনো সমস্যা নেই।" },
    { speaker: "ミラー", japanese: "あのう、ナンプラー、ありますか。", romaji: "Anou, nanpuraa, arimasu ka.", bengali: "আচ্ছা, fish sauce আছে?" },
    { speaker: "店員", japanese: "はい。あちらに タイ料理の コーナーが あります。ナンプラーは いちばん 下です。", romaji: "Hai. Achira ni Tai ryouri no koonaa ga arimasu. Nanpuraa wa ichiban shita desu.", bengali: "হ্যাঁ। ওদিকে Thai food corner আছে। Fish sauce একদম নিচে।" },
    { speaker: "ミラー", japanese: "わかりました。どうも。", romaji: "Wakarimashita. Doumo.", bengali: "বুঝেছি। ধন্যবাদ।" },
  ],
  profiles: [],
  modules: [
    { step: "01", title: "文型 · Core existence patterns", instruction: "ছবির place, person ও object cue দেখে あります／います-এর সঠিক form বেছে sentence বলুন।", questions: [
      { prompt: "あそこ／コンビニ", answer: "あそこに コンビニが あります。", romaji: "Asoko ni konbini ga arimasu.", bengali: "ওখানে একটি convenience store আছে।" },
      { prompt: "ロビー／佐藤さん", answer: "ロビーに 佐藤さんが います。", romaji: "Robii ni Satou-san ga imasu.", bengali: "Lobby-তে Satou-san আছেন।" },
      { prompt: "東京ディズニーランド／千葉県", answer: "東京ディズニーランドは 千葉県に あります。", romaji: "Toukyou Dizuniirando wa Chiba-ken ni arimasu.", bengali: "Tokyo Disneyland Chiba prefecture-এ।" },
      { prompt: "家族／ニューヨーク", answer: "家族は ニューヨークに います。", romaji: "Kazoku wa Nyuuyooku ni imasu.", bengali: "আমার পরিবার New York-এ আছে।" },
    ] },
    { step: "02", title: "あります／います · Selection drill", instruction: "Person/animal হলে います, অন্য object/place হলে あります ব্যবহার করুন।", questions: [
      { prompt: "この ビル／ATM／2階", answer: "この ビルに ATMが あります。2階に あります。", romaji: "Kono biru ni ATM ga arimasu. Ni-kai ni arimasu.", bengali: "এই ভবনে ATM আছে। দ্বিতীয় তলায়।" },
      { prompt: "あそこ／男の人／IMCの 松本さん", answer: "あそこに 男の 人が います。あの 人は IMCの 松本さんです。", romaji: "Asoko ni otoko no hito ga imasu. Ano hito wa IMC no Matsumoto-san desu.", bengali: "ওখানে একজন পুরুষ আছেন। তিনি IMC-এর Matsumoto-san।" },
      { prompt: "庭／だれ／猫", answer: "庭に だれが いますか。— だれも いません。猫が います。", romaji: "Niwa ni dare ga imasu ka. — Daremo imasen. Neko ga imasu.", bengali: "বাগানে কে আছে?—কেউ নেই; একটি বিড়াল আছে।" },
      { prompt: "箱の 中／古い 手紙・写真", answer: "箱の 中に 古い 手紙や 写真などが あります。", romaji: "Hako no naka ni furui tegami ya shashin nado ga arimasu.", bengali: "বাক্সের মধ্যে পুরোনো চিঠি, ছবি ইত্যাদি আছে।" },
    ] },
    { step: "03", title: "練習A · Place に N が", instruction: "Location প্রথমে রেখে নতুন ব্যক্তি বা বস্তুর অস্তিত্ব বর্ণনা করুন।", questions: [
      { prompt: "あそこ／ビル・公園", answer: "あそこに ビルや 公園などが あります。", romaji: "Asoko ni biru ya kouen nado ga arimasu.", bengali: "ওখানে ভবন, পার্ক ইত্যাদি আছে।" },
      { prompt: "駅の 前／男の人", answer: "駅の 前に 男の 人が います。", romaji: "Eki no mae ni otoko no hito ga imasu.", bengali: "Station-এর সামনে একজন পুরুষ আছেন।" },
      { prompt: "スーパーの 隣／郵便局", answer: "スーパーの 隣に 郵便局が あります。", romaji: "Suupaa no tonari ni yuubinkyoku ga arimasu.", bengali: "Supermarket-এর পাশে post office আছে।" },
      { prompt: "冷蔵庫の 中／いろいろな 物", answer: "冷蔵庫の 中に いろいろな 物が あります。", romaji: "Reizouko no naka ni iroiro na mono ga arimasu.", bengali: "Fridge-এর মধ্যে বিভিন্ন জিনিস আছে।" },
    ] },
    { step: "04", title: "練習B · Position map", instruction: "Reference noun + の + position ব্যবহার করে object/person-এর exact location বলুন।", questions: [
      { prompt: "ドア／右／スイッチ", answer: "ドアの 右に スイッチが あります。", romaji: "Doa no migi ni suicchi ga arimasu.", bengali: "দরজার ডানে switch আছে।" },
      { prompt: "木／後ろ／女の子", answer: "木の 後ろに 女の 子が います。", romaji: "Ki no ushiro ni onna no ko ga imasu.", bengali: "গাছের পেছনে একটি মেয়ে আছে।" },
      { prompt: "テーブル／上／何", answer: "テーブルの 上に 何が ありますか。— 本や コーヒーなどが あります。", romaji: "Teeburu no ue ni nani ga arimasu ka. — Hon ya koohii nado ga arimasu.", bengali: "Table-এর ওপর কী আছে?—বই, coffee ইত্যাদি।" },
      { prompt: "駅／近く／喫茶店・銀行", answer: "駅の 近くに 喫茶店と 銀行が あります。", romaji: "Eki no chikaku ni kissaten to ginkou ga arimasu.", bengali: "Station-এর কাছে coffee shop ও bank আছে।" },
    ] },
    { step: "05", title: "N は Place に · Location answer", instruction: "প্রথমে পরিচিত object/person-কে は দিয়ে topic করুন, তারপর তার location বলুন।", questions: [
      { prompt: "郵便局／駅の 近く", answer: "郵便局は 駅の 近くに あります。", romaji: "Yuubinkyoku wa eki no chikaku ni arimasu.", bengali: "Post office station-এর কাছে।" },
      { prompt: "ポスト／郵便局と 銀行の 間", answer: "ポストは 郵便局と 銀行の 間に あります。", romaji: "Posuto wa yuubinkyoku to ginkou no aida ni arimasu.", bengali: "Mailbox post office ও bank-এর মাঝে।" },
      { prompt: "ミラーさん／会議室", answer: "ミラーさんは どこに いますか。— 会議室に います。", romaji: "Miraa-san wa doko ni imasu ka. — Kaigishitsu ni imasu.", bengali: "Miller কোথায়?—Meeting room-এ।" },
      { prompt: "お土産売り場／一階", answer: "お土産売り場は どこですか。— 一階に あります。", romaji: "Omiyage uriba wa doko desu ka. — Ikkai ni arimasu.", bengali: "Souvenir counter কোথায়?—প্রথম তলায়।" },
    ] },
    { step: "06", title: "会話 · ナンプラー、ありますか", instruction: "দিক জিজ্ঞেস করা থেকে shelf-এর exact position পর্যন্ত supermarket dialogue-টি সম্পূর্ণ করুন।", questions: [
      { prompt: "Asia Store-এর location জিজ্ঞেস করুন", answer: "すみません。アジアストアは どこですか。", romaji: "Sumimasen. Ajia Sutoa wa doko desu ka.", bengali: "মাফ করবেন, Asia Store কোথায়?" },
      { prompt: "সাদা ভবনটির ভিতরে—direction দিন", answer: "あそこに 白い ビルが ありますね。あの ビルの 中です。", romaji: "Asoko ni shiroi biru ga arimasu ne. Ano biru no naka desu.", bengali: "ওই সাদা ভবনটি দেখছেন? তার ভিতরে।" },
      { prompt: "Fish sauce আছে কি না জিজ্ঞেস করুন", answer: "あのう、ナンプラー、ありますか。", romaji: "Anou, nanpuraa, arimasu ka.", bengali: "আচ্ছা, fish sauce আছে?" },
      { prompt: "Thai corner এবং bottom shelf দেখান", answer: "あちらに タイ料理の コーナーが あります。ナンプラーは いちばん 下です。", romaji: "Achira ni Tai ryouri no koonaa ga arimasu. Nanpuraa wa ichiban shita desu.", bengali: "ওদিকে Thai food corner আছে। Fish sauce একদম নিচে।" },
    ] },
    { step: "07", title: "練習C · Information-gap dialogue", instruction: "Map বা shelf cue দেখে どこですか／何が ありますか／だれが いますか দিয়ে short dialogue করুন।", questions: [
      { prompt: "A: あのう、近くに 銀行が ありますか。 B: building-এর ভিতরে", answer: "ええ、あそこに 高い ビルが ありますね。あの ビルの 中です。", romaji: "Ee, asoko ni takai biru ga arimasu ne. Ano biru no naka desu.", bengali: "হ্যাঁ। ওই উঁচু ভবনটি দেখছেন? তার ভিতরে।" },
      { prompt: "A: 郵便局は どこですか。 B: station-এর সামনে", answer: "駅の 前に あります。", romaji: "Eki no mae ni arimasu.", bengali: "Station-এর সামনে।" },
      { prompt: "A: すみません。ミラーさんは いますか。 B: door-এর কাছে", answer: "ええ、あそこに います。ドアの 近くです。", romaji: "Ee, asoko ni imasu. Doa no chikaku desu.", bengali: "হ্যাঁ, ওখানে আছেন। দরজার কাছে।" },
      { prompt: "A: これは 何の コーナーですか。 B: supermarket-এর food corner", answer: "食べ物の コーナーです。パンや 飲み物などが あります。", romaji: "Tabemono no koonaa desu. Pan ya nomimono nado ga arimasu.", bengali: "খাবারের section। Bread, drinks ইত্যাদি আছে।" },
    ] },
    { step: "08", title: "問題 · Reading & location self-test", instruction: "নতুন বাড়ি সম্পর্কে passage-এর তথ্য পড়ে map নির্বাচন ও প্রশ্নের উত্তর দিন।", questions: [
      { prompt: "新しい うちは どんな 所に ありますか。", answer: "静かな 所に あります。", romaji: "Shizuka na tokoro ni arimasu.", bengali: "শান্ত জায়গায়।" },
      { prompt: "うちの 隣に 何が ありますか。", answer: "きれいな 公園が あります。", romaji: "Kirei na kouen ga arimasu.", bengali: "একটি সুন্দর park আছে।" },
      { prompt: "公園の 前に 何が ありますか。", answer: "図書館と 喫茶店が あります。", romaji: "Toshokan to kissaten ga arimasu.", bengali: "Library ও coffee shop আছে।" },
      { prompt: "うちの 近くに 何が ありますか。", answer: "郵便局と 銀行が あります。", romaji: "Yuubinkyoku to ginkou ga arimasu.", bengali: "Post office ও bank আছে।" },
      { prompt: "スーパーの 中に どんな 店が ありますか。", answer: "花屋や おいしい パン屋などが あります。", romaji: "Hanaya ya oishii pan-ya nado ga arimasu.", bengali: "ফুলের দোকান, সুস্বাদু bread shop ইত্যাদি আছে।" },
    ] },
  ],
};

const unitElevenPractice: UnitPracticeDetails = {
  heroImage: "/images/projects/n5-practice/unit-11-quantity.png",
  heroAlt: "Airport post-office counter-এ parcel পাঠানো, family members এবং গোনা যায় এমন apple, stamp ও postcard-এর colourful illustration",
  dialogueImage: "/images/projects/n5-practice/unit-11-quantity.png",
  heroEyebrow: "UNIT 11 · COUNTERS · QUANTITY · DURATION",
  heroTitle: "কতটি, কতজন, কয়বার এবং কতক্ষণ?",
  heroDescription: "ひとつ～とお, 人・台・枚・回 counter, duration, frequency ও どのくらい ব্যবহার করে shopping, family এবং travel-এর তথ্য বলুন।",
  dialogueTitle: "これ、お願いします · Airport post-office conversation",
  dialogueAlt: "Airport post-office counter-এ একজন যাত্রী Australia-তে দুইটি parcel পাঠানোর ওজন, খরচ ও সময় জিজ্ঞেস করছেন",
  dialogueCaption: [
    { name: "ワン", text: "これ、オーストラリアまで お願いします。" },
    { name: "郵便局員", text: "船便ですか、航空便ですか。どのくらい かかりますか。" },
  ],
  modelLabel: "文型モデル",
  modelTitle: "N を Quantity Vます · Period に Frequency Vます · どのくらい",
  challengeTitle: "নিজের quantity profile বলুন",
  challengeDescription: "আপনার family size, সপ্তাহে পড়ার frequency, দৈনিক study duration এবং গত shopping-এর তিনটি quantity নিয়ে অন্তত পাঁচটি Japanese sentence বলুন।",
  usefulWords: [
    { japanese: "いくつ", romaji: "ikutsu", bengali: "কতটি" },
    { japanese: "何人", romaji: "nannin", bengali: "কতজন" },
    { japanese: "何枚", romaji: "nanmai", bengali: "কতটি—পাতলা বস্তু" },
    { japanese: "何回", romaji: "nankai", bengali: "কয়বার" },
    { japanese: "どのくらい", romaji: "dono kurai", bengali: "কতক্ষণ/কতটা" },
    { japanese: "全部で", romaji: "zenbu de", bengali: "সব মিলিয়ে/মোট" },
    { japanese: "航空便", romaji: "koukuubin", bengali: "airmail" },
    { japanese: "船便", romaji: "funabin", bengali: "surface mail" },
  ],
  answerPatterns: [
    { japanese: "～つ あります。", romaji: "~tsu arimasu.", bengali: "～টি আছে।", positive: true },
    { japanese: "～人 います。", romaji: "~nin imasu.", bengali: "～জন আছেন।", positive: true },
    { japanese: "～時間 かかります。", romaji: "~jikan kakarimasu.", bengali: "～ঘণ্টা লাগে।", positive: true },
    { japanese: "～だけです。", romaji: "~dake desu.", bengali: "শুধু ～।", positive: false },
  ],
  memoryPoints: [
    { symbol: "つ", meaning: "সাধারণ জিনিস ১–১০ পর্যন্ত গোনার counter" },
    { symbol: "人", meaning: "মানুষ; ひとり ও ふたり irregular" },
    { symbol: "台／枚", meaning: "যন্ত্র-যান / পাতলা সমতল জিনিস" },
    { symbol: "回", meaning: "কোনো কাজ কয়বার হয়" },
    { symbol: "に", meaning: "Period に Frequency—এক সময়ে কয়বার" },
    { symbol: "ぐらい", meaning: "প্রায়/আনুমানিক পরিমাণ" },
    { symbol: "だけ", meaning: "শুধু ওই noun বা quantity" },
  ],
  selfIntroduction: {
    japanese: "家族は 四人です。兄弟が 二人 います。毎日 二時間 日本語を 勉強します。一週間に 三回 練習します。",
    romaji: "Kazoku wa yonin desu. Kyoudai ga futari imasu. Mainichi nijikan Nihongo o benkyou shimasu. Isshuukan ni sankai renshuu shimasu.",
    bengali: "আমাদের পরিবারে চারজন। দুইজন ভাইবোন আছে। প্রতিদিন দুই ঘণ্টা জাপানি পড়ি এবং সপ্তাহে তিনবার অনুশীলন করি।",
  },
  grammarQuiz: [
    { question: "‘তিনটি apple কিনেছি’—সঠিক word order?", options: ["りんごを 三つ 買いました。", "三つを りんご 買いました。", "りんごに 三人 買いました。", "りんごを 三枚 います。"], correctAnswer: "りんごを 三つ 買いました。", explanation: "Quantity object-এর を-এর পরে এবং verb-এর আগে বসে।" },
    { question: "মানুষ গোনার সঠিক counter কোনটি?", options: ["人", "台", "枚", "回"], correctAnswer: "人", explanation: "মানুষে 人; একজন ひとり এবং দুজন ふたり।" },
    { question: "Stamp পাঁচটি—কোনটি ঠিক?", options: ["切手を 五枚", "切手を 五台", "切手を 五人", "切手を 五回"], correctAnswer: "切手を 五枚", explanation: "Stamp-এর মতো পাতলা জিনিসে 枚 ব্যবহার হয়।" },
    { question: "‘সপ্তাহে দুইবার tennis খেলি’—কোনটি ঠিক?", options: ["一週間に 二回 テニスを します。", "一週間を 二時間 テニスに します。", "二回に 一週間が します。", "一週間だけ 二人 テニスです。"], correctAnswer: "一週間に 二回 テニスを します。", explanation: "Period に Frequency 回 pattern ব্যবহার হয়।" },
    { question: "কতক্ষণ লাগে—সঠিক question?", options: ["どのくらい かかりますか。", "いくつ いますか。", "何人 かかりますか。", "どこだけ ありますか。"], correctAnswer: "どのくらい かかりますか。", explanation: "Duration জানতে どのくらい ব্যবহার করুন।" },
    { question: "‘শুধু একজন’—কোনটি ঠিক?", options: ["一人だけ", "一台ぐらい人", "一枚に", "一回人"], correctAnswer: "一人だけ", explanation: "সীমা প্রকাশে quantifier-এর পরে だけ বসে।" },
  ],
  dialogue: [
    { speaker: "管理人", japanese: "いい 天気ですね。お出かけですか。", romaji: "Ii tenki desu ne. Odekake desu ka.", bengali: "আবহাওয়া সুন্দর, তাই না? বাইরে যাচ্ছেন?" },
    { speaker: "ワン", japanese: "ええ、ちょっと 郵便局まで。行ってきます。", romaji: "Ee, chotto yuubinkyoku made. Ittekimasu.", bengali: "হ্যাঁ, একটু post office পর্যন্ত। যাচ্ছি, ফিরে আসব।" },
    { speaker: "管理人", japanese: "そうですか。行ってらっしゃい。", romaji: "Sou desu ka. Itterasshai.", bengali: "আচ্ছা। গিয়ে আসুন।" },
    { speaker: "ワン", japanese: "これ、オーストラリアまで お願いします。", romaji: "Kore, Oosutoraria made onegaishimasu.", bengali: "এটি Australia পর্যন্ত পাঠাব, অনুগ্রহ করে।" },
    { speaker: "郵便局員", japanese: "はい。船便ですか、航空便ですか。", romaji: "Hai. Funabin desu ka, koukuubin desu ka.", bengali: "জাহাজে, নাকি airmail-এ?" },
    { speaker: "ワン", japanese: "航空便は いくらですか。", romaji: "Koukuubin wa ikura desu ka.", bengali: "Airmail কত?" },
    { speaker: "郵便局員", japanese: "7,600円です。こちらは 3,450円です。", romaji: "Nanasen roppyaku-en desu. Kochira wa sanzen yonhyaku gojuu-en desu.", bengali: "৭,৬০০ yen। আর এটি ৩,৪৫০ yen।" },
    { speaker: "ワン", japanese: "船便で どのくらい かかりますか。", romaji: "Funabin de dono kurai kakarimasu ka.", bengali: "জাহাজে কতদিন লাগে?" },
    { speaker: "郵便局員", japanese: "二か月ぐらいです。", romaji: "Nikagetsu gurai desu.", bengali: "প্রায় দুই মাস।" },
    { speaker: "ワン", japanese: "じゃ、航空便で お願いします。", romaji: "Ja, koukuubin de onegaishimasu.", bengali: "তাহলে airmail-এ দিন।" },
  ],
  profiles: [],
  modules: [
    { step: "01", title: "文型 · Quantity & duration", instruction: "ছবির object, person এবং time cue দেখে counter-সহ সম্পূর্ণ sentence বলুন।", questions: [
      { prompt: "りんご／8", answer: "りんごを 八つ 買いました。", romaji: "Ringo o yattsu kaimashita.", bengali: "আটটি apple কিনেছি।" },
      { prompt: "留学生／オーストラリア／2年", answer: "留学生が 二人 います。二人は オーストラリアに 二年 います。", romaji: "Ryuugakusei ga futari imasu. Futari wa Oosutoraria ni ninen imasu.", bengali: "দুজন foreign student আছেন; তারা Australia-তে দুই বছর আছেন।" },
      { prompt: "外国人の先生／3／all America", answer: "外国人の 先生が 三人 います。みんな アメリカ人です。", romaji: "Gaikokujin no sensei ga sannin imasu. Minna Amerikajin desu.", bengali: "তিনজন বিদেশি শিক্ষক আছেন; সবাই American।" },
      { prompt: "大阪から オーストラリア／飛行機／10時間", answer: "大阪から オーストラリアまで 飛行機で 十時間ぐらい かかります。", romaji: "Oosaka kara Oosutoraria made hikouki de juu-jikan gurai kakarimasu.", bengali: "Osaka থেকে Australia বিমানে প্রায় ১০ ঘণ্টা লাগে।" },
    ] },
    { step: "02", title: "練習A · Counter selection", instruction: "Noun অনুযায়ী つ・人・台・枚・回 থেকে সঠিক counter নির্বাচন করুন।", questions: [
      { prompt: "いす／4", answer: "いすが 四つ あります。", romaji: "Isu ga yottsu arimasu.", bengali: "চারটি chair আছে।" },
      { prompt: "卵／6", answer: "卵を 六つ 買いました。", romaji: "Tamago o muttsu kaimashita.", bengali: "ছয়টি egg কিনেছি।" },
      { prompt: "かばん／3", answer: "かばんが 三つ あります。", romaji: "Kaban ga mittsu arimasu.", bengali: "তিনটি bag আছে।" },
      { prompt: "テレビ／2", answer: "テレビが 二台 あります。", romaji: "Terebi ga nidai arimasu.", bengali: "দুটি television আছে।" },
      { prompt: "CD／1", answer: "CDが 一枚 あります。", romaji: "CD ga ichimai arimasu.", bengali: "একটি CD আছে।" },
    ] },
    { step: "03", title: "練習B · Picture quantity", instruction: "Picture cue দেখে いくつ／何台／何枚 question এবং পূর্ণ answer তৈরি করুন।", questions: [
      { prompt: "りんご／3", answer: "りんごが いくつ ありますか。— 三つ あります。", romaji: "Ringo ga ikutsu arimasu ka. — Mittsu arimasu.", bengali: "কতটি apple?—তিনটি।" },
      { prompt: "テレビ／2", answer: "テレビが 何台 ありますか。— 二台 あります。", romaji: "Terebi ga nandai arimasu ka. — Nidai arimasu.", bengali: "কতটি TV?—দুটি।" },
      { prompt: "コンピューター／4", answer: "コンピューターが 何台 ありますか。— 四台 あります。", romaji: "Konpyuutaa ga nandai arimasu ka. — Yondai arimasu.", bengali: "কতটি computer?—চারটি।" },
      { prompt: "封筒／3", answer: "封筒が 何枚 ありますか。— 三枚 あります。", romaji: "Fuutou ga nanmai arimasu ka. — Sanmai arimasu.", bengali: "কতটি envelope?—তিনটি।" },
    ] },
    { step: "04", title: "Shopping · Total price", instruction: "Quantity ও unit price cue ব্যবহার করে দোকানের প্রশ্ন-উত্তর সম্পূর্ণ করুন।", questions: [
      { prompt: "80円の切手 5枚 + はがき 2枚", answer: "80円の 切手を 五枚と はがきを 二枚 ください。— 全部で 500円です。", romaji: "Hachijuu-en no kitte o gomai to hagaki o nimai kudasai. — Zenbu de gohyaku-en desu.", bengali: "৮০ yen-এর পাঁচটি stamp ও দুটি postcard দিন—মোট ৫০০ yen।" },
      { prompt: "りんご／10", answer: "りんごを 十 買いました。", romaji: "Ringo o too kaimashita.", bengali: "দশটি apple কিনেছি।" },
      { prompt: "自転車／2／send", answer: "自転車を 二台 送ります。", romaji: "Jitensha o nidai okurimasu.", bengali: "দুটি bicycle পাঠাই।" },
      { prompt: "切手／5枚／50円／total", answer: "50円の 切手を 五枚 買います。全部で 250円です。", romaji: "Gojuu-en no kitte o gomai kaimasu. Zenbu de nihyaku gojuu-en desu.", bengali: "৫০ yen-এর পাঁচটি stamp; মোট ২৫০ yen।" },
    ] },
    { step: "05", title: "Family · 何人", instruction: "Family picture cue দেখে মোট সদস্য ও sibling সংখ্যা বলুন।", questions: [
      { prompt: "家族／4", answer: "家族は 何人ですか。— 四人です。", romaji: "Kazoku wa nannin desu ka. — Yonnin desu.", bengali: "পরিবারে কতজন?—চারজন।" },
      { prompt: "兄弟／2", answer: "兄弟が 二人 います。", romaji: "Kyoudai ga futari imasu.", bengali: "দুইজন ভাইবোন আছে।" },
      { prompt: "田中さん／ご主人と子ども2人", answer: "田中さんの 家族は 全部で 四人です。", romaji: "Tanaka-san no kazoku wa zenbu de yonin desu.", bengali: "Tanaka-san-এর পরিবারে মোট চারজন।" },
      { prompt: "外国人／1だけ", answer: "外国人は 一人だけ います。", romaji: "Gaikokujin wa hitori dake imasu.", bengali: "শুধু একজন বিদেশি আছেন।" },
    ] },
    { step: "06", title: "Frequency & duration", instruction: "Period に Frequency এবং duration without particle—দুই pattern আলাদা করে ব্যবহার করুন।", questions: [
      { prompt: "一週間／tennis／2回", answer: "一週間に 二回 テニスを します。", romaji: "Isshuukan ni nikai tenisu o shimasu.", bengali: "সপ্তাহে দুইবার tennis খেলি।" },
      { prompt: "毎日／日本語／2時間", answer: "毎日 二時間 日本語を 勉強します。", romaji: "Mainichi nijikan Nihongo o benkyou shimasu.", bengali: "প্রতিদিন দুই ঘণ্টা Japanese পড়ি।" },
      { prompt: "スペイン語／3か月／studied 1か月", answer: "三か月 スペイン語を 勉強しました。実際は 一か月だけです。", romaji: "Sankagetsu Supeingo o benkyou shimashita. Jissai wa ikkagetsu dake desu.", bengali: "তিন মাস Spanish পড়েছি; আসলে শুধু এক মাস।" },
      { prompt: "映画／1か月／1回", answer: "一か月に 一回 映画を 見ます。", romaji: "Ikkagetsu ni ikkai eiga o mimasu.", bengali: "মাসে একবার সিনেমা দেখি।" },
    ] },
    { step: "07", title: "会話 · Parcel at the airport", instruction: "Destination, shipping method, price ও duration cue দিয়ে airport post-office dialogue সম্পূর্ণ করুন।", questions: [
      { prompt: "Australia-তে parcel পাঠাতে বলুন", answer: "これ、オーストラリアまで お願いします。", romaji: "Kore, Oosutoraria made onegaishimasu.", bengali: "এটি Australia পর্যন্ত পাঠান।" },
      { prompt: "Ship না air—choice জিজ্ঞেস করুন", answer: "船便ですか、航空便ですか。", romaji: "Funabin desu ka, koukuubin desu ka.", bengali: "জাহাজে, নাকি airmail-এ?" },
      { prompt: "Surface mail-এ কতক্ষণ লাগে", answer: "船便で どのくらい かかりますか。— 二か月ぐらいです。", romaji: "Funabin de dono kurai kakarimasu ka. — Nikagetsu gurai desu.", bengali: "জাহাজে কতদিন লাগে?—প্রায় দুই মাস।" },
      { prompt: "Final choice: airmail", answer: "じゃ、航空便で お願いします。", romaji: "Ja, koukuubin de onegaishimasu.", bengali: "তাহলে airmail-এ দিন।" },
    ] },
    { step: "08", title: "問題 · Unit 11 self-test", instruction: "বইয়ের review style-এ counter, total, frequency এবং duration-এর পূর্ণ উত্তর দিন।", questions: [
      { prompt: "子どもが 何人 いますか。— 3", answer: "子どもが 三人 います。", romaji: "Kodomo ga sannin imasu.", bengali: "তিনজন শিশু আছে।" },
      { prompt: "毎日 何時間 働きますか。— 8", answer: "毎日 八時間 働きます。", romaji: "Mainichi hachijikan hatarakimasu.", bengali: "প্রতিদিন আট ঘণ্টা কাজ করি।" },
      { prompt: "切手 5枚 + はがき 2枚／全部で", answer: "切手が 五枚と はがきが 二枚あります。全部で 七枚です。", romaji: "Kitte ga gomai to hagaki ga nimai arimasu. Zenbu de nanamai desu.", bengali: "পাঁচটি stamp ও দুটি postcard; মোট সাতটি।" },
      { prompt: "日本語／3か月／1か月に8回／1回2時間", answer: "日本語を 三か月 習いました。一か月に 八回、 一回 二時間 習いました。", romaji: "Nihongo o sankagetsu naraimashita. Ikkagetsu ni hakkai, ikkai nijikan naraimashita.", bengali: "তিন মাস Japanese শিখেছি; মাসে আটবার, প্রতিবার দুই ঘণ্টা।" },
    ] },
  ],
};

const unitTwelvePractice: UnitPracticeDetails = {
  heroImage: "/images/projects/n5-vocabulary/unit-12.webp",
  heroAlt: "জাপানের চার ঋতু, পাহাড়, শহর, ট্রেন ও ভ্রমণস্থল তুলনা করার রঙিন illustration",
  dialogueImage: "/images/projects/n5-vocabulary/unit-12.webp",
  heroEyebrow: "UNIT 12 · PAST ADJECTIVES · COMPARISON",
  heroTitle: "কেমন ছিল, কোনটি বেশি, আর কোনটি সবচেয়ে ভালো?",
  heroDescription: "গতকালের অবস্থা, ভ্রমণের অভিজ্ঞতা, দুইটি জিনিসের তুলনা এবং একটি group-এর মধ্যে superlative—চারটি connected pattern দিয়ে practice করুন।",
  dialogueTitle: "祇園祭は どうでしたか · Kyoto festival conversation",
  dialogueAlt: "Kyoto, Gion festival এবং Japanese souvenir নিয়ে conversation practice",
  dialogueCaption: [
    { name: "管理人", text: "祇園祭は どうでしたか。" },
    { name: "ミラー", text: "とても にぎやかでした。京都で いちばん 有名な お祭りです。" },
  ],
  modelLabel: "文型モデル",
  modelTitle: "Past description · N₁ は N₂ より Adj · N の中で N が いちばん Adj",
  challengeTitle: "নিজের comparison map তৈরি করুন",
  challengeDescription: "দুইটি শহর, দুইটি খাবার, দুইটি ঋতু এবং আপনার সবচেয়ে পছন্দের একটি বিষয় নিয়ে অন্তত ছয়টি Japanese sentence বলুন।",
  usefulWords: [
    { japanese: "どうでしたか", romaji: "dou deshita ka", bengali: "কেমন ছিল?" },
    { japanese: "どちら", romaji: "dochira", bengali: "কোনটি—দুইটির মধ্যে" },
    { japanese: "どっち", romaji: "docchi", bengali: "কোনটা—কথ্য রূপ" },
    { japanese: "～より", romaji: "~ yori", bengali: "～এর চেয়ে" },
    { japanese: "～のほうが", romaji: "~ no hou ga", bengali: "～টি বেশি" },
    { japanese: "いちばん", romaji: "ichiban", bengali: "সবচেয়ে" },
    { japanese: "ずっと", romaji: "zutto", bengali: "অনেক বেশি / তুলনায় অনেক" },
    { japanese: "どちらも", romaji: "dochira mo", bengali: "দুটিই" },
  ],
  answerPatterns: [
    { japanese: "N／な-adj でした。", romaji: "N / na-adj deshita.", bengali: "ছিল / ... ছিল।", positive: true },
    { japanese: "N／な-adj じゃありませんでした。", romaji: "N / na-adj ja arimasen deshita.", bengali: "ছিল না।", positive: false },
    { japanese: "い-adj かったです。", romaji: "i-adj katta desu.", bengali: "... ছিল।", positive: true },
    { japanese: "い-adj くなかったです。", romaji: "i-adj kunakatta desu.", bengali: "... ছিল না।", positive: false },
  ],
  memoryPoints: [
    { symbol: "でした", meaning: "noun ও な-adjective-এর past affirmative" },
    { symbol: "かった", meaning: "い-adjective-এর い বাদ দিয়ে past affirmative" },
    { symbol: "より", meaning: "comparison-এর baseline—যার চেয়ে" },
    { symbol: "ほうが", meaning: "তুলনায় যে side বেশি, সেটিকে mark করে" },
    { symbol: "で", meaning: "superlative-এর group বা category নির্ধারণ করে" },
    { symbol: "いちばん", meaning: "group-এর মধ্যে সবচেয়ে বেশি degree" },
  ],
  selfIntroduction: {
    japanese: "きのうは 休みでした。天気は あまり よくなかったです。映画を 見ました。とても おもしろかったです。映画の中で コメディーが いちばん 好きです。",
    romaji: "Kinou wa yasumi deshita. Tenki wa amari yokunakatta desu. Eiga o mimashita. Totemo omoshirokatta desu. Eiga no naka de komedii ga ichiban suki desu.",
    bengali: "গতকাল ছুটি ছিল। আবহাওয়া খুব ভালো ছিল না। একটি সিনেমা দেখেছি; খুব মজার ছিল। সিনেমার মধ্যে comedy আমার সবচেয়ে পছন্দ।",
  },
  grammarQuiz: [
    { question: "‘গতকাল ঠান্ডা ছিল’—সঠিক sentence কোনটি?", options: ["きのうは 寒かったです。", "きのうは 寒いでした。", "きのうは 寒くです。", "きのうは 寒いじゃありません。"], correctAnswer: "きのうは 寒かったです。", explanation: "い-adjective-এর past affirmative: い বাদ দিয়ে かったです।" },
    { question: "静か-এর past negative কোনটি?", options: ["静かじゃありませんでした。", "静かくなかったです。", "静かでした。", "静かないでした。"], correctAnswer: "静かじゃありませんでした。", explanation: "静か একটি な-adjective; তাই noun-এর মতো じゃありませんでした হয়।" },
    { question: "‘Hokkaido Kyushu-এর চেয়ে বড়’—কোনটি ঠিক?", options: ["北海道は 九州より 大きいです。", "九州は 北海道より 大きいです。", "北海道で 九州が 大きいです。", "北海道は 九州のほうです。"], correctAnswer: "北海道は 九州より 大きいです。", explanation: "N₁ は N₂ より Adj pattern-এ N₂ comparison baseline।" },
    { question: "দুইটির মধ্যে কোনটি জিজ্ঞেস করতে কী ব্যবহার করবেন?", options: ["どちら", "どこ", "だれ", "いくつ"], correctAnswer: "どちら", explanation: "দুইটি item বা option-এর choice জানতে どちら ব্যবহার হয়।" },
    { question: "‘Japanese food-এর মধ্যে tempura সবচেয়ে ভালো লাগে’—সঠিক pattern?", options: ["日本料理の中で 天ぷらが いちばん 好きです。", "日本料理より 天ぷらの中です。", "天ぷらは 日本料理を いちばんです。", "日本料理と 天ぷらが どちらです。"], correctAnswer: "日本料理の中で 天ぷらが いちばん 好きです。", explanation: "Category の中で item が いちばん Adj pattern ব্যবহার করুন।" },
  ],
  dialogue: [
    { speaker: "ミラー", japanese: "ただいま。", romaji: "Tadaima.", bengali: "ফিরে এলাম।" },
    { speaker: "管理人", japanese: "お帰りなさい。これ、京都の お土産ですか。", romaji: "Okaerinasai. Kore, Kyouto no omiyage desu ka.", bengali: "স্বাগতম। এগুলো কি Kyoto-র souvenir?" },
    { speaker: "ミラー", japanese: "ええ。祇園祭へ 行きました。", romaji: "Ee. Gion-matsuri e ikimashita.", bengali: "হ্যাঁ। Gion Festival-এ গিয়েছিলাম।" },
    { speaker: "管理人", japanese: "祇園祭は どうでしたか。", romaji: "Gion-matsuri wa dou deshita ka.", bengali: "Gion Festival কেমন ছিল?" },
    { speaker: "ミラー", japanese: "とても にぎやかでした。京都で いちばん 有名な お祭りです。", romaji: "Totemo nigiyaka deshita. Kyouto de ichiban yuumei na omatsuri desu.", bengali: "খুব জমজমাট ছিল। Kyoto-র সবচেয়ে বিখ্যাত উৎসব।" },
    { speaker: "管理人", japanese: "そうですか。写真を たくさん 撮りましたか。", romaji: "Sou desu ka. Shashin o takusan torimashita ka.", bengali: "তাই নাকি। অনেক ছবি তুলেছেন?" },
    { speaker: "ミラー", japanese: "ええ。これは お土産です。どちらが いいですか。", romaji: "Ee. Kore wa omiyage desu. Dochira ga ii desu ka.", bengali: "হ্যাঁ। এগুলো souvenir। কোনটি ভালো লাগছে?" },
    { speaker: "管理人", japanese: "こちらのほうが きれいです。ありがとうございます。", romaji: "Kochira no hou ga kirei desu. Arigatou gozaimasu.", bengali: "এইটিই বেশি সুন্দর। ধন্যবাদ।" },
  ],
  profiles: [],
  modules: [
    { step: "01", title: "文型 · Past description", instruction: "Present cue-কে past affirmative বা past negative-এ বদলে সম্পূর্ণ sentence বলুন।", questions: [
      { prompt: "きのう／雨", answer: "きのうは 雨でした。", romaji: "Kinou wa ame deshita.", bengali: "গতকাল বৃষ্টি ছিল।" },
      { prompt: "きのう／寒い", answer: "きのうは 寒かったです。", romaji: "Kinou wa samukatta desu.", bengali: "গতকাল ঠান্ডা ছিল।" },
      { prompt: "京都／静か／negative", answer: "京都は 静かじゃありませんでした。", romaji: "Kyouto wa shizuka ja arimasen deshita.", bengali: "Kyoto শান্ত ছিল না।" },
      { prompt: "天気／いい／negative", answer: "天気は よくなかったです。", romaji: "Tenki wa yokunakatta desu.", bengali: "আবহাওয়া ভালো ছিল না।" },
    ] },
    { step: "02", title: "練習A · Form builder", instruction: "な-adjective/noun এবং い-adjective আলাদা করে সঠিক past form বেছে নিন।", questions: [
      { prompt: "旅行は 楽しいです。→ past", answer: "旅行は 楽しかったです。", romaji: "Ryokou wa tanoshikatta desu.", bengali: "ভ্রমণটি আনন্দদায়ক ছিল।" },
      { prompt: "町は にぎやかです。→ past", answer: "町は にぎやかでした。", romaji: "Machi wa nigiyaka deshita.", bengali: "শহরটি জমজমাট ছিল।" },
      { prompt: "映画は おもしろくないです。→ past", answer: "映画は おもしろくなかったです。", romaji: "Eiga wa omoshirokunakatta desu.", bengali: "সিনেমাটি মজার ছিল না।" },
      { prompt: "きのうは 休みじゃありません。→ past", answer: "きのうは 休みじゃありませんでした。", romaji: "Kinou wa yasumi ja arimasen deshita.", bengali: "গতকাল ছুটি ছিল না।" },
    ] },
    { step: "03", title: "練習B · どうでしたか", instruction: "Experience cue দেখে question ও natural answer—দুই অংশই বলুন।", questions: [
      { prompt: "旅行／楽しい + 天気／いい", answer: "旅行は どうでしたか。— 楽しかったです。天気も よかったです。", romaji: "Ryokou wa dou deshita ka. — Tanoshikatta desu. Tenki mo yokatta desu.", bengali: "ভ্রমণ কেমন ছিল?—মজার ছিল; আবহাওয়াও ভালো ছিল।" },
      { prompt: "パーティー／にぎやか + many people", answer: "パーティーは どうでしたか。— とても にぎやかでした。いろいろな 人に 会いました。", romaji: "Paatii wa dou deshita ka. — Totemo nigiyaka deshita. Iroiro na hito ni aimashita.", bengali: "Party খুব জমজমাট ছিল; নানা মানুষের সঙ্গে দেখা হয়েছে।" },
      { prompt: "映画／おもしろくない", answer: "映画は どうでしたか。— あまり おもしろくなかったです。", romaji: "Eiga wa dou deshita ka. — Amari omoshirokunakatta desu.", bengali: "সিনেমাটি খুব মজার ছিল না।" },
    ] },
    { step: "04", title: "Comparison · より／ほうが", instruction: "প্রথমে baseline より দিয়ে statement, পরে どちら question-এর full answer বলুন।", questions: [
      { prompt: "北海道／九州／大きい", answer: "北海道は 九州より 大きいです。", romaji: "Hokkaidou wa Kyuushuu yori ookii desu.", bengali: "Hokkaido Kyushu-এর চেয়ে বড়।" },
      { prompt: "ニューヨーク／大阪／寒い／ずっと", answer: "ニューヨークは 大阪より ずっと 寒いです。", romaji: "Nyuuyooku wa Oosaka yori zutto samui desu.", bengali: "New York Osaka-র চেয়ে অনেক বেশি ঠান্ডা।" },
      { prompt: "バス・電車／速い", answer: "バスと 電車と どちらが 速いですか。— 電車のほうが 速いです。", romaji: "Basu to densha to dochira ga hayai desu ka. — Densha no hou ga hayai desu.", bengali: "Bus ও train-এর মধ্যে কোনটি দ্রুত?—Train বেশি দ্রুত।" },
      { prompt: "海・山／好き／both", answer: "海と 山と どちらが 好きですか。— どちらも 好きです。", romaji: "Umi to yama to dochira ga suki desu ka. — Dochira mo suki desu.", bengali: "সমুদ্র ও পাহাড়—দুটিই পছন্দ।" },
    ] },
    { step: "05", title: "Superlative · いちばん", instruction: "দেওয়া category-এর মধ্যে সবচেয়ে উপযুক্ত item দিয়ে answer তৈরি করুন।", questions: [
      { prompt: "日本料理／何／好き → 天ぷら", answer: "日本料理の中で 何が いちばん 好きですか。— 天ぷらが いちばん 好きです。", romaji: "Nihon ryouri no naka de nani ga ichiban suki desu ka. — Tenpura ga ichiban suki desu.", bengali: "Japanese খাবারের মধ্যে tempura সবচেয়ে পছন্দ।" },
      { prompt: "季節／いつ／好き → 春", answer: "季節の中で いつが いちばん 好きですか。— 春が いちばん 好きです。", romaji: "Kisetsu no naka de itsu ga ichiban suki desu ka. — Haru ga ichiban suki desu.", bengali: "ঋতুর মধ্যে বসন্ত সবচেয়ে পছন্দ।" },
      { prompt: "家族／だれ／背が高い → 父", answer: "家族の中で だれが いちばん 背が 高いですか。— 父が いちばん 高いです。", romaji: "Kazoku no naka de dare ga ichiban se ga takai desu ka. — Chichi ga ichiban takai desu.", bengali: "পরিবারে বাবা সবচেয়ে লম্বা।" },
    ] },
    { step: "06", title: "会話 · 祇園祭はどうでしたか", instruction: "ফিরে আসা, festival experience, superlative ও souvenir choice—এই flow-তে dialogue সম্পূর্ণ করুন।", questions: [
      { prompt: "Home-এ ফিরে greeting", answer: "ただいま。— お帰りなさい。", romaji: "Tadaima. — Okaerinasai.", bengali: "ফিরে এলাম।—স্বাগতম।" },
      { prompt: "Gion Festival কেমন ছিল?", answer: "祇園祭は どうでしたか。— とても にぎやかでした。", romaji: "Gion-matsuri wa dou deshita ka. — Totemo nigiyaka deshita.", bengali: "Gion Festival খুব জমজমাট ছিল।" },
      { prompt: "Kyoto-র সবচেয়ে famous festival", answer: "京都で 祇園祭が いちばん 有名です。", romaji: "Kyouto de Gion-matsuri ga ichiban yuumei desu.", bengali: "Kyoto-তে Gion Festival সবচেয়ে বিখ্যাত।" },
      { prompt: "Souvenir দুইটির মধ্যে choice", answer: "どちらが いいですか。— こちらのほうが きれいです。", romaji: "Dochira ga ii desu ka. — Kochira no hou ga kirei desu.", bengali: "কোনটি ভালো?—এইটিই বেশি সুন্দর।" },
    ] },
    { step: "07", title: "Reading · 町のスーパー", instruction: "তিনটি supermarket-এর distance, size, price ও goods compare করে প্রশ্নের উত্তর দিন।", questions: [
      { prompt: "毎日屋は どんな 店ですか。", answer: "家から いちばん 近くて、小さい 店です。新しい 魚が 多いです。", romaji: "Ie kara ichiban chikakute, chiisai mise desu. Atarashii sakana ga ooi desu.", bengali: "বাড়ির সবচেয়ে কাছে, ছোট; fresh fish বেশি।" },
      { prompt: "ABCストアは どうですか。", answer: "三つの 店の中で いちばん 安いです。", romaji: "Mittsu no mise no naka de ichiban yasui desu.", bengali: "তিনটি দোকানের মধ্যে সবচেয়ে সস্তা।" },
      { prompt: "ジャパンは どんな 店ですか。", answer: "いちばん 大きくて、外国の 物が 多いですが、遠いです。", romaji: "Ichiban ookikute, gaikoku no mono ga ooi desu ga, tooi desu.", bengali: "সবচেয়ে বড় ও imported goods বেশি, কিন্তু দূরে।" },
      { prompt: "どの 店が いちばん 好きですか。", answer: "ABCストアが いちばん 好きです。安いですから。", romaji: "ABC sutoa ga ichiban suki desu. Yasui desu kara.", bengali: "ABC Store সবচেয়ে পছন্দ, কারণ সস্তা।" },
    ] },
    { step: "08", title: "問題 · Unit 12 self-test", instruction: "Past form, comparison ও superlative মিলিয়ে বইয়ের review-style প্রশ্নের সম্পূর্ণ উত্তর দিন।", questions: [
      { prompt: "きのう／雨／negative", answer: "きのうは 雨じゃありませんでした。", romaji: "Kinou wa ame ja arimasen deshita.", bengali: "গতকাল বৃষ্টি ছিল না।" },
      { prompt: "北海道・大阪／涼しい", answer: "北海道は 大阪より 涼しいです。", romaji: "Hokkaidou wa Oosaka yori suzushii desu.", bengali: "Hokkaido Osaka-র চেয়ে শীতল।" },
      { prompt: "サッカー・野球／おもしろい → soccer", answer: "サッカーと 野球と どちらが おもしろいですか。— サッカーのほうが おもしろいです。", romaji: "Sakkaa to yakyuu to dochira ga omoshiroi desu ka. — Sakkaa no hou ga omoshiroi desu.", bengali: "Football baseball-এর চেয়ে বেশি মজার।" },
      { prompt: "一年／いつ／忙しい → 12月", answer: "一年で いつが いちばん 忙しいですか。— 十二月が いちばん 忙しいです。", romaji: "Ichinen de itsu ga ichiban isogashii desu ka. — Juunigatsu ga ichiban isogashii desu.", bengali: "বছরের মধ্যে December সবচেয়ে ব্যস্ত।" },
    ] },
  ],
};

const unitThirteenPractice: UnitPracticeDetails = {
  heroImage: "/images/projects/n5-vocabulary/unit-13.webp",
  heroAlt: "কেনাকাটা, খাওয়া, ভ্রমণ ও অবসর পরিকল্পনা নিয়ে Unit 13-এর রঙিন practice illustration",
  dialogueImage: "/images/projects/n5-vocabulary/unit-13.webp",
  heroEyebrow: "UNIT 13 · 欲しい · Vたい · PURPOSE",
  heroTitle: "কী চাই, কী করতে চাই, আর কোথায় কেন যাচ্ছি?",
  heroDescription: "欲しいです দিয়ে জিনিসের ইচ্ছা, Vます-stem + たいです দিয়ে কাজের ইচ্ছা এবং place へ Vます-stem + に行きます দিয়ে যাওয়ার উদ্দেশ্য—এই তিনটি pattern ধাপে ধাপে practice করুন।",
  dialogueTitle: "別々にお願いします · Restaurant conversation",
  dialogueAlt: "রেস্তোরাঁয় order, খাবারের পছন্দ এবং আলাদা bill দেওয়ার Japanese conversation",
  dialogueCaption: [
    { name: "山田", text: "わたしは てんぷら定食が 欲しいです。" },
    { name: "ミラー", text: "わたしは 牛どんを 食べたいです。" },
    { name: "店の人", text: "全部で 1,680円です。" },
  ],
  modelLabel: "文型モデル",
  modelTitle: "N が 欲しいです · Vます-stem + たいです · place へ Vます-stem + に行きます",
  challengeTitle: "Weekend desire map",
  challengeDescription: "আপনি কী চান, কী করতে চান, কোথায় যেতে চান এবং সেখানে কী করতে চান—এই চারটি বিষয় নিয়ে অন্তত ছয়টি Japanese sentence বলুন।",
  usefulWords: [
    { japanese: "欲しい", romaji: "hoshii", bengali: "চাই / প্রয়োজন" },
    { japanese: "～たい", romaji: "~tai", bengali: "～ করতে চাই" },
    { japanese: "遊びます", romaji: "asobimasu", bengali: "খেলি / আনন্দ করি" },
    { japanese: "泳ぎます", romaji: "oyogimasu", bengali: "সাঁতার কাটি" },
    { japanese: "迎えます", romaji: "mukaemasu", bengali: "অভ্যর্থনা করতে যাই" },
    { japanese: "買い物します", romaji: "kaimono shimasu", bengali: "কেনাকাটা করি" },
    { japanese: "食事します", romaji: "shokuji shimasu", bengali: "খাবার খাই" },
    { japanese: "別々に", romaji: "betsubetsu ni", bengali: "আলাদা আলাদাভাবে" },
  ],
  answerPatterns: [
    { japanese: "N が 欲しいです。", romaji: "N ga hoshii desu.", bengali: "আমি N চাই।", positive: true },
    { japanese: "N は 欲しくないです。", romaji: "N wa hoshikunai desu.", bengali: "আমি N চাই না।", positive: false },
    { japanese: "Vます-stem + たいです。", romaji: "V-masu stem + tai desu.", bengali: "আমি কাজটি করতে চাই।", positive: true },
    { japanese: "Vます-stem + たくないです。", romaji: "V-masu stem + takunai desu.", bengali: "আমি কাজটি করতে চাই না।", positive: false },
  ],
  memoryPoints: [
    { symbol: "が", meaning: "欲しい-এর আগে চাওয়া জিনিসকে mark করে" },
    { symbol: "たい", meaning: "ます বাদ দিয়ে verb stem-এর সঙ্গে বসে নিজের ইচ্ছা জানায়" },
    { symbol: "に", meaning: "movement verb-এর আগে যাওয়ার উদ্দেশ্যকে mark করে" },
    { symbol: "何か", meaning: "কিছু; affirmative sentence-এ か থাকে" },
    { symbol: "どこか", meaning: "কোথাও; question নয় হলে か-সহ indefinite meaning দেয়" },
    { symbol: "何も", meaning: "negative-এর সঙ্গে কিছুই না" },
  ],
  selfIntroduction: {
    japanese: "休みは 京都へ 遊びに 行きたいです。新しい カメラが 欲しいです。京都で 写真を たくさん 撮りたいです。",
    romaji: "Yasumi wa Kyouto e asobi ni ikitai desu. Atarashii kamera ga hoshii desu. Kyouto de shashin o takusan toritai desu.",
    bengali: "ছুটিতে Kyoto ঘুরতে যেতে চাই। একটি নতুন camera চাই। Kyoto-তে অনেক ছবি তুলতে চাই।",
  },
  grammarQuiz: [
    { question: "‘আমি গাড়ি চাই’—সঠিক sentence কোনটি?", options: ["わたしは 車が 欲しいです。", "わたしは 車を 欲しいです。", "わたしは 車に 欲しいです。", "わたしは 車へ 欲しいです。"], correctAnswer: "わたしは 車が 欲しいです。", explanation: "欲しい-এর object সাধারণত が দিয়ে চিহ্নিত হয়।" },
    { question: "‘Sushi খেতে চাই’—কোনটি ঠিক?", options: ["すしを 食べたいです。", "すしを 食べますたいです。", "すしに 食べたいです。", "すしが 食べにです。"], correctAnswer: "すしを 食べたいです。", explanation: "食べます থেকে ます বাদ দিলে 食べ; তারপর たいです।" },
    { question: "‘Coffee পান করতে চাই না’—সঠিক negative কোনটি?", options: ["コーヒーを 飲みませんたいです。", "コーヒーは 飲みたくないです。", "コーヒーが 飲みないです。", "コーヒーを 飲みたいじゃありません。"], correctAnswer: "コーヒーは 飲みたくないです。", explanation: "たい একটি い-adjective-এর মতো বদলায়: たくないです।" },
    { question: "‘Kyoto-তে ছবি তুলতে যাই’—সঠিক pattern কোনটি?", options: ["京都へ 写真を 撮りに 行きます。", "京都へ 写真を 撮りますに 行きます。", "京都に 写真が 撮りたいです。", "京都で 写真へ 行きます。"], correctAnswer: "京都へ 写真を 撮りに 行きます。", explanation: "Purpose pattern: place へ + Vます-stem + に + 行きます।" },
    { question: "‘কিছু খেতে চাই’—কোনটি natural?", options: ["何か 食べたいです。", "何も 食べたいです。", "何がを 食べたいです。", "何かを 食べません。"], correctAnswer: "何か 食べたいです。", explanation: "Affirmative indefinite ‘কিছু’ বলতে 何か ব্যবহার হয়।" },
    { question: "‘কিছুই খেতে চাই না’—কোনটি ঠিক?", options: ["何か 食べたくないです。", "何も 食べたくないです。", "何を 食べたいです。", "何でも 食べたいです。"], correctAnswer: "何も 食べたくないです。", explanation: "何も negative predicate-এর সঙ্গে ‘কিছুই না’ বোঝায়।" },
  ],
  dialogue: [
    { speaker: "山田", japanese: "もう 12時ですよ。昼ごはんを 食べに 行きませんか。", romaji: "Mou juuniji desu yo. Hirugohan o tabe ni ikimasen ka.", bengali: "ইতিমধ্যে ১২টা। দুপুরের খাবার খেতে যাবেন?" },
    { speaker: "ミラー", japanese: "ええ、行きましょう。きょうは 日本料理が 食べたいですね。", romaji: "Ee, ikimashou. Kyou wa Nihon ryouri ga tabetai desu ne.", bengali: "হ্যাঁ, চলুন। আজ Japanese খাবার খেতে চাই।" },
    { speaker: "山田", japanese: "じゃ、あの店へ 行きましょう。", romaji: "Ja, ano mise e ikimashou.", bengali: "তাহলে ঐ দোকানে চলুন।" },
    { speaker: "店の人", japanese: "ご注文は？", romaji: "Gochuumon wa?", bengali: "আপনাদের order কী?" },
    { speaker: "ミラー", japanese: "わたしは てんぷら定食が 欲しいです。", romaji: "Watashi wa tenpura teishoku ga hoshii desu.", bengali: "আমি tempura set meal চাই।" },
    { speaker: "山田", japanese: "わたしは 牛どんを 食べたいです。", romaji: "Watashi wa gyuudon o tabetai desu.", bengali: "আমি beef bowl খেতে চাই।" },
    { speaker: "店の人", japanese: "全部で 1,680円です。", romaji: "Zenbu de sen roppyaku hachijuu en desu.", bengali: "মোট ১,৬৮০ yen।" },
    { speaker: "ミラー", japanese: "すみません。別々に お願いします。", romaji: "Sumimasen. Betsubetsu ni onegaishimasu.", bengali: "মাফ করবেন, bill আলাদা করে দিন।" },
  ],
  profiles: [],
  modules: [
    { step: "01", title: "文型 · 欲しいです", instruction: "ছবি বা cue দেখে চাওয়া জিনিসটি が দিয়ে সম্পূর্ণ sentence বলুন।", questions: [
      { prompt: "カメラ", answer: "わたしは カメラが 欲しいです。", romaji: "Watashi wa kamera ga hoshii desu.", bengali: "আমি একটি camera চাই।" },
      { prompt: "新しい パソコン", answer: "新しい パソコンが 欲しいです。", romaji: "Atarashii pasokon ga hoshii desu.", bengali: "আমি নতুন computer চাই।" },
      { prompt: "車／negative", answer: "車は 欲しくないです。", romaji: "Kuruma wa hoshikunai desu.", bengali: "আমি গাড়ি চাই না।" },
      { prompt: "何", answer: "何が 欲しいですか。", romaji: "Nani ga hoshii desu ka.", bengali: "আপনি কী চান?" },
    ] },
    { step: "02", title: "練習A · Vたい form builder", instruction: "ます-form থেকে ます বাদ দিয়ে たい／たくない যোগ করুন।", questions: [
      { prompt: "食べます → affirmative", answer: "食べたいです。", romaji: "Tabetai desu.", bengali: "খেতে চাই।" },
      { prompt: "飲みます → affirmative", answer: "飲みたいです。", romaji: "Nomitai desu.", bengali: "পান করতে চাই।" },
      { prompt: "買います → negative", answer: "買いたくないです。", romaji: "Kaitakunai desu.", bengali: "কিনতে চাই না।" },
      { prompt: "します → affirmative", answer: "したいです。", romaji: "Shitai desu.", bengali: "করতে চাই।" },
      { prompt: "来ます → negative", answer: "来たくないです。", romaji: "Kitakunai desu.", bengali: "আসতে চাই না।" },
    ] },
    { step: "03", title: "練習B · What do you want to do?", instruction: "পরিস্থিতি দেখে Vたいです দিয়ে natural ইচ্ছা প্রকাশ করুন।", questions: [
      { prompt: "暑い／プール", answer: "暑いですから、プールで 泳ぎたいです。", romaji: "Atsui desu kara, puuru de oyogitai desu.", bengali: "গরম, তাই pool-এ সাঁতার কাটতে চাই।" },
      { prompt: "おなかが すきました", answer: "何か 食べたいです。", romaji: "Nanika tabetai desu.", bengali: "কিছু খেতে চাই।" },
      { prompt: "疲れました", answer: "何も したくないです。休みたいです。", romaji: "Nanimo shitakunai desu. Yasumitai desu.", bengali: "কিছুই করতে চাই না; বিশ্রাম নিতে চাই।" },
      { prompt: "週末／映画", answer: "週末は 映画を 見たいです。", romaji: "Shuumatsu wa eiga o mitai desu.", bengali: "সপ্তাহান্তে cinema দেখতে চাই।" },
    ] },
    { step: "04", title: "Purpose · ～に行きます", instruction: "Destination এবং কাজের cue মিলিয়ে যাওয়ার উদ্দেশ্যসহ sentence বানান।", questions: [
      { prompt: "デパート／買い物します", answer: "デパートへ 買い物に 行きます。", romaji: "Depaato e kaimono ni ikimasu.", bengali: "Department store-এ কেনাকাটা করতে যাই।" },
      { prompt: "郵便局／切手を 買います", answer: "郵便局へ 切手を 買いに 行きます。", romaji: "Yuubinkyoku e kitte o kai ni ikimasu.", bengali: "Post office-এ stamp কিনতে যাই।" },
      { prompt: "図書館／本を 借ります", answer: "図書館へ 本を 借りに 行きます。", romaji: "Toshokan e hon o kari ni ikimasu.", bengali: "Library-তে বই ধার করতে যাই।" },
      { prompt: "駅／友達を 迎えます", answer: "駅へ 友達を 迎えに 行きます。", romaji: "Eki e tomodachi o mukae ni ikimasu.", bengali: "Station-এ বন্ধুকে নিতে যাই।" },
      { prompt: "フランス／料理を 習います", answer: "フランスへ 料理を 習いに 行きます。", romaji: "Furansu e ryouri o narai ni ikimasu.", bengali: "France-এ রান্না শিখতে যাই।" },
    ] },
    { step: "05", title: "何か・どこか・何も", instruction: "Affirmative indefinite এবং negative total—দুই ধরনের particle বেছে sentence সম্পূর্ণ করুন।", questions: [
      { prompt: "おなかが すきました。____ 食べたいです。", answer: "何か 食べたいです。", romaji: "Nanika tabetai desu.", bengali: "কিছু খেতে চাই।" },
      { prompt: "夏休みは ____ 行きたいです。", answer: "夏休みは どこか 行きたいです。", romaji: "Natsuyasumi wa dokoka ikitai desu.", bengali: "গ্রীষ্মের ছুটিতে কোথাও যেতে চাই।" },
      { prompt: "きょうは ____ したくないです。", answer: "きょうは 何も したくないです。", romaji: "Kyou wa nanimo shitakunai desu.", bengali: "আজ কিছুই করতে চাই না।" },
      { prompt: "今晩 ____ 会いますか。", answer: "今晩 だれかに 会いますか。", romaji: "Konban dareka ni aimasu ka.", bengali: "আজ রাতে কারও সঙ্গে দেখা করবেন?" },
    ] },
    { step: "06", title: "会話 · 別々にお願いします", instruction: "Restaurant flow: invitation → desire → order → payment—এই ক্রমে উত্তর দিন।", questions: [
      { prompt: "昼ごはん invitation", answer: "昼ごはんを 食べに 行きませんか。— ええ、行きましょう。", romaji: "Hirugohan o tabe ni ikimasen ka. — Ee, ikimashou.", bengali: "দুপুরের খাবার খেতে যাবেন?—হ্যাঁ, চলুন।" },
      { prompt: "Japanese food desire", answer: "きょうは 日本料理が 食べたいです。", romaji: "Kyou wa Nihon ryouri ga tabetai desu.", bengali: "আজ Japanese খাবার খেতে চাই।" },
      { prompt: "Order: tempura set + gyuudon", answer: "てんぷら定食と 牛どんを お願いします。", romaji: "Tenpura teishoku to gyuudon o onegaishimasu.", bengali: "একটি tempura set এবং gyuudon দিন।" },
      { prompt: "Bill separately", answer: "すみません。別々に お願いします。", romaji: "Sumimasen. Betsubetsu ni onegaishimasu.", bengali: "মাফ করবেন, bill আলাদা করে দিন।" },
    ] },
    { step: "07", title: "練習C · Plan a weekend", instruction: "প্রশ্নের উত্তর এক শব্দে নয়—কারণ বা purpose-সহ পূর্ণ sentence-এ দিন।", questions: [
      { prompt: "週末は 何を したいですか。", answer: "友達と 公園へ 遊びに 行きたいです。", romaji: "Tomodachi to kouen e asobi ni ikitai desu.", bengali: "বন্ধুর সঙ্গে park-এ ঘুরতে যেতে চাই।" },
      { prompt: "誕生日に 何が 欲しいですか。", answer: "新しい 時計が 欲しいです。", romaji: "Atarashii tokei ga hoshii desu.", bengali: "জন্মদিনে নতুন ঘড়ি চাই।" },
      { prompt: "夏休みは どこへ 行きたいですか。", answer: "北海道へ スキーを しに 行きたいです。", romaji: "Hokkaidou e sukii o shi ni ikitai desu.", bengali: "Hokkaido-তে ski করতে যেতে চাই।" },
      { prompt: "今晩 何を 食べたいですか。", answer: "インド料理を 食べたいです。", romaji: "Indo ryouri o tabetai desu.", bengali: "আজ রাতে Indian খাবার খেতে চাই।" },
    ] },
    { step: "08", title: "問題 · Unit 13 self-test", instruction: "欲しい, たい, purpose に এবং indefinite words মিলিয়ে review-style উত্তর দিন।", questions: [
      { prompt: "カメラ／欲しい／question", answer: "どんな カメラが 欲しいですか。— 軽い カメラが 欲しいです。", romaji: "Donna kamera ga hoshii desu ka. — Karui kamera ga hoshii desu.", bengali: "কেমন camera চান?—হালকা camera চাই।" },
      { prompt: "公園／散歩します／purpose", answer: "公園へ 散歩に 行きます。", romaji: "Kouen e sanpo ni ikimasu.", bengali: "Park-এ হাঁটতে যাই।" },
      { prompt: "今／何も／negative desire", answer: "今は 何も 飲みたくないです。", romaji: "Ima wa nanimo nomitakunai desu.", bengali: "এখন কিছুই পান করতে চাই না।" },
      { prompt: "日本／美術を 勉強します／purpose", answer: "日本へ 美術を 勉強しに 来ました。", romaji: "Nihon e bijutsu o benkyou shi ni kimashita.", bengali: "Japan-এ fine arts পড়তে এসেছি।" },
      { prompt: "駅／友達／迎えます", answer: "駅へ 友達を 迎えに 行きます。", romaji: "Eki e tomodachi o mukae ni ikimasu.", bengali: "Station-এ বন্ধুকে নিতে যাচ্ছি।" },
    ] },
  ],
};

const unitFourteenPractice: UnitPracticeDetails = {
  heroImage: "/images/projects/n5-vocabulary/unit-14.webp",
  heroAlt: "অনুরোধ, সাহায্যের প্রস্তাব, চলমান কাজ এবং পথ নির্দেশনা নিয়ে Unit 14 practice illustration",
  dialogueImage: "/images/projects/n5-vocabulary/unit-14.webp",
  heroEyebrow: "UNIT 14 · て-FORM · REQUEST · ACTION",
  heroTitle: "কাজটি করতে বলুন, সাহায্য করুন, আর এখন কী হচ্ছে তা বলুন",
  heroDescription: "ます-form থেকে て-form তৈরি, Vてください দিয়ে অনুরোধ, Vています দিয়ে চলমান কাজ এবং Vましょうか দিয়ে সাহায্যের প্রস্তাব—ছবি ও পরিস্থিতি ধরে ধাপে ধাপে practice করুন।",
  dialogueTitle: "みどり町まで お願いします · Taxi conversation",
  dialogueAlt: "ট্যাক্সিতে গন্তব্য, ডানে মোড়, সোজা যাওয়া, থামা এবং ভাড়া দেওয়ার Japanese conversation",
  dialogueCaption: [
    { name: "カリナ", text: "みどり町まで お願いします。" },
    { name: "カリナ", text: "あの 信号を 右へ 曲がってください。" },
    { name: "運転手", text: "3,200円の お釣りです。ありがとうございました。" },
  ],
  modelLabel: "文型モデル",
  modelTitle: "Vてください · Vています · Vましょうか",
  challengeTitle: "Station help mission",
  challengeDescription: "একজন যাত্রীকে station-এর পথ দেখান, তার ব্যাগ বহনের প্রস্তাব দিন এবং আশপাশে মানুষ কী করছে তা Japanese-এ বলুন।",
  usefulWords: [
    { japanese: "待ってください", romaji: "matte kudasai", bengali: "অনুগ্রহ করে অপেক্ষা করুন" },
    { japanese: "手伝います", romaji: "tetsudaimasu", bengali: "সাহায্য করি" },
    { japanese: "曲がります", romaji: "magarimasu", bengali: "মোড় নিই" },
    { japanese: "まっすぐ", romaji: "massugu", bengali: "সোজা" },
    { japanese: "ゆっくり", romaji: "yukkuri", bengali: "ধীরে" },
    { japanese: "すぐ", romaji: "sugu", bengali: "এখনই" },
    { japanese: "信号", romaji: "shingou", bengali: "ট্রাফিক সিগন্যাল" },
    { japanese: "お釣り", romaji: "otsuri", bengali: "ফেরত টাকা" },
  ],
  answerPatterns: [
    { japanese: "Vて ください。", romaji: "V-te kudasai.", bengali: "অনুগ্রহ করে কাজটি করুন।", positive: true },
    { japanese: "Vて います。", romaji: "V-te imasu.", bengali: "এখন কাজটি করছে।", positive: true },
    { japanese: "Vましょうか。", romaji: "V-mashou ka.", bengali: "আমি কি কাজটি করে দেব?", positive: true },
    { japanese: "はい、お願いします。", romaji: "Hai, onegaishimasu.", bengali: "হ্যাঁ, অনুগ্রহ করে।", positive: true },
    { japanese: "いいえ、けっこうです。", romaji: "Iie, kekkou desu.", bengali: "না, প্রয়োজন নেই।", positive: false },
  ],
  memoryPoints: [
    { symbol: "い・ち・り", meaning: "って; み・び・に → んで" },
    { symbol: "き・ぎ・し", meaning: "いて・いで・して; 行きます শুধু 行って" },
    { symbol: "Vてください", meaning: "ভদ্র অনুরোধ" },
    { symbol: "Vています", meaning: "এখন চলমান কাজ" },
    { symbol: "Vましょうか", meaning: "সাহায্যের প্রস্তাব" },
    { symbol: "道案内", meaning: "まっすぐ, 右へ／左へ, 曲がってください" },
  ],
  selfIntroduction: {
    japanese: "今、日本語を 勉強しています。毎朝、電車で 会社へ 行っています。荷物が 多いですね。持ちましょうか。駅までの 道を 教えてください。",
    romaji: "Ima, Nihongo o benkyou shite imasu. Maiasa, densha de kaisha e itte imasu. Nimotsu ga ooi desu ne. Mochimashou ka. Eki made no michi o oshiete kudasai.",
    bengali: "এখন জাপানি পড়ছি। প্রতিদিন সকালে ট্রেনে অফিসে যাই। মালপত্র বেশি—আমি কি বহন করব? স্টেশন পর্যন্ত পথটি বলুন।",
  },
  grammarQuiz: [
    { question: "書きます-এর て-form কোনটি?", options: ["書いて", "書って", "書んで", "書きて"], correctAnswer: "書いて", explanation: "き → いて হয়: 書きます → 書いて।" },
    { question: "行きます-এর সঠিক て-form?", options: ["行いて", "行って", "行きて", "行んで"], correctAnswer: "行って", explanation: "行きます ব্যতিক্রম; এর て-form 行って।" },
    { question: "‘অনুগ্রহ করে ধীরে বলুন’ কোনটি?", options: ["ゆっくり 話してください。", "ゆっくり 話しています。", "ゆっくり 話しましょうか。", "ゆっくり 話しました。"], correctAnswer: "ゆっくり 話してください。", explanation: "ভদ্র অনুরোধে Vてください ব্যবহার হয়।" },
    { question: "‘মিলার এখন ফোন করছেন’ কোনটি?", options: ["ミラーさんは 電話を かけています。", "ミラーさんは 電話を かけてください。", "ミラーさんは 電話を かけましょうか。", "ミラーさんは 電話を かけません。"], correctAnswer: "ミラーさんは 電話を かけています。", explanation: "চলমান কাজ বোঝাতে Vています।" },
    { question: "ব্যাগ বহনের প্রস্তাব কীভাবে করবেন?", options: ["荷物を 持ちましょうか。", "荷物を 持ってください。", "荷物を 持っています。", "荷物を 持ちません。"], correctAnswer: "荷物を 持ちましょうか。", explanation: "নিজে সাহায্য করার প্রস্তাব Vましょうか।" },
    { question: "‘এখন বৃষ্টি হচ্ছে না’ কোনটি?", options: ["今、雨が 降っていません。", "今、雨が 降りませんでした。", "今、雨を 降ってください。", "今、雨が 降りましょうか。"], correctAnswer: "今、雨が 降っていません。", explanation: "চলমান অবস্থার negative: Vていません।" },
  ],
  dialogue: [
    { speaker: "カリナ", japanese: "みどり町まで お願いします。", romaji: "Midorichou made onegaishimasu.", bengali: "মিদোরি-মাচি পর্যন্ত নিয়ে চলুন।" },
    { speaker: "運転手", japanese: "はい。", romaji: "Hai.", bengali: "জি।" },
    { speaker: "カリナ", japanese: "すみません。あの 信号を 右へ 曲がってください。", romaji: "Sumimasen. Ano shingou o migi e magatte kudasai.", bengali: "মাফ করবেন, ওই সিগন্যালে ডানে মোড় নিন।" },
    { speaker: "運転手", japanese: "右ですね。", romaji: "Migi desu ne.", bengali: "ডানে, তাই তো?" },
    { speaker: "カリナ", japanese: "ええ、まっすぐ 行ってください。", romaji: "Ee, massugu itte kudasai.", bengali: "জি, সোজা যান।" },
    { speaker: "カリナ", japanese: "あの 花屋の 前で 止めてください。", romaji: "Ano hanaya no mae de tomete kudasai.", bengali: "ওই ফুলের দোকানের সামনে থামুন।" },
    { speaker: "運転手", japanese: "はい。1,800円です。", romaji: "Hai. Sen happyaku en desu.", bengali: "জি। ১,৮০০ ইয়েন।" },
    { speaker: "カリナ", japanese: "これで お願いします。", romaji: "Kore de onegaishimasu.", bengali: "এটা থেকে নিন।" },
    { speaker: "運転手", japanese: "3,200円の お釣りです。ありがとうございました。", romaji: "Sanzen nihyaku en no otsuri desu. Arigatou gozaimashita.", bengali: "৩,২০০ ইয়েন ফেরত। ধন্যবাদ।" },
  ],
  profiles: [],
  modules: [
    { step: "01", title: "練習A · て-form active recall", instruction: "ます-form দেখে বইয়ের chart-এর নিয়মে て-form বলুন।", questions: [
      { prompt: "書きます", answer: "書いて", romaji: "kaite", bengali: "লিখে" },
      { prompt: "急ぎます", answer: "急いで", romaji: "isoide", bengali: "তাড়াতাড়ি করে" },
      { prompt: "待ちます", answer: "待って", romaji: "matte", bengali: "অপেক্ষা করে" },
      { prompt: "飲みます", answer: "飲んで", romaji: "nonde", bengali: "পান করে" },
      { prompt: "話します", answer: "話して", romaji: "hanashite", bengali: "কথা বলে" },
      { prompt: "行きます", answer: "行って", romaji: "itte", bengali: "গিয়ে—ব্যতিক্রম" },
      { prompt: "食べます", answer: "食べて", romaji: "tabete", bengali: "খেয়ে" },
      { prompt: "します／来ます", answer: "して／来て", romaji: "shite / kite", bengali: "করে / এসে" },
    ] },
    { step: "02", title: "練習A · Vてください", instruction: "Situation cue থেকে ভদ্র অনুরোধের পূর্ণ sentence বলুন।", questions: [
      { prompt: "名前／書きます", answer: "名前を 書いてください。", romaji: "Namae o kaite kudasai.", bengali: "অনুগ্রহ করে নাম লিখুন।" },
      { prompt: "塩／取ります", answer: "塩を 取ってください。", romaji: "Shio o totte kudasai.", bengali: "অনুগ্রহ করে লবণটি দিন।" },
      { prompt: "電話番号／教えます", answer: "電話番号を 教えてください。", romaji: "Denwa bangou o oshiete kudasai.", bengali: "অনুগ্রহ করে ফোন নম্বর বলুন।" },
      { prompt: "ゆっくり／話します", answer: "ゆっくり 話してください。", romaji: "Yukkuri hanashite kudasai.", bengali: "অনুগ্রহ করে ধীরে কথা বলুন।" },
      { prompt: "パスポート／見せます", answer: "パスポートを 見せてください。", romaji: "Pasupooto o misete kudasai.", bengali: "অনুগ্রহ করে পাসপোর্ট দেখান।" },
    ] },
    { step: "03", title: "練習B · Picture requests", instruction: "ছবির কাজটি てください দিয়ে বলুন; request-এর tone নরম রাখুন।", questions: [
      { prompt: "খাবার সামনে আছে—অতিথিকে বলুন", answer: "どうぞ 食べてください。", romaji: "Douzo tabete kudasai.", bengali: "অনুগ্রহ করে খান।" },
      { prompt: "সিঁড়ি দিয়ে ওপরে যেতে বলুন", answer: "階段で 上へ 行ってください。", romaji: "Kaidan de ue e itte kudasai.", bengali: "সিঁড়ি দিয়ে ওপরে যান।" },
      { prompt: "চেয়ারে বসতে বলুন", answer: "どうぞ 座ってください。", romaji: "Douzo suwatte kudasai.", bengali: "অনুগ্রহ করে বসুন।" },
      { prompt: "আরেকটু ধীরে বলতে বলুন", answer: "もう少し ゆっくり 話してください。", romaji: "Mou sukoshi yukkuri hanashite kudasai.", bengali: "আরেকটু ধীরে বলুন।" },
      { prompt: "জানালা খুলতে বলুন", answer: "窓を 開けてください。", romaji: "Mado o akete kudasai.", bengali: "জানালাটি খুলুন।" },
    ] },
    { step: "04", title: "練習B · Vています", instruction: "এখন দৃশ্যটিতে কী হচ্ছে—Vています দিয়ে বলুন।", questions: [
      { prompt: "ミラーさん／レポート／書きます", answer: "ミラーさんは レポートを 書いています。", romaji: "Miraa-san wa repooto o kaite imasu.", bengali: "মিলার রিপোর্ট লিখছেন।" },
      { prompt: "男の人／たばこ／吸います", answer: "男の人は たばこを 吸っています。", romaji: "Otoko no hito wa tabako o sutte imasu.", bengali: "লোকটি ধূমপান করছেন।" },
      { prompt: "二人／踊ります", answer: "二人は 踊っています。", romaji: "Futari wa odotte imasu.", bengali: "দুজন নাচছেন।" },
      { prompt: "カリナさん／電話／かけます", answer: "カリナさんは 電話を かけています。", romaji: "Karina-san wa denwa o kakete imasu.", bengali: "কারিনা ফোন করছেন।" },
      { prompt: "今／雨／negative", answer: "今、雨が 降っていません。", romaji: "Ima, ame ga futte imasen.", bengali: "এখন বৃষ্টি হচ্ছে না।" },
    ] },
    { step: "05", title: "練習B · Vましょうか", instruction: "যে সাহায্যটি দরকার সেটি Vましょうか দিয়ে প্রস্তাব করুন।", questions: [
      { prompt: "電気／消します", answer: "電気を 消しましょうか。— ええ、お願いします。", romaji: "Denki o keshimashou ka. — Ee, onegaishimasu.", bengali: "লাইট বন্ধ করে দেব?—জি, অনুগ্রহ করে।" },
      { prompt: "塩／取ります", answer: "塩を 取りましょうか。— ええ、お願いします。", romaji: "Shio o torimashou ka. — Ee, onegaishimasu.", bengali: "লবণটি এগিয়ে দেব?—জি।" },
      { prompt: "荷物／持ちます", answer: "荷物を 持ちましょうか。— すみません。お願いします。", romaji: "Nimotsu o mochimashou ka. — Sumimasen. Onegaishimasu.", bengali: "ব্যাগটি বহন করব?—অনুগ্রহ করে।" },
      { prompt: "エアコン／つけます", answer: "エアコンを つけましょうか。— いいえ、けっこうです。", romaji: "Eakon o tsukemashou ka. — Iie, kekkou desu.", bengali: "এসি চালু করব?—না, প্রয়োজন নেই।" },
      { prompt: "駅まで／迎えに行きます", answer: "駅まで 迎えに 行きましょうか。", romaji: "Eki made mukae ni ikimashou ka.", bengali: "স্টেশন পর্যন্ত নিতে আসব?" },
    ] },
    { step: "06", title: "会話 · みどり町まで", instruction: "Taxi conversation-এর route cue দেখে driver-কে সঠিক নির্দেশ দিন।", questions: [
      { prompt: "Destination: みどり町", answer: "みどり町まで お願いします。", romaji: "Midorichou made onegaishimasu.", bengali: "মিদোরি-মাচি পর্যন্ত চলুন।" },
      { prompt: "Signal-এ ডানে", answer: "あの 信号を 右へ 曲がってください。", romaji: "Ano shingou o migi e magatte kudasai.", bengali: "ওই সিগন্যালে ডানে মোড় নিন।" },
      { prompt: "তারপর সোজা", answer: "まっすぐ 行ってください。", romaji: "Massugu itte kudasai.", bengali: "সোজা যান।" },
      { prompt: "ফুলের দোকানের সামনে থামুন", answer: "あの 花屋の 前で 止めてください。", romaji: "Ano hanaya no mae de tomete kudasai.", bengali: "ফুলের দোকানের সামনে থামুন।" },
      { prompt: "ভাড়া 1,800円; 5,000円 দিন", answer: "これで お願いします。— 3,200円の お釣りです。", romaji: "Kore de onegaishimasu. — Sanzen nihyaku en no otsuri desu.", bengali: "এটা থেকে নিন।—ফেরত ৩,২০০ ইয়েন।" },
    ] },
    { step: "07", title: "Direction lab · Station route", instruction: "Map cue থেকে একাধিক direction জুড়ে natural নির্দেশ তৈরি করুন।", questions: [
      { prompt: "২য় মোড়／বামে", answer: "二つ目の 角を 左へ 曲がってください。", romaji: "Futatsume no kado o hidari e magatte kudasai.", bengali: "দ্বিতীয় মোড়ে বামে ঘুরুন।" },
      { prompt: "সোজা／ticket office সামনে", answer: "まっすぐ 行って、切符売り場の 前で 待ってください。", romaji: "Massugu itte, kippu uriba no mae de matte kudasai.", bengali: "সোজা গিয়ে টিকিট কাউন্টারের সামনে অপেক্ষা করুন।" },
      { prompt: "Elevator／২階", answer: "エレベーターで 2階へ 行ってください。", romaji: "Erebeetaa de nikai e itte kudasai.", bengali: "লিফটে দ্বিতীয় তলায় যান।" },
      { prompt: "改札口／右", answer: "改札口を 出て、右へ 曲がってください。", romaji: "Kaisatsuguchi o dete, migi e magatte kudasai.", bengali: "গেট থেকে বেরিয়ে ডানে ঘুরুন।" },
    ] },
    { step: "08", title: "問題 · Unit 14 self-test", instruction: "て-form, request, ongoing action, offer ও direction একসঙ্গে ব্যবহার করে উত্তর দিন।", questions: [
      { prompt: "持ちます → て-form", answer: "持って", romaji: "motte", bengali: "ধরে/বহন করে" },
      { prompt: "窓／少し／offer", answer: "窓を 少し 開けましょうか。", romaji: "Mado o sukoshi akemashou ka.", bengali: "জানালাটি একটু খুলে দেব?" },
      { prompt: "コピー／5枚／offer", answer: "これを 5枚 コピーしましょうか。", romaji: "Kore o gomai kopii shimashou ka.", bengali: "এটার পাঁচ কপি করে দেব?" },
      { prompt: "ミラーさん／会議室／います", answer: "ミラーさんは 会議室に います。", romaji: "Miraa-san wa kaigishitsu ni imasu.", bengali: "মিলার meeting room-এ আছেন।" },
      { prompt: "পুরুষটি এখন বই পড়ছেন", answer: "男の人は 今、本を 読んでいます。", romaji: "Otoko no hito wa ima hon o yonde imasu.", bengali: "লোকটি এখন বই পড়ছেন।" },
      { prompt: "আগামীকাল ১০টায় আসার প্রস্তাব", answer: "あした 10時に 来ましょうか。", romaji: "Ashita juuji ni kimashou ka.", bengali: "আগামীকাল ১০টায় আসব?" },
    ] },
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
  if (unitNumber === 9) return unitNinePractice;
  if (unitNumber === 10) return unitTenPractice;
  if (unitNumber === 11) return unitElevenPractice;
  if (unitNumber === 12) return unitTwelvePractice;
  if (unitNumber === 13) return unitThirteenPractice;
  if (unitNumber === 14) return unitFourteenPractice;
  return undefined;
}
