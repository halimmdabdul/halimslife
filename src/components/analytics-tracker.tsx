"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { createBrowserSupabaseClient } from "@/lib/supabase/browser";

const sessionStorageKey = "halim-analytics-session";
const ignoredPaths = ["/admin", "/supabase-status"];

type AnalyticsEvent = {
  event_type: "page_view" | "click";
  path: string;
  target?: string;
  label?: string;
  referrer?: string;
  session_id: string;
  metadata: Record<string, string>;
};

function cleanText(value: string | null | undefined, limit: number) {
  return value?.replace(/\s+/g, " ").trim().slice(0, limit) || undefined;
}

function getSessionId() {
  const existing = window.localStorage.getItem(sessionStorageKey);

  if (existing) {
    return existing;
  }

  const sessionId = window.crypto.randomUUID();
  window.localStorage.setItem(sessionStorageKey, sessionId);
  return sessionId;
}

function getPath() {
  return `${window.location.pathname}${window.location.search}`.slice(0, 500);
}

function getReferrer() {
  if (!document.referrer) {
    return undefined;
  }

  try {
    const url = new URL(document.referrer);
    return `${url.hostname}${url.pathname}`.slice(0, 500);
  } catch {
    return cleanText(document.referrer, 500);
  }
}

function getMetadata() {
  const parameters = new URLSearchParams(window.location.search);
  const metadata: Record<string, string> = {
    device: window.matchMedia("(max-width: 700px)").matches
      ? "mobile"
      : "desktop",
    language: document.documentElement.lang || navigator.language,
  };

  for (const key of ["utm_source", "utm_medium", "utm_campaign"]) {
    const value = cleanText(parameters.get(key), 120);
    if (value) metadata[key] = value;
  }

  return metadata;
}

async function submitEvent(event: AnalyticsEvent) {
  try {
    const supabase = createBrowserSupabaseClient();
    await supabase.from("analytics_events").insert(event);
  } catch {
    // Analytics must never interrupt navigation or the user experience.
  }
}

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      navigator.doNotTrack === "1" ||
      ignoredPaths.some((path) => pathname.startsWith(path))
    ) {
      return;
    }

    const timeout = window.setTimeout(() => {
      void submitEvent({
        event_type: "page_view",
        path: getPath(),
        referrer: getReferrer(),
        session_id: getSessionId(),
        metadata: getMetadata(),
      });
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    function trackClick(event: MouseEvent) {
      if (
        navigator.doNotTrack === "1" ||
        ignoredPaths.some((path) => window.location.pathname.startsWith(path))
      ) {
        return;
      }

      const element = (event.target as HTMLElement | null)?.closest<
        HTMLElement
      >("a, button, [data-analytics]");

      if (!element) {
        return;
      }

      const link = element instanceof HTMLAnchorElement ? element : null;
      const target =
        cleanText(element.dataset.analytics, 500) ||
        cleanText(link?.href ? new URL(link.href).pathname : undefined, 500) ||
        cleanText(element.id || element.getAttribute("name"), 500) ||
        element.tagName.toLowerCase();

      void submitEvent({
        event_type: "click",
        path: getPath(),
        target,
        label:
          cleanText(element.getAttribute("aria-label"), 160) ||
          cleanText(element.textContent, 160),
        session_id: getSessionId(),
        metadata: getMetadata(),
      });
    }

    document.addEventListener("click", trackClick, { capture: true });
    return () =>
      document.removeEventListener("click", trackClick, { capture: true });
  }, []);

  return null;
}
