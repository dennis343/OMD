// Nav.jsx — sticky top navigation, mobile-first burger menu
const { useState, useEffect } = React;

function Nav({ onOpenSelector }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { href: "#vor-ort", label: "Vor Ort" },
    { href: "#anywhere", label: "24/7" },
    { href: "#pro", label: "Pro & Business" },
    { href: "#jenny", label: "Über uns" },
    { href: "#stimmen", label: "Stimmen" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav" style={scrolled ? { boxShadow: "0 1px 0 rgba(255,255,255,0.02)" } : {}}>
        <div className="shell nav-inner">
          <a href="#top" className="brand" onClick={close}>
            <span className="brand-mark">ö</span>
            <div>
              <div className="brand-name">oooh my dog!</div>
              <div className="brand-sub">Hundetraining mit System</div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="nav-cta nav-cta-desktop" onClick={onOpenSelector}>
            Kennenlernen →
          </button>

          {/* Mobile burger */}
          <button
            className="nav-burger"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`burger-bar ${menuOpen ? "b1-open" : ""}`} />
            <span className={`burger-bar ${menuOpen ? "b2-open" : ""}`} />
            <span className={`burger-bar ${menuOpen ? "b3-open" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile off-canvas overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} onClick={close}>
        <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
          <div className="mono" style={{ color: "var(--brass)", marginBottom: 24 }}>§ Navigation</div>
          <ul className="mobile-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="mobile-cta-group">
            <button className="btn btn-primary" onClick={() => { close(); onOpenSelector(); }} style={{ width: "100%", justifyContent: "center" }}>
              Passendes Angebot finden <span className="arrow">→</span>
            </button>
            <a className="btn btn-ghost" href="mailto:hallo@oooh-my-dog.de" onClick={close} style={{ width: "100%", justifyContent: "center" }}>
              Kennenlern-Coaching buchen →
            </a>
          </div>

          <div className="mobile-contact">
            <div className="mono" style={{ color: "var(--brass)", marginBottom: 10 }}>§ Direkt</div>
            <a href="tel:+4917134579599" style={{ display: "block", fontSize: 15, color: "var(--ink-2)", marginBottom: 6 }}>0171 / 345 795 9</a>
            <a href="mailto:hallo@oooh-my-dog.de" style={{ display: "block", fontSize: 15, color: "var(--ink-2)" }}>hallo@oooh-my-dog.de</a>
          </div>
        </div>
      </div>
    </>
  );
}

window.Nav = Nav;
