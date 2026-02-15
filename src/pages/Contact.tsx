import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Github, GraduationCap, Linkedin, Mail, Youtube } from "lucide-react";

import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

import { site } from "@/content/site";
import profileImg from "@/assets/profile.webp";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/strings";

type FormValues = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export default function Contact() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = `${t(lang, "contact.title")} — Halim`;
  }, [lang]);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t(lang, "form.nameMin")),
        email: z.string().email(t(lang, "form.emailInvalid")),
        topic: z.string().min(3, t(lang, "form.topicMin")),
        message: z.string().min(10, t(lang, "form.messageMin")),
      }),
    [lang]
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", topic: "", message: "" },
  });

  function openMail(values: FormValues) {
    const to = site.email;
    if (!to || to.includes("example.com")) {
      toast.error(t(lang, "toast.contactEmailMissing"));
      return;
    }
    const subject = encodeURIComponent(`[Website] ${values.topic}`);
    const body = encodeURIComponent(
      `${t(lang, "contact.name")}: ${values.name}\n${t(lang, "contact.email")}: ${values.email}\n\n${values.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  const socials = [
    { label: "Google Scholar", icon: GraduationCap, href: site.socials.scholar },
    { label: "YouTube", icon: Youtube, href: site.socials.youtube },
    { label: "LinkedIn", icon: Linkedin, href: site.socials.linkedin },
    { label: "GitHub", icon: Github, href: site.socials.github },
  ];

  function onSubmit(values: FormValues) {
    toast.success(t(lang, "toast.emailDraft"));
    openMail(values);
  }

  function subscribe(email: string) {
    const e = email.trim();
    if (!e) return;
    try {
      localStorage.setItem("newsletter:email", e);
      toast.success(t(lang, "toast.subscribedDemo"));
    } catch {
      toast.error(t(lang, "toast.saveFailed"));
    }
  }

  return (
    <SiteLayout>
      <div className="mb-8 grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm md:grid-cols-12">
        <div className="md:col-span-9">
          <h1 className="font-display text-4xl font-extrabold tracking-tight">{t(lang, "contact.title")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t(lang, "contact.desc")}</p>
        </div>
        <div className="md:col-span-3 md:flex md:justify-end">
          <div className="flex items-center gap-3 md:flex-col md:items-end">
            <div className="size-16 overflow-hidden rounded-2xl border border-border bg-muted/20">
              <img src={profileImg} alt="Halim" className="h-full w-full object-cover" />
            </div>
            <div className="text-sm text-muted-foreground md:text-right">
              Japan • Robotics • CV
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-12">
        <section className="md:col-span-7">
          <Card>
            <CardHeader>
              <CardTitle className="font-display">{t(lang, "contact.form")}</CardTitle>
              <CardDescription>{t(lang, "contact.formDesc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">{t(lang, "contact.name")}</label>
                  <Input {...form.register("name")} placeholder={t(lang, "form.placeholderName")} />
                  {form.formState.errors.name && (
                    <div className="text-xs text-destructive">{form.formState.errors.name.message}</div>
                  )}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium">{t(lang, "contact.email")}</label>
                  <Input {...form.register("email")} placeholder={t(lang, "form.placeholderEmail")} />
                  {form.formState.errors.email && (
                    <div className="text-xs text-destructive">{form.formState.errors.email.message}</div>
                  )}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium">{t(lang, "contact.topic")}</label>
                  <Input {...form.register("topic")} placeholder={t(lang, "form.placeholderTopic")} />
                  {form.formState.errors.topic && (
                    <div className="text-xs text-destructive">{form.formState.errors.topic.message}</div>
                  )}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium">{t(lang, "contact.message")}</label>
                  <Textarea {...form.register("message")} rows={6} placeholder={t(lang, "form.placeholderMessage")} />
                  {form.formState.errors.message && (
                    <div className="text-xs text-destructive">{form.formState.errors.message.message}</div>
                  )}
                </div>

                <Button type="submit" className="gap-2">
                  <Mail className="size-4" /> {t(lang, "contact.send")}
                </Button>

                <div className="text-xs text-muted-foreground">
                  {t(lang, "contact.tip")} <code className="rounded bg-muted px-1">src/content/site.ts</code>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        <aside className="md:col-span-5">
          <div className="sticky top-24 grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">{t(lang, "contact.social")}</CardTitle>
                <CardDescription>{t(lang, "contact.socialDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm transition-colors hover:bg-accent"
                  >
                    <div className="flex items-center gap-2">
                      <s.icon className="size-4 text-primary" /> {s.label}
                    </div>
                    <span className="text-xs text-muted-foreground">open</span>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-display">{t(lang, "contact.newsletter")}</CardTitle>
                <CardDescription>{t(lang, "contact.newsletterDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                <Input
                  placeholder={t(lang, "form.placeholderEmail")} data-newsletter-email="1"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      subscribe((e.target as HTMLInputElement).value);
                    }
                  }}
                />
                <Button
                  variant="outline"
                  onClick={() => {
                    const el = document.querySelector<HTMLInputElement>("input[data-newsletter-email='1']");
                    subscribe(el?.value ?? "");
                  }}
                >
                  {t(lang, "contact.subscribe")}
                </Button>
                <div className="text-xs text-muted-foreground">{t(lang, "popup.demo")}</div>
              </CardContent>
            </Card>

            <Separator />

            <div className="rounded-2xl border border-border bg-muted/20 p-5 text-sm text-muted-foreground">
              <div className="font-display text-base font-bold text-foreground">ফিডব্যাক ওয়েলকাম</div>
              <div className="mt-2">আপনি কোন টপিক/লেভেল নিয়ে কনটেন্ট চান — জানালে আমি প্ল্যান করতে পারব।</div>
            </div>
          </div>
        </aside>
      </div>
    </SiteLayout>
  );
}
