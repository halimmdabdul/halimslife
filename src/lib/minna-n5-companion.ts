import type { CourseSection } from "@/components/course-player";
import { minnaFoundationSection } from "@/lib/minna-n5-foundation";
import { minnaDeepDives1 } from "@/lib/minna-n5-deep-dives-1";
import { minnaDeepDives2 } from "@/lib/minna-n5-deep-dives-2";
import type { UnitDeepDive } from "@/lib/minna-n5-deep-dive-types";

export type CompanionUnit = {
  number: number;
  title: string;
  goal: string;
  explanation: string;
  patterns: string[];
  examples: Array<[japanese: string, bengali: string]>;
  vocabulary: string[];
  mistakes: string[];
  practice: string[];
  question: string;
  options: string[];
  correctAnswer: string;
};

function bullets(items: string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

const bengaliCounts = ["শূন্য", "একটি", "দুটি", "তিনটি", "চারটি", "পাঁচটি", "ছয়টি"];

function bengaliCount(count: number) {
  return bengaliCounts[count] ?? `${count}টি`;
}

function numbered(items: string[]) {
  return items.map((item, index) => `${index + 1}. ${item}`).join("\n");
}

function deepDiveFor(number: number): UnitDeepDive {
  const deepDive = minnaDeepDives1[number] ?? minnaDeepDives2[number];
  if (!deepDive) throw new Error(`Missing beginner deep dive for unit ${number}`);
  return deepDive;
}

function workedExamples(deepDive: UnitDeepDive) {
  return deepDive.workedSentences
    .map(
      (example, index) => `### Worked example ${index + 1}

**${example.japanese}**

উচ্চারণ: *${example.reading}*

স্বাভাবিক বাংলা: **${example.bengali}**

শব্দে-শব্দে ভাঙলে:

${bullets(example.breakdown)}

কেন এভাবে বলা হয়েছে: ${example.teachingPoint}`,
    )
    .join("\n\n");
}

function originalDialogue(deepDive: UnitDeepDive) {
  return deepDive.dialogue
    .map(
      (line) => `- **${line.speaker}: ${line.japanese}**  
  *${line.reading}*  
  ${line.bengali}`,
    )
    .join("\n");
}

function scaffoldedPractice(deepDive: UnitDeepDive) {
  return deepDive.practiceScaffolds
    .map(
      (item, index) => `### ধাপ ${index + 1} · ${item.task}

**ইঙ্গিত:** ${item.hint}

> একটি সম্ভাব্য model answer: ${item.model}`,
    )
    .join("\n\n");
}

function guideOverview(unit: CompanionUnit) {
  const deepDive = deepDiveFor(unit.number);
  return `## এই unit-এর লক্ষ্য

${unit.goal}

## সহজ বাংলা explanation

### এক লাইনে মূল ধারণা

${deepDive.coreIdea}

${unit.explanation}

## আগে মাথায় যে ছবিটি রাখবেন

${bullets(deepDive.mentalModel)}

### মূল patterns

${bullets(unit.patterns)}

**চিহ্নগুলোর অর্থ:** N = noun বা নামের শব্দ, V = verb বা কাজের শব্দ, A/B = নিজের শব্দ বসানোর slot। Particle হলো ছোট marker, যা আগের শব্দটির ভূমিকা দেখায়।

## একেবারে ধাপে ধাপে বাক্য বানান

${numbered(deepDive.buildSteps)}

### সম্পূর্ণ নতুন examples

${unit.examples.map(([jp, bn]) => `- **${jp}** — ${bn}`).join("\n")}

## ${bengaliCount(deepDive.workedSentences.length)} বাক্য পুরো ভেঙে বুঝুন

${workedExamples(deepDive)}

## ছোট বাস্তব dialogue

${originalDialogue(deepDive)}

## কাছাকাছি form ও ভুল/সঠিক পার্থক্য

${bullets(deepDive.contrasts)}

> Examples ও explanations এই companion-এর জন্য originalভাবে লেখা; textbook-এর বাক্য, dialogue বা exercise copy করা হয়নি।`;
}

function guideNotes(unit: CompanionUnit) {
  const deepDive = deepDiveFor(unit.number);
  return `## Vocabulary theme

${bullets(unit.vocabulary)}

## Common mistakes

${bullets(unit.mistakes)}

## এই unit-এর সবচেয়ে সহজ mental shortcut

${deepDive.mentalModel.map((item) => `- ${item}`).join("\n")}

## Recall routine

1. Pattern না দেখে Japanese form লিখুন।
2. প্রতিটি example-এর noun/verb বদলে নিজের বাক্য বানান।
3. বাংলা থেকে Japanese বলুন, তারপর notes দিয়ে check করুন।
4. ভুলটি particle, form নাকি word order—category লিখুন।`;
}

function practiceOverview(unit: CompanionUnit) {
  const deepDive = deepDiveFor(unit.number);
  return `## Production lab

এই lesson বইয়ের exercise-এর answer key নয়। নিচের tasks সম্পূর্ণ নতুন এবং patternটি নিজের জীবনে ব্যবহার করানোর জন্য তৈরি।

${numbered(unit.practice)}

## আগে সাহায্য নিয়ে করুন

নিচের তিনটি কাজ সহজ থেকে ধীরে ধীরে নিজের বাক্য তৈরির দিকে যাবে। আগে নিজে চেষ্টা করুন; আটকে গেলে hint দেখুন। Model answer একমাত্র উত্তর নয়—একটি সঠিক নমুনা।

${scaffoldedPractice(deepDive)}

## Self-check

- Sentence-এর শেষ form goal-এর সঙ্গে মিলেছে?
- Particle relation ঠিকভাবে দেখাচ্ছে?
- Time word থাকলে tense consistent?
- Japanese word order রেখে natural pause-এ বলতে পারছেন?

নিজের answer aloud দুইবার বলুন এবং একটি sentence না দেখে লিখুন।`;
}

function practiceNotes(unit: CompanionUnit) {
  const deepDive = deepDiveFor(unit.number);
  return `## পাঁচ মিনিটের review

${unit.patterns.map((pattern) => `- Pattern recall: **${pattern}**`).join("\n")}

## Quiz answer কেন ঠিক

${deepDive.answerExplanation}

## Next-day check

আগামীকাল notes না দেখে unit-এর goal explain করুন, দুইটি example বলুন এবং নিচের practice question আবার দিন। ভুল হলে guide lesson-এ ফিরে শুধু দুর্বল অংশ review করুন।`;
}

export const minnaN5Units: CompanionUnit[] = [
  {
    number: 1,
    title: "পরিচয় ও noun sentence",
    goal: "নিজের নাম, পেশা ও পরিচয় polite Japanese-এ বলা এবং simple yes/no question করা।",
    explanation: "UNIT 01-এর noun sentence ছয়টি connected rule দিয়ে তৈরি। প্রথমে N₁ は N₂ です দিয়ে topic-এর পরিচয়, পেশা বা জাতীয়তা বলা হয়—particle は লেখা হলেও উচ্চারণ ‘wa’। Negative করতে です-কে じゃありません অথবা formal ではありません দিয়ে বদলানো হয়। একই word order-এর শেষে か যোগ করলে question হয়; だれ／どなた বা なんさい／おいくつ দিয়েও information question করা যায়। আগের কারও সঙ্গে একই তথ্য যোগ করতে は-এর জায়গায় も বসে—はも একসঙ্গে নয়। N₁ の N₂ দুইটি noun যুক্ত করে organisation, university, country, ownership বা category-এর সম্পর্ক দেখায়; main noun থাকে শেষে। অন্য ব্যক্তির নামের পরে সম্মানসূচক さん এবং শিশু বা ঘনিষ্ঠজনের নামের পরে ちゃん ব্যবহার হয়, কিন্তু নিজের নামের পরে さん বলা হয় না। Context স্পষ্ট হলে わたし বা অন্য subject বারবার না বললেও চলে।",
    patterns: ["N₁ は N₂ です。", "N₁ は N₂ じゃありません／ではありません。", "N₁ は N₂ ですか。", "N₁ も N₂ です。", "N₁ の N₂", "নাম + さん／ちゃん"],
    examples: [["わたしは ソフトウェアエンジニアです。", "আমি software engineer।"], ["ラナさんは せんせいではありません。", "রানা-সান শিক্ষক নন।"], ["リミさんは がくせいですか。", "রিমি-সান কি শিক্ষার্থী?"], ["はい、がくせいです。", "হ্যাঁ, তিনি শিক্ষার্থী।"], ["アリさんも バングラデシュじんです。", "আলি-সানও বাংলাদেশি।"], ["ミラーさんは IMCの しゃいんです。", "মিলার-সান IMC-এর কর্মচারী।"], ["わたしは さくらだいがくの がくせいです。", "আমি সাকুরা বিশ্ববিদ্যালয়ের শিক্ষার্থী।"], ["あのかたは たなかさんです。", "ওই ভদ্রলোক/ভদ্রমহিলা তানাকা-সান।"], ["はなちゃんは ごさいです。", "হানা-চানের বয়স পাঁচ বছর।"]],
    vocabulary: [
      "わたし — আমি",
      "あなた — আপনি/তুমি",
      "あのひと（あのかた） — ওই ব্যক্তি (あのかた বেশি সম্মানসূচক)",
      "～さん — জনাব/জনাবা; নামের পরে সম্মানসূচক সম্বোধন",
      "～ちゃん — শিশু বা ঘনিষ্ঠজনের নামের পরে আদরের সম্বোধন",
      "～じん — কোনো দেশের নাগরিক বোঝানোর suffix",
      "せんせい — শিক্ষক/প্রশিক্ষক; অন্যকে সম্বোধন বা বর্ণনায়",
      "きょうし（教師） — শিক্ষক; নিজের পেশা বলতে ব্যবহার করা যায়",
      "がくせい（学生） — ছাত্র/ছাত্রী",
      "かいしゃいん（会社員） — কোম্পানির কর্মচারী",
      "しゃいん（社員） — নির্দিষ্ট কোম্পানির কর্মচারী",
      "ぎんこういん（銀行員） — ব্যাংকের কর্মচারী",
      "いしゃ（医者） — ডাক্তার",
      "けんきゅうしゃ（研究者） — গবেষক",
      "だいがく（大学） — বিশ্ববিদ্যালয়",
      "びょういん（病院） — হাসপাতাল",
      "だれ（どなた） — কে (どなた বেশি ভদ্র)",
      "～さい（～歳） — ～ বছর বয়স",
      "なんさい（おいくつ） — কত বছর বয়স (おいくつ বেশি ভদ্র)",
      "はい — হ্যাঁ",
      "いいえ — না",
      "アメリカ — আমেরিকা/যুক্তরাষ্ট্র",
      "イギリス — যুক্তরাজ্য",
      "インド — ভারত",
      "インドネシア — ইন্দোনেশিয়া",
      "かんこく（韓国） — দক্ষিণ কোরিয়া",
      "タイ — থাইল্যান্ড",
      "ちゅうごく（中国） — চীন",
      "ドイツ — জার্মানি",
      "にほん（日本） — জাপান",
      "ブラジル — ব্রাজিল",
      "IMC — IMC কোম্পানি",
      "パワーでんき（パワー電気） — Power Electric কোম্পানি",
      "ブラジルエアー — Brazil Air",
      "AKC — AKC কোম্পানি",
      "こうべびょういん（神戸病院） — Kobe Hospital",
      "さくらだいがく（さくら大学） — Sakura University",
      "ふじだいがく（富士大学） — Fuji University",
      "しごと — কাজ/পেশা",
      "くに — দেশ",
    ],
    mistakes: ["は-কে 'ha' বলা; particle হলে 'wa'।", "নিজের নামের পরে さん যোগ করা।", "Question-এ word order English-এর মতো উল্টে দেওয়া।", "ではありません আর じゃないです একই বাক্যে মিশিয়ে ফেলা—দুটো আলাদা style, একসঙ্গে নয়।"],
    practice: ["নিজের নাম, দেশ ও পেশা নিয়ে তিনটি sentence লিখুন।", "একজন বন্ধুর পরিচয় নিয়ে একটি question ও answer বানান।", "も ব্যবহার করে দুইজনের common পরিচয় বলুন।", "はい/いいえ দিয়ে একটি প্রশ্নের সম্পূর্ণ উত্তর লিখুন।"],
    question: "‘আমিও engineer’—সঠিক sentence কোনটি?",
    options: ["わたしはも エンジニアです。", "わたしも エンジニアです。", "わたしを エンジニアです。", "わたしのも エンジニアです。"],
    correctAnswer: "わたしも エンジニアです。",
  },
  {
    number: 2,
    title: "Objects ও demonstratives",
    goal: "কাছের/দূরের জিনিস দেখানো, জিনিসের নাম জিজ্ঞাসা করা এবং ownership বোঝানো।",
    explanation: "これ/それ/あれ নিজে noun হিসেবে দাঁড়ায় এবং এদের পরে আর কোনো noun বসে না—これは かさです (এটি ছাতা)। কিন্তু この/その/あの বিশেষণের মতো কাজ করে, তাই পরে অবশ্যই একটি noun লাগবে—この かさ (এই ছাতা); শুধু この একা বলা যায় না। どれ (কোনটি) একা দাঁড়ায় এবং どの (কোন) সবসময় noun-এর আগে বসে—ঠিক この/その/あの-এর নিয়ম মেনেই। の ownership, affiliation বা category দেখায়: わたしの ほん (আমার বই), にほんの くるま (জাপানের/জাপানি গাড়ি)। Context থেকে কোন জিনিসের কথা হচ্ছে তা স্পষ্ট থাকলে の-এর পরে noun আবার না বলে শুধু の-তেই থামা যায়—わたしのです (আমারটি)।",
    patterns: ["これ／それ／あれは N です。", "この／その／あの N は ～です。", "これは N₁ ですか、N₂ ですか。", "これは なんですか。", "これは N₁ の N₂ です。", "これは だれの N ですか。／N のです。", "そうです。／そうじゃありません。／そうですか。"],
    examples: [["これは こうじょうの カメラです。", "এটি factory-এর camera।"], ["その パソコンは だれのですか。", "আপনার কাছের ঐ computerটি কার?"], ["あれは にほんせいの ロボットです。", "দূরের ওটি Japan-এ তৈরি robot।"], ["この あかい かさは わたしのです。", "এই লাল ছাতাটি আমার।"], ["それは わたしの ほんでは ありません。", "ওটা আমার বই না।"], ["どの かばんが たなかさんのですか。", "কোন ব্যাগটি Tanaka-সানের?"], ["あなたの かさは どれですか。", "আপনার ছাতা কোনটি?"]],
    vocabulary: ["これ／この — speaker-এর কাছে", "それ／その — listener-এর কাছে", "あれ／あの — দুজনের থেকে দূরে", "どれ／どの — কোনটি/কোন", "だれの — কার", "かぎ — চাবি", "とけい — ঘড়ি", "かばん — ব্যাগ", "ノート — খাতা"],
    mistakes: ["この-এর পরে noun না দেওয়া।", "これ ほん বলা; これは ほん বা この ほん হবে।", "の-কে শুধু possession ভাবা; এটি category/affiliation-ও দেখায়।", "どれ-এর পরেও noun বসিয়ে ফেলা; noun থাকলে どの ব্যবহার করতে হবে।"],
    practice: ["Desk-এর তিনটি object これ/それ/あれ দিয়ে identify করুন।", "কার জিনিস—এমন দুইটি question-answer লিখুন।", "この/その/あの দিয়ে noun modify করে তিনটি phrase বানান।", "どの/どれ ব্যবহার করে একটি choice-based question বানান এবং নিজে উত্তর দিন।"],
    question: "‘এই বই’ কোনটি?",
    options: ["これ ほん", "この ほん", "ここ ほん", "どれ ほん"],
    correctAnswer: "この ほん",
  },
  {
    number: 3,
    title: "Places, facilities ও existence",
    goal: "কোনো জায়গা কোথায়, কোন দিকে, কোন তলায়, সেখানে কী আছে এবং পণ্যের দাম কত—সব বলা।",
    explanation: "ここ/そこ/あそこ জায়গা নির্দেশ করে—ここ বক্তার কাছে, そこ শ্রোতার কাছে, あそこ দুজনের থেকেই দূরে। こちら/そちら/あちら একই distance system-এর polite location/direction form; どこ ও どちら question form। পরিচিত facility-এর অবস্থান N は Place です এবং Place に N が あります/います দিয়ে কোনো জায়গায় বস্তু বা মানুষ থাকার তথ্য দেওয়া হয়। の company, country, origin বা category-এর সম্পর্ক দেখায়। Floor জানতে 何階, আর price জানতে いくら ব্যবহার হয়; উত্তরে number-এর পরে 階 বা 円 বসে। Noun sentence negative করতে です বদলে ではありません হয়।",
    patterns: ["ここ／そこ／あそこは N です。", "N は どこ／どちらですか。", "Place に N が あります／います。", "N₁ の N₂", "N は N ではありません。", "N は 何階ですか。", "この N は いくらですか。／Number 円です。"],
    examples: [["ここは 受付です。", "এখানে reception।"], ["エレベーターは どちらですか。", "Lift কোন দিকে?"], ["会議室は あそこです。", "Meeting room ওখানে।"], ["食堂に 自動販売機が あります。", "Canteen-এ vending machine আছে।"], ["山田さんは 事務所に います。", "ইয়ামাদা office-এ আছেন।"], ["IMCは 日本の会社です。", "IMC একটি Japanese company।"], ["カメラ売り場は 何階ですか。― 五階です。", "Camera counter কোন তলায়? — পঞ্চম তলায়।"], ["このワインは いくらですか。― 二千五百円です。", "এই wine-এর দাম কত? — ২,৫০০ yen।"]],
    vocabulary: ["ここ／そこ／あそこ — এখানে/সেখানে/ওখানে", "どこ／どちら — কোথায়/কোন দিকে", "きょうしつ — classroom", "しょくどう — canteen", "じむしょ — office", "かいぎしつ — meeting room", "うけつけ — reception", "うりば — sales counter", "なんがい — কোন তলায়", "いくら／えん — কত দাম/yen"],
    mistakes: ["Place question-এ どれ ব্যবহার করা; সঠিক どこ।", "ここ-এর জায়গায় জিনিসের pronoun これ ব্যবহার করা।", "মানুষের জন্য あります বলা; মানুষ/প্রাণীতে います।", "いくら-কে location question হিসেবে ব্যবহার করা; এটি price question।", "Floor-এর 階 এবং price-এর 円 গুলিয়ে ফেলা।"],
    practice: ["Classroom scene দেখে ここ/そこ/あそこ দিয়ে তিনটি location বলুন।", "Reception, elevator ও restroom-এর direction どちら দিয়ে জিজ্ঞেস করুন।", "Office-এ থাকা বস্তু/মানুষ あります・います দিয়ে বলুন।", "Department-store map দেখে তিনটি counter কোন floor-এ তা বলুন।", "Wine, bag ও camera-এর price question-answer তৈরি করুন।"],
    question: "‘Restroom কোথায়?’ কোনটি?",
    options: ["トイレは どこですか。", "トイレは どれですか。", "トイレを いくらですか。", "トイレが だれですか。"],
    correctAnswer: "トイレは どこですか。",
  },
  {
    number: 4,
    title: "Clock time ও polite verb tense",
    goal: "Daily schedule-এর সময় বলা এবং polite verb-এর present, negative, past ও past-negative form ব্যবহার করা।",
    explanation: "Unit 04-এ প্রথমে 時 ও 分 counter দিয়ে বর্তমান সময় বলা ও 何時 দিয়ে সময় জিজ্ঞেস করা হয়। ます-form polite non-past—এটি habit ও future দুই-ই প্রকাশ করে; ません, ました এবং ませんでした দিয়ে negative, past ও past-negative হয়। Exact clock time বা নির্দিষ্ট date-এর পরে に বসে, কিন্তু 今日・明日・毎日-এর মতো relative time word-এর পরে সাধারণত に লাগে না। から শুরু এবং まで শেষের সীমা দেখায়। と দুইটি noun-কে সম্পূর্ণ তালিকা হিসেবে যুক্ত করে; sentence-এর শেষে ね বসিয়ে শ্রোতার সম্মতি বা সহমর্মিতা প্রকাশ করা হয়।",
    patterns: ["今 ～時 ～分です。／何時ですか。", "Vます／Vません／Vました／Vませんでした。", "N（time）に V。", "N₁ から N₂ まで。", "N₁ と N₂。", "Sentence + ね。"],
    examples: [["まいあさ ろくじはんに おきます。", "প্রতিদিন সকাল ৬:৩০-এ উঠি।"], ["きのう はたらきませんでした。", "গতকাল কাজ করিনি।"], ["かいぎは くじから じゅうじまでです。", "Meeting ৯টা থেকে ১০টা।"], ["あした やすみます。", "আগামীকাল ছুটি নেব।"], ["まいにち はちじに おきます。", "প্রতিদিন ৮টায় উঠি।"], ["きのう なんじに ねましたか。", "গতকাল কয়টায় ঘুমিয়েছিলেন?"], ["きょうは はたらきません。", "আজ কাজ করব না।"]],
    vocabulary: ["おきます — ঘুম থেকে উঠি", "ねます — শুতে যাই/ঘুমাতে যাই", "はたらきます — কাজ করি", "やすみます — বিশ্রাম/ছুটি নিই", "はん — অর্ধ/সাড়ে", "きのう — গতকাল", "きょう — আজ", "あした — আগামীকাল", "なんじ — কয়টা"],
    mistakes: ["Past time-এর সঙ্গে ます ব্যবহার করা।", "まいにちに বলা।", "৪টা よんじ বলা; correct common reading よじ।", "から/まで উল্টে ব্যবহার করা—শুরু ও শেষ point অদলবদল হয়ে যাওয়া।"],
    practice: ["নিজের weekday schedule পাঁচটি sentence-এ লিখুন।", "গতকাল কী করেননি—দুইটি sentence লিখুন।", "Work/study start-end time から/まで দিয়ে বলুন।", "から/まで এবং exact time মিলিয়ে নিজের পুরো দিনের একটি ছোট paragraph লিখুন।"],
    question: "‘গতকাল ১১টায় ঘুমিয়েছি’ কোনটি?",
    options: ["きのう じゅういちじに ねます。", "きのう じゅういちじに ねました。", "きのう じゅういちじを ねました。", "きのうに ねません。"],
    correctAnswer: "きのう じゅういちじに ねました。",
  },
  {
    number: 5,
    title: "Movement, destination ও transport",
    goal: "কোথায়, কখন, কী দিয়ে এবং কার সঙ্গে যাওয়া/আসা/ফেরা—এক sentence-এ বলা।",
    explanation: "行きます・来ます・帰ります-এর destination-এর পরে へ বসে; particleটি লেখা へ হলেও উচ্চারণ ‘e’। কোনো destination-ই নয় বলতে どこへも-এর সঙ্গে negative movement verb লাগে। Transport বা vehicle-এর পরে で, companion-এর পরে と এবং একা গেলে 一人で ব্যবহার হয়; 歩いて-এর পরে で লাগে না। Broad time question いつ-এর পরে に বসে না, তবে নির্দিষ্ট date-এর পরে に বসতে পারে। Sentence-ending よ শ্রোতার জন্য নতুন তথ্য জোর দিয়ে জানায়, আর そうですね আগের তথ্যের সঙ্গে সম্মতি বা acknowledgement প্রকাশ করে।",
    patterns: ["N（place）へ 行きます／来ます／帰ります。", "どこへも Vません。", "N（vehicle）で V。", "N（person／animal）と V／一人で V。", "いつ Vますか。", "Sentence + よ。", "そうですね。"],
    examples: [["でんしゃで とうきょうへ いきます。", "Train-এ Tokyo যাই।"], ["しゅうまつ ともだちと きょうとに いきました。", "Weekend-এ বন্ধুর সঙ্গে Kyoto গিয়েছিলাম।"], ["きょうは どこへも いきません。", "আজ কোথাও যাব না।"], ["あるいて がっこうへ いきます。", "হেঁটে school যাই।"], ["ひとりで うちへ かえります。", "একা বাড়ি ফিরি।"], ["だれと えいがかんへ いきましたか。", "কার সঙ্গে সিনেমা হলে গিয়েছিলেন?"], ["じてんしゃで こうえんに いきます。", "সাইকেলে park-এ যাই।"]],
    vocabulary: ["でんしゃ — train", "ちかてつ — subway", "じてんしゃ — bicycle", "あるいて — হেঁটে", "ひとりで — একা", "えいがかん — cinema", "こうえん — park", "うち — বাড়ি", "かえります — ফিরি"],
    mistakes: ["Transport-এর পরে に দেওয়া।", "あるいてで বলা; あるいて নিজেই manner expression।", "Companion-এর সঙ্গে で ব্যবহার করা।", "どこへも-এর পরে positive verb ব্যবহার করা; এটি সবসময় negative-এর সঙ্গে ব্যবহৃত হয়।"],
    practice: ["Home থেকে workplace commute বিস্তারিত বলুন।", "শেষ trip কোথায়, কার সঙ্গে ও কীভাবে—তিনটি sentence লিখুন।", "আগামী ছুটিতে কোথাও যাবেন না—negative sentence বানান।", "ひとりで এবং だれかと—দুই রকম trip-এর তুলনা করে দুইটি sentence লিখুন।"],
    question: "‘Bus-এ school যাই’ কোনটি?",
    options: ["バスに がっこうで いきます。", "バスで がっこうへ いきます。", "バスと がっこうを いきます。", "バスへ がっこうに いきます。"],
    correctAnswer: "バスで がっこうへ いきます。",
  },
  {
    number: 6,
    title: "Action, object ও invitation",
    goal: "কী action কোথায় করছেন বলা এবং কাউকে polite invitation দেওয়া।",
    explanation: "Direct object (যার ওপর কাজ হচ্ছে)-এর পরে を বসে: コーヒーを のみます。 Action যে জায়গায় ঘটছে সেখানে で বসে—としょかんで べんきょうします। します অনেক activity-noun-এর সঙ্গে জুড়ে নতুন verb বানায়: べんきょうします, りょこうします, しごとします। কাউকে ভদ্রভাবে আমন্ত্রণ জানাতে verb-এর ません-form-এর পরে か বসিয়ে প্রশ্ন করা হয়—のみませんか (আক্ষরিক ‘খাবেন না?’ হলেও এটি আসলে নরম আমন্ত্রণ, disapproval নয়)। রাজি হলে ましょう দিয়ে ‘চলুন’ বলা হয়—のみましょう। Negative-question form invitation-কে জোর না করে choice-এর সুযোগ রেখে নরম করে তোলে।",
    patterns: ["N（object）を Vます。", "N（activity）を します。", "何を しますか。", "何：なん／なに", "N（place）で Vます。", "いっしょに Vませんか。", "Vましょう。", "Repeated information + か。"],
    examples: [["うちで Pythonを べんきょうします。", "বাসায় Python পড়ি।"], ["カフェで コーヒーを のみませんか。", "Cafe-তে coffee খাবেন?"], ["はい、のみましょう。", "হ্যাঁ, চলুন খাই।"], ["こうえんで しゃしんを とります。", "Park-এ ছবি তুলি।"], ["いっしょに えいがを みませんか。", "একসঙ্গে সিনেমা দেখবেন?"], ["すみません、きょうは ちょっと…。", "দুঃখিত, আজ একটু কঠিন…।"], ["あした いっしょに ひるごはんを たべましょう。", "আগামীকাল একসঙ্গে lunch খাই চলুন।"]],
    vocabulary: ["たべます — খাই", "のみます — পান করি", "みます — দেখি", "べんきょうします — পড়াশোনা করি", "いっしょに — একসঙ্গে", "しゃしん — ছবি", "とります — তুলি", "えいが — সিনেমা", "ひるごはん — দুপুরের খাবার"],
    mistakes: ["Action location-এর পরে に ব্যবহার করা।", "Object-এর পরে が বসানো যেখানে を প্রয়োজন।", "Invitation ませんか-কে literal negative question হিসেবে বোঝা।", "Invitation-এ সরাসরি ‘না’ বলা; Japanese-এ সাধারণত ちょっと… দিয়ে নরমভাবে decline করা হয়।"],
    practice: ["আজ কী কোথায় করবেন—চারটি action লিখুন।", "বন্ধুকে movie/coffee/study invitation দিন।", "Invitation accept ও soft decline—দুই response practice করুন।", "します দিয়ে activity-noun জুড়ে তিনটি নতুন verb বানান (যেমন テニスします)।"],
    question: "‘Library-তে Japanese পড়ি’ কোনটি?",
    options: ["としょかんに にほんごを べんきょうします。", "としょかんで にほんごを べんきょうします。", "としょかんを にほんごで べんきょうします。", "としょかんへ にほんごが べんきょうします。"],
    correctAnswer: "としょかんで にほんごを べんきょうします。",
  },
  {
    number: 7,
    title: "Tools, languages ও giving/receiving",
    goal: "কোন tool/language দিয়ে action হচ্ছে এবং কে কাকে কী দিল/পেল—স্পষ্টভাবে বলা।",
    explanation: "で tool, means বা language বোঝাতে ব্যবহার হয়: ペンで かきます (কলম দিয়ে লিখি), にほんごで はなします (Japanese-এ কথা বলি)। あげます ব্যবহার হয় giver-এর দৃষ্টিকোণ থেকে—‘আমি/অন্য কাউকে দিলাম’, আর もらいます ব্যবহার হয় receiver-এর দৃষ্টিকোণ থেকে—‘আমি/কেউ পেলাম’। যাকে দেওয়া হচ্ছে তার পরে に বসে (あげます-এর সঙ্গে), আর কার কাছ থেকে পাওয়া হচ্ছে তার পরে に অথবা から বসে (もらいます-এর সঙ্গে)—ব্যক্তির সঙ্গে সাধারণত に, প্রতিষ্ঠান/দূরবর্তী উৎসের সঙ্গে から বেশি স্বাভাবিক শোনায়। এই দুটো verb-এর subject বদলে গেলে পুরো বাক্যের অর্থ উল্টে যায়, তাই কে দিচ্ছে আর কে পাচ্ছে তা স্পষ্ট রাখা জরুরি।",
    patterns: ["Tool／Language で Vます。", "A は B に N を あげます。", "A は B に／から N を もらいます。", "～は ～ごで なんですか。"],
    examples: [["スマホで しゃしんを とります。", "Smartphone দিয়ে ছবি তুলি।"], ["わたしは こうはいに ほんを あげました。", "আমি junior-কে বই দিয়েছি।"], ["せんせいから アドバイスを もらいました。", "Teacher-এর কাছ থেকে advice পেয়েছি।"], ["はしで たべます。", "চপস্টিক দিয়ে খাই।"], ["えいごで はなして ください。", "ইংরেজিতে বলুন দয়া করে।"], ["ともだちに プレゼントを あげました。", "বন্ধুকে উপহার দিয়েছি।"], ["ともだちに かさを かりました。", "বন্ধুর কাছ থেকে ছাতা ধার নিয়েছি।"]],
    vocabulary: ["はし — chopsticks", "スプーン — spoon", "プレゼント — gift", "かします／かります — ধার দিই/নিই", "おしえます／ならいます — শেখাই/শিখি", "アドバイス — উপদেশ", "じしょ — অভিধান", "えいご — ইংরেজি ভাষা", "くれます — আমাকে/আমার পক্ষের কাউকে দেয়"],
    mistakes: ["あげます ও もらいます-এ subject একই রেখে meaning বদলানো।", "Tool-এর সঙ্গে を ব্যবহার করা।", "Person source-এ で বসানো।", "くれます-কে あげます-এর মতো ভাবা; くれます শুধু তখন ব্যবহার হয় যখন কেউ বক্তা/বক্তার পক্ষের কাউকে কিছু দেয়।"],
    practice: ["তিনটি tool দিয়ে কী করেন লিখুন।", "গত birthday-তে কী দিয়েছেন ও পেয়েছেন—দুই perspective-এ বলুন।", "একটি Japanese word Bangla/English-এ কী—question বানান।", "あげます/もらいます/くれます—তিনটি verb দিয়ে একই ঘটনার তিনটি ভিন্ন বাক্য লিখুন।"],
    question: "‘Teacher-এর কাছ থেকে dictionary পেয়েছি’ কোনটি?",
    options: ["せんせいに じしょを あげました。", "せんせいから じしょを もらいました。", "せんせいで じしょを もらいます。", "せんせいを じしょに あげました。"],
    correctAnswer: "せんせいから じしょを もらいました。",
  },
  {
    number: 8,
    title: "Adjectives দিয়ে description",
    goal: "মানুষ, জায়গা ও জিনিসকে い-adjective ও な-adjective দিয়ে describe করা।",
    explanation: "い-adjective সরাসরি noun-এর আগে বসে: あたらしい カメラ। な-adjective noun-এর আগে な নেয়: しずかな へや—な ছাড়া শুধু しずか へや ভুল। বাক্যের শেষে (predicate position) দুই ধরনের adjective-এরই পরে です বসতে পারে ভদ্রতার জন্য, কিন্তু な-adjective-এর পরে তখন な থাকে না—へやは しずかです (な বাদ)। Negative formation সম্পূর্ণ আলাদা: い-adjective-এর ending い বাদ দিয়ে くない বসে (あたらしい → あたらしくない), আর な-adjective-এ じゃない বা ではありません বসে (しずかじゃない/しずかではありません)। きれい (সুন্দর/পরিষ্কার) ও きらい (অপছন্দ) দেখতে い-দিয়ে শেষ হলেও আসলে な-adjective—এটি ব্যতিক্রম হিসেবে আলাদা মনে রাখতে হয়।",
    patterns: ["い-adjective + N", "な-adjective + な + N", "N は い-adjectiveです。", "N は な-adjectiveです。"],
    examples: [["これは あたらしい センサーです。", "এটি নতুন sensor।"], ["しずかな へやで はたらきます。", "শান্ত room-এ কাজ করি।"], ["この まちは にぎやかじゃないです。", "এই শহরটি lively নয়।"], ["この かばんは たかくないです。", "এই ব্যাগটি দামি না।"], ["たなかさんは しんせつな ひとです。", "Tanaka-সান একজন সদয় মানুষ।"], ["きょうしつは きれいです。", "শ্রেণিকক্ষটি পরিষ্কার।"], ["わたしは なっとうが きらいです。", "আমি নাত্তো অপছন্দ করি।"]],
    vocabulary: ["おおきい／ちいさい — বড়/ছোট", "あたらしい／ふるい — নতুন/পুরোনো", "たかい／やすい — দামি/সস্তা", "しずか — শান্ত", "べんり — সুবিধাজনক", "しんせつ — সদয়", "にぎやか — প্রাণবন্ত/জমজমাট", "きれい — সুন্দর/পরিষ্কার", "きらい — অপছন্দ"],
    mistakes: ["きれいな-কে きれいい বলা।", "い-adjective negative-এ じゃない ব্যবহার করা।", "な-adjective noun-এর আগে な বাদ দেওয়া।", "きれい/きらい-কে ভুলবশত い-adjective ধরে くない বসানো (きれいくない ভুল); সঠিক きれいじゃない।"],
    practice: ["নিজের phone/computer তিনটি adjective দিয়ে describe করুন।", "বর্তমান শহর ও hometown compare না করে আলাদাভাবে describe করুন।", "দুইটি positive ও দুইটি negative adjective sentence লিখুন।", "きれい ও きらい ব্যবহার করে দুইটি sentence লিখুন এবং negative form-ও বানান।"],
    question: "‘সুবিধাজনক app’ কোনটি?",
    options: ["べんり アプリ", "べんりな アプリ", "べんりい アプリ", "べんりの アプリ"],
    correctAnswer: "べんりな アプリ",
  },
  {
    number: 9,
    title: "Likes, skills, understanding ও reasons",
    goal: "পছন্দ, অপছন্দ, দক্ষতা, বোঝাপড়া ও possession প্রকাশ করা এবং から দিয়ে কারণ বলা।",
    explanation: "すき (পছন্দ), きらい (অপছন্দ), じょうず (দক্ষ), へた (অদক্ষ)—এই চারটি শব্দ な-adjective-এর মতো behave করে এবং যার প্রতি অনুভূতি/দক্ষতা প্রকাশ করা হচ্ছে তার পরে সাধারণত が বসে, action verb-এর মতো を নয়: テニスが じょうずです (টেনিসে দক্ষ)। わかります (বুঝি) ও あります (আছে)-ও একই নিয়ম মেনে target-এ が নেয়। から বাক্যের কারণ অংশের শেষে বসে এবং তারপর ফলাফল আসে: reason-から, result। Degree adverb ব্যবহার করে অনুভূতি/দক্ষতার মাত্রা বলা যায়—とても (খুব) ও よく (ভালোভাবে) positive-এর সঙ্গে, আর あまり (খুব একটা) ও ぜんぜん (একদম) সবসময় negative verb-এর সঙ্গে ব্যবহৃত হয়।",
    patterns: ["N が すき／じょうずです。", "N が わかります。", "N が あります。", "Reason から、result。"],
    examples: [["ロボットが とても すきです。", "Robot খুব পছন্দ।"], ["にほんごが すこし わかります。", "Japanese একটু বুঝি।"], ["じかんが ありませんから、きょうは いきません。", "সময় নেই বলে আজ যাব না।"], ["わたしは りょうりが じょうずです。", "আমি রান্নায় দক্ষ।"], ["かれは うんてんが へたです。", "সে গাড়ি চালানোয় অদক্ষ।"], ["わたしは おかねが あまり ありません。", "আমার টাকা খুব একটা নেই।"], ["にほんごが ぜんぜん わかりません。", "Japanese একদমই বুঝি না।"]],
    vocabulary: ["よく — ভালোভাবে/প্রায়ই", "だいたい — মোটামুটি", "すこし — একটু", "あまり～ません — খুব একটা নয়", "ぜんぜん～ません — একদম নয়", "りょうり — রান্না", "うんてん — গাড়ি চালানো", "おかね — টাকা", "とても — খুব"],
    mistakes: ["すき-এর target-এ を দেওয়া।", "から clause ও result-এর logic উল্টে ফেলা।", "あまり-এর সঙ্গে positive form ব্যবহার করা।", "とても-কে negative verb-এর সঙ্গে ব্যবহার করা; とても positive-এর সঙ্গে, あまり/ぜんぜん negative-এর সঙ্গে বসে।"],
    practice: ["পাঁচটি জিনিসে like/dislike/skill statement দিন।", "কোন language কতটুকু বোঝেন degree adverbসহ বলুন।", "আজকের decision-এর দুইটি reason から দিয়ে লিখুন।", "じょうず/へた ব্যবহার করে নিজের দুইটি skill (একটি ভালো, একটি খারাপ) বলুন।"],
    question: "‘Japanese খুব একটা বুঝি না’ কোনটি?",
    options: ["にほんごを あまり わかります。", "にほんごが あまり わかりません。", "にほんごに ぜんぜん わかります。", "にほんごが よく わかりませんか。"],
    correctAnswer: "にほんごが あまり わかりません。",
  },
  {
    number: 10,
    title: "Existence ও location map",
    goal: "মানুষ/প্রাণী ও জড়বস্তুর অস্তিত্ব এবং precise location বলা।",
    explanation: "います ব্যবহার হয় living beings (মানুষ, প্রাণী)-এর জন্য, আর あります ব্যবহার হয় non-living জিনিস/event-এর জন্য—এই পার্থক্যটি N5-এর সবচেয়ে গুরুত্বপূর্ণ নিয়মগুলোর একটি। নতুন কিছু introduce করতে (‘এখানে কী আছে?’) ছাঁচ হলো Place に N が あります/います—জায়গাটি topic, নতুন জিনিস/মানুষ が-marker নেয়। ইতিমধ্যে পরিচিত জিনিস কোথায় আছে তা বলতে ছাঁচ উল্টে যায়—N は Place に あります/います, এখানে জিনিসটি topic এবং জায়গা に-marker নেয়। Position phrase সাধারণত A の うえ/した/なか-এর মতো গঠিত হয়—つくえの うえ (ডেস্কের ওপর)। দুইটি reference point-এর মাঝে বোঝাতে N1 と N2 の あいだ ব্যবহার হয়।",
    patterns: ["Place に N が あります／います。", "N は Place に あります／います。", "A の Position", "N1 と N2 の あいだ"],
    examples: [["つくえの うえに カメラが あります。", "Desk-এর ওপর camera আছে।"], ["エンジニアは じむしょに います。", "Engineer office-এ আছেন।"], ["ぎんこうは えきと スーパーの あいだに あります。", "Bank station ও supermarket-এর মাঝে।"], ["へやの なかに ねこが います。", "ঘরের ভেতরে বিড়াল আছে।"], ["がっこうの となりに こうえんが あります。", "স্কুলের পাশে park আছে।"], ["かばんの なかに なにが ありますか。", "ব্যাগের ভেতরে কী আছে?"], ["いすの したに ねこが いません。", "চেয়ারের নিচে বিড়াল নেই।"]],
    vocabulary: ["うえ／した — ওপর/নিচে", "まえ／うしろ — সামনে/পেছনে", "なか／そと — ভেতরে/বাইরে", "となり — পাশের", "あいだ — মাঝখানে", "いす — চেয়ার", "じむしょ — অফিস", "なに — কী", "ねこ — বিড়াল"],
    mistakes: ["মানুষের জন্য あります বলা।", "Place-এ action verb না থাকলেও で ব্যবহার করা।", "Known entity locate করতে が/は nuance ignore করা।", "কোনো জিনিস নেই বোঝাতে ভুল pair ব্যবহার করা—মানুষের জন্য いません, জিনিসের জন্য ありません।"],
    practice: ["নিজের desk map পাঁচটি sentence-এ describe করুন।", "Office-এ তিনজন person কোথায়—います দিয়ে বলুন।", "একটি building map-এ two-reference location লিখুন।", "কোনো জিনিস ‘নেই’—এমন দুইটি negative existence sentence লিখুন (একটি いません, একটি ありません দিয়ে)।"],
    question: "‘Room-এ cat আছে’ কোনটি?",
    options: ["へやで ねこが あります。", "へやに ねこが います。", "へやを ねこに います。", "へやに ねこを あります。"],
    correctAnswer: "へやに ねこが います。",
  },
  {
    number: 11,
    title: "Counters, quantity ও duration",
    goal: "মানুষ/বস্তু গোনা, frequency এবং action কতক্ষণ চলে তা বলা।",
    explanation: "Japanese-এ জিনিস গোনার counter তার আকৃতি/ধরন অনুযায়ী বদলায়—এটি N5-এর অদ্ভুত লাগা একটি নিয়ম হলেও pattern-এ পড়লে সহজ হয়ে যায়। নির্দিষ্ট counter নেই এমন সাধারণ জিনিসের জন্য ひとつ থেকে とお ব্যবহার হয়। মানুষ গোনার জন্য আলাদা counter ～にん, তবে ১ ও ২-এর reading অনিয়মিত: ひとり (একজন), ふたり (দুজন), তারপর থেকে さんにん, よにん নিয়মিত। Quantity সাধারণত object-এর を particle-এর পরে, verb-এর ঠিক আগে বসে—English-এর মতো noun-এর আগে নয়: りんごを みっつ かいました। Duration (কতক্ষণ ধরে) বলতে সংখ্যার পরে সাধারণত particle লাগে না—にじかん べんきょうします। কিন্তু Frequency (কত সময়ের মধ্যে কতবার) বলতে period-এর পরে に এবং তারপর সংখ্যা+かい বসে: いっしゅうかんに さんかい।",
    patterns: ["N を Quantity Vます。", "Duration Vます。", "Period に Frequency Vます。", "どのくらい／いくつ／なんにん"],
    examples: [["りんごを みっつ かいました。", "তিনটি apple কিনেছি।"], ["まいにち にじかん べんきょうします。", "প্রতিদিন দুই ঘণ্টা পড়ি।"], ["いっしゅうかんに さんかい うんどうします。", "সপ্তাহে তিনবার exercise করি।"], ["かぞくは よにん います。", "পরিবারে চারজন আছে।"], ["ビールを ひとつ ください。", "একটা বিয়ার দিন দয়া করে।"], ["いちにちに はちじかん ねます。", "প্রতিদিন আট ঘণ্টা ঘুমাই।"], ["いちねんに いちど にほんへ いきます。", "বছরে একবার Japan যাই।"]],
    vocabulary: ["ひとつ～とお — general 1–10", "ひとり／ふたり／～にん — people", "～じかん — hours duration", "～しゅうかん — weeks", "～かい — times/frequency", "かぞく — পরিবার", "ビール — বিয়ার", "ください — দিন দয়া করে", "いちにち／いちねん — একদিন/একবছর"],
    mistakes: ["Duration-এর পরে に দেওয়া।", "Quantity-কে noun-এর আগে English order-এ রাখা।", "ひとり/ふたり irregular readings ভুল করা।", "Frequency ও duration গুলিয়ে ফেলা—duration-এ particle নেই, frequency-তে period-এর পরে に।"],
    practice: ["Shopping list পাঁচটি quantityসহ লিখুন।", "Daily study/work/sleep duration বলুন।", "সপ্তাহ/মাসে কতবার তিনটি activity করেন লিখুন।", "পরিবারে কতজন সদস্য আছে এবং কে কে—counter সহ বলুন।"],
    question: "‘প্রতিদিন দুই ঘণ্টা পড়ি’ কোনটি?",
    options: ["まいにち にじかんに べんきょうします。", "まいにち にじかん べんきょうします。", "まいにちを にじかん べんきょうします。", "にじかんが まいにちに べんきょうします。"],
    correctAnswer: "まいにち にじかん べんきょうします。",
  },
  {
    number: 12,
    title: "Past descriptions ও comparison",
    goal: "Noun/adjective-এর past forms ব্যবহার এবং দুই বা একাধিক option compare করা।",
    explanation: "Noun ও な-adjective-এর past polite হলো でした—বর্তমান です-কে でした-এ বদলালেই হয়: がくせいでした (ছাত্র ছিলাম), しずかでした (শান্ত ছিল)। Negative past: ではありませんでした (আনুষ্ঠানিক) অথবা じゃなかったです (কথ্য)। い-adjective-এর past আলাদা নিয়মে চলে—শেষের い বাদ দিয়ে かった বসে: いそがしい → いそがしかった, negative past-এ くなかった: いそがしくなかった। Comparison-এ দুইটি জিনিসের মধ্যে A は B より adjective—より মানে ‘তুলনায়/চেয়ে’, এবং যার সঙ্গে তুলনা হচ্ছে তার পরে বসে। দুইটি option-এর মধ্যে প্রশ্ন করতে AとBとどちらが adjectiveですか। তিন বা ততোধিক জিনিসের group-এ superlative বলতে Group のなかで N が いちばん adjective—いちばん মানে ‘সবচেয়ে’।",
    patterns: ["N／な-adjective でした。", "い-adjectiveかったです。", "A は B より adjectiveです。", "Group のなかで A が いちばん adjectiveです。"],
    examples: [["きのうは いそがしかったです。", "গতকাল ব্যস্ত ছিল।"], ["この PCは あの PCより はやいです。", "এই PC ঐ PC-এর চেয়ে দ্রুত।"], ["くだものの なかで マンゴーが いちばん すきです。", "ফলের মধ্যে mango সবচেয়ে পছন্দ।"], ["せんしゅうは あまり いそがしくなかったです。", "গত সপ্তাহ খুব একটা ব্যস্ত ছিল না।"], ["むかしは がくせいでした。", "আগে ছাত্র ছিলাম।"], ["でんしゃと バスと どちらが はやいですか。", "ট্রেন আর বাসের মধ্যে কোনটি দ্রুত?"], ["かぞくの なかで あにが いちばん せが たかいです。", "পরিবারের মধ্যে বড় ভাই সবচেয়ে লম্বা।"]],
    vocabulary: ["より — তুলনায়", "どちら — কোনটি (দুইটির মধ্যে)", "いちばん — সবচেয়ে", "なかで — group-এর মধ্যে", "おなじ — একই", "むかし — আগে/অতীতে", "せ — উচ্চতা", "はやい — দ্রুত", "おそい — ধীর"],
    mistakes: ["い-adjective past-এ でした সরাসরি যোগ করা।", "Comparison direction উল্টে ফেলা।", "তিন বা বেশি option-এ どちら ব্যবহার করা।", "より-এর জায়গা ভুল করা; যার সঙ্গে তুলনা হচ্ছে তার পরে より বসে, subject-এর পরে নয়।"],
    practice: ["আজ ও গতকালের weather compare করুন।", "দুইটি phone/transport option তিনটি adjective দিয়ে compare করুন।", "Food, city, language category-তে favourite superlative বলুন।", "むかし ও いま তুলনা করে দুইটি sentence লিখুন (একটি past noun/adjective, একটি present)।"],
    question: "‘Tokyo Osaka-এর চেয়ে বড়’ কোনটি?",
    options: ["とうきょうは おおさかより おおきいです。", "とうきょうより おおさかは おおきいです。", "とうきょうは おおさかと おおきかったです。", "とうきょうのなかで おおさかです。"],
    correctAnswer: "とうきょうは おおさかより おおきいです。",
  },
  {
    number: 13,
    title: "Want, want-to-do ও purpose",
    goal: "কোন জিনিস চান, কী করতে চান এবং কোনো জায়গায় কী উদ্দেশ্যে যান—বলা।",
    explanation: "ほしいです ব্যবহার হয় কোনো জিনিস চাওয়া বোঝাতে, এবং এটি い-adjective-এর মতো behave করে—desired জিনিসটির পরে সাধারণত が বসে (を নয়): あたらしい くつが ほしいです। Verb-এর ‘করতে চাই’ রূপ পেতে verb-এর ます-stem-এর সঙ্গে たいです জোড়া লাগে: たべます→たべたいです। たいです-ও い-adjective-এর মতো conjugate হয়—negative たくないです, past たかったです। Movement-এর purpose বলতে verb stem বা action-noun-এর পরে に বসিয়ে তারপর いきます/きます/かえります আসে: ほんを かりに いきます (বই ধার নিতে যাই)। たいです দিয়ে সরাসরি নিজের ইচ্ছা প্রকাশ স্বাভাবিক, কিন্তু অন্য কারও (তৃতীয় ব্যক্তির) ইচ্ছা বর্ণনা করতে সরাসরি たいです ব্যবহার একটু অস্বাভাবিক শোনাতে পারে—N5-এ শুরুতে এটি এড়িয়ে চলাই ভালো।",
    patterns: ["N が ほしいです。", "V-stem たいです。", "Place へ V-stem に いきます。", "なにか／どこか"],
    examples: [["あたらしい キーボードが ほしいです。", "নতুন keyboard চাই।"], ["にほんで AIを けんきゅうしたいです。", "Japan-এ AI research করতে চাই।"], ["としょかんへ ほんを かりに いきます。", "Library-তে বই ধার নিতে যাই।"], ["なにか つめたい のみものが ほしいです。", "কিছু ঠান্ডা পানীয় চাই।"], ["らいねん にほんへ りゅうがくしたいです。", "আগামী বছর Japan-এ study abroad করতে চাই।"], ["えきへ ともだちを むかえに いきます。", "Station-এ বন্ধুকে নিতে যাই।"], ["なつやすみに どこか あたたかい くにへ いきたいです。", "গ্রীষ্মের ছুটিতে কোনো গরম দেশে যেতে চাই।"]],
    vocabulary: ["ほしい — চাই (জিনিস)", "～たい — করতে চাই", "あそびます — leisure করি", "むかえます — নিতে/receive করতে যাই", "なにか — কিছু", "つめたい — ঠান্ডা", "のみもの — পানীয়", "りゅうがく — বিদেশে পড়াশোনা", "あたたかい — উষ্ণ"],
    mistakes: ["ほしい-এর target-এ を দেওয়া।", "Full ます form-এর সঙ্গে たい যোগ করা।", "Purpose に-এর আগে dictionary form রাখা।", "たいです-এর negative-এ ません যোগ করা; সঠিক たくないです (い-adjective-এর মতো)।"],
    practice: ["এখন প্রয়োজন এমন তিনটি জিনিস লিখুন।", "Japan-এ করতে চান এমন পাঁচটি action বলুন।", "তিনটি destination + purpose sentence বানান।", "たい-এর negative form (করতে চাই না) ব্যবহার করে দুইটি sentence লিখুন।"],
    question: "‘Library-তে পড়তে যাই’ কোনটি?",
    options: ["としょかんへ べんきょうしますに いきます。", "としょかんへ べんきょうしに いきます。", "としょかんで べんきょうたいです。", "としょかんを べんきょうに いきます。"],
    correctAnswer: "としょかんへ べんきょうしに いきます。",
  },
  {
    number: 14,
    title: "て-form, requests ও current action",
    goal: "て-form বানানো, polite request করা এবং এখন কী চলছে বলা।",
    explanation: "て-form বহু grammar pattern-এর connector—てください, ています, てもいいです ইত্যাদি সব এর ওপর দাঁড়িয়ে। Group 1 verb-এর ending অনুযায়ী পরিবর্তন হয়: う/つ/る → って (かいます→かって), む/ぬ/ぶ → んで (よみます→よんで), く → いて (かきます→かいて), ぐ → いで (およぎます→およいで), す → して (はなします→はなして)। Group 2 verb-এ শুধু る বাদ দিয়ে て বসে: たべます→たべて, みます→みて। Irregular verb します→して এবং きます→きて। いきます ব্যতিক্রম—নিয়ম অনুযায়ী いいて হওয়া উচিত হলেও আসলে いって হয়। て-form-এর পরে ください বসিয়ে ভদ্র request করা হয়: まって ください। て-form-এর পরে います বসিয়ে বর্তমানে চলমান action অথবা প্রসঙ্গভেদে স্থায়ী অবস্থা (যেমন けっこんしています = বিবাহিত) বোঝানো হয়।",
    patterns: ["Vて ください。", "Vて います。", "Vます → Vて", "なにを して いますか。"],
    examples: [["この ボタンを おして ください。", "এই button চাপুন।"], ["いま プログラムを テストして います。", "এখন program test করছি।"], ["もういちど ゆっくり はなして ください。", "আরেকবার ধীরে বলুন।"], ["ちょっと まって ください。", "একটু অপেক্ষা করুন।"], ["いま なにを して いますか。", "এখন কী করছেন?"], ["かのじょは いま でんわで はなして います。", "সে এখন ফোনে কথা বলছে।"], ["まどを あけて ください。", "জানালা খুলুন।"]],
    vocabulary: ["おします — চাপি", "まちます — অপেক্ষা করি", "よびます — ডাকি", "つかいます — ব্যবহার করি", "てつだいます — সাহায্য করি", "あけます — খুলি", "しめます — বন্ধ করি", "でんわ — ফোন", "まど — জানালা"],
    mistakes: ["よみます→よみて করা; correct よんで।", "いきます→いいて করা; correct いって।", "Strong command context-এ সবসময় てください যথেষ্ট polite ধরে নেওয়া।", "ています-কে সবসময় শুধু ‘এখন করছি’ ভাবা; context অনুযায়ী এটি স্থায়ী state-ও বোঝাতে পারে (যেমন すんでいます = থাকি/বসবাস করি)।"],
    practice: ["দশটি common verb-এর て-form লিখুন।", "Workplace/classroom-এর পাঁচটি polite instruction বানান।", "এখন আপনি ও আশেপাশের মানুষ কী করছেন describe করুন।", "ています ব্যবহার করে নিজের একটি স্থায়ী অবস্থা (যেমন কোথায় থাকেন) বলুন।"],
    question: "よみます-এর て-form কোনটি?",
    options: ["よみて", "よんで", "よって", "よいて"],
    correctAnswer: "よんで",
  },
  {
    number: 15,
    title: "Permission, prohibition ও resulting state",
    goal: "অনুমতি চাওয়া/দেওয়া, নিষেধ করা এবং ています দিয়ে চলমান state বা habit বোঝা।",
    explanation: "Vてもいいです দিয়ে অনুমতি দেওয়া/বলা হয়—আক্ষরিক অর্থ ‘করলেও ভালো’, অর্থাৎ ‘করতে পারেন’। প্রশ্ন করলে (Vてもいいですか) অনুমতি চাওয়া হয়—つかっても いいですか (ব্যবহার করতে পারি?)। বিপরীতে Vてはいけません দিয়ে prohibition (নিষেধ) বোঝানো হয়—আক্ষরিক ‘করলে খারাপ হবে’। ています শুধু ‘এখন করছি’ বোঝায় না—কিছু নির্দিষ্ট verb-এর সঙ্গে (すみます, つとめます, しります, けっこんします) এটি continuing state বা established fact বোঝায়: よこはまに すんでいます মানে সাধারণভাবে ‘Yokohama-তে থাকি’। Context ও verb-এর ধরন দেখে ています-এর অর্থ নির্ধারণ করতে হয়।",
    patterns: ["Vても いいです。", "Vても いいですか。", "Vては いけません。", "N に すんで／つとめて います。"],
    examples: [["ここで パソコンを つかっても いいですか。", "এখানে computer ব্যবহার করতে পারি?"], ["この へやで たばこを すっては いけません。", "এই room-এ smoking নিষেধ।"], ["よこはまに すんで います。", "Yokohama-তে থাকি।"], ["トイレを つかっても いいですか。— はい、どうぞ。", "টয়লেট ব্যবহার করতে পারি? — হ্যাঁ, করুন।"], ["ここに くるまを とめては いけません。", "এখানে গাড়ি পার্ক করা নিষেধ।"], ["かれは かいしゃに つとめて います。", "সে কোম্পানিতে চাকরি করে।"], ["すずきさんを しって いますか。", "আপনি সুজুকি-সানকে চেনেন?"]],
    vocabulary: ["すみます — বসবাস করি", "つとめます — চাকরি করি", "しります — জানতে পারি", "けっこんします — বিয়ে করি", "すいます — ধূমপান করি", "どうぞ — করুন/নিন", "とめます — পার্ক করি/থামাই", "かいしゃ — কোম্পানি", "たばこ — সিগারেট"],
    mistakes: ["しっています-এর negative しっていません বলা; common correct しりません।", "Permission ও prohibition forms গুলিয়ে ফেলা।", "সব ています-কে present continuous অনুবাদ করা।", "いいですか প্রশ্নে হ্যাঁ-সূচক উত্তর দিতে শুধু はい বলা যথেষ্ট মনে করা; どうぞ/はい、いいです—দুই ধরনের স্বাভাবিক উত্তর অভ্যাস করুন।"],
    practice: ["Office/park/train-এর তিনটি permission question লিখুন।", "তিনটি public rule prohibition form-এ লিখুন।", "নিজের residence, employment ও known information ています দিয়ে বলুন।", "しっています/しりません দিয়ে কাউকে চেনেন কিনা প্রশ্ন-উত্তর করুন।"],
    question: "‘এখানে ছবি তুলতে পারি?’ কোনটি?",
    options: ["ここで しゃしんを とっても いいですか。", "ここで しゃしんを とっては いけませんか。", "ここに しゃしんを とりますか。", "ここを しゃしんで いいですか。"],
    correctAnswer: "ここで しゃしんを とっても いいですか。",
  },
  {
    number: 16,
    title: "Action sequence ও connected descriptions",
    goal: "একাধিক action ক্রমানুসারে বলা এবং adjective/noun description connect করা।",
    explanation: "একাধিক action ক্রমানুসারে বলতে প্রতিটি verb-কে て-form-এ রেখে জুড়ে শেষে মূল tense-এর verb বসানো হয়—মাঝের verb-গুলো নিজে tense বহন করে না, শুধু শেষের verb-টিই পুরো sequence-এর সময় নির্ধারণ করে: シャワーを あびて、コーヒーを のんで、しごとを はじめます। Vてから ব্যবহার হয় যখন একটি action শেষ হওয়ার পরেই পরেরটি শুরু হয়, এই ক্রম বিশেষভাবে জোর দিতে চাইলে—て-form-এর চেয়ে বেশি স্পষ্ট ‘আগে-পরে’ সম্পর্ক দেখায়। Adjective/noun দিয়ে দুইটি গুণ জোড়া লাগাতে connector আলাদা: い-adjective-এর শেষ い বাদ দিয়ে くて বসে (ちいさい→ちいさくて), আর な-adjective ও noun-এ সরাসরি で বসে (べんり→べんりで, がくせい→がくせいで)। শেষে যথারীতি polite verb/adjective দিয়ে বাক্য শেষ হয়।",
    patterns: ["Vて、Vて、Vます。", "Vてから、Vます。", "い-adjectiveくて、～", "な-adjective／N で、～"],
    examples: [["あさ シャワーを あびて、コーヒーを のんで、しごとを はじめます。", "সকালে shower নিয়ে coffee খেয়ে কাজ শুরু করি।"], ["テストしてから、システムを リリースします。", "Test করার পরে system release করি।"], ["この カメラは ちいさくて、べんりです。", "Cameraটি ছোট এবং সুবিধাজনক।"], ["でんしゃに のって、えきで おりて、あるいて いきます。", "ট্রেনে উঠে, স্টেশনে নেমে, হেঁটে যাই।"], ["しゅくだいを だしてから、あそびます。", "হোমওয়ার্ক জমা দেওয়ার পরে খেলি।"], ["かのじょは しんせつで、あたまが いいです。", "সে দয়ালু এবং বুদ্ধিমান।"], ["この まちは にぎやかで、たのしいです。", "এই শহরটি প্রাণবন্ত এবং আনন্দদায়ক।"]],
    vocabulary: ["あびます — shower নিই", "のります／おります — উঠি/নামি", "いれます — ঢোকাই", "だします — বের করি/submit করি", "はじめます — শুরু করি", "あたま — মাথা/বুদ্ধি", "たのしい — আনন্দদায়ক", "しゅくだい — হোমওয়ার্ক", "リリースします — release করি"],
    mistakes: ["Sequence-এর সব verb past করা; final verb tense যথেষ্ট।", "い-adjective-এ で connector ব্যবহার করা।", "な-adjective-এ くて যোগ করা।", "Vてから-কে শুধু ‘এবং’ (て-form-এর মতো) ভাবা; てから বিশেষভাবে সম্পন্ন হওয়ার পরের ধাপ জোর দেয়।"],
    practice: ["Morning routine পাঁচ action-এর chain লিখুন।", "Deployment workflow Vてから দিয়ে তিন ধাপে বলুন।", "একটি device ও একটি city দুই adjective connect করে describe করুন।", "て-form দিয়ে তিনটি ভিন্ন adjective/noun জুড়ে একজন মানুষকে describe করুন।"],
    question: "‘এই laptop হালকা এবং দ্রুত’ কোনটি?",
    options: ["この PCは かるいで、はやいです。", "この PCは かるくて、はやいです。", "この PCは かるくで、はやいです。", "この PCは かるいて、はやいです。"],
    correctAnswer: "この PCは かるくて、はやいです。",
  },
  {
    number: 17,
    title: "ない-form, obligation ও necessity",
    goal: "Verb negative plain form বানানো, ‘করবেন না’, ‘করতেই হবে’ এবং ‘না করলেও চলে’ বলা।",
    explanation: "ない-form (plain negative) বানানোর নিয়ম て-form-এর চেয়ে সহজ ও নিয়মিত। Group 1 verb-এ dictionary form-এর শেষ u-sound-কে a-row-এ বদলে ない বসে—তবে う-দিয়ে শেষ হলে あ নয়, わ বসে (う→わない): かいます→かわない, よみます→よまない। Group 2-তে শুধু る বাদ দিয়ে ない বসে: たべます→たべない। Irregular: します→しない, きます→こない। ないでください দিয়ে নরম নিষেধ/অনুরোধ করা হয়—‘করবেন না’। なければなりません দিয়ে বাধ্যবাধকতা বোঝানো হয়—আক্ষরিক অর্থ ‘না করলে হবে না’, তাই দুইটা negative মিলে positive obligation তৈরি করে। なくてもいいです দিয়ে বলা হয় কাজটি না করলেও চলবে—positive てもいいです-এর বিপরীত জোড়া। শুরুতে এই লম্বা form-গুলো সম্পূর্ণ chunk হিসেবে মুখস্থ করে ব্যবহার শুরু করুন, পরে ভেতরের গঠন বিশ্লেষণ করবেন।",
    patterns: ["Vないで ください。", "Vなければ なりません。", "Vなくても いいです。", "Vます → Vない"],
    examples: [["この ファイルを けさないで ください。", "এই file delete করবেন না।"], ["あしたまでに レポートを ださなければ なりません。", "আগামীকালের মধ্যে report জমা দিতেই হবে।"], ["どようびは はたらかなくても いいです。", "Saturday কাজ না করলেও চলে।"], ["パスワードを わすれないで ください。", "Password ভুলবেন না।"], ["まいつき やちんを はらわなければ なりません。", "প্রতি মাসে ভাড়া দিতেই হবে।"], ["パスポートを もっていかなくても いいです。", "Passport সঙ্গে নিতে হবে না।"], ["しんぱいしないで ください。だいじょうぶです。", "চিন্তা করবেন না। ঠিক আছে।"]],
    vocabulary: ["なくします — হারাই", "わすれます — ভুলে যাই", "だします — জমা দিই", "はらいます — pay করি", "もっていきます — সঙ্গে নিয়ে যাই", "パスワード — পাসওয়ার্ড", "やちん — ভাড়া", "パスポート — পাসপোর্ট", "しんぱいします — চিন্তা করি"],
    mistakes: ["かいます→かわない-এর বদলে かあない করা।", "Obligation form-কে simple future বলা।", "なくてもいい-কে prohibition হিসেবে বোঝা।", "なければなりません-কে সরাসরি ‘করব’ বলে অনুবাদ করা; এটি বাধ্যবাধকতা (‘করতেই হবে’), সাধারণ future নয়।"],
    practice: ["দশটি verb ない-form-এ বদলান।", "Computer lab-এর পাঁচটি negative instruction লিখুন।", "এই সপ্তাহে তিনটি obligation ও দুইটি optional task বলুন।", "しんぱいしないで ください-এর মতো একটি soft reassurance sentence বানান।"],
    question: "‘আজ আসতে হবে না’ কোনটি?",
    options: ["きょう こないで ください。", "きょう こなくても いいです。", "きょう こなければ なりません。", "きょう きても いけません。"],
    correctAnswer: "きょう こなくても いいです。",
  },
  {
    number: 18,
    title: "Dictionary form, ability ও before",
    goal: "Dictionary form চিনে ability, hobby এবং কোনো action-এর আগে কী হয় বলা।",
    explanation: "Dictionary form হলো verb-এর plain, non-past, dictionary-তে যেভাবে পাওয়া যায় সেই মূল রূপ—ます-form থেকে group অনুযায়ী তৈরি হয়: Group 1 ます-এর আগের i-row-কে u-row করে (よみます→よむ), Group 2 ます বাদ দিয়ে る যোগ করে (たべます→たべる), Irregular します→する, きます→くる। Ability বলতে dictionary form-এর পরে ことができます বসে—আক্ষরিক ‘করার ব্যাপারটা সম্ভব’: およぐ ことが できます (সাঁতার কাটতে পারি)। Hobby বলতে একই গঠন ব্যবহার হয়, শুধু শেষে です: しゅみは えを かく ことです (শখ ছবি আঁকা)। কোনো action-এর ‘আগে’ বলতে dictionary form-এর পরে まえに বসে: ねる まえに (ঘুমানোর আগে); noun-এর ক্ষেত্রে তার আগে の লাগে: しょくじの まえに (খাবারের আগে)। Ability context-নির্ভর—এটি স্থায়ী দক্ষতা অথবা মুহূর্তের সম্ভাবনা, দুটোই বোঝাতে পারে।",
    patterns: ["V-dictionary ことが できます。", "しゅみは V-dictionary ことです。", "V-dictionary まえに、～", "N の まえに、～"],
    examples: [["Pythonで データを ぶんせきする ことが できます。", "Python দিয়ে data analysis করতে পারি।"], ["しゅみは しゃしんを とる ことです。", "Hobby হলো ছবি তোলা।"], ["ねる まえに、ほんを よみます。", "ঘুমানোর আগে বই পড়ি।"], ["わたしは くるまを うんてんする ことが できます。", "আমি গাড়ি চালাতে পারি।"], ["しゅみは きってを あつめる ことです。", "শখ ডাকটিকিট সংগ্রহ করা।"], ["りょこうの まえに、ホテルを よやくします。", "ভ্রমণের আগে হোটেল বুক করি।"], ["しょくじの まえに、てを あらいます。", "খাবারের আগে হাত ধুই।"]],
    vocabulary: ["できます — পারি/সম্ভব", "しゅみ — hobby", "うんてんします — drive করি", "あつめます — সংগ্রহ করি", "よやくします — reserve করি", "しょくじ — খাবার/ভোজন", "て — হাত", "あらいます — ধুই", "ホテル — হোটেল"],
    mistakes: ["ます-form-এর সঙ্গে ことができます যোগ করা।", "Noun before-এ の বাদ দেওয়া।", "Ability-কে সবসময় talent হিসেবে অনুবাদ করা।", "V-dictionary まえに-তে verb-কে past form দেওয়া; まえに সবসময় dictionary (non-past) form নেয়, even যখন পুরো ঘটনা অতীতে ঘটেছে।"],
    practice: ["আপনার পাঁচটি skill ability form-এ লিখুন।", "দুইটি hobby ことです দিয়ে explain করুন।", "Work/sleep/travel-এর আগে কী করেন—তিনটি sentence লিখুন।", "কোনো একটা কাজের আগে আরেকটা কাজ করেন—Nのまえに ও Vまえに দুই ধরনের sentence বানান।"],
    question: "‘Japanese পড়তে পারি’ কোনটি?",
    options: ["にほんごを よみますことが できます。", "にほんごを よむ ことが できます。", "にほんごが よんで できます。", "にほんごを よみたいことです。"],
    correctAnswer: "にほんごを よむ ことが できます。",
  },
  {
    number: 19,
    title: "た-form, experience ও representative actions",
    goal: "Past plain form বানানো, জীবনের experience বলা এবং representative action list করা।",
    explanation: "た-form-এর sound change ঠিক て-form-এরই parallel—শুধু て→た, で→だ বদলে যায়: よんで→よんだ, かいて→かいた। Vたことがあります দিয়ে জীবনের experience বলা হয়—এখানে exact কবে ঘটেছে তা গুরুত্বপূর্ণ নয়, শুধু ‘জীবনে কখনও হয়েছে কি না’ সেটাই মূল কথা: ふじさんを みたことがあります। Vたり、Vたりします দিয়ে কয়েকটি representative example তুলে ধরা হয়, সম্পূর্ণ তালিকা নয়—আক্ষরিক অর্থ ‘এটাও করি, ওটাও করি (এবং আরও কিছু)’; শেষে সবসময় します/しました বসে, এবং প্রতিটি verb-ই たり নেয়, শুধু শেষটি নয়। Change of state বলতে い-adjective ও な-adjective/noun-এর নিয়ম আলাদা: い-adjective-এর শেষ い বাদ দিয়ে くなります বসে (たかい→たかくなります), আর な-adjective/noun-এর পরে になります বসে (げんき→げんきになります, せんせい→せんせいになります)।",
    patterns: ["Vた ことが あります。", "Vたり、Vたり します。", "い-adjectiveく なります。", "な-adjective／N に なります。"],
    examples: [["ふじさんを みた ことが あります。", "Mt. Fuji দেখার experience আছে।"], ["やすみのひは りょうりしたり、ゲームを したりします。", "ছুটির দিনে রান্না/গেম ইত্যাদি করি।"], ["にほんごが すこし じょうずに なりました。", "Japanese একটু ভালো হয়েছে।"], ["やまに のぼった ことが あります。", "পাহাড়ে চড়ার experience আছে।"], ["しゅうまつは ほんを よんだり、さんぽしたり します。", "সপ্তাহান্তে বই পড়ি, হাঁটি ইত্যাদি করি।"], ["てんきが さむく なりました。", "আবহাওয়া ঠান্ডা হয়ে গেছে।"], ["かれは いしゃに なりました。", "সে ডাক্তার হয়েছে।"]],
    vocabulary: ["のぼります — উঠি/আরোহন করি", "とまります — অবস্থান করি", "けいけん — experience", "なります — হয়ে যায়", "いちども — একবারও", "さんぽします — হাঁটাহাঁটি করি", "てんき — আবহাওয়া", "さむい — ঠান্ডা", "いしゃ — ডাক্তার"],
    mistakes: ["Experience sentence-এ exact yesterday time যোগ করা।", "たり list-এর শেষে します বাদ দেওয়া।", "な-adjective change-এ くなる ব্যবহার করা।", "たり list-এ প্রথম verb-কে て-form রাখা; উভয় verb-ই たり নিতে হয়, শুধু শেষ verb না।"],
    practice: ["Japan/technology/food নিয়ে পাঁচটি experience লিখুন।", "Weekend-এর representative activities たり দিয়ে বলুন।", "গত বছরে আপনার skill/life কীভাবে বদলেছে তিনটি sentence লিখুন।", "い-adjective ও な-adjective উভয় দিয়ে change-of-state sentence বানান (একটি くなります, একটি になります)।"],
    question: "‘Sushi খাওয়ার experience আছে’ কোনটি?",
    options: ["すしを たべる ことが ありました。", "すしを たべた ことが あります。", "すしを たべて ことです。", "すしを たべたり あります。"],
    correctAnswer: "すしを たべた ことが あります。",
  },
  {
    number: 20,
    title: "Plain style ও casual conversation",
    goal: "Polite forms-এর plain equivalents চিনে close relationship-এর natural short conversation বোঝা।",
    explanation: "Plain style শুধু verb-এ সীমাবদ্ধ না—noun ও adjective-এর ending-ও বদলে যায়। Verb-এর চার ঘর plain-এ: non-past affirmative = dictionary form (いく), non-past negative = ない-form (いかない), past affirmative = た-form (いった), past negative = なかった-form (いかなかった)। い-adjective plain-এ শুধু です বাদ দিলেই হয়—adjective নিজে বদলায় না: たかい (polite: たかいです, plain: たかい)। な-adjective ও noun-এর non-past affirmative-এ です-এর জায়গায় だ বসে: げんきだ, がくせいだ—তবে casual কথায় প্রায়ই だ-ও বাদ দিয়ে শুধু noun/adjective বলা হয়। প্রশ্নসূচক か সাধারণত বাদ পড়ে, বাক্যের শেষে rising intonation দিয়ে প্রশ্ন বোঝানো হয়: くる? (আসবে?)। Plain style rude নয়; সম্পর্ক ও পরিস্থিতি (বন্ধু, পরিবার, কাছের সহকর্মী) এটা ব্যবহার করা উচিত কি না তা ঠিক করে।",
    patterns: ["Vる／Vない／Vた／Vなかった", "い-adjective（です বাদ）", "な-adjective／N だ", "～の？／～？ casual question"],
    examples: [["あした くる？", "কাল আসবে?"], ["うん、いく。", "হ্যাঁ, যাব।"], ["きのうは ひまじゃなかった。", "গতকাল free ছিলাম না।"], ["これ、たべる？", "এটা খাবে?"], ["ううん、たべない。", "না, খাব না।"], ["かのじょは がくせいだ。", "সে ছাত্রী।"], ["きのう べんきょうした？", "গতকাল পড়েছিলে?"]],
    vocabulary: ["うん／ううん — casual yes/no", "ほんとう？ — সত্যি?", "どうして？ — কেন?", "あとで — পরে", "まだ — এখনও", "これ — এটা", "たべる — খাওয়া (dictionary form)", "かのじょ — সে/মেয়ে", "ひま — অবসর/ফাঁকা"],
    mistakes: ["সব workplace situation-এ plain style ব্যবহার করা।", "な-adjective affirmative-এ だ ভুলে যাওয়া।", "Plain negative past form ভুল বানানো।", "Casual question-এ か যোগ করে ফেলা; plain casual question-এ か সাধারণত বাদ পড়ে, শুধু intonation বদলায়।"],
    practice: ["পাঁচটি polite verb চার plain form-এ বদলান।", "বন্ধুর সঙ্গে weekend plan নিয়ে six-line original chat লিখুন।", "একই message friend ও manager-এর জন্য দুই style-এ লিখুন।", "うん/ううん দিয়ে তিনটি short casual yes/no answer লিখুন।"],
    question: "いきませんでした-এর plain form কোনটি?",
    options: ["いかない", "いかなかった", "いきなかった", "いってないでした"],
    correctAnswer: "いかなかった",
  },
  {
    number: 21,
    title: "Thoughts, opinions ও quotation",
    goal: "নিজের মতামত/অনুমান বলা এবং কারও বক্তব্য quote/report করা।",
    explanation: "মতামত বলতে plain clause-এর পরে とおもいます বসে—plain clause মানে です নয় だ (noun/な-adjective-এর ক্ষেত্রে), অথবা い-adjective/verb তার dictionary/plain form-এই থাকে: べんりだとおもいます (মনে হয় সুবিধাজনক), たかいとおもいます (মনে হয় দামি)। কারও কথা report/quote করতে person は + plain clause + といいました বসে—quote-এর ভেতরের অংশও plain style মেনে চলে, এবং ভেতরে নিজস্ব topic は থাকতে পারে। でしょう দুই রকম শোনাতে পারে: rising intonation-এ (でしょう?) confirmation চাওয়া—‘তাই না?’, আর falling intonation-এ probability/অনুমান প্রকাশ—‘হয়তো এমন হবে’। নিজের মতামতকে সরাসরি fact হিসেবে না বলে とおもいます জুড়ে দিলে বাক্যটি নরম ও বিনয়ী শোনায়—Japanese communication-এ এটি খুবই common।",
    patterns: ["Plain clause と おもいます。", "Person は ～と いいました。", "～でしょう？", "N について どう おもいますか。"],
    examples: [["この システムは べんりだと おもいます。", "আমার মনে হয় systemটি useful।"], ["たなかさんは あした やすむと いいました。", "Tanaka বলেছেন কাল ছুটি নেবেন।"], ["この ほうほうは だいじょうぶでしょう。", "এই method সম্ভবত ঠিক হবে।"], ["わたしは かれの いけんが ただしいと おもいます。", "আমার মনে হয় তার মতামত সঠিক।"], ["かのじょは にほんへ いきたいと いいました。", "সে বলেছে Japan যেতে চায়।"], ["あしたは あめでしょう。", "আগামীকাল সম্ভবত বৃষ্টি হবে।"], ["このプロジェクトについて、どう おもいますか。", "এই project সম্পর্কে আপনার কী মনে হয়?"]],
    vocabulary: ["おもいます — ভাবি", "いいます — বলি", "いけん — opinion", "たぶん — probably", "きっと — নিশ্চয়ই/strong expectation", "ただしい — সঠিক", "プロジェクト — প্রজেক্ট", "あめ — বৃষ্টি", "について — সম্পর্কে"],
    mistakes: ["な-adjective/noun quote-এর আগে だ বাদ দেওয়া।", "Reported speech-এ tense speaker time/context অনুযায়ী না দেখা।", "でしょう-কে সবসময় question ভাবা।", "নিজের strong opinion-ও সরাসরি fact হিসেবে বলে ফেলা; とおもいます যোগ করলে বক্তব্য বিনয়ী ও কম জোরালো শোনায়।"],
    practice: ["AI/Japan/study নিয়ে তিনটি opinion বলুন।", "একজন colleague-এর দুইটি message report করুন।", "Weather বা schedule নিয়ে probability sentence লিখুন।", "でしょう ব্যবহার করে আবহাওয়া/ভবিষ্যতের একটি অনুমান sentence লিখুন।"],
    question: "‘আমার মনে হয় এই শহর শান্ত’ কোনটি?",
    options: ["この まちは しずかと おもいます。", "この まちは しずかだと おもいます。", "この まちは しずかですを おもいます。", "この まちは しずかなと おもいます。"],
    correctAnswer: "この まちは しずかだと おもいます。",
  },
  {
    number: 22,
    title: "Relative clauses ও noun modification",
    goal: "একটি full plain clause দিয়ে noun identify/describe করা এবং longer information-rich sentence বানানো।",
    explanation: "Japanese-এ relative clause সবসময় যে noun-কে modify করছে তার ঠিক আগে বসে—English-এর মতো ‘who/that/which’-এর আলাদা কোনো relative pronoun লাগে না, শুধু পুরো plain clause noun-এর সামনে জুড়ে দেওয়া হয়: わたしが つくった アプリ। Clause-এর ভেতরের subject প্রায়ই が নেয়, は নয়—কারণ পুরো clause-টিই একটি বড় noun phrase-এর অংশ, নিজে আলাদা topic নয়। Modified noun-টি তারপর মূল sentence-এ তার নিজের ভূমিকা অনুযায়ী নতুন particle (は/を/が) নিতে পারে—মূল sentence-এ সেই particle-ই আসল কাজ নির্ধারণ করে, clause-এর ভেতরের particle নয়। Clause-এর tense noun-সম্পর্কিত ঘটনার সময় দেখায়, আর সবশেষে থাকা main predicate পুরো sentence-এর সময় ও judgement বহন করে—দুই tense আলাদা হতে পারে।",
    patterns: ["[Plain clause] + N", "[Person が V] + N", "[きのう Vた] + N", "Modified N は／を／が ～"],
    examples: [["これは わたしが つくった アプリです。", "এটি আমার বানানো app।"], ["きのう かった ほんを よみました。", "গতকাল কেনা বইটি পড়েছি।"], ["めがねを かけている ひとは せんせいです。", "চশমা পরা ব্যক্তি teacher।"], ["あかい ぼうしを かぶっている こどもは わたしの むすこです。", "লাল টুপি পরা বাচ্চাটি আমার ছেলে।"], ["これは ははが つくった りょうりです。", "এটি আমার মায়ের বানানো রান্না।"], ["きょねん うまれた あかちゃんは とても げんきです。", "গত বছর জন্মানো বাবুটি খুব সুস্থ।"], ["わたしが すきな えいがは これです。", "আমার পছন্দের সিনেমা এটা।"]],
    vocabulary: ["つくります — বানাই", "きます — পরি (upper body)", "はきます — পরি (lower body/shoes)", "かぶります — মাথায় পরি", "うまれます — জন্মাই", "めがね — চশমা", "ぼうし — টুপি", "むすこ — ছেলে", "あかちゃん — শিশু"],
    mistakes: ["Relative pronoun হিসেবে だれ/それ ঢোকানো।", "Clause-এর পরে の যোগ করা যেখানে noun সরাসরি আসে।", "Main sentence particle modified noun-এর জায়গায় ভুল বসানো।", "Modified noun-এর জন্য আলাদা connector (の বা だ) যোগ করা; plain clause সরাসরি noun-এর আগে বসে, কোনো connector লাগে না।"],
    practice: ["নিজের বানানো/কেনা/ব্যবহৃত তিনটি object describe করুন।", "Room-এর দুইজন person clothing/action দিয়ে identify করুন।", "যে city/company-তে থাকেন/কাজ করেন relative clause দিয়ে বলুন।", "একজন পরিবারের সদস্যকে clothing/action সহ relative clause দিয়ে identify করুন।"],
    question: "‘আমি গতকাল যে movie দেখেছি’ কোনটি?",
    options: ["わたしは きのう みたの えいが", "わたしが きのう みた えいが", "きのう えいがを みた だれ", "わたしの みました えいが"],
    correctAnswer: "わたしが きのう みた えいが",
  },
  {
    number: 23,
    title: "When এবং automatic result",
    goal: "কোন পরিস্থিতিতে কী হয় এবং একটি condition ঘটলে naturally/automatically কী result হয়—বলা।",
    explanation: "とき-এর আগে verb, adjective বা noun-এর plain form বসে ‘যখন/সময়ে’ বোঝাতে। Subordinate clause-এর tense আর main clause-এর tense সম্পর্ক গুরুত্বপূর্ণ: にほんへ くるとき (আসার সময়, এখনও পৌঁছাইনি) বনাম にほんへ きたとき (এসে পৌঁছানোর পরের সময়)—দুটোর অর্থ ভিন্ন, subordinate action সম্পূর্ণ হয়েছে কি না তার ওপর নির্ভর করে। い-adjective সরাসরি とき-এর আগে বসে (さむいとき), কিন্তু な-adjective-এর পরে な থাকে (げんきなとき), আর noun-এর পরে の বসে (こどものとき)। Vると দিয়ে automatic/natural/mechanical result বলা হয়—একটি condition ঘটলে স্বয়ংক্রিয়ভাবে বা নিয়মমাফিক যা ঘটে তাই বোঝায়: ボタンを おすと、ドアが あきます। এই と সাধারণত personal request, command বা intention-এর জন্য ব্যবহার হয় না—শুধু automatic/repeated cause-effect relationship-এর জন্য।",
    patterns: ["Vる／Vた とき、～", "い-adjective とき／な-adjectiveな とき", "N の とき", "Vる と、automatic result"],
    examples: [["にほんへ くる とき、くうこうで SIMを かいました。", "Japan আসার পথে/আগে airport-এ SIM কিনেছি।"], ["こまった とき、せんせいに ききます。", "সমস্যায় পড়লে teacher-কে জিজ্ঞাসা করি।"], ["この ボタンを おすと、ドアが あきます。", "এই button চাপলে door খোলে।"], ["あめの とき、かさを もっていきます。", "বৃষ্টির সময় ছাতা নিয়ে যাই।"], ["わたしが こどもの とき、ここに すんでいました。", "আমি বাচ্চা থাকতে এখানে থাকতাম।"], ["この みちを まっすぐ いくと、えきに つきます。", "এই রাস্তা সোজা গেলে station পাওয়া যায়।"], ["はるに なると、はなが さきます。", "বসন্ত এলে ফুল ফোটে।"]],
    vocabulary: ["とき — যখন/সময়", "こまります — সমস্যায় পড়ি", "まわします — ঘোরাই", "ひきます — টানি", "あきます／しまります — খোলে/বন্ধ হয়", "みち — রাস্তা", "つきます — পৌঁছাই", "はな — ফুল", "さきます — ফোটে"],
    mistakes: ["Vるとき ও Vたとき-এর relative timing ignore করা।", "Automatic と-এর result-এ invitation/command ব্যবহার করা।", "な-adjective + とき-এ な বাদ দেওয়া।", "とき-কে সবসময় ‘যখন’ word-for-word অনুবাদ করে বসানো; কখনো বাংলায় ‘সময়’ বা ‘হলে’ বেশি স্বাভাবিক শোনায়, structure একই থাকলেও।"],
    practice: ["Busy/free/sick হলে কী করেন—তিনটি とき sentence লিখুন।", "Japan আসার আগে ও পরে action contrast করুন।", "Machine/map/nature-এর তিনটি automatic と instruction বানান।", "こどものとき দিয়ে ছোটবেলার একটি স্মৃতি sentence লিখুন।"],
    question: "‘এই button চাপলে light জ্বলে’ কোনটি?",
    options: ["この ボタンを おすと、でんきが つきます。", "この ボタンを おしたい、でんきです。", "この ボタンを おすとき、つけてくださいと。", "この ボタンで おして、でんきと つきます。"],
    correctAnswer: "この ボタンを おすと、でんきが つきます。",
  },
  {
    number: 24,
    title: "Help ও favour perspective",
    goal: "কে কার জন্য helpful action করেছে—てあげる, てもらう ও てくれる দিয়ে perspectiveসহ বলা।",
    explanation: "てあげます ব্যবহার হয় যখন subject অন্য কারো উপকারের জন্য কিছু করে—দাতার দৃষ্টিকোণ: わたしは こうはいに コードを せつめいして あげました। てもらいます ব্যবহার হয় যখন subject অন্য কারো কাছ থেকে সাহায্য/উপকার পায়—গ্রহীতার দৃষ্টিকোণ, helper-এর পরে に বসে: せんぱいに みて もらいました। てくれます ব্যবহার হয় যখন অন্য কেউ speaker বা speaker-এর in-group-এর জন্য কিছু করে—দিক বক্তার দিকে থাকে: ともだちが むかえに きて くれました। একই ঘটনা তিনভাবে বলা যায়, শুধু কার দৃষ্টিকোণ থেকে বলছেন তার ওপর নির্ভর করে verb বদলে যায়। Social hierarchy সংবেদনশীল বিষয়—superior/senior-এর করা উপকারকে casual てあげる দিয়ে বলা অনুপযুক্ত শোনাতে পারে, কারণ তাতে সূক্ষ্মভাবে ‘আমি অনুগ্রহ করছি’ ভাব থাকে; তার বদলে てくれる বা てもらう ব্যবহার করা বেশি স্বাভাবিক ও বিনয়ী।",
    patterns: ["A は B に Vて あげます。", "A は B に Vて もらいます。", "A が わたしに Vて くれます。", "Person に N を Vて もらう"],
    examples: [["わたしは こうはいに コードを せつめいして あげました。", "Junior-এর জন্য code explain করেছি।"], ["せんぱいに CVを みて もらいました。", "Senior-এর কাছে CV review করিয়েছি/সাহায্য পেয়েছি।"], ["ともだちが えきまで むかえに きて くれました。", "বন্ধু আমার জন্য station-এ নিতে এসেছে।"], ["わたしは ははに プレゼントを かって あげました。", "মায়ের জন্য উপহার কিনে দিয়েছি।"], ["せんせいに にほんごを おしえて もらいました。", "Teacher-এর কাছে Japanese শেখানো পেয়েছি।"], ["どうりょうが しごとを てつだって くれました。", "সহকর্মী আমার কাজে সাহায্য করেছে।"], ["だれかに この にもつを はこんで もらいたいです。", "কারো কাছ থেকে এই মাল বহন করানোর সাহায্য চাই।"]],
    vocabulary: ["なおします — ঠিক করি", "つれていきます — সঙ্গে নিয়ে যাই", "おくります — পৌঁছে দিই/পাঠাই", "しょうかいします — পরিচয় করাই", "せつめいします — ব্যাখ্যা করি", "どうりょう — সহকর্মী", "にもつ — মালপত্র", "はこびます — বহন করি", "だれか — কেউ একজন"],
    mistakes: ["くれます sentence-এ beneficiary speaker side না হওয়া।", "もらいます-এ helper-এর particle ভুল করা।", "নিজের helpful action অহেতুক あげました বলে social nuance না দেখা।", "নিকটজন/সমবয়সীর জন্য করা সাহায্যও সবসময় あげます দিয়ে বলা; কখনো কখনো এটি একটু ‘কৃতিত্ব জাহির করা’র মতো শোনাতে পারে, context বুঝে ব্যবহার করা ভালো।"],
    practice: ["এই সপ্তাহে পাওয়া তিনটি help てもらう দিয়ে লিখুন।", "বন্ধু আপনার জন্য কী করেছে てくれる দিয়ে বলুন।", "আপনি কার জন্য কী করেছেন—appropriate contextসহ লিখুন।", "てくれる ব্যবহার করে পরিবারের কেউ আপনার জন্য কী করেছেন তা বলুন।"],
    question: "‘Senior আমার CV দেখে দিয়েছেন’—receiver perspective কোনটি?",
    options: ["せんぱいに CVを みて もらいました。", "せんぱいを CVに みて あげました。", "せんぱいが CVを みて もらいます。", "わたしに せんぱいを みて くれました。"],
    correctAnswer: "せんぱいに CVを みて もらいました。",
  },
  {
    number: 25,
    title: "Conditional たら, contrast ても ও final integration",
    goal: "Realistic condition, hypothetical situation ও ‘যদিও’ contrast বলা এবং Units 1–25 integrate করা।",
    explanation: "たら তৈরি হয় verb/adjective/noun-এর past plain form-এর সঙ্গে ら জুড়ে দিয়ে: おわった→おわったら, たかかった→たかかったら, げんきだった→げんきだったら। এটি সবচেয়ে flexible conditional—hypothetical ও realistic future condition দুই-ই বোঝাতে পারে; condition সম্পূর্ণ হলে result ঘটে। ても দিয়ে ‘যদিও/করলেও’ বোঝানো হয়—expected result-এর বিপরীত বা independent outcome দেখায়: あめが ふっても、いきます। い-adjective-এর ても-form শেষ い বাদ দিয়ে くても বসে (たかい→たかくても), な-adjective/noun-এ でも বসে (げんきでも, がくせいでも)। Question word-এর সঙ্গে たらいいですか জুড়ে দিলে advice চাওয়া হয়—どうしたら いいですか। এই course-এর চূড়ান্ত লক্ষ্য শুধু form মুখস্থ করা নয়—particle, tense, style ও context—সব একসঙ্গে সচেতনভাবে নিয়ন্ত্রণ করে স্বাভাবিক Japanese বলতে পারা।",
    patterns: ["Vたら、～", "い-adjectiveかったら／な-adjective・Nだったら", "Vても、～", "どうしたら いいですか。"],
    examples: [["しごとが おわったら、れんらくします。", "কাজ শেষ হলে contact করব।"], ["あめが ふっても、イベントへ いきます。", "বৃষ্টি হলেও event-এ যাব।"], ["パスワードを わすれたら、どうしたら いいですか。", "Password ভুলে গেলে কী করা উচিত?"], ["やすかったら、かいます。", "সস্তা হলে কিনব।"], ["じかんが なくても、れんしゅうします。", "সময় না থাকলেও practice করব।"], ["びょうきだったら、やすんでください。", "অসুস্থ হলে বিশ্রাম নিন।"], ["なにを たべたら いいですか。", "কী খেলে ভালো হয়?"]],
    vocabulary: ["もし — যদি (hypothetical emphasis)", "おわります — শেষ হয়", "れんらくします — contact করি", "ちょうし — condition/state", "どうしたら — কী করলে", "びょうき — অসুস্থতা", "れんしゅうします — practice করি", "たいせつ — গুরুত্বপূর্ণ", "やすかったら — সস্তা হলে"],
    mistakes: ["たら-এর আগে plain past form না করা।", "ても-কে simple sequence হিসেবে ব্যবহার করা।", "Condition ও result-এর tense/logical order না দেখা।", "たら-কে সবসময় hypothetical (অবাস্তব) ভাবা; এটি বাস্তবসম্মত ভবিষ্যৎ শর্তেও (যেমন কাজ শেষ হলে) স্বাভাবিকভাবে ব্যবহৃত হয়।"],
    practice: ["Weather, work ও study নিয়ে তিনটি realistic condition লিখুন।", "Difficult হলেও করবেন—এমন তিনটি ても sentence লিখুন।", "Units 1–25 থেকে অন্তত দশ pattern ব্যবহার করে নিজের Japan life নিয়ে 12-line original composition লিখুন।", "どうしたらいいですか ব্যবহার করে একটি advice-seeking question লিখুন।"],
    question: "‘সময় থাকলে পড়ব’ কোনটি?",
    options: ["じかんが あるたら、べんきょうします。", "じかんが あったら、べんきょうします。", "じかんを あっても、べんきょうでした。", "じかんが ありますら、べんきょうします。"],
    correctAnswer: "じかんが あったら、べんきょうします。",
  },
];

const unitSections: CourseSection[] = minnaN5Units.map((unit) => {
  const unitNumber = String(unit.number).padStart(2, "0");
  return {
    title: `Unit ${unitNumber} · ${unit.title}`,
    lessons: [
      {
        title: `Unit ${unitNumber} guide · ${unit.title}`,
        duration: "18–25 min",
        type: "reading",
        overview: guideOverview(unit),
        studyNotes: guideNotes(unit),
        practiceTest: {
          question: unit.question,
          options: unit.options,
          correctAnswer: unit.correctAnswer,
          explanation: deepDiveFor(unit.number).answerExplanation,
        },
      },
      {
        title: `Unit ${unitNumber} original practice lab`,
        duration: "15–20 min",
        type: "quiz",
        overview: practiceOverview(unit),
        studyNotes: practiceNotes(unit),
        practiceTest: {
          question: unit.question,
          options: unit.options,
          correctAnswer: unit.correctAnswer,
          explanation: deepDiveFor(unit.number).answerExplanation,
        },
      },
    ],
  };
});

export const minnaN5CompanionSections: CourseSection[] = [
  minnaFoundationSection,
  ...unitSections,
];
