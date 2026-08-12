import type { CourseSection } from "@/components/course-player";

const startHereOverview = `## একদম শুরু থেকে কীভাবে এই course পড়বেন

Japanese আগে কখনও না পড়ে থাকলেও ভয় পাওয়ার কিছু নেই। এই companion-এ একটি formula-র প্রতিটি অংশ আলাদা করে দেখানো হবে। প্রথম কয়েকটি unit-এ Japanese-এর নিচে **romaji উচ্চারণ** থাকবে। তবে romaji কেবল সহায়ক চাকা—লক্ষ্য হবে ধীরে ধীরে hiragana ও katakana দেখে পড়া।

### তিনটি লিপি খুব সহজভাবে

- **Hiragana (ひらがな):** Japanese grammar ending ও দেশি শব্দে বেশি দেখা যায়। যেমন: わたし, です।
- **Katakana (カタカナ):** বিদেশি উৎসের শব্দে বেশি দেখা যায়। যেমন: コーヒー (coffee), エンジニア (engineer)।
- **Kanji (漢字):** অর্থ বহনকারী চিহ্ন। এই course-এ প্রয়োজনমতো kana reading-সহ শেখা যাবে।

### বিশেষ উচ্চারণ—এগুলো শুরুতেই মনে রাখুন

- Particle হিসেবে **は** লেখা হলেও উচ্চারণ **wa**। わたしは = *watashi wa*।
- Particle হিসেবে **へ** লেখা হলেও উচ্চারণ **e**। とうきょうへ = *Tōkyō e*।
- Particle **を** সাধারণত **o** উচ্চারণ হয়। ほんを = *hon o*।
- ছোট **っ** পরের consonant-এ অল্প থামায়: きって = *kitte*।
- ছোট **ゃ／ゅ／ょ** আগের sound-এর সঙ্গে মিশে যায়: きょう = *kyō*।
- ー বা দীর্ঘ vowel একটু বেশি সময় ধরে বলুন: コーヒー = *kōhī*।

## Japanese বাক্যের মানসিক ছবি

বাংলায় আমরা বলি: “আমি Japanese পড়ি।” Japanese-এ অনেক সময় একই ধারায় বলা যায়:

**わたしは｜にほんごを｜べんきょうします。**

**watashi wa | nihongo o | benkyō shimasu**

- わたし = আমি
- は = এখন আমার সম্পর্কে বলা হচ্ছে
- にほんご = Japanese ভাষা
- を = এর ওপর কাজটি হচ্ছে
- べんきょうします = পড়াশোনা করি

সবচেয়ে গুরুত্বপূর্ণ অভ্যাস: **Japanese sentence-এর মূল কাজ/অবস্থা সাধারণত শেষে আসে।** তাই শেষ পর্যন্ত শুনে বা পড়ে meaning ধরুন।

> বাংলা অনুবাদ শব্দে-শব্দে Japanese order অনুসরণ নাও করতে পারে। আগে অংশগুলোর কাজ বুঝুন, তারপর স্বাভাবিক বাংলা অর্থ পড়ুন।`;

const notationOverview = `## Pattern-এ A, B, N, V কী?

Grammar formula ছোট রাখার জন্য কয়েকটি চিহ্ন ব্যবহার করা হয়:

- **A / B:** বাক্যের দুইটি slot। এখানে নিজের প্রয়োজনমতো শব্দ বসাবেন।
- **N (noun):** ব্যক্তি, বস্তু, স্থান বা ধারণার নাম—যেমন わたし, ほん, とうきょう।
- **V (verb):** কাজ বা ঘটনার শব্দ—যেমন たべます (খাই), いきます (যাই)।
- **い-adjective:** সাধারণত い-তে শেষ হওয়া description—যেমন おおきい (বড়)।
- **な-adjective:** noun-এর আগে な লাগে—যেমন しずかな へや (শান্ত ঘর)।

### Particle কী?

Particle হলো ছোট marker, যা আগের শব্দটির বাক্যে কী ভূমিকা তা দেখায়। বাংলা বিভক্তির মতো ভাবতে পারেন, তবে সরাসরি এক-এক অনুবাদ সবসময় হবে না।

- **は:** আমরা কার/কিসের সম্পর্কে বলছি
- **を:** কাজটি কিসের ওপর হচ্ছে
- **に:** সময়, গন্তব্য বা অস্তিত্বের জায়গা—pattern অনুযায়ী
- **で:** যে জায়গায় কাজ হয় বা যে মাধ্যম দিয়ে হয়
- **と:** কার সঙ্গে বা quotation

### Polite form ও plain form

শুরুতে অপরিচিত মানুষ, শিক্ষক বা workplace-এর নিরাপদ style **polite form**: です／ます। পরে বন্ধুবান্ধবের casual কথার জন্য **plain form** শিখবেন। Plain form মানেই rude নয়; কার সঙ্গে কথা বলছেন সেটাই নির্ধারণ করে কোন style ঠিক।

## পড়ার ছয় ধাপ

1. প্রথমে unit-এর বাস্তব লক্ষ্য পড়ুন।
2. Pattern-এর প্রতিটি slot-এর কাজ বুঝুন।
3. Worked example মুখে ধীরে বলুন।
4. Breakdown দেখে একই sentence আবার গড়ুন।
5. একটি শব্দ বদলে নিজের example বানান।
6. শেষে test দিন; ভুল হলে কারণ পড়ে আবার বলুন।`;

export const minnaFoundationSection: CourseSection = {
  title: "শুরু করার আগে · একদম নতুনদের ভিত্তি",
  lessons: [
    {
      title: "Japanese লেখা, উচ্চারণ ও word order",
      duration: "20–30 min",
      type: "reading",
      overview: startHereOverview,
      studyNotes: `## আজকের mini practice

1. わたしは তিনবার বলুন: **watashi wa**।
2. とうきょうへ বলুন: **Tōkyō e**।
3. ほんを よみます বলুন: **hon o yomimasu**।
4. নিজের notebook-এ লিখুন: “Japanese বাক্যের মূল কাজ সাধারণত শেষে।”

## মনে রাখুন

Kana এখনো পড়তে না পারলে reading দেখে বলুন, কিন্তু প্রতিদিন অন্তত ১০ মিনিট hiragana/katakana চর্চা করুন। এই course kana chart-এর বিকল্প নয়; grammar বোঝার পাশাপাশি script শেখাও চালিয়ে যেতে হবে।`,
      practiceTest: {
        question: "Particle হিসেবে は-এর সাধারণ উচ্চারণ কোনটি?",
        options: ["ha", "wa", "ba", "a"],
        correctAnswer: "wa",
        explanation: "শব্দের অংশ হলে は সাধারণত ‘ha’, কিন্তু topic particle হলে ‘wa’ উচ্চারণ হয়। যেমন: わたしは = watashi wa।",
      },
    },
    {
      title: "N, V, adjective ও particle—pattern পড়ার নিয়ম",
      duration: "20–25 min",
      type: "reading",
      overview: notationOverview,
      studyNotes: `## নিজে যাচাই

- ほん (বই) → Noun বা **N**
- よみます (পড়ি) → Verb বা **V**
- おおきい (বড়) → い-adjective
- しずか (শান্ত) → な-adjective
- は／を／に／で → Particle

## Solved example

Pattern: **A は B です。**

A-তে わたし, B-তে がくせい বসালে:

**わたしは がくせいです。** — আমি শিক্ষার্থী।

Formula মুখস্থ করার অর্থ একই বাক্য কপি করা নয়; slot বদলে অনেক নতুন বাক্য বানাতে পারাই আসল লক্ষ্য।`,
      practiceTest: {
        question: "Pattern-এ V দিয়ে সাধারণত কী বোঝানো হয়?",
        options: ["ব্যক্তির নাম", "Verb বা কাজের শব্দ", "Particle", "সংখ্যা"],
        correctAnswer: "Verb বা কাজের শব্দ",
        explanation: "V হলো verb-এর সংক্ষিপ্ত চিহ্ন—যে শব্দ কাজ, ঘটনা বা অবস্থা বোঝায়।",
      },
    },
  ],
};
