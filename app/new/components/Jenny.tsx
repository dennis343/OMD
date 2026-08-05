import { BOOK_URL, INSTAGRAM_URL } from "@/app/lib/constants";
import { IMG } from "@/app/new/lib/images";

const CV: [string, string][] = [
  ["Führung", "13 Jahre · Kommunikationsbranche"],
  ["Didaktik", "Studium Erwachsenenbildung"],
  ["Training", "1 400+ begleitete Hunde"],
  ["Methode", "0 % aversive Methoden — auch bei schweren Fällen"],
  ["Zertifizierung", "§ 11 TSchG-zertifizierte Hundetrainerin"],
  ["Zulassung", "§ 6 LHundG NRW · behördlich — auch Listenhunde & gefährliche Hunde"],
  ["Weiterbildung", "In Ausbildung zur zertifizierten Verhaltensberaterin für Hunde"],
  ["Amt", "Vorstand · Verein für Deutsche Schäferhunde (SV), OG Mülheim/Ruhr"],
  ["Medien", "WDR-Interviewpartnerin"],
  ["Szene", "Initiatorin & Moderatorin · Ruhrpott-Hundemesse"],
];

export default function Jenny() {
  return (
    <section id="jenny" aria-labelledby="jenny-heading" className="sec-pad theme-dark" style={{ borderBottom: "2px solid var(--omd-yellow)" }}>
      <div className="shell">
        <div className="jenny-grid">
          <div data-fx="left">
            <div className="eyebrow" style={{ marginBottom: 26 }}>Über uns · Hinter dem System</div>
            <h2 id="jenny-heading" className="serif jenny-head">
              Jenny versteht Hunde —
              <br />
              weil sie <em className="hl-yellow">Menschen führt</em>.
            </h2>

            <p className="jenny-intro">
              13 Jahre Führungsarbeit in der Kommunikationsbranche. Studium der Erwachsenen­bildung.
              Und seit vielen Jahren Hundetrainerin mit Fokus auf anspruchsvolle Fälle. Das
              zusammen ist kein Zufall — es ist das Fundament von oooh my dog!
            </p>

            <dl className="jenny-cv">
              {CV.map(([k, v]) => (
                <div key={k} className="jenny-cv-cell">
                  <dt className="mono" style={{ color: "var(--accent-ink)", marginBottom: 6 }}>{k}</dt>
                  <dd style={{ fontSize: 14.5, color: "var(--ink-2)" }}>{v}</dd>
                </div>
              ))}
            </dl>

            <div style={{ marginTop: 36, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href={BOOK_URL} target="_blank" rel="noopener">
                Jenny kennenlernen <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="btn btn-ghost" href="#pro">Für Hundeschulen →</a>
            </div>
          </div>

          <div className="jenny-images" data-fx="right">
            <div className="tile jenny-main-img">
              <img src={IMG.jennyMain} alt="Mensch und Hund sitzen ruhig nebeneinander am Wasser — Vertrauen durch klare Führung" loading="lazy" decoding="async" />
              <span className="tile-caption">Bindung · Vertrauen · Führung</span>
            </div>
            <div className="tile jenny-work-img" style={{ border: "1px solid var(--brass)" }}>
              <img src={IMG.jennyWork} alt="Trainingssituation: Mensch arbeitet konzentriert mit Hund" loading="lazy" decoding="async" />
              <span className="tile-caption">Training · Am Ort des Geschehens</span>
            </div>
            <div className="jenny-quote-card">„Ich trainiere lieber präzise, als lauter.“</div>
          </div>
        </div>

        <figure className="big-quote" data-fx>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Warum das wichtig ist</div>
          <blockquote className="serif">
            „Wir haben im Durchschnitt <em className="hl-yellow">13 Jahre</em> mit unseren Hunden.
            Es wäre doch schön, wenn jeder einzelne Tag zählt — und mit einem guten Gefühl gelebt wird.“
          </blockquote>
          <figcaption className="mono" style={{ marginTop: 20 }}>— Jennifer Bakir</figcaption>
        </figure>

        <div className="nala-block">
          <div className="nala-text" data-fx>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Nala & Zuri</div>
            <h3 className="serif nala-head">
              Zwei Charakterhunde —
              <br />
              <span style={{ color: "var(--ink-3)" }}>und der Grund, warum dieses System so klar ist.</span>
            </h3>

            <p className="nala-p">
              <strong style={{ color: "var(--cream)", fontWeight: 400 }}>Nala</strong> war mein erster eigener
              Malinois — aus einer KNPV-Leistungslinie: reizoffen, hoch aufmerksam, auf Leistung gezüchtet.
              Heute teile ich mein Leben mit ihr und mit <strong style={{ color: "var(--cream)", fontWeight: 400 }}>Zuri</strong>,
              meinem jüngsten Hund — einem X-Herder (holländischer Schäferhund) aus behördlicher Beschlagnahmung.
              Kein zweiter Malinois, aber ein vergleichbar forderndes Kaliber: eigener Charakter, eigene Stärken, eigene Baustellen.
            </p>
            <p className="nala-p">
              Beide sind keine Anfängerhunde. Sie sind ehrlich, anspruchsvoll und lassen sich nichts erzählen.
              Und trotzdem sind sie heute voll familientauglich, verträglich, alltagstauglich — Zugpferde
              im positivsten Sinne. Nicht, weil sie es „geworden sind". Sondern weil wir systematisch
              mit ihnen gearbeitet haben — mit Respekt vor den Unterschieden, nicht dagegen.
            </p>
            <p className="nala-p">
              Der Schlüssel dafür ist <em style={{ color: "var(--accent-ink)", fontStyle: "normal", fontWeight: 700 }}>klare Kommunikation</em>.
              Mit den Hunden. Mit den Haltern. Mit anderen Schulen. Dieses Prinzip zieht sich durch alles, was wir tun —
              vor Ort, online und im Pro-Bereich.
            </p>

            <div className="fun-facts">
              <span className="fun-fact mono">Jenny ist 24/7 Hund.</span>
              <span className="fun-fact mono">Jenny spricht fließend Mali.</span>
            </div>
            <p className="nala-p">
              Die beiden sind kein Maskottchen — sie sind der Grund, warum diese Hundeschule so
              arbeitet, wie sie arbeitet. Nala und Zuri prägen die Themen des Trainings und
              unterstützen teilweise aktiv — etwa als ruhige Referenzhunde in Sozialkontakt- und
              Begegnungs-Settings. Wer mit einem Malinois aus KNPV-Leistungszucht und einem X-Herder
              aus behördlicher Beschlagnahmung lebt, redet nicht über Theorie.
            </p>

            <div className="nala-links mono">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener">→ Nala & Zuri auf Instagram</a>
            </div>
          </div>
          <div className="nala-images">
            <div className="tile" data-fx="zoom">
              <img src={IMG.nala} alt="Nala · Malinois aus KNPV-Leistungslinie" loading="lazy" decoding="async" />
              <span className="tile-caption">Nala · Malinois · KNPV-Leistungslinie</span>
            </div>
            <div className="tile" data-fx="zoom" style={{ ["--fx-d" as string]: "150ms" }}>
              <img src={IMG.zuri} alt="Zuri · X-Herder aus behördlicher Beschlagnahmung" loading="lazy" decoding="async" />
              <span className="tile-caption">Zuri · X-Herder · aus behördlicher Beschlagnahmung</span>
            </div>
          </div>
        </div>

        <style>{`
          .jenny-grid { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
          .jenny-head { font-size: clamp(32px, 7vw, 76px); line-height: 1.04; letter-spacing: -0.025em; font-weight: 600; margin-bottom: 24px; }
          .jenny-intro { font-size: 18px; line-height: 1.65; color: var(--ink-2); margin-bottom: 20px; max-width: 52ch; font-family: var(--serif); font-weight: 400; }
          .jenny-cv { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin-top: 28px; border-top: 1px solid var(--line-2); }
          .jenny-cv-cell { padding: 20px 16px 20px 0; border-bottom: 1px solid var(--line-2); }
          .jenny-cv-cell:nth-child(2n-1) { border-right: 1px solid var(--line-2); }
          .jenny-cv-cell:nth-child(2n) { padding-left: 20px; }

          .jenny-images { position: relative; display: grid; gap: 12px; min-height: 420px; }
          .jenny-main-img { height: 360px; }
          .jenny-work-img { height: 220px; }
          .jenny-quote-card { background: var(--bg-3); border: 1px solid var(--line-2); padding: 14px 18px; font-family: var(--serif); font-size: 15px; font-weight: 500; color: var(--ink-2); max-width: 280px; transform: rotate(-2deg); }

          .big-quote { margin-top: 80px; padding-top: 64px; border-top: 1px solid var(--line-2); max-width: none; }
          .big-quote blockquote { font-size: clamp(26px, 4.4vw, 52px); line-height: 1.22; letter-spacing: -0.015em; font-weight: 500; color: var(--cream); max-width: 22ch; }
          @media (min-width: 900px) {
            .big-quote { padding-top: 80px; margin-top: 120px; }
            .big-quote blockquote { max-width: 24ch; font-size: clamp(36px, 5vw, 64px); }
          }
          @media (min-width: 1280px) {
            .big-quote blockquote { max-width: 26ch; font-size: clamp(42px, 4.8vw, 72px); }
          }

          .nala-block { margin-top: 80px; padding-top: 64px; border-top: 1px solid var(--line-2); display: grid; grid-template-columns: 1fr; gap: 40px; }
          .nala-head { font-size: clamp(28px, 5vw, 54px); line-height: 1.08; letter-spacing: -0.018em; font-weight: 600; margin-bottom: 28px; }
          .nala-p { font-size: 16px; line-height: 1.6; color: var(--ink-2); margin-bottom: 18px; max-width: 58ch; }
          .nala-links { margin-top: 24px; }
          .fun-facts { display: flex; gap: 10px; flex-wrap: wrap; margin: 4px 0 20px; }
          .fun-fact { border: 1px solid var(--brass); border-radius: 999px; padding: 8px 14px; color: var(--accent-ink); }
          .nala-links a { color: var(--ink); text-decoration: underline; text-decoration-color: var(--omd-yellow); text-decoration-thickness: 2px; text-underline-offset: 3px; }
          .nala-links a:hover { text-decoration-color: var(--ink); }
          .nala-images { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
          .nala-images .tile { height: 260px; }

          @media (min-width: 900px) {
            .jenny-grid { grid-template-columns: 1.1fr 1fr; gap: 80px; }
            .jenny-images { min-height: 620px; }
            .jenny-main-img { position: absolute; top: 0; right: 0; width: 78%; height: 480px; }
            .jenny-work-img { position: absolute; bottom: 0; left: 0; width: 52%; height: 240px; }
            .jenny-quote-card { position: absolute; top: 20px; left: 20px; transform: rotate(-4deg); max-width: 220px; }

            .big-quote { margin-top: 120px; padding-top: 80px; }

            .nala-block { grid-template-columns: 1.2fr 1fr; gap: 64px; margin-top: 120px; padding-top: 80px; }
            .nala-images { grid-template-columns: 1fr 1fr; }
            .nala-images .tile { height: 420px; }
          }
        `}</style>
      </div>
    </section>
  );
}
