"use client";

import { useEffect, useMemo, useState } from "react";
import { BOOK_ONLINE_URL, BOOK_URL, WA_URL } from "@/app/lib/constants";

type Answers = Record<string, string | string[]>;

type Option = { val: string; label: string; sub?: string };

type Step = {
  id: string;
  question: string;
  hint: string;
  when?: (a: Answers) => boolean;
  multi?: boolean;
  max?: number;
  options: Option[];
};

const SELECTOR_STEPS: Step[] = [
  {
    id: "track",
    question: "Was passt zu euch?",
    hint: "Einmal klicken — wir zeigen euch direkt den passenden Einstieg.",
    options: [
      { val: "vor-ort", label: "Vor Ort in Mülheim", sub: "Gruppenstunden, Einzelcoaching, Kennenlern-Stunde" },
      { val: "online", label: "Online im gesamten DACH-Raum", sub: "Videoanalyse, Online-Kennenlern, Programme" },
      { val: "paket", label: "Premium-Paket buchen", sub: "Welpe · Alltag · Traveller — kuratierte Bundles" },
      { val: "pro", label: "Hundeschule oder Trainer:in", sub: "Fallsupervision, Premium-System, Berufswechsel" },
    ],
  },
  {
    id: "paket_kind",
    when: (a) => a.track === "paket",
    question: "Welches Paket passt zu eurer Situation?",
    hint: "Drei kuratierte Premium-Bundles — alle inklusive Begrüßung, Willkommensbox, WhatsApp-Support.",
    options: [
      { val: "welpen", label: "Welpen-Premium-Paket", sub: "1× Kennenlern · 6× Basisgruppen · 2× Einzel · 3× Talks" },
      { val: "leichtigkeit", label: "Leichtigkeit im Alltag-Paket", sub: "25 Einheiten Basisgruppen · 2× Talks" },
      { val: "traveller", label: "Traveller Intensivpaket", sub: "3× Online-Einzel · 4× Einzel (Mülheim) · 2× Talks" },
    ],
  },
  {
    id: "topic",
    when: (a) => a.track === "vor-ort",
    question: "Was sind eure wichtigsten Themen?",
    hint: "Mehrfachauswahl möglich — wählt bis zu drei Themen.",
    multi: true,
    max: 3,
    options: [
      { val: "orientierung", label: "Orientierung — ich brauche erst Klarheit", sub: "Profi-Blick auf Situation + passender Weg" },
      { val: "basis", label: "Basis & Junghund", sub: "Signalkontrolle, saubere Grundlagen" },
      { val: "fuehrung", label: "Führung & Grenzen im Alltag", sub: "Lenken und Grenzen setzen" },
      { val: "freilauf", label: "Freilauf & Rückruf", sub: "Unsichtbare Leine" },
      { val: "sozial", label: "Sozialkontakt & Hundebegegnung", sub: "Begegnungen ruhig und kalkulierbar" },
      { val: "praezision", label: "Präzision & Longieren", sub: "Distanzarbeit, Körpersprache" },
      { val: "bh", label: "Begleithundeprüfung", sub: "Prüfungsvorbereitung, alltagsnah" },
      { val: "giftkoeder", label: "Anti-Giftköder & Alltagssicherheit", sub: "Zuverlässig abrufbar, keine Hoffnung" },
      { val: "jagd", label: "Jagdverhalten & Jagdkontrolle", sub: "Rückruf unter echten Reizen" },
      { val: "komplex", label: "Komplex oder eskaliert — 1:1 nötig", sub: "Einzelcoaching am Ort des Geschehens" },
    ],
  },
  {
    id: "digital",
    when: (a) => a.track === "online",
    question: "Wie wollt ihr online arbeiten?",
    hint: "Alles digital — ortsunabhängig im gesamten DACH-Raum.",
    options: [
      { val: "einstieg", label: "Orientierung — 30 Min Zoom + Videoanalyse", sub: "Online-Kennenlern · 49 €" },
      { val: "einschaetzung", label: "Einmalige fundierte Einschätzung", sub: "Videoanalyse Pro · asynchron" },
      { val: "programm", label: "Strukturierter Weg (8–10 Wochen)", sub: "Signaturprogramm · reizoffen, unsicher, intensiv" },
      { val: "laufend", label: "Laufende Begleitung (Membership)", sub: "oooh my dog! Club" },
      { val: "messenger", label: "Videoanalyse & Voice-Beratung", sub: "Kontingent · Videosequenzen + Voicenachrichten einreichen" },
    ],
  },
  {
    id: "pro_goal",
    when: (a) => a.track === "pro",
    question: "Woran arbeitet ihr?",
    hint: "",
    options: [
      { val: "faelle", label: "Schwierige Fälle sicher führen", sub: "Fallsupervision, Methodik" },
      { val: "system", label: "Premium-System aufbauen", sub: "Angebote, Preise, Kundenführung" },
      { val: "wechsel", label: "Beruflicher Wechsel in Richtung Hund", sub: "§11, Sachkunde, Realitätscheck" },
    ],
  },
];

const TOPIC_TO_COURSE: Record<string, string> = {
  basis: "gruppe-signalkontrolle",
  fuehrung: "gruppe-lenken",
  freilauf: "gruppe-unsichtbare-leine",
  sozial: "gruppe-sozialkontakt",
  praezision: "gruppe-longieren",
  bh: "gruppe-begleithunde",
  giftkoeder: "gruppe-giftkoeder",
  jagd: "gruppe-jagdkontrolle",
  komplex: "einzelcoaching",
  orientierung: "orientierung-note",
};

function recommend(answers: Answers): string[] {
  const track = answers.track as string | undefined;

  if (track === "paket") {
    const k = answers.paket_kind as string | undefined;
    if (k === "welpen") return ["paket-welpen"];
    if (k === "leichtigkeit") return ["paket-leichtigkeit"];
    if (k === "traveller") return ["paket-traveller"];
    return ["paket-welpen", "paket-leichtigkeit", "paket-traveller"];
  }

  if (track === "pro") {
    if (answers.pro_goal === "faelle") return ["case-lab", "premium-system"];
    if (answers.pro_goal === "system") return ["premium-system", "case-lab"];
    if (answers.pro_goal === "wechsel") return ["berufswechsel-check", "premium-system"];
    return ["premium-system", "case-lab"];
  }

  if (track === "online") {
    const d = answers.digital as string | undefined;
    if (d === "einstieg") return ["online-kennenlern"];
    if (d === "einschaetzung") return ["videoanalyse"];
    if (d === "programm") return ["signatur"];
    if (d === "laufend") return ["club"];
    if (d === "messenger") return ["messenger-beratung"];
    return ["online-kennenlern"];
  }

  const topics = (answers.topic as string[] | undefined) || [];
  if (!topics.length) return ["orientierung-note"];
  const keys: string[] = [];
  for (const t of topics) {
    const k = TOPIC_TO_COURSE[t];
    if (k && !keys.includes(k)) keys.push(k);
  }
  return keys.length ? keys : ["orientierung-note"];
}

type Result = {
  title: string;
  tag: string;
  desc: string;
  ziel?: string;
  ctaLabel?: string;
  ctaHref?: string;
  external?: boolean;
};

const RESULT_MAP: Record<string, Result> = {
  "orientierung-note": {
    title: "Orientierungsgespräch",
    tag: "Einstieg · Vor Ort",
    desc: "Ihr braucht erst Klarheit? Genau dafür ist das Kennenlern-Einzel da. Wir sehen euch an, klären eure Themen und zeigen euch den sinnvollsten Weg für alles Weitere.",
    ziel: "Klarheit über eure Ausgangslage und einen individuellen Trainingsweg — statt wochenlang zu recherchieren.",
  },
  "gruppe-signalkontrolle": {
    title: "Signalkontrolle",
    tag: "Basisgruppe · Vor Ort",
    desc: "Saubere, wirksame Signale für die Situationen, die im Alltag zählen — Sitz, Platz, Bleib, Rückruf, Stopp. Nicht im Wohnzimmer, sondern dort, wo es darauf ankommt.",
    ziel: "Euer Hund hört, weil er versteht — auch unter Reizen.",
  },
  "gruppe-lenken": {
    title: "Lenken & Grenzen setzen",
    tag: "Basisgruppe · Vor Ort",
    desc: "Klare, faire Führung ohne Härte. Ihr lernt, Räume zu eröffnen, Grenzen sauber zu kommunizieren und euren Hund durch komplexe Situationen zu lenken.",
    ziel: "Weniger Diskussion, mehr Ruhe — euer Hund weiß, was okay ist und was nicht.",
  },
  "gruppe-unsichtbare-leine": {
    title: "Unsichtbare Leine",
    tag: "Basisgruppe · Vor Ort",
    desc: "Freilaufarbeit auf hohem Niveau: orientiertes Mitlaufen, sauberer Rückruf, freiwilliges Mitdenken. Die Verbindung, die hält — auch ohne physische Leine.",
    ziel: "Spaziergänge werden leicht — ihr könnt euch auf euren Hund verlassen.",
  },
  "gruppe-sozialkontakt": {
    title: "Sozialkontakt",
    tag: "Basisgruppe · Vor Ort",
    desc: "Strukturierte, gut moderierte Hundebegegnungen für unsichere, überschwängliche oder pöbelige Hunde. Ihr lernt zu lesen, einzuordnen und passend zu reagieren.",
    ziel: "Begegnungen werden kalkulierbar — kein Stress, keine Dauer-Anspannung.",
  },
  "gruppe-longieren": {
    title: "Longieren",
    tag: "Basisgruppe · Vor Ort",
    desc: "Präzise Distanzarbeit über Körpersprache. Ihr lernt, euren Hund auf Entfernung zu lenken, fokussiert zu halten und feinabgestimmt zu führen.",
    ziel: "Minimale Signale, große Wirkung — überträgt sich direkt in den Alltag.",
  },
  "gruppe-begleithunde": {
    title: "Begleithunde",
    tag: "Basisgruppe · Vor Ort",
    desc: "Vorbereitung auf die Begleithundeprüfung — alltagsnah, fair und mit echtem Trainingsnutzen. Auch ohne Prüfungsambition ein Programm für saubere Grundlagen.",
    ziel: "Anerkannter Nachweis als Team — und spürbar entspannterer Alltag.",
  },
  "gruppe-giftkoeder": {
    title: "Anti-Giftköder",
    tag: "Exklusivgruppe · Vor Ort",
    desc: "Strukturiertes Anti-Giftköder-Training mit echtem Aufbau — vom Markersignal über Distanzarbeit bis zur sauberen Generalisierung im Alltag. Verlässlich abrufbar.",
    ziel: "Die Sorge „was, wenn er etwas frisst“ fällt weg — auf jedem Spaziergang.",
  },
  "gruppe-jagdkontrolle": {
    title: "Jagdkontrolle",
    tag: "Exklusivgruppe · Vor Ort",
    desc: "Arbeit am echten Jagdverhalten — Rückruf unter starken Reizen, Impulskontrolle, alternative Verhaltensketten. Für Hunde, die jagen wollen.",
    ziel: "Freilauf wird wieder möglich — ihr führt, statt festzuhalten.",
  },
  einzelcoaching: {
    title: "Einzelcoaching am Ort des Geschehens",
    tag: "Individuell · Vor Ort",
    desc: "Maßgeschneidertes 1:1-Training direkt dort, wo die Herausforderung entsteht — Stadt, Park, Zuhause oder unterwegs. Für komplexe, alltagsnahe Themen.",
    ziel: "Ihr arbeitet genau an eurem Thema, im Tempo eures Hundes.",
  },
  "online-kennenlern": {
    title: "Kennenlern-Einzel · Online",
    tag: "Einstieg · Online",
    desc: "30-Minuten-Zoomtermin mit Anamnesebogen, Videoanalyse von 3–5 Alltagsszenen, strategischer Trainingsplanung und schriftlicher Nachbereitung. 49 €. Von überall aus.",
    ctaLabel: "Online-Kennenlern für 49 € buchen",
    ctaHref: BOOK_ONLINE_URL,
    external: true,
  },
  signatur: {
    title: "Signaturprogramm",
    tag: "Programm · Online",
    desc: "8–10 Wochen Premium-Programm für reizoffene, unsichere oder schnell überforderte Hunde. Intake, Videoanalyse, Kernmodule, Live-Call pro Woche, Homework-Reviews.",
    ctaLabel: "Zum Signaturprogramm",
    ctaHref: "#anywhere",
  },
  videoanalyse: {
    title: "Videoanalyse Pro",
    tag: "Asynchron · Online",
    desc: "Ihr sendet Alltagsszenen, füllt eine strukturierte Anamnese aus und erhaltet eine priorisierte Analyse plus Trainingsplan. Einmalige fundierte Einschätzung.",
    ctaLabel: "Zur Videoanalyse Pro",
    ctaHref: "#anywhere",
  },
  club: {
    title: "oooh my dog! Club",
    tag: "Membership · Online",
    desc: "Regelmäßige Live-Sessions, Themenbibliothek, Q&A, Monatsfokus, Community. Planbare Begleitung statt jedes Mal neu buchen.",
    ctaLabel: "Zum Club",
    ctaHref: "#anywhere",
  },
  "messenger-beratung": {
    title: "Videoanalyse & Voice-Beratung",
    tag: "Asynchron · Kontingent",
    desc: "Premium-Beratung im Tempo eures Alltags: Ihr bucht vorab ein Kontingent und reicht über den gesamten Zeitraum Videosequenzen und Sprachnachrichten ein. Wir antworten mit strukturierten Videoanalysen und Voice-Messages — kein Termindruck, keine Anfahrt.",
    ctaLabel: "Zur Videoanalyse & Voice-Beratung",
    ctaHref: "#anywhere",
  },
  "case-lab": {
    title: "OMD Pro Case Lab",
    tag: "Fallsupervision · Pro & Business",
    desc: "Fallsupervision und strategische Begleitung für Hundeschulen mit anspruchsvollen Fällen. Mehr Sicherheit, bessere Kundenführung.",
    ctaLabel: "Zum Case Lab",
    ctaHref: "#pro",
  },
  "premium-system": {
    title: "Premium Hundeschule System",
    tag: "Strategie · Pro & Business",
    desc: "Strategie, Struktur und skalierbare Angebotslogik für Hundeschulen. Angebotsarchitektur, Kurslogik und Premium-Positionierung.",
    ctaLabel: "Zum Premium-System",
    ctaHref: "#pro",
  },
  "berufswechsel-check": {
    title: "Berufswechsel Hund · Realitätscheck",
    tag: "Orientierung · Pro & Business",
    desc: "Ehrliche Orientierung für Menschen, die beruflich in den Hundebereich wollen. Einordnung, Qualitätsmaßstäbe, saubere Entscheidungshilfe.",
    ctaLabel: "Zum Realitätscheck",
    ctaHref: "#pro",
  },
  "paket-welpen": {
    title: "Welpen-Premium-Paket",
    tag: "Premium-Paket · Welpe",
    desc: "Der saubere Start ins Hundeleben — mit System. Inhalte: 1× Kennenlern-Einzel, 6× freie Basisgruppen-Teilnahme, 2× Einzeltraining am Wunschort, 3× oooh my dog! Talks. Inklusive: Begrüßung, Willkommensbox, klare Trainingsstruktur, Hausaufgaben, WhatsApp-Support, flexible Terminbuchung.",
    ctaLabel: "Welpen-Premium-Paket anfragen",
    ctaHref: WA_URL,
    external: true,
  },
  "paket-leichtigkeit": {
    title: "Leichtigkeit im Alltag-Paket",
    tag: "Premium-Paket · Alltag",
    desc: "Alltag, der wieder leicht wird — durch Wiederholung und Routine. Inhalte: 25 Einheiten Basisgruppen, 2× oooh my dog! Talks. Inklusive: Begrüßung, Willkommensbox, klare Trainingsstruktur, Hausaufgaben, WhatsApp-Support, flexible Terminbuchung.",
    ctaLabel: "Leichtigkeit-Paket anfragen",
    ctaHref: WA_URL,
    external: true,
  },
  "paket-traveller": {
    title: "Traveller Intensivpaket",
    tag: "Premium-Paket · Intensiv",
    desc: "Intensives Premium-Training, das auf Distanz funktioniert. Inhalte: 3× Online-Einzel, 4× Einzeltraining (Mülheim), 2× oooh my dog! Talks. Inklusive: Begrüßung, Willkommensbox, klare Trainingsstruktur, Hausaufgaben, WhatsApp-Support, flexible Terminbuchung.",
    ctaLabel: "Traveller-Paket anfragen",
    ctaHref: WA_URL,
    external: true,
  },
};

type SelectorProps = { open: boolean; onClose: () => void };

export default function Selector({ open, onClose }: SelectorProps) {
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [finished, setFinished] = useState(false);

  const activeSteps = useMemo(
    () => SELECTOR_STEPS.filter((s) => !s.when || s.when(answers)),
    [answers]
  );
  const step = activeSteps[stepIdx];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const reset = () => {
    setStepIdx(0);
    setAnswers({});
    setFinished(false);
  };

  const advance = (a: Answers = answers) => {
    const steps = SELECTOR_STEPS.filter((s) => !s.when || s.when(a));
    if (stepIdx + 1 >= steps.length) setFinished(true);
    else setStepIdx(stepIdx + 1);
  };

  const pick = (val: string) => {
    if (!step) return;
    if (step.multi) {
      const cur = (answers[step.id] as string[] | undefined) || [];
      const has = cur.includes(val);
      let next: string[];
      if (has) next = cur.filter((v) => v !== val);
      else if (step.max && cur.length >= step.max) next = [...cur.slice(1), val];
      else next = [...cur, val];
      setAnswers({ ...answers, [step.id]: next });
    } else {
      const updated = { ...answers, [step.id]: val };
      setAnswers(updated);
      setTimeout(() => advance(updated), 220);
    }
  };

  const back = () => {
    if (stepIdx > 0) setStepIdx(stepIdx - 1);
  };

  if (!open) return null;

  const track = answers.track as string | undefined;
  const results = finished ? recommend(answers).map((k) => RESULT_MAP[k]).filter(Boolean) : [];
  const isVorOrt = finished && track === "vor-ort";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(10,8,6,0.82)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        animation: "fadeUp .3s ease both",
      }}
      onClick={onClose}
      role="presentation"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="selector-title"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--line-2)",
          borderRadius: 8,
          width: "min(920px, 100%)",
          maxHeight: "90vh",
          overflow: "auto",
          padding: "40px 48px 48px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
          <div>
            <div className="mono" style={{ color: "var(--brass)" }}>Angebotsfinder</div>
            <div className="mono" style={{ marginTop: 4 }}>
              {finished ? "Empfehlung" : `Schritt ${stepIdx + 1} von ${activeSteps.length}`}
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Dialog schließen"
            style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--ink-3)", textTransform: "uppercase" }}
          >
            schließen ×
          </button>
        </div>

        {!finished && (
          <div style={{ display: "flex", gap: 4, marginBottom: 40 }} aria-hidden="true">
            {activeSteps.map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 2,
                  background: i <= stepIdx ? "var(--brass)" : "var(--line-2)",
                  transition: "background .3s",
                }}
              />
            ))}
          </div>
        )}

        {!finished && step && (
          <div>
            <h3 id="selector-title" className="serif" style={{ fontSize: 36, lineHeight: 1.08, letterSpacing: "-0.02em", fontWeight: 360, marginBottom: 12 }}>
              {step.question}
            </h3>
            {step.hint && <p className="mono">{step.hint}</p>}

            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 8 }} role={step.multi ? "group" : "radiogroup"} aria-labelledby="selector-title">
              {step.options.map((o) => {
                const selected = step.multi
                  ? ((answers[step.id] as string[] | undefined) || []).includes(o.val)
                  : answers[step.id] === o.val;
                return (
                  <button
                    key={o.val}
                    onClick={() => pick(o.val)}
                    type="button"
                    role={step.multi ? "checkbox" : "radio"}
                    aria-checked={selected}
                    style={{
                      textAlign: "left",
                      padding: "20px 24px",
                      background: selected ? "var(--bg-3)" : "var(--bg-2)",
                      border: `1px solid ${selected ? "var(--brass)" : "var(--line-2)"}`,
                      borderRadius: 4,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all .15s",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 16, color: "var(--cream)", marginBottom: o.sub ? 4 : 0 }}>{o.label}</div>
                      {o.sub && <div className="mono">{o.sub}</div>}
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: step.multi ? 3 : 50,
                        border: `1px solid ${selected ? "var(--brass)" : "var(--ink-4)"}`,
                        background: selected ? "var(--brass)" : "transparent",
                        transition: "all .15s",
                      }}
                    />
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button
                onClick={back}
                disabled={stepIdx === 0}
                type="button"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: stepIdx === 0 ? "var(--ink-4)" : "var(--ink-2)",
                  cursor: stepIdx === 0 ? "default" : "pointer",
                }}
              >
                ← zurück
              </button>
              {step.multi && (
                <button
                  className="btn btn-primary"
                  onClick={() => advance()}
                  type="button"
                  disabled={!((answers[step.id] as string[] | undefined) || []).length}
                  style={{ opacity: ((answers[step.id] as string[] | undefined) || []).length ? 1 : 0.4 }}
                >
                  Weiter <span className="arrow" aria-hidden="true">→</span>
                </button>
              )}
            </div>
          </div>
        )}

        {finished && isVorOrt && (
          <div>
            <h3 id="selector-title" className="serif" style={{ fontSize: 32, lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 360, marginBottom: 12 }}>
              Das passt zu eurem Thema:
            </h3>
            <p className="mono">
              {results.length > 1 ? `${results.length} Empfehlungen · Einstieg ist immer das Kennenlern-Einzel.` : "Euer Kurs · Einstieg ist immer das Kennenlern-Einzel."}
            </p>

            <div style={{ marginTop: 28, display: "grid", gap: 12 }}>
              {results.map((r) => (
                <div
                  key={r.title}
                  style={{
                    padding: "22px 24px 20px",
                    background: "var(--bg-2)",
                    border: "1px solid var(--line-2)",
                    borderRadius: 4,
                  }}
                >
                  <div className="mono" style={{ marginBottom: 8 }}>{r.tag}</div>
                  <h4 className="serif" style={{ fontSize: 22, letterSpacing: "-0.02em", fontWeight: 400, marginBottom: 10, lineHeight: 1.2 }}>
                    {r.title}
                  </h4>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", marginBottom: r.ziel ? 12 : 0 }}>{r.desc}</p>
                  {r.ziel && (
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--cream)", borderTop: "1px solid var(--line)", paddingTop: 10 }}>
                      <span style={{ color: "var(--brass)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", marginRight: 8 }}>Ziel</span>
                      {r.ziel}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, padding: "28px 28px 24px", background: "var(--bg-3)", border: "1px solid var(--brass)", borderRadius: 4, position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  left: 24,
                  background: "var(--brass)",
                  color: "var(--bg)",
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                }}
              >
                Dein Einstieg
              </div>
              <h4 className="serif" style={{ fontSize: 24, letterSpacing: "-0.02em", fontWeight: 400, marginBottom: 10, lineHeight: 1.2 }}>
                Kennenlern-Einzel — der strukturierte Start.
              </h4>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", marginBottom: 20 }}>
                Jede Gruppe startet mit einem Kennenlern-Einzel. Wir sehen euch einmal sauber an, ordnen eure Themen ein und zeigen euch den sinnvollsten Weg — am Hundeplatz in Mülheim oder online per Videoanalyse.
              </p>
              <div className="kl-ctas" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <a className="btn btn-primary" href={BOOK_URL} target="_blank" rel="noopener" style={{ justifyContent: "center" }}>
                  Am Hundeplatz buchen <span className="arrow" aria-hidden="true">→</span>
                </a>
                <a className="btn btn-ghost" href={BOOK_ONLINE_URL} target="_blank" rel="noopener" style={{ justifyContent: "center", borderColor: "var(--brass)" }}>
                  Online-Kennenlern · 49 € <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
              <button className="btn btn-ghost" onClick={reset} type="button">Nochmal starten</button>
            </div>
          </div>
        )}

        {finished && !isVorOrt && (
          <div>
            <h3 id="selector-title" className="serif" style={{ fontSize: 32, lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 360, marginBottom: 12 }}>
              Für euch passt am besten:
            </h3>
            <p className="mono">Eure Empfehlung — direkt weitergehen.</p>

            <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: results.length > 1 ? "1fr 1fr" : "1fr", gap: 16 }} className="result-grid">
              {results.map((r, i) => (
                <div
                  key={r.title}
                  style={{
                    padding: "28px 28px 24px",
                    background: i === 0 ? "var(--bg-3)" : "var(--bg-2)",
                    border: `1px solid ${i === 0 ? "var(--brass)" : "var(--line-2)"}`,
                    borderRadius: 4,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {i === 0 && results.length > 1 && (
                    <div
                      style={{
                        position: "absolute",
                        top: -10,
                        left: 24,
                        background: "var(--brass)",
                        color: "var(--bg)",
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        padding: "3px 10px",
                      }}
                    >
                      Beste Passung
                    </div>
                  )}
                  <div className="mono" style={{ marginBottom: 10 }}>{r.tag}</div>
                  <h4 className="serif" style={{ fontSize: 22, letterSpacing: "-0.02em", fontWeight: 400, marginBottom: 12, lineHeight: 1.15 }}>
                    {r.title}
                  </h4>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", marginBottom: 20, flex: 1 }}>{r.desc}</p>
                  {r.ctaLabel && r.ctaHref && (
                    <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16 }}>
                      <a
                        className="btn btn-primary"
                        href={r.ctaHref}
                        target={r.external ? "_blank" : undefined}
                        rel={r.external ? "noopener" : undefined}
                        onClick={r.external ? undefined : onClose}
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        {r.ctaLabel} <span className="arrow" aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
              <button className="btn btn-ghost" onClick={reset} type="button">Nochmal starten</button>
            </div>
          </div>
        )}

        <style>{`
          @media (max-width: 700px) {
            .result-grid { grid-template-columns: 1fr !important; }
            .kl-ctas { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </div>
  );
}
