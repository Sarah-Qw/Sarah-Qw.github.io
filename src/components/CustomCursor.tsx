import { useEffect, useRef } from "react";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("hide-cursor");

    let mx = 0, my = 0, rx = 0, ry = 0;
    let lastSpawn = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
      }
      const now = performance.now();
      if (now - lastSpawn > 35 && particlesRef.current) {
        lastSpawn = now;
        const p = document.createElement("span");
        p.className = "cursor-particle";
        p.style.left = `${mx}px`;
        p.style.top = `${my}px`;
        particlesRef.current.appendChild(p);
        setTimeout(() => p.remove(), 700);
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a,button,[data-cursor='hover'],input,textarea");
      if (ringRef.current) {
        ringRef.current.classList.toggle("is-hover", !!interactive);
      }
    };

    const raf = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      }
      requestAnimationFrame(raf);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("hide-cursor");
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-ring {
          position: fixed; top: 0; left: 0; width: 36px; height: 36px;
          border: 1px solid var(--gold); border-radius: 999px;
          pointer-events: none; z-index: 9999; mix-blend-mode: difference;
          transition: width .25s ease, height .25s ease, background .25s ease, border-color .25s ease;
          box-shadow: 0 0 24px color-mix(in oklab, var(--gold) 40%, transparent);
        }
        .cursor-ring::before {
          content:""; position:absolute; inset:-6px; border-radius:999px;
          border: 1px dashed color-mix(in oklab, var(--gold) 50%, transparent);
          animation: spin 8s linear infinite;
        }
        .cursor-ring.is-hover { width: 56px; height: 56px; background: color-mix(in oklab, var(--gold) 12%, transparent); }
        .cursor-dot {
          position: fixed; top:0; left:0; width:6px; height:6px; border-radius:999px;
          background: var(--gold); pointer-events:none; z-index:9999;
        }
        .cursor-particle {
          position: fixed; width: 3px; height: 3px; border-radius: 999px;
          background: var(--gold); pointer-events:none; z-index: 9998;
          transform: translate(-50%, -50%);
          animation: cursor-fade 0.7s ease forwards;
        }
        @keyframes cursor-fade {
          0% { opacity: 0.9; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -120%) scale(0.2); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (pointer: coarse) {
          .cursor-ring, .cursor-dot, .cursor-particle { display: none !important; }
        }
      `}</style>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
      <div ref={particlesRef} />
    </>
  );
}
