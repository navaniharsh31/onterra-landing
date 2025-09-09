"use client";

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
      {linkSections.map((section: any) => (
        <div key={section.sectionTitle} className="space-y-4">
          {/* Section Title */}
          <h3 className="text-lg font-semibold text-white tracking-tight">
            {section.sectionTitle}
          </h3>

          {/* Links */}
          <nav
            className="space-y-3"
            aria-label={`${section.sectionTitle} navigation`}
          >
            {section.links && section.links.length > 0 ? (
              section.links.map((link: any) => {
                const isExternal = link.isExternal || isExternalUrl(link.url);

                return (
                  <div key={link.title}>
                    {isExternal ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <a
                        href={link.url}
                        className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.title}
                      </a>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-slate-400 text-sm">No links available</p>
            )}
          </nav>
        </div>
      ))}
    </div>
  );
}
