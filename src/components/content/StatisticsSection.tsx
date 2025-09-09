import { cn } from "@/lib/utils";
import { StatisticCard } from "./StatisticCard";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import React from "react";

interface StatisticsSectionProps {
  content: {
    title?: string;
    statistics: Array<{
      value: string;
      label: string;
      suffix?: string;
    }>;
  };
  className?: string;
}

export function StatisticsSection({
  content,
  className,
}: StatisticsSectionProps) {
  const { title, statistics } = content;

  return (
    <section className={cn("py-16 sm:py-20 lg:py-24 bg-gray-0", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-16 lg:mb-20">
            {/* Institutional-Grade Section Title */}
            <div className="relative mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>

              {/* Subtle Professional Glow */}
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-transparent via-navy-500/8 to-transparent rounded-2xl blur-xl -z-10" />
            </div>

            {/* Professional Bottom Accent */}
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent mx-auto" />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {statistics.map((statistic, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 100}
            >
              <StatisticCard
                value={statistic.value}
                label={statistic.label}
                suffix={statistic.suffix}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
