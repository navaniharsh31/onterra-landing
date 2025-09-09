"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PrincipleMobileCard } from "./PrincipleMobileCard";
import { Shield, Eye, Target, Clock, Lightbulb, Handshake } from "lucide-react";
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
  content?: any;
}

export function OnterraStandardsMobile({
  className,
  content,
}: OnterraStandardsMobileProps) {
  const sanityData = content;

  // Transform Sanity data to component format
  const transformedData = sanityData
    ? {
        ...sanityData,
        principles: sanityData.principles.map((principle: any) => ({
          ...principle,
          icon: iconMap[principle.icon as keyof typeof iconMap] || Target,
        })),
      }
    : null;

  // Return null if no data
  if (!transformedData) {
    return null;
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-tight">
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
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
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
          {transformedData.principles.map((principle: any, index: number) => (
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
