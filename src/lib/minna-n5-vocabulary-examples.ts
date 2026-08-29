export type VocabularyExample = {
  japanese: string;
  romaji: string;
  bengali: string;
};

const unit1Examples: VocabularyExample[] = [
  { japanese: "わたしは ラナです。", romaji: "Watashi wa Rana desu.", bengali: "আমি রানা।" },
  { japanese: "あなたは がくせいですか。", romaji: "Anata wa gakusei desu ka.", bengali: "আপনি কি শিক্ষার্থী?" },
  { japanese: "あのひとは せんせいです。", romaji: "Ano hito wa sensei desu.", bengali: "ওই ব্যক্তি শিক্ষক।" },
  { japanese: "たなかさんは にほんじんです。", romaji: "Tanaka-san wa Nihon-jin desu.", bengali: "তানাকা-সান জাপানি।" },
  { japanese: "はなちゃんは ごさいです。", romaji: "Hana-chan wa go-sai desu.", bengali: "হানা-চানের বয়স পাঁচ বছর।" },
  { japanese: "わたしは バングラデシュじんです。", romaji: "Watashi wa Banguradeshu-jin desu.", bengali: "আমি বাংলাদেশি।" },
  { japanese: "ミラーさんは せんせいです。", romaji: "Miraa-san wa sensei desu.", bengali: "মিলার-সান শিক্ষক।" },
  { japanese: "わたしは にほんごの きょうしです。", romaji: "Watashi wa Nihongo no kyoushi desu.", bengali: "আমি জাপানি ভাষার শিক্ষক।" },
  { japanese: "アリさんは だいがくの がくせいです。", romaji: "Ari-san wa daigaku no gakusei desu.", bengali: "আলি-সান বিশ্ববিদ্যালয়ের শিক্ষার্থী।" },
  { japanese: "わたしは かいしゃいんです。", romaji: "Watashi wa kaishain desu.", bengali: "আমি কোম্পানির কর্মচারী।" },
  { japanese: "サントスさんは IMCの しゃいんです。", romaji: "Santosu-san wa IMC no shain desu.", bengali: "সান্তোস-সান IMC-এর কর্মচারী।" },
  { japanese: "マリアさんは ぎんこういんです。", romaji: "Maria-san wa ginkouin desu.", bengali: "মারিয়া-সান ব্যাংকের কর্মচারী।" },
  { japanese: "カリムさんは いしゃです。", romaji: "Karimu-san wa isha desu.", bengali: "করিম-সান ডাক্তার।" },
  { japanese: "ワンさんは けんきゅうしゃです。", romaji: "Wan-san wa kenkyuusha desu.", bengali: "ওয়াং-সান গবেষক।" },
  { japanese: "さくらだいがくは とうきょうです。", romaji: "Sakura daigaku wa Toukyou desu.", bengali: "সাকুরা বিশ্ববিদ্যালয় টোকিওতে।" },
  { japanese: "こうべびょういんは おおきいです。", romaji: "Koube byouin wa ookii desu.", bengali: "কোবে হাসপাতাল বড়।" },
  { japanese: "あのかたは どなたですか。", romaji: "Ano kata wa donata desu ka.", bengali: "ওই ভদ্রলোক/ভদ্রমহিলা কে?" },
  { japanese: "わたしは にじゅうごさいです。", romaji: "Watashi wa nijuu-go-sai desu.", bengali: "আমার বয়স পঁচিশ বছর।" },
  { japanese: "おいくつですか。", romaji: "Oikutsu desu ka.", bengali: "আপনার বয়স কত?" },
  { japanese: "はい、がくせいです。", romaji: "Hai, gakusei desu.", bengali: "হ্যাঁ, আমি শিক্ষার্থী।" },
  { japanese: "いいえ、せんせいでは ありません。", romaji: "Iie, sensei dewa arimasen.", bengali: "না, আমি শিক্ষক নই।" },
  { japanese: "スミスさんは アメリカから きました。", romaji: "Sumisu-san wa Amerika kara kimashita.", bengali: "স্মিথ-সান আমেরিকা থেকে এসেছেন।" },
  { japanese: "ベーカーさんは イギリスじんです。", romaji: "Beekaa-san wa Igirisu-jin desu.", bengali: "বেকার-সান ব্রিটিশ।" },
  { japanese: "ラオさんは インドから きました。", romaji: "Rao-san wa Indo kara kimashita.", bengali: "রাও-সান ভারত থেকে এসেছেন।" },
  { japanese: "ディアさんは インドネシアじんです。", romaji: "Dia-san wa Indoneshia-jin desu.", bengali: "দিয়া-সান ইন্দোনেশীয়।" },
  { japanese: "キムさんは かんこくじんです。", romaji: "Kimu-san wa Kankoku-jin desu.", bengali: "কিম-সান দক্ষিণ কোরীয়।" },
  { japanese: "ワットさんは タイから きました。", romaji: "Watto-san wa Tai kara kimashita.", bengali: "ওয়াত-সান থাইল্যান্ড থেকে এসেছেন।" },
  { japanese: "ワンさんは ちゅうごくじんです。", romaji: "Wan-san wa Chuugoku-jin desu.", bengali: "ওয়াং-সান চীনা।" },
  { japanese: "シュミットさんは ドイツじんです。", romaji: "Shumitto-san wa Doitsu-jin desu.", bengali: "শুমিট-সান জার্মান।" },
  { japanese: "たなかさんは にほんから きました。", romaji: "Tanaka-san wa Nihon kara kimashita.", bengali: "তানাকা-সান জাপান থেকে এসেছেন।" },
  { japanese: "サントスさんは ブラジルじんです。", romaji: "Santosu-san wa Burajiru-jin desu.", bengali: "সান্তোস-সান ব্রাজিলীয়।" },
  { japanese: "わたしは IMCの しゃいんです。", romaji: "Watashi wa IMC no shain desu.", bengali: "আমি IMC-এর কর্মচারী।" },
  { japanese: "パワーでんきは にほんの かいしゃです。", romaji: "Pawaa Denki wa Nihon no kaisha desu.", bengali: "Power Electric একটি জাপানি কোম্পানি।" },
  { japanese: "ブラジルエアーの しゃいんです。", romaji: "Burajiru Eaa no shain desu.", bengali: "আমি Brazil Air-এর কর্মচারী।" },
  { japanese: "AKCは アメリカの かいしゃです。", romaji: "AKC wa Amerika no kaisha desu.", bengali: "AKC একটি আমেরিকান কোম্পানি।" },
  { japanese: "カリムさんは こうべびょういんの いしゃです。", romaji: "Karimu-san wa Koube byouin no isha desu.", bengali: "করিম-সান কোবে হাসপাতালের ডাক্তার।" },
  { japanese: "わたしは さくらだいがくの がくせいです。", romaji: "Watashi wa Sakura daigaku no gakusei desu.", bengali: "আমি সাকুরা বিশ্ববিদ্যালয়ের শিক্ষার্থী।" },
  { japanese: "ミラーさんは ふじだいがくの きょうしです。", romaji: "Miraa-san wa Fuji daigaku no kyoushi desu.", bengali: "মিলার-সান ফুজি বিশ্ববিদ্যালয়ের শিক্ষক।" },
  { japanese: "わたしの しごとは エンジニアです。", romaji: "Watashi no shigoto wa enjinia desu.", bengali: "আমার পেশা ইঞ্জিনিয়ার।" },
  { japanese: "おくには どちらですか。", romaji: "Okuni wa dochira desu ka.", bengali: "আপনার দেশ কোনটি?" },
];

export function getMinnaN5VocabularyExample(unitNumber: number, index: number) {
  return unitNumber === 1 ? unit1Examples[index] : undefined;
}
