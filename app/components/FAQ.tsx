"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Sind „reizoffen“ oder „Aggression“ bei euch Wertungen?",
    a: "Nein. Das sind Beschreibungen dessen, was der Hund mitbringt — oft aufgrund von Genetik, Erfahrung oder Umwelt. Solange kein körperliches Problem dahintersteht, lassen sich diese Eigenschaften in die richtigen Bahnen lenken. Es ist unsere Aufgabe, dem Hund eine Struktur zu geben, in der diese Merkmale nicht zum Problem werden, sondern Teil eines funktionierenden Alltags sind.",
  },
  {
    q: "Wir wohnen nicht in Mülheim — kommt ihr für uns überhaupt infrage?",
    a: "Ja. Die Säule 24/7 ist genau dafür gebaut. Ob Videoanalyse, Signaturprogramm oder Club — ihr bekommt dieselbe Methodik digital, ohne Anfahrt. Die meisten unserer digitalen Kunden haben uns noch nie persönlich gesehen.",
  },
  {
    q: "Unser Hund ist reizoffen, unsicher oder schnell überfordert. Ist das bei euch richtig?",
    a: "Das ist unser Schwerpunkt. Wir arbeiten ruhig, klar und systematisch — und bewusst ohne aversive Werkzeuge, auch bei anspruchsvollen Fällen. Jenny lebt selbst mit zwei belgischen Schäferhunden; das ist kein theoretisches Training.",
  },
  {
    q: "Was ist der sinnvollste erste Schritt?",
    a: "Entweder das Kennenlern-Einzeltraining (vor Ort oder hybrid) oder die Videoanalyse Pro (digital). Beides führt zu einer klaren Einschätzung und dem passenden nächsten Schritt — ohne Bindung.",
  },
  {
    q: "Arbeitet ihr auch mit Hundeschulen und anderen Trainer:innen?",
    a: "Ja. In der Säule Pro & Business — mit Case Lab (Fallsupervision), Premium Hundeschule System (Strategie & Angebotsarchitektur) und Berufswechsel-Realitätscheck für Menschen vor der beruflichen Neuausrichtung.",
  },
  {
    q: "Was kostet das?",
    a: "Digitale Produkte haben transparente Preise und sind direkt buchbar. Vor-Ort- und B2B-Leistungen werden nach Bedarf individuell besprochen — ein kurzes Gespräch, ein klarer Vorschlag.",
  },
  {
    q: "Wie viel Zeit muss ich investieren?",
    a: "Wir rechnen realistisch. Jedes Angebot benennt klar, was zu tun ist — und was nicht. Eher weniger, aber richtig, statt viel und planlos.",
  },
  {
    q: "Sind die gezeigten Ergebnisse garantiert?",
    a: "Alle dargestellten Ergebnisse sind exemplarisch und nicht 1:1 auf jeden Hund und jede Halter-Konstellation übertragbar. Wer konsequent nach dem System arbeitet und die Anleitungen umsetzt, hat jedoch eine sehr hohe Wahrscheinlichkeit, ähnliche Erfolge zu erreichen.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="sec-pad" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="shell">
        <div className="faq-head">
          <div>
            <div className="mono" style={{ color: "var(--brass)" }}>§ FAQ</div>
            <div className="mono" style={{ marginTop: 8 }}>Häufige Fragen</div>
          </div>
          <div>
            <h2 id="faq-heading" className="serif" style={{ fontSize: "clamp(30px, 5vw, 62px)", lineHeight: 1.04, letterSpacing: "-0.02em", fontWeight: 340 }}>
              Schnelle Antworten auf
              <em style={{ color: "var(--brass)", fontStyle: "italic" }}> das Wichtigste.</em>
            </h2>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--line-2)" }}>
          {FAQS.map((f, i) => {
            const active = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={f.q} style={{ borderBottom: "1px solid var(--line-2)" }}>
                <button
                  id={buttonId}
                  aria-expanded={active}
                  aria-controls={panelId}
                  onClick={() => setOpen(active ? -1 : i)}
                  style={{
                    width: "100%",
                    padding: "22px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                    gap: 20,
                  }}
                  type="button"
                >
                  <span className="serif faq-q" style={{ color: active ? "var(--cream)" : "var(--ink-2)" }}>
                    {f.q}
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 26,
                      fontStyle: "italic",
                      color: "var(--brass)",
                      transform: active ? "rotate(45deg)" : "none",
                      transition: "transform .25s",
                      minWidth: 24,
                      textAlign: "right",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                {active && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    style={{
                      padding: "0 0 28px 0",
                      fontSize: 15.5,
                      lineHeight: 1.6,
                      color: "var(--ink-2)",
                      maxWidth: "72ch",
                      animation: "fadeUp .25s ease both",
                    }}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-head { display: grid; grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; }
        .faq-q { font-size: 18px; letter-spacing: -0.012em; font-weight: 400; line-height: 1.3; }
        @media (min-width: 900px) {
          .faq-head { grid-template-columns: 1fr 2fr; gap: 80px; margin-bottom: 64px; }
          .faq-q { font-size: 22px; line-height: 1.25; }
        }
      `}</style>
    </section>
  );
}
