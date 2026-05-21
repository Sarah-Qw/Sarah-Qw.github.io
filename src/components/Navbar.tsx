import { useEffect, useState } from "react";
import { Languages, Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { useApp } from "./AppProvider";

const NAV = [
  { id: "home", en: "Home", ar: "الرئيسية" },
  { id: "about", en: "About", ar: "من أنا" },
  { id: "projects", en: "Projects", ar: "المشاريع" },
  { id: "skills", en: "Skills", ar: "المهارات" },
  { id: "experience", en: "Experience", ar: "الخبرات" },
  { id: "contact", en: "Contact", ar: "التواصل" },
];

export function Navbar() {
  const { lang, setLang, theme, setTheme, sound, setSound, t, playClick, playHover } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const go = (id: string) => {
    playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "glass metallic-border rounded-full mx-3 md:mx-8 px-5 py-2.5"
            : ""
        }`}
      >
        <button
          onClick={() => go("home")}
          onMouseEnter={playHover}
          className="flex items-center gap-2 group"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold">
            <span className="font-display text-gold text-sm">S</span>
            <span className="absolute inset-0 rounded-full border border-gold/40 animate-[pulse-ring_2.4s_ease-out_infinite]" />
          </span>
          <span className="font-display tracking-wide text-base">
            {t("Sarah Q.", "سارة ق.")}
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7 text-[11px] tracking-[0.18em] uppercase">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              onMouseEnter={playHover}
              className="relative text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {t(n.en, n.ar)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <IconBtn
            onClick={() => {
              playClick();
              setSound(!sound);
            }}
            label={t(sound ? "Sound on" : "Sound off", sound ? "الصوت مفعل" : "الصوت متوقف")}
          >
            {sound ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </IconBtn>
          <IconBtn
            onClick={() => {
              playClick();
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            label={t("Toggle theme", "تبديل الوضع")}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </IconBtn>
          <IconBtn
            onClick={() => {
              playClick();
              setLang(lang === "ar" ? "en" : "ar");
            }}
            label={lang === "ar" ? "EN" : "AR"}
          >
            <span className="text-[10px] tracking-widest font-medium">
              {lang === "ar" ? "EN" : "ع"}
            </span>
          </IconBtn>
        </div>
      </div>
    </header>
  );
}

function IconBtn({
  children,
  onClick,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
}) {
  const { playHover } = useApp();
  return (
    <button
      onClick={onClick}
      onMouseEnter={playHover}
      aria-label={label}
      title={label}
      className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border/60 bg-card/40 backdrop-blur hover:border-gold hover:text-gold transition-all"
    >
      {children}
    </button>
  );
}
