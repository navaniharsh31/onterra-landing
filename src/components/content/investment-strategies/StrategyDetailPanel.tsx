"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

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
      <div className={cn("flex items-center justify-center h-full", className)}>
        <div className="text-center text-slate-400">
          <div className="w-16 h-16 mx-auto mb-4 bg-navy-800/50 rounded-full flex items-center justify-center border border-navy-700/30">
            <TrendingUp className="w-8 h-8 text-slate-500" />
          </div>
          <p className="text-lg">
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
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Strategy Title */}
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {strategy.title}
        </motion.h2>

        {/* Strategy Description */}
        <motion.p
          className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {strategy.description}
        </motion.p>

        {/* Metrics */}
        {Object.keys(strategy.metrics).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-base font-semibold text-slate-100 mb-2">
              Investment Metrics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {Object.entries(strategy.metrics).map(([key, value], index) => (
                <motion.div
                  key={key}
                  className="bg-navy-800/50 rounded-xs p-3 border border-navy-700/50 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center mb-2">
                    {key.toLowerCase().includes("return") && (
                      <TrendingUp className="w-4 h-4 text-mustard-400 mr-2" />
                    )}
                    {key.toLowerCase().includes("period") && (
                      <Clock className="w-4 h-4 text-mustard-400 mr-2" />
                    )}
                    {key.toLowerCase().includes("investment") && (
                      <DollarSign className="w-4 h-4 text-mustard-400 mr-2" />
                    )}
                    {!key.toLowerCase().includes("return") &&
                      !key.toLowerCase().includes("period") &&
                      !key.toLowerCase().includes("investment") && (
                        <TrendingUp className="w-4 h-4 text-mustard-400 mr-2" />
                      )}
                    <span className="text-sm font-medium text-slate-400 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-slate-100">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Strategy Type Badge */}
        <motion.div
          className="mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border",
              strategy.category === "residential"
                ? "bg-green-900/30 text-green-300 border-green-700/40"
                : strategy.category === "commercial"
                  ? "bg-mustard-900/30 text-mustard-300 border-mustard-700/40"
                  : strategy.category === "category"
                    ? "bg-purple-900/30 text-purple-300 border-purple-700/40"
                    : "bg-navy-800/40 text-slate-300 border-navy-700/40"
            )}
          >
            {strategy.category === "residential" && "Residential"}
            {strategy.category === "commercial" && "Commercial"}
            {strategy.category === "category" && "Asset Class"}
            {!["residential", "commercial", "category"].includes(
              strategy.category
            ) &&
              `${strategy.category.charAt(0).toUpperCase()}${strategy.category.slice(1)}`}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
