export type LessonDashboard = {
  label: string;
  headline: string;
  summary: string;
  outcome: string;
  roadmap: Array<{ icon: string; title: string; description: string }>;
  conceptTitle: string;
  concepts: Array<{ japanese: string; label: string; note: string; tone: "teal" | "blue" | "gold" | "coral" | "plum" }>;
  dialogue: Array<{ speaker: string; japanese: string; romaji: string; bengali: string }>;
  checklist: string[];
};

const lessons: Record<number, LessonDashboard> = {
  1: {
    label: "IDENTITY · PEOPLE · POLITE SPEECH",
    headline: "নিজের ও অন্যের পরিচয় দিন",
    summary: "নাম, দেশ, পেশা ও বয়স—একটি স্থির noun-sentence structure ব্যবহার করে পরিচয় দেওয়া, প্রশ্ন করা এবং ভদ্রভাবে উত্তর দেওয়া শিখবেন।",
    outcome: "পাঠ শেষে ৩০ সেকেন্ডে নিজের পরিচয় দিতে এবং অন্য কাউকে ৩টি basic question করতে পারবেন।",
    roadmap: [
      { icon: "①", title: "পরিচয় বলুন", description: "N₁ は N₂ です দিয়ে নাম, দেশ ও পেশা বলুন।" },
      { icon: "②", title: "প্রশ্ন ও উত্তর", description: "শেষে か যোগ করে জিজ্ঞেস করুন; はい／いいえ দিয়ে উত্তর দিন।" },
      { icon: "③", title: "তথ্য যুক্ত করুন", description: "も, の এবং さん ব্যবহার করে natural পরিচয় তৈরি করুন।" },
    ],
    conceptTitle: "এক নজরে sentence map",
    concepts: [
      { japanese: "N₁ は N₂ です", label: "পরিচয়", note: "আমি/তিনি কে বা কী", tone: "teal" },
      { japanese: "N₁ は N₂ じゃありません", label: "Negative", note: "N₂ নয়", tone: "coral" },
      { japanese: "N₁ は N₂ ですか", label: "Question", note: "শেষে か", tone: "blue" },
      { japanese: "N₁ も N₂ です", label: "একই তথ্য", note: "ও / এছাড়াও", tone: "gold" },
      { japanese: "N₁ の N₂", label: "সম্পর্ক", note: "প্রতিষ্ঠান, দেশ বা মালিকানা", tone: "plum" },
      { japanese: "名前 + さん", label: "সম্মান", note: "নিজের নামের পরে নয়", tone: "teal" },
    ],
    dialogue: [
      { speaker: "A", japanese: "初めまして。ハリムです。", romaji: "Hajimemashite. Harimu desu.", bengali: "প্রথম পরিচয়। আমি হালিম।" },
      { speaker: "B", japanese: "サラです。学生です。", romaji: "Sara desu. Gakusei desu.", bengali: "আমি সারা। আমি শিক্ষার্থী।" },
      { speaker: "A", japanese: "サラさんも バングラデシュ人ですか。", romaji: "Sara-san mo Banguradeshu-jin desu ka.", bengali: "সারা-সানও কি বাংলাদেশি?" },
      { speaker: "B", japanese: "はい、そうです。", romaji: "Hai, sou desu.", bengali: "হ্যাঁ, তাই।" },
    ],
    checklist: ["নিজের নাম, দেশ ও পেশা বলতে পারি", "です／じゃありません দিয়ে positive-negative বদলাতে পারি", "か দিয়ে question করতে পারি", "も ও の-এর কাজ আলাদা করে বুঝি"],
  },
  2: {
    label: "OBJECTS · DISTANCE · OWNERSHIP",
    headline: "কোন জিনিসটি কোথায় এবং কার—বলুন",
    summary: "বক্তা ও শ্রোতার দূরত্ব দেখে これ・それ・あれ এবং noun-এর আগে この・その・あの বেছে নেওয়া, জিনিসের নাম ও মালিকানা জিজ্ঞেস করা শিখবেন।",
    outcome: "পাঠ শেষে আশপাশের জিনিস দেখিয়ে ‘এটি কী?’, ‘ঐটি কার?’ এবং ‘এই বই’—স্বাভাবিকভাবে বলতে পারবেন।",
    roadmap: [
      { icon: "①", title: "Distance দেখুন", description: "জিনিসটি বক্তার কাছে, শ্রোতার কাছে নাকি দুজনের থেকে দূরে—চিহ্নিত করুন।" },
      { icon: "②", title: "Form বেছে নিন", description: "একা হলে これ／それ／あれ; noun থাকলে この／その／あの ব্যবহার করুন।" },
      { icon: "③", title: "নাম ও মালিকানা", description: "なん দিয়ে জিনিসের নাম এবং だれの দিয়ে মালিক জানতে চান।" },
    ],
    conceptTitle: "Distance অনুযায়ী form বাছুন",
    concepts: [
      { japanese: "これ ／ この N", label: "বক্তার কাছে", note: "এটি / এই N", tone: "coral" },
      { japanese: "それ ／ その N", label: "শ্রোতার কাছে", note: "সেটি / সেই N", tone: "teal" },
      { japanese: "あれ ／ あの N", label: "দুজনের থেকে দূরে", note: "ওটি / ঐ N", tone: "blue" },
      { japanese: "これは なんですか", label: "জিনিসের নাম", note: "এটি কী?", tone: "gold" },
      { japanese: "だれの N ですか", label: "মালিকানা", note: "কার N?", tone: "plum" },
      { japanese: "はい、そうです", label: "Confirm", note: "হ্যাঁ, তাই", tone: "teal" },
    ],
    dialogue: [
      { speaker: "A", japanese: "これは なんですか。", romaji: "Kore wa nan desu ka.", bengali: "এটি কী?" },
      { speaker: "B", japanese: "英語の 辞書です。", romaji: "Eigo no jisho desu.", bengali: "ইংরেজি ভাষার অভিধান।" },
      { speaker: "A", japanese: "その辞書は だれのですか。", romaji: "Sono jisho wa dare no desu ka.", bengali: "সেই অভিধানটি কার?" },
      { speaker: "B", japanese: "ミラーさんのです。", romaji: "Miraa-san no desu.", bengali: "মিলার-সানের।" },
    ],
    checklist: ["これ ও この-এর পার্থক্য বুঝি", "distance দেখে これ／それ／あれ বেছে নিতে পারি", "なん দিয়ে জিনিসের নাম জিজ্ঞেস করতে পারি", "だれの ও Nのです দিয়ে মালিকানা বলতে পারি"],
  },
  3: {
    label: "PLACES · DIRECTIONS · FLOORS · PRICES",
    headline: "জায়গা খুঁজুন, পথ দেখান এবং দাম জিজ্ঞেস করুন",
    summary: "ここ・そこ・あそこ দিয়ে জায়গার দূরত্ব, こちら・そちら・あちら দিয়ে ভদ্র direction, 何階 দিয়ে floor এবং いくら দিয়ে price জিজ্ঞেস করা শিখবেন। একই সঙ্গে কোথাও বস্তু বা মানুষ থাকার あります／います pattern-ও ব্যবহার করবেন।",
    outcome: "পাঠ শেষে reception, elevator বা restroom কোথায় বলতে, department-store counter-এর floor জানতে এবং কোনো পণ্যের দাম জিজ্ঞেস করতে পারবেন।",
    roadmap: [
      { icon: "①", title: "জায়গা চিহ্নিত করুন", description: "বক্তার কাছে ここ, শ্রোতার কাছে そこ এবং দুজনের থেকে দূরে あそこ বলুন।" },
      { icon: "②", title: "পথ ও floor জিজ্ঞেস করুন", description: "どこ／どちら দিয়ে location বা direction এবং 何階 দিয়ে floor জিজ্ঞেস করুন।" },
      { icon: "③", title: "থাকা ও দাম বলুন", description: "あります／います দিয়ে existence এবং いくら／円 দিয়ে price বলুন।" },
    ],
    conceptTitle: "Location থেকে price—এক নজরে sentence map",
    concepts: [
      { japanese: "ここ ／ そこ ／ あそこ", label: "Place distance", note: "এখানে / সেখানে / ওখানে", tone: "coral" },
      { japanese: "こちら ／ そちら ／ あちら", label: "Polite direction", note: "এই / সেই / ওই দিকে", tone: "teal" },
      { japanese: "N は どこ／どちらですか", label: "Location question", note: "কোথায় / কোন দিকে?", tone: "blue" },
      { japanese: "Place に N が あります／います", label: "Existence", note: "বস্তু / মানুষ আছে", tone: "gold" },
      { japanese: "N は 何階ですか", label: "Floor", note: "কোন তলায়?", tone: "plum" },
      { japanese: "この N は いくらですか", label: "Price", note: "এই N-এর দাম কত?", tone: "teal" },
    ],
    dialogue: [
      { speaker: "客", japanese: "すみません。靴売り場は どちらですか。", romaji: "Sumimasen. Kutsu uriba wa dochira desu ka.", bengali: "মাফ করবেন, জুতার sales counter কোন দিকে?" },
      { speaker: "店員", japanese: "あちらです。二階です。", romaji: "Achira desu. Ni-kai desu.", bengali: "ওই দিকে। দ্বিতীয় তলায়।" },
      { speaker: "客", japanese: "このネクタイは いくらですか。", romaji: "Kono nekutai wa ikura desu ka.", bengali: "এই necktie-এর দাম কত?" },
      { speaker: "店員", japanese: "二千五百円です。", romaji: "Ni-sen go-hyaku-en desu.", bengali: "দাম ২,৫০০ yen।" },
      { speaker: "客", japanese: "ロビーに 電話が ありますか。", romaji: "Robii ni denwa ga arimasu ka.", bengali: "Lobby-তে telephone আছে কি?" },
      { speaker: "店員", japanese: "はい、あります。受付の となりです。", romaji: "Hai, arimasu. Uketsuke no tonari desu.", bengali: "হ্যাঁ, আছে। Reception-এর পাশে।" },
    ],
    checklist: [
      "ここ・そこ・あそこ এবং これ・それ・あれ-এর পার্থক্য বুঝি",
      "どこ ও polite どちら দিয়ে location/direction জিজ্ঞেস করতে পারি",
      "বস্তুতে あります এবং মানুষ/প্রাণীতে います ব্যবহার করতে পারি",
      "何階 দিয়ে floor এবং いくら দিয়ে price জিজ্ঞেস করতে পারি",
      "百・千・万・円 ব্যবহার করে basic price পড়তে পারি",
    ],
  },
};

export function getMinnaN5LessonDetails(unitNumber: number) {
  return lessons[unitNumber];
}
