interface HeroOverlayProps {
  opacity?: number;
}

export function HeroOverlay({ opacity }: HeroOverlayProps) {
  console.log(opacity);
  return (
    <>
      {/* Primary Dark Overlay - Enhanced for better visibility */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/95 via-slate-900/90 to-black/98 z-10"
        style={{ opacity: opacity }}
        aria-hidden="true"
      />

      {/* Text Readability Overlay - Specific for content area */}
      <div
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black/80 z-10"
        style={{ opacity: opacity ? opacity * 0.9 : 0.9 }}
        aria-hidden="true"
      />

      {/* Enhanced Corner Vignette */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(circle at top left, transparent 0%, black/60 70%),
            radial-gradient(circle at top right, transparent 0%, black/60 70%),
            radial-gradient(circle at bottom left, transparent 0%, black/60 70%),
            radial-gradient(circle at bottom right, transparent 0%, black/60 70%)
          `,
          opacity: (opacity || 1) * 0.7,
        }}
        aria-hidden="true"
      />

      {/* Additional Text Contrast Layer */}
      <div
        className="absolute inset-0 bg-black/20 z-10"
        style={{ opacity: (opacity || 1) * 0.5 }}
        aria-hidden="true"
      />
    </>
  );
}
