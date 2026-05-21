import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useApp } from "./AppProvider";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Toolkit" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const { theme, setTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div
        className={`mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "glass metallic-border rounded-full mx-3 md:mx-8 px-4 md:px-6 py-2.5" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 bg-card/40 backdrop-blur metallic-border group-hover:border-gold transition-colors">
            <span className="font-display text-base text-gold font-semibold leading-none">S</span>
          </span>
          <span className="font-display tracking-wide text-base md:text-lg">
            Sarah <span className="text-gold">Q.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[11px] tracking-[0.18em] uppercase">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="relative text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border/60 bg-card/40 backdrop-blur hover:border-gold hover:text-gold transition-all"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-full border border-border/60 bg-card/40 backdrop-blur"
            aria-label="Menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-4 mt-3 glass metallic-border rounded-2xl p-4 flex flex-col gap-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="text-left px-3 py-2.5 rounded-lg text-sm tracking-wide hover:bg-gold/10 hover:text-gold transition-colors"
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
