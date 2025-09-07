import { cn } from "@/lib/utils";
import { PrincipleCard } from "./PrincipleCard";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import React from "react";

interface OnterraStandardsSectionProps {
  content: {
    sectionTitle: string;
    subtitle: string;
    principles: Array<{
      title: string;
      description?: string;
      points: string[];
      icon?: {
        type: "image" | "iconify";
        value: string;
      };
    }>;
  };
  className?: string;
}

export function OnterraStandardsSection({
  content,
  className,
}: OnterraStandardsSectionProps) {
  const { sectionTitle, subtitle, principles } = content;

  return (
    <section className={cn("py-16 sm:py-20 lg:py-24 bg-white", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 150}
            >
              <PrincipleCard
                title={principle.title}
                description={principle.description}
                points={principle.points}
                icon={principle.icon}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
