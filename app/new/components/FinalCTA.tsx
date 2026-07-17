import { BOOK_URL, WA_URL } from "@/app/lib/constants";
import { IMG } from "@/app/new/lib/images";

type FinalCTAProps = { onOpenSelector: () => void };

export default function FinalCTA({ onOpenSelector }: FinalCTAProps) {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-heading"
      className="sec-pad theme-dark"
      style={{ position: "relative", overflow: "hidden", borderTop: "2px solid var(--omd-yellow)" }}
    >
      <div className="final-bg" aria-hidden="true">
        <img src={IMG.finalBg} alt="" loading="lazy" decoding="async" />
        <div className="final-veil" />
      </div>

      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div className="eyebrow" style={{ marginBottom: 30 }} data-fx>Nächster Schritt</div>
        <h2 id="kontakt-heading" className="serif final-h" data-fx style={{ ["--fx-d" as string]: "120ms" }}>
          Euer Hund wartet nicht.
          <br />
          <em className="hl-yellow">Fangen wir an.</em>
        </h2>
        <p className="final-p" data-fx style={{ ["--fx-d" as string]: "240ms" }}>
          Ob vor Ort, online oder als Hundeschule: Drei Fragen genügen, und ihr wisst,
          ob wir zueinander passen — und welcher Weg für euch der richtige ist.
        </p>
        <div className="final-ctas" data-fx style={{ ["--fx-d" as string]: "360ms" }}>
          <button className="btn btn-primary" onClick={onOpenSelector} type="button">
            Passen wir zueinander? <span className="arrow" aria-hidden="true">→</span>
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

      <style>{`
        .final-bg { position: absolute; inset: 0; z-index: 0; }
        .final-bg img { width: 100%; height: 100%; object-fit: cover; object-position: 78% 50%; }
        .final-veil {
          position: absolute; inset: 0;
          background:
            linear-gradient(100deg, rgba(7,7,26,0.95) 0%, rgba(7,7,26,0.85) 48%, rgba(7,7,26,0.5) 100%),
            linear-gradient(0deg, rgba(7,7,26,0.72) 0%, rgba(7,7,26,0.28) 55%);
        }
        .final-h { font-size: clamp(44px, 7.4vw, 120px); line-height: 0.98; letter-spacing: -0.03em; font-weight: 600; max-width: 16ch; margin-bottom: 28px; text-wrap: balance; }
        .final-p { font-size: 18px; line-height: 1.6; color: var(--ink-2); max-width: 52ch; font-family: var(--serif); font-weight: 400; margin-bottom: 40px; }
        .final-ctas { display: flex; gap: 10px; flex-wrap: wrap; }
        .final-ctas .btn { font-size: 14px; padding: 15px 20px; }
        .final-ctas .btn-ghost { background: color-mix(in oklab, var(--bg) 55%, transparent); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
        @media (min-width: 700px) {
          .final-p { font-size: 19px; }
          .final-ctas .btn { font-size: 15px; padding: 18px 26px; }
        }
      `}</style>
    </section>
  );
}
