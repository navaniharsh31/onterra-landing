"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MegaMenuContent } from "./MegaMenuContent";

interface MegaMenuSection {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface MegaMenuContentType {
  title: string;
  sections: MegaMenuSection[];
}

interface MegaMenuProps {
  content: MegaMenuContentType;
  isScrolled: boolean;
  onMenuStay: () => void;
  className?: string;
}

export function MegaMenu({
  content,
  isScrolled,
  onMenuStay,
  className,
}: MegaMenuProps) {
  const [selectedSection, setSelectedSection] = useState(content.sections[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "absolute menu-top-positioned left-1/2 transform -translate-x-1/2 w-[800px] rounded-xs shadow-2xl ring-1 ring-black/5 z-40",
        isScrolled
          ? "bg-white/99 backdrop-blur-xl border border-gray-200/20"
          : "bg-slate-900/95 backdrop-blur-xl border border-white/10",
        className
      )}
      onMouseEnter={onMenuStay}
    >
      <div className="flex">
        {/* Left Sidebar - 30% */}
        <div className="w-[30%] p-6 border-r border-gray-200/20">
          <div className="mb-4">
            <h3
              className={cn(
                "text-lg font-semibold mb-2",
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              {content.title}
            </h3>
            <div
              className={cn(
                "w-12 h-px",
                isScrolled ? "bg-slate-300" : "bg-white/30"
              )}
            />
          </div>

          <nav className="space-y-1">
            {content.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section)}
                onMouseEnter={() => setSelectedSection(section)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-xs text-sm font-medium transition-all duration-200",
                  selectedSection.id === section.id
                    ? isScrolled
                      ? "bg-slate-100 text-slate-900"
                      : "bg-white/10 text-white"
                    : isScrolled
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Content Panel - 70% */}
        <div className="w-[70%] p-6">
          <MegaMenuContent section={selectedSection} isScrolled={isScrolled} />
        </div>
      </div>
    </motion.div>
  );
}
