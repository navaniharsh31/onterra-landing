"use client";

import { cn } from "@/lib/utils";
import { FlowChartNode } from "./FlowChartNode";

interface Strategy {
  id: string;
  title: string;
  category: string;
  level: number;
  index: number;
  description: string;
  keyPoints: string[];
  metrics: Record<string, string>;
  isSelectable: boolean;
}

interface FlowStructure {
  levels: Array<{
    level: number;
    nodes: string[];
    parentId?: string | null;
    childId?: string;
    childIds?: string[];
    title: string;
  }>;
}

interface InvestmentFlowChartProps {
  strategies: Strategy[];
  flowStructure: FlowStructure;
  activeStrategy: Strategy | null;
  onStrategySelect: (strategy: Strategy) => void;
  className?: string;
}

export function InvestmentFlowChart({
  strategies,
  flowStructure,
  activeStrategy,
  onStrategySelect,
  className,
}: InvestmentFlowChartProps) {
  // Create a lookup map for strategies by ID
  const strategyMap = strategies.reduce(
    (acc, strategy) => {
      acc[strategy.id] = strategy;
      return acc;
    },
    {} as Record<string, Strategy>
  );

  return (
    <div className={cn("relative w-full", className)}>
      {/* Flow Chart Container */}
      <div className="relative">
        {/* Level 0 - Top Row (Multi-Family, Single-Family, Student Housing) */}
        <div className="relative mb-8">
          <div className="flex justify-center items-center gap-8">
            {flowStructure.levels[0].nodes.map((nodeId, index) => {
              const strategy = strategyMap[nodeId];
              if (!strategy) return null;

              return (
                <div key={nodeId} className="relative">
                  <FlowChartNode
                    strategy={strategy}
                    isActive={activeStrategy?.id === nodeId}
                    onClick={() => onStrategySelect(strategy)}
                    className="w-36 h-20"
                  />
                </div>
              );
            })}
          </div>

          {/* Vertical lines from top nodes to horizontal connector */}
          <svg
            className="absolute top-full left-0 w-full h-8"
            style={{ overflow: "visible" }}
          >
            {/* Left node connector */}
            <line
              x1="25%"
              y1="0"
              x2="25%"
              y2="16"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Center node connector */}
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="16"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Right node connector */}
            <line
              x1="75%"
              y1="0"
              x2="75%"
              y2="16"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Horizontal connector */}
            <line
              x1="25%"
              y1="16"
              x2="75%"
              y2="16"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Vertical line down to residential */}
            <line
              x1="50%"
              y1="16"
              x2="50%"
              y2="32"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
          </svg>
        </div>

        {/* Level 1 - Residential */}
        <div className="relative mb-8">
          <div className="flex justify-center items-center">
            {flowStructure.levels[1].nodes.map((nodeId) => {
              const strategy = strategyMap[nodeId];
              if (!strategy) return null;

              return (
                <div key={nodeId} className="relative">
                  <FlowChartNode
                    strategy={strategy}
                    isActive={activeStrategy?.id === nodeId}
                    onClick={() => onStrategySelect(strategy)}
                    className="w-32 h-16"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Level 2 - Commercial */}
        <div className="relative mb-8">
          <div className="flex justify-center items-center">
            {flowStructure.levels[2].nodes.map((nodeId) => {
              const strategy = strategyMap[nodeId];
              if (!strategy) return null;

              return (
                <div key={nodeId} className="relative">
                  <FlowChartNode
                    strategy={strategy}
                    isActive={activeStrategy?.id === nodeId}
                    onClick={() => onStrategySelect(strategy)}
                    className="w-32 h-16"
                  />
                </div>
              );
            })}
          </div>

          {/* Connectors to bottom row */}
          <svg
            className="absolute top-full left-0 w-full h-8"
            style={{ overflow: "visible" }}
          >
            {/* Vertical line down */}
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="16"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Horizontal connector */}
            <line
              x1="30%"
              y1="16"
              x2="70%"
              y2="16"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Left vertical line to office buildings */}
            <line
              x1="30%"
              y1="16"
              x2="30%"
              y2="32"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Right vertical line to retail spaces */}
            <line
              x1="70%"
              y1="16"
              x2="70%"
              y2="32"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
          </svg>
        </div>

        {/* Level 3 - Bottom Row (Office Buildings, Retail Spaces) */}
        <div className="flex justify-center items-center gap-16">
          {flowStructure.levels[3].nodes.map((nodeId, index) => {
            const strategy = strategyMap[nodeId];
            if (!strategy) return null;

            return (
              <div key={nodeId} className="relative">
                <FlowChartNode
                  strategy={strategy}
                  isActive={activeStrategy?.id === nodeId}
                  onClick={() => onStrategySelect(strategy)}
                  className="w-36 h-20"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
