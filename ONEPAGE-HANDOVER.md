# Übergabe-Prompt: „oooh my dog!" Homepage → One Page

> **An One Page:** Du übernimmst die komplette Marketing-Homepage der Premium-Hundeschule
> „oooh my dog!" (Jennifer „Jenny" Bakir, Mülheim an der Ruhr) und bildest sie 1:1 in deinem
> System ab. Dieses Dokument ist die einzige Quelle — es enthält Design-System, alle Inhalte,
> die komplette Selektor-Logik und die Abnahmekriterien. Arbeite wie ein Senior-Entwickler:
> erst verstehen, dann bauen, dann gegen die Checkliste prüfen. Bei Widersprüchen gilt:
> Design-System aus Abschnitt 2, Inhalte wörtlich aus Abschnitt 3, Logik aus Abschnitt 4.

---

## 1. Auftrag & Kontext

- **Was:** One-Pager (eine einzige scrollbare Seite) mit drei „Welten": **Vor Ort** (Mülheim/Ruhrgebiet), **Online** (DACH + weltweit auf Deutsch), **Pro & Business** (Hundeschulen/Trainer:innen).
- **Ziel:** Emotionale Ansprache von Hundehalter:innen mit reizoffenen, unsicheren oder anspruchsvollen Hunden; Konversion in den **Selektor** („Passen wir zueinander? · 2 Minuten · 3 Fragen") und in Kennenlern-Buchungen. Erfolg = qualifizierte Selektor-Starts, nicht maximale Leads.
- **Kernclaim (unverrückbar):** „Ihr bucht kein Training. Ihr bucht eine Veränderung."
- **Zielgruppe:** ~90 % Unternehmer:innen, Führungspersönlichkeiten, teils Prominente. Viel Termindruck, hohe Ansprüche, null Toleranz für Marketing-Geschwurbel. Sie kaufen Ergebnis, System, Ehrlichkeit. **Preise werden offen genannt** — Preistransparenz ist hier ein Respekt-Signal.
- **Sprache:** Ausschließlich Deutsch (de-DE), deutsche Anführungszeichen („…"). Ansprache: **„du"**, wenn die einzelne Person gemeint ist; **„ihr"**, wenn das Mensch-Hund-Team gemeint ist. Niemals „Sie/Ihnen" (auch nicht in Formularen, Fehlermeldungen, Footer, Rechtstexten).
- **Selektivität ist Markenbestandteil:** „Wir sind bewusst nicht für jeden." Wer zu wenig Ambition mitbringt, soll sich ehrlich aussortiert fühlen.

### Sprachkanon der Inhaberin (Ton-Referenz, wo passend wiederverwenden)

„Weil jeder Hund verstanden werden möchte." · „Verhalten verstehen. Alltag verändern." · „Verhalten entsteht nie zufällig." · „Ich kenne diese Herausforderungen nicht nur aus Fachbüchern." · „Gute Hunde brauchen gut angeleitete Menschen." · „Mein Ziel ist nicht, dass du von mir abhängig wirst. Mein Ziel ist, dass du deinen Hund verstehst." · „Die größten Herausforderungen entstehen nicht während einer Trainingsstunde. Sie passieren genau dann, wenn kein Trainer neben dir steht." · „Ein Trainer in deiner Hosentasche." · „Struktur statt Zufall."

---

## 2. Design-System (verbindlich)

### 2.1 Farb-Tokens (CSS Custom Properties, Light-first)

```
/* Light (Default) */              /* Dark (Sektionen mit class="theme-dark") */
--bg:        #F7F7F7               --bg:        #07071A
--bg-2:      #FFFFFF               --bg-2:      #0F0F24
--bg-3:      #EFEFEF               --bg-3:      #171730
--ink:       #07071A               --ink:       #F7F7F7
--ink-2:     #1A1A28               --ink-2:     #E6E6EC
--ink-3:     #4A4A55               --ink-3:     #A0A0B0
--ink-4:     #6E6E7A               --ink-4:     #66667A
--line:      rgba(7,7,26,0.08)     --line:      rgba(247,247,247,0.08)
--line-2:    rgba(7,7,26,0.16)     --line-2:    rgba(247,247,247,0.18)
```

- **Theme-System:** Light ist Default. Dunkle Sektionen bekommen eine Klasse (z. B. `theme-dark`), die die Tokens umdefiniert — alle Kinder flippen automatisch. **Niemals harte Farbwerte in Komponenten, immer Tokens.**
- **Markengelb `#E4FF00` (`--omd-yellow`)** ist eine dekorative „Juwel-Farbe": Flächen, Borders (2 px), Unterstreichungen, Punkte, Badges — **niemals als Textfarbe**. Betonter Text nutzt `--accent-ink` (Light: `#07071A`, Dark: `#F7F7F7`).
- Dunkle Sektionen werden mit einer **2-px-Gelbkante** (`border-top` oder `border-bottom: 2px solid #E4FF00`) abgegrenzt.

### 2.2 Typografie

- **Manrope** für alles (Headlines eng getrackt, `letter-spacing: −0.015…−0.03em`, Gewicht 600/700; Body 400).
- **JetBrains Mono** für Eyebrows/Labels/Meta (`text-transform: uppercase`, `letter-spacing: 0.08–0.2em`, ~11–13 px).
- **Kein Italic. Nirgends.** Hervorhebungen in Headlines über gelbe Unterstreichung/Marker (`.hl-yellow`), nicht über Kursiv.
- Headline-Skalen: Hero `clamp(34px, 6.2vw, 90px)`, Sektions-H2 `clamp(28–34px, 5–6vw, 62–84px)`.

### 2.3 Motion

- Ruhig, langsam, exponentiell auslaufend (`cubic-bezier(0.22, 1, 0.36, 1)`) — **nichts hüpft**.
- Scroll-Reveal: Elemente mit `data-fx` faden mit leichtem Y-Offset ein (IntersectionObserver), optional Richtung `left/right/zoom`, Stagger-Delays ~120–150 ms.
- Wort-für-Wort-Reveal der Hero-Headline (Masken-Animation).
- Sanfter Parallax auf Hero- und Abschluss-Hintergrundbildern (Faktor ~0.16, gedeckelt).
- Zähler-Animation (CountUp) für die Hero-Statistiken; Endwert muss auch ohne JS im HTML stehen.
- **Jede Animation braucht eine `prefers-reduced-motion`-Alternative; Inhalte sind nie hinter JS versteckt.**

### 2.4 Accessibility (WCAG AA)

- Body-Text ≥ 4,5:1 Kontrast (besonders in dunklen Sektionen prüfen).
- Touch-Targets ≥ 44 px. Skip-Link vorhanden. `:focus-visible` mit 2-px-Gelb-Outline.
- Semantik: eine `h1` (Hero), Sektionen mit `aria-labelledby`, Akkordeons mit `aria-expanded/aria-controls`, Modale mit `role="dialog"`, `aria-modal`, Escape zum Schließen, Body-Scroll-Lock bei offenem Modal.
- Mobile-first. Breakpoints: ~640 / 700 / 900 / 1000 px.

### 2.5 UI-Primitives (Stilrezept)

- **Buttons:** Primary = gelbe Fläche, dunkle Schrift, Pill- oder Minimal-Radius, Pfeil „→" der bei Hover 3 px nach rechts rutscht. Ghost = transparent, 1-px-Border (`--line-2`), selbe Metrik.
- **Eyebrow:** Mono-Label mit kurzem gelbem Strich davor.
- **Karten:** 1-px-Border `--line-2`, Hintergrund `--bg-2`, Hover hebt Border auf Gelb/Brass; keine Schatten-Show, höchstens dezent.
- **Badges/Pills:** gelbe Fläche + dunkle Mono-Schrift (z. B. „Signaturprogramm", „Der beste Einstieg · 49 €"), oben überlappend auf Kartenkante.
- **Bild-Kacheln (`.tile`):** Bild mit Caption-Streifen (Mono, klein) unten links; dunkler Verlauf über dem Bild.
- **Marquee-Band:** gelbe Fläche, dunkle fette Serifenlose, Items mit Punkt-Trenner, endlos laufend (~38 s), `prefers-reduced-motion` → statisch.
- **TrainingSlider:** horizontal auto-scrollender Bildstreifen (nahtloser Loop via Duplikation, translateX −50 %), Bilder mit Mono-Label-Overlay, Richtung abwechselnd, Höhe 120–200 px je nach Kontext.

---

## 3. Seitenarchitektur & Inhalte (in Reihenfolge, wörtlich)

Konvention: **[L]** = helle Sektion, **[D]** = dunkle Sektion (`theme-dark`). Anker-IDs in Klammern.

### 3.0 Navigation (sticky, hell)
Logo links (Wortmarke „oooh my dog!" + Mono-Subline „Hundetraining mit System"), Links: Vor Ort (`#vor-ort`) · Online (`#anywhere`) · Pro & Business (`#pro`) · Über uns (`#jenny`) · Stimmen (`#stimmen`) · Kontakt (`#kontakt`). Rechts Primary-Button „Kennenlernen →" (öffnet Selektor). Mobile: Burger-Menü (Vollbild-Overlay), darin zusätzlich Telefon/E-Mail.

### 3.1 Hero **[D]**
Vollflächiges Hintergrundbild (zwei laufende Hunde, dunkler Mehrfach-Verlauf darüber), Parallax.
- Eyebrow: „Hundetraining mit System" + Mono-Meta rechts: „Mülheim · Ruhrgebiet · DACH"
- **H1 (Wort-Reveal):** „Ihr bucht kein Training. / Ihr bucht eine **Veränderung.**" (letztes Wort mit Gelb-Marker)
- Subline: „Keine lose Sammlung von Kursstunden, sondern ein didaktisches System mit klarem Ziel: ein Hund, der euch versteht — und ein Alltag, der wieder leicht ist. Ehrlich gesagt: Wir passen nicht zu jedem. Findet in zwei Minuten heraus, ob wir zueinander passen."
- CTA: „Passen wir zueinander? →" (öffnet Selektor) + Mono-Note „2 Minuten · 3 Fragen · Klare Empfehlung"
- **Drei Türen** (Karten mit Bild, Tag, Text, Link):
  1. „Vor Ort" — Tag „Mülheim · Ruhrgebiet" — „Für euch, wenn ihr mit eurem Hund im echten Alltag arbeiten wollt — am Platz, in der Stadt, vor eurer Haustür." → `#vor-ort`
  2. „Online" — Tag „Gesamter DACH-Raum" — „Für euch, wenn ihr dieselbe Methodik wollt, aber nicht in Mülheim wohnt — per Videoanalyse, Programm oder Club." → `#anywhere`
  3. „Pro & Business" — Tag „Hundeschulen · Trainer:innen" — „Für euch, wenn ihr professionell mit Hunden arbeitet und euer Angebot auf System-Niveau heben wollt." → `#pro`
- **Statistik-Leiste (CountUp):** Google-Bewertung **5,0** · **1 400+** begleitete Hunde · **13** Jahre Erfahrung · **0 %** aversive Methoden
- Scroll-Cue unten: Linie + „Eure Geschichte beginnt hier"

### 3.2 Story — „Der Alltag davor" **[L]** (`#alltag`)
Sticky-Scroll-Sequenz mit drei emotionalen Momenten (je Bild + Headline + Text + Mono-Caption). Eyebrow: „Der Alltag davor", H2: „Kennt ihr das?"
1. „Die Leine spannt sich — und euer Puls gleich mit." — „Ein Hund am anderen Ende der Straße, und aus dem Spaziergang wird Hochspannung. Ihr kennt jede Ausweichroute im Viertel. Und trotzdem passiert es wieder." (Caption: „Begegnung · Sekunden vorher")
2. „Ihr geht raus, wenn sonst niemand draußen ist." — „5:30 Uhr, Nieselregen, leere Feldwege. Nicht, weil ihr das schön findet — sondern weil es die einzige Zeit ist, in der ihr durchatmen könnt." (Caption: „Feldweg · Bevor die Stadt wach ist")
3. „Und abends fragt ihr euch: Liegt es an uns?" — „Ihr habt Bücher gelesen, Videos geschaut, Tipps gesammelt — von Trainern, Nachbarn, dem Internet. Je mehr Stimmen, desto weniger Klarheit. Euer Hund ist erschöpft. Ihr auch." (Caption: „Zuhause · Nach dem Sturm")
- **Pivot-Block:** „Es liegt nicht an eurem Hund. Und nicht an euch. Es fehlt ein System." + „Reizoffenheit ist kein Erziehungsfehler — sie ist ein Arbeitsauftrag. Mit klarer Didaktik wird aus dem täglichen Ausnahmezustand ein Weg, den ihr gehen könnt. Schritt für Schritt, ohne Zwang." Link „So arbeiten wir →" (`#methodik`).

### 3.3 Methodik **[L]** (`#methodik`)
Eyebrow „Das System", Mono „Sechs Prinzipien". H2: „Präzision statt Druck. **Didaktik** statt Dressur." Lead: „Egal ob ihr vor Ort trainiert, online arbeitet oder als Hundeschule mit uns wachst — darunter liegt immer dasselbe System. Wir verzichten auf aversive Methoden, auch bei anspruchsvollen Fällen. Nicht aus Ideologie, sondern weil Training, das auf Druck basiert, unter Druck zusammenbricht. Das ist kein weiches Training. Es ist präzises."

Sechs nummerierte Prinzipien-Karten (i.–vi.): **System statt Zufall** („Keine lose Sammlung von Übungen, sondern ein klarer Weg. Jede Einheit hat ein Ziel — und ihr wisst, wofür.") · **Alltag statt Showtraining** („Es geht nicht um schöne Einzelmomente auf dem Platz, sondern um Verlässlichkeit im echten Leben.") · **Ruhige Klarheit statt Reizüberflutung** („Gerade sensible, unsichere oder schnell hochfahrende Hunde profitieren von einer Trainingsumgebung, die nicht überfordert.") · **Vor Ort und digital stark** („Nicht abhängig von einem Ort. Die Marke wirkt, wo ihr seid — in Mülheim, zuhause oder unterwegs.") · **Didaktik auf hohem Niveau** („Nicht nur Hundetraining. Auch gute Vermittlung, saubere Struktur und verständliche Umsetzung — Erwachsenenbildung trifft Trainingspraxis.") · **Auch für Profis relevant** („Die Marke entwickelt sich bewusst über den klassischen Endkundenmarkt hinaus — mit echten Angeboten für Hundeschulen und Fachkunden.")

**Direkt danach: Entwicklungs-Modell** (eigener Block, Eyebrow „Das Grundprinzip", Mono „Entwicklungs-Modell"):
H3: „Verhalten entsteht **nie zufällig.**" Lead: „Hunde entwickeln sich in Etappen — und Verhalten folgt diesen Etappen. Jede Phase verändert, was dein Hund kann, braucht und aushält. Wer das weiß, trainiert realistischer, ruhiger, wirksamer."
Vier Karten (01–03 + „±"):
1. **Prägung & Sozialisierung** — „Die frühen Wochen legen das Fundament. Was ein Hund hier erlebt — und was nicht — prägt, wie er die Welt später einordnet."
2. **Pubertät & Hormone** — „Aus dem folgsamen Junghund wird ein Testkandidat. Rückruf, Grenzen und Ruhe werden neu verhandelt. Das ist keine Trotzphase — das ist Entwicklung."
3. **Erwachsenenalter** — „Verhalten ist jetzt geprägt, aber nie in Stein gemeißelt. Routinen, Umwelt und eure Führung entscheiden, was trägt."
4. **Hormone & Stressoren** — „Läufigkeit, Kastration, Jahreszeiten, Umweltreize, Alltagsdruck — alles wirkt auf Verhalten. Manches ist vorhersehbar, manches zeigt sich erst im Verhalten. Beides lesen wir richtig."
Brücke (mit Links auf `#anywhere`): „Deshalb adressieren unsere saisonalen Sprints das Vorhersehbare — Silvester, Urlaub, Jahreszeiten. Und Signaturprogramm und Club das, was sich erst im Verhalten zeigt."

### 3.4 Säule 01 · Vor Ort **[L]** (`#vor-ort`)
Eyebrow „Säule 01 · Vor Ort", H2: „Training, das im **Alltag** sitzt. In Mülheim und Umgebung." Lead: „Direkte Begleitung an echten Orten — Stadt, Park, Zuhause. Damit euer Hund nicht nur auf dem Trainingsplatz führbar ist, sondern dort, wo es zählt." Ghost-Link „Gruppenstunden ansehen →" (externes Buchungsportal). Breite Bild-Kachel (Caption „Mülheim · Freifeld · Alltagsarbeit").

**Einstieg · Zwei Wege** (zwei große Karten mit Badge):
1. Badge „Vor Ort · Mülheim" — „Kennenlern-Einzelcoaching", Sub „Am Hundeplatz Mülheim · Für Teams aus der Region". Desc: „Der strukturierte Einstieg für neue Teams — direkt am Platz. Wir schauen uns euch in der Praxis an, klären eure Themen und zeigen euch den sinnvollsten Weg für alles Weitere." Blöcke „→ Gut für euch, wenn" / „→ Konkreter Nutzen" / „→ Was ihr erwarten könnt" (Praxisanalyse direkt am Hundeplatz · Klare nächste Schritte — keine vagen Tipps · Sinnvoller Trainingsweg, individuell zugeschnitten). CTA „Termin am Platz buchen →" (Buchungsportal). **Mono-Hinweis unter dem CTA: „Echte Knappheit: Vor-Ort-Termine sind regelmäßig ausgebucht — online startet ihr sofort."**
2. Badge „Online · Videoanalyse" — „Kennenlern-Einzelcoaching", Sub „ONLINE & Videoanalyse · 30 Min · 49 €". Desc: „Hier beginnt eure Erfolgsgeschichte mit uns online: per Zoom und Videoanalyse von einem Ort eurer Wahl. Wir finden heraus, was ihr braucht — und legen gemeinsam das Fundament für alles Weitere." Gut-für-euch: „Ihr wohnt nicht in Mülheim, wollt flexibel starten — und seid bereit, vorab kurze Anamnese und 3–5 Alltagsvideos zu liefern (mind. 4 Tage vorher)." Erwarten: Anamnesebogen + 3–5 Alltagsvideos vorab · Strategische Trainingsplanung im Zoomcall · Erste Übungen & schriftliche Nachbereitung. CTA „Online-Kennenlern für 49 € buchen →".

**VIP · 1:1 Exklusiv** — „Einzelcoaching am Ort des Geschehens", Sub „Trainerin exklusiv reserviert · Nur für euch · Ort eurer Wahl". TrainingSlider-Tags: Stadt · Park · Zuhause · Spazierroute · Begegnung · Freilauf. Desc: „VIP-Setting im echten Sinn: Eure Trainerin ist in dieser Zeit ausschließlich für euch und euren Hund da — keine geteilte Aufmerksamkeit, keine Gruppe, kein Wartemodus. Wir arbeiten 1:1 dort, wo die Herausforderung tatsächlich entsteht: Stadt, Park, Zuhause, Spazierroute, Hundebegegnung." CTA „VIP-Einzelcoaching per WhatsApp anfragen →".

**Auf Tour** (großer Block mit Bild, Caption „DACH-Tour · Begrenzte Termine pro Jahr") — „Tour-Termine in der DACH-Region", Sub „Ca. 3× pro Jahr · Ausgewählte Regionen · Warteliste". Desc: „Wer nicht in Mülheim wohnt, muss nicht auf persönliches Training verzichten. Etwa dreimal im Jahr besuche ich ausgewählte Regionen in Deutschland, Österreich und der Schweiz — für strukturierte Trainings vor Ort, kompakt geplant und sauber begleitet." Erwarten: Ankündigung der nächsten Tour-Region per Newsletter · Begrenzte Plätze · Vergabe in Reihenfolge der Warteliste · Vor-Ort-Slot plus digitale Vorbereitung & Nachbetreuung. CTA „Auf die Tour-Warteliste →" (WhatsApp).

**Basisgruppen — „Sortiert nach Wirkung — nicht nach Kursliste."** Lead: „Jede Gruppe hat ein klares Ziel und einen konkreten Nutzen für euren Alltag. Ihr bucht nicht ‚eine Stunde', sondern eine Veränderung." Zwei Gruppen-Karten mit je drei Items (Item = Pill-Tag + TrainingSlider + Beschreibung + „+ Mehrwert:"):
- Block 1 „Orientierung & Führung" (Nutzen: „Hier lernt ihr, wie Führung wirklich funktioniert — ohne Druck, aber mit Klarheit. Wer dieses Fundament hat, spart sich später Frust, Eskalationen und endloses Üben am Symptom."):
  - **Signalkontrolle** — „Saubere, wirksame Signale für die Situationen, die im Alltag wirklich zählen — Sitz, Platz, Bleib, Rückruf, Stopp. Nicht im Wohnzimmer geübt, sondern dort, wo es darauf ankommt." Mehrwert: „Euer Hund hört nicht ‚weil er muss', sondern weil er versteht. Ihr habt Werkzeuge, die unter Reizen halten — und kein Repertoire, das beim ersten Eichhörnchen zusammenbricht."
  - **Lenken & Grenzen setzen** — „Klare, faire Führung ohne Härte. Ihr lernt, wie ihr Räume eröffnet, Grenzen sauber kommuniziert und euren Hund durch komplexe Situationen lenkt — vom Türgehen bis zur belebten Innenstadt." Mehrwert: „Euer Hund versteht schneller, was okay ist — und was nicht. Weniger Diskussionen, weniger Wiederholungen, mehr Ruhe im gemeinsamen Alltag."
  - **Unsichtbare Leine** — „Freilaufarbeit auf hohem Niveau: orientiertes Mitlaufen, sauberer Rückruf, freiwilliges Mitdenken. Ihr trainiert die Verbindung, die hält — auch wenn die Leine längst weg ist." Mehrwert: „Spaziergänge werden wieder leicht. Ihr bewegt euch entspannter draußen, weil ihr euch auf euren Hund verlassen könnt — statt ihn permanent kontrollieren zu müssen."
- Block 2 „Soziales Lernen & Zusammenarbeit" (Nutzen: „Hier wird aus Reaktion Kooperation — zwischen Hund, Halter und Umwelt. Ideal für Teams, die nicht nur ‚funktionieren', sondern gemeinsam denken wollen."):
  - **Sozialkontakt** — „Strukturierte, gut moderierte Hundebegegnungen — für Hunde, die unsicher, überschwänglich oder pöbelig sind. Ihr lernt zu lesen, einzuordnen und passend zu reagieren, statt zu hoffen." Mehrwert: „Begegnungen mit anderen Hunden werden kalkulierbar. Ihr nehmt eurem Hund den Stress — und euch selbst die ständige Anspannung beim Spaziergang."
  - **Longieren** — „Präzise Distanzarbeit über Körpersprache. Ihr lernt, wie ihr euren Hund auf Entfernung lenkt, fokussiert haltet und feinabgestimmt führt — eine der wirksamsten Trainingsformen überhaupt." Mehrwert: „Ihr versteht, wie minimale Signale große Wirkung entfalten. Diese Klarheit überträgt sich direkt in jeden Alltagsmoment — Leine, Freilauf, Begegnung."
  - **Begleithunde** — „Vorbereitung auf die Begleithundeprüfung — alltagsnah, fair und mit echtem Trainingsnutzen. Auch ohne Prüfungsambition ein hervorragendes Programm für saubere Grundlagen." Mehrwert: „Ein anerkannter Nachweis, dass ihr als Team funktioniert — und ein Trainingsweg, der euren Alltag spürbar entspannt, weit über die Prüfung hinaus."

**Exklusivgruppen · Premium** (dunkler Kasten mit gelbem Badge „EXKLUSIV · PREMIUM") — „Exklusive Spezialthemen für Fortgeschrittene". Exklusiv-Nutzen: „Kleine, geschlossene Exklusivgruppen mit hohem Anspruch und konkreten Themen. Für Teams, die saubere Basics mitbringen und gezielt an den Punkten arbeiten wollen, die im Alltag wirklich Sicherheit kosten." Items mit „EXKLUSIV"-Flag:
- **Basics Exklusiv** — „Exklusive Vertiefung der Grundlagen in kleiner Runde — Bindung, Aufmerksamkeit, Impulskontrolle, sauberes Markersystem. Für Teams, die mit Anspruch und Tiefe arbeiten wollen." Mehrwert: „Trainingsqualität, die in normalen Gruppen so nicht möglich ist: viel Feedback, individuelle Korrektur, ein echter Schritt im Niveau."
- **Anti-Giftköder Exklusiv** — „Strukturiertes, exklusives Anti-Giftköder-Training mit echtem Aufbau — vom Markersignal über Distanzarbeit bis zur sauberen Generalisierung im Alltag. Kein ‚einmal Tabu üben', sondern verlässlich abrufbar." Mehrwert: „Ihr nehmt die Sorge ‚was, wenn er etwas frisst' aus eurem Alltag — und gewinnt Sicherheit auf jedem Spaziergang, auch dort, wo unbekannte Reize liegen."
- **Jagdkontrolle Exklusiv** — „Exklusive Arbeit am echten Jagdverhalten — Rückruf unter starken Reizen, Impulskontrolle, alternative Verhaltensketten. Für Hunde, die jagen wollen, und Halter, die wieder Freilauf wagen möchten." Mehrwert: „Freilauf wird wieder möglich — ohne dass ihr euren Hund permanent an der Leine halten müsst. Ihr lernt, ihn zu führen, statt ihn zurückzuhalten."
Hinweis-Zeile: „Jede Gruppe startet mit einem Kennenlern-Einzel — damit wir euch passend zuordnen können." (Link auf Buchungsportal.)

**Pakete · Premium-Bundles** — H3: „Drei besondere Pakete — für die wichtigsten Lebenslagen." Drei Karten (Gelbkante oben), jede mit „→ Inhalte" und „→ Inklusiv-Leistungen" (Persönliche Begrüßung · Willkommensbox · Klare Trainingsstruktur · Hausaufgaben mit Anleitung · WhatsApp-Support · Flexible Terminbuchung), CTA per WhatsApp:
1. „Welpen-Premium-Paket" (Tag „Welpe · Premium-Start") — Inhalte: 1× Kennenlern-Einzel · 6× freie Basisgruppen-Teilnahme · 2× Einzeltraining am Wunschort · 3× oooh my dog! Talks
2. „Leichtigkeit im Alltag-Paket" (Tag „Alltag · Konstanz") — Inhalte: 25 Einheiten Basisgruppen · 2× oooh my dog! Talks
3. „Traveller Intensivpaket" (Tag „Intensiv · DACH") — Inhalte: 3× Online-Einzel · 4× Einzeltraining (Mülheim) · 2× oooh my dog! Talks

### 3.5 Säule 02 · Online **[D]** (`#anywhere`)
Eyebrow „Säule 02 · Online", H2: „Dieselbe Methodik. **Ohne Anfahrt.** Für reizoffene Hunde in ganz DACH." Lead: „Ihr wohnt nicht in Mülheim — und trotzdem soll euer Hund endlich in Führung kommen. Programm, Videoanalyse, Membership: klare Struktur, per Video begleitet, im Tempo eures Alltags." **Auswanderer-Absatz (gedimmt):** „Ihr lebt nicht in Deutschland — aber ihr wollt auf Deutsch mit eurem Hund arbeiten? Egal ob Spanien, Portugal oder Singapur: Videoanalyse und Online-Programm funktionieren über jede Zeitzone hinweg. Euer Hund spricht keine Landessprache — ihr müsst es auch nicht." Ghost-Button „Was passt zu uns? →" (Selektor).

**Signaturprogramm** (großer Block, Badge „Signaturprogramm", Bild-Kachel): Mono „8 Wochen · 3 feste Starts pro Jahr · Premium · Digital", H3 „Reizoffen & führbar". Desc: „Das digitale Signaturprogramm für anspruchsvolle Hunde und überforderte Halter. Strukturierter Einstieg, klar gegliederte Lernmodule, Live-Elemente, Umsetzungsaufgaben und Feedback auf reale Alltagssituationen." Boxen „→ Situation jetzt" („Ihr seid oft im Reagieren statt im Führen. Begegnungen, Reize oder Alltagssituationen kippen zu schnell. Ihr habt schon vieles gehört, aber keinen klaren Weg.") / „→ Veränderung danach" („Mehr Klarheit. Mehr Führung. Mehr Ruhe. Mehr Struktur im Alltag."). Liste „Was drin ist": Klarer Trainingsfahrplan · Verständliche Erklärungen statt bloßer Tipps · Alltagstaugliche Umsetzung · Enge, aber effiziente Begleitung.
**Kohorten-Zeile (Mono):** „Feste Jahres-Starts: 15.02. · 15.05. · 15.10." + „Nächster Start: **{dynamisch nächster dieser drei Termine, deutsches Datumsformat}** — Plätze limitiert, Warteliste." (Logik: aus den drei Jahresterminen des laufenden und Folgejahres den nächsten in der Zukunft wählen; clientseitig berechnen oder beim Build rendern — auf keinen Fall hardcoden.)
CTAs: „Warteliste anfragen →" (WhatsApp) + Ghost „Kennenlern-Coaching →" (Buchungsportal).

**Online-Kennenlern — Schlüsselprodukt** (Block mit gelber Border, Badge „Der beste Einstieg · 49 €"): Mono „Online-Kennenlern · 30 Min Zoom + Videoanalyse". H3: „Der schnellste Weg in euer Training führt nicht nach Mülheim. Er führt durch eure Haustür." Lead: „Online ist nicht die zweite Wahl. Für die meisten von euch ist es die bessere — sechs Gründe, warum:" Sechs nummerierte Argumente (01–06, wörtlich):
1. „Wir sehen euren Hund online mehr." — „Auf einem fremden Platz zeigt euer Hund nicht sein Alltagsverhalten. Per Video sehen wir ihn zuhause, auf eurer Route, in genau der Situation, die euch belastet."
2. „Training findet ohnehin in eurem Alltag statt." — „Der Trainingsort ist nicht unsere Anlage — es ist eure Straße, euer Wohnzimmer, euer Feldweg."
3. „Ihr startet diese Woche — nicht in sechs." — „Vor-Ort-Kennenlern-Termine sind bewusst limitiert und regelmäßig ausgebucht. Online gibt es keine Warteliste, keine Anfahrt, kein Termin-Jonglieren."
4. „Dieselbe Trainerin, dasselbe System." — „Kein Junior-Team, kein Katalogvideo: Jenny analysiert eure Situation persönlich. Der Kanal ändert sich — die Qualität nicht."
5. „Ihr bekommt etwas in die Hand." — „Nach dem Kennenlern haltet ihr euren Trainingsweg schriftlich in den Händen: Auswertung der Videoanalyse, priorisierte erste Schritte, klare Empfehlung."
6. „49 € sind die Eintrittskarte, kein Rabatt." — „Niedrige Hürde, volle Leistung. Die Analyse ist dieselbe wie bei jedem unserer Kunden."
CTAs: „Online-Kennenlern für 49 € buchen →" (Buchungsportal) + Ghost „Erst prüfen, ob wir zueinander passen" (Selektor).

**Standards-Block** (Eyebrow-Mono „Unsere Standards · Online"): H3 „Kein Fließband. Keine versteckten Preise. Kein Generika-Feedback." Vier Karten (gelbe Linkskante):
1. „Kein Fließband." — „Keine tausend Kunden gleichzeitig. Plätze sind limitiert, weil jedes Feedback von echten Trainer:innen nach einem dokumentierten Standard kommt — mit Jennys Review."
2. „Keine versteckten Preise." — „Alle Preise stehen auf dieser Seite. Kein ‚Analysegespräch', in dem euch ein vierstelliger Preis überraschend verkauft wird. Keine Zusatzkosten mitten im Programm."
3. „Kein Generika-Feedback." — „Wenn es wirklich schwierig wird — Aggression, Angst, Listenhunde — braucht es keine Video-Bibliothek, sondern eine Trainerin mit behördlicher Zulassung nach § 6 LHundG NRW. Genau dafür ist oooh my dog! gebaut."
4. „Ehrlich über Grenzen." — „Was online lösbar ist, lösen wir online. Was einen Vor-Ort-Termin braucht, sagen wir euch direkt — und bieten ihn an: in Mülheim oder auf DACH-Tour. Das ist keine Wertung, sondern eine klare Einordnung."
CTA: „Passen wir zueinander? · 2 Minuten, 3 Fragen →" (Selektor).

**Angebots-Grid** (7 Karten, Nummern 02–08; jede Karte: TrainingSlider, Nummer, Mono-Sub, Titel, Desc, „+"-Liste, „Konkreter Nutzen"-Box, Link-CTA; Karten 02 und 03 zusätzlich mit Einwand-Box bzw. Badge):
- **02 Videoanalyse Pro** — Sub „Einstieg · Asynchron · 49 € einmalig". Desc: „Schnelle, fundierte Hilfe ohne Terminchaos. Ihr sendet reale Alltagsszenen — wir liefern professionelle Analyse, Priorisierung und konkrete Handlungsempfehlungen." Erwarten: Professionelle Analyse · Priorisierung der wichtigsten Hebel · Konkrete Umsetzungsanleitung. Nutzen: „Ihr wisst nach wenigen Tagen, woran wir arbeiten — ohne Anfahrt, ohne Terminfenster." **Einwand-Box** (Mono-Headline: „Im Ernstfall kann ich doch gar nicht filmen."): „Musst du auch nicht. Filme das scheinbar Banale: die Minute vor der Begegnung, den Weg zur Tür, das Verhalten nach dem Spaziergang. Genau daraus liest Jenny ab, was deinen Hund wirklich bewegt — und interpretiert zuverlässig, wie dein Hund in der Reizsituation tickt." **Badge:** „Der Club kostet nur 6 € mehr — und beinhaltet deutlich mehr." CTA „Videoanalyse anfragen →" (WhatsApp).
- **03 oooh my dog! Club** — Sub „Membership · 55 €/Monat". Desc: „Dein Trainingszentrum für die Hosentasche: Videoanalysen, direkter Austausch, der oooh my dog! Talk und das Clubmeeting. Dranbleiben, vertiefen, Sicherheit gewinnen — statt bei jedem Thema neu zu starten." Erwarten: Videoanalysen & direkter Austausch · oooh my dog! Talk & Clubmeeting · Fokus auf Transfer und Dranbleiben. Nutzen: „Keine Einzelstunden-Spirale mehr — stattdessen Kontinuität zum monatlichen Festpreis von 55 €." **Einwand-Box:** „Musst du auch nicht. Wie ein Hund reaktiv ist, wissen wir bereits — spannend ist, was davor und danach passiert. Genau diese vermeintlich banalen Momente analysieren wir im Club laufend mit." CTA „Club entdecken →".
- **04 Digitale Live-Sessions** — Sub „Workshops & Seminare · Live". Desc: „Feste Themen, live — mit direkter Integration eurer Videos und Fragen: Ihr reicht vorab Situationen ein, Jenny analysiert sie in der Session. Themen: Leinenreaktivität · Jagdmotivation · Sozialverhalten unter Hunden · Kastration u. a. Integriert ist der oooh my dog! Talk — offenes Live-Format, 2× pro Monat." Erwarten: Live-Workshops zu festen Themen · Eure Videos & Fragen, in der Session analysiert · oooh my dog! Talk · 2× pro Monat. Nutzen: „Direkte Analyse eurer echten Situation im Live-Format — ohne Wartezeit auf einen 1:1-Termin." CTA „Termine anfragen →".
- **05 Digitale Kurspakete** — Sub „Voraufgezeichnet · Ab 89 €". Desc: „Voraufgezeichnete Kurse mit begleitender Aufgabenserie per E-Mail und 2 Teilnahmen am oooh my dog! Talk. Das erste Paket: ‚Deine 28-Tage-Challenge zur Leinenführigkeit'." Erwarten: 28-Tage-Challenge Leinenführigkeit · Begleitende Aufgabenserie per E-Mail · 2× oooh my dog! Talk inklusive. Nutzen: „Ihr trainiert geführt, wann es in euren Alltag passt. Weitere Challenges — Rückruf, Ruhe & Entspannung, Stadttraining — sind als Ausblick geplant." CTA „Kurspaket anfragen →".
- **06 Saisonale Sprints** — Sub „4 Wochen · Winter · Frühjahr · Herbst". Desc: „Vier Wochen Fokus auf ein konkretes Alltagsthema — von Urlaubsvorbereitung bis Feiertage & Silvester. Vorhersehbare Stressoren werden vorbereitet, bevor sie zuschlagen (siehe Entwicklungs-Modell oben)." Erwarten: Mehrere Aufgaben per E-Mail über 4 Wochen · Wöchentliche Calls mit Nachbesprechung · OMD Club lite (App + Videoanalyse) für die Sprint-Dauer. Nutzen: „Ihr geht vorbereitet in die stressige Saison — statt sie hinterher aufzuarbeiten. Der jeweils nächste Sprint wird hier und per Newsletter angekündigt." CTA „Aktuellen Sprint ansehen →".
- **07 Videoanalyse & Voice-Beratung** — Sub „Asynchron · Kontingent-basiert". Desc: „Unsere asynchrone Premium-Beratung für Menschen, die laufend dranbleiben wollen — ohne Termin-Pingpong. Ihr bucht vorab ein Kontingent und reicht über euren gesamten Buchungszeitraum Videosequenzen und Sprachnachrichten ein. Wir antworten mit strukturierten Videoanalysen, Voice-Messages und konkreten Handlungsschritten — im Rhythmus eures Alltags." Erwarten: Kontingent vorab buchen (Wochen oder Monate) · Videosequenzen & Sprachnachrichten einreichen · Antwort per Videoanalyse und Voice-Message. Nutzen: „Echte 1:1-Begleitung ohne Kalenderdruck — ihr bekommt Profi-Antworten genau dann, wenn die Situation frisch ist." CTA „Kontingent anfragen →".
- **08 Intensiv-Begleitung Exklusiv** — Sub „Exklusiv · Auf Anfrage". Desc: „Unser High-Ticket-Format für die härtesten Fälle und höchsten Ansprüche: 6–8 Wochen engmaschige asynchrone Begleitung mit täglichen bis wöchentlichen Video-Reviews — persönlich von Jenny." Erwarten: Tägliche bis wöchentliche Video-Reviews · Direkter Draht über den gesamten Zeitraum · Auch für schwere Fälle: Aggression, Angst, Listenhunde. Nutzen: „Die engste Begleitung, die wir anbieten — das Kontingent ist bewusst klein. Konditionen und Start klären wir im persönlichen Gespräch." CTA „Verfügbarkeit anfragen →".

**App-Block** (dezent, am Sektionsende): Mono „Begleitung im Alltag · Die oooh my dog! App", H3 „Euer Training in der Tasche.", Text: „Heimtierausweis, Impf-Ampel, Trainingstagebuch, Fortschritts-Matrix und Video-Upload für eure Analysen — die App hält euren Trainingsalltag zwischen den Terminen zusammen." Drei Tarif-Kacheln: **Free — 0 €** · **Motiviert — 9,90 €/Monat** · **Oooh My Dog — 19,90 €/Monat**.

### 3.6 Säule 03 · Pro & Business **[L]** (`#pro`)
Eyebrow „Säule 03 · Pro & Business", Label „Hundeschulen · Trainer:innen · Fachkunden". H2: „Für Profis, die **System** über Stundendruck stellen. Struktur, Qualität, Premium-Niveau." Lead: „Wir arbeiten mit Hundeschulen und ambitionierten Profis, die geschickt wachsen wollen, ohne Qualität zu verlieren. Weniger 1:1-Stundendruck, mehr System. Echte Erfolge bei euren Kunden — weil die Methode sitzt, nicht nur der Tarif."

**„Warum Jenny die richtige Ansprechpartnerin ist"** (Bild-Kachel „Jenny · Pro-Beratung" + H3 „Wer andere Hundeschulen beraten will, muss selbst eine führen können." + 4 nummerierte Punkte):
1. **Eigene Premium-Schule** — „Jenny führt selbst eine Hundeschule mit System — vom Kennenlern-Einzel bis zum Signaturprogramm. Keine Theorie, sondern gelebte Praxis."
2. **Didaktik + Kommunikation** — „Studium der Erwachsenenbildung und 13 Jahre Führungsarbeit in der Kommunikationsbranche. Jenny kann Fachwissen nicht nur haben, sondern auch vermitteln — an Halter und an Kolleg:innen."
3. **Anspruchsvolle Fälle** — „Der Schwerpunkt liegt seit Jahren auf reizoffenen, unsicheren und energiegeladenen Hunden. Jenny ist § 11 TSchG-zertifizierte Hundetrainerin und in Ausbildung zur zertifizierten Verhaltensberaterin für Hunde; dazu besitzt sie die behördliche Zulassung nach § 6 LHundG NRW — auch für die Arbeit mit gefährlichen Hunden und Hunden bestimmter Rassen."
4. **System, das skaliert** — „Angebotsarchitektur, Didaktik, Positionierung und Kundenführung — alles ist so gebaut, dass es in anderen Schulen übernommen und angepasst werden kann."

**Drei Module** (Karten 06–08, mittlere mit „Hebel"-Badge featured):
- **06 OMD Pro Case Lab** (Tag „Fallsupervision") — Für wen: „Für Hundeschulen und Trainer:innen, die mit anspruchsvollen Fällen arbeiten und ihre Qualität erhöhen wollen." Nutzen: „Ihr führt schwierige Fälle sicherer, kommuniziert klarer mit Haltern und trefft fundiertere Trainingsentscheidungen." Drin: Fundierte Fallbesprechungen · Klare Einordnung · Blick auf Trainingslogik und Halterführung · Übertragbare Entscheidungslogiken. CTA: „Pro Case Lab anfragen →".
- **07 Premium Hundeschule System** (Tag „Strategie · Angebotsarchitektur", featured) — Für wen: „Für Hundeschulen, die nicht im Tagesgeschäft hängen bleiben wollen, sondern ein tragfähiges Premium-System aufbauen." Nutzen: „Ihr habt klarere Angebote, höhere Kundenbindung, weniger 1:1-Stundendruck und ein System, das auch ohne ständige Präsenz der Chefin funktioniert." Drin: Schärfung des Angebotsportfolios · Didaktische Kurslogik · Struktur für Kundenerfolg · Ansatzpunkte für skalierbare Formate. CTA: „Business-Beratung anfragen →".
- **08 Berufswechsel Hund · Realitätscheck** (Tag „Orientierung") — Für wen: „Für Menschen, die überlegen, ob der Hundebereich beruflich der richtige Weg für sie ist." Nutzen: „Ihr spart euch teure Fehlentscheidungen und startet entweder mit realistischen Erwartungen — oder mit der Klarheit, dass dieser Weg nicht der richtige ist." Drin: Ehrliche Einordnung statt Schönfärberei · Realistischer Blick auf Anforderungen · Orientierung zu Qualität und Verantwortung · Saubere Entscheidungshilfe. CTA: „Realitätscheck ansehen →".

**Referenzen:** H3 „Keine Behauptungen, sondern Zusammenarbeit." + Text: „Konkrete Referenzprojekte und Schulen nennen wir euch im persönlichen Gespräch — Diskretion gehört für uns zum Premium-Anspruch dazu. Was wir euch hier zeigen können: die Ergebnisse unserer Arbeit im eigenen Haus — und wie wir im Pro Case Lab arbeiten." Darunter große Video-Kachel (Play-Button, Mono „Videoausschnitt · Pro Case Lab in Aktion", Caption „Pro-Showreel · 2:10 · Fallarbeit, Strategie, Supervision"). **Keine Namen, keine Fake-Referenzen.**

**Abschluss der Sektion:** Zitat-Box „→ Einstieg in Pro & Business: Kurzes Erstgespräch, ehrliche Diagnose: Wo steht ihr, und welches Modul trägt jetzt den größten Hebel?" + CTA „Gespräch per WhatsApp →".

### 3.7 Marquee-Band (gelb)
Items: „System statt Zufall" · „0 % aversive Methoden" · „Google 5,0 ★" · „1 400+ begleitete Hunde" · „Mülheim · Ruhrgebiet · DACH" · „Drei Wege · Ein System" · „Präzise statt lauter" — Punkt-Trenner, Endlos-Loop.

### 3.8 Ehrliche Einordnung **[D]** (`#zielgruppe`)
H2: „Wir sind bewusst nicht für jeden. Vielleicht aber genau für euch." Lead: „Ein System funktioniert nur, wenn beide Seiten dahinterstehen. Deshalb sagen wir vor der ersten Buchung offen, für wen unsere Arbeit gemacht ist — und für wen ein anderer Weg der bessere ist."
- **+ Gut für euch** (6 nummerierte Punkte): 01 einen reizoffenen, unsicheren, schnell drübergehenden oder anspruchsvollen Hund habt · 02 klare Anleitung statt widersprüchlicher Tipps wollt · 03 echte Veränderung im Alltag sucht — keine kurzen Showeffekte · 04 systematisch lernen möchtet, statt zufällig auszuprobieren · 05 Premium-Begleitung schätzt und bereit seid, wirklich mitzuarbeiten · 06 online oder vor Ort einen strukturierten Weg braucht
- **− Weniger passend:** „schnelle Tricks ohne Arbeit am eigenen Verhalten" · „reine Auslastung oder Bespaßung" · „unverbindliches Herumprobieren ohne System" — Fußnote: „Das ist keine Wertung, sondern eine klare Einordnung — damit ihr keine Zeit verliert."
- CTA-Zeile: „Unsicher, wo ihr steht?" + „2 Minuten · 3 Fragen · Klare Empfehlung" (Selektor-Button).

### 3.9 Über uns / Jenny **[D]** (`#jenny`)
Eyebrow „Über uns · Hinter dem System". H2: „Jenny versteht Hunde — weil sie **Menschen führt**." Intro: „13 Jahre Führungsarbeit in der Kommunikationsbranche. Studium der Erwachsenenbildung. Und seit vielen Jahren Hundetrainerin mit Fokus auf anspruchsvolle Fälle. Das zusammen ist kein Zufall — es ist das Fundament von oooh my dog!"
**CV-Grid (10 Zellen, 2-spaltig):** Führung: „13 Jahre · Kommunikationsbranche" · Didaktik: „Studium Erwachsenenbildung" · Training: „1 400+ begleitete Hunde" · Methode: „0 % aversive Methoden — auch bei schweren Fällen" · Zertifizierung: „§ 11 TSchG-zertifizierte Hundetrainerin" · Zulassung: „§ 6 LHundG NRW · behördlich — auch Listenhunde & gefährliche Hunde" · Weiterbildung: „In Ausbildung zur zertifizierten Verhaltensberaterin für Hunde" · Amt: „Vorstand · Verein für Deutsche Schäferhunde (SV), OG Mülheim/Ruhr" · Medien: „WDR-Interviewpartnerin" · Szene: „Initiatorin & Moderatorin · Ruhrpott-Hundemesse"
CTAs: „Jenny kennenlernen →" (Buchungsportal) + „Für Hundeschulen →" (`#pro`). Rechts: zwei Bild-Kacheln (Captions „Bindung · Vertrauen · Führung" / „Training · Am Ort des Geschehens") + leicht rotierte Zitat-Karte „Ich trainiere lieber präzise, als lauter."

**Großes Zitat** (Eyebrow „Warum das wichtig ist"): „Wir haben im Durchschnitt **13 Jahre** mit unseren Hunden. Es wäre doch schön, wenn jeder einzelne Tag zählt — und mit einem guten Gefühl gelebt wird." — Jennifer Bakir

**Nala & Zuri-Block:** Eyebrow „Nala & Zuri", H3: „Zwei Charakterhunde — und der Grund, warum dieses System so klar ist." Texte (wörtlich): „**Nala** war mein erster eigener Malinois — aus einer KNPV-Leistungslinie: reizoffen, hoch aufmerksam, auf Leistung gezüchtet. Heute teile ich mein Leben mit ihr und mit **Zuri**, meinem jüngsten Hund — einem X-Herder (holländischer Schäferhund) aus behördlicher Beschlagnahmung. Kein zweiter Malinois, aber ein vergleichbar forderndes Kaliber: eigener Charakter, eigene Stärken, eigene Baustellen." / „Beide sind keine Anfängerhunde. Sie sind ehrlich, anspruchsvoll und lassen sich nichts erzählen. Und trotzdem sind sie heute voll familientauglich, verträglich, alltagstauglich — Zugpferde im positivsten Sinne. Nicht, weil sie es ‚geworden sind'. Sondern weil wir systematisch mit ihnen gearbeitet haben — mit Respekt vor den Unterschieden, nicht dagegen." / „Der Schlüssel dafür ist klare Kommunikation. Mit den Hunden. Mit den Haltern. Mit anderen Schulen. Dieses Prinzip zieht sich durch alles, was wir tun — vor Ort, online und im Pro-Bereich."
**Fun-Fact-Pills:** „Jenny ist 24/7 Hund." + „Jenny spricht fließend Mali."
Aktive Rolle (Absatz): „Die beiden sind kein Maskottchen — sie sind der Grund, warum diese Hundeschule so arbeitet, wie sie arbeitet. Nala und Zuri prägen die Themen des Trainings und unterstützen teilweise aktiv — etwa als ruhige Referenzhunde in Sozialkontakt- und Begegnungs-Settings. Wer mit einem Malinois aus KNPV-Leistungszucht und einem X-Herder aus behördlicher Beschlagnahmung lebt, redet nicht über Theorie."
Zwei Bild-Kacheln (Captions „Nala · Malinois · KNPV-Leistungslinie" / „Zuri · X-Herder · aus behördlicher Beschlagnahmung"), Link „→ Nala & Zuri auf Instagram" (@ooohmydog_hundetraining).

### 3.10 Stimmen / Proof **[L]** (`#stimmen`)
- **Google-Block:** „5,0 / 5 aus 48+ Google-Bewertungen", „Bewertet auf Google", Text: „‚Systematisch, ehrlich, wirksam.' — was unsere Kund:innen auf Google schreiben, hören wir auch vor Ort und online immer wieder." Link „Alle Google-Bewertungen lesen →".
- **Presse-Marquee:** DOGS Magazine · WDR · Süddeutsche · Partner Hund · Dogs Today DE · Hunde Welt.
- **Testimonial-Slider** (3 Stimmen, Auto-Rotation 6,5 s, pausiert bei Hover/Fokus/reduced-motion, Touch-Swipe):
  1. „Nach sechs Wochen ist unser Luis das erste Mal an einem Hund vorbeigegangen, ohne dass ich Angst hatte. Jenny arbeitet ruhig, klar, und wir verstehen endlich, was wir tun." — Katrin & Luis, Programm „Reizoffen & führbar" · Online
  2. „Wir haben vorher bei zwei anderen Trainern Lautstärke gebucht. Hier bekommen wir Methode. Das ist ein Unterschied wie Tag und Nacht." — Jan & Miro, Einzelcoaching Mülheim + Videoanalyse Pro
  3. „Als Hundeschule haben wir mit dem Pro Case Lab einen ehrlichen Sparringspartner. Unser Team spricht heute die gleiche Sprache bei Problemfällen." — Clara, Inhaberin einer Hundeschule, Pro & Business · Case Lab
- **Case Studies (Vorher/Nachher-Zeilen):** Signaturprogramm: „Leinenaggression, täglich Eskalationen" → „Ruhige Begegnungen, Halter in Führung" (9 Wochen) · Club: „Rückzug, Unsicherheit in der Stadt" → „Club-Begleitung, Alltag trägt" (6 Monate) · Pro & Business: „Schule mit 1:1-Stundendruck" → „Premium-System, 40 % mehr Marge" (12 Wochen)
- Showreel-Kachel („Showreel · 1:48 · Feld, Stadt, Videoanalyse").
- **Disclaimer (Pflicht):** „Alle dargestellten Ergebnisse, Testimonials und Case Studies sind exemplarisch und nicht automatisch 1:1 auf jeden Hund und jede Halter-Konstellation übertragbar. Es ist jedoch sehr wahrscheinlich, dass ein vergleichbarer Erfolg eintritt, wenn ihr konsequent nach dem System und den Anleitungen arbeitet. Training ist Zusammenarbeit — Ergebnisse entstehen durch die Umsetzung."

### 3.11 FAQ **[L]** (`#faq`)
Eyebrow „FAQ", Mono „Häufige Fragen", H2: „Ehrliche Antworten **vor** der Buchung." Akkordeon (erstes Item offen), 11 Einträge, wörtlich:
1. „Sind ‚reizoffen' oder ‚Aggression' bei euch Wertungen?" — „Nein. Das sind Beschreibungen dessen, was der Hund mitbringt — oft aufgrund von Genetik, Erfahrung oder Umwelt. Solange kein körperliches Problem dahintersteht, lassen sich diese Eigenschaften in die richtigen Bahnen lenken. Es ist unsere Aufgabe, dem Hund eine Struktur zu geben, in der diese Merkmale nicht zum Problem werden, sondern Teil eines funktionierenden Alltags sind."
2. „Wir wohnen nicht in Mülheim — kommt ihr für uns überhaupt infrage?" — „Ja. Die Säule Online ist genau dafür gebaut. Ob Videoanalyse, Signaturprogramm oder Club — ihr bekommt dieselbe Methodik digital, ohne Anfahrt. Die meisten unserer Online-Kunden haben uns noch nie persönlich gesehen. Und wenn ihr außerhalb von Deutschland lebt: Videoanalyse und Programm funktionieren über jede Zeitzone hinweg."
3. „Ist das Online-Kennenlern die abgespeckte Version vom Kennenlernen vor Ort?" — „Nein — für die meisten von euch ist es der bessere Einstieg. Auf einem fremden Platz zeigt euer Hund nicht sein Alltagsverhalten. Per Video sehen wir ihn zuhause, auf eurer Route, in genau der Situation, die euch belastet. Dieselbe Trainerin, dasselbe System — nur ohne Anfahrt und Wartezeit. Danach haltet ihr euren Trainingsweg schriftlich in den Händen."
4. „Funktioniert Videoanalyse wirklich so gut wie ein Termin vor Ort?" — „Für die Analyse oft besser: Training findet ohnehin in eurem Alltag statt — eure Straße, euer Wohnzimmer, euer Feldweg. Genau dort sehen wir euren Hund per Video. Und wir sind ehrlich über Grenzen: Was online lösbar ist, lösen wir online. Was einen Vor-Ort-Termin braucht, sagen wir euch direkt — und bieten ihn an, in Mülheim oder auf DACH-Tour."
5. „Funktioniert Videoanalyse, auch wenn ich im Ernstfall nicht filmen kann?" — „Ja — musst du auch nicht. Wie ein Hund reaktiv ist, wissen wir bereits; spannend ist, was davor und danach passiert. Filme das scheinbar Banale: die Minute vor der Begegnung, den Weg zur Tür, das Verhalten nach dem Spaziergang. Aus diesen vermeintlich unwichtigen Situationen schätzt Jenny das Verhalten ein — und interpretiert zuverlässig, wie dein Hund in der Reizsituation tickt."
6. „Warum kostet das Online-Kennenlern nur 49 €?" — „49 € sind die Eintrittskarte, kein Rabatt. Niedrige Hürte, volle Leistung: Jenny analysiert eure Situation persönlich — die Analyse ist dieselbe wie bei jedem unserer Kunden. Ihr startet diese Woche, statt auf einen der regelmäßig ausgebuchten Vor-Ort-Termine zu warten."
7. „Unser Hund ist reizoffen, unsicher oder schnell überfordert. Ist das bei euch richtig?" — „Das ist unser Schwerpunkt. Wir arbeiten ruhig, klar und systematisch — und bewusst ohne aversive Werkzeuge, auch bei anspruchsvollen Fällen. Jenny lebt selbst mit zwei Charakterhunden (Malinois und X-Herder); das ist kein theoretisches Training."
8. „Was ist der sinnvollste erste Schritt?" — „Entweder das Kennenlern-Einzeltraining (vor Ort oder hybrid) oder die Videoanalyse Pro (digital). Beides führt zu einer klaren Einschätzung und dem passenden nächsten Schritt — ohne Bindung."
9. „Arbeitet ihr auch mit Hundeschulen und anderen Trainer:innen?" — „Ja. In der Säule Pro & Business — mit Case Lab (Fallsupervision), Premium Hundeschule System (Strategie & Angebotsarchitektur) und Berufswechsel-Realitätscheck für Menschen vor der beruflichen Neuausrichtung."
10. „Was kostet das?" — „Alle Preise stehen auf dieser Seite: Online-Kennenlern 49 €, oooh my dog! Club 55 €/Monat, die App ab 0 €. Programme, Vor-Ort- und B2B-Leistungen werden nach Bedarf individuell besprochen — ein kurzes Gespräch, ein klarer Vorschlag. Kein ‚Analysegespräch', in dem euch ein vierstelliger Preis überraschend verkauft wird, und keine Zusatzkosten mitten im Programm."
11. „Wie viel Zeit muss ich investieren?" — „Wir rechnen realistisch. Jedes Angebot benennt klar, was zu tun ist — und was nicht. Eher weniger, aber richtig, statt viel und planlos."
12. „Sind die gezeigten Ergebnisse garantiert?" — „Alle dargestellten Ergebnisse sind exemplarisch und nicht 1:1 auf jeden Hund und jede Halter-Konstellation übertragbar. Wer konsequent nach dem System arbeitet und die Anleitungen umsetzt, hat jedoch eine sehr hohe Wahrscheinlichkeit, ähnliche Erfolge zu erreichen."

### 3.12 Abschluss-CTA **[D]** (`#kontakt`)
Vollflächiges Hintergrundbild mit dunklem Verlauf. Eyebrow „Nächster Schritt". H2: „Euer Hund wartet nicht. **Fangen wir an.**" Text: „Ob vor Ort, online oder als Hundeschule: Drei Fragen genügen, und ihr wisst, ob wir zueinander passen — und welcher Weg für euch der richtige ist." Vier CTAs: „Passen wir zueinander? →" (Selektor, Primary) · „Kennenlern-Coaching buchen →" (Buchungsportal) · „WhatsApp an Jenny →" · „Für Hundeschulen →" (`#pro`).

### 3.13 Footer **[D]**
Vier Linkspalten: **Vor Ort** (Kennenlern-Coaching · Orientierung & Führung · Soziales Lernen · Spezialthemen) · **Online** (Reizoffen & führbar · Videoanalyse Pro · oooh my dog! Club · Live-Sessions & Talk · Digitale Kurspakete · Saisonale Sprints) · **Pro & Business** (OMD Pro Case Lab · Premium Hundeschule System · Berufswechsel-Realitätscheck) · **Über uns** (Jenny · Methodik · Stimmen · FAQ · Kontakt). Rechts-/Fußzeile: Impressum & Datenschutz (als Modale), Kontaktdaten. Rechtstexte informell („6. Deine Rechte").

### 3.14 Sticky-Elemente & Overlays
- **StickyHelp-Pill** (unten rechts, erscheint nach ~15 % Scroll): Punkt + „2 Minuten" + „Passen wir zueinander? →" + Schließen-× (Schließen für 14 Tage merken, localStorage). Ausblenden, solange der Selektor offen ist oder der Kontakt-Bereich sichtbar ist.
- **Selektor-Modal** (siehe Abschnitt 4).

---

## 4. Der Selektor (Konversionsinstrument Nr. 1) — komplette Spezifikation

### 4.1 UX-Rahmen
- Modal als **Bottom-Sheet auf Mobile** (100dvh, oben gerundet), auf Desktop zentrierte Dialogbox (max. 920 px, max. 90vh). Backdrop dunkel + Blur. Escape/Backdrop-Klick schließt; Body-Scroll-Lock.
- Kopf: Eyebrow „Angebotsfinder", rechts Mono-Fortschritt „Schritt X von Y" bzw. „Empfehlung", Schließen-Button (40 px rund).
- Fortschrittsbalken (2 px Segmente, gefüllt = Gelb).
- Optionen als große Radio-Karten (min-height 56 px, Label + Mono-Sub, Rund-Indikator rechts; ausgewählt = gelbe Border).
- **Micro-Commitment-Toasts** nach jeder Auswahl (1,4 s, rotierend: „Schön — wir sehen uns das gemeinsam an." / „Starker Schritt. Weiter geht's." / „Perfekt — wir sind fast da." / „Klar, das passt. Noch ein Klick." / „Gut gewählt. Wir bauen euch den Weg." / „Stark — fundierte Entscheidung." / „Passt. Nur noch ein Moment.").
- Single-Choice schreitet nach 380 ms automatisch fort; „← zurück"-Button; „Nochmal starten" am Ende.
- Scroll-Hint-Pill („scrollen ↓"), wenn der Dialog-Inhalt überläuft.

### 4.2 Fragen & Optionen

**Schritt 1 — „Was wollt ihr verändern?"** (Hint: „Einmal klicken — wir zeigen euch direkt den passenden Einstieg."):
1. `begegnung` — „Hundebegegnungen sollen endlich entspannt werden" (Sub: „Leinenreaktivität, Pöbeln, Anspannung")
2. `jagd` — „Ich will die Jagd sicher unter Kontrolle" (Sub: „Jagdverhalten, Freilauf, Rückruf")
3. `aggression` — „Aggression verstehen und sicher managen" (Sub: „Gegen Menschen oder Hunde, Ressourcen, Familie")
4. `ruhe` — „Mein Hund ist ständig auf 180 — ich will Ruhe und Orientierung" (Sub: „Reizoffenheit, hohe Erregung")
5. `welpe` — „Wir wollen von Anfang an alles richtig machen" (Sub: „Welpe oder Junghund, Vorbeugung")
6. `pro` — „Ich arbeite selbst mit Hunden und will besser werden" (Sub: „Pro & Business · Hundeschulen, Trainer:innen")

**Schritt 2 (nur bei Optionen 1–5) — „Seid ihr aus Mülheim oder dem Ruhrgebiet?"** (Hint: „Damit wir euch den richtigen Einstieg zeigen — nicht irgendeinen."):
- `ja` — „Ja — Mülheim & Ruhrgebiet ist erreichbar" (Sub: „Vor-Ort-Termine am Hundeplatz sind machbar")
- `nein` — „Nein — zu weit weg" (Sub: „Online starten, DACH-Tour oder Mülheim-Besuch möglich")
- `online` — „Wir wollen lieber online arbeiten" (Sub: „Diese Woche starten — von überall, zeitzonenunabhängig")

**Schritt 2′ (nur bei Option 6 „pro") — „Woran arbeitet ihr?"**:
- `faelle` — „Schwierige Fälle sicher führen" · `system` — „Premium-System aufbauen" · `wechsel` — „Beruflicher Wechsel in Richtung Hund"

### 4.3 Empfehlungs-Matrix

| Wunsch | Ort | Ergebnis (Reihenfolge = Ranking) |
|---|---|---|
| begegnung | ja | Sozialkontakt (Basisgruppe Vor Ort) |
| begegnung | nein/online | 28-Tage-Challenge Leinenführigkeit → Signaturprogramm |
| jagd | ja | Jagdkontrolle (Exklusivgruppe Vor Ort) |
| jagd | nein/online | Signaturprogramm → Saisonale Sprints |
| aggression | ja | Einzelcoaching am Ort des Geschehens |
| aggression | nein/online | Videoanalyse Pro → Intensiv-Begleitung Exklusiv |
| ruhe | ja | Einzelcoaching am Ort des Geschehens |
| ruhe | nein/online | Signaturprogramm |
| welpe | ja | Welpen-Premium-Paket |
| welpe | nein/online | Online-Kennenlern → Welpen-Premium-Paket |
| pro | faelle | Case Lab → Premium-System |
| pro | system | Premium-System → Case Lab |
| pro | wechsel | Realitätscheck → Premium-System |

### 4.4 Ergebnis-Darstellung
- **Vor-Ort-Fälle** (Ort = ja, Wunsch ≠ welpe): Headline „Das passt zu eurem Thema:", Ergebnis-Karten (Tag, Titel, Beschreibung, „Ziel"-Zeile), danach hervorgehobene Box „Dein Einstieg" (gelbe Border + Badge): „Kennenlern-Einzel — der strukturierte Start." + Text „Jede Gruppe startet mit einem Kennenlern-Einzel. Wir sehen euch einmal sauber an, ordnen eure Themen ein und zeigen euch den sinnvollsten Weg — am Hundeplatz in Mülheim oder online per Videoanalyse." + zwei CTAs: „Am Hundeplatz buchen →" (Primary) und „Online-Kennenlern · 49 € →" (Ghost).
- **Alle anderen Fälle:** Headline „Für euch passt am besten:", Karten-Grid; erste Karte mit Badge „Beste Passung". Jede Karte: Tag, Titel, Beschreibung, optional **„Warum diese Empfehlung"-Box** (gelbe Linkskante) und CTA.
- **Wichtig:** Die Online-Route ist die *Empfehlung*, nie ein Trostpreis. Begründungstexte (Auswahl): Online-Kennenlern: „Weil wir euren Hund dort sehen wollen, wo das Problem lebt: zuhause, auf eurer Route, in genau der Situation, die euch belastet. Kein Trostpreis — für die meisten der bessere Einstieg." · Kurspaket: „Weil Begegnungen im Alltag trainiert werden, nicht auf dem Platz: 28 Tage, klare Aufgaben, euer Tempo." · Signaturprogramm: „Weil Reizoffenheit ein System braucht, keine Tipps: acht Wochen strukturierter Aufbau mit Feedback auf eure realen Alltagssituationen." · Videoanalyse Pro: „Weil wir euren Hund dort sehen wollen, wo das Problem lebt — zuhause, auf eurer Route, im echten Alltag." · Sprints: „Weil vorhersehbare Stressoren planbar sind: Wir bereiten euch vor, bevor die Saison zuschlägt." · Intensiv: „Weil Aggression keine Video-Bibliothek braucht, sondern laufende professionelle Einordnung."

### 4.5 Ergebnis-Texte (wörtlich, je Karte)
- **Sozialkontakt** (Tag „Basisgruppe · Vor Ort"): „Strukturierte, gut moderierte Hundebegegnungen für unsichere, überschwängliche oder pöbelige Hunde. Ihr lernt zu lesen, einzuordnen und passend zu reagieren." Ziel: „Begegnungen werden kalkulierbar — kein Stress, keine Dauer-Anspannung."
- **Jagdkontrolle** (Tag „Exklusivgruppe · Vor Ort"): „Arbeit am echten Jagdverhalten — Rückruf unter starken Reizen, Impulskontrolle, alternative Verhaltensketten. Für Hunde, die jagen wollen." Ziel: „Freilauf wird wieder möglich — ihr führt, statt festzuhalten."
- **Einzelcoaching am Ort des Geschehens** (Tag „Individuell · Vor Ort"): „Maßgeschneidertes 1:1-Training direkt dort, wo die Herausforderung entsteht — Stadt, Park, Zuhause oder unterwegs. Für komplexe, alltagsnahe Themen." Ziel: „Ihr arbeitet genau an eurem Thema, im Tempo eures Hundes."
- **Kennenlern-Einzel · Online** (Tag „Einstieg · Online"): „30-Minuten-Zoomtermin mit Anamnesebogen, Videoanalyse von 3–5 Alltagsszenen, strategischer Trainingsplanung und schriftlicher Nachbereitung. 49 €. Von überall aus." CTA: „Online-Kennenlern für 49 € buchen".
- **Signaturprogramm „Reizoffen & führbar"** (Tag „Programm · Online · 8 Wochen"): „8 Wochen Premium-Programm für reizoffene, unsichere oder schnell überforderte Hunde. Intake, Videoanalyse, Kernmodule, Live-Call pro Woche, Homework-Reviews. Drei feste Starts pro Jahr: 15.02. · 15.05. · 15.10." CTA: „Zum Signaturprogramm" (`#anywhere`).
- **Videoanalyse Pro** (Tag „Asynchron · Online · 49 €"): „Ihr sendet Alltagsszenen, füllt eine strukturierte Anamnese aus und erhaltet eine priorisierte Analyse plus Trainingsplan. Einmalige fundierte Einschätzung, 49 €." CTA: „Zur Videoanalyse Pro" (`#anywhere`).
- **28-Tage-Challenge: Leinenführigkeit** (Tag „Digitales Kurspaket · Ab 89 €"): „Voraufgezeichneter Kurs mit begleitender Aufgabenserie per E-Mail und 2 Teilnahmen am oooh my dog! Talk. Struktur statt Zufall — gegen Ziehen und Pöbeln an der Leine." CTA: „Zur 28-Tage-Challenge" (`#anywhere`).
- **Saisonale Sprints** (Tag „4 Wochen · Online"): „Vier Wochen Fokus auf ein konkretes Thema — z. B. Jagdkontrolle oder Urlaubsvorbereitung. Aufgaben per E-Mail, wöchentliche Calls mit Nachbesprechung, OMD Club lite für die Sprint-Dauer." CTA: „Zu den Sprints" (`#anywhere`).
- **Intensiv-Begleitung Exklusiv** (Tag „Exklusiv · Auf Anfrage"): „6–8 Wochen engmaschige asynchrone Begleitung mit täglichen bis wöchentlichen Video-Reviews — persönlich von Jenny. Für schwere Fälle: Aggression, Angst, Listenhunde." CTA: „Verfügbarkeit anfragen" (WhatsApp).
- **Welpen-Premium-Paket** (Tag „Premium-Paket · Welpe"): „Der saubere Start ins Hundeleben — mit System. Inhalte: 1× Kennenlern-Einzel, 6× freie Basisgruppen-Teilnahme, 2× Einzeltraining am Wunschort, 3× oooh my dog! Talks. Inklusive: Begrüßung, Willkommensbox, klare Trainingsstruktur, Hausaufgaben, WhatsApp-Support, flexible Terminbuchung." CTA: „Welpen-Premium-Paket anfragen" (WhatsApp).
- **Pro-Ergebnisse:** Case Lab / Premium Hundeschule System / Realitätscheck — Texte wie in Sektion 3.6, CTAs verlinken auf `#pro`.

---

## 5. Proof-Arsenal (nur diese Fakten verwenden — nichts erfinden)

Google-Bewertung 5,0 (echt) · 1 400+ begleitete Hunde · § 11 TSchG-zertifizierte Hundetrainerin · Behördliche Zulassung nach § 6 LHundG NRW (gefährliche Hunde / bestimmte Rassen) · **„In Ausbildung zur zertifizierten Verhaltensberaterin für Hunde"** (exakt so — niemals „zertifizierte Verhaltensberaterin" ohne „in Ausbildung") · Vorstand im Verein für Deutsche Schäferhunde (SV), OG Mülheim/Ruhr · WDR-Interviewpartnerin · Initiatorin & Moderatorin der Ruhrpott-Hundemesse · 0 % aversive Methoden — auch bei schweren Fällen · 13 Jahre Erfahrung (Kommunikation/Führung) + Studium Erwachsenenbildung · Kennenlern-Termine vor Ort regelmäßig ausgebucht (echte Knappheit) · Nala (Malinois, KNPV-Leistungslinie) & Zuri (X-Herder aus behördlicher Beschlagnahmung).

**Preise (final):** Online-Kennenlern 49 € · Videoanalyse Pro 49 € einmalig · Club 55 €/Monat · Kurspakete ab 89 € · App Free/9,90 €/19,90 €. **Keine Preise erfinden** für Signaturprogramm, Sprints, Live-Sessions, Intensiv (Warteliste/„auf Anfrage"-Logik).

**Verbote:** keine erfundenen Zahlen/Fakten außerhalb des Arsenals · keine fiktiven Referenzen oder Kundenstimmen · keine Fake-Knappheit, keine Countdown-Timer · keine Stockfoto-Klischees, kein Hundeschul-Kitsch (Pfoten-Cliparts o. ä.) · keine Dominanz-/Drill-Ästhetik · Gelb nie als Textfarbe · kein Italic · keine Wettbewerber-Nennungen.

**Externe Ziele (CTAs):** Buchungsportal `https://portal.oooh-my-dog.de` (vor Ort bzw. Online-Kennenlern — zwei getrennte Buchungsstrecken), WhatsApp-Kanal, Instagram @ooohmydog_hundetraining. Alle externen CTAs in neuem Tab.

---

## 6. Abnahme-Checkliste

- [ ] Sektionsreihenfolge exakt wie Abschnitt 3; Anker-IDs stimmen; Nav verlinkt alle
- [ ] Selektor: 2-Fragen-Flow (3 bei Pro), Matrix aus 4.3 korrekt, Begründungs-Boxen, Bottom-Sheet Mobile, Toasts, Fortschritt, Escape/Backdrop, localStorage-Frei
- [ ] „Nächster Start" am Signaturprogramm berechnet sich dynamisch aus 15.02./15.05./15.10.
- [ ] Alle Preise exakt wie Abschnitt 5; kein Preis am Signaturprogramm
- [ ] „Sie/Ihnen" kommt nirgends vor (auch Footer, Modale, Rechtstexte)
- [ ] Design-System: Tokens statt harter Farben, Gelb nie als Text, kein Italic, AA-Kontraste, 44-px-Touch-Targets, reduced-motion-Alternativen
- [ ] Mobile (390 px) und Desktop (1440 px) Sichtprüfung aller Sektionen
- [ ] Keine fiktiven Namen/Referenzen; Disclaimer unter den Stimmen vorhanden
