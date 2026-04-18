"use client";

import { useState } from "react";
import LegalModal, { type LegalKind } from "./Legal";
import { BOOK_URL, EMAIL_HREF, INSTAGRAM_URL, PHONE_HREF, WA_URL } from "@/app/lib/constants";

type Column = { h: string; items: [string, string][] };

const COLS: Column[] = [
  {
    h: "Vor Ort",
    items: [
      ["Kennenlern-Coaching", BOOK_URL],
      ["Einzelcoaching", WA_URL],
      ["Orientierung & Führung", "#vor-ort"],
      ["Soziales Lernen", "#vor-ort"],
      ["Spezialthemen", "#vor-ort"],
    ],
  },
  {
    h: "24/7",
    items: [
      ["Reizoffen & führbar", "#anywhere"],
      ["Videoanalyse Pro", "#anywhere"],
      ["oooh my dog! Club", "#anywhere"],
      ["Saisonale Sprints", "#anywhere"],
      ["Online-Sprechstunde", "#anywhere"],
    ],
  },
  {
    h: "Pro & Business",
    items: [
      ["OMD Pro Case Lab", "#pro"],
      ["Premium Hundeschule System", "#pro"],
      ["Berufswechsel-Realitätscheck", "#pro"],
    ],
  },
  {
    h: "Über uns",
    items: [
      ["Jenny", "#jenny"],
      ["Methodik", "#methodik"],
      ["Stimmen", "#stimmen"],
      ["FAQ", "#faq"],
      ["Kontakt", "#kontakt"],
    ],
  },
];

export default function Footer() {
  const [legal, setLegal] = useState<LegalKind>(null);

  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--line)", padding: "72px 0 40px" }}>
      <div className="shell">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#top" className="brand">
              <span className="brand-mark" aria-hidden="true">ö</span>
              <div>
                <div className="brand-name">oooh my dog!</div>
                <div className="brand-sub">Hundetraining mit System</div>
              </div>
            </a>
            <p className="foot-about">
              Hundetraining mit System. Vor Ort in Mülheim, digital im gesamten
              deutschsprachigen Raum und im Pro-Bereich für Hundeschulen und Fachkunden.
            </p>
            <div className="mono" style={{ marginTop: 24, color: "var(--ink-3)" }}>
              Mülheim · Ruhrgebiet · DACH digital
            </div>
            <div className="foot-contact">
              <a className="mono" href={PHONE_HREF}>→ +49 171 3457959</a>
              <a className="mono" href={EMAIL_HREF}>→ hallo@oooh-my-dog.de</a>
              <a className="mono" href={WA_URL} target="_blank" rel="noopener">→ WhatsApp</a>
              <a className="mono" href={INSTAGRAM_URL} target="_blank" rel="noopener">→ Instagram</a>
            </div>
          </div>
          {COLS.map((c) => (
            <nav key={c.h} aria-label={c.h}>
              <div className="mono" style={{ color: "var(--brass)", marginBottom: 18 }}>{c.h}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {c.items.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener" : undefined}
                      style={{ fontSize: 13.5, color: "var(--ink-2)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="foot-bottom">
          <span className="mono">© 2026 oooh my dog! · Jennifer Bakir <span style={{ color: "var(--brass)" }}>+</span> Team</span>
          <div className="foot-legal">
            <button className="mono" onClick={() => setLegal("impressum")} type="button">Impressum</button>
            <button className="mono" onClick={() => setLegal("datenschutz")} type="button">Datenschutz</button>
          </div>
        </div>
        <div className="mono foot-tagline">Gestaltet für Menschen, die ihren Hund lieben und ernst nehmen.</div>
      </div>

      <LegalModal open={legal !== null} onClose={() => setLegal(null)} kind={legal} />

      <style>{`
        .foot-grid { display: grid; grid-template-columns: 1fr; gap: 40px; margin-bottom: 48px; }
        .foot-brand { max-width: 46ch; }
        .foot-about { margin-top: 24px; font-size: 14px; line-height: 1.55; color: var(--ink-3); max-width: 38ch; }
        .foot-contact { margin-top: 20px; display: flex; flex-direction: column; gap: 8px; }
        .foot-contact a { color: var(--ink-2); }
        .foot-contact a:hover { color: var(--brass); }
        .foot-bottom { border-top: 1px solid var(--line); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
        .foot-legal { display: flex; gap: 20px; }
        .foot-legal button { background: none; border: none; cursor: pointer; color: var(--ink-3); padding: 0; font-family: var(--mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
        .foot-legal button:hover { color: var(--brass); }
        .foot-tagline { margin-top: 16px; color: var(--ink-4); font-size: 10.5px; }
        @media (min-width: 700px) {
          .foot-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (min-width: 1100px) {
          .foot-grid { grid-template-columns: 1.4fr repeat(4, 1fr); gap: 48px; margin-bottom: 64px; }
        }
      `}</style>
    </footer>
  );
}
