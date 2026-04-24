type Pillar = {
  num: string;
  name: string;
  tag: string;
  headline: string;
  desc: string;
  items: string[];
  accent: string;
  featured?: boolean;
  cta: string;
  href: string;
};

const PILLARS: Pillar[] = [
  {
    num: "01",
    name: "Vor Ort",
    tag: "Mülheim · Ruhrgebiet",
    headline: "Für Teams aus Mülheim und Umgebung",
    desc: "Persönliches Training, Gruppen, Einzelcoachings und strukturierte Begleitung für euren Alltag — direkt bei euch vor Ort.",
    items: ["Kennenlern-Coaching", "Einzelcoaching", "Orientierung & Führung", "Soziales Lernen", "Spezialthemen"],
    accent: "var(--cream)",
    cta: "Vor-Ort-Angebote ansehen",
    href: "#vor-ort",
  },
  {
    num: "02",
    name: "Online",
    tag: "DACH · Digital",
    headline: "Für Hundehalter im gesamten deutschsprachigen Raum",
    desc: "Online-Coaching, Videoanalyse, Programme und flexible Begleitung — ohne Anfahrt, aber mit System. Auch wenn ihr nicht in Mülheim wohnt.",
    items: ["Reizoffen & führbar", "Videoanalyse Pro", "oooh my dog! Club", "Saisonale Sprints", "Online-Sprechstunde"],
    accent: "var(--brass)",
    featured: true,
    cta: "Digitale Angebote ansehen",
    href: "#anywhere",
  },
  {
    num: "03",
    name: "Pro & Business",
    tag: "B2B · Für Profis",
    headline: "Für Hundeschulen, Profis und ambitionierte Menschen",
    desc: "Strategie, Kursdidaktik, Fallsupervision, Aufbau und Premium-Positionierung — für alle, die nicht klein-klein im Tagesgeschäft hängen bleiben wollen.",
    items: ["OMD Pro Case Lab", "Premium Hundeschule System", "Berufswechsel-Realitätscheck"],
    accent: "var(--moss)",
    cta: "Pro-Angebote ansehen",
    href: "#pro",
  },
];

export default function Pillars() {
  return (
    <section id="saeulen" aria-labelledby="pillars-heading" className="sec-pad" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, marginBottom: 88 }} className="pillars-intro">
          <div>
            <div className="eyebrow">Die drei Wege</div>
            <div className="mono" style={{ marginTop: 12 }}>Drei Säulen · Ein System</div>
          </div>
          <div>
            <h2 id="pillars-heading" className="serif" style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.025em", fontWeight: 340 }}>
              Drei klare Wege —
              <em className="hl-yellow" style={{ fontStyle: "italic" }}> ein System.</em>
              <span style={{ color: "var(--ink-3)" }}> Je nachdem, wo ihr steht und was euer Hund braucht.</span>
            </h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--line-2)" }} className="pillars-grid">
          {PILLARS.map((p, i) => (
            <article
              key={p.num}
              style={{
                padding: "44px 36px 36px",
                borderLeft: i === 0 ? "none" : "1px solid var(--line-2)",
                background: p.featured ? "var(--bg-2)" : "transparent",
                position: "relative",
                minHeight: 620,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {p.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    right: 24,
                    background: "var(--omd-yellow)",
                    color: "#07071A",
                    padding: "6px 14px",
                    borderRadius: "0 0 6px 6px",
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  Skalier-Säule
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40 }}>
                <span className="serif" style={{ fontSize: 48, fontStyle: "italic", color: p.featured ? "var(--accent-ink)" : p.accent, fontWeight: 400 }}>{p.num}</span>
                <span className="mono">{p.tag}</span>
              </div>

              <h3 className="serif" style={{ fontSize: 42, letterSpacing: "-0.02em", fontWeight: 500, marginBottom: 14 }}>{p.name}</h3>
              <div style={{ fontSize: 15, fontStyle: "italic", fontFamily: "var(--serif)", color: "var(--ink-2)", marginBottom: 22, lineHeight: 1.45 }}>
                {p.headline}
              </div>

              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)", marginBottom: 28 }}>{p.desc}</p>

              <ul style={{ listStyle: "none", borderTop: "1px solid var(--line)", marginBottom: 24, flex: 1 }}>
                {p.items.map((it) => (
                  <li
                    key={it}
                    style={{
                      padding: "14px 0",
                      borderBottom: "1px solid var(--line)",
                      fontSize: 15,
                      lineHeight: 1.45,
                      color: "var(--ink-2)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span>{it}</span>
                    <span style={{ color: p.featured ? "var(--accent-ink)" : p.accent, fontFamily: "var(--mono)", fontSize: 13, fontWeight: 700, flexShrink: 0 }} aria-hidden="true">→</span>
                  </li>
                ))}
              </ul>

              <a href={p.href} className="btn-link mono" style={{ color: p.featured ? "var(--accent-ink)" : p.accent }}>
                {p.cta} →
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pillars-intro { grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 48px !important; }
          .pillars-grid { grid-template-columns: 1fr !important; }
          .pillars-grid > article { border-left: none !important; border-bottom: 1px solid var(--line-2); min-height: auto !important; padding: 32px 24px 28px !important; }
        }
        @media (max-width: 380px) {
          .pillars-grid > article { padding: 28px 18px 24px !important; }
        }
      `}</style>
    </section>
  );
}
