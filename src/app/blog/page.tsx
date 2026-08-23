import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { connection } from "next/server";

import mapArt from "@/assets/about/bangladesh-japan-map.png";
import manufacturingArt from "@/assets/about/manufacturing-facility.png";
import heroArt from "@/assets/blog/blog-hero.jpg";
import codeArt from "@/assets/homepage/research-laptop-v2.png";
import japaneseArt from "@/assets/homepage/path-japanese.png";
import careerArt from "@/assets/homepage/path-career.png";
import { InnerPageShell } from "@/components/inner-page-shell";
import { getPublishedPosts, type BlogPost } from "@/lib/blog";
import styles from "./blog.module.css";

export const metadata:Metadata={title:"বাংলা Blog",description:"Japan career, Japanese language, robotics এবং programming নিয়ে Halim-এর practical বাংলা লেখা।",alternates:{canonical:"/blog"}};
const fallbackCovers:StaticImageData[]=[manufacturingArt,codeArt,mapArt,japaneseArt,careerArt];
const labels=["Japan Career · Engineering","Programming","Personal Branding","Japanese Learning"];
function cover(post:BlogPost,index:number){return post.cover_image??fallbackCovers[index%fallbackCovers.length].src}
function date(value:string){return new Intl.DateTimeFormat("bn-BD",{year:"numeric",month:"long",day:"numeric"}).format(new Date(value))}

export default async function BlogPage({searchParams}:{searchParams:Promise<{q?:string}>}){
  await connection();const parameters=await searchParams;const query=(parameters.q??"").trim().toLocaleLowerCase();const posts=await getPublishedPosts();const visible=query?posts.filter(post=>`${post.title} ${post.excerpt}`.toLocaleLowerCase().includes(query)):posts;const featured=visible[0];const latest=visible.slice(1,4);
  return <InnerPageShell><main className={styles.page}>
    <section className={styles.hero}><div><span>Halim&apos;s Blog</span><h1>অভিজ্ঞতা, শেখা এবং<br/><em>practical insight</em>—সহজ বাংলায়।</h1><p>Japan career, Japanese language, engineering ও programming নিয়ে field notes।</p><form action="/blog"><input name="q" defaultValue={parameters.q??""} placeholder="Article খুঁজুন..." aria-label="Search articles"/><button type="submit" aria-label="Search">⌕</button></form></div><div className={styles.heroArt}><Image src={heroArt} alt="Notebook, laptop and Mount Fuji watercolor illustration" fill priority sizes="58vw"/></div></section>
    <nav className={styles.filters} aria-label="Blog topics"><Link href="/blog">সব লেখা</Link><span>Japan Career</span><span>Engineering</span><span>Programming</span><span>Japanese Language</span><span>Personal Branding</span><b>সর্বশেষ ↓</b></nav>
    {featured?<><section className={styles.featured}><div className={styles.featuredImage} style={{backgroundImage:`url("${cover(featured,0)}")`}}/><div><span className={styles.index}>01</span><time dateTime={featured.published_at}>{date(featured.published_at)}</time><small>{labels[0]}</small><h2>{featured.title}</h2><p>{featured.excerpt}</p><footer><span>◷ ৮ মিনিট পড়ুন</span><Link href={`/blog/${featured.slug}`}>সম্পূর্ণ পড়ুন →</Link></footer></div></section>
    <section className={styles.latest}><header><h2>সর্বশেষ লেখা</h2><Link href="/blog">সব article দেখুন →</Link></header><div>{latest.map((post,index)=><article key={post.id}><Link href={`/blog/${post.slug}`}><div className={styles.cardImage} style={{backgroundImage:`url("${cover(post,index+1)}")`}}/><div className={styles.cardCopy}><div><b>0{index+2}</b><time dateTime={post.published_at}>{date(post.published_at)}</time></div><small>{labels[(index+1)%labels.length]}</small><h3>{post.title}</h3><p>{post.excerpt}</p><strong>সম্পূর্ণ পড়ুন →</strong></div></Link></article>)}</div></section></>:<section className={styles.empty}><span>লেখা পাওয়া যায়নি</span><h2>{query?"অন্য keyword দিয়ে আবার খুঁজুন।":"নতুন লেখা প্রস্তুত হচ্ছে।"}</h2><p>Japan career, engineering ও practical learning নিয়ে লেখা শিগগিরই এখানে প্রকাশিত হবে।</p>{query&&<Link href="/blog">সব লেখা দেখুন</Link>}</section>}
    <section className={styles.topics}><h2>যে বিষয়ে লিখি</h2><div><article><Image src={careerArt} alt="Japan career watercolor" fill sizes="25vw"/><div><h3>Japan Career</h3><p>কাজ, communication ও workplace lessons</p></div></article><article><Image src={manufacturingArt} alt="Engineering watercolor" fill sizes="25vw"/><div><h3>Engineering</h3><p>Systems, research ও practical problem-solving</p></div></article><article><Image src={codeArt} alt="Programming watercolor" fill sizes="25vw"/><div><h3>Programming</h3><p>Code, tools ও project notes</p></div></article><article><Image src={japaneseArt} alt="Japanese learning watercolor" fill sizes="25vw"/><div><h3>Japanese Learning</h3><p>Bengali-friendly language resources</p></div></article></div></section>
    <section className={styles.newsletter}><div><b>✉</b><span><h2>নতুন লেখা সরাসরি inbox-এ পান।</h2><p>Engineering, Japan career ও practical learning-এর নতুন field notes।</p></span></div><form action="/contact"><input name="subject" type="email" placeholder="আপনার email address" aria-label="Email address"/><button type="submit">Subscribe করুন</button></form></section>
  </main></InnerPageShell>
}
