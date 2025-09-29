"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { InvestmentStrategiesMobileTabs } from "./InvestmentStrategiesMobileTabs";
interface InvestmentStrategiesMobileProps {
  className?: string;
  content?: any;
}

export function InvestmentStrategiesMobile({
  className,
  content,
}: InvestmentStrategiesMobileProps) {
  const sanityData = content;

  // Return null if no data
  if (!sanityData) {
    return null;
  }

  return (
    <section
      className={cn(
        "relative py-12 sm:py-16 md:py-20 flex items-center overflow-hidden",
        className
      )}
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
            <p className="whitespace-pre-line text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              {sanityData.sectionDescription}
            </p>

            {/* Professional Bottom Accent */}
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent mx-auto mt-6" />
          </motion.div>
        </motion.div>

        {/* Mobile Tabs Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <InvestmentStrategiesMobileTabs strategies={sanityData.strategies} />
        </motion.div>
      </div>
    </section>
  );
}
