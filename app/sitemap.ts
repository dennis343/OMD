import type { MetadataRoute } from "next";

const SITE_URL = "https://oooh-my-dog.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const anchors = [
    "",
    "#vor-ort",
    "#anywhere",
    "#pro",
    "#saeulen",
    "#zielgruppe",
    "#methodik",
    "#finder",
    "#stimmen",
    "#jenny",
    "#faq",
    "#kontakt",
  ];
  return anchors.map((a) => ({
    url: `${SITE_URL}/${a}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: a === "" ? 1 : 0.7,
  }));
}
