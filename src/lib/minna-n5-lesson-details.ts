export type LessonDashboard = {
  label: string;
  headline: string;
  summary: string;
  outcome: string;
  roadmap: Array<{ icon: string; title: string; description: string }>;
  conceptTitle: string;
  concepts: Array<{ japanese: string; label: string; note: string; tone: "teal" | "blue" | "gold" | "coral" | "plum" }>;
  dialogue: Array<{ speaker: string; japanese: string; romaji: string; bengali: string }>;
  checklist: string[];
};

const lessons: Record<number, LessonDashboard> = {
  1: {
    label: "IDENTITY · PEOPLE · POLITE SPEECH",
    headline: "নিজের ও অন্যের পরিচয় দিন",
    summary: "নাম, দেশ, পেশা ও বয়স—একটি স্থির noun-sentence structure ব্যবহার করে পরিচয় দেওয়া, প্রশ্ন করা এবং ভদ্রভাবে উত্তর দেওয়া শিখবেন।",
    outcome: "পাঠ শেষে ৩০ সেকেন্ডে নিজের পরিচয় দিতে এবং অন্য কাউকে ৩টি basic question করতে পারবেন।",
    roadmap: [
      { icon: "①", title: "পরিচয় বলুন", description: "N₁ は N₂ です দিয়ে নাম, দেশ ও পেশা বলুন।" },
      { icon: "②", title: "প্রশ্ন ও উত্তর", description: "শেষে か যোগ করে জিজ্ঞেস করুন; はい／いいえ দিয়ে উত্তর দিন।" },
      { icon: "③", title: "তথ্য যুক্ত করুন", description: "も, の এবং さん ব্যবহার করে natural পরিচয় তৈরি করুন।" },
    ],
    conceptTitle: "এক নজরে sentence map",
    concepts: [
      { japanese: "N₁ は N₂ です", label: "পরিচয়", note: "আমি/তিনি কে বা কী", tone: "teal" },
      { japanese: "N₁ は N₂ じゃありません", label: "Negative", note: "N₂ নয়", tone: "coral" },
      { japanese: "N₁ は N₂ ですか", label: "Question", note: "শেষে か", tone: "blue" },
      { japanese: "N₁ も N₂ です", label: "একই তথ্য", note: "ও / এছাড়াও", tone: "gold" },
      { japanese: "N₁ の N₂", label: "সম্পর্ক", note: "প্রতিষ্ঠান, দেশ বা মালিকানা", tone: "plum" },
      { japanese: "名前 + さん", label: "সম্মান", note: "নিজের নামের পরে নয়", tone: "teal" },
    ],
    dialogue: [
      { speaker: "A", japanese: "初めまして。ハリムです。", romaji: "Hajimemashite. Harimu desu.", bengali: "প্রথম পরিচয়। আমি হালিম।" },
      { speaker: "B", japanese: "サラです。学生です。", romaji: "Sara desu. Gakusei desu.", bengali: "আমি সারা। আমি শিক্ষার্থী।" },
      { speaker: "A", japanese: "サラさんも バングラデシュ人ですか。", romaji: "Sara-san mo Banguradeshu-jin desu ka.", bengali: "সারা-সানও কি বাংলাদেশি?" },
      { speaker: "B", japanese: "はい、そうです。", romaji: "Hai, sou desu.", bengali: "হ্যাঁ, তাই।" },
    ],
    checklist: ["নিজের নাম, দেশ ও পেশা বলতে পারি", "です／じゃありません দিয়ে positive-negative বদলাতে পারি", "か দিয়ে question করতে পারি", "も ও の-এর কাজ আলাদা করে বুঝি"],
  },
  2: {
    label: "OBJECTS · DISTANCE · OWNERSHIP",
    headline: "কোন জিনিসটি কোথায় এবং কার—বলুন",
    summary: "বক্তা ও শ্রোতার দূরত্ব দেখে これ・それ・あれ এবং noun-এর আগে この・その・あの বেছে নেওয়া, জিনিসের নাম ও মালিকানা জিজ্ঞেস করা শিখবেন।",
    outcome: "পাঠ শেষে আশপাশের জিনিস দেখিয়ে ‘এটি কী?’, ‘ঐটি কার?’ এবং ‘এই বই’—স্বাভাবিকভাবে বলতে পারবেন।",
    roadmap: [
      { icon: "①", title: "Distance দেখুন", description: "জিনিসটি বক্তার কাছে, শ্রোতার কাছে নাকি দুজনের থেকে দূরে—চিহ্নিত করুন।" },
      { icon: "②", title: "Form বেছে নিন", description: "একা হলে これ／それ／あれ; noun থাকলে この／その／あの ব্যবহার করুন।" },
      { icon: "③", title: "নাম ও মালিকানা", description: "なん দিয়ে জিনিসের নাম এবং だれの দিয়ে মালিক জানতে চান।" },
    ],
    conceptTitle: "Distance অনুযায়ী form বাছুন",
    concepts: [
      { japanese: "これ ／ この N", label: "বক্তার কাছে", note: "এটি / এই N", tone: "coral" },
      { japanese: "それ ／ その N", label: "শ্রোতার কাছে", note: "সেটি / সেই N", tone: "teal" },
      { japanese: "あれ ／ あの N", label: "দুজনের থেকে দূরে", note: "ওটি / ঐ N", tone: "blue" },
      { japanese: "これは なんですか", label: "জিনিসের নাম", note: "এটি কী?", tone: "gold" },
      { japanese: "だれの N ですか", label: "মালিকানা", note: "কার N?", tone: "plum" },
      { japanese: "はい、そうです", label: "Confirm", note: "হ্যাঁ, তাই", tone: "teal" },
    ],
    dialogue: [
      { speaker: "A", japanese: "これは なんですか。", romaji: "Kore wa nan desu ka.", bengali: "এটি কী?" },
      { speaker: "B", japanese: "英語の 辞書です。", romaji: "Eigo no jisho desu.", bengali: "ইংরেজি ভাষার অভিধান।" },
      { speaker: "A", japanese: "その辞書は だれのですか。", romaji: "Sono jisho wa dare no desu ka.", bengali: "সেই অভিধানটি কার?" },
      { speaker: "B", japanese: "ミラーさんのです。", romaji: "Miraa-san no desu.", bengali: "মিলার-সানের।" },
    ],
    checklist: ["これ ও この-এর পার্থক্য বুঝি", "distance দেখে これ／それ／あれ বেছে নিতে পারি", "なん দিয়ে জিনিসের নাম জিজ্ঞেস করতে পারি", "だれの ও Nのです দিয়ে মালিকানা বলতে পারি"],
  },
  3: {
    label: "PLACES · DIRECTIONS · FLOORS · PRICES",
    headline: "জায়গা খুঁজুন, পথ দেখান এবং দাম জিজ্ঞেস করুন",
    summary: "ここ・そこ・あそこ দিয়ে জায়গার দূরত্ব, こちら・そちら・あちら দিয়ে ভদ্র direction, 何階 দিয়ে floor এবং いくら দিয়ে price জিজ্ঞেস করা শিখবেন। একই সঙ্গে কোথাও বস্তু বা মানুষ থাকার あります／います pattern-ও ব্যবহার করবেন।",
    outcome: "পাঠ শেষে reception, elevator বা restroom কোথায় বলতে, department-store counter-এর floor জানতে এবং কোনো পণ্যের দাম জিজ্ঞেস করতে পারবেন।",
    roadmap: [
      { icon: "①", title: "জায়গা চিহ্নিত করুন", description: "বক্তার কাছে ここ, শ্রোতার কাছে そこ এবং দুজনের থেকে দূরে あそこ বলুন।" },
      { icon: "②", title: "পথ ও floor জিজ্ঞেস করুন", description: "どこ／どちら দিয়ে location বা direction এবং 何階 দিয়ে floor জিজ্ঞেস করুন।" },
      { icon: "③", title: "থাকা ও দাম বলুন", description: "あります／います দিয়ে existence এবং いくら／円 দিয়ে price বলুন।" },
    ],
    conceptTitle: "Location থেকে price—এক নজরে sentence map",
    concepts: [
      { japanese: "ここ ／ そこ ／ あそこ", label: "Place distance", note: "এখানে / সেখানে / ওখানে", tone: "coral" },
      { japanese: "こちら ／ そちら ／ あちら", label: "Polite direction", note: "এই / সেই / ওই দিকে", tone: "teal" },
      { japanese: "N は どこ／どちらですか", label: "Location question", note: "কোথায় / কোন দিকে?", tone: "blue" },
      { japanese: "Place に N が あります／います", label: "Existence", note: "বস্তু / মানুষ আছে", tone: "gold" },
      { japanese: "N は 何階ですか", label: "Floor", note: "কোন তলায়?", tone: "plum" },
      { japanese: "この N は いくらですか", label: "Price", note: "এই N-এর দাম কত?", tone: "teal" },
    ],
    dialogue: [
      { speaker: "客", japanese: "すみません。靴売り場は どちらですか。", romaji: "Sumimasen. Kutsu uriba wa dochira desu ka.", bengali: "মাফ করবেন, জুতার sales counter কোন দিকে?" },
      { speaker: "店員", japanese: "あちらです。二階です。", romaji: "Achira desu. Ni-kai desu.", bengali: "ওই দিকে। দ্বিতীয় তলায়।" },
      { speaker: "客", japanese: "このネクタイは いくらですか。", romaji: "Kono nekutai wa ikura desu ka.", bengali: "এই necktie-এর দাম কত?" },
      { speaker: "店員", japanese: "二千五百円です。", romaji: "Ni-sen go-hyaku-en desu.", bengali: "দাম ২,৫০০ yen।" },
      { speaker: "客", japanese: "ロビーに 電話が ありますか。", romaji: "Robii ni denwa ga arimasu ka.", bengali: "Lobby-তে telephone আছে কি?" },
      { speaker: "店員", japanese: "はい、あります。受付の となりです。", romaji: "Hai, arimasu. Uketsuke no tonari desu.", bengali: "হ্যাঁ, আছে। Reception-এর পাশে।" },
    ],
    checklist: [
      "ここ・そこ・あそこ এবং これ・それ・あれ-এর পার্থক্য বুঝি",
      "どこ ও polite どちら দিয়ে location/direction জিজ্ঞেস করতে পারি",
      "বস্তুতে あります এবং মানুষ/প্রাণীতে います ব্যবহার করতে পারি",
      "何階 দিয়ে floor এবং いくら দিয়ে price জিজ্ঞেস করতে পারি",
      "百・千・万・円 ব্যবহার করে basic price পড়তে পারি",
    ],
  },
  7: {
    label: "TOOLS · LANGUAGES · GIVING · FAMILY · HOME VISIT",
    headline: "কী দিয়ে কাজ করেন—কাকে দেন, কার কাছ থেকে পান",
    summary: "Tool বা language-এর মাধ্যম, দেওয়া–পাওয়ার সম্পর্ক, ধার নেওয়া–দেওয়া, শেখানো–শেখা এবং কাজ ইতোমধ্যে হয়েছে কি না—একটি connected lesson flow-তে শিখবেন। Family vocabulary ও Japanese বাড়িতে অতিথি হওয়ার ভদ্র expression-ও একই context-এ ব্যবহার করবেন।",
    outcome: "পাঠ শেষে tool ব্যবহার করে action বলতে, giver–receiver arrow দেখে に／から বেছে নিতে, নিজের ও অন্যের family terms আলাদা করতে এবং একটি ছোট home-visit conversation চালাতে পারবেন।",
    roadmap: [
      { icon: "①", title: "Tool ও language বলুন", description: "箸で 食べます এবং 日本語で 書きます-এর মতো sentence-এ মাধ্যমের পরে で বসান।" },
      { icon: "②", title: "দেওয়া–পাওয়ার arrow দেখুন", description: "あげます-এ giver → receiver; もらいます-এ source → receiver ধরে に／から বেছে নিন।" },
      { icon: "③", title: "বাস্তব conversation করুন", description: "もう／まだ, family terms এবং home-visit etiquette দিয়ে natural dialogue সম্পূর্ণ করুন।" },
    ],
    conceptTitle: "Tool থেকে home visit—এক নজরে Unit 07 map",
    concepts: [
      { japanese: "N（tool／means）で Vます", label: "কী দিয়ে", note: "箸で食べます／パソコンで送ります", tone: "teal" },
      { japanese: "『X』は ～語で 何ですか", label: "Language", note: "অন্য ভাষায় কী বলে?", tone: "blue" },
      { japanese: "Aは Bに Nを あげます", label: "Give", note: "A → B; receiver-এর পরে に", tone: "coral" },
      { japanese: "Aは Bに／から Nを もらいます", label: "Receive", note: "B → A; source হলো に／から", tone: "gold" },
      { japanese: "もう Vましたか／まだです", label: "Completion", note: "ইতোমধ্যে হয়েছে / এখনো নয়", tone: "plum" },
      { japanese: "父・母 ／ お父さん・お母さん", label: "Family register", note: "নিজের family / অন্যের family", tone: "teal" },
    ],
    dialogue: [
      { speaker: "山田", japanese: "いらっしゃい。どうぞ お上がりください。", romaji: "Irasshai. Douzo oagari kudasai.", bengali: "স্বাগতম। অনুগ্রহ করে ভেতরে আসুন।" },
      { speaker: "サントス", japanese: "失礼します。", romaji: "Shitsurei shimasu.", bengali: "অনুমতি নিচ্ছি।" },
      { speaker: "山田", japanese: "コーヒーは いかがですか。", romaji: "Koohii wa ikaga desu ka.", bengali: "কফি কেমন হবে?" },
      { speaker: "サントス", japanese: "ありがとうございます。いただきます。", romaji: "Arigatou gozaimasu. Itadakimasu.", bengali: "ধন্যবাদ। গ্রহণ করছি।" },
      { speaker: "サントス", japanese: "この スプーン、すてきですね。", romaji: "Kono supuun, suteki desu ne.", bengali: "এই চামচটি চমৎকার, তাই না!" },
      { speaker: "山田", japanese: "会社の 人に もらいました。メキシコの お土産です。", romaji: "Kaisha no hito ni moraimashita. Mekishiko no omiyage desu.", bengali: "কোম্পানির একজনের কাছ থেকে পেয়েছি। এটি মেক্সিকোর স্মারক।" },
    ],
    checklist: [
      "Tool, means ও language-এর পরে で বসাতে পারি",
      "『X』は ～語で 何ですか pattern দিয়ে translation জানতে পারি",
      "あげます-এ giver → receiver এবং もらいます-এ source → receiver চিনতে পারি",
      "Person source-এ に／から এবং organisation source-এ から ব্যবহার করতে পারি",
      "もう Vましたか-এর affirmative ও いいえ、まだです উত্তর দিতে পারি",
      "নিজের family term ও অন্যের respectful family term আলাদা করতে পারি",
      "いらっしゃい・失礼します・いただきます-এর situation বুঝি",
    ],
  },
  9: {
    label: "LIKES · SKILLS · UNDERSTANDING · REASONS",
    headline: "কী পছন্দ, কতটা পারেন এবং কেন—বলুন",
    summary: "好き・嫌い দিয়ে পছন্দ, 上手・下手 দিয়ে দক্ষতা, 分かります দিয়ে বোঝাপড়া এবং あります দিয়ে possession বলবেন। よく・少し・あまり・全然 দিয়ে মাত্রা এবং から দিয়ে সিদ্ধান্তের কারণ যুক্ত করবেন।",
    outcome: "পাঠ শেষে নিজের পছন্দ ও skill নিয়ে প্রশ্নোত্তর করতে, কোনো language কতটুকু বোঝেন বলতে এবং invitation গ্রহণ বা প্রত্যাখ্যানের কারণ ভদ্রভাবে জানাতে পারবেন।",
    roadmap: [
      { icon: "①", title: "Target-এ が বসান", description: "好き・嫌い・上手・下手・分かります・あります-এর target object-এর পরে が ব্যবহার করুন।" },
      { icon: "②", title: "মাত্রা স্পষ্ট করুন", description: "よく／だいたい／少し affirmative-এর সঙ্গে এবং あまり／全然 negative-এর সঙ্গে মিলিয়ে বলুন।" },
      { icon: "③", title: "কারণ ও ফলাফল যুক্ত করুন", description: "どうして দিয়ে কারণ জিজ্ঞেস করুন; reason + から, result order-এ উত্তর দিন।" },
    ],
    conceptTitle: "পছন্দ থেকে reason—এক নজরে Unit 09 map",
    concepts: [
      { japanese: "N が 好き／嫌いです", label: "পছন্দ", note: "পছন্দ বা অপছন্দের target が", tone: "coral" },
      { japanese: "N が 上手／下手です", label: "দক্ষতা", note: "কোন skill-এ ভালো বা দুর্বল", tone: "teal" },
      { japanese: "N が 分かります", label: "বোঝাপড়া", note: "language বা information বুঝি", tone: "blue" },
      { japanese: "N が あります", label: "Possession", note: "সময়, টাকা বা appointment আছে", tone: "gold" },
      { japanese: "よく／少し · あまり／全然", label: "Degree", note: "affirmative ও negative pair আলাদা রাখুন", tone: "plum" },
      { japanese: "Reason から、Result", label: "কারণ", note: "কেন?—কারণ বলে ফলাফল দিন", tone: "teal" },
    ],
    dialogue: [
      { speaker: "ミラー", japanese: "クラシックの コンサート、いっしょに いかがですか。", romaji: "Kurashikku no konsaato, issho ni ikaga desu ka.", bengali: "একসঙ্গে classical concert-এ কেমন হয়?" },
      { speaker: "木村", japanese: "いいですね。いつですか。", romaji: "Ii desu ne. Itsu desu ka.", bengali: "ভালো তো। কবে?" },
      { speaker: "ミラー", japanese: "来週の 金曜日の 晩です。", romaji: "Raishuu no kinyoubi no ban desu.", bengali: "আগামী শুক্রবার সন্ধ্যায়।" },
      { speaker: "木村", japanese: "金曜日の 晩は ちょっと…。", romaji: "Kinyoubi no ban wa chotto...", bengali: "শুক্রবার সন্ধ্যাটা একটু…।" },
      { speaker: "木村", japanese: "残念ですが、友達と 約束が ありますから…。", romaji: "Zannen desu ga, tomodachi to yakusoku ga arimasu kara...", bengali: "দুঃখিত, বন্ধুর সঙ্গে কথা দেওয়া আছে বলে…।" },
      { speaker: "ミラー", japanese: "そうですか。残念ですね。", romaji: "Sou desu ka. Zannen desu ne.", bengali: "তাই নাকি। দুঃখের ব্যাপার।" },
    ],
    checklist: [
      "好き・嫌い・上手・下手-এর target-এ が বসাতে পারি",
      "分かります ও あります-এর সঙ্গে を নয়, が ব্যবহার করতে পারি",
      "よく／だいたい／少し-এর degree difference বুঝি",
      "あまり ও 全然-এর পরে negative form রাখতে পারি",
      "どんな N が 好きですか দিয়ে category-এর পছন্দ জিজ্ঞেস করতে পারি",
      "どうして-এর উত্তরে reason + から ব্যবহার করতে পারি",
      "～は ちょっと… দিয়ে invitation ভদ্রভাবে প্রত্যাখ্যান করতে পারি",
    ],
  },
  10: {
    label: "EXISTENCE · PEOPLE · OBJECTS · POSITION",
    headline: "কোথায় কী আছে এবং কে আছে—একটি location map বানান",
    summary: "জড় বস্তুতে あります এবং মানুষ বা প্রাণীতে います বেছে নেবেন। Place に N が দিয়ে নতুন অস্তিত্ব introduce, N は Place に দিয়ে পরিচিত ব্যক্তি/বস্তুর location এবং N の 上・下・前・後ろ・隣・間 দিয়ে precise position বলবেন।",
    outcome: "পাঠ শেষে room, building বা neighbourhood map দেখে ব্যক্তি ও বস্তুর অবস্থান বলতে, 何／だれ দিয়ে খুঁজতে এবং supermarket-এ কোনো section বা product কোথায় জিজ্ঞেস করতে পারবেন।",
    roadmap: [
      { icon: "①", title: "Living না object?", description: "মানুষ ও প্রাণীতে います; বস্তু, জায়গা ও উদ্ভিদে あります নির্বাচন করুন।" },
      { icon: "②", title: "নতুন তথ্য না known topic?", description: "নতুন existence-এ Place に N が; known entity locate করতে N は Place に ব্যবহার করুন।" },
      { icon: "③", title: "Position phrase তৈরি করুন", description: "Reference noun + の + 上／下／前／後ろ／隣／近く／間 দিয়ে exact location বলুন।" },
    ],
    conceptTitle: "Existence থেকে precise position—এক নজরে Unit 10 map",
    concepts: [
      { japanese: "Place に N が あります", label: "Object exists", note: "জড় বস্তু বা জায়গা আছে", tone: "gold" },
      { japanese: "Place に N が います", label: "Living exists", note: "মানুষ বা প্রাণী আছে", tone: "teal" },
      { japanese: "N は Place に あります／います", label: "Known location", note: "পরিচিত N কোথায় আছে", tone: "blue" },
      { japanese: "A の 上／下／前／後ろ", label: "Relative position", note: "A-কে reference ধরে location", tone: "coral" },
      { japanese: "A と B の 間", label: "Between", note: "দুই reference point-এর মাঝে", tone: "plum" },
      { japanese: "N₁ や N₂ など", label: "Examples", note: "A, B ইত্যাদি—অসম্পূর্ণ list", tone: "teal" },
    ],
    dialogue: [
      { speaker: "ミラー", japanese: "すみません。アジアストアは どこですか。", romaji: "Sumimasen. Ajia Sutoa wa doko desu ka.", bengali: "মাফ করবেন। Asia Store কোথায়?" },
      { speaker: "女の人", japanese: "あそこに 白い ビルが ありますね。あの ビルの 中です。", romaji: "Asoko ni shiroi biru ga arimasu ne. Ano biru no naka desu.", bengali: "ওই সাদা ভবনটি দেখছেন? তার ভিতরে।" },
      { speaker: "ミラー", japanese: "あのう、ナンプラー、ありますか。", romaji: "Anou, nanpuraa, arimasu ka.", bengali: "আচ্ছা, fish sauce আছে?" },
      { speaker: "店員", japanese: "あちらに タイ料理の コーナーが あります。", romaji: "Achira ni Tai ryouri no koonaa ga arimasu.", bengali: "ওদিকে Thai food corner আছে।" },
      { speaker: "店員", japanese: "ナンプラーは いちばん 下です。", romaji: "Nanpuraa wa ichiban shita desu.", bengali: "Fish sauce একদম নিচে।" },
      { speaker: "ミラー", japanese: "わかりました。どうも。", romaji: "Wakarimashita. Doumo.", bengali: "বুঝেছি। ধন্যবাদ।" },
    ],
    checklist: [
      "মানুষ/প্রাণীতে います এবং জড় বস্তুতে あります ব্যবহার করতে পারি",
      "Place に N が এবং N は Place に pattern-এর তথ্যগত পার্থক্য বুঝি",
      "何が ありますか ও だれが いますか আলাদা করে জিজ্ঞেস করতে পারি",
      "上・下・前・後ろ・中・外・隣・近く ব্যবহার করতে পারি",
      "A と B の 間 দিয়ে দুইটি reference-এর মাঝের location বলতে পারি",
      "や～など দিয়ে কয়েকটি উদাহরণসহ অসম্পূর্ণ list বানাতে পারি",
      "Building বা supermarket-এ section ও product-এর location জিজ্ঞেস করতে পারি",
    ],
  },
};

export function getMinnaN5LessonDetails(unitNumber: number) {
  return lessons[unitNumber];
}
