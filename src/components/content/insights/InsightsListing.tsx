"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InsightCard } from "./InsightCard";

interface InsightPdf {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  shortDescription?: string;
  content?: any[];
  publishedDate: string;
}

interface InsightsListingProps {
  pdfs: InsightPdf[];
}

export function InsightsListing({ pdfs }: InsightsListingProps) {
  // Group insights by year
  const groupedByYear = useMemo(() => {
    const groups: Record<string, InsightPdf[]> = {};

    pdfs.forEach((pdf) => {
      const year = new Date(pdf.publishedDate).getFullYear().toString();
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(pdf);
    });

    // Sort each year's insights by date descending
    Object.keys(groups).forEach((year) => {
      groups[year].sort(
        (a, b) =>
          new Date(b.publishedDate).getTime() -
          new Date(a.publishedDate).getTime()
      );
    });

    return groups;
  }, [pdfs]);

  // Get sorted years (most recent first)
  const years = useMemo(
    () => Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a)),
    [groupedByYear]
  );

  const [activeYear, setActiveYear] = useState(years[0] || "");

  if (pdfs.length === 0) {
    return (
      <section className="relative py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">
              No insights available at this time. Check back soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-x-hidden">
      {/* Background — matches contact page */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        <div className="absolute inset-0 opacity-[0.12]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(71,85,105,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(71,85,105,0.3) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Year Tabs */}
        {years.length > 1 && (
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center bg-white rounded-xs border border-gray-200/60 shadow-sm p-1">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={cn(
                    "relative px-6 py-2.5 text-sm font-medium rounded-xs transition-all duration-300",
                    activeYear === year
                      ? "text-white"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {activeYear === year && (
                    <motion.div
                      layoutId="activeYearTab"
                      className="absolute inset-0 bg-navy-600 rounded-xs"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{year}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Single year — no tabs, just show the year as heading */}
        {years.length === 1 && (
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              {years[0]}
            </span>
          </div>
        )}

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {(groupedByYear[activeYear] || []).map((pdf, index) => (
              <InsightCard
                key={pdf._id}
                title={pdf.title}
                shortDescription={pdf.shortDescription}
                content={pdf.content}
                publishedDate={pdf.publishedDate}
                slug={pdf.slug?.current || pdf._id}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
