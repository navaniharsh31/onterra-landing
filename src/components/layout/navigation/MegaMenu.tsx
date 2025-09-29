"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MegaMenuContent } from "./MegaMenuContent";

interface MegaMenuSection {
  id: string;
  title: string;
  description: string;
  image?: string;
  url?: string;
  ctaText?: string;
}

interface MegaMenuContentType {
  title: string;
  sections: MegaMenuSection[];
}

interface MegaMenuProps {
  content: MegaMenuContentType;
  parentUrl?: string;
  onMenuStay: () => void;
  className?: string;
}

export function MegaMenu({
  content,
  parentUrl,
  onMenuStay,
  className,
}: MegaMenuProps) {
  const [selectedSection, setSelectedSection] = useState(content.sections[0]);
  const [position, setPosition] = useState("center");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      const parentRect = menuRef.current.parentElement?.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const menuWidth = 1000; // Fixed menu width

      if (parentRect) {
        // Calculate where the menu would be positioned if centered
        const menuRightEdge =
          parentRect.left + parentRect.width / 2 + menuWidth / 2;
        const menuLeftEdge =
          parentRect.left + parentRect.width / 2 - menuWidth / 2;

        if (menuRightEdge > viewportWidth - 20) {
          // Menu would overflow right, align to right edge of parent
          setPosition("right");
        } else if (menuLeftEdge < 20) {
          // Menu would overflow left, align to left edge of parent
          setPosition("left");
        } else {
          // Menu fits centered
          setPosition("center");
        }
      }
    }
  }, []);

  const getPositionClasses = () => {
    switch (position) {
      case "right":
        return "absolute menu-top-positioned right-0 w-[1000px] max-w-[calc(100vw-40px)]";
      case "left":
        return "absolute menu-top-positioned left-0 w-[1000px] max-w-[calc(100vw-40px)]";
      default:
        return "absolute menu-top-positioned left-1/2 transform -translate-x-1/2 w-[1000px] max-w-[calc(100vw-40px)]";
    }
  };

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        getPositionClasses(),
        "rounded-xs shadow-2xl ring-1 ring-black/5 z-40",
        "bg-white/99 backdrop-blur-xl border border-gray-200/20",
        className
      )}
      onMouseEnter={onMenuStay}
    >
      <div className="flex">
        {/* Left Sidebar - 30% */}
        <div className="w-[30%] p-6 border-r border-gray-200/20">
          <div className="mb-4">
            {parentUrl ? (
              <Link
                href={parentUrl}
                className="group flex items-center space-x-2 hover:text-slate-700 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold mb-2 text-slate-900 group-hover:text-slate-700">
                  {content.title}
                </h3>
                <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-slate-700 transition-colors duration-200" />
              </Link>
            ) : (
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                {content.title}
              </h3>
            )}
            <div className="w-12 h-px bg-slate-300" />
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
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Content Panel - 70% */}
        <div className="w-[70%] p-6">
          <MegaMenuContent section={selectedSection} />
        </div>
      </div>
    </motion.div>
  );
}
