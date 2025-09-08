"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface DropdownItem {
  id: string;
  title: string;
  url: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  isScrolled: boolean;
  onMenuStay: () => void;
  className?: string;
}

export function DropdownMenu({
  items,
  isScrolled,
  onMenuStay,
  className,
}: DropdownMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "absolute menu-top-positioned left-0 w-56 rounded-xs shadow-lg ring-1 ring-black/5 z-40",
        isScrolled
          ? "bg-white/98 backdrop-blur-xl border border-gray-200/20"
          : "bg-slate-900/95 backdrop-blur-xl border border-white/10",
        className
      )}
      onMouseEnter={onMenuStay}
    >
      <div className="py-2">
        {items.map((item, index) => (
          <a
            key={item.id}
            href={item.url}
            className={cn(
              "block px-4 py-3 text-sm font-medium transition-colors duration-150",
              isScrolled
                ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100/80"
                : "text-white/90 hover:text-white hover:bg-white/10"
            )}
          >
            {item.title}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
