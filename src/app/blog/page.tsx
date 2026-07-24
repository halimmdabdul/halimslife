import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";

import { InnerPageShell } from "@/components/inner-page-shell";
import { TranslatedText } from "@/components/site-preferences";
import { getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "বাংলা Blog",
  description:
    "Japan career, Japanese language, robotics এবং programming নিয়ে Halim-এর practical বাংলা লেখা।",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  await connection();
  const posts = await getPublishedPosts();

  return (
    <InnerPageShell>
      <section className="blog-hero container">
        <span className="kicker">Halim&apos;s Blog</span>
        <h1>
          <TranslatedText
            bn="অভিজ্ঞতা, শেখা এবং practical insight—সহজ বাংলায়।"
            en="Experience, learning and practical insights."
            ja="経験、学び、そして実践的なインサイト。"
          />
        </h1>
        <p>
          Japan career, Japanese language, engineering ও programming নিয়ে
          field notes।
        </p>
      </section>
      <section className="blog-grid container">
        {posts.length ? (
          posts.map((post, index) => (
            <article className="blog-card" key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <div
                  className="blog-card-cover"
                  style={
                    post.cover_image
                      ? { backgroundImage: `url("${post.cover_image}")` }
                      : undefined
                  }
                >
                  <span>0{index + 1}</span>
                </div>
                <div className="blog-card-copy">
                  <time dateTime={post.published_at}>
                    {new Intl.DateTimeFormat("bn-BD", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(post.published_at))}
                  </time>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <strong>
                    <TranslatedText
                      bn="সম্পূর্ণ পড়ুন →"
                      en="Read more →"
                      ja="続きを読む →"
                    />
                  </strong>
                </div>
              </Link>
            </article>
          ))
        ) : (
          <div className="blog-empty">
            <span>লেখা প্রস্তুত হচ্ছে</span>
            <h2>খুব শিগগিরই নতুন লেখা প্রকাশিত হবে।</h2>
            <p>
              Supabase blog migration run হওয়ার পরে published posts এখানে
              server-side render হবে।
            </p>
          </div>
        )}
      </section>
    </InnerPageShell>
  );
}
