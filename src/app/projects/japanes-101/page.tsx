import type { Metadata } from "next";
import Link from "next/link";

import { InnerPageShell } from "@/components/inner-page-shell";
import { TopicPractice } from "./topic-practice";
import styles from "./japanes-101.module.css";

export const metadata: Metadata = {
  title: "Japanes 101",
  description: "Japanes 101 — বাংলা, hiragana ও audio সহ Self-introduction, Daily Routine, Shopping, Food Ordering, Directions এবং Making Plans & Invitations। Interactive practice ও conversation।",
  alternates: { canonical: "/projects/japanes-101" },
};

export default function Japanes101Page() {
  return (
    <InnerPageShell>
      <div className={styles.page}>
        <Link className={styles.back} href="/projects">← সব project</Link>
        <section className={styles.hero} aria-labelledby="project-title">
          <div>
            <span className={styles.status}>Beginner Japanese · Topic practice</span>
            <h1 id="project-title">Japanes <em>101</em></h1>
            <p>
              বাম পাশ থেকে topic বেছে নিন। ডান পাশে Japanese বাক্য, বাংলা
              explanation এবং নিজের উত্তর দিয়ে practice করুন।
            </p>
          </div>
        </section>
        <TopicPractice />
      </div>
    </InnerPageShell>
  );
}
