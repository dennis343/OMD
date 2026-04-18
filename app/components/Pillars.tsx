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
    name: "24/7",
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
    <section id="saeulen" aria-labelledby="pillars-heading" style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, marginBottom: 88 }} className="pillars-intro">
          <div>
            <div className="mono" style={{ color: "var(--brass)" }}>§ Die drei Wege</div>
            <div className="mono" style={{ marginTop: 8 }}>Drei Säulen · Ein System</div>
          </div>
          <div>
            <h2 id="pillars-heading" className="serif" style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.025em", fontWeight: 340 }}>
              Drei klare Wege — je nachdem, wo du stehst und was du brauchst.
              <span style={{ color: "var(--ink-3)" }}> Keine Vermischung. Kein Rätselraten.</span>
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
                    background: "var(--brass)",
                    color: "var(--bg)",
                    padding: "4px 10px",
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Skalier-Säule
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40 }}>
                <span className="serif" style={{ fontSize: 48, fontStyle: "italic", color: p.accent, fontWeight: 300 }}>{p.num}</span>
                <span className="mono">{p.tag}</span>
              </div>

              <h3 className="serif" style={{ fontSize: 42, letterSpacing: "-0.02em", fontWeight: 380, marginBottom: 14 }}>{p.name}</h3>
              <div style={{ fontSize: 14, fontStyle: "italic", fontFamily: "var(--serif)", color: "var(--ink-3)", marginBottom: 22 }}>
                {p.headline}
              </div>

              <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--ink-2)", marginBottom: 28 }}>{p.desc}</p>

              <ul style={{ listStyle: "none", borderTop: "1px solid var(--line)", marginBottom: 24, flex: 1 }}>
                {p.items.map((it) => (
                  <li
                    key={it}
                    style={{
                      padding: "12px 0",
                      borderBottom: "1px solid var(--line)",
                      fontSize: 13.5,
                      color: "var(--ink-2)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{it}</span>
                    <span style={{ color: p.accent, fontFamily: "var(--mono)", fontSize: 11 }} aria-hidden="true">→</span>
                  </li>
                ))}
              </ul>

              <a href={p.href} className="btn-link mono" style={{ color: p.accent }}>
                {p.cta} →
              </a>
            </article>
          ))}
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
