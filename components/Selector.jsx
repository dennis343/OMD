// Selector.jsx — interactive "welches Angebot passt?" quiz
const { useState: useStateSel, useMemo } = React;

const SELECTOR_STEPS = [
  {
    id: "who",
    question: "Wer sucht hier nach einer Lösung?",
    hint: "Damit wir in der richtigen Säule starten.",
    options: [
      { val: "halter", label: "Ich bin Hundehalter", sub: "Für mich und meinen Hund" },
      { val: "schule", label: "Ich führe eine Hundeschule", sub: "Oder bin selbstständige:r Trainer:in" },
      { val: "wechsel", label: "Ich will beruflich in Richtung Hund", sub: "Realitätscheck vor Ausbildung" },
    ],
  },
  {
    id: "topic",
    when: (a) => a.who === "halter",
    question: "Was beschäftigt dich gerade am meisten?",
    hint: "Mehrfach möglich — wähle bis zu zwei.",
    multi: true, max: 2,
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
    question: "Wie willst du arbeiten?",
    options: [
      { val: "local", label: "Vor Ort in München", sub: "Einzel, Gruppe, Intensivtage" },
      { val: "digital", label: "Bundesweit digital", sub: "Video, Live-Calls, asynchron" },
      { val: "egal", label: "Beides ist möglich", sub: "Entscheidung erst beim Erstgespräch" },
    ],
  },
  {
    id: "depth",
    when: (a) => a.who === "halter",
    question: "Wie tief willst du einsteigen?",
    options: [
      { val: "einstieg", label: "Erst mal Orientierung", sub: "Einzelstunde oder Videoanalyse" },
      { val: "programm", label: "Strukturierter Weg", sub: "8–10 Wochen, begleitet" },
      { val: "begleitung", label: "Laufende Begleitung", sub: "Membership, Monatsfokus" },
    ],
  },
  {
    id: "school_goal",
    when: (a) => a.who === "schule",
    question: "Woran arbeitet ihr gerade?",
    options: [
      { val: "faelle", label: "Schwierige Fälle sicher führen", sub: "Supervision, Methodik" },
      { val: "system", label: "Das Schul-System verbessern", sub: "Angebote, Onboarding, Didaktik" },
      { val: "premium", label: "Premium positionieren", sub: "Preise, Kundenführung, Qualität" },
    ],
  },
  {
    id: "school_size",
    when: (a) => a.who === "schule",
    question: "Wie ist die Schule aufgestellt?",
    options: [
      { val: "solo", label: "Ich arbeite solo" },
      { val: "team", label: "Kleines Team, 2–5 Personen" },
      { val: "gross", label: "Größere Schule / mehrere Standorte" },
    ],
  },
  {
    id: "wechsel_phase",
    when: (a) => a.who === "wechsel",
    question: "Wo stehst du gerade?",
    options: [
      { val: "idee", label: "Idee — aber viele Fragen", sub: "Passt das überhaupt zu mir?" },
      { val: "plan", label: "Ich plane konkret", sub: "Nächste 6–12 Monate" },
      { val: "start", label: "Ich starte bald", sub: "§11-Weg, Sachkunde, Business" },
    ],
  },
];

function recommend(answers) {
  const w = answers.who;

  if (w === "schule") {
    if (answers.school_goal === "faelle") return ["case-lab", "methodik-tag"];
    if (answers.school_goal === "system") return ["premium-system", "case-lab"];
    return ["premium-system", "strategie-1-1"];
  }

  if (w === "wechsel") {
    if (answers.wechsel_phase === "idee") return ["berufswechsel-check", "hospitanz"];
    return ["berufswechsel-check", "strategie-1-1"];
  }

  // halter branch
  const topics = answers.topic || [];
  const intense = topics.includes("reizoffen") || topics.includes("unsicher") || topics.includes("energie");
  const format = answers.format;
  const depth = answers.depth;

  if (depth === "einstieg") {
    if (format === "local") return ["local-einzel", "videoanalyse"];
    return ["videoanalyse", "signatur"];
  }
  if (depth === "programm") {
    if (intense) return ["signatur", "videoanalyse"];
    return format === "local" ? ["intensivtag", "signatur"] : ["signatur", "club"];
  }
  if (depth === "begleitung") {
    return ["club", "signatur"];
  }
  return ["videoanalyse", "signatur"];
}

const RESULT_MAP = {
  "signatur": {
    title: "Reizoffen & führbar",
    tag: "Signaturprogramm · OMD Anywhere",
    desc: "8–10 Wochen Premium-Programm für reizoffene, unsichere oder schnell überforderte Hunde. Intake, Videoanalyse, Kernmodule, Live-Call pro Woche, Homework-Reviews.",
    price: "ab 790 €",
  },
  "videoanalyse": {
    title: "Videoanalyse Pro",
    tag: "Asynchron · OMD Anywhere",
    desc: "Du lädst 3–5 Videos hoch, füllst eine strukturierte Anamnese aus. Du erhältst ein priorisiertes Feedbackvideo plus Trainingsplan.",
    price: "149 – 249 €",
  },
  "club": {
    title: "OMD Club",
    tag: "Membership · OMD Anywhere",
    desc: "2 Live-Sessions pro Monat, Themenbibliothek, Q&A, Monatsfokus, Community. Planbare Begleitung statt jedes Mal neu buchen.",
    price: "49 – 79 € / Monat",
  },
  "local-einzel": {
    title: "Kennenlern-Einzelstunde",
    tag: "Vor Ort · OMD Local",
    desc: "Eine Stunde, um euch kennenzulernen, die Situation einzuordnen und einen ehrlichen nächsten Schritt zu finden.",
    price: "49 €",
  },
  "intensivtag": {
    title: "Intensivtag München",
    tag: "Vor Ort · OMD Local",
    desc: "Ein Tag, konzentriert an eurem Thema. Diagnose, Aufbau, Praxis im echten Alltag. Preis auf Anfrage.",
    price: "auf Anfrage",
  },
  "case-lab": {
    title: "OMD Pro Case Lab",
    tag: "Supervision · OMD Pro",
    desc: "Monatliche Fallsupervision für Hundeschulen mit anspruchsvollen Teams. Fallbesprechung, Methodenentscheidungen, Halterkommunikation.",
    price: "auf Anfrage",
  },
  "premium-system": {
    title: "Premium Hundeschule System",
    tag: "B2B · OMD Pro",
    desc: "Angebotsarchitektur, Onboarding, Anamnese, Homework-Sheets, Kundenführung, Premium-Positionierung. Beratung und Lizenz, kein Franchise.",
    price: "auf Anfrage",
  },
  "methodik-tag": {
    title: "Methodik-Intensivtag",
    tag: "B2B · OMD Pro",
    desc: "Ein Tag für dich und dein Team: Diagnose, Trainingsaufbau, Grenzfälle. Fundament für eine ruhige, klare Lernkultur.",
    price: "auf Anfrage",
  },
  "strategie-1-1": {
    title: "1:1 Strategie-Session",
    tag: "B2B · OMD Pro",
    desc: "Eine Session mit Jenny — für eine konkrete Entscheidung zu Positionierung, Team oder nächstem Produkt.",
    price: "auf Anfrage",
  },
  "berufswechsel-check": {
    title: "Berufswechsel Hund · Realitätscheck",
    tag: "Orientierung · OMD Pro",
    desc: "Orientierung, Hospitation, Fallverständnis, Business-Grundlagen, Ethik. Premium und ehrlich — statt ‚Werde Hundetrainer:in‘ als Erstprodukt.",
    price: "auf Anfrage",
  },
  "hospitanz": {
    title: "Hospitations-Tag",
    tag: "Orientierung · OMD Pro",
    desc: "Ein Tag mit, statt über Hundetraining. Du erlebst echte Kunden, echte Hunde, echte Entscheidungen.",
    price: "auf Anfrage",
  },
};

function Selector({ open, onClose }) {
  const [stepIdx, setStepIdx] = useStateSel(0);
  const [answers, setAnswers] = useStateSel({});
  const [finished, setFinished] = useStateSel(false);

  const activeSteps = useMemo(() => SELECTOR_STEPS.filter((s) => !s.when || s.when(answers)), [answers]);
  const step = activeSteps[stepIdx];

  const reset = () => { setStepIdx(0); setAnswers({}); setFinished(false); };

  const pick = (val) => {
    if (!step) return;
    if (step.multi) {
      const cur = answers[step.id] || [];
      const has = cur.includes(val);
      let next;
      if (has) next = cur.filter((v) => v !== val);
      else if (step.max && cur.length >= step.max) next = [...cur.slice(1), val];
      else next = [...cur, val];
      setAnswers({ ...answers, [step.id]: next });
    } else {
      setAnswers({ ...answers, [step.id]: val });
      setTimeout(() => advance({ ...answers, [step.id]: val }), 220);
    }
  };

  const advance = (a = answers) => {
    const steps = SELECTOR_STEPS.filter((s) => !s.when || s.when(a));
    if (stepIdx + 1 >= steps.length) setFinished(true);
    else setStepIdx(stepIdx + 1);
  };

  const back = () => { if (stepIdx > 0) setStepIdx(stepIdx - 1); };

  if (!open) return null;

  const results = finished ? recommend(answers).map((k) => RESULT_MAP[k]).filter(Boolean) : [];

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "rgba(10,8,6,0.82)",
      backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20,
      animation: "fadeUp .3s ease both",
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "var(--bg)", border: "1px solid var(--line-2)",
        borderRadius: 8,
        width: "min(920px, 100%)",
        maxHeight: "90vh", overflow: "auto",
        padding: "40px 48px 48px",
        position: "relative",
      }}>

        {/* header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
          <div>
            <div className="mono" style={{ color: "var(--brass)" }}>§ Selektor</div>
            <div className="mono" style={{ marginTop: 4 }}>
              {finished ? "Empfehlung" : `Schritt ${stepIdx + 1} von ${activeSteps.length}`}
            </div>
          </div>
          <button onClick={onClose} style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--ink-3)", textTransform: "uppercase" }}>
            schließen ×
          </button>
        </div>

        {/* progress rail */}
        {!finished && (
          <div style={{ display: "flex", gap: 4, marginBottom: 40 }}>
            {activeSteps.map((_, i) => (
              <div key={i} style={{
                flex: 1, height: 2,
                background: i <= stepIdx ? "var(--brass)" : "var(--line-2)",
                transition: "background .3s",
              }} />
            ))}
          </div>
        )}

        {!finished && step && (
          <div>
            <h3 className="serif" style={{ fontSize: 36, lineHeight: 1.08, letterSpacing: "-0.02em", fontWeight: 360, marginBottom: 12 }}>
              {step.question}
            </h3>
            <p className="mono">{step.hint}</p>

            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 8 }}>
              {step.options.map((o) => {
                const selected = step.multi
                  ? (answers[step.id] || []).includes(o.val)
                  : answers[step.id] === o.val;
                return (
                  <button key={o.val} onClick={() => pick(o.val)} style={{
                    textAlign: "left",
                    padding: "20px 24px",
                    background: selected ? "var(--bg-3)" : "var(--bg-2)",
                    border: `1px solid ${selected ? "var(--brass)" : "var(--line-2)"}`,
                    borderRadius: 4,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    transition: "all .15s",
                  }}
                  onMouseEnter={(e) => { if (!selected) e.currentTarget.style.borderColor = "var(--ink-4)"; }}
                  onMouseLeave={(e) => { if (!selected) e.currentTarget.style.borderColor = "var(--line-2)"; }}
                  >
                    <div>
                      <div style={{ fontSize: 16, color: "var(--cream)", marginBottom: o.sub ? 4 : 0 }}>{o.label}</div>
                      {o.sub && <div className="mono">{o.sub}</div>}
                    </div>
                    <div style={{
                      width: 18, height: 18, borderRadius: step.multi ? 3 : 50,
                      border: `1px solid ${selected ? "var(--brass)" : "var(--ink-4)"}`,
                      background: selected ? "var(--brass)" : "transparent",
                      transition: "all .15s",
                    }} />
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button onClick={back} disabled={stepIdx === 0} style={{
                fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
                color: stepIdx === 0 ? "var(--ink-4)" : "var(--ink-2)",
                cursor: stepIdx === 0 ? "default" : "pointer",
              }}>← zurück</button>
              {step.multi && (
                <button className="btn btn-primary" onClick={() => advance()} disabled={!(answers[step.id] || []).length}
                  style={{ opacity: (answers[step.id] || []).length ? 1 : 0.4 }}>
                  Weiter <span className="arrow">→</span>
                </button>
              )}
            </div>
          </div>
        )}

        {finished && (
          <div>
            <h3 className="serif" style={{ fontSize: 36, lineHeight: 1.08, letterSpacing: "-0.02em", fontWeight: 360, marginBottom: 12 }}>
              Für dich passen wir am besten:
            </h3>
            <p className="mono">Zwei Empfehlungen, geordnet nach Passung</p>

            <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="result-grid">
              {results.map((r, i) => (
                <div key={i} style={{
                  padding: "28px 28px 24px",
                  background: i === 0 ? "var(--bg-3)" : "var(--bg-2)",
                  border: `1px solid ${i === 0 ? "var(--brass)" : "var(--line-2)"}`,
                  borderRadius: 4,
                  position: "relative",
                }}>
                  {i === 0 && (
                    <div style={{ position: "absolute", top: -10, left: 24, background: "var(--brass)", color: "var(--bg)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", padding: "3px 10px" }}>
                      Beste Passung
                    </div>
                  )}
                  <div className="mono" style={{ marginBottom: 10 }}>{r.tag}</div>
                  <h4 className="serif" style={{ fontSize: 26, letterSpacing: "-0.02em", fontWeight: 400, marginBottom: 12 }}>
                    {r.title}
                  </h4>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", marginBottom: 20 }}>{r.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--line)", paddingTop: 16 }}>
                    <span className="serif" style={{ fontSize: 20, color: "var(--brass)" }}>{r.price}</span>
                    <a className="btn-link mono" href="#angebote">Details →</a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn-primary">Erstgespräch anfragen <span className="arrow">→</span></button>
              <button className="btn btn-ghost" onClick={reset}>Nochmal starten</button>
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

window.Selector = Selector;
