"use client";

import { FooterSettings, formatAddress } from "@/hooks/useFooterContent";

interface FooterSEOProps {
  settings: FooterSettings;
  contact: any;
  socialMedia: any;
}

export function FooterSEO({ settings, contact, socialMedia }: FooterSEOProps) {
  const { company, contact: contactData, seo } = settings;

  if (!seo?.organizationSchema || !company?.name) {
    return null;
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company?.name || "Onterra Capital",
    description:
      company?.description || "Strategic real estate investment firm",
    url: typeof window !== "undefined" ? window.location.origin : "",
    logo: settings.logo?.asset?.url,
    foundingDate: seo?.foundingDate || "2020-01-01",
    industry: seo?.industry || "Real Estate Investment",
    address: contactData?.address
      ? {
          "@type": "PostalAddress",
          streetAddress: contactData.address.street,
          addressLocality: contactData.address.city,
          addressRegion: contactData.address.state,
          postalCode: contactData.address.zipCode,
          addressCountry: contactData.address.country,
        }
      : undefined,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact?.phone,
      email: contact?.email,
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: Array.isArray(socialMedia)
      ? socialMedia.map((social: any) => social.url).filter(Boolean)
      : [],
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
