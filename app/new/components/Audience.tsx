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

type AudienceProps = { onOpenSelector: () => void };

export default function Audience({ onOpenSelector }: AudienceProps) {
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
            <div className="eyebrow">Ehrliche Einordnung</div>
            <div className="mono" style={{ marginTop: 12 }}>Passt das zu euch?</div>
          </div>
          <div>
            <h2 id="audience-heading" className="serif" style={{ fontSize: "clamp(36px, 5.2vw, 68px)", lineHeight: 1.06, letterSpacing: "-0.02em", fontWeight: 600 }}>
              Wir sind bewusst
              <em className="hl-yellow" style={{ fontStyle: "normal", fontWeight: 700 }}> nicht für jeden</em>.
              Vielleicht aber genau für euch.
            </h2>
            <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: "58ch", fontFamily: "var(--serif)" }}>
              Ein System funktioniert nur, wenn beide Seiten dahinterstehen.
              Deshalb sagen wir vor der ersten Buchung offen, für wen unsere
              Arbeit gemacht ist — und für wen ein anderer Weg der bessere ist.
            </p>
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

        <div className="aud-cta">
          <p className="serif aud-cta-q">Unsicher, wo ihr steht?</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
            <button className="btn btn-primary" onClick={onOpenSelector} type="button">
              Passen wir zueinander? <span className="arrow" aria-hidden="true">→</span>
            </button>
            <span className="mono" style={{ color: "var(--ink-2)" }}>2 Minuten · 3 Fragen · Klare Empfehlung</span>
          </div>
        </div>
      </div>

      <style>{`
        .aud-cta { margin-top: 56px; padding: 32px 36px; border: 1px solid var(--line-2); background: var(--bg-2); display: grid; grid-template-columns: 1fr; gap: 20px; align-items: center; }
        .aud-cta-q { font-size: clamp(22px, 3vw, 30px); font-weight: 600; letter-spacing: -0.015em; }
        @media (min-width: 700px) {
          .aud-cta { grid-template-columns: 1fr auto; padding: 36px 44px; }
        }
        @media (max-width: 900px) {
          .aud-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .aud-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
