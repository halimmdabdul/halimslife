import { useEffect } from "react";
import { Briefcase, ExternalLink, GraduationCap, MapPin, Target } from "lucide-react";

import SiteLayout from "@/components/SiteLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profileImg from "@/assets/profile.webp";
import wideImg from "@/assets/halim-wide.webp";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/strings";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function About() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = `${t(lang, "nav.about")} — Halim`;
  }, [lang]);

  return (
    <SiteLayout>
      <div className="grid gap-10 md:grid-cols-5">
        <section className="md:col-span-3">
          <div className="mb-6 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <img src={wideImg} alt="Halim" className="h-48 w-full object-cover md:h-56" />
          </div>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10">{t(lang, "about.badge")}</Badge>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight">{t(lang, "about.title")}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t(lang, "about.lead")}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <MapPin className="size-4 text-primary" /> {t(lang, "home.stat.location")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{t(lang, "about.locationValue")}</CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Briefcase className="size-4 text-primary" /> {t(lang, "home.stat.job")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{t(lang, "about.jobLine")}</CardContent>
            </Card>
          </div>

          <div className="my-10">
            <Separator />
          </div>

          <section>
            <h2 className="font-display text-2xl font-bold tracking-tight">{t(lang, "about.storyTitle")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(lang, "about.story")}</p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-bold tracking-tight">{t(lang, "about.expTitle")}</h2>
            <div className="mt-4 grid gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Robotics / Computer Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{t(lang, "about.exp.1")}</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">ডকুমেন্টেশন + কমিউনিকেশন</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{t(lang, "about.exp.2")}</CardContent>
              </Card>
            </div>
          </section>
        </section>

        <aside className="md:col-span-2">
          <div className="sticky top-24 grid gap-4">
            <Card className="overflow-hidden">
              <div className="flex items-center gap-3 p-5">
                <div className="size-14 overflow-hidden rounded-full border border-border bg-card shadow-sm">
                  <img src={profileImg} alt="Halim" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold">Halim</div>
                  <div className="text-sm text-muted-foreground">Japan • Robotics • Computer Vision</div>
                </div>
              </div>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <GraduationCap className="size-4 text-primary" /> {t(lang, "about.eduTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{t(lang, "about.edu")}</CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <ExternalLink className="size-4 text-primary" /> {t(lang, "about.researchTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm text-muted-foreground">
                <a
                  href={t(lang, "about.scholarUrl")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm transition-colors hover:bg-accent"
                >
                  <span className="font-medium text-foreground/90">{t(lang, "about.scholarLabel")}</span>
                  <span className="text-xs text-muted-foreground">open</span>
                </a>

                <div className="grid gap-3">
                  {([1, 2] as const).map((n) => (
                    <div key={n} className="rounded-xl border border-border bg-muted/20 p-4">
                      <div className="text-sm font-semibold text-foreground/90">{t(lang, `about.pubs.${n}.title`)}</div>
                      <div className="mt-1 text-xs leading-relaxed">{t(lang, `about.pubs.${n}.meta`)}</div>
                      <a
                        href={t(lang, "about.scholarUrl")}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex text-xs text-muted-foreground underline underline-offset-4 hover:opacity-90"
                      >
                        {t(lang, "about.pubs.more")}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Target className="size-4 text-primary" /> {t(lang, "about.goalsTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{t(lang, "about.goals")}</CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </SiteLayout>
  );
}
