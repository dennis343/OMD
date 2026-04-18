"use client";

import { useEffect, useMemo, useState } from "react";

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
    id: "who",
    question: "Wer sucht hier nach einer Lösung?",
    hint: "Damit wir in der richtigen Säule starten.",
    options: [
      { val: "halter", label: "Ich bin Hundehalter:in", sub: "Für mich und meinen Hund" },
      { val: "schule", label: "Ich führe eine Hundeschule", sub: "Oder bin selbstständige:r Trainer:in" },
      { val: "wechsel", label: "Ich will beruflich in Richtung Hund", sub: "Realitätscheck vor Ausbildung" },
    ],
  },
  {
    id: "topic",
    when: (a) => a.who === "halter",
    question: "Was beschäftigt euch gerade am meisten?",
    hint: "Mehrfach möglich — wählt bis zu zwei.",
    multi: true,
    max: 2,
    options: [
      { val: "reizoffen", label: "Reizoffenheit, Leinenaggression, Pöbeln" },
      { val: "unsicher", label: "Unsicherheit, Ängstlichkeit, Rückzug" },
      { val: "energie", label: "Viel Energie, schwer abschaltbar" },
      { val: "jagd", label: "Jagdverhalten, wenig Rückruf" },
      { val: "alltag", label: "Alltag: Stadt, Restaurant, Besuch" },
      { val: "basis", label: "Saubere Basis von Anfang an" },
    ],
  },
  {
    id: "format",
    when: (a) => a.who === "halter",
    question: "Wie wollt ihr arbeiten?",
    hint: "",
    options: [
      { val: "local", label: "Vor Ort in Mülheim", sub: "Einzel, Gruppe, Einzelcoaching" },
      { val: "tour", label: "Vor Ort, aber nicht in Mülheim", sub: "DACH-Tour · ca. 3× pro Jahr · Warteliste" },
      { val: "digital", label: "24/7 · Digital im gesamten DACH", sub: "Video, Live-Calls, asynchron" },
      { val: "egal", label: "Beides ist möglich", sub: "Entscheidung erst beim Erstgespräch" },
    ],
  },
  {
    id: "depth",
    when: (a) => a.who === "halter",
    question: "Wie tief wollt ihr einsteigen?",
    hint: "",
    options: [
      { val: "einstieg", label: "Erst mal Orientierung", sub: "Einzelstunde oder Videoanalyse" },
      { val: "messenger", label: "Laufende Hilfe per Messenger", sub: "Schriftlich + Videofeedback im Alltag" },
      { val: "programm", label: "Strukturierter Weg", sub: "8–10 Wochen, begleitet" },
      { val: "begleitung", label: "Laufende Begleitung", sub: "Membership, Monatsfokus" },
    ],
  },
  {
    id: "school_goal",
    when: (a) => a.who === "schule",
    question: "Woran arbeitet ihr gerade?",
    hint: "",
    options: [
      { val: "faelle", label: "Schwierige Fälle sicher führen", sub: "Supervision, Methodik" },
      { val: "system", label: "Das Schul-System verbessern", sub: "Angebote, Onboarding, Didaktik" },
      { val: "premium", label: "Premium positionieren", sub: "Preise, Kundenführung, Qualität" },
    ],
  },
  {
    id: "wechsel_phase",
    when: (a) => a.who === "wechsel",
    question: "Wo stehst du gerade?",
    hint: "",
    options: [
      { val: "idee", label: "Idee — aber viele Fragen", sub: "Passt das überhaupt zu mir?" },
      { val: "plan", label: "Ich plane konkret", sub: "Nächste 6–12 Monate" },
      { val: "start", label: "Ich starte bald", sub: "§11-Weg, Sachkunde, Business" },
    ],
  },
];

function recommend(answers: Answers): string[] {
  const w = answers.who as string | undefined;

  if (w === "schule") {
    if (answers.school_goal === "faelle") return ["case-lab", "premium-system"];
    if (answers.school_goal === "system") return ["premium-system", "case-lab"];
    return ["premium-system", "case-lab"];
  }

  if (w === "wechsel") {
    return ["berufswechsel-check", "premium-system"];
  }

  const topics = (answers.topic as string[] | undefined) || [];
  const intense = topics.includes("reizoffen") || topics.includes("unsicher") || topics.includes("energie");
  const format = answers.format as string | undefined;
  const depth = answers.depth as string | undefined;

  if (depth === "messenger") {
    if (format === "local") return ["messenger-beratung", "local-kennenlern"];
    if (format === "tour") return ["messenger-beratung", "tour-termine"];
    return ["messenger-beratung", "videoanalyse"];
  }

  if (format === "tour") {
    if (depth === "programm") return ["tour-termine", "signatur"];
    if (depth === "begleitung") return ["tour-termine", "club"];
    return ["tour-termine", "videoanalyse"];
  }

  if (depth === "einstieg") {
    if (format === "local") return ["local-kennenlern", "videoanalyse"];
    return ["videoanalyse", "messenger-beratung"];
  }
  if (depth === "programm") {
    if (intense) return ["signatur", "videoanalyse"];
    return format === "local" ? ["local-einzel", "signatur"] : ["signatur", "club"];
  }
  if (depth === "begleitung") {
    return ["club", "messenger-beratung"];
  }
  return ["videoanalyse", "signatur"];
}

type Result = { title: string; tag: string; desc: string };

const RESULT_MAP: Record<string, Result> = {
  signatur: {
    title: "Reizoffen & führbar",
    tag: "Signaturprogramm · 24/7",
    desc: "8–10 Wochen Premium-Programm für reizoffene, unsichere oder schnell überforderte Hunde. Intake, Videoanalyse, Kernmodule, Live-Call pro Woche, Homework-Reviews.",
  },
  videoanalyse: {
    title: "Videoanalyse Pro",
    tag: "Asynchron · 24/7",
    desc: "Ihr sendet Alltagsszenen, füllt eine strukturierte Anamnese aus und erhaltet eine priorisierte Analyse plus Trainingsplan.",
  },
  club: {
    title: "oooh my dog! Club",
    tag: "Membership · 24/7",
    desc: "Regelmäßige Live-Sessions, Themenbibliothek, Q&A, Monatsfokus, Community. Planbare Begleitung statt jedes Mal neu buchen.",
  },
  "local-kennenlern": {
    title: "Kennenlern-Coaching",
    tag: "Einstieg · Vor Ort",
    desc: "Der strukturierte Einstieg für neue Teams. Ersteinschätzung, nächste Schritte, ein sinnvoller Trainingsweg — statt Rätselraten.",
  },
  "local-einzel": {
    title: "Einzelcoaching vor Ort",
    tag: "Individuell · Vor Ort",
    desc: "Für Themen, die direkt im echten Umfeld bearbeitet werden sollten. Individuelle Analyse, direkte Umsetzung, klare Aufgaben.",
  },
  "tour-termine": {
    title: "Tour-Termine in der DACH-Region",
    tag: "Auf Tour · Vor Ort",
    desc: "Ca. 3× pro Jahr besuche ich ausgewählte Regionen für strukturierte Trainings vor Ort. Begrenzte Plätze über die Warteliste — digital begleitet, persönlich angestoßen.",
  },
  "messenger-beratung": {
    title: "Messengerberatung",
    tag: "Messenger · 24/7",
    desc: "Beratung im Tempo eures Alltags. Ihr schickt Fragen und Videos direkt ein und erhaltet schriftliche Einordnungen plus Videofeedback — ohne Termindruck.",
  },
  "case-lab": {
    title: "OMD Pro Case Lab",
    tag: "Fallsupervision · Pro & Business",
    desc: "Fallsupervision und strategische Begleitung für Hundeschulen mit anspruchsvollen Fällen. Mehr Sicherheit, bessere Kundenführung.",
  },
  "premium-system": {
    title: "Premium Hundeschule System",
    tag: "Strategie · Pro & Business",
    desc: "Strategie, Struktur und skalierbare Angebotslogik für Hundeschulen. Angebotsarchitektur, Kurslogik und Premium-Positionierung.",
  },
  "berufswechsel-check": {
    title: "Berufswechsel Hund · Realitätscheck",
    tag: "Orientierung · Pro & Business",
    desc: "Ehrliche Orientierung für Menschen, die beruflich in den Hundebereich wollen. Einordnung, Qualitätsmaßstäbe, saubere Entscheidungshilfe.",
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
              Für euch passen wir am besten:
            </h3>
            <p className="mono">Zwei Empfehlungen, geordnet nach Passung</p>

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
                  <h4 className="serif" style={{ fontSize: 26, letterSpacing: "-0.02em", fontWeight: 400, marginBottom: 12 }}>
                    {r.title}
                  </h4>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", marginBottom: 20 }}>{r.desc}</p>
                  <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16 }}>
                    <a className="btn-link mono" href="#kontakt" onClick={onClose}>Mehr erfahren →</a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="#kontakt" onClick={onClose}>
                Erstgespräch anfragen <span className="arrow" aria-hidden="true">→</span>
              </a>
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
