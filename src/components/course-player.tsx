"use client";

import Link from "next/link";
import { useState } from "react";

const sections = [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to JLPT N5", duration: "04:20", type: "video" },
      { title: "How to use this course", duration: "03:10", type: "video" },
    ],
  },
  {
    title: "Hiragana basics",
    lessons: [
      { title: "The Japanese writing system", duration: "08:45", type: "video" },
      { title: "あ・い・う・え・お", duration: "12:30", type: "video" },
      { title: "Kana practice sheet", duration: "5 min", type: "reading" },
      { title: "Hiragana checkpoint", duration: "5 questions", type: "quiz" },
    ],
  },
  {
    title: "First conversations",
    lessons: [
      { title: "Greetings and introductions", duration: "10:15", type: "video" },
      { title: "Introducing yourself", duration: "09:40", type: "video" },
      { title: "Conversation practice", duration: "10 min", type: "reading" },
    ],
  },
  {
    title: "Essential grammar",
    lessons: [
      { title: "The particle は", duration: "11:20", type: "video" },
      { title: "です and じゃないです", duration: "13:05", type: "video" },
      { title: "Grammar checkpoint", duration: "5 questions", type: "quiz" },
    ],
  },
];

const flatLessons = sections.flatMap((section) => section.lessons);

export function CoursePlayer() {
  const [activeLesson, setActiveLesson] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "notes" | "test">(
    "overview",
  );
  const [answer, setAnswer] = useState<string | null>(null);
  const currentLesson = flatLessons[activeLesson];

  return (
    <div className="course-player-page">
      <header className="course-player-header">
        <Link href="/academy" aria-label="Back to Academy">←</Link>
        <div>
          <strong>Japanese Foundations</strong>
          <span>JLPT N5 · Beginner</span>
        </div>
        <div className="course-progress">
          <span>Course progress</span>
          <strong>8%</strong>
          <i><span /></i>
        </div>
      </header>

      <div className="course-workspace">
        <aside className="course-curriculum">
          <div className="curriculum-heading">
            <div>
              <span>Course content</span>
              <strong>{flatLessons.length} lessons · 2h 14m</strong>
            </div>
          </div>

          {sections.map((section, sectionIndex) => {
            const startIndex = sections
              .slice(0, sectionIndex)
              .reduce((total, item) => total + item.lessons.length, 0);

            return (
              <section className="curriculum-section" key={section.title}>
                <h2>
                  <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
                  {section.title}
                </h2>
                <div>
                  {section.lessons.map((lesson, lessonIndex) => {
                    const index = startIndex + lessonIndex;
                    return (
                      <button
                        className={activeLesson === index ? "active" : ""}
                        key={lesson.title}
                        type="button"
                        onClick={() => {
                          setActiveLesson(index);
                          setActiveTab(lesson.type === "quiz" ? "test" : "overview");
                          setAnswer(null);
                        }}
                      >
                        <span className={`lesson-type ${lesson.type}`} aria-hidden="true">
                          {lesson.type === "video" ? "▶" : lesson.type === "quiz" ? "?" : "▤"}
                        </span>
                        <span>
                          <strong>{lesson.title}</strong>
                          <small>{lesson.duration}</small>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </aside>

        <main className="course-lesson-area">
          <div className="lesson-video-stage">
            <div className="video-decoration">あ</div>
            <button type="button" aria-label="Play lesson">
              <span aria-hidden="true">▶</span>
            </button>
            <div className="video-caption">
              <span>Now learning</span>
              <strong>{currentLesson.title}</strong>
            </div>
            <div className="video-controls" aria-hidden="true">
              <span>▶</span><i><span /></i><small>00:00 / {currentLesson.duration}</small>
              <span>⚙</span><span>□</span>
            </div>
          </div>

          <div className="lesson-content">
            <div className="lesson-tabs" role="tablist" aria-label="Lesson materials">
              {(["overview", "notes", "test"] as const).map((tab) => (
                <button
                  className={activeTab === tab ? "active" : ""}
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "overview" ? "Overview" : tab === "notes" ? "Study notes" : "Practice test"}
                </button>
              ))}
            </div>

            {activeTab === "overview" && (
              <article className="lesson-overview">
                <span className="lesson-kicker">Lesson {activeLesson + 1}</span>
                <h1>{currentLesson.title}</h1>
                <p>
                  In this lesson, you will build a clear foundation through a
                  short explanation, examples and guided practice.
                </p>
                <div className="lesson-objectives">
                  <h2>What you will learn</h2>
                  <ul>
                    <li>Recognize the key Japanese forms used in this lesson.</li>
                    <li>Understand their meaning with Bengali-friendly context.</li>
                    <li>Use the new forms in a simple everyday example.</li>
                  </ul>
                </div>
                <div className="lesson-download">
                  <span>PDF</span>
                  <div><strong>Lesson practice sheet</strong><small>Study material · 1.2 MB</small></div>
                  <button type="button">Download</button>
                </div>
              </article>
            )}

            {activeTab === "notes" && (
              <article className="lesson-notes">
                <span className="lesson-kicker">Quick reference</span>
                <h1>Lesson notes</h1>
                <div className="japanese-example">
                  <strong>こんにちは</strong>
                  <span>konnichiwa</span>
                  <p>Hello / শুভ দুপুর</p>
                </div>
                <p>
                  Use <strong>こんにちは</strong> as a polite greeting during the
                  daytime. Listen carefully to the final sound: although written
                  with は, it is pronounced “wa” in this expression.
                </p>
              </article>
            )}

            {activeTab === "test" && (
              <article className="lesson-quiz">
                <span className="lesson-kicker">Question 1 of 5</span>
                <h1>Which expression means “Hello”?</h1>
                <div className="quiz-options">
                  {["ありがとう", "こんにちは", "さようなら", "おやすみなさい"].map((option) => (
                    <button
                      className={answer === option ? (option === "こんにちは" ? "correct" : "wrong") : ""}
                      key={option}
                      type="button"
                      onClick={() => setAnswer(option)}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
                {answer && (
                  <p className={answer === "こんにちは" ? "quiz-feedback correct" : "quiz-feedback wrong"}>
                    {answer === "こんにちは" ? "Correct! こんにちは is a polite daytime greeting." : "Not quite. Try the common daytime greeting."}
                  </p>
                )}
              </article>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
