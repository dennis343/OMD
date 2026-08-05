"use client";

import { slideSrc } from "@/app/lib/slideImages";

type Slide = { src?: string; label?: string; alt?: string };

type Props = {
  seed: string;
  slides?: Slide[];
  labels?: string[];
  /** Desktop height (≥900 px). Mobile/tablet scale down automatically. */
  height?: number;
  /** Desktop slide width (≥900 px). Mobile/tablet scale down automatically. */
  slideWidth?: number;
  /** Seconds per slide — total animation duration ≈ slides × speed. */
  speed?: number;
  reverse?: boolean;
  ariaLabel?: string;
};

export default function TrainingSlider({
  seed,
  slides,
  labels,
  height = 160,
  slideWidth = 220,
  speed = 6,
  reverse = false,
  ariaLabel = "Trainingseinblicke",
}: Props) {
  const items: Slide[] =
    slides && slides.length
      ? slides
      : (labels ?? [
          "Alltag",
          "Freilauf",
          "Lenken",
          "Rückruf",
          "Begegnung",
          "Ruhe",
        ]).map((l, i) => ({
          src: slideSrc(seed, i, slideWidth * 2),
          label: l,
          alt: `${seed} · ${l}`,
        }));

  if (!items.length) return null;

  // Duplicate once for seamless loop (translateX −50%).
  const loop = [...items, ...items];
  const duration = Math.max(18, items.length * speed);

  // CSS variables drive the responsive sizing. Each breakpoint scales down.
  const cssVars = {
    ["--ts-h" as string]: `${height}px`,
    ["--ts-w" as string]: `${slideWidth}px`,
  } as React.CSSProperties;

  return (
    <div
      className="training-slider"
      style={{ ...cssVars, height: "var(--ts-h)" }}
      role="region"
      aria-label={ariaLabel}
    >
      <div
        className="training-slider-track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((s, i) => (
          <div
            key={i}
            className="training-slider-slide"
            style={{
              width: "var(--ts-w)",
              height: "calc(var(--ts-h) - 16px)",
            }}
            aria-hidden={i >= items.length ? "true" : undefined}
          >
            {s.src ? (
              <img src={s.src} alt={s.alt ?? ""} loading="lazy" />
            ) : null}
            {s.label ? <span className="ts-label">{s.label}</span> : null}
          </div>
        ))}
      </div>

      <style>{`
        .training-slider { overflow: clip; }
        @media (max-width: 639px) {
          .training-slider {
            --ts-h: calc(var(--ts-h, 160px) * 0.78);
            --ts-w: calc(var(--ts-w, 220px) * 0.68);
          }
        }
        @media (min-width: 640px) and (max-width: 899px) {
          .training-slider {
            --ts-h: calc(var(--ts-h, 160px) * 0.88);
            --ts-w: calc(var(--ts-w, 220px) * 0.82);
          }
        }
      `}</style>
    </div>
  );
}
