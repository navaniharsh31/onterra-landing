"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface DropdownItem {
  id: string;
  title: string;
  url: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  onMenuStay: () => void;
  className?: string;
}

export function DropdownMenu({
  items,
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
        "absolute menu-top-positioned left-0 w-56 max-w-[calc(100vw-40px)] rounded-xs shadow-lg ring-1 ring-black/5 z-40",
        "bg-white/98 backdrop-blur-xl border border-gray-200/20",
        className
      )}
      onMouseEnter={onMenuStay}
    >
      <div className="py-2">
        {items.map((item, index) => (
          <Link
            key={item.id}
            href={item.url}
            className="block px-4 py-3 text-sm font-medium transition-colors duration-150 text-slate-700 hover:text-slate-900 hover:bg-slate-100/80"
            prefetch={true}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
