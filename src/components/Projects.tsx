import { motion } from "framer-motion";
import { useState } from "react";
import { useApp } from "./AppProvider";
import { SectionLabel } from "./About";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "P / 01",
    en: { title: "Pizza Sales Deep Dive", desc: "Answered 20 strategic questions with SQL and built an animated, executive-grade dashboard in Power BI — surfacing the late-night slice that quietly funded the brand." },
    ar: { title: "تحليل مبيعات البيتزا", desc: "أجبت عن عشرين سؤالاً استراتيجياً بـ SQL، وبنيت لوحة تنفيذية متحركة في Power BI — كشفت الشريحة الليلية التي مولّت العلامة بهدوء." },
    tools: ["SQL", "Power BI", "DAX"],
    metric: { k: "Revenue uncovered", v: "+18%" },
    accent: "from-[#3B1F24] to-[#5E556B]",
  },
  {
    num: "P / 02",
    en: { title: "Retail Data Cleaning & Documentation", desc: "Reconciled three years of malformed dates and unit-price drift with Power Query, then shipped a versioned data dictionary the analytics team actually reads." },
    ar: { title: "تنظيف وتوثيق بيانات التجزئة", desc: "صحّحت ثلاث سنوات من التواريخ المشوّهة وفروقات الأسعار باستخدام Power Query، ثم أنتجت قاموس بيانات موثّق يقرأه الفريق فعلاً." },
    tools: ["Power Query", "Excel", "Notion"],
    metric: { k: "Errors resolved", v: "11,400" },
    accent: "from-[#B79C6A] to-[#3B1F24]",
  },
  {
    num: "P / 03",
    en: { title: "Customer Behaviour Intelligence", desc: "Segmented 240k customers into nine behavioural archetypes with Python and k-means, then translated each cluster into a campaign brief marketing could ship the same week." },
    ar: { title: "نظام تحليل سلوك العملاء", desc: "صنّفت 240 ألف عميل في تسعة أنماط سلوكية باستخدام Python و k-means، ثم حوّلت كل عنقود إلى موجز حملة جاهز للتنفيذ." },
    tools: ["Python", "scikit-learn", "Tableau"],
    metric: { k: "Conversion lift", v: "+27%" },
    accent: "from-[#5E556B] to-[#B79C6A]",
  },
  {
    num: "P / 04",
    en: { title: "Executive KPI Command Center", desc: "Designed a single source of truth that consolidated 14 fragmented reports into one cinematic dashboard the C-suite checks before coffee." },
    ar: { title: "مركز مؤشرات الأداء التنفيذي", desc: "صمّمت مصدراً موحداً للحقيقة جمع 14 تقريراً متفرقاً في لوحة واحدة سينمائية يفتحها المسؤولون قبل قهوة الصباح." },
    tools: ["Power BI", "SQL", "Figma"],
    metric: { k: "Time saved / wk", v: "9 hrs" },
    accent: "from-[#3B1F24] to-[#B79C6A]",
  },
];

export function Projects() {
  const { t, playHover } = useApp();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="02" en="Selected Work" ar="أعمال مختارة" />
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <h2 className="font-display text-4xl md:text-6xl max-w-2xl leading-tight">
            {t("Case files from the archive.", "ملفات من الأرشيف.")}
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            {t(
              "Four selected investigations — each one a question the data refused to answer politely.",
              "أربع قضايا مختارة — كل واحدة منها سؤال رفضت البيانات الإجابة عليه بأدب."
            )}
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => {
            const content = p[useApp().lang === "ar" ? "ar" : "en"];
            const isActive = active === i;
            return (
              <motion.article
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                onMouseEnter={() => {
                  setActive(i);
                  playHover();
                }}
                onMouseLeave={() => setActive(null)}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-sm metallic-border cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                <div className="absolute inset-0 data-grid-bg opacity-0 group-hover:opacity-30 transition-opacity duration-700" />

                <div className="relative grid md:grid-cols-12 items-center gap-8 p-8 md:p-12">
                  <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-3">
                    <span className="text-[10px] tracking-[0.3em] text-gold">{p.num}</span>
                    <span className="hidden md:block h-px w-10 bg-gold/60" />
                  </div>

                  <div className="md:col-span-6">
                    <h3 className="font-display text-3xl md:text-5xl leading-tight text-balance group-hover:text-ivory transition-colors duration-500">
                      {content.title}
                    </h3>
                    <p className="mt-4 text-foreground/70 group-hover:text-ivory/80 transition-colors duration-500 max-w-xl">
                      {content.desc}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tools.map((tt) => (
                        <span
                          key={tt}
                          className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-gold/40 text-gold bg-background/40"
                        >
                          {tt}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <ProjectMiniChart active={isActive} index={i} />
                  </div>

                  <div className="md:col-span-1 flex md:justify-end">
                    <div className="h-14 w-14 rounded-full border border-gold/60 inline-flex items-center justify-center group-hover:bg-gold group-hover:text-cherry transition-all duration-500">
                      <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-500" />
                    </div>
                  </div>
                </div>

                <div className="relative px-8 md:px-12 pb-6 flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground group-hover:text-ivory/70 transition-colors duration-500">
                  <span>{p.metric.k}</span>
                  <span className="h-px flex-1 bg-current opacity-30" />
                  <span className="font-display text-2xl normal-case tracking-normal text-gold">
                    {p.metric.v}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectMiniChart({ active, index }: { active: boolean; index: number }) {
  const bars = [
    [40, 60, 30, 80, 55, 70, 45],
    [25, 50, 75, 35, 60, 40, 65],
    [60, 35, 70, 50, 80, 30, 55],
    [45, 70, 30, 65, 50, 75, 40],
  ][index];
  return (
    <div className="relative h-24 flex items-end gap-1.5 justify-end">
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            height: `${active ? h : h * 0.4}%`,
            transitionDelay: `${i * 40}ms`,
          }}
          className="w-2.5 rounded-sm bg-gold/80 transition-all duration-700"
        />
      ))}
    </div>
  );
}
