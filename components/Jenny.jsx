// Jenny.jsx — Über Jennifer Bakir
function Jenny() {
  return (
    <section id="jenny" style={{ padding: "140px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center" }} className="jenny-grid">
          <div>
            <div className="mono" style={{ color: "var(--brass)", marginBottom: 28 }}>§ Über uns · Hinter dem System</div>
            <h2 className="serif" style={{ fontSize: "clamp(40px, 5.5vw, 76px)", lineHeight: 0.98, letterSpacing: "-0.03em", fontWeight: 340, marginBottom: 32 }}>
              Jenny hat Hunde gelernt —
              <br />
              und <em style={{ color: "var(--brass)" }}>Menschen führen</em> schon vorher.
            </h2>

            <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink-2)", marginBottom: 24, maxWidth: "52ch", fontFamily: "var(--serif)", fontWeight: 300 }}>
              13 Jahre Führungsarbeit in der Kommunikationsbranche. Studium der Erwachsenen­bildung.
              Und seit vielen Jahren Hundetrainerin mit Fokus auf anspruchsvolle Fälle. Das
              zusammen ist kein Zufall — es ist das Fundament von oooh my dog!
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginTop: 40, borderTop: "1px solid var(--line-2)" }} className="jenny-cv">
              {[
                ["Führung", "13 Jahre · Kommunikationsbranche"],
                ["Didaktik", "Studium Erwachsenenbildung"],
                ["Training", "1 400+ begleitete Hunde"],
                ["Methode", "Ohne aversive Werkzeuge"],
              ].map(([k, v], i) => (
                <div key={i} style={{
                  padding: "22px 24px 22px 0",
                  borderBottom: "1px solid var(--line-2)",
                  borderRight: (i % 2 === 0) ? "1px solid var(--line-2)" : "none",
                  paddingLeft: (i % 2 === 1) ? 24 : 0,
                }}>
                  <div className="mono" style={{ color: "var(--brass)", marginBottom: 6 }}>{k}</div>
                  <div style={{ fontSize: 14.5, color: "var(--ink-2)" }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="#kontakt">Jenny kennenlernen <span className="arrow">→</span></a>
              <a className="btn btn-ghost" href="#pro">Für Hundeschulen →</a>
            </div>
          </div>

          <div style={{ position: "relative", minHeight: 620 }} className="jenny-images">
            <div className="ph" style={{ position: "absolute", top: 0, right: 0, width: "78%", height: 480 }}>
              Jenny · Portrait · 4:5
            </div>
            <div className="ph" style={{ position: "absolute", bottom: 0, left: 0, width: "52%", height: 240, border: "1px solid var(--brass)" }}>
              Arbeitssituation · 4:3
            </div>
            <div style={{
              position: "absolute", top: 20, left: 20,
              transform: "rotate(-4deg)",
              background: "var(--bg-3)", border: "1px solid var(--line-2)",
              padding: "12px 16px",
              fontFamily: "var(--serif)", fontSize: 15, fontStyle: "italic",
              color: "var(--ink-2)",
              maxWidth: 220,
            }}>
              „Ich trainiere lieber präzise, als lauter.“
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .jenny-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .jenny-cv { grid-template-columns: 1fr !important; }
            .jenny-cv > div { border-right: none !important; padding-left: 0 !important; padding-right: 0 !important; }
            .jenny-images { min-height: 420px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

window.Jenny = Jenny;
