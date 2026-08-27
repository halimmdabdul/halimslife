import type { Metadata } from "next";
import Link from "next/link";

import { InnerPageShell } from "@/components/inner-page-shell";
import { HonmanDangerSection } from "@/components/honman-danger-section";
import { HonmanTestRunner } from "@/components/honman-test-runner";
import { honmanDangerProblems, honmanDangerProblemsTwo } from "@/lib/honman-danger-problems";
import { honmanTestFourOfficialAnswers, honmanTestOneOfficialAnswers, honmanTestThreeOfficialAnswers, honmanTestTwoOfficialAnswers } from "@/lib/honman-official-answers";
import { honmanTestFour, honmanTestOne, honmanTestThree, honmanTestTwo } from "@/lib/honman-tests";

import styles from "./honman-test.module.css";

export const metadata: Metadata = {
  title: "Honman Test | Japanese Practice Project",
  description: "Honman Test 1, 2, 3 অথবা 4 বেছে নিয়ে Japanese practice শুরু করুন।",
  alternates: { canonical: "/projects/honman-test" },
};

type Props = { searchParams: Promise<{ test?: string }> };

const tests = [1, 2, 3, 4];

export default async function HonmanTestPage({ searchParams }: Props) {
  const params = await searchParams;
  const requested = Number(params.test);
  const selected = tests.includes(requested) ? requested : null;

  return <InnerPageShell><main className={styles.page}>
    <section className={styles.hero}>
      <div><Link href="/projects" className={styles.back}>← সব project</Link><span>Japanese Practice Project</span><h1>Honman <em>Test</em></h1><p>আপনার পছন্দের test set নির্বাচন করুন। চারটি option পরিষ্কারভাবে সাজানো—যাতে পরবর্তী practice দ্রুত শুরু করা যায়।</p></div>
      <div className={styles.testSheet} aria-hidden="true"><i>本</i><b>HONMAN</b><strong>TEST</strong><span>01 · 02 · 03 · 04</span></div>
    </section>

    <section className={styles.selector}>
      <div className={styles.sectionHead}><span>01</span><div><h2>একটি test নির্বাচন করুন</h2><p>Test 1, 2, 3 অথবা 4</p></div></div>
      <div className={styles.grid}>{tests.map((test) => <Link className={selected === test ? styles.active : ""} href={`/projects/honman-test?test=${test}#selected-test`} key={test}><span>{String(test).padStart(2,"0")}</span><div><small>HONMAN</small><h3>Test {test}</h3><p>Japanese practice set {String(test).padStart(2,"0")}</p></div><b>{selected === test ? "নির্বাচিত ✓" : "বেছে নিন →"}</b></Link>)}</div>
    </section>

    {selected === 1 ? <><HonmanTestRunner questions={honmanTestOne} answerKey={honmanTestOneOfficialAnswers} testNumber={1}/><HonmanDangerSection problems={honmanDangerProblems} testNumber={1}/></> : selected === 2 ? <><HonmanTestRunner questions={honmanTestTwo} answerKey={honmanTestTwoOfficialAnswers} testNumber={2}/><HonmanDangerSection problems={honmanDangerProblemsTwo} testNumber={2}/></> : selected === 3 ? <HonmanTestRunner questions={honmanTestThree} answerKey={honmanTestThreeOfficialAnswers} testNumber={3}/> : selected === 4 ? <HonmanTestRunner questions={honmanTestFour} answerKey={honmanTestFourOfficialAnswers} testNumber={4}/> : selected ? <section id="selected-test" className={styles.selected}><span>Selected test</span><h2>Honman Test {selected}</h2><p>Test {selected} নির্বাচন করা হয়েছে। এই set-এর questions পরবর্তী ধাপে যোগ করা যাবে।</p><div><Link href="/projects/honman-test">অন্য test বেছে নিন</Link><Link href="/contact">Feedback দিন →</Link></div></section> : <section className={styles.hint}><b>四</b><p>উপরের চারটি card-এর যেকোনো একটিতে click করে test নির্বাচন করুন।</p></section>}
  </main></InnerPageShell>;
}
