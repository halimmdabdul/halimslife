import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";

import journeyArt from "@/assets/journey/hero-bangladesh-japan.png";
import { ContactForm } from "@/components/contact-form";
import { InnerPageShell } from "@/components/inner-page-shell";
import { TranslatedText } from "@/components/site-preferences";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "যোগাযোগ",
  description:
    "Engineering, research, Japanese learning অথবা collaboration নিয়ে Halim Md Abdul-এর সঙ্গে যোগাযোগ করুন।",
  alternates: { canonical: "/contact" },
};

const allowedTopics = new Set([
  "general",
  "academy",
  "engineering",
  "research",
  "career",
  "collaboration",
]);

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string; subject?: string }>;
}) {
  await connection();
  const parameters = await searchParams;
  const defaultTopic = allowedTopics.has(parameters.topic ?? "")
    ? parameters.topic
    : "general";
  const defaultSubject = (parameters.subject ?? "").slice(0, 120);

  return (
    <InnerPageShell>
      <div className={styles.page}>
      <section className={`contact-page container ${styles.contactGrid}`}>
        <div className="contact-intro">
          <span className="kicker">
            <TranslatedText bn="যোগাযোগ" en="Contact" ja="お問い合わせ" />
          </span>
          <h1>
            <TranslatedText
              bn="আপনার idea থেকে শুরু হোক meaningful conversation।"
              en="Let’s turn your idea into a meaningful conversation."
              ja="アイデアから有意義な会話を始めましょう。"
            />
          </h1>
          <p>
            Engineering, research, Japanese learning, career guidance অথবা
            collaboration—formটি পূরণ করুন। পরিষ্কার context দিলে আরও helpful
            reply দিতে পারব।
          </p>

          <div className="contact-details">
            <article>
              <span aria-hidden="true">✉</span>
              <div><small>Prefer email?</small><a href="mailto:reiazbubt@gmail.com">reiazbubt@gmail.com</a></div>
            </article>
            <article>
              <span aria-hidden="true">⌖</span>
              <div><small>Based in</small><strong>Japan · 日本</strong></div>
            </article>
            <article>
              <span aria-hidden="true">◷</span>
              <div><small>Typical reply</small><strong>Within 1–2 working days</strong></div>
            </article>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/halimmdabdul" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ" target="_blank" rel="noreferrer">Google Scholar ↗</a>
          </div>
        </div>

        <ContactForm
          defaultTopic={defaultTopic}
          defaultSubject={defaultSubject}
        />
      </section>
      <section className={`${styles.beforeSend} container`}><h2><span>↗</span> Before you send</h2><div><article><b>01</b><h3>Clear context</h3><p>আপনার goal ও প্রয়োজনীয় background লিখুন।</p></article><article><b>02</b><h3>Useful details</h3><p>Relevant link, example অথবা deadline দিন।</p></article><article><b>03</b><h3>Easy follow-up</h3><p>আপনার preferred reply method জানান।</p></article></div></section>
      <section className={styles.closing}><Image src={journeyArt} alt="Japanese watercolor landscape" fill sizes="100vw"/><div><h2>একটি ভালো conversation থেকেই<br/>নতুন কাজ শুরু হতে পারে।</h2><div><a href="mailto:reiazbubt@gmail.com">Email করুন</a><Link href="/cv">আমার CV দেখুন</Link></div></div></section>
      </div>
    </InnerPageShell>
  );
}
