"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MultiVideoBackgroundProps {
  videos: Array<{
    asset?: {
      url?: string;
    };
  }>;
  className?: string;
}

export function MultiVideoBackground({
  videos,
  className,
}: MultiVideoBackgroundProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Debug logging
  console.log("MultiVideoBackground - videos:", videos);
  console.log("MultiVideoBackground - videos.length:", videos?.length);

  useEffect(() => {
    if (videos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  if (!videos || videos.length === 0) {
    console.log("MultiVideoBackground - No videos available");
    return null;
  }

  const currentVideo = videos[currentVideoIndex];
  console.log("MultiVideoBackground - currentVideo:", currentVideo);

  if (!currentVideo?.asset?.url) {
    console.log("MultiVideoBackground - No video URL available");
    return null;
  }

  return (
    <div className={cn("absolute inset-0 w-full h-full", className)}>
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800" />

      {/* Video elements */}
      {videos.map((video, index) => (
        <video
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            index === currentVideoIndex ? "opacity-100" : "opacity-0"
          )}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => {
            console.log(`Video ${index} loaded successfully`);
            setIsLoaded(true);
          }}
          onError={(e) => {
            console.error(`Video ${index} failed to load:`, e);
          }}
          style={{ display: index === currentVideoIndex ? "block" : "none" }}
        >
          <source src={video.asset?.url} type="video/mp4" />
          <source src={video.asset?.url} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
}
