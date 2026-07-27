import type { Metadata } from "next";
import Link from "next/link";

import { AdminActionForm } from "@/components/admin-action-form";
import { AdminLectureRow } from "@/components/admin-lecture-row";
import { requireAdmin } from "@/lib/admin-auth";
import { RichTextEditor } from "@/components/rich-text-editor";

export const metadata: Metadata = {
  title: "Courses & lectures",
  robots: { index: false, follow: false },
};

type MaterialRow = {
  id: number;
  title: string;
  file_url: string;
  file_type: string | null;
  file_size: number | null;
  position: number;
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
  lecture_materials: MaterialRow[];
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
  cover_image: string | null;
  category: string;
  level: string;
  published: boolean;
  course_sections: SectionRow[];
};

function DeleteButton({ itemType, itemId }: { itemType: "course" | "section" | "lecture"; itemId: number }) {
  const label = itemType === "section" ? "topic" : itemType;
  return (
    <AdminActionForm
      actionName="deleteCourseItem"
      successMessage={`${label.charAt(0).toUpperCase()}${label.slice(1)} deleted successfully.`}
      confirm={{
        title: `Delete this ${label}?`,
        text: itemType === "course"
          ? "Its topics, lectures, and related course data will also be removed. This cannot be undone."
          : `This ${label} and its related data will be removed permanently.`,
        confirmButtonText: `Delete ${label}`,
      }}
    >
      <input type="hidden" name="itemType" value={itemType} />
      <input type="hidden" name="itemId" value={itemId} />
      <button className="admin-danger-button" type="submit">Delete</button>
    </AdminActionForm>
  );
}

function MaterialDeleteButton({ materialId }: { materialId: number }) {
  return (
    <AdminActionForm
      actionName="deleteLectureMaterial"
      successMessage="Material deleted successfully."
      confirm={{
        title: "Delete this material?",
        text: "The downloadable material will be removed permanently.",
        confirmButtonText: "Delete material",
      }}
    >
      <input type="hidden" name="materialId" value={materialId} />
      <button className="admin-danger-button" type="submit">Delete</button>
    </AdminActionForm>
  );
}

export default async function AdminCoursesPage() {
  const { supabase } = await requireAdmin();
  const { data, error } = await supabase
    .from("courses")
    .select("id,slug,title,subtitle,description,cover_image,category,level,published,course_sections(id,title,position,lectures(id,title,lecture_type,duration,video_url,content,overview,study_notes,practice_test,position,is_preview,lecture_materials(id,title,file_url,file_type,file_size,position)))")
    .order("created_at", { ascending: false });

  const courses = (data ?? []) as CourseRow[];
  courses.forEach((course) => {
    course.course_sections.sort((a, b) => a.position - b.position || a.id - b.id);
    course.course_sections.forEach((section) =>
      section.lectures.sort((a, b) => a.position - b.position || a.id - b.id),
    );
    course.course_sections.forEach((section) =>
      section.lectures.forEach((lecture) =>
        lecture.lecture_materials.sort((a, b) => a.position - b.position || a.id - b.id),
      ),
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
        <AdminActionForm actionName="createCourse" className="admin-content-form" successMessage="Course added successfully." resetOnSuccess>
          <label>Course title<input name="title" required placeholder="Japanese Foundations" /></label>
          <label>URL slug<input name="slug" required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" placeholder="japanese-n5" /></label>
          <label>Subtitle<input name="subtitle" placeholder="JLPT N5 complete path" /></label>
          <label>Category<input name="category" required defaultValue="Japanese learning" /></label>
          <label>Level<select name="level" defaultValue="Beginner"><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Expert</option></select></label>
          <RichTextEditor name="description" label="Description" rows={5} placeholder="What students will learn..." />
          <fieldset className="admin-image-builder admin-form-wide">
            <legend>Featured image</legend>
            <label>Upload image (max 3 MB)<input name="featuredImage" type="file" accept="image/jpeg,image/png,image/webp,image/avif" /></label>
            <div className="admin-material-divider"><span>or</span></div>
            <label>External image URL<input name="featuredImageUrl" type="url" placeholder="https://example.com/course-cover.jpg" /></label>
            <p>Choose one source. Recommended aspect ratio: 16:9.</p>
          </fieldset>
          <label className="admin-checkbox"><input type="checkbox" name="published" /> Publish immediately</label>
          <button className="admin-submit-button" type="submit">Create course</button>
        </AdminActionForm>
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
                <AdminActionForm
                  actionName="toggleCoursePublished"
                  successMessage={course.published ? "Course unpublished successfully." : "Course published successfully."}
                  confirm={{
                    title: course.published ? "Unpublish this course?" : "Publish this course?",
                    text: course.published
                      ? "Students will no longer be able to open this course."
                      : "Students will be able to see and open this course.",
                    confirmButtonText: course.published ? "Unpublish" : "Publish",
                  }}
                >
                  <input type="hidden" name="courseId" value={course.id} />
                  <input type="hidden" name="published" value={String(!course.published)} />
                  <button type="submit">{course.published ? "Unpublish" : "Publish"}</button>
                </AdminActionForm>
                <DeleteButton itemType="course" itemId={course.id} />
              </div>
            </header>

            <details className="admin-item-editor admin-course-editor">
              <summary>Edit course details</summary>
              <AdminActionForm actionName="updateCourse" className="admin-content-form" successMessage="Course updated successfully.">
                <input type="hidden" name="courseId" value={course.id} />
                <label>Course title<input name="title" required defaultValue={course.title} /></label>
                <label>URL slug<input name="slug" required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" defaultValue={course.slug} /></label>
                <label>Subtitle<input name="subtitle" defaultValue={course.subtitle ?? ""} /></label>
                <label>Category<input name="category" required defaultValue={course.category} /></label>
                <label>Level<select name="level" defaultValue={course.level}><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Expert</option></select></label>
                <RichTextEditor name="description" label="Description" rows={5} defaultValue={course.description ?? ""} />
                <fieldset className="admin-image-builder admin-form-wide">
                  <legend>Featured image</legend>
                  {course.cover_image ? <div className="admin-course-image-preview" role="img" aria-label={`Current cover for ${course.title}`} style={{ backgroundImage: `url(${course.cover_image})` }} /> : null}
                  <label>Upload replacement (max 3 MB)<input name="featuredImage" type="file" accept="image/jpeg,image/png,image/webp,image/avif" /></label>
                  <div className="admin-material-divider"><span>or</span></div>
                  <label>Replacement image URL<input name="featuredImageUrl" type="url" placeholder="https://example.com/course-cover.jpg" /></label>
                  {course.cover_image ? <label className="admin-checkbox"><input type="checkbox" name="removeFeaturedImage" /> Remove current image</label> : null}
                  <p>Leave both image fields empty to keep the current image.</p>
                </fieldset>
                <button className="admin-submit-button" type="submit">Save course changes</button>
              </AdminActionForm>
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
                    <AdminActionForm actionName="updateCourseSection" className="admin-content-form compact" successMessage="Topic updated successfully.">
                      <input type="hidden" name="sectionId" value={section.id} />
                      <label>Topic title<input name="title" required defaultValue={section.title} /></label>
                      <label>Order<input name="position" type="number" min="0" defaultValue={section.position} /></label>
                      <button className="admin-submit-button" type="submit">Save topic</button>
                    </AdminActionForm>
                  </details>
                  <div className="admin-lecture-list">
                    {section.lectures.map((lecture) => (
                      <AdminLectureRow
                        key={lecture.id}
                        type={lecture.lecture_type}
                        icon={lecture.lecture_type === "video" ? "▶" : lecture.lecture_type === "quiz" ? "?" : "▤"}
                        title={lecture.title}
                        meta={`${lecture.lecture_type} · ${lecture.duration || "No duration"}${lecture.is_preview ? " · Preview" : ""}`}
                        deleteAction={<DeleteButton itemType="lecture" itemId={lecture.id} />}
                      >
                        <AdminActionForm actionName="updateLecture" className="admin-content-form compact" successMessage="Lecture updated successfully.">
                          <input type="hidden" name="lectureId" value={lecture.id} />
                          <label>Lecture title<input name="title" required defaultValue={lecture.title} /></label>
                          <label>Type<select name="lectureType" defaultValue={lecture.lecture_type}><option value="video">Video</option><option value="reading">Reading</option><option value="quiz">Quiz / test</option></select></label>
                          <label>Duration<input name="duration" defaultValue={lecture.duration ?? ""} /></label>
                          <label>Order<input name="position" type="number" min="0" defaultValue={lecture.position} /></label>
                          <label className="admin-form-wide">Video URL<input name="videoUrl" type="url" defaultValue={lecture.video_url ?? ""} /></label>
                          <RichTextEditor name="overview" label="Overview" rows={6} defaultValue={lecture.overview ?? lecture.content ?? ""} placeholder="Lesson summary and learning objectives..." />
                          <RichTextEditor name="studyNotes" label="Study notes" rows={8} defaultValue={lecture.study_notes ?? lecture.content ?? ""} placeholder="Detailed notes, examples, and references..." />
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
                        </AdminActionForm>
                        <section className="admin-material-manager">
                          <h3>Downloadable materials <span>{lecture.lecture_materials.length}</span></h3>
                          <div className="admin-material-list">
                            {lecture.lecture_materials.map((material) => (
                              <details key={material.id}>
                                <summary>
                                  <span>{material.file_type || "FILE"}</span>
                                  <div><strong>{material.title}</strong><small>{material.file_size ? `${(material.file_size / 1024 / 1024).toFixed(1)} MB` : "External resource"}</small></div>
                                  <b>Edit</b>
                                </summary>
                                <AdminActionForm actionName="updateLectureMaterial" className="admin-content-form compact" successMessage="Material updated successfully.">
                                  <input type="hidden" name="materialId" value={material.id} />
                                  <label>Title<input name="title" required defaultValue={material.title} /></label>
                                  <label>File label<input name="fileType" defaultValue={material.file_type ?? ""} placeholder="PDF" /></label>
                                  <label>Order<input name="position" type="number" min="0" defaultValue={material.position} /></label>
                                  <label className="admin-form-wide">Replace external URL<input name="externalUrl" type="url" placeholder={material.file_url} /></label>
                                  <button className="admin-submit-button" type="submit">Save material</button>
                                </AdminActionForm>
                                <div className="admin-editor-delete"><MaterialDeleteButton materialId={material.id} /></div>
                              </details>
                            ))}
                          </div>
                          <details className="admin-add-material">
                            <summary>＋ Add downloadable material</summary>
                            <AdminActionForm actionName="createLectureMaterial" className="admin-content-form compact" successMessage="Material added successfully." resetOnSuccess>
                              <input type="hidden" name="lectureId" value={lecture.id} />
                              <label>Material title<input name="title" required placeholder="Lesson practice sheet" /></label>
                              <label>File label<input name="fileType" placeholder="PDF, DOCX, ZIP..." /></label>
                              <label>Order<input name="position" type="number" min="0" defaultValue={lecture.lecture_materials.length} /></label>
                              <label className="admin-form-wide">Upload file (max 3 MB)<input name="file" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.txt" /></label>
                              <div className="admin-material-divider"><span>or</span></div>
                              <label className="admin-form-wide">External download URL<input name="externalUrl" type="url" placeholder="https://example.com/material.pdf" /></label>
                              <p className="admin-form-hint admin-form-wide">Choose one source: upload a file or provide an external URL.</p>
                              <button className="admin-submit-button" type="submit">Add material</button>
                            </AdminActionForm>
                          </details>
                        </section>
                      </AdminLectureRow>
                    ))}
                  </div>
                  <details className="admin-inline-create">
                    <summary>＋ Add lecture</summary>
                    <AdminActionForm actionName="createLecture" className="admin-content-form compact" successMessage="Lecture added successfully." resetOnSuccess>
                      <input type="hidden" name="sectionId" value={section.id} />
                      <label>Lecture title<input name="title" required placeholder="Welcome to the course" /></label>
                      <label>Type<select name="lectureType"><option value="video">Video</option><option value="reading">Reading</option><option value="quiz">Quiz / test</option></select></label>
                      <label>Duration<input name="duration" placeholder="08:30 or 5 min" /></label>
                      <label>Order<input name="position" type="number" min="0" defaultValue={section.lectures.length} /></label>
                      <label className="admin-form-wide">Video URL<input name="videoUrl" type="url" placeholder="https://youtube.com/..." /></label>
                      <RichTextEditor name="overview" label="Overview" rows={6} placeholder="Lesson summary and learning objectives..." />
                      <RichTextEditor name="studyNotes" label="Study notes" rows={8} placeholder="Detailed notes, examples, and references..." />
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
                    </AdminActionForm>
                  </details>
                  <div className="admin-section-delete"><DeleteButton itemType="section" itemId={section.id} /></div>
                </details>
              ))}

              <details className="admin-inline-create add-section">
                <summary>＋ Add course topic / section</summary>
                <AdminActionForm actionName="createCourseSection" className="admin-content-form compact" successMessage="Topic added successfully." resetOnSuccess>
                  <input type="hidden" name="courseId" value={course.id} />
                  <label>Topic title<input name="title" required placeholder="Hiragana basics" /></label>
                  <label>Order<input name="position" type="number" min="0" defaultValue={course.course_sections.length} /></label>
                  <button className="admin-submit-button" type="submit">Add topic</button>
                </AdminActionForm>
              </details>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
