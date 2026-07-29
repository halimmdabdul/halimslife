import type { Metadata } from "next";
import Link from "next/link";

import { InnerPageShell } from "@/components/inner-page-shell";
import { TranslatedText } from "@/components/site-preferences";
import { markdownToPlainText } from "@/components/rich-text-content";
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
  const additionalCourses = publishedCourses.filter(
    (course) => course.slug !== "japanese-n5",
  );
  return (
    <InnerPageShell>
      <section className="academy-hero">
        <div className="container academy-hero-grid">
          <div className="academy-hero-copy">
            <span className="academy-eyebrow">Halim&apos;s Life Academy</span>
            <h1>
              <TranslatedText
                bn="শুধু দেখবেন না—শিখুন, practice করুন, এগিয়ে যান।"
                en="Don’t just watch—learn, practise and move forward."
                ja="見るだけでなく、学び、練習し、前へ進もう。"
              />
            </h1>
            <p>
              <TranslatedText
                bn="বাংলায় সহজ explanation, ছোট ছোট lesson এবং নিজের গতিতে শেখার practical path—Japanese থেকে technology পর্যন্ত।"
                en="Clear explanations, focused lessons and practical learning paths—from Japanese to technology."
                ja="わかりやすい解説と実践的なレッスンで、日本語からテクノロジーまで学べます。"
              />
            </p>
            <div className="academy-hero-actions">
              <Link href="/academy/japanese-n5" className="primary-button">
                Start learning free <span aria-hidden="true">→</span>
              </Link>
              <a href="#courses">Browse learning paths <span aria-hidden="true">↓</span></a>
            </div>
            <div className="academy-proof" aria-label="Academy benefits">
              <span>✓ Bengali-friendly</span>
              <span>✓ Self-paced</span>
              <span>✓ Progress saved</span>
            </div>
          </div>

          <aside className="academy-hero-card" aria-label="Recommended first course">
            <span>Recommended first path</span>
            <div className="academy-hero-card-title">
              <strong>日本語</strong>
              <div><small>JLPT N5</small><h2>Japanese Foundations</h2></div>
            </div>
            <p>Kana, essential grammar এবং everyday conversation দিয়ে confidence তৈরি করুন।</p>
            <ul>
              <li>Focused video ও reading lessons</li>
              <li>Study notes এবং practice questions</li>
              <li>যেখান থেকে থামবেন, সেখান থেকেই শুরু</li>
            </ul>
            <Link href="/academy/japanese-n5">Open the course <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
      </section>

      <main id="courses">
        <section className="academy-steps container" aria-labelledby="academy-steps-title">
          <div>
            <span className="kicker">Simple learning flow</span>
            <h2 id="academy-steps-title">তিন ধাপে steady progress.</h2>
          </div>
          <article><span>01</span><strong>Choose a path</strong><p>আপনার level ও goal অনুযায়ী course দিয়ে শুরু করুন।</p></article>
          <article><span>02</span><strong>Learn by doing</strong><p>Lesson, notes এবং ছোট practice test একসঙ্গে ব্যবহার করুন।</p></article>
          <article><span>03</span><strong>Keep moving</strong><p>Progress save থাকবে—ফিরে এসে next lesson থেকে চালিয়ে যান।</p></article>
        </section>

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
                  <Link
                    className="course-interest-link"
                    href={`/contact?topic=academy&subject=${encodeURIComponent(`${course.title} course interest`)}`}
                  >
                    I&apos;m interested <span aria-hidden="true">→</span>
                  </Link>
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
                  <Link
                    className="course-interest-link"
                    href={`/contact?topic=academy&subject=${encodeURIComponent(`${course.title} course interest`)}`}
                  >
                    Request this course <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {additionalCourses.length > 0 ? (
          <section className="academy-section container">
            <div className="academy-heading">
              <div><span className="kicker">Available now</span><h2>Courses from the Academy.</h2></div>
              <p>New courses published from the Academy dashboard appear here automatically.</p>
            </div>
            <div className="dynamic-course-grid">
              {additionalCourses.map((course) => (
                <Link href={`/academy/${course.slug}`} key={course.id}>
                  {course.cover_image ? <span className="dynamic-course-cover" role="img" aria-label={`${course.title} featured image`} style={{ backgroundImage: `url(${course.cover_image})` }} /> : <span className="dynamic-course-cover placeholder" aria-hidden="true">{course.title.charAt(0)}</span>}
                  <div className="dynamic-course-body">
                    <span>{course.category}</span>
                    <strong>{course.level}</strong>
                    <h3>{course.title}</h3>
                    <p>{course.description ? markdownToPlainText(course.description) : course.subtitle || "Start learning with this structured course."}</p>
                    <b>Open course →</b>
                  </div>
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
          <Link href="/contact?topic=academy&subject=Academy%20course%20request">
            Suggest a course <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
    </InnerPageShell>
  );
}
