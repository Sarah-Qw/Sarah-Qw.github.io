import { motion } from "framer-motion";
import { useApp } from "./AppProvider";
import { SectionLabel } from "./About";
import { Mail, Github, Linkedin, Phone, Twitter } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "Sarah.Q.Data@email.com", href: "mailto:Sarah.Q.Data@email.com" },
  { icon: Github, label: "GitHub", value: "github.com/SarahQ_Data", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/Sarah-Quwaidi", href: "#" },
  { icon: Twitter, label: "X", value: "@SarahQ_Data", href: "#" },
  { icon: Phone, label: "Phone", value: "+966 5• ••• ••••", href: "#" },
];

export function Contact() {
  const { t, playHover, playClick } = useApp();
  return (
    <section id="contact" className="relative py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel num="06" en="Contact" ar="التواصل" />
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl leading-[1.02] text-balance">
            {t("Let's compare notes.", "لنتبادل الملاحظات.")}
          </h2>
          <p className="mt-6 text-foreground/70">
            {t(
              "A private terminal. Pick a channel — I'll meet you there with a clean dataset and an open question.",
              "محطة خاصة. اختر قناتك — سأكون بانتظارك ببياناتٍ نظيفة وسؤالٍ مفتوح."
            )}
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              onMouseEnter={playHover}
              onClick={playClick}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 hover:border-gold/60 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-cherry/10 transition-all" />
              <div className="relative flex items-center gap-4">
                <span className="h-12 w-12 rounded-full border border-gold/40 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                  <c.icon size={18} className="text-gold" />
                </span>
                <div className="min-w-0">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="font-display text-lg truncate">{c.value}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-24 pt-10 border-t border-border flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          <span>© 2026 · Sarah Quwaidi</span>
          <span>{t("Composed with care in Riyadh", "صُمّم بعناية في الرياض")}</span>
          <span className="text-gold">{t("Available for select projects", "متاحة لمشاريع مختارة")}</span>
        </div>
      </div>
    </section>
  );
}
