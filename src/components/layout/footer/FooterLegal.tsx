"use client";

import { cn } from "@/lib/utils";
import { FooterSettings, isExternalUrl } from "@/hooks/useFooterContent";

interface FooterLegalProps {
  settings: FooterSettings;
  className?: string;
}

export function FooterLegal({ settings, className }: FooterLegalProps) {
  const { legal, company } = settings;
  const currentYear = new Date().getFullYear();

  if (!legal || !company) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0",
        className
      )}
    >
      {/* Copyright */}
      <div className="text-sm text-slate-400">
        {settings.copyrightText ||
          `© ${currentYear} ${settings.company.name}. All rights reserved.`}
      </div>

      {/* Legal Links */}
      {legal.legalLinks && legal.legalLinks.length > 0 && (
        <nav
          className="flex flex-wrap items-center space-x-6"
          aria-label="Legal navigation"
        >
          {legal.legalLinks.map((link: any) => {
            const isExternal = isExternalUrl(link.url);

            return (
              <div key={link.title}>
                {isExternal ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-300 transition-colors duration-200 text-sm"
                  >
                    {link.title}
                  </a>
                ) : (
                  <a
                    href={link.url}
                    className="text-slate-400 hover:text-slate-300 transition-colors duration-200 text-sm"
                  >
                    {link.title}
                  </a>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </div>
  );
}
