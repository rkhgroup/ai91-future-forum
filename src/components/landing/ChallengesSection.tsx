import React, { useEffect, useMemo, useRef, useState } from "react";
import { TrendingUp, Users, Brain } from "lucide-react";

/** CountUp that starts only when `start` becomes true */
const useCountUp = (to: number, start: boolean, duration = 2800) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [to, start, duration]);

  return value;
};

// Catmull-Rom → cubic Bezier for smooth curve
const catmullRom2bezier = (pts: Array<{ x: number; y: number }>) => {
  if (pts.length < 2) return "";
  const p = pts;
  let d = `M ${p[0].x} ${p[0].y}`;

  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] || p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] || p2;

    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;

    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
  }
  return d;
};

const ChallengesSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const chartWrapRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const [sectionStarted, setSectionStarted] = useState(false);
  const [chartStarted, setChartStarted] = useState(false);

  // use index for hover (easier highlight segments)
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  // Section observer -> counters
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setSectionStarted(true);
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Chart observer -> line draw
  useEffect(() => {
    const el = chartWrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setChartStarted(true);
      },
      { threshold: 0.45 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Count-ups (slower)
  const users = useCountUp(800, sectionStarted, 2800);
  const youth = useCountUp(60, sectionStarted, 2800);
  const growth = useCountUp(2, sectionStarted, 3000);
  const students = useCountUp(90, sectionStarted, 3400);
  const years = useCountUp(5, sectionStarted, 3000);

  // CHART DATA (millions)
  const data = useMemo(
    () => [
      { year: 2022, value: 10 },
      { year: 2023, value: 100 },
      { year: 2024, value: 300 },
      { year: 2025, value: 800 },
    ],
    []
  );

  // SVG layout
  const W = 1000;
  const H = 320;
  const padX = 70;
  const padTop = 28;
  const padBottom = 64;
  const maxV = 800;
  const minV = 0;

  const baseY = H - padBottom;

  const points = useMemo(() => {
    const n = data.length;
    const usableW = W - padX * 2;
    const usableH = H - padTop - padBottom;

    return data.map((d, i) => {
      const x = padX + (usableW * i) / (n - 1);
      const t = (d.value - minV) / (maxV - minV);
      const y = padTop + (1 - t) * usableH;
      return { x, y, ...d };
    });
  }, [data]);

  const linePath = useMemo(() => catmullRom2bezier(points), [points]);

  const areaPath = useMemo(() => {
    if (!points.length) return "";
    const first = points[0];
    const last = points[points.length - 1];
    const curve = catmullRom2bezier(points);
    return `${curve} L ${last.x} ${baseY} L ${first.x} ${baseY} Z`;
  }, [points, baseY]);

  const hoveredPoint = useMemo(() => {
    if (hoverIdx == null) return null;
    return points[hoverIdx] || null;
  }, [points, hoverIdx]);

  // Highlight path segment near hovered point (prev..next)
  const highlightPath = useMemo(() => {
    if (hoverIdx == null) return "";
    const a = Math.max(0, hoverIdx - 1);
    const b = Math.min(points.length - 1, hoverIdx + 1);
    const slice = points.slice(a, b + 1);
    if (slice.length < 2) return "";
    return catmullRom2bezier(slice);
  }, [hoverIdx, points]);

  // SNAP: mouse move inside svg -> pick nearest point by x
  const rafSnap = useRef<number | null>(null);

  const handleSvgMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;

    // throttle via RAF
    if (rafSnap.current) return;
    rafSnap.current = requestAnimationFrame(() => {
      rafSnap.current = null;

      const rect = svgRef.current!.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const x = (px / rect.width) * W;

      // find nearest by x
      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i < points.length; i++) {
        const d = Math.abs(points[i].x - x);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      }
      // ⛔ если курсор слишком далеко от любой точки — сбрасываем hover
      if (bestDist > 90) {
        setHoverIdx(null);
        return;
      }


      // only activate snap in the plot area (avoid accidental when hovering labels)
      if (x < padX - 10 || x > W - padX + 10) return;

      setHoverIdx(best);
    });
  };

  const handleSvgLeave = () => setHoverIdx(null);

  return (
    <section
      id="challenges"
      ref={(n) => {
        sectionRef.current = n;
      }}
      className="relative py-20 overflow-hidden bg-black"
    >
      {/* PREVIOUS → CHALLENGES BLEND */}
      <div className="absolute inset-x-0 top-0 h-[50px] pointer-events-none hero-section-blend rotate-180 z-30" />

      {/* SPACE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,160,255,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(80,140,255,0.12),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.22] bg-[radial-gradient(1px_1px_at_20%_30%,rgba(255,255,255,.35),transparent_55%),radial-gradient(1px_1px_at_60%_70%,rgba(255,255,255,.25),transparent_55%),radial-gradient(1px_1px_at_80%_25%,rgba(255,255,255,.22),transparent_55%),radial-gradient(1px_1px_at_30%_85%,rgba(255,255,255,.20),transparent_55%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white">
            <span className="text-gradient-gold">Вызовы</span> перед
            <br /> лидерами образования
          </h2>
          <p className="text-white/65 max-w-3xl mx-auto text-lg leading-relaxed">
            Темпы внедрения ИИ растут быстрее, чем обновляются управленческие
            процессы, учебные модели и подходы к оцениванию.
          </p>
        </div>

        {/* TOP GLASS PANEL */}
        <div
          className="
            relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl
            p-10 md:p-14 mb-16
            shadow-[0_0_90px_rgba(120,160,255,0.22)]
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:shadow-[0_20px_80px_rgba(0,0,0,0.55),0_0_120px_rgba(120,160,255,0.35)]
          "
        >
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(50%_80%_at_50%_30%,rgba(124,180,255,0.18),transparent_70%)]" />
          <div className="pointer-events-none absolute -inset-1 rounded-[1.6rem] opacity-55 blur-xl bg-[radial-gradient(60%_40%_at_50%_10%,rgba(124,180,255,0.35),transparent_70%)]" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div>
              <div className="text-[72px] md:text-[92px] font-extrabold text-blue-300 tracking-tight">
                {users}M
              </div>
              <p className="text-white/90 mt-2 text-lg">
                человек используют ChatGPT
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-24 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div className="text-[72px] md:text-[92px] font-extrabold text-blue-300 tracking-tight">
                {youth}%
              </div>
              <p className="text-white/90 mt-2 text-lg">
                из них — молодёжь до 24 лет
              </p>
            </div>
          </div>
        </div>

        {/* CHART WRAP (observer target) */}
        <div
          ref={(n) => {
            chartWrapRef.current = n;
          }}
          className="relative"
        >
          {/* CHART GLASS */}
          <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 md:p-10 mb-16 shadow-[0_0_90px_rgba(120,160,255,0.18)] overflow-visible">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(60%_60%_at_50%_20%,rgba(124,180,255,0.16),transparent_70%)]" />
            <div className="pointer-events-none absolute -left-40 top-0 h-full w-80 rotate-12 bg-white/5 blur-2xl opacity-60" />

            <div className="relative">
              {/* Tooltip overlay */}
              {hoveredPoint && (
                <div
                  className="absolute z-20 -translate-x-1/2 -translate-y-full"
                  style={{
                    left: `${(hoveredPoint.x / W) * 100}%`,
                    top: `${(hoveredPoint.y / H) * 100}%`,
                  }}
                >
                  <div className="tooltip-glass">
                    <div className="text-blue-200 font-semibold">
                      {hoveredPoint.year}
                    </div>
                    <div className="text-blue-300 text-xl font-extrabold leading-none mt-1">
                      {hoveredPoint.value}M
                    </div>
                    <div className="text-white/55 text-xs mt-1">
                      активных пользователей
                    </div>
                  </div>
                </div>
              )}

              <svg
                ref={svgRef}
                viewBox={`0 0 ${W} ${H}`}
                className="w-full h-[320px]"
                fill="none"
                onMouseMove={handleSvgMove}
                onMouseLeave={handleSvgLeave}
              >
                {/* GRID */}
                {[...Array(6)].map((_, i) => {
                  const y = 40 + i * 40;
                  return (
                    <line
                      key={i}
                      x1="0"
                      y1={y}
                      x2={W}
                      y2={y}
                      stroke="rgba(255,255,255,0.06)"
                    />
                  );
                })}

                {/* Y labels */}
                {[0, 200, 400, 600, 800].map((v) => {
                  const usableH = H - padTop - padBottom;
                  const t = (v - minV) / (maxV - minV);
                  const y = padTop + (1 - t) * usableH;
                  return (
                    <g key={v} opacity={0.55}>
                      <text
                        x={16}
                        y={y + 4}
                        fill="rgba(255,255,255,0.35)"
                        fontSize="12"
                        fontFamily="ui-sans-serif, system-ui"
                        style={{ pointerEvents: "none" }}
                      >
                        {v}M
                      </text>
                    </g>
                  );
                })}

                {/* AREA */}
                <path
                  d={areaPath}
                  fill="url(#areaGrad)"
                  opacity={chartStarted ? 1 : 0}
                  className={chartStarted ? "chart-area-in" : ""}
                />

                {/* main glow under full line */}
                <path
                  d={linePath}
                  stroke="rgba(124,180,255,0.40)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity={chartStarted ? 1 : 0}
                  className={chartStarted ? "chart-glow-in" : ""}
                />

                {/* main line draw */}
                <path
                  d={linePath}
                  stroke="url(#lineGrad)"
                  strokeWidth="3.25"
                  strokeLinecap="round"
                  pathLength={1}
                  className={
                    chartStarted ? "chart-line-draw" : "chart-line-hidden"
                  }
                />

                {/* ✅ Vertical dotted guide line on hover */}
                {hoveredPoint && (
                  <>
                    <line
                      x1={hoveredPoint.x}
                      y1={hoveredPoint.y}
                      x2={hoveredPoint.x}
                      y2={baseY}
                      stroke="rgba(155,209,255,0.55)"
                      strokeWidth="1.5"
                      strokeDasharray="4 7"
                      className="vline"
                    />
                    <line
                      x1={hoveredPoint.x}
                      y1={hoveredPoint.y}
                      x2={hoveredPoint.x}
                      y2={baseY}
                      stroke="rgba(124,180,255,0.22)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      opacity={0.35}
                      className="vlineGlow"
                    />
                  </>
                )}

                {/* POINTS */}
                {points.map((p, i) => (
                  <g
                    key={p.year}
                    transform={`translate(${p.x},${p.y})`}
                    className={`pt ${hoverIdx === i ? "isActive" : ""}`}
                    
                  >
                    {/* ✅ Bigger invisible hit-area (so it’s easy to hover) */}
                    <circle r="24" fill="transparent" />

                    {/* hover pulse ring */}
                    <circle
                      className="pt-pulse"
                      r="16"
                      fill="rgba(124,180,255,0.15)"
                      opacity="0"
                    />
                    {/* glow */}
                    <circle r="8" fill="rgba(124,180,255,0.18)" />
                    {/* dot */}
                    <circle r="4.5" fill="#9bd1ff" />

                    {/* year label (non-interactive) */}
                    <text
                      x="0"
                      y="30"
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.55)"
                      fontSize="12"
                      fontFamily="ui-sans-serif, system-ui"
                      style={{ pointerEvents: "none" }}
                    >
                      {p.year}
                    </text>
                  </g>
                ))}

                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4f7df3" />
                    <stop offset="55%" stopColor="#7cb4ff" />
                    <stop offset="100%" stopColor="#9bd1ff" />
                  </linearGradient>

                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(124,180,255,0.30)" />
                    <stop offset="100%" stopColor="rgba(124,180,255,0.02)" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="mt-2 text-center text-white/45 text-sm">
                Рост использования ChatGPT(2022–2025)
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* LINE DRAW */
        .chart-line-hidden {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          opacity: 0;
        }
        .chart-line-draw {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          opacity: 1;
          animation: drawLine 2.6s cubic-bezier(.2,.8,.2,1) forwards;
        }
        .chart-glow-in {
          animation: fadeGlow 1.8s ease-out 0.25s forwards;
          opacity: 0;
        }
        .chart-area-in {
          animation: fadeArea 1.6s ease-out 0.35s forwards;
          opacity: 0;
        }

        @keyframes drawLine { to { stroke-dashoffset: 0; } }
        @keyframes fadeGlow { to { opacity: 1; } }
        @keyframes fadeArea { to { opacity: 1; } }

        /* Vertical guide */
        .vline{ animation: vIn .14s ease-out both; }
        .vlineGlow{ animation: vIn .14s ease-out both; }
        @keyframes vIn{
          from { opacity: 0; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* POINTS */
        .pt { cursor: default; }
        .pt.isActive .pt-pulse{
          opacity: 1;
          animation: pulseRing 1.05s ease-out infinite;
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.75); opacity: 0.0; }
          18%  { opacity: 0.55; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        /* TOOLTIP GLASS */
        .tooltip-glass{
          pointer-events: none;
          min-width: 150px;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(10,14,26,0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow:
            0 10px 30px rgba(0,0,0,0.45),
            0 0 40px rgba(124,180,255,0.18);
          position: relative;
          transform: translateY(-10px);
          animation: tipIn .18s ease-out forwards;
        }
        .tooltip-glass:after{
          content:"";
          position:absolute;
          left: 50%;
          bottom:-7px;
          width: 12px;
          height: 12px;
          background: rgba(10,14,26,0.55);
          border-right: 1px solid rgba(255,255,255,0.14);
          border-bottom: 1px solid rgba(255,255,255,0.14);
          transform: translateX(-50%) rotate(45deg);
          filter: drop-shadow(0 6px 10px rgba(0,0,0,0.35));
        }
        @keyframes tipIn{
          from { opacity: 0; transform: translateY(-2px) scale(0.98); }
          to   { opacity: 1; transform: translateY(-10px) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .chart-line-draw, .chart-glow-in, .chart-area-in { animation: none !important; opacity: 1 !important; }
          .pt.isActive .pt-pulse { animation: none !important; opacity: 0.35; }
          .tooltip-glass { animation: none !important; }
          .segGlow{ animation:none !important; }
        }
      `}</style>
      {/* CHALLENGES → NEXT SECTION BLEND */}
      <div className="absolute inset-x-0 bottom-0 h-[50px] pointer-events-none hero-section-blend z-30" />
    </section>
  );
};

const Glass3DCard = ({
  icon,
  value,
  text,
}: {
  icon: React.ReactNode;
  value: string;
  text: string;
}) => (
  <div
      className="
        relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl
        p-7 text-center overflow-hidden
        shadow-[0_18px_60px_rgba(0,0,0,0.55),0_0_60px_rgba(120,160,255,0.18)]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_28px_90px_rgba(0,0,0,0.65),0_0_90px_rgba(120,160,255,0.30)]
      "
    >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(255,255,255,0.12),transparent_65%)]" />
    <div className="pointer-events-none absolute -inset-1 rounded-[1.2rem] opacity-45 blur-xl bg-[radial-gradient(60%_50%_at_50%_10%,rgba(124,180,255,0.28),transparent_70%)]" />
    <div className="pointer-events-none absolute inset-x-6 bottom-3 h-8 rounded-full bg-black/40 blur-xl" />
    <div className="pointer-events-none absolute -left-24 top-0 h-full w-52 rotate-12 bg-white/6 blur-2xl opacity-60" />

    <div className="relative">
      <div className="mx-auto w-9 h-9 text-blue-300 mb-3">{icon}</div>
      <div className="text-3xl font-extrabold text-blue-300 mb-1 tracking-tight">
        {value}
      </div>
      <p className="text-white/70 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);

export default ChallengesSection;
