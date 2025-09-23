"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface BackgroundImage {
  asset?: {
    url: string;
  };
  alt: string;
}

interface HomeIntroBackgroundProps {
  backgroundImage?: BackgroundImage;
  className?: string;
}

export function HomeIntroBackground({
  backgroundImage,
  className,
}: HomeIntroBackgroundProps) {
  if (!backgroundImage?.asset?.url) {
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
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={backgroundImage.asset.url}
          alt={backgroundImage.alt}
          fill
          className="object-cover"
          priority
          onError={(e) => {
            console.error("Home intro background image failed to load:", e);
          }}
        />
      </div>
    </div>
  );
}
