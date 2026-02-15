// Design North Star (Minimal Tech-Editorial)
// Newsletter popup
// - Triggered on blog pages only
// - Respects user dismissal via localStorage
// - No backend: saves email locally (demo) + shows toast

import { useEffect, useMemo, useState } from "react";
import { Mail, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/strings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  storageKey?: string;
  delayMs?: number;
};

export default function NewsletterPopup({ storageKey = "newsletter:popup", delayMs = 12000 }: Props) {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");

  const keys = useMemo(
    () => ({
      dismissed: `${storageKey}:dismissed`,
      subscribed: `${storageKey}:subscribed`,
      savedEmail: "newsletter:email",
    }),
    [storageKey]
  );

  useEffect(() => {
    let timer: number | undefined;

    try {
      const dismissed = localStorage.getItem(keys.dismissed);
      const subscribed = localStorage.getItem(keys.subscribed);
      if (dismissed === "1" || subscribed === "1") return;

      timer = window.setTimeout(() => setOpen(true), delayMs);
    } catch {
      // if storage blocked, still allow showing once
      timer = window.setTimeout(() => setOpen(true), delayMs);
    }

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [delayMs, keys.dismissed, keys.subscribed]);

  function close(type: "dismiss" | "subscribed") {
    setOpen(false);
    try {
      localStorage.setItem(type === "dismiss" ? keys.dismissed : keys.subscribed, "1");
    } catch {
      // ignore
    }
  }

  function subscribe() {
    const e = email.trim();
    if (!e || !e.includes("@")) {
      toast.error(t(lang, "toast.invalidEmail"));
      return;
    }

    try {
      localStorage.setItem(keys.savedEmail, e);
      localStorage.setItem(keys.subscribed, "1");
    } catch {
      // ignore
    }

    toast.success(t(lang, "toast.subscribedDemo"));
    close("subscribed");
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) close("dismiss");
      }}
    >
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">{t(lang, "popup.title")}</DialogTitle>
        </DialogHeader>

        <div className="mt-2 grid gap-3">
          <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/20 p-4">
            <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary">
              <Sparkles className="size-4" />
            </div>
            <div>
              <div className="text-sm font-semibold">{t(lang, "popup.weekly")}</div>
              <div className="mt-1 text-sm text-muted-foreground">{t(lang, "popup.desc")}</div>
              <div className="mt-2 text-xs text-muted-foreground">{t(lang, "popup.demo")}</div>
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">{t(lang, "popup.email")}</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t(lang, "popup.emailPlaceholder")} />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button onClick={subscribe} className="gap-2">
              <Mail className="size-4" /> {t(lang, "popup.subscribe")} 
            </Button>
            <Button variant="outline" onClick={() => close("dismiss")}>
              {t(lang, "popup.notNow")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
