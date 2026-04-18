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
            <div className="brand-sub">Hundetraining · Seit 2018</div>
          </div>
        </a>
        <div className="nav-links">
          <a href="#system">Das System</a>
          <a href="#angebote">Angebote</a>
          <a href="#jenny">Jenny</a>
          <a href="#pro">Für Hundeschulen</a>
          <a href="#stimmen">Stimmen</a>
        </div>
        <button className="nav-cta" onClick={onOpenSelector}>Passendes Angebot finden →</button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
