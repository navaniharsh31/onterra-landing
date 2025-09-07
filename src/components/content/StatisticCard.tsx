import { cn } from "@/lib/utils";
import React from "react";

interface StatisticCardProps {
  value: string;
  label: string;
  suffix?: string;
  className?: string;
}

export function StatisticCard({
  value,
  label,
  suffix,
  className,
}: StatisticCardProps) {
  return (
    <div
      className={cn(
        "text-center flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group",
        className
      )}
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {value}
        {suffix && (
          <span className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
            {suffix}
          </span>
        )}
      </div>
      <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 max-w-48 transition-colors duration-300">
        {label}
      </div>
    </div>
  );
}
