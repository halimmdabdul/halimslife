import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import journeyHero from "@/assets/journey/hero-bangladesh-japan.png";
import stageBangladesh from "@/assets/journey/stage-01-bangladesh.png";
import stageShizuoka from "@/assets/journey/stage-02-shizuoka.png";
import stageRobotics from "@/assets/journey/stage-03-robotics.png";
import stageManufacturing from "@/assets/journey/stage-04-manufacturing.png";
import stageCommunity from "@/assets/journey/stage-05-community.png";
import { BrandLogo } from "@/components/brand-logo";
import { SiteHeader } from "@/components/site-header";

import styles from "./journey.module.css";

export const metadata: Metadata = {
  title: "আমার জার্নি",
  description: "Bangladesh থেকে Japan—Halim-এর education, research ও software engineering career journey।",
  alternates: { canonical: "/journey" },
};

type IconName = "arrow" | "book" | "briefcase" | "code" | "community" | "document" | "down" | "graduation" | "heart" | "idea" | "location" | "message" | "microscope" | "plane" | "robot" | "search" | "shield" | "target" | "trend";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    book: <><path d="M4 5c3-1 6 0 8 2v13c-2-2-5-3-8-2V5Z" /><path d="M20 5c-3-1-6 0-8 2v13c2-2 5-3 8-2V5Z" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 7V5h8v2M3 12h18" /></>,
    code: <><path d="m8 9-3 3 3 3m8-6 3 3-3 3M14 5l-4 14" /></>,
    community: <><circle cx="8" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M2.5 20c.5-4 2.2-6 5.5-6s5 2 5.5 6m0-5c3.4-.8 6.4 1.1 7 5" /></>,
    document: <><path d="M6 3h9l4 4v14H6V3Z" /><path d="M14 3v5h5M9 13h6M9 17h5" /></>,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    graduation: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11v5c3 3 9 3 12 0v-5" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
    idea: <><path d="M9 18h6m-5 3h4" /><path d="M8.5 15.5a6 6 0 1 1 7 0c-.8.6-1.2 1.3-1.3 2.5h-4.4c-.1-1.2-.5-1.9-1.3-2.5Z" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    message: <><path d="M4 4h16v12H8l-4 4V4Z" /><path d="M8 9h8m-8 3h5" /></>,
    microscope: <><path d="m9 4 6 6-3 3-6-6 3-3Z" /><path d="m13 8 3-3m-4 9a6 6 0 0 0 6 6M5 20h14" /></>,
    plane: <path d="m3 11 18-8-7 18-3-7-8-3Zm8 3 4-4" />,
    robot: <><path d="M14 5 6 13m5-9 4 4M5 12l4 4m6-5 4 4-5 5-4-4 5-5Z" /><circle cx="5" cy="18" r="2" /></>,
    search: <><circle cx="10" cy="10" r="6" /><path d="m15 15 6 6M8 10l1.5 1.5L12 8" /></>,
    shield: <path d="M12 3 4 6v5c0 5 3.3 8.5 8 10 4.7-1.5 8-5 8-10V6l-8-3Zm-3 9 2 2 4-5" />,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></>,
    trend: <><path d="M3 17 9 11l4 4 8-9" /><path d="M15 6h6v6" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

type Step = { label: string; title: string; text: string; image: StaticImageData; imageAlt: string; tags: { icon: IconName; text: string }[]; lesson: string };

const steps: Step[] = [
  { label: "Bangladesh", title: "Curiosity দিয়ে শুরু", text: "Technology কীভাবে real problem solve করে—এই curiosity থেকেই Computer Science-এর পথে যাত্রা শুরু।", image: stageBangladesh, imageAlt: "Student learning programming in Bangladesh", tags: [{ icon: "shield", text: "Strong foundation" }], lesson: "প্রশ্ন করতে ভয় না পাওয়া" },
  { label: "Shizuoka University · Japan", title: "Japan-এ MSc ও research", text: "Computer Science-এ Master’s সম্পন্ন করার পাশাপাশি recommender systems এবং health technology নিয়ে published research।", image: stageShizuoka, imageAlt: "Research at Shizuoka University", tags: [{ icon: "graduation", text: "MSc Computer Science" }, { icon: "document", text: "2+ Publications" }], lesson: "evidence দিয়ে চিন্তা করা" },
  { label: "Niche Creation · Japan", title: "Real-world engineering", text: "Japanese product team-এ robotics, perception, camera ও sensor systems নিয়ে practical experience—এবং paralysis patient-দের জন্য hospital IoT monitoring system।", image: stageRobotics, imageAlt: "Robotics and hospital IoT engineering", tags: [{ icon: "robot", text: "AI & Robotics" }, { icon: "heart", text: "Hospital IoT" }], lesson: "technology মানুষের কাজে লাগানো" },
  { label: "Aspark · Japan", title: "Manufacturing engineering", text: "Manufacturing software, computer vision এবং decision-support systems নিয়ে বর্তমানে কাজ করছি।", image: stageManufacturing, imageAlt: "Computer vision in modern manufacturing", tags: [{ icon: "briefcase", text: "System Engineer" }, { icon: "target", text: "Computer Vision" }], lesson: "team, quality এবং consistency" },
  { label: "Halim’s Life", title: "অভিজ্ঞতা থেকে community", text: "Bangla-friendly Japanese learning tools, programming guidance এবং Japan career insight তৈরি করছি।", image: stageCommunity, imageAlt: "Community learning Japanese programming and career skills", tags: [{ icon: "book", text: "KanaStory" }, { icon: "graduation", text: "JLPT বাংলা হাব" }], lesson: "knowledge share করলে value বাড়ে" },
];

const footerLinks = [
  { title: "দ্রুত লিংক", links: [["হোম", "/"], ["পাথওয়ে", "/academy"], ["প্রজেক্টস", "/projects"], ["অভিজ্ঞতা", "/journey"]] },
  { title: "রিসোর্স", links: [["টিউটোরিয়াল", "/academy"], ["স্কলারশিপ", "/scholarships"], ["প্রোগ্রামিং ব্লগ", "/blog"], ["FAQ", "/contact"]] },
];

export default function JourneyPage() {
  return <div className={styles.page}>
    <SiteHeader />
    <main>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.kicker}>আমার জার্নি</span>
          <h1>একটি বড় leap নয়—<br />ছোট ছোট <em>consistent step</em>-এর গল্প।</h1>
          <p>প্রতিটি stage আমাকে skill-এর পাশাপাশি language, culture এবং মানুষের সঙ্গে কাজ করার নতুন দৃষ্টিভঙ্গি দিয়েছে।</p>
          <div className={styles.heroTags}><span><Icon name="location" /> Bangladesh → Japan</span><span><Icon name="code" /> Engineering</span><span><Icon name="microscope" /> Research</span><span><Icon name="community" /> Community</span></div>
          <div className={styles.heroActions}><a href="#journey-timeline">পুরো পথ দেখুন <Icon name="down" /></a><Link href="/cv"><Icon name="document" /> আমার CV</Link></div>
        </div>
        <div className={styles.heroVisual}><Image src={journeyHero} alt="Illustrated journey from Bangladesh to Japan" fill priority sizes="(max-width: 820px) 100vw, 58vw" /><span className={styles.countryBangladesh}><i /> Bangladesh</span><span className={styles.countryJapan}><i /> Japan · 日本</span></div>
      </section>

      <section className={styles.timeline} id="journey-timeline" aria-label="Career journey timeline">
        {steps.map((step, index) => <article className={styles.timelineItem} key={step.title}>
          <span className={styles.marker}>0{index + 1}</span>
          <div className={styles.stageVisual}><Image src={step.image} alt={step.imageAlt} fill sizes="(max-width: 720px) 100vw, 50vw" /></div>
          <div className={styles.stageCopy}><small>{step.label}</small><h2>{step.title}</h2><p>{step.text}</p><div className={styles.stageTags}>{step.tags.map((tag) => <span key={tag.text}><Icon name={tag.icon} />{tag.text}</span>)}</div><p className={styles.lesson}><Icon name="idea" /><b>শেখা:</b> {step.lesson}</p></div>
        </article>)}
      </section>

      <section className={styles.learning}>
        <h2><span />এই journey আমাকে যা শিখিয়েছে<span /></h2>
        <div className={styles.learningGrid}><article><Icon name="search" /><div><h3>Curiosity</h3><p>প্রশ্ন করার সাহসই নতুন কিছু জানার আগ্রহ ধরে রেখেছে।</p></div></article><article><Icon name="trend" /><div><h3>Consistency</h3><p>প্রতিদিনের ছোট ছোট step আমাকে আজকের অবস্থানে এনেছে।</p></div></article><article><Icon name="community" /><div><h3>Community</h3><p>মানুষের সঙ্গে কাজ করা আমাকে এগিয়ে নিয়েছে।</p></div></article></div>
        <blockquote>“ গন্তব্যের চেয়ে প্রতিটি step-এ শেখা বিষয়গুলোই আমাকে তৈরি করেছে। ”</blockquote>
      </section>

      <section className={styles.nextChapter}>
        <Image src={journeyHero} alt="Mount Fuji and Japan landscape" fill sizes="1120px" />
        <div><h2>পরবর্তী অধ্যায় এখনও লেখা হচ্ছে।</h2><p>Engineering, research এবং Bengali-friendly learning resources—এই তিনটি পথকে আরও শক্তিশালী করতে চাই।</p><div><Link href="/projects">আমার Projects দেখুন <Icon name="arrow" /></Link><Link href="/contact"><Icon name="plane" /> যোগাযোগ করুন</Link></div></div>
      </section>
    </main>

    <footer className={styles.footer}>
      <div className={styles.footerGrid}><div className={styles.footerIntro}><BrandLogo /><span>Japan · 日本</span><p>Japan-based Bangladeshi software engineer, researcher এবং lifelong learner.</p></div>{footerLinks.map((column) => <nav key={column.title}><h2>{column.title}</h2>{column.links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>)}<nav><h2>যোগাযোগ</h2><Link href="/contact"><Icon name="message" /> Contact</Link><a href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ"><Icon name="graduation" /> Google Scholar</a><a href="https://github.com/halimmdabdul"><Icon name="code" /> GitHub</a></nav></div>
      <p className={styles.copyright}>© {new Date().getFullYear()} Halim Md Abdul.</p>
    </footer>
  </div>;
}
