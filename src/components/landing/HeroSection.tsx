import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";

const HeroSection = () => {
  const { t } = useI18n();

  const organizers = useMemo(
    () => [
      { title: "Amansultan", subtitle: t("hero_org_amansultan") },
      { title: t("hero_org_school_title"), subtitle: t("hero_org_school_sub") },
      { title: t("hero_org_uo_title"), subtitle: t("hero_org_uo_sub") },
    ],
    [t]
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible pt-32 bg-transparent">
      {/* BACKGROUND STACK */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/hero/earth.jpg"
          alt=""
          draggable={false}
          className="w-full h-full object-cover select-none"
          style={{ opacity: 1 }}
        />
      </div>

      {/* DARK OVERLAY (readability) */}
      <div className="absolute inset-0 pointer-events-none hero-dark-overlay z-10" />

      {/* CONTENT */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badges row */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
<span className="inline-flex items-center gap-2 rounded-full
  bg-primary/10 px-5 py-2 text-sm font-semibold
  ring-1 ring-primary/20 shadow-sm backdrop-blur-sm
  text-white/90">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {t("hero_badge_date")}
            </span>
<span className="inline-flex items-center gap-2 rounded-full
  bg-primary/10 px-5 py-2 text-sm font-semibold
  ring-1 ring-primary/20 shadow-sm backdrop-blur-sm
  text-white/90">
              {t("hero_badge_forum")}
            </span>
          </div>

          {/* Headline */}
          <div className="relative mb-12">
            <h1 className="relative font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08]">
              <span className="text-white/90">{t("hero_h1_prefix")}</span>{" "}
              <span className="hero-wave-text">{t("hero_h1_line1")}</span>
              <br />
              <span className="text-white/90">{t("hero_h1_line2")}</span>
              <br />
              <span className="text-white/90">{t("hero_h1_line3a")}</span>{" "}
              <span className="hero-wave-text">{t("hero_h1_line3b")}</span>
            </h1>
          </div>

          {/* Subheadline */}
<p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
            {t("hero_sub")}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="gold" size="xl" className="group">
              {t("hero_cta_primary")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="goldOutline" size="xl">
              {t("hero_cta_secondary")}
            </Button>
          </div>

          {/* Organizers marquee */}
          <div className="relative max-w-4xl mx-auto">
<p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
              {t("hero_org_label")}
            </p>

            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />

              <div className="flex gap-6 animate-organizers-marquee hover:[animation-play-state:paused] will-change-transform">
                {[...organizers, ...organizers].map((org, index) => (
                  <div
                    key={index}
                    className="min-w-[240px] premium-card px-6 py-4 text-center bg-card/70 backdrop-blur-sm border border-primary/10 shadow-sm"
                  >
                    <div className="font-semibold text-foreground">{org.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {org.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

{/* Stats */}
<div className="mt-20 pb-20 w-full">
  <div className="grid w-full grid-cols-[1fr_auto_1fr] items-start">
    {/* LEFT */}
    <div className="justify-self-start">
      <Stat value="250+" label={t("hero_stat_1")} />
    </div>

    {/* CENTER (100% строго по центру) */}
    <div className="justify-self-center translate-x-[-50px]">
      <Stat value="10+" label={t("hero_stat_2")} />
    </div>

    {/* RIGHT */}
    <div className="justify-self-end">
      <Stat value="1" label={t("hero_stat_3")} />
    </div>
  </div>
</div>

        </div>
      </div>

      <style>{`
        .hero-dark-overlay{
          background:
            radial-gradient(900px 720px at 50% 35%,
              rgba(0,0,0,0.55) 0%,
              rgba(0,0,0,0.42) 45%,
              rgba(0,0,0,0.28) 70%,
              rgba(0,0,0,0.18) 100%),
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.58) 0%,
              rgba(0,0,0,0.42) 40%,
              rgba(0,0,0,0.30) 70%,
              rgba(0,0,0,0.40) 100%
            );
        }

        .hero-wave-text{
          display: inline-block;
          position: relative;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          background-image: linear-gradient(
            120deg,
            rgba(79,141,246,0.75) 0%,
            rgba(110,163,255,1.00) 20%,
            rgba(155,188,255,0.95) 35%,
            rgba(110,163,255,1.00) 50%,
            rgba(79,141,246,0.80) 70%,
            rgba(155,188,255,0.90) 85%,
            rgba(79,141,246,0.75) 100%
          );
          background-size: 320% 120%;
          background-position: 0% 55%;
          background-repeat: no-repeat;
          will-change: background-position, filter;
          animation: hero-wave 6.8s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(79,141,246,0.18));
        }

        .hero-wave-text::after{
          content: "";
          position: absolute;
          inset: -8%;
          pointer-events: none;
          background: linear-gradient(
            110deg,
            transparent 0%,
            rgba(255,255,255,0.00) 35%,
            rgba(255,255,255,0.18) 45%,
            rgba(255,255,255,0.00) 55%,
            transparent 100%
          );
          transform: translateX(-120%);
          mix-blend-mode: screen;
          opacity: 0.55;
          -webkit-mask-image: linear-gradient(#000, #000);
          mask-image: linear-gradient(#000, #000);
          animation: hero-shine 7.8s ease-in-out infinite;
        }

        @keyframes hero-wave{
          0%   { background-position: 0% 55%; filter: drop-shadow(0 0 10px rgba(79,141,246,0.16)); }
          50%  { background-position: 100% 60%; filter: drop-shadow(0 0 14px rgba(79,141,246,0.22)); }
          100% { background-position: 0% 55%; filter: drop-shadow(0 0 10px rgba(79,141,246,0.16)); }
        }

        @keyframes hero-shine{
          0%   { transform: translateX(-140%); opacity: 0; }
          15%  { opacity: 0.55; }
          45%  { opacity: 0.55; }
          60%  { transform: translateX(140%); opacity: 0; }
          100% { transform: translateX(140%); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce){
          .hero-wave-text{ animation: none !important; background-position: 50% 55%; }
          .hero-wave-text::after{ animation: none !important; opacity: 0 !important; }
        }

        .hero-section-blend {
          background: linear-gradient(
            to bottom,
            rgba(15, 18, 25, 0) 0%,
            rgba(15, 18, 25, 0.35) 35%,
            rgba(15, 18, 25, 0.75) 65%,
            rgba(248, 250, 252, 1) 100%
          );
        
        }

      `}</style>
      {/* HERO → NEXT SECTION BLEND */}
      <div className="absolute inset-x-0 bottom-0 h-[50px] pointer-events-none hero-section-blend z-30" />
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="w-[260px] grid grid-rows-[auto_auto] text-center">
    <div className="h-[72px] flex items-end justify-center">
      <span className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-gradient-gold leading-none">
        {value}
      </span>
    </div>
    <div className="h-[40px] flex items-start justify-center">
      <span className="text-sm sm:text-base text-white/70 whitespace-nowrap">
        {label}
      </span>
    </div>
  </div>
);

const Divider = () => (
  <div
    className="
      hidden md:block
      h-14 w-px
      bg-gradient-to-b
      from-transparent
      via-white/25
      to-transparent
    "
  />
);


export default HeroSection;
