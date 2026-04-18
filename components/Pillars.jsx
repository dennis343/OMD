// Pillars.jsx — three pillars Local / Anywhere / Pro
function Pillars() {
  const pillars = [
    {
      num: "01",
      name: "OMD Local",
      tag: "München · Vor Ort",
      desc: "Das lokale Premium-Kerngeschäft. Einzelcoachings, Gruppen, Intensivtage und Events — die Fallbibliothek, aus der alles andere entsteht.",
      items: ["Einzelcoaching", "Gruppentraining", "Intensivtage", "Spezialthemen", "Events & Talks"],
      accent: "var(--cream)",
    },
    {
      num: "02",
      name: "OMD Anywhere",
      tag: "Bundesweit · Digital",
      desc: "Standardisierte Programme, asynchrone Analysen und saisonale Remote-Sprints. Methode, nicht Minuten — für alle, die nicht in München wohnen.",
      items: ["Signaturprogramm", "Videoanalyse Pro", "OMD Club · Membership", "Saisonale Sprints", "Live-Talks"],
      accent: "var(--brass)",
      featured: true,
    },
    {
      num: "03",
      name: "OMD Pro",
      tag: "B2B · Hundeschulen & Trainer",
      desc: "Fallsupervision, Methodik und Positionierung für Hundeschulen, die an ihrem System arbeiten. Beratung, kein Franchise.",
      items: ["Case Lab · Supervision", "Premium-System (Lizenz)", "Methodik-Intensivtage", "Berufswechsel-Check", "1:1 Strategie"],
      accent: "var(--moss)",
    },
  ];

  return (
    <section id="system" style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, marginBottom: 88 }} className="pillars-intro">
          <div>
            <div className="mono" style={{ color: "var(--brass)" }}>§ Das OMD-System</div>
            <div className="mono" style={{ marginTop: 8 }}>Drei Säulen · Ein Fundament</div>
          </div>
          <div>
            <h2 className="serif" style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.025em", fontWeight: 340 }}>
              Ein System, das an der richtigen Stelle ansetzt —
              <span style={{ color: "var(--ink-3)" }}> beim Halter, beim Hund, bei der Schule.</span>
            </h2>
          </div>
        </div>

        {/* 3 columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--line-2)" }} className="pillars-grid">
          {pillars.map((p, i) => (
            <article key={i} style={{
              padding: "44px 36px 36px",
              borderLeft: i === 0 ? "none" : "1px solid var(--line-2)",
              background: p.featured ? "var(--bg-2)" : "transparent",
              position: "relative",
              minHeight: 560,
              display: "flex", flexDirection: "column",
            }}>
              {p.featured && (
                <div style={{
                  position: "absolute", top: -1, right: 24,
                  background: "var(--brass)", color: "var(--bg)",
                  padding: "4px 10px",
                  fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase",
                }}>Unser Hebel</div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40 }}>
                <span className="serif" style={{ fontSize: 48, fontStyle: "italic", color: p.accent, fontWeight: 300 }}>{p.num}</span>
                <span className="mono">{p.tag}</span>
              </div>

              <h3 className="serif" style={{ fontSize: 38, letterSpacing: "-0.02em", fontWeight: 380, marginBottom: 20 }}>
                {p.name}
              </h3>

              <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--ink-2)", marginBottom: 32, flex: 1 }}>
                {p.desc}
              </p>

              <ul style={{ listStyle: "none", borderTop: "1px solid var(--line)" }}>
                {p.items.map((it, j) => (
                  <li key={j} style={{
                    padding: "13px 0",
                    borderBottom: "1px solid var(--line)",
                    fontSize: 13.5,
                    color: "var(--ink-2)",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <span>{it}</span>
                    <span style={{ color: p.accent, fontFamily: "var(--mono)", fontSize: 11 }}>→</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Methodik footer row */}
        <div style={{ marginTop: 48, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <div className="mono" style={{ color: "var(--brass)" }}>
            ↳ Gemeinsame Methodik: Diagnose vor Übung · Klarheit statt Lautstärke · Aufbau statt Unterdrückung
          </div>
          <a className="btn-link mono" href="#angebote">Konkrete Angebote ansehen →</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pillars-intro { grid-template-columns: 1fr !important; gap: 24px !important; }
          .pillars-grid { grid-template-columns: 1fr !important; }
          .pillars-grid > article { border-left: none !important; border-bottom: 1px solid var(--line-2); min-height: auto !important; }
        }
      `}</style>
    </section>
  );
}

window.Pillars = Pillars;
