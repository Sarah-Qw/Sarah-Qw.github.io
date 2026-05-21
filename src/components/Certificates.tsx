import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, Hourglass } from "lucide-react";
import { SectionHeader } from "./SectionLabel";

const certs = [
  {
    issuer: "Tech Mind",
    name: "Data Analysis Professional Diploma",
    date: "Expected - 06/2026",
    href: null,
    inProgress: true,
  },
  {
    issuer: "Hash Plus",
    name: "Data Analysis Bootcamp",
    date: "02/2026",
    href: "https://online.flippingbook.com/view/626227148/",
    inProgress: false,
  },
  {
    issuer: "IBM · Coursera",
    name: "Python for Data Science, AI & Development",
    date: "07/2024",
    href: "https://www.coursera.org/account/accomplishments/verify/55LECGXPCMV9",
    inProgress: false,
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          num="04"
          tag="Certificates"
          title="Learning that shows up in the work"
          desc="Credentials from recognized programs that validate the skills I use every day. Click any certificate to verify it."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => {
            const Tag: any = c.href ? "a" : "div";
            const props: any = c.href
              ? { href: c.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Tag
                  {...props}
                  className="group block rounded-2xl border border-border bg-card/40 overflow-hidden hover:border-gold/60 hover:shadow-luxury transition-all"
                >
                  <div className="relative h-40 bg-gradient-to-br from-cherry/20 via-gold/10 to-background flex items-center justify-center">
                    <div className="absolute inset-0 data-grid-bg opacity-20" />
                    <div className="relative h-16 w-16 rounded-full bg-gold/15 border border-gold/40 inline-flex items-center justify-center">
                      <GraduationCap size={28} className="text-gold" />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] tracking-[0.22em] uppercase text-gold mb-1.5">
                      {c.issuer}
                    </div>
                    <div className="font-display text-lg leading-tight mb-2">{c.name}</div>
                    <div className="text-xs text-muted-foreground mb-3">{c.date}</div>
                    <div className="text-xs inline-flex items-center gap-1.5 text-gold">
                      {c.inProgress ? (
                        <>
                          <Hourglass size={12} /> In Progress
                        </>
                      ) : (
                        <>
                          <ExternalLink size={12} /> Verify Certificate
                        </>
                      )}
                    </div>
                  </div>
                </Tag>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
