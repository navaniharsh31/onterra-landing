"use client";

import { FooterSettings, formatAddress } from "@/hooks/useFooterContent";

interface FooterSEOProps {
  settings: FooterSettings;
}

export function FooterSEO({ settings }: FooterSEOProps) {
  const { company, contact, seo, socialMedia } = settings;

  // Don't render if SEO is disabled
  if (!seo?.organizationSchema) {
    return null;
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.tagline,
    url: typeof window !== "undefined" ? window.location.origin : "",
    logo: company.logo?.asset?.url,
    foundingDate: seo.foundingDate,
    industry: seo.industry || "Real Estate Investment",
    address: contact.address
      ? {
          "@type": "PostalAddress",
          streetAddress: contact.address.street,
          addressLocality: contact.address.city,
          addressRegion: contact.address.state,
          postalCode: contact.address.zipCode,
          addressCountry: contact.address.country,
        }
      : undefined,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone,
      email: contact.email,
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: socialMedia?.map((social) => social.url).filter(Boolean) || [],
  };

  // Remove undefined fields
  const cleanedData = JSON.parse(JSON.stringify(organizationData));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(cleanedData, null, 2),
      }}
    />
  );
}
