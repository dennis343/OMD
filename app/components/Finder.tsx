"use client";

type FinderProps = { onOpenSelector: () => void };

type Path = {
  num: string;
  label: string;
  desc: string;
  route: string;
  routeDesc: string;
  accent: string;
  href: string;
  featured?: boolean;
};

const PATHS: Path[] = [
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
    route: "Säule Online",
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

export default function Finder({ onOpenSelector }: FinderProps) {
  return (
    <section
      id="finder"
      aria-labelledby="finder-heading"
      className="sec-pad"
      style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, marginBottom: 72 }} className="finder-head">
          <div>
            <div className="eyebrow">Angebotsfinder</div>
            <div className="mono" style={{ marginTop: 12 }}>Drei Wege · Eine Entscheidung</div>
          </div>
          <div>
            <h2 id="finder-heading" className="serif" style={{ fontSize: "clamp(36px, 5.2vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.025em", fontWeight: 340, marginBottom: 24 }}>
              Der erste Schritt ist immer
              <em className="hl-yellow" style={{ fontStyle: "italic" }}> der schwerste.</em>
              <br />
              <span style={{ color: "var(--ink-3)" }}>Wir nehmen ihn euch ab.</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: "56ch", fontFamily: "var(--serif)", fontWeight: 400 }}>
              Wählt den Einstieg, der gerade am besten auf eure Situation passt. Den Rest klären wir zusammen.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }} className="finder-grid">
          {PATHS.map((p) => (
            <a
              key={p.num}
              href={p.href}
              className="finder-card"
              style={{
                background: p.featured ? "var(--bg-3)" : "var(--bg)",
                border: `1px solid ${p.featured ? p.accent : "var(--line-2)"}`,
                padding: "36px 32px 32px",
                display: "flex",
                flexDirection: "column",
                transition: "border-color .2s, transform .2s",
                textDecoration: "none",
                minHeight: 340,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
                <span className="serif" style={{ fontSize: 40, fontStyle: "italic", color: p.featured ? "var(--accent-ink)" : p.accent, fontWeight: 400 }}>{p.num}</span>
                <span className="mono">Weg</span>
              </div>
              <h3 className="serif" style={{ fontSize: 24, letterSpacing: "-0.018em", fontWeight: 400, lineHeight: 1.12, marginBottom: 16 }}>
                {p.label}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 28, flex: 1 }}>{p.desc}</p>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 18 }}>
                <div className="mono" style={{ color: p.featured ? "var(--accent-ink)" : p.accent, marginBottom: 8, fontWeight: 700 }}>→ Empfehlung</div>
                <div style={{ fontSize: 17, color: "var(--cream)", fontFamily: "var(--serif)", fontWeight: 500, marginBottom: 6 }}>{p.route}</div>
                <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)" }}>{p.routeDesc}</div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 24 }}>
          <button className="btn btn-primary" onClick={onOpenSelector} type="button">
            Genauer herausfinden — in 60 Sekunden <span className="arrow" aria-hidden="true">→</span>
          </button>
          <span className="mono" style={{ alignSelf: "center" }}>Kurzer Selektor · keine E-Mail nötig</span>
        </div>
      </div>

      <style>{`
        .finder-card:hover { transform: translateY(-2px); border-color: var(--brass) !important; }
        @media (max-width: 900px) {
          .finder-head { grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 48px !important; }
          .finder-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .finder-card { padding: 28px 24px 24px !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  );
}
