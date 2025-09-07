import { cn } from "@/lib/utils";
import React from "react";

interface StrategyItemProps {
  title: string;
  description: string;
  highlights?: string[];
  className?: string;
}

export function StrategyItem({
  title,
  description,
  highlights,
  className,
}: StrategyItemProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>

      <p className="text-gray-600 leading-relaxed">{description}</p>

      {highlights && highlights.length > 0 && (
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
