import { createFileRoute } from "@tanstack/react-router";
import { AppProvider } from "@/components/AppProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { CV } from "@/components/CV";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarah Quwaidi — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Sarah Abdulmaleek Quwaidi — a data analyst turning numbers into stories with SQL, Python, and Power BI.",
      },
      { property: "og:title", content: "Sarah Quwaidi — Data Analyst Portfolio" },
      {
        property: "og:description",
        content: "Turning data into meaning. Selected work, skills, and a downloadable dossier.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <AppProvider>
      <div className="relative">
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <CV />
          <Contact />
        </main>
      </div>
    </AppProvider>
  );
}
