import type { Metadata } from "next";
import { connection } from "next/server";

import { InnerPageShell } from "@/components/inner-page-shell";

export const metadata: Metadata = {
  title: "প্রজেক্ট",
  description:
    "Halim-এর KanaStory, JLPT learning hubs এবং Bengali-friendly engineering education projects দেখুন।",
  alternates: { canonical: "/projects" },
};

const projects = [
  {
    title: "KanaStory",
    type: "Japanese learning · Interactive",
    description:
      "Story এবং interactive practice-এর মাধ্যমে hiragana ও katakana শেখার একটি beginner-friendly experience।",
    href: "https://kanastory.halimslife.com/",
  },
  {
    title: "JLPT N5 Hub",
    type: "Roadmap · Vocabulary · Grammar",
    description:
      "বাংলাভাষী learners-এর জন্য JLPT N5-এর structured study path এবং practice resources।",
    href: "https://n5.halimslife.com/",
  },
  {
    title: "JLPT N4 Hub",
    type: "Japanese learning · Intermediate",
    description:
      "N4 learners-এর জন্য focused roadmap, notes এবং গুরুত্বপূর্ণ practice materials।",
    href: "https://n4.halimslife.com/",
  },
  {
    title: "Open-source experiments",
    type: "Code · Engineering",
    description:
      "Programming, education এবং ছোট practical tools নিয়ে আমার public code ও experiments।",
    href: "https://github.com/halimmdabdul",
  },
];

export default async function ProjectsPage() {
  await connection();

  return (
    <InnerPageShell>
      <section className="page-title container">
        <span className="kicker">আমার প্রজেক্ট</span>
        <h1>যে tools ও resources মানুষকে এক ধাপ এগিয়ে নেয়।</h1>
        <p>
          Engineering mindset এবং learner empathy—দুইয়ের সমন্বয়ে তৈরি আমার
          selected কাজ।
        </p>
      </section>
      <section className="project-page-grid container">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>0{index + 1}</span>
            <small>{project.type}</small>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <strong>প্রজেক্ট দেখুন ↗</strong>
          </a>
        ))}
      </section>
    </InnerPageShell>
  );
}
