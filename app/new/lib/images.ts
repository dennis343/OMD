// Kuratierte, verifizierte Unsplash-Fotografie für die /new-Konzeptseite.
// Jede ID wurde gegen den Vercel-Image-Optimizer geprüft (Status 200, image/jpeg).
// Aufnahmen von Jenny, Nala & Zuri sind Stand-ins und werden vor Launch durch
// echtes Bildmaterial ersetzt.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  heroBg: u("photo-1548199973-03cce0bbc87b", 2200),
  doorLocal: u("photo-1568572933382-74d440642117", 1000),
  doorOnline: u("photo-1583337130417-3346a1be7dee", 1000),
  doorPro: u("photo-1601758228041-f3b2795255f1", 1000),
  storyTension: u("photo-1444212477490-ca407925329e", 1400),
  storyDawn: u("photo-1477884213360-7e9d7dcc1e48", 1400),
  storyRest: u("photo-1544568100-847a948585b9", 1400),
  jennyMain: u("photo-1450778869180-41d0601e046e", 1400),
  jennyWork: u("photo-1601758124510-52d02ddb7cbd", 1200),
  nala: u("photo-1548767797-d8c844163c4c", 1000),
  zuri: u("photo-1537151625747-768eb6cf92b2", 1000),
  testiGolden: u("photo-1552053831-71594a27632d", 800),
  testiPup: u("photo-1507146426996-ef05306b995a", 800),
  testiYoung: u("photo-1561037404-61cd46aa615b", 800),
  showreel: u("photo-1530281700549-e82e7bf110d6", 1800),
  finalBg: u("photo-1534361960057-19889db9621e", 2200),
} as const;
