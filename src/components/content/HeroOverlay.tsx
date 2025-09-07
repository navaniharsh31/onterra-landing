interface HeroOverlayProps {
  opacity?: number;
}

export function HeroOverlay({ opacity = 0.4 }: HeroOverlayProps) {
  return (
    <div
      className="absolute inset-0 bg-black"
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
