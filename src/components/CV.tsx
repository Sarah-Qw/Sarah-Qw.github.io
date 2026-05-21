import { motion } from "framer-motion";
import { useApp } from "./AppProvider";
import { SectionLabel } from "./About";
import { Download, FileText } from "lucide-react";

export function CV() {
  const { t, lang, playClick } = useApp();
  return (
    <section id="cv" className="relative py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionLabel num="05" en="Dossier" ar="الملف" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative metallic-border rounded-3xl overflow-hidden bg-gradient-to-br from-card to-background shadow-luxury"
        >
          <div className="absolute inset-0 data-grid-bg opacity-30" />
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gold/15 blur-3xl" />

          <div className="relative grid md:grid-cols-12 gap-8 p-10 md:p-16">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-gold mb-6">
                <FileText size={14} />
                {t("Classified · Personal Dossier", "ملف شخصي · موثّق")}
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
                {lang === "ar" ? (
                  <>الملف كاملاً، <em className="text-gold">بلا حذف</em>.</>
                ) : (
                  <>The full case file, <em className="text-gold">unredacted</em>.</>
                )}
              </h2>
              <p className="mt-6 text-foreground/70 max-w-md">
                {t(
                  "A single, carefully composed PDF — every investigation, certification, and tool, distilled into one document.",
                  "ملف PDF واحد مركّب بعناية — كل التحقيقات والشهادات والأدوات في وثيقة واحدة."
                )}
              </p>

              <button
                onClick={playClick}
                className="group mt-10 inline-flex items-center gap-4 rounded-full bg-cherry text-primary-foreground pl-7 pr-2 py-2 shadow-luxury hover:shadow-gold-glow transition-shadow"
              >
                <span className="text-sm tracking-[0.25em] uppercase">
                  {t("Download CV", "تحميل السيرة")}
                </span>
                <span className="h-11 w-11 rounded-full bg-gold flex items-center justify-center text-cherry group-hover:rotate-12 transition-transform">
                  <Download size={16} />
                </span>
              </button>
            </div>

            <div className="md:col-span-4 relative">
              <div className="relative aspect-[3/4] rounded-2xl border border-gold/40 bg-ivory/60 dark:bg-card/80 p-5 shadow-luxury overflow-hidden">
                <div className="absolute top-3 right-3 text-[8px] tracking-widest text-gold">FILE · SQ-2026</div>
                <div className="h-2 w-12 bg-cherry rounded-full mb-4" />
                <div className="space-y-1.5">
                  <div className="h-2 w-3/4 bg-foreground/20 rounded-full" />
                  <div className="h-2 w-1/2 bg-foreground/15 rounded-full" />
                </div>
                <div className="mt-6 space-y-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-1.5 bg-foreground/10 rounded-full" style={{ width: `${60 + ((i * 13) % 35)}%` }} />
                  ))}
                </div>
                <div className="absolute bottom-4 left-5 right-5 flex items-end gap-1 h-12">
                  {[40, 70, 30, 60, 90, 50, 75].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-gold/70 rounded-sm" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
