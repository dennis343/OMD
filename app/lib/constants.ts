export const BOOK_URL = "https://portal.oooh-my-dog.de/einzeltraining/2";
export const BOOK_ONLINE_URL = "https://portal.oooh-my-dog.de/einzeltraining/159";
export const GRUPPEN_URL = "https://portal.oooh-my-dog.de/gruppen";

// WhatsApp-Basis + Helfer für angebotsspezifische, vorbefüllte Texte.
// WA_GENERIC bleibt der Fallback für alle CTAs ohne eigenen Kontext.
const WA_BASE =
  "https://api.whatsapp.com/send/?phone=491713457959&type=phone_number&app_absent=0";
export const wa = (msg: string) => `${WA_BASE}&text=${encodeURIComponent(msg)}`;
export const WA_URL = wa(
  "Hi Jenny, ich komme über eure Website und bin an euren Leistungen interessiert. Unser Anliegen kurz:"
);

export const INSTAGRAM_URL = "https://www.instagram.com/oooh_my_dog/";
export const PHONE = "+49 171 3457959";
export const PHONE_HREF = "tel:+491713457959";
export const EMAIL = "hallo@oooh-my-dog.de";
export const EMAIL_HREF = "mailto:hallo@oooh-my-dog.de";
