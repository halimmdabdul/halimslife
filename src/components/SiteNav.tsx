// Design North Star (Minimal Tech-Editorial)
// - Soft white/gray canvas + powder-blue accents
// - Bengali-first typography (Anek Bangla display, Hind Siliguri body)
// - Crisp borders, subtle shadows, generous whitespace
// - Smooth but restrained motion; focus on clarity

import { Link, useLocation } from "wouter";
import { Menu, Moon, Sun } from "lucide-react";
import profileImg from "@/assets/profile-small.webp";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/strings";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

const nav = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/blog", key: "nav.blog" },
  { href: "/resources", key: "nav.resources" },
  { href: "/contact", key: "nav.contact" },
] as const;

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const [loc] = useLocation();
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
      {nav.map((item) => {
        const active = loc === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              active ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            )}
          >
            {t(lang, item.key)}
          </Link>
        );
      })}
    </div>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="hidden md:inline-flex">
          {t(lang, "nav.lang")}: {t(lang, `lang.${lang}`)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang("bn")}>{t(lang, "lang.bn")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("en")}>{t(lang, "lang.en")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("ja")}>{t(lang, "lang.ja")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function SiteNav() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-sidebar/75 backdrop-blur supports-[backdrop-filter]:bg-sidebar/55">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="size-9 overflow-hidden rounded-full border border-border bg-card shadow-sm">
            <img src={profileImg} alt="Halim" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-extrabold tracking-tight">Halim</div>
            <div className="text-xs text-muted-foreground">{t(lang, "brand.tagline")}</div>
          </div>
        </Link>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={t(lang, "nav.themeToggle")}
            className="hidden md:inline-flex"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label={t(lang, "nav.menu")}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle className="font-display">{t(lang, "nav.menu")}</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-3">
                <NavLinks />

                <div className="grid gap-2">
                  <div className="text-xs font-medium text-muted-foreground">{t(lang, "nav.lang")}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant={lang === "bn" ? "default" : "outline"} onClick={() => setLang("bn")} className="flex-1">
                      {t(lang, "lang.bn")}
                    </Button>
                    <Button size="sm" variant={lang === "en" ? "default" : "outline"} onClick={() => setLang("en")} className="flex-1">
                      {t(lang, "lang.en")}
                    </Button>
                    <Button size="sm" variant={lang === "ja" ? "default" : "outline"} onClick={() => setLang("ja")} className="flex-1">
                      {t(lang, "lang.ja")}
                    </Button>
                  </div>
                </div>

                <Button variant="outline" onClick={toggleTheme} className="justify-start">
                  {theme === "dark" ? (
                    <>
                      <Sun className="mr-2 size-4" /> Light
                    </>
                  ) : (
                    <>
                      <Moon className="mr-2 size-4" /> Dark
                    </>
                  )}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
