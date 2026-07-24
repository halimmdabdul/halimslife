import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";

import { InnerPageShell } from "@/components/inner-page-shell";
import { SocialShare } from "@/components/social-share";
import { getPublishedPost } from "@/lib/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post) {
    return { title: "লেখা পাওয়া যায়নি", robots: { index: false } };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.published_at,
      url: `/blog/${post.slug}`,
      images: post.cover_image ? [post.cover_image] : undefined,
    },
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await connection();
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post) {
    notFound();
  }

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at,
    dateModified: post.published_at,
    mainEntityOfPage: `https://halimslife.com/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Halim Md Abdul",
      url: "https://halimslife.com/about",
    },
  };

  return (
    <InnerPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <article className="single-post container">
        <header>
          <Link href="/blog">← সব লেখায় ফিরুন</Link>
          <time dateTime={post.published_at}>
            {new Intl.DateTimeFormat("bn-BD", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.published_at))}
          </time>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </header>
        {post.cover_image ? (
          <div
            className="single-post-cover"
            style={{ backgroundImage: `url("${post.cover_image}")` }}
            role="img"
            aria-label=""
          />
        ) : null}
        <div className="single-post-layout">
          <aside>
            <SocialShare title={post.title} />
          </aside>
          <div className="post-content">
            {post.content.split(/\n{2,}/).map((paragraph, index) => (
              <p key={`${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </InnerPageShell>
  );
}
