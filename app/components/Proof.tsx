const TESTIMONIALS = [
  {
    quote:
      "Nach sechs Wochen ist unser Luis das erste Mal an einem Hund vorbeigegangen, ohne dass ich Angst hatte. Jenny arbeitet ruhig, klar, und wir verstehen endlich, was wir tun.",
    who: "Katrin & Luis",
    what: "Programm „Reizoffen & führbar“ · 24/7",
    img: "https://picsum.photos/seed/testi-1/600/600",
  },
  {
    quote:
      "Wir haben vorher bei zwei anderen Trainern Lautstärke gebucht. Hier bekommen wir Methode. Das ist ein Unterschied wie Tag und Nacht.",
    who: "Jan & Miro",
    what: "Einzelcoaching Mülheim + Videoanalyse Pro",
    img: "https://picsum.photos/seed/testi-2/600/600",
  },
  {
    quote:
      "Als Hundeschule haben wir mit dem Pro Case Lab einen ehrlichen Sparringspartner. Unser Team spricht heute die gleiche Sprache bei Problemfällen.",
    who: "Clara, Hundeschule Nordwind",
    what: "Pro & Business · Case Lab",
    img: "https://picsum.photos/seed/testi-3/600/600",
  },
];

const PRESS = ["DOGS Magazine", "WDR", "Süddeutsche", "Partner Hund", "Dogs Today DE", "Hunde Welt"];

const CASES = [
  { before: "Leinenaggression, täglich Eskalationen", after: "Ruhige Begegnungen, Halter in Führung", dauer: "9 Wochen", tag: "Signaturprogramm" },
  { before: "Rückzug, Unsicherheit in der Stadt", after: "Club-Begleitung, Alltag trägt", dauer: "6 Monate", tag: "oooh my dog! Club" },
  { before: "Schule mit 1:1-Stundendruck", after: "Premium-System, 40 % mehr Marge", dauer: "12 Wochen", tag: "Pro & Business" },
];

export default function Proof() {
  return (
    <section id="stimmen" aria-labelledby="proof-heading" className="sec-pad" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="shell">
        <div style={{ marginBottom: 56, paddingBottom: 28, borderBottom: "1px solid var(--line)" }}>
          <div className="mono" style={{ marginBottom: 18, color: "var(--brass)" }}>Presse · Erwähnungen</div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "baseline" }}>
            {PRESS.map((p) => (
              <span key={p} className="serif" style={{ fontSize: "clamp(16px, 2.2vw, 22px)", color: "var(--ink-3)", fontStyle: "italic", fontWeight: 340 }}>
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="proof-head">
          <div>
            <div className="mono" style={{ color: "var(--brass)" }}>Stimmen · Ergebnisse</div>
          </div>
          <h2 id="proof-heading" className="serif proof-h">
            Was Halter und Schulen
            <br />
            <span style={{ color: "var(--ink-3)" }}>nach der Arbeit mit uns sagen.</span>
          </h2>
        </div>

        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <figure key={t.who} className="testi-card">
              <div className="testi-img tile">
                <img src={t.img} alt={t.who} loading="lazy" />
              </div>
              <div className="testi-content">
                <div className="serif" aria-hidden="true" style={{ fontSize: 44, color: "var(--brass)", lineHeight: 0.5, marginBottom: 16 }}>„</div>
                <blockquote className="serif testi-quote">{t.quote}</blockquote>
                <figcaption style={{ borderTop: "1px solid var(--line)", paddingTop: 14, marginTop: 18 }}>
                  <div style={{ fontSize: 14, color: "var(--ink-2)" }}>{t.who}</div>
                  <div className="mono" style={{ marginTop: 4 }}>{t.what}</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <div style={{ marginTop: 64 }}>
          <div className="mono" style={{ color: "var(--brass)", marginBottom: 24 }}>Case Studies · Vorher / Nachher</div>
          <div className="cases-wrap">
            {CASES.map((c) => (
              <div key={c.tag} className="case-row">
                <div className="case-tag mono">{c.tag}</div>
                <div className="case-before">
                  <div className="mono" style={{ color: "var(--ink-4)", marginBottom: 4 }}>Vorher</div>
                  <div>{c.before}</div>
                </div>
                <div className="case-dauer mono">{c.dauer}</div>
                <div className="case-after">
                  <div className="mono" style={{ color: "var(--brass)", marginBottom: 4 }}>Nachher</div>
                  <div className="serif" style={{ fontStyle: "italic", color: "var(--cream)" }}>→ {c.after}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 56 }}>
          <div className="mono" style={{ color: "var(--brass)", marginBottom: 16 }}>Videoausschnitt · OMD in Arbeit</div>
          <div className="tile proof-video">
            <img src="https://picsum.photos/seed/omd-showreel/1600/900" alt="OMD Showreel" loading="lazy" />
            <div className="play-btn">
              <div className="play-icon" aria-hidden="true">▶</div>
              <div className="mono" style={{ marginTop: 12 }}>Showreel · 1:48 · Feld, Stadt, Videoanalyse</div>
            </div>
          </div>
        </div>

        <div className="proof-disclaimer">
          <div className="mono" style={{ color: "var(--ink-4)", marginBottom: 10 }}>Hinweis zu Ergebnissen</div>
          <p>
            Alle dargestellten Ergebnisse, Testimonials und Case Studies sind <em style={{ fontStyle: "italic" }}>exemplarisch</em>
            {" "}und nicht automatisch 1:1 auf jeden Hund und jede Halter-Konstellation übertragbar.
            Es ist jedoch sehr wahrscheinlich, dass ein vergleichbarer Erfolg eintritt, wenn ihr konsequent
            nach dem System und den Anleitungen arbeitet. Training ist Zusammenarbeit — Ergebnisse entstehen durch
            die Umsetzung.
          </p>
        </div>
      </div>

      <style>{`
        .proof-head { margin-bottom: 48px; display: grid; grid-template-columns: 1fr; gap: 16px; }
        .proof-h { font-size: clamp(28px, 5vw, 62px); line-height: 1.04; letter-spacing: -0.022em; font-weight: 340; }

        .testi-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .testi-card { background: var(--bg-2); border: 1px solid var(--line-2); display: flex; flex-direction: column; overflow: hidden; margin: 0; }
        .testi-img { height: 200px; }
        .testi-content { padding: 28px 24px 24px; display: flex; flex-direction: column; flex: 1; }
        .testi-quote { font-size: 17px; line-height: 1.45; font-weight: 340; color: var(--cream); flex: 1; margin: 0; }

        .cases-wrap { background: var(--line-2); border: 1px solid var(--line-2); display: grid; gap: 2px; }
        .case-row { display: grid; grid-template-columns: 1fr; background: var(--bg); padding: 22px 24px; gap: 14px; }
        .case-tag { color: var(--brass); }
        .case-before, .case-after { font-size: 14px; color: var(--ink-3); line-height: 1.45; }
        .case-dauer { color: var(--ink-4); }

        .proof-video { height: 240px; position: relative; }

        .proof-disclaimer { margin-top: 56px; padding: 24px 24px; border: 1px solid var(--line); background: var(--bg-2); max-width: 72ch; }
        .proof-disclaimer p { font-size: 13.5px; line-height: 1.6; color: var(--ink-3); }

        @media (min-width: 700px) {
          .testi-grid { grid-template-columns: 1fr 1fr; }
          .testi-img { height: 220px; }
          .case-row { grid-template-columns: 1.5fr 2fr 100px 2fr; gap: 20px; align-items: center; padding: 22px 28px; }
          .proof-video { height: 360px; }
        }
        @media (min-width: 1000px) {
          .testi-grid { grid-template-columns: repeat(3, 1fr); }
          .testi-img { height: 240px; }
          .proof-video { height: 440px; }
          .proof-head { grid-template-columns: 1fr 2fr; gap: 56px; margin-bottom: 72px; }
        }
      `}</style>
    </section>
  );
}
