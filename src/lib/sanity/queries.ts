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
      defaultMetaTitle,
      defaultMetaDescription,
      organizationSchema,
      foundingDate,
      industry,
      googleAnalyticsId,
      googleTagManagerId
    },
    copyrightText,
    privacyPolicyUrl,
    termsOfServiceUrl,
    disclaimerUrl
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
          url,
          ctaText
        }
      }
    },
    ctaButton {
      text,
      url,
      variant,
      openInNewTab
    },
    footerNavigation {
      useMainNavigation,
      additionalSections[] {
        title,
        links[] {
          title,
          url,
          openInNewTab
        }
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
    title,
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
    title,
    links[]{
      platform,
      url,
      label
    }
  }`,

  teamMembers: `*[_type == "teamMember"] | order(order asc, name asc) {
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
    briefDescription,
    education,
    careerHighlights[] {
      period,
      role,
      description
    },
    certifications,
    order,
    listOrder
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
        alt,
        caption
      },
      imagePosition,
      order
    } | order(order asc),
    seo {
      metaTitle,
      metaDescription,
      keywords,
      canonicalUrl
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
        alt,
        caption
      },
      imagePosition,
      order
    } | order(order asc),
    seo {
      metaTitle,
      metaDescription,
      keywords,
      canonicalUrl
    }
  }`,

  teamPage: `*[_type == "teamPage"][0] {
    pageTitle,
    pageSubtitle,
    hero {
      title,
      description
    },
    statistics {
      title,
      statistics[] {
        value,
        label,
        suffix
      }
    },
    listViewSettings {
      showAllMembers,
      selectedMembers[]->{
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
        briefDescription,
        education,
        careerHighlights[] {
          period,
          role,
          description
        },
        certifications,
        order,
        listOrder
      }
    },
    detailViewSettings {
      enableDetailView,
      detailViewTitle
    },
    seo {
      metaTitle,
      metaDescription,
      keywords,
      canonicalUrl
    }
  }`,

  contactPage: `*[_type == "contactPage"][0] {
    title,
    hero {
      title,
      description
    },
    contactDetails-> {
      _id,
      address {
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
    formSettings {
      recipientEmail,
      successMessage,
      errorMessage
    },
    seo {
      metaTitle,
      metaDescription,
      keywords,
      canonicalUrl
    }
  }`,

  homeIntroSection: `*[_type == "homeIntroSection"][0] {
    title,
    description,
    enableBackgroundImage,
    imagePosition,
    blendMode,
    backgroundImage {
      asset->{
        url
      },
      alt
    },
    imageOpacity
  }`,

  legalPage: `*[_type == "legalPage" && pageType == $type && isActive == true][0] {
    pageType,
    title,
    hero {
      title
    },
    content,
    lastUpdated,
    isActive,
    seo {
      metaTitle,
      metaDescription,
      keywords,
      canonicalUrl
    }
  }`,

  insightPdf: `*[_type == "insightPdf" && isActive == true] | order(publishedDate desc) {
    _id,
    title,
    description,
    pdfFile {
      asset->{
        url,
        originalFilename,
        size,
        _id
      }
    },
    publishedDate,
    isActive,
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
      homeIntroSection,
      investmentStrategies,
      onterraStandards,
    ] = await Promise.all([
      client.fetch(queries.siteSettings),
      client.fetch(queries.navigation),
      client.fetch(queries.hero),
      client.fetch(queries.homeIntroSection),
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
      homeIntroSection,
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
    const teamPage = await client.fetch(queries.teamPage);

    // Get team members based on settings
    let teamMembers = [];

    if (teamPage?.listViewSettings?.showAllMembers) {
      // Fetch all team members
      teamMembers = await client.fetch(queries.teamMembers);
    } else {
      // Use selected members from page settings
      teamMembers = teamPage?.listViewSettings?.selectedMembers || [];
    }

    // Sort by listOrder, then by name
    teamMembers = teamMembers.sort((a: any, b: any) => {
      if (a.listOrder !== b.listOrder) {
        return (a.listOrder || 0) - (b.listOrder || 0);
      }
      return (a.name || "").localeCompare(b.name || "");
    });

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

// Contact page data fetching
export async function getContactPageData() {
  try {
    const contactPage = await client.fetch(queries.contactPage);

    return {
      contactPage,
    };
  } catch (error) {
    console.error("Error fetching contact page data:", error);
    return {
      contactPage: null,
    };
  }
}

// Legal page data fetching
export async function getLegalPageData(type: string) {
  try {
    const legalPage = await client.fetch(queries.legalPage, { type });

    return {
      legalPage: legalPage || null,
    };
  } catch (error) {
    console.error("Error fetching legal page data:", error);
    return {
      legalPage: null,
    };
  }
}

// PDF data fetching
export async function getInsightPdfs() {
  try {
    const pdfs = await client.fetch(queries.insightPdf);

    return {
      pdfs: pdfs || [],
    };
  } catch (error) {
    console.error("Error fetching PDF data:", error);
    return {
      pdfs: [],
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
