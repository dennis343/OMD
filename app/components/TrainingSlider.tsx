"use client";

type Slide = { src?: string; label?: string; alt?: string };

type Props = {
  seed: string;
  slides?: Slide[];
  labels?: string[];
  height?: number;
  slideWidth?: number;
  speed?: number;
  reverse?: boolean;
  ariaLabel?: string;
};

export default function TrainingSlider({
  seed,
  slides,
  labels,
  height = 180,
  slideWidth = 260,
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
          src: `https://picsum.photos/seed/${encodeURIComponent(seed)}-${i}/${slideWidth * 2}/${height * 2}`,
          label: l,
          alt: `${seed} · ${l}`,
        }));

  if (!items.length) return null;

  const loop = [...items, ...items];
  const duration = Math.max(18, items.length * speed);

  return (
    <div
      className="training-slider"
      style={{ height }}
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
            style={{ width: slideWidth, height: height - 20 }}
            aria-hidden={i >= items.length ? "true" : undefined}
          >
            {s.src ? (
              <img src={s.src} alt={s.alt ?? ""} loading="lazy" />
            ) : null}
            {s.label ? <span className="ts-label">{s.label}</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
