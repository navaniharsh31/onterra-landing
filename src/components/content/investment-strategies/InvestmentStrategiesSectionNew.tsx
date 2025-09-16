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
          "relative section-full-height hidden lg:flex items-center overflow-hidden",
          className
        )}
      >
        {/* Premium Light Background - ENHANCED VISIBILITY */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50">
          {/* Optional Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.12]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(71,85,105,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(71,85,105,0.3) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Dynamic Bouncing Gradient Orbs */}

          {/* Blue Orb - EXTRA LARGE SIZE, VERY SUBTLE */}
          <motion.div
            className="absolute w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%)",
            }}
            animate={{
              x: [
                "calc(20vw - 192px)",
                "calc(80vw - 192px)",
                "calc(80vw - 192px)",
                "calc(20vw - 192px)",
                "calc(20vw - 192px)",
              ],
              y: [
                "calc(20vh - 192px)",
                "calc(20vh - 192px)",
                "calc(80vh - 192px)",
                "calc(80vh - 192px)",
                "calc(20vh - 192px)",
              ],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Slate Orb - EXTRA LARGE SIZE, VERY SUBTLE */}
          <motion.div
            className="absolute w-80 h-80 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(100, 116, 139, 0.06) 0%, rgba(100, 116, 139, 0.03) 50%, transparent 70%)",
            }}
            animate={{
              x: [
                "calc(10vw - 160px)",
                "calc(50vw - 160px)",
                "calc(90vw - 160px)",
                "calc(50vw - 160px)",
                "calc(10vw - 160px)",
              ],
              y: [
                "calc(50vh - 160px)",
                "calc(10vh - 160px)",
                "calc(50vh - 160px)",
                "calc(90vh - 160px)",
                "calc(50vh - 160px)",
              ],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Purple Orb - EXTRA LARGE SIZE, VERY SUBTLE */}
          <motion.div
            className="absolute w-[28rem] h-[28rem] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(139, 92, 246, 0.02) 45%, transparent 65%)",
            }}
            animate={{
              x: [
                "calc(0vw)",
                "calc(25vw - 224px)",
                "calc(50vw - 224px)",
                "calc(75vw - 224px)",
                "calc(100vw - 448px)",
                "calc(75vw - 224px)",
                "calc(50vw - 224px)",
                "calc(25vw - 224px)",
                "calc(0vw)",
              ],
              y: [
                "calc(50vh - 224px)",
                "calc(25vh - 224px)",
                "calc(50vh - 224px)",
                "calc(75vh - 224px)",
                "calc(50vh - 224px)",
                "calc(25vh - 224px)",
                "calc(50vh - 224px)",
                "calc(75vh - 224px)",
                "calc(50vh - 224px)",
              ],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-24 lg:py-32">
          {/* Premium Section Header */}
          <motion.div
            className="text-center mb-16"
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-tight">
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
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
                {sanityData.sectionDescription}
              </p>

              {/* Professional Bottom Accent */}
              <div className="w-48 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent mx-auto mt-6" />
            </motion.div>
          </motion.div>

          {/* Premium Split-Screen Layout - Same as Onterra Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-32 items-center">
            {/* Left Panel - Investment Strategies Grid */}
            <motion.div
              className="lg:col-span-2 flex items-center justify-center"
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

            {/* Right Panel - Simple Text Content - Same as Onterra Standards */}
            <motion.div
              className="lg:col-span-3 flex items-center justify-center"
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
