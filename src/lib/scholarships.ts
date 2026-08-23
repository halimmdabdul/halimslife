export type ScholarshipCountry = "usa" | "japan" | "canada" | "korea" | "switzerland";

export type ScholarshipGuide = {
  slug: string;
  country: ScholarshipCountry;
  university: string;
  title: string;
  summary: string;
  label: string;
  funding: string;
  duration: string;
  audience: string;
  realityCheck: string;
  highlights: string[];
  fit: string[];
  quickStart: string[];
  steps: {
    title: string;
    timing: string;
    description: string;
    actions: string[];
    readyWhen: string;
  }[];
  checklist: string[];
  afterSubmission: string[];
  cautions: string[];
  officialLinks: { label: string; href: string; description: string }[];
  reviewedAt?: string;
  reviewedOn?: string;
  bestFitPriority?: number;
  businessPriority?: number;
  englishBusinessPrograms?: string;
  businessOfficialUrl?: string;
  lowestCostPriority?: number;
  lowestCostCategory?: "Very low" | "Low";
  canadaPriority?: number;
  canadaTier?: 1 | 2 | 3;
  canadaFunding?: "Strong" | "Possible" | "Limited";
  koreaPriority?: number;
  koreaTier?: 1 | 2 | 3 | 4;
  koreaFunding?: "Strong" | "Possible" | "Limited";
  swissPriority?: number;
  swissTier?: 1 | 2 | 3 | 4;
  swissFunding?: "Strong" | "Possible" | "Limited" | "Paid research";
};

type JapanShortlistSeed = {
  slug: string;
  university: string;
  program: string;
  english: string;
  intake: string;
  funding: string;
  priority: string;
  realityCheck: string;
  officialLinks: ScholarshipGuide["officialLinks"];
  bestFitPriority?: number;
  businessPriority?: number;
  englishBusinessPrograms?: string;
  businessOfficialUrl?: string;
};

function createJapanShortlistGuide(seed: JapanShortlistSeed): ScholarshipGuide {
  return {
    slug: seed.slug,
    country: "japan",
    university: seed.university,
    title: `${seed.university} ${seed.program}: 2027 Planning Guide`,
    summary: `${seed.program}-এর English eligibility, admission route, supervisor fit এবং funding options যাচাই করে apply করার practical roadmap।`,
    label: `${seed.priority} priority · Japan master's watchlist`,
    funding: seed.funding,
    duration: "Usually 2 years; official guide দিয়ে confirm করুন",
    audience: "International master’s applicants seeking an English-accessible Japan route",
    realityCheck: seed.realityCheck,
    highlights: [
      `${seed.program} এই shortlist-এর target program।`,
      `English evidence: ${seed.english}`,
      `Target intake: ${seed.intake}—current official guide প্রকাশ হলে date re-check করতে হবে।`,
      `Funding position: ${seed.funding}`,
    ],
    fit: [
      "আপনার bachelor’s background program-এর academic field ও prerequisite-এর সঙ্গে মেলে।",
      "আপনি English eligibility official guideline বা admissions office থেকে লিখিতভাবে confirm করবেন।",
      "Research-based route হলে current faculty/supervisor-এর সঙ্গে specific fit দেখাতে পারবেন।",
      "Scholarship না পেলেও tuition ও living cost-এর realistic fallback budget আছে।",
    ],
    quickStart: [
      "প্রথম official link খুলে current admission year, intake এবং applicant category লিখে নিন।",
      "English score, MOI এবং Japanese-language rule—তিনটি আলাদা row-তে evidenceসহ নোট করুন।",
      "Program curriculum ও faculty list দেখে 2–3টি genuine research/career fit বাছুন।",
      "Fundingকে guaranteed ধরে না নিয়ে scholarship, waiver ও self-funded cost আলাদা করুন।",
    ],
    steps: [
      {
        title: "2027 route ও eligibility lock করুন",
        timing: "Official guide প্রকাশের সঙ্গে সঙ্গে",
        description: "Shortlist-এর summary planning signal; application-এর final authority current university guideline।",
        actions: [
          "Exact program name, intake, application window ও applicant residence rule verify করুন।",
          "Degree equivalency, prerequisite এবং language evidence লিখিত checklist-এ তুলুন।",
          "Unclear rule admissions office-কে concise email করে confirm করুন।",
        ],
        readyWhen: "Current official guide থেকে route, deadline এবং eligibility evidence সংরক্ষিত।",
      },
      {
        title: "Program ও faculty fit তৈরি করুন",
        timing: "Application-এর 2–4 মাস আগে",
        description: "Generic Japan interest নয়—program-specific academic বা career fit দেখাতে হবে।",
        actions: [
          "Curriculum, faculty ও laboratory pages থেকে relevant themes shortlist করুন।",
          "Research-based route হলে prospective supervisor contact প্রয়োজন কি না verify করুন।",
          "নিজের degree, project ও work evidence দিয়ে one-page fit note লিখুন।",
        ],
        readyWhen: "Program বাছাইয়ের কারণ এবং 2–3টি evidence-based fit point প্রস্তুত।",
      },
      {
        title: "Application package complete করুন",
        timing: "Deadline-এর 6–10 সপ্তাহ আগে",
        description: "Academic documents ও language evidence আগে প্রস্তুত রাখলে last-minute eligibility risk কমে।",
        actions: [
          "Transcript, degree certificate, CV, SOP/research plan ও required translations সংগ্রহ করুন।",
          "MOI ব্যবহার করলে university wording ও accepted format লিখিতভাবে confirm করুন।",
          "Recommendation, application fee, interview/exam ও postal-document rule check করুন।",
        ],
        readyWhen: "Official checklist-এর প্রতিটি required item submission-ready।",
      },
      {
        title: "Funding ও offer verify করুন",
        timing: "Admission/scholarship decision stage",
        description: "Possible scholarship বা waiver admission funding guarantee নয়।",
        actions: [
          "Admission fee, annual tuition, waiver percentage ও renewal condition লিখিতভাবে দেখুন।",
          "Scholarship result-এর timing admission result থেকে আলাদা কি না check করুন।",
          "Living cost, insurance ও uncovered tuitionসহ 24-month budget final করুন।",
        ],
        readyWhen: "Written offer ও official funding notice থেকে net cost পরিষ্কার।",
      },
    ],
    checklist: [
      "Current official application guideline",
      "Degree certificate ও complete transcript",
      "Accepted English score বা MOI evidence",
      "Academic CV",
      "Statement of Purpose / motivation letter",
      "Research plan (যদি required হয়)",
      "Recommendation letters",
      "Faculty/supervisor approval evidence (যদি required হয়)",
    ],
    afterSubmission: [
      "Portal, email ও spam folder নিয়মিত check করুন।",
      "Interview, written/oral exam বা original-document request দ্রুত complete করুন।",
      "Admission এবং scholarship/waiver result আলাদাভাবে track করুন।",
    ],
    cautions: [
      "Shortlist-এর English/funding summary current official guideline replace করে না।",
      "No GRE/GMAT signal মানেই admission সহজ বা test একেবারেই নেই—এমন নয়।",
      "MOI acceptance program, route ও applicant profile অনুযায়ী বদলাতে পারে।",
      "2027 dates বা funding terms পরিবর্তিত হলে official page ও written offer-ই final authority।",
    ],
    officialLinks: seed.officialLinks,
    reviewedAt: "August 23, 2026",
    bestFitPriority: seed.bestFitPriority,
    businessPriority: seed.businessPriority,
    englishBusinessPrograms: seed.englishBusinessPrograms,
    businessOfficialUrl: seed.businessOfficialUrl,
  };
}

const japanShortlistAdditions: ScholarshipGuide[] = [
  createJapanShortlistGuide({
    slug: "shizuoka-abp-informatics-masters-2027", university: "Shizuoka University", program: "Asia Bridge Program (Informatics)",
    english: "English-based master’s route; exact MOI/score document current guide দিয়ে verify করুন", intake: "October 2027 watchlist",
    funding: "ABP selection can include application, admission and first-year tuition waivers; 2027 terms must be re-confirmed", priority: "High",
    realityCheck: "Shizuoka officially confirms an English-based ABP master’s route and Bangladesh is among eligible regions. The currently visible cycle is 2026, so October 2027 dates and waiver terms remain a watchlist until the next guide is published.",
    officialLinks: [
      { label: "Shizuoka University admissions", href: "https://www.shizuoka.ac.jp/english/admission/", description: "Master’s ABP eligibility, English delivery ও current application guide দেখুন।" },
      { label: "Asia Bridge Program", href: "https://www.abp.icsu.shizuoka.ac.jp/eng/", description: "Current ABP notices, application guide ও result timeline দেখুন।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "naist-information-science-engineering-masters-2027", university: "NAIST", program: "Information Science and Engineering Master's",
    english: "NAIST confirms that the complete master's degree can be earned in English; Information Science core and specialized subjects are delivered in English", intake: "April/October 2027 watchlist",
    funding: "Low national-university tuition; MEXT, JASSO and competitive tuition-waiver routes", priority: "High - English-confirmed",
    realityCheck: "NAIST officially provides an English-completable master's curriculum in Information Science and Engineering. Admission, scholarship and tuition-waiver decisions are separate, and the current 2027 application guide remains final authority.",
    officialLinks: [
      { label: "NAIST English curriculum", href: "https://www.naist.jp/en/education_research/science_technology/implementation.html", description: "Verify the English-only Information Science subjects and English degree-completion route." },
      { label: "NAIST master's admissions", href: "https://www.naist.jp/en/apply/", description: "Check the current master's screening, pre-application and application guide." },
      { label: "NAIST academics", href: "https://www.naist.jp/en/academics/", description: "Review the Information Science and Engineering degree, research areas and curriculum." },
    ],
  }),
  createJapanShortlistGuide({
    slug: "kyutech-iart-computer-science-masters-2027", university: "Kyushu Institute of Technology", program: "Computer Science and Systems Engineering (iART) Master's",
    english: "The iART special course for international students officially states that its lectures are given in English", intake: "April/October 2027 watchlist",
    funding: "Low national-university tuition; MEXT, JASSO and competitive fee-waiver routes", priority: "High - English-confirmed special course",
    realityCheck: "Kyutech's English iART route is a special international course within the Graduate School of Computer Science and Systems Engineering. Applicants should confirm course eligibility, supervisor fit and the applicable 2027 admission session before applying.",
    officialLinks: [
      { label: "Kyutech English iART course", href: "https://www.iizuka.kyutech.ac.jp/en/graduate/m-and-d-programs", description: "Verify English lecture delivery, the AI/robotics focus and special-course structure." },
      { label: "Kyutech international master's admission", href: "https://www.kyutech.ac.jp/english/admissions/guidelines/iizuka_master.html", description: "Check the current intake, documents, examination and supervisor-contact rules." },
    ],
  }),
  createJapanShortlistGuide({
    slug: "kumamoto-ijep-computer-science-masters-2027", university: "Kumamoto University", program: "IJEP Computer Science Master's",
    english: "Kumamoto's International Joint Education Program is taught in English and includes Computer Science at master's level", intake: "April/October 2027 watchlist",
    funding: "Low national-university tuition; MEXT, JASSO and competitive tuition-waiver routes", priority: "High - English-confirmed",
    realityCheck: "Kumamoto officially confirms that IJEP students can obtain a degree in English. A prospective supervisor is required before application, places are limited, and the currently published cycle must be replaced by the 2027 guide when released.",
    officialLinks: [
      { label: "Kumamoto IJEP admissions", href: "https://www.fast.kumamoto-u.ac.jp/gsst-en/admissions/", description: "Verify the English teaching language, master's documents, intake and supervisor rule." },
      { label: "Kumamoto IJEP overview", href: "https://www.fast.kumamoto-u.ac.jp/gjec-en/greeting/", description: "Review the official English-degree statement and program context." },
    ],
  }),
  createJapanShortlistGuide({
    slug: "ehime-mathematics-computer-science-masters-2027", university: "Ehime University", program: "Mathematics and Computer Science Master’s",
    english: "International selection guide ও interview-language rule exact PDF থেকে confirm করুন", intake: "April/September 2027",
    funding: "National-university tuition; graduate and privately financed international students may apply for budget-limited tuition waiver", priority: "Medium-High",
    realityCheck: "Ehime has published a 2027 international master’s selection guide covering Mathematics and Computer Science. A tuition-waiver application exists, but approval and amount are not guaranteed.",
    officialLinks: [
      { label: "Ehime 2027 master’s application guide", href: "https://www.ehime-u.ac.jp/wp-content/uploads/2026/03/rikou_M_202704-09E_tokubetsu_yoko.pdf", description: "Dates, selection, documents ও language requirements verify করুন।" },
      { label: "Mathematics and Computer Science Program", href: "https://www.math.sci.ehime-u.ac.jp/grad/about.en.html", description: "Program structure ও research fields দেখুন।" },
      { label: "Ehime tuition waiver", href: "https://www.ehime-u.ac.jp/en/entrance/scholarship-exemption/", description: "Graduate/international waiver rules ও application timing দেখুন।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "nagaoka-imse-masters-2027", university: "Nagaoka University of Technology", program: "Information and Management Systems Engineering Master’s",
    english: "Current international-student procedure-এ language evidence ও examination method verify করুন", intake: "April 2027 / September route as published",
    funding: "National-university tuition; scholarships/waivers are separate and competitive", priority: "Medium-High",
    realityCheck: "The IMSE master’s program is official and combines applied informatics, management systems and data science. Do not assume the entire degree is English-only without checking the current course and examination language.",
    officialLinks: [
      { label: "Nagaoka master’s application forms", href: "https://www.nagaokaut.ac.jp/e/admissions/exam/master/docs/index.html", description: "Current international-student procedure ও intake documents দেখুন।" },
      { label: "IMSE program overview", href: "https://imse.nagaokaut.ac.jp/en/outline/", description: "Applied informatics, management systems ও data-science curriculum দেখুন।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "globis-full-time-mba-2027", university: "GLOBIS University", program: "Full-time MBA",
    businessPriority: 8,
    englishBusinessPrograms: "Full-time MBA (English)",
    businessOfficialUrl: "https://www.globis.ac.jp/programs/full-time-mba/",
    english: "English MBA route; current admissions guide-এর accepted evidence verify করুন", intake: "Fall 2027",
    funding: "GLOBIS scholarship can cover up to 50% of tuition for selected applicants", priority: "Medium",
    realityCheck: "This is a one-year accelerated private MBA, not a low-cost national-university degree. The scholarship is competitive and does not cover every cost; leadership and work-experience evidence matter strongly.",
    officialLinks: [
      { label: "GLOBIS Full-time MBA application", href: "https://www.globis.ac.jp/apply/", description: "2027 rounds, admissions guide ও application portal দেখুন।" },
      { label: "GLOBIS scholarships and loans", href: "https://www.globis.ac.jp/admission-fees/full-time-mba-fees-and-financing/full-time-mba-scholarships-and-loans/", description: "Up-to-50% award, essay ও eligibility terms verify করুন।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "kwansei-gakuin-un-system-policy-masters-2027", university: "Kwansei Gakuin University", program: "UN System Policy Studies Master’s",
    businessPriority: 22,
    englishBusinessPrograms: "International Management Course (MBA)",
    businessOfficialUrl: "https://iba.kwansei.ac.jp/en/imce/",
    english: "All-English curriculum; exact admission evidence current English guideline থেকে দেখুন", intake: "April 2027",
    funding: "University/international-student aid and internship support exist; exact award is separate from admission", priority: "Medium",
    realityCheck: "The all-English UN System Policy Studies master’s officially lists 2027 rounds. It is policy/international-cooperation focused, not a general MBA or computer-science degree.",
    officialLinks: [
      { label: "UN System Policy Studies", href: "https://www.kwansei.ac.jp/en/academics/graduate/policy-studies/un-system-policy-studies.html", description: "Curriculum, faculty ও AY2027 admissions information দেখুন।" },
      { label: "AY2027 application guideline", href: "https://www.kwansei.ac.jp/assets/2027_Application_Guideline-UN_System_Policy_Studies.pdf", description: "Rounds, eligibility, documents ও selection verify করুন।" },
      { label: "Financial information", href: "https://www.kwansei.ac.jp/en/admissions-aid/financial-information.html", description: "Graduate/international scholarships ও fees দেখুন।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "apu-international-cooperation-policy-masters-2027", university: "Ritsumeikan Asia Pacific University", program: "International Cooperation Policy Master’s",
    businessPriority: 2,
    englishBusinessPrograms: "MBA · Graduate School of Management",
    businessOfficialUrl: "https://admissions.apu.ac.jp/graduate/academics/mba/",
    english: "English-language graduate route; score/waiver eligibility applicant-specific", intake: "April/September 2027",
    funding: "Competitive tuition reductions and external scholarships; amount is not guaranteed", priority: "Conditional",
    realityCheck: "APU’s ICP master’s is official and includes Development Economics, but a 5.5 IELTS-only profile may not meet the standard English gate unless a valid waiver route applies. Treat it as conditional, not low-requirement by default.",
    officialLinks: [
      { label: "APU International Cooperation Policy", href: "https://admissions.apu.ac.jp/graduate/academics/gsa_master/icp/", description: "Degree, divisions, duration ও intake দেখুন।" },
      { label: "APU 2027 master’s admissions", href: "https://admissions.apu.ac.jp/graduate/how_to_apply/Masters_2027/", description: "Current eligibility, English evidence, dates ও documents verify করুন।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "kuas-engineering-masters-2027", university: "Kyoto University of Advanced Science", program: "Graduate School of Engineering Master’s",
    bestFitPriority: 2,
    english: "Language of instruction is English; IELTS 6.5/TOEFL iBT 85-equivalent or an approved English-medium-degree waiver is required", intake: "September 2027",
    funding: "KUAS-E awards may waive 30%, 50% or 100% of tuition/admission fees; Super KUAS-E can add stipend for a few students", priority: "Chubu/Kansai Private #191 · English-confirmed",
    realityCheck: "KUAS officially confirms an all-English two-year Master of Engineering. The route is research-based and requires pre-application review for supervision fit. IELTS 5.5 does not meet the published 6.5 Engineering requirement unless KUAS approves a qualifying English-medium-degree waiver.",
    officialLinks: [
      { label: "KUAS English Master of Engineering", href: "https://www.kuas.ac.jp/en/academics/eng-pg/", description: "English instruction, two-year duration, September intake ও research fields দেখুন।" },
      { label: "KUAS postgraduate application", href: "https://www.kuas.ac.jp/en/admission/pg/", description: "Timeline, eligibility, documents ও supervisor process দেখুন।" },
      { label: "KUAS English eligibility", href: "https://www.kuas.ac.jp/en/admission/pg-eligibility/", description: "Current IELTS/TOEFL/PTE/Duolingo scores এবং waiver conditions verify করুন।" },
      { label: "KUAS scholarships", href: "https://www.kuas.ac.jp/en-jp/about/tuition/scholarship", description: "KUAS-E/Super KUAS-E amount ও renewal conditions verify করুন।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "ryukyus-resilient-smart-city-masters-2027", university: "University of the Ryukyus", program: "Resilient Smart City Master’s",
    english: "Official special-program page currently requires at least CEFR B2 evidence", intake: "October 2027 watchlist",
    funding: "MEXT and non-scholarship routes may be offered by cycle; current 2027 allocation must be verified", priority: "Medium",
    realityCheck: "The English special program is official, but the visible call is for October 2026 and requires CEFR B2. A quoted IELTS 5.5 should not be treated as automatically equivalent without the next official guide.",
    officialLinks: [
      { label: "Resilient Smart City special program", href: "https://www.tec.u-ryukyu.ac.jp/graduate/en/pgp/", description: "Current cycle, CEFR rule, adviser contact ও MEXT/non-scholarship routes দেখুন।" },
      { label: "Graduate School of Engineering and Science", href: "https://www.u-ryukyu.ac.jp/faculty/gra_science/", description: "English special-program context ও graduate-school overview দেখুন।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "tottori-information-electronics-masters-2027", university: "Tottori University", program: "Information and Electronics Master’s Watchlist",
    english: "Older official route documents mention English/MOI pathways; a current 2027 guide is not yet verified", intake: "2027 watchlist",
    funding: "A special MEXT route may exist by cycle; self-funded and scholarship routes must be separated", priority: "Regional/Public #102 · English-check · Limited",
    realityCheck: "The Information and Electronics course appears in an older official foreign-student guide, but the current special-program document found is for Green Sustainable Chemistry. Keep this as a watchlist until Tottori publishes a matching 2027 Information/Electronics call.",
    officialLinks: [
      { label: "Tottori graduate admissions", href: "https://www.admissions.adm.tottori-u.ac.jp/", description: "Current graduate calls ও application guidelines search করুন।" },
      { label: "Older Information and Electronics route", href: "https://www.admissions.adm.tottori-u.ac.jp/wp-content/uploads/2021/03/Application-Procedure-for-Foreign-Student-Admission-to-Department-of-Engineering-Graduate-School-of-Sustainability-Science-Masters-Program-2021October-entrance.pdf", description: "Program existence/context দেখুন—2027 rules হিসেবে ব্যবহার করবেন না।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "toyo-english-track-masters-2027", university: "Toyo University", program: "English Track Master’s",
    english: "Official English Track lets students complete the entire degree in English", intake: "April/Fall 2027—exact course calendar verify করুন",
    funding: "Top Leading Students Scholarship can provide a two-year 100% tuition waiver and possibly a ¥120,000 monthly stipend; selection and renewal are highly competitive", priority: "Kanto Private #151 · English-confirmed",
    realityCheck: "Toyo officially offers complete-English master’s tracks, including International Culture and Communication Studies and Public-Private Partnership. English delivery is course-specific—not every Toyo graduate program is an English degree. The April 2027 Top Leading scholarship route is published, but admission and funding remain separate competitive decisions.",
    officialLinks: [
      { label: "Toyo English Track Curriculum", href: "https://www.toyo.ac.jp/academics/gadmissions/english_track_curriculum/index.html", description: "Complete-English degree courses, curriculum এবং eligible master’s programs দেখুন।" },
      { label: "April 2027 Top Leading Scholarship", href: "https://www.toyo.ac.jp/academics/gadmissions/other_admissions_en/", description: "2027 eligibility, pre-application matching, obligations ও application guide verify করুন।" },
      { label: "Toyo scholarships for international students", href: "https://www.toyo.ac.jp/en/assets/pdf/TOYO-UNIVERSITY-GUIDE-BOOK_2026.pdf", description: "Full scholarship, graduate tuition reduction ও other awards compare করুন।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "teikyo-english-economics-public-health-masters-2027", university: "Teikyo University", program: "English Master’s in Modern Economics / Public Health",
    english: "Modern Economics can complete all required credits in English; the international MPH route conducts classes and examinations in English", intake: "April 2027—program-specific guide verify করুন",
    funding: "Graduate scholarships and fee reductions are route-specific; the general first-year 40% international tuition reduction does not automatically cover graduate students", priority: "Kanto Private #158 · English-confirmed",
    realityCheck: "Teikyo’s Modern Economics master’s officially permits all graduation credits through English-taught courses, and its international Public Health application guide states that classes and examinations are in English. These are exact English routes; other Teikyo graduate schools must not be treated as English-completable by default.",
    officialLinks: [
      { label: "Modern Economics English program", href: "https://www.teikyo-u.ac.jp/en/faculties/economy/economy_m", description: "All-required-credit English route, curriculum এবং English thesis option দেখুন।" },
      { label: "Public Health English application guide", href: "https://www.med.teikyo-u.ac.jp/~tsph/2026_Guidelines_for_Applicants_E.pdf", description: "English classes/examinations, eligibility, documents ও selection verify করুন।" },
      { label: "Graduate admissions", href: "https://www.teikyo-u.ac.jp/en/applicants/graduate", description: "Current 2027 program-specific admission notice এবং final guide দেখুন।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "tiu-digital-business-innovation-ms-2027", university: "Tokyo International University", program: "M.S. in Digital Business & Innovation (E-Track)",
    bestFitPriority: 3,
    businessPriority: 18,
    englishBusinessPrograms: "M.S. in Digital Business & Innovation (E-Track)",
    businessOfficialUrl: "https://www.tiu.ac.jp/etrack/graduate/gdbi/",
    english: "Official English Track master’s with an English curriculum and thesis route", intake: "April/September 2027",
    funding: "TIU E-Track applicants may request a competitive 30%, 50%, 80% or 100% tuition reduction; the 2027 application guide is final authority", priority: "Kanto Private #161 · English-confirmed",
    realityCheck: "TIU’s two-year M.S. in Digital Business & Innovation is a confirmed English Track degree covering AI, analytics, digital marketing, entrepreneurship and technology-driven business. Scholarship percentage is decided with admission and is not guaranteed.",
    officialLinks: [
      { label: "TIU Digital Business & Innovation M.S.", href: "https://www.tiu.ac.jp/etrack/graduate/gdbi/", description: "Degree structure, curriculum, faculty এবং thesis options দেখুন।" },
      { label: "TIU E-Track graduate admissions", href: "https://www.tiu.ac.jp/etrack/graduate/", description: "Current application rounds, English evidence, fees ও scholarship guide verify করুন।" },
      { label: "2027 MEXT information", href: "https://www.tiu.ac.jp/etrack/announcements/", description: "Current graduate/MEXT announcements এবং deadline updates দেখুন।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "shizenkan-english-mba-2027", university: "Shizenkan University", program: "English MBA in Design and Leadership for Societal Innovation",
    bestFitPriority: 7,
    businessPriority: 9,
    englishBusinessPrograms: "English MBA in Design and Leadership for Societal Innovation",
    businessOfficialUrl: "https://shizenkan.ac.jp/en/admission_en/",
    english: "Applicants choose the English-language program and generally complete the full two-year MBA in that language", intake: "Late August 2027",
    funding: "Competitive grant scholarship may provide up to ¥4.8 million over a maximum of two years; eligibility and award amount require written confirmation", priority: "Kanto Private #175 · English-confirmed",
    realityCheck: "Shizenkan’s MEXT-accredited MBA has a confirmed English class, is part-time over two years and is designed for working professionals. Applicants normally need at least three years of full-time professional experience. The 2027 rounds close on November 30, 2026, March 31, 2027 and May 31, 2027.",
    officialLinks: [
      { label: "Shizenkan 2027 admissions", href: "https://shizenkan.ac.jp/en/admission_en/", description: "English track, work-experience eligibility, degree requirements ও selection process দেখুন।" },
      { label: "Class of 2029 application notice", href: "https://shizenkan.ac.jp/en/20260814_en/", description: "August 2027 intake এবং তিনটি application deadline verify করুন।" },
      { label: "Shizenkan tuition support FAQ", href: "https://shizenkan.ac.jp/en/admission_faq_en/", description: "Scholarship ceiling, education benefits এবং funding conditions দেখুন।" },
    ],
  }),
  createJapanShortlistGuide({
    slug: "rikkyo-master-in-international-business-2027", university: "Rikkyo University", program: "Master in International Business (MIB)",
    english: "All subjects and the complete two-year MIB degree are offered in English", intake: "April 2027 watchlist",
    funding: "University and external scholarships are competitive and separate from admission", priority: "Business shortlist #19 · English-confirmed",
    businessPriority: 19,
    englishBusinessPrograms: "Master in International Business (MIB)",
    businessOfficialUrl: "https://english.rikkyo.ac.jp/academics/graduate/business.html",
    realityCheck: "Rikkyo officially confirms that every MIB subject is offered in English and the full-time degree can be completed in two years. The current admission guide remains final authority for intake, English evidence, fees and application dates.",
    officialLinks: [
      { label: "Rikkyo Graduate School of Business", href: "https://english.rikkyo.ac.jp/academics/graduate/business.html", description: "All-English MIB curriculum, degree structure and program features verify করুন।" },
      { label: "Rikkyo graduate admissions", href: "https://english.rikkyo.ac.jp/admission/", description: "Current international graduate application guide, dates and funding notices দেখুন।" },
    ],
  }),
];

type TierAJapanSeed = {
  rank: number;
  slug: string;
  university: string;
  bestFit: string;
  routes: string;
  difficulty: "High" | "Very high";
  target: string;
  languageReality: string;
  strategy: string;
  officialLinks: ScholarshipGuide["officialLinks"];
  eligibilityNote?: string;
  businessPriority?: number;
  englishBusinessPrograms?: string;
  businessOfficialUrl?: string;
};

const tierARouteNames: Record<string, string> = {
  M: "MEXT (Embassy/University Recommendation)",
  U: "University scholarship or fellowship",
  J: "JASSO Honors Scholarship",
  T: "Admission/tuition fee waiver",
  P: "Private-foundation scholarship",
};

function createTierAJapanGuide(seed: TierAJapanSeed): ScholarshipGuide {
  const routeDetails = seed.routes.split("/").map((route) => tierARouteNames[route] ?? route);
  const difficultyBn = seed.difficulty === "Very high" ? "অত্যন্ত কঠিন" : "কঠিন";

  return {
    slug: seed.slug,
    country: "japan",
    university: seed.university,
    title: `${seed.university}: Tier A Master’s Planning Guide`,
    summary: `${seed.bestFit} background-এর জন্য ${seed.target} route, funding options এবং competitive application strategy নিয়ে verified planning guide।`,
    label: `Tier A · Rank ${seed.rank} · ${seed.difficulty}`,
    funding: `${routeDetails.join(" · ")}—সব route competitive; admission বা funding guarantee নয়।`,
    duration: "সাধারণত 2 বছর · April/September/October intake program অনুযায়ী",
    audience: `Strong academic profile-সহ international applicant, যার best fit: ${seed.bestFit}`,
    realityCheck: `${seed.university} এই shortlist-এর ${difficultyBn} target। ${seed.languageReality} ${seed.strategy}${seed.eligibilityNote ? ` ${seed.eligibilityNote}` : ""} Route code ${seed.routes} সম্ভাব্য funding channel বোঝায়; একই application-এ সবগুলো পাওয়া বা একসঙ্গে ব্যবহার করা যায় না।`,
    highlights: [
      `Shortlist position: #${seed.rank}; difficulty: ${seed.difficulty}.`,
      `Best-fit area: ${seed.bestFit}.`,
      `Recommended target: ${seed.target}.`,
      `Possible funding routes: ${routeDetails.join(", ")}.`,
      `Language reality: ${seed.languageReality}`,
    ],
    fit: [
      `${seed.bestFit} field-এর prerequisite ও আপনার bachelor’s coursework-এর স্পষ্ট মিল আছে।`,
      "Competitive GPA, relevant research/project evidence এবং শক্তিশালী recommendation দেখাতে পারবেন।",
      "Generic university ranking নয়—specific program, laboratory বা faculty fit লিখতে পারবেন।",
      "Scholarship না পেলেও application এবং self-funded fallback cost আগে থেকে হিসাব করতে পারবেন।",
    ],
    quickStart: [
      "Official graduate-school page থেকে exact degree, intake, language এবং current application guide বাছুন।",
      "Supervisor consent/AAO/AAD/pre-screening লাগলে formal application-এর আগেই সম্পন্ন করুন।",
      "দুইটি target laboratory বা program এবং অন্তত তিনটি evidence-based fit point লিখুন।",
      `Funding tracker-এ ${seed.routes} routeগুলো আলাদা deadline ও eligibility সহ রাখুন।`,
    ],
    steps: [
      {
        title: "Exact program ও admission route lock করুন",
        timing: "Deadline-এর 6–10 মাস আগে",
        description: "University-wide page শুধু navigator; final rule graduate school-এর current guideline।",
        actions: [
          `প্রথম target হিসেবে ${seed.target} যাচাই করুন।`,
          "April বনাম autumn intake, overseas/Japan-resident route এবং degree language আলাদা করে নোট করুন।",
          "Degree eligibility, GPA conversion, English/Japanese score ও entrance-exam rule official PDF থেকে তুলুন।",
        ],
        readyWhen: "একটি exact program, intake, deadline এবং applicant category লিখিতভাবে নিশ্চিত।",
      },
      {
        title: "Research বা career fit শক্ত করুন",
        timing: "Deadline-এর 4–8 মাস আগে",
        description: seed.strategy,
        actions: [
          "Current faculty/lab pages থেকে 2–3টি realistic option shortlist করুন।",
          "Recent paper, project বা curriculum-এর সঙ্গে নিজের work/research evidence connect করুন।",
          "Supervisor contact required হলে concise CV, transcript summary ও focused research idea পাঠান।",
        ],
        readyWhen: "প্রতিটি target-এর জন্য named evidence এবং কেন fit—তার এক-পৃষ্ঠার note প্রস্তুত।",
      },
      {
        title: "Competitive application package তৈরি করুন",
        timing: "Deadline-এর 8–12 সপ্তাহ আগে",
        description: `${seed.difficulty} selection-এ minimum eligibility যথেষ্ট নয়; coherent evidence package দরকার।`,
        actions: [
          "Transcript, degree certificate, CV, language score/MOI এবং certified translation প্রস্তুত করুন।",
          "SOP/research plan-এ problem, method, faculty fit, feasibility ও expected impact পরিষ্কার করুন।",
          "Recommendation, interview, written/oral exam এবং postal-original requirement calendar-এ রাখুন।",
        ],
        readyWhen: "Current official checklist-এর সব required document এবং test evidence submission-ready।",
      },
      {
        title: "Funding routes আলাদাভাবে submit ও verify করুন",
        timing: "Embassy cycle থেকে enrollment-এর পর পর্যন্ত",
        description: "MEXT, university, JASSO, waiver ও private scholarship-এর deadline এবং nomination authority আলাদা।",
        actions: [
          `আপনার জন্য applicable ${seed.routes} routes-এর eligibility ও overlap restriction যাচাই করুন।`,
          "MEXT Embassy Recommendation আগে শুরু করুন; University Recommendation program quota ধরে নেবেন না।",
          "Offer-এর পরে tuition, admission fee, stipend, duration ও renewal condition লিখিতভাবে মিলিয়ে নিন।",
        ],
        readyWhen: "Admission offer এবং প্রতিটি funding decision আলাদাভাবে documented; net two-year cost পরিষ্কার।",
      },
    ],
    checklist: [
      "Current graduate-school application guideline",
      "Degree certificate ও full academic transcript",
      "Accepted English/Japanese language evidence",
      "Academic CV ও relevant project/research evidence",
      "Program-specific SOP বা motivation statement",
      "Research proposal, যদি route-এ প্রয়োজন হয়",
      "Recommendation letters",
      "Supervisor consent/pre-screening evidence, যদি প্রয়োজন হয়",
      "Funding এবং 24-month fallback budget",
    ],
    afterSubmission: [
      "Portal, university email এবং spam folder নিয়মিত দেখুন।",
      "Interview/entrance exam-এর জন্য program knowledge, methods ও funding plan rehearse করুন।",
      "Admission, scholarship, tuition waiver এবং visa/COE—চারটি status আলাদাভাবে track করুন।",
    ],
    cautions: [
      "M/U/J/T/P সম্ভাব্য channel; কোনো award guaranteed নয় এবং double-funding restriction থাকতে পারে।",
      "University-level ‘English program’ মানে সব graduate school বা সব course English নয়।",
      "Supervisor-এর positive reply formal admission বা scholarship guarantee নয়।",
      "2027 dates, fees ও scholarship quota বদলাতে পারে; current official guide এবং written offer final authority।",
      ...(seed.eligibilityNote ? [seed.eligibilityNote] : []),
    ],
    officialLinks: seed.officialLinks,
    reviewedAt: "August 23, 2026",
    reviewedOn: "2026-08-23",
    businessPriority: seed.businessPriority,
    englishBusinessPrograms: seed.englishBusinessPrograms,
    businessOfficialUrl: seed.businessOfficialUrl,
  };
}

const tierAJapanGuides: ScholarshipGuide[] = [
  createTierAJapanGuide({
    rank: 1, slug: "university-of-tokyo-tier-a-masters-2027", university: "University of Tokyo", bestFit: "CSE + Business", routes: "M/U/J/T/P", difficulty: "Very high",
    target: "International Multidisciplinary Engineering (IME), Information Science and Technology, অথবা English-accessible business/economics route",
    languageReality: "Requirement graduate schoolভেদে বদলায়; IME lectures/research English-এ এবং 2027 prospectus প্রকাশিত।",
    strategy: "World-class rank alone নয়—faculty-level research match, excellent academics এবং strong proposal সবচেয়ে গুরুত্বপূর্ণ।",
    officialLinks: [
      { label: "UTokyo graduate admissions", href: "https://www.u-tokyo.ac.jp/adm/inbound/en/programs-admissions.html", description: "Graduate schools, English degree programs ও MEXT routes দেখুন।" },
      { label: "IME 2027 prospectus", href: "https://www.ime.t.u-tokyo.ac.jp/Prospectus-2027.html", description: "English master’s, online selection, fees ও competitive MEXT/IME funding verify করুন।" },
      { label: "UTokyo scholarships", href: "https://www.u-tokyo.ac.jp/en/prospective-students/scholarships.html", description: "MEXT, UTokyo Fellowship এবং external scholarship navigator।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 2, slug: "kyoto-university-tier-a-masters-2027", university: "Kyoto University", bestFit: "CSE + Business", routes: "M/U/J/T/P", difficulty: "Very high",
    businessPriority: 15,
    englishBusinessPrograms: "International MBA (i-MBA)",
    businessOfficialUrl: "https://www.gsm.kyoto-u.ac.jp/en/education/mba/international-mba-programs/",
    target: "Graduate School of Informatics, Engineering, Economics অথবা listed English-taught master’s",
    languageReality: "English-taught degree list সীমিত; অন্য অধিকাংশ master’s/professional route-এ শক্ত Japanese প্রয়োজন।",
    strategy: "Overseas graduates-এর AAO/graduate-school procedure এবং prospective-supervisor fit অনেক route-এ early critical step।",
    officialLinks: [
      { label: "Kyoto graduate admission guide", href: "https://www.kyoto-u.ac.jp/en/education-campus/education-and-admissions/intl-admissions", description: "Course, supervisor, AAO ও graduate-school guidelines অনুসরণ করুন।" },
      { label: "English-taught degree programs", href: "https://www.kyoto-u.ac.jp/en/education-campus/education-and-admissions/english-taught-degree-programs", description: "English-এ complete করা যায় এমন exact degree shortlist করুন।" },
      { label: "Kyoto scholarships", href: "https://www.kyoto-u.ac.jp/en/education-campus/procedures/scholarships", description: "MEXT ও highly competitive post-enrollment private funding reality দেখুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 3, slug: "science-tokyo-tier-a-masters-2027", university: "Institute of Science Tokyo", bestFit: "CSE/Engineering", routes: "M/U/J/T/P", difficulty: "Very high",
    target: "International Graduate Program A/C in computing, engineering, AI or systems",
    languageReality: "Science and Engineering IGP পুরো English-এ; IGP route ও department অনুযায়ী selection এবং intake আলাদা।",
    strategy: "Prospective academic supervisor খোঁজা, research plan এবং IGP A বনাম C-এর সঠিক route নির্বাচন application-এর কেন্দ্র।",
    officialLinks: [
      { label: "Science Tokyo international graduate programs", href: "https://admissions.isct.ac.jp/en/013/graduate/programs/science-and-engineering", description: "IGP A/B/C, English delivery, intake ও scholarship routes তুলনা করুন।" },
      { label: "Science Tokyo admissions", href: "https://admissions.isct.ac.jp/en", description: "Current graduate announcements ও application procedures দেখুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 4, slug: "osaka-university-tier-a-masters-2027", university: "The University of Osaka", bestFit: "CSE + Business", routes: "M/U/J/T/P", difficulty: "Very high",
    target: "Information Science, Engineering, Economics/Management অথবা English international graduate route",
    languageReality: "Language, test এবং pre-contact rule প্রতিটি graduate school নির্ধারণ করে; university-wide English assumption নিরাপদ নয়।",
    strategy: "Overseas-educated applicants-এর জন্য AAD screening, exact graduate program এবং prospective supervisor sequence আগে শেষ করুন।",
    officialLinks: [
      { label: "International graduate applicant guide", href: "https://www.osaka-u.ac.jp/en/admissions/intl-students", description: "Research plan, program, AAD ও supervisor contact-এর official flow দেখুন।" },
      { label: "Graduate admissions", href: "https://www.osaka-u.ac.jp/en/admissions/graduate", description: "Graduate-school-specific current guidelines খুঁজুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 5, slug: "tohoku-university-tier-a-masters-2027", university: "Tohoku University", bestFit: "CSE + Management", routes: "M/U/J/T/P", difficulty: "Very high",
    target: "English graduate courses in Information Sciences, Engineering অথবা Economics and Management",
    languageReality: "English-only graduate courses আছে, তবে program এবং instructor অনুযায়ী application procedure বদলায়।",
    strategy: "আগে prospective advisor confirm করুন; 2027 International Excellence Scholarship top applicants-এর জন্য full/half tuition cover করতে পারে।",
    officialLinks: [
      { label: "Tohoku graduate admission", href: "https://www.tohoku.ac.jp/en/admissions/admission_graduate.html", description: "English courses, advisor-first process ও school-specific procedure দেখুন।" },
      { label: "International scholarships", href: "https://www.insc.tohoku.ac.jp/english/scholarship-for-international-students/", description: "MEXT, waiver এবং 2027 International Excellence Scholarship verify করুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 6, slug: "nagoya-university-tier-a-masters-2027", university: "Nagoya University", bestFit: "CSE + Business", routes: "M/U/J/T/P", difficulty: "Very high",
    target: "G30 Computer Science/Engineering অথবা Economics and Business Administration master’s",
    languageReality: "G30 degree সম্পূর্ণ English-এ; most applicants-এর accepted English test লাগে এবং exact waiver rule program-specific।",
    strategy: "Application-এর আগে research group select করতে হয়; group capacity এবং evidence-based fit ছাড়া generic G30 application দুর্বল।",
    officialLinks: [
      { label: "Nagoya graduate programs", href: "https://en.nagoya-u.ac.jp/admissions/graduate/", description: "G30 ও other English graduate programs এবং intake দেখুন।" },
      { label: "G30 graduate admissions", href: "https://admissions.g30.nagoya-u.ac.jp/admissions/graduateprograms/", description: "Current program, research group, documents ও timeline verify করুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 7, slug: "kyushu-university-tier-a-masters-2027", university: "Kyushu University", bestFit: "CSE + Business", routes: "M/U/J/T/P", difficulty: "Very high",
    businessPriority: 24,
    englishBusinessPrograms: "Financial & Business Economics / Management & Accounting (English Master’s)",
    businessOfficialUrl: "https://www.econ.kyushu-u.ac.jp/english/pa_index/pa_index2/",
    target: "International Master’s in Engineering/ISEE অথবা English economics/business-aligned route",
    languageReality: "Graduate schools international English programs দেয়, কিন্তু requirements ও selection school-specific।",
    strategy: "Engineering route-এ formal application-এর আগে relevant faculty member-এর সঙ্গে research আলোচনা ও consent essential।",
    officialLinks: [
      { label: "Kyushu admissions", href: "https://www.kyushu-u.ac.jp/en/admission", description: "Graduate admission, fees এবং scholarship navigator দেখুন।" },
      { label: "Engineering graduate admissions", href: "https://www.eng.kyushu-u.ac.jp/en/admissions/graduate-admissions/", description: "English international master’s, intake এবং advisor-first rule verify করুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 8, slug: "hokkaido-university-tier-a-masters-2027", university: "Hokkaido University", bestFit: "CSE + Business", routes: "M/U/J/T/P", difficulty: "Very high",
    target: "e3 Engineering, Integrated Science or another officially listed English degree program",
    languageReality: "Hokkaido officially lists complete English degree programs; e3 covers graduate engineering fields and the exact intake/score rule remains program-specific।",
    strategy: "Research-intensive route হওয়ায় lab choice, supervisor availability এবং proposal qualityকে ranking-এর চেয়ে বেশি priority দিন।",
    officialLinks: [
      { label: "English degree programs", href: "https://www.global.hokudai.ac.jp/wp/wp-content/uploads/2025/04/Hokkaido-University-International-Student-Prospectus-2025-2026-EN.pdf", description: "Entirely English degree options এবং eligible fields verify করুন।" },
      { label: "Hokkaido scholarships", href: "https://www.global.hokudai.ac.jp/admissions/scholarships/", description: "MEXT, JASSO এবং private scholarship options verify করুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 9, slug: "tsukuba-tier-a-masters-2027", university: "University of Tsukuba", bestFit: "CSE + Management", routes: "M/U/J/T/P", difficulty: "High",
    businessPriority: 4,
    englishBusinessPrograms: "MBA in International Business · PEPP",
    businessOfficialUrl: "https://mbaib.gsbs.tsukuba.ac.jp/",
    target: "Systems and Information Engineering, AI Social Implementation অথবা MBA-IB",
    languageReality: "একাধিক English degree আছে; programভেদে external English score, interview এবং supervisor requirement বদলায়।",
    strategy: "Technical AISIP এবং professional MBA-IB সম্পূর্ণ আলাদা route—profile অনুযায়ী একটিকে primary করে documents সাজান।",
    officialLinks: [
      { label: "Tsukuba admissions", href: "https://www.tsukuba.ac.jp/en/admissions/", description: "Graduate programs, English degrees, fees ও financial aid দেখুন।" },
      { label: "Tsukuba MEXT", href: "https://www.tsukuba.ac.jp/en/admissions/financial-scholarships/mext/", description: "Embassy/University Recommendation এবং current special programs verify করুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 10, slug: "kobe-university-tier-a-masters-2027", university: "Kobe University", bestFit: "CSE + Business", routes: "M/U/J/T/P", difficulty: "High",
    businessPriority: 10,
    englishBusinessPrograms: "Global Master Program / GSICS Development Policy",
    businessOfficialUrl: "https://www.gsics.kobe-u.ac.jp/en/prospective/master.html",
    target: "Systems Informatics অথবা English-taught International Cooperation Studies master’s",
    languageReality: "GSICS English master’s October-only; technical graduate routes-এর language ও exam আলাদাভাবে verify করতে হবে।",
    strategy: "Business/policy এবং CSE-এর জন্য একই application নয়; exact school অনুযায়ী research proposal ও supervisor strategy বদলান।",
    officialLinks: [
      { label: "Kobe English-taught master’s", href: "https://www.gsics.kobe-u.ac.jp/en/prospective/master.html", description: "GSICS October intake, documents ও AY2027 procedure notice দেখুন।" },
      { label: "Kobe scholarships", href: "https://www.kobe-u.ac.jp/en/campus-life/scholarships/about/", description: "MEXT ও competitive private scholarships verify করুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 11, slug: "hitotsubashi-tier-a-masters-2027", university: "Hitotsubashi University", bestFit: "Business/Economics", routes: "M/U/J/T/P", difficulty: "Very high",
    businessPriority: 3,
    englishBusinessPrograms: "ICS MBA (100% English)",
    businessOfficialUrl: "https://www.ics.hub.hit-u.ac.jp/mba",
    target: "Economics, Business Administration, International/Public Policy অথবা Social Data Science",
    languageReality: "কিছু policy program English-এ, কিন্তু Economics master’s শুধু English courses নিয়ে complete করা যায় না।",
    strategy: "Quantitative economics/business foundation, research proposal এবং program-specific Japanese/English reality honestভাবে match করুন।",
    officialLinks: [
      { label: "Hitotsubashi graduate schools", href: "https://www.hit-u.ac.jp/eng/education/index.html", description: "Business, Economics, Policy ও Social Data Science routes দেখুন।" },
      { label: "2027 MEXT graduate route", href: "https://international.hit-u.ac.jp/en/pros/mext/apply/", description: "Embassy-recommended candidate procedure ও available majors verify করুন।" },
      { label: "Economics admission", href: "https://www.econ.hit-u.ac.jp/eng/page/graduate/admission.html", description: "English/Japanese course reality, TOEFL/TOEIC ও online oral selection দেখুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 12, slug: "waseda-tier-a-masters-2027", university: "Waseda University", bestFit: "CSE + Business", routes: "M/U/J/T/P", difficulty: "Very high",
    businessPriority: 6,
    englishBusinessPrograms: "International MBA · MSc in Finance",
    businessOfficialUrl: "https://www.waseda.jp/fcom/wbs/en/about/program",
    target: "English-based Computer Science/Engineering, Economics অথবা Business-related graduate program",
    languageReality: "English-based graduate programs আছে, কিন্তু school-specific test, experience এবং document rules আলাদা।",
    strategy: "Private-university tuition বেশি; scholarship পাওয়ার আগে full-cost funding proof এবং strong academic/professional evidence প্রস্তুত রাখুন।",
    officialLinks: [
      { label: "Waseda graduate programs", href: "https://www.waseda.jp/inst/admission/en/graduate/", description: "English-based ও Japanese-based graduate programs আলাদা করে দেখুন।" },
      { label: "Waseda tuition and aid", href: "https://www.waseda.jp/inst/cie/en/life/aid", description: "Most post-admission scholarships competitive—funding reality verify করুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 13, slug: "keio-tier-a-masters-2027", university: "Keio University", bestFit: "CSE + Business", routes: "M/U/J/T/P", difficulty: "Very high",
    target: "International Graduate Program in Science and Technology, Economics অথবা Business and Commerce",
    languageReality: "Keio-তে multiple English graduate degrees আছে; exact school-এর application guide final authority।",
    strategy: "Academic fit-এর পাশাপাশি private-university cost plan করুন; Design the Future award highly selective, fallback নয়।",
    officialLinks: [
      { label: "Keio English degree programs", href: "https://www.keio.ac.jp/en/admissions/international-student/programs-offered-in-english/", description: "English-completable graduate degrees shortlist করুন।" },
      { label: "Keio graduate admissions", href: "https://www.keio.ac.jp/en/admissions/grad/", description: "Current school-specific master’s guidebooks দেখুন।" },
      { label: "Keio scholarships", href: "https://www.keio.ac.jp/en/admissions/scholarship/", description: "Internal, MEXT, JASSO, private এবং Design the Future funding দেখুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 14, slug: "hiroshima-university-tier-a-masters-2027", university: "Hiroshima University", bestFit: "CSE + Management", routes: "M/U/J/T/P", difficulty: "High",
    target: "Informatics and Data Science, Smart Innovation অথবা transdisciplinary management-aligned field",
    languageReality: "International selections আছে; English certificate এবং test rules programভেদে আলাদা ও 2026 থেকে কিছু route-এ updated।",
    strategy: "Overseas graduates-এর supervisor contact অনেক ক্ষেত্রে HU-IAAS দিয়ে শুরু করতে হয়; direct informal email যথেষ্ট নাও হতে পারে।",
    officialLinks: [
      { label: "Hiroshima master’s admissions", href: "https://www.hiroshima-u.ac.jp/en/adse/admission/m_admission", description: "International selection, programs, language updates ও current guides দেখুন।" },
      { label: "International Admissions Office", href: "https://www.hiroshima-u.ac.jp/en/iao", description: "HU-IAAS supervisor-contact process, fees ও scholarships দেখুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 15, slug: "tokyo-university-of-science-tier-a-masters-2027", university: "Tokyo University of Science", bestFit: "CSE + Management", routes: "M/J/T/P", difficulty: "High",
    target: "Information Sciences, Engineering অথবা Management of Technology-aligned graduate route",
    languageReality: "International applicant guide আছে, কিন্তু program delivery Japanese/English এবং examination language আগে confirm করতে হবে।",
    strategy: "Application-এর আগে intended instructor-এর সঙ্গে contact বাধ্যতামূলক; university scholarship route user list-এ নেই, তাই M/J/T/P আলাদাভাবে verify করুন।",
    officialLinks: [
      { label: "TUS admissions", href: "https://www.tus.ac.jp/en/admissions/", description: "Graduate application এবং instructor-first rule দেখুন।" },
      { label: "International master’s guide reference", href: "https://www.tus.ac.jp/en/admissions/graduate/pdf/2026_en_master.pdf", description: "Eligibility ও selection reference হিসেবে দেখুন; 2027 guide প্রকাশ হলে replace করুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 16, slug: "yokohama-national-tier-a-masters-2027", university: "Yokohama National University", bestFit: "CSE + Business", routes: "M/U/J/T/P", difficulty: "High",
    target: "Mathematics/Physics/Electrical Engineering and Computer Science অথবা English management/infrastructure route",
    languageReality: "YNU official page exact English master’s list দেয়; Japanese-only routes-এর সঙ্গে গুলিয়ে ফেলবেন না।",
    strategy: "Program-specific guide, pre-arrival admission এবং YNU international tuition-waiver eligibility একসঙ্গে যাচাই করুন।",
    officialLinks: [
      { label: "YNU admissions and aid", href: "https://www.ynu.ac.jp/english/admissions/", description: "English master’s, MEXT, JICA এবং tuition-waiver routes দেখুন।" },
      { label: "Graduate admission policy", href: "https://www.ynu.ac.jp/english/education/policy/graduate/admission/", description: "School-specific guideline ও selection framework verify করুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 17, slug: "chiba-university-tier-a-masters-2027", university: "Chiba University", bestFit: "CSE + Management", routes: "M/U/J/T/P", difficulty: "High",
    target: "Economics in English master’s course; technical routes only when separately confirmed",
    languageReality: "Chiba officially lists an Economics in English master’s course. This confirmation does not mean its Science, Engineering or Informatics degrees are automatically English-completable।",
    strategy: "Supervisor/lab fit আগে তৈরি করুন; international scholarship recommendation-এর জন্য annual pre-registration লাগতে পারে।",
    officialLinks: [
      { label: "Economics in English master’s", href: "https://www.gshpa.chiba-u.jp/en/4.html", description: "English economics course এবং master’s structure verify করুন।" },
      { label: "International graduate procedures guide", href: "https://www.chiba-u.jp/students/files/pdf/AdmissionProcedureGuide_Graduate_EN_InternationalStudent2.pdf", description: "Enrollment, scholarship pre-registration এবং international procedures দেখুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 18, slug: "osaka-metropolitan-tier-a-masters-2027", university: "Osaka Metropolitan University", bestFit: "CSE + Business", routes: "M/J/T/P", difficulty: "High",
    target: "English-accessible Engineering/Science route; Business/Economics/Informatics only with sufficient Japanese",
    languageReality: "OMU explicitly lists Business, Economics এবং Informatics graduate schools as Japanese-taught; English target carefully narrow করতে হবে।",
    strategy: "Pre-arrival route থাকলে supervisor-এর মাধ্যমে JASSO reservation possibility দেখুন; admission-এর পরে private aid/waiver competitive।",
    officialLinks: [
      { label: "OMU graduate admissions", href: "https://www.omu.ac.jp/en/admissions/graduate/", description: "English/Japanese-taught graduate schools clearly compare করুন।" },
      { label: "OMU financial aid", href: "https://www.omu.ac.jp/en/admissions/financial-aid/", description: "JASSO pre-arrival, private scholarship ও tuition reduction rules দেখুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 19, slug: "tuat-tier-a-masters-2027", university: "Tokyo University of Agriculture and Technology", bestFit: "CSE/Engineering", routes: "M/U/J/T/P", difficulty: "High",
    target: "Engineering, Computer and Information Sciences অথবা Bio-Applications and Systems Engineering",
    languageReality: "TUAT officially states that its International Specialized Program is offered entirely in English; other general master’s routes must not be treated as English-only।",
    strategy: "Applied engineering/research evidence এবং prospective laboratory fitকে central করুন; নামের ‘Agriculture’ দেখে computing options বাদ দেবেন না।",
    officialLinks: [
      { label: "TUAT international admissions", href: "https://www.tuat.ac.jp/english/global/for_international_students/admissions/", description: "Entirely English International Specialized Program এবং current master’s routes verify করুন।" },
      { label: "TUAT graduate admission policy", href: "https://www.tuat.ac.jp/en/admission/nyushi_daigakuin/admission_policy/", description: "Engineering এবং interdisciplinary applicant expectations verify করুন।" },
    ],
  }),
  createTierAJapanGuide({
    rank: 20, slug: "ochanomizu-tier-a-masters-2027", university: "Ochanomizu University", bestFit: "CSE + Business", routes: "M/U/J/T/P", difficulty: "High",
    target: "Advanced Sciences/Computer Science অথবা interdisciplinary human-development and management research",
    languageReality: "Program-specific Japanese/English এবং entrance-exam requirements current master’s guide থেকে confirm করতে হবে।",
    strategy: "Field fit শক্ত হলেও eligibility প্রথম gate—এই national women’s university-এর graduate applications women candidates-এর জন্য।",
    eligibilityNote: "গুরুত্বপূর্ণ: Ochanomizu University-এর master’s admission guideline women applicants-কে eligible বলে; eligibility না মিললে apply করবেন না।",
    officialLinks: [
      { label: "Ochanomizu master’s admission guide", href: "https://www.ocha.ac.jp/en/admission/info/master_d/fil/2026_M_kyoso.pdf", description: "Women-only eligibility, international route, fees ও support reference দেখুন; 2027 guide প্রকাশ হলে update করুন।" },
      { label: "Ochanomizu admissions", href: "https://www.ocha.ac.jp/en/admission/index.html", description: "Current graduate admission announcements ও official guidance দেখুন।" },
    ],
  }),
];

type RegionalPublicJapanSeed = {
  rank: number;
  slug: string;
  university: string;
  subject: string;
  language: "English check" | "English-confirmed" | "English-confirmed · partner eligibility" | "JP-focused";
  target: string;
  reality: string;
  officialLinks: ScholarshipGuide["officialLinks"];
  viability?: "conditional" | "not-currently-viable";
  bestFitPriority?: number;
};

function createRegionalPublicJapanGuide(seed: RegionalPublicJapanSeed): ScholarshipGuide {
  const japaneseFirst = seed.language === "JP-focused";
  const englishConfirmed = seed.language.startsWith("English-confirmed");
  const viability = seed.viability ?? "conditional";

  return {
    slug: seed.slug,
    country: "japan",
    university: seed.university,
    title: `${seed.university}: Regional/Public Master’s Check`,
    summary: `Regional/public shortlist #${seed.rank}: ${seed.subject} fit, degree-language reality এবং international admission route যাচাইয়ের practical guide।`,
    label: `Regional/Public · #${seed.rank} · ${seed.language}`,
    funding: "MEXT, JASSO, tuition reduction/waiver ও private scholarship programভেদে যাচাই করতে হবে; কোনো funding guaranteed নয়।",
    duration: viability === "not-currently-viable" ? "Current master’s route confirmed নয়" : "সাধারণত 2 বছর · intake current guide দিয়ে confirm করুন",
    audience: `${seed.subject} field-এর applicant, যিনি regional/public university এবং language requirements বাস্তবভাবে যাচাই করতে চান`,
    realityCheck: `${seed.reality} ${japaneseFirst ? "এটি Japanese-first target; English page বা English entrance material থাকলেই degree English-medium হয় না।" : englishConfirmed ? "Official source complete English degree route নিশ্চিত করে; তবু current intake, field ও applicant eligibility আলাদাভাবে যাচাই করুন।" : "‘English check’ মানে complete degree English-এ নিশ্চিত নয়—course, supervision ও entrance-exam language লিখিতভাবে verify করতে হবে।"}`,
    highlights: [
      `Shortlist rank: #${seed.rank}.`,
      `Potential subject: ${seed.subject}.`,
      `Language signal: ${seed.language}.`,
      `Best current target: ${seed.target}.`,
      viability === "not-currently-viable" ? "Current master’s-degree route পাওয়া যায়নি; এখনই degree application target নয়।" : "International/special selection থাকলেও exact eligibility current guide নির্ধারণ করে।",
    ],
    fit: [
      `${seed.subject} এবং আপনার academic/work evidence-এর সরাসরি মিল আছে।`,
      japaneseFirst ? "Academic Japanese-এ class, research supervision, interview ও thesis পরিচালনা করতে পারবেন।" : "Admissions office/supervisor থেকে English completion feasibility লিখিতভাবে confirm করবেন।",
      "Named supervisor বা research field-এর সঙ্গে evidence-based fit দেখাতে পারবেন।",
      "Regional location, living cost এবং post-study career plan বাস্তবভাবে গ্রহণযোগ্য।",
    ],
    quickStart: [
      "Official graduate-school page থেকে master’s degree existence এবং current intake confirm করুন।",
      "Degree language, exam language, thesis language ও supervisor language—চারটি আলাদা প্রশ্নে যাচাই করুন।",
      "International special selection, Japan-resident restriction এবং in-person exam requirement লিখুন।",
      "Funding ছাড়া দুই বছরের tuition ও living-cost fallback budget তৈরি করুন।",
    ],
    steps: [
      {
        title: "Degree ও language viability যাচাই করুন",
        timing: "Shortlist করার সঙ্গে সঙ্গে",
        description: "University name বা English webpage নয়—current graduate guideline এবং curriculum final evidence।",
        actions: [
          `Target হিসেবে ${seed.target} official page-এ মিলিয়ে নিন।`,
          "Master’s availability, intake, applicant category ও selection method নোট করুন।",
          japaneseFirst ? "Required JLPT/EJU বা Japanese interview/written-exam level admissions office-এ confirm করুন।" : "English-only completion, accepted test/MOI এবং Japanese requirement admissions office-এ confirm করুন।",
        ],
        readyWhen: viability === "not-currently-viable" ? "Current master’s route প্রকাশিত হলে তবেই application plan শুরু হবে।" : "Degree, language এবং selection route official evidence দিয়ে confirmed।",
      },
      {
        title: "Supervisor ও subject fit তৈরি করুন",
        timing: "Deadline-এর 4–6 মাস আগে",
        description: "Regional/public programs-এ small intake ও supervisor capacity গুরুত্বপূর্ণ হতে পারে।",
        actions: [
          "Faculty directory থেকে 2–3টি relevant research area shortlist করুন।",
          "Recent work দেখে নিজের project/degree experience-এর সঙ্গে genuine connection লিখুন।",
          "Prior consent দরকার হলে CV, transcript summary ও concise research idea দিয়ে যোগাযোগ করুন।",
        ],
        readyWhen: "একজন viable supervisor/program এবং অন্তত তিনটি specific fit point প্রস্তুত।",
      },
      {
        title: "Application package ও examination প্রস্তুত করুন",
        timing: "Deadline-এর 6–10 সপ্তাহ আগে",
        description: "Language check-এর পাশাপাশি on-campus written/oral exam ও postal submission common risk।",
        actions: [
          "Degree certificate, transcript, CV, research plan, recommendation ও translation সংগ্রহ করুন।",
          "English/Japanese external score, interview এবং subject exam current guide অনুযায়ী প্রস্তুত করুন।",
          "Eligibility screening ও postal-arrival deadline formal application-এর আগেই calendar-এ রাখুন।",
        ],
        readyWhen: "Official checklist-এর সব document এবং required examination evidence প্রস্তুত।",
      },
      {
        title: "Admission, funding ও relocation verify করুন",
        timing: "Offer stage",
        description: "Public tuition তুলনামূলক কম হতে পারে, কিন্তু admission fee, relocation ও living cost থাকে।",
        actions: [
          "MEXT, JASSO, waiver ও private scholarship-এর eligibility এবং timing আলাদাভাবে দেখুন।",
          "Written offer-এ tuition, admission fee এবং payment deadline মিলিয়ে নিন।",
          "Campus location, housing, transport ও part-time income ছাড়া 24-month budget final করুন।",
        ],
        readyWhen: "Net cost, degree language এবং enrollment conditions লিখিতভাবে পরিষ্কার।",
      },
    ],
    checklist: [
      "Current master’s application guideline",
      "Degree-language confirmation",
      "Entrance-exam and interview language",
      "Degree certificate ও full transcript",
      "Accepted language evidence",
      "Academic CV ও research plan",
      "Supervisor consent, যদি প্রয়োজন হয়",
      "Funding ও relocation fallback budget",
    ],
    afterSubmission: [
      "Portal/email এবং postal delivery status track করুন।",
      "Interview বা written exam-এর location, language ও permitted materials confirm করুন।",
      "Admission ও scholarship/waiver decision আলাদাভাবে record করুন।",
    ],
    cautions: [
      "English check কোনো English-taught degree guarantee নয়।",
      "JP-focused program-এ Japanese proficiency ছাড়া admission বা degree completion বাস্তবসম্মত নাও হতে পারে।",
      "Research-student acceptance degree admission নয়।",
      "2027 rules পরিবর্তিত হতে পারে; current official guideline ও written confirmation final authority।",
      ...(viability === "not-currently-viable" ? ["Current official source-এ master’s program নিশ্চিত হয়নি; undergraduate admission page দিয়ে master’s application plan করবেন না।"] : []),
    ],
    officialLinks: seed.officialLinks,
    reviewedAt: "August 23, 2026",
    reviewedOn: "2026-08-23",
    bestFitPriority: seed.bestFitPriority,
  };
}

const regionalPublicJapanGuides: ScholarshipGuide[] = [
  createRegionalPublicJapanGuide({
    rank: 101, slug: "hirosaki-regional-public-masters-2027", university: "Hirosaki University", subject: "IT + Business/Social Science", language: "English check",
    target: "Graduate School of Science and Technology অথবা Humanities and Social Sciences",
    reality: "Graduate applicants entrance examination ও interview দেয়; supervisor আগে নির্ধারণ করা strongly recommended এবং exam method graduate schoolভেদে বদলায়।",
    officialLinks: [
      { label: "Hirosaki enrollment", href: "https://www.hirosaki-u.ac.jp/en/enrollment/", description: "Graduate admission এবং supervisor-first guidance দেখুন।" },
      { label: "Graduate application process", href: "https://www.kokusai.hirosaki-u.ac.jp/en/studyabroad02/sa02_page3/", description: "Eligibility, exam এবং application sequence verify করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 103, slug: "shimane-regional-public-masters-2027", university: "Shimane University", subject: "Natural Science and Technology", language: "English-confirmed",
    target: "Graduate School of Natural Science and Technology international special program",
    reality: "Official international guidance confirms a graduate special program in which all lectures and seminars are delivered in English; exact field, intake and eligibility current guide দিয়ে মিলিয়ে নিতে হবে।",
    officialLinks: [
      { label: "Shimane admission information", href: "https://www.shimane-u.ac.jp/en/study/future_students/admission_information.html", description: "English/bilingual graduate special selections দেখুন।" },
      { label: "English graduate special program", href: "https://kokusai.shimane-u.ac.jp/english/study_abroad/english.html", description: "All-English lecture/seminar delivery এবং eligible graduate field verify করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 104, slug: "yamanashi-regional-public-masters-2027", university: "University of Yamanashi", subject: "Engineering / Environmental Science", language: "English-confirmed",
    target: "English degree program in River Basin Environmental Science or a current international engineering route",
    reality: "The university officially lists English degree programs, including an international master’s route in River Basin Environmental Science. This does not make every Computer Science/Engineering course English-taught।",
    officialLinks: [
      { label: "English degree programs", href: "https://www.yamanashi.ac.jp/en/wp-content/uploads/2019/03/guidebook_english.pdf", description: "English master’s program, coursework ও degree structure verify করুন।" },
      { label: "Engineering master’s programs", href: "https://www.eng.yamanashi.ac.jp/en/master/", description: "Current program list এবং special educational routes দেখুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 105, slug: "joetsu-education-regional-public-masters-2027", university: "Joetsu University of Education", subject: "Educational Technology", language: "JP-focused",
    target: "Graduate School of Education—educational technology/ICT-supported learning research",
    reality: "এটি teacher-education specialist national university; generic IT master’s নয় এবং Japanese school/education context central।",
    officialLinks: [
      { label: "Joetsu University of Education", href: "https://www.juen.ac.jp/english/", description: "Graduate education, international support ও official university information দেখুন।" },
      { label: "Graduate admissions", href: "https://www.juen.ac.jp/050about/060admissions/", description: "Current Japanese application guidelines ও selection schedule verify করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 106, slug: "obihiro-regional-public-masters-2027", university: "Obihiro University of Agriculture and Veterinary Medicine", subject: "Management/Data applications", language: "English check",
    target: "Animal Science and Agriculture research using data, production, food or management applications",
    reality: "OUAVM generic business/data university নয়; agriculture/veterinary research problem-এর মধ্যে management বা data method fit করতে হবে এবং supervisor consent আগে প্রয়োজন।",
    officialLinks: [
      { label: "OUAVM before applying", href: "https://www.obihiro.ac.jp/en/admissions", description: "Supervisor consent, request form এবং international application steps দেখুন।" },
      { label: "International student guide", href: "https://www.obihiro.ac.jp/en/internationalstudent_e-2", description: "Graduate school, fees, scholarships ও support দেখুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 107, slug: "tsuru-regional-public-masters-2027", university: "Tsuru University", subject: "Business/Social Science", language: "JP-focused",
    target: "Graduate School of Humanities—Social and Regional Studies/Comparative Culture",
    reality: "Tsuru-এর master’s হলো humanities-oriented; standalone business school নয় এবং 2027 graduate guides Japanese-এ প্রকাশিত।",
    officialLinks: [
      { label: "Tsuru 2027 application guides", href: "https://www.tsuru.ac.jp/admission/requirements/", description: "Graduate School of Humanities rounds ও research-plan forms দেখুন।" },
      { label: "Tsuru admissions", href: "https://www.tsuru.ac.jp/admission/", description: "Current admissions notices ও official updates দেখুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 108, slug: "miyagi-regional-public-masters-2027", university: "Miyagi University", subject: "IT + Business", language: "JP-focused",
    target: "Graduate School of Project Design",
    reality: "Foreign-student places Project Design master’s-এ আছে, তবে selection essay/oral/documents-based এবং Japanese academic environment ধরে planning করতে হবে।",
    officialLinks: [
      { label: "Miyagi graduate admissions", href: "https://www.myu.ac.jp/admissions/graduate/", description: "2027 schedule, guides, exams ও graduate schools দেখুন।" },
      { label: "Graduate admission policy", href: "https://www.myu.ac.jp/admissions/graduate/policy/", description: "Written/oral, English score এবং foreign-student selection expectations দেখুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 109, slug: "iwate-prefectural-regional-public-masters-2027", university: "Iwate Prefectural University", subject: "IT + Policy/Management", language: "JP-focused",
    target: "Graduate School of Software and Information Science; Policy Studies only with strong Japanese",
    reality: "Software graduate international forms English-এ পাওয়া যায়, কিন্তু Policy/Social Welfare/Nursing guides Japanese-only; complete-English degree ধরে নেওয়া যাবে না।",
    officialLinks: [
      { label: "Iwate international graduate admissions", href: "https://www.iwate-pu.ac.jp/internationalexchange/admissions.html", description: "Software master’s English forms ও Japanese-only schools compare করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 110, slug: "akita-prefectural-regional-public-masters-2027", university: "Akita Prefectural University", subject: "IT/Systems", language: "English check",
    target: "Graduate School of Systems Science and Technology",
    reality: "Privately funded international/returnee special selection আছে, কিন্তু current graduate information মূলত Japanese এবং course language written confirmation দরকার।",
    officialLinks: [
      { label: "Akita Prefectural graduate admissions", href: "https://www.akita-pu.ac.jp/nyushi/joho/joho-daigakuin/", description: "Master’s foreign/returnee selection এবং current guidelines দেখুন।" },
      { label: "International exchange overview", href: "https://www.akita-pu.ac.jp/nyushi/", description: "Current admission notices ও official guide navigation ব্যবহার করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 111, slug: "aomori-public-regional-public-masters-2027", university: "Aomori Public University", subject: "Business/Management", language: "JP-focused",
    target: "Graduate School of Management and Economics",
    reality: "Management/Economics fit আছে, তবে admission, curriculum এবং research supervision প্রধানত Japanese-first হিসেবে plan করা উচিত।",
    officialLinks: [
      { label: "Aomori Public University", href: "https://www.nebuta.ac.jp/", description: "Graduate School of Management and Economics ও current admission notices দেখুন।" },
      { label: "Graduate admissions", href: "https://www.nebuta.ac.jp/for-examinee/grad-nyuushijouhou/grad-nyuugakusyaannai", description: "Current Japanese application guide এবং selection verify করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 112, slug: "niigata-prefecture-regional-public-masters-2027", university: "University of Niigata Prefecture", subject: "Business/International Studies", language: "English-confirmed",
    bestFitPriority: 13,
    target: "Master of Arts in International Studies and Regional Development",
    reality: "The university confirms that all credit requirements and the full MA in International Studies and Regional Development can be completed through English-taught courses; 2027 international selection is also published।",
    officialLinks: [
      { label: "UNP 2027 application information", href: "https://www.unii.ac.jp/e/academics/graduate-isrd/gi-admissions/", description: "2027 rounds, English/Japanese essay, tests ও MEXT route দেখুন।" },
      { label: "English-completable degree", href: "https://www.unii.ac.jp/e/academics/graduate-isrd/gi-feature/", description: "English-only credit completion এবং degree details verify করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 113, slug: "toyama-prefectural-regional-public-masters-2027", university: "Toyama Prefectural University", subject: "IT/Engineering", language: "English check",
    target: "Graduate School of Engineering—Information Systems/Engineering-aligned field",
    reality: "Foreign-student special selection exists across engineering fields, but current course, exam এবং supervision language Japanese guide দিয়ে verify করতে হবে।",
    officialLinks: [
      { label: "Toyama Prefectural University", href: "https://www.pu-toyama.ac.jp/", description: "Graduate school ও current admission information দেখুন।" },
      { label: "Graduate international selection example", href: "https://bioeng.pu-toyama.ac.jp/information/", description: "Foreign-student master’s selection schedule এবং intake pattern দেখুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 114, slug: "fukui-prefectural-regional-public-masters-2027", university: "Fukui Prefectural University", subject: "Business/Economics", language: "JP-focused",
    target: "Graduate School of Economics and Business Administration",
    reality: "Practical business/economics master’s আছে, কিন্তু working-professional/local case-study orientation এবং Japanese delivery ধরে suitability যাচাই করুন।",
    officialLinks: [
      { label: "Fukui graduate schools", href: "https://www.fpu.ac.jp/en/faculty/graduate/index.html", description: "Economics and Business Administration program focus দেখুন।" },
      { label: "Fukui admissions", href: "https://www.fpu.ac.jp/admission/", description: "Current Japanese graduate guide ও examination schedule verify করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 115, slug: "university-of-shizuoka-regional-public-masters-2027", university: "University of Shizuoka", subject: "IT + Business", language: "English check",
    target: "Graduate School of Management, Informatics and Innovation অথবা International Relations",
    reality: "2027 master’s rounds official; overseas degree holders-এর eligibility review এবং desired instructor contact application-এর আগে প্রয়োজন।",
    officialLinks: [
      { label: "University of Shizuoka graduate admissions", href: "https://eng.u-shizuoka-ken.ac.jp/admissions/graduate/", description: "2027 programs, eligibility review ও exam schedule দেখুন।" },
      { label: "2027 Japanese graduate guides", href: "https://www.u-shizuoka-ken.ac.jp/admissions/graduate/", description: "Exact documents, language ও selection rules verify করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 116, slug: "aichi-prefectural-regional-public-masters-2027", university: "Aichi Prefectural University", subject: "IT/Information Science", language: "English check",
    target: "Graduate School of Information Science and Technology",
    reality: "Internationally accessible university হলেও Information Science master’s guideline Japanese; course/exam language এবং foreign-applicant procedure আগে confirm করতে হবে।",
    officialLinks: [
      { label: "Aichi graduate schools", href: "https://www.aichi-pu.ac.jp/eng/schools/", description: "Information Science and Technologyসহ graduate-school list দেখুন।" },
      { label: "Graduate application guides", href: "https://www.aichi-pu.ac.jp/prospective/graduate/guide.html", description: "Current master’s guide, schedule ও forms verify করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 117, slug: "nagoya-city-regional-public-masters-2027", university: "Nagoya City University", subject: "Business/Economics/Data", language: "English check",
    target: "Graduate School of Economics অথবা Data Science-related research where currently offered",
    reality: "English MEXT/application materials কিছু route-এ আছে, কিন্তু Economics/Data degree-এর complete-English availability confirmed নয়।",
    officialLinks: [
      { label: "Nagoya City University", href: "https://www.nagoya-cu.ac.jp/english/", description: "Graduate schools, international information ও official notices দেখুন।" },
      { label: "Graduate admissions", href: "https://www.nagoya-cu.ac.jp/admissions/graduate/", description: "Current program-specific Japanese/English guides verify করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 118, slug: "shiga-prefectural-regional-public-masters-2027", university: "The University of Shiga Prefecture", subject: "IT/Engineering", language: "English check",
    target: "Graduate School of Engineering—Electronic Systems/Computer-related research",
    reality: "International admission এবং tuition support navigation আছে, কিন্তু degree language এবং direct master’s route current guideline দিয়ে verify করতে হবে।",
    officialLinks: [
      { label: "Shiga admission and tuition", href: "https://www.usp.ac.jp/english/admission/", description: "International admission, tuition exemption ও scholarship links দেখুন।" },
      { label: "International research-student guide", href: "https://www.usp.ac.jp/english/2025_kenkyuseibosyuyoko-in-English%20.pdf", description: "Research-student route degree admission নয়—supervisor/contact reference হিসেবে দেখুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 119, slug: "fukuchiyama-regional-public-masters-2027", university: "University of Fukuchiyama", subject: "IT/Regional Management", language: "JP-focused",
    target: "Graduate School of Regional Information Studies",
    reality: "Regional management ও informatics combined master’s আছে; 2027 web application এবং graduate documents Japanese-first।",
    officialLinks: [
      { label: "Fukuchiyama applicant portal", href: "https://www.fukuchiyama.ac.jp/for_applicants/", description: "Regional Information graduate school, policies ও 2027 notices দেখুন।" },
      { label: "Graduate web application", href: "https://www.fukuchiyama.ac.jp/admission/webentry/", description: "Application window, postal documents ও current guide দেখুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 120, slug: "nara-prefectural-regional-public-check-2027", university: "Nara Prefectural University", subject: "Business/Regional Studies", language: "JP-focused",
    target: "No current master’s degree confirmed; undergraduate Regional Promotion Faculty only",
    reality: "Official 2027 admission page undergraduate selections দেখায়; current graduate/master’s school পাওয়া যায়নি। তাই master’s shortlist হিসেবে এখন viable নয়।",
    viability: "not-currently-viable",
    officialLinks: [
      { label: "Nara Prefectural 2027 admissions", href: "https://www.narapu.ac.jp/admission/recruitment/", description: "Published selection guides দেখুন; current master’s guide নেই।" },
      { label: "Nara Prefectural University", href: "https://www.narapu.ac.jp/", description: "Future graduate-program announcement থাকলে official site-এ recheck করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 121, slug: "kobe-cufs-regional-public-masters-2027", university: "Kobe City University of Foreign Studies", subject: "International Business / International Studies", language: "English check",
    target: "International Relations, English Studies অথবা qualifying English Language Education and Research route",
    reality: "Generic International Business master’s confirmed নয়; regular programs Japanese/target-language intensive। English Education route-এ N2, teaching licence/experience এবং Japan work-site requirements আছে।",
    officialLinks: [
      { label: "KCUFS graduate admission policy", href: "https://www.kobe-cufs.ac.jp/admissions/graduate/guide/index.html", description: "Master’s fields, written/oral language expectations দেখুন।" },
      { label: "English education 2027 guide", href: "https://www.kobe-cufs.ac.jp/english/academic_programs/graduate_school/master/gseler.html", description: "N2, teaching licence/experience এবং in-person work requirement verify করুন।" },
      { label: "MEXT research-student route", href: "https://www.kobe-cufs.ac.jp/admissions/graduate/international/mext-research-students.html", description: "Research student থেকে degree exam-এর separate path বুঝুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 122, slug: "prefectural-hiroshima-regional-public-masters-2027", university: "Prefectural University of Hiroshima", subject: "Information and Management Systems", language: "English-confirmed · partner eligibility",
    bestFitPriority: 16,
    target: "English Track in Information and Management Systems or Biological System Sciences",
    reality: "The official English Track is designed for earning a master’s degree in English and all educational/research activities are in English. Eligibility is restricted to designated partner-university applicants, so it is not an open route for everyone।",
    officialLinks: [
      { label: "PUH international students", href: "https://www.pu-hiroshima.ac.jp/site/international/gaikokujinryugakuseiukeiresu.html", description: "Graduate programs, foreign selection ও English Track eligibility দেখুন।" },
      { label: "English Track admissions", href: "https://www.pu-hiroshima.ac.jp/site/graduate-selection/fall-admission-englishtrack.html", description: "Eligible programs, partner restriction এবং current application guide দেখুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 123, slug: "fukuyama-city-regional-public-masters-2027", university: "Fukuyama City University", subject: "Business/Urban Management", language: "JP-focused",
    target: "Graduate School of Urban Management",
    reality: "Urban/regional management fit আছে, তবে current admission information Japanese-first এবং international applicant-specific requirements direct confirmation দরকার।",
    officialLinks: [
      { label: "Fukuyama City University", href: "https://www.fcu.ac.jp/", description: "Graduate School of Urban Management ও official announcements দেখুন।" },
      { label: "Graduate admissions", href: "https://www.fcu.ac.jp/graduate/ur/considering/", description: "Current Japanese guideline, supervisors ও selection preparation verify করুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 124, slug: "shimonoseki-city-regional-public-masters-2027", university: "Shimonoseki City University", subject: "Business/Economics", language: "JP-focused",
    target: "Graduate School of Economics—Economics and Management",
    reality: "2027 master’s officially published with Economics/Community Systems, International Business এবং Education Economics areas; general selection documents + oral exam, Japanese readiness প্রয়োজন।",
    officialLinks: [
      { label: "Shimonoseki 2027 graduate admissions", href: "https://www.shimonoseki-cu.ac.jp/nyushi/admiss_grad/yoko_grad", description: "2027 quota, dates, documents এবং oral selection দেখুন।" },
      { label: "Graduate admission policy", href: "https://www.shimonoseki-cu.ac.jp/about/gaiyou/outline_3policy_in", description: "Economics/management outcomes ও selection criteria দেখুন।" },
    ],
  }),
  createRegionalPublicJapanGuide({
    rank: 125, slug: "nagasaki-regional-public-masters-2027", university: "University of Nagasaki", subject: "IT + Business/Regional Development", language: "English check",
    target: "Graduate School of Regional Design/Development with information or business research",
    reality: "Official international support page বলছে graduate classes primarily Japanese এবং entrance exam-এর জন্য Japanese proficiency প্রয়োজন; তাই practical status JP-focused/conditional।",
    officialLinks: [
      { label: "University of Nagasaki international support", href: "https://sun.ac.jp/e/support/", description: "Graduate guide, Japanese-language reality, fees ও tuition reduction দেখুন।" },
      { label: "Graduate admissions", href: "https://sun.ac.jp/examination/graduate/", description: "Current master’s recruitment guide এবং examination categories verify করুন।" },
    ],
  }),
];

// Keep the user-added Japan university lists intentionally strict. A university is
// included only when an official source confirms that at least one complete
// master's degree can be earned in English. English application forms, interviews,
// individual English courses, MOI acceptance, or a non-degree research-student
// route are not sufficient.
const verifiedEnglishMastersSlugs = new Set([
  "shizuoka-abp-informatics-masters-2027",
  "naist-information-science-engineering-masters-2027",
  "kyutech-iart-computer-science-masters-2027",
  "kumamoto-ijep-computer-science-masters-2027",
  "globis-full-time-mba-2027",
  "kwansei-gakuin-un-system-policy-masters-2027",
  "apu-international-cooperation-policy-masters-2027",
  "kuas-engineering-masters-2027",
  "ryukyus-resilient-smart-city-masters-2027",
  "toyo-english-track-masters-2027",
  "teikyo-english-economics-public-health-masters-2027",
  "tiu-digital-business-innovation-ms-2027",
  "shizenkan-english-mba-2027",
  "rikkyo-master-in-international-business-2027",
  "university-of-tokyo-tier-a-masters-2027",
  "kyoto-university-tier-a-masters-2027",
  "science-tokyo-tier-a-masters-2027",
  "osaka-university-tier-a-masters-2027",
  "tohoku-university-tier-a-masters-2027",
  "nagoya-university-tier-a-masters-2027",
  "kyushu-university-tier-a-masters-2027",
  "hokkaido-university-tier-a-masters-2027",
  "tsukuba-tier-a-masters-2027",
  "kobe-university-tier-a-masters-2027",
  "hitotsubashi-tier-a-masters-2027",
  "waseda-tier-a-masters-2027",
  "keio-tier-a-masters-2027",
  "hiroshima-university-tier-a-masters-2027",
  "yokohama-national-tier-a-masters-2027",
  "chiba-university-tier-a-masters-2027",
  "osaka-metropolitan-tier-a-masters-2027",
  "tuat-tier-a-masters-2027",
  "shimane-regional-public-masters-2027",
  "yamanashi-regional-public-masters-2027",
  "niigata-prefecture-regional-public-masters-2027",
  "prefectural-hiroshima-regional-public-masters-2027",
]);

function onlyVerifiedEnglishMasters(guides: ScholarshipGuide[]) {
  return guides.filter((guide) => verifiedEnglishMastersSlugs.has(guide.slug));
}

type UsLowCostSeed = {
  rank: number;
  slug: string;
  university: string;
  state: string;
  fields: string;
  cost: "Low" | "Low-medium" | "Medium";
  fundingRoutes: string;
  officialUrl: string;
  lowestCostPriority?: number;
  lowestCostCategory?: "Very low" | "Low";
};

function createUsLowCostGuide(seed: UsLowCostSeed): ScholarshipGuide {
  return {
    slug: seed.slug,
    country: "usa",
    university: seed.university,
    title: `${seed.university}: Affordable Master's Planning Guide`,
    summary: `${seed.fields} options, relative cost position and possible ${seed.fundingRoutes} routes for international master's applicants.`,
    label: `Practical low-cost USA #${seed.rank} · ${seed.state}`,
    funding: `${seed.fundingRoutes} may be available by department or award cycle; funding is competitive and never automatic.`,
    duration: "Usually 1.5-2 years; confirm the exact program curriculum",
    audience: "International applicants considering CS, IT, data, analytics or business master's study in the USA",
    realityCheck: `${seed.cost} is a relative shortlist label, not a final cost quote. Compare current international tuition, mandatory fees, health insurance and local living expenses before applying. Admission, assistantship, scholarship and F-1 visa decisions are separate.`,
    highlights: [
      `Relevant fields: ${seed.fields}.`,
      `Relative cost category: ${seed.cost}.`,
      `Potential funding routes: ${seed.fundingRoutes}.`,
      `${seed.state} living costs and campus-specific fees must be included in the final budget.`,
    ],
    fit: [
      "Your previous coursework meets the exact prerequisite and GPA requirements of the selected program.",
      "You can show program-specific fit through projects, research, work experience or quantitative preparation.",
      "You have a self-funded fallback budget if no assistantship or merit award is offered.",
      "The on-campus program is eligible for an international I-20 and matches your career plan.",
    ],
    quickStart: [
      "Choose one exact master's program instead of applying to the university name alone.",
      "Record current tuition per credit, mandatory fees, total credits and estimated living cost from official pages.",
      "Check whether master's students in that department can hold RA, TA or GA positions.",
      "Confirm deadline, English-score rule, prerequisites and international document requirements.",
    ],
    steps: [
      {
        title: "Program and eligibility verify করুন",
        timing: "Application-এর 4-6 মাস আগে",
        description: "University-level affordability does not mean every graduate program has the same tuition or admission rules.",
        actions: [
          `Official graduate catalog থেকে ${seed.fields} field-এর exact degree বাছুন।`,
          "GPA, prerequisite courses, GRE policy and English-test minimum লিখে রাখুন।",
          "International admission এবং program deadline আলাদা হলে earlier deadline follow করুন।",
        ],
        readyWhen: "Exact degree, intake, requirements and deadline official sources থেকে confirmed।",
      },
      {
        title: "Full cost এবং funding plan তৈরি করুন",
        timing: "Shortlist final করার সময়",
        description: "Assistantship availability can change by department, semester and faculty budget.",
        actions: [
          "Tuition, fees, insurance এবং 12-month living cost দিয়ে total estimate তৈরি করুন।",
          `${seed.fundingRoutes} eligibility, workload, stipend এবং tuition benefit আলাদাভাবে verify করুন।`,
          "Funding না পেলে program affordable থাকবে কিনা লিখিত fallback budget দিয়ে যাচাই করুন।",
        ],
        readyWhen: "Funded এবং self-funded—দুই scenario-র realistic budget প্রস্তুত।",
      },
      {
        title: "Evidence-based application submit করুন",
        timing: "Deadline-এর 6-10 সপ্তাহ আগে",
        description: "Generic SOP-এর বদলে selected curriculum, faculty and career outcome-এর সঙ্গে evidence connect করুন।",
        actions: [
          "Transcript, CV, SOP, recommendations এবং English test documents প্রস্তুত করুন।",
          "Research route হলে relevant faculty এবং current lab projects carefully review করুন।",
          "Assistantship-এর separate form বা earlier deadline থাকলে admission application-এর সঙ্গে complete করুন।",
        ],
        readyWhen: "Program এবং funding checklist-এর প্রতিটি required item submitted।",
      },
      {
        title: "Offer, funding এবং I-20 amount compare করুন",
        timing: "Decision পাওয়ার পরে",
        description: "Only written university documents should be used for the final financial decision.",
        actions: [
          "Assistantship duration, stipend, tuition waiver এবং renewal rules লিখিতভাবে confirm করুন।",
          "I-20 funding requirement-এর সঙ্গে scholarship এবং personal funds মিলিয়ে দেখুন।",
          "Multiple offers হলে net annual cost, curriculum and career fit একসঙ্গে compare করুন।",
        ],
        readyWhen: "Written offer থেকে uncovered cost এবং funding conditions পরিষ্কার।",
      },
    ],
    checklist: [
      "Current graduate application guide",
      "Exact program curriculum and prerequisites",
      "International tuition and mandatory-fee estimate",
      "English proficiency evidence",
      "Academic CV and statement of purpose",
      "Recommendation letters",
      "Assistantship or scholarship application, if separate",
      "Self-funded financial fallback",
    ],
    afterSubmission: [
      "Admission and assistantship decisions আলাদাভাবে track করুন।",
      "Departmental interview বা missing-document request দ্রুত complete করুন।",
      "Written funding package না পাওয়া পর্যন্ত assistantship assumed করবেন না।",
    ],
    cautions: [
      "Low-cost and comparatively accessible are planning labels, not admission or funding guarantees.",
      "RA, TA and GA availability may favor doctoral or continuing students in some departments.",
      "Online programs may not support an F-1 student route; delivery mode must be verified.",
      "Official university pages and the written offer are the final authority for cost, dates and funding.",
    ],
    officialLinks: [
      { label: `${seed.university} graduate programs`, href: seed.officialUrl, description: "Current degree, admission, tuition and funding information official source থেকে verify করুন।" },
    ],
    reviewedAt: "August 23, 2026",
    lowestCostPriority: seed.lowestCostPriority,
    lowestCostCategory: seed.lowestCostCategory,
  };
}

const usLowCostSeeds: UsLowCostSeed[] = [
  { rank: 1, slug: "dakota-state-affordable-masters-2027", university: "Dakota State University", state: "South Dakota", fields: "Computer Science, Cybersecurity, Analytics", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://dsu.edu/admissions/graduate/" },
  { rank: 2, slug: "south-dakota-state-affordable-masters-2027", university: "South Dakota State University", state: "South Dakota", fields: "Computer Science, Data Science, Economics", cost: "Low", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.sdstate.edu/graduate-school" },
  { rank: 3, slug: "south-dakota-university-affordable-masters-2027", university: "University of South Dakota", state: "South Dakota", fields: "Computer Science, Analytics, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.usd.edu/Admissions-and-Aid/International-Admissions/Applying-for-International-Graduate-Admission" },
  { rank: 4, slug: "north-dakota-state-affordable-masters-2027", university: "North Dakota State University", state: "North Dakota", fields: "Computer Science, Software Engineering, MBA", cost: "Low", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.ndsu.edu/gradschool/" },
  { rank: 5, slug: "north-dakota-university-affordable-masters-2027", university: "University of North Dakota", state: "North Dakota", fields: "Computer Science, Data Science, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://und.edu/academics/graduate-school/" },
  { rank: 6, slug: "minot-state-affordable-masters-2027", university: "Minot State University", state: "North Dakota", fields: "Information Systems, Management", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.minotstateu.edu/graduate/" },
  { rank: 7, slug: "nebraska-kearney-affordable-masters-2027", university: "University of Nebraska at Kearney", state: "Nebraska", fields: "Information Technology, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.unk.edu/academics/gradstudies/" },
  { rank: 8, slug: "nebraska-omaha-affordable-masters-2027", university: "University of Nebraska Omaha", state: "Nebraska", fields: "Computer Science, MIS, MBA", cost: "Low-medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.unomaha.edu/graduate-studies/" },
  { rank: 9, slug: "fort-hays-state-affordable-masters-2027", university: "Fort Hays State University", state: "Kansas", fields: "Computer Science, Information Systems, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.fhsu.edu/academic/gradschl/" },
  { rank: 10, slug: "pittsburg-state-affordable-masters-2027", university: "Pittsburg State University", state: "Kansas", fields: "Information Technology, Technology, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.pittstate.edu/graduate/" },
  { rank: 11, slug: "emporia-state-affordable-masters-2027", university: "Emporia State University", state: "Kansas", fields: "Informatics, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.emporia.edu/graduate-school/" },
  { rank: 12, slug: "wichita-state-affordable-masters-2027", university: "Wichita State University", state: "Kansas", fields: "Computer Science, Data Science, MBA", cost: "Low-medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.wichita.edu/academics/graduate_school/" },
  { rank: 13, slug: "central-missouri-affordable-masters-2027", university: "University of Central Missouri", state: "Missouri", fields: "Computer Science, Cybersecurity, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.ucmo.edu/college-of-graduate-and-extended-studies/" },
  { rank: 14, slug: "missouri-state-affordable-masters-2027", university: "Missouri State University", state: "Missouri", fields: "Computer Science, Information Technology, MBA", cost: "Low", fundingRoutes: "GA/TA/MW", officialUrl: "https://graduate.missouristate.edu/" },
  { rank: 15, slug: "southeast-missouri-state-affordable-masters-2027", university: "Southeast Missouri State University", state: "Missouri", fields: "Computer Science, Applied Computing, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://semo.edu/graduate/" },
  { rank: 16, slug: "northwest-missouri-state-affordable-masters-2027", university: "Northwest Missouri State University", state: "Missouri", fields: "Applied Computer Science, Data Analytics, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.nwmissouri.edu/graduate/" },
  { rank: 17, slug: "arkansas-state-affordable-masters-2027", university: "Arkansas State University", state: "Arkansas", fields: "Computer Science, Data Science, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.astate.edu/college/graduate-school/" },
  { rank: 18, slug: "arkansas-little-rock-affordable-masters-2027", university: "University of Arkansas at Little Rock", state: "Arkansas", fields: "Computer Science, Information Science, MBA", cost: "Low", fundingRoutes: "RA/TA/GA", officialUrl: "https://ualr.edu/graduate/" },
  { rank: 19, slug: "arkansas-tech-affordable-masters-2027", university: "Arkansas Tech University", state: "Arkansas", fields: "Information Technology, Business", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.atu.edu/graduate/" },
  { rank: 20, slug: "southern-arkansas-affordable-masters-2027", university: "Southern Arkansas University", state: "Arkansas", fields: "Computer Science, Data Analytics, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://web.saumag.edu/graduate/" },
  { rank: 21, slug: "central-arkansas-affordable-masters-2027", university: "University of Central Arkansas", state: "Arkansas", fields: "Computer Science, Applied Data Analytics, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://uca.edu/graduateschool/" },
  { rank: 22, slug: "louisiana-monroe-affordable-masters-2027", university: "University of Louisiana Monroe", state: "Louisiana", fields: "Computer Science, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.ulm.edu/gradschool/" },
  { rank: 23, slug: "louisiana-tech-affordable-masters-2027", university: "Louisiana Tech University", state: "Louisiana", fields: "Computer Science, Engineering, MBA", cost: "Low", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.latech.edu/study-with-us/graduate-school/" },
  { rank: 24, slug: "mcneese-state-affordable-masters-2027", university: "McNeese State University", state: "Louisiana", fields: "Computer Science, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.mcneese.edu/academics/graduate-school/" },
  { rank: 25, slug: "southeastern-louisiana-affordable-masters-2027", university: "Southeastern Louisiana University", state: "Louisiana", fields: "Computer Science, Integrated Science, MBA", cost: "Low", fundingRoutes: "GA/MW (verify by program)", officialUrl: "https://www.southeastern.edu/academics/graduate/" },
  { rank: 26, slug: "lamar-affordable-masters-2027", university: "Lamar University", state: "Texas", fields: "Computer Science, MIS, MBA", cost: "Low-medium", fundingRoutes: "GA/RA/MW", officialUrl: "https://www.lamar.edu/graduate-studies/" },
  { rank: 27, slug: "utrgv-affordable-masters-2027", university: "University of Texas Rio Grande Valley", state: "Texas", fields: "Computer Science, Information Technology, Business", cost: "Low-medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.utrgv.edu/graduate/" },
  { rank: 28, slug: "texas-am-kingsville-affordable-masters-2027", university: "Texas A&M University–Kingsville", state: "Texas", fields: "Computer Science, Industrial Management, MBA", cost: "Low-medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.tamuk.edu/graduate/" },
  { rank: 29, slug: "texas-am-corpus-christi-affordable-masters-2027", university: "Texas A&M University–Corpus Christi", state: "Texas", fields: "Computer Science, Data Science, MBA", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.tamucc.edu/research/graduate-excellence/" },
  { rank: 30, slug: "west-texas-am-affordable-masters-2027", university: "West Texas A&M University", state: "Texas", fields: "Computer Science, Finance, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.wtamu.edu/academics/graduate-school/" },
  { rank: 31, slug: "midwestern-state-affordable-masters-2027", university: "Midwestern State University", state: "Texas", fields: "Computer Science, Information Systems, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://msutexas.edu/academics/graduate-school/" },
  { rank: 32, slug: "angelo-state-affordable-masters-2027", university: "Angelo State University", state: "Texas", fields: "Computer Science, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.angelo.edu/academics/graduate-school/" },
  { rank: 33, slug: "stephen-f-austin-affordable-masters-2027", university: "Stephen F. Austin State University", state: "Texas", fields: "Cybersecurity, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.sfasu.edu/academics/graduate" },
  { rank: 34, slug: "sam-houston-state-affordable-masters-2027", university: "Sam Houston State University", state: "Texas", fields: "Computing, Information Assurance, MBA", cost: "Medium", fundingRoutes: "GA/MW", officialUrl: "https://www.shsu.edu/academics/graduate-and-professional/" },
  { rank: 35, slug: "houston-clear-lake-affordable-masters-2027", university: "University of Houston–Clear Lake", state: "Texas", fields: "Computer Science, Data Science, MBA", cost: "Medium", fundingRoutes: "GA/MW", officialUrl: "https://www.uhcl.edu/academics/graduate/" },
  { rank: 36, slug: "houston-victoria-affordable-masters-2027", university: "University of Houston–Victoria", state: "Texas", fields: "Computer Science, Data Science, Business", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://www.uhv.edu/graduate/" },
  { rank: 37, slug: "tarleton-state-affordable-masters-2027", university: "Tarleton State University", state: "Texas", fields: "Computer Science, Information Systems, MBA", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://www.tarleton.edu/graduate/" },
  { rank: 38, slug: "ut-tyler-affordable-masters-2027", university: "University of Texas at Tyler", state: "Texas", fields: "Computer Science, Data Analytics, MBA", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.uttyler.edu/graduate/" },
  { rank: 39, slug: "north-texas-affordable-masters-2027", university: "University of North Texas", state: "Texas", fields: "Computer Science, Data Science, Business Analytics", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.unt.edu/academics/graduate" },
  { rank: 40, slug: "central-oklahoma-affordable-masters-2027", university: "University of Central Oklahoma", state: "Oklahoma", fields: "Computer Science, Business Analytics, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.uco.edu/graduate/" },
  { rank: 41, slug: "northeastern-state-oklahoma-affordable-masters-2027", university: "Northeastern State University", state: "Oklahoma", fields: "Computer Science, Data Science, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://gradcollege.nsuok.edu/" },
  { rank: 42, slug: "oklahoma-state-affordable-masters-2027", university: "Oklahoma State University", state: "Oklahoma", fields: "Computer Science, MIS, Business Analytics", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://go.okstate.edu/graduate-academics/" },
  { rank: 43, slug: "oklahoma-university-affordable-masters-2027", university: "University of Oklahoma", state: "Oklahoma", fields: "Computer Science, Data Science, MBA", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.ou.edu/gradcollege" },
  { rank: 44, slug: "siu-edwardsville-affordable-masters-2027", university: "Southern Illinois University Edwardsville", state: "Illinois", fields: "Computer Science, MIS, MBA", cost: "Low-medium", fundingRoutes: "GA/TA/MW", officialUrl: "https://www.siue.edu/graduate/" },
  { rank: 46, slug: "eastern-illinois-affordable-masters-2027", university: "Eastern Illinois University", state: "Illinois", fields: "Technology, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.eiu.edu/graduate/" },
  { rank: 47, slug: "western-illinois-affordable-masters-2027", university: "Western Illinois University", state: "Illinois", fields: "Computer Science, Cybersecurity, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.wiu.edu/graduate_studies/" },
  { rank: 48, slug: "governors-state-affordable-masters-2027", university: "Governors State University", state: "Illinois", fields: "Computer Science, MIS, MBA", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://www.govst.edu/graduate/" },
  { rank: 49, slug: "indiana-state-affordable-masters-2027", university: "Indiana State University", state: "Indiana", fields: "Computer Science, Data Science, MBA", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://indianastate.edu/academics/graduate" },
  { rank: 50, slug: "purdue-fort-wayne-affordable-masters-2027", university: "Purdue University Fort Wayne", state: "Indiana", fields: "Computer Science, Engineering, MBA", cost: "Low-medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.pfw.edu/graduate-studies" },
  { rank: 51, slug: "ball-state-affordable-masters-2027", university: "Ball State University", state: "Indiana", fields: "Computer Science, Data Science, MBA", cost: "Medium", fundingRoutes: "GA/TA/MW", officialUrl: "https://www.bsu.edu/academics/collegesanddepartments/gradschool" },
  { rank: 52, slug: "wright-state-affordable-masters-2027", university: "Wright State University", state: "Ohio", fields: "Computer Science, Cybersecurity, Business", cost: "Low-medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.wright.edu/graduate-programs-and-honors-studies" },
  { rank: 53, slug: "cleveland-state-affordable-masters-2027", university: "Cleveland State University", state: "Ohio", fields: "Computer Science, Software Engineering, MBA", cost: "Medium", fundingRoutes: "GA/MW", officialUrl: "https://graduate-studies.csuohio.edu/" },
  { rank: 54, slug: "youngstown-state-affordable-masters-2027", university: "Youngstown State University", state: "Ohio", fields: "Computer Science, Data Analytics, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://ysu.edu/academics/graduate-studies" },
  { rank: 55, slug: "akron-affordable-masters-2027", university: "University of Akron", state: "Ohio", fields: "Computer Science, Data Science, MBA", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.uakron.edu/graduate/" },
  { rank: 56, slug: "toledo-affordable-masters-2027", university: "University of Toledo", state: "Ohio", fields: "Computer Science, Engineering, MBA", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.utoledo.edu/graduate/" },
  { rank: 57, slug: "bowling-green-state-affordable-masters-2027", university: "Bowling Green State University", state: "Ohio", fields: "Computer Science, Analytics, MBA", cost: "Medium", fundingRoutes: "GA/TA/MW", officialUrl: "https://www.bgsu.edu/graduate.html" },
  { rank: 58, slug: "kent-state-affordable-masters-2027", university: "Kent State University", state: "Ohio", fields: "Computer Science, Artificial Intelligence, Business Analytics", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.kent.edu/graduatecollege" },
  { rank: 59, slug: "central-michigan-affordable-masters-2027", university: "Central Michigan University", state: "Michigan", fields: "Computer Science, Information Systems, MBA", cost: "Medium", fundingRoutes: "GA/MW", officialUrl: "https://www.cmich.edu/academics/colleges/graduate-studies" },
  { rank: 60, slug: "eastern-michigan-affordable-masters-2027", university: "Eastern Michigan University", state: "Michigan", fields: "Computer Science, Cybersecurity, Information Systems", cost: "Medium", fundingRoutes: "GA/MW", officialUrl: "https://www.emich.edu/graduate/" },
  { rank: 61, slug: "western-michigan-affordable-masters-2027", university: "Western Michigan University", state: "Michigan", fields: "Computer Science, Data Science, MBA", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://wmich.edu/grad" },
  { rank: 62, slug: "northern-michigan-affordable-masters-2027", university: "Northern Michigan University", state: "Michigan", fields: "Computer Science, Information Systems, MBA", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://nmu.edu/graduatestudies/" },
  { rank: 63, slug: "grand-valley-state-affordable-masters-2027", university: "Grand Valley State University", state: "Michigan", fields: "Applied Computer Science, Data Science, MBA", cost: "Medium", fundingRoutes: "GA/MW", officialUrl: "https://www.gvsu.edu/gs/" },
  { rank: 64, slug: "saginaw-valley-state-affordable-masters-2027", university: "Saginaw Valley State University", state: "Michigan", fields: "Computer Science, Data Analytics, MBA", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://www.svsu.edu/graduateprograms/" },
  { rank: 65, slug: "ferris-state-affordable-masters-2027", university: "Ferris State University", state: "Michigan", fields: "Information Security, MBA", cost: "Medium", fundingRoutes: "GA/MW", officialUrl: "https://www.ferris.edu/academics/graduate-programs/" },
  { rank: 66, slug: "minnesota-state-mankato-affordable-masters-2027", university: "Minnesota State University, Mankato", state: "Minnesota", fields: "Computer Science, Data Science, MBA", cost: "Low-medium", fundingRoutes: "GA/TA/MW", officialUrl: "https://grad.mnsu.edu/" },
  { rank: 67, slug: "st-cloud-state-affordable-masters-2027", university: "St. Cloud State University", state: "Minnesota", fields: "Computer Science, Software Engineering, MBA", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://www.stcloudstate.edu/graduate/" },
  { rank: 68, slug: "minnesota-duluth-affordable-masters-2027", university: "University of Minnesota Duluth", state: "Minnesota", fields: "Computer Science, Applied Economics", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://grad.umn.edu/" },
  { rank: 69, slug: "wisconsin-stout-affordable-masters-2027", university: "University of Wisconsin–Stout", state: "Wisconsin", fields: "ICT, Data Science, Management", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://www.uwstout.edu/academics/graduate-school" },
  { rank: 70, slug: "wisconsin-whitewater-affordable-masters-2027", university: "University of Wisconsin–Whitewater", state: "Wisconsin", fields: "Computer Science, Cybersecurity, MBA", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://www.uww.edu/gradstudies" },
  { rank: 71, slug: "wisconsin-milwaukee-affordable-masters-2027", university: "University of Wisconsin–Milwaukee", state: "Wisconsin", fields: "Computer Science, Data Science, MBA", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://uwm.edu/graduateschool/" },
  { rank: 72, slug: "wisconsin-platteville-affordable-masters-2027", university: "University of Wisconsin–Platteville", state: "Wisconsin", fields: "Computer Science, Engineering, Business", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://www.uwplatt.edu/graduate" },
  { rank: 73, slug: "northern-iowa-affordable-masters-2027", university: "University of Northern Iowa", state: "Iowa", fields: "Computer Science, Data Science, MBA", cost: "Medium", fundingRoutes: "GA/TA/MW", officialUrl: "https://grad.uni.edu/" },
  { rank: 75, slug: "wyoming-affordable-masters-2027", university: "University of Wyoming", state: "Wyoming", fields: "Computer Science, Business Analytics, MBA", cost: "Low-medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.uwyo.edu/uwgrad/" },
  { rank: 76, slug: "montana-state-affordable-masters-2027", university: "Montana State University", state: "Montana", fields: "Computer Science, Data Science, Business", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.montana.edu/gradschool/" },
  { rank: 77, slug: "montana-tech-affordable-masters-2027", university: "Montana Technological University", state: "Montana", fields: "Data Science, Engineering", cost: "Low-medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.mtech.edu/graduate/" },
  { rank: 78, slug: "idaho-state-affordable-masters-2027", university: "Idaho State University", state: "Idaho", fields: "Computer Science, Informatics, MBA", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://www.isu.edu/graduate/" },
  { rank: 79, slug: "idaho-university-affordable-masters-2027", university: "University of Idaho", state: "Idaho", fields: "Computer Science, Data Science, MBA", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.uidaho.edu/graduate-studies" },
  { rank: 80, slug: "boise-state-affordable-masters-2027", university: "Boise State University", state: "Idaho", fields: "Computer Science, Cybersecurity, MBA", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.boisestate.edu/graduatecollege/" },
  { rank: 81, slug: "new-mexico-state-affordable-masters-2027", university: "New Mexico State University", state: "New Mexico", fields: "Computer Science, Data Analytics, MBA", cost: "Low-medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://gradschool.nmsu.edu/" },
  { rank: 82, slug: "eastern-new-mexico-affordable-masters-2027", university: "Eastern New Mexico University", state: "New Mexico", fields: "Information Systems, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.enmu.edu/academics/graduate-school" },
  { rank: 83, slug: "new-mexico-highlands-affordable-masters-2027", university: "New Mexico Highlands University", state: "New Mexico", fields: "Computer Science, Software Systems, Business", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.nmhu.edu/graduate/" },
  { rank: 84, slug: "southern-mississippi-affordable-masters-2027", university: "University of Southern Mississippi", state: "Mississippi", fields: "Computer Science, Data Science, MBA", cost: "Low", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.usm.edu/graduate-programs/" },
  { rank: 85, slug: "mississippi-state-affordable-masters-2027", university: "Mississippi State University", state: "Mississippi", fields: "Computer Science, Information Systems, MBA", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.grad.msstate.edu/" },
  { rank: 86, slug: "jackson-state-affordable-masters-2027", university: "Jackson State University", state: "Mississippi", fields: "Computer Science, Data Science, Business", cost: "Low", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.jsums.edu/graduateschool/" },
  { rank: 87, slug: "alabama-huntsville-affordable-masters-2027", university: "University of Alabama in Huntsville", state: "Alabama", fields: "Computer Science, Cybersecurity, Information Systems", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.uah.edu/graduate" },
  { rank: 88, slug: "south-alabama-affordable-masters-2027", university: "University of South Alabama", state: "Alabama", fields: "Computer Science, Information Systems, MBA", cost: "Low-medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.southalabama.edu/colleges/graduateschool/" },
  { rank: 89, slug: "jacksonville-state-affordable-masters-2027", university: "Jacksonville State University", state: "Alabama", fields: "Computer Science, Data Science, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.jsu.edu/graduate/" },
  { rank: 90, slug: "north-alabama-affordable-masters-2027", university: "University of North Alabama", state: "Alabama", fields: "Computer Science, Business Analytics, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.una.edu/graduate/" },
  { rank: 91, slug: "auburn-montgomery-affordable-masters-2027", university: "Auburn University at Montgomery", state: "Alabama", fields: "Computer Science, Information Systems, MBA", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://www.aum.edu/graduate-studies/" },
  { rank: 92, slug: "troy-affordable-masters-2027", university: "Troy University", state: "Alabama", fields: "Computer Science, MBA", cost: "Low-medium", fundingRoutes: "GA/MW", officialUrl: "https://www.troy.edu/academics/academic-programs/graduate-programs/" },
  { rank: 93, slug: "georgia-southern-affordable-masters-2027", university: "Georgia Southern University", state: "Georgia", fields: "Computer Science, Applied Engineering, MBA", cost: "Low-medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://www.georgiasouthern.edu/graduate-school/" },
  { rank: 94, slug: "valdosta-state-affordable-masters-2027", university: "Valdosta State University", state: "Georgia", fields: "Computer Science, Data Science, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.valdosta.edu/academics/graduate-school/" },
  { rank: 95, slug: "west-georgia-affordable-masters-2027", university: "University of West Georgia", state: "Georgia", fields: "Applied Computer Science, MBA", cost: "Low", fundingRoutes: "GA/MW", officialUrl: "https://www.westga.edu/academics/graduate-studies/" },
  { rank: 97, slug: "marshall-affordable-masters-2027", university: "Marshall University", state: "West Virginia", fields: "Computer Science, Data Science, MBA", cost: "Low-medium", fundingRoutes: "GA/TA/MW", officialUrl: "https://www.marshall.edu/graduate/" },
  { rank: 98, slug: "west-virginia-affordable-masters-2027", university: "West Virginia University", state: "West Virginia", fields: "Computer Science, Software Engineering, Business", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://graduateadmissions.wvu.edu/" },
  { rank: 99, slug: "maine-affordable-masters-2027", university: "University of Maine", state: "Maine", fields: "Computer Science, Data Science, Business", cost: "Medium", fundingRoutes: "RA/TA/GA", officialUrl: "https://umaine.edu/graduate/" },
  { rank: 100, slug: "southern-maine-affordable-masters-2027", university: "University of Southern Maine", state: "Maine", fields: "Computer Science, Data Science, MBA", cost: "Medium", fundingRoutes: "GA/MW", officialUrl: "https://usm.maine.edu/graduate-studies/" },
  { rank: 101, slug: "alabama-am-affordable-masters-2027", university: "Alabama A&M University", state: "Alabama", fields: "Computer Science", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.aamu.edu/academics/graduate-studies/" },
  { rank: 102, slug: "alabama-state-affordable-masters-2027", university: "Alabama State University", state: "Alabama", fields: "Computer Science/IT and Business", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.alasu.edu/academics/graduate-school" },
  { rank: 103, slug: "west-alabama-affordable-masters-2027", university: "University of West Alabama", state: "Alabama", fields: "Business and Information Technology", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.uwa.edu/graduate/", lowestCostPriority: 23, lowestCostCategory: "Low" },
  { rank: 104, slug: "montevallo-affordable-masters-2027", university: "University of Montevallo", state: "Alabama", fields: "Business and Data-related study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.montevallo.edu/academics/graduate-studies/" },
  { rank: 105, slug: "delta-state-affordable-masters-2027", university: "Delta State University", state: "Mississippi", fields: "Business and Information Technology", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.deltastate.edu/graduate-studies/", lowestCostPriority: 25, lowestCostCategory: "Low" },
  { rank: 106, slug: "mississippi-valley-state-affordable-masters-2027", university: "Mississippi Valley State University", state: "Mississippi", fields: "Computer Science", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.mvsu.edu/academics/graduate-studies" },
  { rank: 107, slug: "alcorn-state-affordable-masters-2027", university: "Alcorn State University", state: "Mississippi", fields: "Computer Science/IT and Business", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.alcorn.edu/academics/graduate-studies", lowestCostPriority: 24, lowestCostCategory: "Low" },
  { rank: 108, slug: "mississippi-university-affordable-masters-2027", university: "University of Mississippi", state: "Mississippi", fields: "Computer Science/IT and Business", cost: "Medium", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://gradschool.olemiss.edu/" },
  { rank: 109, slug: "memphis-affordable-masters-2027", university: "University of Memphis", state: "Tennessee", fields: "Computer Science/IT and Business", cost: "Low-medium", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.memphis.edu/gradschool/" },
  { rank: 110, slug: "middle-tennessee-state-affordable-masters-2027", university: "Middle Tennessee State University", state: "Tennessee", fields: "Computer Science/IT and Business", cost: "Low-medium", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.mtsu.edu/graduate/" },
  { rank: 111, slug: "tennessee-state-affordable-masters-2027", university: "Tennessee State University", state: "Tennessee", fields: "Computer Science/IT and Business", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.tnstate.edu/graduate/" },
  { rank: 112, slug: "tennessee-tech-affordable-masters-2027", university: "Tennessee Technological University", state: "Tennessee", fields: "Computer Science and Data Science", cost: "Low-medium", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.tntech.edu/graduatestudies/" },
  { rank: 113, slug: "east-tennessee-state-affordable-masters-2027", university: "East Tennessee State University", state: "Tennessee", fields: "Computer Science/IT and Business", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.etsu.edu/gradschool/" },
  { rank: 114, slug: "austin-peay-state-affordable-masters-2027", university: "Austin Peay State University", state: "Tennessee", fields: "Computer Science and Business", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.apsu.edu/grad-studies/" },
  { rank: 115, slug: "tennessee-chattanooga-affordable-masters-2027", university: "University of Tennessee at Chattanooga", state: "Tennessee", fields: "Computer Science/IT and Business", cost: "Low-medium", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.utc.edu/graduate-school" },
  { rank: 116, slug: "murray-state-affordable-masters-2027", university: "Murray State University", state: "Kentucky", fields: "Computer Science/IT and Business", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.murraystate.edu/academics/graduate/" },
  { rank: 117, slug: "western-kentucky-affordable-masters-2027", university: "Western Kentucky University", state: "Kentucky", fields: "Computer Science/IT and Business", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.wku.edu/graduate/" },
  { rank: 118, slug: "eastern-kentucky-affordable-masters-2027", university: "Eastern Kentucky University", state: "Kentucky", fields: "Computer Science/IT and Business", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://gradschool.eku.edu/" },
  { rank: 119, slug: "morehead-state-affordable-masters-2027", university: "Morehead State University", state: "Kentucky", fields: "Computer Science and Business", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.moreheadstate.edu/academics/graduate-school" },
  { rank: 120, slug: "northern-kentucky-affordable-masters-2027", university: "Northern Kentucky University", state: "Kentucky", fields: "Computer Science, Data Science and Business", cost: "Low-medium", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.nku.edu/academics/graduate.html" },
  { rank: 121, slug: "kentucky-state-affordable-masters-2027", university: "Kentucky State University", state: "Kentucky", fields: "Computer Science and Business", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.kysu.edu/academics/graduate-studies/" },
  { rank: 122, slug: "louisville-affordable-masters-2027", university: "University of Louisville", state: "Kentucky", fields: "Computer Science/IT and Business", cost: "Medium", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://louisville.edu/graduate" },
  { rank: 123, slug: "unc-pembroke-affordable-masters-2027", university: "University of North Carolina at Pembroke", state: "North Carolina", fields: "Computer Science and Business", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.uncp.edu/academics/graduate-school" },
  { rank: 124, slug: "north-carolina-at-affordable-masters-2027", university: "North Carolina A&T State University", state: "North Carolina", fields: "Computer Science, Data Science and Business", cost: "Low-medium", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.ncat.edu/tgc/" },
  { rank: 125, slug: "north-carolina-central-affordable-masters-2027", university: "North Carolina Central University", state: "North Carolina", fields: "Computer Science and Business", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.nccu.edu/grad" },
  { rank: 126, slug: "cameron-lowest-cost-masters-2027", university: "Cameron University", state: "Oklahoma", fields: "Graduate programs; verify the exact CS/IT/Data/Business degree", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.cameron.edu/graduate", lowestCostPriority: 1, lowestCostCategory: "Very low" },
  { rank: 127, slug: "east-central-lowest-cost-masters-2027", university: "East Central University", state: "Oklahoma", fields: "Business, management and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.ecok.edu/academics/graduate-programs", lowestCostPriority: 2, lowestCostCategory: "Very low" },
  { rank: 128, slug: "southwestern-oklahoma-state-lowest-cost-masters-2027", university: "Southwestern Oklahoma State University", state: "Oklahoma", fields: "MBA, data science and technology-related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.swosu.edu/graduate/", lowestCostPriority: 3, lowestCostCategory: "Very low" },
  { rank: 129, slug: "northwestern-oklahoma-state-lowest-cost-masters-2027", university: "Northwestern Oklahoma State University", state: "Oklahoma", fields: "MBA and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.nwosu.edu/graduate-studies", lowestCostPriority: 4, lowestCostCategory: "Very low" },
  { rank: 130, slug: "rogers-state-lowest-cost-masters-2027", university: "Rogers State University", state: "Oklahoma", fields: "Graduate programs; verify the exact CS/IT/Data/Business degree", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.rsu.edu/academics/graduate/", lowestCostPriority: 5, lowestCostCategory: "Very low" },
  { rank: 131, slug: "chadron-state-lowest-cost-masters-2027", university: "Chadron State College", state: "Nebraska", fields: "Business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.csc.edu/graduate/", lowestCostPriority: 6, lowestCostCategory: "Very low" },
  { rank: 132, slug: "wayne-state-college-lowest-cost-masters-2027", university: "Wayne State College", state: "Nebraska", fields: "Business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.wsc.edu/graduate-programs", lowestCostPriority: 7, lowestCostCategory: "Very low" },
  { rank: 133, slug: "black-hills-state-lowest-cost-masters-2027", university: "Black Hills State University", state: "South Dakota", fields: "Business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.bhsu.edu/academics/graduate-programs", lowestCostPriority: 8, lowestCostCategory: "Very low" },
  { rank: 134, slug: "northern-state-lowest-cost-masters-2027", university: "Northern State University", state: "South Dakota", fields: "Business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://northern.edu/graduate", lowestCostPriority: 9, lowestCostCategory: "Very low" },
  { rank: 135, slug: "lsu-shreveport-lowest-cost-masters-2027", university: "LSU Shreveport", state: "Louisiana", fields: "MBA, analytics and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.lsus.edu/academics/graduate-studies", lowestCostPriority: 10, lowestCostCategory: "Very low" },
  { rank: 136, slug: "nicholls-state-lowest-cost-masters-2027", university: "Nicholls State University", state: "Louisiana", fields: "Business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.nicholls.edu/graduate/", lowestCostPriority: 11, lowestCostCategory: "Low" },
  { rank: 137, slug: "northwestern-state-louisiana-lowest-cost-masters-2027", university: "Northwestern State University of Louisiana", state: "Louisiana", fields: "Computer information systems, business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.nsula.edu/graduate/", lowestCostPriority: 12, lowestCostCategory: "Low" },
  { rank: 138, slug: "grambling-state-lowest-cost-masters-2027", university: "Grambling State University", state: "Louisiana", fields: "Computer science, business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.gram.edu/academics/gradstudies/", lowestCostPriority: 13, lowestCostCategory: "Low" },
  { rank: 139, slug: "southern-university-am-lowest-cost-masters-2027", university: "Southern University and A&M College", state: "Louisiana", fields: "Computer science, business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.subr.edu/page/graduate-school", lowestCostPriority: 14, lowestCostCategory: "Low" },
  { rank: 140, slug: "montana-state-billings-lowest-cost-masters-2027", university: "Montana State University Billings", state: "Montana", fields: "Business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.msubillings.edu/grad/", lowestCostPriority: 15, lowestCostCategory: "Low" },
  { rank: 141, slug: "eastern-oregon-lowest-cost-masters-2027", university: "Eastern Oregon University", state: "Oregon", fields: "Business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.eou.edu/graduate/", lowestCostPriority: 16, lowestCostCategory: "Low" },
  { rank: 142, slug: "frostburg-state-lowest-cost-masters-2027", university: "Frostburg State University", state: "Maryland", fields: "Computer science, business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.frostburg.edu/academics/graduate/", lowestCostPriority: 17, lowestCostCategory: "Low" },
  { rank: 143, slug: "delaware-state-lowest-cost-masters-2027", university: "Delaware State University", state: "Delaware", fields: "Computer science, data science, business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.desu.edu/academics/graduate-studies", lowestCostPriority: 18, lowestCostCategory: "Low" },
  { rank: 144, slug: "west-virginia-state-lowest-cost-masters-2027", university: "West Virginia State University", state: "West Virginia", fields: "Computer science, business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.wvstateu.edu/academics/graduate-programs", lowestCostPriority: 19, lowestCostCategory: "Low" },
  { rank: 145, slug: "fairmont-state-lowest-cost-masters-2027", university: "Fairmont State University", state: "West Virginia", fields: "Business, technology and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.fairmontstate.edu/academics/graduate-programs", lowestCostPriority: 20, lowestCostCategory: "Low" },
  { rank: 146, slug: "shepherd-lowest-cost-masters-2027", university: "Shepherd University", state: "West Virginia", fields: "Business, data analytics and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.shepherd.edu/graduate-studies/", lowestCostPriority: 21, lowestCostCategory: "Low" },
  { rank: 147, slug: "concord-lowest-cost-masters-2027", university: "Concord University", state: "West Virginia", fields: "Business and related graduate study", cost: "Low", fundingRoutes: "Assistantship/MW (verify by program)", officialUrl: "https://www.concord.edu/graduate", lowestCostPriority: 22, lowestCostCategory: "Low" },
];

const usLowCostGuides: ScholarshipGuide[] = usLowCostSeeds.map(createUsLowCostGuide);

type CanadaUniversitySeed = {
  rank: number;
  slug: string;
  university: string;
  province: string;
  fields: string;
  funding: "Strong" | "Possible" | "Limited";
  difficulty: string;
  tier: 1 | 2 | 3;
  officialUrl: string;
  priority?: number;
};

function createCanadaGuide(seed: CanadaUniversitySeed): ScholarshipGuide {
  const fundingText = seed.funding === "Strong"
    ? "Thesis-based MSc/PhD route-এ RA, TA বা supervisor funding-এর সম্ভাবনা তুলনামূলক ভালো; written offer ছাড়া নিশ্চিত নয়।"
    : seed.funding === "Possible"
      ? "University awards, assistantship বা supervisor funding পাওয়া যেতে পারে, তবে competition বেশি এবং programভেদে বদলায়।"
      : "এখানে course-based/private route বেশি হতে পারে; institutional funding সীমিত ধরে full-cost budget আগে যাচাই করুন।";
  return {
    slug: seed.slug,
    country: "canada",
    university: seed.university,
    title: `${seed.university}: Canada Graduate Study & Funding Guide`,
    summary: `${seed.province}-এ ${seed.fields} নিয়ে English graduate study, research fit, funding এবং study-permit planning-এর practical guide।`,
    label: `Canada Tier ${seed.tier} · ${seed.funding} funding signal`,
    funding: fundingText,
    duration: "Master’s সাধারণত 1–2 বছর; PhD ও exact program length official page-এ যাচাই করুন",
    audience: `International applicants targeting ${seed.fields}; relative admission difficulty: ${seed.difficulty}`,
    realityCheck: "এই shortlist planning support—admission, funding, study permit বা PGWP guarantee নয়। DLI status থাকলেও প্রতিটি program স্বয়ংক্রিয়ভাবে PGWP-eligible নয়; exact program, campus এবং current immigration rule official source থেকে যাচাই করুন।",
    highlights: [
      `Province: ${seed.province}.`,
      `Best-fit fields: ${seed.fields}.`,
      `Funding signal: ${seed.funding}; thesis-based MSc/PhD সাধারণত course-based degree-এর চেয়ে funding-friendly।`,
      `Relative difficulty: ${seed.difficulty}; এটি admission probability বা guarantee নয়।`,
    ],
    fit: [
      "আপনার bachelor’s coursework target program-এর prerequisites পূরণ করে।",
      "Software-development, research বা project evidence দিয়ে 2–3টি faculty/lab-এর সঙ্গে specific fit দেখাতে পারবেন।",
      "English-language requirement এবং international transcript rules current admission page থেকে পূরণ করতে পারবেন।",
      "Funding না এলে tuition, living cost, insurance ও study-permit proof-of-funds-এর realistic fallback plan আছে।",
    ],
    quickStart: [
      "Official graduate page থেকে exact degree, thesis/course option, intake এবং deadline লিখে নিন।",
      "Canada DLI list-এ institution, campus, public/private status এবং relevant PGWP information যাচাই করুন।",
      "Thesis route হলে 2–3 জন current supervisor shortlist করে recent paper/project পড়ুন।",
      "Funding package-এ stipend, tuition coverage, fees, duration এবং renewal condition আলাদা করে লিখুন।",
    ],
    steps: [
      {
        title: "Program, DLI ও PGWP status যাচাই করুন",
        timing: "Shortlist করার সময়",
        description: "University-level label যথেষ্ট নয়—exact degree, campus এবং current immigration eligibility মিলিয়ে নিন।",
        actions: ["Official program curriculum ও admission requirements পড়ুন।", "Canada DLI list-এ institution/campus খুঁজুন।", "Program-specific PGWP এবং study-permit requirements official IRCC source থেকে যাচাই করুন।"],
        readyWhen: "Exact program, intake, DLI এবং immigration checks source linkসহ নোট করা হয়েছে।",
      },
      {
        title: "Research ও funding fit তৈরি করুন",
        timing: "Deadline-এর 3–5 মাস আগে",
        description: "Funding signal university-wide guarantee নয়; department, supervisor এবং offer-specific evidence দরকার।",
        actions: ["Thesis/course route আলাদা করুন।", "Relevant faculty/lab ও current funding language পড়ুন।", "নিজের experience-এর সঙ্গে evidence-based fit note লিখুন।"],
        readyWhen: "কমপক্ষে দুইটি genuine faculty/program fit এবং funding route চিহ্নিত।",
      },
      {
        title: "Application package প্রস্তুত করুন",
        timing: "Deadline-এর 6–10 সপ্তাহ আগে",
        description: "Program-specific checklist অনুসারে academic ও professional evidence প্রস্তুত রাখুন।",
        actions: ["Transcript, degree certificate, CV এবং SOP/research statement প্রস্তুত করুন।", "English score ও recommendation request সম্পন্ন করুন।", "Application fee, document delivery ও credential-assessment rule যাচাই করুন।"],
        readyWhen: "Portal checklist-এর সব required item submission-ready।",
      },
      {
        title: "Offer, funding ও study permit verify করুন",
        timing: "Decision পাওয়ার পর",
        description: "Admission এবং funding আলাদা সিদ্ধান্ত হতে পারে; লিখিত net-cost calculation ছাড়া commit করবেন না।",
        actions: ["Stipend, tuition, fees, assistantship duty ও funding duration লিখিতভাবে confirm করুন।", "LOA ও study-permit documents মিলিয়ে নিন।", "PGWP, spouse/dependent এবং post-study plan-এর current IRCC rules পুনরায় যাচাই করুন।"],
        readyWhen: "Written offer থেকে total cost, funding gap এবং immigration route পরিষ্কার।",
      },
    ],
    checklist: ["Official program and admission guide", "Degree certificate and transcripts", "English-language evidence", "Academic CV", "Statement of Purpose", "Research statement/proposal if required", "Recommendation letters", "Funding and proof-of-funds plan"],
    afterSubmission: ["Application portal, supervisor reply এবং funding decision আলাদাভাবে track করুন।", "Offer পেলে assistantship, tuition coverage, fees ও renewal conditions লিখিতভাবে confirm করুন।", "LOA পাওয়ার পর current IRCC study-permit checklist দিয়ে final documents প্রস্তুত করুন।"],
    cautions: ["Strong funding signal full funding guarantee নয়।", "Course-based master’s ও MBA-তে funding অনেক সময় সীমিত হয়।", "DLI হওয়া মানেই প্রতিটি program PGWP-eligible নয়।", "Language, deadline, tuition এবং immigration rules পরিবর্তিত হতে পারে।"],
    officialLinks: [
      { label: `${seed.university} official graduate/admissions page`, href: seed.officialUrl, description: "Exact program, deadline, English requirement, tuition এবং funding information যাচাই করুন।" },
      { label: "Canada designated learning institutions list", href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html", description: "DLI, graduate-program PAL/TAL status এবং PGWP-related institution information যাচাই করুন।" },
      { label: "EduCanada scholarships for international applicants", href: "https://www.educanada.ca/scholarships-bourses/non_can/index.aspx?lang=eng", description: "Current Government of Canada scholarship opportunities ও eligibility দেখুন।" },
    ],
    reviewedAt: "August 23, 2026",
    canadaPriority: seed.priority,
    canadaTier: seed.tier,
    canadaFunding: seed.funding,
  };
}

const canadaUniversitySeeds: CanadaUniversitySeed[] = [
  { rank: 1, slug: "memorial-newfoundland-canada-graduate-guide", university: "Memorial University of Newfoundland", province: "Newfoundland and Labrador", fields: "Computer Science, Data and Business", funding: "Strong", difficulty: "Medium", tier: 1, priority: 1, officialUrl: "https://www.mun.ca/become/graduate/" },
  { rank: 2, slug: "regina-canada-graduate-guide", university: "University of Regina", province: "Saskatchewan", fields: "Computer Science, Data Science and Business", funding: "Strong", difficulty: "Medium", tier: 1, priority: 2, officialUrl: "https://www.uregina.ca/graduate-studies-research/" },
  { rank: 3, slug: "manitoba-canada-graduate-guide", university: "University of Manitoba", province: "Manitoba", fields: "Computer Science, MIS and Business", funding: "Strong", difficulty: "Medium", tier: 1, priority: 3, officialUrl: "https://umanitoba.ca/graduate-studies/" },
  { rank: 4, slug: "saskatchewan-canada-graduate-guide", university: "University of Saskatchewan", province: "Saskatchewan", fields: "Computer Science, Data and Business", funding: "Strong", difficulty: "Medium", tier: 1, priority: 4, officialUrl: "https://grad.usask.ca/" },
  { rank: 5, slug: "new-brunswick-canada-graduate-guide", university: "University of New Brunswick", province: "New Brunswick", fields: "Computer Science, Data Science and Business", funding: "Strong", difficulty: "Medium", tier: 1, priority: 5, officialUrl: "https://www.unb.ca/gradstudies/" },
  { rank: 6, slug: "unbc-canada-graduate-guide", university: "University of Northern British Columbia", province: "British Columbia", fields: "Computer Science, Data Science and Business", funding: "Strong", difficulty: "Medium", tier: 1, priority: 6, officialUrl: "https://www.unbc.ca/graduate-programs" },
  { rank: 7, slug: "lethbridge-canada-graduate-guide", university: "University of Lethbridge", province: "Alberta", fields: "Computer Science and Management", funding: "Strong", difficulty: "Medium", tier: 1, priority: 7, officialUrl: "https://www.ulethbridge.ca/future-student/graduate-studies" },
  { rank: 8, slug: "windsor-canada-graduate-guide", university: "University of Windsor", province: "Ontario", fields: "Computer Science, Applied Computing and Business", funding: "Possible", difficulty: "Medium", tier: 1, priority: 10, officialUrl: "https://www.uwindsor.ca/graduate-studies/" },
  { rank: 9, slug: "lakehead-canada-graduate-guide", university: "Lakehead University", province: "Ontario", fields: "Computer Science, AI and Business", funding: "Strong", difficulty: "Medium", tier: 1, priority: 8, officialUrl: "https://www.lakeheadu.ca/programs/graduate" },
  { rank: 10, slug: "trent-canada-graduate-guide", university: "Trent University", province: "Ontario", fields: "Applied Modelling and Data Analytics", funding: "Possible", difficulty: "Medium", tier: 1, officialUrl: "https://www.trentu.ca/graduatestudies/" },
  { rank: 11, slug: "brock-canada-graduate-guide", university: "Brock University", province: "Ontario", fields: "Computer Science, Data Analytics and Business", funding: "Possible", difficulty: "Medium", tier: 1, officialUrl: "https://brocku.ca/graduate-studies/" },
  { rank: 12, slug: "ontario-tech-canada-graduate-guide", university: "Ontario Tech University", province: "Ontario", fields: "Computer Science, IT Security and Data Science", funding: "Strong", difficulty: "Medium", tier: 1, priority: 9, officialUrl: "https://gradstudies.ontariotechu.ca/" },
  { rank: 13, slug: "laurentian-canada-graduate-guide", university: "Laurentian University", province: "Ontario", fields: "Computational Science and Business", funding: "Strong", difficulty: "Medium", tier: 1, priority: 13, officialUrl: "https://laurentian.ca/graduate-studies" },
  { rank: 14, slug: "guelph-canada-graduate-guide", university: "University of Guelph", province: "Ontario", fields: "Computer Science, Data Science and Management", funding: "Strong", difficulty: "Medium-high", tier: 1, officialUrl: "https://graduatestudies.uoguelph.ca/" },
  { rank: 15, slug: "carleton-canada-graduate-guide", university: "Carleton University", province: "Ontario", fields: "Computer Science, Data Science and Technology Innovation", funding: "Strong", difficulty: "Medium-high", tier: 1, officialUrl: "https://graduate.carleton.ca/" },
  { rank: 16, slug: "concordia-montreal-canada-graduate-guide", university: "Concordia University", province: "Quebec", fields: "Computer Science, Software Engineering and Business", funding: "Strong", difficulty: "Medium-high", tier: 1, priority: 14, officialUrl: "https://www.concordia.ca/gradstudies.html" },
  { rank: 17, slug: "dalhousie-canada-graduate-guide", university: "Dalhousie University", province: "Nova Scotia", fields: "Computer Science, Data Science and Digital Innovation", funding: "Strong", difficulty: "Medium-high", tier: 1, priority: 15, officialUrl: "https://www.dal.ca/study/programs/graduate-professional.html" },
  { rank: 18, slug: "saint-marys-canada-graduate-guide", university: "Saint Mary’s University", province: "Nova Scotia", fields: "Computing, Finance and MBA", funding: "Possible", difficulty: "Medium", tier: 1, officialUrl: "https://www.smu.ca/graduate-studies/" },
  { rank: 19, slug: "acadia-canada-graduate-guide", university: "Acadia University", province: "Nova Scotia", fields: "Computer Science and Data Science", funding: "Strong", difficulty: "Medium", tier: 1, priority: 11, officialUrl: "https://graduate.acadiau.ca/" },
  { rank: 20, slug: "upei-canada-graduate-guide", university: "University of Prince Edward Island", province: "Prince Edward Island", fields: "Computer Science, Data-related study and Business", funding: "Possible", difficulty: "Medium", tier: 1, officialUrl: "https://www.upei.ca/graduate-studies" },
  { rank: 21, slug: "alberta-canada-graduate-guide", university: "University of Alberta", province: "Alberta", fields: "Computer Science, AI and Business", funding: "Strong", difficulty: "High", tier: 2, officialUrl: "https://www.ualberta.ca/en/graduate-studies/index.html" },
  { rank: 22, slug: "calgary-canada-graduate-guide", university: "University of Calgary", province: "Alberta", fields: "Computer Science, Software Engineering and Business", funding: "Strong", difficulty: "High", tier: 2, officialUrl: "https://grad.ucalgary.ca/" },
  { rank: 23, slug: "ottawa-canada-graduate-guide", university: "University of Ottawa", province: "Ontario", fields: "Computer Science, AI and Engineering Management", funding: "Strong", difficulty: "High", tier: 2, officialUrl: "https://www.uottawa.ca/faculty-graduate-postdoctoral/" },
  { rank: 24, slug: "mcmaster-canada-graduate-guide", university: "McMaster University", province: "Ontario", fields: "Computing, Software Engineering and Business", funding: "Strong", difficulty: "High", tier: 2, officialUrl: "https://gs.mcmaster.ca/" },
  { rank: 25, slug: "queens-canada-graduate-guide", university: "Queen’s University", province: "Ontario", fields: "Computing, AI and Management", funding: "Strong", difficulty: "High", tier: 2, officialUrl: "https://www.queensu.ca/grad-postdoc/" },
  { rank: 26, slug: "western-canada-graduate-guide", university: "Western University", province: "Ontario", fields: "Computer Science, Data Analytics and Business", funding: "Strong", difficulty: "High", tier: 2, officialUrl: "https://grad.uwo.ca/" },
  { rank: 27, slug: "waterloo-canada-graduate-guide", university: "University of Waterloo", province: "Ontario", fields: "Computer Science, Data Science and Business", funding: "Strong", difficulty: "Very high", tier: 2, officialUrl: "https://uwaterloo.ca/graduate-studies-postdoctoral-affairs/" },
  { rank: 28, slug: "simon-fraser-canada-graduate-guide", university: "Simon Fraser University", province: "British Columbia", fields: "Computer Science, Big Data and Business", funding: "Strong", difficulty: "High", tier: 2, officialUrl: "https://www.sfu.ca/gradstudies.html" },
  { rank: 29, slug: "victoria-canada-graduate-guide", university: "University of Victoria", province: "British Columbia", fields: "Computer Science, Software Engineering and Business", funding: "Strong", difficulty: "High", tier: 2, officialUrl: "https://www.uvic.ca/graduate/" },
  { rank: 30, slug: "york-canada-graduate-guide", university: "York University", province: "Ontario", fields: "Computer Science, AI and Business Analytics", funding: "Possible", difficulty: "High", tier: 2, officialUrl: "https://www.yorku.ca/gradstudies/" },
  { rank: 31, slug: "toronto-metropolitan-canada-graduate-guide", university: "Toronto Metropolitan University", province: "Ontario", fields: "Computer Science, Data Science and Digital Management", funding: "Possible", difficulty: "Medium-high", tier: 2, officialUrl: "https://www.torontomu.ca/graduate/" },
  { rank: 32, slug: "ubc-canada-graduate-guide", university: "University of British Columbia", province: "British Columbia", fields: "Computer Science, Data and Business", funding: "Strong", difficulty: "Very high", tier: 2, officialUrl: "https://www.grad.ubc.ca/" },
  { rank: 33, slug: "toronto-canada-graduate-guide", university: "University of Toronto", province: "Ontario", fields: "Computer Science, AI and Management", funding: "Strong", difficulty: "Very high", tier: 2, officialUrl: "https://www.sgs.utoronto.ca/" },
  { rank: 34, slug: "mcgill-canada-graduate-guide", university: "McGill University", province: "Quebec", fields: "Computer Science, AI and Management", funding: "Strong", difficulty: "Very high", tier: 2, officialUrl: "https://www.mcgill.ca/gradapplicants/" },
  { rank: 35, slug: "wilfrid-laurier-canada-graduate-guide", university: "Wilfrid Laurier University", province: "Ontario", fields: "Computer Science, Data Science and Business", funding: "Possible", difficulty: "Medium-high", tier: 2, officialUrl: "https://www.wlu.ca/academics/graduate-and-postdoctoral-studies/" },
  { rank: 36, slug: "winnipeg-canada-graduate-guide", university: "University of Winnipeg", province: "Manitoba", fields: "Applied Computer Science and Data", funding: "Possible", difficulty: "Medium", tier: 2, officialUrl: "https://www.uwinnipeg.ca/graduate-studies/" },
  { rank: 37, slug: "stfx-canada-graduate-guide", university: "St. Francis Xavier University", province: "Nova Scotia", fields: "Computer Science", funding: "Strong", difficulty: "Medium", tier: 2, priority: 12, officialUrl: "https://www.stfx.ca/academics/graduate-studies" },
  { rank: 38, slug: "bishops-canada-graduate-guide", university: "Bishop’s University", province: "Quebec", fields: "Computer Science", funding: "Possible", difficulty: "Medium", tier: 2, officialUrl: "https://www.ubishops.ca/future-current-students/graduate-studies/" },
  { rank: 39, slug: "thompson-rivers-canada-graduate-guide", university: "Thompson Rivers University", province: "British Columbia", fields: "Data Science, Computing and MBA", funding: "Possible", difficulty: "Medium", tier: 2, officialUrl: "https://www.tru.ca/gradstudies.html" },
  { rank: 40, slug: "royal-roads-canada-graduate-guide", university: "Royal Roads University", province: "British Columbia", fields: "Technology Management and MBA", funding: "Limited", difficulty: "Medium", tier: 2, officialUrl: "https://www.royalroads.ca/programs/graduate" },
  { rank: 41, slug: "cape-breton-canada-graduate-guide", university: "Cape Breton University", province: "Nova Scotia", fields: "MBA and technology-related programs", funding: "Limited", difficulty: "Backup", tier: 3, officialUrl: "https://www.cbu.ca/academics/programs/graduate-programs/" },
  { rank: 42, slug: "vancouver-island-canada-graduate-guide", university: "Vancouver Island University", province: "British Columbia", fields: "MBA, GIS and data-related study", funding: "Limited", difficulty: "Backup", tier: 3, officialUrl: "https://www.viu.ca/graduate-programs" },
  { rank: 43, slug: "concordia-edmonton-canada-graduate-guide", university: "Concordia University of Edmonton", province: "Alberta", fields: "Information Systems Security", funding: "Possible", difficulty: "Backup", tier: 3, officialUrl: "https://concordia.ab.ca/graduate-studies/" },
  { rank: 44, slug: "algoma-canada-graduate-guide", university: "Algoma University", province: "Ontario", fields: "Computer Science-related graduate programs", funding: "Limited", difficulty: "Backup", tier: 3, officialUrl: "https://algomau.ca/graduate-studies/" },
  { rank: 45, slug: "nipissing-canada-graduate-guide", university: "Nipissing University", province: "Ontario", fields: "Data, Mathematics and Management", funding: "Possible", difficulty: "Backup", tier: 3, officialUrl: "https://www.nipissingu.ca/academics/graduate-studies" },
  { rank: 46, slug: "trinity-western-canada-graduate-guide", university: "Trinity Western University", province: "British Columbia", fields: "MBA, Leadership and Technology", funding: "Limited", difficulty: "Backup", tier: 3, officialUrl: "https://www.twu.ca/graduate-studies" },
  { rank: 47, slug: "northeastern-canada-graduate-guide", university: "Northeastern University Toronto/Vancouver", province: "Ontario and British Columbia", fields: "Computer Science, AI, Data and Information Systems", funding: "Limited", difficulty: "Backup; higher cost", tier: 3, officialUrl: "https://graduate.northeastern.edu/global-campus/canada/" },
  { rank: 48, slug: "nyit-vancouver-canada-graduate-guide", university: "New York Institute of Technology–Vancouver", province: "British Columbia", fields: "Cybersecurity and Energy Management", funding: "Limited", difficulty: "Backup; private", tier: 3, officialUrl: "https://www.nyit.edu/vancouver/" },
  { rank: 49, slug: "fdu-vancouver-canada-graduate-guide", university: "Fairleigh Dickinson University–Vancouver", province: "British Columbia", fields: "Applied Computer Science and Administrative Science", funding: "Limited", difficulty: "Backup; private", tier: 3, officialUrl: "https://www.fdu.edu/campuses/vancouver-campus/" },
  { rank: 50, slug: "university-canada-west-graduate-guide", university: "University Canada West", province: "British Columbia", fields: "MBA", funding: "Limited", difficulty: "Backup; private", tier: 3, officialUrl: "https://www.ucanwest.ca/graduate-programs" },
];

const canadaGuides: ScholarshipGuide[] = canadaUniversitySeeds.map(createCanadaGuide);

type KoreaUniversitySeed = {
  rank: number;
  slug: string;
  university: string;
  fields: string;
  funding: "Strong" | "Possible" | "Limited";
  routes: string;
  difficulty: string;
  tier: 1 | 2 | 3 | 4;
  officialUrl: string;
  priority?: number;
  note?: string;
};

function createKoreaGuide(seed: KoreaUniversitySeed): ScholarshipGuide {
  const fundingText = seed.funding === "Strong"
    ? `${seed.routes}: GKS, university scholarship এবং professor/lab RA/TA route-এর শক্তিশালী সম্ভাবনা; admission বা funding guaranteed নয়।`
    : seed.funding === "Possible"
      ? `${seed.routes}: scholarship/assistantship পাওয়া সম্ভব, তবে competition ও department-specific eligibility আগে যাচাই করুন।`
      : `${seed.routes}: funding সীমিত বা competitive; tuition waiver ছাড়া full-cost fallback budget প্রস্তুত রাখুন।`;
  return {
    slug: seed.slug,
    country: "korea",
    university: seed.university,
    title: `${seed.university}: South Korea Graduate Scholarship Guide`,
    summary: `${seed.fields} নিয়ে English-accessible Master’s/PhD, GKS, university waiver এবং professor-funded research route যাচাই করার practical guide।`,
    label: `South Korea Tier ${seed.tier} · ${seed.funding} funding signal`,
    funding: fundingText,
    duration: "GKS reference: Master’s 1-year Korean language + 2-year degree; PhD 1-year language + 3-year degree",
    audience: `Bangladeshi and international applicants targeting ${seed.fields}; relative difficulty: ${seed.difficulty}`,
    realityCheck: `এই shortlist planning support—admission, GKS, RA/TA বা tuition waiver guarantee নয়। ২০২৬ GKS participating university/program list, track এবং quota current official files দিয়ে যাচাই করতে হবে।${seed.note ? ` ${seed.note}` : ""}`,
    highlights: [
      `Best-fit fields: ${seed.fields}.`,
      `Funding routes: ${seed.routes}.`,
      `Funding signal: ${seed.funding}; thesis-based MS/PhD সাধারণত course-based degree-এর তুলনায় funding-friendly।`,
      `Relative difficulty: ${seed.difficulty}; এটি admission probability নয়।`,
    ],
    fit: [
      "Target department-এ international graduate admission এবং English-taught research supervision পাওয়া যায়।",
      "Software engineering/project/research evidence দিয়ে নির্দিষ্ট professor বা lab-এর সঙ্গে genuine fit দেখাতে পারবেন।",
      "GKS academic, degree, nationality, age এবং document-authentication rules current guideline অনুযায়ী পূরণ করেন।",
      "GKS না হলে RA/TA, university waiver এবং self-funded gap—তিনটি route-এর realistic plan আছে।",
    ],
    quickStart: [
      "2026 GKS university information file-এ exact university, department ও available track খুঁজুন।",
      "Official graduate page থেকে English-medium program, intake, deadline ও faculty list যাচাই করুন।",
      "Embassy Track, University Track এবং direct professor-funded route আলাদা shortlist-এ রাখুন।",
      "Academic percentage/CGPA conversion এবং Bangladesh documents-এর e-Apostille requirement প্রস্তুত করুন।",
    ],
    steps: [
      {
        title: "GKS track ও program eligibility lock করুন",
        timing: "Current GKS announcement প্রকাশের পর",
        description: "Embassy Track ও University Track-এর university choice, quota, deadline এবং documents আলাদা।",
        actions: ["Current GKS-G guideline ও university information files পড়ুন।", "Embassy বনাম University Track-এর eligible choices লিখুন।", "Exact department, degree language এবং admission prerequisite university page-এ মিলিয়ে নিন।"],
        readyWhen: "Track, university, program, quota ও deadline official sourceসহ নোট করা হয়েছে।",
      },
      {
        title: "Professor ও research funding fit তৈরি করুন",
        timing: "Application-এর 2–4 মাস আগে",
        description: "GKS ছাড়াও thesis MS/PhD-তে professor/lab funding পাওয়া যেতে পারে, তবে written confirmation দরকার।",
        actions: ["2–3 জন current professor-এর recent work পড়ুন।", "নিজের experience-এর সঙ্গে specific research connection লিখুন।", "Program rule অনুমতি দিলে concise personalized email পাঠান।"],
        readyWhen: "কমপক্ষে দুইটি evidence-based lab fit এবং funding inquiry প্রস্তুত।",
      },
      {
        title: "Documents ও application প্রস্তুত করুন",
        timing: "Deadline-এর 6–10 সপ্তাহ আগে",
        description: "Bangladesh route-এ final degree evidence ও e-Apostille handling সময়সাপেক্ষ হতে পারে।",
        actions: ["Degree, transcript, citizenship/family evidence এবং required authentication প্রস্তুত করুন।", "CV, personal statement, study plan/research proposal ও recommendation সংগ্রহ করুন।", "IELTS/TOEFL/TOPIK evidence এবং official CGPA conversion যাচাই করুন।"],
        readyWhen: "Track-specific checklist-এর সব document submission-ready।",
      },
      {
        title: "Offer ও funding package verify করুন",
        timing: "Selection/admission decision-এর পর",
        description: "University admission, GKS selection এবং lab funding আলাদা result হতে পারে।",
        actions: ["Tuition, stipend, airfare, language year ও insurance coverage লিখিত notice-এ দেখুন।", "RA/TA duty, duration এবং renewal condition confirm করুন।", "Uncovered living cost ও visa documents final budget-এ যোগ করুন।"],
        readyWhen: "Official award/offer থেকে net cost ও funding duration পরিষ্কার।",
      },
    ],
    checklist: ["Current GKS-G guideline and university information file", "Final degree certificate and transcripts", "Citizenship and family relationship evidence", "Required e-Apostille/authentication", "Academic CV", "Personal statement and study/research plan", "Recommendation letters", "English/TOPIK evidence if used"],
    afterSubmission: ["Embassy/university screening, department admission এবং professor reply আলাদাভাবে track করুন।", "GKS unsuccessful হলে eligible University Track/direct admission fallback deadline দেখুন।", "Award পেলে tuition, allowance, airfare, language training ও insurance benefits official notice-এ confirm করুন।"],
    cautions: ["২০২৬ GKS application window শেষ হয়ে গেলে next cycle monitor করতে হবে।", "University list-এ নাম থাকলেও সব department বা degree একই track-এ available নয়।", "RA/TA বা university waiver admission-এর সঙ্গে automatic নয়।", "Ewha Womans University-এর applicant eligibility current university/GKS rule থেকে যাচাই করুন।"],
    officialLinks: [
      { label: `${seed.university} official graduate/international page`, href: seed.officialUrl, description: "Exact program, language, deadline, tuition এবং institutional scholarship যাচাই করুন।" },
      { label: "2026 GKS Graduate official announcement", href: "https://www.studyinkorea.go.kr/en/plan/gksNoticeRead.do?bbsId=BBSMSTR_000000000461&nttId=4420", description: "Revised guideline, forms এবং participating-university files ডাউনলোড করুন।" },
      { label: "Korean Embassy in Bangladesh — 2026 GKS-G", href: "https://overseas.mofa.go.kr/bd-en/brd/m_2124/view.do?seq=760090", description: "Bangladesh quota, dates, online application ও e-Apostille instructions যাচাই করুন।" },
      { label: "Study in Korea university and scholarship search", href: "https://www.studyinkorea.go.kr/en/search_v1.do", description: "International graduate programs ও scholarships search করুন; university source দিয়ে re-check করুন।" },
    ],
    reviewedAt: "August 23, 2026",
    koreaPriority: seed.priority,
    koreaTier: seed.tier,
    koreaFunding: seed.funding,
  };
}

const koreaUniversitySeeds: KoreaUniversitySeed[] = [
  { rank: 1, slug: "kaist-korea-graduate-scholarship-guide", university: "KAIST", fields: "Computer Science, AI, Data, Engineering and Business", funding: "Strong", routes: "GKS/KAIST/RA", difficulty: "Very high", tier: 1, officialUrl: "https://admission.kaist.ac.kr/intl-graduate/" },
  { rank: 2, slug: "postech-korea-graduate-scholarship-guide", university: "POSTECH", fields: "Computer Science, AI and Engineering", funding: "Strong", routes: "GKS/RA", difficulty: "Very high", tier: 1, officialUrl: "https://adm-g.postech.ac.kr/" },
  { rank: 3, slug: "seoul-national-korea-graduate-scholarship-guide", university: "Seoul National University", fields: "Computer Science, AI, Engineering and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Very high", tier: 1, officialUrl: "https://en.snu.ac.kr/admission/graduate" },
  { rank: 4, slug: "unist-korea-graduate-scholarship-guide", university: "UNIST", fields: "Computer Science, AI, Engineering and Management", funding: "Strong", routes: "GKS/UNIST/RA", difficulty: "High", tier: 1, officialUrl: "https://admission.unist.ac.kr/graduate/" },
  { rank: 5, slug: "gist-korea-graduate-scholarship-guide", university: "GIST", fields: "AI, Computer Science and Engineering", funding: "Strong", routes: "GKS/GIST/RA", difficulty: "High", tier: 1, officialUrl: "https://www.gist.ac.kr/iadm/" },
  { rank: 6, slug: "dgist-korea-graduate-scholarship-guide", university: "DGIST", fields: "AI, Robotics and Computing", funding: "Strong", routes: "GKS/DGIST/RA", difficulty: "High", tier: 1, officialUrl: "https://admission.dgist.ac.kr/en/" },
  { rank: 7, slug: "yonsei-korea-graduate-scholarship-guide", university: "Yonsei University", fields: "Computer Science, AI, Data and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Very high", tier: 1, officialUrl: "https://graduate.yonsei.ac.kr/graduate_en/" },
  { rank: 8, slug: "korea-university-graduate-scholarship-guide", university: "Korea University", fields: "Computer Science, AI, Data and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Very high", tier: 1, officialUrl: "https://graduate2.korea.ac.kr/" },
  { rank: 9, slug: "sungkyunkwan-korea-graduate-scholarship-guide", university: "Sungkyunkwan University", fields: "Software, AI, Data and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "High", tier: 1, officialUrl: "https://gradschool.skku.edu/eng/" },
  { rank: 10, slug: "hanyang-korea-graduate-scholarship-guide", university: "Hanyang University", fields: "Computer Science, Engineering and Technology Management", funding: "Strong", routes: "GKS/RA/UW", difficulty: "High", tier: 1, officialUrl: "https://www.hanyang.ac.kr/web/eng/graduate" },
  { rank: 11, slug: "sogang-korea-graduate-scholarship-guide", university: "Sogang University", fields: "Computer Science, AI and Business", funding: "Possible", routes: "GKS/RA/UW", difficulty: "High", tier: 1, officialUrl: "https://gradsch.sogang.ac.kr/" },
  { rank: 12, slug: "kyung-hee-korea-graduate-scholarship-guide", university: "Kyung Hee University", fields: "Computer Science, AI, Data and Management", funding: "Possible", routes: "GKS/RA/UW", difficulty: "High", tier: 1, officialUrl: "https://gskh.khu.ac.kr/" },
  { rank: 13, slug: "ajou-korea-graduate-scholarship-guide", university: "Ajou University", fields: "Software, AI, Engineering and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium-high", tier: 1, officialUrl: "https://grad.ajou.ac.kr/" },
  { rank: 14, slug: "inha-korea-graduate-scholarship-guide", university: "Inha University", fields: "Computer Science, Data, Logistics and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium-high", tier: 1, officialUrl: "https://gradeng.inha.ac.kr/" },
  { rank: 15, slug: "chung-ang-korea-graduate-scholarship-guide", university: "Chung-Ang University", fields: "Computer Science, AI and Business", funding: "Possible", routes: "GKS/RA/UW", difficulty: "High", tier: 1, officialUrl: "https://graduate.cau.ac.kr/" },
  { rank: 16, slug: "pusan-national-korea-graduate-scholarship-guide", university: "Pusan National University", fields: "Computer Science, AI, Engineering and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium-high", tier: 2, priority: 6, officialUrl: "https://graduate.pusan.ac.kr/" },
  { rank: 17, slug: "kyungpook-national-korea-graduate-scholarship-guide", university: "Kyungpook National University", fields: "Computer Science, AI, Engineering and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium-high", tier: 2, priority: 5, officialUrl: "https://en.knu.ac.kr/admission/graduate.htm" },
  { rank: 18, slug: "chonnam-national-korea-graduate-scholarship-guide", university: "Chonnam National University", fields: "Computer Science, AI, Engineering and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 2, priority: 2, officialUrl: "https://international.jnu.ac.kr/" },
  { rank: 19, slug: "jeonbuk-national-korea-graduate-scholarship-guide", university: "Jeonbuk National University", fields: "Computer Science, Software, Engineering and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 2, priority: 1, officialUrl: "https://ioffice.jbnu.ac.kr/" },
  { rank: 20, slug: "chungnam-national-korea-graduate-scholarship-guide", university: "Chungnam National University", fields: "Computer Science, AI, Engineering and Management", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 2, priority: 4, officialUrl: "https://plus.cnu.ac.kr/html/en/" },
  { rank: 21, slug: "chungbuk-national-korea-graduate-scholarship-guide", university: "Chungbuk National University", fields: "Computer Science, Big Data and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 2, priority: 3, officialUrl: "https://www.chungbuk.ac.kr/site/english/" },
  { rank: 22, slug: "gyeongsang-national-korea-graduate-scholarship-guide", university: "Gyeongsang National University", fields: "Informatics, Engineering and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 2, priority: 7, officialUrl: "https://www.gnu.ac.kr/eng/" },
  { rank: 23, slug: "kangwon-national-korea-graduate-scholarship-guide", university: "Kangwon National University", fields: "Computer Science, AI, Data and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 2, priority: 8, officialUrl: "https://wwwk.kangwon.ac.kr/english/" },
  { rank: 24, slug: "jeju-national-korea-graduate-scholarship-guide", university: "Jeju National University", fields: "Computer Science, Data, Tourism and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 2, priority: 12, officialUrl: "https://www.jejunu.ac.kr/eng/" },
  { rank: 25, slug: "pukyong-national-korea-graduate-scholarship-guide", university: "Pukyong National University", fields: "IT, Data, Engineering and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 2, priority: 9, officialUrl: "https://www.pknu.ac.kr/eng/" },
  { rank: 26, slug: "university-of-seoul-korea-graduate-scholarship-guide", university: "University of Seoul", fields: "Computer Science, Data and Business", funding: "Possible", routes: "GKS/RA/UW", difficulty: "High", tier: 2, officialUrl: "https://www.uos.ac.kr/en/" },
  { rank: 27, slug: "seoultech-korea-graduate-scholarship-guide", university: "Seoul National University of Science and Technology", fields: "Computer Science, IT and Engineering", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium-high", tier: 2, officialUrl: "https://en.seoultech.ac.kr/" },
  { rank: 28, slug: "kumoh-tech-korea-graduate-scholarship-guide", university: "Kumoh National Institute of Technology", fields: "Computer Science, Software and Engineering", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 2, priority: 10, officialUrl: "https://eng.kumoh.ac.kr/" },
  { rank: 29, slug: "hanbat-national-korea-graduate-scholarship-guide", university: "Hanbat National University", fields: "Computer Science, AI, Engineering and Management", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 2, priority: 11, officialUrl: "https://www.hanbat.ac.kr/eng/" },
  { rank: 30, slug: "korea-maritime-ocean-graduate-scholarship-guide", university: "Korea Maritime & Ocean University", fields: "Data, Logistics, Engineering and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 2, officialUrl: "https://www.kmou.ac.kr/english/" },
  { rank: 31, slug: "kongju-national-korea-graduate-scholarship-guide", university: "Kongju National University", fields: "Computer Science, Engineering and Business", funding: "Strong", routes: "GKS/UW/RA", difficulty: "Medium", tier: 3, priority: 13, officialUrl: "https://www.kongju.ac.kr/eng/" },
  { rank: 32, slug: "kunsan-national-korea-graduate-scholarship-guide", university: "Kunsan National University", fields: "IT, Engineering and Business", funding: "Strong", routes: "GKS/UW/RA", difficulty: "Medium", tier: 3, priority: 14, officialUrl: "https://www.kunsan.ac.kr/en/" },
  { rank: 33, slug: "andong-national-korea-graduate-scholarship-guide", university: "Andong National University", fields: "Software, Data and Business", funding: "Strong", routes: "GKS/UW/RA", difficulty: "Medium-low", tier: 3, priority: 15, officialUrl: "https://www.andong.ac.kr/eng/" },
  { rank: 34, slug: "changwon-national-korea-graduate-scholarship-guide", university: "Changwon National University", fields: "Computer Science, Engineering and Business", funding: "Strong", routes: "GKS/UW/RA", difficulty: "Medium", tier: 3, officialUrl: "https://www.changwon.ac.kr/eng/" },
  { rank: 35, slug: "mokpo-national-korea-graduate-scholarship-guide", university: "Mokpo National University", fields: "Information Engineering and Business", funding: "Strong", routes: "GKS/UW/RA", difficulty: "Medium-low", tier: 3, officialUrl: "https://eng.mokpo.ac.kr/" },
  { rank: 36, slug: "sunchon-national-korea-graduate-scholarship-guide", university: "Sunchon National University", fields: "IT, AI, Logistics and Business", funding: "Strong", routes: "GKS/UW/RA", difficulty: "Medium-low", tier: 3, officialUrl: "https://www.scnu.ac.kr/eng/" },
  { rank: 37, slug: "soongsil-korea-graduate-scholarship-guide", university: "Soongsil University", fields: "Computer Science, Software, AI and Business", funding: "Possible", routes: "GKS/RA/UW", difficulty: "Medium-high", tier: 3, officialUrl: "https://grad.ssu.ac.kr/" },
  { rank: 38, slug: "sejong-korea-graduate-scholarship-guide", university: "Sejong University", fields: "Computer Science, AI, Data and Business", funding: "Possible", routes: "GKS/RA/UW", difficulty: "Medium-high", tier: 3, officialUrl: "https://graduate.sejong.ac.kr/" },
  { rank: 39, slug: "kookmin-korea-graduate-scholarship-guide", university: "Kookmin University", fields: "Software, AI and Business", funding: "Possible", routes: "GKS/RA/UW", difficulty: "Medium-high", tier: 3, officialUrl: "https://english.kookmin.ac.kr/" },
  { rank: 40, slug: "dankook-korea-graduate-scholarship-guide", university: "Dankook University", fields: "Software, Data and Business", funding: "Possible", routes: "GKS/RA/UW", difficulty: "Medium", tier: 3, officialUrl: "https://www.dankook.ac.kr/en/" },
  { rank: 41, slug: "dongguk-korea-graduate-scholarship-guide", university: "Dongguk University", fields: "Computer Science, AI and Business", funding: "Possible", routes: "GKS/RA/UW", difficulty: "Medium-high", tier: 4, officialUrl: "https://www.dongguk.edu/eng/" },
  { rank: 42, slug: "ewha-korea-graduate-scholarship-guide", university: "Ewha Womans University", fields: "Computer Science, Data and Business", funding: "Strong", routes: "GKS/UW/RA", difficulty: "High", tier: 4, note: "Universityটি মূলত women applicants-এর জন্য; exact graduate/GKS eligibility যাচাই করুন।", officialUrl: "https://www.ewha.ac.kr/ewhaen/" },
  { rank: 43, slug: "hufs-korea-graduate-scholarship-guide", university: "Hankuk University of Foreign Studies", fields: "Data and International Business", funding: "Possible", routes: "GKS/UW", difficulty: "Medium-high", tier: 4, officialUrl: "https://www.hufs.ac.kr/hufs/" },
  { rank: 44, slug: "gachon-korea-graduate-scholarship-guide", university: "Gachon University", fields: "AI, Software and Business", funding: "Possible", routes: "GKS/RA/UW", difficulty: "Medium", tier: 4, officialUrl: "https://www.gachon.ac.kr/eng/" },
  { rank: 45, slug: "yeungnam-korea-graduate-scholarship-guide", university: "Yeungnam University", fields: "Computer Science, Engineering and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 4, officialUrl: "https://www.yu.ac.kr/english/" },
  { rank: 46, slug: "keimyung-korea-graduate-scholarship-guide", university: "Keimyung University", fields: "Computer Science, Data and Business", funding: "Possible", routes: "GKS/UW", difficulty: "Medium", tier: 4, officialUrl: "https://www.kmu.ac.kr/uni/eng/" },
  { rank: 47, slug: "dong-a-korea-graduate-scholarship-guide", university: "Dong-A University", fields: "Computer Science, AI and Business", funding: "Possible", routes: "GKS/UW/RA", difficulty: "Medium", tier: 4, officialUrl: "https://english.donga.ac.kr/" },
  { rank: 48, slug: "chosun-korea-graduate-scholarship-guide", university: "Chosun University", fields: "Computer Science, Engineering and Business", funding: "Strong", routes: "GKS/RA/UW", difficulty: "Medium", tier: 4, officialUrl: "https://www3.chosun.ac.kr/eng/" },
  { rank: 49, slug: "ulsan-korea-graduate-scholarship-guide", university: "University of Ulsan", fields: "Computer Science, Engineering and Business", funding: "Strong", routes: "GKS/Industry RA", difficulty: "Medium-high", tier: 4, officialUrl: "https://global.ulsan.ac.kr/" },
  { rank: 50, slug: "handong-global-korea-graduate-scholarship-guide", university: "Handong Global University", fields: "Computer Science, ICT and Global Management", funding: "Possible", routes: "GKS/UW", difficulty: "Medium", tier: 4, officialUrl: "https://www.handong.edu/eng/" },
];

const koreaGuides: ScholarshipGuide[] = koreaUniversitySeeds.map(createKoreaGuide);

type SwissInstitutionSeed = {
  rank: number;
  slug: string;
  institution: string;
  fields: string;
  funding: "Strong" | "Possible" | "Limited" | "Paid research";
  fundingRoutes: string;
  difficulty: string;
  tier: 1 | 2 | 3 | 4;
  kind: "Research university" | "University of Applied Sciences" | "Research centre" | "Specialist institution";
  officialUrl: string;
  priority?: number;
  note?: string;
};

function createSwissGuide(seed: SwissInstitutionSeed): ScholarshipGuide {
  return {
    slug: seed.slug,
    country: "switzerland",
    university: seed.institution,
    title: `${seed.institution}: Switzerland Graduate Study & Funding Guide`,
    summary: `${seed.kind} হিসেবে ${seed.fields} নিয়ে MSc/PhD, scholarship, salaried research বা professional-study route যাচাই করার practical guide।`,
    label: `Switzerland Tier ${seed.tier} · ${seed.kind}`,
    funding: `${seed.fundingRoutes}. Funding signal: ${seed.funding}; written scholarship, employment contract বা assistantship offer ছাড়া নিশ্চিত নয়।`,
    duration: "Master’s সাধারণত 1.5–2 বছর; doctoral/research appointment প্রায় 3–5 বছর হতে পারে",
    audience: `International applicants targeting ${seed.fields}; relative difficulty/cost concern: ${seed.difficulty}`,
    realityCheck: `Switzerland-এ tuition তুলনামূলক কম হলেও living cost অনেক বেশি। Applied-sciences ও specialist institutions-এ নিজস্ব PhD সীমিত হতে পারে; research centres-এ সাধারণত partner university registration লাগে।${seed.note ? ` ${seed.note}` : ""}`,
    highlights: [
      `Institution type: ${seed.kind}.`,
      `Best-fit fields: ${seed.fields}.`,
      `Funding route: ${seed.fundingRoutes}.`,
      `Relative difficulty/cost concern: ${seed.difficulty}; এটি admission বা funding probability নয়।`,
    ],
    fit: [
      "Target MSc/PhD বা research vacancy আপনার prior degree এবং software/research experience-এর সঙ্গে মেলে।",
      "Program language, prerequisite এবং degree-awarding institution current official source থেকে confirm করতে পারবেন।",
      "Research route হলে Swiss academic supervisor বা hiring lab-এর সঙ্গে evidence-based fit দেখাতে পারবেন।",
      "Tuition-এর পাশাপাশি housing, insurance, permit এবং high living cost-এর realistic funding plan আছে।",
    ],
    quickStart: [
      "Official program/job page থেকে degree type, language, intake বা vacancy deadline লিখে নিন।",
      "swissuniversities accreditation ও tuition comparison-এ institution category এবং current fee যাচাই করুন।",
      "PhD/research route হলে salaried vacancy এবং Swiss Government Excellence Scholarship আলাদা option হিসেবে track করুন।",
      "Scholarship target করলে supervisor support, age/date cutoff এবং country-specific call আগে যাচাই করুন।",
    ],
    steps: [
      {
        title: "Institution ও degree route যাচাই করুন",
        timing: "Shortlist করার সময়",
        description: "Research university, UAS, research centre ও specialist school একই degree/funding structure অনুসরণ করে না।",
        actions: ["Exact MSc, PhD বা paid research vacancy খুঁজুন।", "Degree-awarding institution ও English-language availability confirm করুন।", "Current tuition/fees এবং accreditation official source দিয়ে যাচাই করুন।"],
        readyWhen: "Institution type, degree, language, tuition ও deadline sourceসহ নোট করা হয়েছে।",
      },
      {
        title: "Supervisor, vacancy ও funding fit তৈরি করুন",
        timing: "Application-এর 3–5 মাস আগে",
        description: "Swiss PhD অনেক ক্ষেত্রে advertised salaried position; generic admission application যথেষ্ট নাও হতে পারে।",
        actions: ["Current lab, faculty ও vacancy pages পড়ুন।", "নিজের software/research evidence-এর সঙ্গে 2–3টি specific fit লিখুন।", "Scholarship route হলে willing Swiss supervisor-এর support letter requirement যাচাই করুন।"],
        readyWhen: "কমপক্ষে দুইটি research fit অথবা একটি active salaried vacancy target প্রস্তুত।",
      },
      {
        title: "Application package ও budget প্রস্তুত করুন",
        timing: "Deadline-এর 6–10 সপ্তাহ আগে",
        description: "Master’s scholarship খুব competitive; full living-cost budget আলাদা করে হিসাব করুন।",
        actions: ["Degree, transcript, CV, motivation/research proposal ও recommendations প্রস্তুত করুন।", "English/German/French/Italian language requirement program অনুযায়ী যাচাই করুন।", "Tuition, living cost, insurance ও permit proof-of-funds calculation করুন।"],
        readyWhen: "Official checklist complete এবং scholarship ছাড়া funding gap পরিষ্কার।",
      },
      {
        title: "Offer, salary ও scholarship verify করুন",
        timing: "Decision/contract stage",
        description: "Scholarship stipend এবং salaried PhD employment contract এক জিনিস নয়।",
        actions: ["Gross/net salary বা stipend, tuition, insurance এবং contract duration লিখিতভাবে দেখুন।", "Scholarship renewal, supervisor এবং enrolment conditions confirm করুন।", "Residence permit ও relocation cost final budget-এ যোগ করুন।"],
        readyWhen: "Written offer/contract থেকে net funding এবং uncovered cost পরিষ্কার।",
      },
    ],
    checklist: ["Official programme or vacancy page", "Accreditation and degree-awarding institution check", "Degree certificate and transcripts", "Academic CV", "Motivation letter or research proposal", "Recommendation letters", "Language evidence", "Living-cost and permit funding plan"],
    afterSubmission: ["Admission, scholarship এবং employment application আলাদাভাবে track করুন।", "Supervisor support scholarship award বা university admission guarantee নয়।", "Offer পেলে salary/stipend, tuition, insurance, contract duration ও permit conditions লিখিতভাবে verify করুন।"],
    cautions: ["Swiss Government Excellence Scholarship মূলত Master’s-completed early-career researchers-এর জন্য।", "2027–28 reference-এ maximum age 35 এবং supervisor support required; exact birth-date cutoff যাচাই করুন।", "Scholarship amount salary নয় এবং tuition/semester fee আলাদা থাকতে পারে।", "Distance-study route Swiss student visa-এর উপযোগী নাও হতে পারে।"],
    officialLinks: [
      { label: `${seed.institution} official programme/research page`, href: seed.officialUrl, description: "Exact MSc/PhD, vacancy, language, admission এবং institutional funding যাচাই করুন।" },
      { label: "Swiss Government Excellence Scholarships 2027–28", href: "https://www.sbfi.admin.ch/en/swiss-government-excellence-scholarships", description: "Country call, age/date cutoff, CHF 2,450 reference funding এবং supervisor requirement যাচাই করুন।" },
      { label: "swissuniversities tuition fees", href: "https://www.swissuniversities.ch/en/themen/lehre-studium/information-on-studies/tuition-fees", description: "Current semester tuition ও compulsory fees institution অনুযায়ী যাচাই করুন।" },
      { label: "Accredited Swiss higher education institutions", href: "https://www.swissuniversities.ch/en/topics/studying/accredited-swiss-higher-education-institutions", description: "Institution category ও accreditation status যাচাই করুন।" },
    ],
    reviewedAt: "August 23, 2026",
    swissPriority: seed.priority,
    swissTier: seed.tier,
    swissFunding: seed.funding,
  };
}

const swissInstitutionSeeds: SwissInstitutionSeed[] = [
  { rank: 1, slug: "eth-zurich-switzerland-graduate-guide", institution: "ETH Zürich", fields: "Computer Science, AI, Data Science, Robotics and Management", funding: "Strong", fundingRoutes: "ESOP, salaried PhD and research assistant positions", difficulty: "Very high", tier: 1, priority: 9, kind: "Research university", officialUrl: "https://ethz.ch/en/studies/master.html" },
  { rank: 2, slug: "epfl-switzerland-graduate-guide", institution: "EPFL", fields: "Computer Science, AI, Data, Engineering and Management", funding: "Strong", fundingRoutes: "Excellence Fellowship and salaried research/PhD positions", difficulty: "Very high", tier: 1, priority: 10, kind: "Research university", officialUrl: "https://www.epfl.ch/education/master/" },
  { rank: 3, slug: "zurich-switzerland-graduate-guide", institution: "University of Zurich", fields: "Informatics, AI, Data and Business", funding: "Strong", fundingRoutes: "University grants, assistantships and salaried PhD jobs", difficulty: "High", tier: 1, priority: 8, kind: "Research university", officialUrl: "https://www.uzh.ch/en/studies/programs/master.html" },
  { rank: 4, slug: "basel-switzerland-graduate-guide", institution: "University of Basel", fields: "Computer Science, Data Science, Business and Economics", funding: "Strong", fundingRoutes: "Assistantships and salaried PhD positions", difficulty: "High", tier: 1, priority: 5, kind: "Research university", officialUrl: "https://www.unibas.ch/en/Studies/Degree-Programs/Master.html" },
  { rank: 5, slug: "bern-switzerland-graduate-guide", institution: "University of Bern", fields: "Computer Science, Data, Business and Economics", funding: "Strong", fundingRoutes: "Assistantships and salaried PhD positions", difficulty: "High", tier: 1, priority: 4, kind: "Research university", officialUrl: "https://www.unibe.ch/studies/programs/masters/index_eng.html" },
  { rank: 6, slug: "geneva-switzerland-graduate-guide", institution: "University of Geneva", fields: "Computer Science, Data Science, Economics and Management", funding: "Strong", fundingRoutes: "Excellence Fellowship, assistantships and PhD positions", difficulty: "High", tier: 1, priority: 7, kind: "Research university", officialUrl: "https://www.unige.ch/en/studies/masters" },
  { rank: 7, slug: "lausanne-switzerland-graduate-guide", institution: "University of Lausanne", fields: "Information Systems, Data, Business and Economics", funding: "Strong", fundingRoutes: "UNIL Master’s Grant and research/PhD positions", difficulty: "High", tier: 1, priority: 6, kind: "Research university", officialUrl: "https://www.unil.ch/central/en/home/menuinst/formation/masters.html" },
  { rank: 8, slug: "fribourg-switzerland-graduate-guide", institution: "University of Fribourg", fields: "Computer Science, Data, Business and Economics", funding: "Possible", fundingRoutes: "University grants and research assistant positions", difficulty: "Medium-high", tier: 1, priority: 2, kind: "Research university", officialUrl: "https://www.unifr.ch/studies/en/studies/master/" },
  { rank: 9, slug: "neuchatel-switzerland-graduate-guide", institution: "University of Neuchâtel", fields: "Computer Science, Data, Finance and Economics", funding: "Strong", fundingRoutes: "Assistantships and salaried PhD positions", difficulty: "Medium-high", tier: 1, priority: 3, kind: "Research university", officialUrl: "https://www.unine.ch/formation/en/home/masters.html" },
  { rank: 10, slug: "lucerne-switzerland-graduate-guide", institution: "University of Lucerne", fields: "Data, Economics and Management", funding: "Possible", fundingRoutes: "Limited Master’s aid and salaried PhD jobs", difficulty: "Medium-high", tier: 1, kind: "Research university", officialUrl: "https://www.unilu.ch/en/study/courses-exams-regulations/masters-degree-programmes/" },
  { rank: 11, slug: "st-gallen-switzerland-graduate-guide", institution: "University of St. Gallen", fields: "Computer Science, Business Innovation, Finance and Management", funding: "Possible", fundingRoutes: "Excellence scholarship and PhD/research jobs", difficulty: "Very high", tier: 1, priority: 15, kind: "Research university", officialUrl: "https://www.unisg.ch/en/studying/programmes/masters-programmes/" },
  { rank: 12, slug: "usi-switzerland-graduate-guide", institution: "Università della Svizzera italiana — USI", fields: "Informatics, AI, Software and Management", funding: "Strong", fundingRoutes: "Merit scholarships and research/PhD assistantships", difficulty: "Medium-high", tier: 1, priority: 1, kind: "Research university", officialUrl: "https://www.usi.ch/en/education/master" },
  { rank: 13, slug: "geneva-graduate-institute-switzerland-guide", institution: "Geneva Graduate Institute — IHEID", fields: "Economics, Development and International Affairs", funding: "Possible", fundingRoutes: "Need-based and merit scholarships", difficulty: "High", tier: 1, kind: "Specialist institution", officialUrl: "https://www.graduateinstitute.ch/academic-departments/master-programmes" },
  { rank: 14, slug: "zhaw-switzerland-graduate-guide", institution: "Zurich University of Applied Sciences — ZHAW", fields: "Applied Computer Science, Data and Business IT", funding: "Limited", fundingRoutes: "Limited institutional scholarships; professional Master’s focus", difficulty: "Medium cost concern", tier: 2, priority: 11, kind: "University of Applied Sciences", officialUrl: "https://www.zhaw.ch/en/study/masters-degree-programmes" },
  { rank: 15, slug: "bfh-switzerland-graduate-guide", institution: "Bern University of Applied Sciences — BFH", fields: "Computer Science, Engineering and Business", funding: "Limited", fundingRoutes: "Limited institutional scholarships", difficulty: "Medium cost concern", tier: 2, kind: "University of Applied Sciences", officialUrl: "https://www.bfh.ch/en/studies/master/" },
  { rank: 16, slug: "fhnw-switzerland-graduate-guide", institution: "FHNW University of Applied Sciences", fields: "Computer Science, AI and Business Information Systems", funding: "Limited", fundingRoutes: "Limited scholarships and project-based research roles", difficulty: "Medium cost concern", tier: 2, priority: 12, kind: "University of Applied Sciences", officialUrl: "https://www.fhnw.ch/en/degree-programmes" },
  { rank: 17, slug: "hslu-switzerland-graduate-guide", institution: "Lucerne University of Applied Sciences — HSLU", fields: "IT, Data Science and Business", funding: "Limited", fundingRoutes: "Limited institutional scholarships", difficulty: "Medium cost concern", tier: 2, priority: 13, kind: "University of Applied Sciences", officialUrl: "https://www.hslu.ch/en/lucerne-university-of-applied-sciences-and-arts/degree-programmes/master/" },
  { rank: 18, slug: "ost-switzerland-graduate-guide", institution: "OST — Eastern Switzerland University of Applied Sciences", fields: "Computer Science, Data and Engineering", funding: "Limited", fundingRoutes: "Limited scholarships and applied-research roles", difficulty: "Medium cost concern", tier: 2, priority: 14, kind: "University of Applied Sciences", officialUrl: "https://www.ost.ch/en/education/masters-degree-programmes" },
  { rank: 19, slug: "supsi-switzerland-graduate-guide", institution: "SUPSI", fields: "AI, Data, Engineering and Business", funding: "Limited", fundingRoutes: "Limited scholarships and applied-research roles", difficulty: "Medium cost concern", tier: 2, kind: "University of Applied Sciences", officialUrl: "https://www.supsi.ch/en/education/master" },
  { rank: 20, slug: "hes-so-switzerland-graduate-guide", institution: "HES-SO University of Applied Sciences", fields: "Data, Engineering and Business", funding: "Limited", fundingRoutes: "Limited institutional scholarships", difficulty: "Medium cost concern", tier: 2, kind: "University of Applied Sciences", officialUrl: "https://www.hes-so.ch/en/education/studying-at-hes-so/master" },
  { rank: 21, slug: "fhgr-switzerland-graduate-guide", institution: "University of Applied Sciences of the Grisons — FHGR", fields: "Data, Digital Business and Tourism Management", funding: "Limited", fundingRoutes: "Limited institutional scholarships", difficulty: "Medium cost concern", tier: 2, kind: "University of Applied Sciences", officialUrl: "https://www.fhgr.ch/en/study-programmes/masters-degree-programmes/" },
  { rank: 22, slug: "kalaidos-switzerland-graduate-guide", institution: "Kalaidos University of Applied Sciences", fields: "Business, Management and Applied IT", funding: "Limited", fundingRoutes: "Limited aid; private/self-funded route", difficulty: "High cost concern", tier: 2, kind: "University of Applied Sciences", officialUrl: "https://www.kalaidos-fh.ch/en-GB/Study" },
  { rank: 23, slug: "hwz-switzerland-graduate-guide", institution: "HWZ University of Applied Sciences in Business Administration Zurich", fields: "Business IT and Digital Business", funding: "Limited", fundingRoutes: "Limited aid; professional/self-funded route", difficulty: "High cost concern", tier: 2, kind: "University of Applied Sciences", officialUrl: "https://fh-hwz.ch/en/education" },
  { rank: 24, slug: "fernuni-switzerland-graduate-guide", institution: "FernUni Switzerland", fields: "Computer and data-related distance study", funding: "Limited", fundingRoutes: "Limited aid; distance-study route", difficulty: "Not normally suitable as a relocation/visa route", tier: 2, kind: "University of Applied Sciences", note: "Distance educationকে Swiss student-residence route ধরে নেবেন না।", officialUrl: "https://fernuni.ch/" },
  { rank: 25, slug: "psi-switzerland-research-guide", institution: "Paul Scherrer Institute — PSI", fields: "AI, Scientific Computing and Engineering", funding: "Paid research", fundingRoutes: "Paid PhD and research employment with partner-university registration", difficulty: "Competitive vacancy", tier: 3, kind: "Research centre", officialUrl: "https://www.psi.ch/en/pa/job-opportunities" },
  { rank: 26, slug: "empa-switzerland-research-guide", institution: "Empa", fields: "AI, Data, Materials and Engineering", funding: "Paid research", fundingRoutes: "Paid PhD and research employment", difficulty: "Competitive vacancy", tier: 3, kind: "Research centre", officialUrl: "https://www.empa.ch/web/empa/jobs" },
  { rank: 27, slug: "eawag-switzerland-research-guide", institution: "Eawag", fields: "Data and Environmental Computing", funding: "Paid research", fundingRoutes: "Paid PhD and research employment", difficulty: "Competitive vacancy", tier: 3, kind: "Research centre", officialUrl: "https://www.eawag.ch/en/about-us/working/employment/" },
  { rank: 28, slug: "wsl-switzerland-research-guide", institution: "WSL", fields: "Data Science, Environment and Remote Sensing", funding: "Paid research", fundingRoutes: "Paid PhD and research employment", difficulty: "Competitive vacancy", tier: 3, kind: "Research centre", officialUrl: "https://www.wsl.ch/en/about-wsl/jobs-and-careers/" },
  { rank: 29, slug: "imd-switzerland-graduate-guide", institution: "IMD Business School", fields: "MBA and Executive Management", funding: "Limited", fundingRoutes: "Competitive scholarships; otherwise high-cost private route", difficulty: "Excellent but very expensive", tier: 4, kind: "Specialist institution", officialUrl: "https://www.imd.org/degree/mba/" },
  { rank: 30, slug: "franklin-switzerland-graduate-guide", institution: "Franklin University Switzerland", fields: "Management-related Master’s", funding: "Limited", fundingRoutes: "Institutional aid; private/self-funded route", difficulty: "Accredited but expensive", tier: 4, kind: "Specialist institution", officialUrl: "https://www.fus.edu/academics/graduate-programs" },
];

const swissGuides: ScholarshipGuide[] = swissInstitutionSeeds.map(createSwissGuide);

export const scholarshipGuides: ScholarshipGuide[] = [
  {
    slug: "cmu-computer-science-phd-funding",
    country: "usa",
    university: "Carnegie Mellon University",
    title: "CMU Computer Science PhD Funding Guide",
    summary:
      "How CMU CSD doctoral funding works, how to use the faculty directory for research fit, and how to prepare a focused application.",
    label: "Fully funded PhD pathway",
    funding:
      "Admitted Computer Science PhD students receive comprehensive financial support while in good standing.",
    duration: "Usually about 5 years",
    audience: "Domestic and international PhD applicants",
    realityCheck:
      "The faculty link is a research and tenure faculty directory—not a separate scholarship application. Funding is connected to admission to the Computer Science PhD program.",
    highlights: [
      "CMU states that admitted CSD doctoral students receive full financial support while they remain in good standing.",
      "The support package includes tuition, required fees and a monthly living stipend according to the official admissions information.",
      "A master's degree is not required before applying; a bachelor's degree or equivalent is required.",
      "The program is research-focused, based in Pittsburgh and admits for the fall term.",
    ],
    fit: [
      "You have a strong foundation in computer science, mathematics, engineering or a closely related field.",
      "Your research interests connect clearly with one or more active CSD research areas.",
      "You can show research potential through a thesis, publication, project, research assistantship or strong technical work.",
      "You want a full-time research doctorate rather than a course-only master's degree.",
    ],
    quickStart: [
      "Open the official SCS Graduate Admissions page and write the current deadline in your calendar.",
      "Confirm that you are applying to the Computer Science PhD—not a master's program or a separate scholarship form.",
      "Create one folder with subfolders for transcript, CV, statement, recommendations, test results and research samples.",
      "Open the CSD faculty directory and save 3–5 faculty profiles whose current work genuinely matches your interests.",
    ],
    steps: [
      {
        title: "Confirm the program, deadline and funding model",
        timing: "Start 6–12 months before the deadline",
        description:
          "CMU CSD PhD admission and doctoral funding are considered together. There is no second scholarship form for the standard PhD support package.",
        actions: [
          "Open the official Graduate Admissions page and find the Computer Science PhD information.",
          "Note the application opening date, final deadline, application fee and current test requirements.",
          "Check that your bachelor's degree or equivalent will be complete before enrolment; a master's degree is not required.",
          "Read the financial-support page and record what it says about tuition, fees, stipend and good-standing conditions.",
        ],
        readyWhen:
          "You know the exact program name, deadline, required documents and that funding comes through PhD admission.",
      },
      {
        title: "Choose a focused research direction",
        timing: "Allow 1–2 weeks",
        description:
          "A clear research direction helps the committee understand why your background and CMU belong together.",
        actions: [
          "Write two or three research questions you genuinely want to study—not only broad labels such as AI.",
          "For each question, list your relevant courses, thesis, publications, projects or industry experience.",
          "Reduce the list to one main direction and one related secondary direction.",
          "Write a 3–4 sentence summary explaining the problem, why it matters and what experience prepares you for it.",
        ],
        readyWhen:
          "You can explain your proposed direction in one short paragraph without generic claims.",
      },
      {
        title: "Use the faculty directory correctly",
        timing: "Allow 2–4 weeks",
        description:
          "The supplied faculty page is for discovering research fit. It is not an application form.",
        actions: [
          "Filter faculty by the research areas connected to your direction.",
          "Open each relevant profile, laboratory page and two or three recent papers or projects.",
          "Create a table with faculty name, current topic, one relevant paper and how your experience connects.",
          "Shortlist 3–5 genuine matches. Contact a professor only if the program or faculty page invites contact.",
        ],
        readyWhen:
          "You have specific, recent evidence for every faculty member you plan to mention in your statement.",
      },
      {
        title: "Prepare your academic evidence",
        timing: "Allow 3–6 weeks",
        description:
          "Collect complete documents early so the final weeks can be used to improve the application.",
        actions: [
          "Create a concise academic CV highlighting research, publications, technical projects, awards and relevant employment.",
          "Obtain readable transcripts for every institution and follow the portal's translation rules for non-English documents.",
          "Prepare links or short summaries for publications, thesis work, code and major research projects where allowed.",
          "Take the required English-language test early enough for the result to arrive, if the current policy applies to you.",
        ],
        readyWhen:
          "Every requested document is readable, consistently named and saved in a portal-accepted format.",
      },
      {
        title: "Write a CMU-specific statement",
        timing: "Draft and revise for 2–4 weeks",
        description:
          "Connect past evidence, future research questions and CMU fit as one clear story.",
        actions: [
          "Open with the research problems that motivate you—not a long childhood story.",
          "Explain one or two strong experiences: the problem, your contribution, method, result and lesson.",
          "Show why CMU CSD fits by connecting your questions to specific current research and faculty.",
          "End with the capabilities and impact you hope to develop; edit to the current word limit.",
        ],
        readyWhen:
          "A reader can identify your direction, preparation, CMU fit and future goal after one reading.",
      },
      {
        title: "Arrange recommendation letters",
        timing: "Ask at least 4–6 weeks early",
        description:
          "Choose people who can evaluate your research ability, independence, technical depth and readiness for doctoral work.",
        actions: [
          "Use the number of recommenders requested in the current portal.",
          "Prefer thesis supervisors, research mentors or senior technical leads who know your work in detail.",
          "Send each person your CV, draft statement, deadline and a reminder of projects completed together.",
          "Enter their details early, monitor the portal and send one polite reminder before the deadline if needed.",
        ],
        readyWhen:
          "Every recommender has agreed, received your materials and knows the exact deadline.",
      },
      {
        title: "Complete and submit the application",
        timing: "Finish 5–7 days before the deadline",
        description:
          "Create the application from the official SCS admissions page and complete every section carefully.",
        actions: [
          "Enter your name exactly as it appears on your passport and complete personal, academic and program information.",
          "Add recommenders; upload the final CV, statement, transcripts and every currently required document.",
          "Check dates, grades, faculty names, filenames and required fields against the original records.",
          "Preview the application, save a copy, pay the applicable fee and submit before the official deadline.",
        ],
        readyWhen:
          "The portal shows successful submission and you have saved the confirmation email or application number.",
      },
    ],
    checklist: [
      "Focused statement of purpose",
      "Academic CV or résumé",
      "Transcripts requested by the application",
      "Strong academic or research recommendations",
      "Research/project evidence and publications, when applicable",
      "English-language test result if the current policy requires it",
    ],
    afterSubmission: [
      "Check the applicant portal and email—including spam—regularly; do not send duplicate documents unless requested.",
      "Prepare a short explanation of your research, strongest project and faculty fit in case an interview or more information is requested.",
      "If admitted, read the written offer for tuition, stipend, health insurance, summer support, duration and good-standing conditions.",
      "Compare research fit, advisor options, funding and living costs before accepting; rely on the written offer, not assumptions.",
    ],
    cautions: [
      "Do not describe the faculty directory itself as a scholarship.",
      "Mention faculty only when there is a defensible research connection.",
      "Do not assume master's programs receive the same funding as the PhD program.",
      "Deadlines and document rules can change each cycle—verify the official admissions page before submitting.",
    ],
    officialLinks: [
      {
        label: "CSD faculty directory",
        href: "https://csd.cmu.edu/people/research-tenure-faculty",
        description: "Find faculty and explore research alignment.",
      },
      {
        label: "CSD PhD financial support",
        href: "https://csd.cs.cmu.edu/phd-financial-support",
        description: "Read CMU's official doctoral funding explanation.",
      },
      {
        label: "SCS graduate admissions",
        href: "https://www.cs.cmu.edu/education/graduate-admissions",
        description: "Check the current application cycle, requirements and deadlines.",
      },
      {
        label: "Computer Science PhD",
        href: "https://www.csd.cs.cmu.edu/academics/doctoral/phd-in-computer-science",
        description: "Review the degree structure and academic expectations.",
      },
    ],
  },
  {
    slug: "uc-irvine-graduate-funding",
    country: "usa",
    university: "University of California, Irvine",
    title: "UC Irvine Graduate Funding & Application Guide",
    summary:
      "A practical route through the UCI application portal, program requirements and the funding questions every graduate applicant should ask.",
    label: "Graduate application & funding guide",
    funding:
      "Funding depends on the program and written admission offer; PhD support may combine fellowships, teaching assistantships and research assistantships.",
    duration: "Program-specific",
    audience: "Research master's and PhD applicants",
    realityCheck:
      "The provided UCI link opens the university's graduate application portal—not a standalone scholarship. You must first choose a program, then verify that program's funding policy and your offer terms.",
    highlights: [
      "UCI's general graduate minimum is a bachelor's degree or equivalent and a 3.0 undergraduate GPA, but programs may set higher standards.",
      "Requirements and deadlines are program-specific; Information and Computer Sciences programs accept fall admission applications.",
      "UCI reports that most PhD programs provide multi-year support, but the exact amount, source and conditions must be checked with the program and in the offer.",
      "Research master's, professional master's and PhD programs have different goals and funding patterns.",
    ],
    fit: [
      "You have identified the exact UCI graduate program that matches your academic and career goal.",
      "Your academic record meets both the Graduate Division minimum and any higher program requirement.",
      "For a research degree, you can explain your research direction and relevant preparation clearly.",
      "You have reviewed the realistic cost and funding position instead of assuming every admission is fully funded.",
    ],
    quickStart: [
      "Choose one exact UCI degree and department first; do not begin with the general application portal.",
      "Open that program's official admissions page and record its deadline, required materials and funding information.",
      "Create a folder for statement of purpose, personal history statement, CV, transcripts, recommendations and test results.",
      "Make a simple budget showing the application cost and your minimum acceptable funding before you submit.",
    ],
    steps: [
      {
        title: "Choose the exact degree and department",
        timing: "Start 6–10 months before the deadline",
        description:
          "The UCI portal serves many graduate programs. First decide which specific program matches your goal.",
        actions: [
          "Compare PhD, research MS and professional master's options on the department website.",
          "Read the curriculum, research areas, expected background and career outcome for each option.",
          "If you need substantial funding, examine the PhD funding model carefully; never assume a master's has the same support.",
          "Write the exact degree name and department at the top of your application checklist.",
        ],
        readyWhen:
          "You can explain why this exact degree—not merely UCI as a university—fits your goal.",
      },
      {
        title: "Check eligibility, deadline and current rules",
        timing: "Do this before preparing documents",
        description:
          "Graduate Division sets university-wide minimums, while the selected program may require more. Read both pages.",
        actions: [
          "Confirm the bachelor's-degree or equivalent requirement and whether your undergraduate GPA meets the general 3.0 minimum.",
          "Check the program for a higher GPA expectation, prerequisite courses and its own final deadline.",
          "Read the current English-language requirement and exemption rules; schedule a test early if needed.",
          "Check whether GRE or supplemental material is required, optional or not accepted for your exact program.",
        ],
        readyWhen:
          "You meet the minimums and have written down every requirement from the program and Graduate Division pages.",
      },
      {
        title: "Understand the funding before applying",
        timing: "Research alongside program selection",
        description:
          "The application portal is not a scholarship application. Funding varies and may come from fellowships, teaching or research appointments.",
        actions: [
          "Read the department funding page and note what is normally available to new PhD, research MS or professional master's students.",
          "Record whether tuition, stipend, health insurance and summer funding are mentioned—and what is guaranteed versus competitive.",
          "Search the official fellowship list for opportunities you can apply for and note separate deadlines.",
          "Calculate tuition and living-cost exposure if funding is partial or unavailable.",
        ],
        readyWhen:
          "You know what funding may be available, what needs a separate application and what you may need to pay.",
      },
      {
        title: "Prepare the application documents",
        timing: "Allow 4–8 weeks",
        description:
          "Each document should answer a different question while supporting one consistent application story.",
        actions: [
          "Write a program-specific statement of purpose covering preparation, goals and why this program fits.",
          "If requested, use the personal history statement for background, barriers, service, leadership and perspective—not a duplicate statement.",
          "Prepare an academic CV and readable unofficial transcripts for every post-secondary institution listed.",
          "Prepare English test results and any writing sample, portfolio or supplemental response currently requested.",
        ],
        readyWhen:
          "Every document has a distinct purpose, follows the instructions and has been proofread by another person.",
      },
      {
        title: "Arrange recommendation letters",
        timing: "Ask at least 4–6 weeks early",
        description:
          "Recommendations should give specific evidence of your academic, research or technical ability.",
        actions: [
          "Confirm the current number in the program instructions; many graduate applications request three recommendations.",
          "Select people who supervised substantial academic, research or professional work.",
          "Send your CV, statements, program link, deadline and a short list of work they observed.",
          "Enter recommender information early and monitor completion instead of waiting until the final day.",
        ],
        readyWhen:
          "All recommenders have agreed and each can describe your work with concrete examples.",
      },
      {
        title: "Complete the UCI application portal",
        timing: "Begin at least 2–3 weeks early",
        description:
          "Create an account after you know the exact program. Complete the portal section by section with source documents beside you.",
        actions: [
          "Select the correct academic term, degree and program; a wrong selection can send the application to the wrong department.",
          "Complete personal, residency, academic-history and test-information sections using official records.",
          "Add recommenders and upload final statements, CV, transcripts and required supplemental files.",
          "Review the current application fee and fee-waiver rules before reaching payment.",
        ],
        readyWhen:
          "Every required section is complete and all uploaded files open correctly in preview.",
      },
      {
        title: "Final review, payment and submission",
        timing: "Submit 5–7 days before the deadline",
        description:
          "Treat final review as a separate task. Do not submit immediately after the final upload.",
        actions: [
          "Compare names, dates, degree titles, GPA entries and uploaded files against the original records.",
          "Confirm that statements name UCI and the correct program and contain no text from another application.",
          "Check recommendation status, preview the full application, pay the applicable fee and submit.",
          "Save the confirmation page, application ID and a PDF or screenshot of the submitted material.",
        ],
        readyWhen:
          "The portal confirms submission and you have a saved record of exactly what you submitted.",
      },
    ],
    checklist: [
      "Program-specific statement of purpose",
      "Personal history statement when requested",
      "Academic CV or résumé",
      "Unofficial transcripts for application review",
      "Usually three recommendation letters",
      "English-language evidence if required by current policy",
    ],
    afterSubmission: [
      "Use the applicant portal to monitor status and respond promptly if UCI requests missing information.",
      "Do not mail official transcripts during application unless current instructions ask; follow post-admission instructions if admitted.",
      "If offered admission, identify which funding is guaranteed, which depends on an assistantship and which is only competitive.",
      "Compare tuition remission, stipend, insurance, workload, summer coverage, renewal rules and living costs before accepting.",
    ],
    cautions: [
      "An application portal link is not proof of a scholarship or funding guarantee.",
      "Do not use one generic statement for programs with different research goals.",
      "Application fees and waiver eligibility change; international applicants should verify current rules before applying.",
      "Always rely on the program page and written offer for the final funding decision.",
    ],
    officialLinks: [
      {
        label: "UCI graduate application",
        href: "https://apply.grad.uci.edu/apply/",
        description: "Open the official online application portal.",
      },
      {
        label: "Applying to UCI",
        href: "https://grad.uci.edu/admissions/applying-to-uci/",
        description: "Review university-wide requirements and application guidance.",
      },
      {
        label: "ICS graduate admissions",
        href: "https://ics.uci.edu/admissions-information-and-computer-science/graduate-admissions/",
        description: "Check computing program options and admissions details.",
      },
      {
        label: "ICS fellowships and funding",
        href: "https://ics.uci.edu/academics/fellowships-and-funding/",
        description: "Explore official funding opportunities and resources.",
      },
    ],
  },
  {
    slug: "uci-software-engineering-phd-fall-2027",
    country: "usa",
    university: "University of California, Irvine",
    title: "UCI Software Engineering PhD: Fall 2027 Application Roadmap",
    summary:
      "Bangladesh থেকে Japan হয়ে UCI Software Engineering PhD-তে apply করার জন্য program selection, research fit, documents, tests এবং month-by-month submission plan.",
    label: "Personalized Fall 2027 PhD roadmap",
    funding:
      "ICS PhD support may include fellowships, teaching assistantships and research assistantships; the written offer is final.",
    duration: "Normative completion: 6 years",
    audience: "International applicant with a Japan-based master’s and software engineering experience",
    realityCheck:
      "Sam Malek-এর সঙ্গে Software Engineering research করতে চাইলে application-এ Software Engineering, Ph.D. program-ই select করতে হবে। তাঁর official page স্পষ্ট করে যে অন্য ICS PhD program-এ apply করলে তিনি application নাও দেখতে পারেন। এটি আলাদা scholarship form নয়—admission এবং funding একই PhD application-এর অংশ।",
    highlights: [
      "UCI Graduate Division-এর সাধারণ minimum হলো recognized institution থেকে bachelor’s degree বা equivalent এবং 3.0 cumulative undergraduate GPA; department আরও evidence চাইতে পারে।",
      "Software Engineering PhD research-first program; catalogue অনুযায়ী students শুরু থেকেই research topic, paper এবং publication-oriented work-এ যুক্ত হয়।",
      "ICS catalogue-এ Software Engineering PhD-এর GRE optional এবং GitHub, paper, writing sample বা portfolio-এর মতো additional evidence submit করতে উৎসাহ দেওয়া হয়েছে।",
      "International applicant fee বর্তমানে $155; recommendation letter অবশ্যই recommender নিজে portal-এ submit করবেন।",
      "Fall 2027 deadline এখনো live program page/portal-এ confirm করতে হবে—working target হিসেবে 1 December 2026-এর মধ্যে submit করুন, কোনো অনুমানকে official deadline ধরে নেবেন না।",
    ],
    fit: [
      "আপনার master’s research, thesis বা technical project থেকে independent research potential দেখানো যায়।",
      "C#/software development experience-কে software architecture, testing, reliability, security বা AI-assisted software engineering research question-এর সঙ্গে connect করতে পারেন।",
      "Sam Malek বা অন্য Informatics faculty-এর recent work-এর সঙ্গে evidence-based research match আছে।",
      "Academic record-এর দুর্বল অংশ থাকলে SOP, recommendations, research sample এবং project evidence দিয়ে context ও readiness দেখাতে পারবেন।",
    ],
    quickStart: [
      "এক পাতায় লিখুন: target program—Software Engineering, Ph.D.; target cycle—Fall 2027; primary faculty fit—Sam Malek।",
      "WHED-এ bachelor’s ও Shizuoka University program-এর sole language of instruction দেখে TOEFL/IELTS waiver হবে কি না যাচাই করুন।",
      "তিনজন recommender-এর shortlist করুন—অন্তত দুজন যেন academic বা research ability নিয়ে বিস্তারিত লিখতে পারেন।",
      "একটি application folder বানান: CV, SOP, personal history, transcripts, recommendations, English test এবং research sample।",
    ],
    steps: [
      {
        title: "Program এবং research direction final করুন",
        timing: "এখন থেকে August 2026",
        description:
          "Application-এর foundation হলো সঠিক program এবং narrow research question। broad ‘software engineering ভালো লাগে’ statement যথেষ্ট নয়।",
        actions: [
          "Software Engineering, Ph.D. catalogue এবং Department of Informatics-এর graduate program page পড়ুন।",
          "Sam Malek-এর recent work থেকে software analysis/testing, mobile computing, security, architecture বা accessible computing-এর relevant direction বাছুন।",
          "একটি primary এবং একটি related secondary research direction লিখুন।",
          "Master’s research, current C# work এবং strongest project-এর কোন evidence এই direction support করে তা map করুন।",
        ],
        readyWhen:
          "আপনি 4–5 বাক্যে research problem, preparation এবং UCI faculty fit পরিষ্কারভাবে ব্যাখ্যা করতে পারেন।",
      },
      {
        title: "Eligibility এবং English requirement যাচাই করুন",
        timing: "August 2026-এর মধ্যে",
        description:
          "Test waiver অনুমান করবেন না। UCI waiver নির্ধারণে WHED-এ institution-এর sole language of instruction ব্যবহার করে।",
        actions: [
          "Bachelor’s degree equivalency এবং undergraduate cumulative GPA 3.0 minimum-এর সঙ্গে নিজের record মিলিয়ে দেখুন।",
          "WHED-এ bachelor’s ও master’s institution/program-এর language listing পরীক্ষা করে screenshot বা note রাখুন।",
          "Waiver clear না হলে TOEFL বা IELTS Academic-এর জন্য early test date বুক করুন।",
          "Score deadline-এর সময় দুই বছরের কম পুরোনো থাকবে কি না এবং official score delivery time হিসাব করুন।",
        ],
        readyWhen:
          "আপনার confirmed waiver evidence আছে অথবা valid official test score সময়মতো UCI-তে পৌঁছানোর plan আছে।",
      },
      {
        title: "Academic documents এবং research evidence প্রস্তুত করুন",
        timing: "August–September 2026",
        description:
          "Bangladesh ও Japan-এর প্রতিটি higher-education institution-এর readable academic record এক জায়গায় প্রস্তুত রাখুন।",
        actions: [
          "Bachelor’s transcript/mark sheets, degree certificate, master’s transcript এবং degree certificate সংগ্রহ করুন।",
          "Non-English document-এর certified English translation তৈরি করুন; name, dates, courses, grades, credits এবং grading scale readable কি না দেখুন।",
          "Research-focused CV-তে education, thesis, publications, presentations, projects, Japan work experience এবং technical skills priority দিন।",
          "GitHub project, thesis summary, paper, technical report বা writing sample থেকে strongest 1–3টি supporting item বাছুন।",
        ],
        readyWhen:
          "সব documents clear PDF-এ আছে এবং CV ও evidence আপনার research direction support করে।",
      },
      {
        title: "Recommendation team lock করুন",
        timing: "September 2026",
        description:
          "PhD recommendation-এর quality পদবির চেয়ে বেশি গুরুত্বপূর্ণ—writer যেন concrete example দিয়ে research ability বোঝাতে পারেন।",
        actions: [
          "Shizuoka research supervisor, thesis/project-aware professor এবং relevant technical/research supervisor থেকে তিনজন final করুন।",
          "সম্ভব হলে অন্তত দুইটি letter academic বা research-focused রাখুন।",
          "প্রত্যেককে CV, research summary, draft SOP, program name, deadline এবং shared work-এর reminder পাঠান।",
          "Portal invitation পাওয়ার আগে institutional email ও willingness confirm করুন।",
        ],
        readyWhen:
          "তিনজন recommender সম্মতি দিয়েছেন এবং প্রত্যেকে কী evidence highlight করবেন তা জানেন।",
      },
      {
        title: "SOP এবং Personal History Statement লিখুন",
        timing: "September–October 2026",
        description:
          "SOP হবে academic/research argument; Personal History Statement হবে journey, context, resilience এবং community contribution-এর আলাদা narrative।",
        actions: [
          "SOP-তে background, master’s research, software engineering work, research question, UCI fit এবং PhD goal connect করুন।",
          "Faculty নামের সঙ্গে recent topic বা project-based fit দেখান; generic praise এড়িয়ে চলুন।",
          "Personal History Statement-এ Bangladesh-to-Japan journey, language/culture adaptation, challenges এবং UCI community contribution লিখুন।",
          "দুই statement-এ একই গল্প repeat না করে advisor বা strong reviewer দিয়ে অন্তত দুই round feedback নিন।",
        ],
        readyWhen:
          "একবার পড়েই reviewer আপনার research readiness, UCI fit এবং personal context আলাদা করে বুঝতে পারেন।",
      },
      {
        title: "Faculty outreach করুন—সংক্ষিপ্ত ও personalized",
        timing: "September–October 2026",
        description:
          "Professor contact application-এর বিকল্প নয়; এটি research fit যাচাই এবং concise introduction-এর সুযোগ।",
        actions: [
          "Sam Malek ও অন্য genuine faculty match-এর 2–3টি recent paper/project পড়ুন।",
          "Email-এ 1–2 বাক্যে background, 1টি specific research connection এবং Fall 2027 application intent লিখুন।",
          "Academic CV বা concise research summary link দিন; mass email বা generic template পাঠাবেন না।",
          "Reply না এলে application বন্ধ করবেন না—official portal-এ সময়মতো submit করুন।",
        ],
        readyWhen:
          "প্রতিটি email short, faculty-specific এবং আপনার application-এর research story-এর সঙ্গে consistent।",
      },
      {
        title: "Portal খুলে application complete করুন",
        timing: "Portal opening থেকে November 2026",
        description:
          "Portal live হলে exact term ও program select করে sections early complete করুন; final সপ্তাহ পর্যন্ত invitation বা upload বাকি রাখবেন না।",
        actions: [
          "Admission term হিসেবে Fall 2027 এবং program হিসেবে Software Engineering, Ph.D. select করুন।",
          "Personal, education, employment এবং research experience official records অনুযায়ী পূরণ করুন।",
          "Final CV, SOP, Personal History Statement, transcripts এবং allowed additional materials upload করুন।",
          "Recommenders-কে portal invitation পাঠান এবং English score UCI institution code 4859-এ match হয়েছে কি না track করুন।",
        ],
        readyWhen:
          "সব required field complete, files preview-তে readable এবং recommendation requests successfully sent।",
      },
      {
        title: "Final audit, payment এবং early submission",
        timing: "Target: 1 December 2026",
        description:
          "Official deadline program page-এ confirm করে অন্তত কয়েক দিন আগে submit করুন; $155 international fee payment ছাড়া application review complete নয়।",
        actions: [
          "Program name, term, faculty names, degree dates, grades এবং file versions source records-এর সঙ্গে মিলিয়ে দেখুন।",
          "SOP-তে অন্য university/program-এর নাম accidentally রয়ে গেছে কি না search করুন।",
          "Recommendation ও official test status দেখুন; missing item থাকলে polite reminder দিন।",
          "Application preview save করুন, applicable fee pay করে submit করুন এবং confirmation/application ID সংরক্ষণ করুন।",
        ],
        readyWhen:
          "Portal submitted দেখায়, payment complete এবং সব required materials deadline-এর আগে received বা matched।",
      },
    ],
    checklist: [
      "Software Engineering, Ph.D. program selected",
      "Fall 2027 official deadline re-verified",
      "Target faculty/lab এবং research direction identified",
      "Research-focused CV",
      "Statement of Purpose",
      "Personal History Statement",
      "Bachelor’s transcript/mark sheets ও degree certificate",
      "Master’s transcript ও degree certificate",
      "Certified English translations যেখানে প্রয়োজন",
      "Three confirmed recommenders",
      "TOEFL/IELTS official score অথবা confirmed WHED waiver",
      "GitHub/project/paper/research sample",
      "$155 international application fee",
    ],
    afterSubmission: [
      "Applicant portal ও email—spam folder-সহ—নিয়মিত check করুন এবং missing-item request দ্রুত address করুন।",
      "Research direction, master’s work, strongest project এবং faculty fit-এর 2–3 minute explanation interview-এর জন্য প্রস্তুত রাখুন।",
      "Admission offer এলে tuition, stipend, insurance, TA/RA workload, summer support, duration এবং renewal condition লিখিত offer থেকে যাচাই করুন।",
      "Advisor fit, funding guarantee এবং Irvine living cost তুলনা করে তারপর decision নিন।",
    ],
    cautions: [
      "Computer Science PhD accidentally select করবেন না যদি target Informatics/Software Engineering faculty হন।",
      "Fall 2027 deadline প্রকাশের আগে 15 December-কে confirmed deadline হিসেবে লিখবেন না।",
      "Japan থেকে master’s হলেই automatic English waiver হয় না; WHED listing final evidence।",
      "GRE optional হলেও দুর্বল বা irrelevant score শুধু file ভারী করার জন্য submit করবেন না।",
      "Personal History Statement-কে SOP-এর duplicate বানাবেন না।",
    ],
    officialLinks: [
      {
        label: "Software Engineering PhD catalogue",
        href: "https://catalogue.uci.edu/donaldbrenschoolofinformationandcomputersciences/departmentofinformatics/softwareengineering_phd/",
        description: "Program focus, curriculum, milestones and normative time review করুন।",
      },
      {
        label: "Department of Informatics graduate programs",
        href: "https://informatics.ics.uci.edu/graduate-programs-admissions/",
        description: "Correct research program এবং official application entry point দেখুন।",
      },
      {
        label: "Applying to UCI",
        href: "https://grad.uci.edu/admissions/applying-to-uci/",
        description: "Fee, university minimums, English policy এবং portal instructions verify করুন।",
      },
      {
        label: "ICS catalogue admissions & funding",
        href: "https://catalogue.uci.edu/donaldbrenschoolofinformationandcomputersciences/",
        description: "GRE, supplemental materials এবং PhD financial assistance policy দেখুন।",
      },
      {
        label: "Sam Malek faculty page",
        href: "https://ics.uci.edu/~malek/",
        description: "Current research areas এবং correct PhD program guidance পড়ুন।",
      },
      {
        label: "UCI graduate application portal",
        href: "https://apply.grad.uci.edu/apply/",
        description: "Fall 2027 cycle live হলে official application শুরু করুন।",
      },
    ],
  },
  {
    slug: "alabama-autmn-trustworthy-autonomy-phd-2027",
    country: "usa",
    university: "The University of Alabama",
    title: "Alabama AutMn Lab: Fully Funded Trustworthy Autonomy PhD Guide",
    summary:
      "Professor Bineet Ghosh-এর safe robotics, formal methods ও cyber-physical systems lab-এ Fall 2027 contact, research-fit এবং funded CS PhD application roadmap।",
    label: "Strongest active lead · Fully funded",
    funding:
      "The lab currently advertises fully funded PhD hiring; exact RA/TA FTE, stipend, summer support and duration must be confirmed in the written offer.",
    duration: "Usually 4–6 years · Fall 2027 target",
    audience:
      "Applicants with robotics, industrial automation, embedded systems, computer vision, CPS or reliable-software experience",
    realityCheck:
      "Professor Ghosh-এর current UA-hosted page সরাসরি fully funded PhD students hiring বলছে এবং CV email করতে বলছে। এটি strong active lead, কিন্তু professor-এর interest admission নয় এবং webpage-এ exact stipend নেই। Department application ও formal funding letter—দুটিই প্রয়োজন।",
    highlights: [
      "AutMn Lab trustworthy autonomy, formal methods, safe robotics, CPS, real-time/embedded systems ও control theory নিয়ে কাজ করে।",
      "সাম্প্রতিক publications: HiP-CL (multi-robot high-level planning, 2026), Building Safe Autonomous Systems Using Imperfect Components (2025), Perception Model Selection in Robotics (2025)। একই NSF CPS project-এর সঙ্গে সংশ্লিষ্ট 2026-এ $10,000 REU student funding-ও পেয়েছেন।",
      "Current NSF CPS project uncertainty-aware offline/online safety monitoring নিয়ে; listed period January 2026–December 2028 এবং award $364,155।",
      "Industrial robots, sensors, computer vision ও production software experience থেকে unusually direct research story তৈরি করা যায়।",
      "UA CS PhD-এর Fall funding-priority deadline December 31; late files review হতে পারে কিন্তু funding priority কমে যায়।",
      "GRE admission-এর জন্য required নয়, তবে funding decision-এ বিবেচিত হতে পারে এবং department strongly encourages it।",
    ],
    fit: [
      "Industrial robotics, PLC/sensors, computer vision বা safety-critical software নিয়ে hands-on evidence আছে।",
      "AI perception-এর সঙ্গে runtime monitoring, verification বা system uncertainty connect করতে চান।",
      "Formal methods-এ beginner হলেও mathematics, systems ও rigorous research শেখার readiness দেখাতে পারেন।",
      "Research-focused full-time PhD এবং funded assistantship চান।",
    ],
    quickStart: [
      "Professor Ghosh-কে tailored email, academic CV এবং one-page research-interest note পাঠান।",
      "Primary contact হিসেবে current institutional email bineet@ua.edu ব্যবহার করুন; lab contact autmnlab.cs@gmail.com-ও official page-এ listed।",
      "Transcript-এ programming, data structures, algorithms, database, OS, calculus, linear algebra ও probability/statistics courses mark করুন।",
      "December 31-এর অপেক্ষা না করে November 2026-এর মধ্যে complete application target করুন।",
    ],
    steps: [
      {
        title: "Research match নির্দিষ্ট করুন",
        timing: "এখনই · 3–5 দিন",
        description:
          "Generic robotics interest-এর বদলে আপনার production experience থেকে একটি safety/reliability research question তৈরি করুন।",
        actions: [
          "AutMn research ও recent papers থেকে sensor, timing, perception বা distributed-compute uncertainty—একটি focus বাছুন।",
          "একটি বাস্তব industrial failure/safety risk anonymisedভাবে বর্ণনা করুন।",
          "আপনার Python/C#/C, robotics, vision ও backend skill কোন research task-এ কাজে লাগবে map করুন।",
          "Formal verification expert দাবি না করে কেন এটি শিখতে চান তা লিখুন।",
        ],
        readyWhen:
          "আপনি 4–5 বাক্যে problem, evidence, proposed direction এবং AutMn fit explain করতে পারেন।",
      },
      {
        title: "Professor-কে high-signal email পাঠান",
        timing: "August–September 2026",
        description:
          "Short email-এ fit প্রমাণ করুন এবং Fall 2027 funded seat open আছে কি না সরাসরি জিজ্ঞাসা করুন।",
        actions: [
          "Subject-এ Fall 2027 PhD, আপনার strongest domain এবং CV attached লিখুন।",
          "Body-তে degree/publication, industrial systems experience এবং one specific AutMn project connection দিন।",
          "Academic CV ও এক পাতার research note attach করুন; certificates-এর bundle পাঠাবেন না।",
          "7–10 business days reply না এলে একবার polite follow-up করুন।",
        ],
        readyWhen:
          "Professor current availability সম্পর্কে reply দিয়েছেন অথবা আপনি documented contact attempt শেষ করেছেন।",
      },
      {
        title: "UA application শক্তিশালী করুন",
        timing: "September–November 2026",
        description:
          "Faculty interest থাকলেও Graduate School ও CS admissions file independently competitive হতে হবে।",
        actions: [
          "SOP-তে prior research, industrial problem, proposed trustworthy-autonomy direction ও UA fit connect করুন।",
          "CV, transcripts, recommendations ও English evidence current portal rules অনুযায়ী প্রস্তুত করুন।",
          "Core CS/math preparation কম স্পষ্ট হলে SOP-তে equivalent industrial programming evidence দিন।",
          "GRE optional হলেও funding profile materially improve করলে score submit করার সিদ্ধান্ত নিন।",
        ],
        readyWhen:
          "Application evidence research readiness, prerequisite preparation এবং advisor fit—তিনটিই দেখায়।",
      },
      {
        title: "Funding offer যাচাই করুন",
        timing: "Interview ও offer stage",
        description:
          "‘Fully funded’ label-এর exact financial meaning formal appointment letter থেকে বুঝুন।",
        actions: [
          "RA/TA type, 0.50 FTE কি না, annual stipend ও guaranteed years জিজ্ঞাসা করুন।",
          "Tuition, mandatory fees, single-person health insurance ও summer funding coverage লিখিতভাবে নিন।",
          "UA policy অনুযায়ী 0.50 FTE সাধারণত 100% tuition/eligible fees/insurance; 0.25 FTE সাধারণত 50%—offer-এর FTE মিলান।",
          "Uncovered international/student fees ও Tuscaloosa living cost দিয়ে net budget বানান।",
        ],
        readyWhen:
          "Written package দিয়ে year-round living ও uncovered cost realistically manage করা যায়।",
      },
    ],
    checklist: [
      "Tailored professor email", "Academic CV", "One-page research-interest note",
      "Degree certificates and transcripts", "CS and mathematics prerequisite map",
      "Statement of Purpose", "Recommendation letters", "English-proficiency evidence",
      "Optional GRE decision", "Complete application before December 31",
      "Written FTE, stipend, tuition, insurance and summer terms",
    ],
    afterSubmission: [
      "Professor/lab interview-এর জন্য one project, one failure case এবং one proposed method whiteboard-ready রাখুন।",
      "Portal, spam folder এবং recommenders-এর submission status monitor করুন।",
      "Verbal funding indication নয়—formal admission ও assistantship documents দুটোই পড়ুন।",
    ],
    cautions: [
      "Professor-এর positive reply university admission guarantee নয়।",
      "Fully funded post exact stipend বা summer coverage প্রকাশ করে না।",
      "Old UNC email-এর বদলে current UA institutional বা official lab contact ব্যবহার করুন।",
      "Formal-methods expertise না থাকলে exaggerate না করে transferable systems experience দেখান।",
    ],
    officialLinks: [
      { label: "Bineet Ghosh research and hiring page", href: "https://bineet.cs.ua.edu/index.html", description: "Current fully funded hiring notice ও research interests দেখুন।" },
      { label: "AutMn Trustworthy Autonomy Lab", href: "https://autmn.ua.edu/", description: "Projects, people ও recent research পড়ুন।" },
      { label: "UA graduate research positions", href: "https://cs.ua.edu/research/graduate-positions/", description: "Department-listed AutMn opening verify করুন।" },
      { label: "UA CS graduate admissions", href: "https://cs.ua.edu/graduate/", description: "PhD requirements, GRE guidance ও December 31 funding deadline দেখুন।" },
      { label: "UA assistantship benefits FAQ", href: "https://graduate.ua.edu/students/assistantship-faq/", description: "FTE অনুযায়ী tuition, insurance ও fee coverage বুঝুন।" },
    ],
  },
  {
    slug: "siu-mobile-distributed-systems-phd-2027",
    country: "usa",
    university: "Southern Illinois University Carbondale",
    title: "SIU Mobile Distributed Computing Lab: Funded PhD Guide",
    summary:
      "Professor Sayed Chhattan Shah-এর mobile distributed systems, edge computing, IoT ও healthcare digital twins research-এর contact-first PhD roadmap।",
    label: "Email first · Fall 2027 not confirmed",
    funding:
      "The published Fall 2026 lab position was fully funded; a new Fall 2027 funded seat and its exact package must be confirmed directly.",
    duration: "Usually 4–6 years · Fall entry",
    audience:
      "Applicants with distributed systems, cloud/edge, IoT, networking, backend systems, ML systems or healthcare technology experience",
    realityCheck:
      "MDC Lab positions page এখনও opportunity দেখালেও linked announcement Fall 2026-এর। August 2026-এ এটিকে confirmed Fall 2027 opening বলা যাবে না। প্রথম action হলো Professor Shah-কে CV, motivation letter ও research proposal দিয়ে 2027 availability জিজ্ঞাসা করা; positive reply-এর পর SIU application করুন।",
    highlights: [
      "Professor Shah SIU Assistant Professor এবং Mobile Distributed Computing Lab-এর Director; official email sayedchhattan.shah@siu.edu।",
      "Current work private edge-cloud middleware, dynamic compute/network resource management, healthcare digital twins এবং AI/IoT systems নিয়ে।",
      "Recent lab publications include 2026 healthcare IoT intrusion detection, colorectal digital twin, NephroTwin এবং AI at the Edge work।",
      "Published position baseline: related master's with at least 3.25/4.0, GRE required with minimum 300, and English evidence for international applicants।",
      "SIU Computer Science PhD Fall deadline December 31; program requires GRE and normally a relevant master's, with exceptional bachelor's-only admission possible।",
    ],
    fit: [
      "Cloud/backend/distributed systems বা resource scheduling নিয়ে implementation experience আছে।",
      "IoT, mobile/wireless, edge computing বা fault-tolerant infrastructure-এ research করতে চান।",
      "Healthcare systems experienceকে digital-twin data platform বা edge analytics-এর সঙ্গে connect করতে পারেন।",
      "Master's GPA, GRE এবং English requirements সময়মতো পূরণ করতে পারবেন।",
    ],
    quickStart: [
      "Fall 2027 seat ও funding available কি না Professor Shah-কে official SIU email-এ জিজ্ঞাসা করুন।",
      "CV-এর সঙ্গে 1-page motivation letter এবং 2-page focused research proposal প্রস্তুত করুন।",
      "GRE 300 floor-কে target নয়—competitive score-এর জন্য দ্রুত diagnostic test নিন।",
      "December 31-এর অন্তত 4 সপ্তাহ আগে portal submission complete করার plan করুন।",
    ],
    steps: [
      {
        title: "MDC Lab-এর জন্য research direction বাছুন",
        timing: "এখনই · 1 সপ্তাহ",
        description:
          "Edge systems এবং healthcare digital twins—দুটোই broad; একটি primary systems question বাছাই করুন।",
        actions: [
          "Private edge cloud project-এর workload placement, network adaptation, resilience বা resource orchestration থেকে একটি problem নিন।",
          "Healthcare direction হলে NephroTwin/colorectal twin-এ data ingestion, privacy, fault tolerance বা edge inference focus করুন।",
          "নিজের software/backend/IoT evidence proposal-এর method-এর সঙ্গে map করুন।",
          "Lab-এর recent publications থেকে 3টি directly relevant source cite করুন।",
        ],
        readyWhen:
          "Research proposal mobile distributed systems-এর core contribution পরিষ্কার করে, শুধু healthcare application নয়।",
      },
      {
        title: "2027 availability confirm করুন",
        timing: "Application fee দেওয়ার আগে",
        description:
          "Fall 2026 advertisement stale হতে পারে; written confirmation ছাড়া opening active ধরে নেবেন না।",
        actions: [
          "Email subject-এ Prospective Fall 2027 PhD এবং chosen topic লিখুন।",
          "CV, motivation letter ও research proposal attach করুন—position notice-এর requested package অনুসরণ করে।",
          "Email-এ funded seat, preferred start term এবং application timing সরাসরি জিজ্ঞাসা করুন।",
          "7–10 business days পরে একবার follow-up; reply না এলে SIU-কে backup application হিসেবে মূল্যায়ন করুন।",
        ],
        readyWhen:
          "Professor Fall 2027 supervision/funding status লিখিতভাবে জানিয়েছেন।",
      },
      {
        title: "Tests ও SIU application complete করুন",
        timing: "September–November 2026",
        description:
          "Lab shortlist-এর পর university PhD eligibility ও deadline independently পূরণ করতে হবে।",
        actions: [
          "Relevant master's এবং minimum 3.25 GPA evidence official transcript-এ verify করুন।",
          "GRE এবং TOEFL/IELTS score valid ও official delivery-ready রাখুন; SIU general English baseline TOEFL iBT 80 বা IELTS 6.5।",
          "SOP, publications, work experience ও three strong recommendations দিয়ে scholarly potential দেখান।",
          "$65 application fee এবং December 31 deadline current portal-এ পুনরায় check করুন।",
        ],
        readyWhen:
          "Complete PhD file deadline-এর আগে submitted এবং scores/references received।",
      },
      {
        title: "Funding package audit করুন",
        timing: "Selection ও offer stage",
        description:
          "Department assistantship baseline ও specific MDC offer একই নাও হতে পারে।",
        actions: [
          "RA versus TA, appointment percentage, annual stipend এবং number of funded years লিখিতভাবে নিন।",
          "Tuition waiver-এর বাইরে fees, health insurance ও summer months cover হয় কি না জিজ্ঞাসা করুন।",
          "Department page-এর generic half-time assistantship figureকে offer guarantee হিসেবে ব্যবহার করবেন না।",
          "Carbondale living cost ও one-time relocation/visa expenses দিয়ে net budget বানান।",
        ],
        readyWhen:
          "Formal offer-এ stipend, waiver, duties, renewal এবং uncovered costs clear।",
      },
    ],
    checklist: [
      "Fall 2027 availability email", "Academic CV", "Motivation letter", "Focused research proposal",
      "Relevant master's and 3.25 GPA evidence", "GRE score", "TOEFL/IELTS evidence",
      "Degree and transcripts", "Statement of Purpose", "Recommendation letters",
      "Publications/work samples", "Complete SIU application by December 31", "Written funding terms",
    ],
    afterSubmission: [
      "Interview-এ distributed-system trade-offs, prior implementation এবং proposal methodology defend করুন।",
      "Professor reply ও Graduate School application status আলাদাভাবে track করুন।",
      "Offer পেলে summer support, health insurance ও student fees explicitly clarify করুন।",
    ],
    cautions: [
      "Public announcement Fall 2026-এর; Fall 2027 recruitment confirmed নয়।",
      "Positions page live থাকা মানেই seat এখনও vacant নয়।",
      "Published minimum GRE 300 eligibility floor; competitive selection score/profile আরও শক্ত হতে পারে।",
      "Lab contact admission এবং formal assistantship offer replace করে না।",
    ],
    officialLinks: [
      { label: "SIU faculty profile", href: "https://faculty.siu.edu/profiles/q-s/shah-sayed-chhattan.php", description: "Title, official email ও research areas verify করুন।" },
      { label: "MDC Lab", href: "https://mdclab.info/", description: "Lab topics, current research ও contact দেখুন।" },
      { label: "MDC Lab positions", href: "https://mdclab.info/positions.php", description: "Position notice live কি না check করুন; intake year অবশ্যই পড়ুন।" },
      { label: "MDC current research", href: "https://mdclab.info/research.php", description: "Private edge cloud ও healthcare digital-twin projects পড়ুন।" },
      { label: "SIU CS graduate catalog", href: "https://gradcatalog.siu.edu/programs/cs/", description: "PhD degree, GPA, GRE ও selection requirements দেখুন।" },
      { label: "SIU graduate programs", href: "https://siu.edu/admissions/graduate/academics/", description: "Current fee, test ও December 31 deadline verify করুন।" },
    ],
  },
  {
    slug: "umbc-haibin-zhang-cloud-security-phd-2027",
    country: "usa",
    university: "University of Maryland, Baltimore County",
    title: "UMBC Cloud Security & Distributed Systems: Funded PhD Guide",
    summary:
      "Professor Haibin Zhang-এর multiple funded PhD notice থেকে secure cloud, fault-tolerant distributed systems ও CPS security-focused Fall 2027 application plan।",
    label: "Public opening · Date must be confirmed",
    funding:
      "Professor Zhang advertises multiple fully funded PhD openings; project, stipend, duration and Fall 2027 availability require written confirmation.",
    duration: "Usually 4–6 years · Fall 2027 target",
    audience:
      "Applicants with cloud/backend infrastructure, distributed systems, cybersecurity, cryptography, blockchain or cyber-physical systems experience",
    realityCheck:
      "Professor Zhang-এর official UMBC-hosted page multiple fully funded PhD openings বলে, কিন্তু notice-এর publication date নেই। তাই opportunityটি credible public lead হলেও Fall 2027 seat নিশ্চিত নয়। Email confirmation, professor interview এবং complete UMBC PhD application—সবগুলো আলাদা ধাপ।",
    highlights: [
      "Possible projects include cloud computing/security, OpenStack Keystone/Nova/Neutron, permissioned blockchain এবং CPS privacy/fault tolerance।",
      "Professor-এর research cloud security, applied cryptography, privacy, Byzantine fault tolerance ও distributed systems জুড়ে।",
      "BChain, CBFT, CP-BFT ও BEAT-এর মতো BFT systems/protocols তাঁর research portfolio-র অংশ।",
      "Fall international/funding deadline January 7; complete application-এর জন্য three recommendations, SOP, transcripts, GRE এবং English evidence প্রয়োজন।",
      "Departmental financial support চাইলে GRE নেওয়া উচিত/required; current FAQ English minimum TOEFL 80, IELTS 6.5 বা Duolingo 105 বলে।",
    ],
    fit: [
      "Cloud or enterprise backend systems-এর reliability/security problem নিয়ে কাজ করেছেন।",
      "Distributed consensus, fault tolerance, secure storage বা infrastructure security শিখতে চান।",
      "Industrial/healthcare CPS থেকে privacy ও resilient backend research story তৈরি করতে পারেন।",
      "January 7-এর আগে GRE, English score ও complete application প্রস্তুত করতে পারবেন।",
    ],
    quickStart: [
      "Professor Zhang-কে hbzhang@umbc.edu-তে Fall 2027 seat ও project availability জিজ্ঞাসা করুন।",
      "Blockchain-কে default topic না বানিয়ে secure/fault-tolerant cloud infrastructure-এর strongest evidence lead করুন।",
      "GRE funding-এর জন্য গুরুত্বপূর্ণ—test date ও score-delivery buffer এখনই ঠিক করুন।",
      "January 7 deadline-এর জন্য December 2026-এর মধ্যে all recommendations complete target করুন।",
    ],
    steps: [
      {
        title: "Research story narrow করুন",
        timing: "এখনই · 1 সপ্তাহ",
        description:
          "Cloud security, blockchain ও CPS—সব এক email-এ নয়; একটি coherent systems-security direction বাছুন।",
        actions: [
          "নিজের backend/cloud/industrial system থেকে একটি threat, fault বা trust problem নির্ধারণ করুন।",
          "Professor Zhang-এর relevant BFT/cloud/CPS work পড়ুন এবং দুইটি concrete connection লিখুন।",
          "Target direction হিসেবে secure and fault-tolerant cloud/backend infrastructure বিবেচনা করুন।",
          "Proposal sketch-এ threat model, system assumptions, method ও evaluation plan দিন।",
        ],
        readyWhen:
          "এক paragraph-এ problem, prior evidence এবং Zhang-group fit স্পষ্ট।",
      },
      {
        title: "Funded opening confirm করুন",
        timing: "August–September 2026",
        description:
          "Date-less web notice থেকে Fall 2027 funding infer না করে professor-এর current reply নিন।",
        actions: [
          "Concise subject-এ Fall 2027 PhD এবং secure distributed systems topic লিখুন।",
          "CV, publications/technical work এবং 1-page research-interest note attach করুন।",
          "Current funded projects, expected student background এবং Fall 2027 availability জিজ্ঞাসা করুন।",
          "Response-এ application করার নির্দেশ থাকলে reply/meeting notes save করুন।",
        ],
        readyWhen:
          "Professor current project/seat সম্পর্কে usable guidance দিয়েছেন।",
      },
      {
        title: "UMBC requirements complete করুন",
        timing: "September–December 2026",
        description:
          "Funded PhD applicant হিসেবে GRE waiver assume করা নিরাপদ নয়।",
        actions: [
          "GRE General এবং TOEFL/IELTS/Duolingo current minimum ও score validity verify করুন।",
          "Official transcripts, three recommendations, SOP ও CV portal-ready করুন।",
          "SOP-তে systems preparation, publications/industry evidence এবং UMBC faculty fit দিন।",
          "January 7-এর কয়েক দিন আগে complete status verify করুন—upload করাই complete নয়।",
        ],
        readyWhen:
          "Portal file, scores এবং তিন recommendation deadline-এর আগে received।",
      },
      {
        title: "Interview ও funding terms যাচাই করুন",
        timing: "After contact/application",
        description:
          "Multiple openings-এর প্রতিটি project ও funding source-এর conditions ভিন্ন হতে পারে।",
        actions: [
          "Distributed systems fundamentals, fault model, security assumptions ও prior project architecture revise করুন।",
          "Interview-এ নিজের contribution এবং failed/changed design decisions explain করুন।",
          "Offer-এ RA/TA source, stipend, tuition remission, health insurance, summer ও renewal conditions পড়ুন।",
          "Baltimore-area living cost দিয়ে net monthly budget তৈরি করুন।",
        ],
        readyWhen:
          "Research supervision এবং full financial package দুইটিই written documents-এ acceptable।",
      },
    ],
    checklist: [
      "Fall 2027 availability confirmation", "Tailored professor email", "Academic CV",
      "Research-interest note", "GRE score for funding consideration", "English score",
      "Official transcripts", "Statement of Purpose", "Three recommendation letters",
      "Publications or technical portfolio", "Complete application by January 7", "Written funding package",
    ],
    afterSubmission: [
      "Professor communication, department review এবং Graduate School portal আলাদা করে monitor করুন।",
      "Interview-এর আগে one systems paper critique এবং one proposed experiment প্রস্তুত রাখুন।",
      "Funding offer-এ summer ও health-insurance coverage missing হলে acceptance-এর আগে জিজ্ঞাসা করুন।",
    ],
    cautions: [
      "Opening notice-এ date নেই; Fall 2027 availability email-এ confirm করতে হবে।",
      "Professor interest admission বা assistantship guarantee নয়।",
      "Funded applicant হিসেবে GRE waiver ধরে application করবেন না।",
      "একই নামের Google Scholar profile verify না হলে official webpage/CV publication list ব্যবহার করুন।",
    ],
    officialLinks: [
      { label: "Haibin Zhang academic page", href: "https://userpages.cs.umbc.edu/hbzhang/", description: "Multiple funded openings, email ও research projects দেখুন।" },
      { label: "UMBC Computer Science PhD", href: "https://umbc.edu/academics/programs/graduate/computer-science-electrical-engineering/computer-science-phd/", description: "January 7 deadline ও degree requirements verify করুন।" },
      { label: "UMBC CSEE graduate programs", href: "https://www.csee.umbc.edu/graduate/", description: "Documents, assistantships ও faculty-contact guidance পড়ুন।" },
      { label: "UMBC CS graduate FAQ", href: "https://www.csee.umbc.edu/comp-sci-grad-faq/", description: "GRE-for-funding এবং English minimum requirements দেখুন।" },
    ],
  },
  {
    slug: "iowa-state-cs-phd-fall-2027",
    country: "usa",
    university: "Iowa State University",
    title: "Iowa State Computer Science PhD: Free Application, Two Faculty Matches",
    summary:
      "বিনামূল্যে PhD application, automatic fee waiver, এবং Dr. Amit Sikder ও Dr. Liyi Li-এর research-এর সঙ্গে strong background match।",
    label: "Free application \u00b7 Fall 2027",
    funding:
      "Admitted PhD students সাধারণত প্রথম দুই বছর teaching assistantship পান\u2014100% tuition waiver, individual health insurance এবং monthly stipend সহ; পরের বছরগুলোতে সাধারণত research assistantship।",
    duration: "Usually 4\u20136 years \u00b7 Fall entry",
    audience:
      "AI, IoT security, computer vision, program analysis, formal methods বা software reliability-তে আগ্রহী applicants যাদের industry বা research experience আছে",
    realityCheck:
      "Application-এ কমপক্ষে তিনজন faculty-র নাম দিতে হয়; কোনো professor-এর page-এ সরাসরি \u2018accepting PhD students\u2019 লেখা নেই। Professor-এর ইতিবাচক reply admission guarantee নয়\u2014major-professor match ছাড়া offer দেওয়া হয় না। Email পাঠানোর আগে official faculty page থেকে email ও research verify করুন।",
    highlights: [
      "PhD application সম্পূর্ণ free; fee waiver automatically apply হয়\u2014department-এর official application-requirements page অনুযায়ী।",
      "Fall 2027 submission deadline December 15, 2026; recommendation letter-সহ সব document January 10, 2027-এর মধ্যে সম্পূর্ণ করতে হবে।",
      "Application-এ কমপক্ষে তিনজন faculty-র নাম দিতে হয়; department note করে AI/ML-এ high demand, তাই অন্তত একজন different area-র faculty দিলে admission chance বাড়ে।",
      "Funding: সাধারণত প্রথম দুই বছর teaching assistantship (50%, সপ্তাহে ২০ ঘণ্টা), তারপর research assistantship\u2014100% tuition waiver, individual health insurance ও monthly stipend সহ।",
      "Dr. Amit Kumar Sikder (aksikder@iastate.edu): system forensics, AI ও program analysis-এর intersection-এ কাজ করেন; research USENIX Security, ACM CCS, NDSS-এর মতো venue-তে published।",
      "Dr. Liyi Li (liyili2@iastate.edu): formal methods ও programming-language tools দিয়ে software security, reliability ও verification নিয়ে কাজ করেন; NSF-funded compiler-verification project পরিচালনা করছেন এবং নিজের page-এ PhD student mentor করার আগ্রহ উল্লেখ করেছেন।",
    ],
    fit: [
      "আপনার publication, M.Sc. research এবং Japan-এর industrial software-engineering experience আছে।",
      "Python, C#, computer vision, database, automation বা industrial AI নিয়ে হাতে-কলমে কাজ করেছেন।",
      "AI-assisted system analysis, IoT security, program analysis বা software reliability/verification নিয়ে একটি research question তৈরি করতে পারেন।",
      "একাধিক faculty-কে personalized, evidence-based contact email পাঠানোর জন্য প্রস্তুত।",
    ],
    quickStart: [
      "Dr. Sikder ও Dr. Li-কে আলাদা personalized email পাঠান\u2014আপনার Python/C#, computer vision, IoT ও industrial-system experience তাঁদের বর্তমান research-এর সঙ্গে সরাসরি connect করে।",
      "তৃতীয় faculty member বাছুন\u2014cybersecurity, systems বা software engineering-এর অন্য কেউ, যাতে application-এর \u2018at least three faculty\u2019 requirement পূরণ হয়।",
      "December 15, 2026 এবং January 10, 2027\u2014দুটো deadline আজই calendar-এ যোগ করুন।",
      "Research Statement draft শুরু করুন\u2014maximum 2 pages, তাই প্রথম থেকেই একটি focused প্রশ্নে স্থির থাকুন।",
    ],
    steps: [
      {
        title: "দুই faculty-কে personalized email পাঠান",
        timing: "এখনই \u00b7 application submit করার আগে",
        description:
          "Cold email-কে persuasive করে তোলে specific, recent research reference\u2014generic interest নয়।",
        actions: [
          "Subject line-এ \u2018Prospective Fall 2027 PhD Student\u2019 এবং আপনার research direction স্পষ্ট রাখুন।",
          "Sikder-কে email-এ system forensics, program analysis ও IoT/device security-এর সঙ্গে আপনার computer-vision ও industrial-system experience connect করুন।",
          "Li-কে email-এ নিজেকে formal-methods expert দাবি না করে\u2014industry software-এর reliability সমস্যা দেখে verification/analysis নিয়ে আগ্রহ তৈরি হয়েছে, এই honest story বলুন।",
          "দুই email-এই CV attach করুন এবং Fall 2027-এ নতুন PhD student নেওয়ার সম্ভাবনা সরাসরি জিজ্ঞাসা করুন।",
          "7\u201310 কর্মদিবস পরে একবার ভদ্র follow-up করুন; reply না এলেও application submit করুন।",
        ],
        readyWhen:
          "দুই professor-কেই email করা হয়েছে, অথবা follow-up-সহ একটি documented contact attempt সম্পন্ন হয়েছে।",
      },
      {
        title: "তৃতীয় faculty ও research direction চূড়ান্ত করুন",
        timing: "Email পাঠানোর সপ্তাহেই",
        description:
          "শুধু AI/ML area-তে সব নাম দিলে competition বেশি\u2014department নিজেই ভিন্ন area যোগ করার পরামর্শ দেয়।",
        actions: [
          "Systems, cybersecurity বা software-engineering focus-এর আরও একজন Iowa State CS faculty শনাক্ত করুন।",
          "তাঁর ২\u20133টি recent paper বা project পড়ে আপনার experience-এর সঙ্গে genuine connection আছে কিনা যাচাই করুন।",
          "তিনজন faculty-র নাম ও one-line rationale আলাদা নোটে লিখে রাখুন\u2014application form-এ সরাসরি ব্যবহারের জন্য।",
        ],
        readyWhen:
          "তিনজন faculty-র নাম এবং প্রতিটির জন্য একটি evidence-based rationale প্রস্তুত।",
      },
      {
        title: "Application সম্পূর্ণ করে submit করুন",
        timing: "এখন থেকে December 15, 2026",
        description:
          "Application free হলেও document প্রস্তুতিতে সময় লাগে\u2014বিশেষত ২ পাতার Research Statement।",
        actions: [
          "Online graduate application, CV, Statement of Purpose ও 2-page Research Statement প্রস্তুত করুন।",
          "সব institution-এর unofficial transcript এবং degree certificate/statement সংগ্রহ করুন।",
          "তিনজন recommender-কে সময়মতো request পাঠান যাতে তাঁরা January 10, 2027-এর আগে submit করতে পারেন।",
          "International applicant হলে English-language test score আগে থেকেই ready রাখুন; GRE optional মনে রাখুন।",
        ],
        readyWhen:
          "December 15, 2026-এর আগে application submitted, এবং recommendation letter-সহ সব document January 10, 2027-এর মধ্যে complete।",
      },
      {
        title: "Funding package verify করুন",
        timing: "Offer পাওয়ার পর",
        description:
          "Department-এর general funding structure ও আপনার নির্দিষ্ট offer এক নাও হতে পারে।",
        actions: [
          "TA বনাম RA, প্রথম assignment কবে শুরু, এবং কত বছর TA থাকবে\u2014এসব লিখিতভাবে নিশ্চিত করুন।",
          "Tuition waiver percentage, monthly stipend amount এবং health-insurance coverage স্পষ্টভাবে জিজ্ঞাসা করুন।",
          "Summer funding ও major-professor confirmation offer letter-এ আছে কিনা যাচাই করুন।",
        ],
        readyWhen:
          "Formal offer letter-এ TA/RA years, tuition waiver, stipend ও health insurance স্পষ্ট।",
      },
    ],
    checklist: [
      "Online graduate application", "CV/r\u00e9sum\u00e9", "Statement of Purpose",
      "Research Statement (2 pages max)", "Unofficial transcripts (all institutions)",
      "Degree certificate / degree statement", "Three recommendation letters",
      "English-language test scores (international applicants)",
      "At least three named faculty interests", "GRE (optional)",
    ],
    afterSubmission: [
      "Professor reply ও Graduate College application status আলাদাভাবে track করুন।",
      "Major-professor match না হওয়া পর্যন্ত admission offer আসবে না\u2014ধৈর্য ধরে follow up করুন।",
      "Offer পেলে TA/RA years, stipend amount, tuition waiver ও health-insurance coverage লিখিতভাবে confirm করুন।",
    ],
    cautions: [
      "কোনো professor-এর page-এ সরাসরি \u2018accepting new PhD students\u2019 লেখা নেই\u2014email-এ availability সরাসরি জিজ্ঞাসা করুন।",
      "নিজেকে formal methods বা cybersecurity expert হিসেবে দাবি করবেন না\u2014industry experience থেকে research আগ্রহ তৈরি হয়েছে, এই honest framing বেশি বিশ্বাসযোগ্য।",
      "Professor-এর positive reply university admission guarantee নয়; Graduate College admission ও major-professor match\u2014দুটোই দরকার।",
      "শুধু AI/ML area-র faculty না দিয়ে অন্তত একজন ভিন্ন area-র (যেমন software engineering) faculty যোগ করুন\u2014department নিজেই এই পরামর্শ দেয়।",
    ],
    officialLinks: [
      { label: "PhD Application Requirements", href: "https://www.cs.iastate.edu/graduate-studies/phd-application-requirements", description: "Deadline, fee waiver, documents ও faculty-naming requirement verify করুন।" },
      { label: "Dr. Amit Kumar Sikder faculty profile", href: "https://www.cs.iastate.edu/people/amit-kumar-sikder", description: "Research interests ও official email verify করুন।" },
      { label: "Dr. Liyi Li faculty profile", href: "https://www.cs.iastate.edu/people/liyi-li", description: "Research interests ও official email verify করুন।" },
      { label: "Ph.D. in Computer Science overview", href: "https://www.cs.iastate.edu/graduate-studies/phd-computer-science", description: "Program overview দেখুন।" },
      { label: "Graduate studies FAQ", href: "https://www.cs.iastate.edu/graduate-studies/faq-prospective-graduate-students", description: "Funding, TA/RA structure ও stipend details দেখুন।" },
    ],
    reviewedAt: "August 17, 2026",
  },
  {
    slug: "oregon-distopia-distributed-systems-phd-2027",
    country: "usa",
    university: "University of Oregon",
    title: "Oregon Distopia Lab: Distributed Systems & Databases PhD Guide",
    summary:
      "Professor Suyash Gupta-এর distributed databases, fault-tolerant systems ও blockchain research-এর সঙ্গে backend/database experience-এর contact-first PhD roadmap।",
    label: "Email before applying \u00b7 Fall 2027",
    funding:
      "Graduate Employee (GE) appointment: 100% tuition waiver (up to 16 credits/term), mandatory-fee subsidy, 95% health-insurance premium coverage ও monthly stipend। 2025\u201326 published minimum: 0.25 FTE \u2248 $1,434/month, 0.40 FTE \u2248 $2,295/month, 0.49 FTE \u2248 $2,811/month; rates বছর বছর negotiated হয়।",
    duration: "Usually 4\u20136 years \u00b7 Fall entry",
    audience:
      "Backend/database systems, distributed computing, cloud infrastructure বা fault-tolerance-focused experience থাকা applicants",
    realityCheck:
      "Application fee-free নয়\u2014domestic $70, international $90। Professor Gupta-এর page-এ সরাসরি \u2018accepting Fall 2027 students\u2019 লেখা নেই, তাই fee দেওয়ার আগে email-এ reply পাওয়া বা অন্তত একটি documented contact attempt শেষ করা উচিত। আগে prioritize করা Iowa State (free application)-এর তুলনায় এটি একটি ধাপ পরে রাখা যুক্তিসঙ্গত, যদি না professor ইতিবাচক reply দেন।",
    highlights: [
      "Distopia Laboratory ও Oregon Networking Research Group (ONRG)-এর director; distributed databases, fault tolerance, blockchain ও decentralized storage নিয়ে কাজ করেন।",
      "Recent work: Picsou (OSDI 2025), HotStuff-1 (SIGMOD 2025), Samurai decentralized storage (OSDI 2025), ServerlessBFT, ResilientDB\u2014সব top-tier systems venue-তে।",
      "Stellar Academic Grant (Nov 2025) ও ThetaEdge Cloud Grant (Oct 2024) সহ সক্রিয় funded lab activity।",
      "Fall 2027 deadline December 15, 2026; Spring 2027 deadline September 30, 2026\u2014department-এর official apply page থেকে verified।",
      "GRE international/non-English-degree applicant-দের জন্য required (Verbal 153+, Quant 154+, Analytical 3.0+); CV ও writing sample officially optional কিন্তু submit করা উচিত।",
    ],
    fit: [
      "C#/Oracle বা database-driven backend system develop করেছেন।",
      "Production software reliability, integration (cameras/PLC/robots) বা system testing-এর হাতে-কলমে অভিজ্ঞতা আছে।",
      "Distributed/fault-tolerant backend architecture নিয়ে research question তৈরি করতে পারেন, prior consensus/blockchain research দাবি না করে।",
      "$70\u2013$90 application fee দেওয়ার আগে professor-এর reply অপেক্ষা করতে ইচ্ছুক।",
    ],
    quickStart: [
      "Professor Gupta-কে (suyash@uoregon.edu) personalized email পাঠান\u2014Picsou/HotStuff-1/ResilientDB-এর সঙ্গে আপনার backend/database experience connect করে।",
      "GRE প্রয়োজন কিনা নিজের profile অনুযায়ী নিশ্চিত করুন (non-English-degree international applicant হিসেবে সাধারণত required)।",
      "December 15, 2026 (Fall 2027) deadline calendar-এ যোগ করুন।",
      "Reply এলে বা না এলেও\u2014documented attempt-এর পর application fee দেওয়ার সিদ্ধান্ত নিন।",
    ],
    steps: [
      {
        title: "Professor Gupta-কে email পাঠান",
        timing: "এখনই \u00b7 fee দেওয়ার আগে",
        description:
          "Fee-free নয় বলে reply বা documented attempt ছাড়া application submit না করাই ভালো।",
        actions: [
          "Subject-এ \u2018Prospective Fall 2027 PhD Student\u2019 এবং distributed/fault-tolerant systems লিখুন।",
          "Body-তে ResilientDB/Picsou/HotStuff-1-এর নির্দিষ্ট reference দিন এবং আপনার Oracle/C# backend, database ও production-reliability experience connect করুন।",
          "Blockchain/consensus expert দাবি না করে\u2014industrial backend system-এর reliability সমস্যা থেকে আগ্রহ তৈরি হয়েছে, এই honest framing ব্যবহার করুন।",
          "CV attach করুন এবং Fall 2027 PhD student নেওয়ার সম্ভাবনা সরাসরি জিজ্ঞাসা করুন।",
        ],
        readyWhen:
          "Professor-এর কাছ থেকে reply এসেছে, অথবা 7\u201310 দিনের follow-up-সহ একটি documented attempt সম্পন্ন হয়েছে।",
      },
      {
        title: "GRE ও prerequisite verify করুন",
        timing: "Email পাঠানোর সপ্তাহে",
        description:
          "Department programming, data structures, algorithm analysis, OS ও computer-organization background expect করে।",
        actions: [
          "International/non-English-degree applicant হিসেবে GRE (Verbal 153+, Quant 154+, Analytical 3.0+) প্রয়োজন কিনা নিশ্চিত করুন।",
          "3.5+ GPA preferred কিন্তু absolute cutoff নয়\u2014এই framing SOP-তে address করুন।",
          "Prerequisite gap থাকলে SOP-তে industrial programming experience দিয়ে equivalent preparation দেখান।",
        ],
        readyWhen:
          "GRE decision নেওয়া হয়েছে এবং core prerequisite gap-এর জন্য SOP-এর explanation প্রস্তুত।",
      },
      {
        title: "Application সম্পূর্ণ করুন",
        timing: "এখন থেকে December 15, 2026",
        description:
          "Slate portal-এর মাধ্যমে official application submit করতে হয়।",
        actions: [
          "Personal statement, transcripts এবং recommender contact information প্রস্তুত করুন।",
          "CV ও writing sample officially optional হলেও দুটোই submit করুন।",
          "$70 (domestic) বা $90 (international) application fee দেওয়ার আগে reply/attempt নিশ্চিত করুন।",
        ],
        readyWhen:
          "December 15, 2026-এর আগে সব document ও fee-সহ application submitted।",
      },
      {
        title: "GE appointment package verify করুন",
        timing: "Offer পাওয়ার পর",
        description:
          "FTE percentage অনুযায়ী stipend ও coverage পরিবর্তিত হয়\u2014exact tier লিখিতভাবে নিন।",
        actions: [
          "0.25 / 0.40 / 0.49 FTE\u2014কোনটি offer করা হচ্ছে এবং monthly stipend amount নিশ্চিত করুন।",
          "Tuition waiver (16 credits পর্যন্ত), mandatory-fee subsidy ও 95% health-insurance coverage-এর বাইরে student-এর নিজের কী দিতে হবে (যেমন $61/term fee) জিজ্ঞাসা করুন।",
          "Guaranteed years ও summer funding সম্পর্কে লিখিতভাবে জিজ্ঞাসা করুন।",
        ],
        readyWhen:
          "Offer letter-এ FTE tier, stipend amount, tuition/fee coverage ও guaranteed years স্পষ্ট।",
      },
    ],
    checklist: [
      "Professor contact email", "Online graduate application", "Personal Statement",
      "Unofficial transcripts", "Recommender contact information", "CV/r\u00e9sum\u00e9 (optional but recommended)",
      "Writing sample (optional but recommended)", "GRE scores (if required)",
      "English-proficiency test (if required)", "$70/$90 application fee",
    ],
    afterSubmission: [
      "Professor reply ও Slate application status আলাদাভাবে track করুন।",
      "Interview হলে ResilientDB/HotStuff-1-family research নিয়ে informed প্রশ্ন প্রস্তুত রাখুন।",
      "Offer পেলে FTE tier, stipend ও coverage লিখিতভাবে confirm করার আগে accept করবেন না।",
    ],
    cautions: [
      "Application fee-free নয়\u2014$70 (domestic) / $90 (international); reply ছাড়া submit করার আগে দুবার ভাবুন।",
      "Professor-এর page-এ সরাসরি \u2018accepting students\u2019 লেখা নেই।",
      "নিজেকে blockchain/consensus expert দাবি করবেন না\u2014backend reliability experience থেকে আগ্রহ তৈরি হয়েছে বলুন।",
      "GE stipend rate বছর বছর পরিবর্তিত হয়; পুরনো published figure দিয়ে বাজেট চূড়ান্ত করবেন না।",
    ],
    officialLinks: [
      { label: "CS Graduate Admissions (Oregon)", href: "https://scds.uoregon.edu/cs/apply/graduate-admissions", description: "Deadline, fee, documents ও GRE requirement verify করুন।" },
      { label: "Suyash Gupta faculty directory", href: "https://cas.uoregon.edu/directory/computer-science-faculty/all/suyash", description: "Official email ও affiliation verify করুন।" },
      { label: "Suyash Gupta research webpage", href: "https://gupta-suyash.github.io/", description: "Distopia Lab research, publications ও current projects দেখুন।" },
      { label: "Ph.D. in Computer Science overview", href: "https://scds.uoregon.edu/cs/graduate-programs/cs-phd", description: "Program overview দেখুন।" },
    ],
    reviewedAt: "August 17, 2026",
  },
  {
    slug: "kennesaw-state-edge-intelligence-phd-2027",
    country: "usa",
    university: "Kennesaw State University",
    title: "KSU Edge Intelligence Lab: Funded AIoT/Healthcare AI PhD Guide",
    summary:
      "Professor Liang Zhao-এর edge computing, AIoT ও AI-driven healthcare lab-এ সরাসরি recruiting notice-ভিত্তিক PhD roadmap।",
    label: "Actively recruiting \u00b7 check current intake",
    funding:
      "Admitted full-time students সাধারণত GRA/GTA appointment পান\u2014tuition waiver ও monthly stipend সহ, program-এর মেয়াদ জুড়ে (funding availability-নির্ভর)। Assistantship পেলে regular tuition-এর বদলে semester-প্রতি $25 special rate।",
    duration: "Usually 4 years (full-time) \u00b7 Fall/Spring entry",
    audience:
      "AI, computer vision, IoT, embedded systems, healthcare technology বা industrial-automation background থাকা applicants with strong Python",
    realityCheck:
      "Professor Zhao-এর lab position notice specifically Spring 2027 intake-এর কথা বলেছিল, যার university deadline ছিল August 1, 2026\u2014এই date ইতিমধ্যে পার হয়ে গেছে। তাই এখন professor-কে সরাসরি ইমেইল করে Fall 2027 (regular deadline February 1)-এর জন্য same funded position available কিনা জিজ্ঞাসা করাই সঠিক পথ, Spring 2027-এর জন্য নতুন apply করা নয়।",
    highlights: [
      "Edge Intelligence Research Laboratory-এর director; edge computing, federated learning, embedded AI, cybersecurity, IoT/CPS এবং AI-driven healthcare নিয়ে কাজ করেন।",
      "Recent work: edge devices-এ LLM deployment, healthcare IoT-এর জন্য privacy-preserving federated learning, spiking neural networks, connected-vehicle federated analytics।",
      "Application fee $60 (KSU-এর official doctoral-program page অনুযায়ী verified\u2014কিছু third-party listing ভুলভাবে $0 বলে, official page-কেই authority ধরুন)।",
      "Fall admission-এর নিয়মিত deadline February 1; Spring intake deadline সাধারণত আগের বছরের August 1।",
      "Initial lab contact-এর জন্য CV, transcripts ও brief research statement একটি PDF-এ lzhao10@kennesaw.edu-তে পাঠাতে বলা হয়েছে।",
    ],
    fit: [
      "Python-এ strong এবং C/C++ familiarity আছে (expert-level দাবি না করে honest রাখুন)।",
      "Computer vision (YOLO, CNN/RCNN, OpenCV, OCR), healthcare IoT বা industrial camera/PLC/robot integration-এর experience আছে।",
      "Health recommender-system research background-কে AI-driven healthcare বা federated learning-এর সঙ্গে connect করতে পারেন।",
      "Fall 2027-এর জন্য availability সরাসরি জিজ্ঞাসা করতে প্রস্তুত, যেহেতু advertised intake ছিল Spring 2027।",
    ],
    quickStart: [
      "Professor Zhao-কে (lzhao10@kennesaw.edu) email করুন\u2014Spring 2027 deadline পার হয়ে গেছে তাই Fall 2027 availability সরাসরি জিজ্ঞাসা করুন।",
      "Required format মেনে CV, transcripts ও brief research statement একটি PDF-এ প্রস্তুত রাখুন।",
      "February 1 (Fall regular deadline) calendar-এ যোগ করুন।",
      "$60 application fee official page থেকে reconfirm করুন\u2014third-party site-এর ভুল তথ্যে বিভ্রান্ত হবেন না।",
    ],
    steps: [
      {
        title: "Fall 2027 availability সরাসরি জিজ্ঞাসা করুন",
        timing: "এখনই",
        description:
          "Advertised position Spring 2027-এর জন্য ছিল এবং deadline পার হয়ে গেছে; assume না করে সরাসরি জিজ্ঞাসা করুন।",
        actions: [
          "Subject line অনুসরণ করুন কিন্তু term আপডেট করুন: \u2018PhD Application [Fall 2027] \u2013 Halim Md Abdul\u2019।",
          "Body-তে স্পষ্ট করুন যে Spring 2027 announcement দেখেছেন কিন্তু deadline পার হয়ে গেছে, তাই Fall 2027-এর সম্ভাবনা জিজ্ঞাসা করছেন।",
          "CV, transcripts ও brief research statement একটি PDF-এ attach করুন\u2014lab-এর নির্দিষ্ট format অনুসরণ করে।",
          "Healthcare IoT, health recommender research ও industrial AI experience স্পষ্টভাবে উল্লেখ করুন।",
        ],
        readyWhen:
          "Professor Fall 2027 availability সম্পর্কে reply দিয়েছেন, অথবা follow-up-সহ documented attempt সম্পন্ন।",
      },
      {
        title: "University application ও prerequisite verify করুন",
        timing: "Reply পাওয়ার পর",
        description:
          "Lab interest ও formal KSU application\u2014দুটোই দরকার।",
        actions: [
          "Bachelor\u2019s GPA 3.25+ বা graduate degree GPA 3.50+ (M.Sc. দিয়ে যোগ্য) নিশ্চিত করুন।",
          "Calculus II, discrete mathematics ও data structures coursework transcript-এ চিহ্নিত করুন।",
          "TOEFL iBT 80+ বা IELTS 6.5+ ready রাখুন; foreign transcript-এর জন্য NACES/AICE credential evaluation শুরু করুন।",
        ],
        readyWhen:
          "GPA equivalence, prerequisite coursework ও credential-evaluation status স্পষ্ট।",
      },
      {
        title: "Formal application সম্পূর্ণ করুন",
        timing: "Fall regular deadline: February 1",
        description:
          "Online application, $60 fee এবং সব document একসঙ্গে জমা দিতে হবে।",
        actions: [
          "Online graduate application, evaluated transcripts, CV/r\u00e9sum\u00e9, Statement of Purpose ও তিনটি recommendation letter জমা দিন।",
          "$60 non-refundable fee দিন।",
          "GRE optional মনে রেখে decision নিন।",
        ],
        readyWhen:
          "February 1-এর আগে সম্পূর্ণ application, fee ও recommendation letter জমা দেওয়া হয়েছে।",
      },
      {
        title: "GRA/GTA funding package verify করুন",
        timing: "Offer পাওয়ার পর",
        description:
          "Funding \u2018as funds allow\u2019 বলা হয়েছে, তাই guarantee নয়\u2014written offer-এ confirm করুন।",
        actions: [
          "Stipend amount, appointment tier ও কত বছর guaranteed তা লিখিতভাবে নিন।",
          "Health insurance স্বয়ংক্রিয় নয়\u2014SHIP enrollment এবং premium কে বহন করবে তা জিজ্ঞাসা করুন।",
          "$25/semester special tuition rate ও অন্যান্য mandatory fee স্পষ্ট করুন।",
        ],
        readyWhen:
          "Offer letter-এ stipend, tuition rate, health-insurance responsibility ও duration স্পষ্ট।",
      },
    ],
    checklist: [
      "Email to Professor Zhao (PDF: CV + transcripts + research statement)",
      "Online graduate application", "$60 application fee", "Evaluated transcripts",
      "CV/r\u00e9sum\u00e9", "Statement of Purpose", "Three recommendation letters",
      "English-proficiency test (TOEFL 80+ / IELTS 6.5+)", "NACES/AICE credential evaluation",
      "GRE (optional)",
    ],
    afterSubmission: [
      "Lab email reply এবং formal KSU application status আলাদাভাবে track করুন।",
      "GRA/GTA offer-এ health-insurance responsibility স্পষ্ট না থাকলে accept করার আগে জিজ্ঞাসা করুন।",
      "Credential evaluation দেরি হলে application deadline-এর আগে সম্পূর্ণ করার জন্য আলাদা সময় রাখুন।",
    ],
    cautions: [
      "Advertised opening Spring 2027-এর জন্য ছিল এবং deadline (August 1, 2026) ইতিমধ্যে পার হয়ে গেছে\u2014Fall 2027 availability assume করবেন না, সরাসরি জিজ্ঞাসা করুন।",
      "Application fee সম্পর্কে online-এ ভিন্ন ভিন্ন তথ্য পাওয়া যায় ($0 বলা কিছু third-party site ভুল)\u2014official kennesaw.edu page অনুযায়ী $60 সঠিক।",
      "C++ expert দাবি করবেন না; C/C# ও Python experience honestly উপস্থাপন করুন।",
      "Health insurance funding package-এ automatically included নয়।",
    ],
    officialLinks: [
      { label: "Edge Intelligence Research Laboratory (Liang Zhao)", href: "https://facultyweb.kennesaw.edu/lzhao10/index.php", description: "Recruiting notice, research areas ও contact instructions verify করুন।" },
      { label: "KSU PhD in Computer Science", href: "https://www.kennesaw.edu/degrees-programs/doctoral-degrees/computer-science.php", description: "Application fee ও funding statement verify করুন।" },
      { label: "KSU CCSE PhD programs", href: "https://campus.kennesaw.edu/colleges-departments/ccse/degrees-programs/graduate/phd-computer-science/index.php", description: "Program structure ও admission details দেখুন।" },
      { label: "KSU graduate admissions deadlines", href: "https://www.kennesaw.edu/admissions/graduate/application-process/deadlines.php", description: "Fall/Spring exact deadline verify করুন।" },
    ],
    reviewedAt: "August 17, 2026",
  },
  {
    slug: "uconn-riet-lab-ai-safety-phd-2027",
    country: "usa",
    university: "University of Connecticut",
    title: "UConn RIET Lab: Fully Funded AI Safety & Agentic AI PhD Guide",
    summary:
      "Professor Shiri Dori-Hacohen-এর RIET Lab সরাসরি \u2018currently hiring, fully funded\u2019 বলছে\u2014AI safety, generative AI ও agentic-AI systems-এ contact-first PhD roadmap।",
    label: "Actively hiring \u00b7 fully funded \u00b7 Fall 2027",
    funding:
      "RIET Lab-এর official page অনুযায়ী PhD students পুরো study period-এ fully funded থাকবেন (assistantship-এর মাধ্যমে)। College-level funding সাধারণত RA/TA, full tuition coverage, stipend ও health-insurance benefit অন্তর্ভুক্ত করে; নির্দিষ্ট annual stipend amount public page-এ নেই।",
    duration: "Usually 4\u20136 years \u00b7 Fall entry",
    audience:
      "AI safety, LLM evaluation, fairness/bias, misinformation, multi-agent systems বা health-information research-এ আগ্রহী applicants",
    realityCheck:
      "এটি সাধারণ \u2018prospective students welcome\u2019 announcement নয়\u2014lab official page-এ স্পষ্টভাবে \u2018currently hiring\u2019 এবং \u2018fully funded throughout their studies\u2019 লেখা আছে। তবে email-এর জন্য একটি নির্দিষ্ট format required, এবং recommendation letter সরাসরি email-এ attach করলে application disqualified হতে পারে।",
    highlights: [
      "RIET Lab বর্তমানে তিনটি focus area-তে PhD student নিচ্ছে: (1) AI Safety, Generative AI ও Agentic AI Systems, (2) AI Ethics/Bias Mitigation/Fairness, (3) Misinformation ও Social Media (IR/Knowledge Graph techniques)।",
      "Required email subject format: \u2018PhD application: Focus area XX: your-full-name\u2019 (XX = 1, 2, বা 3)\u2014দুই email address-এ একসঙ্গে পাঠাতে হয়: shiridh@uconn.edu এবং avijit.g@uconn.edu।",
      "Recommendation letter সরাসরি email-এ attach করলে application disqualified হতে পারে\u2014শুধু reference-দের নাম ও contact information দিন।",
      "Professor প্রায় $7.5\u2013$7.7 million NSF federal funding-এর PI/Co-PI; BRIMI (Bias Reduction in Medical Information) একটি verified current NSF-funded project।",
      "Fall 2027 full-consideration deadline January 1, 2027; rolling review কিন্তু deadline-এর অনেক আগে submit করার পরামর্শ দেওয়া হয়েছে।",
    ],
    fit: [
      "Health recommender-system research এবং medical diagnostic-support publication আছে (BRIMI-এর সঙ্গে সরাসরি সম্পর্কিত)।",
      "Python-based practical AI/ML implementation experience আছে (শুধু theory নয়)।",
      "Multi-agent systems বা game-theory foundation থেকে agentic-AI research story তৈরি করতে পারেন।",
      "University application-এর পরে lab-এর নির্দিষ্ট email format ও document অনুসরণ করতে প্রস্তুত।",
    ],
    quickStart: [
      "UConn Computing PhD application-এ faculty interest হিসেবে \u2018Shiri Dori-Hacohen\u2019 select করুন।",
      "University application submit করার পর shiridh@uconn.edu ও avijit.g@uconn.edu\u2014দুটোতেই সঠিক subject format দিয়ে email করুন।",
      "Focus Area 1 (AI Safety, Generative AI, Agentic AI Systems) আপনার strongest fit\u2014email-এ এটি স্পষ্টভাবে উল্লেখ করুন।",
      "Recommendation letter কখনোই email-এ attach করবেন না\u2014শুধু reference contact information দিন।",
    ],
    steps: [
      {
        title: "UConn application submit করুন",
        timing: "এখন থেকে January 1, 2027",
        description:
          "Lab email পাঠানোর আগে official application-এ faculty interest select করা প্রয়োজন।",
        actions: [
          "Online graduate application-এ Shiri Dori-Hacohen-কে interested faculty হিসেবে select করুন।",
          "Statement of Purpose, transcripts, তিনটি recommendation letter ও (applicable হলে) English test score জমা দিন।",
          "$75 application fee দিন; automatic international waiver নেই।",
        ],
        readyWhen:
          "University application submitted এবং Dori-Hacohen faculty-interest হিসেবে selected।",
      },
      {
        title: "RIET Lab-কে required format-এ email করুন",
        timing: "University application submit করার পরপরই",
        description:
          "Lab-এর নির্দিষ্ট instructions ভুল করলে review-এর সুযোগ কমে যেতে পারে।",
        actions: [
          "Subject: \u2018PhD application: Focus area 1: Halim Md Abdul\u2019\u2014দুই email address-এ একসঙ্গে পাঠান।",
          "CV, personal statement, তিনজন reference-এর নাম/contact, publication citation/link এবং focus-area আগ্রহের সংক্ষিপ্ত ব্যাখ্যা দিন।",
          "Health recommender research, medical diagnostic publication এবং multi-agent foundation স্পষ্টভাবে উল্লেখ করুন।",
          "Recommendation letter কখনোই attach করবেন না।",
        ],
        readyWhen:
          "Email required format মেনে দুই address-এই পাঠানো হয়েছে।",
      },
      {
        title: "Documents ও timeline সম্পূর্ণ করুন",
        timing: "November 2026-এর মধ্যে target",
        description:
          "Rolling review হলেও deadline-এর কাছাকাছি আবেদন করলে consideration কমে যেতে পারে।",
        actions: [
          "Statement of Purpose-এ independent research ability ও self-directed study evidence স্পষ্টভাবে দেখান।",
          "অন্তত একটি recommendation letter-এ research capability সম্পর্কে নির্দিষ্ট মন্তব্য থাকা নিশ্চিত করুন।",
          "English-language exemption (Japan-এর English-medium MSc)-এর জন্য UConn-এর নির্দিষ্ট policy verify করুন।",
        ],
        readyWhen:
          "সব document submitted এবং January 1, 2027-এর অনেক আগে application complete।",
      },
      {
        title: "Funded offer verify করুন",
        timing: "Offer পাওয়ার পর",
        description:
          "\u2018Fully funded\u2019 lab-level statement থাকলেও exact stipend/summer/dependent coverage অফিসিয়াল offer-এ থাকতে হবে।",
        actions: [
          "Annual stipend amount, RA/TA appointment type ও duration লিখিতভাবে নিশ্চিত করুন।",
          "Summer funding ও dependent health-insurance coverage জিজ্ঞাসা করুন।",
          "Tuition ও mandatory fee waiver-এর scope স্পষ্টভাবে বুঝে নিন।",
        ],
        readyWhen:
          "Formal offer letter-এ stipend, tuition/fee waiver ও health-insurance details স্পষ্ট।",
      },
    ],
    checklist: [
      "Online graduate application (select Dori-Hacohen)", "$75 application fee",
      "Statement of Purpose", "Transcripts", "Three recommendation letters (submitted via portal only)",
      "English-language test (if applicable)", "CV",
      "RIET Lab email: CV + personal statement + 3 references + publication links",
    ],
    afterSubmission: [
      "University application status এবং lab email reply আলাদাভাবে track করুন।",
      "Rolling review হলেও early-applicant হিসেবে follow-up করা reasonable।",
      "Offer পেলে annual stipend ও summer/dependent coverage লিখিতভাবে নিশ্চিত করুন।",
    ],
    cautions: [
      "Recommendation letter কখনোই email-এ attach করবেন না\u2014official warning অনুযায়ী disqualification হতে পারে।",
      "নির্দিষ্ট subject-line format না মানলে email missed হতে পারে।",
      "$75 fee-এর automatic international waiver নেই; নিজে eligible কিনা যাচাই করুন।",
      "Lab-level \u2018fully funded\u2019 statement exact stipend amount প্রকাশ করে না\u2014written offer-এ confirm করুন।",
    ],
    officialLinks: [
      { label: "RIET Lab \u2014 Currently Hiring", href: "https://infothreats.cse.uconn.edu/currently-hiring/", description: "Focus areas, required email format ও warning verify করুন।" },
      { label: "Shiri Dori-Hacohen faculty profile", href: "https://engineering.uconn.edu/faculty/cse/dori-hacohen/", description: "Official email ও affiliation verify করুন।" },
      { label: "RIET Lab overview", href: "https://infothreats.cse.uconn.edu/", description: "Research areas ও lab members দেখুন।" },
    ],
    reviewedAt: "August 17, 2026",
  },
  {
    slug: "unc-chapel-hill-nice-x-aiot-phd-2027",
    country: "usa",
    university: "University of North Carolina at Chapel Hill",
    title: "UNC NIcE X Lab: AIoT & Pervasive Healthcare PhD Guide",
    summary:
      "Professor Jingping Nie-এর AIoT ও pervasive-healthcare lab-এর সঙ্গে health recommender ও healthcare-IoT background-এর strong match\u2014তবে officially confirmed intake এখনো Fall 2026, Fall 2027 নয়।",
    label: "Email first \u00b7 Fall 2027 not confirmed",
    funding:
      "UNC PhD in Data Science-এ 5 বছরের guaranteed funding: full tuition coverage, mandatory fees, health insurance, বছর 1-এ Teaching Assistantship এবং বছর 2\u20135-এ Research Assistantship, 9-মাসের জন্য $25,000 stipend।",
    duration: "5 years (residential, full-time) \u00b7 Fall entry",
    audience:
      "AIoT, wearable/smart-home sensing, healthcare AI বা recommender-system background থাকা applicants",
    realityCheck:
      "Professor Nie-এর নিজের official \u2018Openings and Opportunities\u2019 page স্পষ্টভাবে শুধু \u2018Prospective Ph.D. students (Starting from Fall 2026)\u2019 উল্লেখ করে\u2014Fall 2027 নিয়ে কিছু বলে না। তাঁর lab-এ ইতিমধ্যে Fall 2026-এর জন্য 3 জন incoming PhD student আছে বলে জানা গেছে। তাই এখনই email করে Fall 2027 cohort planned আছে কিনা directly জিজ্ঞাসা করা জরুরি\u2014ধরে নেওয়া উচিত নয় যে opportunity এখনো open আছে।",
    highlights: [
      "NIcE X Lab (Networked Intelligence & Cyber-Embedded Systems)-এর director; AIoT, wearable devices, pervasive healthcare, multimodal sensing ও LLM-based health system নিয়ে কাজ করেন।",
      "Recent work: daily-function screening-এর জন্য LLM-based conversational AI therapist, auscultation signal থেকে heart-rate estimation, smart-home image দিয়ে concerning-activity detection।",
      "2025 NVIDIA Academic Grant Award পেয়েছেন embedded-AI/AIoT research-এর জন্য।",
      "তাঁর official page শুধু Fall 2026 intake উল্লেখ করে; Fall 2027-এর status confirmed নয়\u2014email-এ সরাসরি জিজ্ঞাসা করতে হবে।",
      "UNC Data Science PhD-এর funding package স্পষ্টভাবে publish করা: 5 বছর, $25,000/9-মাস stipend, full tuition ও health insurance।",
    ],
    fit: [
      "Health-management recommender-system research এবং publication আছে।",
      "Healthcare IoT, computer vision (YOLO/CNN/OpenCV/OCR) ও device-integration experience আছে।",
      "Manufacturing/backend software experience-কে reliable AIoT/edge-software research-এর সঙ্গে connect করতে পারেন।",
      "Fall 2027 status unconfirmed জেনেও professor-কে সরাসরি email করতে প্রস্তুত।",
    ],
    quickStart: [
      "Professor Nie-কে (jingping@unc.edu) email করুন\u2014subject \u2018[Prospective NIcE X PhD]\u2019 দিয়ে শুরু করে Fall 2027 cohort সম্পর্কে সরাসরি জিজ্ঞাসা করুন।",
      "Health recommender research ও publication-কে তাঁর health-information/pervasive-healthcare work-এর সঙ্গে explicitly connect করুন।",
      "December 15, 2026 (final) এবং November 26, 2026 (international-recommended) deadline calendar-এ যোগ করুন।",
      "Data Science PhD-এর দুটি track থেকে \u2018Applications in Physical, Biological and Health Sciences\u2019 track বাছুন।",
    ],
    steps: [
      {
        title: "Fall 2027 status সরাসরি জিজ্ঞাসা করুন",
        timing: "এখনই \u00b7 application-এর আগে",
        description:
          "Public page শুধু Fall 2026 বলে; assume না করে written confirmation নিন।",
        actions: [
          "Subject-এ \u2018[Prospective NIcE X PhD]\u2019 রাখুন যেমন তাঁর page instruct করে।",
          "Health recommender research, publication, healthcare-IoT experience এবং AIoT-তে আগ্রহ স্পষ্টভাবে বলুন।",
          "Fall 2026 cohort ইতিমধ্যে filled কিনা এবং Fall 2027-এর জন্য নতুন student নেওয়ার পরিকল্পনা আছে কিনা সরাসরি জিজ্ঞাসা করুন।",
          "CV attach করুন।",
        ],
        readyWhen:
          "Professor Fall 2027 status সম্পর্কে লিখিতভাবে জানিয়েছেন, অথবা follow-up-সহ documented attempt সম্পন্ন।",
      },
      {
        title: "Track ও application route বাছুন",
        timing: "Reply পাওয়ার পর",
        description:
          "UNC Data Science PhD-এ দুটি track আছে; আপনার background health-focused track-এর সঙ্গে ভালো মেলে।",
        actions: [
          "\u2018Applications in Physical, Biological and Health Sciences\u2019 track নিশ্চিত করুন।",
          "Year 1 lab-rotation ও first-year qualifying-exam structure বুঝে নিন।",
          "Data Science PhD versus Health Informatics PhD\u2014কোন route-এ Nie-কে advisor হিসেবে পাওয়া যায় তা তাঁর reply থেকে নিশ্চিত করুন।",
        ],
        readyWhen:
          "সঠিক program/track এবং application route নির্ধারিত।",
      },
      {
        title: "Application সম্পূর্ণ করুন",
        timing: "November 26, 2026 (international-recommended) \u2013 December 15, 2026 (final)",
        description:
          "International applicant-দের জন্য document ও visa processing-এর extra সময় দরকার।",
        actions: [
          "Statement of Purpose-এ health-recommender research, publication, healthcare-IoT experience ও নির্দিষ্ট research question লিখুন\u2014শুধু C# application work নয়, Python/AI experience prominent রাখুন।",
          "সব institution-এর transcript, তিনটি recommendation letter এবং (প্রয়োজন হলে) English test score জমা দিন।",
          "$95 application fee দিন; general international financial-need waiver সাধারণত available নয়।",
        ],
        readyWhen:
          "November 26, 2026-এর মধ্যে (বা final deadline-এর আগে) সম্পূর্ণ application submitted।",
      },
      {
        title: "5-year funding package verify করুন",
        timing: "Offer পাওয়ার পর",
        description:
          "Published package clear হলেও lab-নির্দিষ্ট summer/internship funding আলাদা হতে পারে।",
        actions: [
          "$25,000/9-মাস stipend, full tuition ও health-insurance coverage offer letter-এ আছে কিনা নিশ্চিত করুন।",
          "Year 1 TA ও years 2\u20135 RA transition কীভাবে হবে জিজ্ঞাসা করুন।",
          "Summer funding, internship বা additional lab-specific support সম্পর্কে জিজ্ঞাসা করুন।",
        ],
        readyWhen:
          "Offer letter-এ 5-বছরের funding structure, stipend ও coverage স্পষ্ট।",
      },
    ],
    checklist: [
      "Professor Nie contact email (Fall 2027 status)", "Online graduate application",
      "Statement of Purpose", "Complete unofficial transcripts", "Three recommendation letters",
      "CV/r\u00e9sum\u00e9", "English-language test (if required)", "$95 application fee",
      "Certified English translations (if applicable)",
    ],
    afterSubmission: [
      "Professor reply ও UNC application status আলাদাভাবে track করুন।",
      "First-year lab-rotation ও qualifying-exam expectation সম্পর্কে জানার চেষ্টা করুন।",
      "Offer পেলে 5-year funding-এর প্রতিটি বছরের appointment type লিখিতভাবে confirm করুন।",
    ],
    cautions: [
      "Professor-এর official page শুধু Fall 2026 intake বলে\u2014Fall 2027 opportunity আছে ধরে নিয়ে application fee দেবেন না, আগে email করুন।",
      "Fall 2026 cohort-এ ইতিমধ্যে 3 জন incoming PhD student আছে বলে জানা গেছে\u2014capacity সীমিত হতে পারে।",
      "$95 fee-এর সাধারণ international financial-need waiver নেই।",
      "Japan-এর English-medium MSc স্বয়ংক্রিয়ভাবে English-test exemption দেয় না\u2014UNC Graduate School policy দিয়ে verify করুন।",
    ],
    officialLinks: [
      { label: "Jingping Nie \u2014 Openings and Opportunities", href: "https://jingpingnie.com/openings-and-opportunities/", description: "Current intake status (Fall 2026 vs 2027) verify করুন।" },
      { label: "NIcE X Lab", href: "https://jingpingnie.com/nice-x-lab/", description: "Research areas ও lab team দেখুন।" },
      { label: "Jingping Nie faculty profile (SDIS)", href: "https://sdis.unc.edu/person/jingping-nie/", description: "Official UNC affiliation verify করুন।" },
    ],
    reviewedAt: "August 17, 2026",
  },
  {
    slug: "tsukuba-aisip-mext-2027",
    country: "japan",
    university: "University of Tsukuba",
    title: "Tsukuba AISIP + MEXT: April 2027 Application Guide",
    summary:
      "Computer Science master’s applicants-এর জন্য AI Social Implementation program, MEXT University Recommendation, supervisor consent এবং August–October 2026 application process.",
    label: "Urgent · MEXT university recommendation",
    funding:
      "Limited candidates receive MEXT-equivalent support; AY2027 benefits remain subject to MEXT’s final announcement.",
    duration: "2 years · April 2027–March 2029",
    audience: "International CS graduates pursuing AI, optimization, simulation or social implementation",
    realityCheck:
      "AISIP admission এবং MEXT nomination একই selection path-এ যুক্ত, কিন্তু scholarship guaranteed নয়। Limited applicants-কে MEXT candidate হিসেবে nominate করা হবে; অন্য successful applicants privately financed student হিসেবে ভর্তি হতে পারবেন। বর্তমানে Japan-এ বসবাস করলে ‘newly coming to Japan’ ও নতুন Student visa নিয়ে re-entry requirement আপনার ক্ষেত্রে প্রযোজ্য কি না, আবেদন করার আগেই admissions office থেকে লিখিতভাবে নিশ্চিত করা জরুরি।",
    highlights: [
      "Eligibility screening কেবল standard academic qualification না মিললে; deadline 21 August 2026, 3:00 PM JST।",
      "সব applicant-এর prescreening বাধ্যতামূলক; deadline 28 August 2026, 3:00 PM JST।",
      "Entrance-exam electronic documents 18 September 2026 এবং originals 9 October 2026-এর মধ্যে পৌঁছাতে হবে।",
      "Online oral examination 19–23 October 2026; university result 27 November এবং final MEXT result early March 2027।",
      "Application-এর আগে prospective supervisor consent এবং তাঁর মাধ্যমে Security Export Control reference number নিতে হবে।",
      "MEXT GPA minimum 2.30/3.00; AY2027 benefit ও final conditions December 2026-এর MEXT announcement অনুযায়ী বদলাতে পারে।",
    ],
    fit: [
      "আপনার bachelor’s degree বা March 2027-এর মধ্যে expected degreeসহ সাধারণত 16 years of education আছে।",
      "AI, machine learning, optimization, simulation, artificial life বা technology-এর social implementation নিয়ে focused research question আছে।",
      "English-এর চার skill-এ CEFR B2 evidence, English-medium degree proof, অথবা accepted Japanese proficiency route পূরণ করতে পারেন।",
      "আপনি supervisor-এর research পড়ে personalized contact করতে এবং strict multi-stage deadline অনুসরণ করতে প্রস্তুত।",
    ],
    quickStart: [
      "নিজের MEXT conversion GPA official formula দিয়ে হিসাব করে 2.30/3.00 minimum মিলিয়ে নিন।",
      "Claus Aranhaসহ 2–3টি genuine faculty match-এর recent research পড়ে একটি primary supervisor বাছুন।",
      "বর্তমান Japan residence/visa status লিখে AISIP ও admissions office-কে eligibility confirmation email করুন।",
      "28 August prescreening-এর documents এবং Security Export Control reference number-এর জন্য আজই supervisor contact শুরু করুন।",
    ],
    steps: [
      {
        title: "Scholarship ও residence eligibility audit করুন",
        timing: "Immediately · before supervisor outreach",
        description:
          "Academic eligibility-এর পাশাপাশি MEXT nationality, age, GPA, arrival এবং visa conditions আলাদাভাবে মিলাতে হবে।",
        actions: [
          "Nationality, 2 April 1992-or-later age rule, 16-year education এবং degree completion date যাচাই করুন।",
          "Complete transcript ব্যবহার করে MEXT 3-point formula-তে GPA calculate করুন।",
          "Current residence status, Japan arrival history এবং April 2027-এ new Student visa/re-entry feasibility লিখে রাখুন।",
          "Japan-resident applicant হিসেবে eligibility ambiguous হলে sysinfo.admission@un.tsukuba.ac.jp ও aisip@cs.tsukuba.ac.jp-এ একই email-এ প্রশ্ন করুন।",
        ],
        readyWhen:
          "সব objective condition মিলেছে এবং residence/visa ambiguity-এর written clarification আছে।",
      },
      {
        title: "Prospective supervisor-এর consent নিন",
        timing: "Now · do not wait for August 28",
        description:
          "Supervisor consent ছাড়া application এগোবে না; Security Export Control reference number-ও supervisor-এর মাধ্যমে আসে।",
        actions: [
          "Faculty directory থেকে research match যাচাই করে recent 2–3টি paper/project পড়ুন।",
          "Claus Aranha-এর evolutionary computation, artificial life, optimization ও multi-agent simulation work আপনার background-এর সঙ্গে মিললে personalized email করুন।",
          "Email-এ academic background, technical skills, proposed problem, AISIP/MEXT intent এবং CV/research summary দিন।",
          "Consent পেলে Security Export Control reference number issue করার অনুরোধ করুন; এটি পেতে সময় লাগতে পারে।",
        ],
        readyWhen:
          "একজন faculty member prospective supervisor হতে সম্মত এবং reference-number process শুরু হয়েছে।",
      },
      {
        title: "Eligibility screening করুন—শুধু প্রয়োজন হলে",
        timing: "Deadline · 21 August 2026, 3:00 PM JST",
        description:
          "Bachelor’s degree/standard academic route পূরণ না করলে equivalent qualification যাচাইয়ের জন্য এই আলাদা step লাগে।",
        actions: [
          "Official guideline-এর academic-background routes দেখে screening প্রয়োজন কি না নির্ধারণ করুন।",
          "প্রয়োজন হলে application form, CV, degree/graduation proof, transcript এবং requested research document প্রস্তুত করুন।",
          "Deadline-এর আগে electronic files email করুন এবং eligibility question থাকলে একই deadline-এর আগে জিজ্ঞেস করুন।",
        ],
        readyWhen:
          "Screening প্রয়োজন নয় বলে নিশ্চিত অথবা university eligibility approval দিয়েছে।",
      },
      {
        title: "Mandatory prescreening submit করুন",
        timing: "Deadline · 28 August 2026, 3:00 PM JST",
        description:
          "সব applicant-কে এই stage pass করতে হবে; entrance-exam application কেবল prescreening successful হলে করা যায়।",
        actions: [
          "B-1 cover/calculation sheet-এ MEXT GPA formula সঠিকভাবে পূরণ করুন।",
          "Most recent qualifying degree-এর complete transcript এবং transfer-credit transcript থাকলে সেটিও দিন।",
          "CEFR B2 test evidence বা official English-medium/Japanese-medium instruction certificate যোগ করুন।",
          "Japanese/English ছাড়া documents-এর official translation এবং grading-scale explanation attach করুন।",
        ],
        readyWhen:
          "Complete prescreening package deadline-এর আগে delivered এবং receipt/confirmation সংরক্ষিত।",
      },
      {
        title: "Entrance-exam application complete করুন",
        timing: "18 September–9 October 2026",
        description:
          "Prescreening pass করার পরে electronic ও original documents-এর দুটি আলাদা deadline আছে।",
        actions: [
          "AISIP application form, checklist, field of study/research plan এবং সব requested certificates final করুন।",
          "Electronic files 18 September 2026, 3:00 PM JST-এর মধ্যে submit করুন।",
          "Required originals tracked delivery-তে পাঠিয়ে 9 October 2026, 5:00 PM JST-এর মধ্যে পৌঁছানো নিশ্চিত করুন।",
          "Tracking, sent files এবং final application-এর complete copy রাখুন।",
        ],
        readyWhen:
          "Electronic submission accepted এবং originals-এর delivery tracking confirmed।",
      },
      {
        title: "Oral exam ও final MEXT stage প্রস্তুত করুন",
        timing: "19 October 2026–early March 2027",
        description:
          "Admission decision documents ও online oral examination-এর উপর হবে; nomination পেলেও final approval MEXT দেয়।",
        actions: [
          "Research problem, literature gap, method, expected contribution ও supervisor fit-এর concise presentation প্রস্তুত করুন।",
          "19–23 October oral-exam window পুরোটা available রাখুন এবং camera/audio/time-zone test করুন।",
          "27 November university result দেখুন; MEXT candidate হলে additional scholarship documents দ্রুত submit করুন।",
          "Early March final MEXT result ও enrollment procedure complete করে 1 April 2027 start-এর প্রস্তুতি নিন।",
        ],
        readyWhen:
          "Admission/enrollment complete এবং scholarship status official written notice-এ confirmed।",
      },
    ],
    checklist: [
      "Prospective supervisor’s written consent",
      "Security Export Control reference number",
      "MEXT GPA calculation sheet · minimum 2.30/3.00",
      "CV and qualifying degree certificate",
      "Complete transcript and grading-scale evidence",
      "CEFR B2/JLPT N2 or medium-of-instruction proof",
      "Official translations where required",
      "Field of Study and Research Plan",
      "Electronic submission receipt",
      "Tracked original-document delivery",
      "Current-residence and Student-visa eligibility confirmation",
    ],
    afterSubmission: [
      "Prescreening, entrance-exam এবং scholarship messages-এর জন্য email ও spam folder প্রতিদিন check করুন।",
      "Original documents পৌঁছেছে কি না carrier tracking ও university confirmation দিয়ে verify করুন।",
      "MEXT nomination না পেলেও privately financed admission নিতে পারবেন কি না budget ও alternative funding দেখে সিদ্ধান্ত নিন।",
      "Final AY2027 MEXT benefits প্রকাশ হলে stipend, airfare, tuition এবং visa conditions নতুন guideline-এর সঙ্গে মিলিয়ে নিন।",
    ],
    cautions: [
      "Supervisor consent এবং Security Export Control reference number ছাড়া শেষ সপ্তাহে application complete করা বাস্তবসম্মত নয়।",
      "Japan-এ বর্তমানে থাকা applicant-এর জন্য new-entry/Student-visa rule critical—নিজে থেকে eligibility assume করবেন না।",
      "Limited nomination মানে admission পেলেই MEXT scholarship নিশ্চিত নয়।",
      "Deadline JST-তে এবং strictly enforced; carrier delay হলেও special evidence লাগতে পারে।",
      "AY2027 scholarship amount বা benefit provisional wording ছাড়া publish করবেন না।",
    ],
    officialLinks: [
      {
        label: "AISIP official page",
        href: "https://www.cs.tsukuba.ac.jp/aisip/",
        description: "Current schedule, selection stages, contact addresses এবং updates দেখুন।",
      },
      {
        label: "AY2027 AISIP application guidelines",
        href: "https://www.sie.tsukuba.ac.jp/eng/wp-content/uploads/AISIP-2027-Application-Guidelines3.pdf",
        description: "Eligibility, documents, language, visa এবং MEXT GPA rules পড়ুন।",
      },
      {
        label: "Systems and Information Engineering admissions",
        href: "https://www.sie.tsukuba.ac.jp/eng/exam/applicants/entra",
        description: "Forms, deadlines, faculty directories ও official notices নিন।",
      },
      {
        label: "Claus Aranha research page",
        href: "https://conclave.cs.tsukuba.ac.jp/",
        description: "Evolutionary computation, artificial life, optimization ও supervision fit যাচাই করুন।",
      },
    ],
  },
  {
    slug: "iuj-masters-scholarships-2027",
    country: "japan",
    university: "International University of Japan",
    businessPriority: 1,
    englishBusinessPrograms: "MBA · Digital Transformation · International Management",
    businessOfficialUrl: "https://www.iuj.ac.jp/academics/gsim/",
    title: "IUJ Digital Transformation + Scholarships: September 2027 Guide",
    summary:
      "এক বছরের Master of Digital Management, domestic/international three-round admission, IUJ Math Test এবং Nakayama, ADB-JSP ও MEXT funding-এর detailed preparation guide।",
    label: "Upcoming · opening planned Sep 2026 · Competitive funding",
    funding:
      "Nakayama is the main admission-time route for Japan residents; ADB-JSP and MEXT University Recommendation are restricted to eligible overseas/international applicants under current rules.",
    duration: "1 year · September 2027 intake",
    audience: "IT, CSE, engineering or business applicants moving toward digital transformation, analytics and technology-management roles",
    realityCheck:
      "Digital Transformation Program (DXP) হলো Graduate School of International Management-এর এক বছরের Master of Digital Management—Computer Science research degree নয়। Admission application-এর Phase 2 scholarship section-এ funding request করতে হয়; admission বা scholarship কোনোটিই guaranteed নয়। Published budget অনুযায়ী admission fee ¥300,000, one-year tuition ¥3,900,000 এবং একা থাকা GSIM student-এর estimated total প্রায় ¥5.264–5.348 million। Japan-এ valid residence status নিয়ে থাকলে nationality যাই হোক Domestic Applicant route ব্যবহার করতে হবে। 2027 deadlines প্রকাশিত হলেও downloadable detailed 2027 admission/scholarship guidelines এখনো নেই; বর্তমান 2026 PDFs কেবল preparation reference।",
    highlights: [
      "DXP technology ও business-এর intersection-এ তৈরি: AI for Business, Big Data Analytics, Python, digital platforms/business models, machine learning/text analytics, strategy, ethics এবং organizational change-এর curriculum আছে।",
      "Overseas-resident deadlines: 10 December 2026, 11 February 2027 ও 14 April 2027; DXP Math-Test taker-এর fixed online Math Test/interview assessment dates 24 December, 22 February ও 28 April; results 29 January, 18 March ও 21 May; procedure deadlines 19 February, 21 April ও 17 June।",
      "Japan-resident deadlines: 21 January, 23 March ও 27 May 2027; online interview 29 January, 31 March ও 10 June এবং prior guide অনুযায়ী GMAT/GRE না দিলে একই দিনে Math Test; results 24 February, 19 April ও 28 June।",
      "Current FAQ কোনো hard TOEFL/IELTS/TOEIC minimum দেয় না; IELTS Academic 6.5, TOEFL iBT 80 ও TOEIC 800 recommended। Low score submit করা formalভাবে সম্ভব, কিন্তু English-medium graduate study ও interview readiness competitive assessment-এর অংশ।",
      "English-medium bachelor’s/graduate degree-এর official institutional evidence থাকলে score exemption পাওয়া যেতে পারে। General English-proficiency letter নয়—2027 guideline-এর exact MOI category follow করতে হবে।",
      "GSIM-এ quantitative evidence বাধ্যতামূলক: GMAT/GRE অথবা eligible হলে IUJ Math Test। 2026-guide reference-এ DXP applicants সব three rounds-এ Math Test বেছে নিতে পারে এবং testটি 12 questions/60 minutes, calculator ছাড়া matrix algebra, calculus, probability ও statistics cover করে; 2027 guide-এ recheck করতে হবে।",
      "No published hard GPA cutoff এবং DXP work experience mandatory নয়; তবে academic record, quantitative readiness, personal statement, research topic, career logic ও professional evidence selection-এ গুরুত্বপূর্ণ।",
      "Nakayama 30/50/70/90/100 tuition reduction দিতে পারে; Nakayama 100 Premium full tuition, partial admission-fee reduction ও ¥100,000/month stipend দেয়। Awards সীমিত ও competitive।",
      "ADB-JSP current table-এ DXP eligible: full tuition, partial admission fee, ¥144,000/month, airfare/allowances। Bangladesh listed country হলেও applicant-কে নিজ home country-তে থাকতে/কাজ/পড়াশোনা করতে হয়; Japan-resident applicant published rules-এ ineligible।",
      "MEXT University Recommendation current table-এ DXP eligible এবং full tuition, stipend ও airfare দেখায়; prior-cycle rule অনুযায়ী international applicant + first round only। Japan-resident domestic applicant-এর route নয়; September 2027 rules নতুন PDF-এ recheck করতে হবে।",
      "Japanese admission requirement নয়; IUJ courses English-এ। তবে post-enrollment awards, daily life এবং Japan job search-এ Japanese practical advantage দেয়।",
      "Zaw Zaw Aung current DXP Program Director ও Associate Professor; AI for Business, data analytics, digital platforms/data management fit। Mihoko Sakurai information systems, resilience, smart city ও technology-enabled organizational change-এর relevant faculty match।",
    ],
    fit: [
      "Software/CSE/IT/engineering experience-কে digital strategy, analytics, platforms, product/technology management বা organizational transformation-এর সঙ্গে connect করতে চান।",
      "এক বছরের compressed business degree চান এবং traditional software-engineering/AI research thesis-এর বদলে applied management/capstone direction গ্রহণ করেন।",
      "MOI বা valid English test evidence দিতে পারবেন এবং English interview, writing ও classroom discussion handle করার বাস্তব প্রস্তুতি আছে।",
      "GMAT/GRE দিতে পারবেন অথবা algebra, calculus, probability ও statistics review করে IUJ Math Test + interview route নিতে প্রস্তুত।",
      "ADB-JSP target করলে নিজ home country-তে reside করেন এবং eligible nationality, post-degree full-time work, age ও return-home obligation পূরণ করেন।",
      "Scholarship না পেলে প্রায় ¥5.3m total-cost scenario evaluate করে written funding ছাড়া enrolment commit করবেন না।",
    ],
    quickStart: [
      "নিজের current residence দেখে route লিখুন: Japan resident হলে 21 January, overseas হলে 10 December first-round deadline target করুন।",
      "DXP curriculum খুলে নিজের IT experience-এর সঙ্গে AI for Business, data analytics, digital platforms বা transformation strategy-এর 3টি course match করুন।",
      "GMAT/GRE নাকি IUJ Math Test—একটি route বেছে 12-question quantitative diagnostic দিন; English MOI/test evidence একই folder-এ রাখুন।",
      "Nakayama, ADB-JSP ও MEXT-এর eligibility তিনটি আলাদা column-এ লিখে scholarship না পাওয়ার ¥5.264–5.348m backup decision rule বানান।",
    ],
    steps: [
      {
        title: "DXP degree ও career outcome ঠিকভাবে বুঝুন",
        timing: "August–September 2026",
        description:
          "DXP coding-heavy CS degree নয়; technology বোঝে এমন manager, consultant, product/IT strategist বা transformation leader তৈরির এক বছরের degree।",
        actions: [
          "Master of Digital Management, one-year duration এবং 32-credit current curriculum structure পড়ে outcome লিখুন।",
          "AI for Business, Big Data Analytics, Data Analysis with Python, Digital Platforms এবং Management for DX থেকে career-relevant courses বাছুন।",
          "Current software/IT work → organizational problem → DXP skills → target role—এই চার ধাপে career bridge লিখুন।",
          "Deep CS research চাইলে DXP-এর বদলে technical MSc/MEng option compare করুন; degree title দেখে ভুল expectation রাখবেন না।",
        ],
        readyWhen:
          "কেন one-year Digital Management, কেন IUJ এবং graduation-এর পরে কোন role—তিনটি evidence দিয়ে বলতে পারেন।",
      },
      {
        title: "Domestic বনাম international route এবং deadline lock করুন",
        timing: "Before the application opens",
        description:
          "IUJ applicant category nationality দিয়ে নয়, application period-এ কোথায় legally reside করেন তা দিয়ে নির্ধারিত হয়। Route বদলালে deadline, fee ও examination process বদলায়।",
        actions: [
          "Valid Japan residence status application/admission period জুড়ে থাকবে কি না দেখে Domestic Applicant definition মিলান।",
          "Domestic হলে 21 Jan / 23 Mar / 27 May; overseas হলে 10 Dec / 11 Feb / 14 Apr deadline calendar-এ দিন।",
          "2026 planning reference অনুযায়ী full-scholarship priority পেতে প্রথম/দ্বিতীয় round target করুন; MEXT University Recommendation-এর prior-cycle first-round-only rule recheck করুন।",
          "Online Math Test/interview ও result/admission-procedure dates একই calendar-এ JST-সহ block করুন।",
        ],
        readyWhen:
          "Correct applicant category, target round, exam date, result এবং offer-acceptance deadline এক timeline-এ পরিষ্কার।",
      },
      {
        title: "English ও quantitative gate প্রস্তুত করুন",
        timing: "September–November 2026",
        description:
          "No hard English cutoff এবং no mandatory GRE মানে test-free application নয়। Accepted English evidence ও GMAT/GRE/IUJ Math Test—দুই gate-ই resolve করতে হবে।",
        actions: [
          "MOI exemption চাইলে degree-awarding institution-এর official evidence নিন; generic proficiency letter নয়।",
          "Score route হলে two-year-valid TOEFL/IELTS Academic/TOEIC এবং 2027 reporting/upload rules নতুন guide থেকে নিন।",
          "GMAT/GRE score scholarship strength বাড়াবে কি না time/cost দেখে সিদ্ধান্ত নিন; না হলে DXP IUJ Math Test select করুন।",
          "Matrix algebra, differentiation/integration, probability ও statistics calculator ছাড়া timed practice করুন এবং English interview answers rehearse করুন।",
        ],
        readyWhen:
          "Valid English route documented এবং quantitative test route chosen, practised ও application deadline-এর মধ্যে achievable।",
      },
      {
        title: "DXP-focused application file তৈরি করুন",
        timing: "October–December 2026",
        description:
          "Application committee grades-এর সঙ্গে career clarity, quantitative readiness, digital-transformation problem এবং evidence-based goals মূল্যায়ন করে।",
        actions: [
          "Online application, Personal Statement এবং Research Topic-এ একই organizational/industry DX problem রাখুন।",
          "সব undergraduate/graduate transcripts, degree certificates, passport/photo এবং domestic foreign applicant হলে residence card প্রস্তুত করুন।",
          "Academic advisor/professor-কে reference হিসেবে professional email-সহ আগে inform করুন; তিনি unavailable হলেই immediate workplace supervisor ব্যবহার করুন। Prior guide-এ letter only if committee requests।",
          "Personal Statement/interview notes-এ systems built, data used, users/teams led, process improvement এবং measurable business impact quantify করুন।",
        ],
        readyWhen:
          "Documents, Personal Statement, Research Topic, reference ও test evidence একই coherent Business + IT profile দেখায়।",
      },
      {
        title: "Scholarship matrix ও net-cost decision বানান",
        timing: "Before Phase 2 submission",
        description:
          "Nakayama, ADB-JSP ও MEXT-এর headline benefit এক হলেও eligibility এবং obligations আলাদা। Scholarship না পাওয়া scenario বাদ দিলে application financially unsafe হবে।",
        actions: [
          "Nakayama 30/50/70/90/100/Premium-এর tuition balance, admission-fee balance ও stipend আলাদা করে হিসাব করুন।",
          "ADB-JSP-এর nationality, home-country residence, two-year post-degree work, 2026-reference age ≤35, in-principle no prior Master’s/PhD এবং two-year return obligation check করুন। Japan resident হলে ineligible mark করুন।",
          "MEXT 2027 PDF এলে international-applicant/first-round gate, age, nationality, other-scholarship conflict ও nomination conditions recheck করুন; domestic route হলে current rules-এ ineligible mark করুন।",
          "No award এবং Nakayama 30/50/70/90/100/Premium scenarios লিখুন; official estimate থেকে 30% award-এ প্রায় ¥4.094–4.178m এবং 100%-এ প্রায় ¥1.364–1.448m remaining cost হয়।",
        ],
        readyWhen:
          "Eligible awards, ineligible awards, obligations এবং minimum acceptable written funding—সব একটি decision sheet-এ আছে।",
      },
      {
        title: "Phase 1, Phase 2 এবং selection complete করুন",
        timing: "Target first round · overseas 10 Dec / domestic 21 Jan",
        description:
          "Scholarship consideration admission workflow-এর মধ্যেই হয়। Correct sponsorship status, complete Phase 2 এবং fixed test/interview attendance গুরুত্বপূর্ণ।",
        actions: [
          "Privately funded হয়ে scholarship চাইলে registration-এ Non-Sponsored select করে Phase 2 Scholarship Section পূরণ করুন।",
          "Name, DXP program, applicant category, uploads, test choice, reference এবং scholarship answers preview করে deadline-এর আগে submit করুন; applicant named award নিজে নিশ্চিতভাবে select করে না, IUJ eligibility অনুযায়ী match/nominate করে।",
          "Math-Test taker হলে fixed online test/interview attend করুন; GMAT/GRE submitter-এর 2027 interview exemption final guide/schedule দিয়ে confirm করুন।",
          "Result পেলে tuition reduction, admission fee, stipend, airfare, conditions ও payment deadline আলাদা করে net-cost sheet-এ বসান।",
        ],
        readyWhen:
          "Submission ID saved, selection complete এবং written admission + funding package দেখে informed accept/decline decision নেওয়া হয়েছে।",
      },
    ],
    checklist: [
      "AY2027 admission and scholarship guidelines",
      "Correct domestic/international applicant route",
      "DXP online application",
      "Personal Statement",
      "DXP Research Topic",
      "All degree certificates and transcripts",
      "Official English translations",
      "TOEFL/IELTS/TOEIC or eligible MOI evidence",
      "GMAT/GRE or IUJ Math Test selection",
      "Passport/photo and residence card if domestic foreign applicant",
      "Professional reference details",
      "Quantified IT/business-impact evidence for essays/interview",
      "Application-fee plan from AY2027 guide",
      "Nakayama/ADB-JSP/MEXT eligibility matrix",
      "Phase 2 Scholarship Section",
      "No-award ¥5.264–5.348m budget",
    ],
    afterSubmission: [
      "Portal ও admgsim@iuj.ac.jp email/spam monitor করুন; fixed Math Test/interview date বদলানো যায় না বলে work/travel conflict সরান।",
      "Digital-transformation case, quantitative reasoning, career goal, English communication ও cultural adaptability interview practice চালু রাখুন।",
      "Admission এবং scholarship decision আলাদা হলে দুইটি written result না পাওয়া পর্যন্ত final net cost ধরে নেবেন না।",
      "JASSO eligible হলে late-August pre-enrollment IUJ notice miss করবেন না; current IUJ route ¥48,000/month October–March, result early November এবং GPA/language/visa/conflicting-aid rulesসহ competitive।",
    ],
    cautions: [
      "No hard IELTS minimum মানে IELTS 5.5 competitive বা automatic admission নয়; recommended IELTS 6.5 এবং English readiness selection-এর অংশ।",
      "GRE/GMAT বাধ্যতামূলক নয় বলা অসম্পূর্ণ—GSIM quantitative assessment বাধ্যতামূলক; DXP applicant IUJ Math Test দিয়ে score replace করতে পারে।",
      "2027 schedule published হলেও detailed PDFs এখনো 2026 version; documents, fees, Math Test এবং scholarship conditions নতুন guide দিয়ে reverify করুন।",
      "ADB-JSP শুধু country match নয়; নিজ home country ছাড়া অন্য দেশে—Japan-সহ—living/working/studying করলে, কিংবা work/age/prior-degree rule না মিললে ineligible।",
      "MEXT University Recommendation-এ IUJ nomination final award নয় এবং prior rules international first-round applicants-এর জন্য; domestic/Japan-resident route eligible ধরে নেবেন না।",
      "DXP-এর ¥3.9m tuition এবং estimated ¥5.264–5.348m total high; part-time work বা JASSO দিয়ে funding gap cover হবে ধরে নেবেন না।",
      "Faculty profiles research/curriculum fit—supervisor vacancy বা scholarship commitment নয়। DXP management degree-তে PhD-style supervisor cold email admission step নয়।",
      "Work experience DXP admission-এর published hard requirement নয়, কিন্তু ADB-JSP ও কিছু funding route-এ experience বাধ্যতামূলক।",
    ],
    officialLinks: [
      {
        label: "September 2027 admission schedule",
        href: "https://www.iuj.ac.jp/admissions/",
        description: "Domestic/international deadlines, test/interview, result ও procedure dates দেখুন।",
      },
      {
        label: "Digital Transformation Program",
        href: "https://www.iuj.ac.jp/academics/gsim/programs/dxp/",
        description: "DXP objective, Business + IT focus, structure ও program-director message পড়ুন।",
      },
      {
        label: "DXP curriculum requirements",
        href: "https://www.iuj.ac.jp/assets/img/2526_creditrequirements_dxp.pdf",
        description: "Master of Digital Management, current 32-credit structure ও technical/business courses দেখুন।",
      },
      {
        label: "IUJ tuition and scholarships",
        href: "https://www.iuj.ac.jp/admissions/cost/",
        description: "¥3.9m DXP tuition, total budget, current awards ও application flow compare করুন।",
      },
      {
        label: "Application and admission FAQ",
        href: "https://www.iuj.ac.jp/inquiry/admission/",
        description: "Qualifications, documents, work experience, applicant category ও recommended English scores দেখুন।",
      },
      {
        label: "English and quantitative-test FAQ",
        href: "https://www.iuj.ac.jp/inquiry/toefl/",
        description: "MOI exemption, score validity, GMAT/GRE এবং DXP Math Test route verify করুন।",
      },
      {
        label: "Official admissions materials",
        href: "https://www.iuj.ac.jp/admissions/download-materials/",
        description: "AY2027 admission ও scholarship PDFs প্রকাশ হলে এখান থেকে final rules নিন।",
      },
      {
        label: "Online application status",
        href: "https://www.iuj.ac.jp/admissions/online/",
        description: "বর্তমান closure এবং September 2027 application opening notice monitor করুন।",
      },
      {
        label: "2026 admission guide · planning reference",
        href: "https://www.iuj.ac.jp/assets/img/Admissions_Instructions_M_E.pdf",
        description: "Documents, Math Test ও Phase 1/2 workflow বুঝুন; 2027 final authority হিসেবে ব্যবহার করবেন না।",
      },
      {
        label: "2026 scholarship guide · planning reference",
        href: "https://www2.iuj.ac.jp/admission/pdf/2026/Sch_Instructions_M_E.pdf",
        description: "Nakayama, ADB-JSP ও MEXT prior-cycle eligibility/benefits বুঝে AY2027 PDF দিয়ে replace করুন।",
      },
      {
        label: "Current GSIM faculty",
        href: "https://www.iuj.ac.jp/academics/gsim/about/im-faculty/",
        description: "Zaw Zaw Aung ও Mihoko Sakurai-এর current GSIM affiliation verify করুন।",
      },
      {
        label: "Zaw Zaw Aung research profile",
        href: "https://rmap.iuj.ac.jp/profile/en.7a232090e8d6f0d5.html",
        description: "Current appointment, Computer Science/Information Science background ও publications দেখুন।",
      },
      {
        label: "Mihoko Sakurai research profile",
        href: "https://rmap.iuj.ac.jp/profile/en.b742213d424a80b4.html",
        description: "Information systems, resilience, smart city ও digital-change research fit দেখুন।",
      },
      {
        label: "JASSO Honors Scholarship",
        href: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/about.html",
        description: "IUJ-administered competitive nomination দেখুন; current window late August before enrollment, award October–March।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "grips-masters-scholarships-2027",
    country: "japan",
    university: "National Graduate Institute for Policy Studies",
    businessPriority: 25,
    englishBusinessPrograms: "Public Policy · Public Economics · Public Finance",
    businessOfficialUrl: "https://www.grips.ac.jp/en/education/index/",
    title: "GRIPS Master’s + Scholarships: 2027–28 Application Guide",
    summary:
      "Public Policy, Macroeconomic Policy ও Public Finance applicants-এর জন্য program selection, MEXT/ADB/JISPA funding routes, residency status এবং document-by-document process.",
    label: "Policy, economics & computational methods",
    funding:
      "MEXT, ADB-JSP, JISPA, JJ/WBGSP and sponsor routes are program- and profile-specific; direct admission alone does not guarantee funding.",
    duration: "1 or 2 years · program-specific",
    audience: "Applicants targeting public policy, economics, finance or computational economic analysis",
    realityCheck:
      "GRIPS-এ ‘একটি scholarship application’ নেই। Program, applicant residence, nationality, employer এবং funding route ঠিক করে কে GRIPS-এ direct apply করবেন আর কে Embassy, IMF, JICA বা অন্য sponsor-এর মাধ্যমে apply করবেন। Japan-এ থাকা applicant-কে domestic applicant হিসেবে ধরা হতে পারে, তাই published overseas deadlines ব্যবহার করার আগে admissions@grips.ac.jp-এ status confirm করতে হবে।",
    highlights: [
      "2027–28 direct applications open; MP1, MP2, MEP, Public Finance এবং selected doctoral programs available।",
      "Economics, Planning and Public Policy Program 2027–28 intake-এ suspended।",
      "MP1/MP2 MEXT University Recommendation ও ADB-JSP route-এর online registration deadline 20 November 2026, 17:00 JST; supporting documents 27 November।",
      "MEXT MP1/MP2 coverage listed as ¥147,000 monthly stipend, fees/tuition এবং eligible round-trip economy airfare।",
      "MEP-এর JISPA route Bangladeshসহ listed Asian countries-এর relevant macroeconomic-policy professionals-এর জন্য; sponsor deadline আলাদা।",
      "Two-year master’s ও PhD applicants-এর research proposal লাগে; direct route-এ supporting documents post করতে হয়।",
    ],
    fit: [
      "Public policy ও economics-এর সঙ্গে programming, Python, quantitative modelling বা data analysis combine করতে চান।",
      "Game theory/market design, computational economics, digital currency বা international political economy-তে clear interest আছে।",
      "Scholarship provider-এর age, nationality, employment এবং work-experience conditions পূরণ করেন।",
      "Policy impact ও home-country contribution evidence দিয়ে explain করতে পারেন।",
    ],
    quickStart: [
      "Current Japan residence ও visa status admissions@grips.ac.jp-এ পাঠিয়ে domestic/overseas application category confirm করুন।",
      "MP1, MP2, MEP ও Public Finance-এর মধ্যে career goal অনুযায়ী একটি program shortlist করুন।",
      "2027 scholarship matrix-এ শুধু আপনার program ও profile-eligible routes highlight করুন।",
      "John Stachurski, Yosuke Yasuda ও Hyoung-kyu Chey-এর faculty profiles পড়ে একটি defensible research direction লিখুন।",
    ],
    steps: [
      {
        title: "Applicant category ও route লিখিতভাবে confirm করুন",
        timing: "Immediately",
        description:
          "GRIPS deadline page overseas residents-এর জন্য; Japan resident বা soon-to-move applicant-এর category visa status অনুযায়ী বদলাতে পারে।",
        actions: [
          "Current address, nationality, residence status, visa expiry ও intended intake concise email-এ লিখুন।",
          "Admissions office-কে domestic না overseas applicant এবং কোন deadline set প্রযোজ্য জিজ্ঞেস করুন।",
          "Sponsor-employed হলে employer/JICA/Embassy route বাধ্যতামূলক কি না verify করুন।",
          "Written reply application folder-এ সংরক্ষণ করুন।",
        ],
        readyWhen:
          "Program, applicant category, submission channel ও applicable deadline written confirmation-এ clear।",
      },
      {
        title: "Program ও faculty/research fit নির্বাচন করুন",
        timing: "August–September 2026",
        description:
          "Program title নয়—curriculum, degree length, research requirement ও career outcome দিয়ে selection করুন।",
        actions: [
          "MP1 one-year policy training এবং MP2 two-year research depth compare করুন।",
          "MEP কেবল macroeconomic-policy career এবং eligible funding/employment route fit করলে বাছুন।",
          "Public Finance tax/customs tracks-এর employer ও sponsor restrictions পড়ুন।",
          "Computational economics-এর জন্য John Stachurski, game theory-এর জন্য Yosuke Yasuda, digital currency/IPE-এর জন্য Hyoung-kyu Chey-এর work map করুন।",
        ],
        readyWhen:
          "একটি primary program, one-paragraph policy/research question এবং relevant faculty evidence আছে।",
      },
      {
        title: "Funding matrix দিয়ে eligible scholarship বাছুন",
        timing: "Before drafting the application",
        description:
          "একই scholarship সব program বা applicant-এর জন্য নয়; direct-GRIPS ও sponsoring-organization route আলাদা।",
        actions: [
          "MP1/MP2-এর MEXT ও ADB-JSP eligibility compare করুন—ADB route-এ work experience এবং no-existing-master’s rule লক্ষ্য করুন।",
          "MEP হলে Bangladesh eligibilityসহ IMF-JISPA professional criteria ও sponsor application দেখুন।",
          "Public Finance হলে tax/customs employment ও JJ/WBGSP/WCO nomination rules দেখুন।",
          "Funding নিশ্চিত না হলে tuition/living cost ও self-financing feasibility লিখুন।",
        ],
        readyWhen:
          "প্রতিটি selected scholarship-এর program, route, deadline, eligibility ও coverage এক টেবিলে documented।",
      },
      {
        title: "Application documents তৈরি করুন",
        timing: "September–October 2026",
        description:
          "GRIPS standard forms ব্যবহার করে policy impact, analytical readiness ও professional relevance দেখাতে হবে।",
        actions: [
          "Application for Admission, Statement of Purpose এবং official recommendation form পূরণ করুন।",
          "Certificate of Employment ও employer nomination route-specific হলে early সংগ্রহ করুন।",
          "MP2 বা applicable two-year program-এর জন্য research proposal-এ question, literature, method, data ও policy contribution লিখুন।",
          "Degree/transcript, English test, passport এবং translations application guide অনুযায়ী prepare করুন।",
        ],
        readyWhen:
          "সব official form complete, supporting evidence consistent এবং postal originals ready।",
      },
      {
        title: "Direct বা sponsor channel-এ submit করুন",
        timing: "Route-specific · first key date 20 November 2026",
        description:
          "Direct applicant online registration করলেও supporting documents post না করলে file complete নয়।",
        actions: [
          "MEXT/ADB MP1 বা MP2 route হলে 20 November 2026, 17:00 JST-এর আগে online registration করুন।",
          "Applicable originals/supporting documents 27 November 2026, 17:00 JST-এর মধ্যে GRIPS-এ পৌঁছান।",
          "JISPA, JICA, YLP বা other sponsor route হলে তাদের earlier deadline ও nomination instructions follow করুন।",
          "Courier tracking, submitted forms ও confirmation email save করুন।",
        ],
        readyWhen:
          "Correct channel-এ online ও paper/sponsor submissions complete এবং receipt verified।",
      },
      {
        title: "Interview, funding decision ও fallback plan",
        timing: "After application",
        description:
          "Admission, sponsor nomination ও final scholarship decision আলাদা stage হতে পারে।",
        actions: [
          "Policy problem, quantitative method, work impact ও post-study contribution-এর concise answers practice করুন।",
          "Funding offer-এ stipend, fees, airfare, insurance, research allowance ও return obligations পড়ুন।",
          "Direct admission but no scholarship হলে affordability deadline-এর আগে reassess করুন।",
          "Privately financed enrollment হলে JASSO university nomination সম্পর্কে student office-এ জিজ্ঞেস করুন, কিন্তু এটিকে guaranteed funding ধরবেন না।",
        ],
        readyWhen:
          "Written admission/funding terms বুঝে financially viable enrollment decision নেওয়া হয়েছে।",
      },
    ],
    checklist: [
      "Applicant residence/category confirmation",
      "Exact GRIPS program and funding route",
      "Application for Admission",
      "Statement of Purpose",
      "Official recommendation letter",
      "Certificate of Employment where applicable",
      "Research Proposal for applicable two-year/PhD routes",
      "Degree certificate and complete transcript",
      "English-language evidence",
      "Passport and official translations",
      "Online registration confirmation",
      "Tracked supporting-document delivery",
    ],
    afterSubmission: [
      "GRIPS, sponsor, Embassy/JICA/IMF এবং spam-folder messages আলাদাভাবে monitor করুন।",
      "Employer nomination বা additional verification চাইলে original records দিয়ে দ্রুত respond করুন।",
      "Offer পেলে scholarship provider-এর return-to-home-country, employment ও reporting obligations পড়ুন।",
      "JASSO Honors Scholarship কেবল privately financed eligible students-এর university nomination; direct JASSO application নয়।",
    ],
    cautions: [
      "Japan-resident applicant overseas deadline নিজের ক্ষেত্রে automatically ব্যবহার করবেন না।",
      "MEP direct application externally funded বা self-financed applicants-এর জন্য; JISPA route sponsor-managed।",
      "EPP 2027–28 suspended—পুরোনো page দেখে apply করবেন না।",
      "ADB-JSP applicant-এর existing master’s degree থাকলে eligibility নাও থাকতে পারে।",
      "JASSO ¥48,000 stipend primary full-funding substitute নয় এবং nomination guaranteed নয়।",
    ],
    officialLinks: [
      {
        label: "GRIPS How to Apply",
        href: "https://www.grips.ac.jp/en/admissions/apply/",
        description: "Open programs, forms, submission steps ও suspended program notice দেখুন।",
      },
      {
        label: "GRIPS 2027 scholarship matrix",
        href: "https://www.grips.ac.jp/uploads/admissions/2026/07/GRIPS_Scholarships_2027.pdf",
        description: "Program-specific deadlines, eligibility এবং coverage compare করুন।",
      },
      {
        label: "GRIPS application deadlines",
        href: "https://www.grips.ac.jp/en/admissions/deadline/",
        description: "Residence category, program ও funding-specific deadlines verify করুন।",
      },
      {
        label: "John Stachurski faculty profile",
        href: "https://www.grips.ac.jp/list/en/facultyinfo/stachurski_john/",
        description: "Computational economics, dynamic programming ও numerical-method fit দেখুন।",
      },
      {
        label: "Yosuke Yasuda faculty profile",
        href: "https://www.grips.ac.jp/list/en/facultyinfo/yasuda_yosuke/",
        description: "Game theory, market design ও matching research fit দেখুন।",
      },
      {
        label: "Hyoung-kyu Chey faculty profile",
        href: "https://www.grips.ac.jp/list/en/facultyinfo/chey_hyoung-kyu/",
        description: "International political economy, cryptocurrency ও CBDC research দেখুন।",
      },
    ],
  },
  {
    slug: "university-of-aizu-cse-masters-2027",
    country: "japan",
    university: "University of Aizu",
    title: "University of Aizu CSE: April/October 2027 Japan-Resident Master's Guide",
    summary:
      "Japan-এ বসবাসকারী international applicant-এর জন্য correct route, exact December deadline, prospective-adviser approval, IELTS/MOI rules, on-campus English oral, complete document workflow, software/cloud faculty fit এবং realistic self-funded budget—সব এক জায়গায়।",
    label: "Dec 7–14, 17:00 JST · Supervisor + on-campus oral",
    funding:
      "Regular admission defaultভাবে self-funded। AY2027 aid এখনো final নয়; competitive semester tuition reduction, private awards ও paid TA work admission-এর সঙ্গে guaranteed নয় এবং Japan-resident applicant pre-arrival JASSO/MEXT route ধরে budget করতে পারবেন না।",
    duration: "2 years · April or October 2027 · Aizu-Wakamatsu campus",
    audience:
      "Japan-resident CS, CSE, software, IT, cloud, security, AI, data বা related bachelor graduate যিনি research-based English CSE master's চান",
    realityCheck:
      "এটি genuine low-English-threshold CSE option, কিন্তু low-effort admission নয়। AY2027 Japan-resident guide সরাসরি IELTS 3.5, TOEFL iBT 40, TOEIC 500 বা Duolingo 45 minimum এবং TOEIC 600-equivalent recommended বলে; তাই IELTS 5.5 threshold-এর ওপরে—conversion permission আলাদা করে লাগে না। Selection হলো documents + University of Aizu-তে in-person English oral: 5-minute presentation এবং প্রায় 10-minute technical Q&A; non-CSE/special cases প্রায় 30 minutes হতে পারে। Prospective adviser approval এবং international applicant-এর Research Advisor Acceptance process application-এর আগে mandatory। Next 7–14 December window থেকে April second exam অথবা October first exam—একটি বাছতে হবে; same exam হওয়ায় দুটিতে একসঙ্গে apply করা যায় না।",
    highlights: [
      "Current Japan resident-কে official ‘General Applicants (Applicants Residing in Japan)’ guide ব্যবহার করতে হবে। Outside-Japan route কেবল application opening থেকে admission procedure শেষ হওয়া পর্যন্ত Japan-এর বাইরে থাকা applicant-এর জন্য।",
      "Next application 7–14 December 2026, final receipt/submission 17:00 JST। Exam 30 January 2027 on campus; result 5 February। April entrant-এর admission procedure deadline 17 February 2027।",
      "Same December application/exam window April-2027 second admission বা October-2027 first admission target করতে পারে, কিন্তু একই examination হওয়ায় applicant দুটো একসঙ্গে select করতে পারবেন না।",
      "30 October preliminary-eligibility deadline standard 16-year foreign bachelor applicant-এর জন্য নয়; guide-এর qualification categories 9–11-এর nonstandard/15-year/individual-review cases-এর জন্য।",
      "Selection: submitted documents + English oral। Standard CSE applicant 5-minute specialist-strength/research-plan presentation এবং প্রায় 10-minute Q&A দেয়; CSE fundamentals ও English দুটোই test হয়।",
      "Published international minimum: TOEIC 500, TOEFL iBT 40, IELTS 3.5 বা Duolingo 45; TOEIC 600-equivalent ideal। Score application-এর সময় দুই বছরের মধ্যে হতে হবে।",
      "English-medium bachelor degree হলে degree-granting institution-এর document দিয়ে test requirement waive করা যায়, যেখানে English undergraduate instruction-এর official language ছিল তা প্রমাণিত। শুধু English-medium master's evidence থাকলে Admissions-এর written confirmation নিন।",
      "GRE required নয়; test দিয়ে থাকলে optional supporting record দেওয়া যায়। JLPT requirement নেই এবং university বলছে virtually all graduate classes English-এ taught।",
      "সব applicant prospective research adviser-এর approval নেবে; international applicant official Request for Research Advisor Acceptance formও process করবে। Two-page English research plan-এ adviser signature/seal বা remote হলে agreement-email copy লাগে।",
      "Application online-only নয়: original/certified papers applicant নিজে অথবা traceable post-এ জমা দেয়। Currently employed applicant-কে company/government department director-এর written approvalও দিতে হয়।",
      "Current fee reference: ¥30,000 application + ¥282,000 admission + ¥520,800/year tuition + ¥1,750 two-year insurance = প্রায় ¥1,355,350 two-year academic baseline; AY2027 amounts পরিবর্তিত হতে পারে। University living-cost estimate প্রায় ¥100,000/month, tuition ছাড়া।",
      "Strong current matches: Yutaka Watanobe—intelligent software engineering/coding support/educational data mining; Akihito Nakamura—web/cloud/database/distributed-system security; Deepika Saxena—AI cloud-resource management, cloud security ও fault-tolerant systems।",
    ],
    fit: [
      "Recognized bachelor/16-year education আছে এবং CS/CSE/SE/IT বা adjacent quantitative field-এর fundamentals defend করতে পারবেন।",
      "IELTS 5.5 বা অন্য accepted score valid; অথবা qualifying English-medium bachelor evidence official institution থেকে নিতে পারবেন।",
      "Software/cloud/security/AI experienceকে narrow research question, method, evaluation এবং two-year plan-এ রূপ দিতে পারবেন।",
      "Prospective adviser-এর current work পড়ে personalized consent request এবং official acceptance form complete করবেন।",
      "30 January Aizu-Wakamatsu on-campus English oral-এ presentation ও technical follow-up handle করতে পারবেন।",
      "Scholarship না পেলেও current প্রায় ¥1.36m academic cost + প্রায় ¥100k/month living reference-এর credible funding plan আছে।",
    ],
    quickStart: [
      "April নাকি October 2027—একটি intake লিখুন; 7–14 December, 17:00 JST application, 30 January oral ও 5 February result calendar-এ block করুন।",
      "Watanobe, Nakamura ও Saxena profiles compare করে একটি primary/backup adviser বাছুন এবং one-page concept note + CV + transcript দিয়ে tailored contact প্রস্তুত করুন।",
      "IELTS/other score-এর test date ও official copy check করুন; waiver হলে bachelor degree-এর entire English instruction প্রমাণ করা institutional letter নিন।",
      "Company/government-এ চাকরি থাকলে department director approval, sealed recommendation এবং adviser-signed two-page plan—এই slow documents এখনই শুরু করুন।",
    ],
    steps: [
      {
        title: "Japan-resident route, intake ও English gate lock করুন",
        timing: "Now · before adviser outreach",
        description:
          "Route residence দিয়ে এবং intake applicant choice দিয়ে নির্ধারিত। Standard bachelor, nonstandard qualification ও English waiver—তিনটি আলাদা rule হিসেবে মিলান।",
        actions: [
          "Current Japan address/residence card থাকলে inside-Japan guide follow করুন; application থেকে admission procedure পর্যন্ত overseas থাকবেন না হলে outside route ব্যবহার করবেন না।",
          "April second round বা October first round—একটি code বাছুন; একই 30 January exam বলে simultaneous application নিষিদ্ধ।",
          "16-year/recognized bachelor direct category guide-এ mark করুন; categories 9–11 না হলে 30 October preliminary screening universal task নয়।",
          "Score দুই বছরের মধ্যে কি না দেখুন। IELTS 5.5 সরাসরি valid threshold; waiver হলে degree-granting institution-এর undergraduate English-medium proof নিন।",
          "শুধু English-medium master's proof বা credential ambiguity থাকলে admission@u-aizu.ac.jp-এ scan দিয়ে written ruling নিন।",
        ],
        readyWhen: "Inside-Japan route, one intake, direct/pre-screen eligibility এবং accepted English evidence লিখিতভাবে clear।",
      },
      {
        title: "Current faculty fit ও formal adviser acceptance নিন",
        timing: "August–October 2026",
        description:
          "Email reply alone final file নয়। Research fit discuss করে approval, international-student acceptance form এবং signed/sealed research-plan chain complete করতে হবে।",
        actions: [
          "Software tools/coding AI হলে Yutaka Watanobe; web/cloud/distributed security হলে Akihito Nakamura; AI cloud/fault tolerance হলে Deepika Saxena compare করুন।",
          "প্রতি target-এর recent work থেকে one problem, আপনার evidence, proposed method/data এবং expected contribution নিয়ে one-page concept লিখুন।",
          "Personalized email-এ intended intake, valid English evidence, degree, relevant project ও research question দিন; CV/transcript/concept attach করুন।",
          "Approval পেলে Request for Research Advisor Acceptance form এবং M3 two-page English research plan-এর signature/seal process জিজ্ঞাসা করুন। Remote signature impractical হলে confirming email attach করার rule follow করুন।",
          "CV adviser contact-এ useful, কিন্তু standard application checklist item নয়—form list আর outreach material আলাদা রাখুন।",
        ],
        readyWhen: "একজন current faculty approve করেছেন, official international acceptance process complete এবং M3 plan submission-ready।",
      },
      {
        title: "Physical application ও English oral প্রস্তুত করুন",
        timing: "Prepare Oct–Dec · submit Dec 7–14 by 17:00 JST",
        description:
          "Inside-Japan route hard-copy/in-person or traceable-post workflow। Complete documents এবং oral readiness একই সময় শেষ করুন।",
        actions: [
          "M1e/M2, graduation/degree proof, bachelor certificate, transcript, sealed English recommendation, M3 plan, English evidence, passport এবং residence-card front/back map করুন।",
          "Currently employed হলে employer department/section director-এর written application approval নিন; company research থাকলে applicable M5 evidence prepare করুন।",
          "Non-English/Japanese records-এর translation-এ university/embassy/notary/approved-institution seal rule follow করুন।",
          "¥30,000 bank-payment proofসহ papers in person দিন বা traceable post-এ এমনভাবে পাঠান যাতে 14 December 17:00-এর মধ্যে পৌঁছায়।",
          "5-minute English slides-এ specialist strengths + research plan রাখুন; প্রায় 10-minute CSE/English Q&A এবং non-CSE হলে longer fundamentals round rehearse করুন।",
        ],
        readyWhen: "Traceable delivery/receipt saved, all originals accepted এবং 30 January on-campus oral full mock complete।",
      },
      {
        title: "Offer, current fees ও funding gap যাচাই করুন",
        timing: "Before submission and again before Feb 17 procedure",
        description:
          "Admission result scholarship result নয়। Japan-resident applicant-এর জন্য full self-funded planই decision baseline।",
        actions: [
          "Current reference দিয়ে ¥1,355,350 academic baseline এবং ¥100,000/month living estimate; housing deposit, travel, laptop/insurance buffer আলাদা যোগ করুন।",
          "AY2027 tuition notice বের হলে ¥520,800 annual reference বদলেছে কি না এবং full/two-thirds/one-third semester reduction terms verify করুন।",
          "SAISUA ¥40,000/month limited seats, Rotary Yoneyama, private awards ও paid TA-কে post-enrollment possibilities হিসেবে track করুন—promised funding নয়।",
          "Pre-arrival JASSO ¥48,000 route বা new-student University Recommendation MEXT already-Japan applicant-এর likely funding হিসেবে count করবেন না।",
          "5 February result পেলে April route-এর 17 February admission procedure/payment deadline সঙ্গে সঙ্গে confirm করুন।",
        ],
        readyWhen: "Zero-award budget affordable, AY2027 invoice verified এবং শুধু written award দিয়ে net cost কমানো হয়েছে।",
      },
    ],
    checklist: [
      "AY2027 Applicants Residing in Japan guide",
      "April-1272 or October-1273 single intake choice",
      "Direct eligibility category or applicable Oct 30 screening",
      "Prospective adviser approval",
      "Request for Research Advisor Acceptance form",
      "M1e application and M2 address/photo forms",
      "Official graduation and bachelor-degree certificates",
      "Official transcript",
      "Two-page English M3 research plan with adviser approval",
      "Sealed English recommendation",
      "Valid IELTS/TOEFL/TOEIC/Duolingo or qualifying bachelor MOI evidence",
      "Passport and residence-card front/back copies",
      "Employer/director approval if currently working",
      "M5 company-research record if applicable",
      "Certified/approved translation where required",
      "¥30,000 payment proof",
      "Traceable hard-copy delivery proof",
      "5-minute English presentation and technical Q&A bank",
      "Zero-award tuition + Aizu living budget",
    ],
    afterSubmission: [
      "Exam Admission Card ও university mail monitor করুন; venue/time card-এ confirm করে Aizu travel/weather buffer রাখুন।",
      "5-minute presentation unchanged রেখে adviser fit, fundamentals, method feasibility এবং English Q&A daily practice করুন।",
      "5 February result official page-এ check করুন; university result inquiry phone/email-এ answer দেয় না।",
      "Offer-এর সঙ্গে AY2027 tuition, waiver application, admission procedure এবং payment deadline আলাদাভাবে লিখুন।",
    ],
    cautions: [
      "IELTS 5.5 published 3.5 minimum-এর ওপরে, কিন্তু admission guarantee নয়; oral-এ CSE knowledge ও English assess হয়।",
      "TOEIC 600-equivalent recommended। Minimum scoreকে competitive score বা ‘easy admission’ বলবেন না।",
      "English-medium waiver bachelor-level official instruction evidence-এর জন্য; শুধু master's MOI হলে written confirmation নিন।",
      "Virtually all graduate classes English বলা আছে; literally every class English—এমন absolute promise করবেন না।",
      "Adviser consent এবং international acceptance form ছাড়া otherwise strong file incomplete। Consent admission guarantee নয়।",
      "April second ও October first option একই exam হওয়ায় simultaneous application করা যায় না।",
      "Inside-Japan application online নয়; 14 December 17:00 receipt/submission deadline miss হলে file accepted নয়।",
      "Current employee employer approval বাদ দেবেন না; CV standard required document ধরে checklist বিকৃত করবেন না।",
      "AY2027 fees/waiver এখনও final নয় এবং Japan-resident applicant pre-arrival JASSO/MEXT ধরে budget করবেন না।",
    ],
    officialLinks: [
      { label: "AY2027 Japan-resident Master's guide", href: "https://u-aizu.ac.jp/files/admissions/2027_m_in_e.pdf", description: "Eligibility, dates, adviser approval, documents, English oral, fees ও residence rules পড়ুন।" },
      { label: "Master's admissions hub", href: "https://u-aizu.ac.jp/en/admissions/graduate/master/", description: "Current guides, forms এবং Japan/outside-Japan routes দেখুন।" },
      { label: "Graduate admissions schedule", href: "https://u-aizu.ac.jp/en/admissions/graduate/schedule/", description: "Application, exam, result ও admission-procedure dates recheck করুন।" },
      { label: "Admission policy and English teaching", href: "https://u-aizu.ac.jp/en/curriculum/policy/admission/", description: "Graduate academic expectations এবং virtually-all-English teaching context বুঝুন।" },
      { label: "University fees", href: "https://u-aizu.ac.jp/en/admissions/tuition/", description: "Current admission, tuition এবং reduction notices verify করুন।" },
      { label: "International-student scholarships", href: "https://u-aizu.ac.jp/en/curriculum/internal/international/", description: "SAISUA, private awards, JASSO/MEXT context ও current notices দেখুন।" },
      { label: "Current graduate faculty", href: "https://u-aizu.ac.jp/en/intro/faculty/graduate/", description: "AY2027 adviser eligibility ও research fields verify করুন।" },
      { label: "Professor Yutaka Watanobe", href: "https://u-aizu.ac.jp/research/faculty/detail?cd=90064&lng=en", description: "Intelligent software engineering, coding support ও educational-data-mining fit দেখুন।" },
      { label: "Professor Akihito Nakamura", href: "https://u-aizu.ac.jp/research/faculty/detail?cd=90016&lng=en", description: "Cloud/web/database/distributed-systems security research match দেখুন।" },
      { label: "Associate Professor Deepika Saxena", href: "https://u-aizu.ac.jp/research/faculty/detail?cd=90155&lng=en", description: "AI cloud-resource management, security ও fault-tolerance fit দেখুন।" },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "musashino-data-science-masters-2027",
    country: "japan",
    university: "Musashino University",
    title: "Musashino University Data Science Master's: April 2027 Admission Guide",
    summary:
      "Japan-resident international applicant-এর জন্য correct route, তিনটি application round, online Data Science exam, language reality, final tuition এবং self-funded application plan—সব এক জায়গায়।",
    label: "Round I opens Aug 18 · Self-funded · language check",
    funding:
      "Admission-linked full scholarship নেই। 2027 base tuition দুই বছরে ¥1,540,000; university-nominated aid বা JASSO আলাদা, competitive এবং guaranteed নয়।",
    duration: "2 years · April 2027 · Ariake Campus, Tokyo",
    audience:
      "Japan-এ বসবাসকারী CS, CSE, software, AI, data বা related bachelor's graduate যিনি research-based Data Science master's চান",
    realityCheck:
      "এটি scholarship vacancy নয়; Musashino University-এর self-funded Master of Data Science admission route। Japan-এ থাকা foreign applicant-কে nationality নয়, residence অনুযায়ী domestic/Japan-resident guide ব্যবহার করতে হবে। Published rule-এ IELTS/TOEFL/TOEIC-এর minimum score নেই এবং IELTS 5.5 formal certificate condition পূরণ করতে পারে, কিন্তু language ability selection-এ assess হয়। University Japanese ও English—দুই ভাষায় class হওয়ার কথা বললেও পুরো degree, required credits, supervision, thesis ও defence 100% English-এ শেষ করা যাবে—এমন guarantee পাওয়া যায়নি। Apply করার আগে nyushi@musashino-u.ac.jp থেকে written confirmation নেওয়া essential।",
    highlights: [
      "Japan-resident Intake I application 18–27 August 2026; exam 20 September; result 30 September। এরপর Intake II 16–25 November এবং Intake III 25 January–3 February।",
      "International-student selection online: 60-minute Data Science essay 100 marks এবং প্রায় 15-minute interview/oral examination 100 marks; language ability-ও assess করা হয়।",
      "Overall program capacity 10—এটি 10টি international seat নয়। Overseas route-এ আলাদাভাবে কেবল ‘a few students’ বলা আছে।",
      "TOEFL iBT, IELTS বা TOEIC L&R-এর 1 August 2024 বা পরের certificate গ্রহণযোগ্য; published minimum নেই, কিন্তু official/original delivery rule কঠোর এবং MOI substitute হিসেবে listed নয়।",
      "GRE, GMAT বা numerical minimum GPA published requirement নয়; তবু transcript, research plan, essay এবং oral assessment দিয়ে academic readiness বিচার হবে।",
      "Program-এ 30 credits ও master's thesis; project options-এর মধ্যে Semantic Computing & AI, Conscious AI & NLP, AI Algorithms, Data Science Business, Temporal/Social Data Mining এবং Human–AI Interaction আছে।",
      "2027 fee final: first year ¥895,000, second year ¥645,000, base total ¥1,540,000; insurance ও কিছু practical/experiment cost অতিরিক্ত হতে পারে।",
      "Web registration ও payment-এর পরও application complete নয়—original/certified physical documents Japan Post-এর prescribed tracked express method-এ deadline অনুযায়ী পাঠাতে হবে।",
    ],
    fit: [
      "আপনার 4-year bachelor's, 16 years of formal education বা accepted equivalent qualification আছে।",
      "আপনি Japan-এ valid Student, Permanent Resident, spouse/long-term status-এ আছেন, অথবা admission-এর পর Student status-এ change করতে পারবেন।",
      "AI, NLP, data mining, software/AI systems, human–AI interaction বা data-driven business নিয়ে specific research question তৈরি করতে পারবেন।",
      "Data Science essay ও oral interview-এর জন্য fundamentals, research logic এবং language communication practice করতে প্রস্তুত।",
      "Scholarship না পেলেও tuition ও Tokyo living cost-এর credible funding evidence ও fallback budget দেখাতে পারবেন।",
    ],
    quickStart: [
      "Admissions office-কে আজই লিখুন: April 2027-এ আপনার target project-এর required courses, supervision, thesis ও final examination সম্পূর্ণ English-এ করা যাবে কি না।",
      "আপনার Japan residence status ও standard bachelor's eligibility মিলিয়ে Intake I direct application সম্ভব কি না check করুন; nonstandard equivalency হলে Intake I pre-screening ইতিমধ্যে শেষ।",
      "IELTS/TOEFL/TOEIC certificate date ও official delivery method verify করুন এবং দুইজন referee-কে sealed assessment report-এর জন্য এখনই বলুন।",
      "একটি project বেছে 800–1,000 শব্দের working research-plan draft করুন: problem, prior work, data, method, evaluation, ethics এবং Musashino fit।",
    ],
    steps: [
      {
        title: "সঠিক applicant route ও deadline বাছুন",
        timing: "এখনই—route ভুল হলে পুরো application invalid হতে পারে",
        description:
          "Musashino residence দিয়ে route নির্ধারণ করে। Japan-এ থাকা Bangladeshi বা অন্য foreign national-ও Japan-resident guide follow করবেন; overseas guide শুধু Japan-এর বাইরে থাকা এবং Japanese residence status না থাকা non-Japanese applicant-এর জন্য।",
        actions: [
          "Japan-resident Intake I: web/postal application 18–27 August 2026 (postmark), exam 20 September, result 30 September এবং enrolment procedure 30 September–9 October লিখে রাখুন।",
          "Backup হিসেবে Intake II: 16–25 November, exam 20 December, result 23 December; Intake III: 25 January–3 February, exam 28 February, result 5 March calendar-এ রাখুন।",
          "Standard 4-year bachelor's/16-year education category হলে advance eligibility screening সাধারণত প্রয়োজন নেই।",
          "Nonstandard/equivalent qualification হলে Round I screening 13–16 July-এ শেষ; Round II 19–22 October বা Round III 21–24 December-এর screening আগে complete করতে হবে।",
          "Japan-এর বাইরে no-residence-status applicant হলে only overseas guide ব্যবহার করুন: 1–18 August 2026 documents-arrival window এবং একটিই selection round।",
        ],
        readyWhen:
          "আপনার residence-based route, eligibility category, application window, postmark/arrival rule এবং backup round এক পাতায় পরিষ্কার।",
      },
      {
        title: "Language eligibility আর English-only study আলাদা করে verify করুন",
        timing: "Round I ধরলে আজই email ও score-delivery check",
        description:
          "English certificate জমা দেওয়া JLPT-এর বিকল্প হতে পারে, কিন্তু admission-language rule degree-এর teaching-language guarantee নয়। এই distinction লিখিতভাবে clear না করে application fee দেবেন না।",
        actions: [
          "IELTS, TOEFL iBT বা TOEIC L&R certificate 1 August 2024 বা তার পরে issued কি না check করুন; কোনো published minimum score নেই।",
          "IELTS 5.5 formal submission rule পূরণ করলেও competitive result guarantee করে না—essay/interview-এ communication এবং Data Science reasoning assess হবে।",
          "MOI guideline-এর accepted evidence list-এ নেই; admissions office written exception না দিলে MOI waiver ধরে plan করবেন না।",
          "TOEFL/IELTS-এর test-specific official/original reporting instructions follow করুন; downloaded result একা accepted নয় এবং direct delivery-তে সময় লাগতে পারে।",
          "nyushi@musashino-u.ac.jp-এ project name দিয়ে জিজ্ঞাসা করুন: all required 30 credits, supervision, thesis writing এবং defence English-only করা যাবে কি না।",
        ],
        readyWhen:
          "Valid language evidence হাতে আছে এবং English-only completion সম্ভব কি না admissions office-এর dated written reply সংরক্ষিত।",
      },
      {
        title: "Project ও current graduate-faculty fit তৈরি করুন",
        timing: "3–5 দিন focused research",
        description:
          "Guide-এ একটি research project select করতে হয়। Published faculty/project list research-fit evidence; এটি funded vacancy বা কোনো professor-এর guaranteed acceptance নয়।",
        actions: [
          "নয়টি project-এর description পড়ুন এবং আপনার prior software/data work-এর সঙ্গে সবচেয়ে defensible একটি primary ও একটি backup project বাছুন।",
          "NLP, text mining, AI application বা digital health হলে Virach Sornlertlamvanich-এর current work; AI/ML/CPS হলে Souichi Oka; Human–AI interaction হলে Ryota Nakamura-এর work পড়ুন।",
          "Data Science Business-এর জন্য Naoki Ishibashi এবং software project management/digital economy/NLP-এর জন্য Thatsanee Charoenporn-এর current faculty fit compare করুন।",
          "প্রতি fit-এর জন্য recent theme, আপনার relevant skill, proposed data/method এবং expected contribution—চার column-এর note বানান।",
          "Yusuke Takahashi Faculty of Data Science-এ active হলেও 2027 graduate teaching-faculty list-এ নেই; তাঁকে confirmed master's supervisor হিসেবে লিখবেন না।",
        ],
        readyWhen:
          "Chosen project, one primary faculty fit, one backup fit এবং প্রত্যেকটির specific evidence research plan-এ যুক্ত হয়েছে।",
      },
      {
        title: "Research plan ও দুইটি assessment report প্রস্তুত করুন",
        timing: "কমপক্ষে 1–2 সপ্তাহ; referee-কে যত দ্রুত সম্ভব বলুন",
        description:
          "Application-এর সবচেয়ে time-sensitive অংশ হলো research plan এবং দুইজন আলাদা evaluator-এর sealed assessment report। Generic recommendation-এর বদলে evidence-based evaluation দরকার।",
        actions: [
          "Research plan-এ title, problem, research question, related work, proposed data, method, evaluation, feasibility, ethics এবং two-year schedule রাখুন।",
          "Software-development background থাকলে শুধু app বানানোর কথা নয়—measurable research question, comparison baseline ও validation method দেখান।",
          "Academic applicant হলে current seminar/thesis supervisor এবং আরেকজন faculty; working-adult হলে direct supervisor ও আরেকজন manager/evaluator-এর মতো guide-aligned referees বাছুন।",
          "প্রত্যেক referee-কে official form, sealing/signing instruction, CV, transcript, research summary এবং আপনার internal deadline দিন।",
          "Statement, plan, transcript এবং interview story-তে একই academic goal ও Musashino-specific fit বজায় রাখুন।",
        ],
        readyWhen:
          "Final research plan আছে এবং দুইজন referee signed/sealed report সময়মতো দেবেন বলে নিশ্চিত করেছেন।",
      },
      {
        title: "Academic, identity ও translation documents complete করুন",
        timing: "Application window-এর আগে",
        description:
          "Original/certified record এবং translation rules ভুল হলে online form complete হলেও file অসম্পূর্ণ হতে পারে। সব document-এর একটি requirement tracker রাখুন।",
        actions: [
          "সব higher-education institution-এর original transcript ও graduation/expected-graduation certificate সংগ্রহ করুন।",
          "Document Japanese, English বা Chinese ছাড়া অন্য ভাষায় হলে required certified translation এবং certification rule follow করুন।",
          "Passport identity/status pages, residence card/status evidence এবং application photo প্রস্তুত করুন।",
          "Japan-এ Japanese-language school-এ কখনো পড়লে current/previous school-এর transcript ও attendance certificate requirement check করুন।",
          "International online-selection pledge এবং working-adult category হলে employment/work-history document complete করুন।",
        ],
        readyWhen:
          "প্রতিটি official checklist item-এর পাশে prepared, original/certified, translated এবং envelope-ready status দেখা যাচ্ছে।",
      },
      {
        title: "Web application, payment ও postal submission শেষ করুন",
        timing: "Intake I: 18–27 August 2026",
        description:
          "Portal entry application-এর এক অংশ। Fee payment এবং prescribed physical mailing—দুটিই deadline-এর মধ্যে না হলে submission complete হবে না।",
        actions: [
          "Web portal-এ passport অনুযায়ী নাম, degree, residence status, selected project এবং exam details input করুন।",
          "Entrance examination fee ¥35,000 এবং listed processing charge ¥780 budget করুন; payment receipt save করুন।",
          "Portal-generated forms print/sign করে photo, originals, sealed assessment reports এবং required evidence official order-এ সাজান।",
          "Japan-resident route-এ post office থেকে prescribed 簡易書留・速達 (simplified registered express) method ব্যবহার করে postmark deadline-এর মধ্যে পাঠান।",
          "Scanned full application, payment proof, tracking number এবং delivery status নিজের archive-এ রাখুন।",
        ],
        readyWhen:
          "Portal/payment confirmation আছে এবং tracked postal packet deadline rule মেনে accepted/delivered দেখাচ্ছে।",
      },
      {
        title: "Online essay, oral exam ও technology rehearsal করুন",
        timing: "Submission থেকে 20 September exam পর্যন্ত",
        description:
          "International route documents-only নয়। 100-mark Data Science essay এবং 100-mark interview/oral exam-এর জন্য concepts, structured writing, research defence ও language response practice দরকার।",
        actions: [
          "60 মিনিটে problem framing, assumptions, method, trade-off, ethical risk এবং conclusionসহ Data Science essay লেখার timed practice করুন।",
          "Statistics, machine learning, data/database fundamentals, evaluation metrics, bias/privacy এবং আপনার proposed domain-এর core concepts revise করুন।",
          "15 মিনিটের mock oral করুন: self-introduction, research question, method, why Musashino/project, limitations এবং career goal।",
          "Quiet private room, stable internet, approved single device, camera/microphone এবং required connection test প্রস্তুত করুন; virtual background বা recording ব্যবহার করবেন না।",
          "Japanese proof না দিয়ে English route নিলে পুরো mock interview clear English-এ record করে weak answers ঠিক করুন।",
        ],
        readyWhen:
          "Timed essay consistently complete হচ্ছে এবং 15-minute mock oral-এ notes ছাড়া research plan defend করতে পারছেন।",
      },
      {
        title: "Tuition, living cost ও scholarship fallback তৈরি করুন",
        timing: "Apply করার আগে; offer পাওয়ার পর final update",
        description:
          "এটি fully funded opportunity নয়। Admission decision এবং scholarship/fee support আলাদা; লিখিত award ছাড়া budget কমিয়ে দেখানো ঝুঁকিপূর্ণ।",
        actions: [
          "2027 final university charges লিখুন: year 1 ¥895,000, year 2 ¥645,000, base total ¥1,540,000; insurance/practical cost-এর buffer যোগ করুন।",
          "Ariake/Tokyo housing, food, transport, health insurance, visa এবং emergency expense দিয়ে 24-month budget বানান।",
          "Graduate Special Scholarship A up to ¥200,000 কেবল eligible Musashino undergraduate-to-master's progression-এর জন্য—external applicant হিসেবে এটি budget করবেন না।",
          "University-এর international scholarship page-এ post-enrolment/internal screening route দেখুন; nomination মানেই award নয়।",
          "JASSO Honors Scholarship ¥48,000/month হতে পারে, সাধারণত April entrant-এর 12 months; university recommendation, eligibility ও limited quota থাকায় এটিকে bonus scenario রাখুন।",
        ],
        readyWhen:
          "No-aid, partial-aid ও JASSO-award—তিন scenario-তে tuition ও living cost কীভাবে চলবে তার credible plan আছে।",
      },
    ],
    checklist: [
      "Correct Japan-resident 2027 application guide",
      "Residence status and eligibility-category check",
      "English-only study confirmation from admissions",
      "Valid original/official IELTS, TOEFL or TOEIC evidence",
      "Application form and compliant photo",
      "Research project selection",
      "Detailed research plan",
      "Original transcript",
      "Original graduation/expected-graduation certificate",
      "Certified translations, where required",
      "At least two signed and sealed assessment reports",
      "Passport and residence-status documents",
      "Japanese-language-school transcript/attendance, if applicable",
      "International online-exam pledge",
      "Work history, only when the selected category requires it",
      "¥35,000 examination fee + ¥780 processing charge",
      "Postal tracking and complete submission copy",
      "Two-year self-funding and living-cost budget",
    ],
    afterSubmission: [
      "Postal tracking, application portal, email এবং spam folder নিয়মিত monitor করুন; missing-item request এলে original record দেখে দ্রুত উত্তর দিন।",
      "University নির্ধারিত connection test ও online-exam instructions সময়মতো complete করুন।",
      "Essay ও oral preparation চালিয়ে যান—published minimum language score না থাকা selection সহজ হওয়ার প্রমাণ নয়।",
      "Offer পেলে 30 credits, thesis supervision language, payment deadline এবং any scholarship decision লিখিত documents দিয়ে আবার confirm করুন।",
      "Scholarship result না এলে self-funded enrolment নেওয়া সম্ভব কি না final 24-month budget দিয়ে সিদ্ধান্ত নিন।",
    ],
    cautions: [
      "Japan resident হয়েও overseas guide ব্যবহার করবেন না; দুই route-এর deadline, capacity ও delivery rule আলাদা।",
      "Overall capacity 10-কে 10 international seats ভাববেন না।",
      "No published minimum IELTS/GPA মানে low requirement, easy admission বা guaranteed acceptance নয়।",
      "English certificate accepted হওয়া আর পুরো degree English-taught হওয়া এক কথা নয়—written confirmation নিন।",
      "MOI, GRE/GMAT waiver বা unlisted document exception অনুমান করবেন না।",
      "Nonstandard eligibility assessment low GPA waiver নয়; credential category নির্ধারণের pre-screening।",
      "Web form submit করেই থামবেন না—fee এবং physical postal packet দুটিই required।",
      "Downloaded TOEFL/IELTS result একা যথেষ্ট ধরে নেবেন না; official score-delivery rule অনুসরণ করুন।",
      "Yusuke Takahashi-কে current graduate supervisor হিসেবে claim করবেন না; current graduate faculty list ব্যবহার করুন।",
      "JASSO বা university award written confirmation ছাড়া funding হিসেবে গণনা করবেন না।",
    ],
    officialLinks: [
      {
        label: "Graduate admissions downloads",
        href: "https://www.musashino-u.ac.jp/admission/download/graduate_school.html",
        description: "Latest guide, route-specific PDF এবং official update date এখান থেকে verify করুন।",
      },
      {
        label: "2027 Japan-resident English guide",
        href: "https://www.musashino-u.ac.jp/admission/Admission%20to%20Master%27s%20program%20in%20Data%20Science%20%28For%20Admission%20in%20April%202027%29.pdf",
        description: "Japan resident-এর dates, eligibility, documents, exam ও postal rules পড়ুন।",
      },
      {
        label: "2027 overseas-applicant guide",
        href: "https://www.musashino-u.ac.jp/admission/pdf/Admission%20to%20Master%27s%20program%20in%20Data%20Science%20%28International%20Applicants%29%28For%20Admission%20in%20April%202027%29.pdf",
        description: "শুধু Japan-এর বাইরে no-residence-status applicant-এর আলাদা one-round route compare করুন।",
      },
      {
        label: "Data Science program, projects & faculty",
        href: "https://www.musashino-u.ac.jp/academics/graduate_school/course/data_science/major/",
        description: "Degree, credits, nine research projects ও current graduate faculty verify করুন।",
      },
      {
        label: "2027 official fee table",
        href: "https://www.musashino-u.ac.jp/admission/pdf/646bef0aef06fc87f5caac1f9cc96c72.pdf",
        description: "First-year, second-year ও additional-cost notes-এর final 2027 figures দেখুন।",
      },
      {
        label: "International-student scholarships",
        href: "https://www.musashino-u.ac.jp/international/international-students/support/scholarships.html",
        description: "University screening, eligibility ও current external-award notices দেখুন।",
      },
      {
        label: "Graduate internal scholarships",
        href: "https://www.musashino-u.ac.jp/student-life/fees/scholarship/graduate_school_within.html",
        description: "Musashino progression-only Special Scholarship-এর restriction verify করুন।",
      },
      {
        label: "JASSO Honors Scholarship",
        href: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/about.html",
        description: "¥48,000 monthly stipend, nomination, duration ও eligibility-এর official terms পড়ুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "hosei-iist-masters-scholarships-2027",
    country: "japan",
    university: "Hosei University",
    title: "Hosei IIST English Master's: September 2027 Planning & Aid Guide",
    summary:
      "Japan-resident applicant-এর জন্য annual IIST intake, mandatory questionnaire/supervisor consent, exact IELTS/TOEFL rule, MOI prohibition, TAO + online interview workflow, current fee baseline এবং Bangladesh-specific Daddy Longlegs aid নিয়ে source-checked planning guide।",
    label: "2027 guide pending · IELTS 5.5 · MOI not accepted",
    funding:
      "Admission-time full funding নেই। Current reference-এ 20% graduate tuition reduction, ¥200,000 Centennial এবং ¥200,000/year Daddy Longlegs after enrollment competitive; full first payment ও Tokyo living budget আগে প্রস্তুত রাখতে হবে।",
    duration: "2 years · one annual intake · September 16 enrollment reference",
    audience:
      "CS, information science, applied informatics, systems বা related engineering graduate যিনি Tokyo-তে English research master's চান এবং IELTS Academic 5.5/TOEFL iBT 72 meet করেন",
    realityCheck:
      "IIST strong IELTS-5.5 option, কিন্তু attachment-এর MOI claim ভুল। Latest official guide স্পষ্টভাবে English-medium Certificate এবং Duolingo ‘NOT acceptable’ বলে; native-English applicant ছাড়া test exemption নেই। As of August 12, 2026, AY2027 guideline প্রকাশিত হয়নি—IIST বলে guide সাধারণত October–December-এ update হয় এবং বছরে একবার September-16 entry examination চলে। Latest 2026 v3 reference-এ questionnaire/supervisor consent 13 March-এর মধ্যে, TAO 1–15 April, online interview 9 May এবং result 21 May ছিল; এগুলো 2027 dates নয়। Capacity 15 এবং selection documents + online interview, তাই low language threshold মানে easy admission নয়।",
    highlights: [
      "IIST English route Computer and Information Sciences, Applied Informatics, Systems Engineering and Science ও other listed fields cover করে; exact major ও degree prospective supervisor-এর affiliation দিয়ে নির্ধারিত।",
      "AY2027 guide এখনো live নয়। Official admissions page annual update October–December বলে; next-year questionnaire Google Form সাধারণত around July opens—current form/status hge@hosei.ac.jp-এ verify করুন।",
      "Latest 2026 v3 planning reference: eligibility screening 9–16 February only if applicable; supervisor-consent deadline 13 March; TAO 1–15 April; online interview 9 May; result 21 May; enrollment 16 September।",
      "English gate exact: IELTS Academic 5.5+ বা TOEFL iBT/Paper Edition 72+। IELTS Online accepted; TOEFL Home Edition নয়। Test-date cutoff each cycle-এর final guide থেকে নিতে হবে।",
      "English-medium certificate/MOI এবং Duolingo explicitly not accepted। Native language English হলে only prior consultation-এর মাধ্যমে exemption possible।",
      "Application-এর আগে questionnaire mandatory matching process। Graduate Schools Section suitable prospective supervisor identify/coordinate করে; adviser consent পাওয়ার পরই apply এবং প্রায় 1,000-word Plan of Study adviser consultation-এ তৈরি হয়।",
      "Japan-resident applicant eligible। Latest checklist-এ overseas applicant passport copy দেয়; Japan resident তার বদলে current municipal Certificate of Residence/Juminhyo upload করে।",
      "Selection application documents + online interview; separate written technical exam বা GRE requirement latest guide-এ listed নয়। Public capacity 15, তাই ‘documents/interview only’কে easy admission বলবেন না।",
      "Latest master's documents: Form 1, adviser-consulted ~1,000-word Form 2, transcript, bachelor degree proof, signed recommendation, official English score, fee proof এবং Japan resident-এর Juminhyo।",
      "Latest score-delivery rule শুধু upload নয়: TOEFL official report institution code 0407/department 60-এ এবং IELTS TRF test centre থেকে application period-এর মধ্যে direct arrivalও লাগে।",
      "2026 fee reference: ¥35,000 exam; ¥200,000 admission; ¥880,000/year tuition + ¥100,000/year facility + ¥80,000/year lab = ¥2,320,000 two-year school charges before exam/living।",
      "Funding reference: 20% graduate tuition reduction after enrollment; Centennial ¥200,000 competitive; Daddy Longlegs Bangladeshসহ listed countries থেকে only a few, ¥200,000 annually। কোনোটি admission offer-এর guaranteed full scholarship নয়।",
    ],
    fit: [
      "Recognized bachelor/equivalent আছে এবং chosen IIST major-এর academic foundation demonstrate করতে পারবেন।",
      "IELTS Academic 5.5+ বা TOEFL iBT 72+ valid official score আছে; MOI দিয়ে replace করার plan নেই।",
      "Questionnaire দিয়ে supervisor match নিয়ে recent lab work-এর সঙ্গে focused, feasible research plan তৈরি করতে পারবেন।",
      "Online English interview-এ prior study, technical foundation, proposed method, feasibility ও career impact defend করতে পারবেন।",
      "Bangladesh-specific Daddy Longlegs-এর partial support useful হলেও only-a-few selection এবং after-enrollment timing বুঝেছেন।",
      "Award/20% refund না পেলেও ¥2.32m current school-charge reference + Tokyo living cost fund করতে পারবেন।",
    ],
    quickStart: [
      "IIST admissions page ও questionnaire form এখনই check করুন; AY2027 form/live status এবং guide-publication timing hge@hosei.ac.jp-এ confirm করুন।",
      "IELTS Academic 5.5/TOEFL 72 score validity ও direct-report lead time check করুন—English-medium certificate জমা দিয়ে waiver হবে না।",
      "Questionnaire-এর জন্য degree/transcript, concise CV, research interests ও তিনটি potential lab/major fit প্রস্তুত করুন; direct random faculty outreach দিয়ে official matching bypass করবেন না।",
      "No-aid, 20% refund এবং ¥200k grant scenario-তে ¥2.32m school cost + Tokyo living budget লিখুন; full amount আগে pay করার cash flow রাখুন।",
    ],
    steps: [
      {
        title: "AY2027 guide, annual route ও questionnaire status lock করুন",
        timing: "Now–December 2026",
        description:
          "IIST বছরে একবার intake চালায়। 2026 v3 কেবল preparation baseline; 2027 PDF/form live না হওয়া পর্যন্ত date বা score-validity cutoff final নয়।",
        actions: [
          "Admissions page weekly monitor করুন এবং questionnaire form AY2027 candidate-এর জন্য open কি না hge@hosei.ac.jp-এ জিজ্ঞাসা করুন।",
          "New PDF এলে eligibility-screening, questionnaire/consent, TAO, interview, result, payment ও September-16 enrollment dates line-by-line নিন।",
          "Japan-resident route-এর Juminhyo, interview mode এবং residence/security-trade documentation 2027 checklist থেকে confirm করুন।",
          "Latest 2026 v3 guide আলাদা reference folder-এ রাখুন; superseded October draft link দিয়ে final file বানাবেন না।",
        ],
        readyWhen: "Current questionnaire status এবং official AY2027 guide-এর deadlines/rules source-linked tracker-এ clear।",
      },
      {
        title: "Mandatory questionnaire ও supervisor-consent workflow সম্পন্ন করুন",
        timing: "Form open হলে · prior cycle-এ March 13 ছিল",
        description:
          "Questionnaire optional advice service নয়। IIST matching-এর পরে prospective supervisor-এর consent পেয়ে তারপর application করা যায়।",
        actions: [
          "Computer and Information Sciences, Applied Informatics, Systems Engineering or other major-এর মধ্যে bachelor/projects-এর strongest match বাছুন।",
          "Questionnaire-এ education, skills, research interests ও desired problems specificভাবে লিখুন; faculty নাম অনুমান করে mass email করবেন না।",
          "Matched supervisor-এর publications থেকে problem–method–result notes বানিয়ে নিজের project evidence ও missing preparation map করুন।",
          "Supervisor consultation-এ approximately 1,000-word Plan of Study: problem, prior work, method/data, evaluation, schedule এবং IIST fit refine করুন।",
          "Consent/communication Hosei-এর official @hosei.ac.jp বা @adm.hosei.ac.jp channel থেকে এসেছে কি না verify করুন।",
        ],
        readyWhen: "Matched supervisor consent documented এবং adviser-consulted Form 2 research plan application-ready।",
      },
      {
        title: "English reporting ও TAO document package প্রস্তুত করুন",
        timing: "3–4 months before expected application",
        description:
          "IELTS 5.5 meet করলেই upload-only কাজ শেষ নয়। Latest route direct institutional score delivery এবং TAO/email dual-file workflow ব্যবহার করেছে।",
        actions: [
          "IELTS Academic 5.5+ অথবা TOEFL 72+ valid date check করুন; MOI, English-medium certificate বা Duolingo backup হিসেবে accepted নয়।",
          "Final 2027 rule এলে TOEFL code/department বা IELTS test-centre direct reporting এমন সময়ে request করুন যাতে application period-এর মধ্যে arrival হয়।",
          "Form 1/photo, Form 2, transcript, bachelor degree proof, signed recommendation, score proof, fee proof এবং Japan resident-এর Juminhyo প্রস্তুত করুন।",
          "Non-English/Japanese document-এর certified translation chain এবং exact issuing/certification rule follow করুন।",
          "Latest workflow অনুযায়ী Form 1/Form 2 PDF TAO-তে এবং Word copies hge@hosei.ac.jp-এ পাঠানোর rule 2027 PDF থেকে recheck করুন।",
        ],
        readyWhen: "Official score delivery ordered, application evidence accepted format-এ এবং TAO/email submission map complete।",
      },
      {
        title: "Online interview ও after-enrollment aid বাস্তবভাবে plan করুন",
        timing: "Application through enrollment",
        description:
          "Latest route documents + online interview। Aid application admission-এর পরে; full first-year preparedness ছাড়া offer accept করা unsafe।",
        actions: [
          "10-minute/longer mock answers-এ academic preparation, proposal method, faculty fit, feasibility, ethical/security issues এবং career contribution practice করুন।",
          "2026 reference দিয়ে ¥35,000 exam + ¥2.32m school charges + Tokyo living cost-এর no-aid budget করুন।",
          "20% tuition reduction post-enrollment/refund timing, Centennial ¥200k এবং Daddy Longlegs ¥200k annual/only-a-few October application আলাদা row-তে লিখুন।",
          "Japan resident হিসেবে pre-arrival JASSO ¥48k × 6 বা MEXT internal automatic aid ধরে budget করবেন না।",
          "Offer/payment-এর আগে AY2027 scholarship, full-first-payment এবং refund timing written notice থেকে confirm করুন।",
        ],
        readyWhen: "Interview-ready, zero-aid cash flow affordable এবং only confirmed post-enrollment award দিয়ে budget adjust হয়েছে।",
      },
    ],
    checklist: [
      "Official AY2027 IIST guide and annual schedule",
      "Mandatory questionnaire submitted",
      "Prospective supervisor consent",
      "Adviser-consulted approximately 1,000-word Plan of Study",
      "Form 1 application and compliant photo",
      "Official transcript and bachelor degree certificate",
      "Signed recommendation",
      "IELTS Academic 5.5+ or TOEFL 72+ official evidence",
      "Direct score-report delivery confirmation",
      "Current municipal Juminhyo for Japan resident",
      "Certified translations where required",
      "¥35,000 reference exam-fee payment proof",
      "TAO PDF and required Word-email workflow",
      "Online interview practice",
      "No-aid ¥2.32m reference school-cost budget",
      "Post-enrollment aid tracker",
    ],
    afterSubmission: [
      "TAO, registered email/spam এবং official Hosei messages monitor করুন; missing score/direct-delivery query দ্রুত resolve করুন।",
      "Plan of Study না বদলে research problem, method, fundamentals এবং faculty-fit follow-up online mock চালিয়ে যান।",
      "Offer পেলে first payment, 20% reduction application/refund এবং October scholarship calls আলাদা calendar করুন।",
      "Award notification-এর আগে full funding বা Bangladesh-specific grant selection assume করবেন না।",
    ],
    cautions: [
      "AY2027 guide এখনো নেই; 2026 dates বা test cutoff date 2027 deadline হিসেবে copy করবেন না।",
      "English-medium certificate/MOI explicitly not accepted। IELTS Academic 5.5/TOEFL 72 ছাড়া waiver ধরে আবেদন করবেন না।",
      "IELTS General নয়; latest guide IELTS Online নেয়, TOEFL Home নেয় না—2027 PDF-এ আবার মিলান।",
      "Questionnaire ও supervisor consent application gate; generic direct professor contact দিয়ে official process bypass করবেন না।",
      "Capacity 15 এবং online interview selection—IELTS floor meet করাকে easy/guaranteed admission বলবেন না।",
      "Japan resident passport নয়, latest rule অনুযায়ী Juminhyo দেয়; 2027 form exact municipal fields recheck করুন।",
      "20% reduction after enrollment; full payment আগে লাগতে পারে। Daddy Longlegs only a few Bangladesh-eligible recipients, full scholarship নয়।",
      "Pre-arrival JASSO reservation current Japan resident-এর realistic funding route নয়; MEXT separate embassy/partner route।",
    ],
    officialLinks: [
      { label: "IIST admissions and questionnaire", href: "https://iist.hosei.ac.jp/admission/", description: "AY2027 guide, annual flow, questionnaire এবং official contact monitor করুন।" },
      { label: "Latest 2026 v3 application guide", href: "https://iist.hosei.ac.jp/wp/wp-content/uploads/2026/03/IIST_Guidelines-for-entrance-examination-version-3.pdf", description: "IELTS/MOI, consent, documents, online interview, fees ও 2026 dates-এর planning baseline পড়ুন।" },
      { label: "IIST scholarships and grants", href: "https://iist.hosei.ac.jp/scholarships-grants/", description: "Daddy Longlegs, Centennial, JASSO context ও current award notices দেখুন।" },
      { label: "Hosei international-student support", href: "https://www.global.hosei.ac.jp/en/students/scholarships/system/", description: "20% tuition reduction এবং international aid-এর current application/refund rules verify করুন।" },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "kic-ict-innovator-masters-2027",
    country: "japan",
    university: "Kobe Institute of Computing",
    title: "Kobe Institute of Computing ICT Innovator: October 2027 Watch Guide",
    summary:
      "Kobe-এর 100% English ICT Innovator professional master's-এর correct October intake, Japan-resident application route, English-test/MOI reality, documents + 30-minute online oral, ¥3.4m cost এবং limited renewable tuition aid নিয়ে detailed watch guide।",
    label: "October 2027 guide pending · TOEFL 80-equivalent · High cost",
    funding:
      "Primarily self-funded। Eligible self-financed Student-status international entrant admission-এর সঙ্গে competitive C-type tuition reduction চাইতে পারে; two-year total প্রায় ¥3.0m only if second-year renewal হয়। Restricted JICA/JDS/JJ-WBGSP routes ordinary applicant funding নয়।",
    duration: "2 years · October entry · Kobe · 100% English ICT Innovator Course",
    audience:
      "Software/IT, development, public-sector বা social-innovation background থেকে practical ICT-for-social-problem-solving professional master's চান—এমন applicants",
    realityCheck:
      "এই guide Kobe Institute of Computing (KIC)—Kyoto-এর KCGI নয়। English ICT Innovator Course কেবল October-entry এবং 100% English; currently advertised April 2027 ICT Professional Course আলাদা Japanese-medium program, N1 লাগে। As of August 12, 2026, October 2026 English cycle closed: overseas deadline 5 June, Japan-resident deadline 3 July। October 2027 English guide এখনো প্রকাশিত হয়নি। Current admission policy TOEFL iBT 80-equivalent English চায়; TOEFL/TOEIC/IELTS evidence accepted এবং entire English-medium degree score waiver পেতে পারে, কিন্তু কোনো official IELTS numerical equivalence নেই—তাই IELTS 5.5 accepted বলে দাবি করা যাবে না। Selection documents + প্রায় 30-minute online English oral; written technical exam/GRE নেই, তবে programটি generic easy AI master's নয়—ICT দিয়ে demonstrable social problem solving এর কেন্দ্র।",
    highlights: [
      "Exact institution: Kobe Institute of Computing, Graduate School of Information Technology, Department of Information Systems; degree Master of Science in Information Systems (professional)।",
      "ICT Innovator Course October-entry এবং all courses English-এ। Curriculum ICT, ICT4D, social development/innovation, TANKYU Practice, group projects ও Specific Theme Research/master's thesis combine করে।",
      "April ICT Professional Course আলাদা: April 2027 rounds open হলেও classes Japanese এবং N1 level required। August 21/October 16/January 8/February 19 deadlines English applicant-এর deadlines নয়।",
      "October 2026 English cycle closed: overseas applicant deadline 5 June, exam 15–27 June, result 3 July; Japan-resident deadline 3 July, online exam 18 July, result 24 July। এগুলো October 2027 dates নয়।",
      "Annual Department capacity 55 all relevant admissions/courses মিলিয়ে; 55 English Japan-resident seats নয়।",
      "Current selection application-file review + approximately 30-minute English oral; 2026 guide says examination online for all applicants। No separate written technical test এবং GRE listed নয়।",
      "Admission policy TOEFL iBT 80-equivalent চায়। Document table TOEFL/TOEIC/IELTS evidence নেয়, কিন্তু IELTS 5.5/6.0 numerical conversion publish করেনি।",
      "English-medium degree হলে score exemption possible। Guide generic ‘MOI certificate’ label দেয় না; degree-এর whole program English-medium ছিল—এমন official institutional evidence acceptable কি না KIC-এর written confirmation নিন।",
      "Japan-resident route explicitly exists এবং residence-card front/back required। Pre-application professor consent standard requirement হিসেবে listed নয়; centralized application follow করুন।",
      "Core current-reference file: application forms, up-to-1,500-word Statement of Purpose, up-to-3-page notable activities/evidence, degree, transcript, English proof/waiver evidence, ¥30,000 fee এবং residence/identity documents।",
      "Current two-year charges: ¥200,000 admission + ¥1,400,000/year tuition + ¥200,000/year facilities = ¥3,400,000; exam ¥30,000, medical ~¥3,500, second-year alumni/ceremony ¥10,000, insurance/material/laptop/living extra।",
      "Individual C-type aid eligible self-financed Student-status entrant-এর annual tuition ¥1.4m থেকে ¥1.2m করতে পারে। Standard total ¥3.4m থেকে প্রায় ¥3.0m হয় only if year-two renewal academics, conduct ও finances review-এ approved।",
    ],
    fit: [
      "Traditional CS theory/lab degree নয়; ICT দিয়ে health, agriculture, education, government, business বা development problem solve করতে চান।",
      "Software/data/web/system-development project থেকে user problem, hypothesis, implementation ও measurable social/business outcome দেখাতে পারবেন।",
      "TOEFL iBT 80-equivalent evidence আছে, অথবা entire English-medium degree waiver evidence KIC লিখিতভাবে accept করেছে।",
      "Japan-resident online English interview-এ technical project, social problem, proposed intervention, feasibility ও career contribution defend করতে পারবেন।",
      "October 2027 পর্যন্ত flexible এবং currently open Japanese April course-এর সঙ্গে English route গুলিয়ে ফেলবেন না।",
      "Aid ছাড়া ¥3.4m academic charges + Kobe living/laptop cost অথবা renewable C-type failure scenario fund করতে পারবেন।",
    ],
    quickStart: [
      "KIC-কে লিখুন: October 2027 ICT Innovator guide কখন publish হবে, Japan-resident deadline কী এবং বর্তমান residence status route-এ valid কি না।",
      "IELTS 5.5 থাকলে সরাসরি accepted বলবেন না; score report + entire-English-degree letter দিয়ে TOEFL-80 equivalence/waiver written confirmation নিন।",
      "একটি social problem বেছে one-page TANKYU concept লিখুন: affected users, root cause, ICT intervention, field validation, risks এবং measurable outcome।",
      "Standard ¥3.4m, C-type year-one only এবং C-type renewed—তিন budget বানান; scholarship না পেলেও payment সম্ভব না হলে backup রাখুন।",
    ],
    steps: [
      {
        title: "Correct KIC, English course ও October 2027 status lock করুন",
        timing: "Now · before any application fee",
        description:
          "Kobe KIC-এর English ICT Innovator এবং Japanese April ICT Professional আলাদা। AY2027 English guide প্রকাশ না হওয়া পর্যন্ত admission date অনুমান করবেন না।",
        actions: [
          "Official English course page bookmark করুন এবং October 2027 application guide/publication date KIC office-কে জিজ্ঞাসা করুন।",
          "Current Japan address, nationality এবং residence status লিখে Japan-resident category/online-exam eligibility confirm করুন।",
          "April 2027 Japanese/N1 guide ও deadlines tracker থেকে exclude করুন; course title ও language clearly tag করুন।",
          "New guide এলে application deadline, eligibility review, exam, result, fee-payment এবং enrollment dates 2026 reference-এর পাশে compare করুন।",
          "Institution name সব documents-এ ‘Kobe Institute of Computing’ রাখুন—Kyoto KCGI নয়।",
        ],
        readyWhen: "October 2027 English intake, Japan-resident deadline ও application method official PDF/reply-এ clear।",
      },
      {
        title: "English evidence ও complete document file প্রস্তুত করুন",
        timing: "Guide অপেক্ষায় parallel work",
        description:
          "TOEFL-80 equivalence বা English-degree waiver resolve না করে IELTS 5.5 দিয়ে formal eligibility assume করবেন না।",
        actions: [
          "TOEFL/TOEIC/IELTS result এবং test date দিন; KIC-কে exact equivalent/accepted evidence writtenভাবে confirm করতে বলুন।",
          "Waiver চাইলে degree-granting university থেকে whole bachelor/master program English-medium ছিল—এমন verifiable official letter নিন।",
          "Degree/graduation certificate, full transcript, application forms, residence-card front/back ও ¥30,000 fee plan প্রস্তুত করুন।",
          "Up-to-1,500-word SOP এবং up-to-3-page notable activities/evidence latest 2026 limits ধরে draft করুন; final 2027 form limits এলে adjust করুন।",
          "Overseas-only guarantor/bank/passport items নিজের Japan-resident checklist-এ automaticভাবে যোগ করবেন না; final category table follow করুন।",
        ],
        readyWhen: "Accepted English route documented এবং final-guide ছাড়া বাকি evidence category-correct, scan/paper-ready।",
      },
      {
        title: "TANKYU-focused SOP ও online oral তৈরি করুন",
        timing: "8–12 weeks before expected deadline",
        description:
          "KIC applied ICT এবং social-problem-solving দেখে। Generic ‘AI শিখব’ statement program mission-এর সঙ্গে দুর্বল fit।",
        actions: [
          "One setting, affected users, root cause, field evidence, ICT intervention, implementation partners এবং measurable outcome নির্ধারণ করুন।",
          "SOP-তে prior software/work evidence → social problem → TANKYU/ICT4D learning → proposed Specific Theme Research → career impact bridge লিখুন।",
          "Notable-activities pages-এ 2–3 strongest project architecture, নিজের contribution, users এবং quantified result evidenceসহ দিন।",
          "30-minute English mock-এ why Kobe KIC, project depth, proposed hypothesis, ethics/data risk, feasibility, teamwork এবং funding answer practice করুন।",
          "Online exam হওয়া মানে online degree নয়; Kobe relocation, laptop ও in-person study readiness honestভাবে explain করুন।",
        ],
        readyWhen: "SOP course-specific এবং 30-minute mock oral-এ technical + social-impact follow-up evidenceসহ defend করতে পারেন।",
      },
      {
        title: "C-type aid ও two-year payment risk হিসাব করুন",
        timing: "Before application and offer",
        description:
          "Tuition exemption full scholarship নয়। Individual C-type annual tuition ¥200k কমায় এবং year-two continuation guaranteed নয়।",
        actions: [
          "Standard: ¥200k admission + ¥2.8m tuition + ¥400k facilities = ¥3.4m; ¥30k exam ও other costs আলাদা লিখুন।",
          "C-type application admission file-এর সঙ্গে দিন; Student status, self-funded category এবং selection evidence current guide থেকে মিলান।",
          "C-type renewed হলে estimated ¥3.0m academic charges; only first year হলে year-two full tuition return scenario হিসাব করুন।",
          "JICA/JDS/JJ-WBGSP headline শুধু exact nominating agency/program eligibility থাকলে consider করুন; ordinary software applicant funding নয়।",
          "Kobe living, laptop, insurance/material, medical/alumni costs এবং no-part-time-income buffer যোগ করুন।",
        ],
        readyWhen: "No-aid এবং renewal-failure দুই scenario affordable; written aid ছাড়া net cost কমানো হয়নি।",
      },
    ],
    checklist: [
      "Kobe Institute of Computing identity confirmed",
      "Official October 2027 ICT Innovator guide",
      "Japan-resident deadline and online-exam instructions",
      "TOEFL-80-equivalent accepted score or approved English-degree waiver",
      "Application forms and compliant photo",
      "Up-to-1,500-word current-reference SOP",
      "Up-to-3-page notable activities/evidence",
      "Official degree/graduation certificate",
      "Official transcript and translation if required",
      "Residence-card front/back copies",
      "Conditional identity/financial/guarantor documents",
      "¥30,000 application fee",
      "30-minute English oral preparation",
      "Laptop and Kobe relocation plan",
      "C-type aid application if eligible",
      "¥3.4m no-aid / ¥3.0m renewed-aid budgets",
    ],
    afterSubmission: [
      "Email/spam, exam instructions এবং additional-document requests monitor করুন; current reference-এ result email-এ আসে।",
      "Online oral-এর আগে connection, camera/audio, ID, 30-minute project/SOP Q&A ও JST schedule full mock করুন।",
      "Offer letter-এ ICT Innovator, October intake, Kobe study এবং payment dates আবার মিলিয়ে নিন।",
      "Payment-এর আগে C-type category, first-year reduction এবং second-year renewal terms লিখিতভাবে verify করুন।",
    ],
    cautions: [
      "KIC হলো Kobe Institute of Computing; KCGI/Kyoto College-এর admission links বা course claims এখানে ব্যবহার করবেন না।",
      "April 2027 ICT Professional Course Japanese-medium এবং N1 লাগে; সেটিকে English ICT Innovator route বলবেন না।",
      "October 2026 English cycle closed; June/July 2026 dates October 2027-এর deadline নয়।",
      "IELTS accepted test type হলেও published numerical IELTS cutoff নেই; 5.5 accepted বলে claim করবেন না।",
      "English-medium degree waiver evidence-এর form/wording KIC-কে confirm করুন; generic workplace English বা vague MOI যথেষ্ট নয়।",
      "55 annual capacity সব applicant/course context; Japan-resident English seats 55 নয়।",
      "Documents + online oral মানে easy admission নয়; applied ICT-for-social-impact fit এবং financial readiness গুরুত্বপূর্ণ।",
      "C-type সর্বোচ্চ stated individual route tuition reduction, full funding নয় এবং year-two renewal guaranteed নয়।",
      "Restricted JICA/JDS/JJ-WBGSP funding open general scholarship হিসেবে budget করবেন না।",
    ],
    officialLinks: [
      { label: "Kobe KIC ICT Innovator Course", href: "https://www.kic.ac.jp/course/innovator/?stt_lang=en", description: "100% English October course, TANKYU/ICT4D curriculum ও program mission দেখুন।" },
      { label: "October 2026 English guide", href: "https://www.kic.ac.jp/wp-content/uploads/2026/03/Application_Guidelines_2026_Fall-1.pdf", description: "2027 প্রকাশের আগে eligibility, documents, online exam, fees ও aid-এর current planning reference।" },
      { label: "April 2027 Japanese-course notice", href: "https://www.kic.ac.jp/topics/109222/", description: "Currently open April course Japanese-medium—English route থেকে আলাদা রাখুন।" },
      { label: "ICT Professional Japanese course", href: "https://www.kic.ac.jp/course/professional/", description: "April entry ও N1/Japanese delivery evidence verify করুন।" },
      { label: "KIC tuition", href: "https://www.kic.ac.jp/examination/tuition/", description: "Admission, tuition, facilities এবং payment structure-এর current figures দেখুন।" },
      { label: "KIC tuition support", href: "https://www.kic.ac.jp/support/tuition/", description: "International entrant aid categories, amount ও renewal conditions verify করুন।" },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "saitama-mecon-masters-2027",
    country: "japan",
    university: "Saitama University",
    title: "Saitama University MEcon: October 2027 Planning Guide",
    summary:
      "সম্পূর্ণ English-এ করা যায় এমন Master of Economics-এর eligibility, MOI/IELTS route, research-plan strategy, document screening, Zoom interview, exact cost এবং competitive tuition-support planning।",
    label: "October 2027 · Guide pending · MOI possible",
    funding:
      "Full-funded institutional scholarship নেই। Latest guide-এ up to 2 international MEcon student-এর জন্য two-year tuition-only Economics Society Scholarship ছিল; full/half tuition exemption ও JASSO-ও competitive এবং 2027 guide-এ recheck করতে হবে।",
    duration: "2 years · October/Fall intake · Master of Economics",
    audience:
      "Economics, business, management, supply chain, public policy বা development direction-এ English-taught master's করতে চাওয়া recognized bachelor's graduates",
    realityCheck:
      "12 August 2026 পর্যন্ত October 2027 MEcon application guideline প্রকাশিত হয়নি এবং application open নয়। University সাধারণত September–October-এর দিকে নতুন MEcon guide প্রকাশ করে। Latest 2026 guide planning reference হিসেবে useful, কিন্তু তার December–February dates, score-validity date, document format ও scholarship terms 2027-এর guarantee নয়। Published numerical minimum GPA বা IELTS score না থাকা admission সহজ হওয়ার প্রমাণ নয়—research plan ও overall profile-এর document review principal selection stage, তারপর shortlisted applicant-এর Zoom interview হয়।",
    highlights: [
      "Official program অনুযায়ী MEcon-এর classwork, thesis supervision ও master's thesis English-এ করা যায়; Japanese-language study encouraged হলেও compulsory নয়।",
      "Degree হলো Master of Economics; standard duration 2 years এবং coursework October/Fall semester থেকে শুরু হয়।",
      "Program-এর দুইটি main component: Japanese and Asian Economy and Society এবং Japanese and Asian Management।",
      "Relevant subjects-এর মধ্যে economics, public policy, development economics, econometrics, international trade, global business, comparative management, human resources, supply chain management ও international marketing আছে।",
      "Latest guide TOEFL, IELTS বা equivalent test গ্রহণ করেছে, কিন্তু কোনো numerical minimum score প্রকাশ করেনি। IELTS 5.5 therefore formal disqualification নয়, তবে competitive assessment-এ English readiness বিচার হবে।",
      "Bangladesh-এর English-medium bachelor's/master's applicant latest rule অনুযায়ী TOEFL/IELTS-এর বদলে degree-awarding university-এর official letter দিতে পারেন, যদি সেটি certify করে যে English ছিল language of instruction।",
      "Latest guideline-এ GRE বা GMAT required নয় এবং GPA field ছিল ‘if available’; কোনো hard minimum GPA cutoff প্রকাশ করা হয়নি।",
      "Selection-এর principal stage document review। Research plan বা overall profile যথেষ্ট শক্ত না হলে interview-এর আগেই rejection হতে পারে; shortlisted applicant online Zoom interview দেয়।",
      "2026 reference cycle-এ application 1 December 2025–2 February 2026, interview March এবং final result May-এর মধ্যে ছিল। এগুলো October 2027 deadline নয়।",
      "MEcon-এর জন্য prospective supervisor-এর advance consent latest FAQ-এ mandatory ছিল না। তবু specific research fit থাকলে respectful consultation useful হতে পারে।",
      "Current program page admission fee ¥282,000 এবং April 2027 থেকে tuition ¥642,960/year দেখায়; October 2027 entrant-এর দুই বছরের base tuition তাই বর্তমান ঘোষণায় ¥1,285,920।",
      "Admission fee-সহ current announced two-year academic base ¥1,567,920; application fee, insurance, materials, housing ও living cost এর বাইরে। Program page single student-এর living estimate প্রায় ¥140,000/month দিয়েছে।",
      "Latest guide-এর Economics Society Scholarship up to 2 international MEcon student-এর tuition দুই বছর cover করতে পারে, continued excellent performance ও timely tuition-exemption application সাপেক্ষে। এটি living stipend বা guaranteed award নয়।",
    ],
    fit: [
      "Recognized bachelor's degree, 16-year formal education বা current guide-এর accepted equivalent graduate-entry qualification আছে।",
      "English-medium degree-এর official MOI letter অথবা accepted standardized English evidence সংগ্রহ করতে পারবেন।",
      "Economics/business bachelor's না হলেও software বা IT experience-কে supply-chain digitization, international business, digital platforms, productivity, emerging-market technology adoption বা public-policy problem-এর সঙ্গে যুক্ত করতে পারবেন।",
      "দুই বছরে শেষ করা যায় এমন narrow, researchable ও evidence-based thesis question তৈরি করতে প্রস্তুত।",
      "Undergraduate thesis, major term paper বা অন্য formal academic paper writing sample হিসেবে দিতে পারবেন।",
      "দুইজন academic recommender detailed evaluation দিতে পারবেন, এবং scholarship না পেলেও tuition ও living cost-এর credible backup plan আছে।",
    ],
    quickStart: [
      "MEcon admissions page bookmark করে September–October 2026-এ October 2027 guideline প্রকাশের weekly reminder দিন।",
      "Bachelor's/Master's English-medium হলে degree-awarding university থেকে official MOI letter এখনই চান; না হলে valid IELTS/TOEFL plan রাখুন।",
      "Software/IT background থেকে একটি narrow business/economics research question লিখুন এবং Jin Shi ও Motoi Ihara-এর current research-এর সঙ্গে evidence-based fit compare করুন।",
      "Transcript, degree certificate, writing sample, দুই academic referee, residence documents এবং financial-support evidence-এর tracker এখনই তৈরি করুন।",
    ],
    steps: [
      {
        title: "2027 guide প্রকাশ ও exact calendar lock করুন",
        timing: "Now · September–October 2026 পর্যন্ত নিয়মিত check",
        description:
          "MEcon October-entry program confirmed, কিন্তু 2027 application এখনও open নয়। Prior-cycle dates দিয়ে preparation করা যায়, submission নয়।",
        actions: [
          "Official MEcon news page ও Graduate School admissions page weekly monitor করুন।",
          "2027 PDF প্রকাশ হলে eligibility assessment, application opening, documents-arrival deadline, interview month, result এবং enrolment-payment deadline calendar-এ তুলুন।",
          "2026 reference লিখে রাখুন: nonstandard eligibility assessment 1–19 December 2025; application 1 December 2025–2 February 2026; March interview; May-এর মধ্যে result। প্রতিটি date-এ ‘reference only’ label দিন।",
          "MEcon office mecon@gr.saitama-u.ac.jp-কে guide publication timing নিয়ে লিখলে October 2027 intake, current residence in Japan এবং degree country স্পষ্টভাবে বলুন।",
          "2027 guide না আসা পর্যন্ত application fee, score-validity date, delivery channel বা scholarship availability final ধরে নেবেন না।",
        ],
        readyWhen:
          "Official October 2027 PDF save করা আছে এবং সব deadline, eligibility category ও submission channel নতুন guide থেকে update হয়েছে।",
      },
      {
        title: "Degree ও English eligibility প্রমাণ করুন",
        timing: "Guide প্রকাশের আগেই evidence সংগ্রহ শুরু করুন",
        description:
          "Recognized degree এবং acceptable English proof দুটি আলাদা eligibility item। No published minimum score admission guarantee নয়।",
        actions: [
          "Bachelor's degree, transcript এবং মোট formal-education length দিয়ে standard eligibility category identify করুন। 15-year বা nonstandard qualification হলে advance eligibility assessment লাগতে পারে।",
          "Bangladesh বা অন্য non-listed country-এর English-medium degree হলে university registrar/controller থেকে signed, sealed বা otherwise verifiable official letter নিন, যেখানে স্পষ্ট থাকবে English was the language of instruction।",
          "MOI letter অস্পষ্ট হলে admissions office-কে scan পাঠিয়ে written acceptance জিজ্ঞাসা করুন; শুধু transcript-এ English course title থাকা MOI-এর সমান নয়।",
          "Test route নিলে TOEFL/IELTS/equivalent accepted list, minimum থাকলে threshold এবং exact validity date October 2027 guide থেকে মিলান।",
          "2026 guide-এ TOEFL official report সরাসরি ETS থেকে code 7673-এ এবং IELTS Test Report Form testing authority থেকে সরাসরি পাঠাতে হতো; 2027 delivery rule আবার verify করুন।",
          "IELTS 5.5 থাকলে সেটি published numeric cutoff-এর নিচে নয় কারণ latest guide cutoff দেয়নি, কিন্তু writing sample, plan ও interview-এ stronger English evidence দেখানোর প্রস্তুতি নিন।",
        ],
        readyWhen:
          "2027 rule-এর সঙ্গে degree eligibility এবং official MOI অথবা valid direct-report English score line-by-line মিলে গেছে।",
      },
      {
        title: "একটি narrow ও feasible research direction বানান",
        timing: "6–10 weeks focused drafting",
        description:
          "Latest guide fixed 1,000–1,500-word requirement confirm করে না। নতুন form-এর limit follow করতে হবে; content-এর মূল test হলো topic specific, tangible এবং দুই বছরে complete করা সম্ভব কি না।",
        actions: [
          "Broad topic যেমন ‘AI in business’ বাদ দিয়ে one setting, one problem, one population/industry এবং measurable outcome নির্ধারণ করুন।",
          "Research-plan structure রাখুন: title, previous study, problem/context, research question, related evidence, proposed data, method, feasibility, limitations এবং expected contribution।",
          "Software background থেকে possible bridge হিসেবে SME supply-chain digitization, IT-system adoption in cross-border value chains, digital retail internationalisation, platform strategy বা technology-enabled emerging-market channel development compare করুন।",
          "App/product বানানোকে একমাত্র outcome না রেখে economics/management question, comparison group, data source ও evaluation method দেখান।",
          "Two-year schedule-এ literature review, data access, ethics/permission, analysis, interim presentation, writing ও revision-এর realistic sequence দিন।",
          "2027 application form প্রকাশ হলে নিজের draft exact field/character/word limit অনুযায়ী edit করুন; unverified 1,000–1,500-word claim ব্যবহার করবেন না।",
        ],
        readyWhen:
          "Independent reader research problem, method, data feasibility, MEcon relevance এবং two-year completion path একবার পড়ে বুঝতে পারেন।",
      },
      {
        title: "Faculty fit evidence তৈরি করুন",
        timing: "Research question-এর সঙ্গে parallelভাবে 2–3 সপ্তাহ",
        description:
          "MEcon-এর জন্য advance professor consent mandatory নয় এবং faculty profile funded vacancy নয়। Specific topic-এর জন্য current supervision availability verify করাই লক্ষ্য।",
        actions: [
          "Professor Jin Shi-এর official profile ও recent work পড়ুন: supply chain management, international business, multinational enterprises in emerging markets এবং retail internationalisation তাঁর confirmed areas।",
          "Software/IT bridge চাইলে ‘digital transformation + supply chain/value-chain systems’ আপনার proposed research framing হিসেবে লিখুন; এটিকে professor-এর advertised vacancy বা exact stated project বলে দাবি করবেন না।",
          "Professor Motoi Ihara-এর international business, global marketing, Asian marketing strategy, emerging-market channel development ও related current work compare করুন।",
          "2027 faculty/supervisor list-এ উভয়ের availability recheck করুন; current administrative role বা profile থাকা automatic new-student acceptance নয়।",
          "প্রতি potential fit-এর জন্য recent theme, আপনার prior evidence, proposed question এবং why this supervisor/program—চার-column note বানান।",
          "Contact করলে 150–220-word concise email দিন: background, exact question, method/data idea, one faculty-specific connection এবং supervision availability question। Mass email করবেন না।",
        ],
        readyWhen:
          "একজন primary ও একজন backup faculty fit-এর জন্য current official evidence আছে এবং plan generic business statement নয়।",
      },
      {
        title: "Application documents ও recommendations প্রস্তুত করুন",
        timing: "Expected deadline-এর 8–12 weeks আগে",
        description:
          "Latest cycle mixed digital-and-postal process ব্যবহার করেছে। Forms ও writing sample email-এ গেলেও official certificates, recommendations ও other evidence post করতে হতো। 2027 guide final authority।",
        actions: [
          "Latest reference অনুযায়ী Application Forms 1–3 Excel format-এ complete করার practice করুন; PDF-এ convert করে পাঠানো allowed ছিল না।",
          "Writing sample হিসেবে undergraduate thesis, major term paper বা অন্য formal paper-এর clean PDF প্রস্তুত করুন এবং নিজের contribution স্পষ্ট রাখুন।",
          "সব undergraduate institution-এর official transcript, grading-scale explanation এবং graduation/degree-conferment certificate সংগ্রহ করুন।",
          "Japan resident হলে passport/residence-status proof-এর সঙ্গে certified copy of residence record প্রয়োজন ছিল; 2027 rule ও issue-date condition recheck করুন।",
          "দুইজন academic referee বাছুন। অন্তত একজন graduate-study readiness নিয়ে লিখতে পারবেন; thesis থাকলে thesis supervisor-এর recommendation normally expected।",
          "Latest official recommendation form, sealed envelope এবং recommender signature/seal-over-flap rule বুঝিয়ে internal deadline দিন। Generic free-format letter accepted ধরে নেবেন না।",
          "Non-English/Japanese documents-এর original এবং issuing institution বা qualified organization-certified translation প্রস্তুত করুন।",
        ],
        readyWhen:
          "2027 checklist-এর প্রতিটি item prepared, correctly formatted, certified/translated এবং email/post destination অনুযায়ী separated।",
      },
      {
        title: "Submission ও payment error-proof করুন",
        timing: "Application window খুললে early submit",
        description:
          "Latest cycle-এ সব materials deadline-এর মধ্যে physically received হওয়া জরুরি ছিল; শুধু email পাঠানো বা courier dispatch করা complete application ছিল না।",
        actions: [
          "2027 guide থেকে email items, postal items এবং application-fee proof আলাদা checklist-এ map করুন।",
          "Forms 1–3 ও writing sample current instruction অনুযায়ী mecon@gr.saitama-u.ac.jp-এ পাঠানোর আগে filename, passport name এবং attachment format check করুন।",
          "Official/certified materials registered express mail বা trackable courier-এ এমন সময় পাঠান যেন deadline-এর আগে পৌঁছে যায়।",
          "2026 application-fee reference ¥30,000 non-refundable; Japan resident-এর জন্য convenience-store method এবং overseas applicant-এর জন্য Flywire ছিল। 2027 amount/method recheck করুন।",
          "Full digital copy, sent-email record, payment proof, courier tracking এবং delivery confirmation archive করুন।",
          "Submission-এর পরে changes সাধারণত allowed নয়; dates, names, research title, GPA এবং financial information সব document-এ consistent রাখুন।",
        ],
        readyWhen:
          "Email ও postal components official deadline-এর আগে accepted/received এবং complete audit copy আপনার কাছে আছে।",
      },
      {
        title: "Document screening ও Zoom interview-এর জন্য প্রস্তুত হন",
        timing: "Submission-এর আগে শুরু; shortlist notification পর্যন্ত চালিয়ে যান",
        description:
          "Document review principal selection method এবং interview শুধু shortlisted applicant-এর জন্য। Traditional written Economics/Math entrance exam latest MEcon route-এ ছিল না।",
        actions: [
          "Research plan-এর problem, importance, method, data access, expected result ও limitation—প্রতিটির 30–60-second English answer তৈরি করুন।",
          "Why MEcon, why Saitama, why economics/management after software, why this topic এবং post-degree goal—এই পাঁচটি answer evidenceসহ rehearse করুন।",
          "Low/average grades থাকলে excuse না দিয়ে context, later improvement, relevant project/work এবং current readiness দেখান।",
          "Writing sample-এর research question, method, নিজের contribution ও limitation explain করার প্রস্তুতি নিন।",
          "Zoom, stable internet, camera, microphone, quiet room এবং email-response discipline আগে test করুন। Latest cycle interview email-এর designated period-এ reply না দিলে disqualification হতে পারত।",
          "Mock interview record করে jargon, overly broad claims ও memorized answer কমান।",
        ],
        readyWhen:
          "10–15 minute English mock interview-এ notes ছাড়া research plan, faculty fit, academic readiness ও funding plan defend করতে পারেন।",
      },
      {
        title: "Funding ও 24-month budget বাস্তবভাবে plan করুন",
        timing: "Application-এর আগে; offer পেলে final update",
        description:
          "MEcon fully funded নয়। Tuition-only support, general waiver, JASSO এবং private awards আলাদা schemes; একটির eligibility অন্যটির award নিশ্চিত করে না।",
        actions: [
          "Current announced October 2027 planning baseline লিখুন: admission ¥282,000 + annual tuition ¥642,960 × 2 = ¥1,567,920 base academic cost; future fee change ও other charges-এর buffer রাখুন।",
          "Program estimate প্রায় ¥140,000/month ধরে 24-month living reference প্রায় ¥3,360,000; নিজের rent, commuting, insurance, food ও emergency cost দিয়ে Japan-resident budget replace করুন।",
          "2026 Economics Society Scholarship up to 2 students-এর দুই বছরের tuition cover করত, continued excellent academic performance সাপেক্ষে। 2027 guide-এ continuation এবং selection terms recheck করুন।",
          "এই scholarship চাইলে enrolment-এর সময় tuition-fee exemption application করা এবং university নির্ধারিত প্রতি six months/year renewal deadline মেনে চলা latest rule-এ essential ছিল; tuition আগে pay করলে exemption request করা যেত না।",
          "General tuition waiver academic ranking ও budget অনুযায়ী full বা half হতে পারে; award letter ছাড়া expected income হিসেবে গণনা করবেন না।",
          "JASSO overseas reservation route Japan থেকে direct enrolment করা applicant-এর জন্য designed নয়। Japan-resident applicant post-enrolment JASSO/private nomination খুঁজতে পারেন, কিন্তু highly competitive।",
          "Latest ¥200,000 partial scholarship কেবল abroad থেকে Japan-এ move করা first-year international student এবং অন্য travel support না পাওয়া applicant-এর জন্য ছিল; বর্তমানে Japan resident হলে এটি budget-এ ধরবেন না।",
        ],
        readyWhen:
          "No-aid, half-waiver এবং tuition-only award—তিন scenario-তে 24-month cash-flow sustainable এবং payment timing বোঝা আছে।",
      },
    ],
    checklist: [
      "Official October 2027 MEcon guideline",
      "Correct eligibility category",
      "Bachelor's degree and 16-year education evidence",
      "Official transcript from every undergraduate institution",
      "Grading-scale explanation",
      "Graduation and degree-conferment certificate",
      "Official MOI letter or accepted English test evidence",
      "Direct TOEFL/IELTS delivery confirmation, if using a test",
      "Application Forms 1–3 in the required editable format",
      "Specific two-year research plan using the new form limit",
      "Formal academic writing sample",
      "Two official academic recommendation forms",
      "Signed/sealed recommendation envelopes",
      "Passport and nationality evidence",
      "Residence record/status documents for Japan resident",
      "Certified English/Japanese translations where required",
      "Financial-support statement and supporting evidence",
      "Application-fee proof",
      "Email-submission archive",
      "Tracked postal delivery confirmation",
      "No-aid 24-month budget",
      "Zoom interview preparation",
    ],
    afterSubmission: [
      "Email, spam folder এবং courier tracking নিয়মিত monitor করুন; missing-item request এলে original submission copy দেখে দ্রুত উত্তর দিন।",
      "Document-review result-এর অপেক্ষাতেও research plan, writing sample ও faculty fit rehearse চালিয়ে যান।",
      "Interview invitation এলে designated response deadline miss করবেন না এবং Zoom equipment test করুন।",
      "Offer পেলে admission fee, 2027 tuition, exemption timing, scholarship application এবং enrolment deadline official letter থেকে আবার মিলিয়ে নিন।",
      "Written scholarship/waiver decision না পাওয়া পর্যন্ত enrolment decision no-aid budget দিয়ে evaluate করুন।",
    ],
    cautions: [
      "2026 application dates October 2027-এর dates নয়; নতুন guide প্রকাশের আগে apply-now label ব্যবহার করবেন না।",
      "No fixed minimum IELTS বা GPA মানে low-requirement, easy admission বা guaranteed acceptance নয়।",
      "MOI automatic verbal waiver নয়—degree-awarding university-এর official English-medium certification দরকার।",
      "2026 test-validity cutoff বা direct-score delivery rule 2027-এ unchanged ধরে নেবেন না।",
      "Research-plan length 1,000–1,500 words হিসেবে publish করবেন না; official current guide/form-এর limit follow করুন।",
      "Approximately 34 students combined Department capacity ছিল MEcon-only seat count নয়।",
      "Jin Shi বা Motoi Ihara-এর faculty profile advertised vacancy বা guaranteed supervision নয়।",
      "Advance supervisor consent mandatory না হলেও research fit দুর্বল হলে document review pass করা কঠিন হতে পারে।",
      "Economics Society award tuition-only; admission fee, living cost, insurance বা travel full funding নয়।",
      "Up to 2 tuition awards highly competitive এবং 2027 renewal/eligibility terms আবার verify করতে হবে।",
      "¥200,000 relocation award Japan-resident applicant-এর জন্য applicable ধরে budget করবেন না।",
      "Tuition-exemption deadline miss বা tuition আগে payment করলে latest scheme-এর eligibility নষ্ট হতে পারে।",
      "Email forms পাঠালেই application complete নয়; latest cycle-এর remaining originals deadline-এর মধ্যে post-এ পৌঁছাতে হতো।",
    ],
    officialLinks: [
      {
        label: "Official English MEcon program",
        href: "https://hss.saitama-u.ac.jp/english/",
        description: "English-only completion, optional Japanese, curriculum, current cost ও funding reality verify করুন।",
      },
      {
        label: "Latest MEcon admissions notice",
        href: "https://www.saitama-u.ac.jp/eco/grad/topics/202510-1570.html",
        description: "Current published 2026 guide, forms, mixed email/post process ও MEcon FAQ দেখুন।",
      },
      {
        label: "2026 MEcon application guideline",
        href: "https://www.saitama-u.ac.jp/eco/grad/media/MEcon%20Program%20Application%20Guidelines%20For%20Fall%20Semester%2C%202026.pdf",
        description: "Planning reference only—eligibility, English/MOI, documents, selection এবং scholarship terms পড়ুন; 2027 submission-এর আগে replace করুন।",
      },
      {
        label: "MEcon/DEcon archived-guideline page",
        href: "https://www.saitama-u.ac.jp/eco/grad/topics/202504-1134.html",
        description: "Previous-cycle archive ও next guideline publication pattern monitor করুন।",
      },
      {
        label: "Current graduate faculty list",
        href: "https://www.saitama-u.ac.jp/eco/grad/professor/",
        description: "2027 application-এর আগে current faculty ও supervision availability verify করুন।",
      },
      {
        label: "Professor Jin Shi",
        href: "https://rdb.eva.saitama-u.ac.jp/search/detail.html?lang=en&systemId=5f19cb94d2c81ebb520e17560c007669",
        description: "Supply chain, international business, emerging-market MNE এবং retail internationalisation research দেখুন।",
      },
      {
        label: "Professor Motoi Ihara",
        href: "https://rdb.eva.saitama-u.ac.jp/search/detail.html?lang=en&systemId=d5d1938409dc26a3520e17560c007669",
        description: "International business, global/Asian marketing এবং emerging-market channel research verify করুন।",
      },
      {
        label: "Official university tuition page",
        href: "https://www.saitama-u.ac.jp/student/school_expenses/",
        description: "Current graduate tuition, installment এবং exemption-payment handling recheck করুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "tokyo-city-university-informatics-masters-2027",
    country: "japan",
    university: "Tokyo City University",
    title: "Tokyo City University Informatics Master's: April 2027 Guide",
    summary:
      "Japan-resident international applicant-এর জন্য April 2027 Informatics master's—IELTS 5.5-এর exact band rule, confirmed MOI-like route, supervisor consent, দুই ধরনের selection, English-study check, final dates ও realistic tuition plan।",
    label: "Round C Jan 7–14 · IELTS 5.5 each band · supervisor consent",
    funding:
      "Self-funded admission route। Eligible privately financed international students-এর জন্য 30% tuition reduction possible, কিন্তু selection ও prescribed procedure সাপেক্ষ; full scholarship বা 50% reduction automatic নয়।",
    duration: "2 years · April 2027 · Setagaya Campus · minimum 30 credits",
    audience:
      "CS, CSE, software, AI/ML, information systems, networks বা related bachelor's graduate—বিশেষত Japan-এ থাকা applicant যিনি English-supported technical master's চান এবং route/exam আগে verify করবেন",
    realityCheck:
      "এটি blanket English-only international master's নয়। 2027 guide-এ supervisor-by-supervisor English thesis ও lecture availability matrix আছে; তাই ●/● supervisor বেছে required 30 credits, research supervision, thesis এবং examination English-এ করা যাবে কি না লিখিতভাবে নিশ্চিত করতে হবে। IELTS Academic overall 5.5 যথেষ্ট শুধু তখনই, যখন Listening, Reading, Writing ও Speaking—প্রতিটি band-ও অন্তত 5.5। এই threshold admission-language eligibility পূরণ করে, কিন্তু General Screening-এর written English exam নিজে থেকে waive করে না। Foreign-degree applicant department approval পেলে Special Screening for International Students-এ documents + interview/oral route পেতে পারেন; approval না পেলে written English ও specialized examinationসহ General Screening apply হবে।",
    highlights: [
      "Official Round C application 7–14 January 2027; Informatics written examinations 15 February, interview 16 February, result 5 March এবং enrolment deadline 12 March 2027। 12 February-এর Architectural Design test Informatics applicant-এর জন্য নয়।",
      "Informatics master's capacity 80, কিন্তু এটি 2027-এর সব admission schemes/rounds মিলিয়ে overall capacity—80টি international seat নয়।",
      "Non-Japanese applicant-এর IELTS Academic requirement overall 5.5+ এবং চারটি individual band-এর প্রতিটিতে 5.5+; accepted test date 1 April 2024 বা পরে এবং online test score accepted নয়।",
      "IELTS-এর বিকল্প হিসেবে university-issued evidence accepted হতে পারে যদি সেটি স্পষ্টভাবে certify করে যে degree-level institution-এ instruction এবং research supervision—দুটিই English-এ ছিল। একটি generic MOI letter এই দুইটি কথা না বললে safe নয়।",
      "General Screening-এ 90-minute written English, Informatics fundamentals + supervisor-specific specialized subject, পরদিন interview এবং document review আছে। IELTS 5.5 language gate পেরোলেও English written-test waiver-এর আলাদা unpublished standard আছে; apply করার আগে Academic Affairs-এর approval দরকার।",
      "Special Screening for International Students documents + interview/oral assessment-ভিত্তিক। Foreign education, non-Japanese nationality, Student status এবং 'special grounding'সহ সব condition পূরণ করে department-এর preliminary approval নিতে হয়; desired supervisor-কে application start-এর অন্তত এক মাস আগে form দিতে হবে।",
      "Application-এর আগে প্রত্যেক route-এর applicant-কেই prospective supervisor-এর সঙ্গে consult করে email consent নিতে হবে এবং সেই original consent email-এর PDF TAO-তে upload করতে হবে।",
      "No GRE/GMAT বা numerical minimum GPA published eligibility condition নেই; তবু transcript, technical exam/oral, Statement of Purpose ও supervisor fit selection-এ গুরুত্বপূর্ণ।",
      "2027 reference fee: entrance fee ¥200,000 + annual tuition ¥1,122,000 = first-year base ¥1,322,000; application fee ¥35,000 + ¥990 service charge এবং living/insurance cost আলাদা।",
      "Other self-financed international students-এর published tuition-reduction category 30%; 50%/75% categories মূলত recent TCU partner-university graduates বা separate working-adult route-এর specific conditions-এর সঙ্গে যুক্ত।",
    ],
    fit: [
      "আপনার recognized bachelor's/16-year foreign education বা official equivalent graduate-entry qualification আছে।",
      "IELTS overall ও প্রতিটি band 5.5+, accepted TOEFL/TOEIC/JLPT, অথবা instruction + research-supervision-in-English certificate দিতে পারবেন।",
      "Software, AI/ML, networks, information engineering বা systems information engineering-এ concrete research problem তৈরি করতে পারবেন।",
      "General written examination-এর technical preparation করবেন, অথবা Special Screening-এর strict preliminary approval সময়মতো নিতে পারবেন।",
      "Full funding না পেলেও admission fee, tuition এবং Japan living cost-এর credible financial evidence ও fallback budget আছে।",
    ],
    quickStart: [
      "IELTS report-এ overall-এর সঙ্গে চারটি band-ই 5.5+ কি না আজই check করুন; না হলে degree-English certificate বা নতুন test plan করুন।",
      "2027 supervisor matrix থেকে ● thesis / ● lectures চিহ্নিত 2–3 জন Informatics faculty shortlist করে current research পড়ুন।",
      "Primary faculty-কে focused CV, transcript ও one-page research concept দিয়ে application-consent এবং English 30-credit plan সম্পর্কে লিখুন।",
      "sckyoumu@tcu.ac.jp-এ জিজ্ঞাসা করুন আপনি Special Screening-এর preliminary review করতে পারবেন কি না এবং IELTS দিয়ে written English waiver পেতে exact score/approval কী লাগবে।",
    ],
    steps: [
      {
        title: "সঠিক discipline ও admission route নির্ধারণ করুন",
        timing: "এখনই—supervisor email-এর আগে",
        description:
          "Informatics-এর Information Engineering ও Systems Information Engineering discipline-এর exam এবং faculty fit আলাদা। একই সঙ্গে General বনাম Special International route আগে না বুঝলে preparation ভুল হবে।",
        actions: [
          "Bachelor's subjects, projects ও target research দেখে Information Engineering অথবা Systems Information Engineering বাছুন।",
          "2027 guide-এর eligibility list-এ 4-year degree/16 years education এবং nonstandard credential rule মিলিয়ে দেখুন।",
          "Foreign university degree, non-Japanese nationality, Student-status eligibility এবং strong subject background থাকলে Special Screening form-এর eligibility supervisor/department-কে জিজ্ঞাসা করুন।",
          "Special route অনুমোদিত না হলে General Screening-এর English + fundamentals + supervisor-specific subject প্রস্তুত করার সিদ্ধান্ত নিন।",
          "Current Japan residence card/status-এর copy এবং April 2027-এর মধ্যে Student status requirement কীভাবে পূরণ করবেন তা লিখিতভাবে confirm করুন।",
        ],
        readyWhen:
          "একটি discipline, একটি primary admission route এবং approval না পেলে General Screening fallback স্পষ্ট।",
      },
      {
        title: "Verified Informatics supervisor fit ও English plan তৈরি করুন",
        timing: "September–November 2026; যত আগে সম্ভব",
        description:
          "Prior supervisor consent application-এর mandatory document। Faculty research fit-এর পাশাপাশি guide-এর English thesis/lecture symbols এবং complete degree plan—দুটিই যাচাই করুন।",
        actions: [
          "Software ও distributed/cyber-physical systems fit-এর জন্য Myungryun Yoo; network/cloud/traffic/ML security-এর জন্য Kohei Shiomoto; ML, optimisation ও neural/nonlinear systems-এর জন্য Kenya Jinno-এর official profiles compare করুন।",
          "2027 matrix-এ এই faculty examples-এর English thesis instruction ও lectures দুটিই ●, কিন্তু current round-এ student নিচ্ছেন কি না personalized email-এ জিজ্ঞাসা করুন।",
          "Email-এ exact problem, prior project, methods/skills, April 2027 route, language evidence এবং why-this-lab fit conciseভাবে লিখুন।",
          "Required 30 credits, all compulsory classes, research meetings, thesis writing এবং final examination English-এ শেষ করা যাবে কি না written confirmation চান।",
          "Consent reply-টি forward/copy-paste না করে original email view থেকে PDF করুন; applicant, supervisor, round এবং explicit approval দৃশ্যমান রাখুন।",
        ],
        readyWhen:
          "একজন 2027-listed supervisor explicit application consent দিয়েছেন এবং viable English study plan লিখিতভাবে clear।",
      },
      {
        title: "Language eligibility ও written English waiver আলাদা করুন",
        timing: "Application-এর অন্তত 6–8 সপ্তাহ আগে",
        description:
          "Non-Japanese applicant-এর admission-language certificate এবং General Screening-এর foreign-language subject exemption দুইটি পৃথক rule। একটির score দিয়ে অন্যটি automatic ধরে নেবেন না।",
        actions: [
          "IELTS হলে overall এবং L/R/W/S প্রতিটিতে 5.5+, test date 1 April 2024 বা পরে এবং accepted non-online format কি না মিলিয়ে নিন।",
          "MOI route হলে university-কে নতুন certificate দিতে বলুন যাতে higher-education degree, instruction language এবং research-supervision language—তিনটিই স্পষ্ট থাকে।",
          "General route হলে IELTS/TOEFL/TOEIC দিয়ে written English exemption-এর internal benchmark sckyoumu@tcu.ac.jp থেকে application-এর আগে জেনে approval process follow করুন।",
          "Waiver নিশ্চিত না হওয়া পর্যন্ত 90-minute English written test-এর preparation চালু রাখুন।",
          "IELTS TRF/other score-এর prescribed official document ও delivery timing download page থেকে follow করুন; screenshot বা ordinary photocopy ধরে plan করবেন না।",
        ],
        readyWhen:
          "Valid admission-language evidence ready এবং General English exam দিতে হবে নাকি approved waiver আছে—লিখিতভাবে জানা।",
      },
      {
        title: "General বা Special selection-এর জন্য targeted preparation করুন",
        timing: "কমপক্ষে 8–12 সপ্তাহ",
        description:
          "General route technical written exam-heavy; Special International route written exam বাদ দিলেও interview-তে oral subject knowledge ও research readiness পরীক্ষা হতে পারে।",
        actions: [
          "General route হলে Introduction to Computers বা Fundamental Statistical Data/Fundamental Electricity-এর applicable option এবং supervisor-specific subject syllabus mark করুন।",
          "Software faculty হলে OS/process, memory ও storage; networks হলে TCP/IP; AI faculty হলে ML, optimisation, statistics ও nonlinear systems-এর official scope অনুযায়ী revision করুন।",
          "90-minute English এবং three-hour specialized block-এর timed mock দিন; question/answer language Academic Affairs-এর সঙ্গে আগে confirm করুন।",
          "Special route হলে transcript, core CS knowledge, proposed method, evaluation, novelty ও two-year feasibility নিয়ে oral questions practice করুন।",
          "সব route-এ 2-minute self-introduction, 3-minute project explanation এবং why TCU/why supervisor answer English-এ record করুন।",
        ],
        readyWhen:
          "নিজের approved route-এর প্রতিটি assessment component timed বা oral mock-এ confidently complete করতে পারছেন।",
      },
      {
        title: "TAO application file complete করুন",
        timing: "December 2026-এর মধ্যে document-ready",
        description:
          "Portal submission-এর আগে recent official/certified records, consent email এবং international-student evidence ঠিক format-এ তৈরি করুন। General master's route-এ দুইটি recommendation letter standard requirement নয়।",
        actions: [
          "TAO form, compliant photo, Statement of Purpose, supervisor-consent email PDF এবং ¥35,000 fee proof প্রস্তুত করুন।",
          "Undergraduate transcript ও graduation/degree certificate issue-date/original/certified-copy rule মিলিয়ে নিন; transfer study থাকলে আগের transcript-ও দিন।",
          "Passport, Japan residence card/status evidence, Export Control Checklist এবং language proof প্রস্তুত করুন।",
          "Bank balance/income/scholarship proof দিন; official guide living expense-এর জন্য tuition-এর বাইরে অন্তত ¥1.44 million balance-কে guideline বলেছে।",
          "Japanese/English ছাড়া documents-এর official certified translation এবং Japanese language/vocational school record applicable হলে যুক্ত করুন।",
          "Special Screening approved হলে department-sealed special form upload করুন; working-adult/partner recommendation শুধু সেই category applicable হলে দিন।",
        ],
        readyWhen:
          "Route-specific checklist-এর প্রতিটি required upload readable, current, certified এবং internally consistent।",
      },
      {
        title: "Round C application ও examination logistics শেষ করুন",
        timing: "Application 7–14 January 2027",
        description:
          "TAO application, fee এবং official score-delivery সব application window-এর ভেতর complete হতে হবে। Japan-resident Informatics applicant-এর core exam dates 15–16 February।",
        actions: [
          "TAO-তে passport অনুযায়ী নাম, discipline, supervisor ও screening category input করে deadline-এর আগে final submit করুন।",
          "Application fee ¥35,000 + ¥990 service charge application window-তেই pay করে receipt archive করুন।",
          "Complete application PDF/export, payment evidence, email consent এবং TAO acknowledgement আলাদা folder-এ রাখুন।",
          "15 February written exam এবং 16 February interview Setagaya Campus calendar করুন; exact reporting time/admission ticket follow করুন।",
          "Special Screening approved হলে 16 February interview/oral schedule follow করুন; General fallback হলে written component বাদ দেবেন না।",
        ],
        readyWhen:
          "TAO submission accepted, fee/score evidence received এবং exact exam category, subjects, place ও time confirmed।",
      },
      {
        title: "Tuition reduction ও no-aid budget হিসাব করুন",
        timing: "Apply করার আগে; offer-এর পর পুনরায়",
        description:
          "TCU opportunityটি fully funded নয়। Admission procedure-এ full installment দিতে হতে পারে; reduction deliberation পরে হয়, তাই cash-flow budget জরুরি।",
        actions: [
          "2027 first-year base লিখুন: entrance ¥200,000 + tuition ¥1,122,000 = ¥1,322,000; second-year tuition change হতে পারে বলে buffer রাখুন।",
          "Privately financed international Student-status applicant হলে 30% category-এর prescribed application করুন; decision না পাওয়া পর্যন্ত full tuition budget করুন।",
          "Partner-university 50%/75%, working-adult 50% এবং internal-student award নিজের ক্ষেত্রে প্রযোজ্য না হলে budget-এ ব্যবহার করবেন না।",
          "Toshiaki Sano award up to 50% tuition হলেও selective এবং Civil Engineering priority—confirmed award ছাড়া subtract করবেন না।",
          "Tuition, housing, food, transport, insurance, application/enrolment fees ও emergency buffer দিয়ে 24-month no-aid/30%-aid budget বানান।",
        ],
        readyWhen:
          "First payment full amountে করা সম্ভব এবং no-aid, 30%-reduction ও external-award তিনটি scenario financially clear।",
      },
    ],
    checklist: [
      "Official 2027 English/Japanese guide and Round C dates",
      "Information Engineering or Systems Information Engineering choice",
      "General versus approved Special International route",
      "2027-listed supervisor and application-consent email PDF",
      "Written English-completion confirmation for required 30 credits",
      "IELTS overall + each band 5.5, accepted alternative score, or exact degree-English certificate",
      "Separate written-English-exam waiver decision",
      "Applicable Informatics fundamentals and supervisor-specific exam syllabus",
      "TAO application and photo",
      "Detailed Statement of Purpose",
      "Undergraduate transcript, including transfer records if applicable",
      "Graduation/degree certificate and certified translations",
      "Passport, residence card/status evidence and Export Control Checklist",
      "Financial-support evidence with living-cost buffer",
      "Japanese school/vocational records, if applicable",
      "Special Screening approved form, if applicable",
      "¥35,000 application fee + ¥990 service charge",
      "Exam admission ticket and Setagaya travel plan",
      "Full-cost and tuition-reduction budget",
    ],
    afterSubmission: [
      "TAO message box, registered email ও spam folder নিয়মিত দেখুন; missing বা replacement document request দ্রুত পূরণ করুন।",
      "15 February written exam এবং 16 February interview—নিজের approved route অনুযায়ী daily revision/mock চালিয়ে যান।",
      "5 March result-এর পর successful হলে 12 March enrolment deadline-এর payment এবং documents delay করবেন না।",
      "Reduction চাইলে enrolment procedure-তেই apply করুন; first-year reduction later deliberation শেষে second-semester tuition-এ apply হতে পারে।",
      "Offer-এর পর final compulsory-course language, supervisor availability, visa/status এবং second-year fee আবার লিখিতভাবে confirm করুন।",
    ],
    cautions: [
      "IELTS overall 5.5 যথেষ্ট নয় যদি একটি band-ও 5.5-এর নিচে থাকে।",
      "IELTS 5.5 admission-language gate; এটি General Screening-এর written English exam exemption guarantee করে না।",
      "Generic MOI নয়—certificate-এ instruction এবং research supervision দুটিই English ছিল বলে certify করতে হবে।",
      "Program-wide English-only guarantee নেই; 2027 supervisor matrix ও complete 30-credit course plan লিখিতভাবে verify করুন।",
      "80 overall capacity-কে 80 international seats বা easy admission ভাববেন না।",
      "Special Screening foreign degree থাকলেই automatic নয়; 'special grounding' ও department preliminary approval বাধ্যতামূলক।",
      "Satoshi Masuda ও Noriko Otani current TCU faculty হলেও তাঁরা 2027 Integrative Science and Engineering Informatics supervisor list-এ নেই; এই route-এর confirmed supervisor হিসেবে ব্যবহার করবেন না।",
      "No GRE/GMAT বা numerical GPA floor মানে documents-only/easy admission নয়; General route-এর written technical selection substantial।",
      "50% reduction সাধারণ external international applicant-এর default নয়; published 'other self-financed' category 30%, সেটিও selected/approved হলে।",
      "Tuition reduction বা scholarship পরে নির্ধারিত হতে পারে; enrolment-এর initial payment full amountে করার cash flow রাখুন।",
    ],
    officialLinks: [
      {
        label: "2027 official English B/C guide",
        href: "https://www.tcu.ac.jp/tcucms/wp-content/uploads/2026/07/science_and_engineering_bc_guideline2027_EN_20260723.pdf",
        description: "Dates, capacity, routes, IELTS/MOI rule, exams, documents, fees ও reduction tables-এর controlling English reference পড়ুন।",
      },
      {
        label: "Graduate admissions overview",
        href: "https://www.tcu.ac.jp/entrance/graduatesummary/engineering/",
        description: "Graduate School of Integrative Science and Engineering-এর current notices ও official route দেখুন।",
      },
      {
        label: "2027 examination schedule",
        href: "https://www.tcu.ac.jp/entrance/graduatesummary/engineering/schedule01/",
        description: "Round B/C application, examination, result ও enrolment dates recheck করুন।",
      },
      {
        label: "Application downloads",
        href: "https://www.tcu.ac.jp/entrance/graduatesummary/engineering/download/",
        description: "Current Japanese/English guides, TAO forms ও route-specific documents download করুন।",
      },
      {
        label: "TCU research directory",
        href: "https://research.tcu.ac.jp/",
        description: "2027-listed supervisor-এর current affiliation, email, projects ও publications verify করুন।",
      },
      {
        label: "Myungryun Yoo profile",
        href: "https://research.tcu.ac.jp/en/persons/myungryun-yoo/",
        description: "Software, operating/computing systems এবং related research fit দেখুন।",
      },
      {
        label: "Kohei Shiomoto profile",
        href: "https://research.tcu.ac.jp/en/persons/kohei-shiomoto/",
        description: "Networks, cloud, traffic, optimisation ও ML-based network research দেখুন।",
      },
      {
        label: "Kenya Jinno profile",
        href: "https://research.tcu.ac.jp/en/persons/kenya-jinno/",
        description: "Machine learning, neural systems, optimisation ও nonlinear engineering fit দেখুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "future-university-hakodate-systems-information-masters-2027",
    country: "japan",
    university: "Future University Hakodate",
    title: "Future University Hakodate Systems Information Science: 2027 Master's Route Guide",
    summary:
      "Software, AI, networks, IoT, security, HCI ও computational economics-এর international master's—correct April/September route, mandatory supervisor consultation, IELTS reality, document-and-interview selection, English-course audit এবং realistic funding plan।",
    label: "Schedule B Jan 5–13 · September default · April conditional",
    funding:
      "Self-funded admission route। Current annual tuition ¥535,800; admission/tuition waiver full, 2/3, 1/3 বা 1/4 হতে পারে, কিন্তু academic rank, household finances ও university assessment সাপেক্ষ—guaranteed funding নয়।",
    duration:
      "2 years · Schedule B: September 2027 by default; April 2027 only with valid ‘Student’ residence status at application or a specified MEXT exception",
    audience:
      "International CS, CSE, software, IT, AI/data, networks, HCI বা computational modelling applicant—বিশেষত document + interview route চান এবং mixed-language course plan আগে verify করতে প্রস্তুত",
    realityCheck:
      "এটি low-requirement বা fully English-taught guarantee নয়। 2027 থেকে international Special Selection-এ Schedule A শুধু April entry এবং Schedule B শুধু September entry-র standard route। Schedule B দিয়ে April 2027 নিতে হলে application-এর সময়ই valid ‘Student’ residence status থাকতে হবে, অথবা official MEXT exception পূরণ করতে হবে—শুধু Japan-এ থাকা, work/dependent visa থাকা বা enrolment-এর আগে Student status নেওয়া যথেষ্ট নয়। Schedule B-এর dates published হলেও 12 August 2026 পর্যন্ত detailed B booklet/forms live হয়নি; বর্তমান A guide language ও document planning reference, final B rule নয়। Current syllabus-এ বহু ICT/software course Japanese-only, তাই supervisor ও Academic Affairs থেকে complete 30-credit English plan লিখিতভাবে না পাওয়া পর্যন্ত এটিকে conditional target হিসেবে দেখুন।",
    highlights: [
      "Graduate School of Systems Information Science-এর দুই বছরের master's; পাঁচটি research domain হলো Media Architecture, Advanced ICT, Media Design, Complex Systems Information Science এবং Intelligent Information and Science।",
      "International admission capacity কেবল ‘a few students’; published numerical GPA/IELTS floor না থাকাকে easy admission বা high acceptance rate ভাবা যাবে না।",
      "Schedule B timetable: individual-eligibility review 25 November–2 December 2026, formal application 5–13 January 2027, one interview/exam day 8–10 February এবং result 19 February। Eligibility-review window শুধু nonstandard qualification category-এর জন্য—normal recognized bachelor's applicant-এর universal step নয়।",
      "Standard international Special Selection submitted documents + interview দিয়ে হয়; GRE, GMAT বা traditional technical written exam current international route-এ listed নয়। Online অথবা Hakodate-campus examination হতে পারে।",
      "April 2027-এর Schedule B exception খুব narrow: application-এর সময় valid Student status, university-recommended MEXT, অথবা specified Embassy-MEXT provisional acceptance। অন্য applicant-এর Schedule B international intake September 2027।",
      "Non-native English speaker-এর জন্য current A guide TOEFL, TOEIC বা IELTS certificate চায়, কিন্তু numerical minimum score প্রকাশ করে না। IELTS 5.5 automatic disqualification নয়—তবে detailed B guide বের হলে score type, minimum ও document method আবার check করতে হবে।",
      "MOI current accepted-alternative list-এ নেই; শুধু English mother tongue applicant-এর test exemption stated। Japanese-proficiency evidence optional, কিন্তু class language আলাদা academic-completion issue।",
      "Official 2026–27 syllabus অনুযায়ী master's completion-এ 30+ credits—20+ specialized এবং 10+ research-guidance credits—ও thesis examination দরকার। কিছু course English/mixed হলেও বহু course Japanese-only।",
      "Mandatory pre-consultation সব applicant-এর জন্য। External applicant form submit করার পর office সাধারণত প্রায় এক সপ্তাহে reply দেয়; তারপর prospective professor-এর সঙ্গে research theme, acceptance এবং plan discuss করতে হয়।",
      "Current 2027 adviser table-এ Takashi Ishio, Taku Okuno ও Toshiji Kawagoe তিনজনই listed। Faculty profile research fit; কোনো funded vacancy বা guaranteed supervision নয়।",
      "Applicant-developed software/hardware ও manual optional research output হিসেবে দেওয়া যায়—প্রতি output-এর up-to-two-page summary এবং collaborative work হলে signed role/contribution evidence দরকার। Routine GitHub/commercial project নিজে থেকেই research achievement নয়।",
      "Current fee reference: exam ¥30,000; most applicant-এর admission ¥310,000; annual tuition ¥535,800। 2027-এ amount change হতে পারে।",
    ],
    fit: [
      "Recognized bachelor's, 16 years of education বা official equivalent graduate-entry qualification আছে।",
      "September 2027 entry গ্রহণযোগ্য, অথবা April চাইলে application-এর সময় valid Student residence status/MEXT exception documentary evidence-এ আছে।",
      "একটি specific research question ও current adviser match আছে এবং mandatory pre-consultation সময়মতো complete করতে পারবেন।",
      "TOEFL/TOEIC/IELTS certificate দিতে পারবেন; MOI waiver ধরে application plan করছেন না।",
      "Supervisor-এর সঙ্গে English research/thesis এবং required specialized-course map confirm করবেন, অথবা প্রয়োজনীয় Japanese coursework সামলাতে পারবেন।",
      "Two institutional/academic recommendations, research plan ও self-funded fallback budget প্রস্তুত করতে পারবেন।",
    ],
    quickStart: [
      "Residence card দেখে application date-এ status সত্যিই ‘Student’ থাকবে কি না লিখুন; April না September—routeটি প্রথমেই lock করুন।",
      "Software research হলে Ishio/Okuno, computational economics হলে Kawagoe এবং অন্য AI/network/security faculty-এর 2027 adviser fit compare করুন।",
      "20 specialized + 10 research-guidance credits-এর একটি provisional course sheet বানিয়ে প্রতিটি subject J/E/JE mark করুন।",
      "Standard Schedule B হলে 16 December 2026-এর আগেই pre-consultation request দেওয়ার internal deadline রাখুন; nonstandard eligibility review লাগলে 5 November-এর আগে।",
    ],
    steps: [
      {
        title: "Residence status দিয়ে intake route ঠিক করুন",
        timing: "প্রথম কাজ—research plan লেখার আগেই",
        description:
          "FUN-এর নতুন 2027 mapping-এ nationality বা Japan address একা intake ঠিক করে না। Schedule B international route-এর April exception application-date residence status-এর ওপর নির্ভর করে।",
        actions: [
          "Residence card-এর status, expiry date এবং January 2027 application period-এ সেটি valid থাকবে কি না check করুন।",
          "Valid Student status থাকলে April 2027 exception application-এ documentary evidence কীভাবে দিতে হবে—edu@fun.ac.jp-এ confirm করুন।",
          "Work, Dependent, spouse বা অন্য status হলে শুধু Japan resident বলেই April exception দাবি করবেন না; standard Schedule B intake September 2027 ধরুন।",
          "April অপরিহার্য কিন্তু Student exception নেই হলে General Schedule B eligibility/exam আলাদাভাবে দেখুন—সেখানে TOEIC conversion, specialized written assessment (অথবা objectively evaluated outstanding research work থাকলে approved research-results review) এবং interview থাকতে পারে।",
          "Nonstandard academic credential হলে individual eligibility review 25 November–2 December; standard recognized bachelor's হলে এই review দরকার কি না written confirmation নিন।",
        ],
        readyWhen:
          "International Special Schedule B নাকি General B, April নাকি September, এবং eligibility review লাগবে কি না—official reply/rule দিয়ে clear।",
      },
      {
        title: "English eligibility ও degree-completion language আলাদা করুন",
        timing: "Pre-consultation-এর আগে",
        description:
          "English test application document; এটি 30-credit course, lab, thesis ও thesis examination English-এ পাওয়া যাবে—এমন guarantee নয়। Current syllabus দিয়ে বাস্তব course map বানান।",
        actions: [
          "Non-native speaker হিসেবে TOEFL/TOEIC/IELTS score certificate প্রস্তুত করুন; current guide numerical minimum দেয়নি, কিন্তু Schedule B booklet প্রকাশ হলে final threshold/method recheck করুন।",
          "IELTS 5.5-কে automatic eligibility guarantee বলবেন না এবং MOI-কে test substitute ধরবেন না; exception লিখিতভাবে না পেলে listed score দিন।",
          "30+ completion credits-এর মধ্যে 20+ specialized ও 10+ research-guidance credits আলাদা column-এ map করুন।",
          "2026–27 syllabus-এ Takashi Ishio-এর Advanced Topics in Service Management এবং Taku Okuno-এর Advanced Open Technologies Japanese-only—এসবকে English course ধরে plan করবেন না।",
          "Prospective supervisor-কে জিজ্ঞাসা করুন: exact English/mixed 20-credit specialized set, lab meetings, research guidance, interim presentation, master's thesis ও thesis examination English-এ করা যাবে কি না।",
          "Damian Rivers-এর English-taught Academic Literacy in Context II বা mixed/English options থাকলেও compulsory/required distribution satisfy হচ্ছে কি না Academic Affairs দিয়ে audit করান।",
        ],
        readyWhen:
          "Valid English-test route এবং named coursesসহ written 30-credit completion plan আছে; missing Japanese-dependent requirement আর অজানা নয়।",
      },
      {
        title: "Current adviser ও research problem match করুন",
        timing: "2–4 সপ্তাহ focused reading",
        description:
          "Broad ‘Software/AI’ interest যথেষ্ট নয়। One problem, one method, one evaluation এবং current adviser-এর verified field দিয়ে fit দেখান।",
        actions: [
          "Takashi Ishio-এর software engineering, program analysis ও software visualization work পড়ুন; code quality, program comprehension বা developer-support tools relevant fit।",
          "AI-assisted defect/technical-debt detection ও visualization আপনার possible proposal হতে পারে, কিন্তু এটিকে Ishio-এর advertised project বলে লিখবেন না।",
          "Taku Okuno-এর software engineering, web-services, digital archives, Linked Open Data ও tourism-informatics work থেকে web/backend বা business-IT system question তৈরি করুন।",
          "Toshiji Kawagoe-এর experimental economics, game theory, bounded rationality, mechanism/market design পড়ুন; software background হলে simulation, experiment platform বা computational/data method স্পষ্ট করুন।",
          "Kawagoe route-কে generic Economics master's ভাববেন না—degree Systems Information Science, তাই information-science contribution দরকার।",
          "Primary ও backup adviser-এর জন্য current paper/theme, আপনার evidence, proposed data/method এবং expected contribution-এর চার-column fit note বানান।",
        ],
        readyWhen:
          "একজন primary ও একজন backup 2027 adviser-এর সঙ্গে specific, evidence-based research fit আছে।",
      },
      {
        title: "Mandatory pre-consultation সম্পন্ন করুন",
        timing: "Standard B: by 16 December 2026 · eligibility review হলে by 5 November",
        description:
          "External applicant সরাসরি guessed faculty email দিয়ে শুরু না করে official form ব্যবহার করবেন। Office referral-এর পর professor-এর সঙ্গে acceptance possibility ও research plan develop করবেন।",
        actions: [
          "Official designated CV ও research-plan form draft করুন এবং pre-consultation application form-এ target adviser লিখুন।",
          "Formal application-এর অন্তত 20 দিন আগে request submit করুন; nonstandard eligibility-review period-এর applicant সেই earlier period থেকে 20 দিন গুনবেন।",
          "Office-এর response সাধারণত প্রায় এক সপ্তাহে আসে; instruction পাওয়ার পর prospective supervisor-কে promptly contact করুন।",
          "Meeting/email-এ research scope, data access, method, two-year feasibility, supervision capacity এবং English course/thesis plan discuss করুন।",
          "Application slip-এ prospective FUN adviser confirmation কীভাবে নিতে হবে এবং separate adviser recommendation কার কাছ থেকে হবে—final B form দিয়ে distinguish করুন।",
          "Professor acceptance discussionকে admission বা funding guarantee হিসেবে উপস্থাপন করবেন না।",
        ],
        readyWhen:
          "Official pre-consultation complete, professor application discussion করেছেন এবং application form/plan-এর required confirmation clear।",
      },
      {
        title: "Research plan ও software evidence academic format-এ বানান",
        timing: "Pre-consultation feedback-এর পর 3–5 সপ্তাহ",
        description:
          "Product demo নয়—research question, baseline, data, evaluation ও contribution দরকার। Current form-এর page/format rule follow করুন; Schedule B form প্রকাশ হলে exact limit final করুন।",
        actions: [
          "Plan-এ problem, related work, gap, research question, method, data, baseline, evaluation metrics, ethics/risks এবং two-year schedule দিন।",
          "Existing software project থেকে architecture, your contribution, measurable outcome ও research-relevant limitation বাছুন।",
          "Optional software/hardware output দিলে manual/evidence এবং প্রতি item-এর সর্বোচ্চ দুই-page A4 summary current rule অনুযায়ী প্রস্তুত করুন।",
          "Team project হলে co-author/collaborator-approved signed statement-এ নিজের role ও contribution স্পষ্ট করুন।",
          "Commercial/GitHub projectকে automatically publication-equivalent বলবেন না; repeatable method, third-party evidence বা evaluation থাকলে শুধু সেটি claim করুন।",
          "Supervisor feedback নিয়ে designated format/length না বদলে references ও feasibility refine করুন।",
        ],
        readyWhen:
          "Plan independent research হিসেবে defensible এবং প্রতিটি optional output-এর authorship, evidence ও relevance পরিষ্কার।",
      },
      {
        title: "Schedule B document file ও arrival plan প্রস্তুত করুন",
        timing: "B booklet প্রকাশের সঙ্গে সঙ্গে; formal application 5–13 January",
        description:
          "Detailed Schedule B booklet/forms এখনো pending। Current A requirements strong planning list, কিন্তু B প্রকাশের পর line-by-line replace করতে হবে।",
        actions: [
          "Application slip, photo, CV, research plan, passport এবং prospective adviser confirmation প্রস্তুত রাখুন।",
          "Current reference অনুযায়ী transcript ও graduation/degree certificate sealed এবং application-এর তিন মাসের মধ্যে issued হতে হয়; final B issue/seal rule recheck করুন।",
          "Last institution-এর principal/president/faculty dean recommendation এবং separate academic adviser recommendation arrange করুন; prospective FUN confirmation-এর সঙ্গে mix করবেন না।",
          "Current form home-country guarantor ও Japan guarantor চায়—দুজনের willingness ও accurate contact details আগে confirm করুন।",
          "English score, optional Japanese proof, optional outputs এবং full-time employee হলে work-results form add করুন।",
          "Current application fee ¥30,000 budget করুন; B payment account/deadline ও 2027 amount final guide থেকে নিন।",
          "Current A process mail/hand submission এবং deadline-এর মধ্যে arrival চায়; B booklet একই rule দেয় কি না verify করে tracked delivery buffer রাখুন।",
        ],
        readyWhen:
          "Final B checklist-এর সব item correct form, seal, signature, issue-date ও delivery rule মেনে complete।",
      },
      {
        title: "Document-and-interview selection প্রস্তুত করুন",
        timing: "January submission থেকে 8–10 February exam window",
        description:
          "International Special route-এর সুবিধা written technical paper না থাকা; কিন্তু few seats, two recommendations, plan review ও adviser fit interviewকে substantive করে।",
        actions: [
          "2-minute background, 3-minute prior project এবং 4-minute proposal explanation English-এ practice করুন।",
          "Research gap, why method, data access, baselines, metrics, expected failure modes এবং two-year feasibility-এর Q&A বানান।",
          "Why FUN, why named adviser, why chosen domain এবং software experience কীভাবে research readiness প্রমাণ করে—evidenceসহ answer করুন।",
          "Weak grades থাকলে excuse না দিয়ে later technical work, improvement, academic fundamentals ও realistic learning plan দিন।",
          "Online নির্দেশ এলে stable internet, camera, microphone, quiet room ও backup connection test করুন; campus instruction এলে Hakodate travel/weather buffer রাখুন।",
          "General Schedule B route বেছে থাকলে international document-only format ধরে বসবেন না—তার TOEIC/specialized assessment আলাদাভাবে prepare করুন।",
        ],
        readyWhen:
          "নিজের exact route-এর exam format জানা এবং mock interview-এ research plan ও technical foundation notes ছাড়া defend করতে পারেন।",
      },
      {
        title: "Fees, waiver ও no-aid budget final করুন",
        timing: "Application-এর আগে; offer পেলে আবার",
        description:
          "FUN public-university fee level attractive, কিন্তু এটি scholarship offer নয়। 2027 fee revision এবং waiver uncertainty ধরে cash-flow plan করুন।",
        actions: [
          "Current reference লিখুন: most applicants admission ¥310,000 + tuition ¥535,800 × 2 = two-year base ¥1,381,600; insurance, housing, books/device ও living cost extra।",
          "Oshima/Hiyama resident fee ¥226,000 শুধু official residence definition/evidence পূরণ করলে; Japan-এর অন্য জায়গায় থাকলে local rate claim করবেন না।",
          "Graduate waiver admission ও tuition-এর full, 2/3, 1/3 বা 1/4 হতে পারে, কিন্তু new master's applicant-এর entrance-exam ranking top half এবং household-finance test দরকার।",
          "stu@fun.ac.jp-কে জিজ্ঞাসা করুন international applicant eligibility, application timing এবং admission fee আগে pay করতে হবে কি না।",
          "JASSO Honors Scholarship current ¥48,000/month, 12 বা 6 months হতে পারে; institution nomination ও quota সীমিত এবং FUN 2027 allocation confirmed নয়।",
          "No-aid, partial-waiver ও full-waiver—তিন scenario-তে rent, heating/winter cost, food, transport, insurance ও emergencyসহ 24-month budget করুন।",
        ],
        readyWhen:
          "Written award ছাড়া full payment সম্ভব এবং waiver/JASSO এলে cash-flow কীভাবে বদলাবে তা স্পষ্ট।",
      },
    ],
    checklist: [
      "Official detailed Schedule B international guide and forms",
      "April/September route based on application-date Student status",
      "Recognized bachelor's/16-year eligibility",
      "Individual eligibility review only if applicable",
      "Mandatory pre-consultation submission and result",
      "Prospective FUN adviser confirmation",
      "Written 30-credit English/Japanese course map",
      "English supervision, lab, thesis and thesis-examination language confirmation",
      "TOEFL, TOEIC or IELTS certificate",
      "Application slip, photo and CV",
      "Designated research plan",
      "Sealed current transcript",
      "Sealed graduation/degree certificate",
      "Institution-head/dean recommendation",
      "Separate academic-adviser recommendation",
      "Home-country and Japan guarantor details",
      "Passport copy",
      "Optional Japanese-proficiency evidence",
      "Optional software/research outputs and summaries",
      "Signed collaborator-contribution statement where applicable",
      "Full-time work-results form, if applicable",
      "¥30,000 current exam-fee budget and final payment proof",
      "Tracked arrival/submission evidence",
      "No-aid 24-month budget",
    ],
    afterSubmission: [
      "Email, post এবং university notices monitor করুন; exact 8–10 February interview date/mode জানালে JST calendar করুন।",
      "Research plan ও prior software output নিয়ে mock interview চালিয়ে যান—written test না থাকা admission সহজ হওয়ার প্রমাণ নয়।",
      "19 February result-এর পর enrolment deadline, correct April/September start এবং fee amount offer documents থেকে মিলান।",
      "Waiver application timing miss করবেন না এবং stu@fun.ac.jp-এর instruction ছাড়া fee payment delay করবেন না।",
      "Scholarship/waiver written confirmation না পাওয়া পর্যন্ত self-funded budget ও residence-status plan বজায় রাখুন।",
    ],
    cautions: [
      "Schedule B-কে সবার April 2027 route বলবেন না; standard international intake September 2027।",
      "Japan-এ বসবাস করা valid Student status-এর সমান নয়; April exception application date-এ exact status দেখে।",
      "25 November–2 December qualification review normal bachelor's applicant-এর universal application stage নয়।",
      "Detailed Schedule B guide pending; current A-guide language/documentsকে final B guarantee ভাববেন না।",
      "No published IELTS/GPA minimum মানে low requirement, easy admission বা guaranteed shortlist নয়; international seats মাত্র ‘a few’।",
      "MOI accepted test substitute হিসেবে listed নয় এবং Japanese proof optional হওয়া English-only degree guarantee নয়।",
      "Current syllabus-এ বহু relevant course Japanese-only; professor-এর research English-এ আলোচনা করতে পারলেও complete credits automatically English হয় না।",
      "General Schedule B এবং International Special Schedule B-এর exam format mix করবেন না।",
      "Faculty match advertised vacancy/funding নয়; mandatory pre-consultation ও adviser confirmation দরকার।",
      "Software project optional evidence; independent research achievement হিসেবে credibility দিতে method, evaluation, manual ও contribution proof দরকার।",
      "Waiver academic + household criteria-ভিত্তিক; JASSO institution-nominated এবং FUN quota unconfirmed।",
      "Current tuition/admission figures 2027-এ পরিবর্তিত হতে পারে।",
    ],
    officialLinks: [
      {
        label: "International Special Selection",
        href: "https://www.fun.ac.jp/en/admission/admission-graduate-school/international-student-gs/",
        description: "Schedule B guide/forms প্রকাশ, final dates, syllabus এবং current international notices monitor করুন।",
      },
      {
        label: "2027 international Master's reference guide",
        href: "https://www.fun.ac.jp/wp/wp-content/uploads/EInternational-Student-Selection_M_202608A-1.pdf",
        description: "Both-schedule timeline, current eligibility, documents, selection, fees ও adviser table পড়ুন; detailed rules Schedule A reference।",
      },
      {
        label: "2027 enrollment-period change notice",
        href: "https://www.fun.ac.jp/wp/wp-content/uploads/EJAttachmentAdvanced-Notice.pdf",
        description: "Schedule A/April, Schedule B/September এবং existing-Student/MEXT exception-এর controlling notice পড়ুন।",
      },
      {
        label: "Mandatory pre-consultation",
        href: "https://www.fun.ac.jp/en/admission/admission-graduate-school/pre-consultation/",
        description: "External-applicant form, 20-day rule, office referral ও professor consultation flow follow করুন।",
      },
      {
        label: "General Schedule B alternative",
        href: "https://www.fun.ac.jp/en/admission/admission-graduate-school/entrance-exam-master/master_scheduleb/",
        description: "April international exception না থাকলে different TOEIC/specialized/interview route-এর current notice compare করুন।",
      },
      {
        label: "2026–2027 graduate syllabus",
        href: "https://www.fun.ac.jp/wp/wp-content/uploads/2026_gs_syllubus_E_all_v1.pdf",
        description: "30-credit structure এবং প্রতিটি course-এর J/E/JE teaching-language reality audit করুন।",
      },
      {
        label: "Graduate School overview",
        href: "https://www.fun.ac.jp/en/graduate-school/",
        description: "Two-year master's ও five research domains-এর official structure দেখুন।",
      },
      {
        label: "Takashi Ishio profile",
        href: "https://www.fun.ac.jp/en/faculty/ishio-takashi/",
        description: "Software engineering, program analysis ও software visualization research fit যাচাই করুন।",
      },
      {
        label: "Taku Okuno profile",
        href: "https://www.fun.ac.jp/en/faculty/okuno-taku/",
        description: "Software/web services, digital archives, tourism informatics ও open-data work দেখুন।",
      },
      {
        label: "Toshiji Kawagoe profile",
        href: "https://www.fun.ac.jp/en/faculty/kawagoe-toshiji/",
        description: "Game theory, experimental economics, bounded rationality ও mechanism-design fit দেখুন।",
      },
      {
        label: "Graduate fee waivers",
        href: "https://www.fun.ac.jp/en/campus-life/admission-fee/",
        description: "Full/partial waiver-এর entrance-rank, household-finance ও application conditions পড়ুন।",
      },
      {
        label: "JASSO Honors Scholarship",
        href: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/about.html",
        description: "¥48,000 stipend, duration ও institution-nomination rule verify করুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "hiroshima-smart-society-masters-2027",
    country: "japan",
    university: "Hiroshima University",
    title: "Hiroshima University Smart Society Master's: April 2027 General Selection Guide",
    summary:
      "Japan-resident applicant-এর জন্য Master of Philosophy route—Information/Data Science, cyber-physical systems, smart mobility ও economics-linked research fit, exact January timeline, strict MOI wording, IAAS/adviser preparation, online oral exam এবং realistic funding plan।",
    label: "April 2027 · Jan 5–12 · detailed guide due October",
    funding:
      "Self-funded national-university route। Current admission ¥282,000 এবং tuition ¥535,800/year; full/half fee exemption competitive। SmaSo-X ¥25,000/month সাধারণ Student-status applicant-এর জন্য নয় এবং AY2027 new-entrant deadline ইতিমধ্যে শেষ।",
    duration: "2 years · April 2027 entry · Master of Philosophy",
    audience:
      "Japan-এ বসবাসরত international applicant যার CS/CSE/software/IT/data, control, mobility, economics বা social-science background একটি measurable smart-society problem-এর সঙ্গে যুক্ত করা যায়",
    realityCheck:
      "এটি strong conditional target, easy admission বা confirmed all-English degree নয়। University April 2027 second recruitment-এর dates প্রকাশ করেছে, কিন্তু 12 August 2026 পর্যন্ত detailed second-round General Selection booklet প্রকাশিত হয়নি; সেটি October 2026-এ expected। বর্তমান English/MOI, documents, selection ও fee details October 2026/April 2027 first-recruitment guide থেকে planning reference। General Selection Japan-resident non-Japanese applicant-এর route, আর 30 November–4 December preliminary evaluation শুধু nonstandard eligibility stipulation 9/10-এর জন্য। Current General Selection guide-এ JLPT document নেই, কিন্তু syllabus-এ English, Japanese ও bilingual courses আছে; adviser-এর সঙ্গে complete 30-credit English plan লিখিতভাবে confirm করতে হবে।",
    highlights: [
      "Graduate School of Innovation and Practice for Smart Society-এর দুই বছরের master's শেষে degree title Master of Philosophy।",
      "ছয়টি cross-disciplinary field: Cyber Physical System, Smart Mobility, Smart Energy, Smart Agriculture, Global Health and Medical Science এবং Social Innovation Science।",
      "Admission policy mathematics, data science ও information technology ব্যবহার করে interdisciplinary research এবং engineering, information science, economicsসহ বিভিন্ন academic backgroundকে স্বাগত জানায়।",
      "Japan-এ application-time residence থাকা non-Japanese applicant General Selection ব্যবহার করে; overseas-resident applicant-এর Special Selection আলাদা route।",
      "Official second-recruitment schedule: applicable preliminary review 30 November–4 December 2026, application 5–12 January 2027 by 17:00 JST, assigned online oral exam 18–27 January এবং tentative result 16 February।",
      "Current guide April admission-এর জন্য কেবল ‘several’ students দেখায়; final second-round capacity October guide থেকে recheck করতে হবে।",
      "Selection হলো document review + online oral examination। দুই অংশই A/B/C scale-এ assessed; যেকোনো অংশে C হলে fail। আলাদা programming/math written paper current route-এ নেই।",
      "Current guide TOEIC, TOEIC IP, TOEFL iBT, TOEFL ITP, IELTS Academic বা equivalent score নেয় এবং numerical IELTS minimum প্রকাশ করে না; English skill oral exam-এ সরাসরি evaluated হয়।",
      "MOI exemption-এর wording strict: official institution statement-এ degree program-এর instruction এবং examination—দুটিই English ছিল নিশ্চিত করতে হবে। শুধু generic ‘medium of instruction: English’ letter যথেষ্ট নাও হতে পারে।",
      "GRE General score optional; GMAT, JLPT বা numerical GPA cutoff current General Selection document list-এ নেই। Transcript, subject knowledge, proposal ও interview তবু competitive evidence।",
      "Current curriculum-এর completion target 30+ credits: Basic 6+, Specialization 10+, Practical 4+, Master's Thesis 4+, Common Graduate 2+ এবং primary-adviser-designated 4+, সঙ্গে thesis review/final examination।",
      "Current master's faculty list-এ Takuya Kinoshita, Makoto Chikaraishi, Masayuki Kondo, Johann Caro-Burnett, Shuning Chen এবং Koji Eguchi আছেন; list থাকা current supervision vacancy বা acceptance guarantee নয়।",
      "Current fee reference: application ¥30,000 plus system charge, admission ¥282,000 এবং tuition ¥535,800/year; enrollment-time amount revision হলে latest fee applies।",
      "Current university support-এর মধ্যে full/half admission- and tuition-fee exemption এবং after-enrollment SmaSo student research grant up to ¥300,000/project আছে; কোনোটিই guaranteed living-cost scholarship নয়।",
    ],
    fit: [
      "Application-এর সময় Japan-এ বসবাস করবেন এবং non-Japanese resident হিসেবে General Selection route ব্যবহার করবেন।",
      "31 March 2027-এর মধ্যে recognized bachelor's/16-year education বা অন্য listed standard graduate-entry qualification পূরণ হবে।",
      "Software/IT experienceকে শুধু employment history না রেখে research question, data, method ও evaluation-এ রূপ দিতে পারবেন।",
      "IELTS/TOEFL/TOEIC evidence অথবা instruction-and-examination দুটো cover করা official English-degree statement দিতে পারবেন।",
      "Named faculty member-এর current research-এর সঙ্গে proposal-specific fit আছে এবং IAAS/adviser contact early complete করতে পারবেন।",
      "English-dominant study চান বলে current syllabus থেকে 30-credit language map বানাবেন; no-JLPT ruleকে all-English guarantee ভাবছেন না।",
      "Fee exemption বা JASSO না পেলেও application, admission, tuition ও living cost চালানোর fallback budget আছে।",
    ],
    quickStart: [
      "Residence card ও foreign-degree history দেখে General Selection + IAAS path লিখুন; October-এর final second-round guide monitor করুন।",
      "Cyber/data route-এর জন্য Kinoshita/Eguchi, mobility-এর জন্য Chikaraishi, climate-data-এর জন্য Kondo এবং economics-এর জন্য Caro-Burnett/Chen compare করুন।",
      "Official Research Proposal form-এ one problem, one dataset, one method এবং measurable evaluation দিয়ে first draft করুন।",
      "University-কে exact ‘instruction and examination were English’ statement এখনই request করুন; generic MOI থাকলে corrected version নিন।",
    ],
    steps: [
      {
        title: "Correct route, final guide ও IAAS requirement lock করুন",
        timing: "এখন থেকে October 2026",
        description:
          "Official schedule live হলেও second-round booklet pending। Japan residence General Selection ঠিক করে, আর foreign-university graduate-এর জন্য university-wide IAAS pre-application processও গুরুত্বপূর্ণ।",
        actions: [
          "Residence card-এর front/back, current status ও January 2027 validity check করুন; Japan resident হলে General Selection plan করুন।",
          "Master's admission page bookmark করে October 2026-এ second-recruitment guide, forms, final capacity এবং document rules download করুন।",
          "Foreign university থেকে graduate হলে current IAO instruction অনুযায়ী IAAS account শুরু করুন; process ideally application-এর প্রায় তিন মাস আগে এবং review 2–4 weeks নিতে পারে।",
          "Program-এর Japanese admissions instruction ও university-wide IAO process অনুযায়ী foreign-university graduate-কে IAAS দিয়ে prospective-supervisor permission নিতে হবে; Japan-resident General Selection হলেও এই pre-application step complete করুন।",
          "IAAS approval number এবং prospective-adviser consent final application-এ কোথায় দিতে হবে তা October guide/office reply থেকে লিখে রাখুন।",
          "5–12 January deadlineকে portal submission মাত্র নয়—সব required electronic/original documents পৌঁছানোর deadline হিসেবে planning করুন।",
        ],
        readyWhen:
          "General Selection eligibility, IAAS/adviser step, final guide version এবং January submission method written evidence-এ clear।",
      },
      {
        title: "Standard eligibility ও preliminary review আলাদা করুন",
        timing: "October guide প্রকাশের সঙ্গে সঙ্গে",
        description:
          "Published 30 November–4 December window দেখে সবাই screening করবে না। Current guide-এ কেবল stipulation 9/10 nonstandard applicants preliminary evaluation দেয়।",
        actions: [
          "Foreign 16-year education হলে standard stipulation 3 এবং recognized 3+ year bachelor-equivalent degree হলে stipulation 6-এর wording compare করুন।",
          "Bachelor/degree certificate-এ degree title ও award date স্পষ্ট আছে কি না দেখুন; transcript-এ grading scale না থাকলে separate official explanation আনুন।",
          "নিজের qualification standard route-এ পড়ে কি না uncertain হলে 30 November-এর অনেক আগে Support Office-এ transcript/degree summary দিয়ে জিজ্ঞেস করুন।",
          "শুধু stipulation 9/10 instruction পেলে preliminary evaluation forms, personal history, academic records এবং required research-history evidence 4 December 17:00-এর মধ্যে পৌঁছান।",
          "Average GPA formally barred নয়, কিন্তু transcript document review-তে assessed—recent technical work ও academic improvementকে evidence হিসেবে প্রস্তুত করুন।",
        ],
        readyWhen:
          "Eligibility category numbered rule দিয়ে identified এবং preliminary review লাগলে complete, না লাগলে unnecessary documents পাঠানো হচ্ছে না।",
      },
      {
        title: "English evidence ও 30-credit language plan তৈরি করুন",
        timing: "Adviser contact-এর আগে",
        description:
          "Admission-language evidence ও degree-completion language দুটি আলাদা পরীক্ষা। No JLPT requirement থাকা helpful, কিন্তু course, fieldwork, lab ও thesis automatically English নয়।",
        actions: [
          "IELTS Academic, TOEFL iBT/ITP, TOEIC/TOEIC IP বা equivalent current accepted list থেকে strongest valid evidence বাছুন; two-years-before-exam score current guide-এ preferred।",
          "IELTS 5.5-কে automatic reject বা guaranteed competitive score—কোনোটিই বলবেন না; oral exam-এ English ability assessed হবে।",
          "MOI route হলে institution letter-এ exactভাবে instruction and examination both English ছিল লিখিয়ে seal/signature/contactসহ official statement নিন।",
          "30 credits map করুন: Basic 6+, Specialization 10+, Practical 4+, Thesis 4+, Common 2+ এবং adviser-designated 4+।",
          "প্রতিটি proposed subject-এর latest syllabus language E/B/J mark করুন; bilingual ‘B’ courseকে English-only ধরে নেবেন না।",
          "Prospective adviser ও Support Office-কে supervision, seminars, fieldwork, thesis writing, thesis review এবং final examination English-এ possible কি না লিখিতভাবে জিজ্ঞেস করুন।",
        ],
        readyWhen:
          "Accepted English evidence এবং course namesসহ complete 30-credit study path আছে; কোথায় Japanese/bilingual participation লাগবে তা জানা।",
      },
      {
        title: "Faculty fitকে research problem-এ নামান",
        timing: "3–5 সপ্তাহ focused reading",
        description:
          "Support-desk field adviser বা faculty-list entry funded vacancy নয়। Current research theme পড়ে one adviser/one problem match তৈরি করুন।",
        actions: [
          "Takuya Kinoshita-এর data-driven control, performance-driven control ও human-in-the-loop systems দেখুন; generic software/IoT নয়, control objective এবং measurable system performance দরকার।",
          "Koji Eguchi-এর text/information retrieval, network/financial-data analysis, probabilistic modelling ও machine learning software/data profile-এর জন্য শক্ত alternative।",
          "Makoto Chikaraishi-এর smart urban infrastructure, transport planning, travel behaviour/network, resilience ও risk analysis-এ mobility/app/GPS data question বানান।",
          "Masayuki Kondo-কে business/management professor বলবেন না; তাঁর fit climate countermeasure evaluation, GHG dynamics, land-use change, simulation, remote sensing ও statistical data।",
          "Johann Caro-Burnett-এর political, behavioural, experimental ও development economics এবং Shuning Chen-এর sustainable growth, development/environment/resource economics economics route-এর বেশি direct fit।",
          "প্রতি faculty-এর জন্য recent work, আপনার prior evidence, proposed data/method এবং expected smart-society contribution-এর এক-page fit note বানান।",
        ],
        readyWhen:
          "Primary এবং backup faculty-এর জন্য distinct proposal angle আছে এবং current second-round supervision availability confirm হয়েছে।",
      },
      {
        title: "Research proposalকে interdisciplinary কিন্তু testable করুন",
        timing: "IAAS/adviser feedback-এর পর 3–5 সপ্তাহ",
        description:
          "Interdisciplinary মানে বহু buzzword নয়। Technical বা economic method দিয়ে একটি বাস্তব social problem কীভাবে evaluate করবেন তা proposal-এর কেন্দ্র।",
        actions: [
          "Official prescribed form ব্যবহার করে Japanese অথবা English-এ problem, literature gap, research question, method, data, evaluation এবং expected contribution লিখুন।",
          "Software background হলে deployed system নয়, research artefact হিসেবে architecture, baseline, experiment, reliability/privacy/ethics এবং measurable outcome দিন।",
          "CPS topic হলে sensing/control loop, data source, latency/safety metric; mobility হলে travel/network data ও causal/choice/optimisation method; economics হলে identification strategy/experiment/model নির্দিষ্ট করুন।",
          "Data access, consent, personal information, fieldwork cost এবং Japan-language dependency আগেই risk section-এ রাখুন।",
          "Two-year timeline-এ coursework, literature/data acquisition, prototype/model, evaluation, writing ও thesis milestones দিন।",
          "Adviser feedback incorporate করলেও নিজের contribution, feasibility এবং cross-field connection পরিষ্কার রাখুন।",
        ],
        readyWhen:
          "Proposalটি one research question-এ focused, data/method/evaluation feasible এবং named adviser-এর current theme-এর সঙ্গে evidenced।",
      },
      {
        title: "UCARO, email ও original-document submission complete করুন",
        timing: "5–12 January 2027, 17:00 JST—final guide controls",
        description:
          "Current process hybrid। UCARO registration ও ¥30,000 payment করলেই application complete নয়; electronic files এবং original/certified certificatesও deadline-এর মধ্যে পৌঁছাতে হয়।",
        actions: [
          "UCARO account, application data ও JPEG photo আগে প্রস্তুত করুন; application fee-এর সঙ্গে separate system processing charge budget করুন।",
          "Prescribed Personal History এবং Research Proposal Word files exact naming rule-এ রাখুন।",
          "Undergraduate transcript এবং graduation/degree certificate original/certified copy সংগ্রহ করুন; graduate study থাকলে সেই recordsও যোগ করুন।",
          "English score অথবা qualifying instruction-and-examination statement, passport page এবং residence card-এর দুই পাশ দিন।",
          "বর্তমান graduate school-এ enrolled হলে institution approval এবং চাকরি চালিয়ে study করলে employer/organization approval letter নিন।",
          "Japanese/English ছাড়া document হলে original-এর সঙ্গে official English/Japanese translation দিন।",
          "Current reference অনুযায়ী email files পাঠিয়ে postal originals registered mail-এ deadline-এর আগে arrive করান; receipt/tracking এবং sent-email copy রাখুন।",
        ],
        readyWhen:
          "Final second-round checklist-এর প্রতিটি portal, email ও postal/hand-delivery item 12 January 17:00-এর আগে accepted format-এ complete।",
      },
      {
        title: "Online oral examination defend করুন",
        timing: "Submission-এর পর assigned date, 18–27 January 2027",
        description:
          "No written technical paper interviewকে সহজ করে না। Faculty motivation, specialist knowledge/applied skill, English, problem solving ও aptitude assess করে এবং document reviewও আলাদাভাবে pass করতে হয়।",
        actions: [
          "90-second background, 3-minute prior project এবং 5-minute proposal explanation English-এ practice করুন।",
          "Research gap, why this method, dataset access, baseline, metrics, limitations, ethics এবং two-year feasibility-এর প্রশ্ন বানান।",
          "Generic university reputation নয়—Hiroshima SmaSo কেন, chosen research field কেন এবং interdisciplinary contribution কী—specific evidence দিন।",
          "Software workকে team/product descriptionে সীমাবদ্ধ না রেখে নিজের technical decision, measurable outcome এবং research limitation explain করুন।",
          "Weak GPA থাকলে blame না দিয়ে trajectory, relevant coursework, later work এবং missing foundation শেখার concrete plan দিন।",
          "Camera, audio, stable wired/Wi-Fi, quiet room, ID এবং backup connection test করুন; adviser-এর assigned time JST calendar করুন।",
        ],
        readyWhen:
          "Mock panel-এ proposal, specialization fundamentals ও English follow-up প্রশ্ন notes ছাড়া answer করতে পারেন।",
      },
      {
        title: "Fees, exemption ও scholarship reality budget করুন",
        timing: "Application-এর আগে এবং offer-এর পর",
        description:
          "National-university fee attractive হলেও admission offer funded package নয়। Full-cost fallback এবং competitive relief আলাদা scenario হিসেবে রাখুন।",
        actions: [
          "Current two-year school-fee baseline হিসাব করুন: admission ¥282,000 + tuition ¥535,800 × 2 = ¥1,353,600; application/system fee, insurance, housing ও living cost extra।",
          "AY2027 fee-exemption guide late January 2027-এর দিকে expected; admission-fee এবং প্রতি-semester tuition exemption-এর separate timing monitor করুন।",
          "Current system full বা half exemption দেয়, financial need ও academic assessment সাপেক্ষ; admission-fee exemption খুব সীমিত এবং কিছু applicant criteria পূরণ করেও award পায় না।",
          "SmaSo-X master's stipendকে plan-এ রাখবেন না: AY2027 prospective-student deadline 29 May 2026 শেষ এবং ordinary Student-status foreign applicant listed nationality/residence category পূরণ করে না।",
          "After enrollment SmaSo student research grant current reference অনুযায়ী up to ¥300,000/project; এটি supervisor-approved research expense, rent/food stipend নয় এবং 2027 continuation recheck করতে হবে।",
          "JASSO Honors current ¥48,000/month for 12 বা 6 months, কিন্তু institution nomination/quota ও JASSO academic, language and financial rules সাপেক্ষ; Hiroshima/SmaSo 2027 nomination guaranteed নয়।",
          "No aid, half exemption এবং full exemption—তিন budget scenario-তে 24-month cash flow ও emergency fund লিখুন।",
        ],
        readyWhen:
          "Written award ছাড়া full cost manageable এবং প্রতিটি exemption/grant-এর deadline, eligibility ও payment timing আলাদা জানা।",
      },
    ],
    checklist: [
      "October 2026 second-recruitment General Selection guide",
      "Japan-resident General Selection route confirmation",
      "IAAS registration, decision and adviser contact evidence",
      "Standard eligibility rule or preliminary-evaluation result",
      "Prescribed Personal History form",
      "Focused Research Proposal in English or Japanese",
      "Primary and backup current faculty fit notes",
      "Written supervision/course-language confirmation",
      "30-credit English/bilingual/Japanese course map",
      "Official undergraduate transcript and grading-scale explanation",
      "Degree/graduation certificate with degree information",
      "Graduate records, if applicable",
      "IELTS/TOEFL/TOEIC score or exact English-degree statement",
      "Passport personal-details page",
      "Residence card front and back",
      "Current-school approval, if applicable",
      "Employer approval if continuing work while enrolled",
      "Official translations for non-English/Japanese documents",
      "UCARO account and application photo",
      "¥30,000 application fee plus processing charge",
      "Email submission evidence",
      "Registered-mail originals and tracking proof",
      "Online oral-exam setup and mock interview",
      "No-aid 24-month budget",
    ],
    afterSubmission: [
      "Prospective adviser-এর email monitor করুন; assigned 18–27 January date, time ও online method JST calendar করুন।",
      "Document review এবং oral—দুটিই pass করতে হবে, তাই submission-এর পরও proposal এবং technical/economic fundamentals practice চালান।",
      "16 February tentative result-এর পর official letter ছাড়া phone/email result inquiry করবেন না; enrollment instruction-এর exact dates follow করুন।",
      "Late-January AY2027 exemption guide প্রকাশ হলে payment করার আগে instructions পড়ুন—current system paid fees পরে refund নাও করতে পারে।",
      "Residence status, employer arrangement এবং housing move plan admission/funding written confirmation অনুযায়ী update করুন।",
    ],
    cautions: [
      "Second-recruitment schedule live হলেও detailed guide October 2026 পর্যন্ত pending; first-round ruleকে final January guarantee করবেন না।",
      "Preliminary evaluation every applicant-এর কাজ নয়—শুধু instructed nonstandard eligibility categories।",
      "Japan-resident General Selection এবং outside-Japan Special Selection-এর forms, dates ও documents mix করবেন না।",
      "Foreign-degree applicant-এর IAAS/adviser permission required pre-application step; UCARO খোলার আগে approval number সংগ্রহ করুন।",
      "Generic MOI letter যথেষ্ট নাও হতে পারে; instruction এবং examination দুটির English status official statement-এ চাই।",
      "No published IELTS/GPA minimum মানে low requirement, easy admission বা IELTS 5.5 competitive—এমন নয়।",
      "No JLPT application document full English-only completion guarantee নয়; current syllabus-এ English, Japanese ও bilingual courses আছে।",
      "Bilingual courseকে English-only ধরে 30-credit map বানাবেন না; thesis/final examination languageও confirm করুন।",
      "Support-desk contact বা current faculty list funded opening/acceptance নয়; second-round supervision availability verify করুন।",
      "Masayuki Kondo business/management professor নন; তাঁর verified fit climate, land-use, remote sensing ও modelling।",
      "Both document review and oral examination must pass; written paper না থাকাকে easy selection ভাববেন না।",
      "Current fee may change at enrollment, এবং fee exemption full/half হলেও budget-limited ও non-automatic।",
      "SmaSo-X AY2027 new-entrant deadline passed এবং ordinary Student-status foreign student সাধারণত ineligible।",
      "SmaSo student research grant research expense, personal monthly stipend নয়; JASSO nominationও guaranteed নয়।",
    ],
    officialLinks: [
      {
        label: "Smart Society Master's admissions",
        href: "https://www.hiroshima-u.ac.jp/en/smart_society/admission/m",
        description: "Second-recruitment guide release, official January dates, forms ও UCARO link monitor করুন।",
      },
      {
        label: "Current General Selection guide",
        href: "https://www.hiroshima-u.ac.jp/system/files/289671/Application%20Guidebook%20Master%26%23039%3Bs%20Course_General%20Selection_2026%20Oct%2C%202027%20Apr_0.pdf",
        description: "Current eligibility, MOI, GRE, documents, selection, fees ও 2027 faculty list planning reference হিসেবে পড়ুন।",
      },
      {
        label: "International Admissions Office / IAAS",
        href: "https://www.hiroshima-u.ac.jp/en/international/huiao",
        description: "Foreign-university graduate-এর account, pre-contact, 2–4 week review ও approval-number process দেখুন।",
      },
      {
        label: "Smart Society admission policy",
        href: "https://www.hiroshima-u.ac.jp/en/smart_society/admission",
        description: "Math, data science, IT, economics ও interdisciplinary applicant profile verify করুন।",
      },
      {
        label: "Master's curriculum policy",
        href: "https://www.hiroshima-u.ac.jp/en/smart_society/curriculum",
        description: "Modules, interdisciplinary structure ও thesis expectations বুঝুন।",
      },
      {
        label: "Current Master's syllabus",
        href: "https://www.hiroshima-u.ac.jp/en/smart_society/curriculum/master_syllabus",
        description: "Course choices এবং each linked syllabus-এর teaching language দিয়ে 30-credit map বানান।",
      },
      {
        label: "Student Support Desk field contacts",
        href: "https://www.hiroshima-u.ac.jp/en/smart_society/consuldesk",
        description: "Kinoshita, Chikaraishi ও Kondo-এর current field-adviser contacts দেখুন; এগুলো prospective supervision consent বা vacancy evidence নয়।",
      },
      {
        label: "Takuya Kinoshita profile",
        href: "https://seeds.office.hiroshima-u.ac.jp/profile/en.82e9dd97850486b0520e17560c007669.html",
        description: "Data-driven control, human-in-the-loop systems ও current graduate teaching যাচাই করুন।",
      },
      {
        label: "Makoto Chikaraishi profile",
        href: "https://seeds.office.hiroshima-u.ac.jp/profile/en.a0a69e8341602e5a520e17560c007669.html",
        description: "Smart mobility, travel/transport data, network ও resilience research fit দেখুন।",
      },
      {
        label: "Masayuki Kondo profile",
        href: "https://seeds.office.hiroshima-u.ac.jp/profile/en.235f4cce14c0ae9e520e17560c007669.html",
        description: "Climate, land-use, remote sensing ও modelling fit—business label নয়—verify করুন।",
      },
      {
        label: "Johann Caro-Burnett profile",
        href: "https://seeds.office.hiroshima-u.ac.jp/profile/en.586d8229bdfb2e78520e17560c007669.html",
        description: "Political, behavioural, experimental ও development economics research fit দেখুন।",
      },
      {
        label: "Shuning Chen profile",
        href: "https://seeds.office.hiroshima-u.ac.jp/profile/en.a9abea7d655e88b0520e17560c007669.html",
        description: "Sustainable growth, development economics এবং environmental/resource policy fit দেখুন।",
      },
      {
        label: "SmaSo-X scholarship and grants",
        href: "https://www.hiroshima-u.ac.jp/smart_society/smasox",
        description: "¥25,000/month residence-category limits, closed AY2027 call ও current student-grant information verify করুন।",
      },
      {
        label: "Hiroshima fee exemptions",
        href: "https://momiji.hiroshima-u.ac.jp/momiji-top/en/life/enrollment_fee_exemptiondeferment_and_tuition_fee_exemption.html",
        description: "AY2027 posting date, full/half relief, eligibility, separate-semester application ও payment cautions পড়ুন।",
      },
      {
        label: "JASSO Honors Scholarship",
        href: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/about.html",
        description: "¥48,000 stipend, 12/6-month duration, language/academic rules ও institution nomination limits দেখুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "ritsumeikan-information-science-engineering-masters-2027",
    country: "japan",
    university: "Ritsumeikan University",
    title: "Ritsumeikan Information Science & Engineering: April 2027 Master's Guide",
    summary:
      "Japan-resident applicant-এর জন্য English-based Information Science and Engineering Master's-এর correct Regular Admission route—mandatory supervisor approval, January deadline, 450-point Math/CS written exam, interview, documents, fees এবং realistic funding plan।",
    label: "April 2027 · Jan 7–21 · supervisor approval + written exam",
    funding:
      "Self-funded private-university route। AY2027 admission fee ¥200,000 এবং tuition ¥1,337,600/year; 2027 international tuition-reduction arrangement এখনো undecided, তাই কোনো waiver ধরে budget করা যাবে না।",
    duration: "2 years · April 2027 entry · English-based Master's Program",
    audience:
      "Japan-এ বসবাসরত international applicant যার recognized CS/CSE/software/IT-related bachelor's আছে, English-based graduate study চান এবং Linear Algebra/Probability plus core Computer Science written exam-এর জন্য প্রস্তুত হতে পারবেন",
    realityCheck:
      "এটি genuine English-based CSE option, কিন্তু Japan-resident applicant-এর জন্য ★★★★★ low-requirement route নয়। Remaining February Regular Admission-এ কেবল ‘a few’ seats, prospective-supervisor-signed one-page research plan, Osaka Ibaraki Campus-এ 450-point technical written exam এবং individual interview আছে। Attachment-এ বর্ণিত IELTS/TOEFL/TOEIC, MOI অথবা supervisor GRE2 alternative কেবল outside-Japan International Student Admission-এর language-document rule; Japan-resident Regular route-এর required-document table-এ language certificate লাগে না। Strong subject fit থাকলেও practical rating ★★★☆☆—exam readiness ও supervisor approval হলে ভালো conditional target।",
    highlights: [
      "Graduate School of Information Science and Engineering-এর Advanced Information Science and Engineering major-এর Information Science and Engineering international course English-based।",
      "Research scope Software Engineering, AI/ML, security, networks, distributed systems, IoT, data science, HCI, computer vision, robotics এবং media processing পর্যন্ত বিস্তৃত।",
      "Japan-এর বাইরে থাকা applicant-এর International Student Admission 8–22 October 2026; Japan resident সেই route ব্যবহার করতে পারবেন না।",
      "Japan-resident applicant-এর remaining Regular round: application 7–21 January 2027, exam 9 February, emergency makeup 12 February এবং result 25 February।",
      "Regular route selection: documents + 120-minute written examination + individual interview; exam Osaka Ibaraki Campus-এ in person।",
      "Written exam 450 points: Mathematics-এ Linear Algebra অথবা Probability & Statistics থেকে 1টি (150), Computer Science-এ 5টি topic থেকে 3টি (প্রতি topic 100)।",
      "Computer Science choices: Data Structures & Algorithms, Computer Systems, Artificial Intelligence, Databases এবং Media Processing।",
      "Regular application-এর আগে prospective Master's supervisor-কে Form ISE1 পাঠিয়ে pre-counseling নিতে এবং তাঁর signature/sealসহ approved research plan ফেরত নিতে হবে।",
      "External Regular applicant-এর recognized bachelor/16-year education দরকার; public guide কোনো hard numerical GPA cutoff দেখায় না।",
      "Regular route-এ IELTS/TOEFL/TOEIC বা MOI certificate required document নয়; no published IELTS cutoff এবং no GRE/GMAT standard test requirement।",
      "Guide-এর GRE1, GRE2 ও GRE3 হলো internal Ritsumeikan forms—Graduate Record Examination নয়। Regular applicant-এর জন্য GRE1 questionnaire ও GRE3 financial declaration relevant; GRE2 নয়।",
      "English-based route-এর জন্য JLPT score/threshold নেই; GRE1-এ Japanese ability self-report করা admission cutoff নয়।",
      "Current potential faculty: Norihiro Yoshida (software engineering/IoT/security), Katsuhisa Maruyama (software engineering/development environments/programming languages), Erina Makihara (software engineering/educational data mining), Hiroshi Yamamoto (IoT/blockchain/ML), Hiromitsu Hattori (multi-agent AI) এবং Ruck Thawonmas (Game AI)।",
      "AY2027 tuition confirmed ¥668,800/semester বা ¥1,337,600/year; new external entrant-এর admission fee ¥200,000, AY2027 miscellaneous dues পরে final হবে।",
    ],
    fit: [
      "Application-এর সময় Japan-এ থাকবেন এবং outside-Japan International route নয়, Regular Admission ব্যবহার করবেন।",
      "Residence card 1 March 2027 বা তার পরে পর্যন্ত valid থাকবে, অথবা renewal case GSISE office আগে approve করবে।",
      "Recognized bachelor's/16-year education বা guide-এর অন্য standard graduate-entry eligibility পূরণ হবে।",
      "Software/IT workকে research question, prior evidence, method ও measurable evaluation-এ রূপ দিতে পারবেন।",
      "January-এর আগেই one prospective supervisor-এর সঙ্গে ISE1 pre-counseling এবং signed approval complete করতে পারবেন।",
      "Linear Algebra বা Probability & Statistics এবং core CS-এর অন্তত তিনটি subject timed written exam level-এ প্রস্তুত করতে পারবেন।",
      "Private-university full cost scholarship ছাড়া চালানোর fallback budget আছে।",
    ],
    quickStart: [
      "Residence-card expiry ও correct Regular route check করুন; International Admission-এর MOI rule নিজের route-এ copy করবেন না।",
      "Norihiro Yoshida, Katsuhisa Maruyama এবং Erina Makihara-এর recent work compare করে one-page faculty-fit matrix বানান।",
      "Official ISE1 form-এ এক-page research plan লিখে CVসহ primary supervisor-কে pre-counseling request পাঠান।",
      "Math থেকে strongest 1টি এবং CS থেকে strongest 3টি exam subject বেছে weekly timed preparation শুরু করুন।",
    ],
    steps: [
      {
        title: "Correct admission route ও residence condition lock করুন",
        timing: "এখনই",
        description:
          "Applicant কোথায় থাকেন সেটিই route নির্ধারণ করে। Japan resident-এর February Regular route on-campus exam; outside-Japan International route online selection এবং আলাদা documents ব্যবহার করে।",
        actions: [
          "Passport, current address এবং residence card দিয়ে লিখে রাখুন যে application time-এ আপনি Japan resident।",
          "International Student Admission-এর 8–22 October dates বাদ দিয়ে Regular Admission 7–21 January 2027 calendar করুন।",
          "Residence card 1 March 2027 বা তার পরে valid কি না দেখুন; earlier expiry কিন্তু renewal expected হলে application-এর অনেক আগে gsise@st.ritsumei.ac.jp-এ approval process জিজ্ঞেস করুন।",
          "Current school graduation/withdrawal-এর কারণে residence status invalid হলে renewal/change process immigration এবং university office-এর সঙ্গে আগে clear করুন।",
          "9 February Osaka Ibaraki Campus exam-এর travel, leave এবং full-day availability reserve করুন; 12 February শুধু university-declared makeup date।",
        ],
        readyWhen:
          "Regular route, valid residence evidence, January deadline এবং in-person exam attendance—চারটিই documentaryভাবে clear।",
      },
      {
        title: "Supervisor shortlist ও signed ISE1 approval নিন",
        timing: "August–November 2026; January পর্যন্ত অপেক্ষা নয়",
        description:
          "Signed/sealed Research Plan ISE1 ছাড়া Regular application complete নয়। Faculty list-এ নাম থাকা vacancy বা acceptance guarantee করে না।",
        actions: [
          "Norihiro Yoshida-এর automated software engineering, IoT software quality/security এবং testing/repair work review করুন।",
          "Katsuhisa Maruyama-এর program understanding, refactoring, software evolution ও development-environment research review করুন।",
          "Education/learning analytics fit হলে Erina Makihara; IoT/network/blockchain হলে Hiroshi Yamamoto; multi-agent systems হলে Hiromitsu Hattori compare করুন।",
          "One primary professor বেছে concise email-এ CV, transcript summary, April 2027 Regular route এবং ISE1 draft দিন।",
          "Public email না থাকলে gsise@st.ritsumei.ac.jp-এ professor name, Master's/English-based, intake, admission method, CV ও ISE1 দিয়ে contact relay চান।",
          "Feedback অনুযায়ী plan revise করে signature/sealসহ approved ISE1 নিন; data copy পেলে submission-এর জন্য color print করুন।",
        ],
        readyWhen:
          "Current supervisor explicitly agrees to pre-counseling এবং final ISE1-এ তাঁর valid signature/seal আছে।",
      },
      {
        title: "One-page research planকে testable করুন",
        timing: "Supervisor outreach-এর আগে 2–3 সপ্তাহ, পরে revision",
        description:
          "ISE1 মাত্র one A4 page। তাই broad AI/software interest নয়—problem, method, evaluation ও two-year feasibility condensedভাবে দিতে হবে।",
        actions: [
          "Title, background/problem, related-work gap, research objective, method, expected result এবং schedule-এর compact outline বানান।",
          "Software engineering topic হলে repository/data source, baseline tools, defect/security/maintainability metric এবং validation method নির্দিষ্ট করুন।",
          "Work project ব্যবহার করলে নিজের contribution, confidential-data restriction এবং publishable research artefact আলাদা করুন।",
          "AI ব্যবহার করলে শুধু model name নয়—training/evaluation data, baseline, generalization এবং failure analysis দিন।",
          "April 2027 থেকে literature, data collection, prototype, experiment, thesis writing ও defense-এর semester milestones দিন।",
        ],
        readyWhen:
          "ISE1 one page-এ readable, named lab-এর current work-এর সঙ্গে linked এবং measurable research contribution দেখায়।",
      },
      {
        title: "450-point written exam-এর subject strategy বানান",
        timing: "এখন থেকে 9 February 2027",
        description:
          "এই exam-ই attachment-এর rating বদলে দেয়। Math-এ 1টি এবং CS-এ 3টি answer করতে হবে; short preparation দিয়ে এটিকে easy target ধরা যাবে না।",
        actions: [
          "Math diagnostic দিয়ে Linear Algebra বনাম Probability & Statistics-এর মধ্যে stronger option বাছুন।",
          "CS diagnostic দিয়ে five-area list থেকে strongest three বাছুন; software background হলে সাধারণত Algorithms, Systems/Databases এবং AI-এর readiness আলাদাভাবে test করুন।",
          "Official AY2024/AY2025 past papers ব্যবহার করুন, কিন্তু university 2027 থেকে subjects changed বলেছে—পুরোনো format exact prediction নয়।",
          "প্রথম 6–8 সপ্তাহ foundations: matrix/eigen concepts বা distributions/estimation, asymptotic analysis/data structures, architecture/OS, DB/AI/media basics review করুন।",
          "শেষ 8 সপ্তাহ 120-minute mixed mock দিন; 450-point allocation অনুযায়ী time, answer selection এবং written explanation practice করুন।",
          "Weakest selected area supervisor interview-এর আগেও explain করতে পারবেন এমন concept sheet বানান।",
        ],
        readyWhen:
          "কমপক্ষে তিনটি timed mock-এ chosen Math + three CS answers consistentভাবে complete এবং নিজের errors classify করে ঠিক করেছেন।",
      },
      {
        title: "English, Japanese ও GRE-form confusion দূর করুন",
        timing: "Document checklist তৈরির সময়",
        description:
          "English-based program হলেও admission method অনুযায়ী language documents বদলায়। Regular route-এর table controlling source।",
        actions: [
          "Regular column-এ Certificate of Language Ability ‘not required’ mark করুন; IELTS/MOI/GRE2 upload invent করবেন না।",
          "IELTS 5.5 থাকলে CV বা supervisor discussion-এ supporting evidence হিসেবে উল্লেখ করতে পারেন, কিন্তু formal required item বলবেন না।",
          "TOEIC/TOEFL/IELTS, English-medium letter এবং supervisor GRE2 alternative শুধু outside-Japan International route-এর জন্য—separate note রাখুন।",
          "GRE1 questionnaire ও GRE3 financial declaration download করুন; এগুলো standardized GRE/GMAT নয়।",
          "JLPT threshold না থাকলেও lab communication, living এবং Japan job search-এর জন্য Japanese learning parallel রাখুন।",
        ],
        readyWhen:
          "নিজের Regular-route checklist-এ correct forms আছে এবং International-route language rules ঢোকেনি।",
      },
      {
        title: "Ritsu-Mate registration, fee ও postal documents complete করুন",
        timing: "7–21 January 2027",
        description:
          "Online registration/payment alone application নয়। Japan post office থেকে prescribed postal package deadline অনুযায়ী পাঠাতে হবে।",
        actions: [
          "Ritsu-Mate application data ও recent photo প্রস্তুত করে first days-এ registration করুন।",
          "Regular application fee ¥35,000 pay করুন এবং transaction evidence রাখুন।",
          "Application sheet, non-Japanese GS1, original degree/graduation certificate, original transcript, signed ISE1, GRE1 ও GRE3 assemble করুন।",
          "Non-English document-এর official English translation এবং guide-required original/certified format recheck করুন।",
          "সব document A4/English rule এবং name/date consistency check করুন।",
          "Ritsu-Mate address label ব্যবহার করে Japan post office থেকে simplified registered express mail পাঠান; mailbox ব্যবহার করবেন না। Last-day postmark rule থাকলেও buffer রাখুন।",
          "Scans, receipt, tracking number এবং signed-plan color copy নিজের কাছে রাখুন।",
        ],
        readyWhen:
          "Ritsu-Mate registration, ¥35,000 payment এবং complete tracked postal package 21 January deadline-এর মধ্যে accepted।",
      },
      {
        title: "Interview ও exam-day defense প্রস্তুত করুন",
        timing: "January submission-এর পর থেকে 9 February",
        description:
          "Written exam-এর পাশাপাশি afternoon individual interview-এ research plan, preparation, prior work এবং suitability explain করতে হবে।",
        actions: [
          "90-second profile, 3-minute strongest technical project এবং 5-minute ISE1 explanation English-এ rehearse করুন।",
          "Why this professor/lab, research gap, data access, method, baseline, metrics, ethics এবং two-year feasibility-এর answer তৈরি করুন।",
          "Transcript weakness থাকলে excuse নয়—recent evidence, exam preparation এবং foundation-repair plan দেখান।",
          "Exam admission sheet, photo ID/residence card, permitted stationery এবং campus route আগের রাতে প্রস্তুত করুন।",
          "Written exam 09:30–11:30; interview 15:00 থেকে—lunch, waiting time এবং no-conflict full day plan করুন।",
        ],
        readyWhen:
          "Timed written mocks stable এবং research/technical follow-up questions concise English-এ answer করতে পারেন।",
      },
      {
        title: "Full-cost budget ও uncertain aid আলাদা করুন",
        timing: "Application-এর আগে; result-এর পর update",
        description:
          "Admission offer funded offer নয়। Current international tuition-reduction scheme 2026-এ শেষ; 2027 replacement এখনো officialভাবে undecided।",
        actions: [
          "Base two-year school fee হিসাব করুন: admission ¥200,000 + tuition ¥1,337,600 × 2 = ¥2,875,200; application, dues, insurance, housing ও living extra।",
          "First-year base cash need ¥1,537,600 plus AY2027 miscellaneous dues; current external-graduate reference dues final amount নয়।",
          "2027 tuition-reduction announcement না আসা পর্যন্ত 20%, 50% বা 100% discount কোনো scenario-র guaranteed income ধরবেন না।",
          "University-recommended/private scholarships-এর eligibility, Japanese requirement, nomination quota এবং payment timing separately verify করুন।",
          "No aid, partial aid এবং delayed award—তিন cash-flow scenario বানান।",
        ],
        readyWhen:
          "Written scholarship decision ছাড়া full tuition ও living cost feasible, অথবা funding gap স্পষ্টভাবে resolved।",
      },
    ],
    checklist: [
      "April 2027 GSISE full application guide",
      "Japan-resident Regular Admission route note",
      "Residence card valid on/after March 1, 2027",
      "Supervisor shortlist and current availability check",
      "One-page Form ISE1",
      "Supervisor signature/seal on ISE1",
      "CV and research-fit email evidence",
      "Chosen Math exam subject",
      "Chosen three Computer Science subjects",
      "Past-paper diagnostics and timed mocks",
      "Ritsu-Mate application sheet and photo",
      "Form GS1 for non-Japanese applicant",
      "Original graduation/degree certificate",
      "Original academic transcript",
      "GRE1 internal questionnaire",
      "GRE3 financial-resources declaration",
      "Required credential/equivalency documents, if applicable",
      "Official translations where needed",
      "¥35,000 application fee proof",
      "Simplified registered express-mail receipt and tracking",
      "Exam sheet, ID and Osaka Ibaraki Campus travel plan",
      "No-aid two-year budget",
    ],
    afterSubmission: [
      "Ritsu-Mate messages এবং registered-mail delivery monitor করুন; missing-document request এলে stated deadline follow করুন।",
      "9 February exam sheet download/print instruction follow করুন এবং campus reporting details verify করুন।",
      "Written Math/CS practice বন্ধ করবেন না; afternoon interview-এর জন্য ISE1 defense parallel চালান।",
      "25 February result-এর পর enrollment procedure 25 February–11 March current schedule অনুযায়ী complete করুন; official notice controls।",
      "Admission হলে residence-status continuity, AY2027 aid update, tuition due date এবং housing plan written documents দিয়ে finalize করুন।",
    ],
    cautions: [
      "Japan resident outside-Japan International Student Admission ব্যবহার করতে পারবেন না।",
      "MOI/IELTS/GRE2 alternative Regular route-এর requirement নয়; attachment এই দুই route mix করেছে।",
      "No required English score মানে English ability irrelevant নয়—program, supervisor interaction, exam ও interview English-based।",
      "GRE1/2/3 internal form; GRE standardized test নয়। GMATও listed নয়।",
      "No published GPA cutoff মানে easy admission বা average profile automatically competitive নয়।",
      "Only ‘a few’ places এবং 450-point technical exam থাকায় ★★★★★ rating justified নয়।",
      "Past papers useful, কিন্তু entrance subjects April 2027 admission থেকে changed—old format exact copy নয়।",
      "Faculty page-এ নাম থাকা current vacancy বা acceptance guarantee নয়; signed ISE1 definitive gate।",
      "Some faculty page-এ unable-to-accept warnings আছে; final shortlist-এর current note application-এর আগে recheck করুন।",
      "Residence card expiry rule ignore করলে otherwise eligible applicationও blocked হতে পারে।",
      "Online Ritsu-Mate entry application complete করে না; required postal originalsও পাঠাতে হবে।",
      "AY2027 tuition confirmed হলেও miscellaneous dues pending এবং tuition inflation clause অনুযায়ী revise হতে পারে।",
      "Existing international tuition-reduction scheme 2026-এ ends; 2027 support undecided, তাই waiver promise করবেন না।",
    ],
    officialLinks: [
      {
        label: "GSISE application information",
        href: "https://en.ritsumei.ac.jp/gsise/admission/application/",
        description: "Correct route, dates, supervisor pre-counseling, ISE1 forms এবং past questions দেখুন।",
      },
      {
        label: "April 2027 official GSISE guide",
        href: "https://www.ritsumei.ac.jp/gr/exam/point/202704_ag_science_engineering.pdf",
        description: "Master's Regular/International eligibility, documents, residence rule, 450-point exam ও interview-এর controlling source।",
      },
      {
        label: "Current GSISE researchers",
        href: "https://en.ritsumei.ac.jp/gsise/professor/",
        description: "Research areas, laboratory links এবং unable-to-accept notices recheck করুন।",
      },
      {
        label: "GSISE curriculum and completion",
        href: "https://en.ritsumei.ac.jp/gsise/education/curriculum/",
        description: "30-credit structure, subjects, research supervision এবং thesis completion rule দেখুন।",
      },
      {
        label: "AY2027 tuition and fees",
        href: "https://www.ritsumei.ac.jp/file.jsp?id=505240",
        description: "¥200,000 admission, ¥668,800/semester tuition এবং pending miscellaneous-fee note verify করুন।",
      },
      {
        label: "International-student scholarship notice",
        href: "https://www.ritsumei.ac.jp/international/intl_students/scholarship/",
        description: "Current tuition-reduction scheme ending in 2026 এবং 2027 onward undecided warning পড়ুন।",
      },
      {
        label: "Norihiro Yoshida profile",
        href: "https://research-db.ritsumei.ac.jp/rithp/k03/resid/S002488?lang=en",
        description: "Software engineering, IoT/security work ও current affiliation verify করুন।",
      },
      {
        label: "Automated Software Engineering Lab",
        href: "https://aselabweb.jp/yoshida/",
        description: "Norihiro Yoshida-এর current lab context এবং verified contact norihiro@fc.ritsumei.ac.jp দেখুন।",
      },
      {
        label: "Katsuhisa Maruyama profile",
        href: "https://research-db.ritsumei.ac.jp/rithp/k03/resid/S000030?lang=en",
        description: "Software evolution, program understanding এবং development-environment fit verify করুন।",
      },
      {
        label: "Katsuhisa Maruyama contact",
        href: "https://www.fse.cs.ritsumei.ac.jp/~maru/contact.html",
        description: "Ritsumeikan-hosted page থেকে verified contact maru@cs.ritsumei.ac.jp দেখুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "ritsumeikan-economic-development-mped-masters-2027",
    country: "japan",
    university: "Ritsumeikan University",
    businessPriority: 23,
    englishBusinessPrograms: "Master’s Program in Economic Development (English)",
    businessOfficialUrl: "https://en.ritsumei.ac.jp/gsec/mped/",
    title: "Ritsumeikan MPED Economic Development: 2027 Planning Guide",
    summary:
      "September 2027 Master of Economics watchlist—fully English MPED curriculum, current IELTS 5.5 reference, economics writing-sample hurdle, faculty fit, self-financed fees এবং Japan-resident applicant-এর জন্য ADB/MEXT funding reality।",
    label: "September 2027 watchlist · official guide pending",
    funding:
      "Primarily self-funded planning target। AY2027 admission fee ¥200,000 এবং MPED tuition ¥1,070,400/year; 2027 tuition reduction undecided। ADB-JSP current rules Japan-এ বসবাস/কর্মরত Bangladeshi applicant-কে exclude করে, আর 2027 MPED MEXT slot confirmed নয়।",
    duration: "2 years · September entry only · Master of Economics",
    audience:
      "Japan-resident applicant যিনি economics/development/public policy/innovation-এ credible transition চান, English economics-related writing sample দিতে পারবেন এবং scholarship ছাড়া private-university cost-এর fallback plan আছে",
    realityCheck:
      "এটি apply-now opportunity নয়। 12 August 2026 পর্যন্ত official MPED page শুধু September 2026 self-financed cycle দেখায়; September 2027 dates, documents এবং English rules এখনও প্রকাশিত হয়নি। Current 2026 guide-এ IELTS 5.5/TOEFL/TOEIC threshold আছে এবং program fully English, কিন্তু pure software background-এর জন্য economics-related English thesis/term paper, undergraduate-level economics readiness এবং research proposal বড় hurdle। Japan resident হিসেবে current ADB-JSP rule পূরণ হয় না এবং MEXT 2027-এ MPED অন্তর্ভুক্ত হবে কি না unknown। তাই current profile-এর practical rating ★★★☆☆; self-funding এবং strong economics writing sample থাকলে fit বাড়ে।",
    highlights: [
      "Graduate School of Economics-এর MPED একটি two-year September-entry program; April entry নেই এবং degree Master of Economics।",
      "Current official guide অনুযায়ী all MPED classes English-এ; curriculum policy lectures, seminars, thesis supervision এবং academic communicationও English বলে।",
      "Completion-এর জন্য 30 credits, prescribed research guidance, Master's thesis এবং final screening/examination লাগে।",
      "Core subjects Microeconomics, Macroeconomics এবং Econometrics; related study Development Economics, International Trade/Finance, Public Policy, Environmental Economics, infrastructure এবং empirical policy analysis cover করে।",
      "Current 2026 Regular Admission English threshold: TOEFL iBT 68 old scale / 3.5 new scale, IELTS 5.5 বা TOEIC L&R 650 equivalent; 2027 guide দিয়ে অবশ্যই recheck করতে হবে।",
      "Current guide blanket MOI waiver দেয় না। Test নিতে না পারার reason থাকলে institution-issued formal letter/certificate evaluating English ability alternative evidence হতে পারে; automatic acceptance নয়।",
      "GRE/GMAT current eligibility বা document list-এ নেই এবং external Regular applicant-এর hard numerical GPA cutoff প্রকাশিত নয়।",
      "Economics bachelor's explicitly mandatory নয়, কিন্তু admission policy bachelor-level economics/related knowledge expects এবং FAQ undergraduate micro/macro plus high-school math/statistics preparation বলে।",
      "Regular applicant-কে English economics-related bachelor thesis, term paper বা equivalent report এবং 200–300-word English abstract দিতে হয়—software-only applicant-এর জন্য এটিই প্রধান conversion barrier।",
      "Current supporting writing includes approximately 400-word reason for application এবং approximately 800-word research proposal, সঙ্গে up to three preferred supervisors ও প্রত্যেকের জন্য প্রায় 200-word fit reason।",
      "Prospective supervisor-এর pre-approval লাগে না; preferred names guaranteed নয় এবং Graduate School enrollment-এর পরে adviser assign করে।",
      "Current selection documents-এর ভিত্তিতে; university প্রয়োজন মনে করলে scheduled online interview নেয়। Traditional written economics entrance paper current Regular route-এ নেই।",
      "Current MPED page previous students-এর country list-এ Bangladesh দেখায়, যা admission precedent—acceptance guarantee নয়।",
      "Current faculty fit: Ai Takeuchi (Experimental Economics/Game Theory/cooperation mechanisms) এবং Souksavanh Vixathep (development, Southeast Asian economies, enterprise/entrepreneurship, trade; Bangladesh garment/manufacturing research)।",
      "AY2027 MPED tuition officially ¥535,200/semester বা ¥1,070,400/year; external entrant admission fee ¥200,000 এবং final 2027 membership dues extra।",
    ],
    fit: [
      "September 2027 intake acceptable; April 2027 start প্রয়োজন নয়।",
      "Recognized bachelor's/equivalent graduate-entry qualification আছে এবং transcript দিয়ে quantitative/analytical readiness দেখাতে পারবেন।",
      "Microeconomics, Macroeconomics, basic mathematics এবং statistics foundation admission-এর আগে build করতে প্রস্তুত।",
      "Economics/development-related English paper তৈরি বা existing thesis/term paper adapt করতে পারবেন—generic software report নয়।",
      "Current IELTS 5.5-equivalent requirement পূরণ করেন, তবে 2027 final guide প্রকাশের পরে score validity ও exact rule আবার check করবেন।",
      "Software backgroundকে digital economy, enterprise productivity, innovation, value chains, behavioural policy বা development-data question-এ credibleভাবে connect করতে পারবেন।",
      "ADB বা unconfirmed MEXT ছাড়া admission, tuition ও living cost fund করার realistic fallback আছে।",
    ],
    quickStart: [
      "Official MPED admissions page ও Graduate School guideline hub bookmark করে September 2027 self-financed guide monitor করুন।",
      "Existing IELTS score date, current 2026 threshold এবং institution English-evaluation letter option আলাদা করে document plan লিখুন।",
      "Ai Takeuchi ও Souksavanh Vixathep-এর themes compare করে one economics question, dataset এবং method-এর draft বানান।",
      "একটি English economics-related term paper এখনই শুরু করুন; micro/macro/statistics foundation parallel review করুন।",
    ],
    steps: [
      {
        title: "2027 statusকে watchlist হিসেবেই রাখুন",
        timing: "এখন থেকে official September 2027 publication",
        description:
          "Current page-এর April 9–23, 2026 dates expired reference। University September 2027 self-financed calendar বা publication date এখনো ঘোষণা করেনি।",
        actions: [
          "MPED admissions page এবং graduate application-guideline index monthly check করুন।",
          "2026 application 9–23 April, possible interview 30 May এবং result 18 June-কে শুধু workflow reference হিসেবে রাখুন—2027 deadline নয়।",
          "2027 PDF প্রকাশ হলে intake month, application dates, application fee, interview date, English score date এবং postal/digital instructions line by line update করুন।",
          "MPED-এর April entry নেই—April 2027 target list থেকে এটিকে আলাদা September 2027 track-এ রাখুন।",
          "Office gs-ec@st.ritsumei.ac.jp-কে concise email-এ 2027 guideline release timing ও Japan-resident Regular eligibility জিজ্ঞেস করতে পারেন; written reply save করুন।",
        ],
        readyWhen:
          "September 2027 official guide হাতে এবং current-cycle assumptions replaced by exact dates/rules।",
      },
      {
        title: "Economics transition-এর academic gap audit করুন",
        timing: "পরবর্তী 8–12 সপ্তাহ",
        description:
          "Non-economics degree formal disqualification নয়, কিন্তু program conversion bootcampও নয়। Admission policy economics/adjacent bachelor-level knowledge এবং analytical preparation expects।",
        actions: [
          "Undergraduate Microeconomics: consumer/producer theory, market structure, welfare এবং basic game theory review করুন।",
          "Macroeconomics: national accounts, growth, inflation/unemployment, monetary/fiscal policy এবং open-economy basics review করুন।",
          "Math/statistics: functions, calculus basics, probability, descriptive statistics, regression intuition এবং hypothesis testing cover করুন।",
          "Transcript থেকে economics, business, statistics, mathematics, data analysis, finance বা social-science courses evidence table-এ তুলুন।",
          "Software career থেকে economic outcome evidence খুঁজুন—cost/productivity, adoption, access, market behaviour, enterprise performance বা policy impact।",
          "Missing foundation-এর জন্য completed MOOC/textbook problem sets বা short analytical memo portfolio বানান; এগুলো official prerequisites replace করে না, readiness দেখায়।",
        ],
        readyWhen:
          "Micro/macro/statistics fundamentals explain করতে পারেন এবং software-to-economics transition-এর evidence-based narrative আছে।",
      },
      {
        title: "Required economics writing sample বানান",
        timing: "Guide প্রকাশের আগেই 6–10 সপ্তাহ",
        description:
          "Current Regular guide-এর hardest document হলো English economics-related bachelor thesis, term paper বা equivalent report এবং English abstract। Generic project README যথেষ্ট নয়।",
        actions: [
          "Existing undergraduate thesis economics-related হলে English version, authorship এবং individual contribution পরিষ্কার করুন।",
          "না থাকলে office-কে আগে জিজ্ঞেস করে equivalent term paper format confirm করুন; নিজের ধারণায় waiver ধরে নেবেন না।",
          "Possible bridge topic: digital tools and SME productivity, software adoption and supply chains, platform access and labour outcomes, fintech/financial inclusion বা ICT and development।",
          "Paper-এ research question, economics literature, conceptual framework, data, method, findings/expected analysis, limitations ও references রাখুন।",
          "Current reference অনুযায়ী separate 200–300-word abstract প্রস্তুত করুন।",
          "Plagiarism-free original work, data provenance এবং any AI assistance disclosure university rule অনুযায়ী রাখুন।",
        ],
        readyWhen:
          "A reviewer paperটিকে economics/development analysis হিসেবে চিনতে পারেন এবং abstract problem-method-result succinctভাবে বলে।",
      },
      {
        title: "Research proposal ও faculty preferences align করুন",
        timing: "Writing sample-এর পরে 3–5 সপ্তাহ",
        description:
          "Current application up to three preferred supervisors চায়, কিন্তু applicant pre-approval নেয় না এবং final adviser assignment guaranteed নয়।",
        actions: [
          "Ai Takeuchi-এর experimental economics, game theory, cooperation/social dilemmas এবং information/mechanism effects review করুন।",
          "Souksavanh Vixathep-এর enterprise development, entrepreneurship, innovation, trade এবং Bangladesh/Asian manufacturing research review করুন।",
          "Behavioural question হলে treatment, outcome, sample/experiment feasibility; development question হলে country/sector, data, identification এবং policy relevance নির্দিষ্ট করুন।",
          "Current reference অনুযায়ী approximately 800-word proposal-এ background, gap, question, method, data, expected contribution ও schedule দিন।",
          "প্রতি preferred faculty-এর জন্য approximately 200 words-এ তাঁদের specific research এবং আপনার topic-এর fit লিখুন; generic praise বাদ দিন।",
          "Program office-এর মাধ্যমে contact দরকার হলে gs-ec@st.ritsumei.ac.jp ব্যবহার করুন; direct email অনুমান করবেন না।",
        ],
        readyWhen:
          "Proposal economics method-এ grounded এবং primary/backup faculty-এর জন্য distinct, evidence-based fit আছে।",
      },
      {
        title: "English evidenceকে exact current rule-এ আনুন",
        timing: "2027 guide প্রকাশের সঙ্গে সঙ্গে",
        description:
          "IELTS 5.5 হলো verified 2026 threshold, 2027 guarantee নয়। MOI wordingও blanket exemption নয়।",
        actions: [
          "IELTS score date application start-এর দুই বছরের মধ্যে থাকবে কি না current rule দিয়ে check করুন।",
          "2027 threshold একই থাকলে IELTS 5.5 formal floor পূরণ করে; এটিকে admission guarantee বা competitive score বলবেন না।",
          "Score improve করার সময় থাকলে academic reading/writing ও speaking strengthen করুন, কারণ proposal/interview/coursework all English।",
          "Test submit করতে না পারলে university-issued formal letter-এ English ability evaluation চাইুন; শুধু ‘medium of instruction was English’ generic MOI automatic waiver নয়।",
          "Alternative evidence পাঠানোর আগে MPED office থেকে written acceptance নিন।",
          "GRE/GMAT অপ্রয়োজনীয় ধরে test নেবেন না, কিন্তু final 2027 document list recheck করুন।",
        ],
        readyWhen:
          "2027 guide-compliant, valid English proof আছে অথবা office-approved alternative evidence written confirmationসহ আছে।",
      },
      {
        title: "Application package ও possible interview প্রস্তুত করুন",
        timing: "Official 2027 application window",
        description:
          "Current workflow documents-heavy এবং postal/digital components আছে। Document screening primary; school চাইলে online interview নেয়।",
        actions: [
          "Approximately 400-word reason for application-এ career transition, MPED need এবং realistic post-degree goal লিখুন।",
          "Research proposal, faculty-fit reasons, economics writing sample এবং abstract-এর terminology/data claims consistent করুন।",
          "Original degree/graduation certificate, transcript, English proof, nationality/residence documents এবং conditional source-of-funds papers সংগ্রহ করুন।",
          "Optional recommendation দিলে generic character letter নয়—academic/analytical readiness এবং research potential evidence চাইুন।",
          "Current guide-এর hard-copy plus digital-file instructions proposal/writing sample/abstract-এর জন্য separately follow করুন; 2027 naming/delivery rule controls।",
          "Interview হলে undergraduate economics, paper authorship, proposal method, why MPED এবং career impact English-এ defend করুন।",
        ],
        readyWhen:
          "Official 2027 checklist-এর প্রতিটি original, postal, portal এবং digital item consistent ও deadline-safe।",
      },
      {
        title: "Self-funded, ADB এবং MEXT tracks সঠিকভাবে আলাদা করুন",
        timing: "Application decision-এর আগে",
        description:
          "Program scholarship history বর্তমান applicant eligibility নয়। Japan-resident profile-এর জন্য advertised flagship funding paths বর্তমানে বিশেষভাবে দুর্বল।",
        actions: [
          "Base two-year school-fee budget করুন: admission ¥200,000 + tuition ¥1,070,400 × 2 = ¥2,340,800; application, dues, insurance, housing ও living extra।",
          "Current tuition reduction 2026-এ ending এবং 2027 arrangement undecided—old MPED 100%/20% scholarship table ব্যবহার করবেন না।",
          "ADB-JSP-এর next call এলে Bangladesh nationality alone যথেষ্ট নয়: current rule home country-এর বাইরে living/working নিষেধ, 2+ years post-bachelor full-time work, age/academic/return conditionsও আছে। Japan resident হিসেবে current ADB route ineligible ধরুন।",
          "Ritsumeikan MEXT University Recommendation 2027 guide November–December 2026 expected; MPED previous 2026 listed graduate schools-এর মধ্যে ছিল না এবং Japan-resident exceptionও confirmed নয়। MPED explicitly listed না হলে apply করবেন না।",
          "Bangladesh 2027 Embassy MEXT application already closed, তাই সেটিকে current backup বলবেন না।",
          "No scholarship, later partial aid এবং external award—তিন cash-flow scenario লিখুন; award letter ছাড়া income count করবেন না।",
        ],
        readyWhen:
          "Admission decision কোনো ineligible/pending scholarship-এর ওপর নির্ভর করে না এবং full-cost fallback documented।",
      },
    ],
    checklist: [
      "Official September 2027 MPED guide",
      "September-only intake confirmation",
      "Recognized bachelor's/eligibility evidence",
      "Microeconomics foundation review",
      "Macroeconomics foundation review",
      "Math/statistics foundation review",
      "Approximately 400-word application reason",
      "Approximately 800-word research proposal",
      "Up to three preferred-faculty choices",
      "Faculty-fit reason for each choice",
      "English economics-related thesis/term paper/equivalent",
      "200–300-word English writing-sample abstract",
      "Original academic transcript",
      "Original degree/graduation certificate",
      "Valid IELTS/TOEFL/TOEIC evidence",
      "Written approval for alternative English evidence, if needed",
      "Passport and Japan residence documents",
      "Source-of-funds evidence, if required",
      "Optional evidence-rich recommendation",
      "Official translations where needed",
      "Postal and separate digital submission copies",
      "Possible online-interview practice",
      "No-aid two-year budget",
    ],
    afterSubmission: [
      "Ritsu-Mate, email এবং postal delivery monitor করুন; university online interview চাইলে assigned full-day window reserve করুন।",
      "Economics paper, proposal data/method এবং preferred-faculty fit notes থেকে mock questions চালিয়ে যান।",
      "Result ও enrollment instruction official portal থেকে follow করুন; 2026 date patternকে 2027 deadline বানাবেন না।",
      "2027 tuition-reduction বা external scholarship update এলে eligibility লিখিতভাবে verify করে আলাদা application করুন।",
      "Admission হলে September start, residence-status continuity, Biwako-Kusatsu housing এবং 24-month cost plan finalize করুন।",
    ],
    cautions: [
      "September 2027 self-financed guideline এখনো প্রকাশিত হয়নি; 2026 dates বা requirementsকে final বলবেন না।",
      "MPED April intake নেয় না।",
      "IELTS 5.5 verified current-cycle floor, 2027 guarantee নয় এবং admission competitivenessও প্রমাণ করে না।",
      "Generic MOI automatic waiver নয়; current rule limited alternative English-ability letter allows, এবং advance office confirmation নেওয়া নিরাপদ।",
      "No GRE/GMAT বা hard GPA cutoff মানে easy admission নয়।",
      "Non-economics degree allowed হতে পারে, কিন্তু economics-related English writing sample ও bachelor-level economics readiness material hurdles।",
      "Pre-application supervisor consent লাগে না এবং preferred faculty assignment guaranteed নয়।",
      "Program page-এর old scholarship figures 2027 planning-এ ব্যবহার করবেন না; existing international reduction scheme ends in 2026।",
      "ADB-JSP Bangladeshকে eligible country বলে, কিন্তু Japan-এ residing/working applicant current rule-এ ineligible।",
      "ADB scholarship call September 2026-এর জন্য closed; 2027 call এখনো live নয়।",
      "MEXT history MPED 2027 seat প্রমাণ করে না; forthcoming guide-এ Graduate School of Economics explicitly listed হতে হবে।",
      "Bangladesh Embassy MEXT 2027 application current date-এ already closed।",
      "Faculty page-এর topic match supervision availability বা funding vacancy নয়।",
      "AY2027 membership dues pending এবং full private-university cost national-university option-এর চেয়ে বেশি।",
    ],
    officialLinks: [
      {
        label: "MPED application information",
        href: "https://en.ritsumei.ac.jp/gsec/mped/admissions/application.html/?version=English",
        description: "September 2027 Regular, ADB এবং other scholarship-call publication monitor করুন; current dates expired।",
      },
      {
        label: "Current 2026 MPED application guide",
        href: "https://www.ritsumei.ac.jp/file.jsp?id=596974",
        description: "IELTS 5.5 reference, economics readiness, documents, writing sample এবং conditional interview planning source হিসেবে পড়ুন।",
      },
      {
        label: "MPED program structure",
        href: "https://en.ritsumei.ac.jp/gsec/mped/academics/program.html/?version=English",
        description: "English lectures/seminars/supervision, core economics subjects এবং thesis curriculum verify করুন।",
      },
      {
        label: "MPED About page",
        href: "https://en.ritsumei.ac.jp/gsec/mped/about/",
        description: "Program goals, economics/policy skills এবং previous Bangladesh student precedent দেখুন।",
      },
      {
        label: "MPED FAQ",
        href: "https://en.ritsumei.ac.jp/gsec/mped/contact/faq.html/?version=English",
        description: "Non-economics preparation, September-only intake, funding references ও office contact দেখুন।",
      },
      {
        label: "Current MPED faculty",
        href: "https://en.ritsumei.ac.jp/gsec/mped/academics/faculty.html/?version=English",
        description: "Current research themes এবং preferred-supervisor candidates recheck করুন।",
      },
      {
        label: "Ai Takeuchi profile",
        href: "https://research-db.ritsumei.ac.jp/rithp/k03/resid/S000995?lang=en",
        description: "Experimental economics, game theory, cooperation এবং current Professor status verify করুন।",
      },
      {
        label: "Souksavanh Vixathep profile",
        href: "https://research-db.ritsumei.ac.jp/rithp/k03/resid/S002625?lang=en",
        description: "Development, enterprise/innovation, trade এবং Bangladesh-related research fit দেখুন।",
      },
      {
        label: "AY2027 tuition and fees",
        href: "https://www.ritsumei.ac.jp/gr/exam/pdf/point/eng2027_gakuhi.pdf",
        description: "¥200,000 admission, ¥535,200/semester MPED tuition এবং pending 2027 dues verify করুন।",
      },
      {
        label: "International-student scholarship notice",
        href: "https://www.ritsumei.ac.jp/international/intl_students/scholarship/",
        description: "Current reduction ending in 2026 এবং 2027 onward undecided warning পড়ুন।",
      },
      {
        label: "Ritsumeikan ADB-JSP",
        href: "https://en.ritsumei.ac.jp/admissions/adb-jsp/",
        description: "Closed 2026 call, Bangladesh eligibility এবং outside-home-country exclusionসহ current conditions দেখুন।",
      },
      {
        label: "Ritsumeikan MEXT University Recommendation",
        href: "https://en.ritsumei.ac.jp/admissions/monbukagakusho-university-recommendation/",
        description: "November–December 2026 guide monitor করুন এবং MPED/Graduate School of Economics inclusion verify করুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "university-of-hyogo-global-business-masters-2027",
    country: "japan",
    university: "University of Hyogo",
    businessPriority: 12,
    englishBusinessPrograms: "Master of Global Business Administration",
    businessOfficialUrl: "https://www.u-hyogo.ac.jp/g3s/en/gba/",
    title: "University of Hyogo Global Business Administration: April 2027 Master's Guide",
    summary:
      "Kobe-তে সম্পূর্ণ English Master of Global Business Administration—Japan-resident international applicant-এর সঠিক screening route, 6–13 January timeline, English essay/oral exam, zero-scored MOI, research proposal, current supervisors, fees এবং April-2027 MEXT reality।",
    label: "April 2027 · Jan 6–13 · February guide pending",
    funding:
      "প্রথমে self-funded plan করুন: current tuition ¥535,800/year এবং enrollment ¥282,000। Competitive full/50% tuition relief ও external aid enrollment-এর পরে থাকতে পারে। বিশেষ DGB MEXT package 3 জন April-2027 entrant-এর জন্য হলেও current selection Sep–Oct 2026; January-round applicant-এর জন্য এটি available ধরে নেওয়া যাবে না।",
    duration: "2 years · April 2027 · Kobe Campus for Commerce",
    audience:
      "Japan-এ বসবাসকারী international applicant যিনি English-এ global business, international management, entrepreneurship অথবা AI/data-informed business research করতে চান এবং written essay, oral exam ও substantial proposal-এর জন্য প্রস্তুত",
    realityCheck:
      "এটি verified English-taught public-university target, কিন্তু ‘MOI দিলেই সহজ admission’ নয়। Official calendar-এ application 6–13 January 2027, exam 13 February এবং result 19 February নিশ্চিত; তবে 12 August 2026 পর্যন্ত February-2027 detailed International/Special guide ও forms প্রকাশিত হয়নি। Current August guide-এ MOI valid হলেও স্পষ্টভাবে zero admission points পায়; scored TOEFL/TOEIC/IELTS strategically stronger। Selection documents + English essay + English oral, আর annual quota 12 হলো সব admission route মিলিয়ে। তাই practical fit ★★★★☆ conditional—ভালো target/backup, guaranteed বা low-bar নয়।",
    highlights: [
      "সঠিক program: Graduate School of Social Sciences-এর Department of Global Business; degree Master of Global Business Administration।",
      "Official curriculum policy অনুযায়ী সব class English-এ; Research Methodology, Management, Marketing, Micro/Macroeconomics, Consulting Project এবং thesis seminars curriculum-এর অংশ।",
      "Consulting Project compulsory এবং fieldwork-based; এটি শুধু classroom-only MBA-style coursework নয়।",
      "Japan-resident Bangladeshi applicant যিনি enrollment-এ Student status obtain/renew করবেন, তাঁকে current rule অনুযায়ী Special Admission Screening for International Applicants নিতে হয়—General route নয়।",
      "Confirmed February calendar: application 6–13 January 2027, on-campus exam 13 February, result 19 February। Final guide প্রকাশ হলে document-arrival/postmark, enrollment deadline ও exact mechanics যোগ করতে হবে।",
      "Current International guide-এর selection: application-document review, English essay-type written exam এবং English oral examination। August reference-এ essay 70 minutes; oral Reason for Application ও Research Proposal-এর ওপর।",
      "Japan resident সাধারণত Kobe Campus for Commerce-এ in person পরীক্ষা দেন। Online arrangement শুধু Japan-এর বাইরে থাকা applicant-এর unavoidable circumstances-এর জন্য; resident applicant online ধরে নেবেন না।",
      "Current evidence হিসেবে TOEFL, TOEIC বা IELTS original score accepted; কোনো published numeric IELTS minimum/conversion table নেই। Final February guide-ই score type, validity date ও delivery rule-এর authority।",
      "Current guide-এ Singapore, Ireland, UK, US, Canada, Australia বা New Zealand-এর undergraduate/graduate degree completed বা expected হলে score-certificate exemption আছে। Bangladesh degree সেই automatic exemption নয়।",
      "Official test না থাকলে last university-এর English teacher-এর proficiency certificate current guide-এ alternative; generic MOI valid হলেও ‘will not be scored’। Teacher letter-এর points public guide নিশ্চিত করে না।",
      "GRE/GMAT এবং JLPT current eligibility/document list-এ নেই; external applicant-এর hard numerical GPA cutoffও প্রকাশিত নয়। Bachelor/equivalent eligibility ও full transcript evaluation অবশ্যই থাকে।",
      "Current writing reference: 600–700-word English Reason for Application এবং প্রায় 1,500-word English Research Proposal—research subject, problem, purpose, method, plan ও verifiable English referencesসহ।",
      "Current application reference-এ original/certified transcript ও degree proof, English evidence, photos/forms, financial-support proof, translation, return envelope এবং Japan resident-এর recent Certificate of Residence লাগে। Residence-card copy দিয়ে সব requirement পূরণ হবে ধরে নেবেন না।",
      "Applicant one specialization এবং one desired adviser বেছে নেন; current guide prior professor approval mandatory বলে না। Faculty-list presence supervisor availability guarantee নয়।",
      "Current supervisor Takahide Yamaguchi: Global Business/International Management, firm internationalization, overseas management ও flexible replication। Verified academic contact t-yama@em.u-hyogo.ac.jp; admissions questions office-এ পাঠানো ভালো।",
      "Current technology-aligned supervisor Mohamadou Bassirou Jean-Baptiste Sanfo: Applied Econometrics, AI in Education, Data Science ও Machine Learning। Software background থেকে data-driven business/education topic তৈরিতে এটি credible bridge।",
      "Kenji Nagasato university faculty হলেও current DGB Seminar I/II supervisor list-এ নেই; written confirmation ছাড়া তাঁকে April-2027 prospective supervisor হিসেবে ব্যবহার করা উচিত নয়।",
      "Current standard charges: application ¥30,000, enrollment ¥282,000, tuition ¥267,900/semester বা ¥535,800/year; association/other charges extra এবং revision possible।",
    ],
    fit: [
      "Recognized bachelor's/equivalent qualification আছে এবং official transcript/degree certificate সংগ্রহ করতে পারবেন।",
      "Entire degree English-এ চান, কিন্তু business/economics foundation, research methods ও fieldwork গ্রহণযোগ্য।",
      "IELTS 5.5 থাকলেও score validity ও final February rule recheck করবেন; MOI-কে scored test-এর সমান ধরে নেবেন না।",
      "600–700-word motivation এবং 1,500-word evidence-based research proposal English-এ লিখতে পারবেন।",
      "Timed English business essay এবং proposal-based oral interview-এর জন্য নিয়মিত practice করতে পারবেন।",
      "Software/IT experience-কে digital internationalization, AI adoption, data-driven SME expansion, future of work বা cross-cultural technology management-এর একটি focused question-এ রূপ দিতে পারবেন।",
      "MEXT না পেলেও tuition, Kobe living cost, enrollment charge ও financial-proof requirement cover করার fallback আছে।",
    ],
    quickStart: [
      "Official admissions page bookmark করে February International guide/forms প্রকাশের weekly check দিন; calendar confirmed হলেও August guide দিয়ে final submission করবেন না।",
      "IELTS/TOEFL/TOEIC scored report valid রাখুন। MOI ও English-teacher letter backup হিসেবে সংগ্রহ করতে পারেন, কিন্তু MOI zero-scored হওয়ায় official test বাদ দেবেন না।",
      "দুটি one-page concept তৈরি করুন: Yamaguchi-এর জন্য digital firm internationalization এবং Sanfo-এর জন্য AI/data-driven business decision; তারপর evidence ও feasible method দিয়ে একটি বাছুন।",
      "Degree/transcript, recent juminhyo, financial sponsor/bank evidence, English translation (final guide certification rule থাকলে সেই অনুযায়ী) এবং application photos-এর tracker এখনই তৈরি করুন। Passport identity backup হিসেবে রাখুন, current Japan-resident reference requirement হিসেবে নয়।",
    ],
    steps: [
      {
        title: "February-2027 guide এবং সঠিক route lock করুন",
        timing: "Now · guide প্রকাশ না হওয়া পর্যন্ত weekly",
        description:
          "Calendar live হলেও AGI2-4&9 guide/forms এখনও unavailable। Japan resident foreign applicant-এর International/Special route এবং final submission mechanics একসঙ্গে verify করতে হবে।",
        actions: [
          "Admissions page-এর February row-তে International guide, form ও examination-card links live হয়েছে কি না দেখুন।",
          "Guide বের হলে eligibility, Japan-resident exam venue, application arrival/postmark rule, English-score date এবং enrollment deadline একটি table-এ তুলুন।",
          "Current residence/status unusual হলে Academic Affairs-এ gakumu_shouka@ofc.u-hyogo.ac.jp-এ nationality, residence status ও April target লিখে route confirm করুন।",
          "January 6-এর আগেই complete postal packet ready রাখুন; web-only application ধরে বসে থাকবেন না।",
        ],
        readyWhen:
          "Final February PDF, correct International route, exact deadline mechanics এবং required forms এক checklist-এ linked আছে।",
      },
      {
        title: "English evidence শক্ত করুন",
        timing: "August–October 2026",
        description:
          "Current rule কোনো fixed IELTS floor দেয় না, কিন্তু language evidence selection-এর অংশ। Zero-scored MOI formal validity ও competitive strength এক জিনিস নয়।",
        actions: [
          "Existing IELTS score report-এর test date, module, original delivery format ও passport-name match check করুন।",
          "Final guide-এর validity window-এর বাইরে হলে accepted IELTS/TOEFL/TOEIC পুনরায় book করুন।",
          "University MOI এবং English teacher-এর specific proficiency certificate backup হিসেবে নিন; teacher letter-কে points-guaranteed বলবেন না।",
          "70-minute English analytical essay সপ্তাহে অন্তত দুইটি লিখে argument, examples, structure এবং editing time measure করুন।",
        ],
        readyWhen:
          "Final rule মেনে scored official result আছে এবং backup evidence আলাদা labeled file-এ প্রস্তুত।",
      },
      {
        title: "Research question ও current adviser fit তৈরি করুন",
        timing: "August–September 2026",
        description:
          "Global business label যথেষ্ট নয়। এক researchable problem, relevant literature, data access এবং current seminar supervisor-এর method fit দেখাতে হবে।",
        actions: [
          "Yamaguchi fit হলে Bangladesh/Japan SME internationalization, digital platform expansion বা overseas knowledge replication-এর একটি narrow question নিন।",
          "Sanfo fit হলে AI adoption, education/business productivity, digital inequality বা decision analytics-এর measurable question নিন।",
          "Current faculty/seminar list থেকে only one desired adviser বাছুন; absent/old profile দেখে নাম ব্যবহার করবেন না।",
          "Professor-কে লিখলে 120–160-word concise email, CV এবং one-page concept পাঠান; admissions eligibility office-এর কাছে রাখুন।",
        ],
        readyWhen:
          "Question, literature gap, data, method, expected contribution এবং current adviser fit এক পাতায় পরিষ্কার।",
      },
      {
        title: "Reason ও 1,500-word proposal লিখুন",
        timing: "September–November 2026",
        description:
          "দুটি document একই গল্প repeat করবে না: Reason আপনার trajectory/career explains; Proposal নির্দিষ্ট research design explains।",
        actions: [
          "Reason-এ why GBA, relevant work/education, intercultural evidence, career outcome এবং social contribution রাখুন।",
          "Proposal-এ title, context, research question, short literature review, method/data, ethics/limitations, schedule ও expected value দিন।",
          "English references real এবং retrievable রাখুন; invented citation বা vague web source ব্যবহার করবেন না।",
          "Word limit, font/page rule ও prescribed form final guide বের হলে line-by-line মিলিয়ে revise করুন।",
        ],
        readyWhen:
          "দুটি document word limit-এর মধ্যে, fact-checked, supervisor-aligned এবং independent reviewer পড়ে বুঝতে পারেন।",
      },
      {
        title: "Exam ও funding fallback প্রস্তুত করুন",
        timing: "November 2026–February 2027",
        description:
          "Admission essay/oral এবং scholarship selection আলাদা। January applicant special MEXT পাবেন ধরে budget করলে বড় funding gap তৈরি হবে।",
        actions: [
          "Past examination materials দিয়ে timed English essays লিখুন এবং business/economics current issues-এর evidence bank বানান।",
          "60-second introduction, 3-minute proposal, method defense, limitation, career plan ও why-this-program উত্তর record করুন।",
          "Enrollment ¥282,000, year-one tuition ¥535,800, association charges ও Kobe living-এর self-funded budget বানান।",
          "February guide explicit eligibility না দিলে April-2027 DGB MEXT budget-এ zero ধরুন; post-enrollment waiver/external aidকে bonus ধরুন।",
        ],
        readyWhen:
          "Mock essay/interview reproducibly strong এবং scholarship ছাড়া enrollment করার written funding plan আছে।",
      },
    ],
    checklist: [
      "February-2027 International/Special guide ও all prescribed forms",
      "Passport identity backup ও final-guide-required immigration records",
      "Japan resident-এর final-guide-compliant recent Certificate of Residence",
      "Bachelor transcript original/certified copy",
      "Graduation/degree certificate original/certified copy",
      "যদি applicable হয় graduate transcript/degree evidence",
      "600–700-word English Reason for Application",
      "Approximately 1,500-word English Research Proposal with references",
      "Final-rule-compliant TOEFL/TOEIC/IELTS official result",
      "MOI/English-teacher certificate শুধু permitted backup হিসেবে",
      "One specialization এবং one current desired adviser",
      "Application, exam-card, photo ও payment forms",
      "Required photos এবং return envelope/postage",
      "Bank balance, sponsor relationship ও financial-support originals/certifications",
      "Non-English/Japanese documents-এর English translation",
      "¥30,000 application payment in the prescribed method",
    ],
    afterSubmission: [
      "Delivery tracking এবং full submitted packet-এর PDF copy সংরক্ষণ করুন।",
      "Exam card/receipt না এলে final guide-এর inquiry date অনুযায়ী office-এ যোগাযোগ করুন।",
      "Kobe venue, travel, permitted stationery এবং reporting time লিখে রাখুন।",
      "Essay ও oral-এর জন্য proposal claims, references এবং potential counterarguments revise করুন।",
      "Result-এর পরে enrollment payment এবং immigration timeline দ্রুত follow করুন।",
      "Post-enrollment waiver/external scholarship notices recheck করুন; February guide নতুন MEXT selection explicitly না দিলে January route-এর জন্য April-2027 DGB MEXT closed/unavailable ধরে রাখুন।",
    ],
    cautions: [
      "February-2027 detailed guide pending; August guide planning reference, final authority নয়।",
      "MOI accepted মানে English test score waiver with equal points নয়—current guide MOI-কে zero score দেয়।",
      "Bangladesh English-medium degree automatic seven-country exemption-এর মধ্যে পড়ে না।",
      "January route-এর applicant special April-2027 MEXT timeline ধরতে পারবেন—এমন official evidence নেই।",
      "12 seats হলো সব route মিলিয়ে annual department quota; January international seats নয়।",
      "English-taught হলেও admission-এ written essay ও oral দুটিই আছে।",
      "Japan resident online exam ধরে নেবেন না; normal venue Kobe।",
      "Kenji Nagasato current DGB Seminar I/II list-এ নেই।",
      "Desired adviser selection supervision acceptance বা scholarship নিশ্চিত করে না।",
      "Tuition relief ও private/JASSO-type awards competitive, normally post-enrollment এবং budget-dependent।",
    ],
    officialLinks: [
      {
        label: "DGB admissions calendar and forms",
        href: "https://www.u-hyogo.ac.jp/g3s/gba/admissions/index.html",
        description: "Confirmed January/February dates এবং pending AGI2-4&9 guide/forms monitor করুন।",
      },
      {
        label: "Current April-2027 International guide",
        href: "https://www.u-hyogo.ac.jp/g3s/pdf/gba/admissions/2027/GBA_Intl2608_2704AppGuide_en.pdf",
        description: "Route, current essay/oral, English evidence, MOI scoring, proposal এবং documents planning reference হিসেবে পড়ুন।",
      },
      {
        label: "DGB curriculum and current seminar supervisors",
        href: "https://www.u-hyogo.ac.jp/g3s/gba/education/index.html",
        description: "All-English curriculum, compulsory Consulting Project এবং current Seminar I/II adviser list verify করুন।",
      },
      {
        label: "Current DGB faculty",
        href: "https://www.u-hyogo.ac.jp/g3s/gba/faculty/index.html",
        description: "Current courses ও faculty status recheck করুন; historical profile দিয়ে adviser infer করবেন না।",
      },
      {
        label: "Takahide Yamaguchi profile",
        href: "https://www.u-hyogo.ac.jp/g3s/gba/researchfield/yamaguchi_takahide/index.html",
        description: "International Management, company internationalization এবং flexible-replication fit দেখুন।",
      },
      {
        label: "Takahide Yamaguchi official syllabus",
        href: "https://syllabus.u-hyogo.ac.jp/slResult/2026/english/syllabusHtml/SyllabusHtml.2026.1.2B2.2026.187690.html",
        description: "Current University syllabus থেকে course role এবং verified academic contact t-yama@em.u-hyogo.ac.jp দেখুন।",
      },
      {
        label: "DGB campus life, aid and MEXT",
        href: "https://www.u-hyogo.ac.jp/g3s/gba/studentlife/index.html",
        description: "Fees, competitive waiver, scholarships ও special April-2027 MEXT benefits/timing context দেখুন।",
      },
      {
        label: "University tuition exemption notice",
        href: "https://www.u-hyogo.ac.jp/campuslife/r-system/f-exemption/index.html",
        description: "Current university-run relief process দেখুন; international instructions campus office থেকে নিতে হয়।",
      },
      {
        label: "International-student financial support",
        href: "https://www.u-hyogo.ac.jp/english/life/info-students/e-assistanceprogram/index.html",
        description: "Competitive external scholarship ও economic-support notices কীভাবে আসে তা দেখুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "hokkaido-global-food-resources-masters-2027",
    country: "japan",
    university: "Hokkaido University",
    title: "Hokkaido University Global Food Resources: April 2027 Planning Guide",
    summary:
      "Japan-resident applicant-এর remaining General Admissions route—fully English interdisciplinary curriculum, IELTS 5.5 desirable target, mandatory adviser contact, food-resources written exam/oral, compulsory fieldwork, faculty fit, national-university fees এবং waiver reality।",
    label: "April 2027 watchlist · late-October guide pending",
    funding:
      "Self-funded national-university baseline: current exam ¥30,000, admission ¥282,000 এবং tuition ¥535,800/year। Eligible self-supported regular students full/partial admission or tuition waiver-এর জন্য apply করতে পারেন, কিন্তু need, academics ও budget-based selection; MEXT/JASSO/private aid automatic নয়।",
    duration: "2 years · April entry only · Master of Food Resources",
    audience:
      "Japan-resident applicant যিনি software/data, economics, governance, agriculture অথবা sustainability background-কে a concrete global food-resource problem-এর সঙ্গে integrate করতে চান এবং adviser consultation, English presentation, written interdisciplinary exam ও fieldwork গ্রহণ করতে প্রস্তুত",
    realityCheck:
      "এটি এখন apply-now route নয়। Application period থেকে examination period শেষ হওয়া পর্যন্ত valid Japanese medium/long-term residence status বা residence card থাকলে overseas-only ‘Admissions for International Students’ route-এ eligible নন; এই profile-এ General Admissions ব্যবহার করতে হবে। Remaining second-term guide/dates late October 2026-এ প্রকাশের কথা, এবং General Admissions-এর 15-person maximum আগে পূর্ণ হলে second term নাও হতে পারে। IELTS 5.5 official page-এ desirable effort target—hard minimum নয়। Selection documents-only নয়: English score, food-resource-problem written exam, in-person presentation/oral এবং transcript evaluate হয়। Program সত্যিই English-taught, কিন্তু pure MBA/CSE নয় এবং compulsory interdisciplinary fieldwork আছে। তাই current profile-এ practical fit ★★★☆☆ conditional backup।",
    highlights: [
      "Graduate School of Global Food Resources-এর Master's Course April entry only; standard duration two years এবং degree Master of Food Resources।",
      "Completion-এর জন্য at least 32 credits লাগে: at least 22 compulsory এবং 4 compulsory-elective credits, তারপর thesis অথবা specific research project ও final examination।",
      "Official school overview সব lectures English-এ এবং master's thesis/examination English-এ handled বলে। Current admission guide lectures, tutorials ও seminars English বলে; final guide/adviser দিয়ে exact thesis workflow আবার confirm করুন।",
      "Curriculum Production, Environment এবং Governance integrate করে; Analytical Economics, Economic Policy, Agricultural Resource Economics, Comparative Rural Sociology, environmental management ও sustainability topics আছে।",
      "Wandervogel Study I/II compulsory fieldwork। Official examples Japan/overseas real-world food-resource study দেখায়; destination, cost, health, visa ও safety arrangements yearly বদলাতে পারে।",
      "Japan-resident foreign applicant General Admissions route নেন। Overseas International selection শুধুই Japan-এর বাইরে residence এবং Japan-এ exam দিতে অসুবিধা থাকা applicants-এর জন্য।",
      "2027 General first term 10 July 2026-এ বন্ধ। Remaining possible General second-term dates/forms 12 August পর্যন্ত blank; official page late October publication বলে।",
      "2027 General Admissions-এর 15-person intake GA2-সহ; current GA1 guide সতর্ক করে যে maximum আগে পূর্ণ হলে General second term নাও হতে পারে। তাই এটিকে guaranteed January/February round বলা যাবে না।",
      "Application-এর আগে preferred academic adviser-এর সঙ্গে contact করা required। এটি consultation—consent, eventual assignment, funding বা admission guarantee নয়।",
      "Official page IELTS 5.5+, TOEFL iBT 72+/new band 4.0+, TOEIC L&R 700+ ‘desirable as an effort target’ বলে; cutoff হিসেবে নয়। Final GA2 guide exact accepted tests ও score rules নির্ধারণ করবে।",
      "Current General reference IELTS Academic, TOEFL iBT এবং TOEIC L&R গ্রহণ করে; IELTS General, TOEFL ITP, TOEIC IP/S&W/Bridge ও simple web-result printout গ্রহণ করে না। MOI waiver current General route-এ পাওয়া যায়নি।",
      "Current score reference-এ tests on/after 1 August 2024 লাগে; GA2 final guide বের হলে validity date পুনরায় check করতে হবে।",
      "GRE/GMAT এবং JLPT current General admissions overview/document requirements-এ নেই; hard numerical GPA cutoffও প্রকাশিত নয়। Transcript holistic assessment-এর অংশ।",
      "Current General selection reference: external English score + written exam on diverse/multi-layered global food-resource problems + in-person oral examination + academic record। Written answer Japanese অথবা English; oral presentation/Q&A English।",
      "Current oral reference: 15-minute study/research/career-plan presentation এবং approximately 10-minute Q&A। Final GA2 timing and format must be rechecked।",
      "Current faculty Takako Nabeshima: Political Science of Rural Community, developing-country farmers, water policy, agro-sanitation business models ও African studies; verified contact nabetaka@imc.hokudai.ac.jp।",
      "Current faculty Yoko Saito: Agricultural Economics, agricultural R&D, consumer demand, technology/innovation economics এবং developing-country livestock-insurance topics; verified contact saitoy@agr.hokudai.ac.jp। Business/economics transition-এর জন্য এটি direct fit হতে পারে।",
      "Current faculty Tomomichi Kato: Plant Ecology ও Agricultural Meteorology; climate, satellite/vegetation data, carbon/water cycles ও food-production risk। Data/IT + climate route-এ relevant, generic software supervision নয়।",
      "Current standard graduate charges ¥30,000 exam, ¥282,000 admission, ¥267,900/semester বা ¥535,800/year; university fee revision হলে new amount applies।",
    ],
    fit: [
      "April 2027 entry চান এবং late-October announcement পর্যন্ত conditional backup active রাখতে পারবেন।",
      "Recognized bachelor's/equivalent qualification, complete transcript ও degree certificate আছে।",
      "IELTS Academic 5.5 বা stronger accepted official score আছে/নিতে পারবেন; target পূরণ admission guarantee নয়।",
      "Research question food resources-এর production, environment বা governance problem-কে কেন্দ্র করে—শুধু generic app/AI/business topic নয়।",
      "Preferred adviser-এর publications বুঝে early consultation করতে এবং English presentation defend করতে পারবেন।",
      "Interdisciplinary science/economics foundation build, written essay এবং compulsory fieldwork করতে প্রস্তুত।",
      "Waiver না পেলেও tuition, Sapporo living, enrollment, fieldwork/travel-related cost ও financial proof cover করার fallback আছে।",
    ],
    quickStart: [
      "Official Master's admissions page late October পর্যন্ত weekly monitor করুন; GA2 guide প্রকাশ বা ‘not held’ status—দুটির যেকোনোটি সঙ্গে সঙ্গে calendar-এ নিন।",
      "Nabeshima, Saito ও Kato profile থেকে 2–3 recent themes পড়ে নিজের background-এর সঙ্গে best one adviser বাছুন এবং concise consultation email পাঠান।",
      "IELTS Academic/TOEFL iBT/TOEIC L&R official result valid রাখুন; MOI দিয়ে General route waive হবে ধরে test বাদ দেবেন না।",
      "Global food-resource problem notebook বানিয়ে food security, value chain, climate risk, rural governance, technology adoption ও Bangladesh/Japan cases-এর evidence collect করুন।",
    ],
    steps: [
      {
        title: "Remaining route সত্যিই হবে কি না verify করুন",
        timing: "Now · late October 2026 পর্যন্ত weekly",
        description:
          "Japan resident-এর usable path General Admissions 2nd term। Official page dates blank রাখে, এবং total quota filled হলে round cancel হতে পারে।",
        actions: [
          "Master's admissions page bookmark করে GA2 publication status ও PDF/form links check করুন।",
          "Previous-cycle December/February dates শুধু workload planning-এ ব্যবহার করুন; 2027 deadline হিসেবে calendar lock করবেন না।",
          "Late October guide এলে preliminary review কার জন্য, application dates, exam venue/date, postal rules এবং result date সরাসরি PDF থেকে নিন।",
          "Round না হলে এই guide-কে closed/next-cycle watchlist করুন এবং অন্য active applications delay করবেন না।",
        ],
        readyWhen:
          "Official GA2 guide live, round confirmed এবং every date/source একটি route sheet-এ লেখা।",
      },
      {
        title: "Preferred adviser-এর সঙ্গে required consultation করুন",
        timing: "August–October 2026",
        description:
          "School application-এর আগে contact required বলে। Useful contact মানে generic ‘please accept me’ নয়; a food-resource question এবং method fit দেখানো।",
        actions: [
          "Governance/business route হলে Nabeshima বা Saito; climate-data route হলে Kato-এর official profile ও recent work পড়ুন।",
          "120–170-word email-এ degree/background, Japan residence, April-2027 GA2 intent, one research question এবং কেন তাঁর fit লিখুন।",
          "CV, transcript summary এবং one-page concept attach করুন; large certificates বা generic bulk email পাঠাবেন না।",
          "Reply, consultation notes ও any requested revision সংরক্ষণ করুন; preferred adviser actual supervisor guaranteed নয়।",
        ],
        readyWhen:
          "Official adviser contact complete এবং concept program scope-এর মধ্যে—reply positive না হলেও follow-up/alternative plan documented।",
      },
      {
        title: "English score ও eligibility file প্রস্তুত করুন",
        timing: "August–November 2026",
        description:
          "5.5 একটি desirable target; final GA2 guide score type, validity এবং submission form control করবে। Current General route MOI alternative দেয় না।",
        actions: [
          "IELTS হলে Academic module এবং official Test Report Form-এর copy ব্যবস্থা করুন; simple portal screenshot ব্যবহার করবেন না এবং GA2 final guide-এর delivery rule follow করুন।",
          "Current reference date 1 August 2024-এর সঙ্গে result compare করুন, কিন্তু GA2 guide-এর নতুন date দিয়ে final validation করুন।",
          "Passport-name, test-name, date of birth এবং degree records-এর spelling মিলিয়ে রাখুন।",
          "Transcript, degree certificate, passport, residence card এবং prescribed personal-history/reason forms-এর certified/translated versions প্রয়োজনমতো প্রস্তুত করুন।",
        ],
        readyWhen:
          "Final GA2 rule অনুযায়ী accepted, valid official score এবং every identity/academic document ready।",
      },
      {
        title: "Food-resource written exam প্রস্তুত করুন",
        timing: "October 2026–exam day",
        description:
          "Written test generic English essay নয়; diverse and multi-layered food-resource problems analyze করার ক্ষমতা দেখে। Economics, environment, production ও governance connect করতে হবে।",
        actions: [
          "Official past questions সংগ্রহ করে timed answers Japanese অথবা English-এ লিখুন; strongest language বাছুন।",
          "প্রতি topic-এ problem, actors, data/evidence, trade-offs, proposed intervention এবং implementation risk কাঠামো ব্যবহার করুন।",
          "Bangladesh food supply chains, climate adaptation, digital traceability, smallholder finance, price shocks ও policy cases-এর fact sheet বানান।",
          "Science terms বুঝতে Fundamental Sciences এবং economics foundation review করুন; buzzword-only AI answer এড়িয়ে চলুন।",
        ],
        readyWhen:
          "Time limit-এ a balanced interdisciplinary answer লিখতে এবং evidence/method defend করতে পারেন।",
      },
      {
        title: "Presentation, fieldwork ও finances plan করুন",
        timing: "Guide release থেকে enrollment",
        description:
          "Oral exam research readiness ও career coherence দেখে; admission-এর পরে English curriculum ও mandatory Wandervogel fieldwork বাস্তব commitment।",
        actions: [
          "15-minute English presentationে background, problem, research objective, method, feasibility, program/adviser fit এবং career impact রাখুন।",
          "10-minute Q&A-তে data access, ethics, limitations, why interdisciplinary এবং why not pure CS/MBA উত্তর practice করুন।",
          "¥282,000 enrollment, ¥535,800 annual tuition, Sapporo living এবং potential fieldwork-related travel/insurance costসহ budget বানান।",
          "Fee waiver application timing official university page-এ monitor করুন; award না পাওয়া পর্যন্ত full payment capacity ধরে plan করুন।",
        ],
        readyWhen:
          "Presentation concise, mock Q&A defensible এবং full-cost/fieldwork fallback budget documented।",
      },
    ],
    checklist: [
      "Official 2027 General Admissions second-term guide and application form",
      "Preferred-adviser consultation record",
      "Application/admission/photo cards and prescribed reason statement",
      "¥30,000 examination fee proof",
      "Bachelor transcript",
      "Graduation/degree certificate",
      "Accepted official IELTS Academic, TOEFL iBT or TOEIC L&R result",
      "Passport copy",
      "Japan-resident applicant personal-history and residence-card evidence",
      "Certified Japanese/English translations where required",
      "Reply envelope/contact sticker/postage under final guide",
      "Written-exam topic bank and timed past-paper practice",
      "15-minute English presentation deck/script",
      "Research/study/career plan aligned with food-resource scope",
      "Admission, tuition, living and fieldwork fallback budget",
      "Fee-waiver and scholarship tracker kept separate from admission",
    ],
    afterSubmission: [
      "Postal/portal delivery proof এবং submitted packet-এর full copy সংরক্ষণ করুন।",
      "Exam admission card ও venue instructions final guide-এর expected date-এ না এলে office-এ যোগাযোগ করুন।",
      "Adviser-কে concise update দিন যদি consultation-এর পরে material research change হয়।",
      "Written essay এবং presentation/Q&A parallel practice চালিয়ে যান।",
      "Admission হলে enrollment payment, residence-status procedure, Sapporo housing ও fieldwork orientation দ্রুত শুরু করুন।",
      "University waiver/JASSO/private aid announcements আলাদা করে apply করুন; none is automatic।",
    ],
    cautions: [
      "Application থেকে exam শেষ হওয়া পর্যন্ত valid Japanese medium/long-term residence status বা residence card থাকলে overseas International route-এর eligible নন; General Admissions ব্যবহার করতে হবে।",
      "General second term এখনও confirmed-held নয়; General Admissions-এর 15-person maximum আগে পূর্ণ হলে নাও হতে পারে।",
      "IELTS 5.5 official desirable target, published hard minimum নয় এবং acceptance guarantee নয়।",
      "MOI waiver Japan-resident General route-এ verified নয়।",
      "Selection documents/interview-only নয়—external English score, written exam এবং oral আছে।",
      "All-English curriculum verified হলেও final GA2 thesis/assessment mechanics adviser/guide দিয়ে পুনরায় confirm করুন।",
      "This is Master of Food Resources—not MBA, Economics বা Computer Science degree।",
      "Research must center a real food-resource issue; generic software project যথেষ্ট নয়।",
      "Adviser contact required হলেও supervision, funding বা admission নিশ্চিত করে না।",
      "Compulsory fieldwork may create travel, health, scheduling and additional-cost considerations।",
      "Fee waiver and scholarships selective, budget-dependent and not an upfront full-funding promise।",
    ],
    officialLinks: [
      {
        label: "GFR Master's admissions",
        href: "https://www.gfr.hokudai.ac.jp/prospective-students/admission-information/graduate-admissions/masters-course/",
        description: "Japan-resident route, late-October GA2 notice, adviser-contact rule এবং desirable English targets monitor করুন।",
      },
      {
        label: "GFR admission policy",
        href: "https://www.gfr.hokudai.ac.jp/prospective-students/admission-information/admission-policy/",
        description: "Written food-resource problem, English score, oral examination এবং holistic assessment বুঝুন।",
      },
      {
        label: "GFR Master's curriculum",
        href: "https://www.gfr.hokudai.ac.jp/prospective-students/curriculum/masters-course/",
        description: "32-credit structure, Production/Environment/Governance, fieldwork এবং thesis/project completion দেখুন।",
      },
      {
        label: "English delivery and fieldwork",
        href: "https://www.gfr.hokudai.ac.jp/about/educational-characteristics/",
        description: "All-English lectures/thesis statement এবং compulsory Wandervogel fieldwork context পড়ুন।",
      },
      {
        label: "Current GFR faculty",
        href: "https://www.gfr.hokudai.ac.jp/prospective-students/faculty-staff/",
        description: "Production, Environment ও Governance current adviser list থেকে match বাছুন।",
      },
      {
        label: "Takako Nabeshima profile",
        href: "https://www.gfr.hokudai.ac.jp/prospective-students/staff/governance/takako%E3%80%80nabeshima/",
        description: "Rural political science, developing-country farmers ও agro-sanitation fit verify করুন।",
      },
      {
        label: "Yoko Saito profile",
        href: "https://www.gfr.hokudai.ac.jp/prospective-students/staff/governance/yoko-saito/",
        description: "Agricultural economics, innovation, consumer demand ও development fit দেখুন।",
      },
      {
        label: "Tomomichi Kato profile",
        href: "https://www.gfr.hokudai.ac.jp/prospective-students/staff/environment/tomomichi-kato/",
        description: "Plant ecology, agricultural meteorology, satellite/climate data এবং food-production risk fit দেখুন।",
      },
      {
        label: "Hokkaido University student fees",
        href: "https://www.global.hokudai.ac.jp/admissions/student-fees/",
        description: "Current graduate fees, payment timing ও waiver publication schedule verify করুন।",
      },
      {
        label: "Official fee-waiver information",
        href: "https://www.hokudai.ac.jp/gakusei/campus-life/certificates/tuition.html",
        description: "Current admission/tuition relief categories, semester process ও updated notices দেখুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "university-of-tsukuba-mba-international-business-2027",
    country: "japan",
    university: "University of Tsukuba",
    title: "University of Tsukuba MBA-IB: April 2027 Application Guide",
    summary:
      "Tokyo Campus-এর সম্পূর্ণ English professional MBA—IELTS/TOEFL/TOEIC-এর published minimum নেই, GMAT লাগে না, Japanese লাগে না, কিন্তু এক বছরের qualifying work experience, তিনটি focused essay, professional recommendation, English score/MOI evidence এবং in-person interview দিয়ে competitive holistic selection হয়।",
    label: "April 2027 · opens Aug 25 · high-priority profile fit",
    funding:
      "মূলত self-funded। Examination fee দুই ধাপে ¥7,000 + ¥23,000; admission ¥282,000। AY2027 detailed guide অনুযায়ী Student residence status-এ tuition ¥608,800/year, অন্য status/category-তে ¥535,800/year—তাই দুই বছরের core school cost যথাক্রমে ¥1,499,600 বা ¥1,353,600, examination fee বাদে। Full/half tuition waiver, admission-fee exemption ও post-enrollment scholarship competitive; নতুন applicant-এর standard MEXT route নেই।",
    duration: "2 years · April 2027 · Tokyo Campus · Master of International Business Administration",
    audience:
      "Bachelor’s degree এবং March 2027-এর মধ্যে অন্তত এক বছরের genuine professional experience থাকা Japan-resident applicant, যিনি software/IT experience-কে information systems, digital business, operations, strategy বা management-এর সঙ্গে যুক্ত করে English MBA করতে চান",
    realityCheck:
      "এই profile-এর language, work-experience ও IT-to-business transition-এর সঙ্গে fit খুব শক্তিশালী—★★★★★ profile fit বলা যায়, admission probability নয়। Capacity 30 এবং প্রথম screening থেকে সাধারণত প্রায় দুই গুণ capacity interview-এ যায়। IELTS 5.5 automatic rejection নয়, কারণ published cutoff নেই; কিন্তু English first screening-এ 20 points, তাই strong documents দরকার এবং shortlist হওয়ার আগে interview দিয়ে ঘাটতি পূরণের সুযোগ নেই। Bangladesh-এর English-medium degree-এর official letter score waiver-এর জন্য বিবেচিত হতে পারে, কিন্তু waiver discretionary। Application-এর আগে কোনো professor-কে contact করা কঠোরভাবে নিষিদ্ধ।",
    highlights: [
      "Programটি University of Tsukuba-এর MBA in International Business—আগের AISIP/CSE route থেকে সম্পূর্ণ আলাদা professional degree এবং funding model।",
      "Graduate School of Business Sciences, Humanities and Social Sciences-এর দুই বছরের professional degree: Master of International Business Administration; Tokyo Campus-এ সব instruction English-এ।",
      "Admission capacity 30। এটি working-professional friendly evening/Saturday format, কিন্তু online MBA নয় এবং workload হালকা নয়।",
      "Classes weekday evenings 18:20–21:00 এবং Saturdays 08:55–21:00-এর মধ্যে হতে পারে; FAQ অনুযায়ী first-year students প্রায়ই সপ্তাহে 3–4 দিন attend করেন।",
      "Completion-এর জন্য at least 45 credits: lecture courses, seminar এবং compulsory 8-credit Business Project। Available project types-এর Independent Research Report (IRR) explicitly master’s-thesis equivalent।",
      "Recognized Bachelor’s/equivalent যেকোনো subject-এ হতে পারে; আলাদা business Bachelor বাধ্যতামূলক নয়।",
      "March 2027-এর মধ্যে অন্তত এক বছরের work experience mandatory। Full-time বা part-time, যেকোনো industry-এর কাজ count করতে পারে; full-time student থাকা অবস্থার job count করে না।",
      "Standard Bachelor holder-এর জন্য application 25 August 2026 10:00 JST–11 September 2026 15:00 JST। 3–7 August eligibility screening শুধু nonstandard qualification-এর জন্য ছিল।",
      "Web entry যথেষ্ট নয়। Supporting originals/required packet 11 September-এর মধ্যে পৌঁছাতে হবে; in-person submission হলে 17:00 deadline।",
      "First-screen result 16 October 15:00; Japan-resident applicant-এর English individual interview 8 November Tokyo Campus-এ in person; final result 4 December 15:00।",
      "First screening 150 points: application documents 130 + English ability 20। Second-stage English interview 50 points যোগ হয়ে total 200 points হয়।",
      "Traditional written Math/Business/GMAT exam নেই। Interview academic readiness, professional experience, motivation, communication ও future vision দেখে।",
      "Official FAQ TOEIC L&R, TOEFL iBT/Home Edition এবং IELTS Academic-এর জন্য কোনো minimum cutoff প্রকাশ করে না। IELTS General ও IELTS Academic Online accepted নয়।",
      "Accepted score October 2024 বা পরের হতে হবে এবং prescribed official-delivery method-এ জমা দিতে হবে। Test portal screenshot বা unsupported online version ব্যবহার করবেন না।",
      "Bangladesh-এর fully English-taught Bachelor/Master/Doctoral degree official university evidence দিলে test-score waiver may be considered; এটি automatic MOI waiver নয়। Waived applicant score submit করলে সেই score evaluation-এ ব্যবহৃত হবে।",
      "GRE required-document list-এ নেই এবং GMAT explicitly required নয়। JLPT/Japanese test-ও নেই।",
      "Application-এ generic CV review করা হয় না; designated Employment History form ব্যবহার করতে হয়।",
      "তিনটি personal essay লাগে: কেন MBA-IB, সবচেয়ে গুরুত্বপূর্ণ work accomplishment এবং বিস্তারিত Business Project plan + education/career integration।",
      "একটি professional recommendation designated form-এ handwritten signatureসহ sealed envelope-এ লাগবে; seal-এর ওপর recommender signature নিয়মও follow করতে হবে।",
      "Kevin K. W. Ho বর্তমান faculty: Information Systems, e-services, social-commerce strategy, misinformation, information security ও sustainability management।",
      "Donghao Zhu বর্তমান faculty: operations research, optimization, market-mechanism design, AI/digital economy, platform economics ও data-driven business decision making।",
      "Ho/Zhu topic-fit examples মাত্র। Official FAQ অনুযায়ী applicant enrollment-এর আগে MBA-IB-এর কোনো professor-কে contact করতে পারবেন না; inquiry program office-এর মাধ্যমে করুন।",
    ],
    fit: [
      "March 2027-এর মধ্যে student-time job বাদ দিয়ে অন্তত এক বছরের documented professional experience আছে।",
      "Software/IT background থেকে MIS, digital platform, operations, strategy, information security বা technology management-এর clear bridge বানাতে পারবেন।",
      "IELTS 5.5 অথবা stronger accepted score আছে, কিংবা fully English degree-এর exact official proof দ্রুত সংগ্রহ করে waiver confirmation নিতে পারবেন।",
      "তিনটি evidence-based essay এবং আপনার professional performance ভালোভাবে জানেন—এমন recommender-এর recommendation তৈরি করতে পারবেন।",
      "Japan-resident হিসেবে 8 November Tokyo on-campus interview এবং regular evening/Saturday attendance করতে পারবেন।",
      "Scholarship না পেলেও applicable tuition rate, admission fee, Tokyo living cost ও schedule cover করার fallback আছে।",
      "Business Project-এ একটি real organizational/business problem, data/method এবং measurable outcome দেখাতে পারবেন।",
    ],
    quickStart: [
      "আজই Employment History, transcript/degree originals, residence card, professional recommender এবং English evidence-এর tracker বানান—application খোলার অপেক্ষায় থাকবেন না।",
      "MOI route নিলে university letter-এ degree/program entirely English-এ conducted ছিল—এই exact fact লিখিয়ে MBA-IB office থেকে written acceptability confirmation নিন।",
      "তিন essay-এর outline বানান: program motivation, strongest work achievement এবং one concrete Business Project; generic ‘I want an MBA’ লেখা বাদ দিন।",
      "25 August web entry করুন, কিন্তু postal packet 11 September arrival deadline-এর কয়েক দিন আগে trackable service-এ পাঠান।",
    ],
    steps: [
      {
        title: "Eligibility, work experience ও status-based cost lock করুন",
        timing: "Now · before 25 August 2026",
        description:
          "Bachelor’s qualification সহজ অংশ; decisive formal condition হলো March 2027-এর মধ্যে one-year qualifying work experience। একই সঙ্গে Student residence status এবং other status-এর tuition আলাদা।",
        actions: [
          "Bachelor/16-year education route এবং degree completion date official guide-এর সঙ্গে মিলান।",
          "Employment start/end date, full/part-time status, duties এবং student enrollment overlap আলাদা timeline-এ লিখুন।",
          "Full-time student থাকা অবস্থার job বাদ দিয়ে March 2027-এ অন্তত 12 months থাকে কি না হিসাব করুন।",
          "Residence status April 2027-এ কী হবে তা program office-কে জানিয়ে ¥608,800 না ¥535,800 annual tuition প্রযোজ্য—written confirmation নিন।",
          "Standard qualification না থাকলে closed preliminary-screening window-এর কারণে AY2027 route usable কি না immediately office-এ জিজ্ঞেস করুন।",
        ],
        readyWhen:
          "Qualifying experience 12+ months, degree route valid এবং applicable tuition category written record-এ confirmed।",
      },
      {
        title: "English score অথবা MOI evidence সঠিকভাবে প্রস্তুত করুন",
        timing: "Now · ideally by 20 August",
        description:
          "No published minimum মানে English irrelevant নয়—এটি 20 points। Bangladesh MOI discretionary হওয়ায় assumption-এর বদলে exact evidence ও office confirmation দরকার।",
        actions: [
          "IELTS হলে Academic এবং in-person accepted version কি না, test date October 2024 বা পরে কি না verify করুন।",
          "TOEFL/IELTS direct score delivery instruction এবং institution code current PDF থেকে follow করুন; screenshots জমা দেবেন না।",
          "MOI letter-এ degree name, attendance dates এবং entire undergraduate/graduate education English-এ conducted—স্পষ্ট wording রাখুন।",
          "Office-কে concise inquiry-তে country, degree, MOI draft এবং score status জানিয়ে waiver eligibility লিখিতভাবে জিজ্ঞেস করুন।",
          "MOI waiver request করলে IELTS 5.5-ও submit করবেন কি না সচেতনভাবে ঠিক করুন: score submit করলে screening-এ considered হবে; waiver নিশ্চিত না হলে score omission application incomplete করতে পারে—program office-এর written guidance নিন।",
        ],
        readyWhen:
          "Accepted official score delivery initiated অথবা MBA-IB office MOI evidence route লিখিতভাবে গ্রহণযোগ্য বলেছে।",
      },
      {
        title: "Employment form, essays ও recommendation বানান",
        timing: "Now · target draft by 31 August",
        description:
          "Document screening 130 points—তাই একটি generic CV বা copied SOP দিয়ে এই route শক্তিশালী হবে না। Designated forms এবং exact essay prompts control করবে।",
        actions: [
          "Employment History form-এ role, scope, outcome, tools, team/stakeholder এবং progression quantified evidence-এ লিখুন।",
          "Essay 1-এ MBA-IB curriculum ও career gap; Essay 2-এ one significant accomplishment, decisions এবং measurable impact দিন।",
          "Essay 3-এ Business Project problem, organization/industry context, research question, data, analysis method, feasibility এবং expected value লিখুন।",
          "Project choice ICP/BPD/IRR/OI/JI-এর current definitions পড়ে proposed project-এর সঠিক category নিন।",
          "Professional recommender-কে designated form, deadline, handwritten signature, sealed-envelope ও signature-across-seal rule লিখিতভাবে দিন।",
          "Generative-AI contribution ব্যবহার করলে প্রতিটি use properly quote ও cite করুন; uncited generated prose submit করবেন না।",
        ],
        readyWhen:
          "Three prompt-specific essays page limit-এর মধ্যে, Employment History complete এবং sealed recommendation হাতে।",
      },
      {
        title: "দুই ধাপের application এবং postal delivery সম্পূর্ণ করুন",
        timing: "25 August 10:00–11 September 2026 15:00 JST",
        description:
          "Online registration application complete করে না। First-screen fee ও web fields-এর পর originals/required material deadline-এর মধ্যে পৌঁছানো আবশ্যক।",
        actions: [
          "Opening day-তে web entry শুরু করে passport/degree-এর exact Roman spelling consistent রাখুন।",
          "First-screen ¥7,000 pay করে receipt/evidence এবং final submission confirmation সংরক্ষণ করুন।",
          "Checklist অনুযায়ী originals/certified records, translation, forms, essays, recommendation, English proof এবং residence-card copies সাজান।",
          "Trackable registered mail/courier early পাঠান যাতে 11 September-এর মধ্যে arrive করে; postmark-only ধরে নেবেন না।",
          "Tracking check করুন এবং প্রয়োজন হলে program office-এর মাধ্যমে receipt confirm করুন; নিজের কাছে exact packet scan রাখুন।",
          "16 October first screen pass করলে নির্ধারিত window-তে second-stage ¥23,000 pay করুন।",
        ],
        readyWhen:
          "Web entry submitted, ¥7,000 paid, packet delivered/accepted এবং full copy + tracking safely stored।",
      },
      {
        title: "English interview, schedule ও funding fallback প্রস্তুত করুন",
        timing: "September–December 2026",
        description:
          "Japan-resident interview 8 November Tokyo Campus-এ। Committee submitted essays ও future plan থেকে depth, consistency এবং communication যাচাই করবে।",
        actions: [
          "90-second introduction-এ background, work impact, why MBA-IB এবং post-degree goal connect করুন।",
          "প্রতিটি essay থেকে follow-up question, trade-off, failure/lesson এবং data credibility উত্তর practice করুন।",
          "Business Project-এর feasibility, access to data, ethics/confidentiality, method এবং program faculty/courses fit defend করুন।",
          "Work-study plan বানিয়ে weekday evening/Saturday attendance employer/family schedule-এর সঙ্গে reconcile করুন।",
          "¥282,000 admission, applicable two-year tuition এবং Tokyo living budget scholarship ছাড়া তৈরি করুন।",
          "Admission হলে fee-exemption/waiver এবং JASSO/external notices আলাদাভাবে apply করুন; award হওয়ার আগে budget-এ ধরবেন না।",
        ],
        readyWhen:
          "Mock interview consistently strong, 8 November attendance fixed এবং full-cost fallback documented।",
      },
    ],
    checklist: [
      "AY2027 MBA-IB application checklist and web-entry record",
      "Original/certified Bachelor degree or expected-graduation certificate",
      "Complete academic transcript and any transfer records",
      "Required professional/official English or Japanese translations",
      "Designated Employment History form—not a generic CV",
      "Personal Essay 1: why Tsukuba MBA-IB, maximum one page",
      "Personal Essay 2: most significant work accomplishment, maximum one page",
      "Personal Essay 3: Business Project and career integration, maximum three pages",
      "One designated professional recommendation, signed and sealed correctly",
      "Accepted official TOEIC/TOEFL/IELTS Academic evidence or confirmed MOI package",
      "¥7,000 first-screen payment evidence",
      "¥23,000 second-screen fee plan if shortlisted",
      "Japan-resident applicant residence card, both sides",
      "Passport/identity spelling cross-check",
      "Tracked postal receipt and complete scan of submitted packet",
      "8 November Tokyo Campus interview plan",
      "Status-specific tuition confirmation and two-year budget",
      "Employer/family agreement for weekday-evening and Saturday workload",
    ],
    afterSubmission: [
      "Tracking এবং office/portal status মিলিয়ে 11 September-এর মধ্যে physical receipt নিশ্চিত করুন।",
      "16 October 15:00 first-screen result check করে pass করলে ¥23,000 second-stage fee deadline miss করবেন না।",
      "Submitted essays, Employment History ও recommendation themes থেকে evidence-based interview question bank বানান।",
      "8 November on-campus interview travel buffer রাখুন; overseas online-interview rule নিজের ক্ষেত্রে প্রয়োগ করবেন না।",
      "4 December final result-এর পর admission procedure, status, employer schedule ও payment দ্রুত final করুন।",
      "Waiver/JASSO/external aid separate process-এ apply করুন; self-funded capacity বজায় রাখুন।",
    ],
    cautions: [
      "No minimum IELTS score মানে IELTS 5.5 strong বা admission-safe নয়; English সরাসরি 20 points।",
      "Bangladesh English-medium degree-এর MOI automatic waiver নয়—official wording ও program decision দরকার।",
      "Work experience mandatory; full-time student থাকা অবস্থার employment qualifying year-এ count করে না।",
      "Web entry alone incomplete; physical documents must arrive by 11 September।",
      "Japan resident-এর interview 8 November Tokyo Campus-এ in person, Zoom নয়।",
      "Admission-এর আগে কোনো MBA-IB professor-কে contact করা নিষিদ্ধ; Kevin Ho বা Donghao Zhu-কে email করবেন না।",
      "Capacity 30 এবং holistic selection competitive; এটিকে easy admission বলা যাবে না।",
      "Student residence status tuition ¥608,800/year; public-facing পুরোনো ¥535,800 figure নিজের status যাচাই ছাড়া ব্যবহার করবেন না।",
      "MBA-IB নতুন MEXT-sponsored student গ্রহণের standard route নয়; existing MEXT holder হলে office consultation আলাদা বিষয়।",
      "Waiver/scholarship competitive ও post-selection; full funding ধরে application করবেন না।",
      "Working-professional timetable সুবিধাজনক হলেও এটি online MBA নয় এবং সপ্তাহে একদিনের program নয়।",
    ],
    officialLinks: [
      {
        label: "AY2027 official application guide",
        href: "https://www.office.otsuka.tsukuba.ac.jp/examinee/mbaib/",
        description: "Web-entry, postal documents, eligibility, screening, fees, forms এবং current controlling rules এখান থেকে নিন।",
      },
      {
        label: "MBA-IB admission information",
        href: "https://www.mbaib.gsbs.tsukuba.ac.jp/admissionindex/admission-information/",
        description: "April 2027 schedule, capacity, degree এবং selection overview verify করুন।",
      },
      {
        label: "MBA-IB official FAQ",
        href: "https://www.mbaib.gsbs.tsukuba.ac.jp/admissionindex/faqindex/",
        description: "No score cutoff, work-experience rules, MEXT limitation, timetable এবং no-professor-contact rule পড়ুন।",
      },
      {
        label: "English-score and MOI instructions",
        href: "https://www.office.otsuka.tsukuba.ac.jp/wp/wp-content/uploads/2026/03/08_How-to-Submit-English-Test-Score.pdf",
        description: "Accepted tests, score delivery, validity এবং English-medium-degree evidence-এর exact rule অনুসরণ করুন।",
      },
      {
        label: "Official essay guideline",
        href: "https://www.office.otsuka.tsukuba.ac.jp/wp/wp-content/uploads/2026/03/06-1_Essay-Guideline.pdf",
        description: "তিন essay-এর prompt, page limit, Business Project categories এবং authorship rule এখান থেকে নিন।",
      },
      {
        label: "MBA-IB learning model",
        href: "https://www.mbaib.gsbs.tsukuba.ac.jp/academics/learning-model/",
        description: "45-credit structure, Business Project এবং working-professional attendance বাস্তবতা বুঝুন।",
      },
      {
        label: "Current MBA-IB faculty",
        href: "https://www.mbaib.gsbs.tsukuba.ac.jp/facultyindex/",
        description: "Post-enrollment topic fit দেখুন; application-এর আগে faculty contact করবেন না।",
      },
      {
        label: "Kevin K. W. Ho profile",
        href: "https://www.mbaib.gsbs.tsukuba.ac.jp/facultyindex/kevinho/",
        description: "Information systems, e-services, social commerce, misinformation ও sustainability fit দেখুন।",
      },
      {
        label: "Donghao Zhu profile",
        href: "https://www.mbaib.gsbs.tsukuba.ac.jp/facultyindex/donghao-zhu/",
        description: "Optimization, operations, platform economics, AI/digital economy ও business decisions fit দেখুন।",
      },
      {
        label: "Tsukuba fee-exemption information",
        href: "https://www.tsukuba.ac.jp/en/admissions/financial-exemption/",
        description: "Admission-fee and tuition relief eligibility, deadlines এবং non-guaranteed selection verify করুন।",
      },
      {
        label: "AY2027 tuition revision notice",
        href: "https://www.tsukuba.ac.jp/en/news/pdf/20260324150900-en.pdf",
        description: "Student-status international tuition revision এবং applicable category official notice-এ check করুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "aoyama-gakuin-smiprp-masters-2027",
    country: "japan",
    university: "Aoyama Gakuin University",
    businessPriority: 21,
    englishBusinessPrograms: "MA in Business Administration (SMIPRP)",
    businessOfficialUrl: "https://www.aoyama.ac.jp/en/academic/graduate/business/",
    title: "Aoyama Gakuin SMIPRP: April 2027 Application Guide",
    summary:
      "Tokyo-র 12-month fully English MA in Business Administration—Strategic Management and Intellectual Property Rights—যেখানে English-medium degree letter accepted, GRE/GMAT/JLPT নেই এবং selection documents + Zoom interview; তবে প্রায় 7 seats, online entry 24 August এবং curriculum customs/IP-border management-কেন্দ্রিক। Postal receipt cutoff university-র কাছে অবিলম্বে confirm করতে হবে।",
    label: "Open now · online entry Aug 24, 09:00 JST · postal cutoff confirm",
    funding:
      "General applicant-এর জন্য self-funded baseline: admission ¥290,000 + annual tuition ¥917,000 = one-year published school-fee subtotal ¥1,207,000, living/housing বাদে। WCO scholarship শুধু qualifying developing-country customs officer-এর জন্য। Privately financed Student-status enrollee applicable AY/graduate-school rules অনুযায়ী AGU/JASSO competitive post-enrollment aid-এর জন্য বিবেচিত হতে পারেন, কিন্তু upfront funding নয়।",
    duration: "12 months · April 2027 · Aoyama Campus, Tokyo · MA in Business Administration",
    audience:
      "English-medium Bachelor/graduate degree proof বা IELTS Academic 6.0 in every band/TOEFL iBT 79 থাকা applicant, যিনি strategic management-কে customs modernization, intellectual-property border enforcement, international trade, digital platforms বা organizational transformation-এর সঙ্গে যুক্ত করতে পারেন",
    realityCheck:
      "এটি broad/general MBA নয়; official mission future customs-related leaders, customs administration, tariff law, WCO reforms এবং IPR border enforcement-এর দিকে strongly specialized। Worldwide general applicants formalভাবে apply করতে পারেন, কিন্তু software-only story-কে digital customs, trade facilitation, IP protection বা public-organization transformation-এর credible problem-এ bridge করতে হবে। Intake প্রায় 7 এবং 12-month pace intensive; তাই valid MOI + strong topic থাকলে ★★★☆☆ conditional fit, generic software-to-MBA হলে lower।",
    highlights: [
      "Exact program: Strategic Management and Intellectual Property Rights Program (SMIPRP), Graduate School of Business-এর 12-month English MA in Business Administration।",
      "All instruction English-এ; JLPT/Japanese requirement নেই। Non-credit Japanese courses Spring ও Autumn—দুই term-এই offered।",
      "Approximately 7 students admitted—তাই language waiver থাকলেও এটিকে easy admission বলা যাবে না।",
      "AY2027–2028 online entry এখন live এবং 24 August 2026 09:00 JST-এ বন্ধ।",
      "Online entry application complete করে না। University সব required postal documents receive করার পর application register করে; hand delivery, email বা fax accepted নয়।",
      "Current page late documents reject করে, কিন্তু public page postal receipt-এর জন্য আলাদা date/time স্পষ্ট দেখায় না। তাই 24 August 09:00 শুধু confirmed online-entry cutoff; actual postal cutoff ও courier address office-এর কাছে অবিলম্বে লিখিতভাবে clarify করুন।",
      "Document screening pass করা applicant-এর Zoom interview 2–9 October 2026-এর মধ্যে; current page final-result date publish করে না।",
      "Selection academic/intellectual distinction, personal qualities, motivation, leadership potential, career-development potential এবং work experience evaluate করে।",
      "Traditional written entrance exam নেই। Work experience selection factor, কিন্তু published minimum one/two-year eligibility condition নেই।",
      "English-taught undergraduate বা graduate degree থাকলে university-issued Letter of Proof of Education in English accepted। Generic MOI নয়—letter-এ education English-এ conducted ছিল স্পষ্ট থাকতে হবে।",
      "English-education letter না থাকলে TOEFL iBT/Home 79 অথবা IELTS Academic 6.0 in every band লাগে; overall 6.0 alone যথেষ্ট নয়। Score দুই বছরের মধ্যে হতে হবে।",
      "21 January 2026-এর পরে নেওয়া TOEFL iBT হলে ETS score report print করে packet-এ দিতে হবে এবং ETS দিয়ে AGU-তে DI code G314 ব্যবহার করে direct score পাঠাতে হবে।",
      "IELTS General এবং TOEFL ITP accepted নয়। GRE/GMAT required documents-এ নেই।",
      "Required package-এ two recommendations; preferably একটি current workplace supervisor থেকে।",
      "Employment Status and Acceptance for Leave of Absence form লাগে—one-year study schedule employer-এর সঙ্গে আগে reconcile করা গুরুত্বপূর্ণ।",
      "Research Proposal program-এর customs/IP/strategy mission-এর সঙ্গে align করতে হবে। শুধুই generic AI app বা e-commerce topic weak fit।",
      "Current thesis supervisors মাত্র তিনজন: Kyoko Kato, Naoto Nadayama এবং Yukiko Nakagawa।",
      "Naoto Nadayama strongest tech-strategy bridge: global/competitive strategy, firm internationalization, technology-based internationalization এবং strategic decision-making।",
      "Motohiro Nakauchi AGU-এর faculty হলেও current SMIPRP faculty/thesis-supervisor list-এ নেই; তাঁকে prospective SMIPRP supervisor হিসেবে দেখানো ঠিক নয়।",
      "WCO scholarship developing WCO member-country-এর customs officer-এর জন্য: at least two years quality customs policy/administration experience, preferably IPR-border experience ও age under 40 on 1 April 2027; completion-এর পর home customs administration-এ at least three years continue করতে হয়। Reference benefits ¥147,000/month, school fees ও round-trip economy airfare।",
      "Ordinary privately financed applicant-এর potential AGU Industry-Academia Joint Global Scholarship ¥300,000/year এবং JASSO Honors ¥48,000/month post-enrollment, applicable AY/graduate-school/Student-status rules সাপেক্ষে selective এবং not guaranteed।",
    ],
    fit: [
      "English-medium Bachelor/graduate degree-এর exact official letter confirmed postal cutoff-এর আগে সংগ্রহ করতে পারবেন, অথবা every-band IELTS Academic 6.0/TOEFL 79 আছে।",
      "Bachelor’s বা higher degree complete এবং English Zoom interview করার technology/environment আছে।",
      "Customs, international trade, IPR, compliance, public-sector modernization অথবা cross-border digital business-এর সঙ্গে authentic career/research link আছে।",
      "দুই recommender, employment/leave form, research proposal এবং all official academic records খুব দ্রুত postal-ready করতে পারবেন।",
      "One-year intensive Tokyo study এবং ¥1,207,000 base fees + living cost scholarship ছাড়া fund করতে পারবেন।",
      "Tiny intake এবং specialized mission বুঝে application-কে backup/conditional target হিসেবে রাখছেন।",
    ],
    quickStart: [
      "24 August 09:00 JST confirmed online-entry cutoff ধরে reverse-plan করুন; আজই SMIPRP office-কে আলাদা postal receipt cutoff ও courier address লিখিতভাবে clarify করতে বলুন।",
      "দুই recommender—বিশেষ করে current workplace supervisor—এবং employer leave-approval form immediately শুরু করুন।",
      "English-medium route নিলে generic MOI নয়, official Letter of Proof of Education in English-এর exact template/wording সংগ্রহ করুন।",
      "Research topic-কে digital customs, IP-border enforcement, trade facilitation বা customs-organization transformation-এর একটিতে narrow করুন।",
    ],
    steps: [
      {
        title: "Deadline feasibility এবং English route আজই lock করুন",
        timing: "Immediate · 12–14 August 2026",
        description:
          "এই application-এর bottleneck online form নয়; official letters, two recommendations এবং complete postal packet deadline-এর আগে physically receive হওয়া।",
        actions: [
          "Admissions page-এর current AY2027–2028 notice save করুন এবং SMIPRP office-কে postal arrival deadline/time লিখিতভাবে জিজ্ঞেস করুন।",
          "Degree English-এ হলে registrar-কে official Letter of Proof of Education in English request করুন; seal/signature/letterhead নিশ্চিত করুন।",
          "MOI সময়মতো না এলে every-band IELTS 6.0 বা TOEFL 79 valid official evidence আছে কি না check করুন।",
          "TOEFL 21 January 2026-এর পরে নেওয়া হলে printed ETS report-এর সঙ্গে DI code G314-এ direct transmission immediately arrange করুন।",
          "সব degree/transcript কোথা থেকে original বা certified copy আসবে এবং courier transit কত দিন—tracker বানান।",
          "Office-confirmed postal cutoff-এর আগে arrival realistic না হলে incomplete/late submission করবেন না; next cycle monitor করুন।",
        ],
        readyWhen:
          "Office-confirmed postal plan, accepted English evidence এবং every external-document delivery date deadline-এর আগে।",
      },
      {
        title: "Program-specialized research bridge তৈরি করুন",
        timing: "Immediate · before finalizing Form 4",
        description:
          "SMIPRP strategy/IP degree হলেও customs mission central। A credible software-to-management proposalকে cross-border rules, organizations এবং public value বুঝতে হবে।",
        actions: [
          "একটি scope বাছুন: digital customs risk management, counterfeit detection/IP enforcement, trade single-window systems, platform compliance বা customs digital transformation।",
          "Problem owner, current process, policy/legal constraint, technology role এবং managerial decision আলাদা করে লিখুন।",
          "Research question, literature, case/data access, qualitative/quantitative method এবং expected practical contribution দিন।",
          "Nadayama-এর competitive/global strategy themes এবং current SMIPRP customs/IP courses-এর সঙ্গে fit evidence লিখুন।",
          "Generic ‘AI will improve customs’ claim বাদ দিয়ে governance, false-positive, privacy, adoption এবং organizational capability risks address করুন।",
        ],
        readyWhen:
          "Proposal clearly strategic-management research, customs/IP mission-aligned এবং 12 months-এ feasible।",
      },
      {
        title: "Recommendations, employment এবং academic documents সম্পূর্ণ করুন",
        timing: "Immediate · before courier cutoff",
        description:
          "Current required packet unusually document-heavy। Form rules, original/certified status এবং English translations না মানলে strong profile-ও register হবে না।",
        actions: [
          "Form 1 application/photo fields passport spelling অনুযায়ী type করুন।",
          "Two recommenders-কে official form, criteria এবং hard internal deadline দিন; preferably one current supervisor।",
          "Form 3 employment status ও leave acceptance employer দিয়ে সত্য ও complete করান।",
          "Form 4 research proposal prompt/format অনুযায়ী final করুন; extra unsolicited portfolio পাঠাবেন না।",
          "All colleges/universities-এর degree certificate ও transcript original/official certified copies সংগ্রহ করুন।",
          "Japanese/English ছাড়া document-এর official English translation-এ issuer/translator seal or signature current rule অনুযায়ী দিন।",
          "Passport copy এবং name-change proof, যদি applicable, include করুন।",
        ],
        readyWhen:
          "Every required form typed in English, two recommendations ready এবং records/translation packet checklist-complete।",
      },
      {
        title: "Online entry ও physical receipt complete করুন",
        timing: "Online entry by 24 August 2026, 09:00 JST · postal receipt cutoff confirm immediately",
        description:
          "Online entry only starts the process। Registration occurs after Aoyama receives every required document; late delivery accepted নয়।",
        actions: [
          "Online entry early submit করে confirmation/save copy রাখুন।",
          "Required forms one-sided print করুন; hand delivery, email বা fax-এর ওপর নির্ভর করবেন না।",
          "No extra documents rule follow করে admissions checklist order-এ packet সাজান।",
          "Trackable courier/registered post deadline bufferসহ পাঠান এবং delivery signature/status save করুন।",
          "Courier delivery proof রাখুন; AGU individual arrival acknowledgement দেয় না, তাই routine receipt confirmation expect করবেন না।",
        ],
        readyWhen:
          "Online entry complete, packet confirmed cutoff-এর আগে delivered এবং courier delivery evidence stored।",
      },
      {
        title: "Zoom interview এবং self-funded plan প্রস্তুত করুন",
        timing: "After submission · 2–9 October interview window",
        description:
          "Interview selected applicants-এর motivation, leadership, experience, research feasibility ও specialized program fit cross-check করে।",
        actions: [
          "Why SMIPRP—not general MBA—এই প্রশ্ন customs/IP curriculum evidence দিয়ে উত্তর practice করুন।",
          "Leadership/work examples STAR structure-এ outcome, conflict, learning ও ethicsসহ প্রস্তুত করুন।",
          "Proposal-এর research question, data access, method, policy impact ও 12-month feasibility defend করুন।",
          "Zoom camera, microphone, quiet room, stable backup internet এবং JST schedule প্রস্তুত রাখুন।",
          "¥290,000 admission + ¥917,000 tuition + Tokyo living full budget করুন।",
          "Customs officer না হলে WCO scholarship বাদ দিয়ে only competitive post-enrollment AGU/JASSO tracker রাখুন।",
        ],
        readyWhen:
          "Mock Zoom answers concise, customs/IP fit credible এবং scholarship ছাড়া one-year budget viable।",
      },
    ],
    checklist: [
      "AY2027–2028 online-entry confirmation",
      "Form 1 application and required photograph",
      "Two designated recommendations, preferably one workplace supervisor",
      "Form 3 Employment Status and Acceptance for Leave of Absence",
      "Form 4 Research Proposal",
      "Form 5 only if genuinely applying under WCO customs scholarship",
      "Original/official certified degree certificates from every college/university",
      "Original/official certified transcripts from every college/university",
      "Official Letter of Proof of Education in English, or accepted valid test score",
      "IELTS Academic 6.0 in every band or TOEFL iBT/Home 79 if no English-education letter",
      "Post-21 January 2026 TOEFL: printed report plus ETS direct transmission to DI G314",
      "Official English translations with required seal/signature",
      "Passport copy",
      "Name-change evidence if records differ",
      "One-sided printed packet with no unsolicited extras",
      "Trackable postal/courier receipt and delivered proof",
      "Zoom-ready PC, camera, microphone and backup connection",
      "One-year fees and Tokyo living-cost fallback budget",
    ],
    afterSubmission: [
      "Courier delivery proof সংরক্ষণ করুন; AGU individual arrival acknowledgement না দেওয়ায় routine confirmation expect করবেন না।",
      "Missing-item request এলে published rule ও deadline মেনে immediately respond করুন; informal email attachment accepted ধরে নেবেন না।",
      "2–9 October Zoom window পুরোটা calendar-এ block করে JST availability রাখুন।",
      "Research proposal, recommendations এবং employment form-এর সব claims interview-এর আগে evidenceসহ review করুন।",
      "Admission হলে payment, employer leave, housing এবং residence-status procedure দ্রুত শুরু করুন।",
      "AGU/JASSO aid post-enrollment notice-এ apply করুন, কিন্তু award না হওয়া পর্যন্ত self-funded budget রাখুন।",
    ],
    cautions: [
      "24 August 09:00 confirmed online-entry deadline; online entry alone registration complete করে না, এবং complete postal documents university-designated cutoff-এর মধ্যে পৌঁছাতে হবে—exact cutoff office-এ clarify করুন।",
      "English waiver-এর জন্য generic MOI যথেষ্ট নয়—official letter-এ undergraduate/graduate education English-এ conducted ছিল লিখতে হবে।",
      "Score route-এ IELTS Academic 6.0 each band; overall 6.0 with any lower band eligible নয়।",
      "About 7 seats এবং specialized mission-এর কারণে এটি easy/low-bar admission নয়।",
      "Programটি general MBA নয়; customs administration, IPR border enforcement ও WCO reform central।",
      "Motohiro Nakauchi current SMIPRP thesis supervisor নন; তাঁকে application fit হিসেবে claim করবেন না।",
      "WCO scholarship ordinary software/business applicant-এর জন্য নয়; developing WCO country-এর customs officer, two-year customs-policy/administration experience এবং return-service conditions apply।",
      "General AGU/JASSO funding competitive and post-enrollment; initial fees/living cost নিজে fund করার plan দরকার।",
      "One-year format compressed; research, classes, thesis এবং career transition একসঙ্গে manage করতে হবে।",
      "Current page final-result date দেয় না—অনুমান করে calendar publish করবেন না।",
    ],
    officialLinks: [
      {
        label: "SMIPRP admissions",
        href: "https://www.aoyama.ac.jp/faculty/graduate_business/smiprp/admissions/",
        description: "Current AY2027–2028 entry deadline, document rules, English evidence এবং Zoom schedule follow করুন।",
      },
      {
        label: "About SMIPRP",
        href: "https://www.aoyama.ac.jp/faculty/graduate_business/smiprp/about/",
        description: "12-month degree, customs/IP mission এবং target professional profile বুঝুন।",
      },
      {
        label: "SMIPRP curriculum",
        href: "https://www.aoyama.ac.jp/faculty/graduate_business/smiprp/education/",
        description: "Strategy, organizational management, IPR, customs, research ও thesis requirements দেখুন।",
      },
      {
        label: "Current SMIPRP faculty",
        href: "https://www.aoyama.ac.jp/faculty/graduate_business/smiprp/faculty/",
        description: "Kyoko Kato, Naoto Nadayama ও Yukiko Nakagawa current thesis-supervisor list verify করুন।",
      },
      {
        label: "Naoto Nadayama profile",
        href: "https://www.aoyama.ac.jp/faculty/graduate_business/smiprp/faculty_education/profile02.html",
        description: "Global/competitive strategy, internationalization এবং technology-strategy fit পড়ুন।",
      },
      {
        label: "WCO scholarship rules",
        href: "https://www.aoyama.ac.jp/faculty/graduate_business/smiprp/scholarship/",
        description: "Customs-officer eligibility, experience, age preference, return obligation এবং benefits verify করুন।",
      },
      {
        label: "AGU international scholarships",
        href: "https://www.aoyama.ac.jp/en/admission/int_stu/scholarships_support.html",
        description: "Post-enrollment institutional/JASSO support, amounts ও competitive nomination process দেখুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "saitama-esiti-mext-doctoral-2027",
    country: "japan",
    university: "Saitama University",
    title: "Saitama ESITI 2027: Overseas-Residence Doctoral/MEXT Eligibility Guide",
    summary:
      "ESITI direct doctoral route-এর overseas-residence rule, MEXT/private 2027 deadlines, master's/English eligibility, professor agreement, interview/mathematics possibility, benefits ও private-study cost—এবং Japan-resident master's seeker-এর জন্য correct stop rule।",
    label: "Doctoral only · Direct route requires overseas residence",
    funding:
      "MEXT route সর্বোচ্চ 8 doctoral nominees: ¥148,000/month including regional allowance, fees এবং eligible airfare up to 3 years; nomination final MEXT award নয়। Private direct route self-funded, with competitive fee relief only।",
    duration: "3-year doctoral program · April or October 2027 private / October 2027 MEXT",
    audience:
      "Application-এর সময় Japan-এর বাইরে থাকা, master's-qualified doctoral applicants who meet ESITI/MEXT research and language conditions",
    realityCheck:
      "Attachment-এ Master’s option হিসেবে থাকা claimটি ভুল: official ESITI direct call three-year doctoral program, master's degree required। Direct MEXT এবং direct privately funded—দুই route-এই applicant-কে application-এর সময় overseas reside করতে হয়। Japan resident হলে এই page-এর direct ESITI form নয়; আলাদা regular Graduate School admission route দেখতে হবে, যার dates, language ও examination rules ভিন্ন। AY2027 MEXT deadline 30 November 2026, maximum 8 nominees, October 1, 2027 enrollment। Private April 2027 deadline 31 October 2026; private October 2027 deadline 15 April 2027।",
    highlights: [
      "ESITI direct route doctoral-only; bachelor's holder-এর Master’s admission নয় এবং enrollment-এর আগে qualifying master's completion লাগে।",
      "Overseas residence rule MEXT applicant-এর পাশাপাশি private direct ESITI applicant-এর ক্ষেত্রেও প্রযোজ্য। Japan resident separate regular Graduate School process ব্যবহার করবে।",
      "MEXT 2027: maximum 8 doctoral nominees, application deadline 30 November 2026, intended enrollment 1 October 2027। University nomination final MEXT selection নয়।",
      "Privately funded direct route: April 2027 deadline 31 October 2026; October 2027 deadline 15 April 2027। Both direct routes overseas-based applicants-এর জন্য।",
      "MEXT age condition: born on or after 2 April 1992। Nationality, health, arrival, visa, other-scholarship এবং MEXT rulesও separately apply।",
      "English benchmark CEFR B2, IELTS 5.5 বা TOEFL iBT 72, generally result within two years। PDF-এর ambiguous four-skills wordingকে IELTS 5.5 each-band confirmed rule না ধরে office-এর written clarification নিন।",
      "MOI waiver only when applicant-এর master's program English-এ taught ছিল। Bachelor MOI বা generic workplace Englishকে substitute ধরে নেবেন না। GRE/GMAT listed নয়।",
      "Application-এর আগে ESITI professor-এর agreement নিতে হয়। Broad email নয়—doctoral topic, prior master's work, methods/results এবং faculty fit দিতে হবে।",
      "Selection credentials, recommendations ও topic essays review করে; shortlisted candidates online interview দেয়। Prospective supervisor চাইলে mathematics examও হতে পারে।",
      "MEXT reference benefit: ¥145,000 doctoral stipend + ¥3,000 regional allowance = ¥148,000/month, application/admission/tuition exemption, eligible round-trip airfare, up to standard three years।",
      "Private route current cost: ¥30,000 application, ¥282,000 admission, ¥642,960/year tuition। Admission-fee exemption, tuition relief/postponement request করা গেলেও selection-based, guaranteed নয়।",
      "Saitama regular Graduate School admission may be a Japan-resident option, কিন্তু এই ESITI page-এর IELTS/MEXT/deadline conditions regular Master's route-এ carry করবেন না।",
    ],
    fit: [
      "Master's degree complete/expected এবং doctoral-level prior research, methods ও output explain করতে পারবেন।",
      "Direct application-এর সময় overseas reside করবেন; current Japan resident নন।",
      "MEXT target হলে 2 April 1992 বা পরে জন্ম এবং all nationality/visa/arrival conditions পূরণ করেন।",
      "Valid B2/IELTS 5.5/TOEFL 72 অথবা qualifying English-taught master's evidence আছে।",
      "ESITI faculty-এর সঙ্গে novel, feasible doctoral topic align করে prior agreement নিতে পারবেন।",
      "Private route হলে three-year tuition/living cost বা only confirmed aid দিয়ে credible budget আছে।",
    ],
    quickStart: [
      "Current Japan resident + Master's seeker হলে direct ESITI stop করুন; regular Saitama Graduate School Master's route আলাদাভাবে audit করুন।",
      "Overseas doctoral applicant হলে MEXT Nov 30, private-Apr Oct 31 অথবা private-Oct Apr 15—একটি route বেছে exact checklist নিন।",
      "Master's thesis থেকে novelty, gap, method, available data/equipment, three-year milestones ও societal contributionসহ doctoral concept বানান।",
      "Faculty agreement নেওয়ার আগে residence, master's completion, age, English validity ও funding eligibility hard-gate sheet complete করুন।",
    ],
    steps: [
      {
        title: "Doctoral-only, residence ও route hard gate চালান",
        timing: "Before professor contact",
        description:
          "Direct ESITI-র core exclusions research quality দিয়ে waive হয় না। Master's seeker/current Japan resident হলে regular route-এ ফিরে যান।",
        actions: [
          "Master's degree completed/expected এবং enrollment-এর আগে official completion proof সম্ভব কি না check করুন।",
          "Direct application period-এ overseas physical residence প্রমাণ করতে পারবেন কি না verify করুন; Japan resident হলে direct MEXT/private দুটোই বাদ দিন।",
          "MEXT হলে born on/after 2 April 1992, eligible nationality, health, arrival/visa এবং scholarship-conflict rules line-by-line পড়ুন।",
          "Private April/October route হলে overseas-residence condition এবং full three-year funding proof check করুন।",
          "একটি hard gate fail করলে separate Saitama regular graduate admission page ব্যবহার করুন; ESITI deadline/English rule carry করবেন না।",
        ],
        readyWhen: "Degree, overseas residence, route, age/nationality এবং funding hard gates documentary evidence-এ pass।",
      },
      {
        title: "Doctoral proposal ও mandatory professor agreement নিন",
        timing: "Eligible হলে · deadline-এর অনেক আগে",
        description:
          "ESITI direct flow professor agreement আগে চায়। Master's thesis repeat নয়—novel doctoral contribution এবং three-year feasibility দরকার।",
        actions: [
          "ESITI courses/current faculty থেকে এক primary professor বেছে recent publications এবং available lab/data/equipment review করুন।",
          "Master's question, method, dataset, result, limitation ও আপনার exact contribution one-page summary করুন।",
          "Doctoral concept-এ literature gap, novelty, hypotheses, method, evaluation, ethics/risks, milestones এবং societal/technical impact দিন।",
          "Email-এ CV, transcripts, master's abstract/output, English proof এবং proposal attach করে official agreement request করুন।",
          "Professor mathematics assessment চাইতে পারেন—required topics/format লিখিতভাবে জিজ্ঞাসা করে preparation করুন।",
        ],
        readyWhen: "Doctoral-level proposal defensible এবং professor-এর formal application agreement documented।",
      },
      {
        title: "Language, credentials ও staged selection file complete করুন",
        timing: "MEXT by Nov 30 · private routes by Oct 31/Apr 15",
        description:
          "Application শুধু proposal নয়। Academic credentials, recommendations, topic essays, language evidence ও interview/mathematics readiness একসঙ্গে assess হয়।",
        actions: [
          "Within-two-years CEFR B2/IELTS 5.5/TOEFL 72 evidence দিন; ambiguous four-skills interpretation office-কে লিখে confirm করুন।",
          "Waiver হলে master's program English-taught ছিল—এমন official evidence দিন; bachelor-only MOI automatic substitute নয়।",
          "Bachelor/master degree, transcripts, recommendations, topic essays, passport/health ও route-specific MEXT/private forms exact checklist-এ map করুন।",
          "Online interview-এ master's work, novelty, feasibility, faculty fit, English ও post-degree impact practice করুন; supervisor চাইলে mathematics examও প্রস্তুত করুন।",
          "Document title, proposed professor, research title, dates ও name spelling সব forms-এ consistent রাখুন।",
        ],
        readyWhen: "Complete route-specific file submitted এবং shortlist/interview/math stages ready।",
      },
      {
        title: "MEXT benefit বনাম private cost decision নিন",
        timing: "Before submission and after nomination",
        description:
          "Eight university nominees scholarship winners নয়। Private fee reliefও automatic নয়; each route-এর fallback আলাদা।",
        actions: [
          "MEXT budget-এ ¥148,000/month reference, fees ও eligible airfare রাখুন; final MEXT letter না পাওয়া পর্যন্ত relocation commit করবেন না।",
          "Private route-এ ¥30,000 exam + ¥282,000 admission + ¥642,960/year tuition এবং living/insurance/travel যোগ করুন।",
          "Admission-fee exemption, tuition waiver/postponement ও JASSO/private awards-এর application/selection timing আলাদা tracker-এ রাখুন।",
          "MEXT nomination fail করলে private admission automatically affordable/converted হবে ধরে নেবেন না।",
        ],
        readyWhen: "Final-award এবং zero-aid private scenarios আলাদা, affordable decision ruleসহ documented।",
      },
    ],
    checklist: [
      "Doctoral—not Master's—degree target confirmed",
      "Direct-route overseas residence evidence",
      "Master's qualification and completion date",
      "MEXT birth date, nationality and visa/arrival eligibility",
      "One chosen MEXT/private intake and exact deadline",
      "Within-two-years CEFR B2/IELTS 5.5/TOEFL 72 or accepted master's MOI",
      "Professor agreement before application",
      "Doctoral research proposal and topic essays",
      "Bachelor/master transcripts and degree certificates",
      "Recommendations and route-specific forms",
      "Identity/health documents",
      "Online interview preparation",
      "Supervisor-requested mathematics preparation if applicable",
      "MEXT nomination/final-award distinction",
      "Private-route three-year budget",
    ],
    afterSubmission: [
      "Credential/document screening, shortlist, online interview/math, university nomination এবং MEXT final result আলাদা status হিসেবে track করুন।",
      "Residence, degree-completion, health বা visa condition বদলালে immediately ESITI office/professor-কে জানান।",
      "Nomination পেলেও final scholarship letter ছাড়া job resignation, airfare বা relocation commitment করবেন না।",
      "Private offer হলে fee-relief decision ছাড়া full invoice ও enrollment deadline ধরে সিদ্ধান্ত নিন।",
    ],
    cautions: [
      "Direct ESITI route Japan-resident applicant-এর জন্য নয়—MEXT এবং private দুই direct category-তেই overseas residence লাগে।",
      "এটি Master's scholarship নয়; three-year doctorate এবং master's qualification required।",
      "Japan-resident regular Graduate School route আলাদা; ESITI IELTS/deadline/funding rules সেখানে assume করবেন না।",
      "IELTS 5.5 wordingকে 5.5 each band confirmed rule বলবেন না; four-skills ambiguity writtenভাবে clarify করুন।",
      "MOI waiver English-taught master's program-এর জন্য; bachelor-only MOI automatic নয়।",
      "Professor agreement application permission, admission/funding guarantee নয়। Mathematics exam possible।",
      "Maximum 8 MEXT nominees final awardee count নয়; MEXT final approval আলাদা।",
      "Private fee exemption/waiver/postponement competitive; JASSO/private support guaranteed নয়।",
    ],
    officialLinks: [
      { label: "ESITI 2027 admissions", href: "https://park.saitama-u.ac.jp/~rese/admission.html", description: "MEXT/private deadlines, direct-route status ও updates দেখুন।" },
      { label: "ESITI 2027 official guide", href: "https://park.saitama-u.ac.jp/~rese/files/1.%20ESITI%20Aplication%20Guidelines%202027.pdf", description: "Doctoral degree, residence, professor agreement, selection, language, MEXT/private fees ও forms পড়ুন।" },
      { label: "Regular Graduate School admissions", href: "https://www.saitama-u.ac.jp/rikogaku/en/admission/news.html", description: "Japan-resident applicants-এর separate regular graduate route monitor করুন।" },
      { label: "ESITI courses and faculty", href: "https://park.saitama-u.ac.jp/~rese/courses.html", description: "Research course এবং prospective professor fit verify করুন।" },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "meiji-governance-studies-masters-watch-2027",
    country: "japan",
    university: "Meiji University",
    businessPriority: 17,
    englishBusinessPrograms: "Global Business Programme (MBA)",
    businessOfficialUrl: "https://www.meiji.ac.jp/cip/english/graduate/global/",
    title: "Meiji Governance Studies MPP: September 2027 Planning Guide",
    summary:
      "Tokyo-এর Surugadai Campus-এ English-taught professional Master of Public Policy—latest IELTS 5.5 reference, self-funded/MEXT route, exact costs, policy-tech faculty fit এবং 2027 guide প্রকাশের আগের preparation process।",
    label: "Upcoming · Self-funded 2027 guide pending · MEXT 2027 closed in Bangladesh",
    funding:
      "Self-funded by default; competitive school/university aid may reduce cost. Full MEXT funding is a separate, earlier Embassy Recommendation route only—not a benefit of ordinary MPP admission.",
    duration: "2 years · September intake · 2026 curriculum reference: 40+ credits and an English research paper",
    audience:
      "Bachelor's graduates and professionals targeting public policy, digital government, cybersecurity/AI governance, development or public finance",
    realityCheck:
      "Programটি officialভাবে confirmed এবং ordinary self-funded applicant Japan-এ বসবাস করেও apply করতে পারে—latest guide domestic registered-mail instructions ও residence-card copy চেয়েছে। September 2026 intake-এর amended guide-এ IELTS Academic 5.5 / পুরোনো TOEFL iBT scale-এ 72 সত্যিই accepted; কিন্তু সেই application 3 April 2026-এ বন্ধ এবং September 2027 self-funded guide এখনো প্রকাশিত হয়নি। Latest guide-এ capacity ছিল ‘a few students’, document screening-এর পরে 45-minute English online essay ও online interview আছে—তাই minimum score পূরণ মানেই সহজ admission নয়। এটি September-only professional MPP; Spring Global Governance doctoral information বা CS/MBA route-এর সঙ্গে mix করবেন না।",
    highlights: [
      "সঠিক route: Graduate School of Governance Studies-এর International Public Policy Course; degree হলো Master of Public Policy (Professional Graduate School Degree), location Kanda-Surugadai, Tokyo। এটি আলাদা Graduate School of Global Governance-এর doctoral program নয়।",
      "Latest 2026 course structure ছিল 2 years, minimum 40 credits, Research Method 1/2 ও Research Paper 1/2; English-track research paper-এর সব অংশ English-এ লিখতে হয়।",
      "Ordinary Japan-resident self-funded applicant latest route-এ eligible ছিল: Japan domestic registered mail ব্যবহার এবং non-Japanese resident-এর residence-card front/back copy submission explicitly listed।",
      "Latest amended threshold: IELTS Academic 5.5+; Meiji notice-এর exact wording অনুযায়ী 20 January 2026-এর আগে নেওয়া TOEFL iBT-তে 72+ অথবা 21 January 2026-এর পরে নেওয়া test-এ new-scale 4.0+। Transition date হলে admissions desk-এ confirm করুন। Score application deadline-এর দিন দুই বছরের মধ্যে issued হতে হতো।",
      "TOEIC, TOEFL ITP, TOEFL iBT Home Edition এবং IELTS General Training accepted ছিল না। শুধু first language English হলে explicit exemption ছিল; MOI certificate দিয়ে waiver-এর নিশ্চয়তা নেই।",
      "Latest guide-এ Japanese, GRE বা GMAT required-document/eligibility item নয় এবং numerical minimum GPA প্রকাশ করা হয়নি। তবু transcript, proposal, reasoning এবং interview holistic selection-এর অংশ।",
      "2026 reference timeline: application 20 March–3 April, document result প্রায় 16 April, 45-minute online essay ও interview 27 April, final result 14 May, admission procedure 12 June। এগুলো past dates—2027 prediction নয়।",
      "2026 academic-charge reference: Fall ¥868,000 + calendar 2027 ¥1,333,000 + Spring 2028 ¥668,000 = ¥2,869,000; এর বাইরে ¥35,000 non-refundable screening fee, Tokyo living, housing, travel, visa, books এবং কিছু course cost থাকতে পারে।",
      "Governance Studies-এর Japanese school page—যার information April 2025-এর—admission-এর সঙ্গে competitive scholarship apply করার কথা বলে: প্রায় half school intake, বছরে ¥200,000–¥550,000, সাধারণত 2 years subject to first-year performance। September 2026 English IPP guide এই award/procedure confirm করে না; 2027 eligibility/amount Meiji লিখিতভাবে confirm না করা পর্যন্ত unverified ধরুন।",
      "Other competitive references include Meiji's private-international-student aid ¥50,000/month for up to 6 months per award/semester, second-year-or-above GPA 3.00+ academic-excellence grant ¥200,000 এবং JASSO ¥48,000/month up to 12 months; nomination, budget ও current guideline-এর ওপর নির্ভর করে—automatic নয়।",
      "MEXT route Embassy Recommendation only; Meiji স্পষ্টভাবে University Recommendation নেয় না। MEXT awardee-র direct September MPP start-ও admission এবং individual MEXT approval ছাড়া automatic নয়।",
      "12 August 2026 status: MEXT 2027-এর initial embassy-application stage ইতিমধ্যে শেষ; শুধু embassy first screening pass করা applicant 1 September 2026 JST-এর মধ্যে Meiji provisional-acceptance request করতে পারেন। অন্যদের next country-specific MEXT cycle monitor করতে হবে।",
      "2027 MEXT benefit reference: non-regular/research student ¥143,000/month, regular master's/professional student ¥144,000/month, entrance/matriculation/tuition waiver এবং rule-based economy airfare; payment/airfare conditions ও government budget changes apply।",
    ],
    fit: [
      "Recognized bachelor's/equivalent degree আছে; foreign-education route-এ সাধারণত 16 years education বা guide-এ দেওয়া equivalent category পূরণ করেন।",
      "Software/IT experience থেকে public-service digitization, privacy, cybersecurity law, technology governance, smart-city participation বা data-driven policy-এর একটি concrete problem দাঁড় করাতে পারবেন; AI-policy theme নিলে current faculty fit আলাদাভাবে verify করবেন।",
      "Maximum 2,000-word English Research Proposal, evidence-based policy argument, 45-minute timed essay এবং online interview-এর জন্য প্রস্তুত।",
      "Professional public-policy degree চান—coding-heavy CS master's, technical thesis lab বা conventional MBA খুঁজছেন না।",
      "Scholarship না পেলেও ¥2.869m reference academic cost এবং Tokyo living cost cover করার credible financial proof/backup plan বানাতে পারবেন।",
      "2027 guide না আসা পর্যন্ত score validity, dates ও aid ধরে না নিয়ে অন্য realistic applications-ও active রাখবেন।",
    ],
    quickStart: [
      "Official Examination page bookmark করে September 2027 guideline publication-এর monthly reminder বসান; current page-এ spring intake নেই, 2027 page এলে recheck করুন।",
      "IELTS Academic 5.5-এর নিচে হলে accepted test book করুন; score validity এমন রাখুন যেন future 2027 deadline-এর দিন দুই বছরের মধ্যে থাকে।",
      "Problem → affected people/institution → evidence gap → proposed method → policy impact—এই পাঁচ heading-এ English concept note লিখুন।",
      "Degree/transcript, signed recommendation, passport/residence card, notarized translation এবং financial proof-এর document tracker এখনই বানান।",
    ],
    steps: [
      {
        title: "2027 status ও সঠিক admission route lock করুন",
        timing: "Now · guide প্রকাশ না হওয়া পর্যন্ত monthly check",
        description:
          "Ordinary self-funded MPP application এবং MEXT Embassy Recommendation দুইটি আলাদা calendar ও selection chain। প্রথমে নিজের route লিখে না রাখলে closed date বা ভুল graduate school follow করার ঝুঁকি থাকে।",
        actions: [
          "Self-funded হলে International Public Policy Course / Professional Degree Program / September enrollment—এই exact তিনটি label দিয়ে official Examination page monitor করুন।",
          "2027 guide প্রকাশ হলে application opening, arrival deadline, exam, result ও payment date সরাসরি PDF থেকে calendar-এ নিন; 2026 dates copy করবেন না।",
          "MEXT চাইলে নিজের nationality/home-country Japanese embassy-এর next Research Students call দিয়ে শুরু করুন; Meiji ordinary admission portal থেকে MEXT চাওয়া যায় না।",
          "Eligibility বা publication timing অস্পষ্ট হলে gabaken@mics.meiji.ac.jp-এ one-email-one-question format-এ লিখুন; self-funded route-এ prior professor consent latest guide-এ required ছিল না।",
        ],
        readyWhen:
          "আপনার route, exact program name ও source links এক পাতায় আছে এবং 2027 PDF প্রকাশ হলে কোন পাঁচটি item recheck করবেন তা লেখা।",
      },
      {
        title: "English ও degree eligibility evidence প্রস্তুত করুন",
        timing: "4–8 months before expected application",
        description:
          "2026 guide useful planning baseline, কিন্তু 2027 guide-ই final authority। Minimum score-এর পাশাপাশি accepted test version, original report এবং issue-date rule ঠিক রাখা জরুরি।",
        actions: [
          "IELTS হলে Academic Module নিন; General Training নয়। 2026 rule-এ original IELTS Report Form লাগত। TOEFL official score ETS থেকে institution code C318-এ পাঠাতে হতো; নিজের Test Taker/Examinee Score Report যথেষ্ট ছিল না।",
          "TOEIC, ITP বা Home Edition result দিয়ে file ready ভাববেন না; first language English না হলে MOI waiver ধরে test বাদ দেবেন না।",
          "Score report-এ face photo এবং passport-এর সঙ্গে matching name/date of birth আছে কি না check করুন; 2027 delivery rule প্রকাশ হলে আবার মিলান।",
          "Bachelor's/expected degree certificate এবং সব official transcript সংগ্রহ করুন; copy হলে latest guide অনুযায়ী notarization এবং non-English record-এর certified English/Japanese translation করুন।",
          "Education duration/equivalence নিয়ে সন্দেহ থাকলে application period শুরুর অন্তত দুই সপ্তাহ আগে admissions office-কে required form/document দিয়ে pre-check চাইুন।",
        ],
        readyWhen:
          "2027 rule-এর সঙ্গে accepted, valid official English result এবং degree-equivalency evidence line-by-line মেলে।",
      },
      {
        title: "2,000-word Research Proposal ও faculty fit বানান",
        timing: "Draft 8–12 weeks early",
        description:
          "2026 form Personal Statement নামে থাকলেও document heading ‘Research Proposal’ চেয়েছিল এবং maximum 2,000 English words/1.5 spacing ছিল। Technical solution নয়, public-policy problem ও implementable analysis দেখান।",
        actions: [
          "Context, policy problem, research question, literature/evidence gap, method/data, ethics/limitations, expected output এবং career impact—এই structure-এ first draft লিখুন।",
          "Harumichi Yuasa-এর e-government, privacy/data protection, cybersecurity law ও Global Cyber Governance fit দেখুন; technology-policy direction-এ এটি strongest starting point হতে পারে।",
          "Public participation/science-technology policy হলে Masahiro Matsuura; public finance/social welfare হলে Hideaki Tanaka-এর current courses/profile মিলান। এগুলো fit examples—advertised vacancy বা supervision promise নয়।",
          "নিজের software experience-কে feature list না বানিয়ে government/user problem, security/privacy trade-off, affected stakeholders এবং measurable policy outcome-এ translate করুন।",
          "Proposal-এ শুধুই faculty name না লিখে relevant course/research area এবং কেন professional MPP দরকার—সুনির্দিষ্টভাবে justify করুন।",
        ],
        readyWhen:
          "Independent reader problem, question, feasible method, Meiji-specific fit এবং post-MPP impact একবার পড়ে বুঝতে পারেন।",
      },
      {
        title: "Application documents ও postal logistics সম্পূর্ণ করুন",
        timing: "6–10 weeks before deadline",
        description:
          "Latest cycle paper-based arrival deadline ব্যবহার করেছে: কিছু file আগে email করতে হলেও originals নির্দিষ্ট office-এ deadline-এর মধ্যে পৌঁছাতে হতো। Courier transit ও notarization-এর সময় budget করুন।",
        actions: [
          "Latest checklist অনুযায়ী E-1, Form B, two color photos, Research Proposal, degree, transcripts, English score, recommendation, passport এবং non-Japanese applicant-এর financial-support form map করুন। আলাদা CV 2026 checklist-এ ছিল না; E-1-এ education এবং latest two full-time jobs/military-service history চাওয়া হয়েছিল।",
          "Recommender হিসেবে work supervisor বা undergraduate academic supervisor বাছুন; 2026 guide handwritten/physical signature চেয়েছিল এবং digital signature নেয়নি।",
          "Japan resident হলে residence card-এর front/back copy এবং current address/status information প্রস্তুত রাখুন; overseas হলে trackable EMS/DHL-equivalent courier window হিসাব করুন।",
          "Form E-1 ও Research Proposal-এর pre-email rule, original-delivery address এবং ¥35,000 non-refundable payment instruction 2027 PDF থেকে পুনরায় মিলান।",
          "Offer এলে 2026 rule অনুযায়ী guarantor অবশ্যই nominate করতে হতো: Japan-resident parent/relative → Japan-resident acquaintance → শুধু প্রথম দুইটি সম্ভব না হলে overseas parent/relative; 2027 guide-এ recheck করুন।",
        ],
        readyWhen:
          "Checklist-এর প্রতিটি item correct format-এ, courier bufferসহ ready এবং admissions office-এর address/payment rule double-checked।",
      },
      {
        title: "Online essay ও interview practice করুন",
        timing: "4–6 weeks before examination",
        description:
          "Document screening pass করলেই latest route-এ English essay ও Zoom interview ছিল। Reasoning, clear policy argument এবং persuasive explanation programটি গুরুত্ব দেয়।",
        actions: [
          "45 minutes-এ issue, stakeholders, options, evidence, trade-offs, recommendation ও limitationসহ 500–700-word policy response practice করুন।",
          "Proposal-এর problem, method, data access, why Meiji, why professional MPP এবং career impact-এর 60-second ও 3-minute উত্তর তৈরি করুন।",
          "GPA/discipline shift, weak grades বা work-study gap থাকলে factual explanation এবং evidence of readiness প্রস্তুত করুন।",
          "Quiet private room, stable connection, camera, microphone, Zoom এবং browser test করুন; latest guide-এর JST schedule নিজের timezone-এ convert করুন।",
        ],
        readyWhen:
          "Timed mock essay শেষ করতে পারেন এবং follow-up question-এ proposal defend করতে পারেন—memorized script ছাড়াই।",
      },
      {
        title: "Net cost ও scholarship strategy lock করুন",
        timing: "Before submission and again before accepting an offer",
        description:
          "Admission, internal scholarship, JASSO এবং MEXT একই জিনিস নয়। Written award না পাওয়া পর্যন্ত self-funded scenario দিয়েই financial proof ও decision budget বানান।",
        actions: [
          "2026 ¥2,869,000 academic-charge reference-এর সঙ্গে ¥35,000 screening fee, Tokyo rent/deposit, food, transport, insurance, travel, visa এবং emergency buffer যোগ করুন।",
          "Governance Studies scholarship-এর 2027 English-course availability এবং admission-form-এর সঙ্গে apply করার procedure admissions office থেকে confirm করুন।",
          "Post-enrollment Meiji/JASSO aid-এর eligibility, semester window, nomination এবং combination restrictions আলাদা spreadsheet-এ লিখুন।",
          "MEXT-এর default Meiji status non-degree research student; regular MPP-তে যেতে degree entrance exam pass করতে হয়। Direct September MPP entry exceptional—আগে MPP admission এবং case-by-case MEXT approval দুটিই লাগে। University Recommendation চাইবেন না।",
          "Offer letter, scholarship decision ও guarantor/visa requirements না দেখে non-refundable payment বা enrollment decision নেবেন না।",
        ],
        readyWhen:
          "Zero-scholarship এবং confirmed-aid—দুই budget-ই আছে; only written funding দিয়ে net cost কমানো হয়েছে।",
      },
    ],
    checklist: [
      "Official September 2027 guideline and forms",
      "International Public Policy Course / MPP route confirmed",
      "Valid IELTS Academic or accepted TOEFL official score",
      "Application checklist, E-1 and Form B",
      "Two current color ID photos in the required size",
      "Maximum 2,000-word English Research Proposal",
      "Original degree certificate/transcripts, or notarized copies if originals cannot be submitted",
      "Certified English/Japanese translations where required",
      "Work or undergraduate academic supervisor recommendation with a non-digital signature",
      "Passport and Japan residence-card copies where applicable",
      "Financial Support Form and supporting proof",
      "Screening-fee receipt and tracked-delivery plan",
      "Self-funded Tokyo budget and separate scholarship matrix",
      "Timed online essay and interview practice",
    ],
    afterSubmission: [
      "Courier tracking, emailed-file copy, payment receipt এবং admissions acknowledgement এক folder-এ রাখুন; missing-document request daily check করুন।",
      "Document-screening result এবং essay/interview time JST-তে calendar করুন; official instruction ছাড়া exam link share বা অন্য device ব্যবহার করবেন না।",
      "Admission result, school scholarship, Meiji/JASSO aid এবং MEXT status আলাদা column-এ track করুন—একটির result অন্যটি নিশ্চিত করে না।",
      "Offer পেলে payment deadline, fee breakdown, guarantor, residence/visa, orientation এবং September arrival plan লিখিত documents থেকে মিলান।",
    ],
    cautions: [
      "Older Meiji brochure/general page-এ IELTS 6.0 / TOEFL 79 থাকতে পারে; later cycle-specific amended 2026 guide-এ 5.5 / old-scale 72 (বা new-scale 4.0)। TOEFL transition-date wording ambiguous; 2027 guide প্রকাশ হলে সেটিই final authority।",
      "September 2026 application closed; 20 March–3 April datesকে September 2027 deadline হিসেবে ব্যবহার করবেন না। Spring intake নেই।",
      "Minimum English score, no numerical GPA floor বা no GRE/GMAT—কোনোটিই admission সহজ বা guaranteed করে না; latest route-এ capacity ছিল মাত্র ‘a few students’।",
      "Governance Studies MPP-কে similarly named Global Governance doctorate, technical CS master's বা MBA-এর সঙ্গে mix করবেন না।",
      "Faculty profiles research-fit examples; open vacancy, guaranteed supervisor acceptance বা application-এর আগে professor approval requirement বোঝায় না। Official eligibility contact হলো Governance Studies Desk।",
      "School/university/JASSO aid competitive এবং rules বদলাতে পারে; MEXT Embassy Recommendation-only এবং ordinary admission-এর automatic funding নয়।",
      "Japan residence একা universal MEXT disqualification নয়; তবে Bangladesh embassy first screening, current-student exclusion, Student-visa/re-entry এবং return/arrival rules সব pass করতে হয়। 2027 initial Bangladesh call closed বলে এখন নতুন করে actionable নয়।",
      "12 August 2026-এ MEXT 2027-এর initial embassy application নতুন করে শুরু করার সুযোগ নেই; first screening pass না করলে next country-specific cycle-এর জন্য প্রস্তুতি নিন।",
    ],
    officialLinks: [
      { label: "MPP examination page", href: "https://www.meiji.ac.jp/cip/english/graduate/governance/examination.html", description: "September intake status, new guideline, forms ও official contact monitor করুন।" },
      { label: "Latest amended 2026 guide", href: "https://www.meiji.ac.jp/cip/english/graduate/governance/enjsp30000009iie-att/a1772498746287.pdf", description: "IELTS/TOEFL, selection, documents, past dates, fee ও guarantor rules-এর planning reference।" },
      { label: "TOEFL scoring amendment", href: "https://www.meiji.ac.jp/cip/english/graduate/governance/news/exam2026.html", description: "Old 72 এবং new 4.0 scale-এর official clarification পড়ুন।" },
      { label: "Program and curriculum", href: "https://www.meiji.ac.jp/cip/english/graduate/governance/", description: "Professional MPP, English track, curriculum এবং school structure বুঝুন।" },
      { label: "Governance Studies scholarship", href: "https://www.meiji.ac.jp/mugs2/fellowship/scholarship.html", description: "April 2025-dated school scholarship reference দেখুন; English IPP/2027 applicability লিখিতভাবে recheck করুন।" },
      { label: "International-student financial aid", href: "https://www.meiji.ac.jp/cip/english/admissions/financial.html", description: "Meiji, JASSO ও other competitive aid-এর current conditions দেখুন।" },
      { label: "MEXT Embassy route", href: "https://www.meiji.ac.jp/cip/english/graduate/governance/mextscholarship.html", description: "Embassy-only route এবং conditional direct MPP arrangement বুঝুন।" },
      { label: "MEXT 2027 provisional acceptance", href: "https://www.meiji.ac.jp/cip/prospective/mext_er/japanese.html", description: "First-screening-pass requirement, default research-student status ও 1 September 2026 JST Meiji deadline দেখুন।" },
      { label: "Bangladesh MEXT status", href: "https://www.bd.emb-japan.go.jp/itpr_ja/00_000706.html", description: "Bangladeshi applicant-এর MEXT 2027 Research Students application closed status দেখুন।" },
      { label: "MEXT 2027 Research guidelines", href: "https://www.bd.emb-japan.go.jp/files/101020577.pdf", description: "Nationality, Japan-residence/student-status, visa, stipend, fee waiver ও airfare conditions পড়ুন।" },
      { label: "Current faculty", href: "https://www.meiji.ac.jp/cip/english/graduate/governance/faculty.html", description: "Yuasa, Matsuura, Tanaka ও অন্যান্য faculty-এর current fields/courses যাচাই করুন।" },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "tumsat-logistics-information-masters-2027",
    country: "japan",
    university: "Tokyo University of Marine Science and Technology",
    title: "TUMSAT Maritime Technology & Logistics: April 2027 Second-Round Guide",
    summary:
      "IELTS 5.5 English-paper exemption, mandatory supervisor consent, exact late-2026 schedule, English-degree pathway, technical examination, Takanori Sakai fit এবং national-university budget-এর verified guide।",
    label: "Guide due late October · Technical selection",
    funding:
      "Self-funded admission route by default। Eligible high-need/high-achievement students competitive admission-fee and tuition exemptions পেতে পারেন; JASSO/private awards ও MEXT আলাদা processes এবং ordinary admission-এর সঙ্গে guaranteed নয়।",
    duration: "2 years · April 2027 · Etchujima-based course; second-round exam venue pending final guide",
    audience:
      "Japan-resident international applicants from CS, software, information, engineering, logistics, transport, operations research, economics or quantitative backgrounds",
    realityCheck:
      "Official degree route হলো Course of Maritime Technology and Logistics—undergraduate ‘Logistics and Information Engineering’ department নয়। First round বন্ধ; second-round detailed guide late October 2026-এ expected এবং first round-এ capacity পূর্ণ হলে courseটি second round নাও নিতে পারে। Published schedule: eligibility screening (শুধু applicable nonstandard credentials) 12 November পর্যন্ত, application 30 November–3 December, campus examination 2–3 February 2027, result 4 March এবং enrollment 8–16 March। IELTS Overall 5.5 written Foreign Language paper waive করে uniform 80/100 দেয়, কিন্তু basic subject, intended supervisor-এর special subject, oral, transcript বা documents waive করে না। TUMSAT international-selection FAQ English-only degree completion সম্ভব বলে; তবু AY2027 guide সতর্ক করে কিছু course oral Japanese-এ নিতে পারে। তাই chosen supervisor থেকে oral, supervision, 30-credit course plan, thesis ও final examination English-এ হবে—এমন written confirmation ছাড়া এটিকে frictionless English CSE option ভাববেন না।",
    highlights: [
      "Graduate course-এর six official study areas হলো Information Systems Engineering, Environment System Engineering, Marine Technology, Marine Safety Technology (Cooperative laboratory), Logistics System Engineering এবং Logistics Management and Economics।",
      "April-2027 Course capacity 32 হলো General + International + Working-adult selection মিলিয়ে total maximum—second round বা international applicants-এর 32 seats নয়। First-round fill অনুযায়ী second round বাতিল হতে পারে।",
      "Exact planning dates: late-October guide; applicable হলে eligibility screening by 12 November 2026; application 30 November–3 December; exam 2–3 February 2027; result 4 March; enrollment 8–16 March।",
      "Prospective supervisor-এর consent application-এর আগে mandatory। Applicant নিজে contact করে research plan ও willingness discuss করবেন; signature/stamp লাগে না, কারণ Admissions professor-এর approval directly verify করে।",
      "IELTS Overall Band Score 5.5+, TOEIC L&R 700+ (public or IP, কিন্তু online IP নয়), অথবা old TOEFL iBT 72+ taken on/before 20 January 2026 foreign-language written paper waive করে 80/100 দেয়।",
      "21 January 2026 বা পরে taken TOEFL iBT-এর জন্য new-scale Overall Score 4+ threshold। Score application deadline থেকে preceding two years-এর মধ্যে হতে হবে এবং final guide-এর original/official evidence method-এ সময়মতো পৌঁছাতে হবে।",
      "MOI foreign-language-test substitute হিসেবে listed নয়। GRE/GMATও admission documents/selection-এ listed নয়। IELTS exemption শুধু English paper—technical selection নয়।",
      "International route-এ basic/special subjects Japanese অথবা English-এ answer করা যায়। Foreign-language paper Japanese-printed; exempt হলে সেই paper এড়ানো যায়। কিছু major oral Japanese-এ করতে পারে, তাই language confirmation জরুরি।",
      "Current first-round reference-এ selection হলো basic written subject + consenting supervisor-এর special subject + foreign language unless exempt + oral + transcript/documents। Final second-round PDF exam structure-এর authority।",
      "Maritime Technology & Logistics basic coverage: Information Systems Engineering, Environmental Systems Engineering, Marine Technology, Logistics Systems Engineering, Logistics Management and Economics, Marine Safety Technology এবং mathematics—Linear Algebra, Calculus ও Ordinary Differential Equations।",
      "Associate Professor Takanori Sakai current AY2027 graduate supervisor: Logistics System Engineering / Advanced Transportation Planning; verified email tsakai2@kaiyodai.ac.jp। Strongest fit urban freight, freight modelling, agent-based simulation, e-commerce/last-mile, GPS/sensing/camera/delivery big data এবং smart transportation।",
      "Current fees: ¥30,000 exam + ¥282,000 admission + ¥535,800/year tuition = ¥1,383,600 two-year base academic cost; insurance, books/practical work, travel, housing এবং future revision extra।",
    ],
    fit: [
      "Recognized bachelor/16-year education আছে। Qualifying 3+ year foreign bachelor-equivalent route হলে advance Admissions consultation করবেন; 15-year/other nonstandard category হলে applicable eligibility-screening process ও 12 November deadline follow করবেন।",
      "Software/data skillsকে urban freight, transport planning, logistics information, optimization, spatial data বা mobility systems problem-এ প্রয়োগ করতে চান।",
      "IELTS 5.5+ official evidence আছে, কিন্তু technical written subjects ও oral-এর জন্য আলাদা preparation করবেন।",
      "Linear algebra, calculus, ODE এবং information/logistics/marine-safety fundamentals-এর broad exam coverage revise করতে প্রস্তুত।",
      "Sakai বা অন্য current supervisor-এর research-এর সঙ্গে specific problem/method/data fit দেখিয়ে pre-application consent নিতে পারবেন।",
      "English-only plan writtenভাবে confirm করবেন এবং scholarship না পেলেও national-university tuition + Tokyo living cost cover করার plan আছে।",
    ],
    quickStart: [
      "Admissions office n-nyusi2@o.kaiyodai.ac.jp-কে residence/status details দিয়ে International না General route—written confirmation জিজ্ঞাসা করুন; Japan-এ থাকা একাই route নির্ধারণ করে না।",
      "Takanori Sakai-এর lab/recent work পড়ে 1-page urban-freight/logistics-data concept noteসহ tsakai2@kaiyodai.ac.jp-এ consent inquiry প্রস্তুত করুন।",
      "IELTS 5.5 exemption evidence-এর test date, original/copy availability এবং 3 December 2026 delivery feasibility এখনই যাচাই করুন; MOI দিয়ে replace করবেন না।",
      "Late-October guide release alert দিন এবং meantime linear algebra, calculus, ODE, information systems, logistics/economics ও intended special subject-এর weekly plan শুরু করুন।",
    ],
    steps: [
      {
        title: "Route, second-round availability ও supervisor consent নিশ্চিত করুন",
        timing: "Now–October 2026",
        description:
          "Nationality, residence status এবং purpose of stay route choice-এ matter করে। Permanent resident বা work-status applicant নিজে International route assume করবেন না; course second round নিচ্ছে কি না এবং supervisor consent—দুইটিই application gate।",
        actions: [
          "Admissions-কে nationality, residence status/expiry, current activity এবং intended April-2027 course লিখে General বনাম International selection জিজ্ঞাসা করুন।",
          "Late-October publication-এর পর Maritime Technology & Logistics second round actually recruiting কি না first page/seat notice দিয়ে verify করুন।",
          "Sakai direction হলে city logistics/urban freight-এর one research question, data source, method এবং evaluation metric লিখুন; generic ‘Marine AI’ pitch দেবেন না।",
          "CV, transcript snapshot ও concise concept note দিয়ে supervisor consent নিন; oral/supervision/thesis/30 credits English-এ সম্ভব কি না একই thread-এ জিজ্ঞাসা করুন।",
        ],
        readyWhen:
          "Correct selection route, actual second-round recruitment, professor consent এবং complete English study path writtenভাবে confirmed।",
      },
      {
        title: "English exemption ও application evidence ঠিক করুন",
        timing: "August–November 2026",
        description:
          "IELTS 5.5 valuable কারণ Japanese-printed Foreign Language paper এড়ায়। কিন্তু threshold, two-year validity, original report এবং deadline delivery—সব condition একসঙ্গে পূরণ করতে হবে।",
        actions: [
          "IELTS Overall Band 5.5+, TOEIC L&R 700+, অথবা test-date-specific TOEFL threshold final table-এর সঙ্গে মিলান।",
          "Score 3 December 2026 application-period last day থেকে preceding two years-এর মধ্যে আছে কি না নিশ্চিত করুন।",
          "Final guide অনুযায়ী original + copy/official report submission arrange করুন; downloaded result বা MOI sufficient ধরে file বন্ধ করবেন না।",
          "Exemption award 80/100 এবং basic/special/oral remaining—এই scoring reality preparation tracker-এ লিখুন।",
        ],
        readyWhen:
          "Accepted test/version, valid date এবং prescribed original-report delivery ready; foreign-language exemption ছাড়া remaining exams mapped।",
      },
      {
        title: "Basic, special ও oral examination প্রস্তুত করুন",
        timing: "September 2026–February 2027",
        description:
          "Broad basic paper এবং supervisor-specific special subject এই option-এর প্রধান hurdle। Software background থাকলেও logistics/economics/marine context এবং mathematics defend করতে হবে।",
        actions: [
          "Linear algebra, single/multivariable calculus, ODE এবং quantitative reasoning-এর gap audit ও weekly problem set করুন।",
          "Information systems, environmental systems, marine technology/safety, logistics systems এবং management/economics-এর concept map বানান।",
          "Supervisor-এর special subject ‘Advanced Transportation Planning’/final prospectus coverage এবং official past questions দিয়ে timed practice করুন।",
          "Oral-এর জন্য graduation work, reason/research plan, method/data feasibility, English study readiness এবং research commitment practice করুন।",
        ],
        readyWhen:
          "Basic এবং special timed answers stable; proposal Japanese ছাড়াই explain করা যাবে বলে supervisor/department confirmed এবং oral mock defensible।",
      },
      {
        title: "Final second-round guide দিয়ে application submit করুন",
        timing: "Eligibility if applicable by Nov 12 · apply Nov 30–Dec 3, 2026",
        description:
          "Internet registration alone application complete করে না। Fee payment, uploads এবং prescribed paper/original delivery final guide-এর exact window-এ শেষ করতে হবে।",
        actions: [
          "Final M2 guide-এ course offered, selection category, basic/special/oral format, exam campus এবং document list line-by-line mark করুন।",
          "Application/photo, degree/graduation evidence, transcript, international-route recommendation, IELTS original/copy এবং translations প্রস্তুত করুন।",
          "Japan resident হিসেবে in-person submission হলে original residence card, post হলে original juminhyo/certificate-of-residence rule follow করুন।",
          "¥30,000 fee pay করে online registration, uploads এবং physical submission 3 December-এর আগে bufferসহ শেষ করুন; printed Applicant ID Card রাখুন।",
        ],
        readyWhen:
          "Supervisor approval verified, every online/paper item submitted, fee paid এবং 2–3 February campus exam logistics confirmed।",
      },
      {
        title: "Result, funding ও enrollment decision নিন",
        timing: "Result Mar 4 · enrollment Mar 8–16, 2027",
        description:
          "Admission offer scholarship নয়। Short enrollment window-এর আগে full-cost এবং exemption scenarios আলাদা হিসাব করুন।",
        actions: [
          "¥1,383,600 current two-year base-এর সঙ্গে insurance/materials, commute/housing, food, device এবং emergency reserve যোগ করুন।",
          "Admission-fee exemption/deferment enrollment procedure-এর সময় এবং tuition exemption April-এ apply করার current rules recheck করুন।",
          "JASSO/private/institutional awards আলাদাভাবে apply/nomination track করুন; written award না পাওয়া পর্যন্ত income হিসেবে ধরবেন না।",
          "Supervisor, English path, total cash requirement ও actual funding মিলিয়ে 16 March-এর আগে accept/decline করুন।",
        ],
        readyWhen:
          "Offer, supervisor/English plan, enrollment payment deadline এবং scholarship ছাড়া complete budget দেখে informed decision নিতে পারেন।",
      },
    ],
    checklist: [
      "Late-October AY2027 second-round guide",
      "Written General/International route confirmation",
      "Course second-round recruitment confirmation",
      "Mandatory supervisor consent",
      "Written English oral/supervision/course/thesis plan",
      "Degree/graduation certificate and official transcript",
      "International-route recommendation letter if applicable",
      "Research plan/reason for application",
      "Valid IELTS/TOEIC/TOEFL official original evidence",
      "Passport and Japan residence evidence",
      "Required Japanese/English translations",
      "¥30,000 examination-fee payment",
      "Basic-subject preparation",
      "Supervisor-specific special-subject preparation",
      "Oral examination question bank",
      "Printed Applicant ID Card",
      "Two-year self-funded and exemption budget",
    ],
    afterSubmission: [
      "Portal/email monitor করুন; application accepted হলে printable Applicant ID Card ও detailed exam schedule check করুন।",
      "2–3 February-এর exact assigned paper/oral time, Shinagawa/Etchujima venue এবং allowed materials final notice থেকে verify করুন।",
      "IELTS exemption confirmed হলেও basic, special ও oral practice চালিয়ে যান।",
      "Offer পেলে admission-fee/tuition exemption, JASSO ও private scholarship প্রতিটি আলাদা deadline-এ track করুন।",
    ],
    cautions: [
      "Second round scheduled হলেও Maritime Technology & Logistics recruit করবে—এটি guaranteed নয়; first-round capacity পূর্ণ হলে courseটি round বাতিল করতে পারে।",
      "IELTS 5.5 admission guarantee, English-proficiency waiver বা technical-test waiver নয়—শুধু Foreign Language written paper exemption এবং fixed 80/100।",
      "Old/new TOEFL scales mix করবেন না: through 20 Jan 2026 iBT 72+, from 21 Jan 2026 Overall Score 4+।",
      "MOI current external-English rule-এ substitute নয়; GRE/GMATও technical selection replace করে না।",
      "Official FAQ English-only degree possible বললেও AY2027 guide কিছু oral Japanese-এ হতে পারে বলে সতর্ক করে; written course-specific confirmation নিন।",
      "Takanori Sakai current verified match, advertised funded vacancy নয়; consent, second-round capacity এবং scholarship আলাদা decisions।",
      "Japan residence automatic International-route eligibility নয়; permanent/work/other status হলে Admissions-এর written answer ছাড়া category বাছবেন না।",
      "Course title Maritime Technology and Logistics; ‘Logistics and Information Engineering’ undergraduate affiliation দিয়ে graduate application label করবেন না।",
    ],
    officialLinks: [
      { label: "Official graduate schedule", href: "https://www.kaiyodai.ac.jp/entranceexamination/graduate/schedule/", description: "Late-October release, Nov 30–Dec 3 application, Feb 2–3 exam ও capacity caveat verify করুন।" },
      { label: "AY2027 guide hub", href: "https://www.kaiyodai.ac.jp/entranceexamination/graduate/requirements/", description: "Second-round final Japanese/English PDF প্রকাশ হলে এখান থেকে download করুন।" },
      { label: "AY2027 first-round English guide", href: "https://www.kaiyodai.ac.jp/upload-file/2027M1_E.pdf", description: "Eligibility, consent, documents, English rules, selection scope ও current supervisors planning reference হিসেবে পড়ুন।" },
      { label: "External English test rules", href: "https://www.kaiyodai.ac.jp/entranceexamination/graduate/toeic/", description: "IELTS/TOEIC/old-new TOEFL thresholds, validity ও 80-point treatment verify করুন।" },
      { label: "Graduate admission FAQ", href: "https://www.kaiyodai.ac.jp/en/entranceexamination/graduate/faq/", description: "English-only completion, oral-language caveat, score submission ও fee-aid answers পড়ুন।" },
      { label: "Maritime Technology and Logistics course", href: "https://www.g2.kaiyodai.ac.jp/cmtl5/english/about.html", description: "Official graduate-course identity, education ও research scope দেখুন।" },
      { label: "Takanori Sakai official profile", href: "https://tumsatdb.kaiyodai.ac.jp/html/100000907_en.html", description: "Current affiliation, publications এবং urban-freight/city-logistics fit দেখুন।" },
      { label: "Takanori Sakai laboratory", href: "https://www2.kaiyodai.ac.jp/~tsakai2/", description: "Current team, research projects এবং verified tsakai2@kaiyodai.ac.jp contact দেখুন।" },
      { label: "Official TUMSAT fees", href: "https://www.kaiyodai.ac.jp/campuslife/fee/", description: "¥30,000 exam, ¥282,000 admission, ¥535,800 annual tuition ও support notices verify করুন।" },
      { label: "International scholarship notices", href: "https://www.kaiyodai.ac.jp/international/foreignstudents/", description: "Current private/JASSO/institutional scholarship calls আলাদাভাবে monitor করুন।" },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "nucb-msc-management-scholarships-2027",
    country: "japan",
    university: "NUCB Business School",
    bestFitPriority: 6,
    businessPriority: 5,
    englishBusinessPrograms: "Global MBA · MSc in Management · Business Analytics & AI",
    businessOfficialUrl: "https://mba.nucba.ac.jp/en/program/",
    title: "NUCB MSc in Management: Spring/Fall 2027 Admission & Funding Guide",
    summary:
      "Nagoya-তে সম্পূর্ণ English Case Method MSc in Management-এর 2027 rounds, exact English threshold/English-degree waiver, documents, written essay + interview, high tuition এবং semester-by-semester scholarship reality নিয়ে বিস্তারিত guide। আলাদা MSc in Business Analytics & AI route-টিও পরিষ্কারভাবে তুলনা করা হয়েছে।",
    label: "Chubu/Kansai Private #189 · English-confirmed · IELTS 6.0/English-degree waiver",
    funding:
      "মূল route self-funded। Pre-enrollment Achievement Scholarship প্রথম semester-এর tuition 20%, 40% বা 80% কমাতে পারে, কিন্তু GMAT/GRE threshold, selection এবং প্রতি-semester renewal conditions পূরণ করতে হয়; এটি দুই বছরের guaranteed award নয়।",
    duration: "2 years · April or September intake · Nagoya campus",
    audience:
      "Software/IT বা অন্য bachelor background থেকে English-medium management, international business, digital transformation অথবা business-analytics career-এ যেতে চান—এমন applicants",
    realityCheck:
      "MSc in Management (MiM) একটি 100% English, Nagoya-campus weekday pre-experience management program; Tokyo-campus program নয়। MiM admission-এর জন্য GMAT/GRE লাগে না, কিন্তু IELTS 6.0 বা accepted equivalent দরকার—IELTS 5.5 একা threshold পূরণ করে না। পুরো bachelor বা master degree program English-এ taught হলে official rule অনুযায়ী English-test requirement waived হয়; preliminary screening-এ submitted institutional evidence পুরো-degree condition প্রমাণ করছে কি না confirm করুন। Published 2027 school cost Year 1 ¥1,820,000 (¥270,000 admission fee-সহ) + Year 2 ¥1,550,000 = ¥3,370,000 before living costs; তাই scholarship না পেলেও অর্থায়ন সম্ভব কি না আগে হিসাব করুন।",
    highlights: [
      "MiM: Master of Science in Management, 2 years, 100% English, Nagoya campus, weekday classes এবং discussion-heavy Case Method। April ও September—দুই intake আছে।",
      "Formal eligibility: recognized bachelor/equivalent এবং সাধারণভাবে 16 years of education। MiM-এর জন্য 3 years work experience বাধ্যতামূলক নয় এবং public rule-এ hard GPA cutoff নেই।",
      "MiM admission-এ GMAT/GRE required নয়। MSc in Business Analytics & AI (MSBA) আলাদা English program; সেখানে GMAT/GRE required, তবে waiver request করা যায়। দুই route-এর rules মেশাবেন না।",
      "English thresholds: IELTS 6.0, TOEFL iBT 80, TOEFL PBT 550, TOEIC 800, Duolingo 115, PTE Academic 55 অথবা Cambridge CPE 169।",
      "পুরো bachelor বা master program English-এ taught হলে English-test waiver আছে। শুধু কয়েকটি English course, generic MOI বা workplace English যথেষ্ট ধরে নেবেন না; official letter-এ entire degree English-medium ছিল তা স্পষ্ট হওয়া উচিত।",
      "As of August 12, 2026, first application window open: July 26–October 24; exam October 30–31। Second: October 25–December 12; exam December 18–19। Deadline 18:00 JST।",
      "Later rounds: December 13–January 30; exam February 5–6 এবং January 31–February 27; exam March 5–6। Starred restriction অনুযায়ী earlier semester-এর জন্য এগুলো কেবল enrollment-এ visa sponsorship প্রয়োজন হবে না—এমন applicants ব্যবহার করতে পারেন; Japan-এ থাকলেই automatic qualification নয়।",
      "MiM selection শুধু documents/interview নয়: application-file review, faculty interview এবং timed written essay থাকে। Outside-Japan applicants-এর enrollment examination Zoom-এ conducted হয়; Japan-resident applicant-এর venue/mode individual instruction থেকে confirm করতে হবে।",
      "Core application file-এ তিন পৃষ্ঠার essay-question answers, দুইটি signed recommendation, transcript/degree proof, Financial Status Letter, health certificate এবং English proof লাগে। CV MiM-এ recommended, required নয়।",
      "2027 published total school fee ¥3,370,000: Year 1 ¥1,820,000-এর মধ্যে ¥270,000 admission fee আছে; Year 2 ¥1,550,000। Screening fee ¥36,000 + card payment administration ¥850 আলাদা।",
      "Achievement Scholarship-এর 80%/40%/20% level প্রথম-semester tuition reduction। Published test thresholds যথাক্রমে GMAT 720/640/560, GMAT Focus 675/595/535 অথবা GRE 330/320/310; admission-এ test না লাগলেও এই award-এর জন্য লাগে।",
      "Professor Ricardo Lim current NUCB faculty এবং Design Thinking, Quantitative Analysis, Operations, digitalization ও AI-for-competitive-advantage-এর strong MSBA fit। কিন্তু তাঁকে MiM research supervisor বা pre-application approval target বলা ঠিক নয়; admission centralized।",
    ],
    fit: [
      "Research-heavy Computer Science degree নয়; business judgement, management, leadership ও digital transformation শিখতে চান।",
      "IELTS 6.0-equivalent score আছে, অথবা bachelor/master-এর পুরো program English-medium ছিল—এমন শক্ত institutional evidence আছে।",
      "MiM-এর Case Method discussion, timed essay এবং faculty interview-এর জন্য English-এ দ্রুত যুক্তি সাজাতে পারেন।",
      "Software project-কে revenue, customer value, operations, strategy বা organizational change-এর ভাষায় explain করতে পারেন।",
      "AI/data-oriented career চাইলে আলাদা MSBA-এর GMAT/GRE requirement বা waiver process সামলাতে প্রস্তুত।",
      "Scholarship zero বা renewal হারানোর scenario-তেও tuition এবং living cost cover করার বাস্তব plan আছে।",
    ],
    quickStart: [
      "MiM নাকি MSBA—আগে ঠিক করুন: management conversion-এর জন্য MiM; analytics/AI-heavy business path-এর জন্য MSBA, যার test rule আলাদা।",
      "IELTS 6.0 না থাকলে entire-English degree letter, transcript ও degree certificate দিয়ে preliminary screening-এ waiver evidence acceptable কি না লিখিতভাবে confirm করুন।",
      "October 24, 18:00 JST round target করে দুই recommender, three-page essay answers, financial proof ও health certificate এখনই শুরু করুন।",
      "No-award, first-semester partial award এবং renewal-lost—এই তিন scenario-তে দুই বছরের cash-flow budget তৈরি করুন।",
    ],
    steps: [
      {
        title: "MiM ও MSBA route আলাদা করে বাছুন",
        timing: "এখনই · application শুরুর আগে",
        description:
          "দুইটিই English ও Nagoya-campus program হলেও admission tests, curriculum এবং career outcome এক নয়। আপনার software background alone route নির্ধারণ করে না।",
        actions: [
          "MiM curriculum-এ strategy, marketing, finance, accounting, operations ও Case Method workload দেখুন।",
          "MSBA curriculum-এ analytics, AI ও quantitative work আপনার লক্ষ্য হলে GMAT/GRE score আছে কি না দেখুন; না থাকলে waiver eligibility admissions-এ জিজ্ঞাসা করুন।",
          "Tokyo নয়—Nagoya-তে weekday attendance, relocation/commute ও work-permission feasibility হিসাব করুন।",
          "Program office entry@gsm.nucba.ac.jp-এ applicant category, intake এবং route-related প্রশ্ন এক email-এ পরিষ্কারভাবে পাঠান।",
        ],
        readyWhen: "একটি program, একটি intake এবং তার exact admission rule লিখিতভাবে নির্ধারিত।",
      },
      {
        title: "English eligibility ও preliminary screening সম্পন্ন করুন",
        timing: "August–September 2026",
        description:
          "MiM-এর normal floor IELTS 6.0; 5.5 দিয়ে direct threshold পূরণ হয় না। Waiver কেবল entire English-taught bachelor/master degree-এর evidence-এর ওপর নির্ভর করবে।",
        actions: [
          "Valid IELTS/TOEFL/TOEIC/Duolingo/PTE/Cambridge result থাকলে official threshold ও validity rule মিলান।",
          "Waiver route-এ university-issued letter নিন, যেখানে পুরো degree program-এর instruction English-এ ছিল—এটি সরাসরি লেখা থাকে।",
          "Degree certificate, transcript ও letter preliminary screening-এ দিয়ে sufficiency লিখিতভাবে confirm করুন; generic MOI automatic waiver ধরে submit করবেন না।",
          "IELTS 5.5 এবং waiver evidence দুটো থাকলে কোনটি submit করলে application complete হবে—admissions-এর guidance সংরক্ষণ করুন।",
        ],
        readyWhen: "Accepted score অথবা approved entire-English-degree evidence application-ready।",
      },
      {
        title: "Complete admission packet তৈরি করুন",
        timing: "October 24 deadline-এর অন্তত 3–4 সপ্তাহ আগে",
        description:
          "NUCB profile-এ academic readiness, career logic, professional impact, financial readiness এবং recommenders-এর independent evidence একসঙ্গে দেখে।",
        actions: [
          "Official essay questions-এর উত্তর সর্বমোট তিন পৃষ্ঠায় লিখুন; generic SOP দিয়ে replace করবেন না।",
          "দুই recommender-কে signed recommendation সরাসরি prescribed process-এ পাঠাতে বলুন এবং deadline buffer দিন।",
          "Bachelor graduation/expected certificate, full transcript ও English certified translation প্রয়োজন হলে ব্যবস্থা করুন।",
          "Passport, health certificate, Financial Status Letter, photo এবং Japan-resident হলে residence card প্রস্তুত করুন।",
          "MiM CV optional হলেও quantified software/business impact, leadership ও cross-functional work দেখাতে concise CV দিন।",
        ],
        readyWhen: "Portal fields, three-page answers, দুই recommendation এবং সব official evidence complete।",
      },
      {
        title: "Best 2027 round-এ submit ও assessment প্রস্তুতি নিন",
        timing: "Round 1: Jul 26–Oct 24, 18:00 JST · exam Oct 30–31",
        description:
          "Early round visa, housing এবং funding planning-এর জন্য বেশি সময় দেয়। Round 2-এর deadline December 12; late-round visa-sponsorship restriction আগে বুঝে নিন।",
        actions: [
          "Screening fee ¥36,000 এবং credit-card administration ¥850 budget করুন।",
          "Portal-এ April/September intake, MiM/MSBA এবং applicant category final submission-এর আগে পুনরায় মিলান।",
          "Timed English essay practice করুন: thesis, evidence, counterargument এবং recommendation সীমিত সময়ে সাজান।",
          "Faculty interview-এর জন্য why NUCB, why now, leadership failure, ethical dilemma, software-to-business transition এবং career ROI-এর concise answers তৈরি করুন।",
          "Outside-Japan Zoom rule নিজের ক্ষেত্রে প্রযোজ্য ধরে নেবেন না; Japan-resident interview venue/mode instruction follow করুন।",
        ],
        readyWhen: "Submission accepted, assessment date/mode confirmed এবং timed essay + mock interview complete।",
      },
      {
        title: "Scholarship ও offer-কে semester-by-semester যাচাই করুন",
        timing: "Application থেকে enrollment decision পর্যন্ত",
        description:
          "Headline 'up to 80%' পুরো দুই বছরের fee waiver নয়। Award scope, first payment এবং renewal GPA/attendance বুঝে net cost সিদ্ধান্ত নিতে হবে।",
        actions: [
          "Achievement Scholarship চাইলে required scholarship form, personal statement এবং qualifying GMAT/GRE evidence দিন।",
          "80% renewal reference-এ GPA 3.85, প্রতি semester অন্তত 3 non-seminar courses ও 100% attendance লাগে—offer-এর current terms আবার পড়ুন।",
          "Experience Scholarship-এর 10–50% শুধু first-semester tuition-এ; regular-enrollee 60%/30%/10% remission later semester-এর preceding academic review-এর পরে; housing aid ¥25,000/¥40,000 per month-ও preceding-semester performance-based—প্রতিটির eligibility আলাদাভাবে verify করুন।",
          "Bangladesh nationality alone Experience Scholarship eligibility দেয় ধরে নেবেন না এবং JASSO nomination-কে confirmed income ধরবেন না।",
          "Award renew না হলে পরের semester payment কীভাবে হবে—bank balance ও sponsor plan-এ তা দেখান।",
        ],
        readyWhen: "Offer letter, first-semester reduction, renewal rule এবং worst-case two-year funding—সব লিখিতভাবে পরিষ্কার।",
      },
    ],
    checklist: [
      "MiM বা MSBA এবং April/September intake selection",
      "Preliminary-screening response",
      "IELTS 6.0-equivalent score বা approved entire-English-degree proof",
      "Three-page official essay-question answers",
      "Bachelor degree/graduation certificate",
      "Complete academic transcript",
      "Required certified English translation",
      "দুইটি signed recommendation sent directly",
      "Passport copy ও recent photo",
      "Japan-resident applicant-এর residence card",
      "Health certificate",
      "Financial Status Letter ও funding evidence",
      "MiM-এর recommended CV",
      "MSBA হলে GMAT/GRE অথবা approved waiver",
      "¥36,000 screening fee + ¥850 card fee",
      "Timed written-essay practice",
      "Faculty-interview practice",
      "No-award ও renewal-loss budget",
    ],
    afterSubmission: [
      "Applicant portal, registered email এবং spam folder নিয়মিত দেখুন; assessment date, mode বা extra-document request miss করবেন না।",
      "Timed written essay-এর জন্য current business/technology cases পড়ুন এবং 30–45 মিনিটের evidence-based response practice করুন।",
      "Offer এলে admission decision, tuition invoice এবং scholarship decision একই document কিনা যাচাই করুন; headline percentage দিয়ে net cost অনুমান করবেন না।",
      "Residence-status/visa sponsorship লাগলে late-round restriction এবং Certificate of Eligibility timeline admissions-এর সঙ্গে confirm করুন।",
      "Enrollment-এর সময় NUCB JASSO consideration করতে পারে, কিন্তু nomination/selection guaranteed নয়; upfront funds ready রাখুন।",
    ],
    cautions: [
      "IELTS 5.5 MiM-এর published IELTS 6.0 threshold পূরণ করে না। Entire English-taught degree waiver approved না হওয়া পর্যন্ত formal English eligibility confirmed নয়।",
      "MiM ও MSBA আলাদা program: MiM admission-এ GMAT/GRE নেই; MSBA-তে test required unless waiver approved।",
      "MiM Nagoya-campus weekday program। Website footer-এ Tokyo campus থাকলেও এই degree-কে Tokyo option হিসেবে plan করবেন না।",
      "Late দুই rounds সব Japan-resident applicant-এর জন্য automatic নয়; relevant earlier semester-এ visa sponsorship প্রয়োজন হবে না—এটি NUCB-কে confirm করতে হবে।",
      "CV MiM-এ recommended, required নয়; কিন্তু official essay, দুই recommendation, health/financial documents বাদ দেওয়া যাবে না।",
      "80% award first-semester tuition reduction; admission fee, later semesters এবং renewal failure-এর cost আলাদা।",
      "Regular MiM admission-এর জন্য professor consent লাগে না। Ricardo Lim MSBA-এর relevant faculty হলেও pre-application supervisor বা guaranteed adviser হিসেবে claim করবেন না।",
      "NUCB MEXT University Recommendation nomination দেয় না; ordinary admission-কে MEXT-funded route হিসেবে দেখবেন না।",
      "JASSO, external award, housing aid বা part-time income দিয়ে guaranteed tuition coverage ধরে financial plan করবেন না।",
    ],
    officialLinks: [
      {
        label: "NUCB 2027 admission information",
        href: "https://mba.nucba.ac.jp/en/admission/information/",
        description: "Current rounds, deadlines, test dates, English rules, documents ও screening process মিলান।",
      },
      {
        label: "MSc in Management overview",
        href: "https://mba.nucba.ac.jp/en/program/management/",
        description: "Nagoya-campus English MiM, duration, Case Method ও admission fit দেখুন।",
      },
      {
        label: "MiM curriculum",
        href: "https://mba.nucba.ac.jp/en/program/management/curriculum/courses.html",
        description: "Course list দেখে software-to-management transition-এর বাস্তব academic match যাচাই করুন।",
      },
      {
        label: "MSc Business Analytics & AI",
        href: "https://mba.nucba.ac.jp/en/program/msba/",
        description: "আলাদা MSBA curriculum এবং GMAT/GRE/waiver route MiM-এর সঙ্গে compare করুন।",
      },
      {
        label: "NUCB tuition and fees",
        href: "https://mba.nucba.ac.jp/en/admission/tuition/",
        description: "2027 Year 1/Year 2 charges এবং semester payment schedule verify করুন।",
      },
      {
        label: "NUCB scholarships",
        href: "https://mba.nucba.ac.jp/en/support/scholarship/",
        description: "Achievement, continuation, experience ও housing support-এর current thresholds/renewal rules পড়ুন।",
      },
      {
        label: "Professor Ricardo Lim",
        href: "https://mba.nucba.ac.jp/en/faculty/lim_ricardo.html",
        description: "Design Thinking, quantitative analysis, operations এবং AI/digitalization fit দেখুন; availability assume করবেন না।",
      },
      {
        label: "NUCB Business Analytics & AI teaching update",
        href: "https://mba.nucba.ac.jp/en/news/entry-23243.html",
        description: "Ricardo Lim-এর AI and competitive-advantage teaching context official source-এ দেখুন।",
      },
      {
        label: "JASSO Honors Scholarship",
        href: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/about.html",
        description: "Institutional recommendation, eligibility ও non-guaranteed monthly support-এর current rules দেখুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "toyohashi-technology-cse-masters-mext-2027",
    country: "japan",
    university: "Toyohashi University of Technology",
    title: "TUT Computer Science + MEXT: Fall 2027 Planning Guide",
    summary:
      "English-conducted Computer Science master’s, supervisor approval, 2027 admission timeline এবং competitive MEXT local-industry-DX special route-এর verified preparation guide।",
    label: "Upcoming · English CSE + MEXT route",
    funding:
      "Regular admission self-funded; a separate, highly competitive MEXT Special Program may cover stipend, fees and eligible airfare.",
    duration: "2 years · October 2027 target",
    audience:
      "International CSE/IT graduates targeting software performance, distributed systems, IoT, AI or robotics research",
    realityCheck:
      "এটি এখন open scholarship application নয়। TUT-এর 2026 Fall International Master’s cycle বন্ধ; 4 August 2026 update অনুযায়ী Fall 2027 admission April 2027-এ শুরু হবে। আলাদা MEXT University Recommendation Special Program-এর 2027 call December 2026-এর দিকে open হওয়ার কথা, কিন্তু scholarship nomination সীমিত ও final MEXT approval guaranteed নয়। Regular International Master’s route overseas students-এর জন্য লেখা; বর্তমানে Japan-এ বসবাস করলে visa/residence eligibility এবং কোন route ব্যবহার করবেন—nyushi@office.tut.ac.jp ও scholarship office থেকে লিখিতভাবে নিশ্চিত করুন।",
    highlights: [
      "Graduate School of Engineering-এর Computer Science and Engineering field English-এ research guidance দেয়; application-এর আগে prospective supervisor-এর approval বাধ্যতামূলক।",
      "2027 admission-এর exact deadline এখনো প্রকাশিত হয়নি; official page শুধু April 2027 application start নিশ্চিত করেছে।",
      "2026 guide-এ selection documents-only ছিল, fixed GPA cutoff বা GRE/GMAT requirement ছিল না; 2027 guide প্রকাশ হলে সব rules আবার মিলাতে হবে।",
      "2026 CSE MEXT Special Program-এর focus ছিল Asian local-industry DX এবং TUT চারজন master’s candidate MEXT-এ recommend করতে পারত; 2027 slot ও conditions এখনো pending।",
      "2026 planning reference-এ master’s allowance ¥144,000/month, examination/admission/tuition coverage এবং eligible airfare ছিল; 2027 benefit MEXT-এর নতুন guideline ছাড়া final নয়।",
      "বর্তমান official fees: examination ¥30,000, admission ¥282,000 এবং tuition ¥535,800/year; দুই বছরের tuition + admission প্রায় ¥1,353,600, exam fee ছাড়া।",
      "Financial hardship ও strong academic performance থাকলে admission/tuition fee waiver-এর জন্য apply করা যায়; waiver automatic নয়।",
    ],
    fit: [
      "Recognized bachelor’s/equivalent engineering, CSE, IT বা closely related background আছে এবং research-based master’s চান।",
      "Software performance/HPC, distributed and ubiquitous systems, IoT, AI, computer vision বা robotics-এর একটি focused problem নিয়ে proposal লিখতে পারবেন।",
      "Prospective supervisor-এর recent work পড়ে personalized research-fit email ও প্রায় 1,000-word plan তৈরি করতে প্রস্তুত।",
      "MEXT না পেলেও admission fees, tuition এবং living cost-এর realistic backup plan রাখতে পারবেন।",
      "Japan resident হলে International Master’s ও MEXT route-এর residence/visa conditions written confirmation নিয়ে এগোবেন।",
    ],
    quickStart: [
      "CSE faculty directory থেকে Yukinori Sato, Ren Ohmura ও Jun Miura-এর profile পড়ে নিজের topic-এর সঙ্গে সত্যিকারের 1–2টি match shortlist করুন।",
      "এক পাতায় problem, research question, proposed method, expected result এবং কেন TUT—এই পাঁচটি heading দিয়ে concept note লিখুন।",
      "nyushi@office.tut.ac.jp-এ Fall 2027 guide, current Japan residence এবং English-medium degree/MOI evidence নিয়ে concise eligibility question পাঠানোর draft তৈরি করুন।",
      "December 2026 MEXT page এবং April 2027 International Master’s page monitor করার জন্য calendar reminder বসান; পুরোনো deadline copy করবেন না।",
    ],
    steps: [
      {
        title: "Admission ও MEXT—দুটি আলাদা route map করুন",
        timing: "August–November 2026",
        description:
          "Regular International Master’s admission degree দেয়; MEXT Special Program সম্ভাব্য funding route। একটির তথ্য দিয়ে অন্যটির eligibility বা deadline infer করবেন না।",
        actions: [
          "Fall 2027 admission-এর confirmed fact হিসেবে শুধু April 2027 opening লিখুন; exact deadline blank রাখুন।",
          "MEXT page-এ December 2026-এর expected opening monitor করুন এবং 2027 guideline ছাড়া slot/benefit final ধরবেন না।",
          "Current Japan address, nationality ও residence status লিখে admissions এবং MEXT office-কে correct route জিজ্ঞাসা করুন।",
          "MEXT, regular admission, tuition waiver এবং post-enrollment JASSO/private awards চারটি আলাদা budget row-তে রাখুন।",
        ],
        readyWhen:
          "কোন form কখন, কোন office-এ এবং admission বনাম funding-এর কোন উদ্দেশ্যে যাবে—এটি আলাদা করে বুঝতে পারেন।",
      },
      {
        title: "Supervisor ও research fit শক্ত করুন",
        timing: "September–December 2026",
        description:
          "TUT application-এর আগে supervisor approval দরকার। Faculty নামের তালিকা নয়—তাঁর বর্তমান research-এর সঙ্গে আপনার problem-এর প্রমাণযোগ্য connection দেখাতে হবে।",
        actions: [
          "Yukinori Sato-এর software performance, computer architecture ও high-performance systems work পড়ুন; enterprise-software profiling topicটি নিজের proposal হিসেবে frame করুন, advertised project হিসেবে নয়।",
          "Ren Ohmura-এর distributed/ubiquitous systems, wearable computing, sensor networks ও programming-environment research-এর সঙ্গে IoT/software experience map করুন।",
          "AI/vision/robotics direction হলে Jun Miura-এর intelligent robotics ও robot-vision publications থেকে specific method/problem বাছুন।",
          "প্রথম email-এ CV, academic summary, 150–250 word research idea, relevant evidence, Fall 2027 intent এবং supervision availability question দিন।",
        ],
        readyWhen:
          "একজন faculty member research fit ও 2027 supervision নিয়ে ইতিবাচক response/approval দিয়েছেন এবং proposal scope নিয়ে direction পেয়েছেন।",
      },
      {
        title: "MEXT Special Program file প্রস্তুত করুন",
        timing: "Expected opening around December 2026",
        description:
          "CSE special program local-industry DX focus-এর competitive university recommendation। 2026 rules planning reference; 2027 PDF-ই final authority।",
        actions: [
          "2027 call প্রকাশ হলে nationality, age, arrival/visa, health, field continuity, GPA এবং language conditions line-by-line check করুন।",
          "Official transcript দিয়ে MEXT formula GPA calculate করুন; 2026 minimum 2.30/3.00 ছিল, কিন্তু 2027 threshold reverify করুন।",
          "Field of Study and Research Plan-এ Asian/local-industry problem, DX contribution, method, company collaboration potential ও measurable outcome connect করুন।",
          "2027 checklist অনুযায়ী application, recommendation, publication list, declaration, academic-performance sheet এবং faculty-side conditional-acceptance process complete করুন।",
        ],
        readyWhen:
          "2027 eligibility লিখিতভাবে মিলে, supervisor অংশ complete এবং deadline-এর আগে সব MEXT documents submission-ready।",
      },
      {
        title: "Regular International Master’s application complete করুন",
        timing: "Application starts April 2027 · exact deadline pending",
        description:
          "2026 guide useful preparation reference, কিন্তু 2027 selection, score validity, document delivery ও dates নতুন guide থেকে নিতে হবে।",
        actions: [
          "2027 guide থেকে application, scan-check, online registration, fee payment, original delivery, result ও October enrollment dates আলাদা করে লিখুন।",
          "Application form, degree certificate, official transcript + grading explanation, প্রায় 1,000-word research plan, recommendation, passport ও fee প্রস্তুত করুন।",
          "TOEIC L&R(SP), TOEFL iBT বা IELTS Academic-এর current acceptance/validity দেখুন; English-medium degree হলে university-issued MOI proof-এর exact 2027 wording follow করুন।",
          "Japanese/English ছাড়া documents-এর certified translation এবং non-reissuable originals-এর certified-copy plan আগেই করুন।",
        ],
        readyWhen:
          "Supervisor-approved, guideline-matched complete file TUT receive করেছে এবং submission/fee confirmation সংরক্ষিত আছে।",
      },
      {
        title: "Selection, funding ও enrolment decision নিন",
        timing: "After submission through October 2027",
        description:
          "Admission result, MEXT result এবং fee-waiver/private scholarship result আলাদা সময়ে আসতে পারে। Written net funding ছাড়া affordability ধরে নেবেন না।",
        actions: [
          "2027 selection documents-only নাকি interviewসহ—guideline দেখে research explanation ও fundamentals প্রস্তুত করুন।",
          "Admission, MEXT nomination, final MEXT decision এবং tuition-waiver outcome আলাদা status হিসেবে track করুন।",
          "MEXT না হলে admission ¥282,000 + annual tuition ¥535,800 + living cost-এর funding source লিখিতভাবে নিশ্চিত করুন।",
          "Offer গ্রহণের আগে supervisor, research environment, scholarship conditions, visa route এবং October arrival/enrolment dates মিলিয়ে নিন।",
        ],
        readyWhen:
          "Degree offer, net cost/funding, visa eligibility এবং research supervision—চারটি লিখিতভাবে পরিষ্কার হওয়ার পর informed accept/decline decision নিতে পারেন।",
      },
    ],
    checklist: [
      "Fall 2027 official admission guide",
      "Written Japan-residence/visa eligibility confirmation",
      "Supervisor approval",
      "Focused CSE research plan · about 1,000 words",
      "Degree certificate and official transcript",
      "Grading-system explanation",
      "Recommendation letter",
      "Accepted English score or official MOI proof",
      "Passport and certified translations",
      "¥30,000 examination-fee plan",
      "2027 MEXT eligibility/GPA calculation",
      "Self-funded and waiver backup budget",
    ],
    afterSubmission: [
      "Admissions email, application portal এবং courier tracking monitor করুন; originals received হয়েছে কি না নিজের tracking দিয়ে দেখুন।",
      "Supervisor-এর সঙ্গে research plan refine করুন এবং document/interview selection যেটি 2027 guide নির্ধারণ করে সেটির প্রস্তুতি চালু রাখুন।",
      "Admission, MEXT, fee waiver, JASSO/private scholarship এবং visa result আলাদা timeline-এ update করুন।",
      "MEXT final approval বা written waiver না আসা পর্যন্ত full self-funded cost cover করার plan বজায় রাখুন।",
    ],
    cautions: [
      "IELTS 5.5, TOEFL iBT 61 বা TOEIC 590-কে confirmed Master’s cutoff লিখবেন না; current International Master’s guide accepted tests বললেও minimum score প্রকাশ করেনি।",
      "2026 documents-only selection, four CSE master’s recommendation slots এবং ¥144,000/month benefit 2027-এর guarantee নয়।",
      "Regular admission পেলেই MEXT পাওয়া যায় না; university recommendation-ও final MEXT award নিশ্চিত করে না।",
      "Supervisor names suggested research matches—advertised vacancy নয়; capacity ও scholarship participation সরাসরি confirm করতে হবে।",
      "Program overseas students-এর জন্য; Japan-resident applicant নিজের eligibility assume করবেন না।",
      "Post-enrollment scholarships সীমিত এবং অনেক private award-এ Japanese ability লাগতে পারে।",
    ],
    officialLinks: [
      {
        label: "International Master’s Degree Program",
        href: "https://www.tut.ac.jp/english/exam/applications/international-masters-degree-program.html",
        description: "Fall 2027 opening status, current forms ও new guideline দেখুন।",
      },
      {
        label: "2026 Master’s application guide",
        href: "https://www.tut.ac.jp/english/exam/applications/docs/2026_Master.pdf",
        description: "Preparation reference হিসেবে eligibility, documents, selection ও fees পড়ুন; 2027 dates হিসেবে ব্যবহার করবেন না।",
      },
      {
        label: "MEXT Special Program",
        href: "https://www.tut.ac.jp/english/exam/applications/jg-scholarship-special-en.html",
        description: "2027 opening notice, CSE DX program ও final guideline monitor করুন।",
      },
      {
        label: "CSE MEXT 2026 reference guide",
        href: "https://www.tut.ac.jp/english/exam/applications/docs/3_2026_special_guidelines_en.pdf",
        description: "Prior-cycle eligibility ও benefits বুঝুন; 2027 conditions পুনরায় verify করুন।",
      },
      {
        label: "TUT fees",
        href: "https://www.tut.ac.jp/english/exam/applications/fees-to-enroll.html",
        description: "Examination, admission ও annual tuition-এর current official amounts দেখুন।",
      },
      {
        label: "Scholarship and financial support",
        href: "https://www.tut.ac.jp/english/exam/applications/scholarship.html",
        description: "MEXT/JICA/JDS/Aichi, JASSO, private awards ও fee-support reality পড়ুন।",
      },
      {
        label: "Admission and tuition fee exemption",
        href: "https://www.tut.ac.jp/student/support/exemption.html",
        description: "Graduate/international applicant waiver ও postponement rules verify করুন।",
      },
      {
        label: "Computer Science faculty directory",
        href: "https://www.tut.ac.jp/english/university/faculty/cs/index.html",
        description: "Current supervisors, profiles ও research areas search করুন।",
      },
      {
        label: "Yukinori Sato profile",
        href: "https://www.tut.ac.jp/english/university/faculty/cs/post_48.html",
        description: "Software performance, computer architecture ও HPC fit দেখুন।",
      },
      {
        label: "Ren Ohmura profile",
        href: "https://www.tut.ac.jp/english/university/faculty/cs/671.html",
        description: "Distributed, ubiquitous, wearable ও sensor-systems fit দেখুন।",
      },
      {
        label: "Jun Miura profile",
        href: "https://www.tut.ac.jp/english/university/faculty/cs/165.html",
        description: "AI, intelligent robotics ও robot-vision fit দেখুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "jaist-advanced-science-technology-masters-2027",
    country: "japan",
    university: "Japan Advanced Institute of Science and Technology",
    title: "JAIST Master’s: April 2027 Regular & Rolling Admission Guide",
    summary:
      "Japan-resident applicant-এর জন্য September Regular round, 600-word Short Essay, online oral examination, IELTS evidence, current software-engineering faculty এবং realistic self-funded budget-এর verified guide।",
    label: "High priority · Sep 4–16 · Self-funded",
    funding:
      "Regular admission নিজে scholarship দেয় না। Financial need ও strong academic performance থাকলে competitive fee reduction হতে পারে; JAIST-এর own Master’s benefit scholarship মূলত second-year high achievers-এর জন্য। MEXT কেবল separately selected MEXT scholar-এর funding—regular admission-এর automatic add-on নয়।",
    duration: "2 years · April 2027 · Ishikawa Campus",
    audience:
      "Japan-resident international applicants with a recognized bachelor’s degree who want Information Science, Software Engineering, formal methods, dependable systems, AI, cybersecurity, networks or digital-infrastructure research",
    realityCheck:
      "এটি ‘easy admission’ বা funded opening নয়। বর্তমান profile-এর জন্য সবচেয়ে practical route হলো Japan-resident Regular Examination-এর second round: application 4–16 September 2026, online oral 17–18 October-এর assigned একদিন এবং result 30 October। Published IELTS minimum নেই বলে IELTS Academic 5.5 formally submit করা যায়, কিন্তু বিদেশি university graduate-এর language certificate আবশ্যক এবং MOI listed substitute নয়। Admission-এ 600-word Short Essay, Entry Form, academic fundamentals এবং research motivation-ভিত্তিক oral performance বিশেষভাবে গুরুত্বপূর্ণ। Rolling route চালু থাকলেও সেটি Ishikawa-তে in-person, supervisor consent-নির্ভর এবং quota পূর্ণ হলে আগে বন্ধ হতে পারে। তাই professor specifically উৎসাহ না দিলে September Regular round-ই primary plan রাখুন এবং scholarship ছাড়া প্রায় ¥1.386m two-year base academic cost + living expenses cover করার প্রস্তুতি নিন।",
    highlights: [
      "Official program হলো Graduate School of Advanced Science and Technology-এর Division of Advanced Science and Technology; Information Science degree path এবং Computing Science/Next-generation Digital Infrastructure research area software-background applicant-এর জন্য relevant।",
      "Regular Examination শুধু Japan-resident applicant-এর জন্য এবং oral exam online। Second round: 4–16 September 2026 application, 17–18 October assigned exam day, 30 October result। Third round: 19 November–1 December application, 9–10 January 2027 exam, 26 January result।",
      "Normal recognized foreign bachelor/16-year education applicant-এর জন্য 7 August eligibility-judgment deadline প্রযোজ্য নয়। Nonstandard qualification হলে September round আর ব্যবহার না করে Admissions-এর সঙ্গে কথা বলুন; third-round judgment deadline 28 October।",
      "আলাদা written programming/mathematics test নেই। Oral সর্বোচ্চ 30 মিনিট: Short Essay presentation সর্বোচ্চ 7 মিনিট, এরপর Essay ও Entry Form-ভিত্তিক সর্বোচ্চ 23 মিনিট Q&A। Oral-এর মধ্যে blank paper-এ solution লিখে webcam-এ দেখিয়ে explain করতে বলা হতে পারে।",
      "Short Essay প্রায় 600 English words, সর্বোচ্চ এক A4 page: previous university/company research এবং JAIST study/research plan। Essay English-এ দিলে পুরো oral English-এ হবে এবং exam চলাকালে language বদলানো যায় না।",
      "বিদেশি university graduate-এর জন্য TOEIC L&R, TOEFL iBT, IELTS Academic অথবা accepted Japanese certificate আবশ্যক। IELTS Academic 5.5 submit করা যায়; guide কোনো minimum প্রকাশ করে না, তবে 5.5-কে sufficient/competitive বলেনি। MOI waiver এবং GRE/GMAT requirement published guide-এ নেই।",
      "Official material অনুযায়ী English courses carefully বেছে degree requirements পূরণ করা সম্ভব; তবে সব class English নয়। Supervisor-এর সঙ্গে required credits, research guidance, thesis এবং final assessment-এর English plan লিখিতভাবে confirm করুন।",
      "Takashi Tomita current Associate Professor/supervisor: formal methods, model checking, software verification/testing, embedded/automotive software এবং DX; tomita@jaist.ac.jp। তাঁর lab prospective students-কে contact করতে বলে।",
      "Masato Suzuki current Associate Professor: highly dependable software systems, software construction, programming environments, embedded systems, architecture, product lines এবং SOA; suzuki@jaist.ac.jp। C/C++/Java/Python development evidence এখানে useful।",
      "Xin Li: formal methods, program analysis, programming languages এবং information security নিয়ে কাজ করেন; li-xin@jaist.ac.jp। Software-development background থেকে verification/analysis-focused research-এ যেতে চাইলে অতিরিক্ত একটি relevant match।",
      "Current fees: ¥30,000 screening + ¥282,000 admission + ¥535,800/year tuition + ¥2,430 two-year insurance = প্রায় ¥1,386,030 base academic cost; living, housing, travel এবং future fee revision এতে নেই।",
    ],
    fit: [
      "Recognized bachelor’s degree/16-year education আছে; nonstandard credential হলে application-এর আগে separate eligibility judgment নিতে প্রস্তুত।",
      "IELTS Academic-এর official evidence আছে এবং 5.5-কে published cutoff না ভেবে English research discussion improve করতে প্রস্তুত।",
      "Software project/academic work থেকে একটি narrow, feasible research problem এবং JAIST-এ দুই বছরের study plan তৈরি করতে পারবেন।",
      "Short Essay, presentation ও Q&A-তে algorithms, software engineering, systems বা proposed field-এর undergraduate fundamentals defend করতে পারবেন।",
      "Reliable software/formal methods direction হলে Tomita, অথবা software architecture/dependable development direction হলে Suzuki-এর recent work-এর সঙ্গে evidence-based fit দেখাতে পারবেন।",
      "Ishikawa Campus-এ full-time study এবং scholarship না পেলেও tuition + living expenses বহনের credible plan আছে।",
    ],
    quickStart: [
      "4–16 September application, 17–18 October online oral এবং 30 October result JST calendar-এ লিখুন; 16 September-এর আগে buffer deadline রাখুন।",
      "IELTS Academic certificate, passport, residence card, transcript, degree/graduation proof এবং বিদেশে education হওয়ায় required CV এখনই scan-ready করুন।",
      "এক পৃষ্ঠায় প্রায় 600 English words-এর Short Essay লিখুন—past work, exact research gap, proposed method, JAIST fit এবং two-year plan রাখুন।",
      "Regular route-কে primary রাখুন; Rolling কেবল clear topic, professor consent, Ishikawa in-person exam এবং binding enrollment decision বোঝার পর বিবেচনা করুন।",
    ],
    steps: [
      {
        title: "সঠিক route ও eligibility lock করুন",
        timing: "Now · before September 4, 2026",
        description:
          "Japan-resident profile-এর জন্য Regular second round সবচেয়ে কম-friction route। Eligibility judgment সবার জন্য নয়; নিজের degree category guide-এর exact clause দিয়ে মিলিয়ে অপ্রয়োজনীয় panic এড়ান।",
        actions: [
          "Residence card valid রেখে Regular Examination-এর Japan-resident condition এবং April 2027 enrollment plan confirm করুন।",
          "Foreign recognized bachelor/16-year curriculum বা qualifying 3+ year bachelor route-এর কোন eligibility clause প্রযোজ্য তা লিখে রাখুন।",
          "Credential nonstandard হলে second round assume করবেন না; Admissions-কে records পাঠিয়ে third-round eligibility-judgment process ও 28 October deadline confirm করুন।",
          "Rolling বিবেচনা করলে desired professor-এর written consent, weekday Ishikawa exam, 25-person quota এবং successful হলে enrollment requirement আগে পড়ুন।",
        ],
        readyWhen:
          "Regular second round-এর direct eligibility নিশ্চিত, অথবা Admissions-এর written guidance অনুযায়ী third round/eligibility judgment plan নির্ধারিত।",
      },
      {
        title: "Language ও official documents প্রস্তুত করুন",
        timing: "Now–early September 2026",
        description:
          "Regular route scans দিয়ে শুরু হলেও admitted applicant-কে result-এর এক মাসের মধ্যে originals পাঠাতে হয়। তাই scan, original এবং certified-copy chain একসঙ্গে প্রস্তুত রাখুন।",
        actions: [
          "Prescribed format অনুযায়ী Short Essay, Entry Form, self-declaration, pledge এবং online photo প্রস্তুত করুন।",
          "Official transcript, graduation certificate ও degree proof-এর clear scan নিন; document Japanese/English না হলে prescribed translation rule অনুসরণ করুন।",
          "IELTS Academic official certificate ব্যবহার করুন; MOI দিয়ে replace করবেন না এবং web screenshot-কে official score evidence ধরবেন না।",
          "Passport, residence card-এর দুই পাশ, education-history CV এবং applicable name-change/scholarship evidence একই tracker-এ রাখুন।",
        ],
        readyWhen:
          "প্রতিটি required item accepted format-এ scan-ready এবং admission হলে এক মাসের মধ্যে পাঠানোর original/certified paper available।",
      },
      {
        title: "600-word Essay ও oral narrative তৈরি করুন",
        timing: "August–September 2026",
        description:
          "Selection-এর কেন্দ্র Short Essay ও oral। Generic university praise নয়—past evidence থেকে proposed research-এর যৌক্তিক bridge এবং প্রয়োজনীয় academic preparation দেখান।",
        actions: [
          "Essay সর্বোচ্চ এক A4 page ও প্রায় 600 English words-এ রাখুন; prompt-এর past research/work এবং JAIST plan—দুই অংশই উত্তর দিন।",
          "Problem, prior work, proposed method/data, evaluation metric, expected contribution এবং two-year milestones স্পষ্ট করুন।",
          "Official Q&A rule মেনে Short Essay, presentation material ও oral-এ নিজের previous/graduating university, সেই university-এর supervisor এবং workplace/company-এর নাম প্রকাশ করবেন না; intended JAIST supervisor-এর নাম Entry Form-এ required হতে পারে। Prestige signal নয়, নিজের কাজ ও contribution ব্যাখ্যা করুন।",
          "Field change হলে কেন পরিবর্তন, কোন courses/self-study করেছেন এবং missing fundamentals কীভাবে পূরণ করবেন—evidenceসহ লিখুন।",
        ],
        readyWhen:
          "Essay one-page limit মানে, claim evidence-backed এবং একই narrative 7-minute presentation ও technical Q&A-তে defend করা যায়।",
      },
      {
        title: "Regular application submit ও online oral practice করুন",
        timing: "Apply Sep 4–16 · exam Oct 17–18, 2026",
        description:
          "Online exam travel কমায়, competition কমায় না। আলাদা first-screen বা written-test stage নেই; submitted documents ও একটিমাত্র live oral examination মিলিয়ে holistic selection হয়।",
        actions: [
          "Online application complete করে ¥30,000 screening fee pay করুন এবং deadline-এর আগে submission/receipt save করুন।",
          "Essay থেকে সর্বোচ্চ 7-minute English presentation তৈরি করুন; time overrun ছাড়া problem, evidence ও plan cover করুন।",
          "সর্বোচ্চ 23-minute Q&A-র জন্য algorithms/data structures, software engineering, systems fundamentals এবং proposed method-এর assumptions drill করুন।",
          "প্রায় পাঁচটি blank unruled A4 sheet, black/blue felt-tip pen ও printed slide copy প্রস্তুত রাখুন; written solution webcam-এ দেখানোর practice করুন।",
          "Still-image slides ব্যবহার করুন—animation নয়। Camera, microphone, stable internet, screen sharing, ID check এবং assigned JST slot-এর full mock নিন; official weekday connection test-এ অংশ নিন।",
        ],
        readyWhen:
          "Online registration/payment complete, postal Examination Admission Card ও emailed Entrance Examination Guide পাওয়া গেছে, presentation 7 মিনিটের মধ্যে এবং follow-up প্রশ্ন উত্তর দিতে পারেন।",
      },
      {
        title: "Result-এর আগে funding ও enrollment decision final করুন",
        timing: "October 30, 2026 onward",
        description:
          "Offer funding নয়। Fee reduction এবং later scholarship competitive হওয়ায় written award ছাড়া full self-funded cost ধরেই enrollment decision নিন।",
        actions: [
          "¥1,386,030 current base academic cost-এর সঙ্গে Ishikawa housing, food, insurance, travel, device এবং emergency reserve যোগ করুন।",
          "Financial-need/academic fee-reduction rules আলাদাভাবে apply করুন; award amount বা approval আগে থেকে ধরে budget বানাবেন না।",
          "JAIST Master’s benefit scholarship incoming funding নয়—second-year high achiever support হিসেবে শুধু future possibility রাখুন।",
          "Admission হলে transcript/degree/graduation originals result-এর এক মাসের মধ্যে prescribed method-এ পাঠান; না পাঠালে admission cancel হতে পারে।",
        ],
        readyWhen:
          "Admission, supervisor/course-language plan, originals deadline এবং scholarship ছাড়া complete two-year budget দেখে informed accept/decline decision নিতে পারেন।",
      },
    ],
    checklist: [
      "AY2027 Master’s Regular Examination guide",
      "Direct eligibility clause or written Admissions confirmation",
      "Online application registration and photo",
      "Prescribed Short Essay · about 600 English words · one A4 page",
      "Entry Form, self-declaration and pledge",
      "Official transcript scan and paper original",
      "Graduation certificate and degree proof",
      "IELTS Academic/accepted language certificate",
      "Passport",
      "Residence card · both sides",
      "CV covering foreign education history",
      "Translation/name-change evidence if applicable",
      "¥30,000 screening-fee payment confirmation · personal record",
      "7-minute presentation",
      "Up-to-23-minute academic/research Q&A bank",
      "Five blank unruled A4 sheets, felt-tip pen and printed slides",
      "Original-document mailing plan after admission",
      "Self-funded academic and Ishikawa living-cost budget",
    ],
    afterSubmission: [
      "JAIST Regular application accepted হয়েছে কি না আলাদাভাবে confirm করে না। Home postal mail-এ Examination Admission Card এবং email/spam-এ Entrance Examination Guide monitor করুন; exam-এর এক সপ্তাহ আগে না এলে Admissions-কে জানান।",
      "Essay-এর factual content না বদলে 7-minute presentation এবং undergraduate-fundamentals Q&A practice চালিয়ে যান।",
      "30 October result check করে admission procedure এবং original-certificate one-month deadline সঙ্গে সঙ্গে calendar-এ লিখুন।",
      "Fee reduction/JASSO/private scholarship আলাদাভাবে track করুন; written award না পাওয়া পর্যন্ত full self-funded plan বজায় রাখুন।",
    ],
    cautions: [
      "Published minimum না থাকা IELTS 5.5-কে strong/competitive score প্রমাণ করে না; language certificate required এবং score selection documents-এর অংশ।",
      "MOI current Regular guide-এ accepted substitute নয়। IELTS Academic/TOEFL iBT/TOEIC L&R বা listed Japanese certificate-এর একটি ব্যবহার করুন।",
      "Online Regular oral মানে online degree নয়; study Ishikawa Campus-এ এবং successful applicant admission defer করতে পারে না।",
      "Rolling route online নয়; Ishikawa-তে in-person, prior professor consent required, quota পূর্ণ হলে early close হতে পারে এবং consent admission guarantee নয়।",
      "একই academic year-এ JAIST exam fail/rejected/absent applicant Rolling ব্যবহার করতে পারে না; route change-এর আগে final guide পড়ুন।",
      "Xin Li-কে current JAIST supervisor হিসেবে contact করবেন না—indexed personal page stale; official lab history তাঁকে former member দেখায়।",
      "Regular admission-এর সঙ্গে MEXT automatic নয়। Bangladesh Embassy MEXT 2027 Research Student call ইতিমধ্যে closed। University Recommendation separate route; JAIST অনুযায়ী candidates সাধারণত partner institution/research বা faculty-cooperation relationship এবং home-institution recommendation-এর মাধ্যমে nominated হন।",
      "Second-year JAIST benefit scholarship, fee reduction বা post-enrollment external award কোনোটিই incoming full-funding guarantee নয়।",
    ],
    officialLinks: [
      {
        label: "AY2027 Master’s application guide",
        href: "https://www.jaist.ac.jp/admissions/data/0.clickhere_Me_2027.4.pdf",
        description: "Eligibility, routes, examination, documents, language evidence, fees ও admission rules line-by-line পড়ুন।",
      },
      {
        label: "JAIST examination schedule",
        href: "https://www.jaist.ac.jp/english/admissions/outline/schedule.html",
        description: "Regular, Rolling ও Overseas routes-এর live dates verify করুন।",
      },
      {
        label: "Master’s examination Q&A",
        href: "https://www.jaist.ac.jp/english/admissions/outline/qa-m.html",
        description: "Essay, oral language, field change, name restriction এবং selection emphasis বুঝুন।",
      },
      {
        label: "Prescribed Master’s forms",
        href: "https://www.jaist.ac.jp/english/admissions/application-form/form-m.html",
        description: "Short Essay, Entry Form এবং current prescribed documents download করুন।",
      },
      {
        label: "JAIST online application",
        href: "https://www.jaist.ac.jp/english/admissions/internet-application/",
        description: "Registration, upload এবং payment workflow follow করুন।",
      },
      {
        label: "Curriculum policy",
        href: "https://www.jaist.ac.jp/english/education/system/curriculum-policy.html",
        description: "English/Japanese lecture model ও curriculum structure বুঝুন।",
      },
      {
        label: "JAIST institutional brochure",
        href: "https://www.jaist.ac.jp/about/data/jaist-2024e.pdf",
        description: "English-course degree-completion statement এবং research environment-এর official overview দেখুন।",
      },
      {
        label: "Official fees and reductions",
        href: "https://www.jaist.ac.jp/english/studentlife/support/fee.html",
        description: "Current screening, admission, tuition এবং competitive reduction information recheck করুন।",
      },
      {
        label: "JAIST scholarships",
        href: "https://www.jaist.ac.jp/english/studentlife/support/scholarships.html",
        description: "Incoming funding limitation, Master’s benefit scholarship ও external support reality পড়ুন।",
      },
      {
        label: "Takashi Tomita · Formal Methods",
        href: "https://www.jaist.ac.jp/english/laboratory/ngdi/tomita.html",
        description: "Formal methods, verification, testing ও dependable-software research fit দেখুন।",
      },
      {
        label: "Tomita Lab prospective-student call",
        href: "https://www.jaist.ac.jp/~tomita/call.html",
        description: "Lab expectations ও contact invitation পড়ুন; Rolling consent admission guarantee নয়।",
      },
      {
        label: "Masato Suzuki · Highly Dependable Software Systems",
        href: "https://www.jaist.ac.jp/english/laboratory/ngdi/suzuki.html",
        description: "Software construction, architecture, embedded systems ও development-tool research fit দেখুন।",
      },
      {
        label: "Bangladesh MEXT status",
        href: "https://www.bd.emb-japan.go.jp/itpr_ja/00_000706.html",
        description: "Embassy-recommendation Research Student call-এর current closed status verify করুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "shibaura-eecs-masters-2027",
    country: "japan",
    university: "Shibaura Institute of Technology",
    title: "SIT English-based Master’s: April 2027 SSFS Application Guide",
    summary:
      "EECS ও Global Course-এর English study paths, mandatory supervisor pre-consultation, MOI option, exact second-round timeline, Takumi Miyoshi route এবং realistic self-funded budget-এর verified guide।",
    label: "Upcoming · English/MOI · Self-funded",
    funding:
      "Self-funded by default; published AY2027 SIT Master’s scholarships current/former SIT bachelor students-এর মধ্যে restricted, আর external SSFS applicants-এর জন্য guaranteed tuition waiver নেই।",
    duration: "2 years · April 2027 intake",
    audience:
      "International CSE/IT/EE graduates targeting AI, software, data, computer vision, robotics, networks, IoT, smart-city or digital-twin research through EECS or the Global Course",
    realityCheck:
      "এটি ‘fully funded scholarship opening’ নয়—Shibaura Institute of Technology-এর April 2027 Special Selection for Foreign Students (SSFS) Master’s admission route। First round বন্ধ এবং second round এখনো open হয়নি। তবে official schedule অনুযায়ী pre-consultation early October 2026-এ শুরু হবে এবং application 16–27 November 2026 চলবে। External applicant-কে আগে TAO-তে prospective supervisor-এর pre-consultation, faculty interview ও Pre-Consultation Completion Form নিতে হবে; formal application stage-এ আলাদাভাবে Letter of Acceptance request করতে হয়। Published AY2027 SIT Master’s schemes current/former SIT bachelor students-এর মধ্যে restricted; তাই written external award না পাওয়া পর্যন্ত প্রায় ¥2.77 million admission, tuition ও maintenance + প্রায় ¥40,000 Support Association fees, ¥35,000 application fee এবং living cost নিজে বহনের plan ধরে এগোতে হবে।",
    highlights: [
      "SSFS কোনো standalone ‘English-based Master’s’ program নয়; এটি Graduate School of Engineering and Science-এর admission route। Relevant choices হলো EECS (Master of Engineering), Systems Engineering and Science (Master of Science in Systems Engineering and Science) এবং Global Course of Engineering and Science/GCES (Master of Science in Engineering)।",
      "SSFS-এ Japanese admission requirement নয়। English-taught specialized credits দিয়ে degree requirements পূরণের পথ আছে, তবে chosen lab-এর supervision language ও প্রয়োজনীয় course availability supervisor-এর সঙ্গে confirm করতে হবে।",
      "English-medium higher-education institution থেকে পুরো degree সম্পন্ন/সম্পন্ন করতে থাকলে university-issued English-medium proof (MOI) accepted test score-এর বিকল্প হতে পারে। 2027 first-round guide-এ numerical IELTS/TOEFL cutoff প্রকাশিত নেই।",
      "GRE বা GMAT application requirement হিসেবে তালিকাভুক্ত নয়; JLPT/EJU pre-consultation-এ optional। Hard minimum GPA প্রকাশিত না হলেও transcript with GPA, academic strength এবং research fit competitive selection-এ গুরুত্বপূর্ণ।",
      "Confirmed second-round schedule: pre-consultation early October–30 October 2026, 16:00 JST; application 16 November, 12:00–27 November 2026, 16:00 JST; online exam 27 January 2027; result 10 February 2027, 13:00 JST।",
      "2027 first-round EECS format ছিল document assessment + 25-minute online oral: 15-minute presentation এবং 10-minute Q&A। Presentation-এ motivation প্রায় 3, previous research 9 এবং proposed Master’s research 3 minutes। Second-round guide প্রকাশ হলে format recheck করতে হবে।",
      "Course অনুযায়ী oral format বদলায়: current reference-এ Systems Engineering 15 minutes এবং Global Course 25 minutes। তাই EECS presentation structure Miyoshi/GCES application-এ copy করবেন না; September-এর second-round guide দিয়ে exact format মিলিয়ে নিন।",
      "2026 reference table অনুযায়ী non-SIT graduate-এর admission + tuition + maintenance প্রায় ¥2.77m; Support Association প্রায় ¥40k যোগ করলে university-related two-year total প্রায় ¥2.81m, application fee ও living expenses ছাড়া।",
      "Potential supervisor Yoshiaki Yasumura-এর Intelligent System Lab AI, ML, NLP, web mining, image recognition ও data-stream learning নিয়ে কাজ করে; Chinthaka Premachandra-এর Image Processing and Robotics Lab computer vision, UAV, robotics ও ITS নিয়ে কাজ করে। দুজনের 2027 availability TAO-তে confirm করতে হবে।",
      "Takumi Miyoshi current Multimedia Information Network Lab-এ digital twin, 3D-city/spatial sensing, P2P/location-oriented networking, real-time IoT-device identification, ML, wireless sensors ও smart-city systems নিয়ে কাজ করেন; verified email miyoshi@sic.shibaura-it.ac.jp।",
      "AY2027 faculty list-এ Miyoshi GCES-এর direct supervisor। Systems Engineering-এর Information Networking Systems-এ তিনি research collaborator এবং Taku Yamazaki formal supervisor—সেক্ষেত্রে দুজনের consent লাগে। তাঁকে EECS supervisor হিসেবে দেখানো যাবে না।",
      "GCES সবচেয়ে পরিষ্কার Miyoshi/English route: official course page English teaching/learning medium, অন্তত 18 English-taught credits, overseas project/internship, English thesis ও English defense নির্ধারণ করে; capacity reference মাত্র 10, তাই fit strong হলেও admission competitive।",
      "GCES admission policy TOEIC বা equivalent 550+ level-কে desirable prerequisite বলে—hard SSFS cutoff নয়। IELTS 5.5-এর equivalency নিজে ধরে না নিয়ে TAO pre-consultation/Graduate School office-এ confirm করুন।",
    ],
    fit: [
      "Recognized bachelor’s degree, সাধারণত 16 years of education, বা approved equivalent qualification আছে এবং selected EECS, Systems Engineering বা GCES course-এ research-based Master’s করতে চান।",
      "English-medium degree-এর official MOI অথবা accepted English-test evidence সংগ্রহ করতে পারবেন এবং English-এ research discussion/presentation করতে প্রস্তুত।",
      "একজন supervisor-এর recent work-এর সঙ্গে নিজের previous project/research মিলিয়ে specific, feasible দুই-পৃষ্ঠার research plan লিখতে পারবেন।",
      "AI/software/data direction হলে EECS-এর Yasumura, computer vision/robotics হলে EECS-এর Premachandra, অথবা networks/IoT/digital twin হলে GCES-এর Miyoshi—সঠিক courseসহ evidence-based fit দেখাতে পারবেন।",
      "Guaranteed scholarship না ধরেই tuition, other academic fees, computer এবং Japan living cost-এর credible funding plan তৈরি করতে পারবেন।",
      "SSFS-এর nationality/residence rules পূরণ করেন: Japanese nationality, dual Japanese nationality বা Japanese permanent-resident status নেই।",
    ],
    quickStart: [
      "Official schedule খুলে 30 October pre-consultation deadline, 16–27 November application, 27 January exam এবং 10 February result calendar-এ JST-সহ লিখুন।",
      "EECS/Yasumura–Premachandra আর GCES/Miyoshi route compare করে একটিমাত্র primary course + supervisor pair বাছুন; course না মিলিয়ে শুধু professor name ব্যবহার করবেন না।",
      "এক পৃষ্ঠায় problem, related bachelor project/research, proposed method, expected contribution এবং কেন ওই SIT lab—এই পাঁচ heading-এ concept note লিখুন।",
      "MOI/English score, transcript with GPA, degree certificate, CV এবং প্রায় ¥2.845m application + university-fee reference budget-এর document folder বানান; living cost আলাদা রাখুন।",
    ],
    steps: [
      {
        title: "SSFS eligibility, language ও funding reality যাচাই করুন",
        timing: "August–mid-September 2026",
        description:
          "Admission-friendly language conditions scholarship guarantee নয়। Profile, residence status এবং financing—তিনটি আলাদা gate হিসেবে আগে যাচাই করুন।",
        actions: [
          "Bachelor’s/16-year education eligibility এবং SSFS-এর no-Japanese-nationality/no-permanent-residency conditions মিলিয়ে নিন।",
          "English-medium degree হলে registrar থেকে এমন official certificate নিন যেখানে degree/program-এর medium of instruction স্পষ্ট লেখা আছে।",
          "Test দিলে current guide-এর test-centre TOEIC L&R/S&W, TOEFL iBT, IELTS Academic বা GTEC rules ও two-year validity recheck করুন; online/IP score assume করবেন না।",
          "2026 reference ধরে ¥2.77m admission/tuition/maintenance + প্রায় ¥40k Support Association + ¥35,000 application fee + living/computer/insurance/visa cost-এর budget লিখুন।",
        ],
        readyWhen:
          "Formal eligibility, English evidence এবং scholarship ছাড়া study করার credible backup funding—তিনটি পরিষ্কার।",
      },
      {
        title: "Research fit ও supervisor shortlist তৈরি করুন",
        timing: "August–September 2026",
        description:
          "Supervisor acceptance এই route-এর gate। Generic ‘AI-তে আগ্রহী’ message নয়—lab-এর specific problem-এর সঙ্গে নিজের evidence connect করুন।",
        actions: [
          "Yasumura Lab বাছলে web/data/ML/NLP/image-recognition theme থেকে একটি narrow problem নিন এবং relevant project/result দেখান।",
          "Premachandra Lab বাছলে computer vision, small-object detection, UAV, robotics বা ITS থেকে বাস্তব problem ও evaluation plan নির্ধারণ করুন।",
          "Miyoshi বাছলে GCES-কে primary course ধরে digital twin, spatial sensing, P2P/location network বা ML-based IoT identification-এর সঙ্গে নিজের project connect করুন। Systems Engineering route চাইলে Taku Yamazaki formal-supervisor consent-ও লাগবে।",
          "CV, previous-research summary এবং দুই-পৃষ্ঠার draft plan-এ একই research story বজায় রাখুন।",
          "AY2027 final supervisor list, selected course এবং lab capacity second-round guideline-এর সঙ্গে মিলিয়ে primary ও backup choice রাখুন; TAO-তে correct course/supervisor entry verify করুন।",
        ],
        readyWhen:
          "একটি primary lab, একটি defensible backup এবং প্রত্যেকটির জন্য personalized research concept প্রস্তুত।",
      },
      {
        title: "TAO pre-consultation সম্পন্ন করুন",
        timing: "Early October–30 October 2026, 16:00 JST",
        description:
          "Non-SIT applicants formal application-এর আগে TAO pre-consultation complete করে faculty interview/acceptance পাবে। Deadline-এর শেষ দিনে শুরু করা যাবে না।",
        actions: [
          "TAO account খুলে CV, previous research/achievement summary, research plan, degree certificate এবং full transcript upload-ready করুন।",
          "English score এবং JLPT/EJU pre-consultation-এ optional হলেও থাকলে valid evidence দিন; ভুল বা expired claim দেবেন না।",
          "এক সময়ে একজন করে সর্বোচ্চ তিনজন prospective supervisor-এর কাছে consultation request করা যায়—reply time রেখে primary choice আগে submit করুন।",
          "Faculty interview-এর আগে 2-minute background, research problem, method, feasibility, expected result এবং funding plan practice করুন।",
        ],
        readyWhen:
          "TAO-তে pre-consultation complete, faculty interview শেষ এবং Pre-Consultation Completion Form পাওয়া গেছে; formal application-এর Letter of Acceptance এখনও আলাদা task হিসেবে noted।",
      },
      {
        title: "Second-round guide অনুযায়ী formal file final করুন",
        timing: "Guideline expected mid-September · submit 16–27 November 2026",
        description:
          "First-round guide preparation reference; second-round PDF-ই documents, exam এবং final rules-এর authority। প্রতিটি field নতুন guide দিয়ে line-by-line check করুন।",
        actions: [
          "TAO form/photo, transcript with GPA, degree certificate, one-page English reason for application এবং প্রায় two-page English research plan final করুন।",
          "Accepted English score অথবা official English-medium degree proof, passport, Japan resident হলে residence card এবং non-SIT applicant recommendation যোগ করুন।",
          "TAO-তে desired faculty member-এর Letter of Acceptance request করে approval correctly reflected কি না দেখুন এবং required translations প্রস্তুত করুন।",
          "¥35,000 generally non-refundable examination fee সময়মতো pay করে application 27 November, 16:00 JST-এর আগেই submit করুন; guideline-এর narrow refund exceptions এবং receipt save করুন।",
        ],
        readyWhen:
          "Second-round checklist-এর প্রতিটি item accepted format-এ জমা, fee paid এবং TAO submission confirmation সংরক্ষিত।",
      },
      {
        title: "Selected course অনুযায়ী online oral প্রস্তুতি নিন",
        timing: "December 2026–27 January 2027",
        description:
          "Current first-round reference-এ EECS, Systems Engineering ও GCES-এর oral length/content আলাদা। Second-round guide authority; selected course-এর format দিয়েই slides ও Q&A বানান।",
        actions: [
          "EECS হলে 25-minute oral-এর জন্য প্রায় 3 minutes motivation + 9 minutes bachelor/graduation research + 3 minutes Master’s proposal presentation, এরপর 10-minute Q&A প্রস্তুত করুন।",
          "Systems Engineering হলে 15-minute oral-এর current reference—5-minute presentation + 10-minute Q&A—follow করুন; exact focus desired department/supervisor-এর সঙ্গে confirm করুন।",
          "GCES/Miyoshi হলে 10-minute presentation-এ GCES motivation, bachelor research objective/key results, Master objective/plan/schedule, past–proposed link এবং international-student internship plan রাখুন; এরপর 15-minute Q&A drill করুন।",
          "Bachelor thesis না থাকলে coursework/project দিয়ে independent research ability, literature review, experiment design ও evaluation evidence দেখান।",
          "Zoom/device, camera, microphone, internet, screen share এবং JST conversion test করুন; second-round notice-এ format বদলালে practice update করুন।",
        ],
        readyWhen:
          "Selected course-এর prescribed time/content মেনে presentation শেষ হয়, claims evidence-backed এবং supervisor-style follow-up questions confidently answer করতে পারেন।",
      },
      {
        title: "Result, funding ও enrolment decision আলাদা করে নিন",
        timing: "10 February 2027 onward",
        description:
          "Admission offer নিজে scholarship নয়। Written scholarship/waiver result ছাড়া net cost কম ধরে visa বা enrolment commitment দেবেন না।",
        actions: [
          "10 February, 13:00 JST result check করে admission procedure, deposit এবং document deadlines লিখে নিন।",
          "Offer-এর fee table দিয়ে admission, tuition, maintenance/other fees ও living cost-এর final two-year total recalculate করুন।",
          "Post-enrollment external foundation/company awards-এর eligibility ও nomination process international office থেকে জেনে নিন, কিন্তু budget-এ guaranteed income ধরবেন না।",
          "Supervisor fit, English course plan, commute/housing, available cash এবং scholarship outcome একসঙ্গে মিলিয়ে accept/decline করুন।",
        ],
        readyWhen:
          "Admission, supervision, final academic cost, living budget এবং actual written funding—পাঁচটি দেখে informed enrolment decision নিতে পারেন।",
      },
    ],
    checklist: [
      "AY2027 second-round official guideline",
      "SSFS nationality/residence eligibility",
      "TAO pre-consultation completion",
      "Exact course choice · EECS, Systems Engineering or GCES",
      "Supervisor interview and acceptance",
      "CV and previous-research summary",
      "Bachelor’s degree/expected-degree certificate",
      "Full transcript with GPA/grading information",
      "One-page English reason for application",
      "About two-page English research plan and schedule",
      "Accepted English score or official MOI proof",
      "Recommendation letter for non-SIT applicant",
      "Passport and residence card if applicable",
      "Required translations/verification documents",
      "¥35,000 examination-fee receipt",
      "Oral-presentation slides and technical Q&A bank",
      "Self-funded two-year academic and living-cost plan",
    ],
    afterSubmission: [
      "TAO, registered email এবং spam folder monitor করুন; examinee number ও online-exam instructions সাধারণত exam-এর আগে প্রকাশ হবে।",
      "Supervisor-এর feedback দিয়ে research plan refine করুন, কিন্তু submitted facts বা records inconsistent করবেন না।",
      "27 January exam-এর Zoom link, JST time, ID requirement ও screen-share rules official notice থেকে confirm করুন।",
      "Scholarship search চালিয়ে যান, তবে written award না পাওয়া পর্যন্ত visa financial proof এবং full self-funded backup বজায় রাখুন।",
    ],
    cautions: [
      "এটিকে fully funded scholarship, active opening বা guaranteed waiver লিখবেন না; এটি upcoming SSFS admission route।",
      "First-round oral format ও document list second round-এ একই থাকবে ধরে নেবেন না—mid-September guideline recheck বাধ্যতামূলক।",
      "Published numerical IELTS cutoff নেই মানে English দুর্বল হলেও admission সহজ নয়; research discussion ও oral examination English-এ করতে হবে।",
      "Alternative qualification screening low GPA compensate করার route নয়; এটি non-standard educational qualification-এর equivalency যাচাই করে।",
      "Published AY2027 institutional Master’s scholarships current/former SIT bachelor students-এর জন্য restricted; guide-এর JASSO Type 1/2 loans Japanese nationals only। International students-এর post-enrollment external foundation/company awards competitive ও uncertain।",
      "¥2.81m হলো 2026 reference university-related total (¥2.77m admission/tuition/maintenance + প্রায় ¥40k association fees); application, living, housing, computer, insurance ও travel এতে নেই।",
      "Suggested supervisors verified research matches, advertised funded vacancies নয়; 2027 capacity ও willingness TAO-তে নিশ্চিত করতে হবে।",
      "Takumi Miyoshi-কে EECS direct supervisor লিখবেন না। AY2027 list-এ তাঁর direct-supervisor route GCES; Systems Engineering-এ collaborator route হলে Taku Yamazaki-র formal supervision/consent প্রয়োজন।",
      "GCES clearly English-medium হলেও সব SIT course-এর প্রতিটি subject English নয়। EECS/Systems route নিলে complete English credit, supervision, thesis ও defense plan লিখিতভাবে confirm করুন।",
      "Japanese admission requirement না হলেও daily life, internship ও চাকরির জন্য Japanese skill practical advantage দেয়।",
    ],
    officialLinks: [
      {
        label: "AY2027 admission schedule",
        href: "https://www.shibaura-it.ac.jp/en/study/graduate/schedule.html",
        description: "Second-round pre-consultation, application, exam ও result dates verify করুন।",
      },
      {
        label: "Application guideline hub",
        href: "https://www.shibaura-it.ac.jp/en/study/graduate/guideline.html",
        description: "Mid-September থেকে second-round PDF ও scholarship restrictions recheck করুন।",
      },
      {
        label: "AY2027 first-round reference guide",
        href: "https://www.shibaura-it.ac.jp/assets/EN2027_1st%20Application%20Guideline_General%EF%BC%86SSFS_v2.pdf",
        description: "Eligibility, documents, EECS oral format ও 2026 reference fees পড়ুন; second-round rules হিসেবে assume করবেন না।",
      },
      {
        label: "Special Selection for Foreign Students",
        href: "https://www.shibaura-it.ac.jp/en/study/graduate/ssfs.html",
        description: "SSFS nationality, residence, education ও English-study eligibility বুঝুন।",
      },
      {
        label: "How to apply",
        href: "https://www.shibaura-it.ac.jp/en/study/graduate/info.html",
        description: "Supervisor search, pre-consultation এবং formal application-এর sequence দেখুন।",
      },
      {
        label: "TAO pre-consultation instructions",
        href: "https://www.shibaura-it.ac.jp/en/study/graduate/Pre-consultation.html",
        description: "Upload documents, supervisor-choice flow ও mandatory pre-application process follow করুন।",
      },
      {
        label: "Graduate admission FAQ",
        href: "https://www.shibaura-it.ac.jp/en/study/graduate/faq.html",
        description: "Japanese, English/MOI, online examination ও scholarship answers verify করুন।",
      },
      {
        label: "AY2027 Master’s incentive scholarship",
        href: "https://www.shibaura-it.ac.jp/assets/1_E_shingaku_shorei_shogakukin_2026fall_2027spring.pdf",
        description: "Departmental recommendation ও SIT-student eligibility restriction সরাসরি পড়ুন।",
      },
      {
        label: "AY2027 Global Graduate Scholarship",
        href: "https://www.shibaura-it.ac.jp/assets/2_1_E_global_shogakukin_2027spring.pdf",
        description: "Current/former SIT bachelor student restriction ও award conditions যাচাই করুন।",
      },
      {
        label: "JASSO Honors Scholarship",
        href: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/about.html",
        description: "Post-enrollment competitive support-এর eligibility ও institutional nomination process দেখুন।",
      },
      {
        label: "EECS course",
        href: "https://www.shibaura-it.ac.jp/en/academics/graduate-school/eecs.html",
        description: "Degree, research scope এবং Electrical Engineering and Computer Science course structure দেখুন।",
      },
      {
        label: "Global Course of Engineering and Science",
        href: "https://www.shibaura-it.ac.jp/en/academics/graduate-school/gces.html",
        description: "English medium, English-credit requirement, overseas project/internship, thesis ও defense rules verify করুন।",
      },
      {
        label: "Official tuition and fees",
        href: "https://www.shibaura-it.ac.jp/en/study/tuition/index.html",
        description: "Published general fee information দেখুন; AY2027 final amount নতুন admission guide/offer দিয়ে update করুন।",
      },
      {
        label: "AY2027 Master’s supervisor list",
        href: "https://www.shibaura-it.ac.jp/assets/AY2027%20Spring_List%20of%20Academic%20Staff%20for%20Master%20Program_2.pdf",
        description: "Supervisor/collaborator role ও exact course দেখুন এবং second-round version প্রকাশ হলে আবার confirm করুন।",
      },
      {
        label: "Yoshiaki Yasumura · Intelligent System Lab",
        href: "https://www.shibaura-it.ac.jp/en/research/laboratory/00186.html",
        description: "AI, ML, NLP, web mining, image recognition ও data-analysis research fit যাচাই করুন।",
      },
      {
        label: "Chinthaka Premachandra · Image Processing and Robotics Lab",
        href: "https://www.shibaura-it.ac.jp/en/research/laboratory/00292.html",
        description: "Computer vision, image processing, UAV ও robotics research fit যাচাই করুন।",
      },
      {
        label: "Takumi Miyoshi · Multimedia Information Network Lab",
        href: "https://www.shibaura-it.ac.jp/en/research/laboratory/00155.html",
        description: "Digital twin, spatial sensing, P2P, IoT, ML ও smart-city research fit দেখুন; direct-supervisor course GCES।",
      },
      {
        label: "Official Miyoshi contact source",
        href: "https://www.shibaura-it.ac.jp/en/albums/abm.php?d=4312&f=abm00019861.pdf&n=Designated_REP_Prof._Miyoshi.pdf",
        description: "Official SIT project PDF-এ miyoshi@sic.shibaura-it.ac.jp contact verify করুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "soka-university-information-systems-science-masters-2027",
    country: "japan",
    university: "Soka University",
    bestFitPriority: 4,
    title: "Soka Information Systems Science: April/September 2027 Master's Guide",
    summary:
      "Information Systems Science applicant-এর জন্য English proficiency ও JLPT দুটোই optional, GRE/GMAT নেই, supervisor-approval + oral-exam selection এবং \u00a5600,000/year scholarship নিয়ে source-checked guide।",
    label: "English/JLPT optional \u00b7 Aug 26\u2013Sep 25, 2026 application",
    funding:
      "Soka University Makiguchi Memorial Educational Foundation Scholarship (2025-এর পর থেকে effective) Master's students-কে \u00a5600,000/year, দুই বছরের জন্য দেয়; সর্বোচ্চ 9 জন recipient। এটি automatic নয়\u2014entrance-exam-এ highest score পাওয়া applicants-দের মধ্যে থেকে select করা হয়, এবং application-এর সময় scholarship consideration চাওয়া হয় কিনা আলাদাভাবে select করতে হয়। Enrollment fee-তে ব্যবহার করা যায় না; enrollment-এর পরে দুই installment-এ দেওয়া হয়।",
    duration: "2 years \u00b7 April or September 2027 entry \u00b7 Hachioji campus",
    audience:
      "Computer/software systems, information security, AI, intelligent informatics, robotics বা networks background থাকা applicant যিনি English/JLPT test score ছাড়াও formal application করতে চান",
    realityCheck:
      "এটি একটি genuinely low-language-barrier CSE/IT option\u2014Information Systems Science major-এর জন্য English proficiency certificate (IELTS/TOEFL/MOI) এবং JLPT certificate দুটোই submitted research অনুযায়ী optional। আজকের independent verification-এ Makiguchi scholarship-এর exact \u00a5600,000/year \u00d7 2 years, সর্বোচ্চ 9 recipient, non-automatic selection\u2014এই সব official Graduate School of Science and Engineering scholarship page থেকে হুবহু confirm হয়েছে। তবে exact application window (26 August\u201325 September 2026), application fee (\u00a533,000) এবং tuition breakdown (admission \u00a5200,000 + tuition \u00a5790,000/year + lab fee \u00a5110,000/year) আজ সরাসরি PDF থেকে re-fetch করা যায়নি (site কিছু page block করে/PDF route আলাদা)\u2014application-এর আগে official guideline নিজে download করে এই সংখ্যাগুলো পুনরায় মিলিয়ে নিন। Seats \u201ca few\u201d এবং supervisor approval + oral exam লাগে, তাই easy admission নয়।",
    highlights: [
      "Information Systems Science major computer/software systems, communication/control/networking systems, multimedia processing, AI ও intelligent informatics নিয়ে কাজ করে; independently verified official major page অনুযায়ী Hiroki Imamura বর্তমান major chair।",
      "AY2027 Special Screening for International Applicants existence independently confirmed অফিসিয়াল admissions page-এ; exact dates/fee submitted research থেকে নেওয়া\u2014official PDF দিয়ে re-confirm করুন।",
      "Submitted schedule: April 2027 entry application 26 August\u201325 September 2026 (5:00 PM JST), oral exam 31 October 2026, result 6 November 2026। September 2027 entry দ্বিতীয় round: application 4 February\u20134 March 2027, oral exam 15 May, result 24 May।",
      "English proficiency certificate (IELTS/TOEFL/MOI) এবং JLPT certificate\u2014submitted research অনুযায়ী Information Systems Science applicant-দের জন্য দুটোই optional; score/certificate না থাকলেও application সম্ভব বলা হয়েছে।",
      "GRE/GMAT কোনো requirement হিসেবে পাওয়া যায়নি। Numerical hard-minimum GPA প্রকাশ করা হয়নি\u2014individual-equivalency screening route-ও আছে।",
      "Selection: document screening + oral examination (campus বা Zoom online)। Application-এর আগে prospective supervisor-এর সঙ্গে email discussion, online Zoom pre-interview এবং signed supervisor-approval form বাধ্যতামূলক।",
      "Makiguchi Memorial Educational Foundation Scholarship independently verified: Master's students \u00a5600,000/year \u00d7 2 years, সর্বোচ্চ 9 recipient, non-automatic, entrance-exam performance-ভিত্তিক selection।",
      "Tomoko Kaneko (Information Security, System Safety, Unified Theory of Software), Norihiko Shinomiya (Computer Systems and Networks, autonomous decentralized networks), Yoshinobu Hagiwara (Intelligent Robotics, Intelligent Informatics)\u2014তিনজনই independently verified real official Soka faculty-profile page-সহ। Direct personal email public না; official contact route eng-grad@soka.ac.jp।",
    ],
    fit: [
      "Computer systems, software/information systems, security, AI, robotics বা networks-এর hands-on evidence আছে।",
      "IELTS/TOEFL/JLPT score না থাকলেও (বা থাকলেও) formal application করতে ইচ্ছুক।",
      "Prospective supervisor-এর সঙ্গে email/Zoom pre-interview এবং signed approval-এর process handle করতে পারবেন।",
      "Scholarship না পেলেও প্রায় \u00a51.1m first-year academic cost (submitted figure, official PDF দিয়ে re-verify করুন) বহনের বাস্তবসম্মত পরিকল্পনা আছে।",
    ],
    quickStart: [
      "Kaneko, Shinomiya ও Hagiwara-এর official faculty profile পড়ে একজন primary supervisor target বাছুন এবং eng-grad@soka.ac.jp-এর মাধ্যমে বা directly contact-এর সঠিক route নিশ্চিত করুন।",
      "Application খোলার আগেই (আজ অনুযায়ী কয়েকদিনের মধ্যে) supervisor-এর সঙ্গে email discussion ও Zoom pre-interview শুরু করুন।",
      "Official AY2027 Special Screening PDF নিজে download করে exact application date, fee ও tuition breakdown re-confirm করুন।",
      "Scholarship consideration চান কিনা\u2014application form-এ এই decision আগে থেকেই ভেবে রাখুন, কারণ এটি opt-in।",
    ],
    steps: [
      {
        title: "Official guideline নিজে verify করুন",
        timing: "এখনই",
        description:
          "Scholarship structure ও faculty independently confirmed, কিন্তু exact date/fee/tuition এখনো official PDF থেকে re-verify করা দরকার।",
        actions: [
          "https://www.soka.ac.jp/en/admissions/application/graduate_policy/eng-grad/t-grad-m/ থেকে AY2027 Special Screening guideline PDF খুঁজে exact date ও fee নোট করুন।",
          "https://www.soka.ac.jp/en/grad-eng/eng_scholarship/ থেকে Makiguchi scholarship-এর current application/opt-in process পড়ুন।",
          "eng-grad@soka.ac.jp-এ প্রশ্ন থাকলে সরাসরি যোগাযোগ করতে পারেন।",
        ],
        readyWhen:
          "Application window, fee এবং tuition breakdown নিজের চোখে official PDF/page-এ দেখে নিশ্চিত হয়েছেন।",
      },
      {
        title: "Supervisor approval process শুরু করুন",
        timing: "Application খোলার আগেই",
        description:
          "Information Systems Science-এ supervisor pre-approval application-এর অংশ, তাই দেরি করলে window miss হতে পারে।",
        actions: [
          "Kaneko (security/dependable systems), Shinomiya (networks/distributed systems) ও Hagiwara (AI/robotics)-এর মধ্যে আপনার experience-এর সঙ্গে সবচেয়ে relevant একজন বাছুন।",
          "Official faculty profile থেকে recent research পড়ে personalized email/CV প্রস্তুত করুন।",
          "Email discussion-এর পর Zoom pre-interview request করুন এবং approval পেলে signed supervisor-approval form সংগ্রহ করুন।",
        ],
        readyWhen:
          "একজন supervisor approve করেছেন এবং signed approval form হাতে আছে।",
      },
      {
        title: "Application সম্পূর্ণ করুন",
        timing: "August\u2013September 2026 (official PDF দিয়ে exact date re-confirm করুন)",
        description:
          "English/JLPT optional হলেও বাকি document ঠিকমতো প্রস্তুত রাখা জরুরি।",
        actions: [
          "Application form, research interest/reason for major, bachelor's transcript, degree certificate, graduation thesis summary, দুটি recommendation letter ও supervisor approval form জোগাড় করুন।",
          "English/MOI এবং JLPT থাকলে optional evidence হিসেবে attach করুন; না থাকলে সেই ছাড়াই submit করুন।",
          "Financial-support statement, passport/residence card ও (চাইলে) scholarship application form প্রস্তুত করুন।",
          "Application fee (submitted figure \u00a533,000, re-verify করুন) দিয়ে window-এর মধ্যে submit করুন।",
        ],
        readyWhen:
          "সব document সংগ্রহ করে official application window-এর মধ্যে submit করা হয়েছে।",
      },
      {
        title: "Oral exam ও scholarship result-এর জন্য প্রস্তুত হোন",
        timing: "Oral exam \u2192 result (submitted: Oct 31 \u2192 Nov 6, 2026 for April entry)",
        description:
          "Oral exam campus বা Zoom-এ হতে পারে; scholarship আলাদা highest-score selection।",
        actions: [
          "Research interest, prior project ও proposed study plan\u2014এই তিনটি বিষয়ে concise oral explanation প্রস্তুত রাখুন।",
          "Scholarship consideration select করে থাকলে entrance-exam performance-ই মূল criterion মনে রেখে প্রস্তুতি নিন।",
          "Result পাওয়ার পর tuition/admission-fee payment deadline ও scholarship (পেলে) disbursement schedule লিখিতভাবে নিশ্চিত করুন।",
        ],
        readyWhen:
          "Oral exam সম্পন্ন এবং admission ও scholarship result দুটোই লিখিতভাবে confirm হয়েছে।",
      },
    ],
    checklist: [
      "Official AY2027 Special Screening PDF (self-verified)", "Supervisor email discussion + Zoom pre-interview",
      "Signed supervisor-approval form", "Application form", "Reason for choosing major",
      "Bachelor's transcript", "Degree/graduation certificate", "Graduation thesis/research summary",
      "Two recommendation letters", "English/MOI evidence (optional)", "JLPT certificate (optional)",
      "Financial-support statement", "Passport/Residence Card", "Scholarship application form (if desired)",
    ],
    afterSubmission: [
      "Oral-exam schedule (campus বা Zoom) এবং result-notification date আলাদাভাবে track করুন।",
      "Scholarship result admission result-এর সঙ্গে একসঙ্গে নাও আসতে পারে\u2014দুটোই আলাদাভাবে confirm করুন।",
      "Admission পেলে admission fee, tuition ও laboratory fee-এর exact payment schedule লিখিতভাবে নিশ্চিত করুন।",
    ],
    cautions: [
      "Exact application date, fee ও tuition breakdown আজ direct official PDF থেকে re-fetch করা যায়নি\u2014শুধু এই guide-এর ওপর নির্ভর না করে official PDF নিজে download করুন।",
      "Seats \u201ca few\u201d এবং supervisor approval + oral exam বাধ্যতামূলক\u2014English/JLPT optional মানে easy admission নয়।",
      "Makiguchi scholarship non-automatic এবং enrollment fee-তে ব্যবহার করা যায় না\u2014প্রথম payment-এর জন্য আলাদা budget রাখুন।",
      "Direct faculty email public profile-এ নেই\u2014eng-grad@soka.ac.jp দিয়ে official contact route ব্যবহার করুন, অনুমান করা email পাঠাবেন না।",
    ],
    officialLinks: [
      { label: "Graduate School of Science and Engineering (Master's Admission)", href: "https://www.soka.ac.jp/en/admissions/application/graduate_policy/eng-grad/t-grad-m/", description: "AY2027 Special Screening PDF, exact date ও fee এখান থেকে verify করুন।" },
      { label: "Information Systems Science major", href: "https://www.soka.ac.jp/en/grad-eng/sys/", description: "Research fields ও current faculty list দেখুন।" },
      { label: "Scholarships for International Graduate Students", href: "https://www.soka.ac.jp/en/grad-eng/eng_scholarship/", description: "Makiguchi scholarship amount, recipient count ও selection process verify করুন।" },
      { label: "Norihiko Shinomiya faculty profile", href: "https://www.soka.ac.jp/en/faculty-profile/norihiko-shinomiya/", description: "Research area ও official contact route verify করুন।" },
      { label: "Tomoko Kaneko faculty profile", href: "https://www.soka.ac.jp/en/faculty-profile/tomoko-kaneko/", description: "Research area ও official contact route verify করুন।" },
    ],
    reviewedAt: "August 17, 2026",
  },
  {
    slug: "doshisha-istc-information-computer-science-masters-2027",
    country: "japan",
    university: "Doshisha University",
    businessPriority: 16,
    englishBusinessPrograms: "Global MBA · Global Business and Management Studies",
    businessOfficialUrl: "https://gmba.doshisha.ac.jp/en/",
    title: "Doshisha ISTC Information & Computer Science: September 2027 Master's Guide",
    summary:
      "English-taught ISTC Master's route\u2014MOI-based English evidence, GRE/GMAT নেই, tiered tuition-reduction scholarship এবং AI/vision/robotics faculty নিয়ে medium-difficulty target।",
    label: "MOI route \u00b7 Sep 2027 \u00b7 Jan 20\u2013Feb 8, 2027 application",
    funding:
      "Doshisha-এর Merit Scholarship for Self-Funded International Students eligible students-কে entrance-exam performance ও research plan অনুযায়ী tiered tuition reduction দেয় (full/50%/30%-tuition-equivalent categories উল্লেখ আছে official scholarship page-এ)। University বলছে প্রায় 90% international student কোনো না কোনো মাত্রায় (20\u2013100%) tuition exemption পান, কিন্তু 100% guaranteed নয় এবং amount/recipient সংখ্যা graduate school অনুযায়ী পরিবর্তিত হয়।",
    duration: "2 years \u00b7 September entry \u00b7 Kyotanabe campus",
    audience:
      "AI/ML, computer vision, image processing, IoT, sensor fusion বা robotics background থাকা applicant যিনি English-medium bachelor degree evidence দিয়ে apply করতে চান",
    realityCheck:
      "ISTC coursework English-এ করা যায় এবং official admission guide English-medium Bachelor's degree proof-কে English-proficiency evidence হিসেবে গ্রহণ করে (MOI route)। তবে আজকের independent re-verification-এ istc.doshisha.ac.jp domain-এর প্রায় সব page (admission page, admissions-guide PDF, news post) automated fetch block করেছে (HTTP 403)। তাই exact IELTS numerical cutoff, ঠিক application date এবং exact tuition figure এই entry-তে মূলত submitted research থেকে নেওয়া\u2014application-এর আগে official PDF নিজে download করে প্রতিটি সংখ্যা পুনরায় মিলিয়ে নিন। GRE/GMAT বাধ্যতামূলক নয় বলে পাওয়া গেছে এবং এটি easy-admission university নয়\u2014research-fit ও supervisor assessment গুরুত্বপূর্ণ।",
    highlights: [
      "Graduate School of Science and Engineering-এর Information and Computer Science area-তে ISTC (International Science and Technology Course) English-track Master's পড়ানো হয়; Japanese-language entrance requirement নেই।",
      "September 2027 entry-এর application window submitted research অনুযায়ী 20 January\u20138 February 2027; academic term শুরু 21 September 2027। Official PDF (AdmissionsGuide-M-SE.pdf) থেকে exact date নিজে re-confirm করুন, কারণ আজ সরাসরি fetch করা যায়নি।",
      "English proficiency evidence হিসেবে English-medium Bachelor's degree-এর official proof (MOI-type certificate) গ্রহণযোগ্য বলে submitted research বলছে। নির্দিষ্ট IELTS numerical cutoff আজকের independent search-এও পাওয়া যায়নি\u2014তাই MOI route-কেই সবচেয়ে নিরাপদ ধরা হচ্ছে, শুধু IELTS 5.5-কে guaranteed sufficient নয়।",
      "GRE/GMAT বাধ্যতামূলক requirement হিসেবে পাওয়া যায়নি এবং published hard-minimum GPA (যেমন 3.0/4.0) দেখা যায়নি।",
      "Scholarship: official ISTC scholarship page (independently located) অনুযায়ী Merit Scholarship for Self-Funded International Students entrance-exam performance ও research plan-ভিত্তিক tiered tuition reduction দেয়; university-wide প্রায় 90% international student কিছু না কিছু reduction (20\u2013100%) পান বলে university নিজেই জানিয়েছে।",
      "Masafumi Hashimoto (Faculty of Science and Engineering, Department of Intelligent Information Engineering and Sciences) independently verified real faculty\u2014LiDAR sensing, sensor fusion, autonomous vehicles, mobile robotics। Masahiro Okuda (image processing/computer vision/hyperspectral imaging) submitted research-এ দেওয়া হয়েছে কিন্তু আজ আলাদাভাবে re-verify করা যায়নি\u2014contact করার আগে laboratory page নিজে check করুন।",
      "First-year tuition submitted research অনুযায়ী প্রায় ¥1.21 million level (national university-এর ¥535,800/year-এর তুলনায় বেশি); subsequent years কম কারণ one-time admission fee repeat হয় না। Exact current figure official fee table থেকে verify করুন।",
    ],
    fit: [
      "AI/ML, computer vision, image processing, sensor systems, robotics বা adjacent quantitative field-এর hands-on experience আছে।",
      "English-medium Bachelor's degree-এর official proof জোগাড় করতে পারবেন (MOI route)।",
      "Private-university tuition (scholarship ছাড়া প্রায় ¥1.2m+/year) দিতে বা competitive scholarship পাওয়ার জন্য প্রস্তুত।",
      "Research-fit ভিত্তিক admission-এর জন্য specific laboratory/supervisor বেছে নিয়ে personalized contact করতে ইচ্ছুক।",
    ],
    quickStart: [
      "Official AdmissionsGuide-M-SE.pdf নিজের browser থেকে download করে exact January\u2013February 2027 date, IELTS/MOI rule এবং document checklist পুনরায় নিশ্চিত করুন (আজ automated fetch block হয়েছে)।",
      "Masafumi Hashimoto (mhashimo@mail.doshisha.ac.jp, verified real) এবং Masahiro Okuda (masokuda@mail.doshisha.ac.jp, submitted research\u2014laboratory page দিয়ে re-check করুন) দুজনের laboratory page পড়ে research fit নির্ধারণ করুন।",
      "English-medium Bachelor's degree প্রমাণের official document (transcript/letter) কোথা থেকে পাবেন তা এখনই খুঁজে বের করুন।",
      "ISTC scholarship page থেকে Merit Scholarship-এর current eligibility ও tier criteria পড়ুন; scholarship ছাড়া budget-ও আলাদাভাবে প্রস্তুত রাখুন।",
    ],
    steps: [
      {
        title: "Official admission guide নিজে verify করুন",
        timing: "এখনই",
        description:
          "istc.doshisha.ac.jp আজ automated tool-এর জন্য block করেছে; browser দিয়ে সরাসরি PDF/page দেখতে হবে।",
        actions: [
          "https://istc.doshisha.ac.jp/files/koujm/page/AdmissionsGuide-M-SE.pdf browser-এ খুলে exact application date, English-evidence rule ও required documents নোট করুন।",
          "istc.doshisha.ac.jp/en/tuition/scholarship.html থেকে Merit Scholarship-এর current tier ও eligibility criteria পড়ুন।",
          "General ISTC contact (jt-istc@mail.doshisha.ac.jp)-এ প্রশ্ন থাকলে সরাসরি জিজ্ঞাসা করতে পারেন।",
        ],
        readyWhen:
          "Application window, English-evidence rule এবং tuition/scholarship figure নিজের চোখে official PDF/page-এ দেখে নিশ্চিত হয়েছেন।",
      },
      {
        title: "Laboratory ও supervisor fit নির্ধারণ করুন",
        timing: "Verification-এর পরপরই",
        description:
          "ISTC admission research-fit ভিত্তিক; সঠিক laboratory বাছা গুরুত্বপূর্ণ।",
        actions: [
          "Hashimoto-এর IoT/sensor/robotics work এবং Okuda-এর vision/image-processing work\u2014কোনটি আপনার experience-এর সঙ্গে বেশি মেলে তুলনা করুন।",
          "প্রতিটি laboratory-এর official page থেকে recent project ও publication পড়ে personalized research-interest note তৈরি করুন।",
          "Laboratory page-এ email confirm করে একটি tailored introductory email পাঠান, CV ও research interest-সহ।",
        ],
        readyWhen:
          "একজন primary supervisor target এবং তাঁর সাম্প্রতিক কাজের সঙ্গে সংযুক্ত personalized research note প্রস্তুত।",
      },
      {
        title: "Application সম্পূর্ণ করুন",
        timing: "January\u2013February 2027 (official PDF দিয়ে re-confirm করুন)",
        description:
          "MOI route ব্যবহার করলে English-medium proof সংগ্রহে সময় লাগতে পারে, তাই আগে শুরু করুন।",
        actions: [
          "Academic/degree evidence, transcript, application form, research-related information এবং English-medium Bachelor's proof প্রস্তুত করুন।",
          "Official checklist অনুযায়ী বাকি সব document verify করুন\u2014exact list PDF-এ আছে।",
          "Application window-এর আগেই (Jan 20\u2013Feb 8, 2027 হিসেবে submitted, পুনরায় verify করুন) সব কিছু জমা দেওয়ার প্রস্তুতি সম্পূর্ণ করুন।",
        ],
        readyWhen:
          "সব document সংগ্রহ করা হয়েছে এবং official application window-এর মধ্যে submit করা হয়েছে।",
      },
      {
        title: "Scholarship ও tuition package verify করুন",
        timing: "Offer/scholarship-decision stage",
        description:
          "Merit Scholarship tiered এবং entrance-exam performance-নির্ভর\u2014guaranteed নয়।",
        actions: [
          "কোন tier (full/50%/30%-equivalent) পেয়েছেন এবং renewal condition কী তা লিখিতভাবে নিশ্চিত করুন।",
          "Scholarship না পেলে বা partial পেলে পুরো ¥1.2m+/year tuition বহন করার alternative budget রাখুন।",
          "Renewal-এর জন্য academic performance standard কী তা আগে থেকেই জেনে রাখুন।",
        ],
        readyWhen:
          "Scholarship tier (যদি থাকে) ও uncovered tuition/living cost লিখিতভাবে স্পষ্ট।",
      },
    ],
    checklist: [
      "Official AdmissionsGuide-M-SE.pdf (self-verified)", "Academic/degree evidence", "Transcript",
      "Application form", "Research-related information/research plan",
      "English-medium Bachelor's degree proof (MOI route)", "Laboratory/supervisor research-interest note",
      "Merit Scholarship eligibility check",
    ],
    afterSubmission: [
      "Supervisor/department reply এবং official application status আলাদাভাবে track করুন।",
      "Scholarship decision ও admission decision একসঙ্গে নাও আসতে পারে\u2014দুটোই আলাদাভাবে confirm করুন।",
      "Offer পেলে scholarship tier, renewal condition ও uncovered cost লিখিতভাবে নিশ্চিত করার আগে accept করবেন না।",
    ],
    cautions: [
      "istc.doshisha.ac.jp আজ automated verification tool block করেছে\u2014exact date/tuition/IELTS cutoff অবশ্যই official PDF/page browser দিয়ে নিজে re-confirm করুন, শুধু এই guide-এর ওপর নির্ভর করবেন না।",
      "IELTS 5.5-এর specific numerical cutoff কোথাও confirmed পাওয়া যায়নি\u2014MOI route-ই সবচেয়ে নিরাপদ evidence।",
      "Masahiro Okuda-এর তথ্য independently re-verify করা যায়নি\u2014contact করার আগে laboratory page-এ নাম/email নিজে check করুন।",
      "100% tuition waiver guaranteed নয়; Doshisha established private university, তাই একে easy admission ধরবেন না।",
    ],
    officialLinks: [
      { label: "ISTC Admissions Guide (Master's, Science & Engineering)", href: "https://istc.doshisha.ac.jp/files/koujm/page/AdmissionsGuide-M-SE.pdf", description: "Exact application date, English-evidence rule ও document checklist এখান থেকেই verify করুন।" },
      { label: "ISTC Scholarship page", href: "https://istc.doshisha.ac.jp/en/tuition/scholarship.html", description: "Merit Scholarship tier ও eligibility criteria দেখুন।" },
      { label: "Hashimoto laboratory (Intelligent Mechatro-Informatics)", href: "https://istc.doshisha.ac.jp/en/course/information/laboratories/labo_10.html", description: "IoT/sensor/robotics research ও official contact verify করুন।" },
      { label: "ISTC Admissions overview", href: "https://istc.doshisha.ac.jp/istc/en/admission/admission.html", description: "General admission process overview।" },
    ],
    reviewedAt: "August 17, 2026",
  },
  ...usLowCostGuides,
  ...canadaGuides,
  ...koreaGuides,
  ...swissGuides,
  ...onlyVerifiedEnglishMasters(japanShortlistAdditions),
  ...onlyVerifiedEnglishMasters(tierAJapanGuides),
  ...onlyVerifiedEnglishMasters(regionalPublicJapanGuides),
];

export function getScholarshipGuide(slug: string) {
  return scholarshipGuides.find((guide) => guide.slug === slug);
}
