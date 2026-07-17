"use client";

type HeroProps = { onOpenSelector: () => void };

const DOORS = [
  {
    num: "01",
    tag: "Mülheim · Ruhrgebiet",
    title: "Vor Ort",
    fit: "Für euch, wenn ihr mit eurem Hund im echten Alltag arbeiten wollt — am Platz, in der Stadt, vor eurer Haustür.",
    href: "#vor-ort",
    cta: "Vor-Ort-Angebote",
  },
  {
    num: "02",
    tag: "Gesamter DACH-Raum",
    title: "Online",
    fit: "Für euch, wenn ihr dieselbe Methodik wollt, aber nicht in Mülheim wohnt — per Videoanalyse, Programm oder Club.",
    href: "#anywhere",
    cta: "Online-Angebote",
  },
  {
    num: "03",
    tag: "Hundeschulen · Trainer:innen",
    title: "Pro & Business",
    fit: "Für euch, wenn ihr professionell mit Hunden arbeitet und euer Angebot auf System-Niveau heben wollt.",
    href: "#pro",
    cta: "Pro-Bereich",
  },
] as const;

const STATS: [string, string][] = [
  ["5,0", "Google-Bewertung"],
  ["1 400+", "begleitete Hunde"],
  ["13 Jahre", "Erfahrung"],
  ["0 %", "aversive Methoden"],
];

export default function Hero({ onOpenSelector }: HeroProps) {
  return (
    <section
      id="top"
      aria-labelledby="hero-headline"
      style={{ paddingTop: 48, paddingBottom: 64, borderBottom: "2px solid var(--omd-yellow)" }}
      className="hero-section theme-dark"
    >
      <div className="shell">
        <div className="hero-meta">
          <span className="eyebrow">Hundetraining mit System</span>
          <span className="mono">Mülheim · Ruhrgebiet · DACH</span>
        </div>

        <div className="hero-top">
          <h1 id="hero-headline" className="serif hero-headline">
            Ihr bucht kein Training.
            <br />
            Ihr bucht eine{" "}
            <em className="hl-yellow" style={{ fontStyle: "normal", fontWeight: 700 }}>Veränderung.</em>
          </h1>

          <div className="hero-side">
            <p className="hero-sub">
              Keine lose Sammlung von Kursstunden, sondern ein didaktisches System
              mit klarem Ziel: ein Hund, der euch versteht — und ein Alltag, der
              wieder leicht ist. Ehrlich gesagt: Wir passen nicht zu jedem.
              Findet in zwei Minuten heraus, ob wir zueinander passen.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={onOpenSelector} type="button">
                Passen wir zueinander? <span className="arrow" aria-hidden="true">→</span>
              </button>
              <span className="mono hero-cta-note">2 Minuten · 3 Fragen · Klare Empfehlung</span>
            </div>
          </div>
        </div>

        <div className="hero-doors-head">
          <span className="eyebrow">Drei Säulen · Ein System</span>
        </div>
        <nav className="hero-doors" aria-label="Die drei Wege zu oooh my dog!">
          {DOORS.map((d) => (
            <a key={d.num} href={d.href} className="hero-door">
              <div className="hero-door-top">
                <span className="serif hero-door-num">{d.num}</span>
                <span className="mono">{d.tag}</span>
              </div>
              <span className="serif hero-door-title">{d.title}</span>
              <p className="hero-door-fit">{d.fit}</p>
              <span className="hero-door-cta mono">
                {d.cta} <span className="arrow" aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </nav>

        <dl className="stats-grid">
          {STATS.map(([n, l]) => (
            <div key={l} className="stat-cell">
              <dt className="serif stat-num">{n}</dt>
              <dd className="mono" style={{ marginTop: 10 }}>{l}</dd>
            </div>
          ))}
        </dl>
      </div>

      <style>{`
        .hero-meta { display: flex; flex-direction: column; gap: 6px; margin-bottom: 40px; }
        .hero-headline { font-size: clamp(34px, 6.4vw, 92px); line-height: 1.04; letter-spacing: -0.028em; font-weight: 600; max-width: 18ch; }
        .hero-top { display: grid; grid-template-columns: 1fr; gap: 28px; align-items: end; }
        .hero-sub { font-size: 18px; line-height: 1.6; color: var(--ink-2); max-width: 52ch; font-family: var(--serif); font-weight: 400; }
        .hero-ctas { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; align-items: flex-start; }
        .hero-cta-note { color: var(--ink-2); }

        .hero-doors-head { margin-top: 56px; margin-bottom: 18px; }
        .hero-doors { display: grid; grid-template-columns: 1fr; gap: 12px; }
        .hero-door {
          display: flex; flex-direction: column;
          background: var(--bg-2);
          border: 1px solid var(--line-2);
          padding: 26px 24px 22px;
          transition: border-color .2s, transform .2s, background .2s;
        }
        .hero-door:hover { border-color: var(--omd-yellow); transform: translateY(-2px); background: var(--bg-3); }
        .hero-door:hover .arrow { transform: translateX(3px); }
        .hero-door-top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 18px; }
        .hero-door-num { font-size: 26px; font-weight: 700; color: var(--accent-ink); }
        .hero-door-title { font-size: 27px; letter-spacing: -0.018em; font-weight: 600; line-height: 1.1; margin-bottom: 10px; color: var(--cream); }
        .hero-door-fit { font-size: 15px; line-height: 1.6; color: var(--ink-2); margin-bottom: 20px; flex: 1; }
        .hero-door-cta { color: var(--ink); font-weight: 700; border-bottom: 2px solid var(--omd-yellow); padding-bottom: 4px; align-self: flex-start; }

        .stats-grid { margin-top: 48px; display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-bottom: 0; }
        .stat-cell { padding: 24px 16px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .stat-cell:nth-child(2n) { border-right: none; }
        .stats-grid > .stat-cell:nth-last-child(-n+2) { border-bottom: none; }
        .stat-num { font-size: 32px; letter-spacing: -0.03em; line-height: 1; }

        @media (min-width: 640px) {
          .hero-section { padding-top: 64px !important; padding-bottom: 88px !important; }
          .hero-meta { flex-direction: row; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 56px; }
          .hero-doors { grid-template-columns: 1fr 1fr; }
          .stat-num { font-size: 40px; }
          .stat-cell { padding: 28px 20px; }
        }
        @media (min-width: 900px) {
          .hero-section { padding-top: 88px !important; padding-bottom: 120px !important; }
          .hero-top { grid-template-columns: 1.25fr 1fr; gap: 72px; }
          .hero-sub { font-size: 19px; }
          .hero-doors { grid-template-columns: repeat(3, 1fr); gap: 14px; }
          .hero-doors-head { margin-top: 72px; }
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
          .stat-cell { padding: 36px 28px; border-bottom: none; }
          .stat-cell:last-child { border-right: none; }
          .stat-num { font-size: 46px; }
        }
      `}</style>
    </section>
  );
}
