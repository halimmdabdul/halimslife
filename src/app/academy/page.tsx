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
    description: "10 modules, 30 lessons, Bengali notes and practice—from kana to N5 exam skills.",
    status: "Available now",
  },
  {
    level: "N4",
    title: "Everyday Japanese",
    description: "Core sentence patterns, reading practice and useful daily expressions.",
    status: "Planned",
  },
  {
    level: "N3",
    title: "Intermediate Japanese",
    description: "Natural grammar, broader vocabulary, reading and listening fluency.",
    status: "Planned",
  },
  {
    level: "N2",
    title: "Professional Japanese",
    description: "Advanced reading, workplace language and nuanced communication.",
    status: "Planned",
  },
  {
    level: "N1",
    title: "Japanese Mastery",
    description: "Complex texts, precise expressions and high-level comprehension.",
    status: "Planned",
  },
];

const n5Modules = [
  "Study strategy",
  "Hiragana",
  "Katakana & sounds",
  "Self-introduction",
  "Objects, places & time",
  "Verbs & particles",
  "Descriptions & existence",
  "Daily communication",
  "Requests & permissions",
  "JLPT reading & listening",
];

const studyTracks = [
  {
    time: "25 min/day",
    label: "Steady",
    detail: "5 min review · 12 min lesson · 5 min recall · 3 min practice",
    pace: "প্রায় 8–10 weeks",
  },
  {
    time: "45 min/day",
    label: "Balanced",
    detail: "10 min review · 20 min lesson · 10 min examples · 5 min quiz",
    pace: "প্রায় 5–7 weeks",
  },
  {
    time: "75 min/day",
    label: "Intensive",
    detail: "15 min review · 30 min lessons · 15 min reading · 15 min listening",
    pace: "প্রায় 3–4 weeks",
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
              <li>10 modules ও 30 detailed lessons</li>
              <li>Bengali notes এবং প্রতি lesson-এ practice</li>
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

        <section className="academy-foundation container" aria-labelledby="academy-foundation-title">
          <div className="academy-heading">
            <div>
              <span className="kicker">Research-backed foundation</span>
              <h2 id="academy-foundation-title">Exam বুঝে শিখুন—শুধু list মুখস্থ নয়।</h2>
            </div>
            <p>
              Official JLPT N5 outcome এবং Japan Foundation-এর communication-first
              beginner approach ধরে original Bengali-friendly curriculum সাজানো হয়েছে।
            </p>
          </div>
          <div className="academy-foundation-grid">
            <article>
              <span>Official N5 outcome</span>
              <strong>Basic reading + slow everyday listening</strong>
              <p>Hiragana, katakana ও basic kanji-তে পরিচিত বাক্য পড়া এবং short conversation থেকে প্রয়োজনীয় তথ্য ধরা।</p>
            </article>
            <article>
              <span>Test structure</span>
              <strong>20 + 40 + 30 minutes</strong>
              <p>Vocabulary, grammar/reading এবং listening—তিন section-এর জন্য আলাদা skill practice।</p>
            </article>
            <article>
              <span>Inside this course</span>
              <strong>10 modules · 30 lessons</strong>
              <p>Explanation, quick-reference notes, original examples, practice question এবং saved progress।</p>
            </article>
          </div>
        </section>

        <section className="academy-study-plan">
          <div className="container">
            <div className="academy-heading">
              <div>
                <span className="kicker">Choose your pace</span>
                <h2>সময় কম হলেও clear routine রাখুন।</h2>
              </div>
              <p>সময় estimate—guarantee নয়। আগের language-learning experience এবং review quality অনুযায়ী pace বদলাবে।</p>
            </div>
            <div className="academy-study-track-grid">
              {studyTracks.map((track) => (
                <article key={track.time}>
                  <span>{track.label}</span>
                  <h3>{track.time}</h3>
                  <p>{track.detail}</p>
                  <strong>{track.pace}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="academy-curriculum-preview container" aria-labelledby="n5-curriculum-title">
          <div>
            <span className="kicker">Complete N5 path</span>
            <h2 id="n5-curriculum-title">Foundation থেকে exam-ready practice.</h2>
            <p>
              Kana দিয়ে শুরু করে sentence building, everyday communication এবং timed
              JLPT strategy পর্যন্ত। প্রতিটি module আগের skill ব্যবহার করে।
            </p>
            <Link className="primary-button" href="/academy/japanese-n5">
              Start the complete course <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ol>
            {n5Modules.map((module, index) => (
              <li key={module}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{module}</strong>
              </li>
            ))}
          </ol>
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

        <section className="academy-resources container" aria-labelledby="academy-resources-title">
          <div className="academy-heading">
            <div>
              <span className="kicker">Official companion resources</span>
              <h2 id="academy-resources-title">Practice করুন trusted source দিয়ে।</h2>
            </div>
            <p>Academy lesson-এর পাশাপাশি official sample format, audio ও real-life beginner material ব্যবহার করুন।</p>
          </div>
          <div className="academy-resource-grid">
            <a href="https://www.jlpt.jp/e/about/levelsummary.html" target="_blank" rel="noreferrer">
              <span>JLPT official</span>
              <strong>N5 ability summary</strong>
              <p>Level-এর reading ও listening outcome official wording-এ বুঝুন।</p>
              <b>Open source ↗</b>
            </a>
            <a href="https://www.jlpt.jp/e/guideline/testsections.html" target="_blank" rel="noreferrer">
              <span>JLPT official</span>
              <strong>Sections and question types</strong>
              <p>Current test time এবং vocabulary, reading, listening item types দেখুন।</p>
              <b>Open source ↗</b>
            </a>
            <a href="https://www.irodori.jpf.go.jp/en/" target="_blank" rel="noreferrer">
              <span>Japan Foundation</span>
              <strong>Irodori for life in Japan</strong>
              <p>Daily life ও work communication-এর free beginner materials ব্যবহার করুন।</p>
              <b>Open source ↗</b>
            </a>
            <a href="https://marugoto.jpf.go.jp/en/e-learning/" target="_blank" rel="noreferrer">
              <span>Japan Foundation</span>
              <strong>Marugoto e-learning</strong>
              <p>Communication, kana, vocabulary এবং culture-এর extra practice নিন।</p>
              <b>Open source ↗</b>
            </a>
          </div>
        </section>

        <section className="academy-faq container" aria-labelledby="academy-faq-title">
          <div>
            <span className="kicker">Before you begin</span>
            <h2 id="academy-faq-title">Common questions.</h2>
          </div>
          <div>
            <details open>
              <summary>এই course শেষ করলেই কি N5 pass নিশ্চিত?</summary>
              <p>না। এটি strong foundation ও structured practice দেয়। Pass নির্ভর করবে vocabulary coverage, listening volume, timed mock performance এবং exam-day execution-এর ওপর।</p>
            </details>
            <details>
              <summary>Romaji ব্যবহার করা যাবে?</summary>
              <p>শুরুর কয়েকদিন pronunciation support হিসেবে ব্যবহার করতে পারেন। কিন্তু N5 reading-এর জন্য দ্রুত hiragana ও katakana-only practice-এ যেতে হবে।</p>
            </details>
            <details>
              <summary>Speaking কেন আছে, যখন JLPT speaking test করে না?</summary>
              <p>নিজে sentence বলা active recall শক্ত করে এবং grammar শুধু চিনতে নয়, ব্যবহার করতে শেখায়। তবে course exam sections—vocabulary, reading ও listening—স্পষ্টভাবে আলাদা রাখে।</p>
            </details>
            <details>
              <summary>N4–N1 course কি এখন available?</summary>
              <p>বর্তমানে complete structured path হিসেবে N5 available। N4–N1 roadmap planned; card-এর interest link দিয়ে priority জানাতে পারবেন।</p>
            </details>
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
