"use client";

import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { InsightRequestForm } from "./InsightRequestForm";

interface InsightDetailProps {
  insight: {
    _id: string;
    title: string;
    content: any[];
  };
  formSettings?: {
    formTitle?: string;
    formDescription?: string;
    successMessage?: string;
    errorMessage?: string;
  };
}

// Portable Text components styled for insight content
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-slate-700 leading-relaxed mb-4 text-base sm:text-lg">
        {children}
      </p>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 mt-6 first:mt-0">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 mt-4">
        {children}
      </h4>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-slate-800">{children}</em>
    ),
  },
};

export function InsightDetail({ insight, formSettings }: InsightDetailProps) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-x-hidden">
      {/* Background */}
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Content — 3 of 5 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-slate max-w-none">
              <PortableText
                value={insight.content}
                components={portableTextComponents}
              />
            </div>
          </motion.div>

          {/* Form — 2 of 5 columns, sticky */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <InsightRequestForm
                insightTitle={insight.title}
                insightId={insight._id}
                formSettings={formSettings}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
