import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Facebook, Link2, Linkedin, Send, Share2, Twitter } from "lucide-react";
import { Streamdown } from "streamdown";
import { toast } from "sonner";

import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { categoryMeta, getPostBySlug, posts } from "@/content/posts";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/strings";
import { pick } from "@/i18n/helpers";
import NewsletterPopup from "@/components/NewsletterPopup";

function Comments({ slug }: { slug: string }) {
  const storageKey = `comments:${slug}`;
  const [items, setItems] = useState<{ name: string; message: string; ts: number }[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, [storageKey]);

  const canSubmit = name.trim().length >= 2 && message.trim().length >= 5;

  function submit() {
    if (!canSubmit) return;
    const next = [{ name: name.trim(), message: message.trim(), ts: Date.now() }, ...items].slice(0, 50);
    setItems(next);
    setMessage("");
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display">কমেন্ট</CardTitle>
        <p className="text-xs text-muted-foreground">
          ডেমো ভার্সন: কমেন্টগুলো আপনার ব্রাউজারে (localStorage) সেভ থাকে। পরে চাইলে GitHub (Giscus) বা অন্য
          সার্ভিস দিয়ে পাবলিক কমেন্ট সেকশন যুক্ত করা যাবে।
        </p>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium">নাম</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="আপনার নাম" />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label className="text-sm font-medium">কমেন্ট</label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="আপনার মতামত লিখুন..."
              rows={4}
            />
          </div>
          <div className="md:col-span-2">
            <Button onClick={submit} disabled={!canSubmit} className="gap-2">
              পাঠান <Send className="size-4" />
            </Button>
          </div>
        </div>

        <Separator />

        {items.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground">
            এখনও কোনো কমেন্ট নেই। প্রথম কমেন্টটি আপনিই করুন।
          </div>
        ) : (
          <div className="grid gap-3">
            {items.map((c) => (
              <div key={c.ts} className="rounded-xl border border-border bg-muted/20 p-4">
                <div className="text-sm font-semibold">{c.name}</div>
                <div className="mt-1 whitespace-pre-wrap text-sm text-muted-foreground">{c.message}</div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Post({ slug }: { slug: string }) {
  const post = useMemo(() => getPostBySlug(slug), [slug]);
  const { lang } = useLanguage();

  const sorted = useMemo(
    () => [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)),
    []
  );
  const idx = useMemo(() => sorted.findIndex((p) => p.slug === slug), [sorted, slug]);
  const nextPost = idx > 0 ? sorted[idx - 1] : null; // newer
  const prevPost = idx >= 0 && idx < sorted.length - 1 ? sorted[idx + 1] : null; // older

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    const base = window.location.origin;
    return `${base}/blog/${slug}`;
  }, [slug]);

  const shareText = useMemo(() => (post ? pick(lang, post.title as any) : ""), [lang, post]);

  const shareLinks = useMemo(() => {
    const u = encodeURIComponent(shareUrl);
    const txt = encodeURIComponent(shareText);
    return {
      twitter: `https://twitter.com/intent/tweet?url=${u}&text=${txt}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    };
  }, [shareUrl, shareText]);

  async function copyShareLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success(t(lang, "post.share.copied"));
    } catch {
      // fallback
      try {
        window.prompt(t(lang, "post.share.copyPrompt"), shareUrl);
      } catch {
        // ignore
      }
    }
  }

  async function nativeShare() {
    const nav: any = navigator;
    if (!nav?.share) return;
    try {
      await nav.share({ title: shareText, text: shareText, url: shareUrl });
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    document.title = post ? `${pick(lang, post.title as any)} — Halim` : `${t(lang, "post.notFound")} — Halim`;
  }, [post, lang]);

  if (!post) {
    return (
      <SiteLayout>
        <Card>
          <CardHeader>
            <CardTitle className="font-display">{t(lang, "post.notFound")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{t(lang, "post.notFoundDesc")}</p>
            <div className="mt-4">
              <Link href="/blog">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="size-4" /> {t(lang, "post.backToBlog")}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <NewsletterPopup storageKey="newsletter:post" delayMs={14000} />

      <div className="mx-auto w-full max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/blog">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="size-4" /> {t(lang, "blog.back")}
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{pick(lang, categoryMeta[post.category].label as any)}</Badge>
            <span className="text-xs text-muted-foreground">{post.readingMinutes} min read</span>
          </div>
        </div>

        <article className="mt-6">
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            {pick(lang, post.title as any)}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {pick(lang, post.excerpt as any)}
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.65)] backdrop-blur md:p-10">
            <div
              className="whitespace-normal text-[15px] leading-relaxed text-foreground/95 md:text-base [&_p]:mt-3 [&_p]:text-foreground/90 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:opacity-90 [&_ul]:mt-3 [&_ul]:pl-6 [&_ol]:mt-3 [&_ol]:pl-6 [&_li]:mt-1 [&_[data-streamdown='heading-1']]:mt-6 [&_[data-streamdown='heading-1']]:text-3xl [&_[data-streamdown='heading-1']]:font-semibold [&_[data-streamdown='heading-2']]:mt-6 [&_[data-streamdown='heading-2']]:text-2xl [&_[data-streamdown='heading-2']]:font-semibold [&_[data-streamdown='heading-3']]:mt-5 [&_[data-streamdown='heading-3']]:text-xl [&_[data-streamdown='heading-3']]:font-semibold"
            >
              <Streamdown>{pick(lang, post.contentMd as any)}</Streamdown>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border/70 bg-card/60 p-4 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm font-semibold">{t(lang, "post.share.title")}</div>
              {typeof navigator !== "undefined" && (navigator as any).share ? (
                <Button variant="outline" size="sm" className="gap-2" onClick={nativeShare}>
                  <Share2 className="size-4" /> {t(lang, "post.share.native")}
                </Button>
              ) : null}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <a href={shareLinks.twitter} target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Twitter className="size-4" /> X
                </Button>
              </a>
              <a href={shareLinks.facebook} target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Facebook className="size-4" /> Facebook
                </Button>
              </a>
              <a href={shareLinks.linkedin} target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Linkedin className="size-4" /> LinkedIn
                </Button>
              </a>
              <Button variant="outline" size="sm" className="gap-2" onClick={copyShareLink}>
                <Link2 className="size-4" /> {t(lang, "post.share.copy")}
              </Button>
            </div>

            <div className="mt-2 text-xs text-muted-foreground">{shareUrl.replace("https://", "").replace("http://", "")}</div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div>
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`}>
                  <Button variant="outline" className="h-auto w-full items-start justify-start gap-3 py-3 text-left">
                    <ArrowLeft className="mt-0.5 size-4 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{t(lang, "post.prev")}</div>
                      <div className="mt-0.5 line-clamp-2 text-sm font-semibold">{pick(lang, prevPost.title as any)}</div>
                    </div>
                  </Button>
                </Link>
              ) : (
                <div className="h-12" />
              )}
            </div>

            <div>
              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`}>
                  <Button variant="outline" className="h-auto w-full items-start justify-end gap-3 py-3 text-right">
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{t(lang, "post.next")}</div>
                      <div className="mt-0.5 line-clamp-2 text-sm font-semibold">{pick(lang, nextPost.title as any)}</div>
                    </div>
                    <ArrowRight className="mt-0.5 size-4 shrink-0" />
                  </Button>
                </Link>
              ) : (
                <div className="h-12" />
              )}
            </div>
          </div>
        </article>

        <div className="mt-10">
          <Comments slug={post.slug} />
        </div>
      </div>
    </SiteLayout>
  );
}
