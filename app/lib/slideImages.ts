// Kuratierte Unsplash-Stand-ins für den TrainingSlider und die Bildblöcke der
// geteilten Sektions-Komponenten (Offers, Anywhere, Pro). Ersetzt die alten
// picsum.photos-Zufallsbilder. IDs sind identisch mit den in app/new/lib/images.ts
// gegen den Vercel-Image-Optimizer verifizierten Motiven.
// WICHTIG: Stand-ins — vor Livegang durch echtes OMD-Bildmaterial ersetzen.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const POOL = [
  "photo-1548199973-03cce0bbc87b",
  "photo-1568572933382-74d440642117",
  "photo-1583337130417-3346a1be7dee",
  "photo-1601758228041-f3b2795255f1",
  "photo-1444212477490-ca407925329e",
  "photo-1477884213360-7e9d7dcc1e48",
  "photo-1544568100-847a948585b9",
  "photo-1450778869180-41d0601e046e",
  "photo-1601758124510-52d02ddb7cbd",
  "photo-1548767797-d8c844163c4c",
  "photo-1537151625747-768eb6cf92b2",
  "photo-1552053831-71594a27632d",
  "photo-1507146426996-ef05306b995a",
  "photo-1561037404-61cd46aa615b",
  "photo-1530281700549-e82e7bf110d6",
  "photo-1534361960057-19889db9621e",
] as const;

// Deterministische Auswahl pro Seed — jeder Slider bekommt ein eigenes, stabiles Set.
export function slideSrc(seed: string, i: number, w: number): string {
  let h = 0;
  for (let c = 0; c < seed.length; c++) h = (h * 31 + seed.charCodeAt(c)) >>> 0;
  return u(POOL[(h + i) % POOL.length], w);
}

export const OFFERS_IMG = {
  tour: u("photo-1477884213360-7e9d7dcc1e48", 1800),
  local: u("photo-1548199973-03cce0bbc87b", 2000),
} as const;

export const ANYWHERE_IMG = {
  signature: u("photo-1450778869180-41d0601e046e", 1400),
} as const;

export const PRO_IMG = {
  jenny: u("photo-1601758124510-52d02ddb7cbd", 1000),
  video: u("photo-1530281700549-e82e7bf110d6", 1800),
} as const;
