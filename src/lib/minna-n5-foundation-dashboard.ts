export const minnaN5FoundationDashboard = {
  label: "ZERO TO FIRST SENTENCE",
  title: "Japanese শেখার আগে আপনার ছোট toolkit",
  summary: "একদম নতুন হলেও এখান থেকেই শুরু করুন। Script, sound, particle এবং sentence order-এর দরকারি ভিত্তি বুঝে Unit 01-এ যান—সবকিছু একদিনে মুখস্থ করার প্রয়োজন নেই।",
  outcome: "শেষে Japanese-এর তিনটি script চিনবেন, পাঁচটি vowel বলতে পারবেন এবং A は B です pattern দিয়ে নিজের প্রথম sentence বানাতে পারবেন।",
  scripts: [
    { mark: "あ", name: "Hiragana", japanese: "ひらがな", count: "46 basic signs", use: "Japanese শব্দ, particle ও grammar ending", tone: "coral" },
    { mark: "ア", name: "Katakana", japanese: "カタカナ", count: "Same sounds", use: "বিদেশি নাম ও loanword—テレビ, コーヒー", tone: "blue" },
    { mark: "漢", name: "Kanji", japanese: "漢字", count: "Meaning signs", use: "শব্দের অর্থ; Unit ধরে অল্প অল্প করে", tone: "gold" },
  ],
  vowels: [
    { kana: "あ", sound: "a", cue: "আ" }, { kana: "い", sound: "i", cue: "ই" }, { kana: "う", sound: "u", cue: "উ" }, { kana: "え", sound: "e", cue: "এ" }, { kana: "お", sound: "o", cue: "ও" },
  ],
  particles: [
    { japanese: "は", reading: "wa", role: "Topic", example: "わたしは" },
    { japanese: "を", reading: "o", role: "Object", example: "ほんを" },
    { japanese: "に", reading: "ni", role: "Time / destination", example: "7じに" },
    { japanese: "で", reading: "de", role: "Place of action", example: "がっこうで" },
    { japanese: "へ", reading: "e", role: "Direction", example: "とうきょうへ" },
  ],
  routine: [
    { icon: "文", title: "পাঠ", note: "লক্ষ্য ও pattern বুঝুন" },
    { icon: "語", title: "Vocabulary", note: "ছবি দেখে শব্দ বলুন" },
    { icon: "型", title: "Grammar", note: "slot বদলে sentence বানান" },
    { icon: "聴", title: "Listening", note: "শুনুন ও shadow করুন" },
    { icon: "漢", title: "Kanji", note: "meaning ও reading মিলান" },
    { icon: "練", title: "Practice", note: "quiz দিয়ে recall যাচাই করুন" },
  ],
  checklist: [
    "あ・い・う・え・お sound বলতে পারি",
    "Hiragana, Katakana ও Kanji-এর কাজ আলাদা বুঝি",
    "Particle は লেখা হলেও topic হলে ‘wa’ বলি",
    "Japanese sentence-এর মূল verb/ending সাধারণত শেষে থাকে বুঝি",
    "わたしは ___ です দিয়ে নিজের নাম বলতে পারি",
  ],
};
