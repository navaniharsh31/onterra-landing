"use client";

import { cn } from "@/lib/utils";
import { useFooterContent } from "@/hooks/useFooterContent";
import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterContact } from "./FooterContact";
import { FooterSocial } from "./FooterSocial";
import { FooterLegal } from "./FooterLegal";
import { FooterSEO } from "./FooterSEO";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const { data: footerContent, isLoading, isError } = useFooterContent();

  if (isLoading) {
    return (
      <footer className={cn("bg-slate-900 text-white", className)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Loading skeleton */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 bg-slate-800 rounded animate-pulse" />
                <div className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <div
                      key={j}
                      className="h-4 bg-slate-800 rounded animate-pulse"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  if (isError || !footerContent) {
    return (
      <footer className={cn("bg-slate-900 text-white", className)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-slate-400">
              Unable to load footer content. Please try again later.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  const { settings, navigation } = footerContent;

  return (
    <>
      <footer
        className={cn(
          "bg-slate-900 text-white relative overflow-hidden",
          className
        )}
        role="contentinfo"
        aria-label="Site footer"
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900 to-slate-900" />

          {/* Premium grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-900/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured CTA Section */}
          {navigation.featuredCTA?.enabled && (
            <div className="py-12 border-b border-slate-800">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4 tracking-tight">
                  {navigation.featuredCTA.title}
                </h2>
                {navigation.featuredCTA.description && (
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    {navigation.featuredCTA.description}
                  </p>
                )}
                {navigation.featuredCTA.buttonText &&
                  navigation.featuredCTA.buttonUrl && (
                    <a
                      href={navigation.featuredCTA.buttonUrl}
                      className={cn(
                        "inline-flex items-center px-8 py-3 rounded-xs font-medium tracking-wide transition-all duration-300",
                        navigation.featuredCTA.variant === "primary" &&
                          "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105",
                        navigation.featuredCTA.variant === "secondary" &&
                          "bg-slate-700 hover:bg-slate-600 text-white",
                        navigation.featuredCTA.variant === "outline" &&
                          "border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                      )}
                    >
                      {navigation.featuredCTA.buttonText}
                    </a>
                  )}
              </div>
            </div>
          )}

          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Brand Section - Takes 4 columns on large screens */}
              <div className="lg:col-span-4">
                <FooterBrand settings={settings} />
              </div>

              {/* Navigation Links - Takes 6 columns on large screens */}
              <div className="lg:col-span-6">
                <FooterLinks navigation={navigation} />
              </div>

              {/* Contact & Social - Takes 2 columns on large screens */}
              <div className="lg:col-span-2 space-y-8">
                <FooterContact settings={settings} />
                <FooterSocial settings={settings} />
              </div>
            </div>
          </div>

          {/* Legal Section */}
          <div className="border-t border-slate-800 py-8">
            <FooterLegal settings={settings} />
          </div>
        </div>
      </footer>

      {/* SEO Structured Data */}
      <FooterSEO settings={settings} />
    </>
  );
}
