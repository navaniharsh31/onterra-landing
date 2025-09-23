import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";

// Footer Settings Type
export interface FooterSettings {
  siteTitle: string;
  siteDescription: string;
  logo?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  favicon?: {
    asset: {
      url: string;
    };
  };
  copyrightText: string;
  privacyPolicyUrl: string;
  termsOfServiceUrl: string;
  disclaimerUrl: string;
  company: {
    name: string;
    description: string;
  };
  contact: {
    phone?: string;
    email?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      zipCode?: string;
      country?: string;
    };
  };
  seo: {
    organizationSchema: boolean;
    foundingDate: string;
    industry: string;
    googleAnalyticsId?: string;
    googleTagManagerId?: string;
  };
  socialMedia: Array<{
    platform: string;
    url: string;
    label?: string;
  }>;
  legal: {
    legalLinks: Array<{
      title: string;
      url: string;
      openInNewTab: boolean;
    }>;
  };
}

// Footer Navigation Type
export interface FooterNavigation {
  useMainNavigation: boolean;
  additionalSections: Array<{
    title: string;
    links: Array<{
      title: string;
      url: string;
      openInNewTab: boolean;
    }>;
  }>;
  linkSections: Array<{
    sectionTitle: string;
    links: Array<{
      title: string;
      url: string;
      isExternal?: boolean;
    }>;
  }>;
}

// Contact Details Type
export interface ContactDetails {
  phone?: string;
  email?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
}

// Social Media Type
export interface SocialMedia {
  platform: string;
  url: string;
  label?: string;
}

// Footer Data Type
export interface FooterData {
  siteSettings: FooterSettings;
  navigation: FooterNavigation;
  contactDetails: ContactDetails;
  socialLinks: SocialMedia[];
}

// Utility functions
export function formatAddress(address?: ContactDetails["address"]): string {
  if (!address) return "";

  const parts = [
    address.street,
    address.city,
    address.state,
    address.zipCode,
    address.country,
  ].filter(Boolean);

  return parts.join(", ");
}

export function isExternalUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

export function getSocialIcon(platform: string): string {
  const iconMap: Record<string, string> = {
    facebook: "facebook",
    twitter: "twitter",
    linkedin: "linkedin",
    instagram: "instagram",
    youtube: "youtube",
    newsletter: "mail",
  };

  return iconMap[platform.toLowerCase()] || "link";
}

// Hook to fetch footer content
export function useFooterContent() {
  return useQuery({
    queryKey: ["footer-content"],
    queryFn: async (): Promise<FooterData> => {
      const [siteSettings, navigation, contactDetails, socialLinks] =
        await Promise.all([
          client.fetch(`*[_type == "siteSettings"][0]`),
          client.fetch(`*[_type == "navigation"][0]`),
          client.fetch(`*[_type == "contactDetails"][0]`),
          client.fetch(`*[_type == "socialLinks"][0]`),
        ]);

      // Transform the data to match the expected structure
      const transformedSiteSettings: FooterSettings = {
        ...siteSettings,
        company: {
          name: siteSettings?.siteTitle || "Onterra Capital",
          description:
            siteSettings?.siteDescription ||
            "Real estate investment management firm",
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
        socialMedia: socialLinks?.links || [],
        legal: {
          legalLinks: [
            {
              title: "Privacy Policy",
              url: siteSettings?.privacyPolicyUrl || "/privacy-policy",
              openInNewTab: false,
            },
            {
              title: "Terms of Service",
              url: siteSettings?.termsOfServiceUrl || "/terms-of-service",
              openInNewTab: false,
            },
            {
              title: "Disclaimer",
              url: siteSettings?.disclaimerUrl || "/disclaimer",
              openInNewTab: false,
            },
          ],
        },
      };

      const transformedNavigation: FooterNavigation = {
        ...navigation,
        linkSections: navigation?.additionalSections || [],
      };

      return {
        siteSettings: transformedSiteSettings,
        navigation: transformedNavigation,
        contactDetails,
        socialLinks: socialLinks?.links || [],
      };
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
