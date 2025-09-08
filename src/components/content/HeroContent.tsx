import { cn } from "@/lib/utils";
import { HeroCTA } from "./HeroCTA";
import { RotatingText } from "./RotatingText";
import { HeroLineDesign } from "./HeroLineDesign";
import { AnimatedSection } from "@/components/layout/AnimatedSection";

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
  lineDesign,
  ctaButtons,
  className,
}: HeroContentProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex justify-start items-center h-full px-4 sm:px-8 lg:px-12 text-left",
        className
      )}
    >
      <div className="max-w-4xl flex items-center">
        {/* Vertical Line Design */}
        <HeroLineDesign
          enabled={lineDesign?.enabled}
          color={lineDesign?.color}
        />

        {/* Text Content */}
        <div className="flex-1">
          <AnimatedSection animation="slideInLeft" delay={200}>
            {/* Institutional-Grade Typography */}
            <div className="relative my-4">
              {/* Premium Static Text */}
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent whitespace-nowrap">
                  {staticText}
                </span>
              </div>

              {/* Premium Rotating Text */}
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                <RotatingText
                  words={rotatingText}
                  className="text-blue-400"
                  animationDuration={3000}
                />
              </div>

              {/* Subtle Professional Glow */}
              <div className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-transparent via-white/8 to-transparent rounded-3xl blur-2xl -z-10" />
            </div>
          </AnimatedSection>

          {ctaButtons && ctaButtons.length > 0 && (
            <AnimatedSection animation="slideInLeft" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
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
