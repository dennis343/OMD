// Method.jsx — Methoden-Statement: ruhige Klarheit, kein aversives Training
function Method() {
  const principles = [
    { n: "i", title: "Diagnose vor Übung", desc: "Wir verstehen, warum ein Hund reagiert, bevor wir trainieren. Ohne Diagnose ist jede Übung nur Symptomkosmetik." },
    { n: "ii", title: "Klarheit statt Lautstärke", desc: "Gute Führung ist ruhig, konsequent und lesbar — für Hund und Halter. Wir arbeiten mit Struktur, nicht mit Einschüchterung." },
    { n: "iii", title: "Aufbau statt Unterdrückung", desc: "Ein Hund, der alternative Handlungen hat, braucht weniger Korrektur. Wir bauen Verhalten auf, das unter Druck trägt." },
    { n: "iv", title: "Halter sind Teil der Lösung", desc: "Training am Hund ohne Training des Halters hält nicht. Wir arbeiten an Entscheidungen, Timing und Haltung — im Wortsinn." },
  ];

  return (
    <section style={{ padding: "120px 0", background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 72 }} className="method-head">
          <div>
            <div className="mono" style={{ color: "var(--brass)" }}>§ Methodik</div>
            <div className="mono" style={{ marginTop: 8 }}>Vier Leitplanken</div>
          </div>
          <div>
            <h2 className="serif" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.02em", fontWeight: 340, marginBottom: 28 }}>
              Auch reizoffene Hunde brauchen keine Härte.
              <br />
              <span style={{ color: "var(--ink-3)" }}>Sie brauchen eine Führung, die versteht, was sie gerade wirklich tun.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: "58ch", fontFamily: "var(--serif)", fontWeight: 300 }}>
              Wir verzichten auf aversive Methoden — auch bei anspruchsvollen Fällen. Nicht aus
              Ideologie, sondern weil Training, das auf Druck basiert, unter Druck zusammenbricht.
              Das ist kein weiches Training. Es ist präzises.
            </p>
          </div>
        </div>

        {/* Principles grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid var(--line-2)", borderLeft: "1px solid var(--line-2)" }} className="method-grid">
          {principles.map((p, i) => (
            <div key={i} style={{
              padding: "36px 36px 40px",
              borderRight: "1px solid var(--line-2)",
              borderBottom: "1px solid var(--line-2)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 22 }}>
                <span className="serif" style={{ fontSize: 28, fontStyle: "italic", color: "var(--brass)", fontWeight: 300 }}>{p.n}.</span>
                <span className="mono">Leitplanke</span>
              </div>
              <h3 className="serif" style={{ fontSize: 26, letterSpacing: "-0.02em", fontWeight: 380, marginBottom: 14 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .method-head { grid-template-columns: 1fr !important; gap: 24px !important; }
            .method-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

window.Method = Method;
