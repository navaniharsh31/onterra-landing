"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

// Use same navigation data as header
const navigationData = {
  logo: { src: "/logo.png", alt: "Onterra Capital" },
  company: {
    name: "Onterra Capital",
    description:
      "Your trusted partner in real estate investment opportunities. We specialize in identifying and developing premium investment properties that deliver exceptional returns for our clients.",
  },
  navItems: [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Properties", url: "/properties" },
    { title: "Market Insights", url: "/insights" },
    { title: "Contact", url: "/contact" },
  ],
  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@onterracapital.com",
    address: "123 Investment Ave, Suite 100, New York, NY 10001",
  },
  socialMedia: [
    {
      platform: "linkedin",
      url: "https://linkedin.com/company/onterra",
      label: "LinkedIn",
    },
    {
      platform: "twitter",
      url: "https://twitter.com/onterra",
      label: "Twitter",
    },
    {
      platform: "facebook",
      url: "https://facebook.com/onterra",
      label: "Facebook",
    },
    {
      platform: "instagram",
      url: "https://instagram.com/onterra",
      label: "Instagram",
    },
  ],
};

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "bg-navy-900 text-white relative overflow-hidden",
        className
      )}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-900 to-navy-900" />

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
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-navy-900/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - 3 Column Layout */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Logo & Description */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <Image
                  src={navigationData.logo.src}
                  alt={navigationData.logo.alt}
                  width={160}
                  height={40}
                  className="h-8 w-auto brightness-0 invert opacity-90"
                  priority
                />
              </div>

              {/* Company Description */}
              <p className="text-slate-400 leading-relaxed">
                {navigationData.company.description}
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                Navigation
              </h3>
              <nav className="space-y-3" aria-label="Footer navigation">
                {navigationData.navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="block text-slate-400 hover:text-white hover:translate-x-1 transform transition-all duration-200"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Contact & Social */}
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Contact
                </h3>
                <div className="space-y-3 text-slate-400">
                  <p>{navigationData.contact.phone}</p>
                  <p>{navigationData.contact.email}</p>
                  <p className="text-sm leading-relaxed">
                    {navigationData.contact.address}
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {navigationData.socialMedia.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <span className="sr-only">{social.label}</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {/* Simple social media icons */}
                        {social.platform === "linkedin" && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        )}
                        {social.platform === "twitter" && (
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        )}
                        {social.platform === "facebook" && (
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        )}
                        {social.platform === "instagram" && (
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright Only */}
        <div className="border-t border-navy-800 py-8">
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} {navigationData.company.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
