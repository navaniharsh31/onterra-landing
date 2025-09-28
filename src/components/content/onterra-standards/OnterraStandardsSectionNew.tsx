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
        {/* Premium Light Background with Animated Orbs - CLEAN VERSION */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50">
          {/* Dynamic Bouncing Gradient Orbs - EXACT SAME SYSTEM */}

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
                    <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
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
