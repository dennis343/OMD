import { useEffect, useState } from "react";
import { BOOK_ONLINE_URL, BOOK_URL, wa } from "@/app/lib/constants";
import { ANYWHERE_IMG } from "@/app/lib/slideImages";
import TrainingSlider from "./TrainingSlider";

type AnywhereProps = { onOpenSelector: () => void };

const SIGNATURE = {
  tag: "Signaturprogramm",
  title: "Reizoffen & führbar",
  sub: "8 Wochen · 3 feste Starts pro Jahr · 890 €",
  desc: "Das digitale Signaturprogramm für anspruchsvolle Hunde und überforderte Halter. Strukturierter Einstieg, klar gegliederte Lernmodule, Live-Elemente, Umsetzungsaufgaben und Feedback auf reale Alltagssituationen.",
  situation:
    "Ihr seid oft im Reagieren statt im Führen. Begegnungen, Reize oder Alltagssituationen kippen zu schnell. Ihr habt schon vieles gehört, aber keinen klaren Weg.",
  outcome: "Mehr Klarheit. Mehr Führung. Mehr Ruhe. Mehr Struktur im Alltag.",
  includes: [
    "Klarer Trainingsfahrplan",
    "Verständliche Erklärungen statt bloßer Tipps",
    "Alltagstaugliche Umsetzung",
    "Enge, aber effiziente Begleitung",
    // HINWEIS: App-Zugang nur ausspielen, wenn fachlich freigegeben (Rückfrage Dennis)
    "Begleitender App-Zugang: Trainingstagebuch, Video-Upload und direkter Draht zwischen den Modulen",
  ],
  img: ANYWHERE_IMG.signature,
};

const KENNENLERN_ARGUMENTS = [
  {
    t: "Wir sehen euren Hund online mehr.",
    d: "Auf einem fremden Platz zeigt euer Hund nicht sein Alltagsverhalten. Per Video sehen wir ihn zuhause, auf eurer Route, in genau der Situation, die euch belastet.",
  },
  {
    t: "Training findet ohnehin in eurem Alltag statt.",
    d: "Der Trainingsort ist nicht unsere Anlage — es ist eure Straße, euer Wohnzimmer, euer Feldweg.",
  },
  {
    t: "Ihr startet diese Woche — nicht in sechs.",
    d: "Vor-Ort-Kennenlern-Termine sind bewusst limitiert und regelmäßig ausgebucht. Online gibt es keine Warteliste, keine Anfahrt, kein Termin-Jonglieren.",
  },
  {
    t: "Dieselbe Trainerin, dasselbe System.",
    d: "Kein Junior-Team, kein Katalogvideo: Jenny analysiert eure Situation persönlich. Der Kanal ändert sich — die Qualität nicht.",
  },
  {
    t: "Ihr bekommt etwas in die Hand.",
    d: "Nach dem Kennenlern haltet ihr euren Trainingsweg schriftlich in den Händen: Auswertung der Videoanalyse, priorisierte erste Schritte, klare Empfehlung.",
  },
  {
    t: "49 € sind die Eintrittskarte, kein Rabatt.",
    d: "Niedrige Hürte, volle Leistung. Die Analyse ist dieselbe wie bei jedem unserer Kunden.",
  },
];

const STANDARDS = [
  {
    t: "Kein Fließband.",
    d: "Keine tausend Kunden gleichzeitig. Plätze sind limitiert, weil jedes Feedback von echten Trainer:innen nach einem dokumentierten Standard kommt — mit Jennys Review.",
  },
  {
    t: "Keine versteckten Preise.",
    d: "Alle Preise stehen auf dieser Seite. Kein „Analysegespräch“, in dem euch ein vierstelliger Preis überraschend verkauft wird. Keine Zusatzkosten mitten im Programm.",
  },
  {
    t: "Kein Generika-Feedback.",
    d: "Wenn es wirklich schwierig wird — Aggression, Angst, Listenhunde — braucht es keine Video-Bibliothek, sondern eine Trainerin mit behördlicher Zulassung nach § 6 LHundG NRW. Genau dafür ist oooh my dog! gebaut.",
  },
  {
    t: "Ehrlich über Grenzen.",
    d: "Was online lösbar ist, lösen wir online. Was einen Vor-Ort-Termin braucht, sagen wir euch direkt — und bieten ihn an: in Mülheim oder auf DACH-Tour. Das ist keine Wertung, sondern eine klare Einordnung.",
  },
];

type Offer = {
  id: string;
  num: string;
  title: string;
  sub: string;
  desc: string;
  expect: string[];
  nutzen: string;
  cta: string;
  href: string;
  einwand?: string;
  bridge?: string;
};

const OFFERS: Offer[] = [
  {
    id: "angebot-videoanalyse",
    num: "02",
    title: "Videoanalyse Pro",
    sub: "Einstieg · Asynchron · 49 € einmalig",
    desc: "Schnelle, fundierte Hilfe ohne Terminchaos. Ihr sendet reale Alltagsszenen — wir liefern professionelle Analyse, Priorisierung und konkrete Handlungsempfehlungen.",
    expect: ["Professionelle Analyse", "Priorisierung der wichtigsten Hebel", "Konkrete Umsetzungsanleitung"],
    nutzen: "Ihr wisst nach wenigen Tagen, woran wir arbeiten — ohne Anfahrt, ohne Terminfenster.",
    einwand: "Musst du auch nicht. Filme das scheinbar Banale: die Minute vor der Begegnung, den Weg zur Tür, das Verhalten nach dem Spaziergang. Genau daraus liest Jenny ab, was deinen Hund wirklich bewegt — und interpretiert zuverlässig, wie dein Hund in der Reizsituation tickt.",
    bridge: "Der Club kostet nur 6 € mehr — und beinhaltet deutlich mehr.",
    cta: "Videoanalyse anfragen",
    href: wa("Hi Jenny, ich interessiere mich für die Videoanalyse Pro (49 €). Unsere Situation kurz:"),
  },
  {
    id: "angebot-club",
    num: "03",
    title: "oooh my dog! Club",
    sub: "Membership · 55 €/Monat",
    desc: "Dein Trainingszentrum für die Hosentasche: Videoanalysen, direkter Austausch, der oooh my dog! Talk und das Clubmeeting. Dranbleiben, vertiefen, Sicherheit gewinnen — statt bei jedem Thema neu zu starten.",
    expect: ["Videoanalysen & direkter Austausch", "oooh my dog! Talk & Clubmeeting", "Fokus auf Transfer und Dranbleiben"],
    nutzen: "Keine Einzelstunden-Spirale mehr — stattdessen Kontinuität zum monatlichen Festpreis von 55 €.",
    einwand: "Musst du auch nicht. Wie ein Hund reaktiv ist, wissen wir bereits — spannend ist, was davor und danach passiert. Genau diese vermeintlich banalen Momente analysieren wir im Club laufend mit.",
    cta: "Club entdecken",
    href: wa("Hi Jenny, ich möchte den oooh my dog! Club (55 €/Monat) kennenlernen. Unsere Situation kurz:"),
  },
  {
    id: "angebot-live",
    num: "04",
    title: "Digitale Live-Sessions",
    sub: "Workshops 49 € · Seminare 79 € · Live",
    desc: "Feste Themen, live — mit direkter Integration eurer Videos und Fragen: Ihr reicht vorab Situationen ein, Jenny analysiert sie in der Session. Themen: Leinenreaktivität · Jagdmotivation · Sozialverhalten unter Hunden · Kastration u. a. Integriert ist der oooh my dog! Talk — offenes Live-Format, 2× pro Monat.",
    expect: ["Live-Workshops zu festen Themen", "Eure Videos & Fragen, in der Session analysiert", "oooh my dog! Talk · 2× pro Monat"],
    nutzen: "Direkte Analyse eurer echten Situation im Live-Format — ohne Wartezeit auf einen 1:1-Termin.",
    cta: "Termine anfragen",
    href: wa("Hi Jenny, ich interessiere mich für die digitalen Live-Sessions bzw. den OMD Talk. Bitte schickt mir die aktuellen Termine."),
  },
  {
    id: "angebot-kurspakete",
    num: "05",
    title: "Digitale Kurspakete",
    sub: "Voraufgezeichnet · Ab 89 €",
    desc: "Voraufgezeichnete Kurse mit begleitender Aufgabenserie per E-Mail und 2 Teilnahmen am oooh my dog! Talk. Das erste Paket: „Deine 28-Tage-Challenge zur Leinenführigkeit“.",
    expect: ["28-Tage-Challenge Leinenführigkeit", "Begleitende Aufgabenserie per E-Mail", "2× oooh my dog! Talk inklusive"],
    nutzen: "Ihr trainiert geführt, wann es in euren Alltag passt. Weitere Challenges — Rückruf, Ruhe & Entspannung, Stadttraining — sind als Ausblick geplant.",
    cta: "Kurspaket anfragen",
    href: wa("Hi Jenny, ich interessiere mich für die 28-Tage-Challenge Leinenführigkeit (ab 89 €)."),
  },
  {
    id: "angebot-sprints",
    num: "06",
    title: "Saisonale Sprints",
    sub: "4 Wochen · 290 € · Winter · Frühjahr · Herbst",
    desc: "Vier Wochen Fokus auf ein konkretes Alltagsthema — von Urlaubsvorbereitung bis Feiertage & Silvester. Vorhersehbare Stressoren werden vorbereitet, bevor sie zuschlagen (siehe Entwicklungs-Modell oben).",
    expect: ["Mehrere Aufgaben per E-Mail über 4 Wochen", "Wöchentliche Calls mit Nachbesprechung", "OMD Club lite (läuft über die App) für die Sprint-Dauer"],
    nutzen: "Ihr geht vorbereitet in die stressige Saison — statt sie hinterher aufzuarbeiten. Der jeweils nächste Sprint wird hier und per Newsletter angekündigt.",
    cta: "Aktuellen Sprint ansehen",
    href: wa("Hi Jenny, ich möchte Infos zum aktuellen Saison-Sprint (4 Wochen, 290 €)."),
  },
  {
    id: "angebot-intensiv",
    num: "07",
    title: "Intensiv-Begleitung Exklusiv",
    sub: "Exklusiv · Ab 2.900 €",
    desc: "Unser High-Ticket-Format für die härtesten Fälle und höchsten Ansprüche: 6–8 Wochen engmaschige asynchrone Begleitung mit täglichen bis wöchentlichen Video-Reviews — persönlich von Jenny.",
    expect: [
      "Tägliche bis wöchentliche Video-Reviews",
      "Direkter Draht über den gesamten Zeitraum",
      "Auch für schwere Fälle: Aggression, Angst, Listenhunde",
    ],
    nutzen: "Die engste Begleitung, die wir anbieten — das Kontingent ist bewusst klein. Konditionen und Start klären wir im persönlichen Gespräch.",
    cta: "Verfügbarkeit anfragen",
    href: wa("Hi Jenny, ich interessiere mich für die Intensiv-Begleitung Exklusiv (ab 2.900 €). Wann ist der nächste freie Platz?"),
  },
];

export default function Anywhere({ onOpenSelector }: AnywhereProps) {
  // Kohorten-Logik: drei feste Jahres-Starts, nächster Termin clientseitig
  // berechnet (keine Hydration-Differenz, SSR rendert ohne Datum).
  const [nextStart, setNextStart] = useState<string | null>(null);
  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const candidates = [year, year + 1]
      .flatMap((y) => [1, 4, 9].map((m) => new Date(y, m, 15)))
      .sort((a, b) => a.getTime() - b.getTime());
    const next = candidates.find((d) => d > now);
    if (next) {
      setNextStart(
        next.toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" })
      );
    }
  }, []);

  return (
    <section
      id="anywhere"
      aria-labelledby="anywhere-heading"
      className="sec-pad theme-dark"
      style={{ borderBottom: "2px solid var(--omd-yellow)" }}
    >
      <div className="shell">
        <div className="any-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>Säule 02 · Online</div>
            <h2 id="anywhere-heading" className="serif any-h">
              Dieselbe Methodik.
              <br />
              <em className="hl-yellow" style={{ fontStyle: "normal", fontWeight: 700 }}>Ohne Anfahrt.</em>
              <br />
              <span style={{ color: "var(--ink-3)" }}>Für reizoffene Hunde in ganz DACH.</span>
            </h2>
            <p className="any-intro">
              Ihr wohnt nicht in Mülheim — und trotzdem soll euer Hund endlich in Führung
              kommen. Programm, Videoanalyse, Membership: klare Struktur, per Video begleitet,
              im Tempo eures Alltags.
            </p>
            <p className="any-intro" style={{ marginTop: 16, color: "var(--ink-3)" }}>
              Ihr lebt nicht in Deutschland — aber ihr wollt auf Deutsch mit eurem Hund arbeiten?
              Egal ob Spanien, Portugal oder Singapur: Videoanalyse und Online-Programm funktionieren
              über jede Zeitzone hinweg. Euer Hund spricht keine Landessprache — ihr müsst es auch nicht.
            </p>
          </div>
          <button className="btn btn-ghost" onClick={onOpenSelector} type="button">
            Was passt zu uns? <span className="arrow" aria-hidden="true">→</span>
          </button>
        </div>

        <article className="signature-block" id="angebot-signatur" aria-labelledby="signature-title">
          <div className="signature-tag">{SIGNATURE.tag}</div>

          <div className="signature-img tile">
            <img src={SIGNATURE.img} alt={SIGNATURE.title} loading="lazy" />
            <span className="tile-caption">Signaturprogramm · Reizoffen & führbar</span>
          </div>

          <div className="signature-body">
            <div className="mono" style={{ marginBottom: 14 }}>{SIGNATURE.sub}</div>
            <h3 id="signature-title" className="serif signature-h">{SIGNATURE.title}</h3>
            <p className="signature-desc">{SIGNATURE.desc}</p>

            <div className="signature-box">
              <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 8 }}>→ Situation jetzt</div>
              <p>{SIGNATURE.situation}</p>
            </div>
            <div className="signature-box">
              <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 8 }}>→ Veränderung danach</div>
              <p>{SIGNATURE.outcome}</p>
            </div>

            <div className="mono" style={{ color: "var(--accent-ink)", margin: "28px 0 12px" }}>Was drin ist</div>
            <ul className="signature-inc">
              {SIGNATURE.includes.map((it, j) => (
                <li key={it}>
                  <span className="serif" style={{ color: "var(--accent-ink)", fontWeight: 700, fontSize: 16 }}>0{j + 1}</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <div className="signature-cohort mono">
              <div>Feste Jahres-Starts: 15.02. · 15.05. · 15.10.</div>
              <div style={{ marginTop: 6, color: "var(--cream)" }}>
                {nextStart ? `Nächster Start: ${nextStart}` : "Nächster Start: siehe Jahres-Starts"} — Plätze limitiert, Warteliste.
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
              <a className="btn btn-primary" href={wa("Hi Jenny, bitte setzt mich auf die Warteliste für das Signaturprogramm „Reizoffen & führbar“ (nächster Start 15.10.). Unser Hund kurz:")} target="_blank" rel="noopener">
                Warteliste anfragen <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="btn btn-ghost" href={BOOK_URL} target="_blank" rel="noopener">Kennenlern-Coaching →</a>
            </div>
          </div>
        </article>

        <article className="ok-block" id="angebot-kennenlern" aria-labelledby="ok-title">
          <div className="signature-tag">Der beste Einstieg · 49 €</div>
          <div className="ok-body">
            <div className="mono" style={{ marginBottom: 14 }}>Online-Kennenlern · 30 Min Zoom + Videoanalyse</div>
            <h3 id="ok-title" className="serif ok-h">
              Der schnellste Weg in euer Training führt nicht nach Mülheim.
              <span style={{ color: "var(--ink-3)" }}> Er führt durch eure Haustür.</span>
            </h3>
            <p className="signature-desc">
              Online ist nicht die zweite Wahl. Für die meisten von euch ist es die bessere —
              sechs Gründe, warum:
            </p>

            <div className="ok-grid">
              {KENNENLERN_ARGUMENTS.map((a, i) => (
                <div key={a.t} className="ok-cell">
                  <span className="serif" style={{ color: "var(--accent-ink)", fontWeight: 700, fontSize: 18 }}>0{i + 1}</span>
                  <div>
                    <div className="serif ok-cell-t">{a.t}</div>
                    <p className="ok-cell-d">{a.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 28 }}>
              <a className="btn btn-primary" href={BOOK_ONLINE_URL} target="_blank" rel="noopener">
                Online-Kennenlern für 49 € buchen <span className="arrow" aria-hidden="true">→</span>
              </a>
              <button className="btn btn-ghost" onClick={onOpenSelector} type="button">
                Erst prüfen, ob wir zueinander passen
              </button>
            </div>
          </div>
        </article>

        <div className="standards-block" id="online-standards" aria-labelledby="standards-title">
          <div style={{ marginBottom: 36 }}>
            <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 12 }}>Unsere Standards · Online</div>
            <h3 id="standards-title" className="serif standards-h">
              Kein Fließband. Keine versteckten Preise.
              <span style={{ color: "var(--ink-3)" }}> Kein Generika-Feedback.</span>
            </h3>
          </div>
          <div className="standards-grid">
            {STANDARDS.map((s) => (
              <div key={s.t} className="standards-cell">
                <div className="serif standards-cell-t">{s.t}</div>
                <p className="standards-cell-d">{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <button className="btn btn-ghost" onClick={onOpenSelector} type="button">
              Passen wir zueinander? · 2 Minuten, 3 Fragen <span className="arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="any-grid">
          {OFFERS.map((o, idx) => (
            <article key={o.num} id={o.id} className="any-card">
              <div className="any-card-img">
                <TrainingSlider
                  seed={`online-${o.title}`}
                  labels={o.expect.slice(0, 5)}
                  height={180}
                  slideWidth={220}
                  reverse={idx % 2 === 1}
                />
              </div>
              <div className="any-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                  <span className="serif" style={{ fontSize: 32, color: "var(--accent-ink)", fontWeight: 700 }}>{o.num}</span>
                  <span className="mono">{o.sub}</span>
                </div>
                <h3 className="serif" style={{ fontSize: 28, letterSpacing: "-0.018em", fontWeight: 600, marginBottom: 12, lineHeight: 1.1 }}>
                  {o.title}
                </h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--ink-2)", marginBottom: 18 }}>{o.desc}</p>
                <ul className="any-list">
                  {o.expect.map((it) => (
                    <li key={it}>
                      <span style={{ color: "var(--accent-ink)" }} aria-hidden="true">+</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="any-nutzen">
                  <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 6 }}>Konkreter Nutzen</div>
                  <div>{o.nutzen}</div>
                </div>
                {o.einwand && (
                  <div className="any-einwand">
                    <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 6 }}>„Im Ernstfall kann ich doch gar nicht filmen.“</div>
                    <div>{o.einwand}</div>
                  </div>
                )}
                {o.bridge && (
                  <div className="mono any-bridge">{o.bridge}</div>
                )}
                <a className="btn-link mono" href={o.href} target="_blank" rel="noopener">{o.cta} →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="app-block" id="app-block" aria-labelledby="app-title">
          <div>
            <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 12 }}>Begleitung im Alltag · Die oooh my dog! App</div>
            <h3 id="app-title" className="serif app-h">Euer Training in der Tasche.</h3>
            <p className="app-p" style={{ marginBottom: 22 }}>
              Ob Training wirkt, entscheidet sich nicht im Termin. Es entscheidet sich dazwischen.
              Genau dafür haben wir unsere eigene App gebaut: euer digitales Trainingszentrum und
              Alltagsbegleiter in einem.
            </p>
            <div className="app-steps">
              <div className="app-step">
                <span className="serif" style={{ color: "var(--accent-ink)", fontWeight: 700, fontSize: 16 }}>01</span>
                <div>
                  <div className="serif app-step-t">Aufnehmen.</div>
                  <p className="app-step-d">Die Alltagssituation festhalten: Foto oder Video, direkt aus der App, in Sekunden beim Trainer-Team.</p>
                </div>
              </div>
              <div className="app-step">
                <span className="serif" style={{ color: "var(--accent-ink)", fontWeight: 700, fontSize: 16 }}>02</span>
                <div>
                  <div className="serif app-step-t">Rückmeldung.</div>
                  <p className="app-step-d">Persönlicher Chat, Sprachnotiz und eine konkrete Übungsempfehlung — keine generischen Tipps.</p>
                </div>
              </div>
              <div className="app-step">
                <span className="serif" style={{ color: "var(--accent-ink)", fontWeight: 700, fontSize: 16 }}>03</span>
                <div>
                  <div className="serif app-step-t">Fortschritt.</div>
                  <p className="app-step-d">Trainingstagebuch, Erinnerungen und Fortschritts-Matrix: Ihr seht, wie aus Üben Veränderung wird.</p>
                </div>
              </div>
            </div>
            <p className="app-p" style={{ marginTop: 22 }}>
              Heimtierausweis, Impf-Ampel, Trainingstagebuch, Fortschritts-Matrix und Video-Upload
              für eure Analysen — die App hält euren Trainingsalltag zwischen den Terminen zusammen.
            </p>
            <div style={{ marginTop: 24 }}>
              <a className="btn btn-primary" href="https://app.oooh-my-dog.de/auth" target="_blank" rel="noopener">
                Kostenlos registrieren <span className="arrow" aria-hidden="true">→</span>
              </a>
              <div className="mono" style={{ marginTop: 12, color: "var(--ink-3)" }}>Free-Tarif · 0 € · Persönliche Freigabe durch unser Team</div>
            </div>
          </div>
          <div className="app-tiers">
            <div className="app-tier">
              <div className="mono" style={{ marginBottom: 6 }}>Free</div>
              <div className="serif app-tier-price">0 €</div>
            </div>
            <div className="app-tier">
              <div className="mono" style={{ marginBottom: 6 }}>Motiviert</div>
              <div className="serif app-tier-price">9,90 €<span className="app-tier-per">/Monat</span></div>
            </div>
            <div className="app-tier">
              <div className="mono" style={{ marginBottom: 6 }}>Oooh My Dog</div>
              <div className="serif app-tier-price">19,90 €<span className="app-tier-per">/Monat</span></div>
            </div>
          </div>
        </div>

        <style>{`
          .any-head { display: grid; grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px; }
          .any-h { font-size: clamp(34px, 6vw, 84px); line-height: 1.02; letter-spacing: -0.025em; font-weight: 600; max-width: 18ch; }
          .any-intro { margin-top: 24px; font-size: 17px; line-height: 1.65; color: var(--ink-2); max-width: 60ch; font-family: var(--serif); font-weight: 400; }
          @media (min-width: 1024px) { .any-intro { font-size: 18px; } }

          .signature-block { background: var(--bg-3); border: 1px solid var(--brass); padding: 36px 24px 32px; margin-bottom: 28px; position: relative; display: grid; grid-template-columns: 1fr; gap: 28px; }
          .signature-tag { position: absolute; top: -12px; left: 24px; background: var(--omd-yellow); color: #07071A; font-weight: 700; font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; padding: 6px 14px; border-radius: 999px; }
          .signature-img { height: 220px; }
          .signature-h { font-size: clamp(32px, 5vw, 58px); letter-spacing: -0.022em; line-height: 1.04; font-weight: 600; margin-bottom: 20px; }
          .signature-desc { font-size: 17px; line-height: 1.6; color: var(--ink-2); max-width: 52ch; margin-bottom: 24px; }
          .signature-box { border-top: 1px solid var(--line); padding-top: 16px; margin-bottom: 16px; }
          .signature-box p { font-size: 15.5px; line-height: 1.6; color: var(--ink-2); }

          .signature-inc { list-style: none; }
          .signature-inc li { padding: 14px 0; border-bottom: 1px solid var(--line); font-size: 15px; line-height: 1.5; color: var(--ink-2); display: flex; gap: 14px; }

          .ok-block { background: var(--bg-2); border: 1px solid var(--omd-yellow); padding: 40px 24px 32px; margin-bottom: 28px; position: relative; }
          .ok-h { font-size: clamp(28px, 4.6vw, 52px); letter-spacing: -0.022em; line-height: 1.06; font-weight: 600; margin-bottom: 20px; max-width: 24ch; }
          .ok-grid { display: grid; grid-template-columns: 1fr; gap: 0; border-top: 1px solid var(--line); }
          .ok-cell { display: grid; grid-template-columns: 40px 1fr; gap: 14px; padding: 18px 0; border-bottom: 1px solid var(--line); }
          .ok-cell-t { font-size: 17.5px; letter-spacing: -0.012em; font-weight: 600; color: var(--cream); margin-bottom: 6px; line-height: 1.25; }
          .ok-cell-d { font-size: 14.5px; line-height: 1.6; color: var(--ink-2); }

          .standards-block { border-top: 1px solid var(--line-2); padding-top: 48px; margin-bottom: 56px; }
          .standards-h { font-size: clamp(26px, 4.2vw, 46px); letter-spacing: -0.02em; line-height: 1.08; font-weight: 600; max-width: 26ch; }
          .standards-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
          .standards-cell { background: var(--bg-2); border: 1px solid var(--line-2); border-left: 2px solid var(--brass); padding: 22px 22px 20px; }
          .standards-cell-t { font-size: 19px; letter-spacing: -0.014em; font-weight: 600; color: var(--cream); margin-bottom: 8px; }
          .standards-cell-d { font-size: 14.5px; line-height: 1.6; color: var(--ink-2); }

          .any-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
          .any-card { background: var(--bg); border: 1px solid var(--line-2); display: flex; flex-direction: column; transition: border-color .2s; overflow: hidden; }
          .any-card:hover { border-color: var(--brass); }
          .any-card-img { height: 180px; }
          .any-card-body { padding: 28px 24px 24px; display: flex; flex-direction: column; flex: 1; }
          .any-list { list-style: none; border-top: 1px solid var(--line); margin-bottom: 18px; }
          .any-list li { padding: 12px 0; border-bottom: 1px solid var(--line); font-size: 14.5px; line-height: 1.5; color: var(--ink-2); display: flex; gap: 10px; }
          .any-nutzen { background: var(--bg-2); border-left: 2px solid var(--brass); padding: 16px 18px; margin-bottom: 18px; font-size: 15px; line-height: 1.55; color: var(--cream); }
          .any-einwand { border-top: 1px solid var(--line); padding-top: 14px; margin-bottom: 18px; font-size: 14px; line-height: 1.6; color: var(--ink-2); }
          .any-bridge { color: var(--accent-ink); border: 1px solid var(--brass); border-radius: 999px; display: inline-block; padding: 8px 14px; margin-bottom: 18px; align-self: flex-start; }
          .signature-cohort { border-top: 1px solid var(--line); margin-top: 20px; padding-top: 16px; color: var(--ink-2); }

          .app-block { margin-top: 56px; border-top: 1px solid var(--line-2); padding-top: 44px; display: grid; grid-template-columns: 1fr; gap: 28px; }
          .app-h { font-size: clamp(24px, 3.8vw, 40px); letter-spacing: -0.018em; line-height: 1.1; font-weight: 600; margin-bottom: 14px; }
          .app-p { font-size: 15.5px; line-height: 1.65; color: var(--ink-2); max-width: 56ch; }
          .app-tiers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
          .app-tier { background: var(--bg-2); border: 1px solid var(--line-2); padding: 18px 16px; }
          .app-tier-price { font-size: 22px; font-weight: 600; color: var(--cream); letter-spacing: -0.015em; }
          .app-tier-per { font-size: 13px; color: var(--ink-3); font-weight: 400; }
          .app-steps { display: grid; grid-template-columns: 1fr; gap: 0; border-top: 1px solid var(--line); }
          .app-step { display: grid; grid-template-columns: 36px 1fr; gap: 12px; padding: 14px 0; border-bottom: 1px solid var(--line); }
          .app-step-t { font-size: 16px; font-weight: 600; color: var(--cream); margin-bottom: 4px; letter-spacing: -0.01em; }
          .app-step-d { font-size: 14px; line-height: 1.55; color: var(--ink-2); }

          /* Anker-Ziele aus dem Selektor: weich anspringen + dezent markieren */
          [id^="angebot-"] { scroll-margin-top: 96px; }
          [id^="angebot-"]:target { animation: offerGlow 1.6s ease-out 1; }
          @keyframes offerGlow {
            0% { box-shadow: 0 0 0 2px var(--omd-yellow); }
            100% { box-shadow: 0 0 0 2px transparent; }
          }
          @media (prefers-reduced-motion: reduce) {
            [id^="angebot-"]:target { animation: none; box-shadow: 0 0 0 2px var(--omd-yellow); }
          }

          @media (min-width: 700px) {
            .signature-block { padding: 44px 36px 40px; gap: 40px; grid-template-columns: 1fr 1.2fr; }
            .signature-img { height: 100%; min-height: 340px; }
            .ok-block { padding: 48px 40px 40px; }
            .ok-grid { grid-template-columns: 1fr 1fr; gap: 0 32px; }
            .standards-grid { grid-template-columns: 1fr 1fr; }
            .any-grid { grid-template-columns: 1fr 1fr; }
            .any-card-img { height: 200px; }
            .app-block { grid-template-columns: 1.4fr 1fr; gap: 48px; align-items: center; }
          }
          @media (min-width: 1000px) {
            .any-head { grid-template-columns: 1fr auto; align-items: flex-end; gap: 48px; margin-bottom: 72px; }
            .signature-block { padding: 56px 56px 48px; gap: 56px; }
            .ok-block { padding: 56px 56px 48px; }
            .standards-grid { grid-template-columns: repeat(4, 1fr); }
          }
        `}</style>
      </div>
    </section>
  );
}
