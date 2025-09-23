"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LegalHeroProps {
  title: string;
  className?: string;
}

export function LegalHero({
  title,
  className,
}: LegalHeroProps) {
  return (
    <section
      className={cn(
        "relative py-24 sm:py-32 lg:py-40 overflow-x-hidden",
        className
      )}
    >
      {/* Footer-style Background - Same as Contact */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Grid Pattern - Same as Footer */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-mustard-400/60 to-transparent mx-auto mt-6" />
        </motion.div>
      </div>
    </section>
  );
}
