// Pro.jsx — B2B section for Hundeschulen
function Pro() {
  const modules = [
    { n: "01", title: "Case Lab · Fallsupervision", desc: "Monatliche Fallsupervision für anspruchsvolle Teams. Fallbesprechung, Methodenentscheidung, Halterkommunikation, Trainingsaufbau.", price: "auf Anfrage" },
    { n: "02", title: "Premium System · Lizenz", desc: "Angebotsarchitektur, Onboarding, Anamnese, Homework-Sheets, Kundenführung, Positionierung, Qualitätsstandards. Beratung und Lizenz — kein Franchise.", price: "auf Anfrage" },
    { n: "03", title: "Methodik-Intensivtage", desc: "Dein Team, ein Tag. Diagnose, Aufbau, Grenzfälle, ruhige Lernkultur. Ergebnis: gleiche Sprache, gleiche Qualität.", price: "auf Anfrage" },
    { n: "04", title: "Berufswechsel · Realitätscheck", desc: "Für Menschen in der beruflichen Orientierungsphase. Premium und ehrlich — Phase 1, bevor jemand eine §11-Ausbildung beginnt.", price: "auf Anfrage" },
  ];

  return (
    <section id="pro" style={{ padding: "140px 0", background: "var(--bg-2)", borderBottom: "1px solid var(--line)", position: "relative" }}>
      <div className="shell">

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, marginBottom: 80 }} className="pro-head">
          <div>
            <div className="mono" style={{ color: "var(--moss)", marginBottom: 20 }}>§ OMD Pro · B2B</div>
            <div className="label" style={{ color: "var(--ink-3)" }}>Für Hundeschulen, die an ihrem System arbeiten</div>
          </div>
          <div>
            <h2 className="serif" style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.025em", fontWeight: 340 }}>
              Skalieren ist kein Mengenproblem —
              <br />
              <span style={{ color: "var(--ink-3)" }}>sondern eine Frage des Systems.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 28, maxWidth: "56ch", fontFamily: "var(--serif)", fontWeight: 300 }}>
              Wir arbeiten mit Hundeschulen, die geschickt wachsen wollen, ohne Qualität zu
              verlieren. Weniger 1:1-Stunden, mehr Struktur. Echte Erfolge bei euren Kunden —
              weil die Methode sitzt, nicht nur der Tarif.
            </p>
          </div>
        </div>

        {/* Modules grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid var(--line-2)", borderLeft: "1px solid var(--line-2)" }} className="pro-grid">
          {modules.map((m, i) => (
            <div key={i} style={{
              padding: "36px 36px 32px",
              borderRight: "1px solid var(--line-2)",
              borderBottom: "1px solid var(--line-2)",
              background: "var(--bg)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
                <span className="serif" style={{ fontSize: 36, fontStyle: "italic", color: "var(--moss)", fontWeight: 300 }}>{m.n}</span>
                <span className="mono">Modul</span>
              </div>
              <h3 className="serif" style={{ fontSize: 28, letterSpacing: "-0.02em", fontWeight: 380, marginBottom: 14 }}>
                {m.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 28 }}>{m.desc}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--line)", paddingTop: 16 }}>
                <span className="mono" style={{ color: "var(--moss)" }}>{m.price}</span>
                <a className="mono" href="#kontakt">Anfragen →</a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32, alignItems: "center" }} className="pro-foot">
          <div style={{ border: "1px solid var(--line-2)", padding: "36px 40px", background: "var(--bg)" }}>
            <div className="mono" style={{ color: "var(--moss)", marginBottom: 12 }}>→ Einstieg in OMD Pro</div>
            <p className="serif" style={{ fontSize: 22, lineHeight: 1.35, fontWeight: 360, fontStyle: "italic", color: "var(--ink-2)", maxWidth: "48ch" }}>
              Kurzes Erstgespräch, ehrliche Diagnose: Wo steht eure Schule, und welches Modul trägt jetzt den größten Hebel?
            </p>
          </div>
          <a className="btn btn-primary" href="#kontakt" style={{ justifyContent: "center" }}>Gespräch anfragen <span className="arrow">→</span></a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pro-head, .pro-foot { grid-template-columns: 1fr !important; gap: 32px !important; }
          .pro-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

window.Pro = Pro;
