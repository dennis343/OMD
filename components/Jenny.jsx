// Jenny.jsx — Über Jennifer Bakir mit Nala & Sury Story
function Jenny() {
  return (
    <section id="jenny" className="sec-pad" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="shell">

        <div className="jenny-grid">
          <div>
            <div className="mono" style={{ color: "var(--brass)", marginBottom: 24 }}>§ Über uns · Hinter dem System</div>
            <h2 className="serif jenny-head">
              Jenny hat Hunde gelernt —
              <br />
              und <em style={{ color: "var(--brass)" }}>Menschen führen</em> schon vorher.
            </h2>

            <p className="jenny-intro">
              13 Jahre Führungsarbeit in der Kommunikationsbranche. Studium der Erwachsenen­bildung.
              Und seit vielen Jahren Hundetrainerin mit Fokus auf anspruchsvolle Fälle. Das
              zusammen ist kein Zufall — es ist das Fundament von oooh my dog!
            </p>

            <div className="jenny-cv">
              {[
                ["Führung", "13 Jahre · Kommunikationsbranche"],
                ["Didaktik", "Studium Erwachsenenbildung"],
                ["Training", "1 400+ begleitete Hunde"],
                ["Methode", "Ohne aversive Werkzeuge"],
              ].map(([k, v], i) => (
                <div key={i} className="jenny-cv-cell">
                  <div className="mono" style={{ color: "var(--brass)", marginBottom: 6 }}>{k}</div>
                  <div style={{ fontSize: 14.5, color: "var(--ink-2)" }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="https://portal.oooh-my-dog.de/einzeltraining/2" target="_blank" rel="noopener">
                Jenny kennenlernen <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#pro">Für Hundeschulen →</a>
            </div>
          </div>

          <div className="jenny-images">
            <div className="tile jenny-main-img">
              <img src="https://picsum.photos/seed/omd-jenny/900/1200" alt="Jennifer Bakir · Portrait" loading="lazy" />
              <span className="tile-caption">Jenny · Portrait</span>
            </div>
            <div className="tile jenny-work-img" style={{ border: "1px solid var(--brass)" }}>
              <img src="https://picsum.photos/seed/omd-jenny-work/900/700" alt="Jenny bei der Arbeit" loading="lazy" />
              <span className="tile-caption">Arbeitssituation</span>
            </div>
            <div className="jenny-quote-card">
              „Ich trainiere lieber präzise, als lauter."
            </div>
          </div>
        </div>

        {/* Emotional quote — 13 Jahre */}
        <figure className="big-quote">
          <div className="mono" style={{ color: "var(--brass)", marginBottom: 16 }}>§ Warum das wichtig ist</div>
          <blockquote className="serif">
            „Wir haben im Durchschnitt <em style={{ color: "var(--brass)" }}>13 Jahre</em> mit unseren Hunden.
            Es wäre doch schön, wenn jeder einzelne Tag zählt — und mit einem guten Gefühl gelebt wird."
          </blockquote>
          <figcaption className="mono" style={{ marginTop: 20 }}>— Jennifer Bakir</figcaption>
        </figure>

        {/* Nala & Sury story */}
        <div className="nala-block">
          <div className="nala-text">
            <div className="mono" style={{ color: "var(--brass)", marginBottom: 16 }}>§ Nala & Sury</div>
            <h3 className="serif nala-head">
              Zwei belgische Schäferhunde —
              <br />
              <span style={{ color: "var(--ink-3)" }}>und der Grund, warum dieses System so klar ist.</span>
            </h3>

            <p className="nala-p">
              <strong style={{ color: "var(--cream)", fontWeight: 400 }}>Nala</strong> war mein erster eigener
              belgischer Schäferhund — reizoffen, hoch aufmerksam, auf Leistung gezüchtet. Heute teile ich
              mein Leben mit ihr und mit <strong style={{ color: "var(--cream)", fontWeight: 400 }}>Sury</strong>,
              meinem jüngsten Hund, gleiche Rasse, gleiche Genetik, gleicher Typ.
            </p>
            <p className="nala-p">
              Beide sind keine Anfängerhunde. Sie sind ehrlich, anspruchsvoll und lassen sich nichts erzählen.
              Und trotzdem sind sie heute voll familientauglich, verträglich, alltagstauglich — Zugpferde
              im positivsten Sinne. Nicht, weil sie es „geworden sind". Sondern weil wir systematisch
              mit ihnen gearbeitet haben.
            </p>
            <p className="nala-p">
              Der Schlüssel dafür ist <em style={{ color: "var(--brass)", fontStyle: "italic" }}>klare Kommunikation</em>.
              Mit den Hunden. Mit den Haltern. Mit anderen Schulen. Dieses Prinzip zieht sich durch alles, was wir tun —
              vor Ort, 24/7 und im Pro-Bereich.
            </p>

            <div className="nala-links mono">
              <a href="https://www.instagram.com/oooh_my_dog/" target="_blank" rel="noopener">→ Nala & Sury auf Instagram</a>
            </div>
          </div>
          <div className="nala-images">
            <div className="tile">
              <img src="https://picsum.photos/seed/omd-nala/900/1100" alt="Nala · belgischer Schäferhund" loading="lazy" />
              <span className="tile-caption">Nala · Belgischer Schäferhund</span>
            </div>
            <div className="tile">
              <img src="https://picsum.photos/seed/omd-sury/900/1100" alt="Sury · belgischer Schäferhund" loading="lazy" />
              <span className="tile-caption">Sury · Belgischer Schäferhund</span>
            </div>
          </div>
        </div>

        <style>{`
          .jenny-grid {
            display: grid; grid-template-columns: 1fr; gap: 40px;
            align-items: center;
          }
          .jenny-head {
            font-size: clamp(32px, 7vw, 76px);
            line-height: 0.98; letter-spacing: -0.03em; font-weight: 340;
            margin-bottom: 24px;
          }
          .jenny-intro {
            font-size: 17px; line-height: 1.55; color: var(--ink-2);
            margin-bottom: 20px; max-width: 52ch;
            font-family: var(--serif); font-weight: 300;
          }
          .jenny-cv {
            display: grid; grid-template-columns: 1fr 1fr; gap: 0;
            margin-top: 28px; border-top: 1px solid var(--line-2);
          }
          .jenny-cv-cell {
            padding: 20px 16px 20px 0;
            border-bottom: 1px solid var(--line-2);
          }
          .jenny-cv-cell:nth-child(2n-1) { border-right: 1px solid var(--line-2); }
          .jenny-cv-cell:nth-child(2n) { padding-left: 20px; }

          .jenny-images {
            position: relative;
            display: grid; gap: 12px;
            min-height: 420px;
          }
          .jenny-main-img { height: 360px; }
          .jenny-work-img { height: 220px; }
          .jenny-quote-card {
            background: var(--bg-3); border: 1px solid var(--line-2);
            padding: 14px 18px;
            font-family: var(--serif); font-size: 15px; font-style: italic;
            color: var(--ink-2);
            max-width: 280px;
            transform: rotate(-2deg);
          }

          .big-quote {
            margin-top: 80px; padding-top: 64px;
            border-top: 1px solid var(--line-2);
            max-width: 24ch;
          }
          .big-quote blockquote {
            font-size: clamp(28px, 5vw, 52px);
            line-height: 1.15; letter-spacing: -0.018em; font-weight: 340;
            color: var(--cream);
          }

          .nala-block {
            margin-top: 80px; padding-top: 64px;
            border-top: 1px solid var(--line-2);
            display: grid; grid-template-columns: 1fr; gap: 40px;
          }
          .nala-head {
            font-size: clamp(28px, 5vw, 54px);
            line-height: 1.04; letter-spacing: -0.022em; font-weight: 340;
            margin-bottom: 28px;
          }
          .nala-p {
            font-size: 16px; line-height: 1.6; color: var(--ink-2);
            margin-bottom: 18px; max-width: 58ch;
          }
          .nala-links { margin-top: 24px; }
          .nala-links a { color: var(--brass); }
          .nala-images {
            display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
          }
          .nala-images .tile { height: 260px; }

          @media (min-width: 900px) {
            .jenny-grid {
              grid-template-columns: 1.1fr 1fr; gap: 80px;
            }
            .jenny-images {
              min-height: 620px;
            }
            .jenny-main-img {
              position: absolute; top: 0; right: 0;
              width: 78%; height: 480px;
            }
            .jenny-work-img {
              position: absolute; bottom: 0; left: 0;
              width: 52%; height: 240px;
            }
            .jenny-quote-card {
              position: absolute; top: 20px; left: 20px;
              transform: rotate(-4deg);
              max-width: 220px;
            }

            .big-quote { margin-top: 120px; padding-top: 80px; }

            .nala-block {
              grid-template-columns: 1.2fr 1fr; gap: 64px;
              margin-top: 120px; padding-top: 80px;
            }
            .nala-images { grid-template-columns: 1fr 1fr; }
            .nala-images .tile { height: 420px; }
          }
        `}</style>
      </div>
    </section>
  );
}

window.Jenny = Jenny;
