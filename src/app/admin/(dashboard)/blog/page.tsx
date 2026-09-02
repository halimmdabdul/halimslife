import type { Metadata } from "next";
import Link from "next/link";

import { AdminActionForm } from "@/components/admin-action-form";
import { RichTextEditor } from "@/components/rich-text-editor";
import { requireAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Blog posts",
  robots: { index: false, follow: false },
};

type PostRow = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  published: boolean;
  published_at: string;
  is_featured: boolean;
};

function DeleteButton({ postId }: { postId: number }) {
  return (
    <AdminActionForm
      actionName="deletePost"
      successMessage="Post deleted successfully."
      confirm={{
        title: "Delete this post?",
        text: "This cannot be undone.",
        confirmButtonText: "Delete post",
      }}
    >
      <input type="hidden" name="postId" value={postId} />
      <button className="admin-danger-button" type="submit">Delete</button>
    </AdminActionForm>
  );
}

export default async function AdminBlogPage() {
  const { supabase } = await requireAdmin();
  const { data, error } = await supabase
    .from("posts")
    .select("id,slug,title,excerpt,content,cover_image,meta_title,meta_description,published,published_at,is_featured")
    .order("is_featured", { ascending: false })
    .order("published_at", { ascending: false });

  const posts = (data ?? []) as PostRow[];

  return (
    <>
      <header className="admin-page-header">
        <div>
          <span>SITE CONTENT</span>
          <h1>Blog posts</h1>
          <p>Write, edit, and publish articles that appear on /blog.</p>
        </div>
        <span className="admin-user-total">{posts.length} posts</span>
      </header>

      {error ? (
        <section className="admin-course-setup">
          <strong>Blog database is not ready</strong>
          <p>Apply the latest Supabase migration, then reload this page.</p>
          <code>supabase db push</code>
        </section>
      ) : null}

      <details className="admin-create-panel" open={posts.length === 0}>
        <summary><span>＋</span> Write a new post</summary>
        <AdminActionForm actionName="createPost" className="admin-content-form" successMessage="Post added successfully." resetOnSuccess>
          <label className="admin-form-wide">Title<input name="title" required placeholder="জাপানের Engineering Team-এ কাজ করে যা শিখেছি" /></label>
          <label className="admin-form-wide">URL slug (blank to auto-generate from title)<input name="slug" pattern="[a-z0-9]+(?:-[a-z0-9]+)*" placeholder="japan-engineering-lessons" /></label>
          <label className="admin-form-wide">Excerpt (shown on the blog listing, plain text)<textarea name="excerpt" rows={3} required placeholder="One or two sentences that summarize the post..." /></label>
          <RichTextEditor name="content" label="Content" rows={16} placeholder="Write the full article here. Markdown is supported..." />
          <fieldset className="admin-image-builder admin-form-wide">
            <legend>Thumbnail / Cover image</legend>
            <label>Upload image (max 3 MB)<input name="coverImage" type="file" accept="image/jpeg,image/png,image/webp,image/avif" /></label>
            <div className="admin-material-divider"><span>or</span></div>
            <label>External image URL<input name="coverImageUrl" type="url" placeholder="https://example.com/cover.jpg" /></label>
            <p>Choose one source. Recommended aspect ratio: 16:9.</p>
          </fieldset>
          <fieldset className="admin-test-builder admin-form-wide">
            <legend>SEO (optional)</legend>
            <label>SEO title (~60 characters, blank uses the title above)<input name="metaTitle" maxLength={70} placeholder="জাপানের Engineering Team-এ কাজ করে যা শিখেছি" /></label>
            <label>Meta description (~155 characters, blank uses the excerpt above)<textarea name="metaDescription" rows={2} maxLength={200} placeholder="Search-engine snippet text..." /></label>
          </fieldset>
          <label className="admin-checkbox"><input type="checkbox" name="published" /> Publish immediately</label>
          <label className="admin-checkbox"><input type="checkbox" name="isFeatured" /> Featured post (always shown first on /blog)</label>
          <button className="admin-submit-button" type="submit">Create post</button>
        </AdminActionForm>
      </details>

      <section className="admin-course-list">
        {posts.map((post) => (
          <article className="admin-course-card" key={post.id}>
            <header>
              <div>
                <span className={`admin-course-state ${post.published ? "published" : "draft"}`}>{post.published ? "Published" : "Draft"}</span>
                {post.is_featured ? <span className="admin-course-state featured">Featured</span> : null}
                <h2>{post.title}</h2>
                <p>/blog/{post.slug}</p>
              </div>
              <div className="admin-course-actions">
                {post.published ? <Link href={`/blog/${post.slug}`}>View ↗</Link> : null}
                <AdminActionForm
                  actionName="togglePostPublished"
                  successMessage={post.published ? "Post unpublished successfully." : "Post published successfully."}
                  confirm={{
                    title: post.published ? "Unpublish this post?" : "Publish this post?",
                    text: post.published
                      ? "Readers will no longer be able to open this post."
                      : "Readers will be able to see and open this post.",
                    confirmButtonText: post.published ? "Unpublish" : "Publish",
                  }}
                >
                  <input type="hidden" name="postId" value={post.id} />
                  <input type="hidden" name="published" value={String(!post.published)} />
                  <button type="submit">{post.published ? "Unpublish" : "Publish"}</button>
                </AdminActionForm>
                <DeleteButton postId={post.id} />
              </div>
            </header>

            <details className="admin-item-editor admin-course-editor">
              <summary>Edit post</summary>
              <AdminActionForm actionName="updatePost" className="admin-content-form" successMessage="Post updated successfully.">
                <input type="hidden" name="postId" value={post.id} />
                <label className="admin-form-wide">Title<input name="title" required defaultValue={post.title} /></label>
                <label className="admin-form-wide">URL slug<input name="slug" required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" defaultValue={post.slug} /></label>
                <label className="admin-form-wide">Excerpt (shown on the blog listing, plain text)<textarea name="excerpt" rows={3} required defaultValue={post.excerpt} /></label>
                <RichTextEditor name="content" label="Content" rows={16} defaultValue={post.content} />
                <fieldset className="admin-image-builder admin-form-wide">
                  <legend>Thumbnail / Cover image</legend>
                  {post.cover_image ? <div className="admin-course-image-preview" role="img" aria-label={`Current cover for ${post.title}`} style={{ backgroundImage: `url(${post.cover_image})` }} /> : null}
                  <label>Upload replacement (max 3 MB)<input name="coverImage" type="file" accept="image/jpeg,image/png,image/webp,image/avif" /></label>
                  <div className="admin-material-divider"><span>or</span></div>
                  <label>Replacement image URL<input name="coverImageUrl" type="url" placeholder="https://example.com/cover.jpg" /></label>
                  {post.cover_image ? <label className="admin-checkbox"><input type="checkbox" name="removeCoverImage" /> Remove current image</label> : null}
                  <p>Leave both image fields empty to keep the current image.</p>
                </fieldset>
                <fieldset className="admin-test-builder admin-form-wide">
                  <legend>SEO (optional)</legend>
                  <label>SEO title (~60 characters, blank uses the title above)<input name="metaTitle" maxLength={70} defaultValue={post.meta_title ?? ""} placeholder={post.title} /></label>
                  <label>Meta description (~155 characters, blank uses the excerpt above)<textarea name="metaDescription" rows={2} maxLength={200} defaultValue={post.meta_description ?? ""} placeholder={post.excerpt} /></label>
                </fieldset>
                <label className="admin-checkbox"><input type="checkbox" name="isFeatured" defaultChecked={post.is_featured} /> Featured post (always shown first on /blog)</label>
                <button className="admin-submit-button" type="submit">Save post changes</button>
              </AdminActionForm>
            </details>
          </article>
        ))}
      </section>
    </>
  );
}
