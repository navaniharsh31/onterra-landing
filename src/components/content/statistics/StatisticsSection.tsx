"use client";

import { cn } from "@/lib/utils";
import { StatisticCard } from "./StatisticCard";
import { AnimatedSection } from "@/components/layout/sections/AnimatedSection";
import { motion } from "framer-motion";
import React from "react";

interface StatisticsSectionProps {
  content: {
    title?: string;
    statistics: Array<{
      value: string;
      label: string;
      suffix?: string;
    }>;
  };
  className?: string;
}

export function StatisticsSection({
  content,
  className,
}: StatisticsSectionProps) {
  const { title, statistics } = content;

  return (
    <section className={cn("py-16 relative overflow-hidden", className)}>
      {/* Premium Light Background with Animated Orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        {/* Dynamic Bouncing Gradient Orbs */}

        {/* Blue Orb */}
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

        {/* Slate Orb */}
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

        {/* Purple Orb */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-16 lg:mb-20">
            {/* Institutional-Grade Section Title */}
            <div className="relative mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>

              {/* Subtle Professional Glow */}
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-transparent via-navy-500/8 to-transparent rounded-2xl blur-xl -z-10" />
            </div>

            {/* Professional Bottom Accent */}
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent mx-auto" />
          </div>
        )}

        <div
          className={`grid gap-8 sm:gap-10 lg:gap-12 ${
            statistics.length === 1
              ? "grid-cols-1 justify-center max-w-sm mx-auto"
              : statistics.length === 2
                ? "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto"
                : statistics.length === 3
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : statistics.length === 4
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    : statistics.length === 5
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
                      : statistics.length <= 8
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {statistics.map((statistic, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 100}
            >
              <StatisticCard
                value={statistic.value}
                label={statistic.label}
                suffix={statistic.suffix}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
