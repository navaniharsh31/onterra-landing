"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { InvestmentStrategiesGrid } from "./InvestmentStrategiesGrid";
import { StrategyDetailPanel } from "./StrategyDetailPanel";
import { InvestmentStrategiesMobile } from "./mobile/InvestmentStrategiesMobile";
interface InvestmentStrategiesSectionNewProps {
  className?: string;
  content?: any;
}

export function InvestmentStrategiesSectionNew({
  className,
  content,
}: InvestmentStrategiesSectionNewProps) {
  const sanityData = content;

  // Filter out main category nodes for selection
  const selectableStrategies = useMemo(
    () =>
      sanityData?.strategies.filter((s: any) => s.isSelectable !== false) || [],
    [sanityData?.strategies]
  );

  const [activeStrategy, setActiveStrategy] = useState<any | null>(null);
  const [isAutoMode, setIsAutoMode] = useState(true);
  const [, setCurrentIndex] = useState(0);

  // Initialize active strategy when data loads
  useEffect(() => {
    if (selectableStrategies.length > 0 && !activeStrategy) {
      setActiveStrategy(selectableStrategies[0]);
    }
  }, [selectableStrategies, activeStrategy]);

  // Auto-selection logic - cycle through selectable strategies every 10 seconds
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

  const handleStrategySelect = (strategy: any) => {
    // Don't allow selection of main category nodes
    if (strategy.isSelectable === false) return;

    setIsAutoMode(false); // Disable auto mode when user manually selects
    setActiveStrategy(strategy);
    const index = selectableStrategies.findIndex(
      (s: any) => s.id === strategy.id
    );
    setCurrentIndex(index);

    // Re-enable auto mode after 10 seconds of inactivity
    setTimeout(() => setIsAutoMode(true), 10000);
  };

  // Return null if no data
  if (!sanityData) {
    return null;
  }

  return (
    <>
      {/* Mobile Version - Show on screens smaller than lg */}
      <div className="lg:hidden">
        <InvestmentStrategiesMobile
          className={className}
          content={sanityData}
        />
      </div>

      {/* Desktop Version - Show on lg and larger screens */}
      <section
        className={cn(
          "relative hidden lg:flex items-center overflow-hidden",
          className
        )}
      >
        {/* Premium Light Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
          {/* Premium Section Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Professional Title with Sophisticated Styling */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {sanityData.sectionTitle}
                </span>
              </h2>

              {/* Subtle Professional Glow */}
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-transparent via-navy-500/8 to-transparent rounded-2xl blur-xl -z-10" />
            </motion.div>

            {/* Premium Subtitle */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
                {sanityData.sectionDescription}
              </p>

              {/* Professional Bottom Accent */}
              <div className="w-48 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent mx-auto mt-6" />
            </motion.div>
          </motion.div>

          {/* Premium Split-Screen Layout - Simple Flex */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Panel - Investment Strategies Grid */}
            <motion.div
              className="flex-1 flex items-center justify-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full max-w-2xl">
                <InvestmentStrategiesGrid
                  strategies={sanityData.strategies}
                  activeStrategy={activeStrategy}
                  onStrategySelect={handleStrategySelect}
                  className="w-full"
                />
              </div>
            </motion.div>

            {/* Right Panel - Simple Text Content */}
            <motion.div
              className="flex-1 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full max-w-2xl">
                <StrategyDetailPanel
                  strategy={activeStrategy}
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
