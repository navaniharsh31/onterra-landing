"use client";

import { cn } from "@/lib/utils";
import { CentralHub } from "./CentralHub";
import { PrincipleOrbital } from "./PrincipleOrbital";

interface Principle {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  points: string[];
  icon: any;
  position: number;
}

interface OrbitalDisplayProps {
  principles: Principle[];
  onPrincipleHover?: (principle: Principle) => void;
  onPrincipleLeave?: () => void;
  className?: string;
}

export function OrbitalDisplay({
  principles,
  onPrincipleHover,
  onPrincipleLeave,
  className,
}: OrbitalDisplayProps) {
  // Calculate orbital positions for perfect circular alignment
  const getOrbitalPosition = (
    index: number,
    totalItems: number,
    radius: number = 260
  ) => {
    // Container dimensions
    const containerWidth = 600;
    const containerHeight = 600;

    // Orbital element dimensions (for centering)
    const orbitalWidth = 208; // w-48 = 12rem = 192px
    const orbitalHeight = 116; // h-32 = 8rem = 128px

    // Center point of the container
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;

    // Distribute evenly around the circle, starting from top (12 o'clock)
    const angleStep = (2 * Math.PI) / totalItems;
    const angle = index * angleStep - Math.PI / 2; // Start from top

    // Calculate position on circle
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    // Convert to absolute positioning (top-left corner of orbital element)
    return {
      x: centerX + x - orbitalWidth / 2,
      y: centerY + y - orbitalHeight / 2,
    };
  };

  const handlePrincipleHover = (principle: Principle) => {
    onPrincipleHover?.(principle);
  };

  const handlePrincipleLeave = () => {
    onPrincipleLeave?.();
  };

  return (
    <div
      className={cn(
        "relative w-full h-[600px] flex items-center justify-center",
        className
      )}
    >
      {/* Clean Professional Container - No Background */}

      {/* Orbital Container - Perfect Circle */}
      <div className="relative w-[600px] h-[600px]">
        {/* Central Hub - positioned at the exact center */}
        <div
          className="absolute z-30"
          style={{
            left: 300 - 126, // containerWidth/2 - hubWidth/2 (224px/2)
            top: 300 - 64, // containerHeight/2 - hubHeight/2 (112px/2)
          }}
        >
          <CentralHub />
        </div>

        {/* Principle Orbitals - positioned around the center */}
        {principles.map((principle, index) => {
          const position = getOrbitalPosition(index, principles.length);
          return (
            <PrincipleOrbital
              key={principle.id}
              title={principle.shortTitle}
              shortTitle={principle.shortTitle}
              icon={principle.icon}
              position={position}
              isActive={false}
              onClick={() => {}}
              onHover={() => handlePrincipleHover(principle)}
              onLeave={handlePrincipleLeave}
            />
          );
        })}
      </div>
    </div>
  );
}
