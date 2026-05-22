import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/**
 * "Profile → Funnel → Dashboard"
 * An interactive generative piece that tells the ETL story.
 *
 * Idle: raw particles drift lazily inside a soft grid.
 * Hover: particles are pulled in a gentle vortex into a glassmorphic funnel.
 *        Cleaned, color-coded streams emerge below and populate a tiny dashboard.
 */

// Custom strainer cursor (minimalist SVG → data URI)
const STRAINER_CURSOR =
  `url("data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'>
      <defs><filter id='s'><feDropShadow dx='0' dy='1' stdDeviation='1' flood-opacity='.35'/></filter></defs>
      <g filter='url(#s)' stroke='#78292c' stroke-width='1.4' fill='none' stroke-linecap='round'>
        <ellipse cx='13' cy='12' rx='8' ry='3.2' fill='rgba(248,246,242,.85)'/>
        <line x1='5' y1='12' x2='5' y2='15'/>
        <line x1='21' y1='12' x2='21' y2='15'/>
        <path d='M5 15 Q13 22 21 15'/>
        <line x1='9' y1='10.5' x2='9' y2='13.5'/>
        <line x1='13' y1='10.2' x2='13' y2='13.8'/>
        <line x1='17' y1='10.5' x2='17' y2='13.5'/>
      </g>
    </svg>`,
  )}") 14 14, auto`;

type Particle = {
  id: number;
  x: number; // %
  y: number; // %
  size: number;
  shape: "dot" | "bar" | "tri";
  tint: string;
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
};

const RAW_TINTS = [
  "color-mix(in oklab, var(--graphite) 40%, transparent)",
  "color-mix(in oklab, var(--stone-soft) 70%, transparent)",
  "color-mix(in oklab, var(--graphite) 25%, transparent)",
  "color-mix(in oklab, var(--cherry) 18%, transparent)",
];

function makeParticles(n: number): Particle[] {
  return Array.from({ length: n }).map((_, i) => {
    const shapes: Particle["shape"][] = ["dot", "bar", "tri", "dot", "dot"];
    return {
      id: i,
      x: 8 + Math.random() * 84,
      y: 6 + Math.random() * 38, // upper area
      size: 4 + Math.random() * 8,
      shape: shapes[i % shapes.length],
      tint: RAW_TINTS[i % RAW_TINTS.length],
      driftX: (Math.random() - 0.5) * 14,
      driftY: (Math.random() - 0.5) * 10,
      duration: 7 + Math.random() * 6,
      delay: Math.random() * 3,
    };
  });
}

export function EtlVisualization() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);
  const particles = useMemo(() => makeParticles(22), []);

  // Funnel mouth center (in %)
  const FUNNEL_CX = 50;
  const FUNNEL_TOP = 46;
  const FUNNEL_NECK_Y = 64;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[460px] aspect-square select-none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ cursor: hover ? STRAINER_CURSOR : "auto" }}
    >
      {/* Soft halo */}
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,color-mix(in_oklab,var(--gold)_14%,transparent),transparent_65%)] blur-2xl" />

      {/* Frame */}
      <div className="absolute inset-0 rounded-[2rem] border border-gold/25 bg-card/30 backdrop-blur-md overflow-hidden">
        <div className="absolute inset-0 data-grid-bg opacity-40" />

        {/* Caption */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.32em] uppercase text-muted-foreground">
          Profile · Transform · Visualize
        </div>

        {/* Raw particle field */}
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.shape === "bar" ? p.size * 1.6 : p.size,
              height: p.shape === "bar" ? 1.5 : p.size,
              borderRadius:
                p.shape === "tri" ? 0 : p.shape === "bar" ? 1 : "50%",
              background: p.shape === "tri" ? "transparent" : p.tint,
              borderLeft:
                p.shape === "tri" ? `${p.size / 2}px solid transparent` : undefined,
              borderRight:
                p.shape === "tri" ? `${p.size / 2}px solid transparent` : undefined,
              borderBottom:
                p.shape === "tri" ? `${p.size}px solid ${p.tint}` : undefined,
            }}
            animate={
              reduce
                ? {}
                : hover
                ? {
                    // vortex into funnel mouth
                    left: `${FUNNEL_CX}%`,
                    top: `${FUNNEL_TOP}%`,
                    opacity: [1, 1, 0],
                    scale: [1, 0.85, 0.4],
                    rotate: [0, 180, 360],
                  }
                : {
                    x: [0, p.driftX, 0],
                    y: [0, p.driftY, 0],
                    opacity: [0.55, 0.95, 0.55],
                  }
            }
            transition={
              hover
                ? {
                    duration: 1.1 + (p.id % 5) * 0.12,
                    delay: (p.id % 8) * 0.05,
                    ease: [0.65, 0, 0.35, 1],
                  }
                : {
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
        ))}

        {/* Subtle vortex ring during hover */}
        <motion.div
          className="absolute rounded-full border border-gold/40 pointer-events-none"
          style={{
            left: `${FUNNEL_CX}%`,
            top: `${FUNNEL_TOP}%`,
            width: 80,
            height: 80,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={
            hover
              ? { opacity: [0, 0.9, 0], scale: [0.4, 1.6, 2], rotate: 360 }
              : { opacity: 0, scale: 0.6 }
          }
          transition={{
            duration: 1.4,
            repeat: hover ? Infinity : 0,
            ease: "easeOut",
          }}
        />

        {/* Glass funnel */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <defs>
            <linearGradient id="glassFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#78292c" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="glassStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#78292c" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="stream" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="60%" stopColor="#78292c" />
              <stop offset="100%" stopColor="#f6d2d2" />
            </linearGradient>
          </defs>

          {/* Funnel body: rounded inverted trapezoid + neck */}
          <path
            d="M 60 88 Q 60 84 64 84 L 136 84 Q 140 84 140 88 L 112 124 Q 110 127 110 130 L 110 142 Q 110 146 106 146 L 94 146 Q 90 146 90 142 L 90 130 Q 90 127 88 124 Z"
            fill="url(#glassFill)"
            stroke="url(#glassStroke)"
            strokeWidth="0.8"
          />
          {/* Glass highlight */}
          <path
            d="M 66 88 L 92 124"
            stroke="#ffffff"
            strokeOpacity="0.5"
            strokeWidth="0.6"
          />

          {/* Clean streams emerging during hover */}
          {[0, 1, 2].map((i) => (
            <motion.line
              key={i}
              x1={96 + i * 4}
              y1={146}
              x2={96 + i * 4}
              y2={158}
              stroke="url(#stream)"
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                hover
                  ? { pathLength: 1, opacity: [0, 1, 1] }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.9 + i * 0.08 }}
            />
          ))}
        </svg>

        {/* Mini dashboard — slides up and fills during hover */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[78%] rounded-xl border border-gold/30 bg-card/70 backdrop-blur-md p-3 shadow-luxury"
          style={{ bottom: "6%" }}
          initial={false}
          animate={
            hover
              ? { y: 0, opacity: 1 }
              : { y: 14, opacity: 0.35 }
          }
          transition={{ duration: 0.7, ease: "easeOut", delay: hover ? 1.05 : 0 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[8px] tracking-[0.25em] uppercase text-muted-foreground">
              Cleaned Report
            </span>
            <span className="font-numeric text-[10px] text-cherry dark:text-gold">
              ✓ 1,248 rows
            </span>
          </div>

          <div className="grid grid-cols-[1.6fr_1fr] gap-2 items-end">
            {/* Bar chart */}
            <div className="flex items-end gap-1 h-12">
              {[55, 72, 40, 88, 62, 78, 50, 95, 68].map((h, i) => (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{ height: hover ? `${h}%` : "10%" }}
                  transition={{
                    duration: 0.6,
                    delay: hover ? 1.15 + i * 0.04 : 0,
                    ease: "easeOut",
                  }}
                  className="flex-1 rounded-sm"
                  style={{
                    background:
                      i % 3 === 0
                        ? "#78292c"
                        : i % 3 === 1
                        ? "#d4af37"
                        : "#f6d2d2",
                  }}
                />
              ))}
            </div>

            {/* Mini donut */}
            <div className="relative h-12 w-12 mx-auto">
              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="color-mix(in oklab, var(--stone-soft) 60%, transparent)"
                  strokeWidth="5"
                />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#78292c"
                  strokeWidth="5"
                  strokeDasharray="88"
                  initial={false}
                  animate={{ strokeDashoffset: hover ? 22 : 88 }}
                  transition={{ duration: 0.9, delay: hover ? 1.2 : 0 }}
                  strokeLinecap="round"
                />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="5"
                  strokeDasharray="88"
                  initial={false}
                  animate={{ strokeDashoffset: hover ? 55 : 88 }}
                  transition={{ duration: 0.9, delay: hover ? 1.35 : 0 }}
                  strokeLinecap="round"
                  style={{ rotate: "-90deg", transformOrigin: "center" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-numeric text-[10px] text-cherry dark:text-gold">
                75%
              </div>
            </div>
          </div>

          {/* Tiny table rows */}
          <div className="mt-2 space-y-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: hover ? 1 : 0.25, x: hover ? 0 : -6 }}
                transition={{
                  duration: 0.4,
                  delay: hover ? 1.5 + i * 0.07 : 0,
                }}
                className="flex items-center gap-2"
              >
                <span
                  className="h-1 rounded-full flex-1"
                  style={{
                    background:
                      i === 0
                        ? "color-mix(in oklab, #78292c 70%, transparent)"
                        : i === 1
                        ? "color-mix(in oklab, #d4af37 70%, transparent)"
                        : "color-mix(in oklab, #f6d2d2 80%, transparent)",
                  }}
                />
                <span className="font-numeric text-[9px] text-muted-foreground w-10 text-right">
                  {[42.18, 31.55, 26.27][i].toFixed(2)}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hover hint */}
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.3em] uppercase text-muted-foreground"
          animate={{ opacity: hover ? 0 : 0.7 }}
          transition={{ duration: 0.4 }}
        >
          Hover to clean ↓
        </motion.div>
      </div>

      {/* Reference: ignore so build keeps reduce var */}
      <span className="hidden">{String(FUNNEL_NECK_Y)}</span>
    </motion.div>
  );
}
