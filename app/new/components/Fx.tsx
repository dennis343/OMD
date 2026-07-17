"use client";

import { useEffect, useRef } from "react";

/* Aktiviert das Scroll-Reveal-System: markiert <html> als fx-fähig und
   beobachtet alle [data-fx]- und .fx-words-Elemente. Ohne JS bleibt alles
   sichtbar; mit prefers-reduced-motion wird gar nicht erst aktiviert. */
export function FxBoot() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("fx-on");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("fx-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    document.querySelectorAll("[data-fx], .fx-words").forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      root.classList.remove("fx-on");
    };
  }, []);
  return null;
}

/* Zerlegt einen Text in maskierte Wörter für den Wort-für-Wort-Reveal. */
export function Words({ text, from = 0 }: { text: string; from?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`}>
          <span className="hw-clip">
            <span className="hw" style={{ ["--i" as string]: from + i }}>
              {w}
            </span>
          </span>{" "}
        </span>
      ))}
    </>
  );
}

/* Zählt eine Kennzahl hoch, sobald sie sichtbar wird. Server-seitig steht
   bereits der Endwert im Markup — ohne JS oder mit reduced motion bleibt er. */
export function CountUp({
  to,
  decimals = 0,
  suffix = "",
  duration = 1600,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const fmt = (v: number) =>
    v
      .toFixed(decimals)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + suffix;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = fmt(to * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, decimals, suffix, duration]);

  return <span ref={ref}>{fmt(to)}</span>;
}
