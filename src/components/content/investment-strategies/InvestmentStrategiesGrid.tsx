"use client";

import { cn } from "@/lib/utils";
import { FlowChartNode } from "./FlowChartNode";

interface Strategy {
  id: string;
  title: string;
  category: string;
  mainPoint: string;
  gridPosition: {
    row: number;
    column: number;
  };
  description: string;
  keyPoints: string[];
  metrics: Record<string, string>;
  isSelectable: boolean;
}

interface InvestmentStrategiesGridProps {
  strategies: Strategy[];
  activeStrategy: Strategy | null;
  onStrategySelect: (strategy: Strategy) => void;
  className?: string;
}

export function InvestmentStrategiesGrid({
  strategies,
  activeStrategy,
  onStrategySelect,
  className,
}: InvestmentStrategiesGridProps) {
  // Simple data filtering by category
  const residentialStrategies = strategies.filter(
    (strategy) => strategy.category === "residential"
  );

  const commercialStrategies = strategies.filter(
    (strategy) => strategy.category === "commercial"
  );

  return (
    <div className={cn("relative w-full", className)}>
      {/* Table-like Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {/* Residential Column */}
        <div className="space-y-4">
          {/* Residential Header */}
          <div className="flex justify-center mb-4">
            <div className="relative p-4 rounded-xs border-2 bg-slate-100 border-slate-300 text-slate-700 cursor-default shadow-sm w-full max-w-xs">
              <h3 className="text-center leading-tight font-semibold text-[16px] uppercase font-bold text-slate-700">
                Residential
              </h3>
            </div>
          </div>

          {/* Residential Strategies */}
          <div className="space-y-3">
            {residentialStrategies.map((strategy) => (
              <div key={strategy.id} className="flex justify-center">
                <FlowChartNode
                  strategy={strategy}
                  isActive={activeStrategy?.id === strategy.id}
                  onClick={() => onStrategySelect(strategy)}
                  className="w-full max-w-xs h-20 md:h-24"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Column */}
        <div className="space-y-4">
          {/* Commercial Header */}
          <div className="flex justify-center mb-4">
            <div className="relative p-4 rounded-xs border-2 bg-slate-100 border-slate-300 text-slate-700 cursor-default shadow-sm w-full max-w-xs">
              <h3 className="text-center leading-tight font-semibold text-[16px] uppercase font-bold text-slate-700">
                Commercial
              </h3>
            </div>
          </div>

          {/* Commercial Strategies */}
          <div className="space-y-3">
            {commercialStrategies.map((strategy) => (
              <div key={strategy.id} className="flex justify-center">
                <FlowChartNode
                  strategy={strategy}
                  isActive={activeStrategy?.id === strategy.id}
                  onClick={() => onStrategySelect(strategy)}
                  className="w-full max-w-xs h-20 md:h-24"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
