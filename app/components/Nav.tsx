"use client";

import { useEffect, useState } from "react";
import { BOOK_URL, EMAIL_HREF, PHONE_HREF } from "@/app/lib/constants";

type NavProps = { onOpenSelector: () => void };

const LINKS = [
  { href: "#vor-ort", label: "Vor Ort" },
  { href: "#anywhere", label: "Online" },
  { href: "#pro", label: "Pro & Business" },
  { href: "#jenny", label: "Über uns" },
  { href: "#stimmen", label: "Stimmen" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav({ onOpenSelector }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav" style={scrolled ? { boxShadow: "0 1px 0 rgba(255,255,255,0.02)" } : undefined} aria-label="Hauptnavigation">
        <div className="shell nav-inner">
          <a href="#top" className="brand" onClick={close} aria-label="oooh my dog! — zur Startseite">
            <img src="/logo.svg" alt="" aria-hidden="true" className="brand-logo" width={56} height={34} />
            <div>
              <div className="brand-name">oooh my dog!</div>
              <div className="brand-sub">Hundetraining mit System</div>
            </div>
          </a>

          <div className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>

          <button className="nav-cta nav-cta-desktop" onClick={onOpenSelector} type="button">
            Kennenlernen →
          </button>

          <button
            className="nav-burger"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span className={`burger-bar ${menuOpen ? "b1-open" : ""}`} />
            <span className={`burger-bar ${menuOpen ? "b2-open" : ""}`} />
            <span className={`burger-bar ${menuOpen ? "b3-open" : ""}`} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        onClick={close}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
          <div className="mono" style={{ color: "var(--brass)", marginBottom: 24 }}>Navigation</div>
          <ul className="mobile-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="mobile-cta-group">
            <button
              className="btn btn-primary"
              onClick={() => {
                close();
                onOpenSelector();
              }}
              style={{ width: "100%", justifyContent: "center" }}
              type="button"
            >
              Passendes Angebot finden <span className="arrow" aria-hidden="true">→</span>
            </button>
            <a
              className="btn btn-ghost"
              href={BOOK_URL}
              target="_blank"
              rel="noopener"
              onClick={close}
              style={{ width: "100%", justifyContent: "center" }}
            >
              Kennenlern-Coaching buchen →
            </a>
          </div>

          <div className="mobile-contact">
            <div className="mono" style={{ color: "var(--brass)", marginBottom: 10 }}>Direkt</div>
            <a href={PHONE_HREF} style={{ display: "block", fontSize: 15, color: "var(--ink-2)", marginBottom: 6 }}>
              0171 / 345 795 9
            </a>
            <a href={EMAIL_HREF} style={{ display: "block", fontSize: 15, color: "var(--ink-2)" }}>
              hallo@oooh-my-dog.de
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
