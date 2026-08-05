"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BOOK_ONLINE_URL, BOOK_URL, WA_URL } from "@/app/lib/constants";

const MICRO_COMMITMENTS = [
  "Schön — wir sehen uns das gemeinsam an.",
  "Starker Schritt. Weiter geht's.",
  "Perfekt — wir sind fast da.",
  "Klar, das passt. Noch ein Klick.",
  "Gut gewählt. Wir bauen euch den Weg.",
  "Stark — fundierte Entscheidung.",
  "Passt. Nur noch ein Moment.",
];

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
    id: "goal",
    question: "Was wollt ihr verändern?",
    hint: "Einmal klicken — wir zeigen euch direkt den passenden Einstieg.",
    options: [
      { val: "begegnung", label: "Hundebegegnungen sollen endlich entspannt werden", sub: "Leinenreaktivität, Pöbeln, Anspannung" },
      { val: "jagd", label: "Ich will die Jagd sicher unter Kontrolle", sub: "Jagdverhalten, Freilauf, Rückruf" },
      { val: "aggression", label: "Aggression verstehen und sicher managen", sub: "Gegen Menschen oder Hunde, Ressourcen, Familie" },
      { val: "ruhe", label: "Mein Hund ist ständig auf 180 — ich will Ruhe und Orientierung", sub: "Reizoffenheit, hohe Erregung" },
      { val: "welpe", label: "Wir wollen von Anfang an alles richtig machen", sub: "Welpe oder Junghund, Vorbeugung" },
      { val: "pro", label: "Ich arbeite selbst mit Hunden und will besser werden", sub: "Pro & Business · Hundeschulen, Trainer:innen" },
    ],
  },
  {
    id: "ort",
    when: (a) => !!a.goal && a.goal !== "pro",
    question: "Seid ihr aus Mülheim oder dem Ruhrgebiet?",
    hint: "Damit wir euch den richtigen Einstieg zeigen — nicht irgendeinen.",
    options: [
      { val: "ja", label: "Ja — Mülheim & Ruhrgebiet ist erreichbar", sub: "Vor-Ort-Termine am Hundeplatz sind machbar" },
      { val: "nein", label: "Nein — zu weit weg", sub: "Online starten, DACH-Tour oder Mülheim-Besuch möglich" },
      { val: "online", label: "Wir wollen lieber online arbeiten", sub: "Diese Woche starten — von überall, zeitzonenunabhängig" },
    ],
  },
  {
    id: "pro_goal",
    when: (a) => a.goal === "pro",
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
  const goal = answers.goal as string | undefined;
  const local = answers.ort === "ja";

  if (goal === "pro") {
    if (answers.pro_goal === "faelle") return ["case-lab", "premium-system"];
    if (answers.pro_goal === "system") return ["premium-system", "case-lab"];
    if (answers.pro_goal === "wechsel") return ["berufswechsel-check", "premium-system"];
    return ["premium-system", "case-lab"];
  }

  if (goal === "welpe") {
    return local ? ["paket-welpen"] : ["online-kennenlern", "paket-welpen"];
  }

  if (local) {
    if (goal === "begegnung") return ["gruppe-sozialkontakt"];
    if (goal === "jagd") return ["gruppe-jagdkontrolle"];
    if (goal === "aggression") return ["einzelcoaching"];
    if (goal === "ruhe") return ["einzelcoaching"];
    return ["orientierung-note"];
  }

  // Online-Route: die ehrliche Empfehlung, kein Trostpreis — wir sehen den
  // Hund dort, wo das Problem lebt.
  if (goal === "begegnung") return ["kurspaket", "signatur"];
  if (goal === "jagd") return ["signatur", "sprint"];
  if (goal === "aggression") return ["videoanalyse", "intensiv"];
  if (goal === "ruhe") return ["signatur"];
  return ["online-kennenlern"];
}

type Result = {
  title: string;
  tag: string;
  desc: string;
  ziel?: string;
  rationale?: string;
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
    rationale: "Weil wir euren Hund dort sehen wollen, wo das Problem lebt: zuhause, auf eurer Route, in genau der Situation, die euch belastet. Kein Trostpreis — für die meisten der bessere Einstieg.",
    ctaLabel: "Online-Kennenlern für 49 € buchen",
    ctaHref: BOOK_ONLINE_URL,
    external: true,
  },
  signatur: {
    title: "Signaturprogramm „Reizoffen & führbar“",
    tag: "Programm · Online · 8 Wochen",
    desc: "8 Wochen Premium-Programm für reizoffene, unsichere oder schnell überforderte Hunde. Intake, Videoanalyse, Kernmodule, Live-Call pro Woche, Homework-Reviews. Drei feste Starts pro Jahr: 15.02. · 15.05. · 15.10.",
    rationale: "Weil Reizoffenheit ein System braucht, keine Tipps: acht Wochen strukturierter Aufbau mit Feedback auf eure realen Alltagssituationen.",
    ctaLabel: "Zum Signaturprogramm",
    ctaHref: "#anywhere",
  },
  videoanalyse: {
    title: "Videoanalyse Pro",
    tag: "Asynchron · Online · 49 €",
    desc: "Ihr sendet Alltagsszenen, füllt eine strukturierte Anamnese aus und erhaltet eine priorisierte Analyse plus Trainingsplan. Einmalige fundierte Einschätzung, 49 €.",
    rationale: "Weil wir euren Hund dort sehen wollen, wo das Problem lebt — zuhause, auf eurer Route, im echten Alltag.",
    ctaLabel: "Zur Videoanalyse Pro",
    ctaHref: "#anywhere",
  },
  kurspaket: {
    title: "28-Tage-Challenge: Leinenführigkeit",
    tag: "Digitales Kurspaket · Ab 89 €",
    desc: "Voraufgezeichneter Kurs mit begleitender Aufgabenserie per E-Mail und 2 Teilnahmen am oooh my dog! Talk. Struktur statt Zufall — gegen Ziehen und Pöbeln an der Leine.",
    rationale: "Weil Begegnungen im Alltag trainiert werden, nicht auf dem Platz: 28 Tage, klare Aufgaben, euer Tempo.",
    ctaLabel: "Zur 28-Tage-Challenge",
    ctaHref: "#anywhere",
  },
  sprint: {
    title: "Saisonale Sprints",
    tag: "4 Wochen · Online",
    desc: "Vier Wochen Fokus auf ein konkretes Thema — z. B. Jagdkontrolle oder Urlaubsvorbereitung. Aufgaben per E-Mail, wöchentliche Calls mit Nachbesprechung, OMD Club lite für die Sprint-Dauer.",
    rationale: "Weil vorhersehbare Stressoren planbar sind: Wir bereiten euch vor, bevor die Saison zuschlägt.",
    ctaLabel: "Zu den Sprints",
    ctaHref: "#anywhere",
  },
  intensiv: {
    title: "Intensiv-Begleitung Exklusiv",
    tag: "Exklusiv · Auf Anfrage",
    desc: "6–8 Wochen engmaschige asynchrone Begleitung mit täglichen bis wöchentlichen Video-Reviews — persönlich von Jenny. Für schwere Fälle: Aggression, Angst, Listenhunde.",
    rationale: "Weil Aggression keine Video-Bibliothek braucht, sondern laufende professionelle Einordnung.",
    ctaLabel: "Verfügbarkeit anfragen",
    ctaHref: WA_URL,
    external: true,
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
  const [microMsg, setMicroMsg] = useState<string>("");
  const [scrollHint, setScrollHint] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const microTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const microIdx = useRef(0);

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

  useEffect(() => {
    const el = scrollRef.current;
    if (!open || !el) return;
    el.scrollTop = 0;
    const check = () => {
      const overflow = el.scrollHeight - el.clientHeight > 8;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 12;
      setScrollHint(overflow && !atBottom);
    };
    check();
    el.addEventListener("scroll", check, { passive: true });
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", check);
      ro.disconnect();
    };
  }, [open, stepIdx, finished, answers]);

  const showMicro = () => {
    const msg = MICRO_COMMITMENTS[microIdx.current % MICRO_COMMITMENTS.length];
    microIdx.current += 1;
    setMicroMsg(msg);
    if (microTimer.current) clearTimeout(microTimer.current);
    microTimer.current = setTimeout(() => setMicroMsg(""), 1400);
  };

  const reset = () => {
    setStepIdx(0);
    setAnswers({});
    setFinished(false);
    microIdx.current = 0;
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
      if (!has) showMicro();
    } else {
      const updated = { ...answers, [step.id]: val };
      setAnswers(updated);
      showMicro();
      setTimeout(() => advance(updated), 380);
    }
  };

  const back = () => {
    if (stepIdx > 0) setStepIdx(stepIdx - 1);
  };

  if (!open) return null;

  const results = finished ? recommend(answers).map((k) => RESULT_MAP[k]).filter(Boolean) : [];
  const isVorOrt =
    finished &&
    answers.ort === "ja" &&
    ["begegnung", "jagd", "aggression", "ruhe"].includes(answers.goal as string);

  return (
    <div
      className="sel-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="selector-title"
        className="sel-dialog theme-dark"
      >
        <div className="sel-head">
          <div className="sel-head-meta">
            <div className="eyebrow">Angebotsfinder</div>
            <div className="mono" style={{ marginTop: 4 }}>
              {finished ? "Empfehlung" : `Schritt ${stepIdx + 1} von ${activeSteps.length}`}
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Dialog schließen"
            className="sel-close"
          >
            ×
          </button>
        </div>

        {!finished && (
          <div className="sel-progress" aria-hidden="true">
            {activeSteps.map((_, i) => (
              <div
                key={i}
                className={`sel-progress-bar ${i <= stepIdx ? "is-filled" : ""}`}
              />
            ))}
          </div>
        )}

        <div className="sel-body" ref={scrollRef}>
          {!finished && step && (
            <div>
              <h3 id="selector-title" className="serif sel-q">
                {step.question}
              </h3>
              {step.hint && <p className="mono sel-hint">{step.hint}</p>}

              <div className="sel-options" role={step.multi ? "group" : "radiogroup"} aria-labelledby="selector-title">
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
                      className={`sel-opt ${selected ? "is-selected" : ""}`}
                    >
                      <div className="sel-opt-text">
                        <div className="sel-opt-label">{o.label}</div>
                        {o.sub && <div className="mono sel-opt-sub">{o.sub}</div>}
                      </div>
                      <div
                        aria-hidden="true"
                        className={`sel-opt-dot ${step.multi ? "is-square" : ""} ${selected ? "is-selected" : ""}`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="sel-actions">
                <button
                  onClick={back}
                  disabled={stepIdx === 0}
                  type="button"
                  className="sel-back"
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
            <h3 id="selector-title" className="serif sel-result-h">
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
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: r.ziel ? 14 : 0 }}>{r.desc}</p>
                  {r.ziel && (
                    <div style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--cream)", borderTop: "1px solid var(--line)", paddingTop: 12 }}>
                      <span style={{ color: "var(--accent-ink)", fontFamily: "var(--mono)", fontSize: 11.5, letterSpacing: "0.14em", textTransform: "uppercase", marginRight: 10, fontWeight: 700 }}>Ziel</span>
                      {r.ziel}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, padding: "28px 28px 24px", background: "var(--bg-3)", border: "1px solid var(--omd-yellow)", borderRadius: 6, position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  left: 24,
                  background: "var(--omd-yellow)",
                  color: "#07071A",
                  fontFamily: "var(--mono)",
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: 999,
                }}
              >
                Dein Einstieg
              </div>
              <h4 className="serif" style={{ fontSize: 24, letterSpacing: "-0.02em", fontWeight: 400, marginBottom: 10, lineHeight: 1.2 }}>
                Kennenlern-Einzel — der strukturierte Start.
              </h4>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)", marginBottom: 20 }}>
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
            <h3 id="selector-title" className="serif sel-result-h">
              Für euch passt am besten:
            </h3>
            <p className="mono">Eure Empfehlung — direkt weitergehen.</p>

            <div className={`result-grid ${results.length > 1 ? "is-two" : ""}`}>
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
                        background: "var(--omd-yellow)",
                        color: "#07071A",
                        fontFamily: "var(--mono)",
                        fontSize: 11.5,
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        padding: "6px 14px",
                        borderRadius: 999,
                      }}
                    >
                      Beste Passung
                    </div>
                  )}
                  <div className="mono" style={{ marginBottom: 10 }}>{r.tag}</div>
                  <h4 className="serif" style={{ fontSize: 22, letterSpacing: "-0.02em", fontWeight: 400, marginBottom: 12, lineHeight: 1.15 }}>
                    {r.title}
                  </h4>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", marginBottom: r.rationale ? 14 : 20, flex: r.rationale ? undefined : 1 }}>{r.desc}</p>
                  {r.rationale && (
                    <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--cream)", background: "var(--bg-2)", borderLeft: "2px solid var(--omd-yellow)", padding: "12px 14px", marginBottom: 20, flex: 1 }}>
                      <span style={{ color: "var(--accent-ink)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: 6, fontWeight: 700 }}>Warum diese Empfehlung</span>
                      {r.rationale}
                    </div>
                  )}
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

            <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
              <button className="btn btn-ghost" onClick={reset} type="button">Nochmal starten</button>
            </div>
          </div>
        )}
        </div>

        <div className={`sel-scroll-hint ${scrollHint ? "is-visible" : ""}`} aria-hidden="true">
          <span>scrollen</span>
          <span className="sel-scroll-arrow">↓</span>
        </div>

        <div className={`sel-toast ${microMsg ? "is-visible" : ""}`} role="status" aria-live="polite">
          <span className="sel-toast-dot" aria-hidden="true">✓</span>
          <span>{microMsg}</span>
        </div>

        <style>{`
          .sel-backdrop {
            position: fixed;
            inset: 0;
            z-index: 200;
            background: rgba(10,8,6,0.82);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding: 0;
            animation: fadeUp .3s ease both;
          }
          .sel-dialog {
            background: var(--bg);
            border-top: 1px solid var(--line-2);
            border-radius: 14px 14px 0 0;
            width: 100%;
            max-width: 920px;
            height: 100dvh;
            max-height: 100dvh;
            padding: 14px 18px 18px;
            padding-bottom: calc(18px + env(safe-area-inset-bottom, 0px));
            padding-top: calc(14px + env(safe-area-inset-top, 0px));
            position: relative;
            display: flex;
            flex-direction: column;
          }
          .sel-head {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 14px;
            flex-shrink: 0;
          }
          .sel-head-meta { min-width: 0; }
          .sel-close {
            width: 40px; height: 40px;
            border-radius: 50%;
            background: var(--bg-2);
            color: var(--ink-2);
            font-size: 22px;
            line-height: 1;
            display: grid; place-items: center;
            flex-shrink: 0;
            transition: background .15s, color .15s;
          }
          .sel-close:hover { background: var(--bg-3); color: var(--cream); }

          .sel-progress {
            display: flex;
            gap: 4px;
            margin-bottom: 18px;
            flex-shrink: 0;
          }
          .sel-progress-bar {
            flex: 1;
            height: 2px;
            background: var(--line-2);
            transition: background .3s;
          }
          .sel-progress-bar.is-filled { background: var(--omd-yellow); }

          .sel-body {
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
            padding-right: 2px;
            scrollbar-width: thin;
            scrollbar-color: var(--line-2) transparent;
          }
          .sel-body::-webkit-scrollbar { width: 4px; }
          .sel-body::-webkit-scrollbar-thumb { background: var(--line-2); border-radius: 2px; }

          .sel-q {
            font-size: 22px;
            line-height: 1.2;
            letter-spacing: -0.015em;
            font-weight: 500;
            margin-bottom: 10px;
          }
          .sel-hint { font-size: 11.5px; line-height: 1.5; }

          .sel-options {
            margin-top: 18px;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          .sel-opt {
            text-align: left;
            padding: 14px 16px;
            min-height: 56px;
            background: var(--bg-2);
            border: 1px solid var(--line-2);
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            transition: background .15s, border-color .15s, transform .1s;
            width: 100%;
          }
          .sel-opt:active { transform: scale(0.995); }
          .sel-opt.is-selected {
            background: var(--bg-3);
            border-color: var(--omd-yellow);
          }
          .sel-opt-text { min-width: 0; flex: 1; }
          .sel-opt-label {
            font-size: 15.5px;
            color: var(--cream);
            font-weight: 500;
            line-height: 1.3;
            margin-bottom: 4px;
          }
          .sel-opt-sub {
            font-size: 11px;
            letter-spacing: 0.08em;
            line-height: 1.4;
            white-space: normal;
          }
          .sel-opt-dot {
            width: 18px; height: 18px;
            border-radius: 50%;
            border: 1px solid var(--ink-4);
            background: transparent;
            flex-shrink: 0;
            transition: all .15s;
          }
          .sel-opt-dot.is-square { border-radius: 4px; }
          .sel-opt-dot.is-selected {
            border-color: var(--omd-yellow);
            background: var(--omd-yellow);
          }

          .sel-actions {
            margin-top: 22px;
            padding-top: 16px;
            border-top: 1px solid var(--line);
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
          }
          .sel-back {
            font-family: var(--mono);
            font-size: 12px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--ink-2);
            font-weight: 600;
            padding: 10px 4px;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
          }
          .sel-back:disabled { color: var(--ink-4); cursor: default; }

          .sel-scroll-hint {
            position: absolute;
            right: 14px;
            bottom: calc(10px + env(safe-area-inset-bottom, 0px));
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: color-mix(in oklab, var(--bg) 85%, transparent);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            border: 1px solid var(--line-2);
            border-radius: 999px;
            padding: 5px 10px;
            font-family: var(--mono);
            font-size: 11px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            font-weight: 600;
            color: var(--cream);
            opacity: 0;
            pointer-events: none;
            transform: translateY(4px);
            transition: opacity .25s, transform .25s;
          }
          .sel-scroll-hint.is-visible { opacity: 1; transform: translateY(0); }
          .sel-scroll-arrow {
            font-size: 12px;
            animation: selNudge 1.6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
            color: var(--omd-yellow);
          }
          @keyframes selNudge {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(2px); }
          }

          .sel-toast {
            position: absolute;
            left: 50%;
            top: 14px;
            transform: translate(-50%, -14px);
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--bg-3);
            border: 1px solid var(--omd-yellow);
            color: var(--cream);
            padding: 8px 14px 8px 10px;
            border-radius: 999px;
            font-family: var(--serif);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: -0.005em;
            box-shadow: 0 8px 24px rgba(0,0,0,0.35);
            opacity: 0;
            pointer-events: none;
            transition: opacity .2s, transform .25s;
            max-width: calc(100% - 28px);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            z-index: 4;
          }
          .sel-toast.is-visible {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          .sel-toast-dot {
            width: 18px; height: 18px;
            border-radius: 50%;
            background: var(--omd-yellow);
            color: #07071A;
            font-size: 11px;
            font-weight: 700;
            line-height: 1;
            display: grid; place-items: center;
            flex-shrink: 0;
          }

          .result-grid { margin-top: 22px; display: grid; grid-template-columns: 1fr; gap: 12px; }
          .kl-ctas { grid-template-columns: 1fr !important; }
          .sel-result-h { font-size: 22px; line-height: 1.2; letter-spacing: -0.018em; font-weight: 500; margin-bottom: 10px; }
          @media (min-width: 640px) { .sel-result-h { font-size: 28px; } }
          @media (min-width: 900px) { .sel-result-h { font-size: 32px; } }

          @media (min-width: 640px) {
            .sel-backdrop { align-items: center; padding: 20px; }
            .sel-dialog {
              height: auto;
              max-height: 90vh;
              border-radius: 12px;
              border: 1px solid var(--line-2);
              padding: 28px 32px 32px;
            }
            .sel-q { font-size: 28px; }
            .sel-hint { font-size: 11px; }
            .sel-opt { padding: 16px 20px; }
            .sel-opt-label { font-size: 15.5px; }
            .sel-opt-sub { font-size: 10.5px; }
          }
          @media (min-width: 900px) {
            .sel-dialog { padding: 36px 44px 40px; }
            .sel-q { font-size: 34px; }
            .kl-ctas { grid-template-columns: 1fr 1fr !important; }
            .result-grid.is-two { grid-template-columns: 1fr 1fr; gap: 16px; }
          }
        `}</style>
      </div>
    </div>
  );
}
