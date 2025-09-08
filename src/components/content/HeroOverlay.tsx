interface HeroOverlayProps {
  opacity?: number;
}

export function HeroOverlay({ opacity = 0.4 }: HeroOverlayProps) {
  return (
    <>
      {/* Sophisticated Multi-Layer Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-black/90"
        style={{ opacity: opacity * 0.8 }}
        aria-hidden="true"
      />
      
      {/* Premium Radial Overlay for Focus */}
      <div
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60"
        style={{ opacity: opacity * 0.6 }}
        aria-hidden="true"
      />
      
      {/* Subtle Corner Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at top left, transparent 0%, black/30 70%),
            radial-gradient(circle at top right, transparent 0%, black/30 70%),
            radial-gradient(circle at bottom left, transparent 0%, black/30 70%),
            radial-gradient(circle at bottom right, transparent 0%, black/30 70%)
          `,
          opacity: opacity * 0.4
        }}
        aria-hidden="true"
      />
    </>
  );
}
