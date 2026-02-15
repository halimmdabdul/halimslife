import type { Lang } from "@/contexts/LanguageContext";

export type Dictionary = Record<string, string>;

export const dictionaries: Record<Lang, Dictionary> = {
  bn: {
    // Nav
    "nav.home": "হোম",
    "nav.about": "আমার সম্পর্কে",
    "nav.blog": "ব্লগ",
    "nav.resources": "রিসোর্স",
    "nav.contact": "যোগাযোগ",
    "nav.menu": "মেনু",
    "nav.themeToggle": "থিম পরিবর্তন",
    "nav.lang": "ভাষা",

    // Brand
    "brand.tagline": "Japan • Robotics • CV",

    // Home
    "home.badge": "জাপান থেকে বাংলা কনটেন্ট",
    "home.heroTitle": "জাপানে ইঞ্জিনিয়ারিং জীবন,\nবাংলা ভাষায় জাপানি শেখা,\nআর প্রোগ্রামিং ফান্ডামেন্টাল",
    "home.heroDesc":
      "আমি Halim — Robotics / Computer Vision ব্যাকগ্রাউন্ডের একজন ইঞ্জিনিয়ার, বর্তমানে জাপানে আছি। এই সাইটে আপনি পাবেন বাস্তব অভিজ্ঞতা, স্টাডি রোডম্যাপ, এবং শেখার মতো প্র্যাকটিক্যাল রিসোর্স।",

    // Home Hero Slider (5 slides)
    "home.slider.1.title": "জাপানে ইঞ্জিনিয়ারিং জীবন",
    "home.slider.1.desc": "কাজের কালচার, স্কিল-গ্রোথ, আর বাস্তব অভিজ্ঞতা—একদম প্র্যাকটিক্যালভাবে শেয়ার করি।",
    "home.slider.2.title": "বাংলা ভাষায় জাপানি শেখা",
    "home.slider.2.desc": "কানা থেকে JLPT N5–N1 পর্যন্ত—ধাপে ধাপে রোডম্যাপ ও রিসোর্স।",
    "home.slider.3.title": "প্রোগ্রামিং ফান্ডামেন্টাল",
    "home.slider.3.desc": "Syntax না—problem solving, debugging mindset, আর strong base।",
    "home.slider.4.title": "শিখুন • লিখুন • এগিয়ে যান",
    "home.slider.4.desc": "ছোট ছোট স্টেপে ধারাবাহিকতা রাখলেই বড় ফল আসে—চলুন শুরু করি।",
    "home.slider.5.title": "আমি Halim",
    "home.slider.5.desc": "Robotics / Computer Vision ব্যাকগ্রাউন্ডের একজন ইঞ্জিনিয়ার, বর্তমানে জাপানে আছি।",
    "home.cta.blog": "ব্লগ পড়ুন",
    "home.cta.jp": "জাপানি শিখুন",
    "home.cta.prog": "প্রোগ্রামিং শিখুন",
    "home.stat.location": "বর্তমান অবস্থান",
    "home.stat.job": "পেশা",
    "home.stat.focus": "ফোকাস",
    "home.box.title": "এখানে কী পাবেন",
    "home.box.desc": "ক্যাটাগরি অনুযায়ী পড়ুন",
    "home.featured.title": "Featured লেখা",
    "home.featured.desc": "সবচেয়ে গুরুত্বপূর্ণ/শুরু করার মতো পোস্ট",
    "home.featured.all": "সব পোস্ট",

    // Projects preview
    "home.projects.title": "সেরা প্রজেক্টগুলো",
    "home.projects.desc": "আমার করা বেছে নেওয়া ৫টি প্রজেক্ট — ছোট প্রিভিউসহ",
    "home.projects.all": "সব রিসোর্স",
    "home.projects.view": "দেখুন",

    "home.projects.1.title": "KanaStory",
    "home.projects.1.desc": "হিরাগানা/কাতাকানা শেখার জন্য ইন্টার‌্যাক্টিভ প্র্যাকটিস + স্টোরি-ভিত্তিক ফ্লো।",
    "home.projects.1.tag1": "Japanese",
    "home.projects.1.tag2": "Beginner",

    "home.projects.2.title": "JLPT N5 Hub",
    "home.projects.2.desc": "N5 লেভেলের ভোকাব, গ্রামার, প্র্যাকটিস—এক জায়গায় ধাপে ধাপে সাজানো।",
    "home.projects.2.tag1": "JLPT",
    "home.projects.2.tag2": "N5",

    "home.projects.3.title": "JLPT N4 Hub",
    "home.projects.3.desc": "N4 রোডম্যাপ, নোট, আর দরকারি রিসোর্স—ফোকাসডভাবে সাজানো।",
    "home.projects.3.tag1": "JLPT",
    "home.projects.3.tag2": "N4",

    "home.projects.4.title": "JLPT N3 Hub",
    "home.projects.4.desc": "N3 লেভেলের জন্য স্টাডি-গাইড, লিংক, এবং প্র্যাকটিস-ফোকাসড রিসোর্স।",
    "home.projects.4.tag1": "JLPT",
    "home.projects.4.tag2": "N3",

    "home.projects.5.title": "GitHub Portfolio",
    "home.projects.5.desc": "আমার ওপেন-সোর্স কোড, এক্সপেরিমেন্ট, আর ছোট টুলস—সব এক জায়গায়।",
    "home.projects.5.tag1": "Code",
    "home.projects.5.tag2": "Open source",

    // Home quick contact
    "home.quickContact.title": "দ্রুত মেসেজ পাঠান",
    "home.quickContact.desc": "কোনো প্রশ্ন/কোলাবোরেশন—এখান থেকেই লিখুন।",
    "home.quickContact.note": "সাবমিট করলে আপনার ডিভাইসে ইমেইল অ্যাপ খুলে যাবে (backend ছাড়াই)।",
    "home.quickContact.send": "মেসেজ পাঠান",

    "home.learn.title": "আপনি কী শিখতে চান?", 
    "home.learn.desc": "আপনার লক্ষ্য অনুযায়ী একটি ক্যাটাগরি দিয়ে শুরু করুন — ধাপে ধাপে এগোলে শেখা সহজ হয়।",
    "home.learn.resources": "রিসোর্স লাইব্রেরি",
    "home.learn.contact": "যোগাযোগ করুন",

    "home.hub.title": "জাপানি শেখার হাব",
    "home.hub.desc": "কানা থেকে শুরু করে JLPT N5–N1 — যেটা দরকার, সেটাতে ক্লিক করুন।",
    "home.hub.kana": "কানা শিখুন",
    "home.hub.kanaDesc": "হিরাগানা + কাতাকানা বেসিক—শুরু করার জন্য পারফেক্ট।",
    "home.hub.n5": "N5 জাপানি",
    "home.hub.n5Desc": "বেসিক গ্রামার, ভোকাব, আর প্র্যাকটিস সেট—N5 স্টার্টার প্যাক।",
    "home.hub.n4": "N4 জাপানি",
    "home.hub.n4Desc": "N5-এর পরের ধাপ—আরও গ্রামার, রিডিং, লিসনিং।",
    "home.hub.n3": "N3 জাপানি",
    "home.hub.n3Desc": "ইন্টারমিডিয়েট লেভেল—রিডিং/লিসনিং শক্ত করার ফোকাস।",
    "home.hub.n2": "N2 জাপানি",
    "home.hub.n2Desc": "জব/ইউনিভার্সিটি লেভেলের জন্য সিরিয়াস স্টাডি—N2 রোডম্যাপ।",
    "home.hub.n1": "N1 জাপানি",
    "home.hub.n1Desc": "অ্যাডভান্সড লেভেল—নেটিভ কনটেন্ট ও এক্সাম-ফোকাসড প্রস্তুতি।",

    // About
    "about.badge": "About Me",
    "about.title": "আমি Halim",
    "about.lead":
      "আমি একজন সফটওয়্যার ইঞ্জিনিয়ার এবং বর্তমানে জাপানের プライムプラネットエナジー&ソリューションズ株式会社 (Prime Planet Energy & Solutions / PPES)-এ কর্মরত। আমি Shizuoka University থেকে Computer Science বিষয়ে Master of Science (MSc) সম্পন্ন করেছি। জাপানে পড়াশোনা, কাজ এবং দৈনন্দিন জীবনের অভিজ্ঞতা থেকেই বুঝেছি—সঠিক পদ্ধতি ব্যবহার করলে জাপানি ভাষা শেখা সহজ ও আনন্দদায়ক হতে পারে। এই সাইটে আমি শেয়ার করি জাপানে ইঞ্জিনিয়ারিং/ক্যারিয়ার লাইফের বাস্তব অভিজ্ঞতা, বাংলা ভাষায় জাপানি শেখার গাইড (N5–N1), এবং প্রোগ্রামিং ফান্ডামেন্টাল।",
    "about.storyTitle": "জাপানে আসার গল্প (সংক্ষেপে)",
    "about.story":
      "প্রতিটি মানুষের জার্নি আলাদা। আমার ক্ষেত্রে এটা ছিল curiosity + consistency-এর কম্বিনেশন। টেকনিক্যাল স্কিল, ভাষা, এবং কালচার — তিনটা দিকেই একসাথে ধীরে ধীরে কাজ করেছি।",
    "about.expTitle": "ইঞ্জিনিয়ারিং অভিজ্ঞতা",
    "about.locationValue": "Japan",
    "about.jobLine": "Software Engineer (PPES, Japan)",
    "about.exp.1": "Perception/vision, sensor/camera pipeline, এবং problem-solving mindset—এগুলোই আমার কাজের মূল ফোকাস।",
    "about.exp.2": "জাপানের টিমে কাজ করতে গেলে পরিষ্কার ডকুমেন্টেশন, কনটেক্সট শেয়ার করা, এবং নিয়মিত আপডেট—এগুলো বড় অ্যাডভান্টেজ।",
    "about.eduTitle": "শিক্ষাগত ব্যাকগ্রাউন্ড",
    "about.edu": "Shizuoka University, Japan — Master of Science (MSc), Computer Science",

    "about.researchTitle": "Research & Publications",
    "about.scholarLabel": "Google Scholar Profile",
    "about.scholarUrl": "https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ",

    "about.pubs.1.title": "Implementing recommender system-based approach for health management mobile application",
    "about.pubs.1.meta": "Halim Md Abdul, Ihsan Ibrahim, Naoki Fukuta — 2021 17th International Conference on Quality in Research (QIR): International Symposium on Electrical and Computer Engineering, IEEE (pp. 187–190). Published: 2021-10-13.",
    "about.pubs.1.cites": "Cited by: 3",

    "about.pubs.2.title": "Preliminary analysis of recommender-based approach for medical diagnostic problems.",
    "about.pubs.2.meta": "Halim Md Abdul, Naoki Fukuta — IEICE Technical Report; IEICE Tech. Rep., Vol. 120, Issue 281, pp. 57–58. Published: 2020-12-03.",
    "about.pubs.2.cites": "(Citations: see Scholar)",
    "about.pubs.more": "আরও দেখুন",

    "about.goals": "1) বাংলা ভাষায় জাপানি শেখাকে আরও সহজ করা\n2) প্রোগ্রামিং ফান্ডামেন্টালকে practical করে তোলা\n3) জাপানে পড়াশোনা/ক্যারিয়ার করতে চাওয়া মানুষদের জন্য রিয়েল অভিজ্ঞতা শেয়ার", 
    "about.goalsTitle": "ভবিষ্যৎ লক্ষ্য",

    // Blog
    "blog.title": "ব্লগ",
    "blog.desc": "Japanese Study, Programming, Japan life, Engineering — সব এক জায়গায়।",
    "blog.search": "সার্চ",
    "blog.searchDesc": "শিরোনাম/ট্যাগ দিয়ে খুঁজুন",
    "blog.searchPlaceholder": "যেমন: N5, debugging, japan...",
    "blog.searchBtn": "খুঁজুন",
    "blog.reset": "ফিল্টার রিসেট",
    "blog.category": "ক্যাটাগরি",
    "blog.categoryDesc": "বিষয় অনুযায়ী ফিল্টার",
    "blog.all": "সব",
    "blog.emptyTitle": "কিছুই পাওয়া যায়নি",
    "blog.emptyDesc": "অন্য কীওয়ার্ড দিন বা ক্যাটাগরি পরিবর্তন করুন।",
    "blog.back": "ব্লগ",

    // Resources
    "resources.title": "রিসোর্স",
    "resources.desc": "আমি নিজে যে ধরনের টুল/লিংক রেফারেন্স হিসেবে ব্যবহার করি — সেগুলো এখানে সাজিয়ে রাখছি।",
    "resources.jp": "জাপানি শেখা",
    "resources.prog": "প্রোগ্রামিং",
    "resources.tools": "টুলস",

    // Contact
    "contact.title": "যোগাযোগ",
    "contact.desc": "কোনো প্রশ্ন, কোলাবোরেশন, বা ফিডব্যাক — নির্দ্বিধায় লিখুন।",
    "contact.form": "কন্টাক্ট ফর্ম",
    "contact.formDesc": "সাবমিট করলে আপনার ডিভাইসে ইমেইল অ্যাপ খুলে যাবে (backend ছাড়াই কাজ করার জন্য)।",
    "contact.name": "নাম",
    "contact.email": "ইমেইল",
    "contact.topic": "টপিক",
    "contact.message": "মেসেজ",
    "contact.send": "পাঠান",
    "contact.social": "সোশ্যাল",
    "contact.socialDesc": "ফলো করুন / কানেক্ট হোন",
    "contact.newsletter": "নিউজলেটার",
    "contact.newsletterDesc": "নতুন পোস্ট/রিসোর্স আপডেট পেতে সাবস্ক্রাইব করুন",
    "contact.subscribe": "সাবস্ক্রাইব (ডেমো)",

    // Post
    "post.notFound": "পোস্ট পাওয়া যায়নি",
    "post.notFoundDesc": "সম্ভবত লিংকটি ভুল অথবা পোস্টটি সরানো হয়েছে।",
    "post.backToBlog": "ব্লগে ফিরে যান",
    "post.prev": "আগের পোস্ট",
    "post.next": "পরের পোস্ট",

    "post.share.title": "Social Share",
    "post.share.native": "Share",
    "post.share.copy": "লিংক কপি",
    "post.share.copied": "লিংক কপি হয়েছে",
    "post.share.copyPrompt": "এই লিংকটি কপি করুন",

    // Newsletter popup
    "popup.title": "নতুন পোস্ট মিস করবেন না",
    "popup.weekly": "সাপ্তাহিক আপডেট",
    "popup.desc":
      "জাপানি শেখা (N5–N1), প্রোগ্রামিং ফান্ডামেন্টাল, আর জাপানে ইঞ্জিনিয়ারিং লাইফ—নতুন কনটেন্ট ইমেইলে পেতে সাবস্ক্রাইব করুন।",
    "popup.demo":
      "ডেমো ভার্সন: এখন এটি আপনার ব্রাউজারে ইমেইল সেভ করে। পরে Mailchimp/Buttondown/Substack ইন্টিগ্রেশন যোগ করা যাবে।",
    "popup.email": "ইমেইল",
    "popup.emailPlaceholder": "আপনার ইমেইল",
    "popup.subscribe": "সাবস্ক্রাইব",
    "popup.notNow": "এখন না",

    // Toast
    "toast.invalidEmail": "সঠিক ইমেইল দিন",
    "toast.subscribedDemo": "সাবস্ক্রিপশন রিকোয়েস্ট সেভ হয়েছে (ডেমো)",
    "toast.emailDraft": "ইমেইল ড্রাফট তৈরি করা হচ্ছে...",
    "toast.saveFailed": "সেভ করা যায়নি",
    "toast.contactEmailMissing": "Contact email সেট করা হয়নি (src/content/site.ts আপডেট করুন)",

    // Form
    "form.nameMin": "নাম কমপক্ষে ২ অক্ষর",
    "form.emailInvalid": "সঠিক ইমেইল দিন",
    "form.topicMin": "টপিক লিখুন",
    "form.messageMin": "মেসেজ কমপক্ষে ১০ অক্ষর",
    "form.placeholderName": "আপনার নাম",
    "form.placeholderEmail": "আপনার ইমেইল",
    "form.placeholderTopic": "যেমন: Collaboration / Question",
    "form.placeholderMessage": "আপনার মেসেজ লিখুন...",

    "contact.tip": "টিপ: কন্টাক্ট ইমেইল সেট করতে এই ফাইলটি আপডেট করুন →",

    // Footer
    "footer.about":
      "জাপানে ইঞ্জিনিয়ারিং জীবন, বাংলা ভাষায় জাপানি শিক্ষা, এবং প্রোগ্রামিং ফান্ডামেন্টাল — একসাথে এক জায়গায়।",
    "footer.pages": "পেজ",
    "footer.topics": "টপিক",
    "footer.social": "সোশ্যাল",

    // Languages
    "lang.bn": "বাংলা",
    "lang.en": "English",
    "lang.ja": "日本語",
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.resources": "Resources",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.themeToggle": "Toggle theme",
    "nav.lang": "Language",

    "brand.tagline": "Japan • Robotics • CV",

    "home.badge": "Bengali content from Japan",
    "home.heroTitle": "Engineering life in Japan,\nJapanese learning in Bengali,\nand programming fundamentals",
    "home.heroDesc":
      "I'm Halim — an engineer with a Robotics / Computer Vision background, currently based in Japan. Here I share real experiences, study roadmaps, and practical learning resources.",

    // Home Hero Slider (5 slides)
    "home.slider.1.title": "Engineering life in Japan",
    "home.slider.1.desc": "Work culture, growth, and practical notes from real engineering life.",
    "home.slider.2.title": "Learn Japanese (Bengali-friendly)",
    "home.slider.2.desc": "From kana to JLPT N5–N1 — step-by-step roadmaps and resources.",
    "home.slider.3.title": "Programming fundamentals",
    "home.slider.3.desc": "Beyond syntax: problem solving, debugging mindset, and strong base.",
    "home.slider.4.title": "Learn • Build • Keep going",
    "home.slider.4.desc": "Small consistent steps compound — let's start today.",
    "home.slider.5.title": "I'm Halim",
    "home.slider.5.desc": "Engineer (Robotics / Computer Vision), currently based in Japan.",
    "home.cta.blog": "Read the blog",
    "home.cta.jp": "Learn Japanese",
    "home.cta.prog": "Learn programming",
    "home.stat.location": "Location",
    "home.stat.job": "Role",
    "home.stat.focus": "Focus",
    "home.box.title": "What you'll find here",
    "home.box.desc": "Browse by category",
    "home.featured.title": "Featured posts",
    "home.featured.desc": "Great posts to start with",
    "home.featured.all": "All posts",

    // Projects preview
    "home.projects.title": "Top projects",
    "home.projects.desc": "A quick preview of 5 projects I’m most proud of",
    "home.projects.all": "More resources",
    "home.projects.view": "Open",

    "home.projects.1.title": "KanaStory",
    "home.projects.1.desc": "Interactive hiragana/katakana practice with a story-like learning flow.",
    "home.projects.1.tag1": "Japanese",
    "home.projects.1.tag2": "Beginner",

    "home.projects.2.title": "JLPT N5 Hub",
    "home.projects.2.desc": "Step-by-step N5 vocab, grammar, and practice materials in one place.",
    "home.projects.2.tag1": "JLPT",
    "home.projects.2.tag2": "N5",

    "home.projects.3.title": "JLPT N4 Hub",
    "home.projects.3.desc": "Focused N4 roadmap, notes, and the most useful resources.",
    "home.projects.3.tag1": "JLPT",
    "home.projects.3.tag2": "N4",

    "home.projects.4.title": "JLPT N3 Hub",
    "home.projects.4.desc": "Study guide + curated links + practice-focused resources for N3.",
    "home.projects.4.tag1": "JLPT",
    "home.projects.4.tag2": "N3",

    "home.projects.5.title": "GitHub portfolio",
    "home.projects.5.desc": "My open-source code, experiments, and small tools.",
    "home.projects.5.tag1": "Code",
    "home.projects.5.tag2": "Open-source",

    // Home quick contact
    "home.quickContact.title": "Send a quick message",
    "home.quickContact.desc": "Questions or collaboration—message me right from here.",
    "home.quickContact.note": "On submit, it opens your email app (works without a backend).",
    "home.quickContact.send": "Send message",

    "home.learn.title": "What do you want to learn?", 
    "home.learn.desc": "Start with a category based on your goal — step by step is the fastest way.",
    "home.learn.resources": "Resource library",
    "home.learn.contact": "Get in touch",

    "home.hub.title": "Japanese learning hub",
    "home.hub.desc": "From kana to JLPT N5–N1 — pick what you need.",
    "home.hub.kana": "Learn kana",
    "home.hub.kanaDesc": "Hiragana + Katakana basics—the best starting point.",
    "home.hub.n5": "JLPT N5",
    "home.hub.n5Desc": "Starter pack: core grammar, vocab, and practice sets.",
    "home.hub.n4": "JLPT N4",
    "home.hub.n4Desc": "Next after N5—more grammar, reading, and listening.",
    "home.hub.n3": "JLPT N3",
    "home.hub.n3Desc": "Intermediate level—focus on strengthening reading/listening.",
    "home.hub.n2": "JLPT N2",
    "home.hub.n2Desc": "Serious study roadmap for work/university-level Japanese.",
    "home.hub.n1": "JLPT N1",
    "home.hub.n1Desc": "Advanced level—native materials + exam-focused preparation.",

    "about.badge": "About Me",
    "about.title": "I'm Halim",
    "about.lead":
      "I’m a software engineer currently working at Prime Planet Energy & Solutions (PPES) in Japan. I completed my Master of Science (MSc) in Computer Science at Shizuoka University. From studying, working, and daily life in Japan, I’ve learned that Japanese can feel difficult—but with the right approach it becomes simple and enjoyable. Here I share real engineering/career experiences in Japan, Bengali-friendly Japanese learning guides (N5–N1), and programming fundamentals.",
    "about.storyTitle": "How I came to Japan (short)",
    "about.story":
      "Everyone's journey is different. For me, it was a mix of curiosity and consistency — improving technical skills, language, and cultural understanding step by step.",
    "about.expTitle": "Engineering experience",
    "about.locationValue": "Japan",
    "about.jobLine": "Software Engineer (PPES, Japan)",
    "about.exp.1": "My core focus: perception/vision, sensor/camera pipelines, and strong problem-solving habits.",
    "about.exp.2": "In Japanese teams, clear documentation, sharing context, and steady updates become a major advantage.",
    "about.eduTitle": "Education",
    "about.edu": "Shizuoka University, Japan — Master of Science (MSc), Computer Science",

    "about.researchTitle": "Research & publications",
    "about.scholarLabel": "Google Scholar profile",
    "about.scholarUrl": "https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ",

    "about.pubs.1.title": "Implementing recommender system-based approach for health management mobile application",
    "about.pubs.1.meta": "Halim Md Abdul, Ihsan Ibrahim, Naoki Fukuta — QIR 2021 (17th International Conference on Quality in Research), IEEE, pp. 187–190 (2021-10-13).",
    "about.pubs.1.cites": "Cited by: 3",

    "about.pubs.2.title": "Preliminary analysis of recommender-based approach for medical diagnostic problems.",
    "about.pubs.2.meta": "Halim Md Abdul, Naoki Fukuta — IEICE Technical Report, Vol. 120, Issue 281, pp. 57–58 (2020-12-03).",
    "about.pubs.2.cites": "(Citations: see Scholar)",
    "about.pubs.more": "See more",

    "about.goals": "1) Make Japanese learning easier in Bengali\n2) Make programming fundamentals more practical\n3) Share real experiences for people building a study/career path in Japan", 
    "about.goalsTitle": "Future goals",

    "blog.title": "Blog",
    "blog.desc": "Japanese study, programming, Japan life, and engineering — all in one place.",
    "blog.search": "Search",
    "blog.searchDesc": "Search by title or tags",
    "blog.searchPlaceholder": "e.g., N5, debugging, japan...",
    "blog.searchBtn": "Search",
    "blog.reset": "Reset filters",
    "blog.category": "Categories",
    "blog.categoryDesc": "Filter by topic",
    "blog.all": "All",
    "blog.emptyTitle": "No results",
    "blog.emptyDesc": "Try a different keyword or category.",
    "blog.back": "Blog",

    "resources.title": "Resources",
    "resources.desc": "A curated list of tools and links I personally use as references.",
    "resources.jp": "Japanese",
    "resources.prog": "Programming",
    "resources.tools": "Tools",

    "contact.title": "Contact",
    "contact.desc": "Questions, collaboration, or feedback — feel free to reach out.",
    "contact.form": "Contact form",
    "contact.formDesc": "On submit, it opens your email app (works without a backend).",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.topic": "Topic",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.social": "Social",
    "contact.socialDesc": "Follow / connect",
    "contact.newsletter": "Newsletter",
    "contact.newsletterDesc": "Subscribe to get new posts and resources",
    "contact.subscribe": "Subscribe (demo)",

    "post.notFound": "Post not found",
    "post.notFoundDesc": "The link may be wrong or the post was removed.",
    "post.backToBlog": "Back to blog",
    "post.prev": "Previous",
    "post.next": "Next",

    "post.share.title": "Social share",
    "post.share.native": "Share",
    "post.share.copy": "Copy link",
    "post.share.copied": "Link copied",
    "post.share.copyPrompt": "Copy this link",

    "popup.title": "Don't miss new posts",
    "popup.weekly": "Weekly updates",
    "popup.desc":
      "Subscribe to get updates about Japanese learning (N5–N1), programming fundamentals, and engineering life in Japan.",
    "popup.demo":
      "Demo: your email is saved in this browser. Later we can integrate Mailchimp/Buttondown/Substack.",
    "popup.email": "Email",
    "popup.emailPlaceholder": "Your email",
    "popup.subscribe": "Subscribe",
    "popup.notNow": "Not now",

    "toast.invalidEmail": "Please enter a valid email",
    "toast.subscribedDemo": "Subscription saved (demo)",
    "toast.emailDraft": "Creating an email draft...",
    "toast.saveFailed": "Couldn't save",
    "toast.contactEmailMissing": "Contact email is not set (update src/content/site.ts)",

    "form.nameMin": "Name must be at least 2 characters",
    "form.emailInvalid": "Please enter a valid email",
    "form.topicMin": "Please enter a topic",
    "form.messageMin": "Message must be at least 10 characters",
    "form.placeholderName": "Your name",
    "form.placeholderEmail": "Your email",
    "form.placeholderTopic": "e.g., Collaboration / Question",
    "form.placeholderMessage": "Write your message...",

    "contact.tip": "Tip: set your contact email here →",

    "footer.about":
      "Stories from life and engineering in Japan, Bengali-friendly Japanese learning, and programming fundamentals — in one place.",
    "footer.pages": "Pages",
    "footer.topics": "Topics",
    "footer.social": "Social",

    "lang.bn": "বাংলা",
    "lang.en": "English",
    "lang.ja": "日本語",
  },

  ja: {
    "nav.home": "ホーム",
    "nav.about": "プロフィール",
    "nav.blog": "ブログ",
    "nav.resources": "リソース",
    "nav.contact": "お問い合わせ",
    "nav.menu": "メニュー",
    "nav.themeToggle": "テーマ切替",
    "nav.lang": "言語",

    "brand.tagline": "Japan • Robotics • CV",

    "home.badge": "日本からの発信",
    "home.heroTitle": "日本でのエンジニア生活、\nベンガル語で学ぶ日本語、\nそしてプログラミング基礎",
    "home.heroDesc":
      "私はHalim。Robotics / Computer Visionのバックグラウンドを持つエンジニアで、現在日本在住です。このサイトでは実体験、学習ロードマップ、実用的なリソースを共有します。",

    // Home Hero Slider (5 slides)
    "home.slider.1.title": "日本でのエンジニア生活",
    "home.slider.1.desc": "仕事文化・成長・リアルな現場の学びを共有します。",
    "home.slider.2.title": "ベンガル語で学ぶ日本語",
    "home.slider.2.desc": "かなからJLPT N5〜N1まで、段階的なロードマップ。",
    "home.slider.3.title": "プログラミング基礎",
    "home.slider.3.desc": "文法よりも考え方：分解、デバッグ、土台づくり。",
    "home.slider.4.title": "学ぶ • 作る • 続ける",
    "home.slider.4.desc": "小さな継続が大きな成果に。今日から始めましょう。",
    "home.slider.5.title": "私はHalim",
    "home.slider.5.desc": "Robotics / Computer Visionのエンジニア。現在日本在住。",
    "home.cta.blog": "ブログを読む",
    "home.cta.jp": "日本語を学ぶ",
    "home.cta.prog": "プログラミングを学ぶ",
    "home.stat.location": "拠点",
    "home.stat.job": "職種",
    "home.stat.focus": "分野",
    "home.box.title": "このサイトでできること",
    "home.box.desc": "カテゴリから探す",
    "home.featured.title": "注目記事",
    "home.featured.desc": "まず読んでほしい記事",
    "home.featured.all": "すべての記事",

    // Projects preview
    "home.projects.title": "代表プロジェクト",
    "home.projects.desc": "私が特に力を入れた5つのプロジェクトをサクッと紹介",
    "home.projects.all": "リソースをもっと見る",
    "home.projects.view": "開く",

    "home.projects.1.title": "KanaStory",
    "home.projects.1.desc": "ひらがな・カタカナを楽しく練習できるインタラクティブ学習フロー。",
    "home.projects.1.tag1": "日本語",
    "home.projects.1.tag2": "初心者",

    "home.projects.2.title": "JLPT N5 Hub",
    "home.projects.2.desc": "N5の語彙・文法・練習を段階的にまとめた学習ハブ。",
    "home.projects.2.tag1": "JLPT",
    "home.projects.2.tag2": "N5",

    "home.projects.3.title": "JLPT N4 Hub",
    "home.projects.3.desc": "N4向けロードマップ、ノート、重要リソースを整理。",
    "home.projects.3.tag1": "JLPT",
    "home.projects.3.tag2": "N4",

    "home.projects.4.title": "JLPT N3 Hub",
    "home.projects.4.desc": "N3の学習ガイド＋厳選リンク＋練習重視のリソース集。",
    "home.projects.4.tag1": "JLPT",
    "home.projects.4.tag2": "N3",

    "home.projects.5.title": "GitHubポートフォリオ",
    "home.projects.5.desc": "オープンソースのコード、実験、ミニツールをまとめています。",
    "home.projects.5.tag1": "コード",
    "home.projects.5.tag2": "OSS",

    // Home quick contact
    "home.quickContact.title": "すぐにメッセージ",
    "home.quickContact.desc": "質問・コラボの相談など、ここから送れます。",
    "home.quickContact.note": "送信するとメールアプリが開きます（バックエンド不要）。",
    "home.quickContact.send": "送信する",

    "home.learn.title": "何を学びたいですか？",
    "home.learn.desc": "目的に合わせてカテゴリから始めましょう。段階的に進めるのが最短です。",
    "home.learn.resources": "リソース一覧",
    "home.learn.contact": "連絡する",

    "home.hub.title": "日本語学習ハブ",
    "home.hub.desc": "かなからJLPT N5〜N1まで。必要なものを選んでください。",
    "home.hub.kana": "かな学習",
    "home.hub.kanaDesc": "ひらがな・カタカナの基礎。まずはここから。",
    "home.hub.n5": "JLPT N5",
    "home.hub.n5Desc": "入門：基本文法・語彙・練習セット。",
    "home.hub.n4": "JLPT N4",
    "home.hub.n4Desc": "N5の次：文法・読解・聴解を拡張。",
    "home.hub.n3": "JLPT N3",
    "home.hub.n3Desc": "中級：読解/聴解を強化して運用力へ。",
    "home.hub.n2": "JLPT N2",
    "home.hub.n2Desc": "実務・大学レベル向けの本格ロードマップ。",
    "home.hub.n1": "JLPT N1",
    "home.hub.n1Desc": "上級：ネイティブ素材 + 試験対策をしっかり。",

    "about.badge": "About",
    "about.title": "Halimについて",
    "about.lead":
      "私はソフトウェアエンジニアで、現在日本のPrime Planet Energy & Solutions（PPES）で働いています。Shizuoka UniversityでComputer Scienceの修士（MSc）を修了しました。日本での学業・仕事・日常生活の経験から、日本語は難しく感じても、正しい方法なら楽しく学べると実感しました。このサイトでは、日本でのエンジニア/キャリアの実体験、ベンガル語で学べる日本語ガイド（N5–N1）、そしてプログラミング基礎を共有します。",
    "about.storyTitle": "日本に来た経緯（概要）",
    "about.story":
      "人それぞれの道があります。私の場合は『好奇心』と『継続』の組み合わせでした。技術・言語・文化理解を少しずつ積み上げました。",
    "about.expTitle": "エンジニア経験",
    "about.locationValue": "Japan",
    "about.jobLine": "Software Engineer (PPES, Japan)",
    "about.exp.1": "主な関心：Perception/Vision、センサー/カメラのパイプライン、問題解決の習慣づくり。",
    "about.exp.2": "日本のチームでは、明確なドキュメント、文脈共有、継続的なアップデートが大きな強みになります。",
    "about.eduTitle": "学歴",
    "about.edu": "Shizuoka University, Japan — Master of Science (MSc), Computer Science",

    "about.researchTitle": "研究・論文",
    "about.scholarLabel": "Google Scholar プロフィール",
    "about.scholarUrl": "https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ",

    "about.pubs.1.title": "Implementing recommender system-based approach for health management mobile application",
    "about.pubs.1.meta": "Halim Md Abdul, Ihsan Ibrahim, Naoki Fukuta — QIR 2021（IEEE）, pp. 187–190 (2021-10-13).",
    "about.pubs.1.cites": "被引用: 3",

    "about.pubs.2.title": "Preliminary analysis of recommender-based approach for medical diagnostic problems.",
    "about.pubs.2.meta": "Halim Md Abdul, Naoki Fukuta — IEICE Technical Report, Vol. 120, Issue 281, pp. 57–58 (2020-12-03).",
    "about.pubs.2.cites": "(被引用数はScholar参照)",
    "about.pubs.more": "もっと見る",

    "about.goals": "1) ベンガル語で日本語学習をもっと簡単に\n2) プログラミング基礎をより実践的に\n3) 日本で学ぶ/働く人のためにリアルな経験を共有", 
    "about.goalsTitle": "今後の目標",

    "blog.title": "ブログ",
    "blog.desc": "日本語学習、プログラミング、日本での生活とエンジニアリングをまとめて発信します。",
    "blog.search": "検索",
    "blog.searchDesc": "タイトル/タグで検索",
    "blog.searchPlaceholder": "例: N5, debugging, japan...",
    "blog.searchBtn": "検索",
    "blog.reset": "リセット",
    "blog.category": "カテゴリ",
    "blog.categoryDesc": "トピックで絞り込み",
    "blog.all": "すべて",
    "blog.emptyTitle": "結果がありません",
    "blog.emptyDesc": "別のキーワードやカテゴリを試してください。",
    "blog.back": "ブログ",

    "resources.title": "リソース",
    "resources.desc": "私が普段参照しているツールやリンクをまとめました。",
    "resources.jp": "日本語",
    "resources.prog": "プログラミング",
    "resources.tools": "ツール",

    "contact.title": "お問い合わせ",
    "contact.desc": "質問・コラボ・フィードバックなど、お気軽にどうぞ。",
    "contact.form": "お問い合わせフォーム",
    "contact.formDesc": "送信するとメールアプリが開きます（バックエンド不要）。",
    "contact.name": "お名前",
    "contact.email": "メール",
    "contact.topic": "件名",
    "contact.message": "内容",
    "contact.send": "送信",
    "contact.social": "SNS",
    "contact.socialDesc": "フォロー / つながる",
    "contact.newsletter": "ニュースレター",
    "contact.newsletterDesc": "新着記事・リソースを受け取る",
    "contact.subscribe": "購読（デモ）",

    "post.notFound": "記事が見つかりません",
    "post.notFoundDesc": "リンクが間違っているか、記事が削除された可能性があります。",
    "post.backToBlog": "ブログに戻る",
    "post.prev": "前の投稿",
    "post.next": "次の投稿",

    "post.share.title": "シェア",
    "post.share.native": "共有",
    "post.share.copy": "リンクをコピー",
    "post.share.copied": "リンクをコピーしました",
    "post.share.copyPrompt": "このリンクをコピーしてください",

    "popup.title": "新着を見逃さない",
    "popup.weekly": "週次アップデート",
    "popup.desc":
      "日本語学習（N5–N1）、プログラミング基礎、日本でのエンジニア生活の更新をメールで受け取れます。",
    "popup.demo":
      "デモ：このブラウザにメールを保存します。後でMailchimp/Buttondown/Substack連携も可能です。",
    "popup.email": "メール",
    "popup.emailPlaceholder": "メールアドレス",
    "popup.subscribe": "購読する",
    "popup.notNow": "今はしない",

    "toast.invalidEmail": "正しいメールアドレスを入力してください",
    "toast.subscribedDemo": "購読を保存しました（デモ）",
    "toast.emailDraft": "メール下書きを作成しています...",
    "toast.saveFailed": "保存できませんでした",
    "toast.contactEmailMissing": "連絡先メールが未設定です（src/content/site.ts を更新してください）",

    "form.nameMin": "お名前は2文字以上で入力してください",
    "form.emailInvalid": "正しいメールアドレスを入力してください",
    "form.topicMin": "件名を入力してください",
    "form.messageMin": "内容は10文字以上で入力してください",
    "form.placeholderName": "お名前",
    "form.placeholderEmail": "メールアドレス",
    "form.placeholderTopic": "例：Collaboration / Question",
    "form.placeholderMessage": "内容を入力してください...",

    "contact.tip": "ヒント：連絡先メールをここで設定 →",

    "footer.about":
      "日本でのエンジニア生活、ベンガル語で学ぶ日本語、プログラミング基礎をまとめて発信します。",
    "footer.pages": "ページ",
    "footer.topics": "トピック",
    "footer.social": "SNS",

    "lang.bn": "বাংলা",
    "lang.en": "English",
    "lang.ja": "日本語",
  },
};

export function t(lang: Lang, key: string) {
  return dictionaries[lang][key] ?? dictionaries.bn[key] ?? key;
}
