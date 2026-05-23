import { motion } from "framer-motion";

/**
 * AmbientHeroAura
 *
 * A pure CSS / div-based abstract right-panel for the Hero section.
 * Zero SVG illustrations — 100% elegant, abstract, and theme-aware.
 *
 * Visual elements (all CSS):
 *  1. Outer halo — bleeds beyond the card for depth
 *  2. Gold orb  — upper-left, floats gently (float-y animation)
 *  3. Burgundy orb — lower-right, counter-floats
 *  4. Central soft gold core
 *  5. Three concentric dashed rings — suggest data orbits
 *  6. Glowing focal point at center with a pulse ring
 *  7. Dot-grid overlay (reuses the global data-grid-bg utility)
 *  8. Subtle corner accents (optional fine lines via box-shadow)
 */
export function AmbientHeroAura() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] aspect-square select-none"
      aria-hidden="true"
    >
      {/* ── Outer ambient halo (bleeds past card edges) ───────────── */}
      <div
        className="absolute rounded-[3rem] pointer-events-none"
        style={{
          inset: "-14%",
          background:
            "radial-gradient(ellipse at 55% 38%, color-mix(in oklab, var(--gold) 18%, transparent) 0%, transparent 62%)",
          filter: "blur(40px)",
          opacity: 0.55,
        }}
      />

      {/* ── Glass card frame ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: "2.5rem",
          border: "1px solid color-mix(in oklab, var(--gold) 16%, transparent)",
          background: "color-mix(in oklab, var(--card) 22%, transparent)",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 data-grid-bg" style={{ opacity: 0.22 }} />

        {/* ── Blob 1: Gold — upper-left light source ──────────── */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "-30%",
            left: "-18%",
            width: "78%",
            height: "78%",
            background:
              "radial-gradient(circle at 38% 38%, color-mix(in oklab, var(--gold) 55%, transparent) 0%, transparent 62%)",
            filter: "blur(58px)",
            opacity: 0.52,
          }}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Blob 2: Burgundy — lower-right accent ───────────── */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            bottom: "-22%",
            right: "-14%",
            width: "68%",
            height: "68%",
            background:
              "radial-gradient(circle at 62% 62%, color-mix(in oklab, #78292c 48%, transparent) 0%, transparent 60%)",
            filter: "blur(68px)",
            opacity: 0.42,
          }}
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />

        {/* ── Blob 3: soft gold — central warmth ──────────────── */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: "52%",
            height: "52%",
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--gold) 30%, transparent) 0%, transparent 70%)",
            filter: "blur(42px)",
            opacity: 0.48,
          }}
        />

        {/* ── Concentric dashed rings ──────────────────────────── */}
        {[48, 65, 82].map((pct, i) => (
          <div
            key={pct}
            className="absolute top-1/2 left-1/2 rounded-full"
            style={{
              width: `${pct}%`,
              height: `${pct}%`,
              transform: "translate(-50%, -50%)",
              border: `1px dashed color-mix(in oklab, var(--gold) ${Math.round(15 - i * 3.5)}%, transparent)`,
            }}
          />
        ))}

        {/* ── Focal point: glowing center dot ─────────────────── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {/* Slow pulse halo */}
          <motion.div
            className="absolute rounded-full"
            style={{
              inset: "-14px",
              background: "color-mix(in oklab, var(--gold) 22%, transparent)",
            }}
            animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Hard core */}
          <div
            className="relative h-4 w-4 rounded-full"
            style={{
              background: "color-mix(in oklab, var(--gold) 88%, transparent)",
              boxShadow:
                "0 0 16px 5px color-mix(in oklab, var(--gold) 42%, transparent)",
            }}
          />
        </div>

        {/* ── Corner accent lines (top-left) ───────────────────── */}
        <div
          className="absolute top-6 left-6 pointer-events-none"
          style={{
            width: 28,
            height: 28,
            borderTop: "1px solid color-mix(in oklab, var(--gold) 28%, transparent)",
            borderLeft: "1px solid color-mix(in oklab, var(--gold) 28%, transparent)",
            borderRadius: "3px 0 0 0",
          }}
        />
        {/* ── Corner accent lines (bottom-right) ───────────────── */}
        <div
          className="absolute bottom-6 right-6 pointer-events-none"
          style={{
            width: 28,
            height: 28,
            borderBottom: "1px solid color-mix(in oklab, var(--gold) 28%, transparent)",
            borderRight: "1px solid color-mix(in oklab, var(--gold) 28%, transparent)",
            borderRadius: "0 0 3px 0",
          }}
        />

        {/* ── Caption ──────────────────────────────────────────── */}
        <p className="absolute bottom-5 left-0 right-0 text-center text-[8px] tracking-[0.36em] uppercase text-muted-foreground">
          Data · Insights · Impact
        </p>
      </div>
    </motion.div>
  );
}
