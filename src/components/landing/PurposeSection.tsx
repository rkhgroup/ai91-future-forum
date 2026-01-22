const PurposeSection = () => {
  return (
    <section
      id="purpose"
      className="relative overflow-hidden py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT: Images */}
          <div className="lg:col-span-3 lg:col-start-2">
            <div className="relative mx-auto w-full max-w-[360px]">
              {/* TOP card */}
              <div
                className="
                  group relative z-10 overflow-hidden rounded-3xl bg-muted
                  ring-1 ring-border/40
                  shadow-[0_18px_50px_-20px_rgba(0,0,0,0.45)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:shadow-[0_30px_90px_-35px_rgba(0,0,0,0.55),0_8px_20px_-6px_rgba(0,0,0,0.25)]
                  hover:ring-border/70
                  -translate-x-20
                "
              >
                {/* contour shadow (dark outline glow behind) */}
                <div
                  className="
                    pointer-events-none absolute -inset-3 rounded-[2.5rem]
                    shadow-[0_0_0_1px_rgba(0,0,0,0.25),0_0_60px_rgba(0,0,0,0.45)]
                    transition-all duration-300
                    group-hover:shadow-[0_0_0_1px_rgba(0,0,0,0.35),0_0_90px_rgba(0,0,0,0.75)]
                  "
                />

                {/* glow */}
                <div
                  className="
                    pointer-events-none absolute -inset-10 rounded-[2.25rem]
                    bg-gradient-to-r from-primary/15 via-transparent to-primary/15
                    blur-2xl opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />

                <img
                  src={`${import.meta.env.BASE_URL}purpose/purpose.png`}
                  alt=""
                  className="relative w-full aspect-[4/3] object-cover block"
                  draggable={false}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_55%,transparent_100%)] bg-black/10" />
              </div>

              {/* BOTTOM card (stays in place, comes to front on hover) */}
              <div
                className="
                  group relative z-0 overflow-hidden rounded-3xl bg-muted
                  ring-1 ring-border/40
                  shadow-[0_18px_50px_-20px_rgba(0,0,0,0.45)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:scale-[1.01]
                  hover:ring-border/80
                  hover:z-30
                  hover:shadow-[0_30px_90px_-35px_rgba(0,0,0,0.55),0_8px_20px_-6px_rgba(0,0,0,0.25)]
                  translate-x-5
                  ml-auto -mt-16 w-[92%]
                "
              >
                {/* contour shadow (dark outline glow behind) */}
                <div
                  className="
                    pointer-events-none absolute -inset-3 rounded-[2.5rem]
                    shadow-[0_0_0_1px_rgba(0,0,0,0.25),0_0_60px_rgba(0,0,0,0.45)]
                    transition-all duration-300
                    group-hover:shadow-[0_0_0_1px_rgba(0,0,0,0.35),0_0_90px_rgba(0,0,0,0.75)]
                  "
                />

                {/* glow */}
                <div
                  className="
                    pointer-events-none absolute -inset-10 rounded-[2.25rem]
                    bg-gradient-to-r from-primary/15 via-transparent to-primary/15
                    blur-2xl opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />

                <img
                  src={`${import.meta.env.BASE_URL}purpose/purpose-2.png`}
                  alt=""
                  className="relative w-full aspect-[4/3] object-cover block"
                  draggable={false}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_55%,transparent_100%)] bg-black/10" />
              </div>
            </div>
          </div>

          {/* RIGHT: Text Block */}
          <div className="lg:col-span-7">
            <div
              className="
                group relative premium-card p-8 md:p-10
                ring-1 ring-border/40
                shadow-[0_18px_50px_-20px_rgba(0,0,0,0.45)]
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-[0_26px_70px_-26px_rgba(0,0,0,0.55)]
                hover:ring-border/70
              "
            >
              {/* glow */}
              <div
                className="
                  pointer-events-none absolute -inset-10 rounded-[2.25rem]
                  bg-gradient-to-r from-primary/15 via-transparent to-primary/15
                  blur-2xl opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              <div className="relative max-w-2xl">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-gradient-gold">Цель</span> Форума
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Совместное осмысление и проектирование новой стратегии
                  преподавания в эпоху искусственного интеллекта, основанной на
                  практическом опыте, доказанных подходах и реальных кейсах
                  внедрения ИИ в образовании
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle section glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(60%_60%_at_50%_20%,rgba(99,102,241,0.10),transparent_60%)]
        "
      />

      {/* Seamless bridge to next section */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-[240px] purpose-to-benefits-bridge z-20" />

      <style>{`
        .purpose-to-benefits-bridge{
          background:
            radial-gradient(
              1200px 420px at 50% 45%,
              rgba(99,102,241,0.10),
              rgba(59,130,246,0.06) 45%,
              rgba(255,255,255,0.00) 75%
            );
          filter: blur(28px);
          opacity: 0.85;

          mask-image: linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%);
        }

        @media (prefers-reduced-motion: reduce){
          .purpose-to-benefits-bridge{ filter: none; }
        }
      `}</style>
    </section>
  );
};

export default PurposeSection;
