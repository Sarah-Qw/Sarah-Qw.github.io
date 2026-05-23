import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, Hourglass } from "lucide-react";
import { SectionHeader } from "./SectionLabel";
import hashImg from "@/assets/cert-hash.png";
import pythonImg from "@/assets/cert-python.png";

const certs = [
  {
    issuer: "Tech Mind",
    name: "Data Analysis Professional Diploma",
    date: "Expected - 06/2026",
    href: null,
    inProgress: true,
    image: null,
  },
  {
    issuer: "Hash Plus",
    name: "Data Analysis Bootcamp",
    date: "02/2026",
    href: "https://online.flippingbook.com/view/626227148/",
    inProgress: false,
    image: hashImg,
  },
  {
    issuer: "IBM · Coursera",
    name: "Python for Data Science, AI & Development",
    date: "07/2024",
    href: "https://www.coursera.org/account/accomplishments/verify/55LECGXPCMV9",
    inProgress: false,
    image: pythonImg,
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          num="04"
          tag="Certificates"
          title="Learning That Shows Up In The Work"
          desc="Credentials from recognized programs that validate the skills I use every day. Click any certificate to verify it."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
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
                className="h-full"
              >
                <Tag
                  {...props}
                  className="card-soft group flex flex-col h-full rounded-2xl border border-border bg-card/40 overflow-hidden"
                >
                  <div className="relative h-44 bg-gradient-to-br from-cherry/15 via-gold/10 to-background flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 data-grid-bg opacity-20" />
                    {c.image ? (
                      <img
                        src={c.image}
                        alt={c.name}
                        loading="lazy"
                        className="relative max-h-full max-w-full object-contain p-3 group-hover:scale-[1.04] transition-transform duration-700"
                      />
                    ) : (
                      <div className="relative h-16 w-16 rounded-full bg-gold/15 border border-gold/40 inline-flex items-center justify-center">
                        <GraduationCap size={28} className="text-gold" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="text-[10px] tracking-[0.22em] uppercase text-gold mb-1.5">
                      {c.issuer}
                    </div>
                    <div className="font-display text-lg leading-tight mb-2">{c.name}</div>
                    <div className="text-xs text-muted-foreground mb-3">{c.date}</div>
                    <div className="mt-auto text-xs inline-flex items-center gap-1.5 text-gold">
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
