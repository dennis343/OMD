// Hero.jsx — editorial hero with eyebrow, big serif headline, intro
function Hero({ onOpenSelector }) {
  return (
    <section id="top" style={{ paddingTop: 88, paddingBottom: 120, borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        {/* Top meta row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
          <span className="mono">Ausgabe № 04 · Frühjahr 2026</span>
          <span className="mono" style={{ color: "var(--brass)" }}>Bundesweit · Digital · Vor Ort</span>
          <span className="mono">Reizoffen · Unsicher · Anspruchsvoll</span>
        </div>

        {/* Headline */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }}>
          <h1 className="serif" style={{
            fontSize: "clamp(56px, 9vw, 148px)",
            lineHeight: 0.92,
            letterSpacing: "-0.035em",
            fontWeight: 340,
            maxWidth: "14ch",
          }}>
            Training, das
            <br />
            <em style={{ fontStyle: "italic", color: "var(--brass)" }} data-hero-word>mitdenkt</em> — statt
            <br />
            lauter zu werden.
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }} className="hero-bottom">
            <p style={{ fontSize: 20, lineHeight: 1.5, color: "var(--ink-2)", maxWidth: "48ch", fontFamily: "var(--serif)", fontWeight: 300 }}>
              Für reizoffene, energiegeladene oder unsichere Hunde und Halter, die Verantwortung
              übernehmen wollen. Und für Hundeschulen, die an ihrem System arbeiten statt an
              einzelnen Stunden.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
              <button className="btn btn-primary" onClick={onOpenSelector}>
                Angebot finden — in 60 Sekunden <span className="arrow">→</span>
              </button>
              <span className="mono">14 Fragen · keine E-Mail nötig</span>
            </div>
          </div>
        </div>

        {/* Hero image strip */}
        <div style={{ marginTop: 96, display: "grid", gridTemplateColumns: "1.4fr 1fr 1.2fr", gap: 12, height: 440 }}>
          <div className="ph">Jenny mit Hund im Freifeld · 16:9</div>
          <div className="ph">Ruhige Begegnungs-Szene · Portrait</div>
          <div className="ph">Videoanalyse-Setup · Landscape</div>
        </div>

        {/* Numbers strip */}
        <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }} className="stats-grid">
          {[
            ["1 400+", "begleitete Hunde"],
            ["13 Jahre", "Führung in Kommunikation"],
            ["0 %", "aversive Methoden"],
            ["8 Jahre", "Hundeschule in München"],
          ].map(([n, l], i) => (
            <div key={i} style={{
              padding: "36px 28px",
              borderLeft: i === 0 ? "none" : "1px solid var(--line)",
            }}>
              <div className="serif" style={{ fontSize: 46, letterSpacing: "-0.03em", lineHeight: 1 }}>{n}</div>
              <div className="mono" style={{ marginTop: 12 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-bottom { grid-template-columns: 1fr !important; gap: 32px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div:nth-child(3) { border-left: none !important; border-top: 1px solid var(--line); }
          .stats-grid > div:nth-child(4) { border-top: 1px solid var(--line); }
        }
      `}</style>
    </section>
  );
}

window.Hero = Hero;
