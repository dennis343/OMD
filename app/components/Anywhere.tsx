import { BOOK_URL, WA_URL } from "@/app/lib/constants";

type AnywhereProps = { onOpenSelector: () => void };

const SIGNATURE = {
  tag: "Signaturprogramm",
  title: "Reizoffen & führbar",
  sub: "8–10 Wochen · Premium · Digital",
  desc: "Das digitale Signaturprogramm für anspruchsvolle Hunde und überforderte Halter. Strukturierter Einstieg, klar gegliederte Lernmodule, Live-Elemente, Umsetzungsaufgaben und Feedback auf reale Alltagssituationen.",
  situation:
    "Ihr seid oft im Reagieren statt im Führen. Begegnungen, Reize oder Alltagssituationen kippen zu schnell. Ihr habt schon vieles gehört, aber keinen klaren Weg.",
  outcome: "Mehr Klarheit. Mehr Führung. Mehr Ruhe. Mehr Struktur im Alltag.",
  includes: [
    "Klarer Trainingsfahrplan",
    "Verständliche Erklärungen statt bloßer Tipps",
    "Alltagstaugliche Umsetzung",
    "Enge, aber effiziente Begleitung",
  ],
  img: "https://picsum.photos/seed/omd-signature/1200/900",
};

type Offer = {
  num: string;
  title: string;
  sub: string;
  desc: string;
  expect: string[];
  nutzen: string;
  cta: string;
  href: string;
  img: string;
};

const OFFERS: Offer[] = [
  {
    num: "02",
    title: "Videoanalyse Pro",
    sub: "Einstieg · Asynchron",
    desc: "Schnelle, fundierte Hilfe ohne Terminchaos. Ihr sendet reale Alltagsszenen — wir liefern professionelle Analyse, Priorisierung und konkrete Handlungsempfehlungen.",
    expect: ["Professionelle Analyse", "Priorisierung der wichtigsten Hebel", "Konkrete Umsetzungsanleitung"],
    nutzen: "Ihr wisst nach wenigen Tagen, woran wir arbeiten — ohne Anfahrt, ohne Terminfenster.",
    cta: "Videoanalyse anfragen",
    href: WA_URL,
    img: "https://picsum.photos/seed/omd-video/1000/700",
  },
  {
    num: "03",
    title: "oooh my dog! Club",
    sub: "Membership · Monatlich",
    desc: "Dranbleiben, vertiefen, Sicherheit gewinnen. Regelmäßige Live-Impulse, thematische Vertiefungen, Raum für Fragen, Community und Kontinuität — statt bei jedem Thema neu zu starten.",
    expect: ["Monatliche Themenschwerpunkte", "Wiederkehrende Live-Sessions", "Fokus auf Transfer und Dranbleiben"],
    nutzen: "Keine Einzelstunden-Spirale mehr — stattdessen Kontinuität zum monatlichen Festpreis.",
    cta: "Club entdecken",
    href: WA_URL,
    img: "https://picsum.photos/seed/omd-club/1000/700",
  },
  {
    num: "04",
    title: "Saisonale Sprints",
    sub: "Kurze Intensivformate",
    desc: "Klarer Fokus auf ein konkretes Alltagsthema: Anti-Giftköder, Jagdkontrolle, Silvester, Urlaub & Restaurant, Hundebegegnungen oder Entspannt unterwegs.",
    expect: ["Kurze Laufzeit, klarer Fokus", "Direkte Umsetzbarkeit", "Hoher Nutzwert bei geringem Zeitaufwand"],
    nutzen: "Ihr löst ein Alltagsthema sauber — ohne großes Programm zu starten.",
    cta: "Aktuelle Sprints ansehen",
    href: WA_URL,
    img: "https://picsum.photos/seed/omd-sprint/1000/700",
  },
  {
    num: "05",
    title: "Online-Coaching / Sprechstunde",
    sub: "Flexibel · Direkt",
    desc: "Flexible, direkte Hilfe zwischen Analyse, Programm und Club. Verhaltensberatung, Trainingsplanung und Feinschliff an Signalen — ohne Anfahrt.",
    expect: ["Direkte 1:1-Zeit", "Konkrete Fragen, konkrete Antworten", "Kein großes Programm nötig"],
    nutzen: "1:1-Klarheit in 60 Minuten — für den nächsten sauberen Schritt.",
    cta: "Termin anfragen",
    href: BOOK_URL,
    img: "https://picsum.photos/seed/omd-sprech/1000/700",
  },
  {
    num: "06",
    title: "Videoanalyse & Voice-Beratung",
    sub: "Asynchron · Kontingent-basiert",
    desc: "Unsere asynchrone Premium-Beratung für Menschen, die laufend dranbleiben wollen — ohne Termin-Pingpong. Ihr bucht vorab ein Kontingent und reicht über euren gesamten Buchungszeitraum Videosequenzen und Sprachnachrichten ein. Wir antworten mit strukturierten Videoanalysen, Voice-Messages und konkreten Handlungsschritten — im Rhythmus eures Alltags.",
    expect: [
      "Kontingent vorab buchen (Wochen oder Monate)",
      "Videosequenzen & Sprachnachrichten einreichen",
      "Antwort per Videoanalyse und Voice-Message",
    ],
    nutzen: "Echte 1:1-Begleitung ohne Kalenderdruck — ihr bekommt Profi-Antworten genau dann, wenn die Situation frisch ist.",
    cta: "Kontingent anfragen",
    href: WA_URL,
    img: "https://picsum.photos/seed/omd-messenger/1000/700",
  },
];

export default function Anywhere({ onOpenSelector }: AnywhereProps) {
  return (
    <section
      id="anywhere"
      aria-labelledby="anywhere-heading"
      className="sec-pad"
      style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="shell">
        <div className="any-head">
          <div>
            <div className="mono" style={{ color: "var(--brass)", marginBottom: 20 }}>Säule 02 · 24/7</div>
            <h2 id="anywhere-heading" className="serif any-h">
              Premium-Hundetraining,
              <br />
              <span style={{ color: "var(--ink-3)" }}>das nicht an einen Ort gebunden ist.</span>
            </h2>
            <p className="any-intro">
              Für Menschen, die klare Hilfe wollen — auch wenn sie nicht in Mülheim wohnen,
              wenig Zeit haben oder flexibel lernen möchten. Das gesamte digitale System:
              Programm, Analyse, Membership und Intensivformate.
            </p>
          </div>
          <button className="btn btn-ghost" onClick={onOpenSelector} type="button">
            Was passt zu uns? <span className="arrow" aria-hidden="true">→</span>
          </button>
        </div>

        <article className="signature-block" aria-labelledby="signature-title">
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
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 8 }}>→ Situation jetzt</div>
              <p>{SIGNATURE.situation}</p>
            </div>
            <div className="signature-box">
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 8 }}>→ Veränderung danach</div>
              <p>{SIGNATURE.outcome}</p>
            </div>

            <div className="mono" style={{ color: "var(--brass)", margin: "28px 0 12px" }}>Was drin ist</div>
            <ul className="signature-inc">
              {SIGNATURE.includes.map((it, j) => (
                <li key={it}>
                  <span className="serif" style={{ color: "var(--brass)", fontStyle: "italic", fontSize: 16 }}>0{j + 1}</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
              <a className="btn btn-primary" href={WA_URL} target="_blank" rel="noopener">
                Warteliste anfragen <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="btn btn-ghost" href={BOOK_URL} target="_blank" rel="noopener">Kennenlern-Coaching →</a>
            </div>
          </div>
        </article>

        <div className="any-grid">
          {OFFERS.map((o) => (
            <article key={o.num} className="any-card">
              <div className="any-card-img tile">
                <img src={o.img} alt={o.title} loading="lazy" />
              </div>
              <div className="any-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                  <span className="serif" style={{ fontSize: 32, fontStyle: "italic", color: "var(--brass)", fontWeight: 300 }}>{o.num}</span>
                  <span className="mono">{o.sub}</span>
                </div>
                <h3 className="serif" style={{ fontSize: 28, letterSpacing: "-0.022em", fontWeight: 380, marginBottom: 12, lineHeight: 1.05 }}>
                  {o.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 18 }}>{o.desc}</p>
                <ul className="any-list">
                  {o.expect.map((it) => (
                    <li key={it}>
                      <span style={{ color: "var(--brass)" }} aria-hidden="true">+</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="any-nutzen">
                  <div className="mono" style={{ color: "var(--brass)", marginBottom: 6 }}>Konkreter Nutzen</div>
                  <div>{o.nutzen}</div>
                </div>
                <a className="btn-link mono" href={o.href} target="_blank" rel="noopener">{o.cta} →</a>
              </div>
            </article>
          ))}
        </div>

        <style>{`
          .any-head { display: grid; grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px; }
          .any-h { font-size: clamp(34px, 6vw, 84px); line-height: 0.98; letter-spacing: -0.03em; font-weight: 340; max-width: 18ch; }
          .any-intro { margin-top: 24px; font-size: 16px; line-height: 1.55; color: var(--ink-2); max-width: 60ch; font-family: var(--serif); font-weight: 300; }

          .signature-block { background: var(--bg-3); border: 1px solid var(--brass); padding: 36px 24px 32px; margin-bottom: 28px; position: relative; display: grid; grid-template-columns: 1fr; gap: 28px; }
          .signature-tag { position: absolute; top: -10px; left: 24px; background: var(--brass); color: var(--bg); font-family: var(--mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; padding: 3px 10px; }
          .signature-img { height: 220px; }
          .signature-h { font-size: clamp(32px, 5vw, 58px); letter-spacing: -0.028em; line-height: 0.98; font-weight: 340; margin-bottom: 20px; }
          .signature-desc { font-size: 16px; line-height: 1.55; color: var(--ink-2); max-width: 52ch; margin-bottom: 24px; }
          .signature-box { border-top: 1px solid var(--line); padding-top: 16px; margin-bottom: 16px; }
          .signature-box p { font-size: 14.5px; line-height: 1.55; color: var(--ink-2); }

          .signature-inc { list-style: none; }
          .signature-inc li { padding: 12px 0; border-bottom: 1px solid var(--line); font-size: 14px; color: var(--ink-2); display: flex; gap: 14px; }

          .any-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
          .any-card { background: var(--bg); border: 1px solid var(--line-2); display: flex; flex-direction: column; transition: border-color .2s; overflow: hidden; }
          .any-card:hover { border-color: var(--brass); }
          .any-card-img { height: 180px; }
          .any-card-body { padding: 28px 24px 24px; display: flex; flex-direction: column; flex: 1; }
          .any-list { list-style: none; border-top: 1px solid var(--line); margin-bottom: 18px; }
          .any-list li { padding: 10px 0; border-bottom: 1px solid var(--line); font-size: 13px; color: var(--ink-2); display: flex; gap: 10px; }
          .any-nutzen { background: var(--bg-2); border-left: 2px solid var(--brass); padding: 14px 16px; margin-bottom: 18px; font-size: 14px; line-height: 1.5; color: var(--cream); }

          @media (min-width: 700px) {
            .signature-block { padding: 44px 36px 40px; gap: 40px; grid-template-columns: 1fr 1.2fr; }
            .signature-img { height: 100%; min-height: 340px; }
            .any-grid { grid-template-columns: 1fr 1fr; }
            .any-card-img { height: 200px; }
          }
          @media (min-width: 1000px) {
            .any-head { grid-template-columns: 1fr auto; align-items: flex-end; gap: 48px; margin-bottom: 72px; }
            .signature-block { padding: 56px 56px 48px; gap: 56px; }
          }
        `}</style>
      </div>
    </section>
  );
}
