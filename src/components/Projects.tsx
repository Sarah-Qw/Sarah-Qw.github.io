import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeader } from "./SectionLabel";
import pizzaImg from "@/assets/project-pizza.png";
import jumiaImg from "@/assets/project-jumia.png";
import bostaImg from "@/assets/project-bosta.png";

const projects = [
  {
    slug: "pizza",
    domain: "Food & Beverage · Restaurant Operations",
    name: "Pizza Sales Analysis",
    desc: "Answered 20 business questions using SQL queries on 48K+ records, then built a Power BI dashboard to track revenue, orders, and peak hours.",
    tools: ["SQL", "Power BI", "DAX"],
    github: "https://github.com/Sarah-Qw/pizza-sales-sql-analysis",
    image: pizzaImg,
  },
  {
    slug: "jumia",
    domain: "Retail · E-Commerce",
    name: "(Jumia) Retail Sales Analysis",
    desc: "Multi-page Power BI dashboard analyzing $2.3M in sales across 4 years. Resolved Many-to-Many model issues and found that discounts above 30% destroy profitability.",
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    github: "https://github.com/Sarah-Qw/-retail-sales-powerbi-dashboard",
    image: jumiaImg,
  },
  {
    slug: "bosta",
    domain: "Logistics · Supply Chain",
    name: "(Bosta) Logistics & Shipping Analysis",
    desc: "Processed ~1M shipment records from 12 monthly files in Excel. Built a Star Schema with DAX and uncovered a 15% shipping cost gap in southern routes.",
    tools: ["Excel", "Power Query", "Power Pivot", "DAX"],
    github: "https://github.com/Sarah-Qw/logistics-operational-analysis",
    image: bostaImg,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          num="03"
          tag="Selected Work"
          title="From Raw Data To Real Answers"
          desc="Each project starts with a business question and ends with an insight that's actually useful. Click any project to explore the full story."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="h-full"
            >
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col h-full rounded-2xl border border-border bg-card/40 overflow-hidden hover:border-gold/60 hover:shadow-luxury transition-all"
              >
                <div className="relative h-48 bg-card overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cherry/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                    <span className="text-xs tracking-[0.2em] uppercase text-ivory inline-flex items-center gap-1">
                      View Project <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <div className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">{p.domain}</div>
                  <h3 className="font-display text-xl md:text-2xl leading-tight mb-2">{p.name}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-wide px-2 py-1 rounded-full border border-gold/30 text-gold/90 bg-background/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/60">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors"
                    >
                      <Github size={14} /> GitHub
                    </a>
                    <span className="h-9 w-9 rounded-full border border-gold/50 inline-flex items-center justify-center group-hover:bg-gold group-hover:text-cherry transition-all">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
