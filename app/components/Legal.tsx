"use client";

import { useEffect } from "react";

export type LegalKind = "impressum" | "datenschutz" | null;

type LegalModalProps = {
  open: boolean;
  onClose: () => void;
  kind: LegalKind;
};

export default function LegalModal({ open, onClose, kind }: LegalModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const isImpressum = kind === "impressum";
  const titleId = "legal-title";

  return (
    <div className="legal-overlay" onClick={onClose} role="presentation">
      <div
        className="legal-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button className="legal-close mono" onClick={onClose} aria-label="Dialog schließen" type="button">
          × Schließen
        </button>

        {isImpressum ? <Impressum titleId={titleId} /> : <Datenschutz titleId={titleId} />}
      </div>

      <style>{`
        .legal-overlay {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(12, 10, 8, 0.86);
          backdrop-filter: blur(6px);
          display: flex; align-items: flex-start; justify-content: center;
          padding: 40px 16px;
          overflow-y: auto;
          animation: fadeIn .2s ease both;
        }
        .legal-modal {
          background: var(--bg);
          border: 1px solid var(--line-2);
          max-width: 780px; width: 100%;
          padding: 48px 28px 40px;
          position: relative;
          animation: fadeUp .25s ease both;
        }
        .legal-close {
          position: absolute; top: 16px; right: 20px;
          background: none; border: none;
          color: var(--ink-3); cursor: pointer;
          padding: 4px 8px;
        }
        .legal-close:hover { color: var(--brass); }
        .legal-modal h2 { font-family: var(--serif); font-weight: 340; font-size: clamp(26px, 4vw, 42px); letter-spacing: -0.022em; line-height: 1.08; margin-bottom: 28px; }
        .legal-modal h3 { font-family: var(--mono); color: var(--brass); font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin: 28px 0 10px; }
        .legal-modal p, .legal-modal ul, .legal-modal li { font-size: 14.5px; line-height: 1.6; color: var(--ink-2); margin-bottom: 8px; }
        .legal-modal ul { list-style: none; padding-left: 0; }
        .legal-modal a { color: var(--brass); }
        @media (min-width: 700px) {
          .legal-modal { padding: 56px 48px 48px; }
        }
      `}</style>
    </div>
  );
}

function Impressum({ titleId }: { titleId: string }) {
  return (
    <>
      <div className="mono" style={{ color: "var(--brass)", marginBottom: 14 }}>§ Rechtliches</div>
      <h2 id={titleId} className="serif">Impressum</h2>

      <h3>Angaben gemäß § 5 TMG</h3>
      <ul>
        <li>Jennifer Bakir</li>
        <li>oooh my dog!</li>
        <li>Beckstadtstr. 19</li>
        <li>45472 Mülheim an der Ruhr</li>
        <li>Deutschland</li>
      </ul>

      <h3>Kontakt</h3>
      <ul>
        <li>Telefon: <a href="tel:+4917134579599">+49 171 3457959</a></li>
        <li>E-Mail: <a href="mailto:hallo@oooh-my-dog.de">hallo@oooh-my-dog.de</a></li>
      </ul>

      <h3>Gewerbeerlaubnis</h3>
      <p>
        Erlaubnis zur gewerbsmäßigen Ausbildung oder Anleitung zur Ausbildung von Hunden
        nach § 11 Abs. 1 Satz 1 Nr. 8f TierSchG i.V.m. § 11 GewO.
      </p>
      <p>Erteilt am 05.07.2024 durch das Veterinäramt Mülheim an der Ruhr.</p>

      <h3>Zuständige Aufsichtsbehörde</h3>
      <ul>
        <li>Veterinäramt Mülheim an der Ruhr</li>
        <li>Leineweberstraße 18–20</li>
        <li>45468 Mülheim an der Ruhr</li>
      </ul>

      <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
      <p>Jennifer Bakir · Beckstadtstr. 19 · 45472 Mülheim an der Ruhr</p>

      <h3>Haftungshinweis</h3>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
        externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
        verantwortlich.
      </p>
    </>
  );
}

function Datenschutz({ titleId }: { titleId: string }) {
  return (
    <>
      <div className="mono" style={{ color: "var(--brass)", marginBottom: 14 }}>§ Rechtliches</div>
      <h2 id={titleId} className="serif">Datenschutz­erklärung</h2>

      <h3>1. Verantwortlicher</h3>
      <p>
        Jennifer Bakir · oooh my dog! · Beckstadtstr. 19 · 45472 Mülheim an der Ruhr ·
        <a href="mailto:hallo@oooh-my-dog.de"> hallo@oooh-my-dog.de</a>
      </p>

      <h3>2. Erhebung allgemeiner Informationen</h3>
      <p>
        Beim Aufruf dieser Website werden durch den Browser automatisch Informationen an den
        Server übermittelt und temporär in Server-Logfiles gespeichert (IP-Adresse, Datum, Uhrzeit,
        aufgerufene Seite, Browsertyp). Diese Daten werden zur Sicherstellung des technischen
        Betriebs und zur Abwehr von Angriffen verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <h3>3. Kontaktaufnahme</h3>
      <p>
        Bei Kontaktaufnahme per E-Mail, Telefon oder über Buchungs­formulare werden die
        übermittelten Angaben ausschließlich zur Bearbeitung des Anliegens verwendet
        (Art. 6 Abs. 1 lit. b DSGVO). Daten werden gelöscht, sobald die Bearbeitung abgeschlossen
        ist und keine gesetzlichen Aufbewahrungs­pflichten entgegenstehen.
      </p>

      <h3>4. Buchungs- und Zahlungs­abwicklung</h3>
      <p>
        Buchungen laufen über unser Kundenportal. Dabei verarbeitete Daten dienen der Vertrags­erfüllung
        (Art. 6 Abs. 1 lit. b DSGVO) und werden gemäß gesetzlicher Aufbewahrungs­fristen gespeichert.
      </p>

      <h3>5. Externe Inhalte</h3>
      <p>
        Eingebundene Inhalte wie Instagram, WhatsApp oder Kartenmaterial können Verbindungen zu
        Dritt­servern aufbauen. Eine Aktivierung erfolgt erst durch Klick auf den jeweiligen Link.
      </p>

      <h3>6. Ihre Rechte</h3>
      <p>
        Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch
        (Art. 15–21 DSGVO). Beschwerderecht bei einer Aufsichtsbehörde. Anfragen an:
        <a href="mailto:hallo@oooh-my-dog.de"> hallo@oooh-my-dog.de</a>.
      </p>

      <h3>7. Aktualität</h3>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig. Anpassungen aufgrund geänderter Rechtslage
        oder Leistungen bleiben vorbehalten.
      </p>
    </>
  );
}
