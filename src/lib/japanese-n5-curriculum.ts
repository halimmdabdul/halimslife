import type { CourseLesson, CourseSection } from "@/components/course-player";

function lesson(
  title: string,
  duration: string,
  overview: string,
  studyNotes: string,
  question: string,
  options: string[],
  correctAnswer: string,
): CourseLesson {
  return {
    title,
    duration,
    type: "reading",
    overview,
    studyNotes,
    practiceTest: { question, options, correctAnswer },
  };
}

function checkpoint(
  title: string,
  overview: string,
  question: string,
  options: string[],
  correctAnswer: string,
): CourseLesson {
  return {
    title,
    duration: "Checkpoint",
    type: "quiz",
    overview,
    studyNotes:
      "ভুল হলে আগের দুইটি lesson-এর notes review করুন। শুধু correct answer মুখস্থ না করে কেন অন্য options ভুল—সেটিও ব্যাখ্যা করার চেষ্টা করুন।",
    practiceTest: { question, options, correctAnswer },
  };
}

export const japaneseN5Sections: CourseSection[] = [
  {
    title: "Start smart",
    lessons: [
      lesson(
        "N5-এ আসলে কী শিখবেন",
        "7 min",
        `## Course goal

JLPT N5 মানে basic Japanese-এর কিছু অংশ বুঝতে পারা। লক্ষ্য হলো hiragana, katakana ও basic kanji-তে লেখা পরিচিত বাক্য পড়া এবং ধীরে বলা ছোট দৈনন্দিন conversation থেকে প্রয়োজনীয় তথ্য ধরতে পারা।

এই course তিনটি track একসঙ্গে চালাবে: **language knowledge**, **reading** এবং **listening-ready comprehension**। JLPT speaking বা writing সরাসরি test করে না, কিন্তু নিজের বাক্য তৈরি করলে grammar ও vocabulary বেশি স্থায়ী হয়।

### আজকের action

- একটি notebook বা digital note খুলুন
- প্রতিদিন 25, 45 বা 75 মিনিটের একটি study track বাছুন
- প্রতিটি lesson শেষে নিজে একটি example লিখুন
- ভুল answer-কে learning signal হিসেবে নিন`,
        `## Official N5 test shape

- Vocabulary: **20 minutes**
- Grammar and Reading: **40 minutes**
- Listening: **30 minutes**

> Test time বদলাতে পারে; registration-এর আগে official JLPT page check করবেন।

## Recommended routine

1. 5 মিনিট আগের vocabulary recall
2. 10–20 মিনিট নতুন lesson
3. 5–10 মিনিট example ও shadowing
4. 5 মিনিট practice question`,
        "JLPT N5 কোন skill সরাসরি test করে না?",
        ["Vocabulary", "Reading", "Listening", "Speaking"],
        "Speaking",
      ),
      lesson(
        "Active recall দিয়ে কীভাবে পড়বেন",
        "6 min",
        `শুধু notes বারবার পড়লে পরিচিত মনে হয়, কিন্তু exam বা conversation-এ recall নাও হতে পারে। তাই lesson বন্ধ করে Japanese form, meaning এবং একটি example মনে থেকে বলুন।

### তিন-pass method

1. **Notice:** নতুন pattern ও example বুঝুন।
2. **Recall:** screen না দেখে form/meaning লিখুন।
3. **Use:** নিজের জীবন নিয়ে একটি নতুন বাক্য বানান।

একদিনে অনেক কিছু শেষ করার চেয়ে spaced review বেশি কার্যকর। আজ শেখা item আগামীকাল, তিন দিন পরে এবং এক সপ্তাহ পরে আবার recall করুন।`,
        `## Flashcard format

**Front:** きょうは なんようびですか。

**Back:** আজ কী বার? — きょうは もくようびです。

Vocabulary card-এ isolated translation-এর বদলে short sentence রাখুন। Kana শেখার সময় romaji সাময়িক support; দ্রুত kana-only reading-এ চলে যান।`,
        "কোন study action active recall?",
        ["একই page পাঁচবার পড়া", "Notes বন্ধ করে example বলা", "শুধু highlight করা", "Video background-এ চালানো"],
        "Notes বন্ধ করে example বলা",
      ),
      checkpoint(
        "Orientation checkpoint",
        `এই checkpoint-এ course strategy যাচাই করুন। N5 pass score-এর জন্য শুধু vocabulary নয়—grammar/reading ও listening section-এও preparation প্রয়োজন।`,
        "সবচেয়ে balanced daily routine কোনটি?",
        ["শুধু kanji", "শুধু grammar video", "Vocabulary + pattern + reading/listening practice", "সপ্তাহে একদিন ৫ ঘণ্টা"],
        "Vocabulary + pattern + reading/listening practice",
      ),
    ],
  },
  {
    title: "Hiragana foundation",
    lessons: [
      lesson(
        "Hiragana: vowels ও K/S rows",
        "12 min",
        `Hiragana Japanese-এর basic phonetic script। প্রথমে shape–sound connection শিখুন, English spelling নয়।

### Core sounds

- あ a · い i · う u · え e · お o
- か ka · き ki · く ku · け ke · こ ko
- さ sa · し shi · す su · せ se · そ so

প্রতিটি kana তিনবার লিখুন, তারপর shuffled order-এ পড়ুন। একই row বারবার recite করা useful, কিন্তু random recognition না হলে real word পড়া কঠিন হবে।`,
        `## First words

- あさ — সকাল
- いえ — বাড়ি
- えき — স্টেশন
- すし — sushi
- そこ — ওখানে

**Pronunciation note:** し হলো *shi*, す-তে vowel হালকা শোনা যেতে পারে। Japanese sound সমান rhythm-এ বলার চেষ্টা করুন।`,
        "えき শব্দটির meaning কী?",
        ["বাড়ি", "স্টেশন", "সকাল", "স্কুল"],
        "স্টেশন",
      ),
      lesson(
        "Hiragana: T/N/H/M/Y/R/W rows",
        "14 min",
        `এখন বাকি basic hiragana যোগ করুন। Special readings-এ বেশি মন দিন: ち *chi*, つ *tsu*, ふ *fu*, を সাধারণত particle হিসেবে *o*।

### Practice strategy

- sound শুনে kana লিখুন
- kana দেখে sound বলুন
- দুই ও তিন mora-র word পড়ুন
- similar shapes আলাদা pair হিসেবে practice করুন: ぬ/め, れ/ね, わ/ね

ん একমাত্র standalone nasal kana। পরের sound অনুযায়ী এর উচ্চারণ সামান্য বদলাতে পারে।`,
        `## Useful words

- ひと — মানুষ
- みず — পানি
- やま — পাহাড়
- くるま — গাড়ি
- ほん — বই
- わたし — আমি

Romaji দেখে copy না করে kana থেকে meaning recall করুন।`,
        "কোন kana-টি *tsu*?",
        ["ち", "つ", "て", "と"],
        "つ",
      ),
      checkpoint(
        "Hiragana checkpoint",
        `এক মিনিট timer দিয়ে random hiragana পড়ুন। যেগুলোতে তিন সেকেন্ডের বেশি লাগে সেগুলো আলাদা weak list-এ রাখুন। Target হলো perfect handwriting নয়—দ্রুত ও নির্ভুল recognition।`,
        "わたし-এর সঠিক reading কোনটি?",
        ["watashi", "watashi-i", "watoshi", "hatashi"],
        "watashi",
      ),
    ],
  },
  {
    title: "Katakana and sound rules",
    lessons: [
      lesson(
        "Katakana দিয়ে loanword পড়া",
        "13 min",
        `Katakana মূলত foreign names, loanwords, emphasis এবং কিছু technical term-এ ব্যবহৃত হয়। Sound inventory hiragana-এর মতো, shape আলাদা।

### High-value words

- コンピューター — computer
- ソフトウェア — software
- カメラ — camera
- バス — bus
- アメリカ — America
- バングラデシュ — Bangladesh

English pronunciation 그대로 বলবেন না। Japanese mora অনুযায়ী word ভাঙুন: コ・ン・ピュ・ー・ター।`,
        `## Similar shapes

- シ *shi* বনাম ツ *tsu*
- ソ *so* বনাম ン *n*
- ク *ku* বনাম ケ *ke*

Stroke direction ও angle দেখে pair practice করুন। Long-vowel mark **ー** আগের vowel দীর্ঘ করে: コーヒー।`,
        "কোন শব্দটির meaning ‘camera’?",
        ["カメラ", "テレビ", "ラジオ", "ホテル"],
        "カメラ",
      ),
      lesson(
        "Dakuten, small ゃゅょ ও small っ",
        "12 min",
        `দুইটি mark ও ছোট kana Japanese sound বদলায়।

- か → が, さ → ざ, た → だ, は → ば / ぱ
- き + small ゃ = きゃ (*kya*)
- small っ পরের consonant-এর আগে ছোট pause তৈরি করে

Examples: がくせい (student), びょういん (hospital), きっぷ (ticket), ちょっと (a little)।`,
        `## Listen with timing

- きて — এসে
- きって — stamp
- びよういん — beauty salon
- びょういん — hospital

Small っ ও long/combined sound meaning বদলাতে পারে। Clap বা finger tap দিয়ে mora count করুন।`,
        "‘Ticket’ কোনটি?",
        ["きぷ", "きっぷ", "きゅぷ", "ぎぷ"],
        "きっぷ",
      ),
      checkpoint(
        "Kana and sound checkpoint",
        `এখন একটি mixed kana list পড়ুন এবং hiragana/katakana switch করতে শিখুন। Daily Japanese sentence-এ kanji, hiragana ও katakana একই সঙ্গে থাকে।`,
        "コンピューター শব্দে ー কী করে?",
        ["পরের consonant দ্বিগুণ করে", "আগের vowel দীর্ঘ করে", "শব্দ শেষ করে", "প্রশ্ন তৈরি করে"],
        "আগের vowel দীর্ঘ করে",
      ),
    ],
  },
  {
    title: "Introduce yourself",
    lessons: [
      lesson(
        "A は B です: প্রথম sentence pattern",
        "11 min",
        `Pattern **A は B です** দিয়ে A সম্পর্কে B বলা হয়। Particle は এখানে *wa* উচ্চারণ হয়। です polite sentence ending।

- わたしは ハリムです。— আমি Halim।
- わたしは エンジニアです。— আমি engineer।
- これは ほんです。— এটি বই।

Japanese-এ context clear হলে わたしは বাদ যায়। তাই সব বাক্যে pronoun repeat করবেন না।`,
        `## Negative and question

- がくせい**ではありません**。— ছাত্র নই।
- がくせい**じゃないです**。— ছাত্র নই (common polite speech)।
- がくせいです**か**。— ছাত্র কি?

Question-এর শেষে rising tone হতে পারে, কিন্তু particle か grammatical signal।`,
        "‘আমি শিক্ষক’—সঠিক polite sentence কোনটি?",
        ["わたしは せんせいです。", "わたしを せんせいです。", "わたしの せんせいか。", "わたしが ですせんせい。"],
        "わたしは せんせいです。",
      ),
      lesson(
        "の, も এবং পরিচয়ের details",
        "10 min",
        `Particle **の** দুই noun-এর relation দেখায়; **も** ‘also/ও’ বোঝায়।

- SIUの がくせい — SIU-এর student
- コンピューターの せんせい — computer-এর teacher
- わたしも エンジニアです。— আমিও engineer।

নিজের introduction-এ name, country, role এবং interest নিয়ে চারটি short sentence বলুন।`,
        `## Model introduction

はじめまして。ハリムです。

バングラデシュじんです。いま にほんの かいしゃで はたらいています。

どうぞ よろしく おねがいします。

> はじめまして এবং どうぞよろしく fixed social expressions; word-by-word translation-এর চেয়ে situationসহ শিখুন।`,
        "‘আমিও student’ কোনটি?",
        ["わたしの がくせいです。", "わたしも がくせいです。", "わたしを がくせいです。", "わたしは もがくせい。"],
        "わたしも がくせいです。",
      ),
      checkpoint(
        "Self-introduction checkpoint",
        `নিজের 20-second introduction record করুন। প্রথমবার notes দেখে, দ্বিতীয়বার keywords দেখে, তৃতীয়বার না দেখে বলুন। Accuracy-এর পাশাপাশি pause ও clarity লক্ষ্য করুন।`,
        "‘Tanaka-san কি teacher?’ কোনটি?",
        ["たなかさんは せんせいですか。", "たなかさんを せんせいです。", "たなかさんの せんせいか。", "たなかさんも ですかせんせい。"],
        "たなかさんは せんせいですか。",
      ),
    ],
  },
  {
    title: "Objects, places and time",
    lessons: [
      lesson(
        "これ・それ・あれ এবং この・その・あの",
        "12 min",
        `これ/それ/あれ নিজে noun-এর মতো দাঁড়ায়। この/その/あの-এর পরে noun লাগবে।

- これは なんですか。— এটি কী?
- それは かさです。— সেটি umbrella।
- あの ひとは だれですか。— ঐ ব্যক্তি কে?
- この ほんは わたしのです。— এই বইটি আমার।

Distance শুধু physical নয়; conversation-এ speaker/listener-এর information territory-ও effect করতে পারে। N5-এ basic distance rule আগে শিখুন।`,
        `## Distance map

- **こ-** speaker-এর কাছে
- **そ-** listener-এর কাছে
- **あ-** দুজনের থেকে দূরে
- **ど-** question form

Objects: これ/それ/あれ/どれ

Before nouns: この/その/あの/どの`,
        "‘এই camera’ কোনটি?",
        ["これ カメラ", "この カメラ", "ここ カメラ", "どれ カメラ"],
        "この カメラ",
      ),
      lesson(
        "ここ・そこ・あそこ এবং location",
        "10 min",
        `Place words: ここ (এখানে), そこ (সেখানে), あそこ (ওখানে), どこ (কোথায়)। Polite alternatives こちら/そちら/あちら/どちら direction বা person-এর জন্যও ব্যবহৃত হয়।

- トイレは どこですか。— Toilet কোথায়?
- あそこです。— ওখানে।
- うけつけは こちらです。— Reception এই দিকে।

Real practice: নিজের room, station বা office map দেখে পাঁচটি location question-answer বলুন।`,
        `## Place vocabulary

- えき — station
- ぎんこう — bank
- びょういん — hospital
- かいしゃ — company
- うち / いえ — home / house
- きょうしつ — classroom`,
        "‘Station কোথায়?’ কোনটি?",
        ["えきは どこですか。", "えきを なんですか。", "えきの だれですか。", "どれは えきです。"],
        "えきは どこですか。",
      ),
      checkpoint(
        "Numbers, clock and calendar checkpoint",
        `Japanese time expression-এ counter readings irregular হতে পারে। Hours: いちじ, にじ, よじ, しちじ, くじ। Minutes-এ ぷん/ふん alternation শুনে শিখুন।

নিজের wake-up time, work start এবং sleep time Japanese-এ বলুন।`,
        "‘এখন ৪টা’ কোনটি?",
        ["いま よじです。", "いま よんじです。", "いま しじです。", "いま よじかんです。"],
        "いま よじです。",
      ),
    ],
  },
  {
    title: "Verbs and particles",
    lessons: [
      lesson(
        "ます form: present, negative, past",
        "14 min",
        `Polite verb endings time ও polarity দেখায়। Japanese non-past form present habit এবং future—দুটির জন্য ব্যবহৃত হয়।

- たべます — খাই / খাব
- たべません — খাই না / খাব না
- たべました — খেয়েছি / খেলাম
- たべませんでした — খাইনি

Dictionary form পরে শিখবেন; N5 comprehension-এর জন্য common ます forms দ্রুত চিনুন।`,
        `## Core verbs

- いきます — যাই
- きます — আসি
- かえります — ফিরি
- みます — দেখি
- ききます — শুনি / জিজ্ঞাসা করি
- よみます — পড়ি
- かきます — লিখি
- はなします — বলি

Time word-এর সঙ্গে tense মিলিয়ে sentence বানান।`,
        "きのう えいがを ___。 (গতকাল movie দেখেছি)",
        ["みます", "みません", "みました", "みませんか"],
        "みました",
      ),
      lesson(
        "を・で・に・へ: action-এর map",
        "15 min",
        `Particles sentence-এর relationship দেখায়। Translation দিয়ে নয়, role দিয়ে শিখুন।

- パン**を** たべます。— object
- としょかん**で** べんきょうします。— action location
- 7じ**に** おきます。— specific time
- とうきょう**へ** いきます。— direction

Destination-এ に-ও ব্যবহৃত হয়: がっこうに いきます।`,
        `## Particle decision

1. কী action হচ্ছে?
2. Action-এর object কী? → を
3. Action কোথায়? → で
4. Exact time/destination কী? → に
5. Direction জোর দিতে? → へ

> きょう, あした, まいにち-এর পরে সাধারণত time particle に লাগে না।`,
        "‘Library-তে পড়ি’—কোন particle? としょかん___ べんきょうします。",
        ["を", "で", "へ", "の"],
        "で",
      ),
      checkpoint(
        "Verb and particle checkpoint",
        `একটি daily routine লিখুন: কখন উঠেন, কী খান, কোথায় যান, কোথায় কাজ করেন এবং কখন ফেরেন। পাঁচটি sentence-এ অন্তত を, で এবং に একবার করে ব্যবহার করুন।`,
        "まいあさ 7じ___ おきます。",
        ["を", "で", "に", "へ"],
        "に",
      ),
    ],
  },
  {
    title: "Descriptions and existence",
    lessons: [
      lesson(
        "い-adjective ও な-adjective",
        "14 min",
        `Japanese adjective দুই group। い-adjective সাধারণত い দিয়ে শেষ হয়; な-adjective noun-এর আগে な নেয়।

- おいしい りょうり — সুস্বাদু খাবার
- たかい くるま — দামি গাড়ি
- しずかな へや — শান্ত room
- きれいな まち — সুন্দর/পরিষ্কার শহর

きれい い-তে শেষ হলেও な-adjective—common exception হিসেবে শিখুন।`,
        `## Polite forms

- おいしいです / おいしくないです
- しずかです / しずかじゃないです
- おいしかったです — সুস্বাদু ছিল
- しずかでした — শান্ত ছিল

N5-এ form recognition গুরুত্বপূর্ণ; প্রতিটি adjective positive, negative ও past-এ বদলান।`,
        "‘শান্ত room’ কোনটি?",
        ["しずか へや", "しずかな へや", "しずかい へや", "しずかの へや"],
        "しずかな へや",
      ),
      lesson(
        "あります・います এবং location pattern",
        "12 min",
        `あります সাধারণত non-living thing-এর existence; います মানুষ ও animal-এর জন্য।

- つくえの うえに ほんが あります。
- へやに ねこが います。
- たなかさんは じむしょに います。

Existence introduce করতে が, known topic/person locate করতে は ব্যবহার হয়।`,
        `## Position words

- うえ — ওপর
- した — নিচে
- まえ — সামনে
- うしろ — পেছনে
- なか — ভেতরে
- となり — পাশে
- ちかく — কাছে

Pattern: **Aの position に Bが あります/います**。`,
        "つくえの うえに ほんが ___。",
        ["います", "あります", "ですかいます", "あります人"],
        "あります",
      ),
      checkpoint(
        "Description checkpoint",
        `নিজের room-এর পাঁচটি object ও একজন person/pet-এর location Japanese-এ বলুন। এরপর room-কে দুইটি adjective দিয়ে describe করুন।`,
        "‘Roomটি পরিষ্কার ছিল’ কোনটি?",
        ["へやは きれいでした。", "へやは きれいかったです。", "へやに きれいです。", "へやを きれいでした。"],
        "へやは きれいでした。",
      ),
    ],
  },
  {
    title: "Daily communication",
    lessons: [
      lesson(
        "好き・上手 এবং frequency",
        "12 min",
        `好き (পছন্দ) ও 上手 (দক্ষ) な-adjective-এর মতো কাজ করে এবং target সাধারণত が দিয়ে আসে।

- わたしは コーヒーが すきです。
- たなかさんは りょうりが じょうずです。

Frequency words: いつも, よく, ときどき, あまり, ぜんぜん। あまり ও ぜんぜん সাধারণত negative verb-এর সঙ্গে আসে।`,
        `## Natural frequency scale

- いつも — always
- よく — often
- ときどき — sometimes
- あまり…ません — not often
- ぜんぜん…ません — not at all

নিজের study, cooking, exercise ও entertainment habits দিয়ে examples বানান।`,
        "‘আমি খুব একটা TV দেখি না’ কোনটি?",
        ["テレビを あまり みません。", "テレビを あまり みます。", "テレビが いつも みません。", "テレビに ぜんぜん みます。"],
        "テレビを あまり みません。",
      ),
      lesson(
        "ませんか・ましょう: invitation",
        "10 min",
        `Polite invitation-এ **ませんか** ব্যবহার হয়; together করার suggestion-এ **ましょう**।

- いっしょに ひるごはんを たべませんか。— একসঙ্গে lunch খাবেন?
- はい、たべましょう。— হ্যাঁ, চলুন খাই।
- ちょっと…。— soft decline; context-এ ‘কঠিন হবে’ বোঝায়।

Direct いいえ-এর বদলে Japanese communication-এ hesitation expression common।`,
        `## Make a plan

- いつ — কখন
- どこで — কোথায়
- だれと — কার সঙ্গে
- なにを — কী

Example: どようびに えきの ちかくで コーヒーを のみませんか。`,
        "‘চলুন পড়ি’ কোনটি?",
        ["べんきょうしません", "べんきょうしましょう", "べんきょうでした", "べんきょうですか"],
        "べんきょうしましょう",
      ),
      checkpoint(
        "Everyday conversation checkpoint",
        `একজন বন্ধুকে weekend plan propose করুন। Friend একটি alternative time দেবে—দুই role নিজে record করুন। Question, invitation, acceptance/soft decline অন্তর্ভুক্ত করুন।`,
        "Invitation-এর সবচেয়ে natural form কোনটি?",
        ["コーヒーを のみませんか。", "コーヒーは のみません。", "コーヒーが のみでした。", "コーヒーに のみますか。"],
        "コーヒーを のみませんか。",
      ),
    ],
  },
  {
    title: "Requests and permissions",
    lessons: [
      lesson(
        "て-form চিনুন ও sequence বলুন",
        "16 min",
        `て-form অনেক beginner pattern-এর connector। প্রথমে high-frequency forms chunk হিসেবে শিখুন।

- たべます → たべて
- みます → みて
- かきます → かいて
- よみます → よんで
- はなします → はなして
- します → して
- きます → きて

Sequence: あさごはんを たべて、かいしゃへ いきます。`,
        `## Pattern groups

- う/つ/る → って
- む/ぶ/ぬ → んで
- く → いて（いく → いって）
- ぐ → いで
- す → して
- Group 2: る বাদ + て

N5-এ সব rule একবারে perfect না হলেও common verbs দ্রুত recognize করুন।`,
        "よみます-এর て-form কোনটি?",
        ["よみて", "よんで", "よって", "よいて"],
        "よんで",
      ),
      lesson(
        "てください・てもいい・てはいけません",
        "14 min",
        `て-form দিয়ে request, permission ও prohibition বলা যায়।

- もういちど いってください。— আরেকবার বলুন।
- ここに すわっても いいですか。— এখানে বসতে পারি?
- ここで しゃしんを とっては いけません。— এখানে ছবি তোলা যাবে না।

Real signs ও classroom instructions-এ এগুলো খুব common।`,
        `## Communication tip

Request-এর আগে すみません বললে polite হয়। Permission answer:

- はい、いいです。— হ্যাঁ, পারেন।
- すみません、ちょっと…。— দুঃখিত, একটু অসুবিধা।
- いいえ、いけません。— না, অনুমতি নেই (strong/direct)।`,
        "‘আরেকবার বলুন’ কোনটি?",
        ["もういちど いってください。", "もういちど いきます。", "もういちど いってもいい。", "もういちど いいません。"],
        "もういちど いってください。",
      ),
      checkpoint(
        "Requests checkpoint",
        `Station, office বা classroom-এর জন্য তিনটি request, দুইটি permission question এবং দুইটি prohibition sign লিখুন। প্রতিটি sentence aloud পড়ুন।`,
        "‘এখানে খাওয়া যাবে না’ কোনটি?",
        ["ここで たべても いいです。", "ここで たべては いけません。", "ここを たべてください。", "ここに たべましょう。"],
        "ここで たべては いけません。",
      ),
    ],
  },
  {
    title: "JLPT skills and final plan",
    lessons: [
      lesson(
        "N5 reading: sentence থেকে notice",
        "14 min",
        `N5 reading-এ short passage, mid-size passage এবং information retrieval থাকে। প্রতিটি word translate না করে task আগে পড়ুন: কে, কখন, কোথায়, কী করতে হবে?

### Reading routine

1. Question আগে skim করুন
2. Names, dates, numbers circle করুন
3. Particles ও verb ending দিয়ে relationship ধরুন
4. Negative form miss করবেন না
5. Answer-এর evidence text-এ locate করুন

Menu, schedule, message এবং simple notice দিয়ে practice করুন।`,
        `## Mini notice

としょかんは げつようび やすみです。かようびから きんようびまで、9じから 6じまでです。

Key information:

- Monday closed
- Tuesday–Friday open
- 9:00–18:00

まで endpoint; から starting point।`,
        "Notice অনুযায়ী library কোন দিন বন্ধ?",
        ["げつようび", "かようび", "きんようび", "まいにち"],
        "げつようび",
      ),
      lesson(
        "N5 listening: key information ধরুন",
        "12 min",
        `Official N5 listening short, slowly spoken daily/classroom conversations থেকে necessary information ধরতে বলে। Audio শুরু হওয়ার আগে picture/options থাকলে difference predict করুন।

### Listening focus

- কে action করবে?
- সময়/দিন বদলেছে কি?
- speaker কী choose করেছে?
- negative বা correction আছে কি?
- final decision কী?

Shadowing-এ audio-এর ঠিক পরে rhythmসহ repeat করুন; শুধু subtitle পড়বেন না।`,
        `## Contrast signals

- でも — কিন্তু
- じゃ / では — তাহলে
- ちょっと — hesitation/soft refusal
- まだ — এখনও
- もう — ইতিমধ্যে / আর

প্রথম information-এর পরে correction আসতে পারে। Last decision পর্যন্ত শুনুন।`,
        "Listening question-এ প্রথম time ‘7টা’, পরে ‘8টা’ ঠিক করা হলে answer কী?",
        ["7টা", "8টা", "দুটোই", "সময় বলা হয়নি"],
        "8টা",
      ),
      checkpoint(
        "Final readiness checkpoint",
        `## আপনার final review plan

- Week 1: kana speed + core vocabulary
- Week 2: particles + verb/adjective forms
- Week 3: timed reading + short listening
- Week 4: full 90-minute simulation, error log ও weak-area repair

একটি mock score alone readiness প্রমাণ করে না। ভুলগুলো category করুন: knowledge gap, misread question, timing, listening attention বা careless error। তারপর category অনুযায়ী fix করুন।

> এই course N5 foundation তৈরি করে; official sample questions ও timed listening practice আলাদাভাবে ব্যবহার করুন।`,
        "N5-এর total listed section time কত?",
        ["60 minutes", "75 minutes", "90 minutes", "120 minutes"],
        "90 minutes",
      ),
    ],
  },
];
