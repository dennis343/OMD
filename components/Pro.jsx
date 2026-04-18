// Pro.jsx — Säule 3: Pro & Business — B2B und professionelle Orientierung
function Pro() {
  const modules = [
    {
      n: "06",
      name: "OMD Pro Case Lab",
      tag: "Fallsupervision · Premium",
      forWho: "Für Hundeschulen und Trainer:innen, die mit anspruchsvollen Fällen arbeiten und ihre Qualität erhöhen wollen.",
      situation: "Du hast Fälle, bei denen du klarer entscheiden, sauberer kommunizieren oder strukturierter führen willst.",
      outcome: "Mehr Sicherheit in Fällen. Bessere Kundenführung. Stärkeres professionelles Auftreten.",
      includes: ["Fundierte Fallbesprechungen", "Klare Einordnung", "Blick auf Trainingslogik und Halterführung", "Übertragbare Entscheidungslogiken"],
      cta: "Pro Case Lab anfragen",
    },
    {
      n: "07",
      name: "Premium Hundeschule System",
      tag: "Strategie · Angebotsarchitektur",
      forWho: "Für Hundeschulen, die nicht im Tagesgeschäft hängen bleiben wollen, sondern ein tragfähiges Premium-System aufbauen.",
      situation: "Zu viele Einzelentscheidungen, zu wenig System. Angebote wachsen historisch, aber nicht strategisch. Der rote Faden fehlt.",
      outcome: "Klarere Positionierung, bessere Angebotsarchitektur, bessere Kundenergebnisse und höhere Skalierbarkeit.",
      includes: ["Schärfung des Angebotsportfolios", "Didaktische Kurslogik", "Struktur für Kundenerfolg", "Ansatzpunkte für skalierbare Formate"],
      cta: "Business-Beratung anfragen",
      featured: true,
    },
    {
      n: "08",
      name: "Berufswechsel Hund · Realitätscheck",
      tag: "Orientierung · Ehrlich",
      forWho: "Für Menschen, die überlegen, ob der Hundebereich beruflich der richtige Weg für sie ist.",
      situation: "Interesse ist da, aber die Realität des Berufsbilds ist noch unscharf. Romantisierung statt Klarheit.",
      outcome: "Klarheit, ob dieser Weg wirklich passt — fachlich, menschlich und wirtschaftlich.",
      includes: ["Ehrliche Einordnung statt Schönfärberei", "Realistischer Blick auf Anforderungen", "Orientierung zu Qualität und Verantwortung", "Saubere Entscheidungshilfe"],
      cta: "Realitätscheck ansehen",
    },
  ];

  return (
    <section id="pro" style={{ padding: "140px 0", borderBottom: "1px solid var(--line)", position: "relative" }}>
      <div className="shell">

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, marginBottom: 80 }} className="pro-head">
          <div>
            <div className="mono" style={{ color: "var(--moss)", marginBottom: 20 }}>§ Säule 03 · Pro & Business</div>
            <div className="label" style={{ color: "var(--ink-3)" }}>Hundeschulen · Trainer:innen · Fachkunden</div>
          </div>
          <div>
            <h2 className="serif" style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.025em", fontWeight: 340 }}>
              Für alle, die nicht „irgendwas mit Hunden“ machen wollen —
              <span style={{ color: "var(--ink-3)" }}> sondern Struktur, Qualität und Premium-Niveau aufbauen.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 28, maxWidth: "58ch", fontFamily: "var(--serif)", fontWeight: 300 }}>
              Wir arbeiten mit Hundeschulen und ambitionierten Profis, die geschickt wachsen
              wollen, ohne Qualität zu verlieren. Weniger 1:1-Stundendruck, mehr System. Echte
              Erfolge bei euren Kunden — weil die Methode sitzt, nicht nur der Tarif.
            </p>
          </div>
        </div>

        {/* 3 module columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--line-2)" }} className="pro-grid">
          {modules.map((m, i) => (
            <article key={i} style={{
              padding: "44px 36px 36px",
              borderLeft: i === 0 ? "none" : "1px solid var(--line-2)",
              background: m.featured ? "var(--bg-2)" : "transparent",
              position: "relative",
              display: "flex", flexDirection: "column",
            }}>
              {m.featured && (
                <div style={{
                  position: "absolute", top: -1, right: 24,
                  background: "var(--moss)", color: "var(--bg)",
                  padding: "4px 10px",
                  fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase",
                }}>Hebel</div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 28 }}>
                <span className="serif" style={{ fontSize: 36, fontStyle: "italic", color: "var(--moss)", fontWeight: 300 }}>{m.n}</span>
                <span className="mono">{m.tag}</span>
              </div>

              <h3 className="serif" style={{ fontSize: 30, letterSpacing: "-0.02em", fontWeight: 380, marginBottom: 20, lineHeight: 1.08 }}>
                {m.name}
              </h3>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16, marginBottom: 18 }}>
                <div className="mono" style={{ color: "var(--moss)", marginBottom: 8 }}>→ Für wen</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)" }}>{m.forWho}</p>
              </div>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16, marginBottom: 18 }}>
                <div className="mono" style={{ color: "var(--moss)", marginBottom: 8 }}>→ Situation jetzt</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-3)" }}>{m.situation}</p>
              </div>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16, marginBottom: 18 }}>
                <div className="mono" style={{ color: "var(--moss)", marginBottom: 8 }}>→ Veränderung danach</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)" }}>{m.outcome}</p>
              </div>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16, marginBottom: 24, flex: 1 }}>
                <div className="mono" style={{ color: "var(--moss)", marginBottom: 10 }}>→ Was drin ist</div>
                <ul style={{ listStyle: "none" }}>
                  {m.includes.map((it, j) => (
                    <li key={j} style={{ fontSize: 13, color: "var(--ink-2)", padding: "6px 0", display: "flex", gap: 10 }}>
                      <span style={{ color: "var(--moss)" }}>+</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a className="btn-link mono" href="#kontakt" style={{ color: "var(--moss)" }}>{m.cta} →</a>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32, alignItems: "center" }} className="pro-foot">
          <div style={{ border: "1px solid var(--line-2)", padding: "36px 40px", background: "var(--bg-2)" }}>
            <div className="mono" style={{ color: "var(--moss)", marginBottom: 12 }}>→ Einstieg in Pro & Business</div>
            <p className="serif" style={{ fontSize: 22, lineHeight: 1.35, fontWeight: 360, fontStyle: "italic", color: "var(--ink-2)", maxWidth: "52ch" }}>
              Kurzes Erstgespräch, ehrliche Diagnose: Wo steht ihr, und welches Modul trägt jetzt den größten Hebel?
            </p>
          </div>
          <a className="btn btn-primary" href="#kontakt" style={{ justifyContent: "center" }}>Gespräch anfragen <span className="arrow">→</span></a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pro-head, .pro-foot { grid-template-columns: 1fr !important; gap: 32px !important; }
          .pro-grid { grid-template-columns: 1fr !important; }
          .pro-grid > article { border-left: none !important; border-bottom: 1px solid var(--line-2); }
        }
      `}</style>
    </section>
  );
}

window.Pro = Pro;
