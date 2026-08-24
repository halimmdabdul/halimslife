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

## দুটি বাক্য পুরো ভেঙে বুঝুন

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
    explanation: "Japanese noun sentence-এর basic frame হলো topic + information + です। は topic চিহ্নিত করে এবং particle হিসেবে ‘wa’ উচ্চারণ হয়। か sentence-কে question করে; も আগের topic-এর মতো ‘ও/also’ বোঝায়। Context clear হলে わたし বারবার বলার প্রয়োজন নেই।",
    patterns: ["A は B です。", "A は B ではありません／じゃないです。", "A は B ですか。", "A も B です。"],
    examples: [["わたしは ソフトウェアエンジニアです。", "আমি software engineer।"], ["ラナさんは せんせいではありません。", "Rana শিক্ষক নন।"], ["アリさんも バングラデシュじんです。", "Ali-ও Bangladeshi।"]],
    vocabulary: ["しごと — কাজ/পেশা", "かいしゃいん — company employee", "がくせい — student", "せんせい — teacher (অন্যকে সম্বোধন/বর্ণনায়)", "～じん — nationality suffix"],
    mistakes: ["は-কে ‘ha’ বলা; particle হলে ‘wa’।", "নিজের নামের পরে さん যোগ করা।", "Question-এ word order English-এর মতো উল্টে দেওয়া।"],
    practice: ["নিজের নাম, দেশ ও পেশা নিয়ে তিনটি sentence লিখুন।", "একজন বন্ধুর পরিচয় নিয়ে একটি question ও answer বানান।", "も ব্যবহার করে দুইজনের common পরিচয় বলুন।"],
    question: "‘আমিও engineer’—সঠিক sentence কোনটি?",
    options: ["わたしはも エンジニアです。", "わたしも エンジニアです。", "わたしを エンジニアです。", "わたしのも エンジニアです。"],
    correctAnswer: "わたしも エンジニアです。",
  },
  {
    number: 2,
    title: "Objects ও demonstratives",
    goal: "কাছের/দূরের জিনিস দেখানো, জিনিসের নাম জিজ্ঞাসা করা এবং ownership বোঝানো।",
    explanation: "これ/それ/あれ নিজে noun হিসেবে দাঁড়ায়। この/その/あの-এর পরে অবশ্যই noun লাগে। どれ ও どの question forms। の ownership, affiliation বা type-এর relationship দেখায়; context থেকে noun বোঝা গেলে の শেষে একা থাকতে পারে।",
    patterns: ["これは N です。", "この N は ～です。", "これは だれの N ですか。", "これは わたしのです。"],
    examples: [["これは こうじょうの カメラです。", "এটি factory-এর camera।"], ["その パソコンは だれのですか。", "আপনার কাছের ঐ computerটি কার?"], ["あれは にほんせいの ロボットです。", "দূরের ওটি Japan-এ তৈরি robot।"]],
    vocabulary: ["これ／この — speaker-এর কাছে", "それ／その — listener-এর কাছে", "あれ／あの — দুজনের থেকে দূরে", "どれ／どの — কোনটি/কোন", "だれの — কার"],
    mistakes: ["この-এর পরে noun না দেওয়া।", "これ ほん বলা; これは ほん বা この ほん হবে।", "の-কে শুধু possession ভাবা; এটি category/affiliation-ও দেখায়।"],
    practice: ["Desk-এর তিনটি object これ/それ/あれ দিয়ে identify করুন।", "কার জিনিস—এমন দুইটি question-answer লিখুন।", "この/その/あの দিয়ে noun modify করে তিনটি phrase বানান।"],
    question: "‘এই বই’ কোনটি?",
    options: ["これ ほん", "この ほん", "ここ ほん", "どれ ほん"],
    correctAnswer: "この ほん",
  },
  {
    number: 3,
    title: "Places, directions ও price",
    goal: "কোনো স্থান কোথায়, কোন দিকে বা কোন floor-এ—এবং কোনো জিনিসের দাম কত জিজ্ঞাসা করা।",
    explanation: "ここ/そこ/あそこ place নির্দেশ করে; こちら/そちら/あちら polite direction এবং person/company reference হিসেবেও আসে। どこ/どちら question forms। Price জানতে いくら ব্যবহার হয়। Number-এর সঙ্গে 円 সরাসরি আসে।",
    patterns: ["N は ここ／そこ／あそこです。", "N は どこですか。", "N は こちらです。", "これは いくらですか。"],
    examples: [["うけつけは いっかいです。", "Reception প্রথম floor-এ।"], ["エレベーターは どちらですか。", "Elevator কোন দিকে?"], ["この ケーブルは せんごひゃくえんです。", "এই cable ১,৫০০ yen।"]],
    vocabulary: ["うけつけ — reception", "かいぎしつ — meeting room", "かい／がい — floor counter", "えん — yen", "いくら — কত দাম"],
    mistakes: ["Place question-এ どれ ব্যবহার করা।", "よんかい/ななかい সব ক্ষেত্রে mechanically বলা; floor readings review প্রয়োজন।", "こちら-এর polite nuance না বুঝে শুধু ‘এখানে’ অনুবাদ করা।"],
    practice: ["নিজের workplace-এর চারটি location Japanese-এ বলুন।", "একটি map দেখে reception ও restroom-এর direction জিজ্ঞাসা করুন।", "তিনটি product-এর কাল্পনিক price question-answer লিখুন।"],
    question: "‘Restroom কোথায়?’ কোনটি?",
    options: ["トイレは どこですか。", "トイレは どれですか。", "トイレを いくらですか。", "トイレが だれですか。"],
    correctAnswer: "トイレは どこですか。",
  },
  {
    number: 4,
    title: "Clock time ও polite verb tense",
    goal: "Daily schedule-এর সময় বলা এবং polite verb-এর present, negative, past ও past-negative form ব্যবহার করা।",
    explanation: "ます-form non-past—habit ও future দুইটিই প্রকাশ করতে পারে। ました past, ません negative, ませんでした past-negative। Exact clock time-এর পরে に আসে; きょう/あした/まいにち-এর মতো relative time-এ সাধারণত に লাগে না। から/まで শুরু ও শেষ point দেখায়।",
    patterns: ["Time に Vます。", "Vません／Vました／Vませんでした。", "Time から Time までです。", "なんじに Vますか。"],
    examples: [["まいあさ ろくじはんに おきます。", "প্রতিদিন সকাল ৬:৩০-এ উঠি।"], ["きのう はたらきませんでした。", "গতকাল কাজ করিনি।"], ["かいぎは くじから じゅうじまでです。", "Meeting ৯টা থেকে ১০টা।"]],
    vocabulary: ["おきます — ঘুম থেকে উঠি", "ねます — শুতে যাই/ঘুমাতে যাই", "はたらきます — কাজ করি", "やすみます — বিশ্রাম/ছুটি নিই", "はん — অর্ধ/সাড়ে"],
    mistakes: ["Past time-এর সঙ্গে ます ব্যবহার করা।", "まいにちに বলা।", "৪টা よんじ বলা; correct common reading よじ।"],
    practice: ["নিজের weekday schedule পাঁচটি sentence-এ লিখুন।", "গতকাল কী করেননি—দুইটি sentence লিখুন।", "Work/study start-end time から/まで দিয়ে বলুন।"],
    question: "‘গতকাল ১১টায় ঘুমিয়েছি’ কোনটি?",
    options: ["きのう じゅういちじに ねます。", "きのう じゅういちじに ねました。", "きのう じゅういちじを ねました。", "きのうに ねません。"],
    correctAnswer: "きのう じゅういちじに ねました。",
  },
  {
    number: 5,
    title: "Movement, destination ও transport",
    goal: "কোথায়, কখন, কী দিয়ে এবং কার সঙ্গে যাওয়া/আসা/ফেরা—এক sentence-এ বলা।",
    explanation: "Destination-এর সঙ্গে へ বা に, transport-এর সঙ্গে で, companion-এর সঙ্গে と আসে। ひとりで মানে একা—এখানে と লাগে না। Movement verbs-এর tense travel time-এর সঙ্গে মিলবে। どこへも + negative ‘কোথাও না’ বোঝায়।",
    patterns: ["Place へ／に いきます。", "Vehicle で いきます。", "Person と いきます。", "どこへも いきません。"],
    examples: [["でんしゃで とうきょうへ いきます。", "Train-এ Tokyo যাই।"], ["しゅうまつ ともだちと きょうとに いきました。", "Weekend-এ বন্ধুর সঙ্গে Kyoto গিয়েছিলাম।"], ["きょうは どこへも いきません。", "আজ কোথাও যাব না।"]],
    vocabulary: ["でんしゃ — train", "ちかてつ — subway", "じてんしゃ — bicycle", "あるいて — হেঁটে", "ひとりで — একা"],
    mistakes: ["Transport-এর পরে に দেওয়া।", "あるいてで বলা; あるいて নিজেই manner expression।", "Companion-এর সঙ্গে で ব্যবহার করা।"],
    practice: ["Home থেকে workplace commute বিস্তারিত বলুন।", "শেষ trip কোথায়, কার সঙ্গে ও কীভাবে—তিনটি sentence লিখুন।", "আগামী ছুটিতে কোথাও যাবেন না—negative sentence বানান।"],
    question: "‘Bus-এ school যাই’ কোনটি?",
    options: ["バスに がっこうで いきます。", "バスで がっこうへ いきます。", "バスと がっこうを いきます。", "バスへ がっこうに いきます。"],
    correctAnswer: "バスで がっこうへ いきます。",
  },
  {
    number: 6,
    title: "Action, object ও invitation",
    goal: "কী action কোথায় করছেন বলা এবং কাউকে polite invitation দেওয়া।",
    explanation: "Direct object-এর পরে を, action location-এর পরে で। します অনেক activity noun-এর সঙ্গে verb তৈরি করে। ませんか polite invitation; ましょう speaker-এর ‘চলুন’ proposal। Negative question আকার invitation-কে soft করে।",
    patterns: ["N を Vます。", "Place で Vます。", "いっしょに Vませんか。", "Vましょう。"],
    examples: [["うちで Pythonを べんきょうします。", "বাসায় Python পড়ি।"], ["カフェで コーヒーを のみませんか。", "Cafe-তে coffee খাবেন?"], ["はい、のみましょう。", "হ্যাঁ, চলুন খাই।"]],
    vocabulary: ["たべます — খাই", "のみます — পান করি", "みます — দেখি", "べんきょうします — পড়াশোনা করি", "いっしょに — একসঙ্গে"],
    mistakes: ["Action location-এর পরে に ব্যবহার করা।", "Object-এর পরে が বসানো যেখানে を প্রয়োজন।", "Invitation ませんか-কে literal negative question হিসেবে বোঝা।"],
    practice: ["আজ কী কোথায় করবেন—চারটি action লিখুন।", "বন্ধুকে movie/coffee/study invitation দিন।", "Invitation accept ও soft decline—দুই response practice করুন।"],
    question: "‘Library-তে Japanese পড়ি’ কোনটি?",
    options: ["としょかんに にほんごを べんきょうします。", "としょかんで にほんごを べんきょうします。", "としょかんを にほんごで べんきょうします。", "としょかんへ にほんごが べんきょうします。"],
    correctAnswer: "としょかんで にほんごを べんきょうします。",
  },
  {
    number: 7,
    title: "Tools, languages ও giving/receiving",
    goal: "কোন tool/language দিয়ে action হচ্ছে এবং কে কাকে কী দিল/পেল—স্পষ্টভাবে বলা।",
    explanation: "で tool, means বা language দেখায়। あげます giver-এর দৃষ্টিতে দেওয়া; もらいます receiver-এর দৃষ্টিতে পাওয়া। Person source/recipient-এর সঙ্গে に বা から আসে। Japanese gift language social direction-এর ওপর নির্ভর করে—subject ঠিক না করলে meaning উল্টে যায়।",
    patterns: ["Tool／Language で Vます。", "A は B に N を あげます。", "A は B に／から N を もらいます。", "～は ～ごで なんですか。"],
    examples: [["スマホで しゃしんを とります。", "Smartphone দিয়ে ছবি তুলি।"], ["わたしは こうはいに ほんを あげました。", "আমি junior-কে বই দিয়েছি।"], ["せんせいから アドバイスを もらいました。", "Teacher-এর কাছ থেকে advice পেয়েছি।"]],
    vocabulary: ["はし — chopsticks", "スプーン — spoon", "プレゼント — gift", "かします／かります — ধার দিই/নিই", "おしえます／ならいます — শেখাই/শিখি"],
    mistakes: ["あげます ও もらいます-এ subject একই রেখে meaning বদলানো।", "Tool-এর সঙ্গে を ব্যবহার করা।", "Person source-এ で বসানো।"],
    practice: ["তিনটি tool দিয়ে কী করেন লিখুন।", "গত birthday-তে কী দিয়েছেন ও পেয়েছেন—দুই perspective-এ বলুন।", "একটি Japanese word Bangla/English-এ কী—question বানান।"],
    question: "‘Teacher-এর কাছ থেকে dictionary পেয়েছি’ কোনটি?",
    options: ["せんせいに じしょを あげました。", "せんせいから じしょを もらいました。", "せんせいで じしょを もらいます。", "せんせいを じしょに あげました。"],
    correctAnswer: "せんせいから じしょを もらいました。",
  },
  {
    number: 8,
    title: "Adjectives দিয়ে description",
    goal: "মানুষ, জায়গা ও জিনিসকে い-adjective ও な-adjective দিয়ে describe করা।",
    explanation: "い-adjective noun-এর আগে সরাসরি আসে; な-adjective noun-এর আগে な নেয়। Predicate polite form-এ উভয়ের পরে です আসতে পারে। Negative formation আলাদা: い → くない, な-adjective → じゃない/ではありません। きれい is な-adjective despite ending in い।",
    patterns: ["い-adjective + N", "な-adjective + な + N", "N は い-adjectiveです。", "N は な-adjectiveです。"],
    examples: [["これは あたらしい センサーです。", "এটি নতুন sensor।"], ["しずかな へやで はたらきます。", "শান্ত room-এ কাজ করি।"], ["この まちは にぎやかじゃないです。", "এই শহরটি lively নয়।"]],
    vocabulary: ["おおきい／ちいさい — বড়/ছোট", "あたらしい／ふるい — নতুন/পুরোনো", "たかい／やすい — দামি/সস্তা", "しずか — শান্ত", "べんり — সুবিধাজনক"],
    mistakes: ["きれいな-কে きれいい বলা।", "い-adjective negative-এ じゃない ব্যবহার করা।", "な-adjective noun-এর আগে な বাদ দেওয়া।"],
    practice: ["নিজের phone/computer তিনটি adjective দিয়ে describe করুন।", "বর্তমান শহর ও hometown compare না করে আলাদাভাবে describe করুন।", "দুইটি positive ও দুইটি negative adjective sentence লিখুন।"],
    question: "‘সুবিধাজনক app’ কোনটি?",
    options: ["べんり アプリ", "べんりな アプリ", "べんりい アプリ", "べんりの アプリ"],
    correctAnswer: "べんりな アプリ",
  },
  {
    number: 9,
    title: "Likes, skills, understanding ও reasons",
    goal: "পছন্দ, অপছন্দ, দক্ষতা, বোঝাপড়া ও possession প্রকাশ করা এবং から দিয়ে কারণ বলা।",
    explanation: "すき/きらい/じょうず/へた noun target-এর সঙ্গে সাধারণত が নেয় এবং な-adjective-এর মতো behave করে। わかります ও あります-ও target-এ が নেয়। から sentence-এর শেষে reason marker। Degree adverbs adjective/verb-এর strength দেখায়।",
    patterns: ["N が すき／じょうずです。", "N が わかります。", "N が あります。", "Reason から、result。"],
    examples: [["ロボットが とても すきです。", "Robot খুব পছন্দ।"], ["にほんごが すこし わかります。", "Japanese একটু বুঝি।"], ["じかんが ありませんから、きょうは いきません。", "সময় নেই বলে আজ যাব না।"]],
    vocabulary: ["よく — ভালোভাবে/প্রায়ই", "だいたい — মোটামুটি", "すこし — একটু", "あまり～ません — খুব একটা নয়", "ぜんぜん～ません — একদম নয়"],
    mistakes: ["すき-এর target-এ を দেওয়া।", "から clause ও result-এর logic উল্টে ফেলা।", "あまり-এর সঙ্গে positive form ব্যবহার করা।"],
    practice: ["পাঁচটি জিনিসে like/dislike/skill statement দিন।", "কোন language কতটুকু বোঝেন degree adverbসহ বলুন।", "আজকের decision-এর দুইটি reason から দিয়ে লিখুন।"],
    question: "‘Japanese খুব একটা বুঝি না’ কোনটি?",
    options: ["にほんごを あまり わかります。", "にほんごが あまり わかりません。", "にほんごに ぜんぜん わかります。", "にほんごが よく わかりませんか。"],
    correctAnswer: "にほんごが あまり わかりません。",
  },
  {
    number: 10,
    title: "Existence ও location map",
    goal: "মানুষ/প্রাণী ও জড়বস্তুর অস্তিত্ব এবং precise location বলা।",
    explanation: "います living beings-এর জন্য, あります non-living things/events-এর জন্য। নতুন entity introduce করতে place に entity が あります/います। Known topic locate করতে entity は place に あります/います। Position phrase সাধারণত Aの うえ/した/なか-এর মতো।",
    patterns: ["Place に N が あります／います。", "N は Place に あります／います。", "A の Position", "N1 と N2 の あいだ"],
    examples: [["つくえの うえに カメラが あります。", "Desk-এর ওপর camera আছে।"], ["エンジニアは じむしょに います。", "Engineer office-এ আছেন।"], ["ぎんこうは えきと スーパーの あいだに あります。", "Bank station ও supermarket-এর মাঝে।"]],
    vocabulary: ["うえ／した — ওপর/নিচে", "まえ／うしろ — সামনে/পেছনে", "なか／そと — ভেতরে/বাইরে", "となり — পাশের", "あいだ — মাঝখানে"],
    mistakes: ["মানুষের জন্য あります বলা।", "Place-এ action verb না থাকলেও で ব্যবহার করা।", "Known entity locate করতে が/は nuance ignore করা।"],
    practice: ["নিজের desk map পাঁচটি sentence-এ describe করুন।", "Office-এ তিনজন person কোথায়—います দিয়ে বলুন।", "একটি building map-এ two-reference location লিখুন।"],
    question: "‘Room-এ cat আছে’ কোনটি?",
    options: ["へやで ねこが あります。", "へやに ねこが います。", "へやを ねこに います。", "へやに ねこを あります。"],
    correctAnswer: "へやに ねこが います。",
  },
  {
    number: 11,
    title: "Counters, quantity ও duration",
    goal: "মানুষ/বস্তু গোনা, frequency এবং action কতক্ষণ চলে তা বলা।",
    explanation: "Japanese counters counted item-এর shape/type অনুযায়ী বদলায়। General objects-এর জন্য ひとつ～とお, people-এর জন্য ～にん, flat/varied items-এর নিজস্ব counters আছে। Quantity সাধারণত object particle-এর পরে verb-এর আগে আসে। Duration-এর পরে সাধারণত に লাগে না; frequency-তে period に count আসে।",
    patterns: ["N を Quantity Vます。", "Duration Vます。", "Period に Frequency Vます。", "どのくらい／いくつ／なんにん"],
    examples: [["りんごを みっつ かいました。", "তিনটি apple কিনেছি।"], ["まいにち にじかん べんきょうします。", "প্রতিদিন দুই ঘণ্টা পড়ি।"], ["いっしゅうかんに さんかい うんどうします。", "সপ্তাহে তিনবার exercise করি।"]],
    vocabulary: ["ひとつ～とお — general 1–10", "ひとり／ふたり／～にん — people", "～じかん — hours duration", "～しゅうかん — weeks", "～かい — times/frequency"],
    mistakes: ["Duration-এর পরে に দেওয়া।", "Quantity-কে noun-এর আগে English order-এ রাখা।", "ひとり/ふたり irregular readings ভুল করা।"],
    practice: ["Shopping list পাঁচটি quantityসহ লিখুন।", "Daily study/work/sleep duration বলুন।", "সপ্তাহ/মাসে কতবার তিনটি activity করেন লিখুন।"],
    question: "‘প্রতিদিন দুই ঘণ্টা পড়ি’ কোনটি?",
    options: ["まいにち にじかんに べんきょうします。", "まいにち にじかん べんきょうします。", "まいにちを にじかん べんきょうします。", "にじかんが まいにちに べんきょうします。"],
    correctAnswer: "まいにち にじかん べんきょうします。",
  },
  {
    number: 12,
    title: "Past descriptions ও comparison",
    goal: "Noun/adjective-এর past forms ব্যবহার এবং দুই বা একাধিক option compare করা।",
    explanation: "Noun/な-adjective past polite হলো でした; negative past ではありませんでした/じゃなかったです। い-adjective past-এ い → かった, negative past くなかった। Comparison-এ A は B より adjective; question-এ AとBとどちらが; group superlative-এ のなかで...がいちばん।",
    patterns: ["N／な-adjective でした。", "い-adjectiveかったです。", "A は B より adjectiveです。", "Group のなかで A が いちばん adjectiveです。"],
    examples: [["きのうは いそがしかったです。", "গতকাল ব্যস্ত ছিল।"], ["この PCは あの PCより はやいです。", "এই PC ঐ PC-এর চেয়ে দ্রুত।"], ["くだものの なかで マンゴーが いちばん すきです。", "ফলের মধ্যে mango সবচেয়ে পছন্দ।"]],
    vocabulary: ["より — তুলনায়", "どちら — কোনটি (দুইটির মধ্যে)", "いちばん — সবচেয়ে", "なかで — group-এর মধ্যে", "おなじ — একই"],
    mistakes: ["い-adjective past-এ でした সরাসরি যোগ করা।", "Comparison direction উল্টে ফেলা।", "তিন বা বেশি option-এ どちら ব্যবহার করা।"],
    practice: ["আজ ও গতকালের weather compare করুন।", "দুইটি phone/transport option তিনটি adjective দিয়ে compare করুন।", "Food, city, language category-তে favourite superlative বলুন।"],
    question: "‘Tokyo Osaka-এর চেয়ে বড়’ কোনটি?",
    options: ["とうきょうは おおさかより おおきいです。", "とうきょうより おおさかは おおきいです。", "とうきょうは おおさかと おおきかったです。", "とうきょうのなかで おおさかです。"],
    correctAnswer: "とうきょうは おおさかより おおきいです。",
  },
  {
    number: 13,
    title: "Want, want-to-do ও purpose",
    goal: "কোন জিনিস চান, কী করতে চান এবং কোনো জায়গায় কী উদ্দেশ্যে যান—বলা।",
    explanation: "ほしいです desired noun-এর সঙ্গে が নেয়। Verb stem + たいです নিজের/প্রশ্নে listener-এর desire প্রকাশ করে এবং い-adjective-এর মতো conjugate হয়। Movement purpose-এ verb stem বা action noun + に + いきます/きます। Third-person desire-এ beginner stage-এ direct たいです avoid করে context-sensitive forms পরে শিখুন।",
    patterns: ["N が ほしいです。", "V-stem たいです。", "Place へ V-stem に いきます。", "なにか／どこか"],
    examples: [["あたらしい キーボードが ほしいです。", "নতুন keyboard চাই।"], ["にほんで AIを けんきゅうしたいです。", "Japan-এ AI research করতে চাই।"], ["としょかんへ ほんを かりに いきます。", "Library-তে বই ধার নিতে যাই।"]],
    vocabulary: ["ほしい — চাই (জিনিস)", "～たい — করতে চাই", "あそびます — leisure করি", "むかえます — নিতে/receive করতে যাই", "なにか — কিছু"],
    mistakes: ["ほしい-এর target-এ を দেওয়া।", "Full ます form-এর সঙ্গে たい যোগ করা।", "Purpose に-এর আগে dictionary form রাখা।"],
    practice: ["এখন প্রয়োজন এমন তিনটি জিনিস লিখুন।", "Japan-এ করতে চান এমন পাঁচটি action বলুন।", "তিনটি destination + purpose sentence বানান।"],
    question: "‘Library-তে পড়তে যাই’ কোনটি?",
    options: ["としょかんへ べんきょうしますに いきます。", "としょかんへ べんきょうしに いきます。", "としょかんで べんきょうたいです。", "としょかんを べんきょうに いきます。"],
    correctAnswer: "としょかんへ べんきょうしに いきます。",
  },
  {
    number: 14,
    title: "て-form, requests ও current action",
    goal: "て-form বানানো, polite request করা এবং এখন কী চলছে বলা।",
    explanation: "て-form বহু grammar pattern-এর connector। Group 1 ending অনুযায়ী って/んで/いて/いで/して; Group 2-তে る বাদ + て; します→して, きます→きて। てください request; ています চলমান action বা context অনুযায়ী ongoing state। いきます exception: いって।",
    patterns: ["Vて ください。", "Vて います。", "Vます → Vて", "なにを して いますか。"],
    examples: [["この ボタンを おして ください。", "এই button চাপুন।"], ["いま プログラムを テストして います。", "এখন program test করছি।"], ["もういちど ゆっくり はなして ください。", "আরেকবার ধীরে বলুন।"]],
    vocabulary: ["おします — চাপি", "まちます — অপেক্ষা করি", "よびます — ডাকি", "つかいます — ব্যবহার করি", "てつだいます — সাহায্য করি"],
    mistakes: ["よみます→よみて করা; correct よんで।", "いきます→いいて করা; correct いって।", "Strong command context-এ সবসময় てください যথেষ্ট polite ধরে নেওয়া।"],
    practice: ["দশটি common verb-এর て-form লিখুন।", "Workplace/classroom-এর পাঁচটি polite instruction বানান।", "এখন আপনি ও আশেপাশের মানুষ কী করছেন describe করুন।"],
    question: "よみます-এর て-form কোনটি?",
    options: ["よみて", "よんで", "よって", "よいて"],
    correctAnswer: "よんで",
  },
  {
    number: 15,
    title: "Permission, prohibition ও resulting state",
    goal: "অনুমতি চাওয়া/দেওয়া, নিষেধ করা এবং ています দিয়ে চলমান state বা habit বোঝা।",
    explanation: "Vてもいいです permission; question করলে অনুমতি চাওয়া। Vてはいけません prohibition। ています শুধু ‘এখন করছি’ নয়—বাস করি, বিবাহিত, জানি, চাকরি করি—এমন continuing state/habit-ও বোঝাতে পারে। Context দেখে meaning ধরুন।",
    patterns: ["Vても いいです。", "Vても いいですか。", "Vては いけません。", "N に すんで／つとめて います。"],
    examples: [["ここで パソコンを つかっても いいですか。", "এখানে computer ব্যবহার করতে পারি?"], ["この へやで たばこを すっては いけません。", "এই room-এ smoking নিষেধ।"], ["よこはまに すんで います。", "Yokohama-তে থাকি।"]],
    vocabulary: ["すみます — বসবাস করি", "つとめます — চাকরি করি", "しります — জানতে পারি", "けっこんします — বিয়ে করি", "すいます — ধূমপান করি"],
    mistakes: ["しっています-এর negative しっていません বলা; common correct しりません।", "Permission ও prohibition forms গুলিয়ে ফেলা।", "সব ています-কে present continuous অনুবাদ করা।"],
    practice: ["Office/park/train-এর তিনটি permission question লিখুন।", "তিনটি public rule prohibition form-এ লিখুন।", "নিজের residence, employment ও known information ています দিয়ে বলুন।"],
    question: "‘এখানে ছবি তুলতে পারি?’ কোনটি?",
    options: ["ここで しゃしんを とっても いいですか。", "ここで しゃしんを とっては いけませんか。", "ここに しゃしんを とりますか。", "ここを しゃしんで いいですか。"],
    correctAnswer: "ここで しゃしんを とっても いいですか。",
  },
  {
    number: 16,
    title: "Action sequence ও connected descriptions",
    goal: "একাধিক action ক্রমানুসারে বলা এবং adjective/noun description connect করা।",
    explanation: "Verb て-form action sequence connect করে; final verb tense পুরো sequence-এর time anchor। い-adjective connector くて; な-adjective/noun connector で। Vてから স্পষ্টভাবে ‘করার পরে’ দেখায়। Sequence শুধু chronological হলে て-form; strong after-relation হলে てから useful।",
    patterns: ["Vて、Vて、Vます。", "Vてから、Vます。", "い-adjectiveくて、～", "な-adjective／N で、～"],
    examples: [["あさ シャワーを あびて、コーヒーを のんで、しごとを はじめます。", "সকালে shower নিয়ে coffee খেয়ে কাজ শুরু করি।"], ["テストしてから、システムを リリースします。", "Test করার পরে system release করি।"], ["この カメラは ちいさくて、べんりです。", "Cameraটি ছোট এবং সুবিধাজনক।"]],
    vocabulary: ["あびます — shower নিই", "のります／おります — উঠি/নামি", "いれます — ঢোকাই", "だします — বের করি/submit করি", "はじめます — শুরু করি"],
    mistakes: ["Sequence-এর সব verb past করা; final verb tense যথেষ্ট।", "い-adjective-এ で connector ব্যবহার করা।", "な-adjective-এ くて যোগ করা।"],
    practice: ["Morning routine পাঁচ action-এর chain লিখুন।", "Deployment workflow Vてから দিয়ে তিন ধাপে বলুন।", "একটি device ও একটি city দুই adjective connect করে describe করুন।"],
    question: "‘এই laptop হালকা এবং দ্রুত’ কোনটি?",
    options: ["この PCは かるいで、はやいです。", "この PCは かるくて、はやいです。", "この PCは かるくで、はやいです。", "この PCは かるいて、はやいです。"],
    correctAnswer: "この PCは かるくて、はやいです。",
  },
  {
    number: 17,
    title: "ない-form, obligation ও necessity",
    goal: "Verb negative plain form বানানো, ‘করবেন না’, ‘করতেই হবে’ এবং ‘না করলেও চলে’ বলা।",
    explanation: "Group 1 final u-sound → a-row + ない; う→わない। Group 2 る বাদ + ない। します→しない, きます→こない। ないでください negative request। なければなりません obligation; なくてもいいです no necessity। Long forms chunk হিসেবে আগে শিখুন, পরে internal structure analyze করুন।",
    patterns: ["Vないで ください。", "Vなければ なりません。", "Vなくても いいです。", "Vます → Vない"],
    examples: [["この ファイルを けさないで ください。", "এই file delete করবেন না।"], ["あしたまでに レポートを ださなければ なりません。", "আগামীকালের মধ্যে report জমা দিতেই হবে।"], ["どようびは はたらかなくても いいです。", "Saturday কাজ না করলেও চলে।"]],
    vocabulary: ["なくします — হারাই", "わすれます — ভুলে যাই", "だします — জমা দিই", "はらいます — pay করি", "もっていきます — সঙ্গে নিয়ে যাই"],
    mistakes: ["かいます→かわない-এর বদলে かあない করা।", "Obligation form-কে simple future বলা।", "なくてもいい-কে prohibition হিসেবে বোঝা।"],
    practice: ["দশটি verb ない-form-এ বদলান।", "Computer lab-এর পাঁচটি negative instruction লিখুন।", "এই সপ্তাহে তিনটি obligation ও দুইটি optional task বলুন।"],
    question: "‘আজ আসতে হবে না’ কোনটি?",
    options: ["きょう こないで ください。", "きょう こなくても いいです。", "きょう こなければ なりません。", "きょう きても いけません。"],
    correctAnswer: "きょう こなくても いいです。",
  },
  {
    number: 18,
    title: "Dictionary form, ability ও before",
    goal: "Dictionary form চিনে ability, hobby এবং কোনো action-এর আগে কী হয় বলা।",
    explanation: "Dictionary form verb-এর plain non-past base এবং dictionary lookup form। Ability pattern V dictionary + ことができます। Hobby-তে V dictionary + ことです। ‘আগে’ বলতে V dictionary + まえに; noun-এর ক্ষেত্রে Nのまえに। Ability context skill বা situational possibility—দুটিই হতে পারে।",
    patterns: ["V-dictionary ことが できます。", "しゅみは V-dictionary ことです。", "V-dictionary まえに、～", "N の まえに、～"],
    examples: [["Pythonで データを ぶんせきする ことが できます。", "Python দিয়ে data analysis করতে পারি।"], ["しゅみは しゃしんを とる ことです。", "Hobby হলো ছবি তোলা।"], ["ねる まえに、ほんを よみます。", "ঘুমানোর আগে বই পড়ি।"]],
    vocabulary: ["できます — পারি/সম্ভব", "しゅみ — hobby", "うんてんします — drive করি", "あつめます — সংগ্রহ করি", "よやくします — reserve করি"],
    mistakes: ["ます-form-এর সঙ্গে ことができます যোগ করা।", "Noun before-এ の বাদ দেওয়া।", "Ability-কে সবসময় talent হিসেবে অনুবাদ করা।"],
    practice: ["আপনার পাঁচটি skill ability form-এ লিখুন।", "দুইটি hobby ことです দিয়ে explain করুন।", "Work/sleep/travel-এর আগে কী করেন—তিনটি sentence লিখুন।"],
    question: "‘Japanese পড়তে পারি’ কোনটি?",
    options: ["にほんごを よみますことが できます。", "にほんごを よむ ことが できます。", "にほんごが よんで できます。", "にほんごを よみたいことです。"],
    correctAnswer: "にほんごを よむ ことが できます。",
  },
  {
    number: 19,
    title: "た-form, experience ও representative actions",
    goal: "Past plain form বানানো, জীবনের experience বলা এবং representative action list করা।",
    explanation: "た-form-এর sound change て-form-এর parallel: て→た, で→だ। Vたことがあります past experience—exact event time নয়, জীবনে কখনও হয়েছে কি না। Vたり Vたりします selected examples; exhaustive sequence নয়। い-adjective + くなります এবং な-adjective/noun + になります change of state।",
    patterns: ["Vた ことが あります。", "Vたり、Vたり します。", "い-adjectiveく なります。", "な-adjective／N に なります。"],
    examples: [["ふじさんを みた ことが あります。", "Mt. Fuji দেখার experience আছে।"], ["やすみのひは りょうりしたり、ゲームを したりします。", "ছুটির দিনে রান্না/গেম ইত্যাদি করি।"], ["にほんごが すこし じょうずに なりました。", "Japanese একটু ভালো হয়েছে।"]],
    vocabulary: ["のぼります — উঠি/আরোহন করি", "とまります — অবস্থান করি", "けいけん — experience", "なります — হয়ে যায়", "いちども — একবারও"],
    mistakes: ["Experience sentence-এ exact yesterday time যোগ করা।", "たり list-এর শেষে します বাদ দেওয়া।", "な-adjective change-এ くなる ব্যবহার করা।"],
    practice: ["Japan/technology/food নিয়ে পাঁচটি experience লিখুন।", "Weekend-এর representative activities たり দিয়ে বলুন।", "গত বছরে আপনার skill/life কীভাবে বদলেছে তিনটি sentence লিখুন।"],
    question: "‘Sushi খাওয়ার experience আছে’ কোনটি?",
    options: ["すしを たべる ことが ありました。", "すしを たべた ことが あります。", "すしを たべて ことです。", "すしを たべたり あります。"],
    correctAnswer: "すしを たべた ことが あります。",
  },
  {
    number: 20,
    title: "Plain style ও casual conversation",
    goal: "Polite forms-এর plain equivalents চিনে close relationship-এর natural short conversation বোঝা।",
    explanation: "Plain style শুধু verb নয়—noun/adjective endings-ও বদলায়। Verb non-past dictionary/ない, past た/なかった। い-adjective plain-এ です বাদ; な-adjective/noun non-past affirmative-এ だ। Casual question-এ か বাদ পড়ে rising intonation হতে পারে। Plain মানে rude নয়; relationship ও situation decisive।",
    patterns: ["Vる／Vない／Vた／Vなかった", "い-adjective（です বাদ）", "な-adjective／N だ", "～の？／～？ casual question"],
    examples: [["あした くる？", "কাল আসবে?"], ["うん、いく。", "হ্যাঁ, যাব।"], ["きのうは ひまじゃなかった。", "গতকাল free ছিলাম না।"]],
    vocabulary: ["うん／ううん — casual yes/no", "ほんとう？ — সত্যি?", "どうして？ — কেন?", "あとで — পরে", "まだ — এখনও"],
    mistakes: ["সব workplace situation-এ plain style ব্যবহার করা।", "な-adjective affirmative-এ だ ভুলে যাওয়া।", "Plain negative past form ভুল বানানো।"],
    practice: ["পাঁচটি polite verb চার plain form-এ বদলান।", "বন্ধুর সঙ্গে weekend plan নিয়ে six-line original chat লিখুন।", "একই message friend ও manager-এর জন্য দুই style-এ লিখুন।"],
    question: "いきませんでした-এর plain form কোনটি?",
    options: ["いかない", "いかなかった", "いきなかった", "いってないでした"],
    correctAnswer: "いかなかった",
  },
  {
    number: 21,
    title: "Thoughts, opinions ও quotation",
    goal: "নিজের মতামত/অনুমান বলা এবং কারও বক্তব্য quote/report করা।",
    explanation: "Plain clause + と おもいます দিয়ে thought/opinion। Person は plain clause と いいました দিয়ে speech report। Quote-এর ভেতরের topic は থাকতে পারে। でしょう rising tone-এ confirmation, falling tone-এ probability/contextual judgement হতে পারে। Opinion-কে fact হিসেবে না বলার জন্য とおもいます useful।",
    patterns: ["Plain clause と おもいます。", "Person は ～と いいました。", "～でしょう？", "N について どう おもいますか。"],
    examples: [["この システムは べんりだと おもいます。", "আমার মনে হয় systemটি useful।"], ["たなかさんは あした やすむと いいました。", "Tanaka বলেছেন কাল ছুটি নেবেন।"], ["この ほうほうは だいじょうぶでしょう。", "এই method সম্ভবত ঠিক হবে।"]],
    vocabulary: ["おもいます — ভাবি", "いいます — বলি", "いけん — opinion", "たぶん — probably", "きっと — নিশ্চয়ই/strong expectation"],
    mistakes: ["な-adjective/noun quote-এর আগে だ বাদ দেওয়া।", "Reported speech-এ tense speaker time/context অনুযায়ী না দেখা।", "でしょう-কে সবসময় question ভাবা।"],
    practice: ["AI/Japan/study নিয়ে তিনটি opinion বলুন।", "একজন colleague-এর দুইটি message report করুন।", "Weather বা schedule নিয়ে probability sentence লিখুন।"],
    question: "‘আমার মনে হয় এই শহর শান্ত’ কোনটি?",
    options: ["この まちは しずかと おもいます。", "この まちは しずかだと おもいます。", "この まちは しずかですを おもいます。", "この まちは しずかなと おもいます。"],
    correctAnswer: "この まちは しずかだと おもいます。",
  },
  {
    number: 22,
    title: "Relative clauses ও noun modification",
    goal: "একটি full plain clause দিয়ে noun identify/describe করা এবং longer information-rich sentence বানানো।",
    explanation: "Japanese relative clause modified noun-এর আগে আসে; English relative pronoun who/that/which নেই। Clause-এর subject অনেক সময় が নেয়। Modified noun মূল sentence-এ নতুন particle পেতে পারে। Clause tense noun-এর event time দেখায়, final predicate পুরো sentence-এর judgement/time দেখায়।",
    patterns: ["[Plain clause] + N", "[Person が V] + N", "[きのう Vた] + N", "Modified N は／を／が ～"],
    examples: [["これは わたしが つくった アプリです。", "এটি আমার বানানো app।"], ["きのう かった ほんを よみました。", "গতকাল কেনা বইটি পড়েছি।"], ["めがねを かけている ひとは せんせいです。", "চশমা পরা ব্যক্তি teacher।"]],
    vocabulary: ["つくります — বানাই", "きます — পরি (upper body)", "はきます — পরি (lower body/shoes)", "かぶります — মাথায় পরি", "うまれます — জন্মাই"],
    mistakes: ["Relative pronoun হিসেবে だれ/それ ঢোকানো।", "Clause-এর পরে の যোগ করা যেখানে noun সরাসরি আসে।", "Main sentence particle modified noun-এর জায়গায় ভুল বসানো।"],
    practice: ["নিজের বানানো/কেনা/ব্যবহৃত তিনটি object describe করুন।", "Room-এর দুইজন person clothing/action দিয়ে identify করুন।", "যে city/company-তে থাকেন/কাজ করেন relative clause দিয়ে বলুন।"],
    question: "‘আমি গতকাল যে movie দেখেছি’ কোনটি?",
    options: ["わたしは きのう みたの えいが", "わたしが きのう みた えいが", "きのう えいがを みた だれ", "わたしの みました えいが"],
    correctAnswer: "わたしが きのう みた えいが",
  },
  {
    number: 23,
    title: "When এবং automatic result",
    goal: "কোন পরিস্থিতিতে কী হয় এবং একটি condition ঘটলে naturally/automatically কী result হয়—বলা।",
    explanation: "とき-এর আগে verb/adjective/noun form আসে। Main action-এর তুলনায় subordinate action complete কি না অনুযায়ী Vるとき বনাম Vたとき meaning বদলায়। Vると automatic/natural result, machine operation বা repeated consequence দেখায়; personal request/command/intention result-এ এটি সাধারণত ব্যবহার করা হয় না।",
    patterns: ["Vる／Vた とき、～", "い-adjective とき／な-adjectiveな とき", "N の とき", "Vる と、automatic result"],
    examples: [["にほんへ くる とき、くうこうで SIMを かいました。", "Japan আসার পথে/আগে airport-এ SIM কিনেছি।"], ["こまった とき、せんせいに ききます。", "সমস্যায় পড়লে teacher-কে জিজ্ঞাসা করি।"], ["この ボタンを おすと、ドアが あきます。", "এই button চাপলে door খোলে।"]],
    vocabulary: ["とき — যখন/সময়", "こまります — সমস্যায় পড়ি", "まわします — ঘোরাই", "ひきます — টানি", "あきます／しまります — খোলে/বন্ধ হয়"],
    mistakes: ["Vるとき ও Vたとき-এর relative timing ignore করা।", "Automatic と-এর result-এ invitation/command ব্যবহার করা।", "な-adjective + とき-এ な বাদ দেওয়া।"],
    practice: ["Busy/free/sick হলে কী করেন—তিনটি とき sentence লিখুন।", "Japan আসার আগে ও পরে action contrast করুন।", "Machine/map/nature-এর তিনটি automatic と instruction বানান।"],
    question: "‘এই button চাপলে light জ্বলে’ কোনটি?",
    options: ["この ボタンを おすと、でんきが つきます。", "この ボタンを おしたい、でんきです。", "この ボタンを おすとき、つけてくださいと。", "この ボタンで おして、でんきと つきます。"],
    correctAnswer: "この ボタンを おすと、でんきが つきます。",
  },
  {
    number: 24,
    title: "Help ও favour perspective",
    goal: "কে কার জন্য helpful action করেছে—てあげる, てもらう ও てくれる দিয়ে perspectiveসহ বলা।",
    explanation: "てあげます subject অন্যের benefit-এর জন্য action করে; てもらいます subject অন্যের কাছ থেকে favour receives; てくれます অন্য কেউ speaker/in-group-এর জন্য action করে। Same event perspective বদলে বলা যায়। Social hierarchy ও favour framing sensitive—superior-এর action-এ casual あげる inappropriate হতে পারে।",
    patterns: ["A は B に Vて あげます。", "A は B に Vて もらいます。", "A が わたしに Vて くれます。", "Person に N を Vて もらう"],
    examples: [["わたしは こうはいに コードを せつめいして あげました。", "Junior-এর জন্য code explain করেছি।"], ["せんぱいに CVを みて もらいました。", "Senior-এর কাছে CV review করিয়েছি/সাহায্য পেয়েছি।"], ["ともだちが えきまで むかえに きて くれました。", "বন্ধু আমার জন্য station-এ নিতে এসেছে।"]],
    vocabulary: ["なおします — ঠিক করি", "つれていきます — সঙ্গে নিয়ে যাই", "おくります — পৌঁছে দিই/পাঠাই", "しょうかいします — পরিচয় করাই", "せつめいします — ব্যাখ্যা করি"],
    mistakes: ["くれます sentence-এ beneficiary speaker side না হওয়া।", "もらいます-এ helper-এর particle ভুল করা।", "নিজের helpful action অহেতুক あげました বলে social nuance না দেখা।"],
    practice: ["এই সপ্তাহে পাওয়া তিনটি help てもらう দিয়ে লিখুন।", "বন্ধু আপনার জন্য কী করেছে てくれる দিয়ে বলুন।", "আপনি কার জন্য কী করেছেন—appropriate contextসহ লিখুন।"],
    question: "‘Senior আমার CV দেখে দিয়েছেন’—receiver perspective কোনটি?",
    options: ["せんぱいに CVを みて もらいました。", "せんぱいを CVに みて あげました。", "せんぱいが CVを みて もらいます。", "わたしに せんぱいを みて くれました。"],
    correctAnswer: "せんぱいに CVを みて もらいました。",
  },
  {
    number: 25,
    title: "Conditional たら, contrast ても ও final integration",
    goal: "Realistic condition, hypothetical situation ও ‘যদিও’ contrast বলা এবং Units 1–25 integrate করা।",
    explanation: "Past plain + ら তৈরি করে たら condition: condition complete হলে result। Verb/adjective/noun-এর form অনুযায়ী たら বদলায়। ても ‘যদিও/করলেও’ expected result-এর বিপরীত outcome দেখায়। Question word + たらいいですか advice request। Final goal হলো form মুখস্থ নয়—particles, tense, style ও context একসঙ্গে control করা।",
    patterns: ["Vたら、～", "い-adjectiveかったら／な-adjective・Nだったら", "Vても、～", "どうしたら いいですか。"],
    examples: [["しごとが おわったら、れんらくします。", "কাজ শেষ হলে contact করব।"], ["あめが ふっても、イベントへ いきます。", "বৃষ্টি হলেও event-এ যাব।"], ["パスワードを わすれたら、どうしたら いいですか。", "Password ভুলে গেলে কী করা উচিত?"]],
    vocabulary: ["もし — যদি (hypothetical emphasis)", "おわります — শেষ হয়", "れんらくします — contact করি", "ちょうし — condition/state", "どうしたら — কী করলে"],
    mistakes: ["たら-এর আগে plain past form না করা।", "ても-কে simple sequence হিসেবে ব্যবহার করা।", "Condition ও result-এর tense/logical order না দেখা।"],
    practice: ["Weather, work ও study নিয়ে তিনটি realistic condition লিখুন।", "Difficult হলেও করবেন—এমন তিনটি ても sentence লিখুন।", "Units 1–25 থেকে অন্তত দশ pattern ব্যবহার করে নিজের Japan life নিয়ে 12-line original composition লিখুন।"],
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
