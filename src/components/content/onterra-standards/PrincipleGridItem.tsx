import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PrincipleGridItemProps {
  title: string;
  shortTitle: string;
  icon?: LucideIcon;
  isActive: boolean;
  onClick: () => void;
  onHover?: () => void;
  onLeave?: () => void;
  className?: string;
}

export function PrincipleGridItem({
  title,
  shortTitle,
  icon: Icon,
  isActive,
  onClick,
  onHover,
  onLeave,
  className,
}: PrincipleGridItemProps) {
  return (
    <motion.div
      className={cn(
        "cursor-pointer group z-10 relative",
        "w-full h-36 rounded-xs bg-white",
        "flex flex-col items-center justify-center p-6",
        "border border-gray-200 hover:border-navy-300",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-200 ease-out",
        isActive && "ring-2 ring-navy-400 ring-opacity-60",
        className
      )}
      animate={{
        scale: isActive ? 1.05 : 1,
        opacity: isActive ? 1 : 0.9,
      }}
      whileHover={{
        scale: 1.03,
        opacity: 1,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Background overlay for hover effects */}
      <div className="absolute inset-0 bg-navy-600 rounded-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        {/* Simple Icon */}
        {Icon && (
          <div className="w-12 h-12 rounded-full bg-navy-50 group-hover:bg-navy-400 flex items-center justify-center mb-4 transition-colors duration-200">
            <Icon className="w-6 h-6 text-navy-600 group-hover:text-white transition-colors duration-200" />
          </div>
        )}

        {/* Simple Title */}
        <div className="text-base font-semibold text-gray-800 group-hover:text-white text-center leading-tight transition-colors duration-200">
          {shortTitle}
        </div>
      </div>
    </motion.div>
  );
}
