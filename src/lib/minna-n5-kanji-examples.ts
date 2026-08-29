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

export function getMinnaN5KanjiExample(unitNumber: number, kanji: string) {
  return unitNumber === 1 ? unit1KanjiExamples[kanji] : undefined;
}
