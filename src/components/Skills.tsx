import { motion } from "framer-motion";
import { useApp } from "./AppProvider";
import { SectionLabel } from "./About";
import { BadgeCheck } from "lucide-react";

const skills = [
  { name: "SQL", level: 95, en: "Query architect", ar: "مهندسة استعلامات" },
  { name: "Python", level: 84, en: "Analytical scripting", ar: "برمجة تحليلية" },
  { name: "Power BI", level: 92, en: "Dashboard design", ar: "تصميم لوحات" },
  { name: "Excel", level: 90, en: "Modeling & pivots", ar: "نمذجة وجداول" },
  { name: "Tableau", level: 80, en: "Visual storytelling", ar: "سرد بصري" },
  { name: "Power Query", level: 88, en: "ETL pipelines", ar: "تنقية البيانات" },
  { name: "Data Cleaning", level: 94, en: "Forensic detail", ar: "تدقيق دقيق" },
  { name: "Storytelling", level: 91, en: "Insight to narrative", ar: "تحويل الرؤى لقصة" },
  { name: "Dashboard UX", level: 87, en: "Executive clarity", ar: "وضوح تنفيذي" },
];

export function Skills() {
  const { t, lang, playHover } = useApp();
  return (
    <section id="skills" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="03" en="Toolset" ar="الأدوات" />
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              {t("A quiet orchestra of tools.", "أوركسترا هادئة من الأدوات.")}
            </h2>
            <p className="mt-6 text-foreground/70 max-w-md">
              {t(
                "Each instrument plays a different note in the same investigation. Together, they let the data finish its sentence.",
                "كل أداة تعزف نغمة مختلفة في التحقيق ذاته. ومعًا، تُكمل البيانات جملتها."
              )}
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-10 inline-flex items-center gap-4 glass metallic-border rounded-2xl px-5 py-4"
            >
              <div className="h-12 w-12 rounded-full gradient-luxury flex items-center justify-center shadow-gold-glow">
                <BadgeCheck size={20} className="text-ivory" />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {t("Honorary Badge", "شارة فخرية")}
                </div>
                <div className="font-display text-xl">
                  {t("Certified Data Detective", "محقّقة بيانات معتمدة")}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onMouseEnter={playHover}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 p-5 hover:border-gold/60 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-display text-xl">{s.name}</div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">
                      {lang === "ar" ? s.ar : s.en}
                    </div>
                  </div>
                  <div className="font-display text-gold text-lg tabular-nums">{s.level}</div>
                </div>
                <div className="mt-4 h-px bg-border relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/40 via-gold to-cherry"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
