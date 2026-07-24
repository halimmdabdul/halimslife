"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type SiteLanguage = "bn" | "en" | "ja";
type SiteTheme = "light" | "dark";

type SitePreferencesValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  theme: SiteTheme;
  toggleTheme: () => void;
};

const SitePreferencesContext = createContext<SitePreferencesValue | null>(null);

const languageLabels: Record<SiteLanguage, string> = {
  bn: "বাংলা",
  en: "English",
  ja: "日本語",
};

export function SitePreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<SiteLanguage>("bn");
  const [theme, setTheme] = useState<SiteTheme>("light");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedLanguage = window.localStorage.getItem("halim-language");
      const savedTheme = window.localStorage.getItem("halim-theme");
      const initialLanguage =
        savedLanguage === "en" || savedLanguage === "ja" ? savedLanguage : "bn";
      const initialTheme =
        savedTheme === "dark" ||
        (savedTheme !== "light" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
          ? "dark"
          : "light";

      setLanguageState(initialLanguage);
      setTheme(initialTheme);
      document.documentElement.lang = initialLanguage;
      document.documentElement.dataset.theme = initialTheme;
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function setLanguage(nextLanguage: SiteLanguage) {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("halim-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("halim-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  return (
    <SitePreferencesContext.Provider
      value={{ language, setLanguage, theme, toggleTheme }}
    >
      {children}
    </SitePreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const value = useContext(SitePreferencesContext);

  if (!value) {
    throw new Error(
      "useSitePreferences must be used inside SitePreferencesProvider",
    );
  }

  return value;
}

export function TranslatedText({
  bn,
  en,
  ja,
}: Record<SiteLanguage, ReactNode>) {
  const { language } = useSitePreferences();
  return <>{language === "bn" ? bn : language === "en" ? en : ja}</>;
}

export function SiteControls() {
  const { language, setLanguage, theme, toggleTheme } = useSitePreferences();

  return (
    <div className="site-controls" aria-label="Site preferences">
      <label className="language-control">
        <span className="sr-only">Language</span>
        <select
          aria-label="Language"
          value={language}
          onChange={(event) =>
            setLanguage(event.target.value as SiteLanguage)
          }
        >
          {(Object.keys(languageLabels) as SiteLanguage[]).map((code) => (
            <option key={code} value={code}>
              {languageLabels[code]}
            </option>
          ))}
        </select>
      </label>
      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        title={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
      </button>
    </div>
  );
}
