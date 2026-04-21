import { BOOK_URL, WA_URL } from "@/app/lib/constants";

type FinalCTAProps = { onOpenSelector: () => void };

export default function FinalCTA({ onOpenSelector }: FinalCTAProps) {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-heading"
      className="sec-pad theme-dark"
      style={{ position: "relative", overflow: "hidden", borderTop: "2px solid var(--omd-yellow)" }}
    >
      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div className="mono" style={{ color: "var(--omd-yellow)", marginBottom: 28 }}>Nächster Schritt</div>
        <h2 id="kontakt-heading" className="serif final-h">
          Euer Hund wartet nicht.
          <br />
          <em style={{ color: "var(--omd-yellow)" }}>Fangen wir an.</em>
        </h2>
        <p className="final-p">
          Ob ihr lokal, digital oder als Profi bei uns richtig seid — ein kurzes Gespräch bringt
          mehr Klarheit als zehn Infoseiten.
        </p>
        <div className="final-ctas">
          <button className="btn btn-primary" onClick={onOpenSelector} type="button">
            Passendes Angebot finden <span className="arrow" aria-hidden="true">→</span>
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
        .final-h { font-size: clamp(44px, 8vw, 132px); line-height: 0.92; letter-spacing: -0.035em; font-weight: 340; max-width: 16ch; margin-bottom: 28px; }
        .final-p { font-size: 17px; line-height: 1.5; color: var(--ink-2); max-width: 52ch; font-family: var(--serif); font-weight: 300; margin-bottom: 40px; }
        .final-ctas { display: flex; gap: 10px; flex-wrap: wrap; }
        .final-ctas .btn { font-size: 14px; padding: 15px 20px; }
        .final-deco { position: absolute; right: -40px; bottom: -40px; z-index: 1; font-size: clamp(140px, 28vw, 460px); line-height: 1; color: transparent; -webkit-text-stroke: 1px var(--line-2); font-style: italic; font-weight: 300; pointer-events: none; }
        @media (min-width: 700px) {
          .final-p { font-size: 19px; }
          .final-ctas .btn { font-size: 15px; padding: 18px 26px; }
        }
      `}</style>
    </section>
  );
}
