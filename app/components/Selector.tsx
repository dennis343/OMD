"use client";

import { useEffect, useMemo, useState } from "react";
import { BOOK_ONLINE_URL, BOOK_URL, GRUPPEN_URL } from "@/app/lib/constants";

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
    hint: "Einmal klicken — wir zeigen euch direkt die passenden Angebote.",
    options: [
      { val: "vor-ort", label: "Vor Ort in Mülheim", sub: "Gruppenstunden, Einzelcoaching, Kennenlern-Stunde" },
      { val: "online", label: "Online im gesamten DACH-Raum", sub: "Videoanalyse, Online-Kennenlern, Programme" },
      { val: "pro", label: "Hundeschule oder Trainer:in", sub: "Fallsupervision, Premium-System, Berufswechsel" },
    ],
  },
  {
    id: "topic",
    when: (a) => a.track === "vor-ort",
    question: "Was ist euer wichtigstes Thema?",
    hint: "Wählt das Thema, das euch am meisten beschäftigt.",
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
      { val: "messenger", label: "Hilfe per Messenger im Alltag", sub: "Messengerberatung · schriftlich + Videofeedback" },
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

function recommend(answers: Answers): string[] {
  const track = answers.track as string | undefined;

  if (track === "pro") {
    if (answers.pro_goal === "faelle") return ["case-lab", "premium-system"];
    if (answers.pro_goal === "system") return ["premium-system", "case-lab"];
    if (answers.pro_goal === "wechsel") return ["berufswechsel-check", "premium-system"];
    return ["premium-system", "case-lab"];
  }

  if (track === "online") {
    const d = answers.digital as string | undefined;
    if (d === "einstieg") return ["online-kennenlern", "videoanalyse"];
    if (d === "einschaetzung") return ["videoanalyse", "online-kennenlern"];
    if (d === "programm") return ["signatur", "online-kennenlern"];
    if (d === "laufend") return ["club", "signatur"];
    if (d === "messenger") return ["messenger-beratung", "videoanalyse"];
    return ["online-kennenlern", "videoanalyse"];
  }

  const topic = answers.topic as string | undefined;
  const kennenlern = "local-kennenlern";
  switch (topic) {
    case "orientierung":
      return [kennenlern, "gruppen-uebersicht"];
    case "basis":
      return ["gruppe-signalkontrolle", kennenlern];
    case "fuehrung":
      return ["gruppe-lenken", kennenlern];
    case "freilauf":
      return ["gruppe-unsichtbare-leine", kennenlern];
    case "sozial":
      return ["gruppe-sozialkontakt", kennenlern];
    case "praezision":
      return ["gruppe-longieren", kennenlern];
    case "bh":
      return ["gruppe-begleithunde", kennenlern];
    case "giftkoeder":
      return ["gruppe-giftkoeder", kennenlern];
    case "jagd":
      return ["gruppe-jagdkontrolle", kennenlern];
    case "komplex":
      return ["einzelcoaching", kennenlern];
    default:
      return [kennenlern, "gruppen-uebersicht"];
  }
}

type Result = { title: string; tag: string; desc: string; ctaLabel: string; ctaHref: string; external?: boolean };

const RESULT_MAP: Record<string, Result> = {
  "local-kennenlern": {
    title: "Kennenlern-Einzel · Mülheim",
    tag: "Einstieg · Vor Ort",
    desc: "Der strukturierte Einstieg für neue Teams direkt am Hundeplatz. Ersteinschätzung, nächste Schritte, sinnvoller Trainingsweg — statt Rätselraten. Jede Gruppe startet damit.",
    ctaLabel: "Termin am Platz buchen",
    ctaHref: BOOK_URL,
    external: true,
  },
  "online-kennenlern": {
    title: "Kennenlern-Einzel · Online",
    tag: "Einstieg · 24/7",
    desc: "30-Minuten-Zoomtermin mit Anamnesebogen, Videoanalyse von 3–5 Alltagsszenen, strategischer Trainingsplanung und schriftlicher Nachbereitung. 49 €. Von überall aus.",
    ctaLabel: "Online-Kennenlern für 49 € buchen",
    ctaHref: BOOK_ONLINE_URL,
    external: true,
  },
  "gruppen-uebersicht": {
    title: "Gruppenstunden-Übersicht",
    tag: "Vor Ort · Mülheim",
    desc: "Alle Basis- und Exklusivgruppen auf einen Blick: Signalkontrolle, Lenken & Grenzen, Unsichtbare Leine, Sozialkontakt, Longieren, Begleithunde, Anti-Giftköder, Jagdkontrolle.",
    ctaLabel: "Gruppenstunden ansehen",
    ctaHref: GRUPPEN_URL,
    external: true,
  },
  "gruppe-signalkontrolle": {
    title: "Signalkontrolle (Basisgruppe)",
    tag: "Basisgruppe · Vor Ort",
    desc: "Saubere, wirksame Signale für die Situationen, die im Alltag zählen — Sitz, Platz, Bleib, Rückruf, Stopp. Nicht im Wohnzimmer, sondern dort, wo es darauf ankommt.",
    ctaLabel: "Gruppe ansehen & buchen",
    ctaHref: GRUPPEN_URL,
    external: true,
  },
  "gruppe-lenken": {
    title: "Lenken & Grenzen setzen (Basisgruppe)",
    tag: "Basisgruppe · Vor Ort",
    desc: "Klare, faire Führung ohne Härte. Ihr lernt, Räume zu eröffnen, Grenzen sauber zu kommunizieren und euren Hund durch komplexe Situationen zu lenken.",
    ctaLabel: "Gruppe ansehen & buchen",
    ctaHref: GRUPPEN_URL,
    external: true,
  },
  "gruppe-unsichtbare-leine": {
    title: "Unsichtbare Leine (Basisgruppe)",
    tag: "Basisgruppe · Vor Ort",
    desc: "Freilaufarbeit auf hohem Niveau: orientiertes Mitlaufen, sauberer Rückruf, freiwilliges Mitdenken. Die Verbindung, die hält — auch ohne physische Leine.",
    ctaLabel: "Gruppe ansehen & buchen",
    ctaHref: GRUPPEN_URL,
    external: true,
  },
  "gruppe-sozialkontakt": {
    title: "Sozialkontakt (Basisgruppe)",
    tag: "Basisgruppe · Vor Ort",
    desc: "Strukturierte, gut moderierte Hundebegegnungen für unsichere, überschwängliche oder pöbelige Hunde. Ihr lernt zu lesen, einzuordnen und passend zu reagieren — statt zu hoffen.",
    ctaLabel: "Gruppe ansehen & buchen",
    ctaHref: GRUPPEN_URL,
    external: true,
  },
  "gruppe-longieren": {
    title: "Longieren (Basisgruppe)",
    tag: "Basisgruppe · Vor Ort",
    desc: "Präzise Distanzarbeit über Körpersprache. Ihr lernt, euren Hund auf Entfernung zu lenken, fokussiert zu halten und feinabgestimmt zu führen.",
    ctaLabel: "Gruppe ansehen & buchen",
    ctaHref: GRUPPEN_URL,
    external: true,
  },
  "gruppe-begleithunde": {
    title: "Begleithunde (Basisgruppe)",
    tag: "Basisgruppe · Vor Ort",
    desc: "Vorbereitung auf die Begleithundeprüfung — alltagsnah, fair und mit echtem Trainingsnutzen. Auch ohne Prüfungsambition ein hervorragendes Programm für saubere Grundlagen.",
    ctaLabel: "Gruppe ansehen & buchen",
    ctaHref: GRUPPEN_URL,
    external: true,
  },
  "gruppe-giftkoeder": {
    title: "Anti-Giftköder (Exklusivgruppe)",
    tag: "Exklusivgruppe · Vor Ort",
    desc: "Strukturiertes Anti-Giftköder-Training mit echtem Aufbau — vom Markersignal über Distanzarbeit bis zur sauberen Generalisierung im Alltag. Kein „einmal Tabu üben“, sondern verlässlich abrufbar.",
    ctaLabel: "Gruppe ansehen & buchen",
    ctaHref: GRUPPEN_URL,
    external: true,
  },
  "gruppe-jagdkontrolle": {
    title: "Jagdkontrolle (Exklusivgruppe)",
    tag: "Exklusivgruppe · Vor Ort",
    desc: "Arbeit am echten Jagdverhalten — Rückruf unter starken Reizen, Impulskontrolle, alternative Verhaltensketten. Freilauf wird wieder möglich.",
    ctaLabel: "Gruppe ansehen & buchen",
    ctaHref: GRUPPEN_URL,
    external: true,
  },
  einzelcoaching: {
    title: "Einzelcoaching am Ort des Geschehens",
    tag: "Individuell · Vor Ort",
    desc: "Maßgeschneidertes 1:1-Training direkt dort, wo die Herausforderung entsteht — Stadt, Park, Zuhause oder unterwegs. Für komplexe, alltagsnahe Themen.",
    ctaLabel: "Einzelcoaching anfragen",
    ctaHref: "#kontakt",
  },
  signatur: {
    title: "Signaturprogramm",
    tag: "Programm · 24/7",
    desc: "8–10 Wochen Premium-Programm für reizoffene, unsichere oder schnell überforderte Hunde. Intake, Videoanalyse, Kernmodule, Live-Call pro Woche, Homework-Reviews.",
    ctaLabel: "Zum Signaturprogramm",
    ctaHref: "#anywhere",
  },
  videoanalyse: {
    title: "Videoanalyse Pro",
    tag: "Asynchron · 24/7",
    desc: "Ihr sendet Alltagsszenen, füllt eine strukturierte Anamnese aus und erhaltet eine priorisierte Analyse plus Trainingsplan. Einmalige fundierte Einschätzung.",
    ctaLabel: "Zur Videoanalyse Pro",
    ctaHref: "#anywhere",
  },
  club: {
    title: "oooh my dog! Club",
    tag: "Membership · 24/7",
    desc: "Regelmäßige Live-Sessions, Themenbibliothek, Q&A, Monatsfokus, Community. Planbare Begleitung statt jedes Mal neu buchen.",
    ctaLabel: "Zum Club",
    ctaHref: "#anywhere",
  },
  "messenger-beratung": {
    title: "Messengerberatung",
    tag: "Messenger · 24/7",
    desc: "Beratung im Tempo eures Alltags. Ihr schickt Fragen und Videos direkt ein und erhaltet schriftliche Einordnungen plus Videofeedback — ohne Termindruck.",
    ctaLabel: "Zur Messengerberatung",
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

  const results = finished ? recommend(answers).map((k) => RESULT_MAP[k]).filter(Boolean) : [];

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
            <div className="mono" style={{ color: "var(--brass)" }}>§ Angebotsfinder</div>
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

        {finished && (
          <div>
            <h3 id="selector-title" className="serif" style={{ fontSize: 36, lineHeight: 1.08, letterSpacing: "-0.02em", fontWeight: 360, marginBottom: 12 }}>
              Für euch passt am besten:
            </h3>
            <p className="mono">Zwei Empfehlungen, geordnet nach Passung — direkt buchbar.</p>

            <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="result-grid">
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
                  {i === 0 && (
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
          }
        `}</style>
      </div>
    </div>
  );
}
