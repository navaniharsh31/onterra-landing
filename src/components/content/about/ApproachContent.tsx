"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

interface ApproachContentProps {
  className?: string;
  content?: {
    sections?: Array<{
      id: string;
      title: string;
      content: string;
      image?: {
        asset: {
          url: string;
        };
        alt: string;
      };
      imagePosition: "left" | "right";
      order: number;
    }>;
  };
}

export function ApproachContent({ className, content }: ApproachContentProps) {
  const [isReady, setIsReady] = useState(false);
  const sections = useMemo(() => content?.sections || [], [content?.sections]);

  // Ensure animations trigger after content is loaded
  useEffect(() => {
    if (sections && sections.length > 0) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => setIsReady(true), 100);
      return () => clearTimeout(timer);
    }
  }, [sections]);

  // Return null if no content from Sanity
  if (!content?.sections || content.sections.length === 0) {
    return null;
  }

  return (
    <section
      className={cn(
        "relative py-16 sm:py-20 lg:py-32 overflow-x-hidden",
        className
      )}
    >
      {/* Premium Light Background with Animated Orbs */}
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

        {/* Dynamic Bouncing Gradient Orbs - Constrained to viewport */}
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: isReady ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 20 }}
              transition={{
                duration: 0.6,
                delay: isReady ? 0.2 + index * 0.15 : 0,
                ease: "easeOut",
              }}
            >
              {/* Image - Always on top for mobile, positioned by imagePosition on desktop */}
              <div
                className={`order-1 ${
                  section.imagePosition === "right"
                    ? "lg:order-2"
                    : "lg:order-1"
                }`}
              >
                {section.image?.asset?.url ? (
                  <div className="relative w-full h-full min-h-64 rounded-xs overflow-hidden">
                    <Image
                      src={section.image.asset.url}
                      alt={section.image.alt || section.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xs p-8 h-full min-h-64 flex items-center justify-center">
                    <p className="text-slate-500 text-center">
                      Visual placeholder for {section.title.toLowerCase()}
                    </p>
                  </div>
                )}
              </div>

              {/* Content - Always below image on mobile, positioned by imagePosition on desktop */}
              <div
                className={`order-2 ${
                  section.imagePosition === "right"
                    ? "lg:order-1"
                    : "lg:order-2"
                }`}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 mb-6 tracking-tight">
                  <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {section.title}
                  </span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
