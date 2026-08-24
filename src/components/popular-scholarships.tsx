import styles from "./popular-scholarships.module.css";

type Scholarship = {
  name: string;
  level: string;
  tag: string;
  points: string[];
  href: string;
};

type ScholarshipGroup = {
  eyebrow: string;
  title: string;
  description: string;
  items: Scholarship[];
};

const mextUrl = "https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/";

const groups: ScholarshipGroup[] = [
  {
    eyebrow: "Government funded",
    title: "জনপ্রিয় Fully Funded MEXT routes",
    description: "Embassy ও university recommendation—দুই route এবং degree-level অনুযায়ী প্রধান MEXT options।",
    items: [
      { name:"MEXT Scholarship — Embassy Recommendation", level:"Bachelor · Master’s · PhD", tag:"Top priority", href:"https://www.bd.emb-japan.go.jp/itpr_ja/00_000706.html", points:["Tuition সম্পূর্ণ মওকুফ ও মাসিক living allowance।","নির্ধারিত শর্তে Japan যাওয়া–আসার airfare।","Bangladesh-এর current notice অনুযায়ী Ministry of Education ও Embassy selection process follow করতে হয়।"] },
      { name:"MEXT Scholarship — University Recommendation", level:"মূলত Master’s · PhD", tag:"University route", href:mextUrl, points:["Japanese university eligible candidate-কে MEXT-এর জন্য nominate করে।","Tuition ও monthly stipend অন্তর্ভুক্ত; airfare quota/route অনুযায়ী যাচাই করতে হবে।","আগে suitable professor, graduate program এবং university nomination quota খুঁজুন।"] },
      { name:"MEXT Undergraduate Scholarship", level:"Bachelor’s", tag:"Undergraduate", href:mextUrl, points:["সাধারণত preparatory Japanese education-সহ দীর্ঘমেয়াদি degree route।","Tuition, monthly stipend ও নির্ধারিত travel allowance অন্তর্ভুক্ত।","Written examination-এর subject ও current age rule official guideline থেকে verify করুন।"] },
      { name:"MEXT Research Student Scholarship", level:"Research student · Master’s · PhD", tag:"Graduate", href:mextUrl, points:["Research proposal, academic fit ও provisional acceptance গুরুত্বপূর্ণ।","CSE, Engineering, Business, Economicsসহ বিস্তৃত field cover করতে পারে।","Embassy recommendation ও কিছু university recommendation route পাওয়া যায়।"] },
      { name:"MEXT Specialized Training College", level:"Diploma · Vocational", tag:"Skills route", href:mextUrl, points:["Technology, business, design, tourismসহ specialized subject।","Preparatory Japanese education, tuition, stipend ও travel support থাকে।","Current field list এবং examination subjects official notice থেকে দেখুন।"] },
      { name:"MEXT College of Technology — KOSEN", level:"Technical education", tag:"Engineering", href:mextUrl, points:["HSC/upper-secondary level-এর পর engineering ও technical route।","Preparatory Japanese course-এর পর সাধারণত KOSEN-এর third year-এ entry।","Tuition, stipend ও নির্ধারিত airfare সরকারি অর্থায়নে থাকে।"] },
    ],
  },
  {
    eyebrow: "Graduate funding",
    title: "Master’s ও PhD-এর জন্য পরিচিত scholarships",
    description: "Development, leadership, research ও graduate study-এর জন্য competitive international awards।",
    items: [
      { name:"JDS Scholarship — Bangladesh", level:"Master’s · Limited PhD", tag:"Fully funded", href:"https://jds-scholarship.org/country/bangladesh/", points:["English-medium Japanese graduate programs।","Current Bangladesh Master’s intake-এ ৩০টি dispatch place উল্লেখ আছে।","মূলত eligible BCS cadre, Bangladesh Bank, BJS ও নির্ধারিত public officials-এর route।"] },
      { name:"ADB–Japan Scholarship Program — ADB-JSP", level:"Development-related Master’s", tag:"Full support", href:"https://www.adb.org/work-with-us/careers/japan-scholarship-program", points:["Economics, management, science, technology ও development-related programs।","Tuition, subsistence, books, insurance, travel এবং research-related support থাকতে পারে।","শুধু ADB-JSP designated institution/program-এ apply করা যায়।"] },
      { name:"Joint Japan/World Bank Scholarship — JJ/WBGSP", level:"Development-related Master’s", tag:"Professional", href:"https://www.worldbank.org/en/programs/scholarships/jj-wbgsp", points:["Eligible developing-country applicants-এর relevant professional experience প্রয়োজন।","Participating Master’s program-এ tuition, basic medical insurance, travel ও living allowance।","Current participating programs এবং application window প্রতি cycle-এ verify করুন।"] },
      { name:"Honjo International Scholarship", level:"Master’s · PhD", tag:"Direct application", href:"https://www.hisf.or.jp/en/scholarship/foreigner/", points:["সব nationality ও academic field-এর graduate applicants বিবেচিত হতে পারেন।","Japan-এর বাইরে থেকেও apply করা যায়, যদি Japanese graduate school acceptance থাকে।","University pre-selection ছাড়াই foundation-এ direct application route।"] },
      { name:"Rotary Yoneyama Memorial Scholarship", level:"Bachelor · Master’s · PhD", tag:"Overseas route", href:"https://www.rotary-yoneyama.or.jp/english/overseas", points:["Overseas candidate route Japanese university admission-এর সঙ্গে linked।","Current guide-এ undergraduate ¥100,000 এবং graduate ¥140,000 monthly support উল্লেখ আছে।","Basic Japanese communication—প্রায় JLPT N4 level—প্রত্যাশিত হতে পারে।"] },
    ],
  },
  {
    eyebrow: "After admission",
    title: "Japan-এ ভর্তি হওয়ার পরের financial support",
    description: "এই awards-এর বেশিরভাগে university nomination, current enrolment অথবা Japan residency condition থাকে।",
    items: [
      { name:"JASSO Monbukagakusho Honors Scholarship", level:"Bachelor · Master’s · PhD", tag:"Monthly support", href:"https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/index.html", points:["Privately financed international students-এর জন্য।","সাধারণত university recommendation বা eligible pre-arrival/EJU route প্রয়োজন।","এটি অধিকাংশ ক্ষেত্রে full scholarship নয়; monthly support প্রদান করে।"] },
      { name:"JASSO Student Exchange Support Program", level:"Short-term exchange", tag:"Exchange", href:"https://www.studyinjapan.go.jp/en/about/support-program.html", points:["সাধারণত ৮ দিন থেকে এক বছরের exchange study support।","Home university ও Japanese institution-এর exchange agreement প্রয়োজন।","Current stipend, duration ও nomination process institution থেকে verify করুন।"] },
      { name:"JEES International Scholarships", level:"University · Graduate school", tag:"Nomination", href:"https://www.jees.or.jp/en/foundation-en/", points:["Privately funded international students-এর জন্য একাধিক award।","University recommendation প্রয়োজন; direct student application গ্রহণ করা হয় না।","নিজের university scholarship office থেকে open program যাচাই করুন।"] },
      { name:"Heiwa Nakajima Foundation Scholarship", level:"Undergraduate · Graduate", tag:"University route", href:"https://www.hnf.jp/shogaku/english/", points:["Japanese university-তে enrolled foreign students-এর জন্য।","University recommendation ছাড়া individual direct application করা যায় না।","পরবর্তী academic year-এর notice সাধারণত university scholarship office পায়।"] },
      { name:"Nitori International Scholarship Foundation", level:"Undergraduate · Master’s", tag:"Private award", href:"https://www.nitori-shougakuzaidan.com/", points:["Japan-এ privately financed international students-এর monthly support।","Current university listings-এ Japanese communication ability গুরুত্বপূর্ণ হতে পারে।","Application period, amount ও direct/nomination route প্রতি cycle-এ check করুন।"] },
      { name:"Kyoritsu International Foundation Scholarship", level:"Asian international students", tag:"Asia focus", href:"https://kif-org.com/", points:["Japan-এ study করা Asian international students-কে support করে।","Bangladeshi students current eligible-country notice অনুযায়ী apply করতে পারেন।","University recommendation ও designated-school condition আগে verify করুন।"] },
      { name:"Sato Yo International Scholarship Foundation", level:"Bachelor · Graduate routes", tag:"South Asia", href:"https://sisf.or.jp/en/", points:["ASEAN ও Southwest Asia-এর ১৮টি target country-এর মধ্যে Bangladesh অন্তর্ভুক্ত।","University/application office route এবং cultural exchange participation গুরুত্বপূর্ণ।","Current academic level ও nomination requirements official notice থেকে দেখুন।"] },
      { name:"Otsuka Toshimi Scholarship Foundation", level:"Selected degree fields", tag:"In-Japan only", href:"https://otsukafoundation.org/english/guide/index.html", points:["Health-related fields এবং business administration-এর eligible students।","Current guide অনুযায়ী applicant-কে Japan-এ resident ও degree program-এ enrolled থাকতে হয়।","Scholarship amount selection result ও concurrent funding অনুযায়ী পরিবর্তিত হয়।"] },
      { name:"Japan Foundation for UNU — jfUNU", level:"UNU-IAS MSc in Sustainability", tag:"UNU", href:"https://unu.edu/ias/msc-scholarships", points:["Eligible developing-country applicants-এর জন্য competitive support।","Current information-এ monthly allowance এবং সম্ভাব্য tuition waiver উল্লেখ আছে।","আলাদা scholarship form নেই; MSc admission application-এর অংশ হিসেবে consideration হয়।"] },
    ],
  },
];

export function PopularScholarships() {
  const total = groups.reduce((count, group) => count + group.items.length, 0);
  return (
    <section className={styles.section} id="popular-scholarships">
      <header className={styles.header}>
        <div><span>Japan funding directory</span><h2>Scholarship-এর নাম ও apply করার route বুঝুন</h2><p>University shortlist-এর পাশাপাশি কোন scholarship কখন এবং কীভাবে pursue করবেন—এক জায়গায় organized overview।</p></div>
        <strong><b>{String(total).padStart(2,"0")}</b> scholarship routes</strong>
      </header>

      <nav className={styles.jumpLinks} aria-label="Scholarship groups">
        {groups.map((group,index)=><a href={`#scholarship-group-${index+1}`} key={group.title}><span>{String(index+1).padStart(2,"0")}</span>{group.eyebrow}</a>)}
      </nav>

      {groups.map((group,groupIndex)=>(
        <div className={styles.group} id={`scholarship-group-${groupIndex+1}`} key={group.title}>
          <div className={styles.groupHeading}><span>{String(groupIndex+1).padStart(2,"0")}</span><div><small>{group.eyebrow}</small><h3>{group.title}</h3><p>{group.description}</p></div></div>
          <div className={styles.grid}>
            {group.items.map((item,itemIndex)=>(
              <details className={styles.card} open={groupIndex===0&&itemIndex===0} key={item.name}>
                <summary><div><span>{item.tag}</span><h4>{item.name}</h4><p>{item.level}</p></div><b aria-hidden="true">+</b></summary>
                <div className={styles.cardBody}><ul>{item.points.map(point=><li key={point}>{point}</li>)}</ul><a href={item.href} target="_blank" rel="noreferrer">Official source দেখুন <span aria-hidden="true">↗</span></a></div>
              </details>
            ))}
          </div>
        </div>
      ))}

      <aside className={styles.notice}><b>Apply করার আগে</b><p>Scholarship availability, amount, eligibility ও deadline প্রতি cycle-এ বদলাতে পারে। Official guideline এবং written award notice-ই final authority।</p><a href="https://www.studyinjapan.go.jp/en/search-for-scholarships/tuition-reduction_search.php?lang=en" target="_blank" rel="noreferrer">Study in Japan scholarship search ↗</a></aside>
    </section>
  );
}
