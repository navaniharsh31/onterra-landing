import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PrincipleDetailPanelProps {
  title: string;
  description: string;
  points: string[];
  icon?: LucideIcon;
  isVisible: boolean;
  onClose: () => void;
  className?: string;
}

export function PrincipleDetailPanel({
  title,
  description,
  points,
  icon: Icon,
  isVisible,
  onClose,
  className,
}: PrincipleDetailPanelProps) {
  return (
    <motion.div
      className={cn(
        "absolute inset-0 bg-white/95 backdrop-blur-sm",
        "flex items-center justify-center p-8",
        "rounded-lg shadow-2xl",
        className
      )}
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 50,
        scale: isVisible ? 1 : 0.9,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <div className="max-w-md text-center">
        {/* Close button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <X className="w-4 h-4" />
        </Button>

        {/* Icon */}
        {Icon && (
          <div className="w-16 h-16 mx-auto mb-4 bg-navy-100 rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-navy-600" />
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {/* Points */}
        <ul className="space-y-2 text-left">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-navy-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
