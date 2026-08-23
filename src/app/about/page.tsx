import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import aboutMap from "@/assets/about/bangladesh-japan-map.png";
import football from "@/assets/about/football.png";
import healthcare from "@/assets/about/healthcare-facility.png";
import manufacturing from "@/assets/about/manufacturing-facility.png";
import camera from "@/assets/about/photography-camera.png";
import portrait from "@/assets/halim-portrait-v2.png";
import pathJapanese from "@/assets/homepage/path-japanese.png";
import pathTech from "@/assets/homepage/path-tech.png";
import robot from "@/assets/homepage/journey-robotics.png";
import japanPanorama from "@/assets/journey/hero-bangladesh-japan.png";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "আমার সম্পর্কে",
  description: "Japan-based Bangladeshi software engineer Halim Md Abdul-এর শিক্ষা, কাজ, research এবং community mission।",
  alternates: { canonical: "/about" },
};

type IconName = "arrow" | "book" | "briefcase" | "code" | "community" | "document" | "graduation" | "heart" | "idea" | "location" | "microscope" | "plane" | "target" | "trend";
function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow:<path d="M5 12h14m-5-5 5 5-5 5"/>,book:<><path d="M4 5c3-1 6 0 8 2v13c-2-2-5-3-8-2V5Z"/><path d="M20 5c-3-1-6 0-8 2v13c2-2 5-3 8-2V5Z"/></>,briefcase:<><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5h8v2M3 12h18"/></>,code:<><path d="m8 9-3 3 3 3m8-6 3 3-3 3M14 5l-4 14"/></>,community:<><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20c.5-4 2.2-6 5.5-6s5 2 5.5 6m0-5c3.4-.8 6.4 1.1 7 5"/></>,document:<><path d="M6 3h9l4 4v14H6V3Z"/><path d="M14 3v5h5M9 13h6M9 17h5"/></>,graduation:<><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c3 3 9 3 12 0v-5"/></>,heart:<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>,idea:<><path d="M9 18h6m-5 3h4"/><path d="M8.5 15.5a6 6 0 1 1 7 0c-.8.6-1.2 1.3-1.3 2.5h-4.4c-.1-1.2-.5-1.9-1.3-2.5Z"/></>,location:<><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,microscope:<><path d="m9 4 6 6-3 3-6-6 3-3Z"/><path d="m13 8 3-3m-4 9a6 6 0 0 0 6 6M5 20h14"/></>,plane:<path d="m3 11 18-8-7 18-3-7-8-3Zm8 3 4-4"/>,target:<><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></>,trend:<><path d="M3 17 9 11l4 4 8-9"/><path d="M15 6h6v6"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function SectionTitle({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className={styles.sectionTitle}><span>{number}</span><h2>{children}</h2></div>;
}

const work = [
  { image:manufacturing,title:"Manufacturing Systems",place:"Aspark Co., Ltd., Japan",text:"Battery manufacturing software, computer vision এবং automated reporting ও decision-support systems তৈরি করছি।",lesson:"Quality and consistency matter" },
  { image:robot,title:"AI, Robotics & Computer Vision",place:"Niche Creation",text:"Robotic picking, visual inspection, industrial cameras, PLCs, Python, OpenCV এবং YOLO নিয়ে production automation solution তৈরি করেছি।",lesson:"Software must work with the physical world" },
  { image:healthcare,title:"Healthcare IoT",place:"Hospital Project",text:"Hospital monitoring interfaces design করেছি, যা paralysis আক্রান্ত রোগীদের জন্য তৈরি।",lesson:"Technology should improve human life" },
];
const interests:{image:StaticImageData;title:string;text:string}[]=[
  {image:pathJapanese,title:"Japanese Learning",text:"KanaStory এবং JLPT বাংলা হাব তৈরি করছি।"},{image:pathTech,title:"Programming Fundamentals",text:"Practical learning resources দিয়ে বাংলা content তৈরি করি।"},{image:football,title:"Football",text:"ফুটবল খেলা এবং ক্লাব ফুটবল অনুসরণ করা পছন্দ করি।"},{image:camera,title:"Photography & New Technology",text:"Photography এবং নতুন প্রযুক্তি শেখা আমার নেশা।"},
];

export default function AboutPage(){return <div className={styles.page}><SiteHeader/><main>
  <section className={styles.hero}><div className={styles.heroCopy}><span className={styles.kicker}>আমার সম্পর্কে</span><h1>আমি হালিম—technology,<br/>research আর মানুষের<br/><em>growth</em> নিয়ে কাজ করি।</h1><p>বাংলাদেশ থেকে জাপানে এসে পড়াশোনা ও engineering career গড়ার পথে যা শিখেছি, সেটাই এখন meaningful solutions এবং Bengali-friendly learning resources-এ রূপ দিচ্ছি।</p><div className={styles.heroActions}><Link href="/journey">আমার গল্প দেখুন <Icon name="arrow"/></Link><Link href="/contact">যোগাযোগ করুন</Link></div><div className={styles.profileLinks}><a href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ">Google Scholar ↗</a><a href="https://github.com/halimmdabdul">GitHub ↗</a></div></div><div className={styles.heroArt}><div className={styles.portrait}><Image src={portrait} alt="Halim Md Abdul" fill priority sizes="36vw"/><dl><div><Icon name="location"/><span>Japan · 日本</span></div><div><Icon name="graduation"/><span>M.Sc. in Informatics</span></div><div><Icon name="code"/><span>Software · AI · Research</span></div></dl></div><Image className={styles.japanArt} src={japanPanorama} alt="Watercolor Mount Fuji and pagoda" fill priority sizes="55vw"/></div></section>

  <nav className={styles.aboutNav}><a href="#story"><Icon name="idea"/>আমার গল্প</a><a href="#work"><Icon name="briefcase"/>কাজ</a><a href="#research"><Icon name="graduation"/>Research</a><a href="#values"><Icon name="book"/>Values</a><a href="#personal"><Icon name="community"/>ব্যক্তিগত</a></nav>

  <section id="story" className={styles.story}><SectionTitle number="01">আমার গল্প</SectionTitle><div className={styles.storyGrid}><div><h3>Curiosity থেকে Japan-এর engineering career।</h3><p>বাংলাদেশে বড় হওয়ার সময় থেকেই প্রশ্ন করতাম—“কেন” আর “কীভাবে”। জানার এই আগ্রহই আমাকে প্রযুক্তির দিকে টেনে আনে।</p><p>শিক্ষাবৃত্তি নিয়ে পড়াশোনার সময় থেকে Japan-এ engineering career গড়ার প্রতিটি ধাপ আমাকে বাস্তব সমস্যার সমাধানে প্রযুক্তি কাজে লাগাতে শিখিয়েছে।</p><div className={styles.tags}><span>Bangladesh → Japan</span><span>Scholarship recipient</span><span>Lifelong learner</span></div></div><div className={styles.map}><Image src={aboutMap} alt="Watercolor map showing Bangladesh to Japan" fill sizes="50vw"/></div></div></section>

  <section id="work" className={styles.work}><SectionTitle number="02">আমি যে problem-গুলো solve করেছি</SectionTitle><div className={styles.workList}>{work.map(item=><article key={item.title}><div className={styles.workImage}><Image src={item.image} alt="" fill sizes="25vw"/></div><div><h3>{item.title}</h3><small>{item.place}</small><p>{item.text}</p></div><aside><b>আমি যা শিখেছি</b><p>{item.lesson}</p></aside></article>)}</div></section>

  <section id="research" className={styles.research}><SectionTitle number="03">Education & Research</SectionTitle><div className={styles.researchGrid}><article><h3>M.Sc. in Informatics</h3><p>Shizuoka University · Fukuta Laboratory · Japan</p><small>Sep 2019—Sep 2021</small><span><Icon name="graduation"/> Scholarship recipient</span></article><article><Icon name="community"/><h3>Game Theory & Multi-Agent Systems</h3><p>Multi-agent system-এ strategic interaction, equilibrium এবং decision-making নিয়ে কাজ করেছি।</p></article><article><Icon name="heart"/><h3>Health Management Recommender Systems</h3><p>Health data ব্যবহার করে personalized recommendation তৈরি করা নিয়ে research করেছি।</p></article></div><div className={styles.publications}><Image src={japanPanorama} alt="" fill sizes="1120px"/><Icon name="document"/><div><h3>02 <span>Published Research Works</span></h3><p>Research আমাকে evidence দিয়ে চিন্তা করতে শিখিয়েছে।</p></div><div><a href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ">Google Scholar ↗</a><span>IEEE</span><span>IEICE</span></div></div></section>

  <section id="values" className={styles.values}><SectionTitle number="04">আমার কাজের তিনটি ভিত্তি</SectionTitle><div className={styles.valueGrid}><article><Icon name="idea"/><div><h3>Curiosity</h3><b>প্রশ্ন থেকে শেখার শুরু</b><p>সমস্যার মূল থেকে জানার চেষ্টা করি।</p></div></article><article><Icon name="target"/><div><h3>Consistency</h3><b>ছোট ছোট নিয়মিত step</b><p>দীর্ঘমেয়াদি সাফল্যের চাবিকাঠি।</p></div></article><article><Icon name="community"/><div><h3>Community</h3><b>knowledge share করলে value বাড়ে</b><p>শেখা জিনিস সবার সঙ্গে ভাগ করি।</p></div></article></div><blockquote>“ জটিল বিষয়কে সহজ, <em>practical</em> এবং <em>useful</em> করা—এটাই আমার common goal। ”</blockquote></section>

  <section id="personal" className={styles.personal}><SectionTitle number="05">Engineering-এর বাইরে</SectionTitle><div className={styles.interestGrid}>{interests.map(item=><article key={item.title}><div><Image src={item.image} alt="" fill sizes="25vw"/></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

  <section className={styles.growth}><SectionTitle number="06">এখন ও পরবর্তী লক্ষ্য</SectionTitle><Image src={japanPanorama} alt="Japan watercolor landscape" fill sizes="1120px"/><div className={styles.growthContent}><h2>Engineer হিসেবে grow করা,<br/>আর অন্যদের পথ সহজ করা।</h2><div><p>এখন আমি manufacturing software, computer vision এবং research-informed systems নিয়ে কাজ করছি—সাথে বাংলা ভাষায় learning resources তৈরি করছি।</p><div className={styles.tags}><span><Icon name="target"/>Better system design</span><span><Icon name="community"/>Research collaboration</span><span><Icon name="idea"/>Bengali learning resources</span></div></div></div><div className={styles.miniCta}><strong>একসঙ্গে শেখা, তৈরি করা এবং সামনে এগিয়ে যাওয়া যাক।</strong><Link href="/contact">Start a conversation ↗</Link><Link href="/cv">আমার CV দেখুন ↓</Link></div></section>
  </main><SiteFooter /></div>}
