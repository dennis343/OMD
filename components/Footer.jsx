// Footer.jsx — Finaler CTA + Footer
const { useState: useStateFooter } = React;

const BOOK_URL = "https://portal.oooh-my-dog.de/einzeltraining/2";
const WA_URL = "https://api.whatsapp.com/send/?phone=491713457959&text=Hi+Jenny+ich+bin+an+deinen+Leistungen+interessiert&type=phone_number&app_absent=0";

function FinalCTA({ onOpenSelector }) {
  return (
    <section id="kontakt" className="sec-pad" style={{ background: "var(--bg-2)", position: "relative", overflow: "hidden" }}>
      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div className="mono" style={{ color: "var(--brass)", marginBottom: 28 }}>§ Nächster Schritt</div>
        <h2 className="serif final-h">
          Finden wir heraus,
          <br />
          <em style={{ color: "var(--brass)" }}>was wirklich passt.</em>
        </h2>
        <p className="final-p">
          Ob ihr lokal, digital oder als Profi bei uns richtig seid — ein kurzes Gespräch bringt
          mehr Klarheit als zehn Infoseiten.
        </p>
        <div className="final-ctas">
          <button className="btn btn-primary" onClick={onOpenSelector}>
            Passendes Angebot finden <span className="arrow">→</span>
          </button>
          <a className="btn btn-ghost" href={BOOK_URL} target="_blank" rel="noopener">
            Kennenlern-Coaching buchen →
          </a>
          <a className="btn btn-ghost" href={WA_URL} target="_blank" rel="noopener">
            WhatsApp an Jenny →
          </a>
          <a className="btn btn-ghost" href="#pro">Für Hundeschulen →</a>
        </div>
      </div>

      <div className="serif final-deco" aria-hidden="true">omd.</div>

      <style>{`
        .final-h {
          font-size: clamp(44px, 8vw, 132px);
          line-height: 0.92; letter-spacing: -0.035em; font-weight: 340;
          max-width: 16ch; margin-bottom: 28px;
        }
        .final-p {
          font-size: 17px; line-height: 1.5; color: var(--ink-2);
          max-width: 52ch; font-family: var(--serif); font-weight: 300;
          margin-bottom: 40px;
        }
        .final-ctas { display: flex; gap: 10px; flex-wrap: wrap; }
        .final-ctas .btn { font-size: 14px; padding: 15px 20px; }
        .final-deco {
          position: absolute; right: -40px; bottom: -40px; z-index: 1;
          font-size: clamp(140px, 28vw, 460px); line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px var(--line-2);
          font-style: italic; font-weight: 300;
          pointer-events: none;
        }
        @media (min-width: 700px) {
          .final-p { font-size: 19px; }
          .final-ctas .btn { font-size: 15px; padding: 18px 26px; }
        }
      `}</style>
    </section>
  );
}

function Footer() {
  const [legal, setLegal] = useStateFooter(null);

  const cols = [
    { h: "Vor Ort", items: [["Kennenlern-Coaching", BOOK_URL], ["Einzelcoaching", WA_URL], ["Orientierung & Führung", "#offers"], ["Soziales Lernen", "#offers"], ["Spezialthemen", "#offers"]] },
    { h: "24/7", items: [["Reizoffen & führbar", "#anywhere"], ["Videoanalyse Pro", "#anywhere"], ["oooh my dog! Club", "#anywhere"], ["Saisonale Sprints", "#anywhere"], ["Online-Sprechstunde", "#anywhere"]] },
    { h: "Pro & Business", items: [["OMD Pro Case Lab", "#pro"], ["Premium Hundeschule System", "#pro"], ["Berufswechsel-Realitätscheck", "#pro"]] },
    { h: "Über uns", items: [["Jenny", "#jenny"], ["Methodik", "#methodik"], ["Stimmen", "#stimmen"], ["FAQ", "#faq"], ["Kontakt", "#kontakt"]] },
  ];

  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--line)", padding: "72px 0 40px" }}>
      <div className="shell">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#top" className="brand">
              <span className="brand-mark">ö</span>
              <div>
                <div className="brand-name">oooh my dog!</div>
                <div className="brand-sub">Hundetraining mit System</div>
              </div>
            </a>
            <p className="foot-about">
              Hundetraining mit System. Vor Ort in Mülheim, digital im gesamten
              deutschsprachigen Raum und im Pro-Bereich für Hundeschulen und Fachkunden.
            </p>
            <div className="mono" style={{ marginTop: 24, color: "var(--ink-3)" }}>
              Mülheim · Ruhrgebiet · DACH digital
            </div>
            <div className="foot-contact">
              <a className="mono" href="tel:+4917134579599">→ +49 171 3457959</a>
              <a className="mono" href="mailto:hallo@oooh-my-dog.de">→ hallo@oooh-my-dog.de</a>
              <a className="mono" href={WA_URL} target="_blank" rel="noopener">→ WhatsApp</a>
              <a className="mono" href="https://www.instagram.com/oooh_my_dog/" target="_blank" rel="noopener">→ Instagram</a>
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 18 }}>{c.h}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {c.items.map(([label, href], j) => (
                  <li key={j}>
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener" : undefined} style={{ fontSize: 13.5, color: "var(--ink-2)" }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span className="mono">© 2026 oooh my dog! · Jennifer Bakir <span style={{ color: "var(--brass)" }}>+</span> Team</span>
          <div className="foot-legal">
            <button className="mono" onClick={() => setLegal("impressum")}>Impressum</button>
            <button className="mono" onClick={() => setLegal("datenschutz")}>Datenschutz</button>
          </div>
        </div>
        <div className="mono foot-tagline">Gestaltet für Menschen, die ihren Hund lieben und ernst nehmen.</div>
      </div>

      <LegalModal open={legal !== null} onClose={() => setLegal(null)} kind={legal} />

      <style>{`
        .foot-grid {
          display: grid; grid-template-columns: 1fr;
          gap: 40px; margin-bottom: 48px;
        }
        .foot-brand { max-width: 46ch; }
        .foot-about { margin-top: 24px; font-size: 14px; line-height: 1.55; color: var(--ink-3); max-width: 38ch; }
        .foot-contact {
          margin-top: 20px;
          display: flex; flex-direction: column; gap: 8px;
        }
        .foot-contact a { color: var(--ink-2); }
        .foot-contact a:hover { color: var(--brass); }
        .foot-bottom {
          border-top: 1px solid var(--line);
          padding-top: 24px;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 12px;
        }
        .foot-legal { display: flex; gap: 20px; }
        .foot-legal button {
          background: none; border: none; cursor: pointer;
          color: var(--ink-3); padding: 0;
          font-family: var(--mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
        }
        .foot-legal button:hover { color: var(--brass); }
        .foot-tagline {
          margin-top: 16px; color: var(--ink-4); font-size: 10.5px;
        }
        @media (min-width: 700px) {
          .foot-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (min-width: 1100px) {
          .foot-grid { grid-template-columns: 1.4fr repeat(4, 1fr); gap: 48px; margin-bottom: 64px; }
        }
      `}</style>
    </footer>
  );
}

Object.assign(window, { FinalCTA, Footer });
