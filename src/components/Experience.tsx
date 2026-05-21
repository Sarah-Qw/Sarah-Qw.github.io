import { motion } from "framer-motion";
import { useApp } from "./AppProvider";
import { SectionLabel } from "./About";

const items = [
  {
    year: "2024 — Now",
    en: { role: "Senior Data Analyst", org: "Confidential · Riyadh", desc: "Owning the analytics layer for a multi-brand retail group — from raw warehouse to executive narrative." },
    ar: { role: "محلّلة بيانات أولى", org: "جهة خاصة · الرياض", desc: "أمتلك طبقة التحليلات لمجموعة تجزئة متعددة العلامات — من المستودع الخام إلى السرد التنفيذي." },
  },
  {
    year: "2022 — 2024",
    en: { role: "Data Analyst", org: "FinTech Studio", desc: "Built the company's first behavioural segmentation model and shipped 18 production dashboards." },
    ar: { role: "محلّلة بيانات", org: "استوديو تقنية مالية", desc: "بنيت أول نموذج تصنيف سلوكي للشركة، وأطلقت 18 لوحة بيانات في الإنتاج." },
  },
  {
    year: "2021 — 2022",
    en: { role: "Junior BI Analyst", org: "E-commerce Group", desc: "Cleaned, modeled, and documented years of legacy data the team had quietly stopped trusting." },
    ar: { role: "محلّلة ذكاء أعمال مبتدئة", org: "مجموعة تجارة إلكترونية", desc: "نظّفت ووثّقت سنوات من البيانات القديمة التي تخلّى الفريق عن الثقة بها بهدوء." },
  },
];

export function Experience() {
  const { t, lang } = useApp();
  return (
    <section id="experience" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="04" en="Experience" ar="الخبرات" />
        <div className="grid lg:grid-cols-12 gap-12">
          <h2 className="lg:col-span-5 font-display text-4xl md:text-6xl leading-tight">
            {t("An archive of quiet investigations.", "أرشيف من التحقيقات الهادئة.")}
          </h2>

          <div className="lg:col-span-7 relative">
            <div className="absolute top-0 bottom-0 ltr:left-3 rtl:right-3 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />
            <div className="space-y-12">
              {items.map((it, i) => {
                const c = lang === "ar" ? it.ar : it.en;
                return (
                  <motion.div
                    key={it.year}
                    initial={{ opacity: 0, x: lang === "ar" ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className="relative ltr:pl-12 rtl:pr-12"
                  >
                    <div className="absolute ltr:left-0 rtl:right-0 top-1.5 h-6 w-6 rounded-full border border-gold flex items-center justify-center bg-background">
                      <div className="h-2 w-2 rounded-full bg-gold" />
                    </div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                      {it.year}
                    </div>
                    <div className="font-display text-2xl">{c.role}</div>
                    <div className="text-sm text-muted-foreground mt-1">{c.org}</div>
                    <p className="mt-3 text-foreground/75 max-w-lg">{c.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
