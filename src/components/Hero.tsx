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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[11px] tracking-[0.35em] uppercase text-gold mb-5"
          >
            Making sense of complexity, one query at a time.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
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
              className="block shimmer-text"
            >
              Abdulmaleek
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-foreground"
            >
              Quwaidi.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-7"
          >
            <p className="font-display text-2xl md:text-3xl text-cherry dark:text-gold italic">
              Junior Data Analyst
            </p>
            <p className="mt-1 text-xs md:text-sm tracking-[0.28em] uppercase text-muted-foreground">
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
                <div className="font-display text-2xl md:text-3xl text-gold">{s.n}</div>
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
              className="group relative overflow-hidden rounded-full px-6 py-3 bg-cherry text-primary-foreground text-xs md:text-sm tracking-[0.15em] uppercase shadow-luxury inline-flex items-center gap-2"
            >
              <Mail size={14} />
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-6 py-3 border border-gold/60 text-xs md:text-sm tracking-[0.15em] uppercase hover:bg-gold/10 transition-colors inline-flex items-center gap-2"
            >
              <LayoutGrid size={14} />
              View Selected Work
            </button>
          </motion.div>
        </div>

        {/* Dashboard mock visual */}
        <div className="lg:col-span-5 relative w-full">
          <DashboardMock />
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

function DashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="relative mx-auto w-full max-w-[460px]"
    >
      {/* Floating chips */}
      <div className="absolute -top-4 -right-2 sm:-right-6 glass metallic-border rounded-2xl px-3.5 py-2 z-20 float-y">
        <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground">Revenue</div>
        <div className="font-display text-xl text-gold leading-tight">$817K</div>
      </div>
      <div
        className="absolute -bottom-4 -left-2 sm:-left-6 glass metallic-border rounded-2xl px-3.5 py-2 z-20 float-y"
        style={{ animationDelay: "1.3s" }}
      >
        <div className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground">MoM Growth</div>
        <div className="font-display text-xl text-gold leading-tight">+21%</div>
      </div>

      {/* Dashboard card */}
      <div className="relative rounded-2xl border border-gold/30 bg-card/80 backdrop-blur-xl shadow-luxury overflow-hidden">
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-background/40">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-[10px] tracking-wider text-muted-foreground font-mono">
            sales_dashboard.pbix
          </span>
          <div className="ml-auto flex gap-1.5">
            <span className="text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30">
              Overview
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-full text-muted-foreground">
              Trends
            </span>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* KPIs */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { v: "21K", l: "Orders" },
              { v: "49K", l: "Units Sold" },
              { v: "981K", l: "Shipments" },
            ].map((k) => (
              <div
                key={k.l}
                className="rounded-lg border border-border/60 bg-background/60 px-2.5 py-2"
              >
                <div className="font-display text-lg md:text-xl text-foreground">{k.v}</div>
                <div className="text-[9px] tracking-[0.18em] uppercase text-muted-foreground">{k.l}</div>
              </div>
            ))}
          </div>

          {/* Chart + Donut */}
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-3 rounded-lg border border-border/60 bg-background/60 p-3">
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Monthly Revenue
              </div>
              <div className="flex items-end justify-between h-20 gap-1.5">
                {[35, 55, 42, 80, 50, 65, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.9, delay: 0.7 + i * 0.08, ease: "easeOut" }}
                    className={`flex-1 rounded-sm ${
                      i === 6 ? "bg-cherry" : i === 3 ? "bg-gold" : "bg-gold/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5 text-[8px] tracking-wider text-muted-foreground">
                {["J", "F", "M", "A", "M", "J", "J"].map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
              </div>
            </div>

            <div className="col-span-2 rounded-lg border border-border/60 bg-background/60 p-3 flex flex-col items-center justify-center">
              <div className="relative h-16 w-16">
                <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" className="text-border" strokeWidth="3.5" />
                  <motion.circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="88"
                    initial={{ strokeDashoffset: 88 }}
                    animate={{ strokeDashoffset: 88 * 0.23 }}
                    transition={{ duration: 1.4, delay: 1, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-display text-sm text-gold">
                  77%
                </div>
              </div>
              <div className="mt-2 space-y-1 text-[9px] tracking-wider">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-sm bg-gold" /> Delivered
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-sm bg-cherry" /> Returned
                </div>
              </div>
            </div>
          </div>

          {/* Trend line */}
          <div className="rounded-lg border border-border/60 bg-background/60 p-3">
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
              Profit Trend · 12 Months
            </div>
            <svg viewBox="0 0 300 50" className="w-full h-10" preserveAspectRatio="none">
              <defs>
                <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,40 L25,34 L50,37 L75,28 L100,24 L125,26 L150,18 L175,20 L200,14 L225,16 L250,8 L275,10 L300,5 L300,50 L0,50 Z"
                fill="url(#tg)"
              />
              <motion.polyline
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 1.1, ease: "easeOut" }}
                points="0,40 25,34 50,37 75,28 100,24 125,26 150,18 175,20 200,14 225,16 250,8 275,10 300,5"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
