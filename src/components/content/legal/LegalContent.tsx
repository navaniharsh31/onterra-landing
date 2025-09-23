"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PortableText } from "@portabletext/react";

interface LegalContentProps {
  content: any[];
  className?: string;
}

// Custom components for PortableText rendering
const components = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-slate-700 leading-relaxed mb-4 text-base sm:text-lg">
        {children}
      </p>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6 mt-8 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 mt-4">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-slate-300 pl-4 my-6 italic text-slate-600 bg-slate-50 py-4 rounded-r">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-slate-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-base sm:text-lg leading-relaxed">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-base sm:text-lg leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-slate-800">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export function LegalContent({ content, className }: LegalContentProps) {
  if (!content || content.length === 0) {
    return (
      <section className={cn("py-16 sm:py-20", className)}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-500 text-lg">
              Content is being updated. Please check back later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="prose prose-slate max-w-none"
        >
          <PortableText value={content} components={components} />
        </motion.div>
      </div>
    </section>
  );
}
