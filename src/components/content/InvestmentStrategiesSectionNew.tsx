"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { InvestmentFlowChart } from "./InvestmentFlowChart";
import { StrategyDetailPanel } from "./StrategyDetailPanel";

// Dummy data structure for the new design
const strategiesData = {
  sectionTitle: "Investment Strategies",
  sectionDescription:
    "Our comprehensive approach to real estate investment spanning residential and commercial markets, designed to maximize returns while managing risk through diversified property portfolios.",

  strategies: [
    {
      id: "multi-family",
      title: "Multi-Family Properties",
      category: "residential",
      level: 0,
      index: 0,
      description:
        "Strategic investments in apartment complexes and multi-unit residential properties that provide stable cash flow through rental income. We focus on properties with strong fundamentals in growing markets with favorable demographic trends.",
      keyPoints: [
        "Stable monthly cash flow from multiple units",
        "Economies of scale in property management",
        "Appreciation potential in growing markets",
        "Lower vacancy risk through unit diversification",
      ],
      metrics: {
        averageReturn: "8-12%",
        holdPeriod: "5-7 years",
        minInvestment: "$500K",
      },
      isSelectable: true,
    },
    {
      id: "single-family",
      title: "Single-Family Homes",
      category: "residential",
      level: 0,
      index: 1,
      description:
        "Carefully selected single-family rental properties in high-demand neighborhoods. Our strategy focuses on properties that attract quality tenants and offer strong appreciation potential through strategic improvements and market timing.",
      keyPoints: [
        "Strong rental demand from families",
        "Easier property management and maintenance",
        "Attractive to owner-occupants for future sale",
        "Potential for value-add improvements",
      ],
      metrics: {
        averageReturn: "6-10%",
        holdPeriod: "3-5 years",
        minInvestment: "$200K",
      },
      isSelectable: true,
    },
    {
      id: "student-housing",
      title: "Student Housing",
      category: "residential",
      level: 0,
      index: 2,
      description:
        "Purpose-built student accommodation near major universities and colleges. These properties benefit from consistent demand, higher rental rates per square foot, and long-term stability tied to educational institution growth.",
      keyPoints: [
        "Higher rental rates per square foot",
        "Consistent demand tied to university enrollment",
        "Parental guarantees reduce payment risk",
        "Opportunity for premium amenities and services",
      ],
      metrics: {
        averageReturn: "10-14%",
        holdPeriod: "7-10 years",
        minInvestment: "$750K",
      },
      isSelectable: true,
    },
    {
      id: "residential",
      title: "Residential",
      category: "main-category",
      level: 1,
      index: 0,
      description: "",
      keyPoints: [] as string[],
      metrics: {} as Record<string, string>,
      isSelectable: false,
    },
    {
      id: "commercial",
      title: "Commercial",
      category: "main-category",
      level: 2,
      index: 0,
      description: "",
      keyPoints: [] as string[],
      metrics: {} as Record<string, string>,
      isSelectable: false,
    },
    {
      id: "office-buildings",
      title: "Office Buildings",
      category: "commercial",
      level: 3,
      index: 0,
      description:
        "Class A and B office buildings in central business districts and suburban office parks. We target buildings with stable tenant bases, modern amenities, and potential for rental growth through strategic capital improvements.",
      keyPoints: [
        "Focus on Class A and B office properties",
        "Central business district and suburban locations",
        "Long-term lease agreements with corporate tenants",
        "Strategic capital improvement programs",
      ],
      metrics: {
        averageReturn: "7-10%",
        holdPeriod: "5-8 years",
        minInvestment: "$1M+",
      },
      isSelectable: true,
    },
    {
      id: "retail-spaces",
      title: "Retail Spaces",
      category: "commercial",
      level: 3,
      index: 1,
      description:
        "Strategic retail investments in neighborhood shopping centers, strip malls, and standalone retail buildings. We focus on properties with strong demographics, high traffic counts, and tenants that provide essential services to local communities.",
      keyPoints: [
        "Neighborhood shopping centers and strip malls",
        "Essential service tenants (grocery, pharmacy, services)",
        "High traffic count locations",
        "Strong local demographic fundamentals",
      ],
      metrics: {
        averageReturn: "8-12%",
        holdPeriod: "7-10 years",
        minInvestment: "$750K",
      },
      isSelectable: true,
    },
  ],

  flowStructure: {
    levels: [
      {
        level: 0,
        nodes: ["multi-family", "single-family", "student-housing"],
        parentId: "residential",
        title: "Property Types",
      },
      {
        level: 1,
        nodes: ["residential"],
        parentId: null,
        childId: "commercial",
        title: "Asset Categories",
      },
      {
        level: 2,
        nodes: ["commercial"],
        parentId: "residential",
        childIds: ["office-buildings", "retail-spaces"],
        title: "Commercial Sectors",
      },
      {
        level: 3,
        nodes: ["office-buildings", "retail-spaces"],
        parentId: "commercial",
        title: "Investment Types",
      },
    ],
  },
};

interface InvestmentStrategiesSectionNewProps {
  className?: string;
}

export function InvestmentStrategiesSectionNew({
  className,
}: InvestmentStrategiesSectionNewProps) {
  // Filter out main category nodes for selection
  const selectableStrategies = strategiesData.strategies.filter(
    (s) => s.isSelectable !== false
  );

  const [activeStrategy, setActiveStrategy] = useState<
    (typeof strategiesData.strategies)[0] | null
  >(selectableStrategies[0]); // Default to first selectable strategy
  const [isAutoMode, setIsAutoMode] = useState(true);
  const [_, setCurrentIndex] = useState(0);

  // Auto-selection logic - cycle through selectable strategies every 5 seconds
  useEffect(() => {
    if (!isAutoMode || selectableStrategies.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % selectableStrategies.length;
        setActiveStrategy(selectableStrategies[nextIndex]);
        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [isAutoMode, selectableStrategies]);

  const handleStrategySelect = (
    strategy: (typeof strategiesData.strategies)[0]
  ) => {
    // Don't allow selection of main category nodes
    if (strategy.isSelectable === false) return;

    setIsAutoMode(false); // Disable auto mode when user manually selects
    setActiveStrategy(strategy);
    const index = selectableStrategies.findIndex((s) => s.id === strategy.id);
    setCurrentIndex(index);

    // Re-enable auto mode after 10 seconds of inactivity
    setTimeout(() => setIsAutoMode(true), 10000);
  };

  return (
    <section
      className={cn(
        "min-h-screen bg-white flex items-center justify-center",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {strategiesData.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            {strategiesData.sectionDescription}
          </p>
        </motion.div>

        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-32 items-center">
          {/* Left Panel - Flow Chart Tree */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <InvestmentFlowChart
              strategies={strategiesData.strategies}
              flowStructure={strategiesData.flowStructure}
              activeStrategy={activeStrategy}
              onStrategySelect={handleStrategySelect}
              className="w-full max-w-lg"
            />
          </motion.div>

          {/* Right Panel - Strategy Detail */}
          <motion.div
            className="lg:col-span-3 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StrategyDetailPanel
              strategy={activeStrategy}
              className="w-full max-w-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
