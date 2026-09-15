import type { Metadata } from "next";
import Link from "next/link";

import { InnerPageShell } from "@/components/inner-page-shell";
import styles from "./japanes-101.module.css";

export const metadata: Metadata = {
  title: "Japanes 101",
  description: "Japanes 101 — Japanese শেখার নতুন project। Lessons ও learning content শীঘ্রই যোগ করা হবে।",
  alternates: { canonical: "/projects/japanes-101" },
};

export default function Japanes101Page() {
  return (
    <InnerPageShell>
      <div className={styles.page}>
        <Link className={styles.back} href="/projects">← সব project</Link>
        <section className={styles.hero} aria-labelledby="project-title">
          <div>
            <span className={styles.status}>New project · Coming soon</span>
            <h1 id="project-title">Japanes <em>101</em></h1>
            <p>
              Japanese শেখার নতুন একটি শুরু। এই project-এর lessons এবং
              learning content এখানে যোগ করা হবে।
            </p>
            <div className={styles.note}>
              <h2>Project space প্রস্তুত</h2>
              <p>এখনও lessons প্রকাশ করা হয়নি। Content যোগ হলে এখান থেকেই শেখা শুরু করতে পারবেন।</p>
            </div>
          </div>
          <div className={styles.visual} aria-hidden="true">
            <span>日本語</span>
            <strong>101</strong>
            <small>A new beginning</small>
          </div>
        </section>
      </div>
    </InnerPageShell>
  );
}
