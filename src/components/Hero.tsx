import { motion } from "framer-motion";
import { ArrowDown, Mail, LayoutGrid } from "lucide-react";
import { EtlVisualization } from "./EtlVisualization";

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

          <h1 className="font-display font-medium text-[clamp(3.4rem,11vw,9rem)] leading-[0.92] tracking-[-0.02em]">
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
            Turning data into meaning, quiet patterns, loud insights, and the stories that live between the rows.
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

        {/* Interactive ETL data visualization */}
        <div className="lg:col-span-5 relative w-full">
          <EtlVisualization />
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

