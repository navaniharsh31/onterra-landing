"use client";

import { cn } from "@/lib/utils";
import { FooterBrand } from "./FooterBrand";
import { FooterContact } from "./FooterContact";
import { FooterLinks } from "./FooterLinks";
import { FooterLegal } from "./FooterLegal";
import { FooterSocial } from "./FooterSocial";
import { FooterSEO } from "./FooterSEO";

interface FooterProps {
  siteSettings: any;
  navigation: any;
  contactDetails: any;
  socialLinks: any;
  className?: string;
}

export function Footer({
  siteSettings,
  navigation,
  contactDetails,
  socialLinks,
  className,
}: FooterProps) {
  if (!siteSettings || !navigation) {
    return null;
  }

  // Transform the data to match the expected structure
  const transformedSiteSettings = {
    ...siteSettings,
    siteTitle: siteSettings?.title || "Onterra Capital",
    siteDescription:
      siteSettings?.description || "Real estate investment management",
    company: {
      name: siteSettings?.title || "Onterra Capital",
      description:
        siteSettings?.description || "Real estate investment management",
    },
    contact: {
      phone: contactDetails?.phone,
      email: contactDetails?.email,
      address: contactDetails?.address,
    },
    seo: siteSettings?.seo || {
      organizationSchema: true,
      foundingDate: "2020-01-01",
      industry: "Real Estate Investment",
    },
    socialMedia: Array.isArray(socialLinks?.links) ? socialLinks.links : [],
    legal: {
      legalLinks: [
        // Only include Privacy Policy if URL is set in Sanity
        ...(siteSettings?.privacyPolicyUrl
          ? [
              {
                title: "Privacy Policy",
                url: siteSettings.privacyPolicyUrl,
                openInNewTab: false,
              },
            ]
          : []),
        // Only include Terms of Service if URL is set in Sanity
        ...(siteSettings?.termsOfServiceUrl
          ? [
              {
                title: "Terms of Service",
                url: siteSettings.termsOfServiceUrl,
                openInNewTab: false,
              },
            ]
          : []),
        // Only include Disclaimer if URL is set in Sanity
        ...(siteSettings?.disclaimerUrl
          ? [
              {
                title: "Disclaimer",
                url: siteSettings.disclaimerUrl,
                openInNewTab: false,
              },
            ]
          : []),
      ],
    },
  };

  const transformedNavigation = {
    ...navigation,
    linkSections: navigation?.footerNavigation?.additionalSections || [],
  };

  return (
    <>
      <FooterSEO
        settings={transformedSiteSettings}
        contact={contactDetails}
        socialMedia={socialLinks}
      />
      <footer
        className={cn(
          "relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
          "border-t border-slate-700/50",
          className
        )}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Main Footer Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <FooterBrand settings={transformedSiteSettings} />
              </div>

              {/* Contact Section */}
              <div className="lg:col-span-1">
                <FooterContact settings={transformedSiteSettings} />
              </div>

              {/* Links Section */}
              <div className="lg:col-span-1">
                <FooterLinks navigation={transformedNavigation} />
              </div>

              {/* Social Section */}
              <div className="lg:col-span-1">
                <FooterSocial settings={transformedSiteSettings} />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 pt-8 border-t border-slate-700/50">
              <FooterLegal settings={transformedSiteSettings} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
