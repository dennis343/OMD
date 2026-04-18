import { BOOK_URL, WA_URL } from "@/app/lib/constants";

type OffersProps = { onOpenSelector?: () => void };

type Entry = {
  tag: string;
  title: string;
  sub: string;
  desc: string;
  forWho: string;
  nutzen: string;
  expect: string[];
  cta: string;
  ctaHref: string;
  accent: string;
  large: boolean;
};

const ENTRIES: Entry[] = [
  {
    tag: "Einstieg",
    title: "Kennenlern-Einzeltraining",
    sub: "Für alle, die nicht planlos starten wollen",
    desc: "Der strukturierte Einstieg für neue Teams. Wir schauen uns euch in der Praxis an, klären eure Themen und zeigen euch den sinnvollsten Weg.",
    forWho: "Ihr wollt Orientierung, habt mehrere Baustellen oder wisst nicht, welches Angebot passt.",
    nutzen:
      "Ihr verlasst die Stunde mit einer klaren Ersteinschätzung, konkreten nächsten Schritten und einem sinnvollen Trainingsweg — statt nach wochenlangem Recherchieren immer noch zu rätseln.",
    expect: [
      "Klare Ersteinschätzung eurer Situation",
      "Konkrete nächste Schritte — keine vagen Tipps",
      "Ein sinnvoller Trainingsweg, individuell auf euch zugeschnitten",
    ],
    cta: "Jetzt Kennenlern-Einzel buchen",
    ctaHref: BOOK_URL,
    accent: "var(--brass)",
    large: true,
  },
  {
    tag: "Individuell",
    title: "Einzelcoaching vor Ort",
    sub: "Wenn euer Thema individuell, komplex oder alltagsnah ist",
    desc: "Für Themen, die direkt im echten Umfeld bearbeitet werden sollten — Unsicherheit, starke Aufregung, Probleme zuhause oder in konkreten Alltagssituationen.",
    forWho: "Ihr braucht einen Profi-Blick auf eure Situation — nicht im Gruppenformat.",
    nutzen:
      "Ihr arbeitet genau an eurem Thema, im Tempo eures Hundes, ohne Rücksicht auf Gruppendynamik. Ihr nehmt konkrete Handlungsanweisungen für den Alltag mit.",
    expect: [
      "Individuelle Analyse eurer Situation",
      "Direkte Umsetzung im relevanten Kontext",
      "Klare Aufgaben für den Alltag",
    ],
    cta: "Einzelcoaching per WhatsApp anfragen",
    ctaHref: WA_URL,
    accent: "var(--cream)",
    large: false,
  },
];

type Tour = {
  tag: string;
  title: string;
  sub: string;
  desc: string;
  forWho: string;
  nutzen: string;
  expect: string[];
  cta: string;
  ctaHref: string;
  img: string;
};

const TOUR: Tour = {
  tag: "Auf Tour",
  title: "Tour-Termine in der DACH-Region",
  sub: "Ca. 3× pro Jahr · Ausgewählte Regionen · Warteliste",
  desc: "Wer nicht in Mülheim wohnt, muss nicht auf persönliches Training verzichten. Etwa dreimal im Jahr besuche ich ausgewählte Regionen in Deutschland, Österreich und der Schweiz — für strukturierte Trainings vor Ort, kompakt geplant und sauber begleitet.",
  forWho: "Ihr wollt persönliches Training, wohnt aber nicht in Mülheim und Umgebung — und seid bereit, einen Tour-Termin in eurer Region abzuwarten.",
  nutzen:
    "Ihr arbeitet einmal sauber persönlich an eurem Thema — und nehmt einen klaren Trainingsplan für die Zeit danach mit. Digital begleitet, persönlich angestoßen.",
  expect: [
    "Ankündigung der nächsten Tour-Region per Newsletter",
    "Begrenzte Plätze · Vergabe in Reihenfolge der Warteliste",
    "Vor-Ort-Slot plus digitale Vorbereitung & Nachbetreuung",
  ],
  cta: "Auf die Tour-Warteliste",
  ctaHref: WA_URL,
  img: "https://picsum.photos/seed/omd-tour/1600/900",
};

type ClusterItem = { name: string; desc: string; mehrwert: string };
type Cluster = { name: string; title: string; nutzen: string; items: ClusterItem[] };

const CLUSTERS: Cluster[] = [
  {
    name: "Cluster A",
    title: "Orientierung & Führung",
    nutzen: "Grundlage für alles andere. Wer hier Klarheit hat, spart sich später viele Eskalationen.",
    items: [
      { name: "Basics", desc: "Saubere Grundlagen — Bindung, Kommunikation, Signale.", mehrwert: "Ihr legt ein tragfähiges Fundament. Jede spätere Übung baut darauf auf." },
      { name: "Lenken & Grenzen setzen", desc: "Klare Führung ohne Härte. Struktur, die trägt.", mehrwert: "Euer Hund versteht schneller, was okay ist — und was nicht. Weniger Diskussion, mehr Ruhe." },
      { name: "Unsichtbare Leine", desc: "Freiraum mit Verlässlichkeit — auch ohne physische Leine.", mehrwert: "Ihr bewegt euch entspannter draußen, weil ihr euch auf euren Hund verlassen könnt." },
    ],
  },
  {
    name: "Cluster B",
    title: "Soziales Lernen & Zusammenarbeit",
    nutzen: "Hier wird aus Reaktion Kooperation — zwischen Hund, Halter und Umwelt.",
    items: [
      { name: "Sozialkontakt", desc: "Ruhige, gesunde Begegnungen statt Überforderung.", mehrwert: "Begegnungen mit anderen Hunden werden kalkulierbar — für euch und euren Hund." },
      { name: "Longieren", desc: "Distanzarbeit, Körpersprache, Feinabstimmung.", mehrwert: "Ihr lernt, über Körpersprache präzise zu führen — das überträgt sich auf den gesamten Alltag." },
      { name: "Begleithundetraining", desc: "Prüfungsrelevant und alltagsnah.", mehrwert: "Ein anerkannter Nachweis, dass ihr als Team funktioniert — mit praktischem Mehrwert." },
    ],
  },
  {
    name: "Cluster C",
    title: "Spezialthemen",
    nutzen: "Konkrete Alltagsrisiken, die ihr nicht dem Zufall überlassen wollt.",
    items: [
      { name: "Anti-Giftköder", desc: "Sicherheit im Alltag — zuverlässig abrufbar.", mehrwert: "Ihr nehmt die Sorge „was, wenn er etwas frisst“ aus eurem Alltag." },
      { name: "Jagdkontrolle", desc: "Rückruf und Impulskontrolle unter echten Reizen.", mehrwert: "Freilauf wird wieder möglich — ohne dass ihr euren Hund an der Leine halten müsst, um sicher zu sein." },
    ],
  },
];

export default function Offers(_props: OffersProps = {}) {
  return (
    <section id="vor-ort" aria-labelledby="offers-heading" className="sec-pad" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="shell">
        <div className="local-head">
          <div>
            <div className="mono" style={{ color: "var(--cream)", marginBottom: 16 }}>§ Säule 01 · Vor Ort</div>
            <h2 id="offers-heading" className="serif local-h2">
              Persönliches Hundetraining
              <br />
              <span style={{ color: "var(--ink-3)" }}>in Mülheim und Umgebung.</span>
            </h2>
            <p className="local-lead">
              Für Menschen, die direkte Begleitung möchten, ihren Hund im echten Alltag besser führen wollen und einen strukturierten Weg suchen.
            </p>
          </div>
          <a className="btn btn-ghost" href={WA_URL} target="_blank" rel="noopener">
            Per WhatsApp melden <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="local-banner tile">
          <img src="https://picsum.photos/seed/omd-local/1800/900" alt="Vor-Ort-Training in Mülheim" loading="lazy" />
          <span className="tile-caption">Mülheim · Freifeld · Alltagsarbeit</span>
        </div>

        <div className="local-entry">
          {ENTRIES.map((e) => (
            <article key={e.title} className={`entry-card ${e.large ? "is-large" : ""}`}>
              <div className="entry-badge" style={{ background: e.accent }}>{e.tag}</div>

              <h3 className="serif entry-title" style={{ fontSize: e.large ? 36 : 26 }}>{e.title}</h3>
              <div className="entry-sub">{e.sub}</div>
              <p className="entry-desc">{e.desc}</p>

              <div className="entry-block">
                <div className="mono" style={{ color: "var(--brass)", marginBottom: 8 }}>→ Gut für euch, wenn</div>
                <p className="entry-p">{e.forWho}</p>
              </div>

              <div className="entry-block">
                <div className="mono" style={{ color: "var(--brass)", marginBottom: 8 }}>→ Konkreter Nutzen</div>
                <p className="entry-p" style={{ color: "var(--cream)" }}>{e.nutzen}</p>
              </div>

              <div className="entry-block" style={{ flex: 1 }}>
                <div className="mono" style={{ color: "var(--brass)", marginBottom: 10 }}>→ Was ihr erwarten könnt</div>
                <ul className="entry-list">
                  {e.expect.map((it) => (
                    <li key={it}><span style={{ color: e.accent }} aria-hidden="true">+</span> {it}</li>
                  ))}
                </ul>
              </div>

              <a className="btn btn-primary" href={e.ctaHref} target="_blank" rel="noopener">
                {e.cta} <span className="arrow" aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <article className="tour-block">
          <div className="tour-tag">{TOUR.tag}</div>

          <div className="tour-img tile">
            <img src={TOUR.img} alt={TOUR.title} loading="lazy" />
            <span className="tile-caption">DACH-Tour · Begrenzte Termine pro Jahr</span>
          </div>

          <div className="tour-body">
            <div className="mono" style={{ marginBottom: 14 }}>{TOUR.sub}</div>
            <h3 className="serif tour-h">{TOUR.title}</h3>
            <p className="tour-desc">{TOUR.desc}</p>

            <div className="tour-row">
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 8 }}>→ Gut für euch, wenn</div>
              <p>{TOUR.forWho}</p>
            </div>
            <div className="tour-row">
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 8 }}>→ Konkreter Nutzen</div>
              <p style={{ color: "var(--cream)" }}>{TOUR.nutzen}</p>
            </div>

            <div className="mono" style={{ color: "var(--brass)", margin: "24px 0 10px" }}>→ Was ihr erwarten könnt</div>
            <ul className="tour-list">
              {TOUR.expect.map((it) => (
                <li key={it}><span style={{ color: "var(--brass)" }} aria-hidden="true">+</span> {it}</li>
              ))}
            </ul>

            <a className="btn btn-primary" style={{ marginTop: 24 }} href={TOUR.ctaHref} target="_blank" rel="noopener">
              {TOUR.cta} <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        <div className="cluster-head">
          <div className="mono" style={{ color: "var(--brass)", marginBottom: 10 }}>§ Gruppen & Alltagsthemen</div>
          <h3 className="serif cluster-h">Sortiert nach Wirkung — nicht nach Kursliste.</h3>
          <p className="cluster-lead">
            Jede Gruppe hat ein klares Ziel und einen konkreten Nutzen für euren Alltag. Ihr bucht nicht „eine Stunde“, sondern eine Veränderung.
          </p>
        </div>

        <div className="cluster-grid">
          {CLUSTERS.map((c) => (
            <div key={c.name} className="cluster-card">
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 10 }}>{c.name}</div>
              <h4 className="serif cluster-title">{c.title}</h4>
              <p className="cluster-nutzen">
                <em style={{ color: "var(--ink-3)", fontStyle: "italic" }}>Nutzen:</em> {c.nutzen}
              </p>
              <ul className="cluster-list">
                {c.items.map((it) => (
                  <li key={it.name} className="cluster-item">
                    <div className="cluster-item-head">
                      <span className="serif cluster-item-name">{it.name}</span>
                    </div>
                    <div className="cluster-item-desc">{it.desc}</div>
                    <div className="cluster-item-mehrwert">
                      <span style={{ color: "var(--brass)" }}>+ Mehrwert:</span> {it.mehrwert}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rule-row" style={{ marginTop: 32 }}>
          <span>§ Hinweis</span>
          <span style={{ flex: 1 }}>Jede Gruppe startet mit einem Kennenlern-Einzel — damit wir euch passend zuordnen können.</span>
        </div>
      </div>

      <style>{`
        .local-head { display: grid; grid-template-columns: 1fr; gap: 20px; align-items: flex-end; margin-bottom: 40px; }
        .local-h2 { font-size: clamp(32px, 6.5vw, 76px); line-height: 0.98; letter-spacing: -0.03em; font-weight: 340; max-width: 16ch; }
        .local-lead { margin-top: 20px; font-size: 16px; line-height: 1.55; color: var(--ink-2); max-width: 56ch; font-family: var(--serif); font-weight: 300; }

        .local-banner { height: 220px; margin-bottom: 48px; }

        .local-entry { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 56px; }
        .entry-card { background: var(--bg-2); border: 1px solid var(--line-2); padding: 30px 24px 28px; position: relative; display: flex; flex-direction: column; }
        .entry-card.is-large { background: var(--bg-3); border-color: var(--brass); padding: 36px 28px 32px; }
        .entry-badge { position: absolute; top: -10px; left: 22px; color: var(--bg); font-family: var(--mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; padding: 3px 10px; }
        .entry-title { letter-spacing: -0.025em; line-height: 1.04; font-weight: 360; margin-bottom: 8px; }
        .entry-sub { font-size: 13.5px; color: var(--ink-3); font-style: italic; font-family: var(--serif); margin-bottom: 18px; }
        .entry-desc { font-size: 14.5px; line-height: 1.55; color: var(--ink-2); margin-bottom: 22px; }
        .entry-block { border-top: 1px solid var(--line); padding-top: 14px; margin-bottom: 14px; }
        .entry-p { font-size: 13.5px; line-height: 1.55; color: var(--ink-2); }
        .entry-list { list-style: none; }
        .entry-list li { padding: 7px 0; font-size: 13px; color: var(--ink-2); display: flex; gap: 10px; border-bottom: 1px solid var(--line); }
        .entry-list li:last-child { border-bottom: none; }
        .entry-card .btn { margin-top: 24px; align-self: flex-start; }

        .tour-block { background: var(--bg-3); border: 1px solid var(--cream); padding: 36px 24px 32px; margin-bottom: 56px; position: relative; display: grid; grid-template-columns: 1fr; gap: 28px; }
        .tour-tag { position: absolute; top: -10px; left: 24px; background: var(--cream); color: var(--bg); font-family: var(--mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; padding: 3px 10px; }
        .tour-img { height: 220px; }
        .tour-h { font-size: clamp(28px, 4.4vw, 48px); letter-spacing: -0.025em; line-height: 1.02; font-weight: 360; margin-bottom: 18px; }
        .tour-desc { font-size: 15.5px; line-height: 1.55; color: var(--ink-2); max-width: 56ch; margin-bottom: 22px; }
        .tour-row { border-top: 1px solid var(--line); padding-top: 14px; margin-bottom: 14px; }
        .tour-row p { font-size: 14px; line-height: 1.55; color: var(--ink-2); }
        .tour-list { list-style: none; }
        .tour-list li { padding: 9px 0; font-size: 13.5px; color: var(--ink-2); display: flex; gap: 10px; border-bottom: 1px solid var(--line); }
        .tour-list li:last-child { border-bottom: none; }

        .cluster-head { margin-bottom: 24px; }
        .cluster-h { font-size: clamp(24px, 3.8vw, 44px); letter-spacing: -0.02em; font-weight: 360; max-width: 22ch; margin-bottom: 16px; }
        .cluster-lead { font-size: 15px; line-height: 1.55; color: var(--ink-2); max-width: 56ch; font-family: var(--serif); font-weight: 300; }

        .cluster-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .cluster-card { border: 1px solid var(--line-2); background: var(--bg-2); padding: 26px 22px; display: flex; flex-direction: column; }
        .cluster-title { font-size: 22px; letter-spacing: -0.015em; font-weight: 400; margin-bottom: 12px; line-height: 1.15; }
        .cluster-nutzen { font-size: 14px; line-height: 1.55; color: var(--ink-2); margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--line); }
        .cluster-list { list-style: none; display: flex; flex-direction: column; gap: 16px; }
        .cluster-item { padding: 12px 0; border-bottom: 1px solid var(--line); }
        .cluster-item:last-child { border-bottom: none; padding-bottom: 0; }
        .cluster-item-name { font-size: 16px; color: var(--cream); display: inline-block; margin-bottom: 4px; }
        .cluster-item-desc { font-size: 13px; line-height: 1.5; color: var(--ink-3); margin-bottom: 8px; }
        .cluster-item-mehrwert { font-size: 13px; line-height: 1.5; color: var(--ink-2); }

        @media (min-width: 640px) {
          .local-banner { height: 320px; }
        }
        @media (min-width: 900px) {
          .local-head { grid-template-columns: 2fr 1fr; gap: 40px; align-items: flex-end; margin-bottom: 56px; }
          .local-banner { height: 440px; margin-bottom: 56px; }
          .local-entry { grid-template-columns: 1.4fr 1fr; gap: 16px; }
          .entry-card { padding: 40px 36px 36px; }
          .entry-card.is-large { padding: 44px 44px 40px; }
          .cluster-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .cluster-card { padding: 32px 28px 28px; }
        }
        @media (min-width: 700px) {
          .tour-block { padding: 44px 36px 40px; gap: 40px; grid-template-columns: 1fr 1.2fr; }
          .tour-img { height: 100%; min-height: 320px; }
        }
        @media (min-width: 1000px) {
          .tour-block { padding: 56px 56px 48px; gap: 56px; }
        }
      `}</style>
    </section>
  );
}
