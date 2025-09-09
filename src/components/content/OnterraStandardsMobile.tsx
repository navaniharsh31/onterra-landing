"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PrincipleMobileCard } from "./PrincipleMobileCard";
import { Shield, Eye, Target, Clock, Lightbulb, Handshake } from "lucide-react";
import { useOnterraStandardsContentNew } from "@/hooks/useOnterraStandardsContentNew";

// Icon mapping for Sanity icon strings
const iconMap = {
  Target,
  Eye,
  Shield,
  Clock,
  Lightbulb,
  Handshake,
};

interface OnterraStandardsMobileProps {
  className?: string;
}

export function OnterraStandardsMobile({
  className,
}: OnterraStandardsMobileProps) {
  const {
    data: sanityData,
    isLoading,
    error,
  } = useOnterraStandardsContentNew();

  // Transform Sanity data to component format
  const transformedData = sanityData
    ? {
        ...sanityData,
        principles: sanityData.principles.map((principle) => ({
          ...principle,
          icon: iconMap[principle.icon as keyof typeof iconMap] || Target,
        })),
      }
    : null;

  // Premium Loading state
  if (isLoading) {
    return (
      <section
        className={cn(
          "relative py-16 sm:py-20 lg:py-24 flex items-center overflow-hidden",
          className
        )}
      >
        {/* Premium Loading Background - Light Mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="text-center mb-16">
            <div className="h-16 bg-gradient-to-r from-slate-200/60 to-slate-100/60 rounded-xs mb-6 animate-pulse backdrop-blur-sm" />
            <div className="h-8 bg-gradient-to-r from-slate-100/40 to-slate-50/40 rounded-xs max-w-4xl mx-auto animate-pulse backdrop-blur-sm" />
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-full h-48 bg-gradient-to-br from-slate-100/30 to-slate-50/30 rounded-xs animate-pulse backdrop-blur-xl"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Premium Error state
  if (error || !transformedData) {
    return (
      <section
        className={cn(
          "relative py-16 sm:py-20 lg:py-24 flex items-center overflow-hidden",
          className
        )}
      >
        {/* Premium Error Background - Light Mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="text-center">
            {/* Professional Error Container */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/95 backdrop-blur-xl rounded-xs border border-slate-700/40 shadow-[0_24px_64px_rgba(0,0,0,0.4)]" />
              <div className="relative z-10 p-12">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-400/60 to-transparent mx-auto mb-8" />

                <h2 className="text-3xl font-light text-white mb-6">
                  {error ? "Content Unavailable" : "Configuration Required"}
                </h2>

                <p className="text-slate-300 mb-8 leading-relaxed">
                  {error
                    ? "We're experiencing difficulty retrieving Onterra Standards data. Our technical team has been notified."
                    : "Onterra Standards content is currently being configured in our content management system."}
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
    <section
      className={cn("relative flex items-center overflow-hidden", className)}
    >
      {/* Premium Light Background with Animated Orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50">
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
                {transformedData.sectionTitle}
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
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              {transformedData.description}
            </p>

            {/* Professional Bottom Accent */}
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent mx-auto mt-6" />
          </motion.div>
        </motion.div>

        {/* Principles Grid - 2x3 Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {transformedData.principles.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PrincipleMobileCard principle={principle} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
