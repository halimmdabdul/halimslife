import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, X } from "lucide-react";

import SiteLayout from "@/components/SiteLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { categoryMeta, posts, type BlogCategory } from "@/content/posts";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/strings";
import { pick } from "@/i18n/helpers";
import NewsletterPopup from "@/components/NewsletterPopup";
import profileImg from "@/assets/profile-small.webp";

function parseQuery(location: string) {
  const q = location.split("?")[1] ?? "";
  const sp = new URLSearchParams(q);
  const cat = sp.get("cat") ?? "all";
  const query = sp.get("q") ?? "";
  return { cat, query };
}

function setQuery(setLoc: (to: string) => void, basePath: string, next: { cat?: string; q?: string }) {
  const sp = new URLSearchParams();
  if (next.cat && next.cat !== "all") sp.set("cat", next.cat);
  if (next.q && next.q.trim()) sp.set("q", next.q.trim());
  const qs = sp.toString();
  setLoc(qs ? `${basePath}?${qs}` : basePath);
}

export default function Blog() {
  const [loc, setLoc] = useLocation();
  const { lang } = useLanguage();
  const { cat, query } = useMemo(() => parseQuery(loc), [loc]);

  const [qLocal, setQLocal] = useState(query);

  useEffect(() => {
    document.title = `${t(lang, "blog.title")} — Halim`;
  }, [lang]);

  useEffect(() => {
    setQLocal(query);
  }, [query]);

  const catKey = (cat as BlogCategory) ?? "all";

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return posts
      .filter((p) => (cat === "all" ? true : p.category === cat))
      .filter((p) => {
        if (!needle) return true;
        return (
          pick(lang, p.title as any).toLowerCase().includes(needle) ||
          pick(lang, p.excerpt as any).toLowerCase().includes(needle) ||
          p.tags.join(" ").toLowerCase().includes(needle)
        );
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [cat, query]);

  return (
    <SiteLayout>
      <NewsletterPopup storageKey="newsletter:blog" delayMs={10000} />
      <div className="flex items-center justify-between gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-2">
        <h1 className="font-display text-4xl font-extrabold tracking-tight">{t(lang, "blog.title")}</h1>
        <p className="text-sm text-muted-foreground">{t(lang, "blog.desc")}</p>
        </div>
        <div className="hidden md:block">
          <div className="size-14 overflow-hidden rounded-2xl border border-border bg-muted/20">
            <img src={profileImg} alt="Halim" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-12">
        {/* Sidebar */}
        <aside className="md:col-span-4">
          <div className="sticky top-24 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-lg">সার্চ</CardTitle>
                <CardDescription>শিরোনাম/ট্যাগ দিয়ে খুঁজুন</CardDescription>
                <div className="mt-3 flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
                    <Input
                      value={qLocal}
                      onChange={(e) => setQLocal(e.target.value)}
                      placeholder="যেমন: N5, debugging, japan..."
                      className="pl-9"
                    />
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setQuery(setLoc, "/blog", { cat, q: qLocal })}
                  >
                    খুঁজুন
                  </Button>
                </div>
                {(query || cat !== "all") && (
                  <div className="mt-2">
                    <Button
                      variant="ghost"
                      className="gap-2 text-muted-foreground"
                      onClick={() => setQuery(setLoc, "/blog", { cat: "all", q: "" })}
                    >
                      <X className="size-4" /> ফিল্টার রিসেট
                    </Button>
                  </div>
                )}
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-display text-lg">ক্যাটাগরি</CardTitle>
                <CardDescription>বিষয় অনুযায়ী ফিল্টার</CardDescription>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant={cat === "all" ? "default" : "outline"}
                    onClick={() => setQuery(setLoc, "/blog", { cat: "all", q: query })}
                  >
                    সব
                  </Button>
                  {(
                    ["japanese", "programming", "eng-life", "japan-life", "career"] as BlogCategory[]
                  ).map((c) => (
                    <Button
                      key={c}
                      size="sm"
                      variant={cat === c ? "default" : "outline"}
                      onClick={() => setQuery(setLoc, "/blog", { cat: c, q: query })}
                    >
                      {pick(lang, categoryMeta[c].label as any)}
                    </Button>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </div>
        </aside>

        {/* List */}
        <section className="md:col-span-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm text-muted-foreground">
              {filtered.length} {cat !== "all" ? `• ${pick(lang, categoryMeta[catKey].label as any)}` : ""}
              {query ? ` • “${query}”` : ""}
            </div>
          </div>

          <div className="my-4">
            <Separator />
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-10 text-center">
              <div className="font-display text-xl font-bold">কিছুই পাওয়া যায়নি</div>
              <p className="mt-2 text-sm text-muted-foreground">
                অন্য কীওয়ার্ড দিন বা ক্যাটাগরি পরিবর্তন করুন।
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filtered.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                  <Card className="transition-shadow group-hover:shadow-md">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{pick(lang, categoryMeta[p.category].label as any)}</Badge>
                        <span className="text-xs text-muted-foreground">{p.readingMinutes} min</span>
                        <span className="text-xs text-muted-foreground">• {p.date}</span>
                      </div>
                      <CardTitle className="mt-2 font-display leading-tight">{pick(lang, p.title as any)}</CardTitle>
                      <CardDescription className="mt-2">{pick(lang, p.excerpt as any)}</CardDescription>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.slice(0, 4).map((t) => (
                          <Badge key={t} variant="outline" className="text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </SiteLayout>
  );
}
