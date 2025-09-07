import { cn } from "@/lib/utils";
import { StrategyItem } from "./StrategyItem";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface InvestmentStrategiesSectionProps {
  content: {
    sectionTitle: string;
    sectionDescription?: string;
    categories: Array<{
      categoryName: string;
      categoryDescription?: string;
      strategies: Array<{
        title: string;
        description: string;
        highlights?: string[];
        isExpandedByDefault?: boolean;
      }>;
    }>;
  };
  className?: string;
}

export function InvestmentStrategiesSection({
  content,
  className,
}: InvestmentStrategiesSectionProps) {
  const { sectionTitle, sectionDescription, categories } = content;

  return (
    <section className={cn("py-16 sm:py-20 lg:py-24 bg-gray-50", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          {sectionDescription && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {sectionDescription}
            </p>
          )}
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <AnimatedSection
              key={categoryIndex}
              animation="slideUp"
              delay={categoryIndex * 200}
            >
              <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {category.categoryName}
                  </h3>
                  {category.categoryDescription && (
                    <p className="text-gray-600">
                      {category.categoryDescription}
                    </p>
                  )}
                </div>

                <Accordion type="multiple" className="space-y-4">
                  {category.strategies.map((strategy, strategyIndex) => (
                    <AccordionItem
                      key={strategyIndex}
                      value={`${categoryIndex}-${strategyIndex}`}
                      className="border border-gray-200 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="text-lg font-semibold text-gray-900">
                          {strategy.title}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4">
                        <StrategyItem
                          title=""
                          description={strategy.description}
                          highlights={strategy.highlights}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
