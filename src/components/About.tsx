import { motion } from "framer-motion";
import { useApp } from "./AppProvider";

export function SectionLabel({ num, en, ar }: { num: string; en: string; ar: string }) {
  const { t } = useApp();
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-[10px] tracking-[0.4em] text-gold">{num}</span>
      <span className="h-px w-12 bg-gold/60" />
      <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
        {t(en, ar)}
      </span>
    </div>
  );
}

export function About() {
  const { t } = useApp();
  return (
    <section id="about" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="01" en="About" ar="من أنا" />
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              {useApp().lang === "ar" ? (
                <>أقرأ <em className="text-gold">الأرقام</em> كأنها أدب، وأكتب <em className="text-gold">لوحات البيانات</em> كأنها شِعر.</>
              ) : (
                <>I read <em className="text-gold">numbers</em> like literature, and write <em className="text-gold">dashboards</em> like poetry.</>
              )}
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-6 text-foreground/75">
              <p>
                {t(
                  "I'm a data analyst obsessed with the small frictions between business questions and the answers hidden in raw tables. My work lives where SQL meets storytelling.",
                  "أنا محلّلة بيانات شغوفة بالتفاصيل التي تختبئ بين سؤال العمل والإجابة الكامنة في الجداول الخام. أعمل حيث يلتقي الاستعلام بالسرد."
                )}
              </p>
              <p>
                {t(
                  "Every project begins the same way: a quiet pause, a careful question, then a long, patient conversation with the data — until it speaks.",
                  "كل مشروع يبدأ بنفس الطريقة: وقفة هادئة، سؤال متأنٍّ، ثم حوار طويل وصبور مع البيانات — حتى تتكلم."
                )}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {[
              { k: t("Years Analyzing", "سنوات الخبرة"), v: "3+" },
              { k: t("Dashboards Shipped", "لوحات منشورة"), v: "42" },
              { k: t("Rows Wrangled", "صفوف تمت معالجتها"), v: "12M+" },
              { k: t("Coffee : Insight", "قهوة : رؤية"), v: "3 : 1" },
            ].map((s) => (
              <div
                key={s.k}
                className="glass metallic-border rounded-2xl px-6 py-5 flex items-center justify-between"
              >
                <span className="text-sm text-muted-foreground tracking-wider uppercase">
                  {s.k}
                </span>
                <span className="font-display text-3xl text-gold">{s.v}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
