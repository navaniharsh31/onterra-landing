"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BackgroundImage {
  asset?: {
    url: string;
  };
  alt: string;
}

interface OnterraStandardsBackgroundProps {
  defaultImage?: BackgroundImage;
  currentImage?: BackgroundImage;
  className?: string;
}

export function OnterraStandardsBackground({
  defaultImage,
  currentImage,
  className,
}: OnterraStandardsBackgroundProps) {
  const [displayImage, setDisplayImage] = useState<BackgroundImage | null>(
    defaultImage || null
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!currentImage) {
      // Reset to default image
      if (defaultImage && displayImage !== defaultImage) {
        setIsTransitioning(true);
        setTimeout(() => {
          setDisplayImage(defaultImage);
          setIsTransitioning(false);
        }, 500);
      }
      return;
    }

    // Change to new image
    if (currentImage !== displayImage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setDisplayImage(currentImage);
        setIsTransitioning(false);
      }, 500);
    }
  }, [currentImage, defaultImage, displayImage]);

  if (!displayImage?.asset?.url) {
    // Fallback gradient background
    return (
      <div className={cn("absolute inset-0 w-full h-full z-0", className)}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800 z-0" />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 w-full h-full z-0", className)}>
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800 z-0" />

      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={displayImage.asset.url}
          initial={{ opacity: 0 }}
          animate={{ opacity: isTransitioning ? 0.7 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <Image
            src={displayImage.asset.url}
            alt={displayImage.alt}
            fill
            className="object-cover"
            priority
            onError={(e) => {
              console.error("Background image failed to load:", e);
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
