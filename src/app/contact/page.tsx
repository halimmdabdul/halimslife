import type { Metadata } from "next";
import { connection } from "next/server";

import { ContactForm } from "@/components/contact-form";
import { InnerPageShell } from "@/components/inner-page-shell";
import { TranslatedText } from "@/components/site-preferences";

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
      <section className="contact-page container">
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
    </InnerPageShell>
  );
}
