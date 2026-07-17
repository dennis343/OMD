"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "omd-sticky-help-closed";
const HIDE_FOR_DAYS = 14;
const SHOW_AFTER_SCROLL = 0.15;

type Props = { onOpenSelector: () => void; selectorOpen: boolean };

function isDismissed(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const ts = Number(raw);
    if (!Number.isFinite(ts)) return false;
    return Date.now() - ts < HIDE_FOR_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

export default function StickyHelp({ onOpenSelector, selectorOpen }: Props) {
  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    if (isDismissed()) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = window.scrollY;
      const total = doc.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = scrolled / total;
      setVisible(progress > SHOW_AFTER_SCROLL);

      const finalSection = document.getElementById("kontakt");
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        setNearFooter(rect.top < window.innerHeight * 0.8);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (selectorOpen || nearFooter) return null;

  return (
    <>
      <div
        className={`sticky-help ${visible ? "is-visible" : ""}`}
        aria-hidden={!visible}
      >
        <button
          className="sticky-help-main"
          onClick={onOpenSelector}
          type="button"
          aria-label="Passen wir zueinander?"
        >
          <span className="sticky-help-dot" aria-hidden="true" />
          <span className="sticky-help-text">
            <span className="sticky-help-eyebrow">2 Minuten</span>
            <span className="sticky-help-label">Passen wir zueinander?</span>
          </span>
          <span className="sticky-help-arrow" aria-hidden="true">→</span>
        </button>
        <button
          className="sticky-help-close"
          onClick={close}
          type="button"
          aria-label="Einblendung schließen"
        >
          ×
        </button>
      </div>

      <style>{`
        .sticky-help {
          position: fixed;
          z-index: 80;
          left: 12px;
          right: 12px;
          bottom: calc(12px + env(safe-area-inset-bottom, 0px));
          display: flex;
          align-items: stretch;
          gap: 8px;
          background: var(--bg);
          border: 1px solid var(--line-2);
          border-radius: 999px;
          padding: 8px 8px 8px 16px;
          box-shadow: 0 10px 32px rgba(0,0,0,0.32);
          transform: translateY(calc(100% + 32px));
          opacity: 0;
          transition: transform .35s ease, opacity .35s ease;
          pointer-events: none;
        }
        .sticky-help.is-visible {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        .sticky-help-main {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 6px 10px 2px;
          min-height: 44px;
          background: transparent;
          color: var(--cream);
          min-width: 0;
          text-align: left;
        }
        .sticky-help-dot {
          flex-shrink: 0;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--omd-yellow);
          box-shadow: 0 0 0 0 color-mix(in oklab, var(--omd-yellow) 60%, transparent);
          animation: stickyPulse 2.4s ease-in-out infinite;
        }
        @keyframes stickyPulse {
          0%, 100% { box-shadow: 0 0 0 0 color-mix(in oklab, var(--omd-yellow) 60%, transparent); }
          50% { box-shadow: 0 0 0 6px rgba(228,255,0,0); }
        }
        .sticky-help-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          min-width: 0;
        }
        .sticky-help-eyebrow {
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink);
          font-weight: 700;
          margin-bottom: 4px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .sticky-help-eyebrow::before {
          content: "";
          display: inline-block;
          width: 14px; height: 2px;
          background: var(--omd-yellow);
          border-radius: 2px;
        }
        .sticky-help-label {
          font-family: var(--serif);
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--cream);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .sticky-help-arrow {
          flex-shrink: 0;
          font-family: var(--sans);
          color: var(--ink);
          font-weight: 700;
          font-size: 18px;
          transition: transform .2s;
        }
        .sticky-help-main:hover .sticky-help-arrow {
          transform: translateX(3px);
        }
        .sticky-help-close {
          flex-shrink: 0;
          width: 44px; height: 44px;
          border-radius: 50%;
          background: var(--bg-2);
          color: var(--ink-2);
          font-size: 22px;
          line-height: 1;
          font-weight: 500;
          display: grid; place-items: center;
          transition: color .15s, background .15s;
        }
        .sticky-help-close:hover { color: var(--cream); background: var(--bg-3); }

        @media (min-width: 640px) {
          .sticky-help {
            left: auto;
            right: 20px;
            bottom: 20px;
            max-width: 380px;
            padding: 8px 8px 8px 18px;
          }
          .sticky-help-label { font-size: 16px; }
          .sticky-help-eyebrow { font-size: 11px; }
        }
      `}</style>
    </>
  );
}
