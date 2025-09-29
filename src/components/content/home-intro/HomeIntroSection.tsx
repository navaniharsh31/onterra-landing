"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HomeIntroSectionProps {
  className?: string;
  content?: any;
}

export function HomeIntroSection({
  className,
  content,
}: HomeIntroSectionProps) {
  // Return null if no data
  if (!content) {
    return null;
  }

  return (
    <section
      className={cn(
        "relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden",
        className
      )}
    >
      {/* Base Light Background - Clean and simple */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50" />

      {/* City Skyline Image - Layered on top of light background */}
      {content.enableBackgroundImage && content.backgroundImage?.asset?.url && (
        <div
          className={cn(
            "absolute left-0 right-0 z-0",
            content.imagePosition === "bottom" && "bottom-0 h-1/2",
            content.imagePosition === "top" && "top-0 h-1/2",
            content.imagePosition === "full" && "inset-0"
          )}
          style={{
            mixBlendMode: content.blendMode || "overlay",
            isolation: "isolate",
          }}
        >
          <Image
            src={content.backgroundImage.asset.url}
            alt={content.backgroundImage.alt}
            fill
            className={cn(
              "object-fill",
              content.imagePosition === "bottom" && "object-top",
              content.imagePosition === "top" && "object-bottom",
              content.imagePosition === "full" && "object-center"
            )}
            style={{
              opacity: content.imageOpacity || 0.1,
            }}
            priority
            onError={(e) => {
              console.error("Home intro background image failed to load:", e);
            }}
          />
        </div>
      )}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Centered Content */}
        <motion.div
          className="text-center"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700 bg-clip-text text-transparent">
                {content.title}
              </span>
            </h2>
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
              {content.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
