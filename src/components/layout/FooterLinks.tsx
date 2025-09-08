"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { FooterNavigation, isExternalUrl } from "@/hooks/useFooterContent";

interface FooterLinksProps {
  navigation: FooterNavigation;
  className?: string;
}

export function FooterLinks({ navigation, className }: FooterLinksProps) {
  const { linkSections } = navigation;

  if (!linkSections || linkSections.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
        className
      )}
    >
      {linkSections.map((section) => (
        <div key={section.sectionTitle} className="space-y-4">
          {/* Section Title */}
          <h3 className="text-lg font-semibold text-white tracking-tight">
            {section.sectionTitle}
          </h3>

          {/* Section Links */}
          <nav
            className="space-y-3"
            aria-label={`${section.sectionTitle} navigation`}
          >
            {section.links && section.links.length > 0 ? (
              section.links.map((link) => {
                const isExternal = link.isExternal || isExternalUrl(link.url);

                return (
                  <div key={link.title}>
                    {isExternal ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "block text-slate-400 hover:text-white transition-colors duration-200",
                          "hover:translate-x-1 transform transition-transform"
                        )}
                        aria-label={
                          link.description || `${link.title} (opens in new tab)`
                        }
                      >
                        <span className="flex items-center space-x-2">
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
                          "block text-slate-400 hover:text-white transition-colors duration-200",
                          "hover:translate-x-1 transform transition-transform"
                        )}
                        aria-label={link.description}
                      >
                        {link.title}
                      </Link>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-slate-500 text-sm italic">
                No links available
              </p>
            )}
          </nav>
        </div>
      ))}
    </div>
  );
}
