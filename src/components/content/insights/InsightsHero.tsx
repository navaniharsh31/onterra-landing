"use client";

import { motion } from "framer-motion";

interface InsightsHeroProps {
  heroData?: {
    title?: string;
    description?: string;
  };
  /** Reserved for future use — breadcrumb not shown yet */
  breadcrumb?: { label: string; href: string };
}

export function InsightsHero({ heroData }: InsightsHeroProps) {
  // breadcrumb prop accepted for API compatibility; not rendered yet
  const title = heroData?.title || "Insights";
  const description =
    heroData?.description ||
    "Our running view of the market — data-led perspectives on residential and commercial real estate, buyer behaviour, capital flows, and our outlook for the future.";

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-x-hidden flex items-center min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]">
      {/* Background — matches ContactHero */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
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
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto font-light">
            {description}
          </p>
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-mustard-400/60 to-transparent mx-auto mt-6" />
        </motion.div>
      </div>
    </section>
  );
}
