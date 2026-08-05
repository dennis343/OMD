"use client";

import { useEffect, useRef, useState } from "react";

type SubItem = { id: string; label: string };
type Group = { id: string; label: string; items: SubItem[] };

// Gruppen = Säulen/Sektionen der Seite, Items = direkt anspringbare Abschnitte.
// Jenny kann jeden Anker als Deep-Link verschicken (z. B. /new#angebot-club).
const GROUPS: Group[] = [
  { id: "alltag", label: "Der Alltag davor", items: [] },
  {
    id: "methodik",
    label: "Das System",
    items: [
      { id: "methodik", label: "Sechs Prinzipien" },
      { id: "entwicklungsmodell", label: "Entwicklungs-Modell" },
    ],
  },
  {
    id: "vor-ort",
    label: "Vor Ort",
    items: [
      { id: "vor-ort-einstieg", label: "Einstieg" },
      { id: "vor-ort-vip", label: "VIP-Einzel" },
      { id: "vor-ort-tour", label: "DACH-Tour" },
      { id: "vor-ort-gruppen", label: "Basisgruppen" },
      { id: "vor-ort-exklusiv", label: "Exklusivgruppen" },
      { id: "vor-ort-pakete", label: "Pakete" },
    ],
  },
  {
    id: "anywhere",
    label: "Online",
    items: [
      { id: "angebot-signatur", label: "Signaturprogramm" },
      { id: "angebot-kennenlern", label: "Online-Kennenlern" },
      { id: "online-standards", label: "Standards" },
      { id: "angebot-videoanalyse", label: "Videoanalyse Pro" },
      { id: "angebot-club", label: "Club" },
      { id: "angebot-live", label: "Live-Sessions" },
      { id: "angebot-kurspakete", label: "Kurspakete" },
      { id: "angebot-sprints", label: "Sprints" },
      { id: "angebot-intensiv", label: "Intensiv" },
      { id: "app-block", label: "App" },
    ],
  },
  {
    id: "pro",
    label: "Pro & Business",
    items: [
      { id: "pro-jenny", label: "Warum Jenny" },
      { id: "pro-module", label: "Module" },
      { id: "pro-referenzen", label: "Referenzen" },
    ],
  },
  { id: "zielgruppe", label: "Ehrliche Einordnung", items: [] },
  { id: "jenny", label: "Über uns", items: [] },
  { id: "stimmen", label: "Stimmen", items: [] },
  { id: "faq", label: "FAQ", items: [] },
  { id: "kontakt", label: "Kontakt", items: [] },
];

// Scroll-Schwelle: Hauptnav (58–68 px) + Subnav-Höhe + Puffer.
const THRESHOLD = 150;

export default function SubNav() {
  const [groupId, setGroupId] = useState<string>("");
  const [itemId, setItemId] = useState<string>("");
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sections = GROUPS.map((g) => ({ id: g.id, el: document.getElementById(g.id) }))
      .filter((x): x is { id: string; el: HTMLElement } => !!x.el);
    const anchors = GROUPS.flatMap((g) =>
      g.items.map((it) => ({ gid: g.id, id: it.id, el: document.getElementById(it.id) }))
    ).filter((x): x is { gid: string; id: string; el: HTMLElement } => !!x.el);

    let raf = 0;
    const update = () => {
      raf = 0;
      let g = "";
      for (const s of sections) {
        if (s.el.getBoundingClientRect().top <= THRESHOLD) g = s.id;
      }
      let it = "";
      for (const a of anchors) {
        if (a.gid === g && a.el.getBoundingClientRect().top <= THRESHOLD) it = a.id;
      }
      setGroupId(g);
      setItemId(it);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Aktives Item im horizontalen Streifen sichtbar halten.
  useEffect(() => {
    if (!itemId || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLAnchorElement>(`a[href="#${itemId}"]`);
    el?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [itemId, groupId]);

  const current = GROUPS.find((g) => g.id === groupId);
  const visible = !!current;

  return (
    <div className={`subnav ${visible ? "is-visible" : ""}`} aria-hidden={!visible || undefined}>
      <div className="shell subnav-inner">
        <span className="subnav-group mono">
          <span className="subnav-dash" aria-hidden="true" />
          {current?.label ?? ""}
        </span>
        {current && current.items.length > 0 && (
          <div className="subnav-items" ref={listRef} role="navigation" aria-label={`Abschnitte: ${current.label}`}>
            {current.items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={`subnav-item mono ${itemId === it.id ? "is-active" : ""}`}
                aria-current={itemId === it.id ? "true" : undefined}
                tabIndex={visible ? 0 : -1}
              >
                {it.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .subnav {
          position: fixed;
          top: 58px;
          left: 0;
          right: 0;
          z-index: 49;
          background: color-mix(in oklab, var(--bg) 88%, transparent);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--line);
          transform: translateY(-110%);
          transition: transform .35s cubic-bezier(0.22, 1, 0.36, 1);
          visibility: hidden;
        }
        .subnav.is-visible { transform: translateY(0); visibility: visible; }
        .subnav-inner {
          display: flex;
          align-items: stretch;
          gap: 18px;
          height: 46px;
        }
        .subnav-group {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--accent-ink);
          font-weight: 700;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .subnav-dash { width: 18px; height: 2px; background: var(--omd-yellow); display: inline-block; }
        .subnav-items {
          display: flex;
          align-items: stretch;
          gap: 2px;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          mask-image: linear-gradient(90deg, transparent, #000 16px, #000 calc(100% - 16px), transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 16px, #000 calc(100% - 16px), transparent);
        }
        .subnav-items::-webkit-scrollbar { display: none; }
        .subnav-item {
          display: inline-flex;
          align-items: center;
          padding: 0 12px;
          min-height: 44px;
          white-space: nowrap;
          color: var(--ink-3);
          border-bottom: 2px solid transparent;
          transition: color .2s, border-color .2s;
        }
        .subnav-item:hover { color: var(--ink); }
        .subnav-item.is-active { color: var(--ink); border-bottom-color: var(--omd-yellow); font-weight: 700; }

        /* Anker-Offsets: Hauptnav + Subnav */
        body section[id],
        body [id^="vor-ort-"],
        body [id^="pro-"],
        body [id^="angebot-"],
        body #entwicklungsmodell,
        body #online-standards,
        body #app-block { scroll-margin-top: 116px; }

        @media (min-width: 380px) { .subnav { top: 62px; } }
        @media (min-width: 1024px) {
          .subnav { top: 68px; }
          body section[id],
          body [id^="vor-ort-"],
          body [id^="pro-"],
          body [id^="angebot-"],
          body #entwicklungsmodell,
          body #online-standards,
          body #app-block { scroll-margin-top: 128px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .subnav { transition: none; }
        }
      `}</style>
    </div>
  );
}
