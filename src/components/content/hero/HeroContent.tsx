import { cn } from "@/lib/utils";
import { HeroCTA } from "./HeroCTA";
import { RotatingText } from "@/components/content/shared/RotatingText";
import { AnimatedSection } from "@/components/layout/sections/AnimatedSection";

interface HeroContentProps {
  staticText: string;
  rotatingText: string[];
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
        "relative z-20 flex items-center justify-center min-h-screen text-center",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(#001670 1px, transparent 1px),
              linear-gradient(90deg, #001670 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Corner Geometric Accents - Hidden on mobile */}
        <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none hidden md:block">
          <div className="w-full h-full border-l-2 border-t-2 border-mustard-400/60" />
          <div className="absolute top-4 left-4 w-24 h-24 border-l border-t border-navy-500/40" />
          <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-mustard-300/30" />
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none hidden md:block">
          <div className="w-full h-full border-r-2 border-t-2 border-mustard-400/60" />
          <div className="absolute top-4 right-4 w-24 h-24 border-r border-t border-navy-500/40" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-mustard-300/30" />
        </div>

        <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none hidden md:block">
          <div className="w-full h-full border-l-2 border-b-2 border-mustard-400/60" />
          <div className="absolute bottom-4 left-4 w-24 h-24 border-l border-b border-navy-500/40" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-mustard-300/30" />
        </div>

        <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none hidden md:block">
          <div className="w-full h-full border-r-2 border-b-2 border-mustard-400/60" />
          <div className="absolute bottom-4 right-4 w-24 h-24 border-r border-b border-navy-500/40" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-mustard-300/30" />
        </div>

        {/* Main Content Container */}
        <div className="relative">
          <AnimatedSection animation="fadeInUp" delay={200}>
            {/* Single Headline with Rotating Words */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6 text-center lg:text-left">
                <span className="text-white text-2xl sm:text-3xl font-semibold lg:text-5xl xl:text-6xl block mb-2 break-words">
                  {staticText}
                </span>
                <span className="text-white text-3xl sm:text-4xl lg:text-6xl xl:text-7xl block">
                  <RotatingText
                    words={rotatingText}
                    className="text-white"
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
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
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
