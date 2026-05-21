import { motion } from "framer-motion";
import { useApp } from "./AppProvider";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const { t, playClick } = useApp();

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background data grid */}
      <div className="absolute inset-0 data-grid-bg opacity-60" />
      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-gold/40 text-[11px] tracking-[0.25em] uppercase text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            {t("Portfolio · 2026 Edition", "بورتفوليو · إصدار 2026")}
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="block italic text-foreground/90"
            >
              {t("Sarah", "سارة")}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="block"
            >
              <span className="shimmer-text">
                {t("Abdulmaleek", "عبد المليك")}
              </span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="block italic text-cherry dark:text-gold"
            >
              {t("Quwaidi.", "قويضي.")}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-8 flex items-start gap-5"
          >
            <span className="hidden md:block w-16 h-px bg-gold mt-3" />
            <div>
              <p className="text-lg md:text-xl text-foreground/80 max-w-xl text-balance">
                {t(
                  "Turning data into meaning — quiet patterns, loud insights, and the stories that live between the rows.",
                  "تحويل البيانات إلى معنى — أنماط هادئة، رؤى صاخبة، وقصص تسكن بين الأرقام."
                )}
              </p>
              <p className="mt-2 text-xs tracking-[0.3em] uppercase text-muted-foreground">
                {t("Data Analyst · Riyadh", "محلّلة بيانات · الرياض")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <button
              onClick={() => {
                playClick();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden rounded-full px-7 py-3.5 bg-cherry text-primary-foreground text-sm tracking-wider uppercase shadow-luxury"
            >
              <span className="relative z-10">{t("View Selected Work", "أعمال مختارة")}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            <button
              onClick={() => {
                playClick();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full px-7 py-3.5 border border-gold/60 text-sm tracking-wider uppercase hover:bg-gold/10 transition-colors"
            >
              {t("Get in Touch", "تواصل معي")}
            </button>
          </motion.div>
        </div>

        {/* Right visual */}
        <div className="lg:col-span-5 relative h-[460px] md:h-[560px]">
          <DataSculpture />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
      >
        <span>{t("Scroll", "مرّر")}</span>
        <ArrowDown size={14} className="animate-bounce text-gold" />
      </motion.div>
    </section>
  );
}

function DataSculpture() {
  // Abstract animated SVG visualization
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute w-[420px] h-[420px] rounded-full border border-gold/20 animate-[spin_60s_linear_infinite]" />
      <div className="absolute w-[320px] h-[320px] rounded-full border border-gold/15 animate-[spin_40s_linear_reverse_infinite]" />
      <div className="absolute w-[220px] h-[220px] rounded-full border border-cherry/30 dark:border-gold/30" />

      <svg viewBox="0 0 400 400" className="relative w-full h-full max-w-[520px]">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--cherry)" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="g2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="200" r="120" fill="url(#g2)" />

        {/* Constellation lines */}
        {Array.from({ length: 14 }).map((_, i) => {
          const a = (i / 14) * Math.PI * 2;
          const r1 = 70 + (i % 3) * 30;
          const r2 = 150 + (i % 4) * 20;
          const x1 = 200 + Math.cos(a) * r1;
          const y1 = 200 + Math.sin(a) * r1;
          const x2 = 200 + Math.cos(a) * r2;
          const y2 = 200 + Math.sin(a) * r2;
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#g1)" strokeWidth="0.6" opacity="0.7" />
              <circle cx={x2} cy={y2} r="2.5" fill="var(--gold)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={x1} cy={y1} r="1.5" fill="var(--cherry)" className="dark:fill-[var(--gold)]" />
            </g>
          );
        })}

        {/* Animated bars */}
        <g transform="translate(140 280)">
          {[26, 44, 18, 60, 38, 52, 30].map((h, i) => (
            <rect
              key={i}
              x={i * 18}
              y={-h}
              width="10"
              height={h}
              fill="var(--cherry)"
              className="dark:fill-[var(--gold)]"
              opacity="0.85"
            >
              <animate attributeName="height" values={`${h};${h - 10};${h}`} dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
              <animate attributeName="y" values={`${-h};${-(h - 10)};${-h}`} dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
            </rect>
          ))}
        </g>

        {/* Center node */}
        <circle cx="200" cy="200" r="8" fill="var(--gold)" />
        <circle cx="200" cy="200" r="14" fill="none" stroke="var(--gold)" strokeWidth="1">
          <animate attributeName="r" values="14;28;14" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Floating data chips */}
      <div className="absolute top-6 right-2 glass metallic-border rounded-2xl px-3 py-2 text-[10px] tracking-widest float-y">
        <div className="text-muted-foreground">ACCURACY</div>
        <div className="font-display text-xl text-gold">98.4%</div>
      </div>
      <div className="absolute bottom-10 left-0 glass metallic-border rounded-2xl px-3 py-2 text-[10px] tracking-widest float-y" style={{ animationDelay: "1.2s" }}>
        <div className="text-muted-foreground">QUERIES</div>
        <div className="font-display text-xl text-gold">1,284</div>
      </div>
    </div>
  );
}
