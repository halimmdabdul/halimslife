import Image from "next/image";
import Link from "next/link";

import portrait from "@/assets/halim-portrait-v2.png";
import robotics from "@/assets/hero/slide-1.jpeg";
import japanWorkshop from "@/assets/hero/slide-3.jpeg";
import japanese from "@/assets/hero/slide-5.jpeg";
import { BrandLogo } from "@/components/brand-logo";
import { SiteHeader } from "@/components/site-header";

import styles from "./home.module.css";

type IconName = "arrow" | "book" | "briefcase" | "code" | "flag" | "globe" | "graduation" | "mail" | "plane" | "play" | "robot" | "users" | "video";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    book: <><path d="M4 5c3-1 6 0 8 2v13c-2-2-5-3-8-2V5Z" /><path d="M20 5c-3-1-6 0-8 2v13c2-2 5-3 8-2V5Z" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 7V5h8v2M3 12h18M10 12v2h4v-2" /></>,
    code: <><path d="m8 9-3 3 3 3m8-6 3 3-3 3M14 5l-4 14" /></>,
    flag: <><path d="M5 21V4" /><path d="M5 5c5-3 9 3 14 0v9c-5 3-9-3-14 0" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" /></>,
    graduation: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11v5c3 3 9 3 12 0v-5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    plane: <path d="m3 11 18-8-7 18-3-7-8-3Zm8 3 4-4" />,
    play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4V8Z" /></>,
    robot: <><rect x="5" y="7" width="14" height="12" rx="3" /><path d="M12 3v4M8 12h.01M16 12h.01M9 16h6" /></>,
    users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-4 2-7 6-7s6 3 6 7M16 5c3 0 4 2 4 4s-1 4-4 4m1 1c3 1 4 3 4 6" /></>,
    video: <><path d="m10 8 6 4-6 4V8Z" /><rect x="3" y="4" width="18" height="16" rx="3" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

const pathways = [
  { tone: styles.japanesePath, icon: "book" as const, title: "Japanese Learning", text: "শূন্য থেকে JLPT পর্যন্ত ধাপে ধাপে গাইড, নোট, ভোকাবুলারি ও প্র্যাকটিস।", href: "/academy/japanese-n5" },
  { tone: styles.techPath, icon: "code" as const, title: "Tech & Programming", text: "প্রোগ্রামিং ফান্ডামেন্টাল, ওয়েব ডেভেলপমেন্ট, DSA ও প্র্যাকটিক্যাল প্রজেক্ট।", href: "/academy" },
  { tone: styles.careerPath, icon: "briefcase" as const, title: "Japan Career", text: "জব সার্চ, ভিসা গাইড, রিজিউমে টিপস এবং ইন্টারভিউ প্রস্তুতি।", href: "/journey" },
];

const projects = [
  { tone: styles.kana, top: "かな", name: "KanaStory", text: "কানা শেখার ইন্টার‍্যাক্টিভ ওয়েব অ্যাপ—গল্পের সাথে হিরাগানা।", tags: ["Next.js", "TypeScript", "Tailwind CSS"], href: "https://kanastory.halimslife.com/" },
  { tone: styles.jlpt, top: "JLPT", name: "JLPT বাংলা হাব", text: "JLPT N5–N1 পর্যন্ত বাংলা ব্যাখ্যা, নোট ও প্র্যাকটিস প্ল্যাটফর্ম।", tags: ["Next.js", "MDX", "Firebase"], href: "https://n5.halimslife.com/" },
  { tone: styles.vocab, top: "Vocabulary", name: "Vocabulary Trainer", text: "স্মার্ট ফ্ল্যাশকার্ড দিয়ে জাপানি শব্দ মুখস্থ করার টুল।", tags: ["React", "Node.js", "MongoDB"], href: "/academy" },
  { tone: styles.portfolio, top: "Portfolio", name: "Portfolio Website", text: "আমার প্রফেশনাল পোর্টফোলিও সাইট এবং সব প্রজেক্ট।", tags: ["Next.js", "Tailwind CSS", "Vercel"], href: "/projects" },
];

const journey = [
  { year: "2018", icon: "graduation" as const, text: "BSc in EEE" },
  { year: "2019", icon: "code" as const, text: "প্রোগ্রামিং জার্নি" },
  { year: "2020", icon: "book" as const, text: "জাপানি ভাষা শেখা" },
  { year: "2021", icon: "video" as const, text: "কনটেন্ট তৈরি" },
  { year: "2023", icon: "plane" as const, text: "জাপানে আসা" },
  { year: "2024+", icon: "flag" as const, text: "শেখা ও তৈরি চলছে" },
];

const insights = [
  { image: japanese, category: "জাপানি ভাষা", title: "জাপানি ভাষা শেখার রোডম্যাপ", text: "শুরু থেকে JLPT পর্যন্ত সম্পূর্ণ গাইড—কীভাবে ধাপ সাজাবেন।", meta: "10 min read · May 12, 2024" },
  { image: robotics, category: "প্রোগ্রামিং", title: "প্রোগ্রামিং শেখার জন্য ১০টি অভ্যাস", text: "নিয়মিত ছোট অভ্যাসগুলোই আপনাকে একজন ভালো ডেভেলপার করবে।", meta: "8 min read · Apr 28, 2024" },
  { image: japanWorkshop, category: "ক্যারিয়ার", title: "জাপানে Software Engineer হওয়ার ধাপসমূহ", text: "স্কিল, ভাষা, রিজিউমে ও ইন্টারভিউ—সবকিছু এক নজরে।", meta: "12 min read · Apr 15, 2024" },
];

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <div className={styles.homePage}>
    <SiteHeader />
    <main>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>জাপানকে জানি,<br />দক্ষতায় গড়ি <span>ভবিষ্যৎ</span></h1>
          <p>জাপানি ভাষা শেখা, প্রোগ্রামিং দক্ষতা এবং জাপান ক্যারিয়ার—একসাথে সাজানো গাইড, রিসোর্স ও বাস্তব অভিজ্ঞতা।</p>
          <div className={styles.heroActions}><Link className={styles.primaryButton} href="#pathways"><Icon name="book" /> শুরু করুন এখনই</Link><Link className={styles.secondaryButton} href="/about"><Icon name="play" /> আমার গল্প দেখুন</Link></div>
          <dl className={styles.stats}>
            <div><Icon name="users" /><span><dt>25K+</dt><dd>শিক্ষার্থী</dd></span></div>
            <div><Icon name="video" /><span><dt>1.2M+</dt><dd>ভিডিও ভিউ</dd></span></div>
            <div><Icon name="globe" /><span><dt>50+</dt><dd>কনটেন্ট সিরিজ</dd></span></div>
          </dl>
        </div>
        <div className={styles.heroPortrait}><Image src={portrait} alt="Halim Md Abdul" fill priority placeholder="blur" sizes="(max-width: 760px) 94vw, 44vw" /><div className={styles.japanBadge}><span /> Japan</div></div>
      </section>

      <section id="pathways" className={styles.section}>
        <SectionHeading title="আপনার শেখা ও ক্যারিয়ার পাথওয়ে" link="সব পাথওয়ে দেখুন" href="/academy" />
        <div className={styles.pathGrid}>{pathways.map((item) => <article className={`${styles.pathCard} ${item.tone}`} key={item.title}><div><span className={styles.pathIcon}><Icon name={item.icon} /></span><h3>{item.title}</h3></div><p>{item.text}</p><Link href={item.href}>এক্সপ্লোর করুন <Icon name="arrow" /></Link><i aria-hidden="true" /></article>)}</div>
      </section>

      <section id="projects" className={styles.section}>
        <SectionHeading title="Featured Projects" link="সব প্রজেক্ট দেখুন" href="/projects" />
        <div className={styles.projectGrid}>{projects.map((item) => <a className={styles.projectCard} href={item.href} key={item.name}><div className={`${styles.projectArt} ${item.tone}`}><small>{item.top}</small><strong>{item.name}</strong></div><div className={styles.projectInfo}><h3>{item.name}</h3><p>{item.text}</p><div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></a>)}</div>
      </section>

      <section className={styles.section}>
        <SectionHeading title="আমার জার্নি" link="সব দেখুন" href="/journey" />
        <div className={styles.journey}>{journey.map((item) => <article key={item.year}><span><Icon name={item.icon} /></span><strong>{item.year}</strong><p>{item.text}</p></article>)}</div>
      </section>

      <section className={styles.publications}><div><h2>প্রকাশনা ও অর্জন</h2><p>Research · Engineering · Community</p></div><div className={styles.logos}><strong>IEEE</strong><strong>IEICE</strong><strong>JICA</strong><strong>Aspark</strong><strong>Shizuoka</strong></div><a href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ">সব দেখুন <Icon name="arrow" /></a></section>

      <section id="insights" className={styles.section}>
        <SectionHeading title="Latest Insights" link="সব আর্টিকেল দেখুন" href="/insights" />
        <div className={styles.insightGrid}>{insights.map((item) => <article className={styles.insightCard} key={item.title}><div className={styles.insightImage}><Image src={item.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" /><span>{item.category}</span></div><div><h3>{item.title}</h3><p>{item.text}</p><small>◷ {item.meta}</small></div></article>)}</div>
      </section>

      <section className={styles.cta}><span className={styles.ctaIcon}><Icon name="mail" /></span><div><h2>চলুন একসাথে আপনার লক্ষ্য পূরণের পথে!</h2><p>প্রশ্ন, পরামর্শ বা সহযোগিতার জন্য নির্দ্বিধায় যোগাযোগ করুন।</p></div><Link href="/contact"><Icon name="plane" /> যোগাযোগ করুন</Link></section>
    </main>

    <footer className={styles.footer}><div className={styles.footerGrid}><div><BrandLogo /><p>জাপানি ভাষা, প্রোগ্রামিং ও জাপান ক্যারিয়ার নিয়ে গাইড, রিসোর্স ও বাস্তব অভিজ্ঞতা শেয়ার করি।</p></div><div><h3>দ্রুত লিংক</h3><Link href="/about">হোম</Link><Link href="/journey">পাথওয়ে</Link><Link href="/projects">প্রজেক্টস</Link></div><div><h3>রিসোর্স</h3><Link href="/academy">ফ্রি কোর্স</Link><Link href="/scholarships">স্কলারশিপ</Link><Link href="/blog">ব্লগ</Link></div><div><h3>যোগাযোগ</h3><a href="mailto:reiazbubt@gmail.com">reiazbubt@gmail.com</a><span>Japan · 日本</span></div></div><p className={styles.copyright}>© {new Date().getFullYear()} Halim Md Abdul. All rights reserved.</p></footer>
  </div>;
}

function SectionHeading({ title, link, href }: { title: string; link: string; href: string }) {
  return <div className={styles.sectionHeading}><h2>{title}</h2><Link href={href}>{link} <Icon name="arrow" /></Link></div>;
}
