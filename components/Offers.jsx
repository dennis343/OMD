// Offers.jsx — detailed angebote grid
function Offers({ onOpenSelector }) {
  const offers = [
    {
      pillar: "OMD Anywhere · Signaturprogramm",
      title: "Reizoffen & führbar",
      sub: "8–10 Wochen · Premium-Programm",
      desc: "Für Halter reizoffener, unsicherer oder schnell überforderter Hunde. Intake, Videoanalyse, aufgezeichnete Kernmodule, Live-Call pro Woche, Homework-Reviews im Batch, Community, klarer Umsetzungsplan.",
      price: "ab 790 €",
      tag: "Flaggschiff",
      size: "large",
    },
    {
      pillar: "OMD Anywhere · Asynchron",
      title: "Videoanalyse Pro",
      sub: "Einstieg in die Methode",
      desc: "3–5 Videos, strukturierte Anamnese, priorisiertes Feedbackvideo und Trainingsplan. Bundesweit, ohne Terminkalender-Stress.",
      price: "149 – 249 €",
      size: "medium",
    },
    {
      pillar: "OMD Anywhere · Membership",
      title: "OMD Club",
      sub: "Monatlich begleitet",
      desc: "2 Live-Sessions, Themenbibliothek, Q&A, Monatsfokus, Vorlagen, Community.",
      price: "49 – 79 € / Monat",
      size: "medium",
    },
    {
      pillar: "OMD Local · Einstieg",
      title: "Kennenlern-Einzelstunde",
      sub: "München · Vor Ort",
      desc: "Eine Stunde, um euch kennenzulernen, die Situation einzuordnen und einen ehrlichen nächsten Schritt zu finden.",
      price: "49 €",
      tag: "Einstieg",
      size: "small",
    },
    {
      pillar: "OMD Anywhere · Saison",
      title: "Saisonale Sprints",
      sub: "Silvester · Jagdkontrolle · Anti-Giftköder · Stadt & Urlaub",
      desc: "2–4 Wochen, klarer Fokus, direkt anwendbar. Unser Silvester-Special war im letzten Jahr ausgebucht.",
      price: "auf Anfrage",
      size: "small",
    },
    {
      pillar: "OMD Local · Intensiv",
      title: "Intensivtage & Gruppen",
      sub: "München · Vor Ort",
      desc: "Einzel, Gruppe, Spezialthemen, Events. Die Fallbibliothek, aus der alle anderen Formate gespeist werden.",
      price: "auf Anfrage",
      size: "small",
    },
  ];

  return (
    <section id="angebote" style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div className="mono" style={{ color: "var(--brass)", marginBottom: 20 }}>§ Angebote für Halter</div>
            <h2 className="serif" style={{ fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.03em", fontWeight: 340, maxWidth: "16ch" }}>
              Konkret. Ehrlich. Preislich klar verortet.
            </h2>
          </div>
          <button className="btn btn-ghost" onClick={onOpenSelector}>Was passt zu uns? <span className="arrow">→</span></button>
        </div>

        {/* Editorial bento grid */}
        <div className="offers-grid">
          {offers.map((o, i) => (
            <article key={i} className={`offer offer-${o.size}`} style={{
              background: i === 0 ? "var(--bg-3)" : "var(--bg-2)",
              border: `1px solid ${i === 0 ? "var(--brass)" : "var(--line-2)"}`,
              padding: o.size === "large" ? "44px 44px 40px" : "28px 28px 24px",
              position: "relative",
              display: "flex", flexDirection: "column",
              transition: "border-color .2s",
            }}>
              {o.tag && (
                <div style={{ position: "absolute", top: -10, left: o.size === "large" ? 36 : 24, background: o.tag === "Flaggschiff" ? "var(--brass)" : "var(--cream)", color: "var(--bg)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", padding: "3px 10px" }}>
                  {o.tag}
                </div>
              )}
              <div className="mono" style={{ marginBottom: 16 }}>{o.pillar}</div>
              <h3 className="serif" style={{
                fontSize: o.size === "large" ? 52 : o.size === "medium" ? 32 : 26,
                letterSpacing: "-0.025em", lineHeight: 1.02, fontWeight: o.size === "large" ? 340 : 380,
                marginBottom: 8,
              }}>
                {o.title}
              </h3>
              <div style={{ fontSize: 14, color: "var(--ink-3)", fontStyle: "italic", fontFamily: "var(--serif)", marginBottom: 20 }}>{o.sub}</div>
              <p style={{ fontSize: o.size === "large" ? 16 : 14, lineHeight: 1.55, color: "var(--ink-2)", flex: 1, marginBottom: 24 }}>
                {o.desc}
              </p>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="serif" style={{ fontSize: o.size === "large" ? 24 : 18, color: "var(--brass)" }}>{o.price}</span>
                <a className="mono" href="#" style={{ color: "var(--ink-2)" }}>Details →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="rule-row" style={{ marginTop: 48 }}>
          <span>§ Hinweis</span>
          <span style={{ flex: 1 }}>Preise für digitale Produkte transparent. Vor-Ort- und B2B-Leistungen nach Bedarf individuell — kurzes Gespräch, klarer Vorschlag.</span>
        </div>
      </div>

      <style>{`
        .offers-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-auto-rows: minmax(280px, auto);
          gap: 12px;
        }
        .offer-large { grid-column: span 2; grid-row: span 2; }
        .offer-medium { grid-column: span 1; grid-row: span 1; }
        .offer-small { grid-column: span 1; grid-row: span 1; }
        .offer:hover { border-color: var(--brass) !important; }

        @media (max-width: 1000px) {
          .offers-grid { grid-template-columns: 1fr 1fr; }
          .offer-large { grid-column: span 2; grid-row: auto; }
          .offer-medium, .offer-small { grid-column: span 1; grid-row: auto; }
        }
        @media (max-width: 640px) {
          .offers-grid { grid-template-columns: 1fr; }
          .offer-large, .offer-medium, .offer-small { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}

window.Offers = Offers;
