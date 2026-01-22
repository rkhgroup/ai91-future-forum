import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/i18n";

const Header = () => {
  const { lang, setLang, t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  const navLinks = useMemo(
    () => [
      { label: t("nav_purpose"), href: "#purpose" },
      { label: t("nav_solutions"), href: "#benefits" },
      { label: t("nav_challenges"), href: "#challenges" },
      { label: t("nav_speakers"), href: "#speakers" },
      { label: t("nav_tickets"), href: "#tickets" },
      { label: t("nav_faq"), href: "#faq" },
    ],
    [t]
  );

  // close dropdown on outside click / escape
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // header background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="relative container mx-auto px-4 md:px-6">
        <nav className="flex items-center h-16 md:h-20">
          {/* LEFT — Logo */}
          <a href="#" className="flex items-center gap-2 z-10">
            <span className="text-2xl font-display font-bold text-gradient-gold">
              AI91
            </span>
          </a>

          {/* CENTER — Navigation */}
          <div
            className={[
              "hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8",
              "px-8 py-3 rounded-full ring-1 shadow-sm transition-all duration-300",
              // делаем фон менее прозрачным на hero и ещё чуть плотнее при скролле
              scrolled
                ? "bg-white/70 backdrop-blur-xl ring-white/25"
                : "bg-white/55 backdrop-blur-lg ring-white/18",
            ].join(" ")}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* RIGHT — Language + CTA */}
          <div className="ml-auto hidden md:flex items-center gap-4 z-10">
            {/* Language switcher */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className={[
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition",
                  "ring-1 shadow-sm",
                  // тоже делаем менее прозрачным
                  scrolled
                    ? "bg-white/70 backdrop-blur-xl ring-white/25 hover:bg-white/80"
                    : "bg-white/55 backdrop-blur-lg ring-white/18 hover:bg-white/65",
                ].join(" ")}
              >
                <Globe className="h-4 w-4" />
                {lang === "ru" ? "Русский" : "Қазақша"}
                <ChevronDown className="h-4 w-4 opacity-70" />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white/90 backdrop-blur-xl ring-1 ring-white/22 shadow-lg overflow-hidden">
                  <button
                    className="w-full text-left px-4 py-3 text-sm hover:bg-black/5"
                    onClick={() => {
                      setLang("ru");
                      setLangOpen(false);
                    }}
                  >
                    Русский
                  </button>
                  <button
                    className="w-full text-left px-4 py-3 text-sm hover:bg-black/5"
                    onClick={() => {
                      setLang("en");
                      setLangOpen(false);
                    }}
                  >
                    Қазақша
                  </button>
                </div>
              )}
            </div>

            {/* CTA */}
            <Button variant="gold" size="lg">
              {t("cta_ticket")}
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden ml-auto p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
