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
            <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {/* Static Text - stays on one line */}
              <div className="whitespace-nowrap">{staticText}</div>

              {/* Rotating Text - below static text */}
              <div className="text-blue-400">
                <RotatingText
                  words={rotatingText}
                  className="text-blue-400"
                  animationDuration={3000}
                />
              </div>
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
