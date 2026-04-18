// Nav.jsx — sticky top navigation
const { useState, useEffect } = React;

function Nav({ onOpenSelector }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav" style={scrolled ? { boxShadow: "0 1px 0 rgba(255,255,255,0.02)" } : {}}>
      <div className="shell nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">ö</span>
          <div>
            <div className="brand-name">oooh my dog!</div>
            <div className="brand-sub">Hundetraining mit System</div>
          </div>
        </a>
        <div className="nav-links">
          <a href="#vor-ort">Vor Ort</a>
          <a href="#anywhere">24/7</a>
          <a href="#pro">Pro & Business</a>
          <a href="#jenny">Über uns</a>
          <a href="#stimmen">Stimmen</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <button className="nav-cta" onClick={onOpenSelector}>Kennenlernen →</button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
