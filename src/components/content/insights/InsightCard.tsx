"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Calendar } from "lucide-react";
import Link from "next/link";

interface InsightCardProps {
  title: string;
  shortDescription?: string;
  content?: any[];
  publishedDate: string;
  slug: string;
  index: number;
}

/**
 * Extract plain text from Portable Text blocks and truncate to maxLength.
 */
function extractAndTruncate(blocks: any[], maxLength: number): string {
  const text = blocks
    .filter((block: any) => block._type === "block")
    .map((block: any) =>
      (block.children || [])
        .map((child: any) => child.text || "")
        .join("")
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;
  // Cut at last space before maxLength to avoid mid-word truncation
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + "…";
}

export function InsightCard({
  title,
  shortDescription,
  content,
  publishedDate,
  slug,
  index,
}: InsightCardProps) {
  const formattedDate = new Date(publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  // Use shortDescription if provided, otherwise truncate content to 200 chars
  const preview =
    shortDescription?.trim() ||
    (content ? extractAndTruncate(content, 200) : "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group bg-white rounded-xs border border-gray-200/60 shadow-sm hover:shadow-lg hover:border-slate-300/80 transition-all duration-300"
    >
      <div className="p-6 sm:p-8">
        {/* Date badge */}
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="h-4 w-4 text-slate-400" />
          <span className="text-sm text-slate-500 font-medium">
            {formattedDate}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-light tracking-tight text-slate-900 mb-4">
          {title}
        </h3>

        {/* Divider */}
        <div className="w-12 h-px bg-gradient-to-r from-navy-500/40 to-transparent mb-4" />

        {/* Preview text */}
        {preview && (
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
            {preview}
          </p>
        )}

        {/* CTA — links to detail page */}
        <Link href={`/insights/${slug}`} prefetch={true}>
          <Button
            variant="outline"
            size="sm"
            className="group/btn rounded-xs font-medium tracking-wide transition-all duration-300 border-slate-300 text-slate-700 hover:bg-navy-600 hover:text-white hover:border-navy-600 cursor-pointer"
          >
            View Details
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-all duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
