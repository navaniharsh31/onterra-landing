"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

interface MegaMenuSection {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface MegaMenuContentProps {
  section: MegaMenuSection;
  isScrolled: boolean;
  className?: string;
}

export function MegaMenuContent({
  section,
  isScrolled,
  className,
}: MegaMenuContentProps) {
  return (
    <motion.div
      key={section.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn("h-full", className)}
    >
      <div className="space-y-6">
        {/* Section Title */}
        <div>
          <h4
            className={cn(
              "text-2xl font-light mb-3 tracking-tight",
              isScrolled ? "text-slate-900" : "text-white"
            )}
          >
            {section.title}
          </h4>
          <div
            className={cn(
              "w-16 h-px mb-4",
              isScrolled
                ? "bg-gradient-to-r from-slate-400 to-transparent"
                : "bg-gradient-to-r from-white/60 to-transparent"
            )}
          />
        </div>

        {/* Section Description */}
        <p
          className={cn(
            "text-base leading-relaxed",
            isScrolled ? "text-slate-600" : "text-white/80"
          )}
        >
          {section.description}
        </p>

        {/* Optional Image */}
        {section.image && (
          <div className="relative w-full h-32 rounded-xs overflow-hidden">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* CTA Button */}
        <div className="pt-4">
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "group rounded-xs font-medium tracking-wide transition-all duration-300",
              isScrolled
                ? "border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"
                : "border-white/30 text-white/90 hover:bg-white/10 hover:border-white/50"
            )}
          >
            Learn More
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
