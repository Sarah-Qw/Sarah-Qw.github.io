import { motion } from "framer-motion";
import { SectionHeader } from "./SectionLabel";
import { Search, BarChart3, Brain, Layers } from "lucide-react";

const highlights = [
  "Computer Science, UQU",
  "First Honors - 3.99 GPA",
  "Excel · Power BI · SQL · Python",
  "Data Modeling & ETL",
  "DAX & Power Query",
  "Storytelling with Data",
];

const cards = [
  { icon: Search, title: "Data Cleaning", desc: "Transforming raw, messy files into reliable, analysis-ready datasets." },
  { icon: BarChart3, title: "Visualization", desc: "Building interactive dashboards that make complex data instantly readable." },
  { icon: Brain, title: "Business Analysis", desc: "Translating business questions into SQL queries and measurable KPIs." },
  { icon: Layers, title: "Data Modeling", desc: "Designing Star Schemas and resolving complex relationship issues." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          num="01"
          tag="About Me"
          title="The Analyst behind the dashboards"
          desc="Get to know the person who turns questions into queries and data into decisions."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-5 text-foreground/80 leading-relaxed"
          >
            <p>
              A data analyst obsessed with the small frictions between business questions and the answers hidden in raw tables. My work lives where complex queries and visual design meet storytelling.
            </p>
            <p>
              Every project begins the same way: a quiet pause, a careful question, then a long, patient conversation with the data until it speaks.
            </p>
            <p>
              I've built projects using <strong className="text-foreground">SQL Server</strong>, <strong className="text-foreground">Power BI</strong>, <strong className="text-foreground">Excel (Power Query + DAX)</strong>, and <strong className="text-foreground">Python</strong>, always focused on the outcome: actionable, trustworthy insights delivered clearly.
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span
                  key={h}
                  className="text-[11px] tracking-wide px-3 py-1.5 rounded-full border border-gold/40 bg-card/40 text-foreground/80"
                >
                  {h}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-3">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-card/40 p-5 hover:border-gold/60 hover:bg-card/60 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-gold/15 text-gold inline-flex items-center justify-center mb-3 group-hover:bg-gold group-hover:text-cherry transition-colors">
                  <c.icon size={18} />
                </div>
                <h4 className="font-display text-lg mb-1">{c.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
