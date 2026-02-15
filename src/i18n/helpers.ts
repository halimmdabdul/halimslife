import type { Lang } from "@/contexts/LanguageContext";

export interface L10nString {
  bn: string;
  en: string;
  ja: string;
}

export function pick(lang: Lang, s: L10nString) {
  return s[lang] ?? s.bn;
}
