import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Consolidated server-side data fetching queries
export const queries = {
  siteSettings: `*[_type == "siteSettings"][0] {
    title,
    description,
    tagline,
    logo {
      asset->{
        url
      },
      alt
    },
    favicon {
      asset->{
        url
      },
      alt
    },
    seo {
      metaTitle,
      metaDescription,
      organizationSchema,
      foundingDate,
      industry,
      googleAnalyticsId,
      googleTagManagerId
    },
    copyrightText,
    privacyPolicyUrl,
    termsOfServiceUrl
  }`,

  navigation: `*[_type == "navigation"][0] {
    title,
    navItems[] {
      id,
      title,
      type,
      url,
      dropdownItems[] {
        id,
        title,
        url
      },
      megaMenuContent {
        title,
        sections[] {
          id,
          title,
          description,
          image {
            asset->{
              url
            },
            alt
          },
          url
        }
      }
    },
    ctaButton {
      text,
      url,
      variant,
      openInNewTab
    },
    footerSections[] {
      title,
      links[] {
        title,
        url,
        openInNewTab
      }
    }
  }`,

  hero: `*[_type == "heroSection"][0] {
    staticText,
    rotatingText,
    backgroundVideos[] {
      asset->{
        url,
        _ref,
        _type
      }
    },
    ctaButtons[] {
      text,
      url,
      variant
    },
    overlayOpacity
  }`,

  statistics: `*[_type == "statisticsSection"][0] {
    title,
    statistics[] {
      value,
      label,
      suffix
    }
  }`,

  investmentStrategies: `*[_type == "investmentStrategies"][0] {
    sectionTitle,
    sectionDescription,
    strategies[] {
      id,
      title,
      category,
      mainPoint,
      gridPosition {
        row,
        column
      },
      description,
      keyPoints,
      isSelectable
    } | order(gridPosition.row asc, gridPosition.column asc)
  }`,

  onterraStandards: `*[_type == "onterraStandards"][0] {
    sectionTitle,
    description,
    principles[] {
      id,
      title,
      shortTitle,
      description,
      points,
      icon,
      gridPosition {
        row,
        column
      }
    } | order(gridPosition.row asc, gridPosition.column asc)
  }`,

  contactDetails: `*[_type == "contactDetails"][0] {
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
  }`,

  socialLinks: `*[_type == "socialLinks"][0] {
    links[]{
      platform,
      url,
      label
    }
  }`,

  teamMembers: `*[_type == "teamMember" && isActive == true] | order(order asc, name asc) {
    _id,
    name,
    title,
    image {
      asset->{
        url
      },
      alt
    },
    bio,
    education,
    careerHighlights[] {
      period,
      role,
      description
    },
    certifications,
    order,
    isActive
  }`,

  overviewPage: `*[_type == "overviewPage"][0] {
    pageTitle,
    pageSubtitle,
    hero {
      title,
      description
    },
    sections[] {
      id,
      title,
      content,
      image {
        asset->{
          url
        },
        alt
      },
      imagePosition,
      order
    } | order(order asc),
    seo {
      metaTitle,
      metaDescription,
      keywords
    }
  }`,

  approachPage: `*[_type == "approachPage"][0] {
    pageTitle,
    pageSubtitle,
    hero {
      title,
      description
    },
    sections[] {
      id,
      title,
      content,
      image {
        asset->{
          url
        },
        alt
      },
      imagePosition,
      order
    } | order(order asc),
    seo {
      metaTitle,
      metaDescription,
      keywords
    }
  }`,

  teamPage: `*[_type == "teamPage"][0] {
    pageTitle,
    pageSubtitle,
    hero {
      title,
      description
    },
    teamSection {
      title,
      subtitle,
      allowNewTeamMembers
    },
    seo {
      metaTitle,
      metaDescription,
      keywords
    }
  }`,
};

// Homepage data fetching
export async function getPageData() {
  try {
    const [
      siteSettings,
      navigation,
      hero,
      statistics,
      investmentStrategies,
      onterraStandards,
    ] = await Promise.all([
      client.fetch(queries.siteSettings),
      client.fetch(queries.navigation),
      client.fetch(queries.hero),
      client.fetch(queries.statistics),
      client.fetch(queries.investmentStrategies),
      client.fetch(queries.onterraStandards),
    ]);

    // Transform navigation image URLs
    if (navigation?.navItems) {
      navigation.navItems.forEach((item: any) => {
        if (item.megaMenuContent?.sections) {
          item.megaMenuContent.sections.forEach((section: any) => {
            if (section.image?.asset?.url) {
              section.image.asset.url = urlFor(section.image).url();
            }
          });
        }
      });
    }

    // Transform site settings logo URLs
    if (siteSettings?.branding?.logo?.asset?.url) {
      siteSettings.branding.logo.asset.url = urlFor(
        siteSettings.branding.logo
      ).url();
    }
    if (siteSettings?.branding?.favicon?.asset?.url) {
      siteSettings.branding.favicon.asset.url = urlFor(
        siteSettings.branding.favicon
      ).url();
    }

    return {
      siteSettings,
      navigation,
      hero,
      statistics,
      investmentStrategies,
      onterraStandards,
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
}

// Layout data fetching (for Header/Footer)
export async function getLayoutData() {
  try {
    const [siteSettings, navigation, contactDetails, socialLinks] =
      await Promise.all([
        client.fetch(queries.siteSettings),
        client.fetch(queries.navigation),
        client.fetch(queries.contactDetails),
        client.fetch(queries.socialLinks),
      ]);

    // Transform navigation image URLs
    if (navigation?.navItems) {
      navigation.navItems.forEach((item: any) => {
        if (item.megaMenuContent?.sections) {
          item.megaMenuContent.sections.forEach((section: any) => {
            if (section.image?.asset?.url) {
              section.image.asset.url = urlFor(section.image).url();
            }
          });
        }
      });
    }

    // Transform site settings logo URLs
    if (siteSettings?.branding?.logo?.asset?.url) {
      siteSettings.branding.logo.asset.url = urlFor(
        siteSettings.branding.logo
      ).url();
    }
    if (siteSettings?.branding?.favicon?.asset?.url) {
      siteSettings.branding.favicon.asset.url = urlFor(
        siteSettings.branding.favicon
      ).url();
    }

    return {
      siteSettings,
      navigation,
      contactDetails,
      socialLinks,
    };
  } catch (error) {
    console.error("Error fetching layout data:", error);
    throw error;
  }
}

// Overview page data fetching
export async function getOverviewPageData() {
  try {
    const overviewPage = await client.fetch(queries.overviewPage);

    // Transform section image URLs
    if (overviewPage?.sections) {
      overviewPage.sections = overviewPage.sections.map((section: any) => ({
        ...section,
        image: section?.image?.asset
          ? {
              ...section.image,
              asset: {
                ...section.image.asset,
                url: urlFor(section.image).url(),
              },
            }
          : null,
      }));
    }

    return {
      overviewPage: overviewPage || null,
    };
  } catch (error) {
    console.error("Error fetching overview page data:", error);
    return {
      overviewPage: null,
    };
  }
}

// Approach page data fetching
export async function getApproachPageData() {
  try {
    const approachPage = await client.fetch(queries.approachPage);

    // Transform section image URLs
    if (approachPage?.sections) {
      approachPage.sections = approachPage.sections.map((section: any) => ({
        ...section,
        image: section?.image?.asset
          ? {
              ...section.image,
              asset: {
                ...section.image.asset,
                url: urlFor(section.image).url(),
              },
            }
          : null,
      }));
    }

    return {
      approachPage: approachPage || null,
    };
  } catch (error) {
    console.error("Error fetching approach page data:", error);
    return {
      approachPage: null,
    };
  }
}

// Team page data fetching
export async function getTeamPageData() {
  try {
    const [teamPage, teamMembers] = await Promise.all([
      client.fetch(queries.teamPage),
      client.fetch(queries.teamMembers),
    ]);

    // Transform team member image URLs
    const transformedTeamMembers =
      teamMembers?.map((member: any) => ({
        ...member,
        image: member?.image?.asset
          ? {
              ...member.image,
              asset: {
                ...member.image.asset,
                url: urlFor(member.image).url(),
              },
            }
          : null,
      })) || [];

    return {
      teamPage: teamPage || null,
      teamMembers: transformedTeamMembers,
    };
  } catch (error) {
    console.error("Error fetching team page data:", error);
    return {
      teamPage: null,
      teamMembers: [],
    };
  }
}

// Legacy about page data fetching (for backward compatibility)
export async function getAboutPageData() {
  try {
    const teamMembers = await client.fetch(queries.teamMembers);

    // Transform team member image URLs
    const transformedTeamMembers =
      teamMembers?.map((member: any) => ({
        ...member,
        image: member?.image?.asset
          ? {
              ...member.image,
              asset: {
                ...member.image.asset,
                url: urlFor(member.image).url(),
              },
            }
          : null,
      })) || [];

    return {
      teamMembers: transformedTeamMembers,
    };
  } catch (error) {
    console.error("Error fetching about page data:", error);
    return {
      teamMembers: [],
    };
  }
}

// Type definitions for server data
export interface ServerPageData {
  siteSettings: any;
  navigation: any;
  hero: any;
  statistics: any;
  investmentStrategies: any;
  onterraStandards: any;
}

export interface ServerLayoutData {
  siteSettings: any;
  navigation: any;
  contactDetails: any;
  socialLinks: any;
}

export interface ServerAboutPageData {
  teamMembers: any[];
}
