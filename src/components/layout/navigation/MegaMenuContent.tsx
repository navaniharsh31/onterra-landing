"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

interface MegaMenuSection {
  id: string;
  title: string;
  description: string;
  image?: string;
  url?: string;
}

interface MegaMenuContentProps {
  section: MegaMenuSection;
  className?: string;
}

export function MegaMenuContent({ section, className }: MegaMenuContentProps) {
  return (
    <motion.div
      key={section.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn("h-full min-h-[300px]", className)}
    >
      <div className="space-y-6">
        {/* Section Title */}
        <div>
          <h4 className="text-2xl font-light mb-3 tracking-tight text-slate-900">
            {section.title}
          </h4>
          <div className="w-16 h-px mb-4 bg-gradient-to-r from-slate-400 to-transparent" />
        </div>

        {/* Section Description */}
        <p className="text-base leading-relaxed text-slate-600">
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
          {section.url ? (
            <Link href={section.url}>
              <Button
                variant="outline"
                size="sm"
                className="group rounded-xs font-medium tracking-wide transition-all duration-300 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"
              >
                Learn More
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="group rounded-xs font-medium tracking-wide transition-all duration-300 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"
              disabled
            >
              Learn More
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
