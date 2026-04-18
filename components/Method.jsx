// Method.jsx — "Warum oooh my dog! nicht irgendeine Hundeschule ist"
function Method() {
  const differentiators = [
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

  return (
    <section id="method" style={{ padding: "140px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 72 }} className="method-head">
          <div>
            <div className="mono" style={{ color: "var(--brass)" }}>§ Differenzierung</div>
            <div className="mono" style={{ marginTop: 8 }}>Sechs Gründe</div>
          </div>
          <div>
            <h2 className="serif" style={{ fontSize: "clamp(34px, 4.8vw, 62px)", lineHeight: 1.04, letterSpacing: "-0.022em", fontWeight: 340, marginBottom: 28 }}>
              Warum oooh my dog! nicht
              <em style={{ color: "var(--brass)", fontStyle: "italic" }}> irgendeine </em>
              Hundeschule ist.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: "58ch", fontFamily: "var(--serif)", fontWeight: 300 }}>
              Wir verzichten auf aversive Methoden — auch bei anspruchsvollen Fällen.
              Nicht aus Ideologie, sondern weil Training, das auf Druck basiert,
              unter Druck zusammenbricht. Das ist kein weiches Training. Es ist präzises.
            </p>
          </div>
        </div>

        {/* 6-card grid: 3x2 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--line-2)", borderLeft: "1px solid var(--line-2)" }} className="diff-grid">
          {differentiators.map((d, i) => (
            <div key={i} style={{
              padding: "36px 32px 40px",
              borderRight: "1px solid var(--line-2)",
              borderBottom: "1px solid var(--line-2)",
              background: "var(--bg-2)",
              minHeight: 260,
              display: "flex", flexDirection: "column",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 22 }}>
                <span className="serif" style={{ fontSize: 28, fontStyle: "italic", color: "var(--brass)", fontWeight: 300 }}>{d.n}.</span>
                <span className="mono">Unterschied</span>
              </div>
              <h3 className="serif" style={{ fontSize: 24, letterSpacing: "-0.018em", fontWeight: 380, marginBottom: 14 }}>
                {d.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)" }}>{d.desc}</p>
            </div>
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

window.Method = Method;
