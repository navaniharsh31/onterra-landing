"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { useMobileMenu } from "../providers/MobileMenuProvider";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  className?: string;
  siteSettings?: any;
  navigation?: any;
}

export function Header({ className, siteSettings, navigation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openMenu } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fallback data if Sanity data is not available
  const logoData = siteSettings?.logo?.asset?.url
    ? {
        src: siteSettings.logo.asset.url,
        alt: siteSettings.logo.alt || "Onterra Capital",
        url: "/",
      }
    : {
        src: "/logo.png",
        alt: "Onterra Capital",
        url: "/",
      };

  // Transform Sanity data to component format
  const navItems =
    navigation?.navItems?.map((item: any) => ({
      ...item,
      megaMenuContent: item.megaMenuContent
        ? {
            ...item.megaMenuContent,
            sections: item.megaMenuContent.sections.map((section: any) => ({
              ...section,
              image: section.image?.asset.url,
              url: section.url, // Preserve the URL
            })),
          }
        : undefined,
    })) || [];

  const ctaButton = navigation?.ctaButton || null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/20 shadow-sm"
          : "bg-transparent backdrop-blur-none",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between header-height">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href={logoData.url} className="flex items-center">
              <Image
                src={logoData.src}
                alt={logoData.alt}
                width={160}
                height={40}
                className={cn(
                  "h-8 lg:h-10 w-auto",
                  !isScrolled && "brightness-0 invert"
                )}
                priority
              />
            </a>
          </div>

          {/* Navigation and CTA - Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <Navigation navItems={navItems} isScrolled={isScrolled} />

            {/* CTA Button - Desktop (optional) */}
            {ctaButton && (
              <div className="ml-4">
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className={cn(
                    "rounded-xs font-medium tracking-wide transition-all duration-300",
                    isScrolled
                      ? "bg-slate-900 hover:bg-slate-800 text-white"
                      : "bg-white/90 hover:bg-white text-slate-900 backdrop-blur-sm"
                  )}
                >
                  <a href={ctaButton.url}>{ctaButton.text}</a>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={openMenu}
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-xs transition-colors duration-200",
                isScrolled
                  ? "text-slate-900 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Open main menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
