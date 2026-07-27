import type { Metadata } from "next";
import Link from "next/link";

import { InnerPageShell } from "@/components/inner-page-shell";
import { TranslatedText } from "@/components/site-preferences";
import { getPublishedCourses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Academy | Japanese, Robotics and AI Courses",
  description:
    "Learn Japanese from JLPT N5 to N1, robotics, artificial intelligence and practical technology skills with Halim's Life Academy.",
  alternates: { canonical: "/academy" },
};

const japaneseCourses = [
  {
    level: "N5",
    title: "Japanese Foundations",
    description: "Kana, basic grammar, everyday vocabulary and simple conversation.",
    status: "Start here",
  },
  {
    level: "N4",
    title: "Everyday Japanese",
    description: "Core sentence patterns, reading practice and useful daily expressions.",
    status: "Beginner",
  },
  {
    level: "N3",
    title: "Intermediate Japanese",
    description: "Natural grammar, broader vocabulary, reading and listening fluency.",
    status: "Intermediate",
  },
  {
    level: "N2",
    title: "Professional Japanese",
    description: "Advanced reading, workplace language and nuanced communication.",
    status: "Advanced",
  },
  {
    level: "N1",
    title: "Japanese Mastery",
    description: "Complex texts, precise expressions and high-level comprehension.",
    status: "Expert",
  },
];

const technologyCourses = [
  {
    icon: "⚙",
    title: "Robotics Fundamentals",
    description:
      "Sensors, actuators, control systems and the foundations behind real robots.",
    topics: ["Electronics", "Motion", "Control"],
  },
  {
    icon: "AI",
    title: "Artificial Intelligence",
    description:
      "Understand machine learning, neural networks and practical AI applications.",
    topics: ["Python", "Machine Learning", "Projects"],
  },
  {
    icon: "◉",
    title: "Computer Vision",
    description:
      "Teach computers to interpret images and video through hands-on exercises.",
    topics: ["OpenCV", "Detection", "Cameras"],
  },
  {
    icon: "</>",
    title: "Programming Essentials",
    description:
      "Build strong problem-solving, coding and debugging fundamentals from scratch.",
    topics: ["Logic", "Code", "Practice"],
  },
];

export default async function AcademyPage() {
  const publishedCourses = await getPublishedCourses();
  return (
    <InnerPageShell>
      <section className="academy-hero">
        <div className="container">
          <span className="academy-eyebrow">Halim&apos;s Life Academy</span>
          <h1>
            <TranslatedText
              bn="শিখুন। তৈরি করুন। সামনে এগিয়ে যান।"
              en="Learn. Build. Move forward."
              ja="学び、創り、前へ進もう。"
            />
          </h1>
          <p>
            <TranslatedText
              bn="জাপানি ভাষা থেকে Robotics ও AI—সহজ, সাজানো এবং practical learning path।"
              en="Structured, practical learning paths—from Japanese language to robotics and AI."
              ja="日本語からロボティクス、AIまで、実践的で体系的な学習パス。"
            />
          </p>
          <a href="#courses" className="primary-button">
            Explore courses <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <main id="courses">
        <section className="academy-section container">
          <div className="academy-heading">
            <div>
              <span className="kicker">Japanese learning</span>
              <h2>One clear path from N5 to N1.</h2>
            </div>
            <p>
              Start with the basics and progress step by step toward confident,
              advanced Japanese.
            </p>
          </div>

          <div className="jlpt-course-grid">
            {japaneseCourses.map((course, index) => (
              <article key={course.level}>
                <div className="course-card-top">
                  <span className="course-number">0{index + 1}</span>
                  <span className="course-status">{course.status}</span>
                </div>
                <strong className="jlpt-level">JLPT {course.level}</strong>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                {course.level === "N5" ? (
                  <Link className="course-open-link" href="/academy/japanese-n5">
                    Start learning <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <span className="course-coming">Course details coming soon</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="academy-tech-section">
          <div className="container">
            <div className="academy-heading">
              <div>
                <span className="kicker">Technology courses</span>
                <h2>Turn curiosity into real skills.</h2>
              </div>
              <p>
                Learn the concepts, tools and thinking used to build intelligent
                systems.
              </p>
            </div>

            <div className="technology-course-grid">
              {technologyCourses.map((course) => (
                <article key={course.title}>
                  <span className="tech-course-icon" aria-hidden="true">
                    {course.icon}
                  </span>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-topics">
                    {course.topics.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                  <span className="course-coming">Course details coming soon</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {publishedCourses.length > 0 ? (
          <section className="academy-section container">
            <div className="academy-heading">
              <div><span className="kicker">Available now</span><h2>Courses from the Academy.</h2></div>
              <p>New courses published from the Academy dashboard appear here automatically.</p>
            </div>
            <div className="dynamic-course-grid">
              {publishedCourses.map((course) => (
                <Link href={`/academy/${course.slug}`} key={course.id}>
                  <span>{course.category}</span>
                  <strong>{course.level}</strong>
                  <h3>{course.title}</h3>
                  <p>{course.description || course.subtitle || "Start learning with this structured course."}</p>
                  <b>Open course →</b>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="academy-cta container">
          <div>
            <span>New lessons are on the way</span>
            <h2>Which course would you like to learn first?</h2>
          </div>
          <a href="mailto:reiazbubt@gmail.com?subject=Academy course request">
            Suggest a course <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    </InnerPageShell>
  );
}
