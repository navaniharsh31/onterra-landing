"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface StrategyMobileCardProps {
  strategy: {
    id: string;
    title: string;
    description: string;
    keyPoints: string[];
    metrics: {
      averageReturn?: string;
      holdPeriod?: string;
      minInvestment?: string;
    };
    category: string;
  };
  className?: string;
}

export function StrategyMobileCard({
  strategy,
  className,
}: StrategyMobileCardProps) {
  const { title, description, keyPoints, metrics, category } = strategy;

  return (
    <motion.div
      className={cn("group relative w-full", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -2 }}
    >
      {/* Premium Card Container - Light Theme */}
      <div className="relative w-full">
        {/* Premium Glass Morphism Background - Light Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-white/95 backdrop-blur-xl rounded-xs border border-slate-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" />

        {/* Professional Gradient Overlay - Light Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50/40 via-transparent to-slate-50/30 rounded-xs" />

        {/* Sophisticated Border Treatment - Light Theme */}
        <div className="absolute inset-0 ring-1 ring-inset ring-slate-200/50 rounded-xs" />

        {/* Professional Accent Points - Light Theme */}
        <div className="absolute top-3 right-3 w-1 h-1 bg-navy-500/60 rounded-full blur-[0.5px]" />
        <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-slate-400/40 rounded-full blur-[0.5px]" />

        {/* Premium Edge Highlights */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-300/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Header with Category Badge */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-light text-slate-900 leading-tight pr-4">
              {title}
            </h3>
            <Badge
              variant="secondary"
              className="bg-slate-100/80 text-slate-700 border-slate-200/60 text-xs px-2 py-1"
            >
              {category === "residential" ? "Residential" : "Commercial"}
            </Badge>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
            {description}
          </p>

          {/* Key Points */}
          {keyPoints && keyPoints.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-medium text-slate-700 mb-3">
                Key Benefits
              </h4>
              <ul className="space-y-2">
                {keyPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-navy-500 to-navy-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-slate-600 text-sm leading-relaxed font-light">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Investment Metrics */}
          {metrics &&
            (metrics.averageReturn ||
              metrics.holdPeriod ||
              metrics.minInvestment) && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {metrics.averageReturn && (
                  <div className="text-center">
                    <div className="text-2xl font-light text-slate-900 mb-1">
                      {metrics.averageReturn}
                    </div>
                    <div className="text-xs text-slate-500 font-light">
                      Avg Return
                    </div>
                  </div>
                )}
                {metrics.holdPeriod && (
                  <div className="text-center">
                    <div className="text-2xl font-light text-slate-900 mb-1">
                      {metrics.holdPeriod}
                    </div>
                    <div className="text-xs text-slate-500 font-light">
                      Hold Period
                    </div>
                  </div>
                )}
                {metrics.minInvestment && (
                  <div className="text-center">
                    <div className="text-2xl font-light text-slate-900 mb-1">
                      {metrics.minInvestment}
                    </div>
                    <div className="text-xs text-slate-500 font-light">
                      Min Investment
                    </div>
                  </div>
                )}
              </div>
            )}

          {/* Sophisticated Professional Glow - Light Theme */}
          <div className="absolute -inset-2 bg-gradient-to-br from-navy-500/8 via-slate-200/5 to-slate-300/8 rounded-xs blur-xl -z-10 opacity-60" />

          {/* Premium Inner Shadow - Light Theme */}
          <div className="absolute inset-0 shadow-inner shadow-slate-200/20 rounded-xs pointer-events-none" />

          {/* Subtle Premium Texture */}
          <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-slate-300 to-slate-400 rounded-xs mix-blend-overlay pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
