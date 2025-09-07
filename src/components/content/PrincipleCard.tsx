import { cn } from "@/lib/utils";
import React from "react";

interface PrincipleCardProps {
  title: string;
  description?: string;
  points: string[];
  icon?: {
    type: "image" | "iconify";
    value: string;
  };
  className?: string;
}

export function PrincipleCard({
  title,
  description,
  points,
  icon,
  className,
}: PrincipleCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 h-full flex flex-col group",
        className
      )}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-4 flex-shrink-0">
          {icon.type === "iconify" ? (
            <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
              <span className="text-2xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                {/* This would be replaced with actual iconify implementation */}
                📋
              </span>
            </div>
          ) : (
            <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
              <img
                src={icon.value}
                alt={title}
                className="w-8 h-8 object-contain"
              />
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

        {description && (
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {description}
          </p>
        )}

        {/* Supporting Points */}
        <ul className="space-y-2 mt-auto">
          {points.map((point, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
