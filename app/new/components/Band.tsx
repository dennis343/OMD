const ITEMS = [
  "System statt Zufall",
  "0 % aversive Methoden",
  "Google 5,0 ★",
  "1 400+ begleitete Hunde",
  "Mülheim · Ruhrgebiet · DACH",
  "Drei Wege · Ein System",
  "Präzise statt lauter",
];

export default function Band() {
  const row = (hidden: boolean) => (
    <span aria-hidden={hidden || undefined} style={{ display: "flex", alignItems: "center" }}>
      {ITEMS.map((t) => (
        <span key={t} className="band-item serif">
          {t}
          <span className="band-dot" aria-hidden="true">●</span>
        </span>
      ))}
    </span>
  );

  return (
    <aside className="band" aria-label="oooh my dog! in Kurzform">
      <div className="nm-marquee" style={{ ["--nm-speed" as string]: "38s" }}>
        <div className="nm-track">
          {row(false)}
          {row(true)}
        </div>
      </div>

      <style>{`
        .band { background: var(--omd-yellow); border-top: 1px solid #07071A; border-bottom: 1px solid #07071A; padding: 18px 0; overflow: hidden; }
        .band-item { display: inline-flex; align-items: center; white-space: nowrap; color: #07071A; font-size: clamp(18px, 2.4vw, 28px); font-weight: 700; letter-spacing: -0.015em; }
        .band-dot { font-size: 9px; margin: 0 26px; opacity: 0.55; }
        @media (min-width: 900px) { .band { padding: 24px 0; } }
      `}</style>
    </aside>
  );
}
