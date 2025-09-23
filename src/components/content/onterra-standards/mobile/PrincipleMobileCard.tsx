"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface PrincipleMobileCardProps {
  principle: {
    id: string;
    title: string;
    shortTitle: string;
    description: string;
    points?: string[];
  };
  className?: string;
}

export function PrincipleMobileCard({
  principle,
  className,
}: PrincipleMobileCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {  shortTitle, description, points } = principle;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className={cn("group relative w-full cursor-pointer", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -2 }}
      onClick={toggleExpanded}
    >
      {/* Premium Card Container - Light Theme */}
      <div className="relative w-full">
        {/* Premium Glass Morphism Background - Light Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-white/95 backdrop-blur-xl rounded-xs border border-slate-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" />

        {/* Professional Gradient Overlay - Light Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50/40 via-transparent to-slate-50/30 rounded-xs" />

        {/* Sophisticated Border Treatment - Light Theme */}
        <div className="absolute inset-0 ring-1 ring-inset ring-slate-200/50 rounded-xs" />

        {/* Premium Edge Highlights */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-300/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Header with Title and Chevron */}
          <div className="flex items-center justify-between">
            {/* Title */}
            <h3 className="text-lg font-medium text-slate-900 leading-tight flex-1">
              {shortTitle}
            </h3>

            {/* Chevron Indicator */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-4 flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-slate-600" />
            </motion.div>
          </div>

          {/* Expanded Content */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 mt-4">
              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {description}
              </p>

              {/* Key Points */}
              {points && points.length > 0 && (
                <div>
                  <ul className="space-y-2">
                    {points.map((point, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-navy-500 to-navy-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm leading-relaxed font-light">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>

          {/* Sophisticated Professional Glow - Light Theme */}
          <div className="absolute -inset-2 bg-gradient-to-br from-navy-500/8 via-slate-200/5 to-slate-300/8 rounded-xs blur-xl -z-10 opacity-60" />

          {/* Premium Inner Shadow - Light Theme */}
          <div className="absolute inset-0 shadow-inner shadow-slate-200/20 rounded-xs pointer-events-none" />

          {/* Subtle Premium Texture */}
          <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-slate-300 to-slate-400 rounded-xs mix-blend-overlay pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
