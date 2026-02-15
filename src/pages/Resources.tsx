import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/strings";
import { Book, Code2, ExternalLink, Wrench } from "lucide-react";

import SiteLayout from "@/components/SiteLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const resources = {
  japanese: [
    {
      title: "NHK NEWS WEB EASY",
      desc: "সহজ জাপানি নিউজ — রিডিং প্র্যাকটিসের জন্য দারুণ",
      href: "https://news.web.nhk/news/easy/",
      tag: "Reading",
    },
    {
      title: "Tae Kim’s Guide to Japanese",
      desc: "গ্রামার বোঝার জন্য জনপ্রিয় ফ্রি গাইড",
      href: "https://guidetojapanese.org/learn/",
      tag: "Grammar",
    },
    {
      title: "Anki",
      desc: "স্পেসড রিপিটিশন ফ্ল্যাশকার্ড — ভোকাবুলারি ধরে রাখার বেস্ট টুল",
      href: "https://apps.ankiweb.net/",
      tag: "SRS",
    },
  ],
  programming: [
    {
      title: "CS50 (Harvard)",
      desc: "কম্পিউটার সায়েন্স ফান্ডামেন্টাল — বিগিনারদের জন্য শক্ত বেস",
      href: "https://cs50.harvard.edu/x/",
      tag: "CS",
    },
    {
      title: "MDN Web Docs",
      desc: "Web fundamentals (HTML/CSS/JS) শেখার অফিসিয়াল-লেভেল ডকুমেন্টেশন",
      href: "https://developer.mozilla.org/",
      tag: "Web",
    },
    {
      title: "Python Docs",
      desc: "Python-এর অফিসিয়াল ডকুমেন্টেশন — রেফারেন্স হিসেবে অপরিহার্য",
      href: "https://docs.python.org/3/",
      tag: "Python",
    },
  ],
  tools: [
    {
      title: "Notion / Obsidian",
      desc: "নোট/স্টাডি ম্যানেজমেন্ট — নিজের সিস্টেম বানাতে সাহায্য করে",
      href: "https://www.notion.so/",
      tag: "Notes",
    },
    {
      title: "GitHub",
      desc: "প্রজেক্ট, পোর্টফোলিও, ওপেন সোর্স — সব কিছুর হোম",
      href: "https://github.com/",
      tag: "Dev",
    },
  ],
};

function ResourceCard({ title, desc, href, tag }: { title: string; desc: string; href: string; tag: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block"
    >
      <Card className="h-full transition-shadow group-hover:shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between gap-3">
            <CardTitle className="font-display text-lg">{title}</CardTitle>
            <ExternalLink className="size-4 text-muted-foreground" />
          </div>
          <CardDescription className="mt-2">{desc}</CardDescription>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary">{tag}</Badge>
        </CardContent>
      </Card>
    </a>
  );
}

export default function Resources() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = `${t(lang, "resources.title")} — Halim`;
  }, [lang]);

  return (
    <SiteLayout>
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-4xl font-extrabold tracking-tight">{t(lang, "resources.title")}</h1>
        <p className="text-sm text-muted-foreground">{t(lang, "resources.desc")}</p>
      </div>

      <section className="mt-8">
        <div className="flex items-center gap-2">
          <Book className="size-5 text-primary" />
          <h2 className="font-display text-2xl font-bold tracking-tight">{t(lang, "resources.jp")}</h2>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {resources.japanese.map((r) => (
            <ResourceCard key={r.href} {...r} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center gap-2">
          <Code2 className="size-5 text-primary" />
          <h2 className="font-display text-2xl font-bold tracking-tight">{t(lang, "resources.prog")}</h2>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {resources.programming.map((r) => (
            <ResourceCard key={r.href} {...r} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center gap-2">
          <Wrench className="size-5 text-primary" />
          <h2 className="font-display text-2xl font-bold tracking-tight">{t(lang, "resources.tools")}</h2>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {resources.tools.map((r) => (
            <ResourceCard key={r.href} {...r} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
