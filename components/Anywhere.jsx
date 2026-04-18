// Anywhere.jsx — Säule 2: 24/7 — digitale Angebote für DACH
function Anywhere({ onOpenSelector }) {
  const signature = {
    tag: "Signaturprogramm",
    title: "Reizoffen & führbar",
    sub: "8–10 Wochen · Premium · Digital",
    desc: "Das digitale Signaturprogramm für anspruchsvolle Hunde und überforderte Halter. Strukturierter Einstieg, klar gegliederte Lernmodule, Live-Elemente, Umsetzungsaufgaben und Feedback auf reale Alltagssituationen.",
    situation: "Ihr seid oft im Reagieren statt im Führen. Begegnungen, Reize oder Alltagssituationen kippen zu schnell. Ihr habt schon vieles gehört, aber keinen klaren Weg.",
    outcome: "Mehr Klarheit. Mehr Führung. Mehr Ruhe. Mehr Struktur im Alltag.",
    includes: [
      "Klarer Trainingsfahrplan",
      "Verständliche Erklärungen statt bloßer Tipps",
      "Alltagstaugliche Umsetzung",
      "Enge, aber effiziente Begleitung",
    ],
    cta: "Warteliste / Mehr erfahren",
  };

  const offers = [
    {
      num: "02",
      title: "Videoanalyse Pro",
      sub: "Einstieg · Asynchron",
      desc: "Schnelle, fundierte Hilfe ohne Terminchaos. Ihr sendet reale Alltagsszenen — wir liefern professionelle Analyse, Priorisierung und konkrete Handlungsempfehlungen.",
      expect: ["Professionelle Analyse", "Priorisierung der wichtigsten Hebel", "Konkrete Umsetzungsanleitung"],
      cta: "Videoanalyse anfragen",
    },
    {
      num: "03",
      title: "oooh my dog! Club",
      sub: "Membership · Monatlich",
      desc: "Dranbleiben, vertiefen, Sicherheit gewinnen. Regelmäßige Live-Impulse, thematische Vertiefungen, Raum für Fragen, Community und Kontinuität — statt bei jedem Thema neu zu starten.",
      expect: ["Monatliche Themenschwerpunkte", "Wiederkehrende Live-Sessions", "Fokus auf Transfer und Dranbleiben"],
      cta: "Club entdecken",
    },
    {
      num: "04",
      title: "Saisonale Sprints",
      sub: "Kurze Intensivformate",
      desc: "Klarer Fokus auf ein konkretes Alltagsthema: Anti-Giftköder, Jagdkontrolle, Silvester, Urlaub & Restaurant, Hundebegegnungen oder Entspannt unterwegs.",
      expect: ["Kurze Laufzeit, klarer Fokus", "Direkte Umsetzbarkeit", "Hoher Nutzwert bei geringem Zeitaufwand"],
      cta: "Aktuelle Sprints ansehen",
    },
    {
      num: "05",
      title: "Online-Coaching / Sprechstunde",
      sub: "Flexibel · Direkt",
      desc: "Flexible, direkte Hilfe zwischen Analyse, Programm und Club. Verhaltensberatung, Trainingsplanung und Feinschliff an Signalen — ohne Anfahrt.",
      expect: ["Direkte 1:1-Zeit", "Konkrete Fragen, konkrete Antworten", "Kein großes Programm nötig"],
      cta: "Termin anfragen",
    },
  ];

  return (
    <section id="anywhere" style={{ padding: "140px 0", background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div className="mono" style={{ color: "var(--brass)", marginBottom: 20 }}>§ Säule 02 · 24/7</div>
            <h2 className="serif" style={{ fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.03em", fontWeight: 340, maxWidth: "18ch" }}>
              Premium-Hundetraining,
              <br />
              <span style={{ color: "var(--ink-3)" }}>das nicht an einen Ort gebunden ist.</span>
            </h2>
            <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: "60ch", fontFamily: "var(--serif)", fontWeight: 300 }}>
              Für Menschen, die klare Hilfe wollen — auch wenn sie nicht in Mülheim wohnen,
              wenig Zeit haben oder flexibel lernen möchten. Das gesamte digitale System:
              Programm, Analyse, Membership und Intensivformate.
            </p>
          </div>
          <button className="btn btn-ghost" onClick={onOpenSelector}>Was passt zu uns? <span className="arrow">→</span></button>
        </div>

        {/* Signature program — large block */}
        <article style={{
          background: "var(--bg-3)",
          border: "1px solid var(--brass)",
          padding: "48px 48px 44px",
          marginBottom: 24,
          position: "relative",
          display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56,
        }} className="signature-block">
          <div style={{ position: "absolute", top: -10, left: 36, background: "var(--brass)", color: "var(--bg)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", padding: "3px 10px" }}>
            {signature.tag}
          </div>

          <div>
            <div className="mono" style={{ marginBottom: 14 }}>{signature.sub}</div>
            <h3 className="serif" style={{ fontSize: "clamp(38px, 5vw, 64px)", letterSpacing: "-0.028em", lineHeight: 0.98, fontWeight: 340, marginBottom: 20 }}>
              {signature.title}
            </h3>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: "52ch", marginBottom: 28 }}>
              {signature.desc}
            </p>

            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 20, marginBottom: 20 }}>
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 8 }}>→ Situation jetzt</div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)" }}>{signature.situation}</p>
            </div>
            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 20 }}>
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 8 }}>→ Veränderung danach</div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)" }}>{signature.outcome}</p>
            </div>
          </div>

          <div style={{ borderLeft: "1px solid var(--line-2)", paddingLeft: 40 }} className="sig-side">
            <div className="mono" style={{ color: "var(--brass)", marginBottom: 18 }}>§ Was drin ist</div>
            <ul style={{ listStyle: "none", marginBottom: 32 }}>
              {signature.includes.map((it, j) => (
                <li key={j} style={{ padding: "14px 0", borderBottom: "1px solid var(--line)", fontSize: 14.5, color: "var(--ink-2)", display: "flex", gap: 14 }}>
                  <span className="serif" style={{ color: "var(--brass)", fontStyle: "italic", fontSize: 16 }}>0{j + 1}</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <a className="btn btn-primary" href="#kontakt">{signature.cta} <span className="arrow">→</span></a>
          </div>
        </article>

        {/* 4-offer grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="any-grid">
          {offers.map((o, i) => (
            <article key={i} style={{
              background: "var(--bg)",
              border: "1px solid var(--line-2)",
              padding: "36px 36px 32px",
              display: "flex", flexDirection: "column",
              transition: "border-color .2s",
            }} className="any-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
                <span className="serif" style={{ fontSize: 32, fontStyle: "italic", color: "var(--brass)", fontWeight: 300 }}>{o.num}</span>
                <span className="mono">{o.sub}</span>
              </div>
              <h3 className="serif" style={{ fontSize: 30, letterSpacing: "-0.022em", fontWeight: 380, marginBottom: 14, lineHeight: 1.05 }}>
                {o.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 20, flex: 1 }}>
                {o.desc}
              </p>
              <ul style={{ listStyle: "none", borderTop: "1px solid var(--line)", marginBottom: 22 }}>
                {o.expect.map((it, j) => (
                  <li key={j} style={{ padding: "10px 0", borderBottom: "1px solid var(--line)", fontSize: 13, color: "var(--ink-2)", display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--brass)" }}>+</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a className="btn-link mono" href="#kontakt">{o.cta} →</a>
            </article>
          ))}
        </div>

        <style>{`
          .any-card:hover { border-color: var(--brass) !important; }
          @media (max-width: 900px) {
            .signature-block { grid-template-columns: 1fr !important; gap: 32px !important; padding: 36px 28px 32px !important; }
            .sig-side { border-left: none !important; padding-left: 0 !important; border-top: 1px solid var(--line-2); padding-top: 28px !important; }
            .any-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

window.Anywhere = Anywhere;
