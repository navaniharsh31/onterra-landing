import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";

// Footer Settings Type
export interface FooterSettings {
  _id: string;
  company: {
    name: string;
    tagline?: string;
    logo?: {
      asset: {
        url: string;
      };
      alt: string;
    };
  };
  contact: {
    address?: {
      street?: string;
      city?: string;
      state?: string;
      zipCode?: string;
      country?: string;
    };
    phone?: string;
    email?: string;
    businessHours?: string;
  };
  socialMedia?: Array<{
    platform:
      | "linkedin"
      | "twitter"
      | "facebook"
      | "instagram"
      | "youtube"
      | "newsletter";
    url: string;
    label: string;
  }>;
  legal: {
    copyrightText?: string;
    legalLinks?: Array<{
      title: string;
      url: string;
    }>;
  };
  seo?: {
    organizationSchema?: boolean;
    foundingDate?: string;
    industry?: string;
  };
}

// Footer Navigation Type
export interface FooterNavigation {
  _id: string;
  linkSections: Array<{
    sectionTitle: string;
    sectionOrder: number;
    links: Array<{
      title: string;
      url: string;
      isExternal?: boolean;
      description?: string;
      order: number;
    }>;
  }>;
  featuredCTA?: {
    enabled: boolean;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
    variant?: "primary" | "secondary" | "outline";
  };
}

// Combined Footer Content Type
export interface FooterContent {
  settings: FooterSettings;
  navigation: FooterNavigation;
}

// GROQ Queries
const FOOTER_SETTINGS_QUERY = `
  *[_type == "footerSettings"][0]{
    _id,
    company{
      name,
      tagline,
      logo{
        asset->{
          url
        },
        alt
      }
    },
    contact{
      address{
        street,
        city,
        state,
        zipCode,
        country
      },
      phone,
      email,
      businessHours
    },
    socialMedia[]{
      platform,
      url,
      label
    },
    legal{
      copyrightText,
      legalLinks[]{
        title,
        url
      }
    },
    seo{
      organizationSchema,
      foundingDate,
      industry
    }
  }
`;

const FOOTER_NAVIGATION_QUERY = `
  *[_type == "footerNavigation"][0]{
    _id,
    linkSections[]{
      sectionTitle,
      sectionOrder,
      links[]{
        title,
        url,
        isExternal,
        description,
        order
      }
    },
    featuredCTA{
      enabled,
      title,
      description,
      buttonText,
      buttonUrl,
      variant
    }
  }
`;

// Custom Hook for Footer Settings
export function useFooterSettings() {
  return useQuery<FooterSettings>({
    queryKey: ["footer-settings"],
    queryFn: async () => {
      const data = await client.fetch(FOOTER_SETTINGS_QUERY);
      if (!data) {
        throw new Error("Footer settings not found");
      }
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
  });
}

// Custom Hook for Footer Navigation
export function useFooterNavigation() {
  return useQuery<FooterNavigation>({
    queryKey: ["footer-navigation"],
    queryFn: async () => {
      const data = await client.fetch(FOOTER_NAVIGATION_QUERY);
      if (!data) {
        throw new Error("Footer navigation not found");
      }

      // Sort sections by order
      if (data.linkSections) {
        data.linkSections.sort((a, b) => a.sectionOrder - b.sectionOrder);

        // Sort links within each section
        data.linkSections.forEach((section) => {
          if (section.links) {
            section.links.sort((a, b) => a.order - b.order);
          }
        });
      }

      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
  });
}

// Combined Hook for Complete Footer Content
export function useFooterContent() {
  const settingsQuery = useFooterSettings();
  const navigationQuery = useFooterNavigation();

  return {
    data:
      settingsQuery.data && navigationQuery.data
        ? {
            settings: settingsQuery.data,
            navigation: navigationQuery.data,
          }
        : undefined,
    isLoading: settingsQuery.isLoading || navigationQuery.isLoading,
    isError: settingsQuery.isError || navigationQuery.isError,
    error: settingsQuery.error || navigationQuery.error,
    refetch: () => {
      settingsQuery.refetch();
      navigationQuery.refetch();
    },
  };
}

// Utility function to format address
export function formatAddress(
  address?: FooterSettings["contact"]["address"]
): string {
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

// Utility function to get social media icon
export function getSocialIcon(platform: string): string {
  const icons: Record<string, string> = {
    linkedin: "linkedin",
    twitter: "twitter",
    facebook: "facebook",
    instagram: "instagram",
    youtube: "youtube",
    newsletter: "mail",
  };

  return icons[platform] || "link";
}

// Utility function to validate external URLs
export function isExternalUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}
