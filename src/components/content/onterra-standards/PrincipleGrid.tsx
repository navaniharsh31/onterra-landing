"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PrincipleGridItem } from "./PrincipleGridItem";
import { LucideIcon } from "lucide-react";

interface Principle {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  gridPosition: {
    row: number;
    column: number;
  };
}

interface PrincipleGridProps {
  principles: Principle[];
  onPrincipleHover?: (principle: Principle) => void;
  onPrincipleLeave?: () => void;
  className?: string;
}

export function PrincipleGrid({
  principles,
  onPrincipleHover,
  onPrincipleLeave,
  className,
}: PrincipleGridProps) {
  // Calculate grid layout based on principle count
  const getGridLayout = (principleCount: number) => {
    if (principleCount <= 4) return { cols: 2, rows: 2 };
    if (principleCount === 5) return { cols: 2, rows: 3 };
    if (principleCount === 6) return { cols: 2, rows: 3 };
    // Default fallback
    return { cols: 2, rows: 3 };
  };

  const gridLayout = getGridLayout(principles.length);

  // Sort principles by grid position
  const sortedPrinciples = [...principles].sort((a, b) => {
    if (a.gridPosition.row !== b.gridPosition.row) {
      return a.gridPosition.row - b.gridPosition.row;
    }
    return a.gridPosition.column - b.gridPosition.column;
  });

  return (
    <div
      className={cn(
        "relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl",
        className
      )}
    >
      {/* Grid Container */}
      <div
        className="grid gap-3 md:gap-4 lg:gap-6 w-full"
        style={{
          gridTemplateColumns: `repeat(${gridLayout.cols}, 1fr)`,
          gridTemplateRows: `repeat(${gridLayout.rows}, 1fr)`,
        }}
      >
        {sortedPrinciples.map((principle, index) => (
          <motion.div
            key={principle.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <PrincipleGridItem
              title={principle.title}
              shortTitle={principle.shortTitle}
              icon={principle.icon}
              isActive={false} // Will be managed by parent component
              onClick={() => {
                // Handle click if needed
              }}
              onHover={() => onPrincipleHover?.(principle)}
              onLeave={() => onPrincipleLeave?.()}
              className="w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
