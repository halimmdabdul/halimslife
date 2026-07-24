import type { Metadata } from "next";
import { connection } from "next/server";

import { InnerPageShell } from "@/components/inner-page-shell";

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
        <span className="kicker">যোগাযোগ</span>
        <h1>আপনার idea, প্রশ্ন অথবা journey নিয়ে কথা বলা যাক।</h1>
        <p>
          Engineering, research, Japanese learning, career guidance অথবা
          meaningful collaboration—সংক্ষেপে লিখে পাঠান।
        </p>
        <a href="mailto:reiazbubt@gmail.com?subject=Hello Halim">
          Email করুন
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
