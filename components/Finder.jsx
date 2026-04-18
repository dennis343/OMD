// Finder.jsx — "So findest du dein passendes Angebot"
function Finder({ onOpenSelector }) {
  const paths = [
    {
      num: "A",
      label: "Ich bin neu hier",
      desc: "Ihr wollt Orientierung, habt mehrere Themen oder wisst noch nicht, was zu euch passt.",
      route: "Kennenlern-Coaching",
      routeDesc: "Strukturierter Einstieg — vor Ort oder digital.",
      accent: "var(--cream)",
      href: "#kontakt",
    },
    {
      num: "B",
      label: "Ich brauche flexible Hilfe — egal wo ich wohne",
      desc: "Ihr wollt Premium-Begleitung, aber ohne Anfahrt oder Termindruck.",
      route: "Säule 24/7",
      routeDesc: "Signaturprogramm, Videoanalyse, Club oder Sprints.",
      accent: "var(--brass)",
      href: "#anywhere",
      featured: true,
    },
    {
      num: "C",
      label: "Ich bin Profi oder will professioneller aufbauen",
      desc: "Ihr führt eine Hundeschule, wollt euer System schärfen oder überlegt den Berufswechsel.",
      route: "Pro & Business",
      routeDesc: "Case Lab, Premium System oder Realitätscheck.",
      accent: "var(--moss)",
      href: "#pro",
    },
  ];

  return (
    <section id="finder" style={{ padding: "140px 0", background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, marginBottom: 72 }} className="finder-head">
          <div>
            <div className="mono" style={{ color: "var(--brass)" }}>§ Angebotsfinder</div>
            <div className="mono" style={{ marginTop: 8 }}>Drei Wege · Eine Entscheidung</div>
          </div>
          <div>
            <h2 className="serif" style={{ fontSize: "clamp(36px, 5.2vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.025em", fontWeight: 340, marginBottom: 24 }}>
              Nicht sicher, was zu euch passt?
              <br />
              <em style={{ color: "var(--brass)", fontStyle: "italic" }}>Das ist normal.</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: "56ch", fontFamily: "var(--serif)", fontWeight: 300 }}>
              Wählt den Einstieg, der gerade am besten auf eure Situation passt. Den Rest klären wir zusammen.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }} className="finder-grid">
          {paths.map((p, i) => (
            <a key={i} href={p.href} style={{
              background: p.featured ? "var(--bg-3)" : "var(--bg)",
              border: `1px solid ${p.featured ? p.accent : "var(--line-2)"}`,
              padding: "36px 32px 32px",
              display: "flex", flexDirection: "column",
              transition: "border-color .2s, transform .2s",
              textDecoration: "none",
              minHeight: 340,
            }} className="finder-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
                <span className="serif" style={{ fontSize: 40, fontStyle: "italic", color: p.accent, fontWeight: 300 }}>{p.num}</span>
                <span className="mono">Weg</span>
              </div>
              <h3 className="serif" style={{ fontSize: 24, letterSpacing: "-0.018em", fontWeight: 400, lineHeight: 1.12, marginBottom: 16 }}>
                {p.label}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", marginBottom: 28, flex: 1 }}>
                {p.desc}
              </p>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 18 }}>
                <div className="mono" style={{ color: p.accent, marginBottom: 6 }}>→ Empfehlung</div>
                <div style={{ fontSize: 16, color: "var(--cream)", fontFamily: "var(--serif)", marginBottom: 4 }}>{p.route}</div>
                <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-3)" }}>{p.routeDesc}</div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 24 }}>
          <button className="btn btn-primary" onClick={onOpenSelector}>
            Genauer herausfinden — in 60 Sekunden <span className="arrow">→</span>
          </button>
          <span className="mono" style={{ alignSelf: "center" }}>Kurzer Selektor · keine E-Mail nötig</span>
        </div>
      </div>

      <style>{`
        .finder-card:hover { transform: translateY(-2px); border-color: var(--brass) !important; }
        @media (max-width: 900px) {
          .finder-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .finder-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

window.Finder = Finder;
