import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";

import fallbackCover from "@/assets/blog/blog-hero.jpg";
import portrait from "@/assets/halim-portrait-v2.png";
import { InnerPageShell } from "@/components/inner-page-shell";
import { RichTextContent } from "@/components/rich-text-content";
import { SocialShare } from "@/components/social-share";
import { getPublishedPost, getPublishedPosts } from "@/lib/blog";
import styles from "./article.module.css";

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const post=await getPublishedPost(slug);if(!post)return{title:"লেখা পাওয়া যায়নি",robots:{index:false}};const seoTitle=post.meta_title||post.title;const seoDescription=post.meta_description||post.excerpt;return{title:seoTitle,description:seoDescription,alternates:{canonical:`/blog/${post.slug}`},openGraph:{title:seoTitle,description:seoDescription,type:"article",publishedTime:post.published_at,url:`/blog/${post.slug}`,images:post.cover_image?[post.cover_image]:undefined}}}
function formatDate(value:string){return new Intl.DateTimeFormat("bn-BD",{year:"numeric",month:"long",day:"numeric"}).format(new Date(value))}

export default async function SingleBlogPage({params}:{params:Promise<{slug:string}>}){
  await connection();const {slug}=await params;const [post,posts]=await Promise.all([getPublishedPost(slug),getPublishedPosts()]);if(!post)notFound();const currentIndex=posts.findIndex(item=>item.slug===post.slug);const previous=currentIndex>=0?posts[currentIndex+1]:undefined;const next=currentIndex>0?posts[currentIndex-1]:undefined;const related=posts.filter(item=>item.slug!==post.slug).slice(0,2);const cover=post.cover_image??fallbackCover.src;
  const structured={"@context":"https://schema.org","@type":"BlogPosting",headline:post.title,description:post.meta_description||post.excerpt,datePublished:post.published_at,dateModified:post.published_at,mainEntityOfPage:`https://halimslife.com/blog/${post.slug}`,author:{"@type":"Person",name:"Halim Md Abdul",url:"https://halimslife.com/about"}};
  return <InnerPageShell><div className={styles.page}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,"\u003c")}}/><article className={styles.layout}>
    <aside className={styles.toc}><b>এই লেখায়</b><nav><a href="#introduction">ভূমিকা</a><a href="#article-content">মূল আলোচনা</a><a href="#author">লেখক পরিচিতি</a><a href="#more-reading">আরও পড়ুন</a></nav></aside>
    <main className={styles.article}>
      <header id="introduction"><Link href="/blog">← সব লেখায় ফিরুন</Link><div className={styles.meta}><span>Practical Insight</span><time dateTime={post.published_at}>{formatDate(post.published_at)}</time></div><h1>{post.title}</h1><p>{post.excerpt}</p><div className={styles.authorRow}><div className={styles.avatar}>H</div><span><b>Halim Md Abdul</b><small>Japan · 日本</small></span><SocialShare title={post.title}/></div></header>
      <div className={styles.cover} style={{backgroundImage:`url("${cover}")`}} role="img" aria-label={post.title}/><p className={styles.caption}>অভিজ্ঞতা, evidence এবং practical learning থেকে তৈরি field note।</p>
      <section className={styles.content} id="article-content"><RichTextContent content={post.content}/></section>
      <section className={styles.authorCard} id="author"><div><Image src={portrait} alt="Halim Md Abdul" fill sizes="82px"/></div><span><h2>Halim Md Abdul</h2><p>Engineering, research এবং practical learning নিয়ে কাজ করি। Bengali-friendly resources তৈরি করে শেখার পথকে আরও সহজ করি।</p></span><Link href="/about">আমার সম্পর্কে</Link><Link href="/contact">যোগাযোগ</Link></section>
      <section className={styles.share}><span>লেখাটি useful মনে হলে share করুন</span><SocialShare title={post.title}/></section>
      {(previous||next)&&<nav className={styles.postNav}>{previous?<Link href={`/blog/${previous.slug}`}><small>← Previous</small><b>{previous.title}</b></Link>:<span/>}{next?<Link href={`/blog/${next.slug}`}><small>Next →</small><b>{next.title}</b></Link>:<span/>}</nav>}
      {related.length>0&&<section className={styles.related} id="more-reading"><h2>আরও পড়ুন</h2><div>{related.map((item,index)=><Link href={`/blog/${item.slug}`} key={item.id}><span>0{index+1}</span><div><small>{formatDate(item.published_at)}</small><h3>{item.title}</h3></div></Link>)}</div></section>}
    </main>
  </article><section className={styles.newsletter}><div><b>✉</b><span><h2>নতুন লেখা সরাসরি inbox-এ পান।</h2><p>Engineering, Japan career ও practical learning-এর নতুন field notes।</p></span></div><Link href="/contact?subject=Blog%20updates">Updates জানতে যোগাযোগ করুন</Link></section></div></InnerPageShell>
}
