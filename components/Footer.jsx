// Footer.jsx — final CTA + footer
function FinalCTA({ onOpenSelector }) {
  return (
    <section id="kontakt" style={{ padding: "160px 0", background: "var(--bg-2)", position: "relative", overflow: "hidden" }}>
      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div className="mono" style={{ color: "var(--brass)", marginBottom: 28 }}>§ Nächster Schritt</div>
        <h2 className="serif" style={{ fontSize: "clamp(48px, 8vw, 132px)", lineHeight: 0.92, letterSpacing: "-0.035em", fontWeight: 340, maxWidth: "16ch", marginBottom: 56 }}>
          Finden wir heraus,
          <br />
          <em style={{ color: "var(--brass)" }}>was wirklich passt.</em>
        </h2>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={onOpenSelector} style={{ fontSize: 15, padding: "18px 26px" }}>
            Passendes Angebot finden <span className="arrow">→</span>
          </button>
          <a className="btn btn-ghost" href="#" style={{ fontSize: 15, padding: "18px 26px" }}>Erstgespräch buchen →</a>
          <a className="btn btn-ghost" href="#pro" style={{ fontSize: 15, padding: "18px 26px" }}>Für Hundeschulen →</a>
        </div>
      </div>

      {/* Decorative type */}
      <div className="serif" style={{
        position: "absolute", right: -40, bottom: -40, zIndex: 1,
        fontSize: "clamp(180px, 28vw, 460px)", lineHeight: 1,
        color: "transparent",
        WebkitTextStroke: "1px var(--line-2)",
        fontStyle: "italic", fontWeight: 300,
        pointerEvents: "none",
      }}>
        omd.
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Für Halter", items: ["Signaturprogramm", "Videoanalyse Pro", "OMD Club", "Saisonale Sprints", "Einzelcoaching München"] },
    { h: "Für Hundeschulen", items: ["Case Lab", "Premium System", "Methodik-Intensivtage", "Strategie 1:1", "Berufswechsel-Check"] },
    { h: "Über uns", items: ["Jenny", "Methodik", "Presse", "Stimmen", "Kontakt"] },
    { h: "Rechtliches", items: ["Impressum", "Datenschutz", "AGB", "Teilnahmebedingungen"] },
  ];

  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--line)", padding: "72px 0 40px" }}>
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr repeat(4, 1fr)", gap: 48, marginBottom: 64 }} className="foot-grid">
          <div>
            <a href="#top" className="brand">
              <span className="brand-mark">ö</span>
              <div>
                <div className="brand-name">oooh my dog!</div>
                <div className="brand-sub">Hundetraining · Seit 2018</div>
              </div>
            </a>
            <p style={{ marginTop: 24, fontSize: 14, lineHeight: 1.55, color: "var(--ink-3)", maxWidth: "32ch" }}>
              Training, das mitdenkt. Für reizoffene Hunde, verantwortungsvolle Halter und
              Hundeschulen mit System-Denken.
            </p>
            <div className="mono" style={{ marginTop: 24, color: "var(--ink-3)" }}>
              München · Bundesweit digital
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 18 }}>{c.h}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {c.items.map((it, j) => (
                  <li key={j}><a href="#" style={{ fontSize: 13.5, color: "var(--ink-2)" }}>{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span className="mono">© 2026 oooh my dog! · Jenny <span style={{ color: "var(--brass)" }}>+</span> Team</span>
          <span className="mono">Gestaltet für Menschen, die ihren Hund lieben und ernst nehmen.</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 600px) {
          .foot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

Object.assign(window, { FinalCTA, Footer });
