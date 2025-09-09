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
        "text-center flex flex-col items-center justify-center hover:scale-[1.02] transition-all duration-200 group",
        className
      )}
    >
      {/* Professional Statistic Value */}
      <div className="relative mb-2">
        <div className="text-4xl sm:text-4xl lg:text-5xl  font-light text-slate-900 group-hover:text-navy-600 group-hover:scale-105 transition-all duration-300 tracking-tight">
          {value}
          {suffix && (
            <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-navy-600 group-hover:text-navy-700 transition-colors duration-300 font-medium ml-1">
              {suffix}
            </span>
          )}
        </div>

        {/* Subtle Professional Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-navy-500/8 to-transparent rounded-lg blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Professional Label */}
      <div className="text-sm sm:text-base lg:text-lg text-slate-600 group-hover:text-slate-700 max-w-48 transition-colors duration-200 font-medium leading-relaxed tracking-wide">
        {label}
      </div>
    </div>
  );
}
