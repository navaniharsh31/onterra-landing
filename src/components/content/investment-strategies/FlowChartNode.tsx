"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Building2,
  Home,
  Users,
  Building,
  ShoppingBag,
  Briefcase,
} from "lucide-react";

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

interface FlowChartNodeProps {
  strategy: Strategy;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

// Icon mapping for different strategy types
const getStrategyIcon = (strategyId: string) => {
  switch (strategyId) {
    case "multi-family":
      return Building2;
    case "single-family":
      return Home;
    case "student-housing":
      return Users;
    case "residential":
      return Building2;
    case "commercial":
      return Building;
    case "office-buildings":
      return Briefcase;
    case "retail-spaces":
      return ShoppingBag;
    default:
      return Building;
  }
};

export function FlowChartNode({
  strategy,
  isActive,
  onClick,
  className,
}: FlowChartNodeProps) {
  const Icon = getStrategyIcon(strategy.id);
  const isMainCategory = strategy.category === "main-category";
  const isSelectable = strategy.isSelectable !== false;

  return (
    <motion.button
      onClick={isSelectable ? onClick : undefined}
      disabled={!isSelectable}
      className={cn(
        "relative p-4 rounded-xs border-2 transition-all duration-300 text-left",
        isMainCategory
          ? "bg-slate-100 border-slate-300 text-slate-700 cursor-default shadow-sm "
          : isSelectable
            ? cn(
                "group hover:shadow-lg hover:border-mustard-300 cursor-pointer",
                isActive
                  ? "bg-navy-600 border-navy-600 text-white shadow-lg scale-105"
                  : "bg-white border-gray-200 text-gray-900 hover:bg-mustard-50"
              )
            : "bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed",
        className
      )}
      whileHover={
        isSelectable && !isMainCategory
          ? {
              scale: isActive ? 1.05 : 1.02,
              y: -2,
            }
          : {}
      }
      whileTap={isSelectable && !isMainCategory ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradient overlay for active state */}
      {isActive && !isMainCategory && (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600 to-navy-700 rounded-xs" />
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Icon */}
        {!isMainCategory ? (
          <Icon
            className={cn(
              "mb-2 transition-colors",
              isActive
                ? "w-6 h-6 text-white"
                : "w-6 h-6 text-navy-600 group-hover:text-navy-700"
            )}
          />
        ) : null}

        {/* Title */}
        <h3
          className={cn(
            "text-center leading-tight transition-colors font-semibold",
            isMainCategory
              ? "text-[16px] uppercase font-bold text-slate-700"
              : isActive
                ? "text-sm text-white"
                : "text-sm text-gray-900 group-hover:text-navy-900"
          )}
        >
          {strategy.title}
        </h3>
      </div>

      {/* Hover effect overlay for selectable items */}
      {isSelectable && !isMainCategory && (
        <div className="absolute inset-0 bg-navy-500/10 rounded-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </motion.button>
  );
}
