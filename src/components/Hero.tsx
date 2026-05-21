import { motion } from "framer-motion";
import { ArrowDown, Mail, LayoutGrid } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 data-grid-bg opacity-50" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_16%,transparent),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-sm md:text-base text-muted-foreground tracking-wide mb-3"
          >
            Hello, I'm
          </motion.p>

          <h1 className="font-display text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.98] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block shimmer-text"
            >
              Sarah
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="block text-cherry-soft dark:text-gold"
            >
              Quwaidi.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-7"
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-gold/50 bg-card/40 backdrop-blur-sm px-5 py-2 metallic-border">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="font-display text-lg md:text-xl text-cherry dark:text-gold italic">
                Junior Data Analyst
              </span>
            </span>
            <p className="mt-3 text-xs md:text-sm tracking-[0.28em] uppercase text-muted-foreground">
              Excel · Power BI · SQL · Python
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-6 text-base md:text-lg text-foreground/80 max-w-xl text-balance leading-relaxed"
          >
            Turning data into meaning - quiet patterns, loud insights, and the stories that live between the rows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-8 grid grid-cols-3 gap-3 max-w-md"
          >
            {[
              { n: "4+", l: "End-to-End Projects" },
              { n: "1M+", l: "Records Processed" },
              { n: "5", l: "Core Data Tools" },
            ].map((s) => (
              <div key={s.l} className="glass metallic-border rounded-xl px-3 py-3 text-center">
                <div className="font-numeric text-2xl md:text-3xl text-gold font-semibold">{s.n}</div>
                <div className="text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-muted-foreground mt-0.5">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-press group relative overflow-hidden rounded-full px-6 py-3 bg-cherry text-primary-foreground text-xs md:text-sm tracking-[0.15em] uppercase shadow-luxury inline-flex items-center gap-2"
            >
              <Mail size={14} />
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-press rounded-full px-6 py-3 border border-gold/60 text-xs md:text-sm tracking-[0.15em] uppercase hover:bg-gold/10 transition-colors inline-flex items-center gap-2"
            >
              <LayoutGrid size={14} />
              View Selected Work
            </button>
          </motion.div>
        </div>

        {/* Creative Data Constellation */}
        <div className="lg:col-span-5 relative w-full">
          <DataConstellation />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
      >
        <span>Scroll</span>
        <ArrowDown size={14} className="animate-bounce text-gold" />
      </motion.div>
    </section>
  );
}

/**
 * A bespoke "Data Constellation" — a polar / radial chart that breathes,
 * surrounded by orbiting analytical glyphs. No mac frames, no charts mocks.
 * Pure data-as-art: a query, visualized.
 */
function DataConstellation() {
  const rings = [38, 60, 82, 104];
  const spokes = 12;
  // Radar values 0..1
  const radar = [0.82, 0.55, 0.9, 0.68, 0.74, 0.6, 0.88, 0.5, 0.78, 0.66, 0.92, 0.58];
  const cx = 140;
  const cy = 140;
  const maxR = 104;

  const radarPoints = radar
    .map((v, i) => {
      const a = (i / spokes) * Math.PI * 2 - Math.PI / 2;
      const r = v * maxR;
      return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`;
    })
    .join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[440px] aspect-square"
    >
      {/* Outer halo */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_65%)] blur-2xl" />

      {/* Orbiting metric chips */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        {[
          { label: "MEDIAN", value: "$38.31", angle: -90 },
          { label: "VARIANCE", value: "σ² 0.42", angle: -10 },
          { label: "TREND", value: "↗ +21%", angle: 70 },
          { label: "CORRELATION", value: "r = 0.86", angle: 160 },
          { label: "OUTLIERS", value: "n = 14", angle: 230 },
        ].map((chip, i) => {
          const rad = (chip.angle * Math.PI) / 180;
          const radius = 46; // percent
          const x = 50 + Math.cos(rad) * radius;
          const y = 50 + Math.sin(rad) * radius;
          return (
            <motion.div
              key={i}
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{ left: `${x}%`, top: `${y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 glass metallic-border rounded-xl px-2.5 py-1.5 whitespace-nowrap"
            >
              <div className="text-[8px] tracking-[0.22em] uppercase text-muted-foreground leading-none">
                {chip.label}
              </div>
              <div className="font-numeric text-[11px] text-gold leading-tight mt-0.5 font-semibold">
                {chip.value}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Core SVG: radar / polar */}
      <svg viewBox="0 0 280 280" className="absolute inset-[10%] w-[80%] h-[80%]">
        <defs>
          <radialGradient id="coreFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.35" />
            <stop offset="80%" stopColor="var(--cherry)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--cherry)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--gold)" />
            <stop offset="100%" stopColor="var(--cherry)" />
          </linearGradient>
        </defs>

        {/* Concentric rings */}
        {rings.map((r, i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="color-mix(in oklab, var(--gold) 35%, transparent)"
            strokeWidth="0.6"
            strokeDasharray={i % 2 === 0 ? "0" : "2 4"}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 + i * 0.12 }}
          />
        ))}

        {/* Spokes */}
        {Array.from({ length: spokes }).map((_, i) => {
          const a = (i / spokes) * Math.PI * 2 - Math.PI / 2;
          const x2 = cx + Math.cos(a) * maxR;
          const y2 = cy + Math.sin(a) * maxR;
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke="color-mix(in oklab, var(--gold) 18%, transparent)"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Radar fill */}
        <motion.polygon
          points={radarPoints}
          fill="url(#coreFill)"
          stroke="url(#strokeGrad)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Pulsing data points */}
        {radar.map((v, i) => {
          const a = (i / spokes) * Math.PI * 2 - Math.PI / 2;
          const r = v * maxR;
          const x = cx + Math.cos(a) * r;
          const y = cy + Math.sin(a) * r;
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r={2.4}
              fill="var(--gold)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.3, 1] }}
              transition={{ duration: 0.6, delay: 1.4 + i * 0.05 }}
            />
          );
        })}

        {/* Center node */}
        <motion.circle
          cx={cx}
          cy={cy}
          r="6"
          fill="var(--gold)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />
        <motion.circle
          cx={cx}
          cy={cy}
          r="14"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="0.8"
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: [0.5, 1.8], opacity: [0.8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
      </svg>

      {/* Bottom caption */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
        <div className="text-[9px] tracking-[0.32em] uppercase text-muted-foreground">
          Data Signal
        </div>
        <div className="font-numeric text-xs text-gold mt-0.5">12 dimensions · live</div>
      </div>
    </motion.div>
  );
}
