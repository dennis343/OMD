import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://oooh-my-dog.de";
const TITLE = "oooh my dog! — Hundetraining mit System. Vor Ort, 24/7 und für Profis.";
const DESCRIPTION =
  "Premium-Hundetraining aus Mülheim: lokal im Ruhrgebiet, digital im gesamten deutschsprachigen Raum (24/7) und als Pro & Business für Hundeschulen. Klarheit statt Chaos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · oooh my dog!",
  },
  description: DESCRIPTION,
  applicationName: "oooh my dog!",
  authors: [{ name: "Jennifer Bakir" }],
  keywords: [
    "Hundetraining",
    "Hundeschule Mülheim",
    "Hundetraining Ruhrgebiet",
    "Premium Hundetraining",
    "Online Hundetraining",
    "DACH",
    "Jennifer Bakir",
    "oooh my dog",
    "Hundetraining Pro",
    "Hundeschule Beratung",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "oooh my dog!",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#16130f",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#business`,
  name: "oooh my dog!",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+49 171 3457959",
  email: "hallo@oooh-my-dog.de",
  image: `${SITE_URL}/og.jpg`,
  priceRange: "€€€",
  founder: { "@type": "Person", name: "Jennifer Bakir" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Beckstadtstr. 19",
    postalCode: "45472",
    addressLocality: "Mülheim an der Ruhr",
    addressRegion: "NRW",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Mülheim an der Ruhr" },
    { "@type": "AdministrativeArea", name: "Ruhrgebiet" },
    { "@type": "Country", name: "Deutschland" },
    { "@type": "Country", name: "Österreich" },
    { "@type": "Country", name: "Schweiz" },
  ],
  sameAs: ["https://www.instagram.com/oooh_my_dog/"],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#org`,
  name: "oooh my dog!",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+49-171-3457959",
      contactType: "customer service",
      areaServed: "DE",
      availableLanguage: ["de"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Zum Inhalt springen</a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
