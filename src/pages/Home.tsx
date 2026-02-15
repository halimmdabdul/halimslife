import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowRight, BookOpen, Code2, Compass, Pencil, Sparkles, NotebookPen, GraduationCap, ScrollText, Crown, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import slide1 from "@/assets/hero/slide-1.jpeg";
import slide2 from "@/assets/hero/slide-2.jpeg";
import slide3 from "@/assets/hero/slide-3.jpeg";
import slide4 from "@/assets/hero/slide-4.jpeg";
import slide5 from "@/assets/hero/slide-5.jpeg";
import profileImg from "@/assets/profile-small.webp";
import { categoryMeta, getFeaturedPosts } from "@/content/posts";
import { site } from "@/content/site";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/strings";
import { pick } from "@/i18n/helpers";
import { cn } from "@/lib/utils";

function SectionTitle({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-display text-2xl font-bold tracking-tight">{title}</h2>
      {desc ? <p className="text-sm text-muted-foreground">{desc}</p> : null}
    </div>
  );
}

function HeroSlider({
  slides,
  onIndexChange,
}: {
  slides: { title: string; desc: string; bg: string }[];
  onIndexChange?: (index: number) => void;
}) {
  const [api, setApi] = useState<any>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      const i = api.selectedScrollSnap();
      setIndex(i);
      onIndexChange?.(i);
    };
    onSelect();
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => {
      api.scrollNext();
    }, 4200);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={i}>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
                  {s.title}
                </h1>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">{s.desc}</p>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-4 flex gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-6 rounded-full transition-colors",
              i === index ? "bg-primary" : "bg-border"
            )}
          />
        ))}
      </div>
    </div>
  );
}

type QuickContactValues = {
  name: string;
  email: string;
  message: string;
};

export default function Home() {
  useEffect(() => {
    document.title = "Halim — Japan • Robotics • Computer Vision";
  }, []);

  const featured = getFeaturedPosts(3);
  const { lang } = useLanguage();
  const [heroIndex, setHeroIndex] = useState(0);

  const quickSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t(lang, "form.nameMin")),
        email: z.string().email(t(lang, "form.emailInvalid")),
        message: z.string().min(10, t(lang, "form.messageMin")),
      }),
    [lang]
  );

  const quickForm = useForm<QuickContactValues>({
    resolver: zodResolver(quickSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function openMail(values: QuickContactValues) {
    const to = site.email;
    if (!to || to.includes("example.com")) {
      toast.error(t(lang, "toast.contactEmailMissing"));
      return;
    }
    const subject = encodeURIComponent("[Website] Quick message");
    const body = encodeURIComponent(
      `${t(lang, "contact.name")}: ${values.name}\n${t(lang, "contact.email")}: ${values.email}\n\n${values.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  function onQuickSubmit(values: QuickContactValues) {
    toast.success(t(lang, "toast.emailDraft"));
    openMail(values);
    quickForm.reset();
  }

  const slides = [
    { bg: slide1, i: 1 },
    { bg: slide2, i: 2 },
    { bg: slide3, i: 3 },
    { bg: slide4, i: 4 },
    { bg: slide5, i: 5 },
  ].map((s) => ({
    bg: s.bg,
    title: t(lang, `home.slider.${s.i}.title`),
    desc: t(lang, `home.slider.${s.i}.desc`),
  }));

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="absolute inset-0">
          <img src={slides[heroIndex]?.bg} alt="Japan + Robotics" className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        </div>

        <div className="relative grid gap-10 p-8 md:grid-cols-5 md:p-12">
          <div className="md:col-span-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="size-10 overflow-hidden rounded-2xl border border-border bg-muted/20 shadow-sm">
                <img src={profileImg} alt="Halim" className="h-full w-full object-cover" />
              </div>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/10">{t(lang, "home.badge")}</Badge>
            </div>
            <div className="mt-5 max-w-xl">
              <HeroSlider slides={slides} onIndexChange={setHeroIndex} />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/blog">
                <Button className="gap-2">
                  {t(lang, "home.cta.blog")} <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link href="/blog?cat=japanese">
                <Button variant="outline" className="gap-2">
                  {t(lang, "home.cta.jp")} <BookOpen className="size-4" />
                </Button>
              </Link>
              <Link href="/blog?cat=programming">
                <Button variant="outline" className="gap-2">
                  {t(lang, "home.cta.prog")} <Code2 className="size-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Card className="bg-background/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{t(lang, "home.stat.location")}</CardTitle>
                  <CardDescription>জাপান</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-background/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{t(lang, "home.stat.job")}</CardTitle>
                  <CardDescription>ইঞ্জিনিয়ার</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-background/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{t(lang, "home.stat.focus")}</CardTitle>
                  <CardDescription>Robotics • CV</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card className="bg-background/75">
              <CardHeader>
                <CardTitle className="font-display">{t(lang, "home.box.title")}</CardTitle>
                <CardDescription>{t(lang, "home.box.desc")}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {(
                  ["japanese", "programming", "eng-life", "japan-life", "career"] as const
                ).map((key) => (
                  <Link
                    key={key}
                    href={`/blog?cat=${key}`}
                    className="group rounded-xl border border-border bg-card/50 p-4 transition-colors hover:bg-accent"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold leading-tight">{pick(lang, categoryMeta[key].label as any)}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{pick(lang, categoryMeta[key].description as any)}</div>
                      </div>
                      <Compass className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="my-10">
        <Separator />
      </div>

      {/* Featured posts */}
      <section>
        <div className="flex items-end justify-between gap-4">
          <SectionTitle title={t(lang, "home.featured.title")} desc={t(lang, "home.featured.desc")} />
          <Link href="/blog">
            <Button variant="ghost" className="gap-2">
              {t(lang, "home.featured.all")} <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{pick(lang, categoryMeta[p.category].label as any)}</Badge>
                    <span className="text-xs text-muted-foreground">{p.readingMinutes} min</span>
                  </div>
                  <CardTitle className="mt-2 font-display leading-tight">{pick(lang, p.title as any)}</CardTitle>
                  <CardDescription className="mt-2">{pick(lang, p.excerpt as any)}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Projects preview */}
      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <SectionTitle title={t(lang, "home.projects.title")} desc={t(lang, "home.projects.desc")} />
          <Link href="/resources">
            <Button variant="ghost" className="gap-2">
              {t(lang, "home.projects.all")} <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {([
            {
              key: 1,
              href: "https://kanastory.halimslife.com/",
              Icon: Pencil,
              accent: "bg-primary/10 text-primary",
              tags: ["home.projects.1.tag1", "home.projects.1.tag2"],
            },
            {
              key: 2,
              href: "https://n5.halimslife.com/",
              Icon: NotebookPen,
              accent: "bg-primary/10 text-primary",
              tags: ["home.projects.2.tag1", "home.projects.2.tag2"],
            },
            {
              key: 3,
              href: "https://n4.halimslife.com/",
              Icon: GraduationCap,
              accent: "bg-primary/10 text-primary",
              tags: ["home.projects.3.tag1", "home.projects.3.tag2"],
            },
            {
              key: 4,
              href: "https://n3.halimslife.com/",
              Icon: Sparkles,
              accent: "bg-primary/10 text-primary",
              tags: ["home.projects.4.tag1", "home.projects.4.tag2"],
            },
            {
              key: 5,
              href: "https://github.com/",
              Icon: Github,
              accent: "bg-primary/10 text-primary",
              tags: ["home.projects.5.tag1", "home.projects.5.tag2"],
            },
          ] as const).map((p, idx) => (
            <motion.a
              key={p.key}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full overflow-hidden transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        {p.tags.map((k) => (
                          <Badge key={k} variant="secondary">
                            {t(lang, k)}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="mt-3 font-display text-xl leading-tight">
                        {t(lang, `home.projects.${p.key}.title`)}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {t(lang, `home.projects.${p.key}.desc`)}
                      </CardDescription>
                    </div>

                    <motion.div
                      className={`rounded-2xl ${p.accent} p-3`}
                      animate={{ rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <p.Icon className="size-6" />
                    </motion.div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xs text-muted-foreground">
                      {p.href.replace("https://", "").replace("http://", "")}
                    </span>
                    <Button size="sm" variant="outline" className="gap-2">
                      {t(lang, "home.projects.view")} <ExternalLink className="size-4" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Quick contact */}
      <section className="mt-12">
        <Card className="overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-1">
                <h3 className="font-display text-2xl font-bold tracking-tight">{t(lang, "home.quickContact.title")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(lang, "home.quickContact.desc")}</p>
              </div>

              <div className="md:col-span-2">
                <form onSubmit={quickForm.handleSubmit(onQuickSubmit)} className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">{t(lang, "contact.name")}</label>
                      <Input {...quickForm.register("name")} placeholder={t(lang, "form.placeholderName")} />
                      {quickForm.formState.errors.name && (
                        <div className="text-xs text-destructive">{quickForm.formState.errors.name.message}</div>
                      )}
                    </div>

                    <div className="grid gap-2">
                      <label className="text-sm font-medium">{t(lang, "contact.email")}</label>
                      <Input {...quickForm.register("email")} placeholder={t(lang, "form.placeholderEmail")} />
                      {quickForm.formState.errors.email && (
                        <div className="text-xs text-destructive">{quickForm.formState.errors.email.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <label className="text-sm font-medium">{t(lang, "contact.message")}</label>
                    <Textarea
                      {...quickForm.register("message")}
                      rows={5}
                      placeholder={t(lang, "form.placeholderMessage")}
                    />
                    {quickForm.formState.errors.message && (
                      <div className="text-xs text-destructive">{quickForm.formState.errors.message.message}</div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-muted-foreground">{t(lang, "home.quickContact.note")}</div>
                    <Button type="submit" className="gap-2">
                      {t(lang, "home.quickContact.send")} <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <Card className="overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="font-display text-2xl font-bold tracking-tight">{t(lang, "home.learn.title")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(lang, "home.learn.desc")}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/resources">
                  <Button variant="outline" className="w-full justify-between">
                    {t(lang, "home.learn.resources")} <ArrowRight className="size-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="w-full justify-between">
                    {t(lang, "home.learn.contact")} <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Japanese learning hub */}
      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <SectionTitle title={t(lang, "home.hub.title")} desc={t(lang, "home.hub.desc")} />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {([
            {
              key: "kana",
              titleKey: "home.hub.kana",
              descKey: "home.hub.kanaDesc",
              href: "https://kanastory.halimslife.com/",
              Icon: Pencil,
              accent: "bg-primary/10 text-primary",
            },
            {
              key: "n5",
              titleKey: "home.hub.n5",
              descKey: "home.hub.n5Desc",
              href: "https://n5.halimslife.com/",
              Icon: NotebookPen,
              accent: "bg-primary/10 text-primary",
            },
            {
              key: "n4",
              titleKey: "home.hub.n4",
              descKey: "home.hub.n4Desc",
              href: "https://n4.halimslife.com/",
              Icon: GraduationCap,
              accent: "bg-primary/10 text-primary",
            },
            {
              key: "n3",
              titleKey: "home.hub.n3",
              descKey: "home.hub.n3Desc",
              href: "https://n3.halimslife.com/",
              Icon: Sparkles,
              accent: "bg-primary/10 text-primary",
            },
            {
              key: "n2",
              titleKey: "home.hub.n2",
              descKey: "home.hub.n2Desc",
              href: "https://n2.halimslife.com/",
              Icon: ScrollText,
              accent: "bg-primary/10 text-primary",
            },
            {
              key: "n1",
              titleKey: "home.hub.n1",
              descKey: "home.hub.n1Desc",
              href: "https://n1.halimslife.com/",
              Icon: Crown,
              accent: "bg-primary/10 text-primary",
            },
          ] as const).map((item, idx) => (
            <motion.a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full overflow-hidden transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="font-display text-xl leading-tight">
                        {t(lang, item.titleKey)}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {t(lang, item.descKey)}
                      </CardDescription>
                      <div className="mt-3 text-xs text-muted-foreground">
                        {item.href.replace("https://", "")}
                      </div>
                    </div>

                    <motion.div
                      className={`rounded-2xl ${item.accent} p-3`}
                      animate={{ rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <item.Icon className="size-6" />
                    </motion.div>
                  </div>
                </CardHeader>
              </Card>
            </motion.a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
