// Design North Star (Minimal Tech-Editorial)
// - Calm, trustworthy footer with quick links
// - Keep content Bengali-first and scannable

import { Link } from "wouter";
import { Github, Linkedin, Youtube } from "lucide-react";

import { site } from "@/content/site";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/strings";
import { categoryMeta } from "@/content/posts";

const social = [
  { label: "YouTube", icon: Youtube, href: site.socials.youtube },
  { label: "LinkedIn", icon: Linkedin, href: site.socials.linkedin },
  { label: "GitHub", icon: Github, href: site.socials.github },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  return (
    <footer className="border-t border-border/60 bg-sidebar">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-semibold">Halim</div>
          <p className="mt-2 text-sm text-muted-foreground">{t(lang, "footer.about")}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <div className="font-medium text-foreground">{t(lang, "footer.pages")}</div>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <Link href="/about" className="hover:text-foreground">{t(lang, "nav.about")}</Link>
              <Link href="/blog" className="hover:text-foreground">{t(lang, "nav.blog")}</Link>
              <Link href="/resources" className="hover:text-foreground">{t(lang, "nav.resources")}</Link>
              <Link href="/contact" className="hover:text-foreground">{t(lang, "nav.contact")}</Link>
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-medium text-foreground">{t(lang, "footer.topics")}</div>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <Link href="/blog?cat=japanese" className="hover:text-foreground">{categoryMeta.japanese.label[lang]}</Link>
              <Link href="/blog?cat=programming" className="hover:text-foreground">{categoryMeta.programming.label[lang]}</Link>
              <Link href="/blog?cat=eng-life" className="hover:text-foreground">{categoryMeta["eng-life"].label[lang]}</Link>
              <Link href="/blog?cat=japan-life" className="hover:text-foreground">{categoryMeta["japan-life"].label[lang]}</Link>
            </div>
          </div>
        </div>

        <div>
          <div className="font-medium">{t(lang, "footer.social")}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <s.icon className="size-4" />
                {s.label}
              </a>
            ))}
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            © {year} Halim. Built with care.
          </div>
        </div>
      </div>
    </footer>
  );
}
