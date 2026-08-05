import { WA_URL } from "@/app/lib/constants";
import { PRO_IMG } from "@/app/lib/slideImages";
import TrainingSlider from "./TrainingSlider";

type Module = {
  n: string;
  name: string;
  tag: string;
  forWho: string;
  nutzen: string;
  includes: string[];
  cta: string;
  featured?: boolean;
};

const WHY_JENNY = [
  { t: "Eigene Premium-Schule", d: "Jenny führt selbst eine Hundeschule mit System — vom Kennenlern-Einzel bis zum Signaturprogramm. Keine Theorie, sondern gelebte Praxis." },
  { t: "Didaktik + Kommunikation", d: "Studium der Erwachsenenbildung und 13 Jahre Führungsarbeit in der Kommunikationsbranche. Jenny kann Fachwissen nicht nur haben, sondern auch vermitteln — an Halter und an Kolleg:innen." },
  { t: "Anspruchsvolle Fälle", d: "Der Schwerpunkt liegt seit Jahren auf reizoffenen, unsicheren und energiegeladenen Hunden. Jenny ist § 11 TSchG-zertifizierte Hundetrainerin und Verhaltensberaterin und besitzt die behördliche Zulassung nach § 6 LHundG NRW — auch für die Arbeit mit gefährlichen Hunden und Hunden bestimmter Rassen." },
  { t: "System, das skaliert", d: "Angebotsarchitektur, Didaktik, Positionierung und Kundenführung — alles ist so gebaut, dass es in anderen Schulen übernommen und angepasst werden kann." },
];

const MODULES: Module[] = [
  {
    n: "06",
    name: "OMD Pro Case Lab",
    tag: "Fallsupervision",
    forWho: "Für Hundeschulen und Trainer:innen, die mit anspruchsvollen Fällen arbeiten und ihre Qualität erhöhen wollen.",
    nutzen: "Ihr führt schwierige Fälle sicherer, kommuniziert klarer mit Haltern und trefft fundiertere Trainingsentscheidungen.",
    includes: ["Fundierte Fallbesprechungen", "Klare Einordnung", "Blick auf Trainingslogik und Halterführung", "Übertragbare Entscheidungslogiken"],
    cta: "Pro Case Lab anfragen",
  },
  {
    n: "07",
    name: "Premium Hundeschule System",
    tag: "Strategie · Angebotsarchitektur",
    forWho: "Für Hundeschulen, die nicht im Tagesgeschäft hängen bleiben wollen, sondern ein tragfähiges Premium-System aufbauen.",
    nutzen: "Ihr habt klarere Angebote, höhere Kundenbindung, weniger 1:1-Stundendruck und ein System, das auch ohne ständige Präsenz der Chefin funktioniert.",
    includes: ["Schärfung des Angebotsportfolios", "Didaktische Kurslogik", "Struktur für Kundenerfolg", "Ansatzpunkte für skalierbare Formate"],
    cta: "Business-Beratung anfragen",
    featured: true,
  },
  {
    n: "08",
    name: "Berufswechsel Hund · Realitätscheck",
    tag: "Orientierung",
    forWho: "Für Menschen, die überlegen, ob der Hundebereich beruflich der richtige Weg für sie ist.",
    nutzen: "Ihr spart euch teure Fehlentscheidungen und startet entweder mit realistischen Erwartungen — oder mit der Klarheit, dass dieser Weg nicht der richtige ist.",
    includes: ["Ehrliche Einordnung statt Schönfärberei", "Realistischer Blick auf Anforderungen", "Orientierung zu Qualität und Verantwortung", "Saubere Entscheidungshilfe"],
    cta: "Realitätscheck ansehen",
  },
];

export default function Pro() {
  return (
    <section id="pro" aria-labelledby="pro-heading" className="sec-pad" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="shell">
        <div className="pro-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Säule 03 · Pro & Business</div>
            <div className="label" style={{ color: "var(--ink-3)" }}>Hundeschulen · Trainer:innen · Fachkunden</div>
          </div>
          <div>
            <h2 id="pro-heading" className="serif pro-h2">
              Für Profis, die
              <em className="hl-yellow" style={{ fontStyle: "normal", fontWeight: 700 }}> System </em>
              über Stundendruck stellen.
              <span style={{ color: "var(--ink-3)" }}> Struktur, Qualität, Premium-Niveau.</span>
            </h2>
            <p className="pro-lead">
              Wir arbeiten mit Hundeschulen und ambitionierten Profis, die geschickt wachsen
              wollen, ohne Qualität zu verlieren. Weniger 1:1-Stundendruck, mehr System. Echte
              Erfolge bei euren Kunden — weil die Methode sitzt, nicht nur der Tarif.
            </p>
          </div>
        </div>

        <div className="why-jenny">
          <div className="why-jenny-img tile">
            <img src={PRO_IMG.jenny} alt="Jennifer Bakir bei der Pro-Beratung" loading="lazy" />
            <span className="tile-caption">Jenny · Pro-Beratung</span>
          </div>
          <div>
            <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 16 }}>Warum Jenny die richtige Ansprechpartnerin ist</div>
            <h3 className="serif why-h">
              Wer andere Hundeschulen beraten will,
              <br />
              <span style={{ color: "var(--ink-3)" }}>muss selbst eine führen können.</span>
            </h3>

            <div className="why-grid">
              {WHY_JENNY.map((w, i) => (
                <div key={w.t} className="why-cell">
                  <span className="serif why-n">0{i + 1}</span>
                  <div>
                    <div className="serif why-t">{w.t}</div>
                    <div className="why-d">{w.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pro-grid">
          {MODULES.map((m, idx) => (
            <article key={m.n} className={`pro-card ${m.featured ? "is-featured" : ""}`}>
              {m.featured && <div className="pro-badge">Hebel</div>}

              <div className="pro-card-head">
                <span className="serif pro-n">{m.n}</span>
                <span className="mono">{m.tag}</span>
              </div>

              <h3 className="serif pro-title">{m.name}</h3>

              <div style={{ margin: "8px 0 16px" }}>
                <TrainingSlider
                  seed={`pro-${m.name}`}
                  labels={m.includes.slice(0, 4)}
                  height={130}
                  slideWidth={200}
                  reverse={idx % 2 === 1}
                />
              </div>

              <div className="pro-block">
                <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 6 }}>→ Für wen</div>
                <p className="pro-p">{m.forWho}</p>
              </div>

              <div className="pro-block">
                <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 6 }}>→ Konkreter Nutzen für euch</div>
                <p className="pro-p" style={{ color: "var(--cream)" }}>{m.nutzen}</p>
              </div>

              <div className="pro-block" style={{ flex: 1 }}>
                <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 8 }}>→ Was drin ist</div>
                <ul className="pro-list">
                  {m.includes.map((it) => (
                    <li key={it}><span style={{ color: "var(--accent-ink)" }} aria-hidden="true">+</span> {it}</li>
                  ))}
                </ul>
              </div>

              <a className="btn-link" href={WA_URL} target="_blank" rel="noopener" style={{ color: "var(--accent-ink)" }}>
                {m.cta} →
              </a>
            </article>
          ))}
        </div>

        <div className="refs-block">
          <div style={{ marginBottom: 32 }}>
            <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 12 }}>Referenzen · Schulen, mit denen wir arbeiten</div>
            <h3 className="serif refs-head">Keine Behauptungen, sondern Zusammenarbeit.</h3>
            <p className="refs-lead">
              Konkrete Referenzprojekte und Schulen nennen wir euch im persönlichen Gespräch —
              Diskretion gehört für uns zum Premium-Anspruch dazu. Was wir euch hier zeigen können:
              die Ergebnisse unserer Arbeit im eigenen Haus — und wie wir im Pro Case Lab arbeiten.
            </p>
          </div>

          <div className="ref-video">
            <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 16 }}>Videoausschnitt · Pro Case Lab in Aktion</div>
            <div className="tile ref-video-tile">
              <img src={PRO_IMG.video} alt="Pro Case Lab · Videoausschnitt" loading="lazy" />
              <div className="play-btn">
                <div className="play-icon" aria-hidden="true">▶</div>
                <div className="mono" style={{ marginTop: 12 }}>Pro-Showreel · 2:10 · Fallarbeit, Strategie, Supervision</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pro-foot">
          <div className="pro-foot-quote">
            <div className="mono" style={{ color: "var(--accent-ink)", marginBottom: 10 }}>→ Einstieg in Pro & Business</div>
            <p className="serif">
              Kurzes Erstgespräch, ehrliche Diagnose: Wo steht ihr, und welches Modul trägt jetzt den größten Hebel?
            </p>
          </div>
          <a className="btn btn-primary" href={WA_URL} target="_blank" rel="noopener" style={{ justifyContent: "center" }}>
            Gespräch per WhatsApp <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <style>{`
        .pro-head { display: grid; grid-template-columns: 1fr; gap: 24px; margin-bottom: 56px; }
        .pro-h2 { font-size: clamp(28px, 5vw, 62px); line-height: 1.08; letter-spacing: -0.018em; font-weight: 600; }
        .pro-lead { font-size: 17px; line-height: 1.65; color: var(--ink-2); margin-top: 22px; max-width: 58ch; font-family: var(--serif); font-weight: 400; }
        @media (min-width: 1024px) { .pro-lead { font-size: 18px; } }

        .why-jenny { display: grid; grid-template-columns: 1fr; gap: 32px; margin-bottom: 64px; background: var(--bg-2); border: 1px solid var(--line-2); padding: 28px; }
        .why-jenny-img { height: 260px; }
        .why-h { font-size: clamp(24px, 4vw, 44px); line-height: 1.1; letter-spacing: -0.016em; font-weight: 600; margin-bottom: 28px; }
        .why-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        .why-cell { display: grid; grid-template-columns: 40px 1fr; gap: 14px; padding: 16px 0; border-top: 1px solid var(--line); }
        .why-n { color: var(--accent-ink); font-size: 22px; font-weight: 700; }
        .why-t { font-size: 18.5px; letter-spacing: -0.015em; color: var(--cream); font-weight: 500; margin-bottom: 8px; }
        .why-d { font-size: 15px; line-height: 1.6; color: var(--ink-2); }

        .pro-grid { display: grid; grid-template-columns: 1fr; border-top: 1px solid var(--line-2); }
        .pro-card { padding: 32px 24px 28px; border-bottom: 1px solid var(--line-2); display: flex; flex-direction: column; background: transparent; position: relative; }
        .pro-card.is-featured { background: var(--bg-2); }
        .pro-badge { position: absolute; top: -1px; right: 20px; background: var(--omd-yellow); color: #07071A; padding: 6px 14px; border-radius: 0 0 6px 6px; font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700; }
        .pro-card-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px; }
        .pro-n { font-size: 32px; color: var(--accent-ink); font-weight: 700; }
        .pro-title { font-size: 26px; letter-spacing: -0.02em; font-weight: 500; margin-bottom: 20px; line-height: 1.08; }
        .pro-block { border-top: 1px solid var(--line); padding-top: 14px; margin-bottom: 16px; }
        .pro-p { font-size: 15px; line-height: 1.6; color: var(--ink-2); }
        .pro-list { list-style: none; }
        .pro-list li { font-size: 14.5px; line-height: 1.5; color: var(--ink-2); padding: 7px 0; display: flex; gap: 10px; }

        .refs-block { margin-top: 64px; padding-top: 56px; border-top: 1px solid var(--line-2); }
        .refs-head { font-size: clamp(24px, 3.6vw, 40px); letter-spacing: -0.016em; font-weight: 600; max-width: 24ch; }
        .refs-lead { font-size: 16px; line-height: 1.65; color: var(--ink-2); max-width: 62ch; margin-top: 18px; font-family: var(--serif); font-weight: 400; }
        .ref-video { margin-top: 48px; }
        .ref-video-tile { height: 240px; position: relative; }
        .play-btn { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; z-index: 3; }
        .play-icon { width: 62px; height: 62px; border-radius: 50%; border: 1px solid var(--brass); display: grid; place-items: center; color: var(--brass); font-size: 18px; background: rgba(22,19,15,0.4); backdrop-filter: blur(4px); }

        .pro-foot { margin-top: 48px; display: grid; grid-template-columns: 1fr; gap: 20px; align-items: center; }
        .pro-foot-quote { border: 1px solid var(--line-2); padding: 28px 28px; background: var(--bg-2); }
        .pro-foot-quote p { font-size: 18px; line-height: 1.5; font-weight: 500; color: var(--ink-2); max-width: 52ch; }

        @media (min-width: 700px) {
          .why-grid { grid-template-columns: 1fr 1fr; gap: 20px 28px; }
          .ref-video-tile { height: 360px; }
        }
        @media (min-width: 900px) {
          .pro-head { grid-template-columns: 1fr 1.6fr; gap: 80px; margin-bottom: 72px; }
          .why-jenny { grid-template-columns: 1fr 1.4fr; gap: 48px; padding: 44px; }
          .why-jenny-img { height: auto; }
          .pro-grid { grid-template-columns: repeat(3, 1fr); }
          .pro-card { padding: 40px 32px 32px; border-bottom: none; border-right: 1px solid var(--line-2); }
          .pro-card:last-child { border-right: none; }
          .pro-foot { grid-template-columns: 2fr 1fr; gap: 32px; }
          .ref-video-tile { height: 440px; }
        }
      `}</style>
    </section>
  );
}
