"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface RotatingTextProps {
  words: string[];
  className?: string;
  animationDuration?: number;
}

export function RotatingText({
  words,
  className,
  animationDuration = 3000,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, animationDuration);

    return () => clearInterval(interval);
  }, [words.length, animationDuration]);

  if (words.length === 0) return null;

  return (
    <div className={cn("relative inline-block", className)}>
      <span className="inline-block transition-all duration-500 ease-in-out">
        {words[currentIndex]}
      </span>
    </div>
  );
}
