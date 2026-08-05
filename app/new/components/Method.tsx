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

const PHASES = [
  {
    n: "01",
    title: "Prägung & Sozialisierung",
    desc: "Die frühen Wochen legen das Fundament. Was ein Hund hier erlebt — und was nicht — prägt, wie er die Welt später einordnet.",
  },
  {
    n: "02",
    title: "Pubertät & Hormone",
    desc: "Aus dem folgsamen Junghund wird ein Testkandidat. Rückruf, Grenzen und Ruhe werden neu verhandelt. Das ist keine Trotzphase — das ist Entwicklung.",
  },
  {
    n: "03",
    title: "Erwachsenenalter",
    desc: "Verhalten ist jetzt geprägt, aber nie in Stein gemeißelt. Routinen, Umwelt und eure Führung entscheiden, was trägt.",
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

        <div className="dev-model" id="entwicklungsmodell" data-fx>
          <div className="dev-model-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Das Grundprinzip</div>
              <div className="mono">Entwicklungs-Modell</div>
            </div>
            <div>
              <h3 className="serif dev-model-h">
                Verhalten entsteht
                <em className="hl-yellow" style={{ fontStyle: "normal", fontWeight: 700 }}> nie zufällig.</em>
              </h3>
              <p className="dev-model-lead">
                Hunde entwickeln sich in Etappen — und Verhalten folgt diesen Etappen.
                Jede Phase verändert, was dein Hund kann, braucht und aushält. Wer das
                weiß, trainiert realistischer, ruhiger, wirksamer.
              </p>
            </div>
          </div>

          <div className="dev-grid">
            {PHASES.map((p) => (
              <article key={p.n} className="dev-card">
                <span className="serif accent-ink" style={{ fontSize: 26, fontWeight: 700 }}>{p.n}</span>
                <h4 className="serif dev-card-t">{p.title}</h4>
                <p className="dev-card-d">{p.desc}</p>
              </article>
            ))}
            <article className="dev-card is-stressor">
              <span className="serif accent-ink" style={{ fontSize: 26, fontWeight: 700 }}>±</span>
              <h4 className="serif dev-card-t">Hormone & Stressoren</h4>
              <p className="dev-card-d">
                Läufigkeit, Kastration, Jahreszeiten, Umweltreize, Alltagsdruck — alles wirkt
                auf Verhalten. Manches ist vorhersehbar, manches zeigt sich erst im Verhalten.
                Beides lesen wir richtig.
              </p>
            </article>
          </div>

          <p className="dev-bridge">
            Deshalb adressieren unsere{" "}
            <a href="#anywhere" className="dev-link">saisonalen Sprints</a>{" "}
            das Vorhersehbare — Silvester, Urlaub, Jahreszeiten. Und{" "}
            <a href="#anywhere" className="dev-link">Signaturprogramm und Club</a>{" "}
            das, was sich erst im Verhalten zeigt.
          </p>
        </div>

        <style>{`
          .dev-model { margin-top: 72px; padding-top: 64px; border-top: 1px solid var(--line-2); }
          .dev-model-head { display: grid; grid-template-columns: 1fr; gap: 20px; margin-bottom: 40px; }
          .dev-model-h { font-size: clamp(30px, 4.4vw, 56px); line-height: 1.08; letter-spacing: -0.02em; font-weight: 600; margin-bottom: 18px; }
          .dev-model-lead { font-size: 17px; line-height: 1.65; color: var(--ink-2); max-width: 56ch; font-family: var(--serif); font-weight: 400; }
          .dev-grid { display: grid; grid-template-columns: 1fr; gap: 0; border-top: 1px solid var(--line-2); border-left: 1px solid var(--line-2); }
          .dev-card { padding: 30px 26px 34px; border-right: 1px solid var(--line-2); border-bottom: 1px solid var(--line-2); background: var(--bg-2); display: flex; flex-direction: column; gap: 14px; }
          .dev-card.is-stressor { background: var(--bg); }
          .dev-card-t { font-size: 22px; letter-spacing: -0.015em; font-weight: 600; }
          .dev-card-d { font-size: 14.5px; line-height: 1.6; color: var(--ink-2); }
          .dev-bridge { margin-top: 32px; font-size: 17px; line-height: 1.65; max-width: 62ch; font-family: var(--serif); font-weight: 400; color: var(--ink-2); }
          .dev-link { color: var(--ink); text-decoration: underline; text-decoration-color: var(--omd-yellow); text-decoration-thickness: 2px; text-underline-offset: 3px; }
          .dev-link:hover { text-decoration-color: var(--ink); }
          @media (min-width: 900px) {
            .dev-model-head { grid-template-columns: 1fr 2fr; gap: 80px; margin-bottom: 56px; }
            .dev-grid { grid-template-columns: repeat(4, 1fr); }
          }
          @media (min-width: 640px) and (max-width: 899px) {
            .dev-grid { grid-template-columns: 1fr 1fr; }
          }
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
