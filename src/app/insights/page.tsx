import type { Metadata } from "next";
import { connection } from "next/server";

import { InnerPageShell } from "@/components/inner-page-shell";

export const metadata: Metadata = {
  title: "লেখালেখি ও Insights",
  description:
    "Japan career, Japanese language এবং programming fundamentals নিয়ে Halim-এর practical Bengali insights।",
  alternates: { canonical: "/insights" },
};

const insights = [
  {
    category: "Engineering in Japan",
    title: "Japanese team-এ clear communication কেন technical skill-এর অংশ",
    text: "Documentation, context sharing এবং steady updates কীভাবে team trust ও delivery improve করে।",
  },
  {
    category: "Japanese learning",
    title: "Kana থেকে JLPT: realistic roadmap তৈরি করার নিয়ম",
    text: "নিজের সময় ও level অনুযায়ী vocabulary, grammar, reading এবং review-এর sustainable system।",
  },
  {
    category: "Programming",
    title: "Strong fundamentals তৈরি করতে tutorial loop থেকে বের হোন",
    text: "Problem decomposition, debugging এবং deliberate practice দিয়ে independent developer হওয়ার পথ।",
  },
];

export default async function InsightsPage() {
  await connection();

  return (
    <InnerPageShell>
      <section className="page-title container">
        <span className="kicker">লেখালেখি ও Insights</span>
        <h1>Experience থেকে শেখা practical কথা—সহজ বাংলায়।</h1>
        <p>
          Japan, engineering এবং learning journey-তে যে lessons সত্যিই কাজে
          লেগেছে।
        </p>
      </section>
      <section className="insight-page-list container">
        {insights.map((insight, index) => (
          <article key={insight.title}>
            <div>
              <span>0{index + 1}</span>
              <small>{insight.category}</small>
            </div>
            <h2>{insight.title}</h2>
            <p>{insight.text}</p>
          </article>
        ))}
      </section>
    </InnerPageShell>
  );
}
