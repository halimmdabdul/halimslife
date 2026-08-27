import type { UnitDeepDive } from "./minna-n5-deep-dive-types";

export const minnaN4DeepDives1: Record<number, UnitDeepDive> = {
  26: {
    coreIdea:
      "んです fact-কে explanation-এ বদলে দেয়। শুধু です বললে তথ্য নিরপেক্ষ শোনায়; んです বললে শ্রোতা বুঝতে পারে বক্তা কোনো পরিস্থিতির কারণ/প্রসঙ্গ ব্যাখ্যা করছে।",
    mentalModel: [
      "です/ます দিয়ে শেষ হওয়া বাক্যকে んです-তে বদলাতে হলে আগে plain form-এ আনুন।",
      "な-adjective ও noun-এর ক্ষেত্রে な যোগ হয়ে なんです হয়—এই な ভুলে গেলে ভুল শোনাবে।",
      "どうしたんですか প্রশ্নটি সরাসরি 'কী হয়েছে?' জিজ্ঞেস করে, সাধারণ どうですか থেকে বেশি concerned শোনায়।",
      "কথোপকথনে んです প্রায়ই কারণ বলার আগে ব্যবহার হয়, যেন শ্রোতা বুঝতে পারে এরপর একটি ব্যাখ্যা আসছে।",
    ],
    buildSteps: [
      "যে বাক্যটি ব্যাখ্যা করতে চান তার plain form বের করুন: つかれます→つかれる।",
      "Verb/い-adjective হলে সরাসরি んです জুড়ে দিন: つかれたんです।",
      "な-adjective/noun হলে な যোগ করুন: びょうきなんです।",
      "প্রশ্নে どうして/なぜ যোগ করলে কারণ জিজ্ঞেস করা হয়: どうして つかれたんですか。",
      "উত্তরে একই んです pattern রেখে কারণ ব্যাখ্যা করুন।",
    ],
    contrasts: [
      "ভুল: びょうきです んです (です রেখে দেওয়া)। → সঠিক: びょうきなんです।",
      "ভুল: どうしたですか। → সঠিক: どうしたんですか। ব্যাখ্যা-প্রশ্নে んです দরকার।",
      "つかれました (শুধু fact) বনাম つかれたんです (ব্যাখ্যা—হয়তো তাই কিছু করতে পারছি না)।",
      "んです-কে প্রতিটি বাক্যে ব্যবহার করলে অস্বাভাবিক শোনায়; শুধু ব্যাখ্যা প্রয়োজন হলেই ব্যবহার করুন।",
    ],
    workedSentences: [
      {
        japanese: "きょうは くるまで きたんです。でんしゃが とまっていて。",
        reading: "Kyou wa kuruma de kitan desu. Densha ga tomatte ite.",
        bengali: "আজ গাড়িতে এসেছি। ট্রেন থেমে ছিল তো।",
        breakdown: [
          "きょうは = আজকের বিষয়ে",
          "くるまで きたんです = গাড়িতে এসেছি (ব্যাখ্যা)",
          "でんしゃが とまっていて = ট্রেন থেমে ছিল বলে (কারণ)",
        ],
        teachingPoint: "んです দিয়ে প্রথমে ফলাফল বলে, পরে কারণ যোগ করা একটি খুবই স্বাভাবিক কথোপকথন-প্যাটার্ন।",
      },
      {
        japanese: "あのう、ちょっと おねがいが あるんですが…。",
        reading: "Anou, chotto onegai ga arun desu ga...",
        bengali: "আচ্ছা, একটু অনুরোধ ছিল...।",
        breakdown: [
          "あのう = আচ্ছা/মানে (hesitation marker)",
          "おねがいが あるんですが = একটি অনুরোধ আছে (বলে)",
          "…が = বাক্য soft রাখতে অসম্পূর্ণ রাখা",
        ],
        teachingPoint: "んですが দিয়ে বাক্য শুরু করা কাউকে কিছু অনুরোধ করার আগে একটি খুবই common, নরম উপায়।",
      },
    ],
    dialogue: [
      { speaker: "A", japanese: "かおいろが わるいですね。だいじょうぶですか。", reading: "Kaoiro ga warui desu ne. Daijoubu desu ka.", bengali: "মুখ ফ্যাকাশে লাগছে। ঠিক আছেন তো?" },
      { speaker: "B", japanese: "あたまが いたいんです。ゆうべ あまり ねられなくて。", reading: "Atama ga itain desu. Yuube amari nerarenakute.", bengali: "মাথা ব্যথা করছে। গতরাতে ঠিকমতো ঘুম হয়নি তো।" },
      { speaker: "A", japanese: "それは たいへんですね。はやく かえった ほうが いいですよ。", reading: "Sore wa taihen desu ne. Hayaku kaetta hou ga ii desu yo.", bengali: "এটা তো কঠিন। তাড়াতাড়ি বাসায় ফিরে যাওয়াই ভালো।" },
    ],
    practiceScaffolds: [
      { task: "নিজের একটি ক্লান্তির কারণ んです দিয়ে বলুন।", hint: "つかれます→つかれる+んです।", model: "しごとが おおかったんです。" },
      { task: "どうしたんですか দিয়ে কাউকে প্রশ্ন করুন।", hint: "সরাসরি এই fixed phrase ব্যবহার করুন।", model: "どうしたんですか。" },
      { task: "な-adjective ব্যবহার করে একটি んです sentence বানান।", hint: "な যোগ করতে ভুলবেন না।", model: "きょうは ひまなんです。" },
    ],
    answerExplanation:
      "সঠিক উত্তর でんしゃが おくれたんです। おくれます-এর plain past おくれた; এর পরে んです জুড়ে কারণ ব্যাখ্যা করা হয়েছে। では おくれたです ভুল, কারণ んです-এর আগে です বসে না, plain form সরাসরি বসে।",
  },

  27: {
    coreIdea:
      "かもしれません দিয়ে বক্তা তার নিজের কম-নিশ্চিত অনুমান প্রকাশ করে। でしょう-এর চেয়ে কম আত্মবিশ্বাসী, আর はず (Unit 37)-এর চেয়ে কম যুক্তিনির্ভর—এটি তিনটির মধ্যে সবচেয়ে 'নরম' অনুমান।",
    mentalModel: [
      "かもしれません-কে ৫০%-এর কম নিশ্চয়তা ভাবুন—'হতেও পারে, নাও হতে পারে'।",
      "Verb/い-adjective plain form সরাসরি নেয়; な-adjective/noun-এ だ বাদ পড়ে।",
      "たぶん sentence-এর শুরুতে বসিয়ে অনুমানের সুর আরও নরম করা যায়।",
      "Negative সম্ভাবনাতেও একই pattern: ないかもしれません।",
    ],
    buildSteps: [
      "যা নিয়ে অনিশ্চিত তার plain form বের করুন।",
      "Verb/い-adjective হলে সরাসরি জুড়ে দিন: ふるかもしれません।",
      "な-adjective/noun হলে だ বাদ দিয়ে জুড়ুন: びょうきかもしれません।",
      "চাইলে শুরুতে たぶん যোগ করে আরও নরম করুন।",
      "Past সম্ভাবনায় た-form ব্যবহার করুন: おわったかもしれません।",
    ],
    contrasts: [
      "ভুল: びょうきだかもしれません। → সঠিক: びょうきかもしれません।",
      "でしょう বেশি নিশ্চিত; かもしれません কম নিশ্চিত—একই context-এ দুটো আলাদা আত্মবিশ্বাস দেখায়।",
      "ভুل: あめが ふるかもしれませんか। (প্রশ্নে ব্যবহার)। → এই pattern সাধারণত statement-এই থাকে।",
      "たぶん ছাড়াও かもしれません একা যথেষ্ট; দুটো একসঙ্গে redundant নয় তবে বাধ্যতামূলকও নয়।",
    ],
    workedSentences: [
      {
        japanese: "しゃちょうは もう しっているかもしれません。",
        reading: "Shachou wa mou shitte iru kamoshiremasen.",
        bengali: "President হয়তো ইতিমধ্যে জানেন।",
        breakdown: ["しゃちょうは = President topic", "もう = ইতিমধ্যে", "しっているかもしれません = হয়তো জানেন"],
        teachingPoint: "しっている (জানা-অবস্থা, ~ている form) নিজেই একটি plain state, তার পরে সরাসরি かもしれません বসে।",
      },
      {
        japanese: "この けいかくは むりかもしれません。",
        reading: "Kono keikaku wa muri kamoshiremasen.",
        bengali: "এই পরিকল্পনা হয়তো অসম্ভব।",
        breakdown: ["この けいかくは = এই পরিকল্পনা", "むり = অসম্ভব/অবাস্তব (noun)", "かもしれません = হয়তো"],
        teachingPoint: "むり একটি noun, তাই だ ছাড়া সরাসরি かもしれません জুড়ে গেছে।",
      },
    ],
    dialogue: [
      { speaker: "A", japanese: "あした しあいが ありますね。かてますか。", reading: "Ashita shiai ga arimasu ne. Katemasu ka.", bengali: "কাল ম্যাচ আছে না। জিততে পারবেন?" },
      { speaker: "B", japanese: "うーん、あいては つよいから、まけるかもしれません。", reading: "Uun, aite wa tsuyoi kara, makeru kamoshiremasen.", bengali: "উম, প্রতিপক্ষ শক্তিশালী তো, হয়তো হেরে যাব।" },
      { speaker: "A", japanese: "でも、がんばれば、かつかもしれませんよ。", reading: "Demo, ganbareba, katsu kamoshiremasen yo.", bengali: "তবে চেষ্টা করলে, হয়তো জিতেও যেতে পারেন।" },
    ],
    practiceScaffolds: [
      { task: "একটি না-বোধক সম্ভাবনা বলুন—কেউ হয়তো আসবে না।", hint: "こない+かもしれません।", model: "かれは こないかもしれません。" },
      { task: "な-adjective দিয়ে একটি সম্ভাবনা বলুন।", hint: "だ বাদ দিতে ভুলবেন না।", model: "そこは しずかかもしれません。" },
      { task: "たぶん যোগ করে একটি sentence-কে আরও নরম করুন।", hint: "たぶん sentence-এর শুরুতে।", model: "たぶん、まにあわないかもしれません。" },
    ],
    answerExplanation:
      "সঠিক উত্তর あした いそがしいかもしれません। いそがしい い-adjective, তাই plain form সরাসরি かもしれません নেয়। いそがしいでかもしれません ভুল কারণ で অপ্রয়োজনীয় particle যোগ করেছে।",
  },

  28: {
    coreIdea:
      "Causative form দিয়ে বোঝানো হয় কর্তা অন্য কাউকে দিয়ে কাজ করাচ্ছে বা করার অনুমতি দিচ্ছে। Group অনুযায়ী conjugation ভিন্ন, আর particle (を/に) নির্ভর করে কতটা 'বাধ্য' বনাম 'অনুমতি' তার ওপর।",
    mentalModel: [
      "せる/させる-কে 'করাই' block ভাবুন: たべる→たべさせる (খাওয়াই)।",
      "Intransitive verb (走る, 泣く)-এ を বসে—জোর করে করানো বোঝায়।",
      "Transitive verb (食べる, 読む)-এ সাধারণত に বসে—অনুমতি/নির্দেশ বোঝায়।",
      "させてください হলো একটি fixed, অত্যন্ত useful pattern—নিজের জন্য অনুমতি চাওয়া।",
    ],
    buildSteps: [
      "Verb-এর group ঠিক করুন: Group1/Group2/irregular।",
      "Group1: ます-stem-এর i-row-কে a-row করে せる: よみます→よませる。",
      "Group2: ます বাদ দিয়ে させる: たべます→たべさせる。",
      "Irregular: します→させる, きます→こさせる।",
      "যাকে করানো হচ্ছে তার particle ঠিক করুন—verb transitive/intransitive দেখে に/を বাছুন।",
    ],
    contrasts: [
      "ভুল: よみさせる (Group1-কে Group2-র মতো ভাবা)। → সঠিক: よませる।",
      "がくせいを はしらせる (জোর করে দৌড়ানো) বনাম がくせいに ほんを よませる (অনুমতি/নির্দেশ দিয়ে পড়ানো)—particle অর্থ বদলায়।",
      "させてください-কে させます থেকে আলাদা রাখুন; ください যোগ হলে এটি নিজের জন্য অনুরোধ হয়ে যায়।",
      "Causative আর causative-passive (Unit 30) গুলিয়ে ফেলবেন না—causative-এ কর্তা করাচ্ছে, causative-passive-এ কর্তা বাধ্য হচ্ছে।",
    ],
    workedSentences: [
      {
        japanese: "コーチは せんしゅに あさ はやく れんしゅうさせます。",
        reading: "Koochi wa senshu ni asa hayaku renshuu sasemasu.",
        bengali: "Coach খেলোয়াড়দের সকালে তাড়াতাড়ি অনুশীলন করান।",
        breakdown: ["コーチは = কোচ topic", "せんしゅに = খেলোয়াড়দের", "れんしゅうさせます = অনুশীলন করান"],
        teachingPoint: "れんしゅうします する-verb, তাই させます আসে। に ব্যবহার হয়েছে কারণ এটি নির্দেশনামূলক, চরম জবরদস্তি নয়।",
      },
      {
        japanese: "すみませんが、きょうは はやく かえらせて いただけますか。",
        reading: "Sumimasen ga, kyou wa hayaku kaerasete itadakemasu ka.",
        bengali: "দুঃখিত, আজ কি একটু তাড়াতাড়ি ফিরতে দেওয়া যাবে?",
        breakdown: ["すみませんが = দুঃখিত", "はやく かえらせて = তাড়াতাড়ি ফিরতে (causative-て)", "いただけますか = পেতে পারি কি (অত্যন্ত বিনয়ী)"],
        teachingPoint: "させてください-এর আরও বিনয়ী রূপ させていただけますか—নিজের জন্য causative অনুমতি চাওয়ার সবচেয়ে polite pattern।",
      },
    ],
    dialogue: [
      { speaker: "A", japanese: "こどもに なにを ならわせていますか。", reading: "Kodomo ni nani o narawasete imasu ka.", bengali: "বাচ্চাকে কী শেখাচ্ছেন (শিখতে দিচ্ছেন)?" },
      { speaker: "B", japanese: "ピアノを ならわせています。", reading: "Piano o narawasete imasu.", bengali: "পিয়ানো শিখতে দিচ্ছি।" },
      { speaker: "A", japanese: "いいですね。じぶんで えらばせたんですか。", reading: "Ii desu ne. Jibun de erabasetan desu ka.", bengali: "ভালো তো। নিজেকেই বেছে নিতে দিয়েছিলেন?" },
    ],
    practiceScaffolds: [
      { task: "একজন parent হিসেবে causative sentence বানান।", hint: "こどもに + V + させます।", model: "こどもに やさいを たべさせます。" },
      { task: "させてください দিয়ে একটি অনুমতি চান।", hint: "V-causative-て + ください।", model: "かんがえさせて ください。" },
      { task: "Intransitive verb-এ を দিয়ে একটি causative sentence বানান।", hint: "はしる, なく ইত্যাদি intransitive verb ব্যবহার করুন।", model: "せんせいは がくせいを たたせました。" },
    ],
    answerExplanation:
      "সঠিক উত্তর せんせいは がくせいを たたせました। たつ (দাঁড়ানো) intransitive verb, তাই যাকে দাঁড় করানো হচ্ছে তার পরে を বসে। たたせました সঠিক causative-past form।",
  },

  29: {
    coreIdea:
      "Passive form দিয়ে subject কাজের কর্তা নয়, বরং কাজের ফল/প্রভাব ভোগ করছে বোঝানো হয়। Japanese-এ 'inconvenience passive' একটি বিশেষ ব্যবহার—কোনো ঘটনায় negatively affected হওয়া বোঝাতে passive ব্যবহার হয়, এমনকি intransitive verb দিয়েও।",
    mentalModel: [
      "Passive-কে 'আমার ওপর ঘটেছে' ভাবুন, 'আমি করেছি' নয়।",
      "যে কাজটি করেছে তার পরে に বসে: せんせいに しかられました।",
      "Inconvenience passive-এ subject না বললেও বোঝা যায় negatively affected—雨に降られました আক্ষরিক 'বৃষ্টির দ্বারা পড়া হয়েছি'।",
      "Object-focused passive-এ (বই লেখা, ছবি আঁকা) কর্তা often বাদ পড়ে, শুধু ফলাফল গুরুত্বপূর্ণ।",
    ],
    buildSteps: [
      "Verb-এর group ঠিক করুন।",
      "Group1: dictionary form-এর u-ending-কে a-row করে れる: よむ→よまれる।",
      "Group2: る বাদ দিয়ে られる: たべる→たべられる।",
      "Irregular: する→される, くる→こられる।",
      "যে কাজ করেছে তার পরে に বসান (কখনো কখনো から/によって, বিশেষত creation-এর ক্ষেত্রে)।",
    ],
    contrasts: [
      "ভুল: よまられる (ভুল group-এর নিয়ম মেশানো)। → সঠিক Group1: よまれる।",
      "しかりました (আমি বকেছি) বনাম しかられました (আমি বকা খেয়েছি)—কর্তা-কর্ম উল্টে গেছে।",
      "সাধারণ fact passive (この えは かかれました) বনাম inconvenience passive (あめに ふられました)—দ্বিতীয়টিতে বিরক্তির ভাব প্রবল।",
      "Passive ও causative-passive (Unit 30) গুলিয়ে ফেলবেন না—passive-এ শুধু প্রভাবিত হওয়া, causative-passive-এ বাধ্য হয়ে কাজ করা।",
    ],
    workedSentences: [
      {
        japanese: "この うたは せかいじゅうで うたわれています。",
        reading: "Kono uta wa sekaijuu de utawarete imasu.",
        bengali: "এই গানটি সারা বিশ্বে গাওয়া হয়।",
        breakdown: ["この うたは = এই গানটি", "せかいじゅうで = সারা বিশ্বে", "うたわれています = গাওয়া হচ্ছে/হয়"],
        teachingPoint: "এখানে passive দিয়ে একটি সাধারণ, ব্যাপকভাবে প্রচলিত fact বলা হয়েছে—কে গায় তা গুরুত্বপূর্ণ নয়।",
      },
      {
        japanese: "でんしゃの なかで となりの ひとに あしを ふまれました。",
        reading: "Densha no naka de tonari no hito ni ashi o fumaremashita.",
        bengali: "ট্রেনে পাশের মানুষের দ্বারা আমার পা মাড়ানো হয়েছে।",
        breakdown: ["でんしゃの なかで = ট্রেনের ভেতরে", "となりの ひとに = পাশের মানুষের দ্বারা", "あしを ふまれました = পা মাড়ানো হয়েছে (বিরক্তিকর)"],
        teachingPoint: "এটি inconvenience passive—speaker-এর body part (あし) affected হয়েছে, তাই negatively-affected ভাব তৈরি হয়েছে।",
      },
    ],
    dialogue: [
      { speaker: "A", japanese: "どうしたんですか。げんきが ないですね。", reading: "Doushitan desu ka. Genki ga nai desu ne.", bengali: "কী হয়েছে? মন খারাপ লাগছে।" },
      { speaker: "B", japanese: "きのう ぶちょうに しかられたんです。", reading: "Kinou buchou ni shikararetan desu.", bengali: "গতকাল বিভাগীয় প্রধানের কাছে বকা খেয়েছি।" },
      { speaker: "A", japanese: "それは たいへんでしたね。", reading: "Sore wa taihen deshita ne.", bengali: "এটা তো কঠিন ছিল।" },
    ],
    practiceScaffolds: [
      { task: "একটি বই/গানের creator-কে passive দিয়ে বলুন।", hint: "N は Person に Vられます।", model: "この ほんは ゆうめいな さっかに かかれました。" },
      { task: "একটি বিরক্তিকর অভিজ্ঞতা inconvenience passive দিয়ে বলুন।", hint: "Weather/person + に + Vられました।", model: "きのう あめに ふられました。" },
      { task: "Group1 ও Group2-এর একটি করে passive verb লিখুন।", hint: "よむ→よまれる; みる→みられる।", model: "よまれる · みられる" },
    ],
    answerExplanation:
      "সঠিক উত্তর わたしは あめに ふられました। এটি inconvenience passive—বৃষ্টির কারণে speaker negatively affected হয়েছে, তাই ふる-এর passive form ふられました এবং あめ-এর পরে に বসেছে।",
  },

  30: {
    coreIdea:
      "Causative-passive দিয়ে বোঝানো হয় subject কাউকে দিয়ে কিছু করতে বাধ্য হয়েছে—নিজের ইচ্ছায় নয়। এটি causative ও passive-এর মিশ্রণ, তাই প্রায়ই reluctance/অনিচ্ছার ভাব বহন করে।",
    mentalModel: [
      "Causative-passive-কে 'বাধ্য হয়ে করেছি' ভাবুন—causative (করানো) + passive (তার শিকার হওয়া)।",
      "Group1-এ সংক্ষিপ্ত される form সাধারণ কথ্য ভাষায় বেশি শোনা যায়: のむ→のまされる।",
      "Group2-তে させられる: たべる→たべさせられる, ছোট করার সুযোগ কম।",
      "যিনি বাধ্য করেছেন তার পরে に বসে—causative-এর মতোই।",
    ],
    buildSteps: [
      "প্রথমে causative form বানান: のむ→のませる।",
      "তারপর সেটিকে passive-এ নিন: のませる→のませられる।",
      "Group1-এ সংক্ষিপ্ত করা যায়: のませられる→のまされる।",
      "Group2-তে সংক্ষিপ্ত করা হয় না, させられる-ই থাকে।",
      "যিনি বাধ্য করেছেন তাকে に দিয়ে চিহ্নিত করুন।",
    ],
    contrasts: [
      "たべさせました (আমি খাওয়ালাম) বনাম たべさせられました (আমাকে খেতে বাধ্য করা হলো)—দিক সম্পূর্ণ উল্টো।",
      "ভুল: のまさせられる (ভুল সংক্ষিপ্তকরণ)। → সঠিক সংক্ষিপ্ত: のまされる, পূর্ণ: のませられる।",
      "Voluntary action-এ এই form ব্যবহার করলে অস্বাভাবিক শোনায়—এটি সাধারণত অনিচ্ছার জন্য।",
      "Group2 verb-এ সংক্ষিপ্তকরণ হয় না (たべさせられる-ই থাকে, たべされる ভুল)।",
    ],
    workedSentences: [
      {
        japanese: "むすこは がっこうで さくぶんを かかされました。",
        reading: "Musuko wa gakkou de sakubun o kakasaremashita.",
        bengali: "ছেলেকে স্কুলে রচনা লিখতে বাধ্য করা হয়েছিল।",
        breakdown: ["むすこは = ছেলে subject/victim", "がっこうで = স্কুলে", "さくぶんを かかされました = রচনা লিখতে বাধ্য হয়েছিল"],
        teachingPoint: "かく Group1, সংক্ষিপ্ত causative-passive form かかされる—স্কুলের নির্দেশে বাধ্য হয়ে করা কাজ বোঝাচ্ছে।",
      },
      {
        japanese: "かいぎで、むりに いけんを いわされました。",
        reading: "Kaigi de, muri ni iken o iwasaremashita.",
        bengali: "Meeting-এ জোর করে মতামত বলতে বাধ্য করা হয়েছিল।",
        breakdown: ["かいぎで = Meeting-এ", "むりに = জোরপূর্বক", "いけんを いわされました = মতামত বলতে বাধ্য হয়েছিল"],
        teachingPoint: "いう Group1, সংক্ষিপ্ত রূপ いわされる। むりに যোগ করে অনিচ্ছার ভাব আরও স্পষ্ট হয়েছে।",
      },
    ],
    dialogue: [
      { speaker: "A", japanese: "きのうの のみかい、どうでしたか。", reading: "Kinou no nomikai, dou deshita ka.", bengali: "গতকালের পার্টি কেমন ছিল?" },
      { speaker: "B", japanese: "たのしかったですが、せんぱいに たくさん のまされました。", reading: "Tanoshikatta desu ga, senpai ni takusan nomasaremashita.", bengali: "মজার ছিল, তবে সিনিয়রের চাপে অনেক খেতে বাধ্য হয়েছিলাম।" },
      { speaker: "A", japanese: "それは たいへんでしたね。", reading: "Sore wa taihen deshita ne.", bengali: "এটা তো কঠিন ছিল।" },
    ],
    practiceScaffolds: [
      { task: "ছোটবেলার একটি বাধ্যতামূলক অভিজ্ঞতা বলুন।", hint: "こどものとき + V-causative-passive-た।", model: "こどものとき、ピアノを れんしゅうさせられました。" },
      { task: "Group1-এর একটি সংক্ষিপ্ত causative-passive form লিখুন।", hint: "のむ→のまされる।", model: "のまされる" },
      { task: "Workplace-এর একটি অনিচ্ছাকৃত কাজ বলুন।", hint: "おそくまで + させられました।", model: "おそくまで しごとを させられました。" },
    ],
    answerExplanation:
      "সঠিক উত্তর こどものとき、やさいを たべさせられました। たべる Group2, causative-passive form たべさせられました—ছোটবেলায় অনিচ্ছাসত্ত্বেও সবজি খেতে বাধ্য হওয়ার ভাব বহন করছে।",
  },

  31: {
    coreIdea:
      "ば conditional একটি নিজস্ব verb-form পরিবর্তন দিয়ে তৈরি হয় এবং সাধারণত general truth, advice বা natural consequence বোঝাতে সবচেয়ে স্বাভাবিক—result-এ command/request থাকলে たら/と বেশি নিরাপদ।",
    mentalModel: [
      "ば-কে 'if-then' formula ভাবুন, তবে result-টা predictable/general হতে হবে।",
      "Group1: u→e+ば (よむ→よめば); Group2: る→れば (たべる→たべれば)।",
      "い-adjective: い→ければ (たかい→たかければ)।",
      "な-adjective/noun-এ ば নয়, なら বসে—এটি ব্যতিক্রম হিসেবে মনে রাখুন।",
    ],
    buildSteps: [
      "Verb-এর group নির্ধারণ করুন।",
      "Group1-এ শেষ u-row-কে e-row করে ば যোগ করুন।",
      "Group2-তে る বাদ দিয়ে れば যোগ করুন।",
      "い-adjective-এ い বাদ দিয়ে ければ যোগ করুন।",
      "Result clause-এ command/request থাকলে たら বিবেচনা করুন, general advice হলে ば রাখুন।",
    ],
    contrasts: [
      "ভুল: よまば (u→a করা, causative-এর নিয়ম ভুল করে বসানো)। → সঠিক: よめば।",
      "あめが ふれば、いえに います (general/habitual) বনাম あめが ふったら、でんわしてください (specific request)—দুটোই সঠিক, প্রসঙ্গ আলাদা।",
      "ভুল: しずかければ। → সঠিক: しずかなら। な-adjective-এ ければ নয়, なら বসে।",
      "ば দিয়ে অতীতের ঘটনা বলা যায় না—এটি সবসময় hypothetical/general।",
    ],
    workedSentences: [
      {
        japanese: "きっぷが なければ、なかに はいれません。",
        reading: "Kippu ga nakereba, naka ni hairemasen.",
        bengali: "টিকিট না থাকলে, ভেতরে প্রবেশ করা যায় না।",
        breakdown: ["きっぷが なければ = টিকিট না থাকলে", "なかに = ভেতরে", "はいれません = প্রবেশ করা যায় না"],
        teachingPoint: "ある-এর negative ない একটি い-adjective-এর মতো conjugate হয়, তাই なければ—এটি একটি general rule বোঝাচ্ছে।",
      },
      {
        japanese: "この ボタンを おせば、おとが おおきく なります。",
        reading: "Kono botan o oseba, oto ga ookiku narimasu.",
        bengali: "এই button চাপলে, শব্দ বড় হয়ে যায়।",
        breakdown: ["この ボタンを おせば = এই button চাপলে", "おとが = শব্দ", "おおきく なります = বড় হয়ে যায়"],
        teachingPoint: "押す Group1, u→e হয়ে おせば। Machine operation-এর মতো predictable result-এ ば খুবই স্বাভাবিক।",
      },
    ],
    dialogue: [
      { speaker: "A", japanese: "どうすれば、にほんごが じょうずに なりますか。", reading: "Dou sureba, nihongo ga jouzu ni narimasu ka.", bengali: "কী করলে Japanese-এ দক্ষ হওয়া যাবে?" },
      { speaker: "B", japanese: "まいにち れんしゅうすれば、じょうずに なりますよ。", reading: "Mainichi renshuu sureba, jouzu ni narimasu yo.", bengali: "প্রতিদিন অনুশীলন করলে দক্ষ হয়ে যাবেন।" },
      { speaker: "A", japanese: "そうですか。がんばります。", reading: "Sou desu ka. Ganbarimasu.", bengali: "তাই তো। চেষ্টা করব।" },
    ],
    practiceScaffolds: [
      { task: "একটি general truth ば দিয়ে বলুন।", hint: "Group1/Group2 conjugation মনে রাখুন।", model: "はやく おきれば、じかんが あります。" },
      { task: "な-adjective-এর জন্য なら দিয়ে একটি sentence বানান।", hint: "ば নয়, なら।", model: "ひまなら、てつだって ください。" },
      { task: "い-adjective-এর ば-form দিয়ে একটি sentence লিখুন।", hint: "い→ければ।", model: "やすければ、かいます。" },
    ],
    answerExplanation:
      "সঠিক উত্তর れんしゅうすれば、じょうずになります। する Group3-এর মতো হলেও practically する→すれば নিয়মে ば-form হয়; এটি একটি general truth/advice, তাই ば সবচেয়ে স্বাভাবিক।",
  },

  32: {
    coreIdea:
      "のに প্রত্যাশার বিপরীত ফলাফল বলে, এবং প্রায়ই হতাশা বা বিস্ময়ের emotional tone বহন করে—ても-র চেয়ে বেশি personal reaction যুক্ত।",
    mentalModel: [
      "のに-কে 'তবুও...' এর আবেগঘন সংস্করণ ভাবুন—শুধু logic নয়, অনুভূতিও আছে।",
      "Plain form সরাসরি のに নেয়; な-adjective/noun-এ な যোগ হয়ে なのに হয়।",
      "…のに！ দিয়ে বাক্য অসম্পূর্ণ রেখে একটি soft complaint তৈরি করা যায়।",
      "のに সবসময় একটি নির্দিষ্ট, ঘটে যাওয়া/সত্য ঘটনা নিয়ে ব্যবহার হয়—ても-র মতো hypothetical-এও চলে না।",
    ],
    buildSteps: [
      "প্রথম clause-এ প্রত্যাশা তৈরি করুন (যেমন 'অনেক পড়াশোনা করেছি')।",
      "দ্বিতীয় clause-এ তার বিপরীত ফলাফল দিন (যেমন 'ফেল করেছি')।",
      "Verb/い-adjective plain-এর পরে সরাসরি のに বসান।",
      "な-adjective/noun-এ な যোগ করে なのに বসান।",
      "Emotional emphasis দিতে চাইলে বাক্য のに-তে অসম্পূর্ণ রেখে দিন।",
    ],
    contrasts: [
      "ভুল: しずかのに। → সঠিক: しずかなのに। な-adjective-এ な প্রয়োজন।",
      "たかいのに、かいました (দামি তবুও কিনেছি—বিস্ময়/স্বীকারোক্তি) বনাম たかくても、かいます (দামি হলেও কিনব—decision, ভবিষ্যৎ)।",
      "のに দিয়ে ভবিষ্যতের নিজের ইচ্ছাধীন কাজ বলা অস্বাভাবিক—এটি সাধারণত ঘটে যাওয়া/সত্য বিষয়ে।",
      "ても neutral concession; のに-তে হতাশা/অভিযোগের সুর স্পষ্ট থাকে।",
    ],
    workedSentences: [
      {
        japanese: "たかい おかねを はらったのに、サービスが わるかったです。",
        reading: "Takai okane o harattanoni, saabisu ga warukatta desu.",
        bengali: "অনেক টাকা দিয়েছি, তবুও service খারাপ ছিল।",
        breakdown: ["たかい おかねを はらったのに = অনেক টাকা দিয়েও", "サービスが = service", "わるかったです = খারাপ ছিল"],
        teachingPoint: "はらった (দিয়েছি, past) এর পরে のに বসে প্রত্যাশা-বিপরীত ফলাফল তৈরি করেছে—hতাশার ভাব স্পষ্ট।",
      },
      {
        japanese: "げんきなのに、びょういんへ いきました。",
        reading: "Genki nanoni, byouin e ikimashita.",
        bengali: "ভালো থাকা সত্ত্বেও, hospital-এ গিয়েছিলাম।",
        breakdown: ["げんきなのに = ভালো থাকা সত্ত্বেও (な-adjective)", "びょういんへ = hospital-এ", "いきました = গিয়েছিলাম"],
        teachingPoint: "げんき な-adjective, তাই のに-এর আগে な যোগ হয়েছে।",
      },
    ],
    dialogue: [
      { speaker: "A", japanese: "やくそくの じかんに きませんでしたね。", reading: "Yakusoku no jikan ni kimasen deshita ne.", bengali: "নির্ধারিত সময়ে আসেননি তো।" },
      { speaker: "B", japanese: "すみません。はやく でたのに、みちが こんでいたんです。", reading: "Sumimasen. Hayaku deta noni, michi ga konde itan desu.", bengali: "দুঃখিত। তাড়াতাড়ি বের হয়েও, রাস্তায় জ্যাম ছিল।" },
      { speaker: "A", japanese: "そうでしたか。しかたないですね。", reading: "Sou deshita ka. Shikatanai desu ne.", bengali: "ও তাই? তাহলে কিছু করার নেই।" },
    ],
    practiceScaffolds: [
      { task: "একটি হতাশাজনক surprise moment のに দিয়ে বলুন।", hint: "V-plain-past + のに।", model: "たくさん れんしゅうしたのに、まけました。" },
      { task: "একটি অসম্পূর্ণ complaint sentence বানান।", hint: "…のに！ দিয়ে থামিয়ে দিন।", model: "せっかく きたのに！" },
      { task: "ても এবং のに দিয়ে একই বিষয়ে দুইটি বাক্য লিখুন।", hint: "Concession neutral বনাম emotional।", model: "たかくても、かいます。／たかいのに、かいました。" },
    ],
    answerExplanation:
      "সঠিক উত্তর やくそくしたのに、きませんでした। やくそくした (প্রতিশ্রুতি দিয়েছিল, plain past) এর পরে のに বসে প্রত্যাশা-বিপরীত ফলাফল (আসেননি) দেখাচ্ছে—হতাশার ভাব সহ।",
  },

  33: {
    coreIdea:
      "Volitional form নিজের সংকল্প বা কাউকে প্রস্তাব দেওয়ার casual উপায়, আর つもりです তার চেয়ে বেশি formal, স্পষ্ট পরিকল্পনা বোঝায়।",
    mentalModel: [
      "Volitional-কে ましょう-এর plain/casual counterpart ভাবুন।",
      "একা বললে নিজের সংকল্প (がんばろう), কাউকে বললে প্রস্তাব (いこう = চলো যাই)।",
      "つもりです সবসময় dictionary form নেয়, এবং negative plan-এ つもりは ありません।",
      "Volitional+と おもいます একসঙ্গে বললে নিজের সংকল্প আরও নরম/বিনয়ী শোনায়।",
    ],
    buildSteps: [
      "Verb-এর group নির্ধারণ করুন।",
      "Group1: u→o+う (よむ→よもう)।",
      "Group2: る→よう (たべる→たべよう)।",
      "Irregular: する→しよう, くる→こよう।",
      "Formal plan বোঝাতে dictionary form + つもりです ব্যবহার করুন।",
    ],
    contrasts: [
      "ভুল: よみよう (Group1-কে ভুল নিয়মে বদলানো)। → সঠিক: よもう।",
      "いこうと おもいます (soft, নিজের সংকল্প) বনাম いく つもりです (formal, স্পষ্ট plan)।",
      "つもりでした ব্যবহার করলে বোঝা যায় পরিকল্পনা ছিল কিন্তু বদলে গেছে/হয়নি।",
      "Volitional form সরাসরি কাউকে order দিলে অনুপযুক্ত শোনাতে পারে; প্রস্তাব হিসেবে ব্যবহার করাই স্বাভাবিক।",
    ],
    workedSentences: [
      {
        japanese: "こんかいは しっぱいしたけど、つぎは がんばろうと おもいます。",
        reading: "Konkai wa shippai shita kedo, tsugi wa ganbarou to omoimasu.",
        bengali: "এবার ব্যর্থ হয়েছি, কিন্তু পরের বার চেষ্টা করব বলে ভাবছি।",
        breakdown: ["こんかいは しっぱいしたけど = এবার ব্যর্থ হয়েছি যদিও", "つぎは = পরের বার", "がんばろうと おもいます = চেষ্টা করব বলে ভাবছি"],
        teachingPoint: "がんばろう volitional form, এর পরে とおもいます জুড়ে নিজের সংকল্প নরমভাবে প্রকাশ করা হয়েছে।",
      },
      {
        japanese: "しごとを やめて、じぶんの みせを ひらく つもりです。",
        reading: "Shigoto o yamete, jibun no mise o hiraku tsumori desu.",
        bengali: "চাকরি ছেড়ে, নিজের দোকান খোলার পরিকল্পনা আছে।",
        breakdown: ["しごとを やめて = চাকরি ছেড়ে", "じぶんの みせを ひらく = নিজের দোকান খোলা", "つもりです = পরিকল্পনা আছে"],
        teachingPoint: "ひらく dictionary form-এর পরে সরাসরি つもりです বসে একটি স্পষ্ট, formal পরিকল্পনা বোঝাচ্ছে।",
      },
    ],
    dialogue: [
      { speaker: "A", japanese: "しゅうまつ、なにか よていが ありますか。", reading: "Shuumatsu, nanika yotei ga arimasu ka.", bengali: "সপ্তাহান্তে কোনো পরিকল্পনা আছে?" },
      { speaker: "B", japanese: "とくに ないです。ゆっくり やすもうと おもっています。", reading: "Tokuni nai desu. Yukkuri yasumou to omotte imasu.", bengali: "বিশেষ কিছু না। আরামে বিশ্রাম নেব বলে ভাবছি।" },
      { speaker: "A", japanese: "いいですね。わたしも そうする つもりです。", reading: "Ii desu ne. Watashi mo sou suru tsumori desu.", bengali: "ভালো তো। আমারও তাই করার পরিকল্পনা।" },
    ],
    practiceScaffolds: [
      { task: "নিজের একটি সংকল্প volitional form দিয়ে বলুন।", hint: "Group ঠিক করে volitional বানান।", model: "らいねんから、まいにち はしろうと おもいます。" },
      { task: "একটি formal plan つもりです দিয়ে বলুন।", hint: "V-dictionary + つもりです।", model: "らいげつ、ひっこす つもりです。" },
      { task: "কাউকে volitional form দিয়ে প্রস্তাব দিন।", hint: "いっしょに + V-volitional。", model: "いっしょに でかけよう。" },
    ],
    answerExplanation:
      "সঠিক উত্তর らいねん、りゅうがくする つもりです। する dictionary form-এর পরে সরাসরি つもりです বসে একটি স্পষ্ট, formal পরিকল্পনা প্রকাশ করেছে।",
  },

  34: {
    coreIdea:
      "尊敬語 অন্যের কাজকে সম্মান দেখিয়ে বলে—নিজের কাজে কখনো ব্যবহার হয় না। কিছু verb-এর সম্পূর্ণ আলাদা special form আছে, বাকিগুলোতে general お…になる pattern ব্যবহার হয়।",
    mentalModel: [
      "尊敬語 সবসময় 'অন্যের দিকে' নির্দেশ করে—senior, customer, teacher।",
      "Special verb আগে চেক করুন (いらっしゃる, なさる, めしあがる, おっしゃる); না থাকলে general pattern।",
      "General pattern: お + ます-stem + になる—よみます→およみになる।",
      "する-verb-এর keigo প্রায়ই なさる ব্যবহার করে: べんきょうなさいます।",
    ],
    buildSteps: [
      "প্রথমে verb-টির special sonkeigo form আছে কি না চেক করুন।",
      "থাকলে সেটাই ব্যবহার করুন: いく/くる/いる→いらっしゃる।",
      "না থাকলে general pattern নিন: お + stem + になる।",
      "する-verb-এ なさる ব্যবহার করুন: れんらくなさいます।",
      "Passive form (られる)-ও হালকা সম্মান বোঝাতে ব্যবহার করা যায়, বিশেষত business context-এ।",
    ],
    contrasts: [
      "ভুল: いきます-কে সরাসরি おいきになります করা যখন special form いらっしゃる আছে। → いらっしゃいます বেশি natural।",
      "尊敬語 নিজের কাজে ব্যবহার করা সবচেয়ে common ভুল—それ অন্যের জন্য সংরক্ষিত।",
      "なさいます (します-এর keigo) বনাম いたします (します-এর humble, Unit 35)—উল্টে ফেলা যাবে না।",
      "お + Group2 verb-stem-এর ক্ষেত্রেও pattern একই থাকে: たべる→おたべになる (যদিও めしあがる বেশি common)।",
    ],
    workedSentences: [
      {
        japanese: "せんせいは あした がっこうへ いらっしゃいますか。",
        reading: "Sensei wa ashita gakkou e irasshaimasu ka.",
        bengali: "শিক্ষক কি আগামীকাল স্কুলে আসবেন?",
        breakdown: ["せんせいは = শিক্ষক topic", "がっこうへ = স্কুলে", "いらっしゃいますか = আসবেন কি (সম্মানসূচক)"],
        teachingPoint: "いく/くる উভয়ের sonkeigo-ই いらっしゃる—context থেকে অর্থ বোঝা যায়।",
      },
      {
        japanese: "ぶちょうは この メールを もう ごらんに なりましたか。",
        reading: "Buchou wa kono meeru o mou goran ni narimashita ka.",
        bengali: "বিভাগীয় প্রধান কি এই email ইতিমধ্যে দেখেছেন?",
        breakdown: ["ぶちょうは = বিভাগীয় প্রধান topic", "メールを = email-টি", "ごらんに なりましたか = দেখেছেন কি (みる-এর special sonkeigo)"],
        teachingPoint: "みる-এর special sonkeigo ごらんになる—お…になる pattern-এর একটি বিশেষ variant।",
      },
    ],
    dialogue: [
      { speaker: "A", japanese: "しゃちょうは いま おへやに いらっしゃいますか。", reading: "Shachou wa ima oheya ni irasshaimasu ka.", bengali: "President এখন কি ঘরে আছেন?" },
      { speaker: "B", japanese: "はい、いらっしゃいます。どうぞ おはいりください。", reading: "Hai, irasshaimasu. Douzo ohairi kudasai.", bengali: "হ্যাঁ, আছেন। দয়া করে প্রবেশ করুন।" },
      { speaker: "A", japanese: "ありがとうございます。しつれいします。", reading: "Arigatou gozaimasu. Shitsurei shimasu.", bengali: "ধন্যবাদ। মাফ করবেন (ঢুকছি)।" },
    ],
    practiceScaffolds: [
      { task: "いく/くる/いる-এর sonkeigo form দিয়ে একটি প্রশ্ন করুন।", hint: "いらっしゃる ব্যবহার করুন।", model: "せんせいは もう いらっしゃいましたか。" },
      { task: "お…になる pattern দিয়ে একটি sentence বানান।", hint: "V-stem + になる।", model: "しゃちょうは もう おかえりに なりました。" },
      { task: "たべる/のむ-এর special sonkeigo দিয়ে একটি প্রশ্ন করুন।", hint: "めしあがる।", model: "なにを めしあがりますか。" },
    ],
    answerExplanation:
      "সঠিক উত্তর せんせいは なんと おっしゃいましたか। いう-এর special sonkeigo form おっしゃる—শিক্ষকের কথাকে সম্মান দেখিয়ে বলা হয়েছে। もうします হলো humble form (Unit 35), এখানে ভুল হবে।",
  },

  35: {
    coreIdea:
      "謙譲語 নিজের (বা নিজের দলের) কাজকে বিনয়ীভাবে বলে, যাতে শ্রোতার প্রতি সম্মান প্রকাশ পায়—尊敬語-এর ঠিক বিপরীত দিক, কিন্তু লক্ষ্য একই: বিনয়।",
    mentalModel: [
      "謙譲語 সবসময় 'নিজের দিকে' নির্দেশ করে—নিজের কাজকে ছোট/বিনীত করে বলা।",
      "Special verb আগে চেক করুন (まいる, おる, いたす, もうす, いただく); না থাকলে general pattern।",
      "General pattern: お + ます-stem + する—おまちする (বিনীতভাবে অপেক্ষা করা)।",
      "させていただきます হলো সবচেয়ে বিনয়ী অনুমতি-প্রকাশ, business email-এ খুবই common।",
    ],
    buildSteps: [
      "নিজের/নিজের দলের কাজটি চিহ্নিত করুন।",
      "Special humble form আছে কি না চেক করুন: いく/くる→まいる, いる→おる, する→いたす।",
      "না থাকলে general pattern নিন: お + stem + する।",
      "する-verb-এ いたす ব্যবহার করুন: れんらくいたします।",
      "অত্যন্ত বিনয়ী অনুমতি প্রকাশে させていただきます ব্যবহার করুন।",
    ],
    contrasts: [
      "ভুল: せんせいが もうしました (অন্যের কাজে 謙譲語)। → সঠিক: せんせいが おっしゃいました (尊敬語)।",
      "いきます (neutral) → まいります (বিনয়ী, নিজের কাজ) → いらっしゃいます (সম্মানসূচক, অন্যের কাজ)—তিন স্তর মনে রাখুন।",
      "おまちします (আমি অপেক্ষা করব, বিনীতভাবে) বনাম おまちください (আপনি অপেক্ষা করুন, সম্মানসূচক)—направление উল্টো।",
      "謙譲語-তে কখনো নিজের নামের সঙ্গে さん/様 যোগ করবেন না—এটি অসঙ্গতিপূর্ণ শোনাবে।",
    ],
    workedSentences: [
      {
        japanese: "わたくしが しりょうを ごせつめい いたします。",
        reading: "Watakushi ga shiryou o gosetsumei itashimasu.",
        bengali: "আমি documents ব্যাখ্যা করে দেব (বিনীতভাবে)।",
        breakdown: ["わたくしが = আমি (অত্যন্ত বিনয়ী 'আমি')", "しりょうを = documents", "ごせつめい いたします = ব্যাখ্যা করব (বিনীতভাবে)"],
        teachingPoint: "せつめいします-এর হুম্বল রূপ ご+noun+いたします; わたくし わたし-এর চেয়ে বেশি formal।",
      },
      {
        japanese: "また あした、こちらから ごれんらく させて いただきます。",
        reading: "Mata ashita, kochira kara gorenraku sasete itadakimasu.",
        bengali: "কাল আবার, আমাদের পক্ষ থেকে যোগাযোগ করব (অত্যন্ত বিনীতভাবে)।",
        breakdown: ["また あした = আবার আগামীকাল", "こちらから = আমাদের পক্ষ থেকে", "ごれんらく させて いただきます = যোগাযোগ করব (অত্যন্ত বিনয়ী causative+receiving)"],
        teachingPoint: "させていただきます literally 'করতে দেওয়ার সুযোগ পাচ্ছি'—business Japanese-এ অত্যন্ত common closing pattern।",
      },
    ],
    dialogue: [
      { speaker: "A", japanese: "おなまえを うかがっても よろしいですか。", reading: "Onamae o ukagatte mo yoroshii desu ka.", bengali: "আপনার নাম জিজ্ঞেস করতে পারি কি?" },
      { speaker: "B", japanese: "はい、たなかと もうします。", reading: "Hai, tanaka to moushimasu.", bengali: "হ্যাঁ, আমার নাম তানাকা (বিনীতভাবে)।" },
      { speaker: "A", japanese: "たなかさまですね。しょうしょう おまちください。", reading: "Tanaka-sama desu ne. Shoushou omachi kudasai.", bengali: "তানাকা-সামা, তাই তো। একটু অপেক্ষা করুন দয়া করে।" },
    ],
    practiceScaffolds: [
      { task: "নিজের পরিচয় もうします দিয়ে দিন।", hint: "わたしは…と もうします।", model: "わたしは アリと もうします。" },
      { task: "একটি business email-এর closing line লিখুন।", hint: "させていただきます ব্যবহার করুন।", model: "らいしゅう、ごれんらく させて いただきます。" },
      { task: "いく-এর 尊敬語 ও 謙譲語 দুটোই লিখুন।", hint: "いらっしゃる বনাম まいる।", model: "いらっしゃいます (尊敬語) ／ まいります (謙譲語)" },
    ],
    answerExplanation:
      "সঠিক উত্তর わたしは たなかと もうします। いう-এর humble form もうす—নিজের নাম বলার সময় বিনয়ীভাবে ব্যবহার করা হয়। おっしゃいます/いらっしゃいます অন্যের কাজের জন্য, এখানে ভুল হবে।",
  },
};
