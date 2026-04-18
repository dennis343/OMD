// Hero.jsx — editorial hero: "Hundetraining mit System"
function Hero({ onOpenSelector }) {
  return (
    <section id="top" style={{ paddingTop: 88, paddingBottom: 120, borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        {/* Top meta row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
          <span className="mono">Ausgabe № 04 · Frühjahr 2026</span>
          <span className="mono" style={{ color: "var(--brass)" }}>Vor Ort · 24/7 · Pro & Business</span>
          <span className="mono">Mülheim · Ruhrgebiet · DACH</span>
        </div>

        {/* Headline */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }}>
          <h1 className="serif" style={{
            fontSize: "clamp(52px, 8.4vw, 140px)",
            lineHeight: 0.94,
            letterSpacing: "-0.035em",
            fontWeight: 340,
            maxWidth: "16ch",
          }}>
            Hundetraining
            <br />
            mit <em style={{ fontStyle: "italic", color: "var(--brass)" }} data-hero-word>System.</em>
            <br />
            Vor Ort, 24/7 und für Profis.
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }} className="hero-bottom">
            <p style={{ fontSize: 20, lineHeight: 1.5, color: "var(--ink-2)", maxWidth: "52ch", fontFamily: "var(--serif)", fontWeight: 300 }}>
              Für Menschen, die Klarheit statt Chaos wollen. Wir helfen Hundehaltern, ihre Hunde
              im Alltag besser zu verstehen, klarer zu führen und nachhaltig zu entwickeln —
              lokal in Mülheim, digital im gesamten deutschsprachigen Raum und im Pro-Bereich
              für Hundeschulen und ambitionierte Fachkunden.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
              <button className="btn btn-primary" onClick={onOpenSelector}>
                Passendes Angebot finden <span className="arrow">→</span>
              </button>
              <a className="btn-link mono" href="#kontakt">oder Kennenlern-Coaching buchen →</a>
            </div>
          </div>
        </div>

        {/* Mikrovertrauen bullets */}
        <div style={{ marginTop: 72, display: "flex", gap: 0, flexWrap: "wrap", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }} className="trust-strip">
          {[
            "Alltagsnah",
            "Systematisch",
            "Ruhig & klar",
            "Auch digital möglich",
            "Premium statt beliebig",
          ].map((t, i) => (
            <div key={i} style={{
              flex: 1,
              minWidth: 180,
              padding: "22px 24px",
              borderLeft: i === 0 ? "none" : "1px solid var(--line)",
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "var(--ink-2)",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ color: "var(--brass)" }}>+</span> {t}
            </div>
          ))}
        </div>

        {/* Hero image strip */}
        <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "1.4fr 1fr 1.2fr", gap: 12, height: 420 }} className="hero-images">
          <div className="ph">Team im Freifeld · Alltagsnah · 16:9</div>
          <div className="ph">Ruhige Begegnungs-Szene · Portrait</div>
          <div className="ph">Videoanalyse-Setup · Landscape</div>
        </div>

        {/* Numbers strip */}
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }} className="stats-grid">
          {[
            ["1 400+", "begleitete Hunde"],
            ["13 Jahre", "Führung in Kommunikation"],
            ["0 %", "aversive Methoden"],
            ["DACH", "digitale Reichweite"],
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
          .trust-strip > div { flex: 1 1 50% !important; border-left: none !important; border-top: 1px solid var(--line); }
          .hero-images { grid-template-columns: 1fr !important; height: auto !important; }
          .hero-images > div { height: 240px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div:nth-child(3) { border-left: none !important; border-top: 1px solid var(--line); }
          .stats-grid > div:nth-child(4) { border-top: 1px solid var(--line); }
        }
      `}</style>
    </section>
  );
}

window.Hero = Hero;
