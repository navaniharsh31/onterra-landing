import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PrincipleOrbitalProps {
  title: string;
  shortTitle: string;
  icon?: LucideIcon;
  position: { x: number; y: number };
  isActive: boolean;
  onClick: () => void;
  onHover?: () => void;
  onLeave?: () => void;
  className?: string;
}

export function PrincipleOrbital({
  title,
  icon: Icon,
  position,
  isActive,
  onClick,
  onHover,
  onLeave,
  className,
}: PrincipleOrbitalProps) {
  return (
    <motion.div
      className={cn(
        "absolute cursor-pointer group z-10",
        "w-52 h-28 rounded-xs bg-white",
        "flex flex-col items-center justify-center p-4",
        "border border-gray-200 hover:border-blue-300",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-200 ease-out",
        isActive && "ring-2 ring-blue-400 ring-opacity-60",
        className
      )}
      style={{
        left: position.x,
        top: position.y,
      }}
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
      {/* Simple Icon */}
      {Icon && (
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors duration-200">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
      )}

      {/* Simple Title */}
      <div className="text-sm font-semibold text-gray-800 text-center leading-tight group-hover:text-blue-700 transition-colors duration-200">
        {title}
      </div>
    </motion.div>
  );
}
