interface OnterraStandardsOverlayProps {
  opacity?: number;
}

export function OnterraStandardsOverlay({
  opacity = 0.4,
}: OnterraStandardsOverlayProps) {
  return (
    <>
      {/* Primary Dark Overlay - Reduced for better text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/50 to-black/70 z-10"
        style={{ opacity: opacity }}
        aria-hidden="true"
      />

      {/* Text Readability Overlay - Enhanced for left content area */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"
        style={{ opacity: opacity ? opacity * 1.2 : 1.2 }}
        aria-hidden="true"
      />

      {/* Left Content Area Specific Overlay */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"
        style={{ opacity: opacity ? opacity * 1.5 : 1.5 }}
        aria-hidden="true"
      />

      {/* Additional Text Contrast Layer */}
      <div
        className="absolute inset-0 bg-black/10 z-10"
        style={{ opacity: (opacity || 1) * 0.3 }}
        aria-hidden="true"
      />
    </>
  );
}
