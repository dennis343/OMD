import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ConsentManager from "./components/ConsentManager";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
const TITLE = "oooh my dog! — Premium-Hundetraining aus Mülheim · Vor Ort, Online (DACH) & für Profis";
const DESCRIPTION =
  "Premium-Hundetraining mit System aus Mülheim an der Ruhr. Lokal im Ruhrgebiet (Vor Ort), digital im gesamten deutschsprachigen Raum (Online, DACH) sowie Pro & Business für Hundeschulen. Klare Methodik von Jennifer Bakir — ohne aversive Werkzeuge.";

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
    "Hundetraining Mülheim",
    "Hundeschule Mülheim an der Ruhr",
    "Hundetraining Ruhrgebiet",
    "Hundetrainer Mülheim",
    "Premium Hundetraining",
    "Online Hundetraining DACH",
    "Videoanalyse Hund",
    "Leinenführigkeit Training",
    "Jagdkontrolle Hund",
    "Leinenaggression Training",
    "Welpentraining Mülheim",
    "Belgischer Schäferhund Training",
    "X-Herder Training",
    "Jennifer Bakir",
    "oooh my dog",
    "Hundeschule Beratung",
    "Pro Case Lab Hundeschule",
    "Hundetraining ohne aversive Werkzeuge",
  ],
  alternates: {
    canonical: "/",
    languages: { "de-DE": "/", "de-AT": "/", "de-CH": "/", "x-default": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "oooh my dog!",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "oooh my dog! Hundetraining mit System" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  category: "Hundetraining",
  creator: "Jennifer Bakir",
  publisher: "oooh my dog!",
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  colorScheme: "light",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}#business`,
  name: "oooh my dog! Hundetraining",
  alternateName: "oooh my dog!",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+49 171 3457959",
  email: "hallo@oooh-my-dog.de",
  image: `${SITE_URL}/og.jpg`,
  logo: `${SITE_URL}/logo.svg`,
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
  geo: { "@type": "GeoCoordinates", latitude: 51.4323, longitude: 6.8748 },
  areaServed: [
    { "@type": "City", name: "Mülheim an der Ruhr" },
    { "@type": "City", name: "Essen" },
    { "@type": "City", name: "Duisburg" },
    { "@type": "City", name: "Oberhausen" },
    { "@type": "City", name: "Düsseldorf" },
    { "@type": "AdministrativeArea", name: "Ruhrgebiet" },
    { "@type": "AdministrativeArea", name: "Nordrhein-Westfalen" },
    { "@type": "Country", name: "Deutschland" },
    { "@type": "Country", name: "Österreich" },
    { "@type": "Country", name: "Schweiz" },
  ],
  serviceType: [
    "Hundetraining",
    "Hundeschule",
    "Online-Hundetraining",
    "Videoanalyse",
    "Pro-Beratung für Hundeschulen",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Angebote · oooh my dog!",
    itemListElement: [
      { "@type": "Offer", name: "Kennenlern-Einzelcoaching · Vor Ort", category: "Vor Ort · Mülheim" },
      { "@type": "Offer", name: "Kennenlern-Einzelcoaching · Online", category: "Online · DACH", price: "49", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Basisgruppen · Orientierung & Führung", category: "Vor Ort" },
      { "@type": "Offer", name: "Exklusivgruppen · Jagdkontrolle / Leinenführigkeit", category: "Vor Ort · Premium" },
      { "@type": "Offer", name: "Signaturprogramm · Reizoffen & führbar", category: "Online · DACH" },
      { "@type": "Offer", name: "oooh my dog! Club · Membership", category: "Online · DACH" },
      { "@type": "Offer", name: "OMD Pro Case Lab", category: "Pro & Business" },
      { "@type": "Offer", name: "Premium Hundeschule System", category: "Pro & Business" },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "48",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/oooh_my_dog/",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#org`,
  name: "oooh my dog!",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/og.jpg`,
  founder: { "@type": "Person", name: "Jennifer Bakir", jobTitle: "Hundetrainerin & Gründerin" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+49-171-3457959",
      contactType: "customer service",
      areaServed: ["DE", "AT", "CH"],
      availableLanguage: ["de"],
      email: "hallo@oooh-my-dog.de",
    },
  ],
  sameAs: ["https://www.instagram.com/oooh_my_dog/"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: "oooh my dog!",
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE_URL}#org` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wir wohnen nicht in Mülheim — kommt ihr für uns überhaupt infrage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Die Säule Online ist genau dafür gebaut. Ob Videoanalyse, Signaturprogramm oder oooh my dog! Club — ihr bekommt dieselbe Methodik digital im gesamten deutschsprachigen Raum (DACH), ohne Anfahrt.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der sinnvollste erste Schritt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entweder das Kennenlern-Einzelcoaching (vor Ort in Mülheim) oder die Online-Variante mit Videoanalyse (49 €). Beides führt zu einer klaren Einschätzung und dem passenden nächsten Schritt — ohne Bindung.",
      },
    },
    {
      "@type": "Question",
      name: "Unser Hund ist reizoffen, unsicher oder schnell überfordert. Ist das bei euch richtig?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das ist unser Schwerpunkt. Wir arbeiten ruhig, klar und systematisch — und bewusst ohne aversive Werkzeuge, auch bei anspruchsvollen Fällen. Jennifer Bakir lebt selbst mit zwei Charakterhunden (Malinois und X-Herder).",
      },
    },
    {
      "@type": "Question",
      name: "Arbeitet ihr auch mit Hundeschulen und anderen Trainer:innen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. In der Säule Pro & Business mit Case Lab (Fallsupervision), Premium Hundeschule System (Strategie & Angebotsarchitektur) und Berufswechsel-Realitätscheck für Menschen vor der beruflichen Neuausrichtung.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet Hundetraining bei oooh my dog!?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digitale Produkte (z. B. Online-Kennenlern 49 €) haben transparente Preise und sind direkt buchbar. Vor-Ort- und B2B-Leistungen werden nach Bedarf individuell besprochen.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Vor Ort · Mülheim", item: `${SITE_URL}/#vor-ort` },
    { "@type": "ListItem", position: 3, name: "Online · DACH", item: `${SITE_URL}/#anywhere` },
    { "@type": "ListItem", position: 4, name: "Pro & Business", item: `${SITE_URL}/#pro` },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}#jennifer-bakir`,
  name: "Jennifer Bakir",
  jobTitle: "Hundetrainerin, Gründerin oooh my dog!",
  worksFor: { "@id": `${SITE_URL}#business` },
  knowsAbout: [
    "Hundetraining",
    "Erwachsenenbildung",
    "Führungskommunikation",
    "Reizoffene Hunde",
    "Jagdverhalten",
    "Belgischer Schäferhund",
    "X-Herder",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.OMD_GTM_ID || "";
  const fbPixelId = process.env.OMD_FB_PIXEL_ID || "";

  return (
    <html lang="de" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Zum Inhalt springen</a>
        {children}
        <ConsentManager gtmId={gtmId} fbPixelId={fbPixelId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </body>
    </html>
  );
}
