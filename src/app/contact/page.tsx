import type { Metadata } from "next";
import { connection } from "next/server";

import { InnerPageShell } from "@/components/inner-page-shell";
import { TranslatedText } from "@/components/site-preferences";

export const metadata: Metadata = {
  title: "যোগাযোগ",
  description:
    "Engineering, research, Japanese learning অথবা collaboration নিয়ে Halim Md Abdul-এর সঙ্গে যোগাযোগ করুন।",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  await connection();

  return (
    <InnerPageShell>
      <section className="contact-page container">
        <span className="kicker">
          <TranslatedText bn="যোগাযোগ" en="Contact" ja="お問い合わせ" />
        </span>
        <h1>
          <TranslatedText
            bn="আপনার idea, প্রশ্ন অথবা journey নিয়ে কথা বলা যাক।"
            en="Let’s talk about your idea, question or journey."
            ja="アイデア、質問、これからの歩みについてお話ししましょう。"
          />
        </h1>
        <p>
          Engineering, research, Japanese learning, career guidance অথবা
          meaningful collaboration—সংক্ষেপে লিখে পাঠান।
        </p>
        <a href="mailto:reiazbubt@gmail.com?subject=Hello Halim">
          <TranslatedText
            bn="Email করুন"
            en="Send an email"
            ja="メールを送る"
          />
          <strong>reiazbubt@gmail.com ↗</strong>
        </a>
        <div className="contact-socials">
          <a
            href="https://github.com/halimmdabdul"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar ↗
          </a>
        </div>
      </section>
    </InnerPageShell>
  );
}
