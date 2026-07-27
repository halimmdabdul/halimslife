import type { Metadata } from "next";
import Link from "next/link";

import {
  createCourse,
  createCourseSection,
  createLecture,
  deleteCourseItem,
  toggleCoursePublished,
  updateCourse,
  updateCourseSection,
  updateLecture,
} from "@/app/admin/actions";
import { requireAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Courses & lectures",
  robots: { index: false, follow: false },
};

type LectureRow = {
  id: number;
  title: string;
  lecture_type: "video" | "reading" | "quiz";
  duration: string | null;
  video_url: string | null;
  content: string | null;
  overview: string | null;
  study_notes: string | null;
  practice_test: {
    question?: string;
    options?: string[];
    correctAnswer?: string;
  } | null;
  position: number;
  is_preview: boolean;
};

type SectionRow = {
  id: number;
  title: string;
  position: number;
  lectures: LectureRow[];
};

type CourseRow = {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  category: string;
  level: string;
  published: boolean;
  course_sections: SectionRow[];
};

function DeleteButton({ itemType, itemId }: { itemType: string; itemId: number }) {
  return (
    <form action={deleteCourseItem}>
      <input type="hidden" name="itemType" value={itemType} />
      <input type="hidden" name="itemId" value={itemId} />
      <button className="admin-danger-button" type="submit">Delete</button>
    </form>
  );
}

export default async function AdminCoursesPage() {
  const { supabase } = await requireAdmin();
  const { data, error } = await supabase
    .from("courses")
    .select("id,slug,title,subtitle,description,category,level,published,course_sections(id,title,position,lectures(id,title,lecture_type,duration,video_url,content,overview,study_notes,practice_test,position,is_preview))")
    .order("created_at", { ascending: false });

  const courses = (data ?? []) as CourseRow[];
  courses.forEach((course) => {
    course.course_sections.sort((a, b) => a.position - b.position || a.id - b.id);
    course.course_sections.forEach((section) =>
      section.lectures.sort((a, b) => a.position - b.position || a.id - b.id),
    );
  });

  return (
    <>
      <header className="admin-page-header">
        <div>
          <span>ACADEMY CONTENT</span>
          <h1>Courses & lectures</h1>
          <p>Create courses, organize topics, and add video, reading, or test-based lessons.</p>
        </div>
        <span className="admin-user-total">{courses.length} courses</span>
      </header>

      {error ? (
        <section className="admin-course-setup">
          <strong>Course database is not ready</strong>
          <p>Apply the latest Supabase migration, then reload this page.</p>
          <code>supabase db push</code>
        </section>
      ) : null}

      <details className="admin-create-panel" open={courses.length === 0}>
        <summary><span>＋</span> Create a new course</summary>
        <form action={createCourse} className="admin-content-form">
          <label>Course title<input name="title" required placeholder="Japanese Foundations" /></label>
          <label>URL slug<input name="slug" required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" placeholder="japanese-n5" /></label>
          <label>Subtitle<input name="subtitle" placeholder="JLPT N5 complete path" /></label>
          <label>Category<input name="category" required defaultValue="Japanese learning" /></label>
          <label>Level<select name="level" defaultValue="Beginner"><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Expert</option></select></label>
          <label className="admin-form-wide">Description<textarea name="description" rows={3} placeholder="What students will learn..." /></label>
          <label className="admin-checkbox"><input type="checkbox" name="published" /> Publish immediately</label>
          <button className="admin-submit-button" type="submit">Create course</button>
        </form>
      </details>

      <section className="admin-course-list">
        {courses.map((course) => (
          <article className="admin-course-card" key={course.id}>
            <header>
              <div>
                <span className={`admin-course-state ${course.published ? "published" : "draft"}`}>{course.published ? "Published" : "Draft"}</span>
                <h2>{course.title}</h2>
                <p>{course.category} · {course.level} · /academy/{course.slug}</p>
              </div>
              <div className="admin-course-actions">
                {course.published ? <Link href={`/academy/${course.slug}`}>View ↗</Link> : null}
                <form action={toggleCoursePublished}>
                  <input type="hidden" name="courseId" value={course.id} />
                  <input type="hidden" name="published" value={String(!course.published)} />
                  <button type="submit">{course.published ? "Unpublish" : "Publish"}</button>
                </form>
                <DeleteButton itemType="course" itemId={course.id} />
              </div>
            </header>

            <details className="admin-item-editor admin-course-editor">
              <summary>Edit course details</summary>
              <form action={updateCourse} className="admin-content-form">
                <input type="hidden" name="courseId" value={course.id} />
                <label>Course title<input name="title" required defaultValue={course.title} /></label>
                <label>URL slug<input name="slug" required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" defaultValue={course.slug} /></label>
                <label>Subtitle<input name="subtitle" defaultValue={course.subtitle ?? ""} /></label>
                <label>Category<input name="category" required defaultValue={course.category} /></label>
                <label>Level<select name="level" defaultValue={course.level}><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Expert</option></select></label>
                <label className="admin-form-wide">Description<textarea name="description" rows={3} defaultValue={course.description ?? ""} /></label>
                <button className="admin-submit-button" type="submit">Save course changes</button>
              </form>
            </details>

            <div className="admin-curriculum-builder">
              {course.course_sections.map((section, sectionIndex) => (
                <details className="admin-section-builder" key={section.id} open>
                  <summary>
                    <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
                    <strong>{section.title}</strong>
                    <small>{section.lectures.length} lectures</small>
                  </summary>
                  <details className="admin-item-editor admin-section-editor">
                    <summary>Edit topic</summary>
                    <form action={updateCourseSection} className="admin-content-form compact">
                      <input type="hidden" name="sectionId" value={section.id} />
                      <label>Topic title<input name="title" required defaultValue={section.title} /></label>
                      <label>Order<input name="position" type="number" min="0" defaultValue={section.position} /></label>
                      <button className="admin-submit-button" type="submit">Save topic</button>
                    </form>
                  </details>
                  <div className="admin-lecture-list">
                    {section.lectures.map((lecture) => (
                      <details className="admin-lecture-editor" key={lecture.id}>
                        <summary>
                          <span className={`admin-lecture-type ${lecture.lecture_type}`}>{lecture.lecture_type === "video" ? "▶" : lecture.lecture_type === "quiz" ? "?" : "▤"}</span>
                          <div><strong>{lecture.title}</strong><small>{lecture.lecture_type} · {lecture.duration || "No duration"}{lecture.is_preview ? " · Preview" : ""}</small></div>
                          <span className="admin-edit-label">Edit</span>
                        </summary>
                        <form action={updateLecture} className="admin-content-form compact">
                          <input type="hidden" name="lectureId" value={lecture.id} />
                          <label>Lecture title<input name="title" required defaultValue={lecture.title} /></label>
                          <label>Type<select name="lectureType" defaultValue={lecture.lecture_type}><option value="video">Video</option><option value="reading">Reading</option><option value="quiz">Quiz / test</option></select></label>
                          <label>Duration<input name="duration" defaultValue={lecture.duration ?? ""} /></label>
                          <label>Order<input name="position" type="number" min="0" defaultValue={lecture.position} /></label>
                          <label className="admin-form-wide">Video URL<input name="videoUrl" type="url" defaultValue={lecture.video_url ?? ""} /></label>
                          <label className="admin-form-wide">Overview<textarea name="overview" rows={4} defaultValue={lecture.overview ?? lecture.content ?? ""} placeholder="Lesson summary and learning objectives..." /></label>
                          <label className="admin-form-wide">Study notes<textarea name="studyNotes" rows={6} defaultValue={lecture.study_notes ?? lecture.content ?? ""} placeholder="Detailed notes, examples, and references..." /></label>
                          <fieldset className="admin-test-builder admin-form-wide">
                            <legend>Practice test</legend>
                            <label>Question<input name="testQuestion" defaultValue={lecture.practice_test?.question ?? ""} placeholder="Which answer is correct?" /></label>
                            <div>
                              {[0, 1, 2, 3].map((optionIndex) => (
                                <label key={optionIndex}>Option {optionIndex + 1}<input name={`testOption${optionIndex + 1}`} defaultValue={lecture.practice_test?.options?.[optionIndex] ?? ""} /></label>
                              ))}
                            </div>
                            <label>Correct option<select name="testCorrectOption" defaultValue={String(Math.max(0, (lecture.practice_test?.options?.findIndex((option) => option === lecture.practice_test?.correctAnswer) ?? -1) + 1))}><option value="0">No test</option><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option><option value="4">Option 4</option></select></label>
                          </fieldset>
                          <label className="admin-checkbox"><input type="checkbox" name="isPreview" defaultChecked={lecture.is_preview} /> Free preview</label>
                          <button className="admin-submit-button" type="submit">Save lecture changes</button>
                        </form>
                        <div className="admin-editor-delete"><DeleteButton itemType="lecture" itemId={lecture.id} /></div>
                      </details>
                    ))}
                  </div>
                  <details className="admin-inline-create">
                    <summary>＋ Add lecture</summary>
                    <form action={createLecture} className="admin-content-form compact">
                      <input type="hidden" name="sectionId" value={section.id} />
                      <label>Lecture title<input name="title" required placeholder="Welcome to the course" /></label>
                      <label>Type<select name="lectureType"><option value="video">Video</option><option value="reading">Reading</option><option value="quiz">Quiz / test</option></select></label>
                      <label>Duration<input name="duration" placeholder="08:30 or 5 min" /></label>
                      <label>Order<input name="position" type="number" min="0" defaultValue={section.lectures.length} /></label>
                      <label className="admin-form-wide">Video URL<input name="videoUrl" type="url" placeholder="https://youtube.com/..." /></label>
                      <label className="admin-form-wide">Overview<textarea name="overview" rows={4} placeholder="Lesson summary and learning objectives..." /></label>
                      <label className="admin-form-wide">Study notes<textarea name="studyNotes" rows={6} placeholder="Detailed notes, examples, and references..." /></label>
                      <fieldset className="admin-test-builder admin-form-wide">
                        <legend>Practice test</legend>
                        <label>Question<input name="testQuestion" placeholder="Which answer is correct?" /></label>
                        <div>
                          {[1, 2, 3, 4].map((optionNumber) => (
                            <label key={optionNumber}>Option {optionNumber}<input name={`testOption${optionNumber}`} /></label>
                          ))}
                        </div>
                        <label>Correct option<select name="testCorrectOption" defaultValue="0"><option value="0">No test</option><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option><option value="4">Option 4</option></select></label>
                      </fieldset>
                      <label className="admin-checkbox"><input type="checkbox" name="isPreview" /> Free preview</label>
                      <button className="admin-submit-button" type="submit">Add lecture</button>
                    </form>
                  </details>
                  <div className="admin-section-delete"><DeleteButton itemType="section" itemId={section.id} /></div>
                </details>
              ))}

              <details className="admin-inline-create add-section">
                <summary>＋ Add course topic / section</summary>
                <form action={createCourseSection} className="admin-content-form compact">
                  <input type="hidden" name="courseId" value={course.id} />
                  <label>Topic title<input name="title" required placeholder="Hiragana basics" /></label>
                  <label>Order<input name="position" type="number" min="0" defaultValue={course.course_sections.length} /></label>
                  <button className="admin-submit-button" type="submit">Add topic</button>
                </form>
              </details>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
