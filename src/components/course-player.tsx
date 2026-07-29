"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type KeyboardEvent } from "react";
import { RichTextContent } from "@/components/rich-text-content";

export type CourseLesson = {
  title: string;
  duration: string;
  type: "video" | "reading" | "quiz";
  content?: string | null;
  overview?: string | null;
  studyNotes?: string | null;
  practiceTest?: {
    question?: string;
    options?: string[];
    correctAnswer?: string;
  } | null;
  materials?: Array<{
    title: string;
    url: string;
    fileType?: string | null;
    fileSize?: number | null;
  }>;
  videoUrl?: string | null;
};

export type CourseSection = { title: string; lessons: CourseLesson[] };

function getYouTubeEmbedUrl(value?: string | null) {
  if (!value) return null;

  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "").toLowerCase();
    let videoId: string | null = null;

    if (host === "youtu.be") {
      videoId = url.pathname.split("/").filter(Boolean)[0] ?? null;
    } else if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "music.youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      videoId = url.searchParams.get("v");
      if (!videoId) {
        const parts = url.pathname.split("/").filter(Boolean);
        if (["embed", "shorts", "live"].includes(parts[0])) {
          videoId = parts[1] ?? null;
        }
      }
    }

    return videoId && /^[A-Za-z0-9_-]{11}$/.test(videoId)
      ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
      : null;
  } catch {
    return null;
  }
}

const demoSections: CourseSection[] = [
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

export function CoursePlayer({
  course = { title: "Japanese Foundations", subtitle: "JLPT N5 · Beginner" },
  sections = demoSections,
  courseKey = "japanese-foundations",
}: {
  course?: { title: string; subtitle: string };
  sections?: CourseSection[];
  courseKey?: string;
}) {
  const flatLessons = useMemo(
    () => sections.flatMap((section) => section.lessons),
    [sections],
  );
  const [activeLesson, setActiveLesson] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "notes" | "test">(
    "overview",
  );
  const [answer, setAnswer] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [curriculumOpen, setCurriculumOpen] = useState(false);
  const currentLesson = flatLessons[activeLesson] ?? { title: "Course introduction", duration: "Lesson", type: "reading" as const };
  const youtubeEmbedUrl = getYouTubeEmbedUrl(currentLesson.videoUrl);
  const practiceTest = currentLesson.practiceTest;
  const usesManagedMaterials = practiceTest !== undefined;
  const testQuestion = usesManagedMaterials
    ? practiceTest?.question
    : "Which expression means “Hello”?";
  const testOptions = usesManagedMaterials
    ? practiceTest?.options ?? []
    : ["ありがとう", "こんにちは", "さようなら", "おやすみなさい"];
  const correctAnswer = usesManagedMaterials
    ? practiceTest?.correctAnswer
    : "こんにちは";
  const progress = flatLessons.length
    ? Math.round((completedLessons.length / flatLessons.length) * 100)
    : 0;
  const storageKey = `halim-course-progress:${courseKey}`;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]");
        const savedCompleted = Array.isArray(saved) ? saved : saved.completed;
        if (Array.isArray(savedCompleted)) {
          setCompletedLessons(
            savedCompleted.filter(
              (value): value is number =>
                Number.isInteger(value) && value >= 0 && value < flatLessons.length,
            ),
          );
        }
        if (
          !Array.isArray(saved) &&
          Number.isInteger(saved.activeLesson) &&
          saved.activeLesson >= 0 &&
          saved.activeLesson < flatLessons.length
        ) {
          const savedLesson = flatLessons[saved.activeLesson];
          setActiveLesson(saved.activeLesson);
          setActiveTab(savedLesson?.type === "quiz" ? "test" : "overview");
        }
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [flatLessons, storageKey]);

  function selectLesson(index: number) {
    const lesson = flatLessons[index];
    if (!lesson) return;
    setActiveLesson(index);
    setActiveTab(lesson.type === "quiz" ? "test" : "overview");
    setAnswer(null);
    setCurriculumOpen(false);
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ completed: completedLessons, activeLesson: index }),
    );
  }

  function toggleLessonComplete() {
    if (!flatLessons[activeLesson]) return;
    const next = completedLessons.includes(activeLesson)
      ? completedLessons.filter((index) => index !== activeLesson)
      : [...completedLessons, activeLesson].sort((a, b) => a - b);
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ completed: next, activeLesson }),
    );
    setCompletedLessons(next);
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const tabs = ["overview", "notes", "test"] as const;
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (tabs.indexOf(activeTab) + direction + tabs.length) % tabs.length;
    setActiveTab(tabs[nextIndex]);
    document.getElementById(`lesson-tab-${tabs[nextIndex]}`)?.focus();
  }

  return (
    <div className="course-player-page">
      <header className="course-player-header">
        <Link href="/academy" aria-label="Back to Academy">←</Link>
        <div>
          <strong>{course.title}</strong>
          <span>{course.subtitle}</span>
        </div>
        <div className="course-progress">
          <span>Course progress</span>
          <strong>{progress}%</strong>
          <i><span style={{ width: `${progress}%` }} /></i>
        </div>
        <button
          className="curriculum-toggle"
          type="button"
          aria-expanded={curriculumOpen}
          aria-controls="course-curriculum"
          onClick={() => setCurriculumOpen((open) => !open)}
        >
          {curriculumOpen ? "Close lessons" : "View lessons"}
        </button>
      </header>

      <div className="course-workspace">
        <aside
          className={`course-curriculum${curriculumOpen ? " is-open" : ""}`}
          id="course-curriculum"
        >
          <div className="curriculum-heading">
            <div>
              <span>Course content</span>
              <strong>{flatLessons.length} lessons · {completedLessons.length} completed</strong>
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
                        aria-current={activeLesson === index ? "step" : undefined}
                        onClick={() => selectLesson(index)}
                      >
                        <span className={`lesson-type ${lesson.type}`} aria-hidden="true">
                          {lesson.type === "video" ? "▶" : lesson.type === "quiz" ? "?" : "▤"}
                        </span>
                        <span>
                          <strong>{lesson.title}</strong>
                          <small>
                            {lesson.duration}
                            {completedLessons.includes(index) ? " · Completed ✓" : ""}
                          </small>
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
            {youtubeEmbedUrl ? (
              <iframe
                key={youtubeEmbedUrl}
                className="lesson-youtube-player"
                src={youtubeEmbedUrl}
                title={currentLesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <>
                <div className="video-decoration">あ</div>
                <div className="video-placeholder-icon" aria-hidden="true">▶</div>
                <div className="video-caption">
                  <span>{currentLesson.type === "video" ? "Video unavailable" : "Study lesson"}</span>
                  <strong>{currentLesson.title}</strong>
                  {currentLesson.type === "video" ? <small>Add a valid YouTube video URL from the admin panel.</small> : null}
                </div>
                <div className="video-controls" aria-hidden="true">
                  <span>▶</span><i><span /></i><small>00:00 / {currentLesson.duration}</small>
                  <span>⚙</span><span>□</span>
                </div>
              </>
            )}
          </div>

          <div className="lesson-content">
            <div className="lesson-tabs" role="tablist" aria-label="Lesson materials">
              {(["overview", "notes", "test"] as const).map((tab) => (
                <button
                  className={activeTab === tab ? "active" : ""}
                  key={tab}
                  type="button"
                  role="tab"
                  id={`lesson-tab-${tab}`}
                  aria-controls={`lesson-panel-${tab}`}
                  aria-selected={activeTab === tab}
                  tabIndex={activeTab === tab ? 0 : -1}
                  onClick={() => setActiveTab(tab)}
                  onKeyDown={handleTabKeyDown}
                >
                  {tab === "overview" ? "Overview" : tab === "notes" ? "Study notes" : "Practice test"}
                </button>
              ))}
            </div>

            {activeTab === "overview" && (
              <article
                className="lesson-overview"
                id="lesson-panel-overview"
                role="tabpanel"
                aria-labelledby="lesson-tab-overview"
              >
                <span className="lesson-kicker">Lesson {activeLesson + 1}</span>
                <h1>{currentLesson.title}</h1>
                {currentLesson.overview || currentLesson.content ? (
                  <RichTextContent content={currentLesson.overview || currentLesson.content || ""} />
                ) : (
                  <p className="lesson-saved-content">No overview has been added for this lesson yet.</p>
                )}
                {!currentLesson.overview && !currentLesson.content ? <div className="lesson-objectives">
                  <h2>What you will learn</h2>
                  <ul>
                    <li>Recognize the key Japanese forms used in this lesson.</li>
                    <li>Understand their meaning with Bengali-friendly context.</li>
                    <li>Use the new forms in a simple everyday example.</li>
                  </ul>
                </div> : null}
                {currentLesson.materials && currentLesson.materials.length > 0 ? (
                  <div className="lesson-materials">
                    <h2>Downloadable materials</h2>
                    {currentLesson.materials.map((material) => (
                      <a href={material.url} target="_blank" rel="noreferrer" key={`${material.title}-${material.url}`}>
                        <span>{material.fileType || "FILE"}</span>
                        <div>
                          <strong>{material.title}</strong>
                          <small>{material.fileSize ? `${(material.fileSize / 1024 / 1024).toFixed(1)} MB` : "External resource"}</small>
                        </div>
                        <b>Download ↓</b>
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            )}

            {activeTab === "notes" && (
              <article
                className="lesson-notes"
                id="lesson-panel-notes"
                role="tabpanel"
                aria-labelledby="lesson-tab-notes"
              >
                <span className="lesson-kicker">Quick reference</span>
                <h1>Lesson notes</h1>
                {!currentLesson.studyNotes && !currentLesson.content ? <div className="japanese-example">
                  <strong>こんにちは</strong>
                  <span>konnichiwa</span>
                  <p>Hello / শুভ দুপুর</p>
                </div> : null}
                {currentLesson.studyNotes || currentLesson.content ? (
                  <RichTextContent content={currentLesson.studyNotes || currentLesson.content || ""} />
                ) : (
                  <p className="lesson-saved-content">No study notes have been added for this lesson yet.</p>
                )}
              </article>
            )}

            {activeTab === "test" && (
              <article
                className="lesson-quiz"
                id="lesson-panel-test"
                role="tabpanel"
                aria-labelledby="lesson-tab-test"
              >
                <span className="lesson-kicker">Practice question</span>
                {testQuestion && testOptions.length >= 2 && correctAnswer ? <>
                  <h1>{testQuestion}</h1>
                  <div className="quiz-options">
                    {testOptions.map((option) => (
                      <button
                        className={answer === option ? (option === correctAnswer ? "correct" : "wrong") : ""}
                        key={option}
                        type="button"
                        onClick={() => setAnswer(option)}
                      >
                        <span>{option}</span>
                      </button>
                    ))}
                  </div>
                </> : <div className="lesson-empty-material"><strong>No practice test yet</strong><p>An administrator can add a question and answers for this lecture.</p></div>}
                {answer && correctAnswer && (
                  <p className={answer === correctAnswer ? "quiz-feedback correct" : "quiz-feedback wrong"}>
                    {answer === correctAnswer ? "Correct! Well done." : "Not quite. Review the lesson notes and try again."}
                  </p>
                )}
              </article>
            )}

            {progress === 100 ? (
              <div className="course-complete-banner" role="status">
                <span aria-hidden="true">★</span>
                <div><strong>Course complete—দারুণ কাজ!</strong><p>সব lesson শেষ করেছেন। চাইলে যেকোনো lesson আবার review করতে পারেন।</p></div>
              </div>
            ) : null}

            <nav className="lesson-navigation" aria-label="Lesson navigation">
              <button
                type="button"
                disabled={activeLesson === 0}
                onClick={() => selectLesson(activeLesson - 1)}
              >
                ← Previous
              </button>
              <button
                className={completedLessons.includes(activeLesson) ? "completed" : ""}
                type="button"
                aria-pressed={completedLessons.includes(activeLesson)}
                onClick={toggleLessonComplete}
              >
                {completedLessons.includes(activeLesson) ? "Completed ✓" : "Mark as complete"}
              </button>
              <button
                type="button"
                disabled={activeLesson >= flatLessons.length - 1}
                onClick={() => selectLesson(activeLesson + 1)}
              >
                Next →
              </button>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}
