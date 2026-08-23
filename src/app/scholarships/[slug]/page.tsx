import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import alabamaCampus from "@/assets/scholarships/campus-alabama.png";
import navigatorHero from "@/assets/scholarships/navigator-hero.png";
import japanPanorama from "@/assets/journey/hero-bangladesh-japan.png";
import { InnerPageShell } from "@/components/inner-page-shell";
import { getScholarshipGuide, scholarshipGuides } from "@/lib/scholarships";

import styles from "./scholarship-detail.module.css";

export function generateStaticParams(){return scholarshipGuides.map(guide=>({slug:guide.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const guide=getScholarshipGuide(slug);if(!guide)return{};return{title:guide.title,description:guide.summary,alternates:{canonical:`/scholarships/${guide.slug}`}}}

type IconName="arrow"|"calendar"|"check"|"document"|"funding"|"graduation"|"link"|"people"|"search"|"warning";
function Icon({name}:{name:IconName}){const p:Record<IconName,React.ReactNode>={arrow:<path d="M5 12h14m-5-5 5 5-5 5"/>,calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></>,check:<path d="m5 12 4 4L19 6"/>,document:<><path d="M6 3h9l4 4v14H6V3Z"/><path d="M14 3v5h5M9 13h6M9 17h5"/></>,funding:<><circle cx="12" cy="13" r="7"/><path d="M12 9v8m-2-6h3a2 2 0 0 1 0 4h-3M9 3h6l-1 3h-4L9 3Z"/></>,graduation:<><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c3 3 9 3 12 0v-5"/></>,link:<><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/></>,people:<><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20c.5-4 2.2-6 5.5-6s5 2 5.5 6m0-5c3.4-.8 6.4 1.1 7 5"/></>,search:<><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></>,warning:<><path d="M12 3 2 21h20L12 3Z"/><path d="M12 9v5m0 3h.01"/></>};return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{p[name]}</svg>}

function NumberTitle({number,children}:{number:string;children:React.ReactNode}){return <div className={styles.numberTitle}><span>{number}</span><h2>{children}</h2></div>}

export default async function ScholarshipDetailPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const guide=getScholarshipGuide(slug);if(!guide)notFound();
  const countryLabel=guide.country==="japan"?"Japan":guide.country==="canada"?"Canada":guide.country==="korea"?"South Korea":"USA";
  const ctaImage=guide.country==="japan"?japanPanorama:alabamaCampus;
  return <InnerPageShell><article className={styles.page}>
    <header className={styles.hero}><div className={styles.container}><nav><Link href="/scholarships">Scholarships</Link><span>/</span><Link href={`/scholarships?country=${guide.country}`}>{countryLabel}</Link><span>/</span><span>{guide.university}</span></nav><div className={styles.heroGrid}><div><span className={styles.label}>{guide.label}</span><p className={styles.university}>{guide.university}</p><h1>{guide.title}</h1><p>{guide.summary}</p><div className={styles.heroActions}><a href={guide.officialLinks[0]?.href??"#official-sources"} target="_blank" rel="noreferrer">Official admission page ↗</a><a href="#application-steps">Application steps ↓</a></div></div><div className={styles.heroArt}><Image src={navigatorHero} alt="Graduate funding and application research illustration" fill priority sizes="48vw"/></div></div><div className={styles.quickFacts}><article><Icon name="funding"/><div><b>Funding</b><p>{guide.funding}</p></div></article><article><Icon name="document"/><div><b>Includes</b><p>Tuition · fees · stipend</p></div></article><article><Icon name="calendar"/><div><b>Typical length</b><p>{guide.duration}</p></div></article><article><Icon name="people"/><div><b>Applicants</b><p>{guide.audience}</p></div></article></div><div className={styles.eligibility}><Icon name="check"/>Eligibility, degree requirement ও profile-fit official guide থেকে verify করুন।</div></div></header>

    <main className={`${styles.container}${slug === "uconn-riet-lab-ai-safety-phd-2027" ? ` ${styles.uconnLayout}` : ""}`}>
      <aside className={styles.reality}><Icon name="warning"/><div><h2>এই opportunity আসলে কী?</h2><p>{guide.realityCheck}</p></div><span><Icon name="warning"/>Written funding offer-ই final</span></aside>
      <nav className={styles.anchorNav}><a href="#overview">Overview</a><a href="#fit">Fit check</a><a href="#quick-start">30-minute start</a><a href="#application-steps">{guide.steps.length} steps</a><a href="#documents">Documents</a><a href="#official-sources">Official links</a></nav>

      <div className={styles.twoColumns}><div className={styles.leftColumn}>
        <section id="overview"><NumberTitle number="01">প্রথমে যে বিষয়গুলো বুঝবেন</NumberTitle><div className={styles.highlightGrid}>{guide.highlights.slice(0,4).map((item,index)=><article key={item}><Icon name={["funding","document","graduation","people"][index] as IconName}/><p>{item}</p></article>)}</div></section>
        <section id="fit"><NumberTitle number="02">এই path আপনার জন্য ভালো কি?</NumberTitle><div className={styles.fitBox}>{guide.fit.map(item=><p key={item}><span/><b>{item}</b></p>)}</div></section>
        <section id="quick-start"><NumberTitle number="03">আজ প্রথম ৩০ মিনিটে যা করবেন</NumberTitle><div className={styles.quickStart}>{guide.quickStart.slice(0,4).map((item,index)=><article key={item}><span>{index+1}</span><Icon name={["calendar","search","document","people"][index] as IconName}/><p>{item}</p></article>)}</div></section>
        <section id="documents"><NumberTitle number="04">Submit করার আগে documents প্রস্তুত রাখুন</NumberTitle><div className={styles.documents}>{guide.checklist.map((item,index)=><article key={item}><Icon name={index%2?"document":"check"}/><span>{item}</span></article>)}</div></section>
        <section><NumberTitle number="05">Submit করার পরে</NumberTitle><div className={styles.afterGrid}><div>{guide.afterSubmission.map((item,index)=><p key={item}><span>{index+1}</span>{item}</p>)}</div><aside><h3>Common mistakes</h3>{guide.cautions.map(item=><p key={item}><Icon name="warning"/>{item}</p>)}</aside></div></section>
      </div>

      <section className={styles.roadmap} id="application-steps"><NumberTitle number="06">শুরু থেকে submit—{guide.steps.length}টি পরিষ্কার step</NumberTitle><p className={styles.roadmapIntro}>একটি step complete না হলে পরেরটিতে যাবেন না।</p><ol>{guide.steps.map((step,index)=><li key={step.title}><small>{step.timing}</small><span>{String(index+1).padStart(2,"0")}</span><div><h3>{step.title}</h3><p>{step.description}</p><ul>{step.actions.slice(0,3).map(action=><li key={action}>{action}</li>)}</ul></div><aside><b>Completion rule</b><p>{step.readyWhen}</p></aside></li>)}</ol></section></div>

      <section className={`${styles.sources}${slug === "uconn-riet-lab-ai-safety-phd-2027" ? ` ${styles.compactSources}` : ""}`} id="official-sources"><NumberTitle number="07">Official source দিয়ে verify করুন</NumberTitle><div>{guide.officialLinks.map(link=><a href={link.href} key={link.href} target="_blank" rel="noreferrer"><Icon name="link"/><span><b>{link.label}</b><small>{link.description}</small></span><Icon name="arrow"/></a>)}</div><p><Icon name="check"/>Information reviewed {guide.reviewedAt??"August 6, 2026"}<span>Rules ও dates change হতে পারে। Official page এবং written offer final authority।</span></p></section>

      <section className={styles.cta}><Image src={ctaImage} alt="Watercolor university landscape" fill sizes="45vw"/><div><span>Need a second pair of eyes?</span><h2>আপনার {guide.university} application plan আরও clear করুন।</h2><Link href={`/contact?topic=general&subject=${encodeURIComponent(`${guide.university} application question`)}`}>Ask a question</Link><Link href="/scholarships">সব scholarships দেখুন <Icon name="arrow"/></Link></div></section>
    </main>
  </article></InnerPageShell>
}
