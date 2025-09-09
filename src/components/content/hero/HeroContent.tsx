import { cn } from "@/lib/utils";
import { HeroCTA } from "./HeroCTA";
import { RotatingText } from "@/components/content/shared/RotatingText";
import { AnimatedSection } from "@/components/layout/sections/AnimatedSection";

interface HeroContentProps {
  staticText: string;
  rotatingText: string[];
  lineDesign?: {
    enabled: boolean;
    color: string;
  };
  ctaButtons?: Array<{
    text: string;
    url: string;
    variant: "primary" | "secondary" | "outline";
  }>;
  className?: string;
}

export function HeroContent({
  staticText,
  rotatingText,
  ctaButtons,
  className,
}: HeroContentProps) {
  return (
    <div
      className={cn(
        "relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-8 lg:px-12 text-center",
        className
      )}
    >
      <div className="max-w-5xl mx-auto">
        {/* Sophisticated Pattern Overlays */}
        {/* Diamond Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              #001670 2px,
              #001670 4px
            )`,
          }}
        />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `
              linear-gradient(#001670 1px, transparent 1px),
              linear-gradient(90deg, #001670 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Corner Geometric Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none">
          <div className="w-full h-full border-l-2 border-t-2 border-mustard-400/60" />
          <div className="absolute top-4 left-4 w-24 h-24 border-l border-t border-navy-500/40" />
          <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-mustard-300/30" />
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
          <div className="w-full h-full border-r-2 border-t-2 border-mustard-400/60" />
          <div className="absolute top-4 right-4 w-24 h-24 border-r border-t border-navy-500/40" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-mustard-300/30" />
        </div>

        <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none">
          <div className="w-full h-full border-l-2 border-b-2 border-mustard-400/60" />
          <div className="absolute bottom-4 left-4 w-24 h-24 border-l border-b border-navy-500/40" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-mustard-300/30" />
        </div>

        <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
          <div className="w-full h-full border-r-2 border-b-2 border-mustard-400/60" />
          <div className="absolute bottom-4 right-4 w-24 h-24 border-r border-b border-navy-500/40" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-mustard-300/30" />
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-navy-500/30 to-mustard-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-tl from-mustard-500/30 to-navy-500/30 rounded-full blur-2xl" />
        <div className="absolute top-1/4 -right-10 w-20 h-20 bg-gradient-to-br from-mustard-400/20 to-navy-600/20 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 -left-10 w-24 h-24 bg-gradient-to-tl from-navy-400/20 to-mustard-600/20 rounded-full blur-xl" />

        {/* Main Content Container */}
        <div className="relative">
          <AnimatedSection animation="fadeInUp" delay={200}>
            {/* Single Headline with Rotating Words */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6">
                <span className="text-white block mb-2">{staticText}</span>
                <span className="text-mustard-400 block">
                  <RotatingText
                    words={rotatingText}
                    className="text-mustard-400"
                    animationDuration={3000}
                  />
                </span>
              </h1>

              {/* Subtle Professional Glow */}
              <div className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-transparent via-navy-500/10 to-transparent rounded-3xl blur-2xl -z-10" />
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          {ctaButtons && ctaButtons.length > 0 && (
            <AnimatedSection animation="fadeInUp" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                {ctaButtons.map((button, index) => (
                  <HeroCTA key={index} button={button} />
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </div>
  );
}
