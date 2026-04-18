// FAQ.jsx — Häufige Fragen
const { useState: useStateFAQ } = React;

function FAQ() {
  const faqs = [
    {
      q: "Wir wohnen nicht in Mülheim — kommt ihr für uns überhaupt infrage?",
      a: "Ja. Die Säule 24/7 ist genau dafür gebaut. Ob Videoanalyse, Signaturprogramm oder Club — ihr bekommt dieselbe Methodik digital, ohne Anfahrt.",
    },
    {
      q: "Unser Hund ist reizoffen, unsicher oder schnell überfordert. Ist das bei euch richtig?",
      a: "Das ist unser Schwerpunkt. Wir arbeiten ruhig, klar und systematisch — und bewusst ohne aversive Werkzeuge, auch bei anspruchsvollen Fällen.",
    },
    {
      q: "Was ist der sinnvollste erste Schritt?",
      a: "Entweder das Kennenlern-Coaching (vor Ort) oder die Videoanalyse Pro (digital). Beides führt zu einer klaren Einschätzung und dem passenden nächsten Schritt — ohne Bindung.",
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
  ];

  const [open, setOpen] = useStateFAQ(0);

  return (
    <section id="faq" style={{ padding: "140px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 64 }} className="faq-head">
          <div>
            <div className="mono" style={{ color: "var(--brass)" }}>§ FAQ</div>
            <div className="mono" style={{ marginTop: 8 }}>Häufige Fragen</div>
          </div>
          <div>
            <h2 className="serif" style={{ fontSize: "clamp(34px, 4.8vw, 62px)", lineHeight: 1.04, letterSpacing: "-0.02em", fontWeight: 340 }}>
              Schnelle Antworten auf
              <em style={{ color: "var(--brass)", fontStyle: "italic" }}> das Wichtigste.</em>
            </h2>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--line-2)" }}>
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid var(--line-2)" }}>
                <button
                  onClick={() => setOpen(active ? -1 : i)}
                  style={{
                    width: "100%",
                    padding: "28px 0",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    textAlign: "left",
                    gap: 24,
                  }}
                >
                  <span className="serif" style={{
                    fontSize: 22, letterSpacing: "-0.015em", fontWeight: 400,
                    color: active ? "var(--cream)" : "var(--ink-2)",
                    lineHeight: 1.25,
                  }}>
                    {f.q}
                  </span>
                  <span style={{
                    fontFamily: "var(--serif)", fontSize: 28, fontStyle: "italic",
                    color: "var(--brass)",
                    transform: active ? "rotate(45deg)" : "none",
                    transition: "transform .25s",
                    minWidth: 28, textAlign: "right",
                  }}>+</span>
                </button>
                {active && (
                  <div style={{
                    padding: "0 0 32px 0",
                    fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)",
                    maxWidth: "72ch",
                    animation: "fadeUp .25s ease both",
                  }}>
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-head { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}

window.FAQ = FAQ;
