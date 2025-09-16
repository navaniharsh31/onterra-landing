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
  // Group strategies by mainPoint
  const groupedStrategies = strategies.reduce(
    (acc, strategy) => {
      const mainPoint = strategy.mainPoint;
      if (!acc[mainPoint]) {
        acc[mainPoint] = [];
      }
      acc[mainPoint].push(strategy);
      return acc;
    },
    {} as Record<string, Strategy[]>
  );

  // Sort strategies within each group by column
  Object.keys(groupedStrategies).forEach((mainPoint) => {
    groupedStrategies[mainPoint].sort(
      (a, b) => a.gridPosition.column - b.gridPosition.column
    );
  });

  // Get main points in order
  const mainPoints = Object.keys(groupedStrategies).sort((a, b) => {
    const firstStrategyA = groupedStrategies[a][0];
    const firstStrategyB = groupedStrategies[b][0];
    return firstStrategyA.gridPosition.row - firstStrategyB.gridPosition.row;
  });

  return (
    <div className={cn("relative w-full", className)}>
      {/* Grid Container */}
      <div className="space-y-12">
        {mainPoints.map((mainPoint) => (
          <div key={mainPoint} className="space-y-6">
            {/* Main Point Header - Styled like previous main category nodes */}
            <div className="flex justify-center mb-6">
              <div className="relative p-4 rounded-xs border-2 bg-slate-100 border-slate-300 text-slate-700 cursor-default shadow-sm">
                <h3 className="text-center leading-tight font-semibold text-[16px] uppercase font-bold text-slate-700">
                  {mainPoint}
                </h3>
              </div>
            </div>

            {/* Strategy Titles Row */}
            <div className="flex justify-center items-center gap-6">
              {groupedStrategies[mainPoint].map((strategy) => (
                <div key={strategy.id} className="relative">
                  <FlowChartNode
                    strategy={strategy}
                    isActive={activeStrategy?.id === strategy.id}
                    onClick={() => onStrategySelect(strategy)}
                    className="w-44 h-24"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
