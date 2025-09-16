"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  isSelectable: boolean;
}

interface StrategyDetailPanelProps {
  strategy: Strategy | null;
  className?: string;
}

export function StrategyDetailPanel({
  strategy,
  className,
}: StrategyDetailPanelProps) {
  if (!strategy || strategy.isSelectable === false) {
    return (
      <div className={cn("w-full", className)}>
        <div className="text-center text-slate-600">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700 bg-clip-text text-transparent">
              Investment Strategies
            </span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-light">
            Select an investment strategy to view details
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <motion.div
        key={strategy.id}
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Strategy Title - Same styling as Onterra Standards */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700 bg-clip-text text-transparent">
            {strategy.title}
          </span>
        </h2>

        {/* Strategy Description - Same styling as Onterra Standards */}
        <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
          {strategy.description}
        </p>

        {/* Key Points - Same styling as Onterra Standards */}
        {strategy.keyPoints && strategy.keyPoints.length > 0 && (
          <ul className="space-y-4">
            {strategy.keyPoints.map((point: string, index: number) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-navy-500 to-navy-600 rounded-full mt-2.5 mr-4 flex-shrink-0" />
                <span className="text-slate-700 font-light leading-relaxed">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
