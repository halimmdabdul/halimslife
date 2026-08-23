import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import alabamaCampus from "@/assets/scholarships/campus-alabama.png";
import iowaCampus from "@/assets/scholarships/campus-iowa.png";
import uconnCampus from "@/assets/scholarships/campus-uconn.png";
import navigatorHero from "@/assets/scholarships/navigator-hero.png";
import japanPanorama from "@/assets/journey/hero-bangladesh-japan.png";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { scholarshipGuides } from "@/lib/scholarships";

import styles from "./scholarships.module.css";

export const metadata: Metadata = { title:"Scholarships | USA, Canada, Korea, Switzerland & Japan", description:"Practical graduate funding and scholarship guides for the USA, Canada, South Korea, Switzerland and Japan.", alternates:{canonical:"/scholarships"} };

type IconName="arrow"|"calendar"|"check"|"document"|"email"|"link"|"search"|"shield"|"user"|"warning";
function Icon({name}:{name:IconName}){const p:Record<IconName,React.ReactNode>={arrow:<path d="M5 12h14m-5-5 5 5-5 5"/>,calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></>,check:<path d="m5 12 4 4L19 6"/>,document:<><path d="M6 3h9l4 4v14H6V3Z"/><path d="M14 3v5h5M9 13h6M9 17h5"/></>,email:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,link:<><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/></>,search:<><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></>,shield:<path d="M12 3 4 6v5c0 5 3.3 8.5 8 10 4.7-1.5 8-5 8-10V6l-8-3Zm-3 9 2 2 4-5"/>,user:<><circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 4-7 8-7s7 2 8 7"/></>,warning:<><path d="M12 3 2 21h20L12 3Z"/><path d="M12 9v5m0 3h.01"/></>};return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{p[name]}</svg>}

const usaGuides=scholarshipGuides.filter(g=>g.country==="usa");
const canadaGuides=scholarshipGuides
  .filter(g=>g.country==="canada")
  .sort((a,b)=>(a.canadaPriority??Number.MAX_SAFE_INTEGER)-(b.canadaPriority??Number.MAX_SAFE_INTEGER));
const koreaGuides=scholarshipGuides
  .filter(g=>g.country==="korea")
  .sort((a,b)=>(a.koreaPriority??Number.MAX_SAFE_INTEGER)-(b.koreaPriority??Number.MAX_SAFE_INTEGER));
const swissGuides=scholarshipGuides
  .filter(g=>g.country==="switzerland")
  .sort((a,b)=>(a.swissPriority??Number.MAX_SAFE_INTEGER)-(b.swissPriority??Number.MAX_SAFE_INTEGER));
const japanGuides=scholarshipGuides
  .filter(g=>g.country==="japan")
  .sort((a,b)=>(a.bestFitPriority??Number.MAX_SAFE_INTEGER)-(b.bestFitPriority??Number.MAX_SAFE_INTEGER));
const featured=[
  {guide:usaGuides.find(g=>g.slug.includes("alabama"))??usaGuides[0],image:alabamaCampus,badge:"Strongest active lead"},
  {guide:usaGuides.find(g=>g.slug.includes("uconn"))??usaGuides[1],image:uconnCampus,badge:"Currently hiring · Fully funded"},
  {guide:usaGuides.find(g=>g.slug.includes("iowa-state"))??usaGuides[2],image:iowaCampus,badge:"Fall 2027"},
];
const campusCycle=[alabamaCampus,uconnCampus,iowaCampus];
const applicationSteps=["Fit check","Official source","Professor email","Documents","Apply & verify"];

function SectionTitle({number,children}:{number:string;children:React.ReactNode}){return <div className={styles.sectionTitle}><span>{number}</span><h2>{children}</h2></div>}

export default async function ScholarshipsPage({searchParams}:{searchParams:Promise<{country?:string;q?:string;filter?:string}>}){
  const params=await searchParams;
  const activeCountry=params.country==="japan"?"japan":params.country==="canada"?"canada":params.country==="korea"?"korea":params.country==="switzerland"?"switzerland":"usa";
  const query=(params.q??"").trim();
  const activeFilter=params.filter??"";
  const countryGuides=activeCountry==="japan"?japanGuides:activeCountry==="canada"?canadaGuides:activeCountry==="korea"?koreaGuides:activeCountry==="switzerland"?swissGuides:usaGuides;
  const queryText=query.toLocaleLowerCase();
  const filteredGuides=countryGuides.filter((guide)=>{
    const searchable=[guide.university,guide.title,guide.englishBusinessPrograms??"",guide.lowestCostCategory??"",guide.summary,guide.label,guide.funding,guide.audience,...guide.highlights,...guide.fit].join(" ").toLocaleLowerCase();
    if(queryText&&!searchable.includes(queryText))return false;
    if(activeFilter==="funded")return /fund|stipend|tuition|scholarship/.test(`${guide.funding} ${guide.label}`.toLocaleLowerCase());
    if(activeFilter==="active")return /active|hiring|funded|trustworthy|riet/.test(searchable);
    if(activeFilter==="email")return /professor|faculty|supervisor|contact|lab/.test(searchable);
    if(activeFilter==="deadline")return guide.steps.some(step=>/deadline|month|week|day|2026|2027|dec|jan|fall|spring/i.test(`${step.title} ${step.timing}`));
    if(activeFilter==="phd")return /phd|doctoral|doctorate/.test(searchable);
    if(activeFilter==="masters")return /master|m\.sc|msc|graduate/.test(searchable);
    if(activeFilter==="business")return guide.businessPriority!==undefined;
    if(activeFilter==="lowest")return guide.lowestCostPriority!==undefined;
    return true;
  }).sort((a,b)=>{
    if(activeFilter==="business")return (a.businessPriority??Number.MAX_SAFE_INTEGER)-(b.businessPriority??Number.MAX_SAFE_INTEGER);
    if(activeFilter==="lowest")return (a.lowestCostPriority??Number.MAX_SAFE_INTEGER)-(b.lowestCostPriority??Number.MAX_SAFE_INTEGER);
    if(activeCountry==="canada")return (a.canadaPriority??Number.MAX_SAFE_INTEGER)-(b.canadaPriority??Number.MAX_SAFE_INTEGER);
    if(activeCountry==="korea")return (a.koreaPriority??Number.MAX_SAFE_INTEGER)-(b.koreaPriority??Number.MAX_SAFE_INTEGER);
    if(activeCountry==="switzerland")return (a.swissPriority??Number.MAX_SAFE_INTEGER)-(b.swissPriority??Number.MAX_SAFE_INTEGER);
    return 0;
  });
  const isFiltered=Boolean(query||activeFilter);
  const visibleGuides=isFiltered?filteredGuides:filteredGuides.slice(0,6);
  const makeHref=(overrides:{country?:string;q?:string;filter?:string}={})=>{const state={country:activeCountry,q:query,filter:activeFilter,...overrides};const search=new URLSearchParams();if(state.country)search.set("country",state.country);if(state.q)search.set("q",state.q);if(state.filter)search.set("filter",state.filter);return `/scholarships?${search.toString()}#guides`};
  const filterOptions=[{value:"lowest",label:"Lowest cost"},{value:"business",label:"English Business/MBA"},{value:"funded",label:"Fully funded"},{value:"active",label:"Active lead"},{value:"email",label:"Email first"},{value:"deadline",label:"Deadline"},{value:"phd",label:"PhD"},{value:"masters",label:"Master’s"}];
  return <div className={styles.page}><SiteHeader/><main>
  <section className={styles.hero}><div><span className={styles.eyebrow}>Scholarship navigator</span><h1>Funding খুঁজুন—তারপর<br/><em>smartভাবে apply</em> করুন।</h1><p>USA, Canada, South Korea, Switzerland ও Japan-এর graduate opportunity বুঝতে clear, practical guide। Official source যাচাই করে application flow সহজ ভাষায় ব্যাখ্যা করা হয়েছে।</p><div className={styles.heroActions}><a href="#guides">Scholarship খুঁজুন ↓</a><a href="#roadmap">Application roadmap</a></div><div className={styles.trust}><span><Icon name="shield"/>Source-checked</span><span><Icon name="link"/>Official links</span><span><Icon name="calendar"/>Updated August 2026</span></div></div><div className={styles.heroImage}><Image src={navigatorHero} alt="Scholarship research desk for USA, Canada, South Korea, Switzerland and Japan" fill priority sizes="55vw"/></div></section>

  <aside className={styles.warning}><Icon name="warning"/><div><h2>Apply করার আগে</h2><p>Scholarship, funded admission এবং application portal এক জিনিস নয়। প্রতিটি opportunity আসলে কী—সেটি আগে পরিষ্কারভাবে বুঝুন।</p></div><span><Icon name="warning"/>Admission বা funding guarantee নয়</span></aside>

  <section className={styles.filters}><form action="/scholarships#guides" method="get"><Icon name="search"/><input name="q" defaultValue={query} placeholder="University, professor বা research area খুঁজুন"/><input type="hidden" name="country" value={activeCountry}/>{activeFilter&&<input type="hidden" name="filter" value={activeFilter}/>}</form><Link className={styles.allFilter} aria-current={!query&&!activeFilter?"page":undefined} href={makeHref({q:"",filter:""})}>সব</Link><Link aria-current={activeCountry==="usa"?"page":undefined} href={makeHref({country:"usa",filter:""})}>🇺🇸 USA · {usaGuides.length} guides</Link><Link aria-current={activeCountry==="canada"?"page":undefined} href={makeHref({country:"canada",filter:""})}>🇨🇦 Canada · {canadaGuides.length} guides</Link><Link aria-current={activeCountry==="korea"?"page":undefined} href={makeHref({country:"korea",filter:""})}>🇰🇷 Korea · {koreaGuides.length} guides</Link><Link aria-current={activeCountry==="switzerland"?"page":undefined} href={makeHref({country:"switzerland",filter:""})}>🇨🇭 Swiss · {swissGuides.length} guides</Link><Link aria-current={activeCountry==="japan"?"page":undefined} href={makeHref({country:"japan",filter:""})}>🇯🇵 Japan · {japanGuides.length} guides</Link><div className={styles.chips}>{filterOptions.map(option=><Link aria-current={activeFilter===option.value?"page":undefined} href={makeHref({country:option.value==="business"?"japan":option.value==="lowest"?"usa":activeCountry,filter:activeFilter===option.value?"":option.value})} key={option.value}>{option.label}</Link>)}</div></section>

  <section className={styles.actions}><SectionTitle number="01">কোন opportunity-তে এখন কী action নেবেন?</SectionTitle><div className={styles.actionGrid}><article><h3>⚡ Strongest active leads</h3><ul><li>Alabama · AutMn Trustworthy Autonomy Lab</li><li>UConn · RIET Lab—currently hiring, fully funded</li></ul><a href="#featured">এখন দেখুন <Icon name="arrow"/></a></article><article><h3>✉ Email before applying</h3><ul><li>SIU Mobile Distributed Computing</li><li>UMBC Cloud Security</li><li>Iowa State faculty matches</li><li>Oregon Distopia Lab</li></ul><a href="#guides">Email checklist <Icon name="arrow"/></a></article><article><h3>▣ Funding deadlines</h3><ul><li>Dec 15</li><li>Dec 31</li><li>Jan 1</li><li>Jan 7</li></ul><a href="#roadmap">Deadline calendar <Icon name="arrow"/></a></article></div></section>

  <section id="featured"><SectionTitle number="02">Strong research-fit ও current funding signal</SectionTitle><div className={styles.featuredGrid}>{featured.map(({guide,image,badge})=><article key={guide.slug}><div className={styles.featuredImage}><Image src={image} alt={`${guide.university} watercolor campus`} fill sizes="33vw"/><span>{badge}</span></div><h3>{guide.university}</h3><h4>{guide.title}</h4><div className={styles.tags}><span>AI</span><span>Systems</span><span>Research</span></div><p>{guide.summary}</p><Link href={`/scholarships/${guide.slug}`}>Complete guide <Icon name="arrow"/></Link></article>)}</div></section>

  <section id="guides"><div className={styles.guideHeading}><SectionTitle number="03">আপনার research interest অনুযায়ী guide বেছে নিন</SectionTitle><span>{filteredGuides.length}টি result · {activeCountry.toUpperCase()}</span></div>{visibleGuides.length>0?<div className={styles.guideList}>{visibleGuides.map((guide,index)=><article key={guide.slug}><div><Image src={campusCycle[index%3]} alt="" fill sizes="18vw"/></div><div><h3>{activeFilter==="business"&&guide.englishBusinessPrograms?`${guide.university} — ${guide.englishBusinessPrograms}`:guide.title}</h3><b>{guide.country==="switzerland"?guide.swissPriority?`Swiss Top 15 priority #${guide.swissPriority} · ${guide.swissFunding}`:`Swiss Tier ${guide.swissTier} · ${guide.swissFunding}`:guide.country==="korea"?guide.koreaPriority?`Korea Top 15 priority #${guide.koreaPriority} · ${guide.koreaFunding} funding`:`Korea Tier ${guide.koreaTier} · ${guide.koreaFunding} funding`:guide.country==="canada"?guide.canadaPriority?`Canada Top 15 priority #${guide.canadaPriority} · ${guide.canadaFunding} funding`:`Canada Tier ${guide.canadaTier} · ${guide.canadaFunding} funding`:activeFilter==="lowest"&&guide.lowestCostPriority?`Lowest-cost priority #${guide.lowestCostPriority} · ${guide.lowestCostCategory}`:activeFilter==="business"&&guide.businessPriority?`English Business priority #${guide.businessPriority}`:guide.bestFitPriority?`Best-fit priority #${guide.bestFitPriority}`:activeFilter?(filterOptions.find(option=>option.value===activeFilter)?.label??"All guides"):index%2===0?"Active lead":"Email first"}</b><span>{guide.audience}</span></div><Icon name="arrow"/><Link aria-label={`Read ${guide.title}`} href={activeFilter==="business"&&guide.businessOfficialUrl?guide.businessOfficialUrl:`/scholarships/${guide.slug}`}/></article>)}</div>:<div className={styles.emptyResults}><Icon name="search"/><h3>কোনো matching guide পাওয়া যায়নি</h3><p>অন্য keyword, country বা filter দিয়ে আবার চেষ্টা করুন।</p><Link href={makeHref({q:"",filter:""})}>সব guide দেখুন</Link></div>}{!isFiltered&&countryGuides.length>6&&<Link className={styles.more} href={makeHref({filter:"all"})}>সব {countryGuides.length} {activeCountry.toUpperCase()} guide দেখুন <Icon name="arrow"/></Link>}</section>

  <section className={styles.japanPanel}><div className={styles.japanImage}><Image src={japanPanorama} alt="Japan scholarship landscape with Mount Fuji" fill sizes="50vw"/></div><div><SectionTitle number="04">Japan scholarship ও graduate funding</SectionTitle><h2>MEXT, university scholarship, professor contact এবং admission route—এক জায়গায় organized guide।</h2><strong>{japanGuides.length} guides</strong><div className={styles.tags}><span>MEXT</span><span>University funding</span><span>Professor contact</span><span>Admission roadmap</span></div><Link href="/scholarships?country=japan">Japan guides দেখুন <Icon name="arrow"/></Link></div></section>

  <section id="roadmap" className={styles.roadmap}><SectionTitle number="05">Opportunity পাওয়া থেকে application submit পর্যন্ত</SectionTitle><div>{applicationSteps.map((step,index)=><article key={step}><span>{index+1}</span><h3>{step}</h3><p>{["program and research match","eligibility and deadline","when appropriate","CV, SOP, transcripts, tests","portal and written offer"][index]}</p></article>)}</div><p><Icon name="warning"/>Written offer-ই funding-এর final authority।</p></section>

  <section className={styles.resources}><SectionTitle number="06">Helpful resources</SectionTitle><div><article><Icon name="email"/><h3>Professor email checklist</h3><p>Professor contact করার আগে কী কী প্রস্তুত নেবেন।</p><Link href="/contact">Guide দেখুন <Icon name="arrow"/></Link></article><article><Icon name="document"/><h3>Research-fit worksheet</h3><p>নিজের research fit structured worksheet-এ organize করুন।</p><Link href="/projects">Guide দেখুন <Icon name="arrow"/></Link></article><article><Icon name="document"/><h3>Application document guide</h3><p>CV, SOP, transcripts ও tests গুছিয়ে রাখুন।</p><Link href="/cv">Guide দেখুন <Icon name="arrow"/></Link></article></div></section>

  <section className={styles.cta}><Image src={navigatorHero} alt="" fill sizes="1120px"/><div><h2>আপনার next application আরও clear করুন।</h2><p>Guide পড়ুন, official source verify করুন, তারপর focusedভাবে apply করুন।</p><Link href="#guides">Scholarships explore করুন <Icon name="arrow"/></Link><Link href="/contact">প্রশ্ন করুন</Link></div></section>
  </main><SiteFooter/></div>}
