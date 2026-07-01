import { BOOK_ONLINE_URL, BOOK_URL, GRUPPEN_URL, WA_URL } from "@/app/lib/constants";
import TrainingSlider from "./TrainingSlider";

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
  tag: "VIP · 1:1 Exklusiv",
  title: "Einzelcoaching am Ort des Geschehens",
  sub: "Trainerin exklusiv reserviert · Nur für euch · Ort eurer Wahl",
  desc: "VIP-Setting im echten Sinn: Eure Trainerin ist in dieser Zeit ausschließlich für euch und euren Hund da — keine geteilte Aufmerksamkeit, keine Gruppe, kein Wartemodus. Wir arbeiten 1:1 dort, wo die Herausforderung tatsächlich entsteht: Stadt, Park, Zuhause, Spazierroute, Hundebegegnung.",
  forWho: "Ihr wollt höchste Aufmerksamkeit, individuelle Analyse und konkrete Lösungen für euer Thema — exklusiv und ohne Gruppendynamik.",
  nutzen:
    "Volle Konzentration auf euren Hund und eure Situation. Ihr nehmt einen klaren Handlungsplan mit, der genau zu eurem Alltag passt — und arbeitet im Tempo eures Hundes, nicht der Gruppe.",
  expect: [
    "Trainerin exklusiv für euch reserviert",
    "Individuelle Analyse im relevanten Kontext",
    "Direkte Umsetzung am Ort des Geschehens",
    "Klare Aufgaben für den Alltag",
  ],
  cta: "VIP-Einzelcoaching per WhatsApp anfragen",
  ctaHref: WA_URL,
  accent: "var(--brass)",
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

type GroupItem = { name: string; desc: string; mehrwert: string };
type Group = { name: string; title: string; nutzen: string; items: GroupItem[] };

const BASIS_GROUPS: Group[] = [
  {
    name: "Basisgruppen · Block 1",
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
    name: "Basisgruppen · Block 2",
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
];

const EXKLUSIV_GROUP: Group = {
  name: "Exklusivgruppen · Premium",
  title: "Exklusive Spezialthemen für Fortgeschrittene",
  nutzen: "Kleine, geschlossene Exklusivgruppen mit hohem Anspruch und konkreten Themen. Für Teams, die saubere Basics mitbringen und gezielt an den Punkten arbeiten wollen, die im Alltag wirklich Sicherheit kosten.",
  items: [
    {
      name: "Basics Exklusiv",
      desc: "Exklusive Vertiefung der Grundlagen in kleiner Runde — Bindung, Aufmerksamkeit, Impulskontrolle, sauberes Markersystem. Für Teams, die mit Anspruch und Tiefe arbeiten wollen.",
      mehrwert: "Trainingsqualität, die in normalen Gruppen so nicht möglich ist: viel Feedback, individuelle Korrektur, ein echter Schritt im Niveau.",
    },
    {
      name: "Anti-Giftköder Exklusiv",
      desc: "Strukturiertes, exklusives Anti-Giftköder-Training mit echtem Aufbau — vom Markersignal über Distanzarbeit bis zur sauberen Generalisierung im Alltag. Kein „einmal Tabu üben“, sondern verlässlich abrufbar.",
      mehrwert: "Ihr nehmt die Sorge „was, wenn er etwas frisst“ aus eurem Alltag — und gewinnt Sicherheit auf jedem Spaziergang, auch dort, wo unbekannte Reize liegen.",
    },
    {
      name: "Jagdkontrolle Exklusiv",
      desc: "Exklusive Arbeit am echten Jagdverhalten — Rückruf unter starken Reizen, Impulskontrolle, alternative Verhaltensketten. Für Hunde, die jagen wollen, und Halter, die wieder Freilauf wagen möchten.",
      mehrwert: "Freilauf wird wieder möglich — ohne dass ihr euren Hund permanent an der Leine halten müsst. Ihr lernt, ihn zu führen, statt ihn zurückzuhalten.",
    },
  ],
};

type Paket = {
  name: string;
  tag: string;
  headline: string;
  desc: string;
  inhalte: string[];
  cta: string;
  accent: string;
};

const PAKET_INKLUSIV = [
  "Persönliche Begrüßung",
  "Willkommensbox",
  "Klare Trainingsstruktur",
  "Hausaufgaben mit Anleitung",
  "WhatsApp-Support",
  "Flexible Terminbuchung",
];

const PAKETE: Paket[] = [
  {
    name: "Welpen-Premium-Paket",
    tag: "Welpe · Premium-Start",
    headline: "Der saubere Start ins Hundeleben — mit System.",
    desc: "Das vollständige Paket für Welpenhalter, die von Anfang an richtig aufstellen wollen. Kennenlern-Einzel, freie Basisgruppen-Teilnahmen, Einzelstunden am Wunschort und Talks — alles aufeinander abgestimmt.",
    inhalte: [
      "1× Kennenlern-Einzel",
      "6× freie Basisgruppen-Teilnahme",
      "2× Einzeltraining am Wunschort",
      "3× oooh my dog! Talks",
    ],
    cta: "Welpen-Premium-Paket anfragen",
    accent: "var(--brass)",
  },
  {
    name: "Leichtigkeit im Alltag-Paket",
    tag: "Alltag · Konstanz",
    headline: "Alltag, der wieder leicht wird — durch Wiederholung und Routine.",
    desc: "Für Teams, die kontinuierlich an ihren Themen arbeiten wollen. 25 Einheiten Basisgruppen plus zwei Talks geben euch die Frequenz, in der echte Veränderung entsteht.",
    inhalte: [
      "25 Einheiten Basisgruppen",
      "2× oooh my dog! Talks",
    ],
    cta: "Leichtigkeit-Paket anfragen",
    accent: "var(--cream)",
  },
  {
    name: "Traveller Intensivpaket",
    tag: "Intensiv · DACH",
    headline: "Intensives Premium-Training, das auf Distanz funktioniert.",
    desc: "Für Halter, die nicht in Mülheim wohnen und trotzdem die Kombination aus persönlicher Vor-Ort-Arbeit und engmaschiger Online-Begleitung wollen. Drei Online-Einzel, vier Einzelstunden in Mülheim und zwei Talks.",
    inhalte: [
      "3× Online-Einzel",
      "4× Einzeltraining (Mülheim)",
      "2× oooh my dog! Talks",
    ],
    cta: "Traveller-Paket anfragen",
    accent: "var(--moss)",
  },
];

export default function Offers(_props: OffersProps = {}) {
  return (
    <section id="vor-ort" aria-labelledby="offers-heading" className="sec-pad" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="shell">
        <div className="local-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Säule 01 · Vor Ort</div>
            <h2 id="offers-heading" className="serif local-h2">
              Training, das im
              <em className="hl-yellow" style={{ fontStyle: "normal", fontWeight: 700 }}> Alltag </em>
              sitzt.
              <br />
              <span style={{ color: "var(--ink-3)" }}>In Mülheim und Umgebung.</span>
            </h2>
            <p className="local-lead">
              Direkte Begleitung an echten Orten — Stadt, Park, Zuhause. Damit euer Hund
              nicht nur auf dem Trainingsplatz führbar ist, sondern dort, wo es zählt.
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
          <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 10 }}>Einstieg · Zwei Wege</div>
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

              <div style={{ margin: "10px 0 18px" }}>
                <TrainingSlider
                  seed={`kennenlern-${e.tag}`}
                  labels={["Anamnese", "Platz-Check", "Alltag", "Führung", "Plan"]}
                  height={150}
                  slideWidth={200}
                />
              </div>

              <p className="entry-desc">{e.desc}</p>

              <div className="entry-block">
                <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 8 }}>→ Gut für euch, wenn</div>
                <p className="entry-p">{e.forWho}</p>
              </div>

              <div className="entry-block">
                <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 8 }}>→ Konkreter Nutzen</div>
                <p className="entry-p" style={{ color: "var(--cream)" }}>{e.nutzen}</p>
              </div>

              <div className="entry-block" style={{ flex: 1 }}>
                <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 10 }}>→ Was ihr erwarten könnt</div>
                <ul className="entry-list">
                  {e.expect.map((it) => (
                    <li key={it}><span style={{ color: "var(--accent-ink)", fontWeight: 700 }} aria-hidden="true">+</span> {it}</li>
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

          <div style={{ margin: "8px 0 18px" }}>
            <TrainingSlider
              seed="vip-einzel"
              labels={["Stadt", "Park", "Zuhause", "Spazierroute", "Begegnung", "Freilauf"]}
              height={160}
              slideWidth={220}
            />
          </div>

          <p className="entry-desc">{INDIVIDUAL.desc}</p>

          <div className="individual-cols">
            <div className="entry-block">
              <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 8 }}>→ Gut für euch, wenn</div>
              <p className="entry-p">{INDIVIDUAL.forWho}</p>
            </div>

            <div className="entry-block">
              <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 8 }}>→ Konkreter Nutzen</div>
              <p className="entry-p" style={{ color: "var(--cream)" }}>{INDIVIDUAL.nutzen}</p>
            </div>

            <div className="entry-block">
              <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 10 }}>→ Was ihr erwarten könnt</div>
              <ul className="entry-list">
                {INDIVIDUAL.expect.map((it) => (
                  <li key={it}><span style={{ color: "var(--accent-ink)", fontWeight: 700 }} aria-hidden="true">+</span> {it}</li>
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
              <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 8 }}>→ Gut für euch, wenn</div>
              <p>{TOUR.forWho}</p>
            </div>
            <div className="tour-row">
              <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 8 }}>→ Konkreter Nutzen</div>
              <p style={{ color: "var(--cream)" }}>{TOUR.nutzen}</p>
            </div>

            <div className="mono" style={{ color: "var(--accent-ink)", margin: "24px 0 10px" }}>→ Was ihr erwarten könnt</div>
            <ul className="tour-list">
              {TOUR.expect.map((it) => (
                <li key={it}><span style={{ color: "var(--accent-ink)" }} aria-hidden="true">+</span> {it}</li>
              ))}
            </ul>

            <a className="btn btn-primary" style={{ marginTop: 24 }} href={TOUR.ctaHref} target="_blank" rel="noopener">
              {TOUR.cta} <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        <div className="group-head">
          <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 10 }}>Basisgruppen · Sortiert nach Wirkung</div>
          <h3 className="serif group-h">Sortiert nach Wirkung — nicht nach Kursliste.</h3>
          <p className="group-lead">
            Jede Gruppe hat ein klares Ziel und einen konkreten Nutzen für euren Alltag. Ihr bucht nicht „eine Stunde“, sondern eine Veränderung.
          </p>
        </div>

        <div className="group-grid">
          {BASIS_GROUPS.map((c) => (
            <div key={c.name} className="group-card">
              <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 10 }}>{c.name}</div>
              <h4 className="serif group-title">{c.title}</h4>
              <p className="group-nutzen">
                <em style={{ color: "var(--ink-2)", fontStyle: "normal", fontWeight: 700 }}>Nutzen:</em> {c.nutzen}
              </p>
              <ul className="group-list">
                {c.items.map((it) => (
                  <li key={it.name} className="group-item">
                    <div className="group-item-head">
                      <span className="pill-tag">{it.name}</span>
                    </div>
                    <TrainingSlider
                      seed={`basis-${it.name}`}
                      labels={["Basis", "Aufbau", "Alltag", "Check"]}
                      height={120}
                      slideWidth={170}
                      speed={5}
                    />
                    <div className="group-item-desc">{it.desc}</div>
                    <div className="group-item-mehrwert">
                      <span style={{ color: "var(--ink)", fontWeight: 600 }}>+ Mehrwert:</span> {it.mehrwert}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="exklusiv-block">
          <div className="exklusiv-badge">EXKLUSIV · PREMIUM</div>
          <div className="exklusiv-head">
            <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 12, letterSpacing: "0.2em" }}>{EXKLUSIV_GROUP.name}</div>
            <h3 className="serif exklusiv-h">{EXKLUSIV_GROUP.title}</h3>
            <p className="exklusiv-nutzen">
              <em style={{ color: "var(--accent-ink)", fontStyle: "normal", fontWeight: 700 }}>Exklusiv-Nutzen:</em> {EXKLUSIV_GROUP.nutzen}
            </p>
          </div>
          <ul className="exklusiv-list">
            {EXKLUSIV_GROUP.items.map((it, i) => (
              <li key={it.name} className="exklusiv-item">
                <div className="exklusiv-item-head">
                  <span className="serif exklusiv-item-name">{it.name}</span>
                  <span className="exklusiv-item-flag mono">EXKLUSIV</span>
                </div>
                <div style={{ margin: "8px 0 14px" }}>
                  <TrainingSlider
                    seed={`exklusiv-${it.name}`}
                    labels={["Analyse", "Aufbau", "Distanz", "Reiz", "Generalisierung", "Alltag"]}
                    height={150}
                    slideWidth={220}
                    reverse={i % 2 === 1}
                  />
                </div>
                <div className="exklusiv-item-desc">{it.desc}</div>
                <div className="exklusiv-item-mehrwert">
                  <span style={{ color: "var(--accent-ink)", fontWeight: 700 }}>+ Mehrwert:</span> {it.mehrwert}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rule-row" style={{ marginTop: 32 }}>
          <span>Hinweis</span>
          <span style={{ flex: 1 }}>
            Jede Gruppe startet mit einem{" "}
            <a href={BOOK_URL} target="_blank" rel="noopener" style={{ color: "var(--accent-ink)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Kennenlern-Einzel
            </a>{" "}
            — damit wir euch passend zuordnen können.
          </span>
        </div>

        <div className="pakete-head">
          <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 12 }}>Pakete · Premium-Bundles</div>
          <h3 className="serif pakete-h">
            Drei besondere Pakete — <span style={{ color: "var(--ink-3)" }}>für die wichtigsten Lebenslagen.</span>
          </h3>
          <p className="pakete-lead">
            Sorgfältig kuratierte Bundles aus Einzeltraining, Gruppen und Talks. Aufeinander abgestimmt, mit fester Struktur und persönlicher Begleitung.
          </p>
        </div>

        <div className="paket-grid">
          {PAKETE.map((p, i) => (
            <article key={p.name} className="paket-card">
              <div className="paket-tag mono" style={{ color: "var(--ink)" }}>{p.tag}</div>
              <h4 className="serif paket-title">{p.name}</h4>
              <div className="paket-headline serif">{p.headline}</div>

              <div style={{ margin: "6px 0 16px" }}>
                <TrainingSlider
                  seed={`paket-${p.name}`}
                  labels={p.inhalte.map((it) => it.replace(/^\d+×\s*/, ""))}
                  height={130}
                  slideWidth={190}
                  reverse={i === 1}
                />
              </div>

              <p className="paket-desc">{p.desc}</p>

              <div className="paket-block">
                <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 10 }}>→ Inhalte</div>
                <ul className="paket-list">
                  {p.inhalte.map((it) => (
                    <li key={it}><span style={{ color: p.accent === "var(--brass)" ? "var(--accent-ink)" : p.accent, fontWeight: 700 }} aria-hidden="true">+</span> {it}</li>
                  ))}
                </ul>
              </div>

              <div className="paket-block">
                <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 10 }}>→ Inklusiv-Leistungen</div>
                <ul className="paket-inklusiv">
                  {PAKET_INKLUSIV.map((it) => (
                    <li key={it}>· {it}</li>
                  ))}
                </ul>
              </div>

              <a className="btn btn-primary paket-cta" href={WA_URL} target="_blank" rel="noopener">
                {p.cta} <span className="arrow" aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .local-head { display: grid; grid-template-columns: 1fr; gap: 20px; align-items: flex-end; margin-bottom: 40px; }
        .local-h2 { font-size: clamp(32px, 6.5vw, 76px); line-height: 1.03; letter-spacing: -0.025em; font-weight: 600; max-width: 16ch; }
        .local-lead { margin-top: 20px; font-size: 17px; line-height: 1.65; color: var(--ink-2); max-width: 56ch; font-family: var(--serif); font-weight: 400; }
        @media (min-width: 1024px) { .local-lead { font-size: 18px; } }

        .local-banner { height: 220px; margin-bottom: 48px; }

        .kennenlern-head { margin-bottom: 24px; }
        .kennenlern-h { font-size: clamp(24px, 3.8vw, 40px); letter-spacing: -0.018em; font-weight: 600; max-width: 22ch; margin-bottom: 14px; }
        .kennenlern-lead { font-size: 16px; line-height: 1.65; color: var(--ink-2); max-width: 60ch; font-family: var(--serif); font-weight: 400; }

        .kennenlern-grid { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 18px; }
        .individual-entry { margin-bottom: 56px; }
        .individual-cols { display: grid; grid-template-columns: 1fr; gap: 0; }
        .entry-card { background: var(--bg-2); border: 1px solid var(--line-2); padding: 30px 24px 28px; position: relative; display: flex; flex-direction: column; }
        .entry-card.is-large { background: var(--bg-3); border-color: var(--brass); padding: 36px 28px 32px; }
        .entry-badge { position: absolute; top: -12px; left: 22px; color: #07071A; font-weight: 700; font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; padding: 6px 14px; border-radius: 999px; }
        .entry-title { letter-spacing: -0.025em; line-height: 1.04; font-weight: 400; margin-bottom: 8px; }
        .entry-sub { font-size: 14.5px; color: var(--ink-2); font-weight: 500; font-family: var(--serif); margin-bottom: 18px; }
        .entry-desc { font-size: 15.5px; line-height: 1.65; color: var(--ink-2); margin-bottom: 22px; }
        .entry-block { border-top: 1px solid var(--line); padding-top: 14px; margin-bottom: 14px; }
        .entry-p { font-size: 15px; line-height: 1.6; color: var(--ink-2); }
        .entry-list { list-style: none; }
        .entry-list li { padding: 9px 0; font-size: 14.5px; line-height: 1.5; color: var(--ink-2); display: flex; gap: 10px; border-bottom: 1px solid var(--line); }
        .entry-list li:last-child { border-bottom: none; }
        .entry-card .btn { margin-top: 24px; align-self: flex-start; }

        .tour-block { background: var(--bg-3); border: 1px solid var(--cream); padding: 36px 24px 32px; margin-bottom: 56px; position: relative; display: grid; grid-template-columns: 1fr; gap: 28px; }
        .tour-tag { position: absolute; top: -12px; left: 24px; background: var(--omd-yellow); color: #07071A; font-weight: 700; font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; padding: 6px 14px; border-radius: 999px; }
        .tour-img { height: 220px; }
        .tour-h { font-size: clamp(28px, 4.4vw, 48px); letter-spacing: -0.025em; line-height: 1.02; font-weight: 400; margin-bottom: 18px; }
        .tour-desc { font-size: 16.5px; line-height: 1.65; color: var(--ink-2); max-width: 56ch; margin-bottom: 22px; }
        .tour-row { border-top: 1px solid var(--line); padding-top: 14px; margin-bottom: 14px; }
        .tour-row p { font-size: 15px; line-height: 1.6; color: var(--ink-2); }
        .tour-list { list-style: none; }
        .tour-list li { padding: 10px 0; font-size: 14.5px; line-height: 1.5; color: var(--ink-2); display: flex; gap: 10px; border-bottom: 1px solid var(--line); }
        .tour-list li:last-child { border-bottom: none; }

        .group-head { margin-bottom: 24px; }
        .group-h { font-size: clamp(24px, 3.8vw, 44px); letter-spacing: -0.018em; font-weight: 600; max-width: 22ch; margin-bottom: 16px; }
        .group-lead { font-size: 16px; line-height: 1.65; color: var(--ink-2); max-width: 56ch; font-family: var(--serif); font-weight: 400; }

        .group-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .group-card { border: 1px solid var(--line-2); background: var(--bg-2); padding: 26px 22px; display: flex; flex-direction: column; }
        .group-title { font-size: 23px; letter-spacing: -0.015em; font-weight: 500; margin-bottom: 12px; line-height: 1.15; }
        .group-nutzen { font-size: 15px; line-height: 1.6; color: var(--ink-2); margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--line); }
        .group-list { list-style: none; display: flex; flex-direction: column; gap: 16px; }
        .group-item { padding: 14px 0; border-bottom: 1px solid var(--line); }
        .group-item:last-child { border-bottom: none; padding-bottom: 0; }
        .group-item-name { font-size: 17px; color: var(--cream); font-weight: 500; display: inline-block; margin-bottom: 6px; }
        .group-item-desc { font-size: 14.5px; line-height: 1.55; color: var(--ink-2); margin-bottom: 8px; }
        .group-item-mehrwert { font-size: 14.5px; line-height: 1.55; color: var(--ink-2); }

        .exklusiv-block {
          margin-top: 56px;
          background: var(--bg-3);
          border: 1px solid var(--brass);
          padding: 44px 28px 36px;
          position: relative;
          box-shadow: 0 0 0 1px var(--brass) inset, 0 24px 60px -30px rgba(0,0,0,0.6);
        }
        .exklusiv-badge {
          position: absolute; top: -12px; left: 28px;
          background: var(--omd-yellow); color: #07071A;
          font-family: var(--mono); font-size: 11.5px;
          letter-spacing: 0.18em; padding: 6px 14px;
          font-weight: 700;
        }
        .exklusiv-head { margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid var(--brass); }
        .exklusiv-h { font-size: clamp(26px, 4.2vw, 48px); letter-spacing: -0.022em; font-weight: 400; line-height: 1.05; max-width: 22ch; margin-bottom: 18px; color: var(--cream); }
        .exklusiv-nutzen { font-size: 16px; line-height: 1.65; color: var(--ink-2); max-width: 64ch; font-family: var(--serif); font-weight: 400; }

        .exklusiv-list { list-style: none; display: grid; grid-template-columns: 1fr; gap: 28px; }
        .exklusiv-item { padding: 22px 0; border-bottom: 1px solid var(--brass); }
        .exklusiv-item:last-child { border-bottom: none; padding-bottom: 0; }
        .exklusiv-item-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; margin-bottom: 10px; flex-wrap: wrap; }
        .exklusiv-item-name { font-size: 23px; color: var(--cream); letter-spacing: -0.015em; font-weight: 500; }
        .exklusiv-item-flag { font-size: 11px; color: var(--accent-ink); letter-spacing: 0.16em; border: 1px solid var(--brass); padding: 4px 10px; font-weight: 700; }
        .exklusiv-item-desc { font-size: 15.5px; line-height: 1.65; color: var(--ink-2); margin-bottom: 10px; max-width: 72ch; }
        .exklusiv-item-mehrwert { font-size: 15px; line-height: 1.6; color: var(--ink-2); max-width: 72ch; }

        .pakete-head { margin-top: 80px; margin-bottom: 28px; }
        .pakete-h { font-size: clamp(28px, 5vw, 56px); letter-spacing: -0.02em; font-weight: 600; line-height: 1.08; max-width: 24ch; margin-bottom: 16px; }
        .pakete-lead { font-size: 16px; line-height: 1.65; color: var(--ink-2); max-width: 60ch; font-family: var(--serif); font-weight: 400; }

        .paket-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .paket-card { background: var(--bg-2); border: 1px solid var(--line-2); padding: 32px 26px 28px; display: flex; flex-direction: column; position: relative; }
        .paket-card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--brass); }
        .paket-tag { font-size: 12px; letter-spacing: 0.14em; margin-bottom: 18px; }
        .paket-title { font-size: 26px; letter-spacing: -0.02em; font-weight: 500; line-height: 1.1; margin-bottom: 10px; color: var(--cream); }
        .paket-headline { font-size: 16.5px; font-weight: 500; color: var(--ink-2); margin-bottom: 18px; line-height: 1.4; }
        .paket-desc { font-size: 15px; line-height: 1.65; color: var(--ink-2); margin-bottom: 22px; }
        .paket-block { border-top: 1px solid var(--line); padding-top: 14px; margin-bottom: 16px; }
        .paket-list { list-style: none; }
        .paket-list li { padding: 9px 0; font-size: 14.5px; line-height: 1.5; color: var(--cream); display: flex; gap: 10px; border-bottom: 1px solid var(--line); }
        .paket-list li:last-child { border-bottom: none; }
        .paket-inklusiv { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; }
        .paket-inklusiv li { font-size: 13.5px; color: var(--ink-2); line-height: 1.45; }
        .paket-cta { margin-top: auto; align-self: flex-start; }

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
          .group-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .group-card { padding: 32px 28px 28px; }
          .exklusiv-block { padding: 56px 56px 48px; }
          .exklusiv-list { grid-template-columns: 1fr; }
          .paket-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .paket-card { padding: 36px 32px 32px; }
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
