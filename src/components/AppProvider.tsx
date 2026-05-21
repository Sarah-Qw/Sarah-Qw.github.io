import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "en" | "ar";
type Theme = "light" | "dark";

interface AppCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  sound: boolean;
  setSound: (s: boolean) => void;
  t: (en: string, ar: string) => string;
  playHover: () => void;
  playClick: () => void;
}

const Ctx = createContext<AppCtx | null>(null);

let audioCtx: AudioContext | null = null;
const tone = (freq: number, dur: number, type: OscillatorType = "sine", gain = 0.04) => {
  try {
    if (typeof window === "undefined") return;
    audioCtx = audioCtx || new (window.AudioContext || (window as any).webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.value = 0;
    o.connect(g).connect(audioCtx.destination);
    const now = audioCtx.currentTime;
    g.gain.linearRampToValueAtTime(gain, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    o.start(now);
    o.stop(now + dur);
  } catch {}
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [sound, setSound] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const playHover = () => sound && tone(880, 0.12, "sine", 0.015);
  const playClick = () => sound && tone(1320, 0.08, "triangle", 0.05);

  const t = (en: string, ar: string) => (lang === "ar" ? ar : en);

  return (
    <Ctx.Provider value={{ lang, setLang, theme, setTheme, sound, setSound, t, playHover, playClick }}>
      {children}
    </Ctx.Provider>
  );
}

export const useApp = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useApp must be used inside AppProvider");
  return c;
};
