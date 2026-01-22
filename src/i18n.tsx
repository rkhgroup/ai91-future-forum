import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "ru" | "en";

type Dict = Record<string, { ru: string; en: string }>;

const dict: Dict = {
  logo: { ru: "AI91", en: "AI91" },

  nav_purpose: { ru: "Цели", en: "Мақсаты" },
  nav_challenges: { ru: "Вызовы", en: "Қиыншылықтар" },
  nav_solutions: { ru: "Польза", en: "Пайдасы" },
  nav_speakers: { ru: "Спикеры", en: "Спикерлер" },
  nav_tickets: { ru: "Участвовать", en: "Қатысу" },
  nav_faq: { ru: "FAQ", en: "FAQ" },

  cta_ticket: { ru: "Участвовать", en: "Қатысу" },

  lang_label: { ru: "Русский", en: "Қазақша" },
  lang_en: { ru: "Қазақша", en: "Қазақша" },
  lang_ru: { ru: "Русский", en: "Русский" },

  /* =========================
     HERO SECTION
  ========================= */

  hero_badge_date: {
    ru: "18 февраля 2026 • Астана",
    en: "18 ақпан 2026 • Астана",
  },
  hero_badge_forum: {
    ru: "Первый Республиканский Форум",
    en: "Бірінші Республикалық форум",
  },

  hero_h1_prefix: {
    ru: "AI91:",
    en: "AI91:",
  },
  hero_h1_line1: {
    ru: "трансформация",
    en: "мектепті басқаруды",
  },
  hero_h1_line2: {
    ru: "школьного управления",
    en: "түрлендіру",
  },
  hero_h1_line3a: {
    ru: "в",
    en: "ЖИ",
  },
  hero_h1_line3b: {
    ru: "эпоху ИИ",
    en: "дәуірінде",
  },

  hero_sub: {
    ru: "Форум для лидеров образования: практические решения и управленческие стратегии внедрения ИИ в школе",
    en: "Білім беру көшбасшыларына арналған форум: мектепте ЖИ енгізудің практикалық шешімдері мен басқарушылық стратегиялары",
  },

  hero_cta_primary: {
    ru: "Участвовать",
    en: "Қатысу",
  },
  hero_cta_secondary: {
    ru: "Программа форума",
    en: "Форум бағдарламасы",
  },

  hero_org_label: {
    ru: "Организаторы",
    en: "Ұйымдастырушылар",
  },
  hero_org_amansultan: {
    ru: "Образовательная инициатива",
    en: "Білім беру бастамасы",
  },
  hero_org_school_title: {
    ru: "Школа-гимназия №91",
    en: "№91 мектеп-гимназиясы",
  },
  hero_org_school_sub: {
    ru: "г. Астана",
    en: "Астана қ.",
  },
  hero_org_uo_title: {
    ru: "Управление образования",
    en: "Білім басқармасы",
  },
  hero_org_uo_sub: {
    ru: "г. Астана",
    en: "Астана қ.",
  },

  hero_stat_1: {
    ru: "участников",
    en: "қатысушы",
  },
  hero_stat_2: {
    ru: "международных и казахстанских спикеров",
    en: "халықаралық және қазақстандық спикер",
  },
  hero_stat_3: {
    ru: "день полного погружения в ИИ",
    en: "ЖИ-ға толық бір күндік шому",
  },
};


type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const saved = localStorage.getItem("ai91_lang") as Lang | null;
    if (saved === "ru" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("ai91_lang", l);
    document.documentElement.lang = l;
  };

  const value = useMemo<I18nValue>(() => {
    return {
      lang,
      setLang,
      t: (key) => dict[key][lang],
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}