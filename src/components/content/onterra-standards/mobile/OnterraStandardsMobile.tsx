"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PrincipleMobileCard } from "./PrincipleMobileCard";
// Icons removed since mobile cards don't use them

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
          // Remove icon transformation since we're not using icons in mobile
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
      {/* Premium Light Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 md:py-16">
        {/* Premium Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 tracking-tight">
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
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              {transformedData.description}
            </p>

            {/* Professional Bottom Accent */}
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent mx-auto mt-6" />
          </motion.div>
        </motion.div>

        {/* Principles Grid - 2x3 Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto"
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
