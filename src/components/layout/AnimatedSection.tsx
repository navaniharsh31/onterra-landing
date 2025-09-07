"use client";

import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideInLeft" | "slideInRight";
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = "fadeIn",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    fadeIn: "opacity-0 translate-y-8",
    slideUp: "opacity-0 translate-y-12",
    slideInLeft: "opacity-0 -translate-x-8",
    slideInRight: "opacity-0 translate-x-8",
  };

  const visibleClasses = {
    fadeIn: "opacity-100 translate-y-0",
    slideUp: "opacity-100 translate-y-0",
    slideInLeft: "opacity-100 translate-x-0",
    slideInRight: "opacity-100 translate-x-0",
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? visibleClasses[animation] : animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
