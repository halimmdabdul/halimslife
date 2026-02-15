import * as React from "react";

export type Lang = "bn" | "en" | "ja";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  defaultLang = "bn",
}: {
  children: React.ReactNode;
  defaultLang?: Lang;
}) {
  const [lang, setLangState] = React.useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved === "bn" || saved === "en" || saved === "ja") return saved;

    // Basic browser hint fallback
    const nav = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "";
    if (nav.startsWith("ja")) return "ja";
    if (nav.startsWith("en")) return "en";
    return defaultLang;
  });

  React.useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
