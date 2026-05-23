import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { PROJECTS } from "@/data/projects";
import pizzaImg from "@/assets/project-pizza.png";
import jumiaImg from "@/assets/project-jumia.png";
import bostaImg from "@/assets/project-bosta.png";

const COVERS: Record<string, string> = {
  pizza: pizzaImg,
  jumia: jumiaImg,
  bosta: bostaImg,
};

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS[params.slug];
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="font-display text-3xl mb-3">Project not found</p>
        <Link to="/" className="text-gold underline">Back home</Link>
      </div>
    </div>
  ),
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData() as { project: typeof PROJECTS[string] };

  return (
    // AppProvider now lives in __root.tsx — no wrapper needed here.
    <>
      <Navbar />
      <main className="relative pt-32 pb-24">
        {/* Hero */}
        <div className="relative px-5 md:px-10">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/"
              hash="projects"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to Projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
                {p.domain}
              </div>
              <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance mb-6">
                {p.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] tracking-wide px-3 py-1.5 rounded-full border border-gold/40 text-gold bg-card/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Cover visual */}
            <div className="mt-10 rounded-2xl border border-gold/30 bg-card overflow-hidden shadow-luxury">
              {COVERS[p.slug] ? (
                <img
                  src={COVERS[p.slug]}
                  alt={`${p.title} dashboard`}
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              ) : (
                <div className={`bg-gradient-to-br ${p.accent} h-56 md:h-72`} />
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-4xl mx-auto px-5 md:px-10 mt-16 space-y-16">
          <Section num="1" title="Overview">
            <p>{p.overview}</p>
          </Section>

          <Section num="2" title="Business Problem">
            <p>{p.problem}</p>
          </Section>

          <Section num="3" title="Process / Workflow">
            <ol className="space-y-3 list-none">
              {p.workflow.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-xl border border-border bg-card/40 p-4"
                >
                  <span className="h-7 w-7 shrink-0 rounded-full bg-gold/15 text-gold inline-flex items-center justify-center text-xs font-display">
                    {i + 1}
                  </span>
                  <span className="text-foreground/80 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section num="4" title="Key KPIs">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {p.kpis.map((k) => (
                <div
                  key={k.label}
                  className="rounded-xl border border-gold/30 bg-card/50 p-4 text-center"
                >
                  <div className="font-numeric text-xl md:text-2xl text-gold font-semibold leading-tight">
                    {k.value}
                  </div>
                  <div className="mt-1 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    {k.label}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section num="5" title="Key Insights">
            <ul className="space-y-2.5">
              {p.insights.map((insight, i) => (
                <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
                  <span className="text-gold shrink-0">▹</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section num="6" title="Final Recommendations">
            <div className="space-y-3">
              {p.recommendations.map((rec, i) => (
                <div
                  key={i}
                  className="rounded-xl border-l-2 border-gold bg-card/40 px-5 py-3 text-foreground/80 leading-relaxed"
                >
                  {rec}
                </div>
              ))}
            </div>
          </Section>

          <Section num="7" title="Repository">
            {/* bg-cherry + text-white — always Burgundy bg regardless of mode */}
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2.5 rounded-full px-6 py-3 bg-cherry text-white text-sm tracking-wider shadow-luxury hover:shadow-gold-glow transition-shadow"
            >
              <Github size={16} />
              View Full Project on GitHub
            </a>
          </Section>
        </div>
      </main>
    </>
  );
}

function Section({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="font-numeric text-2xl font-semibold text-cherry dark:text-cherry-soft">{num}</span>
        <span className="h-px w-8 bg-gold/50" />
        <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
      </div>
      <div className="text-foreground/80 leading-relaxed">{children}</div>
    </motion.section>
  );
}
