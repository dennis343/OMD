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
      className="sec-pad theme-dark"
      style={{ borderBottom: "2px solid var(--omd-yellow)" }}
    >
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 72 }} className="aud-head">
          <div>
            <div className="eyebrow">Selbstcheck</div>
            <div className="mono" style={{ marginTop: 12 }}>Passt das zu euch?</div>
          </div>
          <div>
            <h2 id="audience-heading" className="serif" style={{ fontSize: "clamp(36px, 5.2vw, 68px)", lineHeight: 1.06, letterSpacing: "-0.02em", fontWeight: 600 }}>
              Für Menschen, die ihren Hund
              <em className="hl-yellow" style={{ fontStyle: "normal", fontWeight: 700 }}> verstehen </em>
              wollen — nicht nur beschäftigen.
            </h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32 }} className="aud-grid">
          <div style={{ background: "var(--bg)", border: "1px solid var(--line-2)", padding: "40px 44px" }}>
            <div className="eyebrow" style={{ marginBottom: 26 }}>+ Gut für euch</div>
            <p style={{ fontSize: 19, lineHeight: 1.55, fontFamily: "var(--serif)", fontWeight: 500, color: "var(--ink-2)", marginBottom: 28 }}>
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
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "var(--ink-2)",
                  }}
                >
                  <span className="serif" style={{ color: "var(--accent-ink)", fontSize: 18, minWidth: 28, fontWeight: 700 }}>
                    0{i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: "transparent", border: "1px solid var(--line-2)", padding: "40px 36px" }}>
            <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 24 }}>− Weniger passend</div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 28, fontFamily: "var(--serif)", fontWeight: 500 }}>
              Nicht ideal, wenn ihr sucht nach:
            </p>
            <ul style={{ listStyle: "none" }}>
              {NEGATIVES.map((n, i) => (
                <li
                  key={n}
                  style={{
                    padding: "14px 0",
                    borderBottom: i < NEGATIVES.length - 1 ? "1px solid var(--line)" : "none",
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: "var(--ink-2)",
                    display: "flex",
                    gap: 14,
                  }}
                >
                  <span style={{ color: "var(--accent-ink)", fontFamily: "var(--mono)", fontSize: 14, fontWeight: 700, minWidth: 18 }} aria-hidden="true">×</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 32, fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)", fontFamily: "var(--mono)", letterSpacing: "0.01em", fontWeight: 500 }}>
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
