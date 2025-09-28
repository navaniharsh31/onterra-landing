"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PrincipleGrid } from "./PrincipleGrid";
import { OnterraStandardsMobile } from "./mobile/OnterraStandardsMobile";
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

interface OnterraStandardsSectionNewProps {
  className?: string;
  content?: any;
  logoData?: {
    src: string;
    alt: string;
  };
}

export function OnterraStandardsSectionNew({
  className,
  content,
  logoData,
}: OnterraStandardsSectionNewProps) {
  const sanityData = content;

  const [activePrinciple, setActivePrinciple] = useState<any>(null);

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

  const handlePrincipleHover = (principle: any) => {
    setActivePrinciple(principle);
  };

  const handlePrincipleLeave = () => {
    setActivePrinciple(null);
  };

  // Return null if no data
  if (!transformedData) {
    return null;
  }

  return (
    <>
      {/* Mobile Version - Show on screens smaller than lg */}
      <div className="lg:hidden">
        <OnterraStandardsMobile className={className} content={sanityData} />
      </div>

      {/* Desktop Version - Show on lg and larger screens */}
      <section
        className={cn(
          "relative min-h-screen max-h-[120vh] hidden lg:flex items-center overflow-hidden",
          className
        )}
      >
        {/* Premium Light Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
          {/* Premium Split-Screen Layout - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Panel - Premium Content Panel */}
            <motion.div
              className="md:col-span-1 lg:col-span-2 xl:col-span-2 flex items-center justify-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full max-w-2xl">
                {activePrinciple ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-4 tracking-tight">
                      <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700 bg-clip-text text-transparent">
                        {activePrinciple.title}
                      </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8 font-light">
                      {activePrinciple.description}
                    </p>
                    <ul className="space-y-3 md:space-y-4">
                      {activePrinciple.points.map(
                        (point: string, index: number) => (
                          <motion.li
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-navy-500 to-navy-600 rounded-full mt-2.5 mr-4 flex-shrink-0" />
                            <span className="text-slate-700 font-light leading-relaxed">
                              {point}
                            </span>
                          </motion.li>
                        )
                      )}
                    </ul>
                  </motion.div>
                ) : (
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-4 tracking-tight">
                      <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700 bg-clip-text text-transparent">
                        {transformedData.sectionTitle}
                      </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8 font-light">
                      {transformedData.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right Panel - Enhanced Orbital Display */}
            <motion.div
              className="md:col-span-2 lg:col-span-2 xl:col-span-3 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full max-w-3xl flex items-center justify-center">
                <PrincipleGrid
                  principles={transformedData.principles}
                  className="w-full"
                  onPrincipleHover={handlePrincipleHover}
                  onPrincipleLeave={handlePrincipleLeave}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
