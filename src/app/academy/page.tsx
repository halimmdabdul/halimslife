import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import academyHero from "@/assets/academy/academy-hero.jpg";
import { InnerPageShell } from "@/components/inner-page-shell";
import { markdownToPlainText } from "@/components/rich-text-content";
import { getPublishedCourses } from "@/lib/courses";
import styles from "./academy.module.css";

export const metadata: Metadata = {
  title: "Academy | Japanese, Robotics and AI Courses",
  description:
    "Explore Bengali-friendly Japanese, programming, AI and robotics courses from Halim's Life Academy.",
  alternates: { canonical: "/academy" },
};

const japaneseCourses = [
  { level: "N5", title: "Japanese Foundations", description: "Kana, grammar, reading ও everyday conversation—৩০টি structured lesson।", status: "Available now" },
  { level: "N4", title: "Everyday Japanese", description: "Daily expressions, core grammar এবং practical reading practice।", status: "Planned" },
  { level: "N3", title: "Intermediate Japanese", description: "Natural grammar, broader vocabulary, reading ও listening fluency।", status: "Planned" },
  { level: "N2", title: "Professional Japanese", description: "Workplace language, advanced reading এবং nuanced communication।", status: "Planned" },
  { level: "N1", title: "Japanese Mastery", description: "Complex texts, precise expressions ও high-level comprehension।", status: "Planned" },
];

const technologyCourses = [
  { icon: "⚙", title: "Robotics Fundamentals", description: "Sensors, actuators, control systems এবং practical robotics foundation।", topics: ["Electronics", "Motion", "Control"] },
  { icon: "AI", title: "Artificial Intelligence", description: "Machine learning, neural networks এবং practical AI applications।", topics: ["Python", "ML", "Projects"] },
  { icon: "◉", title: "Computer Vision", description: "Image ও video বুঝতে OpenCV এবং detection-based exercises।", topics: ["OpenCV", "Detection", "Cameras"] },
  { icon: "</>", title: "Programming Essentials", description: "Problem-solving, coding এবং debugging fundamentals।", topics: ["Logic", "Code", "Practice"] },
];

export default async function AcademyPage() {
  const publishedCourses = await getPublishedCourses();
  const additionalCourses = publishedCourses.filter(
    (course) => !["japanese-n5", "minna-no-nihongo-n5-companion"].includes(course.slug),
  );

  return (
    <InnerPageShell>
      <div className={styles.page}>
        <section className="academy-hero">
          <div className="container academy-hero-grid">
            <div className="academy-hero-copy">
              <span className="academy-eyebrow">Halim&apos;s Life Academy</span>
              <h1>একটি course বেছে নিন—শিখুন, practice করুন, এগিয়ে যান।</h1>
              <p>
                বাংলা-friendly structured lesson, practical exercise এবং saved progress—Japanese থেকে technology পর্যন্ত।
              </p>
              <div className="academy-hero-actions">
                <Link href="/academy/japanese-n5" className="primary-button">Free course শুরু করুন <span aria-hidden="true">→</span></Link>
                <a href="#available-courses">সব course দেখুন <span aria-hidden="true">↓</span></a>
              </div>
              <div className="academy-proof" aria-label="Academy benefits">
                <span>✓ Bengali-friendly</span><span>✓ Self-paced</span><span>✓ Progress saved</span>
              </div>
            </div>
            <div className={styles.heroArt}>
              <Image src={academyHero} alt="Japanese language, programming and robotics course illustration" fill priority sizes="58vw" />
            </div>
          </div>
        </section>

        <section className={styles.learningTracks} aria-labelledby="course-categories-title">
          <h2 id="course-categories-title">কী শিখতে চান?</h2>
          <div>
            <article><span>あ</span><div><h3>Japanese Language</h3><p>JLPT এবং everyday Japanese</p><b>2 courses available</b></div></article>
            <article><span>&lt;/&gt;</span><div><h3>Programming</h3><p>Code, web এবং software fundamentals</p><b>Upcoming</b></div></article>
            <article><span>AI</span><div><h3>AI &amp; Robotics</h3><p>Vision, machine learning এবং robotics</p><b>Upcoming</b></div></article>
          </div>
        </section>

        <main id="available-courses">
          <section className={`container ${styles.availableSection}`}>
            <div className="academy-heading">
              <div><span className="kicker">Available now</span><h2>এখনই শেখা শুরু করুন।</h2></div>
              <p>দুটি Bengali-friendly Japanese course থেকে আপনার প্রয়োজন অনুযায়ী path বেছে নিন।</p>
            </div>
            <div className={styles.featuredCourseGrid}>
              <article className={styles.featuredCourse}>
                <span className={styles.courseVisual}>日本語 <b>N5</b></span>
                <div><small>JLPT N5 · Beginner</small><h3>Japanese Foundations</h3><p>Kana থেকে grammar, reading, listening এবং everyday conversation—১০ module ও ৩০ lesson।</p><ul><li>Structured Bengali notes</li><li>Practice test ও saved progress</li><li>Self-paced learning</li></ul><Link href="/academy/japanese-n5">Course শুরু করুন <span>→</span></Link></div>
              </article>
              <article className={styles.featuredCourse}>
                <span className={`${styles.courseVisual} ${styles.companionVisual}`}>みんなの<br />日本語 <b>25 units</b></span>
                <div><small>N5 · Bangla Companion</small><h3>Minna no Nihongo Companion</h3><p>Lesson 1–25 অনুসরণ করে ৫২টি original guide ও practice lesson দিয়ে textbook study গুছিয়ে নিন।</p><ul><li>Bangla grammar explanation</li><li>Original examples ও exercises</li><li>Quick checks এবং progress</li></ul><Link href="/academy/minna-no-nihongo-n5-companion">Companion খুলুন <span>→</span></Link></div>
              </article>
            </div>
          </section>

          {additionalCourses.length > 0 ? (
            <section className={`container ${styles.catalogSection}`}>
              <div className="academy-heading"><div><span className="kicker">More courses</span><h2>নতুন প্রকাশিত course.</h2></div></div>
              <div className="dynamic-course-grid">
                {additionalCourses.map((course) => (
                  <Link href={`/academy/${course.slug}`} key={course.id}>
                    {course.cover_image ? <span className="dynamic-course-cover" role="img" aria-label={`${course.title} featured image`} style={{ backgroundImage: `url(${course.cover_image})` }} /> : <span className="dynamic-course-cover placeholder" aria-hidden="true">{course.title.charAt(0)}</span>}
                    <div className="dynamic-course-body"><span>{course.category}</span><strong>{course.level}</strong><h3>{course.title}</h3><p>{course.description ? markdownToPlainText(course.description) : course.subtitle || "Start learning with this structured course."}</p><b>Open course →</b></div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <section className={`academy-section container ${styles.catalogSection}`}>
            <div className="academy-heading"><div><span className="kicker">Japanese roadmap</span><h2>N5 থেকে N1—একটি clear path.</h2></div><p>N5 এখন available; পরের levelগুলো পর্যায়ক্রমে প্রকাশ হবে।</p></div>
            <div className="jlpt-course-grid">
              {japaneseCourses.map((course, index) => (
                <article key={course.level}>
                  <div className="course-card-top"><span className="course-number">0{index + 1}</span><span className="course-status">{course.status}</span></div>
                  <strong className="jlpt-level">JLPT {course.level}</strong><h3>{course.title}</h3><p>{course.description}</p>
                  {course.level === "N5" ? <Link className="course-open-link" href="/academy/japanese-n5">Start learning <span>→</span></Link> : <Link className="course-interest-link" href={`/contact?topic=academy&subject=${encodeURIComponent(`${course.title} course interest`)}`}>Interest জানান <span>→</span></Link>}
                </article>
              ))}
            </div>
          </section>

          <section className={`academy-tech-section ${styles.techCatalog}`}>
            <div className="container">
              <div className="academy-heading"><div><span className="kicker">Upcoming technology courses</span><h2>Technology দিয়ে real skill তৈরি করুন।</h2></div><p>যে course আগে চান, request পাঠিয়ে priority জানান।</p></div>
              <div className="technology-course-grid">
                {technologyCourses.map((course) => (
                  <article key={course.title}><span className="tech-course-icon" aria-hidden="true">{course.icon}</span><h3>{course.title}</h3><p>{course.description}</p><div className="course-topics">{course.topics.map((topic) => <span key={topic}>{topic}</span>)}</div><Link className="course-interest-link" href={`/contact?topic=academy&subject=${encodeURIComponent(`${course.title} course interest`)}`}>Request course <span>→</span></Link></article>
                ))}
              </div>
            </div>
          </section>

          <section className="academy-cta container">
            <div><span>আপনার পছন্দের course খুঁজে পাননি?</span><h2>পরবর্তী course-এর priority জানান।</h2></div>
            <Link href="/contact?topic=academy&subject=Academy%20course%20request">Course suggest করুন <span>↗</span></Link>
          </section>
        </main>
      </div>
    </InnerPageShell>
  );
}
