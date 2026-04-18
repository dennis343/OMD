// Offers.jsx — Säule 1: Vor Ort (Mülheim/Ruhrgebiet)
function Offers({ onOpenSelector }) {
  const entries = [
    {
      tag: "Einstieg",
      title: "Kennenlern-Coaching",
      sub: "Für alle, die nicht planlos starten wollen",
      desc: "Der strukturierte Einstieg für neue Teams. Wir schauen uns euch in der Praxis an, klären eure Themen und zeigen euch den sinnvollsten Weg.",
      forWho: "Ihr wollt Orientierung, habt mehrere Baustellen oder wisst nicht, welches Angebot passt.",
      expect: ["Klare Ersteinschätzung", "Konkrete nächste Schritte", "Ein sinnvoller Trainingsweg statt Rätselraten"],
      cta: "Kennenlernen buchen",
      accent: "var(--brass)",
      large: true,
    },
    {
      tag: "Individuell",
      title: "Einzelcoaching vor Ort",
      sub: "Wenn euer Thema individuell, komplex oder alltagsnah ist",
      desc: "Für Themen, die direkt im echten Umfeld bearbeitet werden sollten — Unsicherheit, starke Aufregung, Probleme zuhause oder in konkreten Alltagssituationen.",
      forWho: "Ihr braucht einen Profi-Blick auf eure Situation — nicht im Gruppenformat.",
      expect: ["Individuelle Analyse", "Direkte Umsetzung im relevanten Kontext", "Klare Aufgaben für den Alltag"],
      cta: "Einzelcoaching anfragen",
      accent: "var(--cream)",
      large: false,
    },
  ];

  const clusters = [
    {
      name: "Cluster A",
      title: "Orientierung & Führung",
      items: [
        { name: "Basics", desc: "Saubere Grundlagen — Bindung, Kommunikation, Signale." },
        { name: "Lenken & Grenzen setzen", desc: "Klare Führung ohne Härte. Struktur, die trägt." },
        { name: "Unsichtbare Leine", desc: "Freiraum mit Verlässlichkeit — auch ohne physische Leine." },
      ],
    },
    {
      name: "Cluster B",
      title: "Soziales Lernen & Zusammenarbeit",
      items: [
        { name: "Sozialkontakt", desc: "Ruhige, gesunde Begegnungen statt Überforderung." },
        { name: "Longieren", desc: "Distanzarbeit, Körpersprache, Feinabstimmung." },
        { name: "Begleithundetraining", desc: "Prüfungsrelevant und alltagsnah." },
      ],
    },
    {
      name: "Cluster C",
      title: "Spezialthemen",
      items: [
        { name: "Anti-Giftköder", desc: "Sicherheit im Alltag — zuverlässig abrufbar." },
        { name: "Jagdkontrolle", desc: "Rückruf und Impulskontrolle unter echten Reizen." },
      ],
    },
  ];

  return (
    <section id="vor-ort" style={{ padding: "140px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div className="mono" style={{ color: "var(--cream)", marginBottom: 20 }}>§ Säule 01 · Vor Ort</div>
            <h2 className="serif" style={{ fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.03em", fontWeight: 340, maxWidth: "16ch" }}>
              Persönliches Hundetraining
              <br />
              <span style={{ color: "var(--ink-3)" }}>in Mülheim und Umgebung.</span>
            </h2>
            <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: "58ch", fontFamily: "var(--serif)", fontWeight: 300 }}>
              Für Menschen, die direkte Begleitung möchten, ihren Hund im echten Alltag besser führen wollen und einen strukturierten Weg suchen.
            </p>
          </div>
          <a className="btn btn-ghost" href="#kontakt">Alle Vor-Ort-Angebote <span className="arrow">→</span></a>
        </div>

        {/* Entry offers: Kennenlern + Einzel */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, marginBottom: 56 }} className="local-entry">
          {entries.map((e, i) => (
            <article key={i} style={{
              background: e.large ? "var(--bg-3)" : "var(--bg-2)",
              border: `1px solid ${e.large ? "var(--brass)" : "var(--line-2)"}`,
              padding: e.large ? "44px 44px 40px" : "36px 36px 32px",
              position: "relative",
              display: "flex", flexDirection: "column",
            }}>
              <div style={{ position: "absolute", top: -10, left: e.large ? 36 : 24, background: e.accent, color: "var(--bg)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", padding: "3px 10px" }}>
                {e.tag}
              </div>

              <h3 className="serif" style={{
                fontSize: e.large ? 44 : 30,
                letterSpacing: "-0.025em", lineHeight: 1.02, fontWeight: e.large ? 340 : 380,
                marginBottom: 10,
              }}>
                {e.title}
              </h3>
              <div style={{ fontSize: 14.5, color: "var(--ink-3)", fontStyle: "italic", fontFamily: "var(--serif)", marginBottom: 22 }}>
                {e.sub}
              </div>
              <p style={{ fontSize: e.large ? 16 : 14.5, lineHeight: 1.55, color: "var(--ink-2)", marginBottom: 24 }}>
                {e.desc}
              </p>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 18, marginBottom: 20 }}>
                <div className="mono" style={{ color: "var(--brass)", marginBottom: 10 }}>→ Gut für euch, wenn</div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)" }}>{e.forWho}</p>
              </div>

              <div>
                <div className="mono" style={{ color: "var(--brass)", marginBottom: 10 }}>→ Was ihr erwarten könnt</div>
                <ul style={{ listStyle: "none" }}>
                  {e.expect.map((it, j) => (
                    <li key={j} style={{ padding: "8px 0", fontSize: 13.5, color: "var(--ink-2)", borderBottom: j < e.expect.length - 1 ? "1px solid var(--line)" : "none", display: "flex", gap: 12 }}>
                      <span style={{ color: e.accent }}>+</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: 28 }}>
                <a className="btn btn-primary" href="#kontakt">{e.cta} <span className="arrow">→</span></a>
              </div>
            </article>
          ))}
        </div>

        {/* Gruppen Cluster */}
        <div style={{ marginBottom: 24 }}>
          <div className="mono" style={{ color: "var(--brass)", marginBottom: 12 }}>§ Gruppen & Alltagsthemen</div>
          <h3 className="serif" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", letterSpacing: "-0.02em", fontWeight: 360, maxWidth: "22ch" }}>
            Sortiert nach Wirkung — nicht nach Kursliste.
          </h3>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="cluster-grid">
          {clusters.map((c, i) => (
            <div key={i} style={{
              border: "1px solid var(--line-2)",
              background: "var(--bg-2)",
              padding: "32px 28px 28px",
              display: "flex", flexDirection: "column",
            }}>
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 12 }}>{c.name}</div>
              <h4 className="serif" style={{ fontSize: 22, letterSpacing: "-0.015em", fontWeight: 400, marginBottom: 22, lineHeight: 1.15 }}>
                {c.title}
              </h4>
              <ul style={{ listStyle: "none", borderTop: "1px solid var(--line)", flex: 1 }}>
                {c.items.map((it, j) => (
                  <li key={j} style={{ padding: "14px 0", borderBottom: "1px solid var(--line)" }}>
                    <div style={{ fontSize: 14.5, color: "var(--cream)", marginBottom: 4 }}>{it.name}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-3)" }}>{it.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rule-row" style={{ marginTop: 40 }}>
          <span>§ Hinweis</span>
          <span style={{ flex: 1 }}>Jeder Kurs hat eine klare Wirkungsaussage: Wo steht ihr jetzt, was wird besser, was lernt ihr konkret. Details im Erstgespräch.</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .local-entry { grid-template-columns: 1fr !important; }
          .cluster-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .cluster-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

window.Offers = Offers;
