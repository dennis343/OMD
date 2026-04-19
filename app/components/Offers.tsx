import { BOOK_ONLINE_URL, BOOK_URL, GRUPPEN_URL, WA_URL } from "@/app/lib/constants";

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
};

const KENNENLERN: Entry[] = [
  {
    tag: "Vor Ort · Mülheim",
    title: "Kennenlern-Einzelcoaching",
    sub: "Am Hundeplatz Mülheim · Für Teams aus der Region",
    desc: "Der strukturierte Einstieg für neue Teams — direkt am Platz. Wir schauen uns euch in der Praxis an, klären eure Themen und zeigen euch den sinnvollsten Weg für alles Weitere.",
    forWho: "Ihr seid in oder um Mülheim, wollt Orientierung und einen Profi-Blick auf eure Situation — direkt im echten Training.",
    nutzen:
      "Ihr verlasst die Stunde mit einer klaren Ersteinschätzung, konkreten nächsten Schritten und einem sinnvollen Trainingsweg — statt nach wochenlangem Recherchieren immer noch zu rätseln.",
    expect: [
      "Praxisanalyse direkt am Hundeplatz",
      "Klare nächste Schritte — keine vagen Tipps",
      "Sinnvoller Trainingsweg, individuell zugeschnitten",
    ],
    cta: "Termin am Platz buchen",
    ctaHref: BOOK_URL,
    accent: "var(--brass)",
  },
  {
    tag: "Online · Videoanalyse",
    title: "Kennenlern-Einzelcoaching",
    sub: "ONLINE & Videoanalyse · 30 Min · 49 €",
    desc: "Hier beginnt eure Erfolgsgeschichte mit uns online: per Zoom und Videoanalyse von einem Ort eurer Wahl. Wir finden heraus, was ihr braucht — und legen gemeinsam das Fundament für alles Weitere.",
    forWho: "Ihr wohnt nicht in Mülheim, wollt flexibel starten — und seid bereit, vorab kurze Anamnese und 3–5 Alltagsvideos zu liefern (mind. 4 Tage vorher).",
    nutzen:
      "Anamnese, Videoanalyse, strategische Trainingsplanung, erste Übungen und schriftliche Nachbereitung — euer Startfundament an einem 30-Minuten-Termin, von überall aus.",
    expect: [
      "Anamnesebogen + 3–5 Alltagsvideos vorab",
      "Strategische Trainingsplanung im Zoomcall",
      "Erste Übungen & schriftliche Nachbereitung",
    ],
    cta: "Online-Kennenlern für 49 € buchen",
    ctaHref: BOOK_ONLINE_URL,
    accent: "var(--brass)",
  },
];

const INDIVIDUAL: Entry = {
  tag: "Individuell",
  title: "Einzelcoaching am Ort des Geschehens",
  sub: "Wenn euer Thema individuell, komplex oder alltagsnah ist",
  desc: "Maßgeschneidertes Training direkt dort, wo die Herausforderung entsteht — Stadt, Park, Zuhause oder unterwegs. Wir arbeiten 1:1 in eurem echten Alltag, damit Lösungen sofort umsetzbar sind.",
  forWho: "Ihr habt ein konkretes, alltagsnahes Thema und wollt einen Profi-Blick auf eure Situation — nicht im Gruppenformat.",
  nutzen:
    "Ihr arbeitet genau an eurem Thema, im Tempo eures Hundes, ohne Rücksicht auf Gruppendynamik — und nehmt konkrete Handlungsanweisungen für den Alltag mit.",
  expect: [
    "Individuelle Analyse im relevanten Kontext",
    "Direkte Umsetzung am Ort des Geschehens",
    "Klare Aufgaben für den Alltag",
  ],
  cta: "Einzelcoaching per WhatsApp anfragen",
  ctaHref: WA_URL,
  accent: "var(--cream)",
};

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
    name: "Cluster A · Basisgruppen",
    title: "Orientierung & Führung",
    nutzen: "Hier lernt ihr, wie Führung wirklich funktioniert — ohne Druck, aber mit Klarheit. Wer dieses Fundament hat, spart sich später Frust, Eskalationen und endloses Üben am Symptom.",
    items: [
      {
        name: "Signalkontrolle",
        desc: "Saubere, wirksame Signale für die Situationen, die im Alltag wirklich zählen — Sitz, Platz, Bleib, Rückruf, Stopp. Nicht im Wohnzimmer geübt, sondern dort, wo es darauf ankommt.",
        mehrwert: "Euer Hund hört nicht „weil er muss“, sondern weil er versteht. Ihr habt Werkzeuge, die unter Reizen halten — und kein Repertoire, das beim ersten Eichhörnchen zusammenbricht.",
      },
      {
        name: "Lenken & Grenzen setzen",
        desc: "Klare, faire Führung ohne Härte. Ihr lernt, wie ihr Räume eröffnet, Grenzen sauber kommuniziert und euren Hund durch komplexe Situationen lenkt — vom Türgehen bis zur belebten Innenstadt.",
        mehrwert: "Euer Hund versteht schneller, was okay ist — und was nicht. Weniger Diskussionen, weniger Wiederholungen, mehr Ruhe im gemeinsamen Alltag.",
      },
      {
        name: "Unsichtbare Leine",
        desc: "Freilaufarbeit auf hohem Niveau: orientiertes Mitlaufen, sauberer Rückruf, freiwilliges Mitdenken. Ihr trainiert die Verbindung, die hält — auch wenn die Leine längst weg ist.",
        mehrwert: "Spaziergänge werden wieder leicht. Ihr bewegt euch entspannter draußen, weil ihr euch auf euren Hund verlassen könnt — statt ihn permanent kontrollieren zu müssen.",
      },
    ],
  },
  {
    name: "Cluster B · Basisgruppen",
    title: "Soziales Lernen & Zusammenarbeit",
    nutzen: "Hier wird aus Reaktion Kooperation — zwischen Hund, Halter und Umwelt. Ideal für Teams, die nicht nur „funktionieren“, sondern gemeinsam denken wollen.",
    items: [
      {
        name: "Sozialkontakt",
        desc: "Strukturierte, gut moderierte Hundebegegnungen — für Hunde, die unsicher, überschwänglich oder pöbelig sind. Ihr lernt zu lesen, einzuordnen und passend zu reagieren, statt zu hoffen.",
        mehrwert: "Begegnungen mit anderen Hunden werden kalkulierbar. Ihr nehmt eurem Hund den Stress — und euch selbst die ständige Anspannung beim Spaziergang.",
      },
      {
        name: "Longieren",
        desc: "Präzise Distanzarbeit über Körpersprache. Ihr lernt, wie ihr euren Hund auf Entfernung lenkt, fokussiert haltet und feinabgestimmt führt — eine der wirksamsten Trainingsformen überhaupt.",
        mehrwert: "Ihr versteht, wie minimale Signale große Wirkung entfalten. Diese Klarheit überträgt sich direkt in jeden Alltagsmoment — Leine, Freilauf, Begegnung.",
      },
      {
        name: "Begleithunde",
        desc: "Vorbereitung auf die Begleithundeprüfung — alltagsnah, fair und mit echtem Trainingsnutzen. Auch ohne Prüfungsambition ein hervorragendes Programm für saubere Grundlagen.",
        mehrwert: "Ein anerkannter Nachweis, dass ihr als Team funktioniert — und ein Trainingsweg, der euren Alltag spürbar entspannt, weit über die Prüfung hinaus.",
      },
    ],
  },
  {
    name: "Cluster C · Exklusivgruppen",
    title: "Spezialthemen für Fortgeschrittene",
    nutzen: "Kleine Gruppen, hoher Anspruch, konkrete Themen. Für Teams, die saubere Basics mitbringen — und gezielt an den Punkten arbeiten wollen, die im Alltag wirklich Sicherheit kosten.",
    items: [
      {
        name: "Basics (Exklusiv)",
        desc: "Vertiefte Grundlagenarbeit in kleiner Runde — Bindung, Aufmerksamkeit, Impulskontrolle, sauberes Markersystem. Für Teams, die mit Anspruch und Tiefe arbeiten wollen.",
        mehrwert: "Ihr bekommt Trainingsqualität, die in normalen Gruppen so nicht möglich ist: viel Feedback, individuelle Korrektur, ein echter Schritt im Niveau.",
      },
      {
        name: "Anti-Giftköder",
        desc: "Strukturiertes Anti-Giftköder-Training mit echtem Aufbau — vom Markersignal über Distanzarbeit bis zur sauberen Generalisierung im Alltag. Kein „einmal Tabu üben“, sondern verlässlich abrufbar.",
        mehrwert: "Ihr nehmt die Sorge „was, wenn er etwas frisst“ aus eurem Alltag — und gewinnt Sicherheit auf jedem Spaziergang, auch dort, wo unbekannte Reize liegen.",
      },
      {
        name: "Jagdkontrolle",
        desc: "Arbeit am echten Jagdverhalten — Rückruf unter starken Reizen, Impulskontrolle, alternative Verhaltensketten. Für Hunde, die jagen wollen, und Halter, die wieder Freilauf wagen möchten.",
        mehrwert: "Freilauf wird wieder möglich — ohne dass ihr euren Hund permanent an der Leine halten müsst, um sicher zu sein. Ihr lernt, ihn zu führen, statt ihn zurückzuhalten.",
      },
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
          <a className="btn btn-ghost" href={GRUPPEN_URL} target="_blank" rel="noopener">
            Gruppenstunden ansehen <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="local-banner tile">
          <img src="https://picsum.photos/seed/omd-local/1800/900" alt="Vor-Ort-Training in Mülheim" loading="lazy" />
          <span className="tile-caption">Mülheim · Freifeld · Alltagsarbeit</span>
        </div>

        <div className="kennenlern-head">
          <div className="mono" style={{ color: "var(--brass)", marginBottom: 10 }}>§ Einstieg · Zwei Wege</div>
          <h3 className="serif kennenlern-h">So beginnt die Zusammenarbeit mit uns.</h3>
          <p className="kennenlern-lead">
            Bevor ihr in einer Gruppe oder Einzelstunde startet, sehen wir euch einmal sauber an. Persönlich am Hundeplatz — oder per Videoanalyse von überall aus.
          </p>
        </div>

        <div className="kennenlern-grid">
          {KENNENLERN.map((e) => (
            <article key={e.tag} className="entry-card is-large">
              <div className="entry-badge" style={{ background: e.accent }}>{e.tag}</div>

              <h3 className="serif entry-title" style={{ fontSize: 32 }}>{e.title}</h3>
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

        <article className="entry-card individual-entry">
          <div className="entry-badge" style={{ background: INDIVIDUAL.accent }}>{INDIVIDUAL.tag}</div>

          <h3 className="serif entry-title" style={{ fontSize: 26 }}>{INDIVIDUAL.title}</h3>
          <div className="entry-sub">{INDIVIDUAL.sub}</div>
          <p className="entry-desc">{INDIVIDUAL.desc}</p>

          <div className="individual-cols">
            <div className="entry-block">
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 8 }}>→ Gut für euch, wenn</div>
              <p className="entry-p">{INDIVIDUAL.forWho}</p>
            </div>

            <div className="entry-block">
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 8 }}>→ Konkreter Nutzen</div>
              <p className="entry-p" style={{ color: "var(--cream)" }}>{INDIVIDUAL.nutzen}</p>
            </div>

            <div className="entry-block">
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 10 }}>→ Was ihr erwarten könnt</div>
              <ul className="entry-list">
                {INDIVIDUAL.expect.map((it) => (
                  <li key={it}><span style={{ color: INDIVIDUAL.accent }} aria-hidden="true">+</span> {it}</li>
                ))}
              </ul>
            </div>
          </div>

          <a className="btn btn-secondary" href={INDIVIDUAL.ctaHref} target="_blank" rel="noopener">
            {INDIVIDUAL.cta} <span className="arrow" aria-hidden="true">→</span>
          </a>
        </article>

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

        .kennenlern-head { margin-bottom: 24px; }
        .kennenlern-h { font-size: clamp(24px, 3.8vw, 40px); letter-spacing: -0.02em; font-weight: 360; max-width: 22ch; margin-bottom: 14px; }
        .kennenlern-lead { font-size: 15px; line-height: 1.55; color: var(--ink-2); max-width: 60ch; font-family: var(--serif); font-weight: 300; }

        .kennenlern-grid { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 18px; }
        .individual-entry { margin-bottom: 56px; }
        .individual-cols { display: grid; grid-template-columns: 1fr; gap: 0; }
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
          .kennenlern-grid { grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
          .individual-cols { grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .individual-cols .entry-block { border-top: 1px solid var(--line); padding-top: 14px; margin-bottom: 0; }
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
