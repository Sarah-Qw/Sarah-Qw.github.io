import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface AppCtx {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const Ctx = createContext<AppCtx | null>(null);

/**
 * Reads the saved theme from localStorage (client-only, SSR-safe).
 * Falls back to "light" if nothing is stored.
 */
function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    // localStorage blocked (private browsing, etc.)
  }
  return "light";
}

export function AppProvider({ children }: { children: ReactNode }) {
  // Lazy initialiser — reads localStorage on first render so the correct
  // theme is available synchronously before the first paint.
  const [theme, setThemeState] = useState<Theme>(readStoredTheme);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem("theme", t);
    } catch {
      // ignore write failures
    }
  };

  // Keep the <html> class in sync whenever theme changes.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <Ctx.Provider value={{ theme, setTheme }}>{children}</Ctx.Provider>;
}

export const useApp = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useApp must be used inside AppProvider");
  return c;
};
