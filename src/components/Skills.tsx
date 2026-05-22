import { motion } from "framer-motion";
import { SectionHeader } from "./SectionLabel";
import { FileSpreadsheet, Database, Code2, LineChart, Layers3 } from "lucide-react";

const groups = [
  {
    icon: FileSpreadsheet,
    title: "Analysis - Excel",
    tags: ["VLOOKUP / XLOOKUP", "Pivot Tables", "Power Query", "Power Pivot", "Conditional Formatting", "Excel Dashboards"],
  },
  {
    icon: Database,
    title: "Databases & Querying - SQL",
    tags: ["SQL Server", "Advanced JOINs", "Window Functions", "CTEs", "Subqueries", "Views"],
  },
  {
    icon: Code2,
    title: "Programming - Python",
    tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    icon: LineChart,
    title: "Visualization",
    tags: ["Power BI", "DAX Measures", "Tableau", "Drill-Through", "Custom Tooltips", "Excel Dashboards"],
  },
  {
    icon: Layers3,
    title: "Data Modeling",
    tags: ["Star Schema", "ETL Fundamentals", "Bridge Tables", "Composite Keys", "Calendar Tables"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          num="02"
          tag="Technical Toolkit"
          title="The Tools That Do The Heavy Lifting"
          desc="A look at the technical stack I use to clean, model, query, and visualize data from raw files to polished reports."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="card-soft group rounded-2xl border border-border bg-card/40 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-wrap h-10 w-10 rounded-xl bg-gold/15 text-gold inline-flex items-center justify-center">
                  <g.icon size={18} />
                </div>
                <h3 className="font-display text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] tracking-wide px-2.5 py-1 rounded-full bg-background/60 border border-border text-foreground/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
