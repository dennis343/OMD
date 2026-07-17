"use client";

import { useEffect, useRef } from "react";
import { IMG } from "@/app/new/lib/images";
import { CountUp, Words } from "./Fx";

type HeroProps = { onOpenSelector: () => void };

const DOORS = [
  {
    tag: "Mülheim · Ruhrgebiet",
    title: "Vor Ort",
    fit: "Für euch, wenn ihr mit eurem Hund im echten Alltag arbeiten wollt — am Platz, in der Stadt, vor eurer Haustür.",
    href: "#vor-ort",
    cta: "Vor-Ort-Angebote",
    img: IMG.doorLocal,
    alt: "Mensch und Hund unterwegs auf einem Weg — Training im Alltag",
  },
  {
    tag: "Gesamter DACH-Raum",
    title: "Online",
    fit: "Für euch, wenn ihr dieselbe Methodik wollt, aber nicht in Mülheim wohnt — per Videoanalyse, Programm oder Club.",
    href: "#anywhere",
    cta: "Online-Angebote",
    img: IMG.doorOnline,
    alt: "Aufmerksamer Hund im Porträt — begleitet per Videoanalyse",
  },
  {
    tag: "Hundeschulen · Trainer:innen",
    title: "Pro & Business",
    fit: "Für euch, wenn ihr professionell mit Hunden arbeitet und euer Angebot auf System-Niveau heben wollt.",
    href: "#pro",
    cta: "Pro-Bereich",
    img: IMG.doorPro,
    alt: "Professionelle Arbeit mit Hund — Übergabe zwischen Mensch und Tier",
  },
] as const;

const STATS: { to: number; decimals?: number; suffix?: string; label: string }[] = [
  { to: 5, decimals: 1, label: "Google-Bewertung" },
  { to: 1400, suffix: "+", label: "begleitete Hunde" },
  { to: 13, label: "Jahre Erfahrung" },
  { to: 0, suffix: " %", label: "aversive Methoden" },
];

export default function Hero({ onOpenSelector }: HeroProps) {
  const bgRef = useRef<HTMLImageElement>(null);

  /* Sanfter Parallax auf dem Hintergrundbild — nur ohne reduced motion. */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const img = bgRef.current;
    if (!img) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        img.style.transform = `translateY(${Math.min(window.scrollY, 900) * 0.16}px) scale(1.1)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      aria-labelledby="hero-headline"
      className="theme-dark hero-section"
      style={{ position: "relative", overflow: "hidden", borderBottom: "2px solid var(--omd-yellow)", paddingTop: 48, paddingBottom: 64 }}
    >
      <div className="hero-bg" aria-hidden="true">
        <img
          ref={bgRef}
          src={IMG.heroBg}
          alt=""
          fetchPriority="high"
          decoding="async"
          style={{ transform: "scale(1.1)" }}
        />
        <div className="hero-veil" />
      </div>

      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-meta" data-fx>
          <span className="eyebrow">Hundetraining mit System</span>
          <span className="mono" style={{ color: "var(--ink-3)" }}>Mülheim · Ruhrgebiet · DACH</span>
        </div>

        <div className="hero-top">
          <h1 id="hero-headline" className="serif hero-headline fx-words">
            <Words text="Ihr bucht kein Training." />
            <br />
            <Words text="Ihr bucht eine" from={4} />{" "}
            <span className="hw-clip">
              <em className="hl-yellow hw" style={{ fontStyle: "normal", fontWeight: 700, ["--i" as string]: 7 }}>
                Veränderung.
              </em>
            </span>
          </h1>

          <div className="hero-side" data-fx style={{ ["--fx-d" as string]: "600ms" }}>
            <p className="hero-sub">
              Keine lose Sammlung von Kursstunden, sondern ein didaktisches System
              mit klarem Ziel: ein Hund, der euch versteht — und ein Alltag, der
              wieder leicht ist. Ehrlich gesagt: Wir passen nicht zu jedem.
              Findet in zwei Minuten heraus, ob wir zueinander passen.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={onOpenSelector} type="button">
                Passen wir zueinander? <span className="arrow" aria-hidden="true">→</span>
              </button>
              <span className="mono hero-cta-note">2 Minuten · 3 Fragen · Klare Empfehlung</span>
            </div>
          </div>
        </div>

        <div className="hero-doors-head" data-fx>
          <span className="eyebrow">Drei Wege · Ein System</span>
        </div>
        <nav className="hero-doors" aria-label="Die drei Wege zu oooh my dog!">
          {DOORS.map((d, i) => (
            <a key={d.title} href={d.href} className="hero-door" data-fx style={{ ["--fx-d" as string]: `${i * 130}ms` }}>
              <span className="hero-door-img">
                <img src={d.img} alt={d.alt} loading="lazy" decoding="async" />
                <span className="hero-door-tag mono">{d.tag}</span>
              </span>
              <span className="hero-door-body">
                <span className="serif hero-door-title">{d.title}</span>
                <p className="hero-door-fit">{d.fit}</p>
                <span className="hero-door-cta mono">
                  {d.cta} <span className="arrow" aria-hidden="true">→</span>
                </span>
              </span>
            </a>
          ))}
        </nav>

        <dl className="stats-grid" data-fx>
          {STATS.map((s) => (
            <div key={s.label} className="stat-cell">
              <dt className="mono" style={{ color: "var(--ink-3)" }}>{s.label}</dt>
              <dd className="serif stat-num">
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="hero-cue" aria-hidden="true">
          <span className="hero-cue-line" />
          <span className="mono" style={{ color: "var(--ink-3)" }}>Eure Geschichte beginnt hier</span>
        </div>
      </div>

      <style>{`
        .hero-bg { position: absolute; inset: 0; z-index: 0; }
        .hero-bg img { width: 100%; height: 118%; object-fit: cover; object-position: 68% 40%; will-change: transform; }
        .hero-veil {
          position: absolute; inset: 0;
          background:
            linear-gradient(105deg, rgba(7,7,26,0.94) 0%, rgba(7,7,26,0.82) 44%, rgba(7,7,26,0.55) 100%),
            linear-gradient(180deg, rgba(7,7,26,0.55) 0%, rgba(7,7,26,0.35) 40%, rgba(7,7,26,0.96) 100%);
        }

        .hero-meta { display: flex; flex-direction: column; gap: 6px; margin-bottom: 40px; }
        .hero-headline { font-size: clamp(34px, 6.2vw, 90px); line-height: 1.05; letter-spacing: -0.028em; font-weight: 600; max-width: 18ch; text-wrap: balance; }
        .hero-top { display: grid; grid-template-columns: 1fr; gap: 28px; align-items: end; }
        .hero-sub { font-size: 18px; line-height: 1.65; color: var(--ink-2); max-width: 52ch; font-family: var(--serif); font-weight: 400; }
        .hero-ctas { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; align-items: flex-start; }
        .hero-cta-note { color: var(--ink-3); }

        .hero-doors-head { margin-top: 64px; margin-bottom: 18px; }
        .hero-doors { display: grid; grid-template-columns: 1fr; gap: 12px; }
        .hero-door {
          display: flex; flex-direction: column;
          background: color-mix(in oklab, var(--bg-2) 82%, transparent);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid var(--line-2);
          overflow: hidden;
          transition: border-color .25s, transform .3s cubic-bezier(0.22, 1, 0.36, 1), background .25s;
        }
        .hero-door:hover { border-color: var(--omd-yellow); transform: translateY(-4px); background: var(--bg-3); }
        .hero-door:hover .arrow { transform: translateX(3px); }
        .hero-door-img { position: relative; display: block; aspect-ratio: 16 / 9; overflow: hidden; }
        .hero-door-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .7s cubic-bezier(0.22, 1, 0.36, 1); }
        .hero-door:hover .hero-door-img img { transform: scale(1.06); }
        .hero-door-img::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(7,7,26,0.05) 40%, rgba(7,7,26,0.72) 100%); }
        .hero-door-tag { position: absolute; left: 16px; bottom: 12px; z-index: 2; color: #F7F7F7; font-weight: 700; text-shadow: 0 1px 10px rgba(7,7,26,0.8); }
        .hero-door-body { display: flex; flex-direction: column; flex: 1; padding: 22px 22px 20px; }
        .hero-door-title { font-size: 27px; letter-spacing: -0.018em; font-weight: 600; line-height: 1.1; margin-bottom: 10px; color: var(--cream); }
        .hero-door-fit { font-size: 15px; line-height: 1.6; color: var(--ink-2); margin-bottom: 20px; flex: 1; }
        .hero-door-cta { color: var(--ink); font-weight: 700; border-bottom: 2px solid var(--omd-yellow); padding-bottom: 4px; align-self: flex-start; }

        .stats-grid { margin-top: 48px; display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-bottom: 0; }
        .stat-cell { padding: 24px 16px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .stat-num { font-size: 34px; letter-spacing: -0.02em; color: var(--cream); font-weight: 600; line-height: 1; margin-top: 8px; font-variant-numeric: tabular-nums; }
        .stat-cell:nth-child(2n) { border-right: none; }
        .stats-grid > .stat-cell:nth-last-child(-n+2) { border-bottom: none; }

        @media (min-width: 640px) {
          .hero-section { padding-top: 64px !important; padding-bottom: 80px !important; }
          .hero-meta { flex-direction: row; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 56px; }
          .hero-doors { grid-template-columns: 1fr 1fr; }
          .stat-num { font-size: 40px; }
          .stat-cell { padding: 28px 20px; }
        }
        @media (min-width: 900px) {
          .hero-section { padding-top: 88px !important; padding-bottom: 96px !important; }
          .hero-top { grid-template-columns: 1.25fr 1fr; gap: 72px; }
          .hero-sub { font-size: 19px; }
          .hero-doors { grid-template-columns: repeat(3, 1fr); gap: 14px; }
          .hero-doors-head { margin-top: 88px; }
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
          .stat-cell { padding: 36px 28px; border-bottom: none; }
          .stat-cell:last-child { border-right: none; }
          .stat-num { font-size: 44px; }
        }
      `}</style>
    </section>
  );
}
