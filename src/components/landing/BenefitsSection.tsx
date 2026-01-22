import { useMemo } from "react";

const BenefitsSection = () => {
  const chips = useMemo(
    () => [
      "Практика, а не теория",
      "Готовые инструменты",
      "Сильные кейсы",
      "Новые связи",
      "ИИ-модель управления",
      "Минус рутина директора",
      "Сильная команда педагогов",
      "Конкурентоспособная школа",
      "Сообщество директоров",
      "Нетворкинг и партнёры",
      "Среда практиков",
      "Сертификат участника AI91",
    ],
    []
  );

  const leftList = useMemo(
    () => [
      <>
        выстроить{" "}
        <span className="font-semibold text-accent">современное управление</span>{" "}
        школой с применением ИИ
      </>,
      <>
        сократить{" "}
        <span className="font-semibold text-accent">
          административную нагрузку
        </span>{" "}
        и рутину директора
      </>,
      <>
        повысить эффективность{" "}
        <span className="font-semibold text-accent">
          педагогической команды
        </span>
      </>,
      <>
        сделать школу{" "}
        <span className="font-semibold text-accent">конкурентоспособной</span>{" "}
        и готовой к будущим требованиям
      </>,
    ],
    []
  );

  const rightList = useMemo(
    () => [
      "сообщество директоров-единомышленников и поддержку внедрения изменений",
      "нетворкинг с руководителями школ, экспертами и лидерами образовательных изменений",
      "среду практиков: решения и кейсы, которые можно применить сразу",
      "сертификат участника AI91 — подтверждение участия в профессиональной конференции",
    ],
    []
  );

  return (
    <section
      id="benefits"
      className="relative overflow-hidden pt-20 md:pt-20 pb-0 bg-background"
    >
      {/* ✅ TOP BRIDGE: goes UP over the seam to kill the line */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-[240px] benefits-top-bridge z-20" />

      {/* Light background */}
      <div className="absolute -inset-px pointer-events-none">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 light-grid opacity-[0.22]" />
        <div className="absolute inset-0 light-aurora opacity-[0.75]" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-16">
          <div
            className="
              inline-flex items-center gap-2 rounded-full px-4 py-2
              bg-background/60 backdrop-blur-md
              ring-1 ring-border/45 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.18)]
            "
          >
            <span className="relative h-2.5 w-2.5 rounded-full bg-primary">
              <span className="absolute inset-0 rounded-full bg-primary blur-[7px] opacity-60" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-foreground/90">
              Ключевые результаты для директора
            </span>
          </div>

          <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-foreground">
            Что вы <span className="text-gradient-gold">получите</span> на AI91
          </h2>

          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            Не «про ИИ в целом», а про конкретные шаги: как выстроить современное
            управление, убрать административную рутину, усилить педагогическую
            команду и сделать школу сильнее на рынке образования.
          </p>
        </div>

        {/* Dark glass card */}
        <div
          className="
            group relative max-w-5xl mx-auto mb-12 md:mb-14 overflow-hidden
            premium-card p-6 md:p-10
            bg-[#0B1220]/95 backdrop-blur-xl
            ring-1 ring-white/20
            shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]
            shadow-[0_24px_80px_-40px_rgba(0,0,0,0.55)]
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:shadow-[0_34px_110px_-54px_rgba(0,0,0,0.62)]
            hover:ring-white/20
            text-white/90
          "
        >
          <div className="pointer-events-none absolute inset-0 card-film" />

          <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-[0.20]" />
          <div className="pointer-events-none absolute inset-0 tech-corners-dark opacity-[0.65]" />
          <div className="pointer-events-none absolute inset-0 tech-scanline-dark opacity-[0.16]" />
          <div className="pointer-events-none absolute inset-0 benefit-card-sheen" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <div className="h-full rounded-3xl bg-white/8 backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.6)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-white">
                  Узнаете, как:
                </h3>
              </div>

              <ul className="space-y-2.5">
                {leftList.map((item, idx) => (
                  <li
                    key={idx}
                    className="
                      group/item flex gap-3 rounded-2xl
                      px-3 py-2.5
                      hover:bg-white/6
                      ring-1 ring-transparent hover:ring-white/10
                      transition-all
                    "
                  >
                    <span className="mt-[6px] marker-tech-dark" aria-hidden="true">
                      <span className="marker-dot" />
                      <span className="marker-glow" />
                    </span>
                    <span className="text-white/88 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-full rounded-3xl bg-white/8 backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.6)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-white">
                  Вы получите:
                </h3>
              </div>

              <ul className="space-y-2.5">
                {rightList.map((text, idx) => (
                  <li
                    key={idx}
                    className="
                      group/item flex gap-3 rounded-2xl
                      px-3 py-2.5
                      hover:bg-white/6
                      ring-1 ring-transparent hover:ring-white/10
                      transition-all
                    "
                  >
                    <span className="mt-[6px] marker-tech-dark" aria-hidden="true">
                      <span className="marker-dot" />
                      <span className="marker-glow" />
                    </span>
                    <span className="text-white/88 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Marquee */}
          <div className="relative mt-10">
            <div className="marquee group/marquee">
              <div className="marquee__track group-hover/marquee:[animation-play-state:paused]">
                <div className="marquee__inner">
                  {chips.map((x) => (
                    <span key={`a-${x}`} className="marquee-chip-dark">
                      {x}
                    </span>
                  ))}
                </div>
                <div className="marquee__inner" aria-hidden="true">
                  {chips.map((x) => (
                    <span key={`b-${x}`} className="marquee-chip-dark">
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="marquee group/marquee mt-3">
              <div className="marquee__track marquee__track--reverse group-hover/marquee:[animation-play-state:paused]">
                <div className="marquee__inner">
                  {chips
                    .slice()
                    .reverse()
                    .map((x) => (
                      <span key={`c-${x}`} className="marquee-chip-dark marquee-chip-dark--muted">
                        {x}
                      </span>
                    ))}
                </div>
                <div className="marquee__inner" aria-hidden="true">
                  {chips
                    .slice()
                    .reverse()
                    .map((x) => (
                      <span key={`d-${x}`} className="marquee-chip-dark marquee-chip-dark--muted">
                        {x}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 section-divider" />
      </div>

      <style>{`
        /* ✅ TOP BRIDGE: hides seam by fading over it (no line) */
        .benefits-top-bridge{
          background:
            radial-gradient(
              1200px 420px at 50% 55%,
              rgba(99,102,241,0.10),
              rgba(59,130,246,0.06) 45%,
              rgba(255,255,255,0.00) 75%
            );
          filter: blur(28px);
          opacity: 0.85;

          /* ВАЖНО: линейная маска вместо radial — убирает “полосу” */
          mask-image: linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%);
        }


        /* LIGHT SECTION BACKGROUND */
        .light-grid{
          background-image:
            linear-gradient(to right, rgba(99,102,241,0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99,102,241,0.08) 1px, transparent 1px);
          background-size: 56px 56px;

          /* вместо radial */
          mask-image: linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%);
        }


        .light-aurora{
          background:
            radial-gradient(1200px 700px at 50% 18%, rgba(99,102,241,0.09), transparent 68%),
            radial-gradient(1200px 760px at 50% 82%, rgba(59,130,246,0.07), transparent 72%);
        }


        .card-film{ background: rgba(255,255,255,0.04); }

        .tech-grid-dark{
          background-image:
            linear-gradient(to right, rgba(147,197,253,0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147,197,253,0.10) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(ellipse at 50% 30%, #000 0%, transparent 72%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 30%, #000 0%, transparent 72%);
        }

        .tech-scanline-dark{
          background:
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.00) 0%,
              rgba(147,197,253,0.08) 45%,
              rgba(255,255,255,0.00) 100%
            );
          animation: scan 7s ease-in-out infinite;
          mix-blend-mode: overlay;
        }

        @keyframes scan{
          0%   { transform: translateY(-30%); opacity: 0.0; }
          18%  { opacity: 0.55; }
          50%  { transform: translateY(10%); opacity: 0.16; }
          82%  { opacity: 0.55; }
          100% { transform: translateY(35%); opacity: 0.0; }
        }

        .tech-corners-dark{
          background:
            linear-gradient(to right, rgba(147,197,253,0.34), rgba(0,0,0,0)) 0 0 / 120px 1px no-repeat,
            linear-gradient(to bottom, rgba(147,197,253,0.34), rgba(0,0,0,0)) 0 0 / 1px 120px no-repeat,
            linear-gradient(to left, rgba(147,197,253,0.34), rgba(0,0,0,0)) 100% 0 / 120px 1px no-repeat,
            linear-gradient(to bottom, rgba(147,197,253,0.34), rgba(0,0,0,0)) 100% 0 / 1px 120px no-repeat,
            linear-gradient(to right, rgba(147,197,253,0.34), rgba(0,0,0,0)) 0 100% / 120px 1px no-repeat,
            linear-gradient(to top, rgba(147,197,253,0.34), rgba(0,0,0,0)) 0 100% / 1px 120px no-repeat,
            linear-gradient(to left, rgba(147,197,253,0.34), rgba(0,0,0,0)) 100% 100% / 120px 1px no-repeat,
            linear-gradient(to top, rgba(147,197,253,0.34), rgba(0,0,0,0)) 100% 100% / 1px 120px no-repeat;
        }

        .benefit-card-sheen{
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0.00) 0%,
            rgba(147,197,253,0.30) 45%,
            rgba(255,255,255,0.00) 100%
          );
          transform: translateX(-120%);
          opacity: 0;
        }
        .group:hover .benefit-card-sheen{ animation: sheen-pass 1.2s ease-out forwards; }
        @keyframes sheen-pass{
          0%{ transform: translateX(-120%); opacity: 0; }
          20%{ opacity: 0.75; }
          60%{ opacity: 0.45; }
          100%{ transform: translateX(140%); opacity: 0; }
        }

        .marker-tech-dark{
          width: 28px;
          height: 20px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: linear-gradient(135deg, rgba(147,197,253,0.85), rgba(147,197,253,0.18));
          box-shadow: 0 12px 26px -18px rgba(0,0,0,0.85);
          border: 1px solid rgba(147,197,253,0.20);
          flex: 0 0 auto;
        }
        .marker-dot{ width: 6px; height: 6px; border-radius: 9999px; background: rgba(255,255,255,0.92); }
        .marker-glow{
          position: absolute; inset: 0; border-radius: 9999px;
          background: rgba(147,197,253,0.55);
          filter: blur(10px);
          opacity: 0;
          transition: opacity 260ms ease;
        }
        li.group\\/item:hover .marker-glow{ opacity: 0.70; }

        .marquee{
          position: relative;
          overflow: hidden;
          padding: 2px 0;
          mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
        }
        .marquee__track{
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee 28s linear infinite;
        }
        .marquee__track--reverse{ animation: marqueeReverse 38s linear infinite; }
        .marquee__inner{ display: flex; gap: 12px; padding-right: 12px; }
        @keyframes marquee{ 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeReverse{ 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }

        .marquee-chip-dark{
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          border-radius: 9999px;
          padding: 10px 14px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: -0.01em;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 10px 26px -18px rgba(0,0,0,0.80);
          color: rgba(255,255,255,0.90);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: transform 200ms ease, border-color 200ms ease;
        }
        .marquee-chip-dark--muted{
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.10);
          color: rgba(255,255,255,0.84);
        }
        .marquee-chip-dark:hover{
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.18);
        }

        @media (prefers-reduced-motion: reduce){
          .group:hover .benefit-card-sheen{ animation: none !important; }
          .marquee__track{ animation: none !important; }
          .tech-scanline-dark{ animation: none !important; }
          .marker-glow{ transition: none !important; }
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;
