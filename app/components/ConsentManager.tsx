"use client";

import { useCallback, useEffect, useState } from "react";

type Props = {
  gtmId?: string;
  fbPixelId?: string;
};

type ConsentState = "accept" | "essential" | null;

const STORAGE_KEY = "omd-consent-v1";

function readConsent(): ConsentState {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "accept" || v === "essential") return v;
  } catch {}
  return null;
}

function persist(state: Exclude<ConsentState, null>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, state);
    window.localStorage.setItem(`${STORAGE_KEY}-ts`, String(Date.now()));
  } catch {}
}

function injectGtm(id: string) {
  if (typeof window === "undefined" || !id) return;
  if (document.getElementById("omd-gtm")) return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.id = "omd-gtm";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}

function injectFbPixel(id: string) {
  if (typeof window === "undefined" || !id) return;
  if (document.getElementById("omd-fbq")) return;

  const w = window as unknown as {
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...a: unknown[]) => void;
      queue?: unknown[][];
      push?: unknown;
      loaded?: boolean;
      version?: string;
    };
    _fbq?: unknown;
  };

  const n: NonNullable<typeof w.fbq> = function (this: unknown, ...args: unknown[]) {
    if (n.callMethod) n.callMethod.apply(this, args);
    else (n.queue = n.queue || []).push(args);
  } as unknown as NonNullable<typeof w.fbq>;
  n.queue = [];
  n.loaded = true;
  n.version = "2.0";
  w.fbq = n;
  if (!w._fbq) w._fbq = n;

  const s = document.createElement("script");
  s.id = "omd-fbq";
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);

  n("init", id);
  n("track", "PageView");
}

export default function ConsentManager({ gtmId, fbPixelId }: Props) {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    setConsent(existing);
    setReady(true);
  }, []);

  useEffect(() => {
    if (consent !== "accept") return;
    if (gtmId) injectGtm(gtmId);
    if (fbPixelId) injectFbPixel(fbPixelId);
  }, [consent, gtmId, fbPixelId]);

  const accept = useCallback(() => {
    persist("accept");
    setConsent("accept");
  }, []);
  const essential = useCallback(() => {
    persist("essential");
    setConsent("essential");
  }, []);

  if (!ready || consent !== null) {
    return (
      <>
        {consent === "accept" && gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}`}
              height={0}
              width={0}
              style={{ display: "none", visibility: "hidden" }}
              title="GTM"
            />
          </noscript>
        )}
      </>
    );
  }

  return (
    <div role="dialog" aria-modal="false" aria-label="Cookie-Einstellungen" className="consent-banner">
      <div className="consent-inner">
        <div className="consent-text">
          <div className="mono" style={{ color: "var(--omd-yellow)", marginBottom: 8 }}>Cookies &amp; Tracking</div>
          <p>
            Wir nutzen Cookies für eine bessere Website-Erfahrung sowie optionale Statistik- und Marketing-Tools.
            Nur mit eurer Zustimmung werden Google Tag Manager und Facebook-Pixel geladen. Details in der
            {" "}<a href="#kontakt">Datenschutzerklärung</a>.
          </p>
        </div>
        <div className="consent-actions">
          <button type="button" className="btn btn-ghost consent-btn-ghost" onClick={essential}>
            Nur essenziell
          </button>
          <button type="button" className="btn btn-primary consent-btn-accept" onClick={accept}>
            Alle akzeptieren
          </button>
        </div>
      </div>
      <style>{`
        .consent-banner {
          position: fixed; left: 16px; right: 16px; bottom: 16px;
          z-index: 250;
          background: var(--bg-3);
          border: 1px solid var(--omd-yellow);
          box-shadow: 0 20px 60px -20px rgba(0,0,0,0.6);
          padding: 20px 22px;
          display: grid;
          gap: 14px;
          animation: fadeUp .35s ease both;
          max-width: 1100px;
          margin: 0 auto;
        }
        .consent-inner { display: grid; gap: 16px; }
        .consent-text p { font-size: 13.5px; line-height: 1.55; color: var(--ink-2); max-width: 68ch; }
        .consent-text a { color: var(--omd-yellow); text-decoration: underline; text-underline-offset: 3px; }
        .consent-actions { display: flex; gap: 10px; flex-wrap: wrap; }
        .consent-btn-accept { background: var(--omd-yellow); color: #0a0a0a; }
        .consent-btn-accept:hover { background: var(--omd-yellow); filter: brightness(0.92); }
        .consent-btn-ghost { border-color: var(--line-2); }
        @media (min-width: 760px) {
          .consent-banner { left: auto; right: 20px; bottom: 20px; max-width: 720px; padding: 22px 26px; }
          .consent-inner { grid-template-columns: 1fr auto; align-items: center; gap: 24px; }
          .consent-actions { justify-content: flex-end; }
        }
      `}</style>
    </div>
  );
}
