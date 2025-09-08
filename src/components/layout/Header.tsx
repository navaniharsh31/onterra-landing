"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  className?: string;
}

// Dummy navigation data
const dummyNavData = {
  logo: { src: "/logo.png", alt: "Onterra Capital", url: "/" },
  navItems: [
    {
      id: "home",
      title: "Home",
      type: "link" as const,
      url: "/",
    },
    {
      id: "about",
      title: "About Us",
      type: "megamenu" as const,
      megaMenuContent: {
        title: "About Us",
        sections: [
          {
            id: "story",
            title: "Our Story",
            description:
              "Learn about our journey and mission in real estate investment. We've been building wealth through strategic investments for over two decades.",
            image: "/about-story.jpg",
          },
          {
            id: "team",
            title: "Our Team",
            description:
              "Meet the experienced professionals behind our success. Our team combines decades of real estate expertise with innovative investment strategies.",
            image: "/about-team.jpg",
          },
          {
            id: "values",
            title: "Our Values",
            description:
              "Discover the principles that guide our investment decisions. We believe in transparency, integrity, and delivering exceptional returns for our investors.",
            image: "/about-values.jpg",
          },
        ],
      },
    },
    {
      id: "services",
      title: "Services",
      type: "dropdown" as const,
      dropdownItems: [
        {
          id: "investment",
          title: "Investment Management",
          url: "/services/investment",
        },
        {
          id: "development",
          title: "Property Development",
          url: "/services/development",
        },
        {
          id: "consultation",
          title: "Consultation",
          url: "/services/consultation",
        },
        {
          id: "portfolio",
          title: "Portfolio Management",
          url: "/services/portfolio",
        },
      ],
    },
    {
      id: "properties",
      title: "Properties",
      type: "link" as const,
      url: "/properties",
    },
    {
      id: "insights",
      title: "Market Insights",
      type: "dropdown" as const,
      dropdownItems: [
        { id: "reports", title: "Market Reports", url: "/insights/reports" },
        {
          id: "analysis",
          title: "Investment Analysis",
          url: "/insights/analysis",
        },
        { id: "trends", title: "Market Trends", url: "/insights/trends" },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      type: "link" as const,
      url: "/contact",
    },
  ],
  ctaButton: {
    text: "Get Started",
    url: "/contact",
    variant: "primary" as const,
  },
};

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <a href={dummyNavData.logo.url} className="flex items-center">
              <Image
                src={dummyNavData.logo.src}
                alt={dummyNavData.logo.alt}
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

          {/* Navigation - Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <Navigation
              navItems={dummyNavData.navItems}
              isScrolled={isScrolled}
            />
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex lg:items-center">
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
              <a href={dummyNavData.ctaButton.url}>
                {dummyNavData.ctaButton.text}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
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
