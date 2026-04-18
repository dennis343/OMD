// Hero.jsx — "Hundetraining mit System" · Mobile-first
function Hero({ onOpenSelector }) {
  return (
    <section id="top" style={{ paddingTop: 48, paddingBottom: 64, borderBottom: "1px solid var(--line)" }} className="hero-section">
      <div className="shell">

        {/* Top meta row */}
        <div className="hero-meta">
          <span className="mono" style={{ color: "var(--brass)" }}>Vor Ort · 24/7 · Pro & Business</span>
          <span className="mono">Mülheim · Ruhrgebiet · DACH</span>
        </div>

        {/* Headline */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
          <h1 className="serif hero-headline">
            Hundetraining
            <br />
            mit <em style={{ fontStyle: "italic", color: "var(--brass)" }}>System.</em>
            <br />
            Vor Ort, 24/7 und für Profis.
          </h1>

          <div className="hero-bottom">
            <p className="hero-sub">
              Für Menschen, die Klarheit statt Chaos wollen. Wir helfen Hundehaltern, ihre Hunde
              im Alltag besser zu verstehen, klarer zu führen und nachhaltig zu entwickeln —
              lokal in Mülheim, digital im gesamten deutschsprachigen Raum und im Pro-Bereich
              für Hundeschulen und ambitionierte Fachkunden.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <button className="btn btn-primary" onClick={onOpenSelector}>
                Passendes Angebot finden <span className="arrow">→</span>
              </button>
              <a className="btn-link" href="https://portal.oooh-my-dog.de/einzeltraining/2" target="_blank" rel="noopener">
                oder Kennenlern-Coaching buchen →
              </a>
            </div>
          </div>
        </div>

        {/* Mikrovertrauen bullets */}
        <div className="trust-strip">
          {[
            "Alltagsnah",
            "Systematisch",
            "Ruhig & klar",
            "Auch digital",
            "Premium",
          ].map((t, i) => (
            <div key={i} className="trust-item">
              <span style={{ color: "var(--brass)" }}>+</span> {t}
            </div>
          ))}
        </div>

        {/* Hero image strip */}
        <div className="hero-images">
          <div className="tile">
            <img src="https://picsum.photos/seed/omd-hero-1/1400/900" alt="Hundetraining im Freifeld — Alltagsnah" loading="lazy" />
            <span className="tile-caption">Alltag · Mülheim</span>
          </div>
          <div className="tile">
            <img src="https://picsum.photos/seed/omd-hero-2/900/1200" alt="Ruhige Begegnungs-Szene" loading="lazy" />
            <span className="tile-caption">Begegnungen</span>
          </div>
          <div className="tile">
            <img src="https://picsum.photos/seed/omd-hero-3/1400/900" alt="Videoanalyse-Setup" loading="lazy" />
            <span className="tile-caption">Videoanalyse · 24/7</span>
          </div>
        </div>

        {/* Numbers strip */}
        <div className="stats-grid">
          {[
            ["1 400+", "begleitete Hunde"],
            ["13 Jahre", "Führung in Kommunikation"],
            ["0 %", "aversive Methoden"],
            ["DACH", "digitale Reichweite"],
          ].map(([n, l], i) => (
            <div key={i} className="stat-cell">
              <div className="serif stat-num">{n}</div>
              <div className="mono" style={{ marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-meta {
          display: flex; flex-direction: column; gap: 6px;
          margin-bottom: 40px;
        }
        .hero-headline {
          font-size: clamp(40px, 9vw, 140px);
          line-height: 0.96;
          letter-spacing: -0.035em;
          font-weight: 340;
          max-width: 16ch;
        }
        .hero-sub {
          font-size: 17px; line-height: 1.5;
          color: var(--ink-2);
          max-width: 52ch;
          font-family: var(--serif); font-weight: 300;
        }
        .hero-bottom {
          display: grid; grid-template-columns: 1fr;
          gap: 28px;
          align-items: end;
        }
        .trust-strip {
          margin-top: 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .trust-item {
          padding: 16px 14px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--ink-2);
          display: flex; align-items: center; gap: 10px;
        }
        .trust-item:nth-child(2n) { border-right: none; }
        .trust-strip > .trust-item:nth-last-child(-n+2) { border-bottom: none; }

        .hero-images {
          margin-top: 48px;
          display: grid; grid-template-columns: 1fr; gap: 10px;
        }
        .hero-images .tile { height: 220px; }

        .stats-grid {
          margin-top: 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .stat-cell {
          padding: 24px 16px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .stat-cell:nth-child(2n) { border-right: none; }
        .stats-grid > .stat-cell:nth-last-child(-n+2) { border-bottom: none; }
        .stat-num { font-size: 32px; letter-spacing: -0.03em; line-height: 1; }

        @media (min-width: 640px) {
          .hero-section { padding-top: 64px !important; padding-bottom: 88px !important; }
          .hero-meta { flex-direction: row; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 56px; }
          .hero-images .tile { height: 280px; }
          .stat-num { font-size: 40px; }
          .stat-cell { padding: 28px 20px; }
        }
        @media (min-width: 900px) {
          .hero-section { padding-top: 88px !important; padding-bottom: 120px !important; }
          .hero-bottom { grid-template-columns: 1.2fr 1fr; gap: 80px; }
          .hero-sub { font-size: 20px; }
          .trust-strip { grid-template-columns: repeat(5, 1fr); }
          .trust-item { border-right: 1px solid var(--line); border-bottom: none; padding: 20px 22px; }
          .trust-item:first-child { /* no left border */ }
          .trust-item:last-child { border-right: none; }
          .hero-images { grid-template-columns: 1.4fr 1fr 1.2fr; height: 420px; }
          .hero-images .tile { height: auto; }
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
          .stat-cell { padding: 36px 28px; border-bottom: none; }
          .stat-cell:last-child { border-right: none; }
          .stat-num { font-size: 46px; }
        }
      `}</style>
    </section>
  );
}

window.Hero = Hero;
