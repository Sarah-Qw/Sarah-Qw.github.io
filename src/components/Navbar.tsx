import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
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
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
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
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="relative transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:transition-all hover:after:w-full"
                style={{
                  color: isActive ? "#78292c" : undefined,
                }}
              >
                <span
                  className={isActive ? "" : "text-muted-foreground hover:text-foreground"}
                >
                  {n.label}
                </span>
                <span
                  className="absolute -bottom-1 left-0 h-px bg-[#78292c] transition-all"
                  style={{ width: isActive ? "100%" : 0 }}
                />
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/SarahQuwaidi_CV.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white shadow-luxury btn-press"
            style={{ backgroundColor: "#78292c" }}
            aria-label="Download resume"
          >
            <Download size={13} />
            Resume
          </a>
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
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-left px-3 py-2.5 rounded-lg text-sm tracking-wide transition-colors"
                style={{
                  color: isActive ? "#78292c" : undefined,
                  backgroundColor: isActive
                    ? "color-mix(in oklab, #78292c 8%, transparent)"
                    : undefined,
                }}
              >
                {n.label}
              </button>
            );
          })}
          <a
            href="/SarahQuwaidi_CV.pdf"
            download
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs tracking-[0.2em] uppercase text-white"
            style={{ backgroundColor: "#78292c" }}
          >
            <Download size={13} />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
