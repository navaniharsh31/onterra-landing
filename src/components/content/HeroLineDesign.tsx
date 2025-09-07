import { cn } from "@/lib/utils";
import React from "react";

interface HeroLineDesignProps {
  enabled?: boolean;
  color?: string;
  className?: string;
}

export function HeroLineDesign({
  enabled = true,
  color = "#3B82F6",
  className,
}: HeroLineDesignProps) {
  if (!enabled) return null;

  return (
    <div
      className={cn(
        "w-1 bg-blue-500 mr-6 flex-shrink-0 self-stretch",
        className
      )}
      style={{ backgroundColor: color }}
    />
  );
}
