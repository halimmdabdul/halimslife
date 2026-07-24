import type { Metadata } from "next";
import { connection } from "next/server";

import { InnerPageShell } from "@/components/inner-page-shell";
import { TranslatedText } from "@/components/site-preferences";

export const metadata: Metadata = {
  title: "আমার জার্নি",
  description:
    "Bangladesh থেকে Japan—Halim-এর Computer Science education, research ও software engineering career journey।",
  alternates: { canonical: "/journey" },
};

const steps = [
  {
    label: "Bangladesh",
    title: "Curiosity দিয়ে শুরু",
    text: "Technology কীভাবে real problem solve করে—এই curiosity থেকেই Computer Science-এর পথে যাত্রা শুরু।",
  },
  {
    label: "Shizuoka University",
    title: "Japan-এ MSc ও research",
    text: "Computer Science-এ Master’s সম্পন্ন করার পাশাপাশি recommender systems এবং health technology নিয়ে published research।",
  },
  {
    label: "PPES · Japan",
    title: "Real-world engineering",
    text: "Japanese product team-এ robotics, perception, camera এবং sensor systems নিয়ে practical engineering experience।",
  },
  {
    label: "Halim’s Life",
    title: "অভিজ্ঞতা থেকে community",
    text: "Bangla-friendly Japanese learning tools, programming guidance এবং Japan career insight তৈরি করছি।",
  },
];

export default async function JourneyPage() {
  await connection();

  return (
    <InnerPageShell>
      <section className="page-title container">
        <span className="kicker">
          <TranslatedText bn="আমার জার্নি" en="My journey" ja="これまでの歩み" />
        </span>
        <h1>
          <TranslatedText
            bn="একটি বড় leap নয়—ছোট ছোট consistent step-এর গল্প।"
            en="Not one giant leap—a story of small, consistent steps."
            ja="大きな飛躍ではなく、小さな一歩を積み重ねた物語。"
          />
        </h1>
        <p>
          প্রতিটি stage আমাকে skill-এর পাশাপাশি language, culture এবং মানুষের
          সঙ্গে কাজ করার নতুন দৃষ্টিভঙ্গি দিয়েছে।
        </p>
      </section>
      <section className="journey-page-list container">
        {steps.map((step, index) => (
          <article key={step.title}>
            <span className="journey-index">0{index + 1}</span>
            <div>
              <small>{step.label}</small>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </section>
    </InnerPageShell>
  );
}
