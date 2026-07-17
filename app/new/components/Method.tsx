const DIFFERENTIATORS = [
  {
    n: "i",
    title: "System statt Zufall",
    desc: "Keine lose Sammlung von Übungen, sondern ein klarer Weg. Jede Einheit hat ein Ziel — und ihr wisst, wofür.",
  },
  {
    n: "ii",
    title: "Alltag statt Showtraining",
    desc: "Es geht nicht um schöne Einzelmomente auf dem Platz, sondern um Verlässlichkeit im echten Leben.",
  },
  {
    n: "iii",
    title: "Ruhige Klarheit statt Reizüberflutung",
    desc: "Gerade sensible, unsichere oder schnell hochfahrende Hunde profitieren von einer Trainingsumgebung, die nicht überfordert.",
  },
  {
    n: "iv",
    title: "Vor Ort und digital stark",
    desc: "Nicht abhängig von einem Ort. Die Marke wirkt, wo ihr seid — in Mülheim, zuhause oder unterwegs.",
  },
  {
    n: "v",
    title: "Didaktik auf hohem Niveau",
    desc: "Nicht nur Hundetraining. Auch gute Vermittlung, saubere Struktur und verständliche Umsetzung — Erwachsenenbildung trifft Trainingspraxis.",
  },
  {
    n: "vi",
    title: "Auch für Profis relevant",
    desc: "Die Marke entwickelt sich bewusst über den klassischen Endkundenmarkt hinaus — mit echten Angeboten für Hundeschulen und Fachkunden.",
  },
];

export default function Method() {
  return (
    <section id="methodik" aria-labelledby="method-heading" className="sec-pad" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 72 }} className="method-head">
          <div data-fx="left">
            <div className="eyebrow">Das System</div>
            <div className="mono" style={{ marginTop: 12 }}>Sechs Prinzipien</div>
          </div>
          <div data-fx>
            <h2 id="method-heading" className="serif" style={{ fontSize: "clamp(34px, 4.8vw, 62px)", lineHeight: 1.08, letterSpacing: "-0.018em", fontWeight: 600, marginBottom: 28 }}>
              Präzision statt Druck.
              <em className="hl-yellow" style={{ fontStyle: "normal", fontWeight: 700 }}> Didaktik </em>
              statt Dressur.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: "58ch", fontFamily: "var(--serif)", fontWeight: 400 }}>
              Egal ob ihr vor Ort trainiert, online arbeitet oder als Hundeschule
              mit uns wachst — darunter liegt immer dasselbe System. Wir verzichten
              auf aversive Methoden, auch bei anspruchsvollen Fällen. Nicht aus
              Ideologie, sondern weil Training, das auf Druck basiert, unter Druck
              zusammenbricht. Das ist kein weiches Training. Es ist präzises.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: "1px solid var(--line-2)",
            borderLeft: "1px solid var(--line-2)",
          }}
          className="diff-grid"
        >
          {DIFFERENTIATORS.map((d, i) => (
            <article
              key={d.n}
              data-fx
              style={{
                ["--fx-d" as string]: `${(i % 3) * 120}ms`,
                padding: "36px 32px 40px",
                borderRight: "1px solid var(--line-2)",
                borderBottom: "1px solid var(--line-2)",
                background: "var(--bg-2)",
                minHeight: 260,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 22 }}>
                <span className="serif accent-ink" style={{ fontSize: 28, fontWeight: 700 }}>{d.n}.</span>
                <span className="mono">Prinzip</span>
              </div>
              <h3 className="serif" style={{ fontSize: 24, letterSpacing: "-0.015em", fontWeight: 600, marginBottom: 14 }}>
                {d.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)" }}>{d.desc}</p>
            </article>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .method-head { grid-template-columns: 1fr !important; gap: 24px !important; }
            .diff-grid { grid-template-columns: 1fr !important; }
          }
          @media (min-width: 901px) and (max-width: 1100px) {
            .diff-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
