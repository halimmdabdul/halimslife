import type { UnitDeepDive } from "./minna-n5-deep-dive-types";

export const minnaDeepDives2: Record<number, UnitDeepDive> = {
  13: {
    coreIdea:
      "এই unit-এ ‘চাই’ তিনভাবে আলাদা করতে শিখবেন: কোনো জিনিস চাইলে ほしい, কোনো কাজ করতে চাইলে verb-এর ます-এর আগের অংশ + たい, আর কোনো কাজের উদ্দেশ্যে কোথাও গেলে সেই অংশ + に + movement verb। আগে ঠিক করুন—আপনি জিনিস চাইছেন, কাজ করতে চাইছেন, নাকি কাজটি করতে কোথাও যাচ্ছেন।",
    mentalModel: [
      "জিনিসের দিকে ইশারা: N が ほしいです = N-টি চাই। এখানে が চাওয়া জিনিসটিকে চিহ্নিত করে।",
      "কাজের দিকে ইশারা: たべます থেকে ます বাদ দিয়ে たべ + たいです = খেতে চাই। এই ます-এর আগের অংশটিই verb stem।",
      "গন্তব্য + উদ্দেশ্য: としょかんへ [べんきょうし] に いきます = library-তে [পড়ার] জন্য যাই। に এখানে উদ্দেশ্য দেখায়।",
      "নিজের ইচ্ছা সরাসরি বলা যায়। অপরিচিত তৃতীয় ব্যক্তির মনের ইচ্ছা নিশ্চিতভাবে たいです বলে দেওয়া এ পর্যায়ে এড়িয়ে চলুন।",
      "たい-এর negative করতে い-adjective-এর মতো たくない বসে: たべたくないです = খেতে চাই না।",
    ],
    buildSteps: [
      "প্রথমে বাংলা ভাবটি ধরুন: ‘বই চাই’—এটি জিনিস; তাই N が ほしいです নিন।",
      "‘বই পড়তে চাই’—এটি কাজ; よみます থেকে ます বাদ দিন: よみ + たいです。",
      "たい-কে い-adjective-এর মতো বদলান: よみたいです, よみたくないです, よみたかったです。",
      "‘বই পড়তে library-তে যাই’ হলে গন্তব্যে へ/に দিন এবং কাজটির stem-এর পরে উদ্দেশ্যের に দিন।",
      "する-verb হলে します থেকে ます বাদ যায়: べんきょうします → べんきょうし → べんきょうしに いきます。",
      "‘করতে চাই না’ বলতে たい-কে たくない করুন: いきたくないです。",
      "শেষে particle পরীক্ষা করুন: চাওয়া জিনিস + が; করতে চাওয়া কাজের object + を; destination + へ/に; purpose + に。",
    ],
    contrasts: [
      "ভুল: ほんを ほしいです। → ঠিক: ほんが ほしいです। কারণ ほしい-এর লক্ষ্য beginner pattern-এ が নেয়।",
      "ভুল: たべますたいです。 → ঠিক: たべたいです। たい যোগ করার আগে ます বাদ দিতে হয়।",
      "ভুল: えいがを みるに いきます。 → ঠিক: えいがを みに いきます। উদ্দেশ্যের に-এর আগে dictionary form নয়, stem লাগে।",
      "ほしいです = একটি জিনিস চাই; Vたいです = একটি কাজ করতে চাই—দুইটিকে একই pattern ভাববেন না।",
      "ভুল: いきたいませんでした。 → ঠিক: いきたくなかったです। たい নিজেই adjective-এর মতো conjugate হয়; ません/でした সরাসরি জোড়া লাগে না।",
    ],
    workedSentences: [
      {
        japanese: "旅行のために、小さいかばんがほしいです。",
        reading: "Ryokou no tame ni, chiisai kaban ga hoshii desu.",
        bengali: "ভ্রমণের জন্য একটি ছোট ব্যাগ চাই।",
        breakdown: [
          "旅行（りょこう / ryokou）= ভ্রমণ",
          "のために (no tame ni) = জন্য",
          "小さいかばん (chiisai kaban) = ছোট ব্যাগ",
          "が (ga) = চাওয়া জিনিসটিকে চিহ্নিত করছে",
          "ほしいです (hoshii desu) = চাই",
        ],
        teachingPoint:
          "চাওয়া বস্তুটি かばん, তাই তার পরে が। 小さい সরাসরি noun-এর আগে বসে ব্যাগটি কেমন তা বলেছে।",
      },
      {
        japanese: "土曜日、駅へ友達を迎えに行きます。",
        reading: "Doyoubi, eki e tomodachi o mukae ni ikimasu.",
        bengali: "শনিবার বন্ধুকে নিতে station-এ যাব।",
        breakdown: [
          "土曜日（どようび / doyoubi）= শনিবার",
          "駅へ (eki e) = station-এর দিকে/তে",
          "友達を (tomodachi o) = বন্ধুকে (কাজের object)",
          "迎えに (mukae ni) = নিতে; 迎えます-এর stem + উদ্দেশ্যের に",
          "行きます (ikimasu) = যাই/যাব",
        ],
        teachingPoint:
          "গন্তব্য 駅へ এবং যাওয়ার উদ্দেশ্য 迎えに—একই sentence-এ দুইটি আলাদা সম্পর্ক দেখানো হয়েছে।",
      },
      {
        japanese: "今日は疲れましたから、どこも行きたくないです。",
        reading: "Kyou wa tsukaremashita kara, doko mo ikitakunai desu.",
        bengali: "আজ ক্লান্ত লাগছে বলে কোথাও যেতে চাই না।",
        breakdown: [
          "今日は (kyou wa) = আজকের বিষয়ে",
          "疲れましたから (tsukaremashita kara) = ক্লান্ত হয়েছি বলে; কারণ",
          "どこも (doko mo) = কোথাও (না)",
          "行きたくないです (ikitakunai desu) = যেতে চাই না; たい-এর negative",
        ],
        teachingPoint:
          "たい-কে negative করতে い-adjective-এর নিয়ম অনুসরণ করে たくない বসে; ません/でした সরাসরি যোগ করলে ভুল হবে।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "休みに何をしたいですか。",
        reading: "Yasumi ni nani o shitai desu ka.",
        bengali: "ছুটিতে কী করতে চান?",
      },
      {
        speaker: "B",
        japanese: "海を見たいです。",
        reading: "Umi o mitai desu.",
        bengali: "সমুদ্র দেখতে চাই।",
      },
      {
        speaker: "A",
        japanese: "じゃ、日曜日に海へ写真を撮りに行きましょう。",
        reading: "Ja, nichiyoubi ni umi e shashin o tori ni ikimashou.",
        bengali: "তাহলে রবিবার সমুদ্রে ছবি তুলতে চলুন।",
      },
      {
        speaker: "B",
        japanese: "写真じゃなくて、泳ぎたいです。",
        reading: "Shashin ja nakute, oyogitai desu.",
        bengali: "ছবি না, আমি সাঁতার কাটতে চাই।",
      },
      {
        speaker: "A",
        japanese: "いいですね。じゃ、泳ぎに行きましょう。",
        reading: "Ii desu ne. Ja, oyogi ni ikimashou.",
        bengali: "চমৎকার। তাহলে সাঁতার কাটতে চলুন।",
      },
    ],
    practiceScaffolds: [
      {
        task: "আপনার এখন দরকার এমন একটি জিনিস দিয়ে N が ほしいです বাক্য বানান।",
        hint: "[জিনিস] + が + ほしいです; জিনিসটির আগে একটি adjective যোগ করতে পারেন。",
        model: "あたらしい じてんしゃが ほしいです。— নতুন bicycle চাই।",
      },
      {
        task: "আপনি আজ কী করতে চান তা Vたいです দিয়ে লিখুন।",
        hint: "Verb-এর ます বাদ দিয়ে たいです যোগ করুন: のみます → のみたいです。",
        model: "きょうは うちで やすみたいです。— আজ বাসায় বিশ্রাম নিতে চাই।",
      },
      {
        task: "একটি destination, একটি object এবং একটি purpose দিয়ে পূর্ণ বাক্য লিখুন।",
        hint: "Place へ + Object を + V-stem に + いきます。",
        model: "スーパーへ やさいを かいに いきます。— সবজি কিনতে supermarket-এ যাই।",
      },
      {
        task: "‘আজ কোথাও যেতে চাই না’ たい-এর negative form দিয়ে লিখুন।",
        hint: "どこも + verb stem + たくないです。",
        model: "今日はどこも行きたくないです。",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「としょかんへ べんきょうしに いきます。」। べんきょうします থেকে ます বাদ দিলে stem হয় べんきょうし; তার পরে উদ্দেশ্যের に এবং শেষে いきます বসে। べんきょうしますに ভুল, কারণ full ます-form-এর পরে purpose に বসে না。",
  },
  14: {
    coreIdea:
      "て-form নিজে tense নয়; এটি verb-কে পরের grammar-এর সঙ্গে জোড়া দেওয়ার একটি ‘সংযোগ-রূপ’। এই unit-এ প্রথমে verb কোন group-এর তা দেখে て-form বানাবেন, তারপর てください দিয়ে অনুরোধ এবং ています দিয়ে এখন চলা কাজ বলবেন।",
    mentalModel: [
      "て-form-কে অসম্পূর্ণ সেতু ভাবুন: かいて… শুনলে এরপর আরেক অংশ আসবে—かいて ください বা かいて います।",
      "Group 1-এ শেষ sound অনুযায়ী পরিবর্তন হয়; Group 2-তে সাধারণত শেষ る বাদ দিয়ে て; する ও くる আলাদা।",
      "てください = ‘অনুগ্রহ করে কাজটি করুন’; ています = ‘কাজটি এখন চলছে’—একই て-form, কিন্তু পরের অংশ অর্থ বদলায়।",
      "Verb group আন্দাজে ঠিক না হলে dictionary entry দেখুন; る-তে শেষ হলেই সব verb Group 2 নয়।",
      "する-verb (activity noun + します)-এর て-form সবসময় して: れんしゅうします→れんしゅうして。",
    ],
    buildSteps: [
      "Verb-এর dictionary form ও group নিশ্চিত করুন: 書く Group 1, 食べる Group 2, する/来る Group 3।",
      "Group 1 map মুখস্থ নয়, family হিসেবে দেখুন: う・つ・る→って; む・ぶ・ぬ→んで; く→いて; ぐ→いで; す→して।",
      "ব্যতিক্রম 行く মনে রাখুন: いく → いって; নিয়মমতো いいて হয় না।",
      "Group 2-তে শেষ る বাদ দিয়ে て দিন: たべる→たべて, みる→みて।",
      "Irregular দুইটি: する→して এবং くる→きて।",
      "সঠিক verb বেছে て-form বানান—জানালা ‘খোলা’ চাইলে 開ける, শুধু ‘চাপা’ চাইলে 押す; কাজের উদ্দেশ্য অনুযায়ী verb বদলে যায়।",
      "তারপর উদ্দেশ্য অনুযায়ী শেষাংশ নিন: polite request হলে ください; এই মুহূর্তের action হলে います।",
    ],
    contrasts: [
      "ভুল: よむ→よみて। → ঠিক: よむ→よんで। む・ぶ・ぬ family সবসময় んで হয়।",
      "ভুল: かく→かって। → ঠিক: かく→かいて। く family いて নেয়।",
      "ভুল: いく→いいて। → ঠিক: いく→いって। 行く বিশেষ ব্যতিক্রম।",
      "まどを あけてください = জানালা খুলুন; まどを あけています = জানালা খুলছি/খোলা রাখার কাজ করছি—শেষাংশ বদলালে কাজের ভূমিকা বদলায়।",
      "ভুল: まどを おしてください (উদ্দেশ্য ‘খোলা’ হলেও শুধু push বলা)। → ঠিক: まどを あけてください। সঠিক verb বেছে নেওয়া জরুরি—push আর open এক নয়।",
    ],
    workedSentences: [
      {
        japanese: "この紙に住所を書いてください。",
        reading: "Kono kami ni juusho o kaite kudasai.",
        bengali: "এই কাগজে ঠিকানা লিখুন।",
        breakdown: [
          "この紙に (kono kami ni) = এই কাগজে; লেখার destination/surface",
          "住所を (juusho o) = ঠিকানাটি; 書く-এর object",
          "書いて (kaite) = 書く→書いて; く→いて",
          "ください (kudasai) = অনুগ্রহ করে করুন",
        ],
        teachingPoint:
          "書く Group 1 এবং く-তে শেষ, তাই 書いて। てください কাজটি করার একটি সরাসরি polite request।",
      },
      {
        japanese: "弟はいま台所で晩ご飯を作っています。",
        reading: "Otouto wa ima daidokoro de bangohan o tsukutte imasu.",
        bengali: "আমার ছোট ভাই এখন রান্নাঘরে রাতের খাবার বানাচ্ছে।",
        breakdown: [
          "弟は (otouto wa) = ছোট ভাই topic",
          "いま (ima) = এখন",
          "台所で (daidokoro de) = রান্নাঘরে; action-এর স্থান",
          "晩ご飯を (bangohan o) = রাতের খাবার",
          "作っています (tsukutte imasu) = বানাচ্ছে; 作る→作って + います",
        ],
        teachingPoint:
          "作る Group 1; う・つ・る family হওয়ায় 作って। いま এবং ています মিলে বর্তমানে চলা কাজ স্পষ্ট করেছে।",
      },
      {
        japanese: "暑いですから、窓を開けてください。",
        reading: "Atsui desu kara, mado o akete kudasai.",
        bengali: "গরম লাগছে বলে জানালা খুলুন।",
        breakdown: [
          "暑いですから (atsui desu kara) = গরম লাগছে বলে; কারণ",
          "窓を (mado o) = জানালা",
          "開けて (akete) = 開ける→開けて; Group 2, る বাদ + て",
          "ください (kudasai) = অনুগ্রহ করে করুন",
        ],
        teachingPoint:
          "開ける Group 2 verb, তাই শুধু る বাদ দিয়ে て বসে—Group 1-এর sound-change নিয়ম এখানে প্রযোজ্য নয়।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "いま何をしていますか。",
        reading: "Ima nani o shite imasu ka.",
        bengali: "এখন কী করছেন?",
      },
      {
        speaker: "B",
        japanese: "申込書を書いています。",
        reading: "Moushikomisho o kaite imasu.",
        bengali: "আবেদনপত্র লিখছি।",
      },
      {
        speaker: "A",
        japanese: "終わったら、ここに置いてください。",
        reading: "Owattara, koko ni oite kudasai.",
        bengali: "শেষ হলে, এখানে রাখুন।",
      },
      {
        speaker: "B",
        japanese: "はい、わかりました。ここですね。",
        reading: "Hai, wakarimashita. Koko desu ne.",
        bengali: "হ্যাঁ, বুঝেছি। এখানে, তাই তো?",
      },
      {
        speaker: "A",
        japanese: "はい、そうです。ありがとうございます。",
        reading: "Hai, sou desu. Arigatou gozaimasu.",
        bengali: "হ্যাঁ, ঠিক। ধন্যবাদ।",
      },
    ],
    practiceScaffolds: [
      {
        task: "よむ, まつ, およぐ—তিনটি verb-এর て-form বানান।",
        hint: "む→んで, つ→って, ぐ→いで family map ব্যবহার করুন।",
        model: "よむ→よんで; まつ→まって; およぐ→およいで。",
      },
      {
        task: "‘দয়া করে ধীরে পড়ুন’—てください দিয়ে লিখুন।",
        hint: "よむ→よんで; ゆっくり = ধীরে。",
        model: "ゆっくり よんでください。",
      },
      {
        task: "আপনি এখন যে কাজটি করছেন তা ています দিয়ে বলুন।",
        hint: "[স্থান] で + [object] を + Vて います。",
        model: "へやで にほんごを べんきょうしています。— ঘরে Japanese পড়ছি।",
      },
      {
        task: "‘গরম লাগছে বলে জানালা খুলুন’ てください দিয়ে লিখুন।",
        hint: "暑いですから + 窓を + 開けて + ください。",
        model: "暑いですから、窓を開けてください。",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「よんで」。よみます-এর dictionary form よむ; শেষের む Group 1-এর む・ぶ・ぬ family-তে পড়ে, তাই む বদলে んで হয়: よむ→よんで। 「よみて」 বললে এই sound-change নিয়ম মানা হয় না。",
  },
  15: {
    coreIdea:
      "একই て-form-এর পরে ছোট অংশ বদলে তিন রকম কথা বলা যায়: てもいいです = কাজটি করা অনুমোদিত, てはいけません = কাজটি নিষিদ্ধ, আর ています = কাজ চলছে বা তার ফল/অবস্থা এখনও আছে। অর্থ ধরতে て-এর পরের অংশটি আগে দেখুন।",
    mentalModel: [
      "Vてもいい = ‘V করলেও ঠিক আছে’ → অনুমতি আছে। প্রশ্নে か যোগ করলে ‘করতে পারি?’ হয়।",
      "Vてはいけない = ‘V করা ঠিক নয়’ → নিয়ম বা নিষেধ। এখানে は particle, উচ্চারণ wa।",
      "Vています-এর timeline দেখুন: কাজ এখন ঘটছে, বারবার হয়, অথবা আগের পরিবর্তনের ফল এখনো আছে।",
      "知っています মানে তথ্যটি জানা অবস্থায় আছি; এর প্রচলিত negative হলো 知りません, 知っていません নয়।",
      "‘পার্কিং নিষেধ’-এর মতো sign/notice-এ てはいけません-এর বদলে সংক্ষেপে 禁止 (きんし) শব্দও লেখা থাকতে পারে; বাস্তবে দুইভাবেই দেখা যায়।",
    ],
    buildSteps: [
      "যে কাজের অনুমতি\নিষেধ বলবেন তার て-form বানান: つかう→つかって।",
      "অনুমতি জানাতে もいいです যোগ করুন: つかってもいいです।",
      "অনুমতি চাইতে শেষে か দিন: つかってもいいですか।",
      "নিষেধ জানাতে はいけません যোগ করুন: つかってはいけません।",
      "গাড়ি/জিনিস নির্দিষ্ট জায়গায় রাখা নিষেধ বোঝাতে とめてはいけません ব্যবহার করুন: ここに くるまを とめては いけません。",
      "অবস্থা বললে ています নিন এবং বাংলা সময় বুঝুন: すんでいます = বসবাস করি; けっこんしています = বিবাহিত।",
      "উত্তরও শেখুন: অনুমতি দিলে はい、いいです; না দিলে すみません、ちょっと… বা いいえ、だめです。",
    ],
    contrasts: [
      "ここで食べてもいいです = এখানে খাওয়া যায়; ここで食べてはいけません = এখানে খাওয়া নিষেধ—もいい ও はいけません বিপরীত。",
      "いま本を読んでいます = এখন বই পড়ছি (চলমান কাজ); 東京に住んでいます = Tokyo-তে থাকি (চলমান অবস্থা)。",
      "ভুল: しっていません। → সাধারণ সঠিক: しりません। ‘জানি না’ বলার fixed beginner form এটি。",
      "てもいいですか অনুমতি চায়; できますか সাধারণত সামর্থ্য/সম্ভাবনা জিজ্ঞাসা করে—দুইটি ‘পারি?’ হলেও উদ্দেশ্য আলাদা।",
      "ভুল: たばこを すってもいいですは いけません (দুই form মিশিয়ে ফেলা)। → সঠিক: たばこを すっては いけません। এক বাক্যে もいい ও はいけません একসঙ্গে বসে না।",
    ],
    workedSentences: [
      {
        japanese: "この席に座ってもいいですか。",
        reading: "Kono seki ni suwatte mo ii desu ka.",
        bengali: "এই আসনে বসতে পারি?",
        breakdown: [
          "この席に (kono seki ni) = এই আসনে; বসার destination",
          "座って (suwatte) = 座る→座って",
          "もいいです (mo ii desu) = করলেও ঠিক/অনুমোদিত",
          "か (ka) = প্রশ্ন",
        ],
        teachingPoint:
          "এটি বসার ক্ষমতা নয়; নির্দিষ্ট আসনে বসার অনুমতি চাওয়া হচ্ছে, তাই てもいいですか উপযুক্ত।",
      },
      {
        japanese: "姉は大阪の会社に勤めています。",
        reading: "Ane wa Oosaka no kaisha ni tsutomete imasu.",
        bengali: "আমার বড় বোন Osaka-র একটি company-তে চাকরি করেন।",
        breakdown: [
          "姉は (ane wa) = বড় বোন topic",
          "大阪の会社に (Oosaka no kaisha ni) = Osaka-র company-তে",
          "勤めて (tsutomete) = 勤める-এর て-form",
          "います (imasu) = চাকরিতে যুক্ত থাকার চলমান অবস্থা",
        ],
        teachingPoint:
          "এখানে এখন এই মুহূর্তে ‘চাকরি করার action’ দেখা যাচ্ছে না; দীর্ঘস্থায়ী employment state বোঝাচ্ছে।",
      },
      {
        japanese: "この公園に車を止めてはいけません。",
        reading: "Kono kouen ni kuruma o tomete wa ikemasen.",
        bengali: "এই পার্কে গাড়ি পার্ক করা নিষেধ।",
        breakdown: [
          "この公園に (kono kouen ni) = এই পার্কে",
          "車を (kuruma o) = গাড়ি",
          "止めては (tomete wa) = 止める→止めて + は; নিষেধের অংশ",
          "いけません (ikemasen) = নিষিদ্ধ/করা উচিত না",
        ],
        teachingPoint:
          "止める Group 2, তাই る বাদ দিয়ে て। てはいけません সাধারণত regulation/rule জাতীয় জোরালো নিষেধে ব্যবহার হয়।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "ここで水を飲んでもいいですか。",
        reading: "Koko de mizu o nonde mo ii desu ka.",
        bengali: "এখানে পানি পান করতে পারি?",
      },
      {
        speaker: "B",
        japanese: "はい、いいです。でも、食べ物を食べてはいけません。",
        reading: "Hai, ii desu. Demo, tabemono o tabete wa ikemasen.",
        bengali: "হ্যাঁ, পারেন। তবে খাবার খাওয়া নিষেধ।",
      },
      {
        speaker: "A",
        japanese: "わかりました。ありがとうございます。",
        reading: "Wakarimashita. Arigatou gozaimasu.",
        bengali: "বুঝেছি। ধন্যবাদ।",
      },
      {
        speaker: "A",
        japanese: "じゃ、ここで写真を撮ってもいいですか。",
        reading: "Ja, koko de shashin o totte mo ii desu ka.",
        bengali: "তাহলে, এখানে ছবি তুলতে পারি?",
      },
      {
        speaker: "B",
        japanese: "はい、それはいいです。",
        reading: "Hai, sore wa ii desu.",
        bengali: "হ্যাঁ, সেটা ঠিক আছে।",
      },
    ],
    practiceScaffolds: [
      {
        task: "Train-এ phone charge করার অনুমতি চেয়ে একটি বাক্য লিখুন।",
        hint: "じゅうでんする→じゅうでんして + もいいですか। স্থানটিতে action হলে で。",
        model: "でんしゃで スマホを じゅうでんしても いいですか。",
      },
      {
        task: "Library-এর একটি নিষেধ てはいけません দিয়ে বলুন।",
        hint: "おおきい こえで はなす = জোরে কথা বলা。",
        model: "としょかんで おおきい こえで はなしては いけません。",
      },
      {
        task: "আপনি কোথায় থাকেন বা কাজ করেন—একটি continuing-state বাক্য লিখুন।",
        hint: "Place に + すんでいます / Company に + つとめています。",
        model: "ちばに すんでいます。— Chiba-তে থাকি。",
      },
      {
        task: "‘এই পার্কে গাড়ি রাখা নিষেধ’ てはいけません দিয়ে লিখুন।",
        hint: "くるまを + とめては + いけません。",
        model: "ここに くるまを とめては いけません。",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「ここで しゃしんを とっても いいですか。」। ここで action-এর স্থান, しゃしんを হলো তোলার object, আর とる→とって + もいいですか অনুমতি চায়। 「とってはいけませんか」 নিষেধের প্রশ্ন হয়ে যায়, তাই চাওয়া অর্থ দেয় না。",
  },
  16: {
    coreIdea:
      "Japanese-এ কয়েকটি কাজ বা বর্ণনা এক sentence-এ জোড়া দিতে মাঝের অংশগুলোকে ‘connector form’-এ রাখা হয়; কেবল শেষ অংশটি tense ও politeness বহন করে। Verb-এ て-form, い-adjective-এ くて, আর な-adjective/noun-এ で ব্যবহার করুন।",
    mentalModel: [
      "একটি train ভাবুন: মাঝের carriage-গুলো て/くて/で দিয়ে যুক্ত; শেষ carriage-এর verb পুরো train বর্তমান না অতীত তা জানায়।",
      "Vて、Vて、Vます সাধারণ chronological flow; Vてから、Vます প্রথম কাজ শেষ হওয়ার পরে দ্বিতীয় কাজ শুরু হওয়া স্পষ্ট করে।",
      "Adjective-এর family আগে চিনুন: 高い→高くて; 静か→静かで; 学生→学生で。",
      "Connector সাধারণত compatible information জোড়ে; জোরালো ‘কিন্তু’ বোঝাতে が/けど আলাদা pattern প্রয়োজন।",
      "い-adjective-এর ব্যতিক্রম いい→よくて; কিন্তু きれい/きらい い দিয়ে শেষ হলেও আসলে な-adjective, তাই で connector নেয়।",
    ],
    buildSteps: [
      "ঘটনাগুলো বাস্তব ক্রমে লিখুন: উঠি → মুখ ধুই → নাশতা খাই।",
      "শেষ action ছাড়া আগের প্রতিটি verb-কে て-form করুন: おきて、かおを あらって…。",
      "শেষ verb-টিকে প্রয়োজনীয় tense-এ রাখুন: たべます / たべました। এই ending পুরো sequence-এর সময় স্থির করে।",
      "‘A শেষ করেই B’ জোর দিতে A-এর て-form + から দিন: たべてから、でかけます。",
      "যানবাহন ব্যবহার describe করতে のります/おります-ও て-form করে chain-এ জুড়ুন: でんしゃに のって、えきで おりて…。",
      "い-adjective connect করতে শেষ い বদলে くて দিন: やすい→やすくて। ব্যতিক্রম いい→よくて।",
      "な-adjective বা noun connect করতে で দিন: しずかで; エンジニアで。",
    ],
    contrasts: [
      "ভুল: かるいで、はやいです。 → ঠিক: かるくて、はやいです। かるい হলো い-adjective।",
      "ভুল: しずかくて、きれいです。 → ঠিক: しずかで、きれいです। しずか হলো な-adjective।",
      "ご飯を食べて、薬を飲みます = কাজ দুইটি এই ক্রমে; ご飯を食べてから、薬を飲みます = খাওয়া শেষ হওয়ার পরেই ওষুধ—সম্পর্কটি স্পষ্ট。",
      "ভুল: おきました、あらいました、でかけました এক connector sentence হিসেবে। → ঠিক: おきて、あらって、でかけました। শুধু শেষ verb past।",
      "ভুল: きれいくて、しずかです। → সঠিক: きれいで、しずかです। きれい い-দিয়ে শেষ হলেও な-adjective, তাই で connector নেয়।",
    ],
    workedSentences: [
      {
        japanese: "家に帰って、手を洗って、晩ご飯を作ります。",
        reading: "Ie ni kaette, te o aratte, bangohan o tsukurimasu.",
        bengali: "বাসায় ফিরে, হাত ধুয়ে, রাতের খাবার বানাই।",
        breakdown: [
          "家に帰って (ie ni kaette) = বাসায় ফিরে; 帰る→帰って",
          "手を洗って (te o aratte) = হাত ধুয়ে; 洗う→洗って",
          "晩ご飯を (bangohan o) = রাতের খাবার",
          "作ります (tsukurimasu) = বানাই; final verb non-past",
        ],
        teachingPoint:
          "প্রথম দুই verb て-form হয়ে পথ তৈরি করেছে; শেষের 作ります পুরো routine-কে habitual non-past করেছে।",
      },
      {
        japanese: "この町は静かで、交通が便利です。",
        reading: "Kono machi wa shizuka de, koutsuu ga benri desu.",
        bengali: "এই শহর শান্ত এবং যাতায়াত সুবিধাজনক।",
        breakdown: [
          "この町は (kono machi wa) = এই শহর topic",
          "静かで (shizuka de) = শান্ত এবং; な-adjective + で",
          "交通が (koutsuu ga) = যাতায়াত/transport subject",
          "便利です (benri desu) = সুবিধাজনক",
        ],
        teachingPoint:
          "静か এবং 便利 দুইটিই な-adjective; প্রথমটি connector で নিয়েছে, শেষটি polite ending です রেখেছে।",
      },
      {
        japanese: "バスに乗って、駅で降りて、歩いて学校へ行きます。",
        reading: "Basu ni notte, eki de orite, aruite gakkou e ikimasu.",
        bengali: "বাসে উঠে, স্টেশনে নেমে, হেঁটে স্কুলে যাই।",
        breakdown: [
          "バスに乗って (basu ni notte) = বাসে উঠে; 乗る→乗って",
          "駅で降りて (eki de orite) = স্টেশনে নেমে; 降りる→降りて",
          "歩いて (aruite) = হেঁটে",
          "学校へ行きます (gakkou e ikimasu) = স্কুলে যাই",
        ],
        teachingPoint:
          "তিনটি ভিন্ন movement verb পরপর て-form-এ জুড়ে একটি সম্পূর্ণ যাত্রার বর্ণনা দেওয়া গেছে; শুধু শেষ 行きます tense বহন করছে।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "毎朝、何をしますか。",
        reading: "Maiasa, nani o shimasu ka.",
        bengali: "প্রতি সকালে কী করেন?",
      },
      {
        speaker: "B",
        japanese: "起きて、シャワーを浴びて、朝ご飯を食べます。",
        reading: "Okite, shawaa o abite, asagohan o tabemasu.",
        bengali: "উঠে, shower নিয়ে, নাশতা খাই।",
      },
      {
        speaker: "A",
        japanese: "朝ご飯を食べてから、会社へ行きますか。",
        reading: "Asagohan o tabete kara, kaisha e ikimasu ka.",
        bengali: "নাশতা খাওয়ার পরে company-তে যান?",
      },
      {
        speaker: "B",
        japanese: "はい、そうです。バスに乗って行きます。",
        reading: "Hai, sou desu. Basu ni notte ikimasu.",
        bengali: "হ্যাঁ, ঠিক। বাসে করে যাই।",
      },
      {
        speaker: "A",
        japanese: "そうですか。気をつけて。",
        reading: "Sou desu ka. Ki o tsukete.",
        bengali: "তাই তো। সাবধানে যাবেন।",
      },
    ],
    practiceScaffolds: [
      {
        task: "‘উঠি, পানি খাই, পড়ি’—একটি action chain বানান।",
        hint: "おきます→おきて; のみます→のんで; শেষ verb べんきょうします অপরিবর্তিত রাখুন。",
        model: "おきて、みずを のんで、べんきょうします。",
      },
      {
        task: "‘Homework শেষ করার পরে game খেলি’—てから ব্যবহার করুন।",
        hint: "おわります→おわって + から。",
        model: "しゅくだいが おわってから、ゲームを します。",
      },
      {
        task: "একটি い-adjective এবং একটি な-adjective দিয়ে জিনিস বর্ণনা করুন।",
        hint: "প্রথমটি い-adjective হলে い→くて; শেষের な-adjective + です。",
        model: "この かばんは かるくて、じょうぶです。— ব্যাগটি হালকা ও মজবুত।",
      },
      {
        task: "নিজের বাসা থেকে স্কুল/অফিস যাওয়ার তিন-ধাপের যাত্রা て-form chain দিয়ে বলুন।",
        hint: "প্রতিটি ধাপের verb-কে て-form করে জুড়ুন, শুধু শেষটি tense নিন।",
        model: "でんしゃに のって、えきで おりて、あるいて かいしゃへ いきます。",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「この PCは かるくて、はやいです。」। かるい একটি い-adjective; আরেকটি বর্ণনার সঙ্গে জুড়তে শেষ い বদলে くて হয়: かるい→かるくて। 「かるいで」 な-adjective-এর connector ভুলভাবে ব্যবহার করেছে。",
  },
  17: {
    coreIdea:
      "ない-form হলো verb-এর plain negative রূপ—অর্থ ‘করি না/করব না’। এই একটি form থেকে ないでください (করবেন না), なければなりません (করতেই হবে) এবং なくてもいいです (না করলেও চলে) তৈরি হয়। আগে ない-form নির্ভুল করুন, তারপর লম্বা ending যোগ করুন।",
    mentalModel: [
      "ない হলো ‘না’-এর মূল block: 書かない = লিখি না/লিখব না। Japanese non-past বর্তমান অভ্যাস ও ভবিষ্যৎ—দুইটিই হতে পারে।",
      "ないでください = কাজটি না করার অনুরোধ; এটি শুধু plain negative statement নয়।",
      "なければなりません-কে একসঙ্গে ‘must’ block ভাবুন: না করলে চলবে না → করতেই হবে।",
      "なくてもいいです = না করলেও ঠিক আছে; এটি permission to omit, ‘করবেন না’ এমন নিষেধ নয়।",
      "しんぱいしないでください হলো আরেকটি খুব common ないでください pattern—কাউকে সরাসরি আশ্বাস দিতে ব্যবহার হয়।",
    ],
    buildSteps: [
      "প্রথমে dictionary form ও group ধরুন। Group 1-এর শেষ u-row sound-কে a-row করুন: 書く→書か; 読む→読ま। তারপর ない যোগ করুন।",
      "Group 1-এর う বিশেষভাবে わ হয়: 買う→買わない, 会う→会わない; あない নয়।",
      "Group 2-তে শেষ る বাদ দিয়ে ない: 食べる→食べない, 見る→見ない।",
      "Irregular: する→しない, 来る（くる）→来ない（こない）; ある-এর negative হলো ない।",
      "Negative request-এ সম্পূর্ণ ない-form + でください: 入らないでください।",
      "Money/payment context-এ Vなければなりません খুব common: やちんを はらわなければなりません (ভাড়া দিতেই হবে)।",
      "No necessity-তে ない-এর শেষ い বাদ দিয়ে くてもいいです: 行かない→行かなくてもいいです।",
    ],
    contrasts: [
      "ভুল: かう→かあない। → ঠিক: かう→かわない। শেষ う-এর a-row partner এখানে わ।",
      "来ないでください = আসবেন না (অনুরোধ); 来なくてもいいです = না এলেও চলবে (আসা optional)—অর্থ এক নয়।",
      "来なければなりません = আসতেই হবে; 来てはいけません = আসা নিষেধ—দুইটি একেবারে বিপরীত।",
      "きょう来ない = আজ আসি না/আসব না, context অনুযায়ী; এটি একা ‘আসবেন না’ polite request নয়।",
      "ভুল: やちんを はらわないでください (যদি বলতে চাওয়া হয় ‘দিতেই হবে’)। → সঠিক: やちんを はらわなければなりません। ないでください মানে ‘দেবেন না’—উদ্দেশ্যের বিপরীত।",
    ],
    workedSentences: [
      {
        japanese: "この部屋では携帯電話を使わないでください。",
        reading: "Kono heya de wa keitai denwa o tsukawanaide kudasai.",
        bengali: "এই ঘরে mobile phone ব্যবহার করবেন না।",
        breakdown: [
          "この部屋では (kono heya de wa) = এই ঘরে; で action-place, は contrast/topic nuance",
          "携帯電話を (keitai denwa o) = mobile phone-টি",
          "使わないで (tsukawanaide) = ব্যবহার না করে/করবেন না; 使う→使わない + で",
          "ください (kudasai) = অনুগ্রহ করে",
        ],
        teachingPoint:
          "使う Group 1; う→わない হয়েছে। ないでください পুরো block-টি কাউকে কাজ না করার polite request।",
      },
      {
        japanese: "金曜日までに申込書を出さなければなりません。",
        reading: "Kinyoubi made ni moushikomisho o dasanakereba narimasen.",
        bengali: "শুক্রবারের মধ্যে আবেদনপত্র জমা দিতেই হবে।",
        breakdown: [
          "金曜日までに (kinyoubi made ni) = শুক্রবারের মধ্যে/শেষ সময়ের আগে",
          "申込書を (moushikomisho o) = আবেদনপত্রটি",
          "出さなければ (dasanakereba) = জমা না দিলে; 出す→出さない→出さなければ",
          "なりません (narimasen) = চলবে না; পুরো expression = জমা দিতেই হবে",
        ],
        teachingPoint:
          "までに deadline দেখায়। লম্বা grammar-টি বাংলা শব্দে-শব্দে অনুবাদ না করে ‘করতেই হবে’ অর্থের এক block হিসেবে বলুন।",
      },
      {
        japanese: "毎月、家賃を払わなければなりません。忘れないでください。",
        reading: "Maitsuki, yachin o harawanakereba narimasen. Wasurenaide kudasai.",
        bengali: "প্রতি মাসে ভাড়া দিতেই হবে। ভুলবেন না।",
        breakdown: [
          "毎月 (maitsuki) = প্রতি মাসে",
          "家賃を払わなければなりません (yachin o harawanakereba narimasen) = ভাড়া দিতেই হবে",
          "忘れないでください (wasurenaide kudasai) = ভুলবেন না",
        ],
        teachingPoint:
          "একই paragraph-এ obligation (なければなりません) ও negative request (ないでください) পাশাপাশি ব্যবহার করা গেছে—দুইটোই ない-form থেকে আসে, কিন্তু কাজ আলাদা।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "明日も会社へ来なければなりませんか。",
        reading: "Ashita mo kaisha e konakereba narimasen ka.",
        bengali: "কালও কি office-এ আসতেই হবে?",
      },
      {
        speaker: "B",
        japanese: "いいえ、来なくてもいいです。",
        reading: "Iie, konakute mo ii desu.",
        bengali: "না, না এলেও চলবে।",
      },
      {
        speaker: "B",
        japanese: "でも、資料を忘れないでください。",
        reading: "Demo, shiryou o wasurenaide kudasai.",
        bengali: "তবে documents ভুলে যাবেন না।",
      },
      {
        speaker: "A",
        japanese: "はい、わかりました。忘れません。",
        reading: "Hai, wakarimashita. Wasuremasen.",
        bengali: "হ্যাঁ, বুঝেছি। ভুলব না।",
      },
      {
        speaker: "B",
        japanese: "ありがとうございます。",
        reading: "Arigatou gozaimasu.",
        bengali: "ধন্যবাদ।",
      },
    ],
    practiceScaffolds: [
      {
        task: "かく, たべる, する, くる—চারটি verb-কে ない-form-এ নিন।",
        hint: "Group 1: u→a+ない; Group 2: る বাদ; irregular দুইটি আলাদা。",
        model: "かかない、たべない、しない、こない。",
      },
      {
        task: "‘এই দরজাটি খুলবেন না’—negative request লিখুন।",
        hint: "あける→あけない; তারপর でください。",
        model: "この ドアを あけないでください。",
      },
      {
        task: "একটি অবশ্যকরণ এবং একটি optional কাজ পাশাপাশি লিখুন।",
        hint: "Vなければなりません বনাম Vなくてもいいです ব্যবহার করুন。",
        model: "IDを もっていかなければなりません。ネクタイは しなくてもいいです。— ID নিতেই হবে; tie না পরলেও চলে।",
      },
      {
        task: "‘প্রতি মাসে বিল দিতেই হবে’ なければなりません দিয়ে লিখুন।",
        hint: "まいつき + はらう-এর ない-form + なければなりません。",
        model: "まいつき、りょうきんを はらわなければ なりません。",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「きょう こなくても いいです。」। 来る-এর ない-form হলো こない; ない-এর শেষ い বদলে くてもいいです দিলে ‘না এলেও ঠিক আছে/আসতে হবে না’ হয়। 「こないでください」 মানে ‘আসবেন না’, যা no necessity নয় বরং negative request。",
  },
  18: {
    coreIdea:
      "Dictionary form হলো verb-এর মূল plain non-past রূপ—যেমন たべます-এর たべる। এর পরে こと যোগ করলে পুরো কাজটিকে একটি ‘বিষয়/ঘটনা’ হিসেবে ধরা যায়; তাই Vることができます দিয়ে সামর্থ্য/সম্ভাবনা, Vることです দিয়ে hobby, এবং Vるまえに দিয়ে ‘কাজের আগে’ বলা যায়।",
    mentalModel: [
      "Dictionary form মানে অভিধানে যে রূপে verb খুঁজবেন; এটি casual non-past affirmative-ও।",
      "こと একটি বাক্স: 泳ぐ (সাঁতার কাটা) → 泳ぐこと (সাঁতার কাটার কাজ/বিষয়)। এরপর বাক্সটির ができます = কাজটি করা সম্ভব।",
      "まえに timeline-এ মূল কাজের বামে আরেক কাজ রাখে: [ঘুমানো]র আগে [দাঁত মাজি]। আগের কাজটি এখনও ঘটেনি, তাই dictionary/non-past form।",
      "能力 ‘পারি’ আর অনুমতি ‘পারি?’ আলাদা: できます সামর্থ্য/সম্ভাবনা; てもいいですか অনুমতি।",
      "しゅみは...ことです-এ শেষে সরাসরি です বসে, できます নয়—hobby বলা আর ability বলা আলাদা ending নেয়।",
    ],
    buildSteps: [
      "Group 1-এর polite ます-form থেকে stem-এর শেষ i-row sound-কে u-row করুন: 書きます→書く, 読みます→読む, 話します→話す。",
      "Group 2-তে ます বাদ দিয়ে る যোগ করুন: 食べます→食べる, 見ます→見る। Group জানা জরুরি—শুধু spelling দেখে সবসময় বোঝা যায় না।",
      "Irregular: します→する, 来ます（きます）→来る（くる）。",
      "Ability বানাতে dictionary form + ことができます: 運転することができます।",
      "Hobby বলার সময় শেষে ことです দিন, ことができます নয়: しゅみは えを あつめる ことです。",
      "‘কাজের আগে’তে Vるまえに; noun-এর আগে Nのまえに: 寝るまえに বনাম 会議のまえに।",
      "শেষে particle ধরে রাখুন: 日本語を読むことができます—読む-এর object 日本語を অপরিবর্তিত থাকে।",
    ],
    contrasts: [
      "ভুল: よみますことができます。 → ঠিক: よむことができます। こと-এর আগে dictionary form লাগে।",
      "ここで写真を撮ることができます = এখানে ছবি তোলা সম্ভব; ここで写真を撮ってもいいですか = এখানে ছবি তোলার অনুমতি আছে কি—ক্ষমতা/নিয়ম বনাম permission।",
      "寝るまえに = ঘুমানোর আগে; 寝たあとで = ঘুমানোর পরে। まえに-এর আগে た-form বসালে timeline বদলে যায়/এই beginner pattern থাকে না।",
      "会議のまえに—noun-এর পরে の দরকার; 食べるまえに—verb-এর পরে の দরকার নেই।",
      "ভুল: しゅみは およぐ ことが できます। → সঠিক: しゅみは およぐ ことです। Hobby বলতে できます নয়, শুধু です।",
    ],
    workedSentences: [
      {
        japanese: "この図書館で外国の新聞を読むことができます。",
        reading: "Kono toshokan de gaikoku no shinbun o yomu koto ga dekimasu.",
        bengali: "এই library-তে বিদেশি newspaper পড়া যায়।",
        breakdown: [
          "この図書館で (kono toshokan de) = এই library-তে; action-place",
          "外国の新聞を (gaikoku no shinbun o) = বিদেশি newspaper-টি",
          "読むこと (yomu koto) = পড়ার কাজ; 読みます→読む",
          "ができます (ga dekimasu) = সম্ভব/করা যায়",
        ],
        teachingPoint:
          "এখানে ব্যক্তিগত talent নয়, library-র সুবিধার কারণে situational possibility বোঝানো হয়েছে।",
      },
      {
        japanese: "仕事を始めるまえに、メールを確認します。",
        reading: "Shigoto o hajimeru mae ni, meeru o kakunin shimasu.",
        bengali: "কাজ শুরু করার আগে email check করি।",
        breakdown: [
          "仕事を (shigoto o) = কাজটি",
          "始めるまえに (hajimeru mae ni) = শুরু করার আগে; 始めます→始める",
          "メールを (meeru o) = email-গুলো",
          "確認します (kakunin shimasu) = check করি",
        ],
        teachingPoint:
          "Sentenceটি habit হলেও まえに-এর আগে 始める dictionary form থাকে; মূল verb 確認します politeness ও tense বহন করে।",
      },
      {
        japanese: "食事のまえに手を洗うことは大切です。",
        reading: "Shokuji no mae ni te o arau koto wa taisetsu desu.",
        bengali: "খাবারের আগে হাত ধোয়া গুরুত্বপূর্ণ।",
        breakdown: [
          "食事のまえに (shokuji no mae ni) = খাবারের আগে; noun+の+まえに",
          "手を洗うこと (te o arau koto) = হাত ধোয়ার কাজ",
          "は大切です (wa taisetsu desu) = গুরুত্বপূর্ণ",
        ],
        teachingPoint:
          "こと শুধু ability/hobby pattern-এই না, verb-কে noun বানিয়ে বাক্যের topic হিসেবেও ব্যবহার করা যায়—এখানে 大切です-এর subject হয়েছে।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "日本語で電話することができますか。",
        reading: "Nihongo de denwa suru koto ga dekimasu ka.",
        bengali: "Japanese-এ phone-এ কথা বলতে পারেন?",
      },
      {
        speaker: "B",
        japanese: "少しできます。でも、電話するまえにメモを作ります。",
        reading: "Sukoshi dekimasu. Demo, denwa suru mae ni memo o tsukurimasu.",
        bengali: "একটু পারি। তবে phone করার আগে note বানাই।",
      },
      {
        speaker: "A",
        japanese: "いい方法ですね。",
        reading: "Ii houhou desu ne.",
        bengali: "ভালো পদ্ধতি, তাই না!",
      },
      {
        speaker: "B",
        japanese: "はい。緊張しないように、いつもそうしています。",
        reading: "Hai. Kinchou shinai you ni, itsumo sou shite imasu.",
        bengali: "হ্যাঁ। নার্ভাস না হওয়ার জন্য সবসময় এটা করি।",
      },
      {
        speaker: "A",
        japanese: "私も今度やってみます。",
        reading: "Watashi mo kondo yatte mimasu.",
        bengali: "আমিও পরেরবার এটা করে দেখব।",
      },
    ],
    practiceScaffolds: [
      {
        task: "かきます, たべます, します—dictionary form লিখুন।",
        hint: "Group 1 i→u; Group 2 stem+る; します irregular。",
        model: "かく、たべる、する。",
      },
      {
        task: "আপনার একটি বাস্তব skill ことができます দিয়ে বলুন।",
        hint: "[Tool/Language] で + [Object] を + Vることができます。",
        model: "パソコンで えを かくことが できます。— computer-এ ছবি আঁকতে পারি।",
      },
      {
        task: "ঘুমানোর আগে করা একটি কাজ লিখুন।",
        hint: "ねるまえに、[object] を Vます。",
        model: "ねるまえに、はを みがきます。— ঘুমানোর আগে দাঁত মাজি।",
      },
      {
        task: "নিজের একটি hobby ことです দিয়ে বলুন (ability form থেকে আলাদা করে)।",
        hint: "しゅみは + dictionary form + ことです—できます নয়。",
        model: "しゅみは きってを あつめる ことです。",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「にほんごを よむ ことが できます。」। よみます-এর dictionary form よむ; ability pattern-এ এই dictionary form-এর পরে ことができます বসে। 「よみますこと」 ভুল, কারণ polite ます-form দিয়ে こと-clause তৈরি করা হয়নি。",
  },
  19: {
    coreIdea:
      "た-form হলো verb-এর plain past form। এর মাধ্যমে শুধু ‘করেছিলাম’ নয়—Vたことがあります দিয়ে জীবনের অভিজ্ঞতা, VたりVたりします দিয়ে কয়েকটি representative কাজ, এবং adjective/noun + なります দিয়ে অবস্থার পরিবর্তন বলা যায়।",
    mentalModel: [
      "て-form map-টি জানা থাকলে た-form নতুন map নয়: て→た এবং で→だ। যেমন 書いて→書いた, 読んで→読んだ।",
      "Vたことがあります timeline-এর নির্দিষ্ট একটি দিন report করে না; ‘জীবনে কখনো এমন অভিজ্ঞতা হয়েছে’—এই record দেখায়।",
      "Vたり…Vたりします একটি sample basket: আরও কাজ থাকতে পারে; এটি পূর্ণ chronological list নয়।",
      "なります মানে ‘হয়ে যায়/হয়ে ওঠে’; い-adjective-এর く এবং な-adjective/noun-এর に পরিবর্তনের destination চিহ্নিত করে।",
      "পেশা/পরিচয় বদলে যাওয়া বলতেও একই pattern চলে: いしゃに なりました (ডাক্তার হয়েছি)।",
    ],
    buildSteps: [
      "Verb-এর て-form স্মরণ করুন, তারপর ending বদলান: かいて→かいた; のんで→のんだ; して→した; きて→きた।",
      "Experience-এ Vた + ことがあります: 行ったことがあります। প্রশ্নে か, negative experience-এ 一度も + Vたことがありません।",
      "কখন ঘটেছে এমন নির্দিষ্ট report দিতে simple past নিন: きのう京都へ行きました। ‘কখনো গিয়েছি’ হলে 京都へ行ったことがあります।",
      "Representative list-এ প্রতিটি selected verb-এর た-form + り: 読んだり、書いたりします。",
      "い-adjective change: শেষ い→く + なります: 寒い→寒くなります; いい→よくなります。",
      "な-adjective/noun change: に + なります: 元気になります; 医者になります。",
      "কারও পেশা/পরিচয় বদলে যাওয়া বলতে N+に+なりました ব্যবহার করুন: せんせいに なりました।",
    ],
    contrasts: [
      "きのう寿司を食べました = গতকালের নির্দিষ্ট ঘটনা; 寿司を食べたことがあります = জীবনে sushi খাওয়ার অভিজ্ঞতা আছে।",
      "ভুল: 食べることがありました。 → ঠিক: 食べたことがあります। Experience marker-এর আগে た-form এবং শেষে বর্তমান あります।",
      "読んだり、書いたりします = পড়া, লেখা ইত্যাদি করি; 読んで、書きます = পড়ে তারপর লিখি—sample বনাম sequence。",
      "ভুল: しずかくなります। → ঠিক: しずかになります। 静か হলো な-adjective, তাই に。",
      "ভুল: いしゃくなりました। → সঠিক: いしゃに なりました। 医者 noun, তাই に-connector; い-adjective-এর く নয়।",
    ],
    workedSentences: [
      {
        japanese: "日本で雪を見たことがあります。",
        reading: "Nihon de yuki o mita koto ga arimasu.",
        bengali: "Japan-এ তুষার দেখার অভিজ্ঞতা আছে।",
        breakdown: [
          "日本で (Nihon de) = Japan-এ; দেখার স্থান",
          "雪を (yuki o) = তুষার",
          "見たこと (mita koto) = দেখেছিলাম এমন অভিজ্ঞতা; 見る→見た",
          "があります (ga arimasu) = আছে",
        ],
        teachingPoint:
          "কোন দিন তুষার দেখেছেন তা নয়; জীবনের experience record বলা হচ্ছে। নির্দিষ্ট দিন চাইলে simple 見ました ব্যবহার করুন।",
      },
      {
        japanese: "春になると、日が長くなります。",
        reading: "Haru ni naru to, hi ga nagaku narimasu.",
        bengali: "বসন্ত এলে দিন দীর্ঘ হয়ে যায়।",
        breakdown: [
          "春に (haru ni) = বসন্তে/বসন্ত অবস্থায়",
          "なると (naru to) = হলে/হয়ে গেলে",
          "日が (hi ga) = দিন/দিনের আলো subject",
          "長くなります (nagaku narimasu) = দীর্ঘ হয়ে যায়; 長い→長く + なります",
        ],
        teachingPoint:
          "長い い-adjective বলে change form 長くなります। にほんごが じょうずになります-এর মতো な-adjective হলে に লাগত।",
      },
      {
        japanese: "兄は去年、医者になりました。",
        reading: "Ani wa kyonen, isha ni narimashita.",
        bengali: "আমার বড় ভাই গত বছর ডাক্তার হয়েছেন।",
        breakdown: [
          "兄は (ani wa) = বড় ভাই topic",
          "去年 (kyonen) = গত বছর",
          "医者に (isha ni) = ডাক্তার-এ; পরিবর্তনের destination",
          "なりました (narimashita) = হয়ে গেছেন",
        ],
        teachingPoint:
          "医者 noun, তাই になりました; পেশা বদল বা কোনো identity অর্জন বোঝাতে এই pattern খুব common।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "北海道へ行ったことがありますか。",
        reading: "Hokkaidou e itta koto ga arimasu ka.",
        bengali: "Hokkaido যাওয়ার অভিজ্ঞতা আছে?",
      },
      {
        speaker: "B",
        japanese: "はい。雪を見たり、温泉に入ったりしました。",
        reading: "Hai. Yuki o mitari, onsen ni haittari shimashita.",
        bengali: "হ্যাঁ। তুষার দেখা, hot spring-এ নামা ইত্যাদি করেছি।",
      },
      {
        speaker: "A",
        japanese: "冬はとても寒くなりますか。",
        reading: "Fuyu wa totemo samuku narimasu ka.",
        bengali: "শীতে কি খুব ঠান্ডা হয়ে যায়?",
      },
      {
        speaker: "B",
        japanese: "はい、とても寒くなります。でも、雪がきれいです。",
        reading: "Hai, totemo samuku narimasu. Demo, yuki ga kirei desu.",
        bengali: "হ্যাঁ, খুব ঠান্ডা হয়ে যায়। তবে তুষার সুন্দর দেখায়।",
      },
      {
        speaker: "A",
        japanese: "いいですね。私も今度行ってみたいです。",
        reading: "Ii desu ne. Watashi mo kondo itte mitai desu.",
        bengali: "চমৎকার। আমিও একবার গিয়ে দেখতে চাই।",
      },
    ],
    practiceScaffolds: [
      {
        task: "かく, のむ, する, くる—চারটি verb-এর た-form লিখুন।",
        hint: "তাদের て-form ভাবুন; て→た, で→だ。",
        model: "かいた、のんだ、した、きた。",
      },
      {
        task: "একটি খাবার বা জায়গা নিয়ে আপনার experience লিখুন।",
        hint: "Nを/へ + Vたことがあります। কখনো না হলে 一度も…ありません。",
        model: "おきなわへ いったことが あります。— Okinawa যাওয়ার অভিজ্ঞতা আছে।",
      },
      {
        task: "ছুটির দিনের দুইটি representative কাজ এবং একটি পরিবর্তন লিখুন।",
        hint: "Vたり、Vたりします; adjective family দেখে く/に なります。",
        model: "ほんを よんだり、さんぽしたりします。よるは しずかに なります。",
      },
      {
        task: "কারও পেশা পরিবর্তনের কথা N+に+なりました দিয়ে বলুন।",
        hint: "Noun (পেশা) + に + なりました।",
        model: "姉は先生になりました。",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「すしを たべた ことが あります。」। 食べる-এর た-form 食べた; তার পরে ことがあります বসে ‘খাওয়ার অভিজ্ঞতা আছে’ হয়। 「食べることがありました」 এই unit-এর experience pattern নয় এবং চাওয়া meaning স্পষ্ট করে না。",
  },
  20: {
    coreIdea:
      "Plain style মানে sentence-এর তথ্য বদলানো নয়; শ্রোতার সঙ্গে দূরত্ব অনুযায়ী polite ending সরানো বা বদলানো। বন্ধু/পরিবারের casual কথায় plain form স্বাভাবিক, কিন্তু অপরিচিত, customer, teacher বা manager-এর সঙ্গে শুরুতে polite style নিরাপদ।",
    mentalModel: [
      "একই message-এর দুই পোশাক: 行きます (polite) এবং 行く (plain)—দুটির অর্থ ‘যাই/যাব’।",
      "Verb-এর চার ঘর: affirmative non-past Vる, negative non-past Vない, affirmative past Vた, negative past Vなかった।",
      "い-adjective নিজের tense বহন করে; plain করতে শুধু polite です বাদ যায়: 高いです→高い, 高かったです→高かった।",
      "な-adjective/noun affirmative non-past-এ です→だ; negative ও past-এ じゃない/だった/じゃなかった।",
      "ほんとう? ও どうして?-এর মতো ছোট casual question word একাই সম্পূর্ণ বাক্যের কাজ করতে পারে—পুরো sentence বলার দরকার নেই।",
    ],
    buildSteps: [
      "প্রথমে sentence-এর predicate চিহ্নিত করুন: verb, い-adjective, な-adjective, নাকি noun। family না জানলে form ভুল হবে।",
      "Verb হলে polite↔plain চার জোড়া করুন: 行きます↔行く; 行きません↔行かない; 行きました↔行った; 行きませんでした↔行かなかった。",
      "い-adjective: おいしいです→おいしい; おいしくないです→おいしくない; おいしかったです→おいしかった; おいしくなかったです→おいしくなかった。",
      "な-adjective: 元気です→元気だ; 元気じゃないです→元気じゃない; 元気でした→元気だった; 元気じゃなかったです→元気じゃなかった。",
      "Noun-ও な-adjective-এর ending map নেয়: 学生だ／学生じゃない／学生だった／学生じゃなかった।",
      "সংক্ষিপ্ত প্রতিক্রিয়া দিতে ছোট casual word যথেষ্ট: ほんとう? (সত্যি?), どうして? (কেন?), まだ (এখনও)।",
      "Casual yes/no question-এ sentence-final か প্রায়ই বাদ দিয়ে rising intonation: 明日行く？ তবে writing-এ question mark শেখার সহায়ক মাত্র।",
    ],
    contrasts: [
      "行きませんでした → 行かなかった; ভুল 行きなかった নয়, কারণ negative base 行かない→行かなかった।",
      "ひまです→ひまだ, কিন্তু おもしろいです→おもしろい; な-adjective-এ だ, い-adjective-এ だ নয়।",
      "先生、明日来る？ grammar possible হলেও social context-এ বেশি casual; নিরাপদ: 先生、明日来ますか。",
      "Plain = rude—এটি সবসময় সত্য নয়। Close friend-এর সঙ্গে natural; formal meeting-এ inappropriate হতে পারে। Relationship অর্থের অংশ।",
      "ভুল: 彼女は学生だ？ (statement-এর だ প্রশ্নেও রেখে দেওয়া)। → স্বাভাবিক casual question: 彼女は学生？ প্রশ্নে সাধারণত だ বাদ পড়ে, শুধু rising intonation থাকে।",
    ],
    workedSentences: [
      {
        japanese: "昨日は忙しかったから、どこにも行かなかった。",
        reading: "Kinou wa isogashikatta kara, doko ni mo ikanakatta.",
        bengali: "গতকাল ব্যস্ত ছিলাম বলে কোথাও যাইনি।",
        breakdown: [
          "昨日は (kinou wa) = গতকাল topic",
          "忙しかった (isogashikatta) = ব্যস্ত ছিলাম; い-adjective plain past",
          "から (kara) = কারণ/বলে",
          "どこにも (doko ni mo) = কোথাও",
          "行かなかった (ikanakatta) = যাইনি; 行かない→行かなかった",
        ],
        teachingPoint:
          "দুই clause-ই plain। 忙しい-এর past এবং 行く-এর negative-past family আলাদা—শুধু です বাদ দিলেই সব plain form হয় না।",
      },
      {
        japanese: "あの人は新しい社員だよ。",
        reading: "Ano hito wa atarashii shain da yo.",
        bengali: "ঐ ব্যক্তি নতুন employee।",
        breakdown: [
          "あの人は (ano hito wa) = ঐ ব্যক্তি topic",
          "新しい (atarashii) = নতুন; noun modifier",
          "社員だ (shain da) = employee; noun plain affirmative",
          "よ (yo) = শ্রোতাকে নতুন তথ্য/জোর দেওয়া",
        ],
        teachingPoint:
          "Predicate noun 社員 হওয়ায় polite です-এর plain counterpart だ। 新しい noun-এর আগে থাকায় তার form বদলায়নি।",
      },
      {
        japanese: "「今日、テストがあるの、知ってる？」「うん、知ってる。」",
        reading: "Kyou, tesuto ga aru no, shitteru? Un, shitteru.",
        bengali: "‘আজ যে টেস্ট আছে, জানো?’ ‘হ্যাঁ, জানি।’",
        breakdown: [
          "今日、テストがあるの (kyou, tesuto ga aru no) = আজ টেস্ট আছে; の ব্যাখ্যা/নরম জোরের ভাব দেয়",
          "知ってる？ (shitteru?) = জানো?; 知っている-এর casual সংক্ষিপ্ত রূপ",
          "うん、知ってる (un, shitteru) = হ্যাঁ, জানি",
        ],
        teachingPoint:
          "কথ্য casual speech-এ ~ている প্রায়ই ~てる-তে সংক্ষিপ্ত হয়ে যায়; の বাক্যের শেষে যোগ করলে ব্যাখ্যা বা নরম জোরের ভাব আসে।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "今日、ひま？",
        reading: "Kyou, hima?",
        bengali: "আজ free?",
      },
      {
        speaker: "B",
        japanese: "ううん、ひまじゃない。レポートを書く。",
        reading: "Uun, hima janai. Repooto o kaku.",
        bengali: "না, free নই। Report লিখব।",
      },
      {
        speaker: "A",
        japanese: "そう。じゃ、また明日ね。",
        reading: "Sou. Ja, mata ashita ne.",
        bengali: "আচ্ছা। তাহলে কাল আবার দেখা।",
      },
      {
        speaker: "A",
        japanese: "あ、ほんとう？大変だね。",
        reading: "A, hontou? Taihen da ne.",
        bengali: "ও, সত্যি? বেশ কঠিন তো।",
      },
      {
        speaker: "B",
        japanese: "うん、でも頑張る。",
        reading: "Un, demo ganbaru.",
        bengali: "হ্যাঁ, তবে চেষ্টা করব।",
      },
    ],
    practiceScaffolds: [
      {
        task: "たべます-এর চার plain form লিখুন।",
        hint: "dictionary, ない, た, なかった—এই চার ঘর পূরণ করুন。",
        model: "たべる／たべない／たべた／たべなかった。",
      },
      {
        task: "‘গতকাল শহর শান্ত ছিল না’ plain style-এ লিখুন।",
        hint: "しずか = な-adjective; negative past ending じゃなかった。",
        model: "きのう、まちは しずかじゃなかった。",
      },
      {
        task: "একই invitation বন্ধুকে casual এবং teacher-কে polite করে লিখুন।",
        hint: "Friend: いっしょに Vない？; teacher: いっしょに Vませんか。",
        model: "Friend: いっしょに ひるごはんを たべない？ Teacher: いっしょに ひるごはんを たべませんか。",
      },
      {
        task: "ほんとう?/どうして? ব্যবহার করে একটি ছোট casual exchange লিখুন।",
        hint: "ছোট প্রশ্ন word একাই সম্পূর্ণ turn হতে পারে।",
        model: "A: 今日、休み。 B: ほんとう？いいね！",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「いかなかった」。行きませんでした হলো polite negative past। প্রথমে plain negative 行かない বানান; তারপর ない-এর শেষ い বদলে なかった দিলে 行かなかった হয়। 「いかない」 negative হলেও past নয়。",
  },
  21: {
    coreIdea:
      "নিজের ভাবনা বা অন্যের কথা report করতে Japanese-এ পুরো message-টিকে plain clause বানিয়ে quotation particle と-এর আগে রাখা হয়। তারপর おもいます বললে ‘মনে করি’, いいました বললে ‘বলেছিলেন’। と-কে quotation box-এর closing mark ভাবুন।",
    mentalModel: [
      "[যে কথাটি ভাবছি] と おもいます—square bracket-এর সবটুকুই thought content।",
      "Quote-এর ভেতর polite です/ます নয়, সাধারণত plain form বসে; বাইরের おもいます/いいました listener-এর প্রতি politeness ধরে রাখে।",
      "Verb/い-adjective plain form সরাসরি と নেয়; noun/な-adjective affirmative non-past-এ だ + と লাগে।",
      "でしょう statement tone-এ ‘সম্ভবত’; rising confirmation tone-এ ‘তাই তো?’—context ও intonation অর্থ বদলায়।",
      "について টপিক নির্দিষ্ট করে opinion জিজ্ঞেস করার standard pattern তৈরি করে: Xについて どう おもいますか。",
    ],
    buildSteps: [
      "প্রথমে report না করে মূল কথাটি লিখুন: この町は静かです。",
      "ভেতরের predicate family ধরুন। 静か হলো な-adjective, তাই plain affirmative 静かだ করুন।",
      "পুরো content-এর পরে quotation と বসান: この町は静かだと…。",
      "নিজের thought হলে おもいます, কারও বলা কথা হলে Person は … と いいました যোগ করুন।",
      "Verb tense মূল speaker-এর intended time অনুযায়ী রাখুন: 明日休む = কাল ছুটি নেবে; 昨日休んだ = গতকাল ছুটি নিয়েছিল।",
      "নিজের মতামত নরম করতে たぶん (হয়তো) বা きっと (নিশ্চয়ই) sentence-এর শুরুতে যোগ করা যায়, でしょう-এর সঙ্গে মিলিয়ে: たぶん あめでしょう。",
      "Opinion প্রশ্নে Topic について どうおもいますか ব্যবহার করুন; উত্তরকে fact নয়, নিজের judgement হিসেবে দিন।",
    ],
    contrasts: [
      "ভুল: しずかと おもいます। → ঠিক: しずかだと おもいます। な-adjective affirmative plain-এ だ দরকার।",
      "おいしいと おもいます সঠিক; ভুল おいしいだと—い-adjective-এর পরে だ বসে না।",
      "田中さんは来るといいました = Tanaka বলেছেন তিনি/কেউ আসবেন; 田中さんに来るといいました-এ に দিলে Tanaka কথার receiver হয়ে যায়—particle অর্থ বদলায়।",
      "でしょう সবসময় প্রশ্ন নয়: 雨でしょう。= সম্ভবত বৃষ্টি হবে; 雨でしょう？= বৃষ্টি হবে, তাই তো?",
      "ভুল: あめでしょうか। (でしょう-এর সঙ্গে か একসঙ্গে জুড়ে দেওয়া অস্বাভাবিক)। → স্বাভাবিক: あめでしょう？ (rising intonation) বা শুধু statement হিসেবে あめでしょう।",
    ],
    workedSentences: [
      {
        japanese: "この計画は少し難しいと思います。",
        reading: "Kono keikaku wa sukoshi muzukashii to omoimasu.",
        bengali: "আমার মনে হয় এই পরিকল্পনাটি একটু কঠিন।",
        breakdown: [
          "この計画は (kono keikaku wa) = এই পরিকল্পনা topic",
          "少し (sukoshi) = একটু",
          "難しい (muzukashii) = কঠিন; い-adjective plain form",
          "と (to) = thought content-এর quotation marker",
          "思います (omoimasu) = মনে করি",
        ],
        teachingPoint:
          "難しい い-adjective হওয়ায় と-এর আগে だ লাগেনি। Speaker মতামত হিসেবে বলেছে, নিশ্চিত fact হিসেবে নয়।",
      },
      {
        japanese: "部長は会議が三時に始まると言いました。",
        reading: "Buchou wa kaigi ga sanji ni hajimaru to iimashita.",
        bengali: "বিভাগীয় প্রধান বলেছেন meeting তিনটায় শুরু হবে।",
        breakdown: [
          "部長は (buchou wa) = বিভাগীয় প্রধান speaker/topic",
          "会議が (kaigi ga) = meeting clause-subject",
          "三時に (sanji ni) = তিনটায়",
          "始まる (hajimaru) = শুরু হবে; plain non-past",
          "と言いました (to iimashita) = বলেছেন/বলেছিলেন",
        ],
        teachingPoint:
          "বাইরের 言いました past—বলা ইতিমধ্যে হয়েছে; ভেতরের 始まる non-past—meeting বলা সময়ের পরে শুরু হবে।",
      },
      {
        japanese: "彼女は正しいと思いますが、私は違う案があります。",
        reading: "Kanojo wa tadashii to omoimasu ga, watashi wa chigau an ga arimasu.",
        bengali: "আমার মনে হয় সে সঠিক, তবে আমার আলাদা একটা ধারণা আছে।",
        breakdown: [
          "彼女は正しいと思います (kanojo wa tadashii to omoimasu) = আমার মনে হয় সে সঠিক",
          "が (ga) = কিন্তু/তবে",
          "私は違う案があります (watashi wa chigau an ga arimasu) = আমার আলাদা একটা ধারণা আছে",
        ],
        teachingPoint:
          "が দিয়ে দুই বিপরীতমুখী মতামত জোড়া লাগানো যায়—নিজের মত জানানোর সময় বিনয়ের সঙ্গে ভিন্নমত প্রকাশের এটি common কৌশল।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "新しい仕事についてどう思いますか。",
        reading: "Atarashii shigoto ni tsuite dou omoimasu ka.",
        bengali: "নতুন কাজটি সম্পর্কে কী মনে করেন?",
      },
      {
        speaker: "B",
        japanese: "おもしろいと思います。でも、少し大変でしょう。",
        reading: "Omoshiroi to omoimasu. Demo, sukoshi taihen deshou.",
        bengali: "আকর্ষণীয় মনে হয়। তবে সম্ভবত একটু কঠিন হবে।",
      },
      {
        speaker: "A",
        japanese: "先輩もいい経験になると言いました。",
        reading: "Senpai mo ii keiken ni naru to iimashita.",
        bengali: "Senior-ও বলেছেন এটি ভালো অভিজ্ঞতা হবে।",
      },
      {
        speaker: "B",
        japanese: "そうですね。でも、頑張ります。",
        reading: "Sou desu ne. Demo, ganbarimasu.",
        bengali: "তাই তো। তবে চেষ্টা করব।",
      },
      {
        speaker: "A",
        japanese: "応援しています。",
        reading: "Ouen shite imasu.",
        bengali: "আপনাকে সমর্থন করছি।",
      },
    ],
    practiceScaffolds: [
      {
        task: "‘আমার মনে হয় এই খাবার সুস্বাদু’ লিখুন।",
        hint: "おいしい হলো い-adjective; plain অবস্থায় সরাসরি とおもいます。",
        model: "この りょうりは おいしいと おもいます。",
      },
      {
        task: "‘Mina বলেছেন কাল আসবেন’ reported speech করুন।",
        hint: "みなさんは + あした くる + といいました。",
        model: "ミナさんは あした くると いいました。",
      },
      {
        task: "একটি な-adjective opinion এবং একটি probability বাক্য লিখুন।",
        hint: "な-adjective + だとおもいます; probability-তে たぶん…でしょう。",
        model: "この アプリは べんりだと おもいます。たぶん にんきに なるでしょう。",
      },
      {
        task: "কারো মতামতের সঙ্গে が দিয়ে একটু ভিন্নমত প্রকাশ করুন।",
        hint: "[opinion A]と思いますが、[opinion B]।",
        model: "この案はいいと思いますが、少し高いと思います。",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「この まちは しずかだと おもいます。」। 静か হলো な-adjective; quotation-এর ভেতরের affirmative non-past plain form 静かだ। তার পরে quotation particle と এবং 思います বসে। 「静かな」 কেবল noun-এর আগে, যেমন 静かな町。",
  },
  22: {
    coreIdea:
      "একটি noun-এর আগে ছোট plain sentence বসিয়ে noun-টিকে নির্দিষ্ট করা যায়: ‘আমি গতকাল কিনেছি’ + ‘বই’ = 私が昨日買った本। Japanese-এ who/which/that-এর আলাদা relative pronoun লাগে না; বর্ণনাকারী clause সরাসরি noun-এর আগে বসে।",
    mentalModel: [
      "শেষ noun-টি হলো head: [কোন বই?]—[আমি গতকাল কিনেছি] এমন বই। প্রথমে head noun ধরলে sentence খুলে যায়।",
      "Bracket method: [わたしが きのう かった] ほん। Bracket-এর ভেতর plain clause, বাইরে noun।",
      "Relative clause-এর subject-এ は-এর বদলে が সাধারণ: わたしが作った料理। は পুরো sentence-এর topic-এর জন্য রাখুন।",
      "Head noun bracket-এর ভেতরে তার পুরোনো particle নেয় না; bracket বন্ধ হওয়ার পরে main sentence-এ নতুন particle পায়: [買った]本を 読みます。",
      "Clothing verb পরিবার আলাদা: きます (upper body), はきます (lower body/shoes), かぶります (মাথায়)—সঠিক verb বেছে নেওয়া জরুরি।",
    ],
    buildSteps: [
      "যে noun-টিকে চিহ্নিত করবেন সেটি শেষে লিখুন: 本。",
      "Noun সম্পর্কে ছোট independent sentence বানান: わたしは きのう 本を 買いました。",
      "Repeated head noun 本 এবং তার を clause থেকে সরান; clause-এর subject わたしは→わたしが করুন।",
      "Clause-কে plain করুন: 買いました→買った। তারপর noun-এর আগে বসান: わたしがきのう買った本।",
      "এই পুরো noun phrase main sentence-এ বসিয়ে নতুন particle দিন: …本を読みます / …本はおもしろいです。",
      "Clothing দিয়ে কাউকে describe করতে সঠিক verb বাছুন: শার্ট/জ্যাকেটে きている, প্যান্ট/জুতায় はいている, টুপি/চশমায় かぶっている/かけている।",
      "Tense দুই স্তরে পরীক্ষা করুন: 買った কেনা অতীতে; 読みます পড়া এখন/ভবিষ্যতে।",
    ],
    contrasts: [
      "ভুল: わたしが買ったの本。 → ঠিক: わたしが買った本。 Clause ও head noun-এর মাঝে の লাগে না।",
      "ভুল: わたしは作った料理。 → beginner standard: わたしが作った料理。 Relative clause-এর subject সাধারণত が。",
      "きのう買った本を読みます = গতকাল কেনা বই পড়ি/পড়ব; きのう買う本を読みました tense/meaning অসামঞ্জস্যপূর্ণ হতে পারে—clause time আলাদা করে ভাবুন।",
      "めがねをかけている人 = চশমা পরে আছেন এমন ব্যক্তি; めがねの人 শুধু ‘চশমার ব্যক্তি’—প্রথমটি action/state স্পষ্ট করে।",
      "ভুল: くつを きています। → সঠিক: くつを はいています। জুতা/প্যান্টের verb はきます, きます নয়।",
    ],
    workedSentences: [
      {
        japanese: "これは父が毎朝使うコップです。",
        reading: "Kore wa chichi ga maiasa tsukau koppu desu.",
        bengali: "এটি বাবা প্রতিদিন সকালে ব্যবহার করেন এমন cup।",
        breakdown: [
          "これは (kore wa) = এটি main topic",
          "父が (chichi ga) = বাবা relative clause-এর subject",
          "毎朝使う (maiasa tsukau) = প্রতি সকালে ব্যবহার করেন; plain non-past",
          "コップ (koppu) = modified head noun ‘cup’",
          "です (desu) = main sentence-এর polite ending",
        ],
        teachingPoint:
          "使う-এর object আসলে head noun コップ; তাই clause-এর ভেতরে コップを পুনরাবৃত্তি হয়নি।",
      },
      {
        japanese: "駅の前にある店でパンを買いました。",
        reading: "Eki no mae ni aru mise de pan o kaimashita.",
        bengali: "Station-এর সামনে যে দোকানটি আছে, সেখানে bread কিনেছি।",
        breakdown: [
          "駅の前に (eki no mae ni) = station-এর সামনে",
          "ある (aru) = আছে; relative clause plain form",
          "店で (mise de) = সেই দোকানে; head noun + main action-place で",
          "パンを (pan o) = bread",
          "買いました (kaimashita) = কিনেছি",
        ],
        teachingPoint:
          "店 relative clause-এ location হওয়া সত্ত্বেও particle পায়নি; পুরো phrase main sentence-এ action-place বলে 店で হয়েছে।",
      },
      {
        japanese: "赤い帽子をかぶっている子供は私の息子です。",
        reading: "Akai boushi o kabutte iru kodomo wa watashi no musuko desu.",
        bengali: "লাল টুপি পরা বাচ্চাটি আমার ছেলে।",
        breakdown: [
          "赤い帽子を (akai boushi o) = লাল টুপি",
          "かぶっている (kabutte iru) = পরে আছে; মাথায় পরার verb",
          "子供は (kodomo wa) = বাচ্চা; head noun, main sentence-এর topic",
          "私の息子です (watashi no musuko desu) = আমার ছেলে",
        ],
        teachingPoint:
          "かぶる শুধু মাথায় পরার জিনিসের (টুপি, হেলমেট) জন্য ব্যবহার হয়; きる/はく থেকে আলাদা verb family।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "机の上にある本はだれのですか。",
        reading: "Tsukue no ue ni aru hon wa dare no desu ka.",
        bengali: "Desk-এর ওপর যে বইটি আছে সেটি কার?",
      },
      {
        speaker: "B",
        japanese: "それは昨日先生がくれた本です。",
        reading: "Sore wa kinou sensei ga kureta hon desu.",
        bengali: "ওটি teacher গতকাল আমাকে দিয়েছেন এমন বই।",
      },
      {
        speaker: "A",
        japanese: "先生が書いた本ですか。",
        reading: "Sensei ga kaita hon desu ka.",
        bengali: "এটি কি teacher-এর লেখা বই?",
      },
      {
        speaker: "B",
        japanese: "はい、そうです。字もきれいですよ。",
        reading: "Hai, sou desu. Ji mo kirei desu yo.",
        bengali: "হ্যাঁ, ঠিক। হাতের লেখাও সুন্দর।",
      },
      {
        speaker: "A",
        japanese: "本当ですか。今度見せてください。",
        reading: "Hontou desu ka. Kondo misete kudasai.",
        bengali: "সত্যি? একদিন দেখাবেন।",
      },
    ],
    practiceScaffolds: [
      {
        task: "‘আমি বানিয়েছি এমন cake’—একটি noun phrase বানান।",
        hint: "わたしが + つくる-এর た-form + ケーキ。",
        model: "わたしが つくった ケーキ。",
      },
      {
        task: "Phrase-টি main sentence-এ বসিয়ে বলুন cakeটি সুস্বাদু ছিল।",
        hint: "পুরো phrase + は + おいしかったです。",
        model: "わたしが つくった ケーキは おいしかったです。",
      },
      {
        task: "এখন গান শুনছেন এমন person-কে relative clause দিয়ে চিহ্নিত করুন।",
        hint: "おんがくを きいている + ひと; তারপর main judgement যোগ করুন。",
        model: "おんがくを きいている ひとは あねです。— গান শুনছেন এমন ব্যক্তি আমার বড় বোন।",
      },
      {
        task: "‘টুপি পরা সেই বাচ্চাটি কে?’ relative clause দিয়ে জিজ্ঞেস করুন।",
        hint: "ぼうしを かぶっている + こども + は + だれですか。",
        model: "ぼうしを かぶっている こどもは だれですか。",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「わたしが きのう みた えいが」。Head noun えいが শেষে থাকে; ‘আমি গতকাল দেখেছি’ clauseটি plain past みた হয়ে তার আগে বসে। Clause-subject わたしが। মাঝে の বা relative pronoun প্রয়োজন নেই。",
  },
  23: {
    coreIdea:
      "とき কোনো সময়/পরিস্থিতিকে main action-এর সঙ্গে যুক্ত করে; verb-এর Vる/Vた দেখে বোঝা যায় とき-এর সময় সেই কাজটি সম্পূর্ণ হয়েছিল কি না। অন্যদিকে conditional と বলে, ‘A ঘটলেই নিয়মিত/স্বয়ংক্রিয়ভাবে B ঘটে’। দুইটি と দেখতে একই হলেও とき-এর অংশ এবং condition particle-এর কাজ আলাদা।",
    mentalModel: [
      "Vるとき: reference moment-এ V এখনও শেষ হয়নি—日本へ行くとき = Japan যাওয়ার সময়/আগে।",
      "Vたとき: reference moment-এ V শেষ—日本へ行ったとき = Japan গিয়ে/যখন গিয়েছিলাম।",
      "Adjective/noun connector family: い-adjective + とき; な-adjective + なとき; noun + のとき।",
      "Automatic と domino rule: button চাপলে light জ্বলে, বসন্ত এলে উষ্ণ হয়—speaker-এর ইচ্ছা নয়, predictable result।",
      "ঋতু/season-এর natural change বোঝাতেও Vると খুব common: 春になると、花が咲きます (বসন্ত এলে ফুল ফোটে)।",
    ],
    buildSteps: [
      "দুইটি ঘটনা লিখুন এবং কোনটি আগে ঘটে নির্ধারণ করুন। যেমন ticket কেনা এবং train-এ ওঠা।",
      "とき মুহূর্তে subordinate action অসম্পূর্ণ হলে dictionary form: 電車に乗るとき、切符を買います。",
      "Subordinate action ইতিমধ্যে শেষ হলে た-form: 電車に乗ったとき、友達に会いました。",
      "State হলে family connector দিন: 忙しいとき; ひまなとき; 子どものとき。",
      "স্বয়ংক্রিয়/বারবার একই result হলে A-কে dictionary form + と, তারপর natural result: 押すと、開きます。",
      "প্রাকৃতিক/ঋতুগত পরিবর্তন বলতে Season+になると+natural result ব্যবহার করুন: 春になると、花が咲きます。",
      "Conditional と-এর B অংশে beginner হিসেবে command/request/invitation/নিজের ইচ্ছা এড়িয়ে চলুন; সেসব たら-তে বলুন।",
    ],
    contrasts: [
      "日本へ来るとき、写真を撮りました = Japan আসার পথে/আগে ছবি তুলেছি; 日本へ来たとき、写真を撮りました = Japan এসে/যখন এসেছিলাম ছবি তুলেছি।",
      "ভুল: ひまのとき। → ঠিক: ひまなとき। ひま な-adjective; noun হলে 学生のとき।",
      "このボタンを押すと、ドアが開きます = automatic; このボタンを押すと、帰りましょう অস্বাভাবিক, কারণ invitation speaker-controlled।",
      "とき = ‘যখন/সময়’; conditional と = ‘করলেই ফলটি হয়’। শুধু বাংলা ‘যখন/যদি’ দেখে নয়, result-এর ধরন দেখে বাছুন।",
      "ভুল: 花が咲くと、うれしいです। (personal emotion result-এ automatic と)। → এই unit-এর beginner rule অনুযায়ী emotion/opinion result এড়িয়ে শুধু predictable physical result-এ と ব্যবহার করুন।",
    ],
    workedSentences: [
      {
        japanese: "家を出るとき、電気を消します。",
        reading: "Ie o deru toki, denki o keshimasu.",
        bengali: "বাসা থেকে বের হওয়ার সময়/আগে light বন্ধ করি।",
        breakdown: [
          "家を (ie o) = বাসা থেকে; 出る-এর departure point",
          "出るとき (deru toki) = বের হওয়ার সময়; তখন বের হওয়া complete হয়নি",
          "電気を (denki o) = light/electricity",
          "消します (keshimasu) = বন্ধ করি",
        ],
        teachingPoint:
          "Light বন্ধ করার মুহূর্তে বাসা ছাড়ার action এখনও সম্পূর্ণ নয়, তাই 出たとき নয়, 出るとき।",
      },
      {
        japanese: "この道をまっすぐ行くと、右に銀行があります。",
        reading: "Kono michi o massugu iku to, migi ni ginkou ga arimasu.",
        bengali: "এই রাস্তা সোজা গেলে ডান পাশে bank আছে।",
        breakdown: [
          "この道を (kono michi o) = এই রাস্তা ধরে",
          "まっすぐ行くと (massugu iku to) = সোজা গেলে; route-এর predictable result",
          "右に (migi ni) = ডান পাশে",
          "銀行があります (ginkou ga arimasu) = bank আছে",
        ],
        teachingPoint:
          "Map direction-এ একই route নিলে একই location পাওয়া যায়, তাই automatic/reliable conditional と natural।",
      },
      {
        japanese: "春になると、花が咲きます。",
        reading: "Haru ni naru to, hana ga sakimasu.",
        bengali: "বসন্ত এলে ফুল ফোটে।",
        breakdown: [
          "春に (haru ni) = বসন্তে",
          "なると (naru to) = হলে/এসে গেলে",
          "花が (hana ga) = ফুল",
          "咲きます (sakimasu) = ফোটে",
        ],
        teachingPoint:
          "ঋতু পরিবর্তনের natural/predictable result বলতে ~になると খুব common; এটি প্রতি বছর ঘটা নিয়মিত ঘটনা বোঝায়।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "このカードはいつ使いますか。",
        reading: "Kono kaado wa itsu tsukaimasu ka.",
        bengali: "এই card কখন ব্যবহার করি?",
      },
      {
        speaker: "B",
        japanese: "会社に入るとき、機械にカードを見せます。",
        reading: "Kaisha ni hairu toki, kikai ni kaado o misemasu.",
        bengali: "Company-তে ঢোকার সময় machine-কে card দেখান।",
      },
      {
        speaker: "B",
        japanese: "カードを見せると、ドアが開きます。",
        reading: "Kaado o miseru to, doa ga akimasu.",
        bengali: "Card দেখালেই door খুলে যায়।",
      },
      {
        speaker: "A",
        japanese: "便利ですね。",
        reading: "Benri desu ne.",
        bengali: "সুবিধাজনক, তাই না।",
      },
      {
        speaker: "B",
        japanese: "はい、とても便利です。",
        reading: "Hai, totemo benri desu.",
        bengali: "হ্যাঁ, খুব সুবিধাজনক।",
      },
    ],
    practiceScaffolds: [
      {
        task: "ঘুমানোর আগে light বন্ধ করেন—とき দিয়ে লিখুন।",
        hint: "ঘুমানো তখনও complete নয়: ねるとき。",
        model: "ねるとき、でんきを けします。",
      },
      {
        task: "Japan-এ পৌঁছে প্রথমবার sushi খেয়েছিলেন—来たとき দিয়ে লিখুন।",
        hint: "Arrival complete: にほんへ きたとき。",
        model: "にほんへ きたとき、はじめて すしを たべました。",
      },
      {
        task: "একটি machine-এর automatic result Vると দিয়ে লিখুন।",
        hint: "Button を おすと + device が action。",
        model: "この ボタンを おすと、みずが でます。— button চাপলে পানি বের হয়।",
      },
      {
        task: "ঋতু বদলের একটি natural result Vになると দিয়ে লিখুন।",
        hint: "Season+になると+natural result।",
        model: "冬になると、寒くなります。",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「この ボタンを おすと、でんきが つきます。」। 押す dictionary form + conditional と একটি button-operation-এর predictable result যুক্ত করেছে; 電気がつきます মানে light জ্বলে। অন্য options-এ とき/particle/form ভুল এবং automatic result structure নেই。",
  },
  24: {
    coreIdea:
      "কেউ কার উপকারে কাজ করেছে—একই ঘটনাকে কোন দিক থেকে দেখছেন তার ওপর てあげます, てもらいます বা てくれます বেছে নিন। শুধু ‘কে কাজ করেছে’ নয়; speaker-এর camera কার দিকে এবং উপকারটি কে পেল—এই দুই প্রশ্ন করুন।",
    mentalModel: [
      "てあげる: camera doer-এর কাছে—A অন্য B-এর জন্য কাজ করে দেয়। Arrow A → B।",
      "てもらう: camera beneficiary/receiver-এর কাছে—A, B-এর কাছ থেকে কাজটি করিয়ে/সাহায্য নিয়ে পায়। Arrow B → A, কিন্তু A sentence topic।",
      "てくれる: camera speaker-side-এ—অন্য কেউ আমার/আমাদের ঘনিষ্ঠজনের জন্য স্বেচ্ছায় কাজ করে দেয়। Arrow Other → Me/us।",
      "Favour grammar gratitude/benefit যোগ করে; neutral fact বললেই যথেষ্ট হলে simple verb বেশি natural হতে পারে।",
      "しょうかいします প্রায়ই てあげる/てくれる-এর সঙ্গে জুড়ে ব্যবহার হয়: いい みせを しょうかいして くれました (ভালো একটা দোকান পরিচয় করিয়ে দিয়েছে)।",
    ],
    buildSteps: [
      "ঘটনার তিনটি ভূমিকা লিখুন: doer কে, কাজটি কী, beneficiary কে। যেমন senior / CV দেখা / আমি।",
      "আমি receiver হিসেবে সাহায্য পাওয়া সামনে আনলে: わたしは せんぱいに CVを みてもらいました। Subject/topic আমি, helper-এ に।",
      "Senior আমার জন্য করেছেন—এই kindness সামনে আনলে: せんぱいが（わたしに）CVを みてくれました। Doer-এ が, beneficiary speaker-side।",
      "আমি অন্যের জন্য করলে: わたしは こうはいに せつめいしてあげました. তবে নিজের উদারতা জাহির শোনায় কি না context দেখুন।",
      "কাউকে কারো সঙ্গে পরিচয় করানোর কথা বলতে しょうかいして + あげる/くれる ব্যবহার করুন।",
      "Main verb-কে আগে て-form করুন, তারপর あげます/もらいます/くれます যোগ করুন। পুরো expression-এর tense শেষ verb-এ: くれました।",
      "Person-এর particle পুনরায় পরীক্ষা করুন: もらう-তে helper に/から; くれる-তে doer が/は; あげる-তে recipient に।",
    ],
    contrasts: [
      "先輩に見てもらいました = আমি senior-এর সাহায্য পেলাম; 先輩が見てくれました = senior আমার জন্য দেখে দিলেন—একই ঘটনা, camera আলাদা।",
      "ভুল: 先輩が見てもらいました যখন receiver ‘আমি’। → ঠিক: （私は）先輩に見てもらいました। もらう sentence-এর subject beneficiary।",
      "私は友達に手伝ってあげました grammatical হলেও self-congratulatory শোনাতে পারে; neutral 友達を手伝いました অনেক context-এ ভদ্র।",
      "くれます শুধু ‘দেয়’ নয়; Vてくれます-এ অন্যের action speaker/in-group-এর benefit হিসেবে দেখা হয়।",
      "ভুল: だれかが にもつを はこびました (সাহায্য নেওয়ার ভাব ছাড়াই শুধু fact)। → সাহায্য নেওয়া বোঝাতে: だれかに にもつを はこんで もらいました。",
    ],
    workedSentences: [
      {
        japanese: "日本人の友達にこの文を直してもらいました。",
        reading: "Nihonjin no tomodachi ni kono bun o naoshite moraimashita.",
        bengali: "একজন Japanese বন্ধুর সাহায্যে এই বাক্যটি ঠিক করিয়ে নিয়েছি।",
        breakdown: [
          "日本人の友達に (nihonjin no tomodachi ni) = Japanese বন্ধুর কাছ থেকে; helper",
          "この文を (kono bun o) = এই বাক্যটি",
          "直して (naoshite) = ঠিক করে; 直す→直して",
          "もらいました (moraimashita) = সাহায্যটি পেয়েছি/করিয়ে নিয়েছি",
        ],
        teachingPoint:
          "Omitted topic ‘আমি’ beneficiary। Friend doer হলেও もらう perspective-এ friend に-marked helper হয়।",
      },
      {
        japanese: "駅員さんが重い荷物を運んでくれました。",
        reading: "Ekiin-san ga omoi nimotsu o hakonde kuremashita.",
        bengali: "Station staff আমার ভারী luggage বহন করে দিয়েছেন।",
        breakdown: [
          "駅員さんが (ekiin-san ga) = station staff doer",
          "重い荷物を (omoi nimotsu o) = ভারী luggage-টি",
          "運んで (hakonde) = বহন করে; 運ぶ→運んで",
          "くれました (kuremashita) = আমার উপকারে করে দিয়েছেন",
        ],
        teachingPoint:
          "Beneficiary わたしに context থেকে বাদ গেছে। くれました speaker-এর gratitude/benefit perspective যোগ করেছে।",
      },
      {
        japanese: "同僚がいいレストランを紹介してくれました。",
        reading: "Douryou ga ii resutoran o shoukai shite kuremashita.",
        bengali: "সহকর্মী একটা ভালো রেস্টুরেন্ট পরিচয় করিয়ে দিয়েছে।",
        breakdown: [
          "同僚が (douryou ga) = সহকর্মী; doer",
          "いいレストランを (ii resutoran o) = ভালো রেস্টুরেন্ট",
          "紹介して (shoukai shite) = পরিচয় করিয়ে; 紹介する→紹介して",
          "くれました (kuremashita) = আমার উপকারে করে দিয়েছে",
        ],
        teachingPoint:
          "紹介してくれる খুব common expression—কাউকে নতুন কিছুর (দোকান, মানুষ, তথ্য) সঙ্গে পরিচয় করিয়ে দেওয়ার উপকারবোধ প্রকাশ করে।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "その写真、きれいですね。だれが撮りましたか。",
        reading: "Sono shashin, kirei desu ne. Dare ga torimashita ka.",
        bengali: "ছবিটি সুন্দর। কে তুলেছেন?",
      },
      {
        speaker: "B",
        japanese: "友達が撮ってくれました。",
        reading: "Tomodachi ga totte kuremashita.",
        bengali: "বন্ধু আমার জন্য তুলে দিয়েছেন।",
      },
      {
        speaker: "A",
        japanese: "私も友達に写真を撮ってもらいたいです。",
        reading: "Watashi mo tomodachi ni shashin o totte moraitai desu.",
        bengali: "আমিও বন্ধুর সাহায্যে ছবি তুলিয়ে নিতে চাই।",
      },
      {
        speaker: "A",
        japanese: "いいですね。私も今度紹介してもらえますか。",
        reading: "Ii desu ne. Watashi mo kondo shoukai shite moraemasu ka.",
        bengali: "চমৎকার। আমাকেও কি একদিন পরিচয় করিয়ে দিতে পারবেন?",
      },
      {
        speaker: "B",
        japanese: "もちろんです。",
        reading: "Mochiron desu.",
        bengali: "অবশ্যই।",
      },
    ],
    practiceScaffolds: [
      {
        task: "Teacher আপনার Japanese ঠিক করেছেন—receiver perspective-এ লিখুন।",
        hint: "（わたしは）せんせいに + にほんごを + なおしてもらいました。",
        model: "せんせいに にほんごを なおしてもらいました。",
      },
      {
        task: "বন্ধু আপনার জন্য station পর্যন্ত এসেছেন—くれました দিয়ে বলুন।",
        hint: "Doer が + speaker-এর benefit action て-form + くれました。",
        model: "ともだちが えきまで きてくれました。",
      },
      {
        task: "আপনি ছোট ভাই/বোনকে একটি কাজ করে দিয়েছেন—あげました এবং neutral version দুইটি লিখুন।",
        hint: "Benefit জোরে Vてあげました; neutral fact-এ simple Vました。",
        model: "おとうとに しゅくだいを せつめいしてあげました。／おとうとの しゅくだいを せつめいしました。",
      },
      {
        task: "কেউ আপনাকে ভালো কিছুর (দোকান/অ্যাপ) সঙ্গে পরিচয় করিয়ে দিয়েছে—紹介してくれました দিয়ে বলুন।",
        hint: "Doer が + いい N + を + 紹介して + くれました।",
        model: "ともだちが いい アプリを しょうかいして くれました。",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「せんぱいに CVを みて もらいました。」। Receiver perspective-এ omitted subject ‘আমি’; helper せんぱい-এর পরে に, object CV-এর পরে を, 見る→見て, এবং শেষে もらいました। অর্থ: senior-এর কাছ থেকে CV দেখার favour পেয়েছি。",
  },
  25: {
    coreIdea:
      "たら দিয়ে ‘যদি/যখন এই শর্ত পূর্ণ হয়, তখন…’ এবং ても দিয়ে ‘শর্তটি সত্য হলেও প্রত্যাশার বিপরীতে…’ বলা হয়। Form দেখতে past-এর মতো হলেও たら sentence সবসময় অতীত নয়; প্রথম clause complete হওয়ার শর্ত দেখায়, আর final clause আসল সময়/ইচ্ছা জানায়।",
    mentalModel: [
      "たら = gate: A gate খোলার/শর্ত পূর্ণ হওয়ার পরে B সম্ভব। 時間があったら = সময় থাকলে।",
      "ても = obstacle: A বাধা সত্য হলেও B বদলাবে না। 雨が降っても行きます = বৃষ্টি বাধা হলেও যাব।",
      "Verb た-form + ら; い-adjective かった + ら; な-adjective/noun だった + ら—predicate family ধরে gate বানান।",
      "どうしたらいいですか শব্দে-শব্দে ‘কী করলে ভালো?’—advice চাওয়ার natural fixed pattern।",
      "Health/advice context-এও たら স্বাভাবিক: びょうきだったら、やすんでください (অসুস্থ হলে বিশ্রাম নিন)।",
    ],
    buildSteps: [
      "প্রথমে condition A এবং result B আলাদা লিখুন: ‘কাজ শেষ হয়’ + ‘যোগাযোগ করব’।",
      "Verb condition-কে た-form করুন এবং ら দিন: おわる→おわったら। এই form ভবিষ্যৎ condition-ও হতে পারে।",
      "い-adjective: やすい→やすかったら; negative: やすくなかったら।",
      "な-adjective/noun: ひま→ひまだったら; あめ→あめだったら। Negative: ひまじゃなかったら।",
      "‘হলেও’ চাইলে positive て-form + も: ふる→ふっても; adjective むずかしい→むずかしくても; noun/adjective ひまでも।",
      "Advice দেওয়ার সময় condition+たら-এর পরে てください যোগ করলে polite recommendation হয়: つかれたら、やすんでください।",
      "Final clause-এ intention/request/invitation থাকতে পারে: 着いたら、電話してください—এ কারণেই automatic と-এর তুলনায় たら flexible।",
    ],
    contrasts: [
      "雨が降ったら、家にいます = বৃষ্টি হলে বাসায় থাকব; 雨が降っても、出かけます = বৃষ্টি হলেও বের হব—expected result বনাম contrary result।",
      "ভুল: 時間があるたら। → ঠিক: 時間があったら। ある-এর た-form あった + ら。",
      "春になると暖かくなります = স্বাভাবিক নিয়ম; 駅に着いたら電話してください = পৌঁছালে phone করুন—request থাকায় たら。",
      "たら past-looking হলেও 時間があったら勉強します future condition হতে পারে; sentence-final 勉強します সময়/ইচ্ছা দেখায়।",
      "ভুল: 練習したら、上手でした। (past guaranteed result হিসেবে ভুলভাবে বলা)। → স্বাভাবিক: 練習したら、上手になると思います। ভবিষ্যৎ/সম্ভাব্য result-এ になる+とおもいます বেশি স্বাভাবিক।",
    ],
    workedSentences: [
      {
        japanese: "駅に着いたら、メッセージを送ってください。",
        reading: "Eki ni tsuitara, messeeji o okutte kudasai.",
        bengali: "Station-এ পৌঁছালে message পাঠাবেন।",
        breakdown: [
          "駅に (eki ni) = station-এ destination",
          "着いたら (tsuitara) = পৌঁছালে; 着く→着いた + ら",
          "メッセージを (messeeji o) = message-টি",
          "送ってください (okutte kudasai) = অনুগ্রহ করে পাঠান",
        ],
        teachingPoint:
          "পৌঁছানো complete হওয়ার পর message action হবে। Result-এ request থাকায় automatic と নয়, たら natural।",
      },
      {
        japanese: "少し高くても、この靴を買いたいです。",
        reading: "Sukoshi takakute mo, kono kutsu o kaitai desu.",
        bengali: "একটু দামি হলেও এই জুতা কিনতে চাই।",
        breakdown: [
          "少し (sukoshi) = একটু",
          "高くても (takakute mo) = দামি হলেও; 高い→高くて + も",
          "この靴を (kono kutsu o) = এই জুতাটি",
          "買いたいです (kaitai desu) = কিনতে চাই; 買います→買い + たい",
        ],
        teachingPoint:
          "দাম বেশি হলে সাধারণ প্রত্যাশা ‘কিনব না’; ても দেখায় সেই বাধা সত্ত্বেও কেনার ইচ্ছা অপরিবর্তিত।",
      },
      {
        japanese: "毎日練習したら、日本語が上手になると思います。",
        reading: "Mainichi renshuu shitara, nihongo ga jouzu ni naru to omoimasu.",
        bengali: "প্রতিদিন অনুশীলন করলে Japanese দক্ষ হয়ে উঠবে বলে মনে হয়।",
        breakdown: [
          "毎日練習したら (mainichi renshuu shitara) = প্রতিদিন অনুশীলন করলে; たら condition",
          "日本語が上手になる (nihongo ga jouzu ni naru) = Japanese দক্ষ হয়ে উঠবে; change-of-state になります",
          "と思います (to omoimasu) = মনে হয়; opinion pattern",
        ],
        teachingPoint:
          "এক sentence-এ condition (たら), change-of-state (になる) এবং opinion (とおもいます)—তিনটি ভিন্ন unit-এর grammar একসঙ্গে জোড়া লেগেছে। শেষ unit-এর আসল লক্ষ্য এটাই: আলাদা pattern মিলিয়ে স্বাভাবিক, তথ্যবহুল বাক্য তৈরি করা।",
      },
    ],
    dialogue: [
      {
        speaker: "A",
        japanese: "明日、雨が降ったら、どうしますか。",
        reading: "Ashita, ame ga futtara, dou shimasu ka.",
        bengali: "কাল বৃষ্টি হলে কী করবেন?",
      },
      {
        speaker: "B",
        japanese: "雨が降っても、買い物に行きます。",
        reading: "Ame ga futte mo, kaimono ni ikimasu.",
        bengali: "বৃষ্টি হলেও shopping-এ যাব।",
      },
      {
        speaker: "A",
        japanese: "電車が止まったら、どうしたらいいですか。",
        reading: "Densha ga tomattara, dou shitara ii desu ka.",
        bengali: "Train বন্ধ হয়ে গেলে কী করা ভালো?",
      },
      {
        speaker: "B",
        japanese: "そうですね。まず駅員に聞いてみます。",
        reading: "Sou desu ne. Mazu ekiin ni kiite mimasu.",
        bengali: "তাই তো। প্রথমে station staff-কে জিজ্ঞেস করে দেখব।",
      },
      {
        speaker: "A",
        japanese: "それがいいと思います。頑張ってください。",
        reading: "Sore ga ii to omoimasu. Ganbatte kudasai.",
        bengali: "সেটাই ভালো হবে মনে হয়। শুভকামনা।",
      },
    ],
    practiceScaffolds: [
      {
        task: "সময় থাকলে Japanese পড়বেন—たら দিয়ে লিখুন।",
        hint: "ある→あった + ら; result-এ べんきょうします。",
        model: "じかんが あったら、にほんごを べんきょうします。",
      },
      {
        task: "কঠিন হলেও চেষ্টা করবেন—ても দিয়ে লিখুন।",
        hint: "むずかしい→むずかしくて + も。",
        model: "むずかしくても、やってみます。— কঠিন হলেও চেষ্টা করে দেখব।",
      },
      {
        task: "Japan-এ কোনো সমস্যা হলে কী করবেন—condition ও advice-question দুই line লিখুন।",
        hint: "Problem + たら、Person に ききます; নিজের অজানা situation-এ どうしたらいいですか。",
        model: "みちが わからなかったら、えきいんに ききます。さいふを なくしたら、どうしたら いいですか。",
      },
      {
        task: "N5-এর কমপক্ষে দুইটি ভিন্ন pattern মিলিয়ে (たら + とおもいます) নিজের ভবিষ্যতের একটি লক্ষ্য নিয়ে sentence লিখুন।",
        hint: "Condition(たら) + change/action + と思います।",
        model: "毎日勉強したら、N4に合格すると思います。",
      },
    ],
    answerExplanation:
      "সঠিক উত্তর 「じかんが あったら、べんきょうします。」। ある-এর た-form あった; তার সঙ্গে ら যোগ করে あったら = ‘থাকলে’। Form past-এর মতো দেখালেও final 勉強します দেখায় এটি ভবিষ্যৎ/বাস্তব সম্ভাবনার condition。",
  },
};
