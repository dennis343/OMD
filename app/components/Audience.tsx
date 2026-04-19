const POSITIVES = [
  "einen reizoffenen, unsicheren, schnell drübergehenden oder anspruchsvollen Hund habt",
  "klare Anleitung statt widersprüchlicher Tipps wollt",
  "echte Veränderung im Alltag sucht — keine kurzen Showeffekte",
  "systematisch lernen möchtet, statt zufällig auszuprobieren",
  "Premium-Begleitung schätzt und bereit seid, wirklich mitzuarbeiten",
  "online oder vor Ort einen strukturierten Weg braucht",
];

const NEGATIVES = [
  "schnelle Tricks ohne Arbeit am eigenen Verhalten",
  "reine Auslastung oder Bespaßung",
  "unverbindliches Herumprobieren ohne System",
];

export default function Audience() {
  return (
    <section
      id="zielgruppe"
      aria-labelledby="audience-heading"
      style={{ padding: "140px 0", background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 72 }} className="aud-head">
          <div>
            <div className="mono" style={{ color: "var(--omd-yellow)" }}>Selbstcheck</div>
            <div className="mono" style={{ marginTop: 8 }}>Passt das zu euch?</div>
          </div>
          <div>
            <h2 id="audience-heading" className="serif" style={{ fontSize: "clamp(36px, 5.2vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.025em", fontWeight: 340 }}>
              Für Menschen, die ihren Hund
              <em style={{ color: "var(--omd-yellow)", fontStyle: "italic" }}> verstehen </em>
              wollen — nicht nur beschäftigen.
            </h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32 }} className="aud-grid">
          <div style={{ background: "var(--bg)", border: "1px solid var(--line-2)", padding: "40px 44px" }}>
            <div className="mono" style={{ color: "var(--omd-yellow)", marginBottom: 24 }}>+ Gut für euch</div>
            <p style={{ fontSize: 18, lineHeight: 1.5, fontFamily: "var(--serif)", fontWeight: 340, color: "var(--ink-2)", marginBottom: 28 }}>
              oooh my dog! ist besonders passend für Menschen, die:
            </p>
            <ul style={{ listStyle: "none", borderTop: "1px solid var(--line)" }}>
              {POSITIVES.map((p, i) => (
                <li
                  key={p}
                  style={{
                    padding: "18px 0",
                    borderBottom: "1px solid var(--line)",
                    display: "flex",
                    gap: 20,
                    fontSize: 15.5,
                    lineHeight: 1.5,
                    color: "var(--ink-2)",
                  }}
                >
                  <span className="serif" style={{ color: "var(--omd-yellow)", fontStyle: "italic", fontSize: 18, minWidth: 28 }}>
                    0{i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: "transparent", border: "1px solid var(--line-2)", padding: "40px 36px" }}>
            <div className="mono" style={{ color: "var(--rust)", marginBottom: 24 }}>− Weniger passend</div>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-3)", marginBottom: 28, fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic" }}>
              Nicht ideal, wenn ihr sucht nach:
            </p>
            <ul style={{ listStyle: "none" }}>
              {NEGATIVES.map((n, i) => (
                <li
                  key={n}
                  style={{
                    padding: "14px 0",
                    borderBottom: i < NEGATIVES.length - 1 ? "1px solid var(--line)" : "none",
                    fontSize: 14.5,
                    lineHeight: 1.5,
                    color: "var(--ink-3)",
                    display: "flex",
                    gap: 14,
                  }}
                >
                  <span style={{ color: "var(--rust)", fontFamily: "var(--mono)", fontSize: 11, minWidth: 18 }} aria-hidden="true">×</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 32, fontSize: 13, lineHeight: 1.55, color: "var(--ink-4)", fontFamily: "var(--mono)", letterSpacing: "0.02em" }}>
              Das ist keine Wertung, sondern eine klare Einordnung — damit ihr keine Zeit verliert.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .aud-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .aud-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
