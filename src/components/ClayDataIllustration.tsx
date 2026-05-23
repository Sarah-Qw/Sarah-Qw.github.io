import { motion } from "framer-motion";

/**
 * ClayDataIllustration
 *
 * A 3D claymorphism-style SVG illustration for the Hero section.
 * Matches the reference image aesthetic: soft shadows, warm gradients,
 * rounded shapes, layered depth — no harsh lines or flat geometry.
 *
 * Elements (back → front):
 *  1. Soft ambient circle
 *  2. Gold dot grid (top-right)
 *  3. Database cylinders (right)
 *  4. Browser window with line chart + bar chart
 *  5. Pie / donut chart (overlaps browser bottom-left)
 *  6. Placeholder data rows
 *  7. Magnifying glass (foreground)
 *  8. Accent dot + decorative arc lines
 *
 * Color palette: ivory / burgundy #78292c / gold #d4af37 — matches the site.
 * Dark mode: outer wrapper dims opacity slightly so the warm illustration
 * reads as an elegant frosted panel against the dark background.
 */
export function ClayDataIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[445px] select-none dark:opacity-90"
    >
      {/* Soft halo behind the illustration */}
      <div
        className="absolute inset-0 rounded-[3rem] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 45% 40%, color-mix(in oklab, var(--gold) 16%, transparent), transparent 65%)",
          filter: "blur(36px)",
          opacity: 0.6,
          transform: "scale(1.15)",
        }}
      />

      <svg
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full h-auto"
        aria-hidden="true"
      >
        <defs>
          {/* ── Gradients ──────────────────────────────────── */}
          <radialGradient id="bg" cx="38%" cy="33%" r="65%">
            <stop offset="0%"   stopColor="#f8f3ea" />
            <stop offset="100%" stopColor="#ede5d5" />
          </radialGradient>
          <linearGradient id="browserBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#fdfaf4" />
            <stop offset="100%" stopColor="#f5f0e8" />
          </linearGradient>
          <linearGradient id="titleBar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#8c3032" />
            <stop offset="100%" stopColor="#78292c" />
          </linearGradient>
          <linearGradient id="barB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#9a3236" />
            <stop offset="100%" stopColor="#78292c" />
          </linearGradient>
          <linearGradient id="barG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#d9b840" />
            <stop offset="100%" stopColor="#c29e28" />
          </linearGradient>
          <linearGradient id="barS" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#cdc5b5" />
            <stop offset="100%" stopColor="#b8b0a0" />
          </linearGradient>
          <linearGradient id="pieB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#9c3236" />
            <stop offset="100%" stopColor="#6e2224" />
          </linearGradient>
          <linearGradient id="pieG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#d9b840" />
            <stop offset="100%" stopColor="#b89828" />
          </linearGradient>
          <radialGradient id="lens" cx="33%" cy="30%" r="65%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#ece7de" stopOpacity="0.88" />
          </radialGradient>
          <linearGradient id="handle" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#b08018" />
            <stop offset="40%"  stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8c5010" />
          </linearGradient>
          <linearGradient id="dbBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#e0d8c8" />
            <stop offset="48%"  stopColor="#faf7f0" />
            <stop offset="100%" stopColor="#d0c8b8" />
          </linearGradient>
          <linearGradient id="dbTop" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#ede5d8" />
            <stop offset="48%"  stopColor="#fdfaf4" />
            <stop offset="100%" stopColor="#c8c0b0" />
          </linearGradient>

          {/* ── Drop-shadow filters ─────────────────────────── */}
          <filter id="sh1" x="-22%" y="-22%" width="144%" height="144%">
            <feDropShadow dx="2" dy="5" stdDeviation="9"  floodOpacity="0.13" />
          </filter>
          <filter id="sh2" x="-14%" y="-14%" width="128%" height="132%">
            <feDropShadow dx="1"   dy="3" stdDeviation="5"  floodOpacity="0.09" />
          </filter>
          <filter id="sh3" x="-36%" y="-28%" width="172%" height="156%">
            <feDropShadow dx="3"   dy="7" stdDeviation="13" floodOpacity="0.17" />
          </filter>
        </defs>

        {/* ── 1. Background soft circle ──────────────────────── */}
        <circle cx="226" cy="232" r="190" fill="url(#bg)" opacity="0.72" />

        {/* ── 2. Gold dot grid (top-right) ───────────────────── */}
        {[0,1,2,3,4].map(r => [0,1,2,3].map(c => (
          <circle key={`d${r}${c}`}
            cx={316 + c*13} cy={82 + r*13} r={2.2}
            fill="#d4af37" opacity="0.52"
          />
        )))}

        {/* ── 3. Database cylinders (right side) ─────────────── */}
        <g filter="url(#sh2)">
          {/* Bottom */}
          <rect x="308" y="302" width="62" height="25" rx="2" fill="url(#dbBody)" />
          <ellipse cx="339" cy="302" rx="31" ry="8"   fill="url(#dbTop)"  />
          <ellipse cx="339" cy="327" rx="31" ry="8"   fill="url(#dbBody)" stroke="#c8c0b0" strokeWidth="0.7" />
          {/* Mid */}
          <rect x="308" y="274" width="62" height="25" rx="2" fill="url(#dbBody)" />
          <ellipse cx="339" cy="274" rx="31" ry="8"   fill="url(#dbTop)"  />
          <ellipse cx="339" cy="299" rx="31" ry="8"   fill="url(#dbBody)" stroke="#c8c0b0" strokeWidth="0.7" />
          {/* Top */}
          <rect x="308" y="246" width="62" height="25" rx="2" fill="url(#dbBody)" />
          <ellipse cx="339" cy="246" rx="31" ry="8"   fill="url(#dbTop)"  />
          <ellipse cx="339" cy="271" rx="31" ry="8"   fill="url(#dbBody)" stroke="#c8c0b0" strokeWidth="0.7" />
          {/* Highlight on top-left of topmost cylinder */}
          <ellipse cx="326" cy="244" rx="9" ry="3.2" fill="#ffffff" opacity="0.42" />
        </g>

        {/* ── 4. Browser window ──────────────────────────────── */}
        <g filter="url(#sh1)">
          {/* Frame */}
          <rect x="70" y="96" width="226" height="178" rx="13"
                fill="url(#browserBg)" stroke="#e0d8c8" strokeWidth="1.4" />
          {/* Title bar — rounded only on top */}
          <rect x="70"  y="96"  width="226" height="27"  rx="13" fill="url(#titleBar)" />
          <rect x="70"  y="109" width="226" height="14"  fill="url(#titleBar)" />
          {/* Traffic dots */}
          <circle cx="88"  cy="110" r="4.5" fill="#ff605c" opacity="0.88" />
          <circle cx="103" cy="110" r="4.5" fill="#ffbd44" opacity="0.88" />
          <circle cx="118" cy="110" r="4.5" fill="#00ca4e" opacity="0.88" />
          {/* Panel divider */}
          <line x1="186" y1="134" x2="186" y2="264" stroke="#e0d8c8" strokeWidth="0.9" />

          {/* LEFT: Line chart ─────────────────────────────── */}
          <line x1="80"  y1="134" x2="80"  y2="254" stroke="#d0c8b8" strokeWidth="0.8" />
          <line x1="80"  y1="254" x2="182" y2="254" stroke="#d0c8b8" strokeWidth="0.8" />
          {/* Chart path */}
          <path d="M 84 236 L 98 218 L 112 228 L 127 198 L 141 212 L 155 186 L 169 194 L 181 183"
                stroke="#78292c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          {/* Area under line */}
          <path d="M 84 236 L 98 218 L 112 228 L 127 198 L 141 212 L 155 186 L 169 194 L 181 183 L 181 254 L 84 254 Z"
                fill="#78292c" fillOpacity="0.07" />
          {/* Accent gold dot */}
          <circle cx="127" cy="198" r="5.5" fill="#d4af37" stroke="#fff" strokeWidth="1.8" />

          {/* RIGHT: Bar chart ─────────────────────────────── */}
          <line x1="191" y1="134" x2="191" y2="254" stroke="#d0c8b8" strokeWidth="0.8" />
          <line x1="191" y1="254" x2="289" y2="254" stroke="#d0c8b8" strokeWidth="0.8" />
          {/* 4 bars */}
          <rect x="200" y="198" width="16" height="56" rx="3.5" fill="url(#barG)" />
          <rect x="221" y="176" width="16" height="78" rx="3.5" fill="url(#barB)" />
          <rect x="242" y="210" width="16" height="44" rx="3.5" fill="url(#barS)" />
          <rect x="263" y="186" width="16" height="68" rx="3.5" fill="url(#barG)" />
          {/* Bar top highlights */}
          <rect x="201" y="199" width="14" height="5" rx="2.5" fill="#fff" fillOpacity="0.25" />
          <rect x="222" y="177" width="14" height="5" rx="2.5" fill="#fff" fillOpacity="0.25" />
          <rect x="243" y="211" width="14" height="5" rx="2.5" fill="#fff" fillOpacity="0.25" />
          <rect x="264" y="187" width="14" height="5" rx="2.5" fill="#fff" fillOpacity="0.25" />
        </g>

        {/* ── 5. Pie / Donut chart ────────────────────────────── */}
        {/*
          Center: (144, 326), radius: 52
          Top point: (144, 274)
          60% = 216° CW from top → end at approx (113.4, 366.1)
            cos(126°)=-0.5878, sin(126°)=0.8090
            x = 144 + 52*(-0.5878) ≈ 113.4
            y = 326 + 52*(0.8090)  ≈ 368.1
        */}
        <g filter="url(#sh2)">
          {/* Background disc */}
          <circle cx="144" cy="326" r="54" fill="#ede5d5" />
          {/* Burgundy segment (~60%, large arc CW) */}
          <path d="M 144 326 L 144 272 A 54 54 0 1 1 112.2 369.7 Z"
                fill="url(#pieB)" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
          {/* Gold segment (~40%, small arc CW) */}
          <path d="M 144 326 L 112.2 369.7 A 54 54 0 0 1 144 272 Z"
                fill="url(#pieG)" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
          {/* Donut hole */}
          <circle cx="144" cy="326" r="27" fill="url(#bg)" />
          {/* Donut center label */}
          <text x="144" y="331" textAnchor="middle"
                fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700"
                letterSpacing="-0.02em" fill="#78292c">
            75%
          </text>
        </g>

        {/* ── 6. Data row lines ────────────────────────────────── */}
        <g opacity="0.60">
          <rect x="242" y="308" width="58" height="7" rx="3.5" fill="#c8c0b0" />
          <rect x="242" y="321" width="44" height="7" rx="3.5" fill="#c8c0b0" />
          <rect x="242" y="334" width="52" height="7" rx="3.5" fill="#c8c0b0" />
        </g>

        {/* ── 7. Magnifying glass ──────────────────────────────── */}
        <g filter="url(#sh3)">
          {/* Handle */}
          <line x1="225" y1="378" x2="257" y2="410"
                stroke="url(#handle)" strokeWidth="13" strokeLinecap="round" />
          {/* Handle sheen */}
          <line x1="227" y1="380" x2="253" y2="406"
                stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.30" />
          {/* Gold lens ring */}
          <circle cx="195" cy="350" r="42" fill="none" stroke="#d4af37" strokeWidth="9.5" />
          {/* Lens fill */}
          <circle cx="195" cy="350" r="33" fill="url(#lens)" />
          {/* Lens reflection */}
          <ellipse cx="182" cy="338" rx="9" ry="5.5"
                   fill="#fff" opacity="0.52" transform="rotate(-18, 182, 338)" />
        </g>

        {/* ── 8. Accent dot + decorative arcs ─────────────────── */}
        <circle cx="66" cy="168" r="7.5" fill="#78292c" opacity="0.85" />
        <path d="M 66 168 Q 90 205 105 245"
              stroke="#78292c" strokeWidth="1.3" strokeOpacity="0.26"
              fill="none" strokeDasharray="3.5 4.5" />
        <path d="M 310 360 Q 330 342 336 310"
              stroke="#d4af37" strokeWidth="1.2" strokeOpacity="0.30"
              fill="none" strokeDasharray="3 4" />
      </svg>
    </motion.div>
  );
}
