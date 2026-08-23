import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import portrait from "@/assets/halim-portrait-v2.png";
import journeyAspark from "@/assets/homepage/journey-aspark.png";
import journeyBangladesh from "@/assets/homepage/journey-bangladesh.png";
import journeyRobotics from "@/assets/homepage/journey-robotics.png";
import journeyShizuoka from "@/assets/homepage/journey-shizuoka.png";
import pathCareer from "@/assets/homepage/path-career.png";
import pathJapanese from "@/assets/homepage/path-japanese.png";
import pathTech from "@/assets/homepage/path-tech.png";
import panorama from "@/assets/homepage/technology-japan-panorama.png";
import { BrandLogo } from "@/components/brand-logo";
import { SiteHeader } from "@/components/site-header";

import styles from "./home.module.css";

type IconName = "arrow" | "book" | "briefcase" | "code" | "document" | "gear" | "graduation" | "location" | "message" | "microscope" | "plane" | "robot";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    book: <><path d="M4 5c3-1 6 0 8 2v13c-2-2-5-3-8-2V5Z" /><path d="M20 5c-3-1-6 0-8 2v13c2-2 5-3 8-2V5Z" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 7V5h8v2M3 12h18" /></>,
    code: <><path d="m8 9-3 3 3 3m8-6 3 3-3 3M14 5l-4 14" /></>,
    document: <><path d="M6 3h9l4 4v14H6V3Z" /><path d="M14 3v5h5M9 13h6M9 17h5" /></>,
    gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2" /></>,
    graduation: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11v5c3 3 9 3 12 0v-5" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    message: <><path d="M4 4h16v12H8l-4 4V4Z" /><path d="M8 9h8m-8 3h5" /></>,
    microscope: <><path d="m9 4 6 6-3 3-6-6 3-3Z" /><path d="m13 8 3-3m-7 7a6 6 0 0 0 8 8M5 20h14M13 15h4" /><circle cx="17" cy="14" r="2" /></>,
    plane: <path d="m3 11 18-8-7 18-3-7-8-3Zm8 3 4-4" />,
    robot: <><rect x="5" y="7" width="14" height="12" rx="3" /><path d="M12 3v4M8 12h.01M16 12h.01M9 16h6" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

const journey: { step: string; title: string; subtitle: string; image: StaticImageData; position?: string }[] = [
  { step: "1", title: "Bangladesh", subtitle: "শেখার শুরু", image: journeyBangladesh },
  { step: "2", title: "Shizuoka University", subtitle: "MSc Computer Science", image: journeyShizuoka },
  { step: "3", title: "Niche Creation", subtitle: "AI & Robotics Engineer", image: journeyRobotics },
  { step: "4", title: "Aspark, Japan", subtitle: "System Engineer", image: journeyAspark },
];

const dreams = [
  { title: "Japanese Learning", text: "জাপানি ভাষা শেখার সহজ এবং বাস্তব পথ।", image: pathJapanese },
  { title: "Programming Fundamentals", text: "প্রোগ্রামিংয়ের শক্ত foundation তৈরি করা।", image: pathTech },
  { title: "Japan Career Guidance", text: "জাপানে পড়াশোনা ও ক্যারিয়ারের দিকনির্দেশনা।", image: pathCareer },
];

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <div className={styles.homePage}>
    <SiteHeader />
    <main>
      <section className={styles.aboutHero}>
        <div className={styles.aboutCopy}>
          <span className={styles.kicker}>আমার সম্পর্কে</span>
          <h1>আমি হালিম—একজন<br />engineer, researcher এবং<br /><em>lifelong learner।</em></h1>
          <p>বাংলাদেশে থেকে জাপানে এসে পড়াশোনা ও engineering career গড়ার পথটা সহজ ছিল না, সেটিই এখন অন্যদের জন্য সহজ করে share করছি।</p>
          <dl className={styles.heroFacts}><div><Icon name="location" /><span><dt>Japan</dt></span></div><div><Icon name="graduation" /><span><dt>MSc</dt><dd>Computer Science</dd></span></div><div><Icon name="document" /><span><dt>2+</dt><dd>Publications</dd></span></div></dl>
          <div className={styles.heroActions}><Link href="/cv"><Icon name="document" /> আমার CV দেখুন</Link><Link href="/contact"><Icon name="plane" /> যোগাযোগ করুন</Link></div>
        </div>
        <div className={styles.portrait}><Image src={portrait} alt="Halim Md Abdul" fill priority placeholder="blur" sizes="(max-width:760px) 94vw, 45vw" /><span><i /> Japan · 日本</span></div>
      </section>

      <section className={styles.technology}>
        <Image src={panorama} alt="Japan technology and learning journey" fill priority sizes="(max-width:760px) 100vw, 1120px" />
        <div className={styles.technologyCopy}><h2><em>Technology</em> দিয়ে problem solve করি,<br /><em>knowledge</em> দিয়ে মানুষকে এগিয়ে দিই।</h2><ul><li><Icon name="briefcase" /><span>বর্তমানে Aspark Co., Ltd., Japan-এ<br />System Engineer হিসেবে কাজ করছি।</span></li><li><Icon name="gear" /><span>Manufacturing software, computer vision<br />এবং decision-support systems নিয়ে কাজ করি।</span></li><li><Icon name="graduation" /><span>Shizuoka University থেকে<br />MSc in Computer Science সম্পন্ন করেছি।</span></li></ul></div>
      </section>

      <section className={styles.journeySection}><h2>আমার যাত্রা</h2><div className={styles.journeyLine} />
        <div className={styles.journeyGrid}>{journey.map((item) => <article key={item.step}><span className={styles.step}>{item.step}</span><div className={styles.journeyImage}><Image src={item.image} alt="" fill sizes="(max-width:620px) 50vw, 25vw" style={{ objectPosition: item.position }} /></div><h3>{item.title}</h3><p>{item.subtitle}</p></article>)}</div>
      </section>

      <section className={styles.focusSection}><h2>আমাকে যা চালিত করে</h2><div className={styles.focusGrid}>
        <article><span className={styles.focusIcon}><Icon name="code" /></span><div><h3>Engineering</h3><strong>real-world<br />problem solving</strong><p>বাস্তব সমস্যার কার্যকর সমাধান তৈরিতে প্রযুক্তিকে ব্যবহার করা।</p></div><span className={styles.focusDecoration}><Icon name="gear" /></span></article>
        <article><span className={styles.focusIcon}><Icon name="microscope" /></span><div><h3>Research</h3><strong>evidence-based<br />thinking</strong><p>তথ্য ও প্রমাণের উপর ভিত্তি করে সমস্যা বোঝা ও সমাধান করা।</p></div><span className={styles.focusDecoration}><Icon name="microscope" /></span></article>
        <article><span className={styles.focusIcon}><Icon name="book" /></span><div><h3>Education</h3><strong>Bengali-friendly<br />learning resources</strong><p>বাংলায় মানসম্মত কনটেন্ট তৈরি করে শেখার বাধাকে সহজ করা।</p></div><span className={styles.focusDecoration}><Icon name="book" /></span></article>
      </div></section>

      <section className={styles.research}>
        <div className={styles.researchIntro}><h2>Research & Expertise</h2><p>Health management এবং medical diagnostic problem-এ recommendation-system approach নিয়ে research করেছি।</p><strong><Icon name="document" /> 02 <small>Published<br />Research Works</small></strong></div>
        <div className={styles.researchSkills}><small>Skills & Expertise</small><div className={styles.skillRows}><span>C#</span><span>Python</span><span>Computer Vision</span><span>Robotics</span><span>Recommender Systems</span></div><div className={styles.researchLinks}><a href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ">Google Scholar <Icon name="arrow" /></a><span>IEEE</span><span>IEICE</span></div></div>
        <div className={styles.researchVisual}><Image src={pathTech} alt="Programming and research" fill sizes="30vw" /></div>
      </section>

      <section className={styles.dreamSection}><h2>আমার স্বপ্ন</h2><div className={styles.dreamGrid}><blockquote>“ জটিল বিষয়কে সহজ, practical<br />এবং useful করা—প্রতিটি আমার<br />কাজের common goal ”</blockquote>{dreams.map((item) => <article key={item.title}><Image src={item.image} alt="" fill sizes="20vw" /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>

      <section className={styles.cta}><div><Icon name="message" /><h2>একসঙ্গে শেখা, তৈরি করা এবং<br />সামনে এগিয়ে যাওয়া যাক।</h2></div><div><Link href="/contact"><Icon name="message" /> Start a conversation</Link><Link href="/academy"><Icon name="book" /> Explore Academy</Link></div></section>
    </main>

    <footer className={styles.footer}><div className={styles.footerGrid}><div><BrandLogo /><span>Japan · 日本</span><p>Japan-based Bangladeshi software engineer, researcher এবং lifelong learner.</p></div><div><h3>দ্রুত লিংক</h3><Link href="/about">হোম</Link><Link href="/journey">আমার যাত্রা</Link><Link href="/projects">প্রজেক্টস</Link></div><div><h3>রিসোর্স</h3><Link href="/academy">টিউটোরিয়াল</Link><Link href="/scholarships">স্কলারশিপ</Link><Link href="/blog">ব্লগ</Link></div><div><h3>যোগাযোগ</h3><Link href="/contact">Contact</Link><a href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ">Google Scholar</a><a href="https://github.com/halimmdabdul">GitHub</a></div></div><p className={styles.copyright}>© {new Date().getFullYear()} Halim Md Abdul. All rights reserved.</p></footer>
  </div>;
}
