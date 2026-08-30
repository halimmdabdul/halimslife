export type KanjiSentenceExample = {
  japanese: string;
  romaji: string;
  bengali: string;
};

const unit1KanjiExamples: Record<string, KanjiSentenceExample> = {
  私: { japanese: "私は ハリムです。", romaji: "Watashi wa Harimu desu.", bengali: "আমি হালিম।" },
  人: { japanese: "あの人は 先生です。", romaji: "Ano hito wa sensei desu.", bengali: "ওই ব্যক্তি শিক্ষক।" },
  方: { japanese: "あの方は どなたですか。", romaji: "Ano kata wa donata desu ka.", bengali: "ওই ভদ্রলোক/ভদ্রমহিলা কে?" },
  先: { japanese: "田中先生は 日本人です。", romaji: "Tanaka-sensei wa Nihon-jin desu.", bengali: "তানাকা-সেনসেই জাপানি।" },
  生: { japanese: "私は 大学生です。", romaji: "Watashi wa daigakusei desu.", bengali: "আমি বিশ্ববিদ্যালয়ের শিক্ষার্থী।" },
  教: { japanese: "ミラーさんは 日本語を 教えます。", romaji: "Miraa-san wa Nihongo o oshiemasu.", bengali: "মিলার-সান জাপানি ভাষা শেখান।" },
  師: { japanese: "私は 日本語の 教師です。", romaji: "Watashi wa Nihongo no kyoushi desu.", bengali: "আমি জাপানি ভাষার শিক্ষক।" },
  学: { japanese: "アリさんは 大学で 日本語を 学びます。", romaji: "Ari-san wa daigaku de Nihongo o manabimasu.", bengali: "আলি-সান বিশ্ববিদ্যালয়ে জাপানি ভাষা শেখেন।" },
  会: { japanese: "IMCは 日本の 会社です。", romaji: "IMC wa Nihon no kaisha desu.", bengali: "IMC একটি জাপানি কোম্পানি।" },
  社: { japanese: "サントスさんは 会社の 社員です。", romaji: "Santosu-san wa kaisha no shain desu.", bengali: "সান্তোস-সান কোম্পানির কর্মচারী।" },
  員: { japanese: "私は 会社員です。", romaji: "Watashi wa kaishain desu.", bengali: "আমি কোম্পানির কর্মচারী।" },
  銀: { japanese: "マリアさんは 銀行員です。", romaji: "Maria-san wa ginkouin desu.", bengali: "মারিয়া-সান ব্যাংকের কর্মচারী।" },
  行: { japanese: "父は 銀行員です。", romaji: "Chichi wa ginkouin desu.", bengali: "আমার বাবা ব্যাংকের কর্মচারী।" },
  医: { japanese: "カリムさんは 医者です。", romaji: "Karimu-san wa isha desu.", bengali: "করিম-সান ডাক্তার।" },
  者: { japanese: "ワンさんは 研究者です。", romaji: "Wan-san wa kenkyuusha desu.", bengali: "ওয়াং-সান গবেষক।" },
  研: { japanese: "研究者は 大学に います。", romaji: "Kenkyuusha wa daigaku ni imasu.", bengali: "গবেষক বিশ্ববিদ্যালয়ে আছেন।" },
  究: { japanese: "先生は 日本語を 研究します。", romaji: "Sensei wa Nihongo o kenkyuu shimasu.", bengali: "শিক্ষক জাপানি ভাষা নিয়ে গবেষণা করেন।" },
  大: { japanese: "私は さくら大学の 学生です。", romaji: "Watashi wa Sakura daigaku no gakusei desu.", bengali: "আমি সাকুরা বিশ্ববিদ্যালয়ের শিক্ষার্থী।" },
  病: { japanese: "病院は ここです。", romaji: "Byouin wa koko desu.", bengali: "হাসপাতাল এখানে।" },
  院: { japanese: "カリムさんは 神戸病院の 医者です。", romaji: "Karimu-san wa Koube byouin no isha desu.", bengali: "করিম-সান কোবে হাসপাতালের ডাক্তার।" },
  一: { japanese: "妹は 一歳です。", romaji: "Imouto wa issai desu.", bengali: "আমার ছোট বোনের বয়স এক বছর।" },
  歳: { japanese: "私は 二十五歳です。", romaji: "Watashi wa nijuu-go-sai desu.", bengali: "আমার বয়স পঁচিশ বছর।" },
  何: { japanese: "ミラーさんは 何歳ですか。", romaji: "Miraa-san wa nan-sai desu ka.", bengali: "মিলার-সানের বয়স কত?" },
  韓: { japanese: "キムさんは 韓国人です。", romaji: "Kimu-san wa Kankoku-jin desu.", bengali: "কিম-সান দক্ষিণ কোরীয়।" },
  国: { japanese: "お国は どちらですか。", romaji: "Okuni wa dochira desu ka.", bengali: "আপনার দেশ কোনটি?" },
  中: { japanese: "ワンさんは 中国人です。", romaji: "Wan-san wa Chuugoku-jin desu.", bengali: "ওয়াং-সান চীনা।" },
  日: { japanese: "田中さんは 日本人です。", romaji: "Tanaka-san wa Nihon-jin desu.", bengali: "তানাকা-সান জাপানি।" },
  本: { japanese: "ミラーさんは 日本から 来ました。", romaji: "Miraa-san wa Nihon kara kimashita.", bengali: "মিলার-সান জাপান থেকে এসেছেন।" },
  電: { japanese: "私は パワー電気の 社員です。", romaji: "Watashi wa Pawaa Denki no shain desu.", bengali: "আমি Power Electric-এর কর্মচারী।" },
  気: { japanese: "パワー電気は 日本の 会社です。", romaji: "Pawaa Denki wa Nihon no kaisha desu.", bengali: "Power Electric একটি জাপানি কোম্পানি।" },
  神: { japanese: "神戸病院は 大きいです。", romaji: "Koube byouin wa ookii desu.", bengali: "কোবে হাসপাতাল বড়।" },
  戸: { japanese: "カリムさんは 神戸に います。", romaji: "Karimu-san wa Koube ni imasu.", bengali: "করিম-সান কোবেতে আছেন।" },
  富: { japanese: "ミラーさんは 富士大学の 教師です。", romaji: "Miraa-san wa Fuji daigaku no kyoushi desu.", bengali: "মিলার-সান ফুজি বিশ্ববিদ্যালয়ের শিক্ষক।" },
  士: { japanese: "富士大学は 日本の 大学です。", romaji: "Fuji daigaku wa Nihon no daigaku desu.", bengali: "ফুজি বিশ্ববিদ্যালয় জাপানের একটি বিশ্ববিদ্যালয়।" },
  名: { japanese: "お名前は 何ですか。", romaji: "Onamae wa nan desu ka.", bengali: "আপনার নাম কী?" },
};

const unit2KanjiExamples: Record<string, KanjiSentenceExample> = {
  本: { japanese: "この本は おもしろいです。", romaji: "Kono hon wa omoshiroi desu.", bengali: "এই বইটি মজার।" },
  辞: { japanese: "これは 英語の 辞書です。", romaji: "Kore wa Eigo no jisho desu.", bengali: "এটি ইংরেজি ভাষার অভিধান।" },
  書: { japanese: "その辞書は わたしのです。", romaji: "Sono jisho wa watashi no desu.", bengali: "সেই অভিধানটি আমার।" },
  新: { japanese: "これは きょうの 新聞です。", romaji: "Kore wa kyou no shinbun desu.", bengali: "এটি আজকের সংবাদপত্র।" },
  聞: { japanese: "新聞は そこです。", romaji: "Shinbun wa soko desu.", bengali: "সংবাদপত্রটি সেখানে।" },
  雑: { japanese: "この雑誌は 日本のです。", romaji: "Kono zasshi wa Nihon no desu.", bengali: "এই ম্যাগাজিনটি জাপানের।" },
  誌: { japanese: "それは カメラの 雑誌です。", romaji: "Sore wa kamera no zasshi desu.", bengali: "সেটি ক্যামেরার ম্যাগাজিন।" },
  電: { japanese: "これは 会社の 電話です。", romaji: "Kore wa kaisha no denwa desu.", bengali: "এটি কোম্পানির টেলিফোন।" },
  話: { japanese: "あの電話は だれのですか。", romaji: "Ano denwa wa dare no desu ka.", bengali: "ঐ টেলিফোনটি কার?" },
  車: { japanese: "あの車は ミラーさんのです。", romaji: "Ano kuruma wa Miraa-san no desu.", bengali: "ঐ গাড়িটি মিলার-সানের।" },
  土: { japanese: "これは 京都の お土産です。", romaji: "Kore wa Kyouto no omiyage desu.", bengali: "এটি কিয়োটোর স্মারক উপহার।" },
  産: { japanese: "お土産は チョコレートです。", romaji: "Omiyage wa chokoreeto desu.", bengali: "স্মারক উপহারটি চকলেট।" },
  英: { japanese: "これは 英語の 本です。", romaji: "Kore wa Eigo no hon desu.", bengali: "এটি ইংরেজি ভাষার বই।" },
  語: { japanese: "英語の 辞書は これです。", romaji: "Eigo no jisho wa kore desu.", bengali: "ইংরেজি অভিধানটি এটি।" },
  何: { japanese: "これは 何ですか。", romaji: "Kore wa nan desu ka.", bengali: "এটি কী?" },
  気: { japanese: "気にしないでください。", romaji: "Ki ni shinaide kudasai.", bengali: "চিন্তা করবেন না।" },
};

const unit3KanjiExamples: Record<string, KanjiSentenceExample> = {
  場:{japanese:"この場所は 受付です。",romaji:"Kono basho wa uketsuke desu.",bengali:"এই জায়গাটি reception।"},所:{japanese:"お手洗いは どこですか。",romaji:"Otearai wa doko desu ka.",bengali:"Restroom কোথায়?"},
  教:{japanese:"先生は 教室に います。",romaji:"Sensei wa kyoushitsu ni imasu.",bengali:"শিক্ষক classroom-এ আছেন।"},室:{japanese:"会議室は あそこです。",romaji:"Kaigishitsu wa asoko desu.",bengali:"Meeting room ওখানে।"},
  食:{japanese:"食堂に 自動販売機が あります。",romaji:"Shokudou ni jidouhanbaiki ga arimasu.",bengali:"Canteen-এ vending machine আছে।"},堂:{japanese:"食堂は こちらです。",romaji:"Shokudou wa kochira desu.",bengali:"Canteen এই দিকে।"},
  事:{japanese:"事務所は 二階です。",romaji:"Jimusho wa nikai desu.",bengali:"Office দ্বিতীয় তলায়।"},務:{japanese:"山田さんは 事務所に います。",romaji:"Yamada-san wa jimusho ni imasu.",bengali:"ইয়ামাদা office-এ আছেন।"},
  会:{japanese:"会議室は どちらですか。",romaji:"Kaigishitsu wa dochira desu ka.",bengali:"Meeting room কোন দিকে?"},議:{japanese:"会議は 会議室です。",romaji:"Kaigi wa kaigishitsu desu.",bengali:"Meeting সভাকক্ষে।"},
  受:{japanese:"受付は ここです。",romaji:"Uketsuke wa koko desu.",bengali:"Reception এখানে।"},付:{japanese:"受付に 人が います。",romaji:"Uketsuke ni hito ga imasu.",bengali:"Reception-এ একজন আছেন।"},
  部:{japanese:"この部屋は 教室です。",romaji:"Kono heya wa kyoushitsu desu.",bengali:"এই room-টি classroom।"},屋:{japanese:"部屋に 電話が あります。",romaji:"Heya ni denwa ga arimasu.",bengali:"Room-এ telephone আছে।"},
  階:{japanese:"階段は あちらです。",romaji:"Kaidan wa achira desu.",bengali:"সিঁড়ি ওই দিকে।"},段:{japanese:"エレベーターは 階段の となりです。",romaji:"Erebeetaa wa kaidan no tonari desu.",bengali:"Lift সিঁড়ির পাশে।"},
  自:{japanese:"自動販売機は ロビーに あります。",romaji:"Jidouhanbaiki wa robii ni arimasu.",bengali:"Vending machine lobby-তে আছে।"},動:{japanese:"これは 自動販売機です。",romaji:"Kore wa jidouhanbaiki desu.",bengali:"এটি vending machine।"},
  販:{japanese:"会社に 自動販売機が あります。",romaji:"Kaisha ni jidouhanbaiki ga arimasu.",bengali:"Company-তে vending machine আছে।"},売:{japanese:"あそこに 自動販売機が あります。",romaji:"Asoko ni jidouhanbaiki ga arimasu.",bengali:"ওখানে vending machine আছে।"},機:{japanese:"自動販売機は そこです。",romaji:"Jidouhanbaiki wa soko desu.",bengali:"Vending machine সেখানে।"},
  電:{japanese:"電話は 事務所に あります。",romaji:"Denwa wa jimusho ni arimasu.",bengali:"Telephone office-এ আছে।"},話:{japanese:"ロビーに 電話が あります。",romaji:"Robii ni denwa ga arimasu.",bengali:"Lobby-তে telephone আছে।"},
  社:{japanese:"IMCは 日本の 会社です。",romaji:"IMC wa Nihon no kaisha desu.",bengali:"IMC একটি Japanese company।"},国:{japanese:"お国は どちらですか。",romaji:"Okuni wa dochira desu ka.",bengali:"আপনার দেশ কোনটি?"},
  地:{japanese:"食堂は 地下です。",romaji:"Shokudou wa chika desu.",bengali:"Canteen basement-এ।"},下:{japanese:"地下に 売り場が あります。",romaji:"Chika ni uriba ga arimasu.",bengali:"Basement-এ sales counter আছে।"},何:{japanese:"受付は 何階ですか。",romaji:"Uketsuke wa nan-gai desu ka.",bengali:"Reception কোন তলায়?"},
  百:{japanese:"これは 八百円です。",romaji:"Kore wa happyaku-en desu.",bengali:"এটির দাম ৮০০ yen।"},千:{japanese:"このワインは 二千円です。",romaji:"Kono wain wa ni-sen-en desu.",bengali:"এই wine-এর দাম ২,০০০ yen।"},万:{japanese:"カメラは 二万円です。",romaji:"Kamera wa ni-man-en desu.",bengali:"Camera-র দাম ২০,০০০ yen।"},円:{japanese:"二千五百円です。",romaji:"Ni-sen go-hyaku-en desu.",bengali:"দাম ২,৫০০ yen।"},
  靴:{japanese:"靴売り場は どちらですか。",romaji:"Kutsu uriba wa dochira desu ka.",bengali:"জুতার counter কোন দিকে?"},
};

const unit4KanjiExamples: Record<string, KanjiSentenceExample> = {
  起:{japanese:"毎朝 6時に 起きます。",romaji:"Maiasa roku-ji ni okimasu.",bengali:"প্রতিদিন সকাল ৬টায় উঠি।"},寝:{japanese:"毎晩 11時に 寝ます。",romaji:"Maiban juuichi-ji ni nemasu.",bengali:"প্রতি রাত ১১টায় ঘুমাই।"},働:{japanese:"9時から 5時まで 働きます。",romaji:"Ku-ji kara go-ji made hatarakimasu.",bengali:"৯টা থেকে ৫টা পর্যন্ত কাজ করি।"},休:{japanese:"日曜日に 休みます。",romaji:"Nichiyoubi ni yasumimasu.",bengali:"রবিবার বিশ্রাম নিই।"},
  勉:{japanese:"毎日 日本語を 勉強します。",romaji:"Mainichi Nihongo o benkyou shimasu.",bengali:"প্রতিদিন জাপানি পড়ি।"},強:{japanese:"毎晩 2時間 勉強します。",romaji:"Maiban ni-jikan benkyou shimasu.",bengali:"প্রতি রাতে দুই ঘণ্টা পড়াশোনা করি।"},終:{japanese:"仕事は 5時に 終わります。",romaji:"Shigoto wa go-ji ni owarimasu.",bengali:"কাজ ৫টায় শেষ হয়।"},銀:{japanese:"銀行は 9時からです。",romaji:"Ginkou wa ku-ji kara desu.",bengali:"ব্যাংক ৯টা থেকে খোলে।"},行:{japanese:"銀行は 3時に 終わります。",romaji:"Ginkou wa san-ji ni owarimasu.",bengali:"ব্যাংক ৩টায় বন্ধ হয়।"},
  郵:{japanese:"郵便局は どこですか。",romaji:"Yuubinkyoku wa doko desu ka.",bengali:"ডাকঘর কোথায়?"},便:{japanese:"郵便局は 9時から 5時までです。",romaji:"Yuubinkyoku wa ku-ji kara go-ji made desu.",bengali:"ডাকঘর ৯টা থেকে ৫টা পর্যন্ত।"},局:{japanese:"郵便局は 土曜日に 休みます。",romaji:"Yuubinkyoku wa doyoubi ni yasumimasu.",bengali:"ডাকঘর শনিবার বন্ধ থাকে।"},図:{japanese:"図書館で 勉強します。",romaji:"Toshokan de benkyou shimasu.",bengali:"লাইব্রেরিতে পড়াশোনা করি।"},書:{japanese:"図書館は 月曜日に 休みます。",romaji:"Toshokan wa getsuyoubi ni yasumimasu.",bengali:"লাইব্রেরি সোমবার বন্ধ থাকে।"},館:{japanese:"美術館は 5時までです。",romaji:"Bijutsukan wa go-ji made desu.",bengali:"শিল্প জাদুঘর ৫টা পর্যন্ত।"},
  美:{japanese:"日曜日に 美術館へ 行きます。",romaji:"Nichiyoubi ni bijutsukan e ikimasu.",bengali:"রবিবার শিল্প জাদুঘরে যাই।"},術:{japanese:"美術館は 9時からです。",romaji:"Bijutsukan wa ku-ji kara desu.",bengali:"শিল্প জাদুঘর ৯টা থেকে খোলে।"},今:{japanese:"今 何時ですか。",romaji:"Ima nan-ji desu ka.",bengali:"এখন কয়টা?"},時:{japanese:"今 7時です。",romaji:"Ima shichi-ji desu.",bengali:"এখন ৭টা।"},分:{japanese:"7時10分です。",romaji:"Shichi-ji juppun desu.",bengali:"এখন ৭টা ১০ মিনিট।"},半:{japanese:"6時半に 起きます。",romaji:"Roku-ji han ni okimasu.",bengali:"সাড়ে ৬টায় উঠি।"},何:{japanese:"会議は 何時ですか。",romaji:"Kaigi wa nan-ji desu ka.",bengali:"মিটিং কয়টায়?"},
  午:{japanese:"会議は 午後 2時です。",romaji:"Kaigi wa gogo ni-ji desu.",bengali:"মিটিং দুপুর ২টায়।"},前:{japanese:"午前 8時から 働きます。",romaji:"Gozen hachi-ji kara hatarakimasu.",bengali:"সকাল ৮টা থেকে কাজ করি।"},後:{japanese:"午後 5時に 終わります。",romaji:"Gogo go-ji ni owarimasu.",bengali:"বিকেল ৫টায় শেষ হয়।"},朝:{japanese:"毎朝 6時半に 起きます。",romaji:"Maiasa roku-ji han ni okimasu.",bengali:"প্রতি সকাল সাড়ে ৬টায় উঠি।"},昼:{japanese:"昼休みは 12時からです。",romaji:"Hiruyasumi wa juu-ni-ji kara desu.",bengali:"দুপুরের বিরতি ১২টা থেকে।"},晩:{japanese:"今晩 日本語を 勉強します。",romaji:"Konban Nihongo o benkyou shimasu.",bengali:"আজ রাতে জাপানি পড়ব।"},夜:{japanese:"夜 11時に 寝ます。",romaji:"Yoru juuichi-ji ni nemasu.",bengali:"রাত ১১টায় ঘুমাই।"},
  昨:{japanese:"昨日 勉強しました。",romaji:"Kinou benkyou shimashita.",bengali:"গতকাল পড়াশোনা করেছি।"},日:{japanese:"日曜日は 休みです。",romaji:"Nichiyoubi wa yasumi desu.",bengali:"রবিবার ছুটি।"},明:{japanese:"明日 休みます。",romaji:"Ashita yasumimasu.",bengali:"আগামীকাল বিশ্রাম নেব।"},試:{japanese:"試験は 金曜日です。",romaji:"Shiken wa kinyoubi desu.",bengali:"পরীক্ষা শুক্রবার।"},験:{japanese:"あさって 試験が あります。",romaji:"Asatte shiken ga arimasu.",bengali:"আগামী পরশু পরীক্ষা আছে।"},会:{japanese:"会議は 午後 3時です。",romaji:"Kaigi wa gogo san-ji desu.",bengali:"মিটিং দুপুর ৩টায়।"},議:{japanese:"火曜日に 会議が あります。",romaji:"Kayoubi ni kaigi ga arimasu.",bengali:"মঙ্গলবার মিটিং আছে।"},映:{japanese:"映画は 7時からです。",romaji:"Eiga wa shichi-ji kara desu.",bengali:"সিনেমা ৭টা থেকে।"},画:{japanese:"土曜日に 映画を 見ます。",romaji:"Doyoubi ni eiga o mimasu.",bengali:"শনিবার সিনেমা দেখি।"},毎:{japanese:"毎日 日本語を 勉強します。",romaji:"Mainichi Nihongo o benkyou shimasu.",bengali:"প্রতিদিন জাপানি পড়ি।"},
  月:{japanese:"月曜日に 働きます。",romaji:"Getsuyoubi ni hatarakimasu.",bengali:"সোমবার কাজ করি।"},曜:{japanese:"休みは 何曜日ですか。",romaji:"Yasumi wa nan-youbi desu ka.",bengali:"ছুটি কী বার?"},火:{japanese:"火曜日に 会議が あります。",romaji:"Kayoubi ni kaigi ga arimasu.",bengali:"মঙ্গলবার মিটিং আছে।"},水:{japanese:"水曜日は 休みです。",romaji:"Suiyoubi wa yasumi desu.",bengali:"বুধবার ছুটি।"},木:{japanese:"木曜日に 勉強します。",romaji:"Mokuyoubi ni benkyou shimasu.",bengali:"বৃহস্পতিবার পড়াশোনা করি।"},金:{japanese:"金曜日に 試験が あります。",romaji:"Kinyoubi ni shiken ga arimasu.",bengali:"শুক্রবার পরীক্ষা আছে।"},土:{japanese:"土曜日に 映画を 見ます。",romaji:"Doyoubi ni eiga o mimasu.",bengali:"শনিবার সিনেমা দেখি।"},
  大:{japanese:"毎日 10時まで 働きます。大変ですね。",romaji:"Mainichi juu-ji made hatarakimasu. Taihen desu ne.",bengali:"প্রতিদিন ১০টা পর্যন্ত কাজ করেন—কষ্টকর, তাই না!"},変:{japanese:"毎日 勉強します。大変ですね。",romaji:"Mainichi benkyou shimasu. Taihen desu ne.",bengali:"প্রতিদিন পড়েন—কষ্টকর, তাই না!"},番:{japanese:"会社は 何番ですか。",romaji:"Kaisha wa nan-ban desu ka.",bengali:"কোম্পানির নম্বর কত?"},号:{japanese:"電話番号は 03-1234-5678です。",romaji:"Denwa bangou wa zero-san no ichi-ni-san-yon no go-roku-nana-hachi desu.",bengali:"ফোন নম্বর 03-1234-5678।"},北:{japanese:"北京は 今 午後 3時です。",romaji:"Pekin wa ima gogo san-ji desu.",bengali:"বেইজিংয়ে এখন দুপুর ৩টা।"},京:{japanese:"北京は 何時ですか。",romaji:"Pekin wa nan-ji desu ka.",bengali:"বেইজিংয়ে কয়টা?"},
};

export function getMinnaN5KanjiExample(unitNumber: number, kanji: string) {
  if (unitNumber === 1) return unit1KanjiExamples[kanji];
  if (unitNumber === 2) return unit2KanjiExamples[kanji];
  if (unitNumber === 3) return unit3KanjiExamples[kanji];
  if (unitNumber === 4) return unit4KanjiExamples[kanji];
  return undefined;
}
