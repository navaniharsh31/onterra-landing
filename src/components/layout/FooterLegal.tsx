"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { FooterSettings, isExternalUrl } from "@/hooks/useFooterContent";

interface FooterLegalProps {
  settings: FooterSettings;
  className?: string;
}

export function FooterLegal({ settings, className }: FooterLegalProps) {
  const { legal } = settings;
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0",
        className
      )}
    >
      {/* Copyright */}
      <div className="text-slate-400 text-sm">
        {legal.copyrightText ||
          `© ${currentYear} ${settings.company.name}. All rights reserved.`}
      </div>

      {/* Legal Links */}
      {legal.legalLinks && legal.legalLinks.length > 0 && (
        <nav
          className="flex flex-wrap items-center space-x-6"
          aria-label="Legal navigation"
        >
          {legal.legalLinks.map((link) => {
            const isExternal = isExternalUrl(link.url);

            return (
              <div key={link.title}>
                {isExternal ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "text-sm text-slate-400 hover:text-white transition-colors duration-200",
                      "hover:underline underline-offset-4"
                    )}
                  >
                    <span className="flex items-center space-x-1">
                      <span>{link.title}</span>
                      <svg
                        className="w-3 h-3 opacity-60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </a>
                ) : (
                  <Link
                    href={link.url}
                    className={cn(
                      "text-sm text-slate-400 hover:text-white transition-colors duration-200",
                      "hover:underline underline-offset-4"
                    )}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      )}

      {/* Professional Disclaimer */}
      <div className="sm:hidden text-xs text-slate-500 leading-relaxed mt-4">
        <p>
          Investment involves risk. Past performance does not guarantee future
          results. Please consult with a qualified financial advisor before
          making investment decisions.
        </p>
      </div>
    </div>
  );
}
