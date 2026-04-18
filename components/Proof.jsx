// Proof.jsx — testimonials, press, case studies, video
function Proof() {
  const testimonials = [
    {
      quote: "Nach sechs Wochen ist unser Luis das erste Mal an einem Hund vorbeigegangen, ohne dass ich Angst hatte. Jenny arbeitet ruhig, klar, und wir verstehen endlich, was wir tun.",
      who: "Katrin & Luis",
      what: "Programm „Reizoffen & führbar“",
    },
    {
      quote: "Wir haben vorher bei zwei anderen Trainern Lautstärke gebucht. Hier bekommen wir Methode. Das ist ein Unterschied wie Tag und Nacht.",
      who: "Jan & Miro",
      what: "Einzelcoaching + Videoanalyse Pro",
    },
    {
      quote: "Als Hundeschule haben wir mit dem OMD Case Lab einen ehrlichen Sparringspartner. Unser Team spricht heute die gleiche Sprache bei Problemfällen.",
      who: "Clara, Hundeschule Nordwind",
      what: "OMD Pro · Case Lab",
    },
  ];

  const press = ["DOGS Magazine", "SWR", "Süddeutsche", "Partner Hund", "Dogs Today DE", "Hunde Welt"];

  const cases = [
    { before: "Vorher · Leinenaggression, täglich Eskalationen", after: "Nach 9 Wochen · Ruhige Begegnungen, Halter in Führung", tag: "Signaturprogramm" },
    { before: "Vorher · Rückzug, Unsicherheit in der Stadt", after: "Nach 6 Monaten · Club-Begleitung, Alltag trägt", tag: "OMD Club" },
    { before: "Vorher · Schule mit 1:1-Stundendruck", after: "Nach 12 Wochen · Premium-System, 40 % mehr Marge", tag: "OMD Pro" },
  ];

  return (
    <section id="stimmen" style={{ padding: "140px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        {/* Press row */}
        <div style={{ marginBottom: 96, paddingBottom: 32, borderBottom: "1px solid var(--line)" }}>
          <div className="mono" style={{ marginBottom: 24, color: "var(--brass)" }}>§ Presse · Erwähnungen</div>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap", alignItems: "baseline" }}>
            {press.map((p, i) => (
              <span key={i} className="serif" style={{ fontSize: 22, color: "var(--ink-3)", fontStyle: "italic", fontWeight: 340 }}>{p}</span>
            ))}
          </div>
        </div>

        {/* Headline */}
        <div style={{ marginBottom: 80, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }} className="proof-head">
          <div>
            <div className="mono" style={{ color: "var(--brass)" }}>§ Stimmen</div>
          </div>
          <h2 className="serif" style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.025em", fontWeight: 340 }}>
            Was Halter und Schulen
            <br />
            <span style={{ color: "var(--ink-3)" }}>nach der Arbeit mit uns sagen.</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 96 }} className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: "36px 32px 32px",
              background: "var(--bg-2)", border: "1px solid var(--line-2)",
              display: "flex", flexDirection: "column",
            }}>
              <div className="serif" style={{ fontSize: 48, color: "var(--brass)", lineHeight: 0.5, marginBottom: 18 }}>„</div>
              <p className="serif" style={{ fontSize: 18, lineHeight: 1.45, fontWeight: 340, color: "var(--cream)", marginBottom: 24, flex: 1 }}>
                {t.quote}
              </p>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16 }}>
                <div style={{ fontSize: 14, color: "var(--ink-2)" }}>{t.who}</div>
                <div className="mono" style={{ marginTop: 4 }}>{t.what}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Case studies (before / after) */}
        <div style={{ marginBottom: 80 }}>
          <div className="mono" style={{ color: "var(--brass)", marginBottom: 32 }}>§ Case Studies · Vorher / Nachher</div>
          <div style={{ display: "grid", gap: 2, background: "var(--line-2)", border: "1px solid var(--line-2)" }}>
            {cases.map((c, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 120px", background: "var(--bg)", padding: "24px 28px", gap: 24, alignItems: "center" }} className="case-row">
                <div className="mono" style={{ color: "var(--brass)" }}>{c.tag}</div>
                <div style={{ fontSize: 14.5, color: "var(--ink-3)" }}>{c.before}</div>
                <div style={{ fontSize: 14.5, color: "var(--cream)", fontFamily: "var(--serif)", fontStyle: "italic" }}>→ {c.after}</div>
                <a className="mono" href="#" style={{ textAlign: "right" }}>Lesen →</a>
              </div>
            ))}
          </div>
        </div>

        {/* Video placeholder */}
        <div>
          <div className="mono" style={{ color: "var(--brass)", marginBottom: 24 }}>§ Videoausschnitt · OMD in Arbeit</div>
          <div className="ph" style={{ height: 440, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 78, height: 78, borderRadius: 50,
                border: "1px solid var(--brass)", display: "grid", placeItems: "center",
                margin: "0 auto 16px", color: "var(--brass)", fontSize: 20,
              }}>▶</div>
              <div className="mono" style={{ color: "var(--ink-2)" }}>Showreel · 1:48 · Feld, Stadt, Videoanalyse</div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .proof-head { grid-template-columns: 1fr !important; gap: 24px !important; }
            .testi-grid { grid-template-columns: 1fr !important; }
            .case-row { grid-template-columns: 1fr !important; gap: 8px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

window.Proof = Proof;
