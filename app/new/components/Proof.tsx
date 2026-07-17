"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IMG } from "@/app/new/lib/images";

const TESTIMONIALS = [
  {
    quote:
      "Nach sechs Wochen ist unser Luis das erste Mal an einem Hund vorbeigegangen, ohne dass ich Angst hatte. Jenny arbeitet ruhig, klar, und wir verstehen endlich, was wir tun.",
    who: "Katrin & Luis",
    what: "Programm „Reizoffen & führbar“ · Online",
    img: IMG.testiGolden,
    alt: "Golden Retriever im Porträt — entspannt und aufmerksam",
  },
  {
    quote:
      "Wir haben vorher bei zwei anderen Trainern Lautstärke gebucht. Hier bekommen wir Methode. Das ist ein Unterschied wie Tag und Nacht.",
    who: "Jan & Miro",
    what: "Einzelcoaching Mülheim + Videoanalyse Pro",
    img: IMG.testiPup,
    alt: "Junger Labrador schaut aufmerksam nach oben",
  },
  {
    quote:
      "Als Hundeschule haben wir mit dem Pro Case Lab einen ehrlichen Sparringspartner. Unser Team spricht heute die gleiche Sprache bei Problemfällen.",
    who: "Clara, Hundeschule Nordwind",
    what: "Pro & Business · Case Lab",
    img: IMG.testiYoung,
    alt: "Junger Hund im Porträt — konzentriert bei der Arbeit",
  },
];

const PRESS = ["DOGS Magazine", "WDR", "Süddeutsche", "Partner Hund", "Dogs Today DE", "Hunde Welt"];

const CASES = [
  { before: "Leinenaggression, täglich Eskalationen", after: "Ruhige Begegnungen, Halter in Führung", dauer: "9 Wochen", tag: "Signaturprogramm" },
  { before: "Rückzug, Unsicherheit in der Stadt", after: "Club-Begleitung, Alltag trägt", dauer: "6 Monate", tag: "oooh my dog! Club" },
  { before: "Schule mit 1:1-Stundendruck", after: "Premium-System, 40 % mehr Marge", dauer: "12 Wochen", tag: "Pro & Business" },
];

export default function Proof() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIdx((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  /* Auto-Advance — pausiert bei Hover/Fokus und unter reduced motion. */
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="stimmen" aria-labelledby="proof-heading" className="sec-pad" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="shell">
        <div className="google-reviews" data-fx itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="oooh my dog! Hundetraining" />
          <div className="google-reviews-inner" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <div className="google-score">
              <div className="google-score-num serif">
                <span itemProp="ratingValue">5,0</span>
                <span className="google-score-max">/ 5</span>
              </div>
              <div className="google-stars" aria-hidden="true">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <div className="mono google-score-caption">
                aus <span itemProp="reviewCount">48</span>+ Google-Bewertungen
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
              </div>
            </div>
            <div className="google-text">
              <div className="eyebrow" style={{ marginBottom: 12, letterSpacing: "0.2em" }}>
                Bewertet auf Google
              </div>
              <p className="serif google-lead">
                „Systematisch, ehrlich, wirksam." — was unsere Kund:innen auf Google schreiben, hören wir
                auch vor Ort und online immer wieder.
              </p>
              <a
                className="btn btn-primary google-cta"
                href="https://www.google.com/search?q=oooh+my+dog+hundetraining+m%C3%BClheim"
                target="_blank"
                rel="noopener"
              >
                Alle Google-Bewertungen lesen <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="press-strip" data-fx>
          <div className="mono" style={{ marginBottom: 18, color: "var(--accent-ink)" }}>Presse · Erwähnungen</div>
          <div className="nm-marquee" style={{ ["--nm-speed" as string]: "30s" }}>
            <div className="nm-track">
              {[false, true].map((hidden) => (
                <span key={String(hidden)} aria-hidden={hidden || undefined} style={{ display: "flex", alignItems: "baseline" }}>
                  {PRESS.map((p) => (
                    <span key={p} className="serif press-item">{p}<span className="press-dot" aria-hidden="true">●</span></span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="proof-head" data-fx>
          <div>
            <div className="eyebrow">Stimmen · Ergebnisse</div>
          </div>
          <h2 id="proof-heading" className="serif proof-h">
            Nicht unsere Worte.
            <br />
            <em className="hl-yellow" style={{ fontStyle: "normal", fontWeight: 700 }}>Eure Ergebnisse.</em>
          </h2>
        </div>

        <div
          className="testi-slider"
          data-fx
          role="group"
          aria-roledescription="Karussell"
          aria-label="Kundenstimmen"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 48) go(idx + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
        >
          <div className="testi-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {TESTIMONIALS.map((t, i) => (
              <figure key={t.who} className="testi-slide" aria-hidden={i !== idx || undefined}>
                <div className="testi-slide-img">
                  <img src={t.img} alt={t.alt} loading="lazy" decoding="async" />
                </div>
                <div className="testi-slide-body">
                  <div className="serif" aria-hidden="true" style={{ fontSize: 56, color: "var(--accent-ink)", lineHeight: 0.5, marginBottom: 22 }}>„</div>
                  <blockquote className="serif testi-slide-quote">{t.quote}</blockquote>
                  <figcaption style={{ borderTop: "1px solid var(--line)", paddingTop: 16, marginTop: 24 }}>
                    <div style={{ fontSize: 15, color: "var(--ink)", fontWeight: 600 }}>{t.who}</div>
                    <div className="mono" style={{ marginTop: 5 }}>{t.what}</div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>

          <div className="testi-nav">
            <div className="testi-dots" role="tablist" aria-label="Kundenstimme wählen">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.who}
                  type="button"
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={`Stimme ${i + 1}: ${t.who}`}
                  className={`testi-dot${i === idx ? " is-active" : ""}`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button type="button" className="testi-arrow" aria-label="Vorherige Stimme" onClick={() => go(idx - 1)}>←</button>
              <button type="button" className="testi-arrow" aria-label="Nächste Stimme" onClick={() => go(idx + 1)}>→</button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 64 }} data-fx>
          <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 24 }}>Case Studies · Vorher / Nachher</div>
          <div className="cases-wrap">
            {CASES.map((c) => (
              <div key={c.tag} className="case-row">
                <div className="case-tag mono">{c.tag}</div>
                <div className="case-before">
                  <div className="mono" style={{ color: "var(--ink-4)", marginBottom: 4 }}>Vorher</div>
                  <div>{c.before}</div>
                </div>
                <div className="case-dauer mono">{c.dauer}</div>
                <div className="case-after">
                  <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 4 }}>Nachher</div>
                  <div className="serif" style={{ fontWeight: 500, color: "var(--cream)" }}>→ {c.after}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 56 }} data-fx="zoom">
          <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 16 }}>Videoausschnitt · OMD in Arbeit</div>
          <div className="tile proof-video">
            <img src={IMG.showreel} alt="Hund in vollem Lauf über eine Wiese — Ausschnitt aus dem OMD-Showreel" loading="lazy" decoding="async" />
            <div className="play-btn">
              <div className="play-icon" aria-hidden="true">▶</div>
              <div className="mono" style={{ marginTop: 12 }}>Showreel · 1:48 · Feld, Stadt, Videoanalyse</div>
            </div>
          </div>
        </div>

        <div className="proof-disclaimer" data-fx>
          <div className="mono" style={{ color: "var(--ink-4)", marginBottom: 10 }}>Hinweis zu Ergebnissen</div>
          <p>
            Alle dargestellten Ergebnisse, Testimonials und Case Studies sind <em style={{ fontStyle: "normal", fontWeight: 700 }}>exemplarisch</em>
            {" "}und nicht automatisch 1:1 auf jeden Hund und jede Halter-Konstellation übertragbar.
            Es ist jedoch sehr wahrscheinlich, dass ein vergleichbarer Erfolg eintritt, wenn ihr konsequent
            nach dem System und den Anleitungen arbeitet. Training ist Zusammenarbeit — Ergebnisse entstehen durch
            die Umsetzung.
          </p>
        </div>
      </div>

      <style>{`
        .google-reviews {
          margin-bottom: 56px;
          padding: 28px 24px;
          background: var(--bg-2);
          border: 1px solid var(--line-2);
          border-top: 2px solid var(--omd-yellow);
          position: relative;
        }
        .google-reviews-inner { display: grid; grid-template-columns: 1fr; gap: 28px; align-items: center; }
        .google-score { display: flex; flex-direction: column; gap: 10px; }
        .google-score-num { font-size: 56px; line-height: 1; letter-spacing: -0.03em; color: var(--cream); font-weight: 700; display: flex; align-items: baseline; gap: 8px; }
        .google-score-max { font-size: 18px; color: var(--ink-2); font-weight: 500; }
        .google-stars { font-size: 24px; color: var(--omd-yellow); letter-spacing: 3px; line-height: 1; }
        .google-score-caption { color: var(--ink-3); }
        .google-lead { font-size: 18px; line-height: 1.55; color: var(--cream); font-weight: 500; margin-bottom: 20px; max-width: 50ch; }
        .google-cta { background: var(--omd-yellow); color: #0a0a0a; }
        .google-cta:hover { background: var(--omd-yellow-soft); }
        @media (min-width: 700px) {
          .google-reviews { padding: 36px 36px; }
          .google-reviews-inner { grid-template-columns: auto 1fr; gap: 56px; }
          .google-score-num { font-size: 72px; }
        }

        .press-strip { margin-bottom: 56px; padding-bottom: 28px; border-bottom: 1px solid var(--line); }
        .press-item { display: inline-flex; align-items: center; white-space: nowrap; font-size: clamp(18px, 2.4vw, 26px); color: var(--ink-3); font-weight: 500; }
        .press-dot { font-size: 7px; margin: 0 28px; color: var(--omd-yellow); }

        .proof-head { margin-bottom: 48px; display: grid; grid-template-columns: 1fr; gap: 16px; }
        .proof-h { font-size: clamp(28px, 5vw, 62px); line-height: 1.08; letter-spacing: -0.018em; font-weight: 600; }

        .testi-slider { position: relative; overflow: hidden; border: 1px solid var(--line-2); background: var(--bg-2); }
        .testi-track { display: flex; transition: transform .75s cubic-bezier(0.22, 1, 0.36, 1); }
        @media (prefers-reduced-motion: reduce) { .testi-track { transition: none; } }
        .testi-slide { flex: 0 0 100%; display: grid; grid-template-columns: 1fr; margin: 0; }
        .testi-slide-img { position: relative; height: 240px; overflow: hidden; }
        .testi-slide-img img { width: 100%; height: 100%; object-fit: cover; }
        .testi-slide-body { padding: 32px 26px 28px; display: flex; flex-direction: column; }
        .testi-slide-quote { font-size: clamp(18px, 2.4vw, 26px); line-height: 1.45; font-weight: 500; color: var(--cream); margin: 0; flex: 1; max-width: 46ch; }
        .testi-nav { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 16px 22px; border-top: 1px solid var(--line); }
        .testi-dots { display: flex; gap: 10px; }
        .testi-dot { width: 34px; height: 4px; border-radius: 2px; background: var(--line-2); padding: 0; min-height: 0; transition: background .3s; position: relative; }
        .testi-dot::after { content: ""; position: absolute; inset: -12px 0; }
        .testi-dot.is-active { background: var(--omd-yellow); }
        .testi-arrow { width: 44px; height: 44px; border: 1px solid var(--line-2); border-radius: 999px; display: grid; place-items: center; font-size: 17px; color: var(--ink-2); transition: border-color .2s, color .2s, background .2s; }
        .testi-arrow:hover { border-color: var(--omd-yellow); color: var(--ink); background: color-mix(in oklab, var(--omd-yellow) 12%, transparent); }
        @media (min-width: 860px) {
          .testi-slide { grid-template-columns: 0.85fr 1.4fr; }
          .testi-slide-img { height: auto; min-height: 380px; }
          .testi-slide-body { padding: 44px 48px 36px; }
        }

        .cases-wrap { background: var(--line-2); border: 1px solid var(--line-2); display: grid; gap: 2px; }
        .case-row { display: grid; grid-template-columns: 1fr; background: var(--bg); padding: 22px 24px; gap: 14px; }
        .case-tag { color: var(--accent-ink); font-weight: 700; }
        .case-before, .case-after { font-size: 15px; color: var(--ink-2); line-height: 1.55; }
        .case-dauer { color: var(--ink-2); font-weight: 500; }
        @media (min-width: 700px) {
          .case-row { grid-template-columns: 1.5fr 2fr 100px 2fr; gap: 20px; align-items: center; padding: 22px 28px; }
        }

        .proof-video { height: 240px; position: relative; }
        @media (min-width: 700px) { .proof-video { height: 360px; } }
        @media (min-width: 1000px) {
          .proof-video { height: 440px; }
          .proof-head { grid-template-columns: 1fr 2fr; gap: 56px; margin-bottom: 72px; }
        }

        .proof-disclaimer { margin-top: 56px; padding: 24px 24px; border: 1px solid var(--line); background: var(--bg-2); max-width: 72ch; }
        .proof-disclaimer p { font-size: 14.5px; line-height: 1.7; color: var(--ink-2); }
      `}</style>
    </section>
  );
}
