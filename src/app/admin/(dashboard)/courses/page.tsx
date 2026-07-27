import type { Metadata } from "next";
import Link from "next/link";

import {
  createCourse,
  createCourseSection,
  createLecture,
  deleteCourseItem,
  toggleCoursePublished,
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
    .select("id,slug,title,category,level,published,course_sections(id,title,position,lectures(id,title,lecture_type,duration,position,is_preview))")
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

            <div className="admin-curriculum-builder">
              {course.course_sections.map((section, sectionIndex) => (
                <details className="admin-section-builder" key={section.id} open>
                  <summary>
                    <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
                    <strong>{section.title}</strong>
                    <small>{section.lectures.length} lectures</small>
                  </summary>
                  <div className="admin-lecture-list">
                    {section.lectures.map((lecture) => (
                      <div key={lecture.id}>
                        <span className={`admin-lecture-type ${lecture.lecture_type}`}>{lecture.lecture_type === "video" ? "▶" : lecture.lecture_type === "quiz" ? "?" : "▤"}</span>
                        <div><strong>{lecture.title}</strong><small>{lecture.lecture_type} · {lecture.duration || "No duration"}{lecture.is_preview ? " · Preview" : ""}</small></div>
                        <DeleteButton itemType="lecture" itemId={lecture.id} />
                      </div>
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
                      <label className="admin-form-wide">Study material / quiz content<textarea name="content" rows={4} placeholder="Lesson notes, resource links, or quiz instructions..." /></label>
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
