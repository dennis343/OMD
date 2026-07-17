"use client";

import { useEffect, useRef, useState } from "react";
import { IMG } from "@/app/new/lib/images";

const MOMENTS = [
  {
    title: "Die Leine spannt sich — und euer Puls gleich mit.",
    text:
      "Ein Hund am anderen Ende der Straße, und aus dem Spaziergang wird Hochspannung. Ihr kennt jede Ausweichroute im Viertel. Und trotzdem passiert es wieder.",
    img: IMG.storyTension,
    alt: "Wachsamer Hund, hochkonzentriert — der Moment, bevor die Leine sich spannt",
    cap: "Begegnung · Sekunden vorher",
  },
  {
    title: "Ihr geht raus, wenn sonst niemand draußen ist.",
    text:
      "5:30 Uhr, Nieselregen, leere Feldwege. Nicht, weil ihr das schön findet — sondern weil es die einzige Zeit ist, in der ihr durchatmen könnt.",
    img: IMG.storyDawn,
    alt: "Hund im Dämmerlicht auf weiter Fläche — Spaziergang zu Randzeiten",
    cap: "Feldweg · Bevor die Stadt wach ist",
  },
  {
    title: "Und abends fragt ihr euch: Liegt es an uns?",
    text:
      "Ihr habt Bücher gelesen, Videos geschaut, Tipps gesammelt — von Trainern, Nachbarn, dem Internet. Je mehr Stimmen, desto weniger Klarheit. Euer Hund ist erschöpft. Ihr auch.",
    img: IMG.storyRest,
    alt: "Hund liegt erschöpft auf dem Boden — Ruhe nach einem anstrengenden Tag",
    cap: "Zuhause · Nach dem Sturm",
  },
];

export default function Story() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.idx ?? 0));
          }
        }
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="alltag" aria-labelledby="story-heading" className="sec-pad" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="shell">
        <div className="story-head" data-fx>
          <div className="eyebrow">Der Alltag davor</div>
          <h2 id="story-heading" className="serif story-h">
            Kennt ihr <em className="hl-yellow" style={{ fontStyle: "normal", fontWeight: 700 }}>das?</em>
          </h2>
        </div>

        <div className="story-grid">
          <div className="story-steps">
            {MOMENTS.map((m, i) => (
              <div
                key={m.cap}
                ref={(el) => { stepRefs.current[i] = el; }}
                data-idx={i}
                className={`story-step${active === i ? " is-active" : ""}`}
              >
                <div className="story-step-marker" aria-hidden="true">
                  <span className="story-step-dot" />
                  <span className="story-step-line" />
                </div>
                <div>
                  <h3 className="serif story-step-title">{m.title}</h3>
                  <p className="story-step-text">{m.text}</p>
                  <figure className="story-step-img tile">
                    <img src={m.img} alt={m.alt} loading="lazy" decoding="async" />
                    <figcaption className="tile-caption">{m.cap}</figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>

          <div className="story-visual" aria-hidden="true">
            <div className="story-visual-inner">
              {MOMENTS.map((m, i) => (
                <img
                  key={m.cap}
                  src={m.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={`story-visual-img${active === i ? " is-active" : ""}`}
                />
              ))}
              <div className="story-visual-veil" />
              <div className="story-visual-caption mono">{MOMENTS[active].cap}</div>
              <div className="story-visual-count serif">
                {active + 1}<span style={{ color: "var(--ink-4)" }}> / {MOMENTS.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="story-pivot" data-fx="zoom">
          <p className="serif story-pivot-h">
            Es liegt nicht an eurem Hund.
            <br />
            Und nicht an euch. <em className="hl-yellow" style={{ fontStyle: "normal", fontWeight: 700 }}>Es fehlt ein System.</em>
          </p>
          <p className="story-pivot-p">
            Reizoffenheit ist kein Erziehungsfehler — sie ist ein Arbeitsauftrag. Mit klarer
            Didaktik wird aus dem täglichen Ausnahmezustand ein Weg, den ihr gehen könnt.
            Schritt für Schritt, ohne Zwang.
          </p>
          <a className="btn-link" href="#methodik">So arbeiten wir →</a>
        </div>
      </div>

      <style>{`
        .story-head { margin-bottom: 56px; }
        .story-h { font-size: clamp(38px, 6.4vw, 92px); line-height: 1.02; letter-spacing: -0.028em; font-weight: 600; margin-top: 18px; }

        .story-grid { display: grid; grid-template-columns: 1fr; gap: 0; }
        .story-steps { display: flex; flex-direction: column; gap: 56px; }
        .story-step { display: grid; grid-template-columns: 28px 1fr; gap: 18px; opacity: 1; }
        .story-step-marker { display: flex; flex-direction: column; align-items: center; gap: 10px; padding-top: 8px; }
        .story-step-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--line-2); flex-shrink: 0; transition: background .4s, box-shadow .4s; }
        .story-step-line { width: 1px; flex: 1; background: var(--line); }
        .story-step.is-active .story-step-dot { background: var(--omd-yellow); box-shadow: 0 0 0 5px color-mix(in oklab, var(--omd-yellow) 25%, transparent); }
        .story-step-title { font-size: clamp(22px, 3vw, 32px); line-height: 1.15; letter-spacing: -0.018em; font-weight: 600; margin-bottom: 14px; max-width: 24ch; transition: color .4s; }
        .story-step-text { font-size: 16.5px; line-height: 1.65; color: var(--ink-2); max-width: 46ch; }
        .story-step-img { margin-top: 22px; height: 220px; }

        .story-visual { display: none; }

        .story-pivot { margin-top: 88px; border-top: 1px solid var(--line-2); padding-top: 64px; }
        .story-pivot-h { font-size: clamp(30px, 4.8vw, 64px); line-height: 1.08; letter-spacing: -0.022em; font-weight: 600; max-width: 22ch; margin-bottom: 24px; }
        .story-pivot-p { font-size: 18px; line-height: 1.65; color: var(--ink-2); max-width: 58ch; font-family: var(--serif); margin-bottom: 32px; }

        @media (min-width: 980px) {
          .story-grid { grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
          .story-steps { gap: 0; }
          .story-step { min-height: 62vh; align-content: center; opacity: 0.34; transition: opacity .5s; }
          .story-step.is-active { opacity: 1; }
          .story-step-img { display: none; }
          .story-visual { display: block; position: sticky; top: 96px; height: calc(100vh - 160px); max-height: 720px; }
          .story-visual-inner { position: relative; width: 100%; height: 100%; overflow: hidden; border-radius: 6px; border: 1px solid var(--line-2); background: var(--bg-3); }
          .story-visual-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transform: scale(1.045); transition: opacity .8s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1); }
          .story-visual-img.is-active { opacity: 1; transform: scale(1); }
          .story-visual-veil { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(7,7,26,0.62) 100%); }
          .story-visual-caption { position: absolute; left: 22px; bottom: 18px; color: #F7F7F7; font-weight: 700; text-shadow: 0 1px 10px rgba(7,7,26,0.7); }
          .story-visual-count { position: absolute; right: 22px; bottom: 12px; color: #F7F7F7; font-size: 24px; font-weight: 600; text-shadow: 0 1px 10px rgba(7,7,26,0.7); }
        }
        @media (prefers-reduced-motion: reduce) {
          .story-step { opacity: 1 !important; }
          .story-visual-img { transition: none; }
        }
      `}</style>
    </section>
  );
}
