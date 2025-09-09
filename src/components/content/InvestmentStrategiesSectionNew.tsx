"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { InvestmentFlowChart } from "./InvestmentFlowChart";
import { StrategyDetailPanel } from "./StrategyDetailPanel";
import { InvestmentStrategiesMobile } from "./InvestmentStrategiesMobile";
import { useInvestmentStrategiesContentNew } from "@/hooks/useInvestmentStrategiesContentNew";

interface InvestmentStrategiesSectionNewProps {
  className?: string;
}

export function InvestmentStrategiesSectionNew({
  className,
}: InvestmentStrategiesSectionNewProps) {
  const {
    data: sanityData,
    isLoading,
    error,
  } = useInvestmentStrategiesContentNew();

  // Filter out main category nodes for selection
  const selectableStrategies = useMemo(
    () => sanityData?.strategies.filter((s) => s.isSelectable !== false) || [],
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
    const index = selectableStrategies.findIndex((s) => s.id === strategy.id);
    setCurrentIndex(index);

    // Re-enable auto mode after 10 seconds of inactivity
    setTimeout(() => setIsAutoMode(true), 10000);
  };

  // Premium Loading state
  if (isLoading) {
    return (
      <section
        className={cn(
          "relative section-full-height flex items-center overflow-hidden",
          className
        )}
      >
        {/* Premium Loading Background - Light Mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50">
          <div className="absolute inset-0 opacity-[0.12]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(71,85,105,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(71,85,105,0.3) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="text-center mb-16">
            <div className="h-16 bg-gradient-to-r from-slate-200/60 to-slate-100/60 rounded-xs mb-6 animate-pulse backdrop-blur-sm" />
            <div className="h-8 bg-gradient-to-r from-slate-100/40 to-slate-50/40 rounded-xs max-w-4xl mx-auto animate-pulse backdrop-blur-sm" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full h-80 bg-gradient-to-br from-slate-100/30 to-slate-50/30 rounded-xs animate-pulse backdrop-blur-xl" />
            </div>
            <div className="lg:col-span-7 flex items-center justify-center">
              <div className="w-full max-w-2xl h-80 bg-gradient-to-br from-slate-900/90 to-slate-800/85 rounded-xs animate-pulse backdrop-blur-xl border border-slate-700/40" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Premium Error state or no data
  if (error || !sanityData) {
    return (
      <section
        className={cn(
          "relative section-full-height flex items-center overflow-hidden",
          className
        )}
      >
        {/* Premium Error Background - Light Mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50">
          <div className="absolute inset-0 opacity-[0.12]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(71,85,105,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(71,85,105,0.3) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="text-center">
            {/* Professional Error Container - Light Background with Dark Panel Style */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/95 backdrop-blur-xl rounded-xs border border-slate-700/40 shadow-[0_24px_64px_rgba(0,0,0,0.4)]" />
              <div className="relative z-10 p-12">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-400/60 to-transparent mx-auto mb-8" />

                <h2 className="text-3xl font-light text-white mb-6">
                  {error ? "Content Unavailable" : "Configuration Required"}
                </h2>

                <p className="text-slate-300 mb-8 leading-relaxed">
                  {error
                    ? "We're experiencing difficulty retrieving investment strategies data. Our technical team has been notified."
                    : "Investment strategies content is currently being configured in our content management system."}
                </p>

                <div className="text-sm text-slate-400 bg-slate-800/30 rounded-xs px-6 py-4 border border-slate-700/30">
                  Please contact our technical support team or try again
                  shortly.
                </div>

                <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent mx-auto mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Mobile Version - Show on screens smaller than lg */}
      <div className="lg:hidden">
        <InvestmentStrategiesMobile className={className} />
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
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
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
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
              <p className="text-lg sm:text-xl text-typography-100 leading-relaxed max-w-4xl mx-auto font-light">
                {sanityData.sectionDescription}
              </p>

              {/* Professional Bottom Accent */}
              <div className="w-48 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent mx-auto mt-6" />
            </motion.div>
          </motion.div>

          {/* Premium Split-Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left Panel - Clean Flow Chart */}
            <motion.div
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Clean Flow Chart Container - No Background */}
              <div className="w-full">
                <InvestmentFlowChart
                  strategies={sanityData.strategies}
                  flowStructure={sanityData.flowStructure}
                  activeStrategy={activeStrategy}
                  onStrategySelect={handleStrategySelect}
                  className="w-full"
                />
              </div>
            </motion.div>

            {/* Right Panel - Premium Strategy Detail */}
            <motion.div
              className="lg:col-span-7 flex items-center justify-center"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Sophisticated Strategy Panel Container - Premium Dark Theme */}
              <div className="relative w-full max-w-2xl">
                {/* Premium Glass Morphism Background - Dark Theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/95 backdrop-blur-xl rounded-xs border border-slate-700/40 shadow-[0_24px_64px_rgba(0,0,0,0.4)]" />

                {/* Professional Gradient Overlay - Dark Theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900/20 via-transparent to-slate-800/30 rounded-xs" />

                {/* Sophisticated Border Treatment - Dark Theme */}
                <div className="absolute inset-0 ring-1 ring-inset ring-slate-600/30 rounded-xs" />

                {/* Premium Corner Accents - Dark Theme */}
                <div className="absolute -top-px -left-px w-8 h-8 bg-gradient-to-br from-navy-400/25 to-transparent rounded-tl-xs" />
                <div className="absolute -bottom-px -right-px w-8 h-8 bg-gradient-to-br from-slate-400/15 to-transparent rounded-br-xs" />

                {/* Professional Accent Points - Dark Theme */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-navy-400/70 rounded-full blur-[0.5px]" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-slate-400/50 rounded-full blur-[0.5px]" />

                {/* Mustard Accent Hint - Right Side */}
                <div className="absolute top-1/2 -right-2 w-1 h-16 bg-gradient-to-b from-mustard-400/60 via-mustard-500/80 to-mustard-600/60 rounded-full blur-[0.5px]" />
                <div className="absolute top-1/2 -right-1 w-0.5 h-12 bg-gradient-to-b from-mustard-300/40 via-mustard-400/60 to-mustard-500/40 rounded-full" />

                {/* Premium Edge Highlights */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-500/40 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-500/30 to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-8 lg:p-12">
                  <StrategyDetailPanel
                    strategy={activeStrategy}
                    className="w-full"
                  />
                </div>

                {/* Sophisticated Professional Glow - Dark Theme */}
                <div className="absolute -inset-3 bg-gradient-to-br from-navy-500/15 via-slate-700/10 to-slate-600/15 rounded-xs blur-2xl -z-10 opacity-80" />

                {/* Premium Inner Shadow - Dark Theme */}
                <div className="absolute inset-0 shadow-inner shadow-slate-950/40 rounded-xs pointer-events-none" />

                {/* Subtle Premium Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-slate-400 to-slate-600 rounded-xs mix-blend-overlay pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
