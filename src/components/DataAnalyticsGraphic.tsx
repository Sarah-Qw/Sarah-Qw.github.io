import { motion } from "framer-motion";

/**
 * DataAnalyticsGraphic
 *
 * A minimalist, elegant SVG illustration representing "Data Analysis".
 * Design language: constellation of data nodes connected by thin dashed
 * lines, a micro bar-chart, scatter points, and floating metric labels —
 * all using the Burgundy / Gold palette via hardcoded hex values that
 * mirror the CSS custom-property values so both modes look coherent.
 *
 * Animations:
 *  • Nodes + scatter dots: staggered scale-in on mount (backOut ease)
 *  • Edges: pathLength draw-on from 0→1 (easeOut)
 *  • Bar chart: grows from bottom (easeOut, staggered)
 *  • Hub node: continuous slow pulse ring
 *  • Data labels: gentle fade-up
 */

/* ── Node definitions ─────────────────────────────────────────────── */
const NODES = [
  { id: "hub", cx: 200, cy: 192, r: 9,   gold: true  },
  { id: "a",   cx: 82,  cy: 103, r: 5.5, gold: true  },
  { id: "b",   cx: 316, cy: 90,  r: 5.5, gold: true  },
  { id: "c",   cx: 110, cy: 288, r: 4.5, gold: false },
  { id: "d",   cx: 318, cy: 244, r: 5,   gold: true  },
  { id: "e",   cx: 38,  cy: 200, r: 3,   gold: false },
  { id: "f",   cx: 358, cy: 150, r: 3,   gold: true  },
];

/* ── Edges (node id pairs) ────────────────────────────────────────── */
const EDGES: [string, string][] = [
  ["hub", "a"],
  ["hub", "b"],
  ["hub", "c"],
  ["hub", "d"],
  ["a",   "e"],
  ["b",   "f"],
  ["c",   "d"],
  ["a",   "b"],
];

/* ── Background scatter points ────────────────────────────────────── */
const SCATTER = [
  { cx: 148, cy: 52,  r: 2.2 },
  { cx: 256, cy: 40,  r: 1.6 },
  { cx: 58,  cy: 318, r: 2.0 },
  { cx: 182, cy: 350, r: 1.8 },
  { cx: 26,  cy: 138, r: 1.5 },
  { cx: 370, cy: 86,  r: 1.8 },
  { cx: 376, cy: 298, r: 1.5 },
  { cx: 234, cy: 358, r: 2.0 },
  { cx: 142, cy: 158, r: 1.4 },
  { cx: 262, cy: 152, r: 1.4 },
];

/* ── Mini bar-chart (bottom-right cluster) ───────────────────────── */
const BAR_DATA  = [38, 55, 45, 72, 58, 80, 62, 88];
const BAR_BASE_X = 228;
const BAR_BASE_Y = 342;
const BAR_W      = 9;
const BAR_GAP    = 2;
const BAR_MAX_H  = 64;

function getNode(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function DataAnalyticsGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[460px] aspect-square select-none"
    >
      {/* Ambient halo */}
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_46%,color-mix(in_oklab,var(--gold)_13%,transparent),transparent_62%)] blur-2xl pointer-events-none" />

      {/* Card frame */}
      <div className="absolute inset-0 rounded-[2rem] border border-gold/20 bg-card/25 backdrop-blur-md overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 data-grid-bg opacity-30" />

        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <defs>
            {/* Soft glow for the hub node */}
            <filter id="dag-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── Edges ─────────────────────────────────────── */}
          {EDGES.map(([fromId, toId], i) => {
            const a = getNode(fromId);
            const b = getNode(toId);
            return (
              <motion.path
                key={`edge-${fromId}-${toId}`}
                d={`M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`}
                stroke="#d4af37"
                strokeWidth="0.75"
                strokeOpacity="0.30"
                fill="none"
                strokeDasharray="3.5 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.55 + i * 0.09,
                  ease: "easeOut",
                }}
              />
            );
          })}

          {/* ── Background scatter dots ────────────────────── */}
          {SCATTER.map((s, i) => (
            <motion.circle
              key={`sc-${i}`}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill="#d4af37"
              fillOpacity="0.28"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05, ease: "backOut" }}
            />
          ))}

          {/* ── Bar chart ─────────────────────────────────── */}
          {/* Axis line */}
          <motion.path
            d={`M ${BAR_BASE_X - 5} ${BAR_BASE_Y} L ${BAR_BASE_X + BAR_DATA.length * (BAR_W + BAR_GAP) + 2} ${BAR_BASE_Y}`}
            stroke="#d4af37"
            strokeWidth="0.6"
            strokeOpacity="0.35"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
          />
          {BAR_DATA.map((val, i) => {
            const bh = (val / 100) * BAR_MAX_H;
            const bx = BAR_BASE_X + i * (BAR_W + BAR_GAP);
            const isGold = i % 2 !== 0;
            return (
              <motion.rect
                key={`bar-${i}`}
                x={bx}
                y={BAR_BASE_Y - bh}
                width={BAR_W - 1.5}
                height={bh}
                rx="2"
                fill={isGold ? "#d4af37" : "#78292c"}
                fillOpacity={isGold ? 0.65 : 0.55}
                /* Scale from bottom: fill-box makes origin relative to own bbox */
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "50% 100%",
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.65,
                  delay: 1.0 + i * 0.065,
                  ease: "easeOut",
                }}
              />
            );
          })}

          {/* ── Nodes ─────────────────────────────────────── */}
          {NODES.map((node, i) => (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.55,
                delay: 0.28 + i * 0.1,
                ease: "backOut",
              }}
            >
              {/* Outer dashed ring */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r + 4.5}
                fill="none"
                stroke={node.gold ? "#d4af37" : "#78292c"}
                strokeWidth="0.5"
                strokeOpacity="0.22"
                strokeDasharray="2.5 3.5"
              />
              {/* Ambient glow halo */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r * 2.8}
                fill={node.gold ? "#d4af37" : "#78292c"}
                fillOpacity="0.10"
              />
              {/* Core dot */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill={node.gold ? "#d4af37" : "#78292c"}
                fillOpacity="0.88"
                filter={node.id === "hub" ? "url(#dag-glow)" : undefined}
              />
            </motion.g>
          ))}

          {/* ── Hub pulse ring ─────────────────────────────── */}
          <motion.circle
            cx={200}
            cy={192}
            r={16}
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.8"
            animate={{
              r:       [16, 34, 16],
              opacity: [0.45, 0, 0.45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.6,
            }}
          />

          {/* ── Floating data labels ───────────────────────── */}
          {/*
            IMPORTANT: x/y props are SVG attributes (position).
            initial/animate y is a CSS translateY OFFSET from that position.
            So y: 6 means "start 6px below" and y: 0 means "at natural position".
          */}
          {[
            { x: 82,  y: 85,  text: "+18.4%" },
            { x: 316, y: 73,  text: "4,182"  },
            { x: 318, y: 262, text: "Q3 ↑"   },
          ].map(({ x, y, text }, i) => (
            <motion.text
              key={text}
              x={x}
              y={y}
              fontSize="7.5"
              fontFamily="monospace"
              fill="#d4af37"
              fillOpacity="0.72"
              textAnchor="middle"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.45 + i * 0.15 }}
            >
              {text}
            </motion.text>
          ))}

          {/* ── Hub crosshair (subtle) ─────────────────────── */}
          <line
            x1={188} y1={192} x2={212} y2={192}
            stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.18"
          />
          <line
            x1={200} y1={180} x2={200} y2={204}
            stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.18"
          />
        </svg>

        {/* Caption label */}
        <p className="absolute bottom-4 left-0 right-0 text-center text-[8px] tracking-[0.32em] uppercase text-muted-foreground">
          Data · Insights · Impact
        </p>
      </div>
    </motion.div>
  );
}
