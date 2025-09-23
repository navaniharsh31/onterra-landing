interface HomeIntroOverlayProps {
  opacity?: number;
}

export function HomeIntroOverlay({ opacity = 0.4 }: HomeIntroOverlayProps) {
  return (
    <>
      {/* Primary Dark Overlay - Optimized for intro section */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/60 to-black/80 z-10"
        style={{ opacity: opacity }}
        aria-hidden="true"
      />

      {/* Text Readability Overlay - Centered content focus */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"
        style={{ opacity: opacity ? opacity * 1.1 : 1.1 }}
        aria-hidden="true"
      />

      {/* Additional Text Contrast Layer */}
      <div
        className="absolute inset-0 bg-black/20 z-10"
        style={{ opacity: (opacity || 1) * 0.4 }}
        aria-hidden="true"
      />
    </>
  );
}
