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
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {title}
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
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
