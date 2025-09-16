import { Metadata } from "next";

interface SiteWideSEO {
  defaultMetaTitle?: string;
  defaultMetaDescription?: string;
  organizationSchema?: boolean;
  foundingDate?: string;
  industry?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
}

interface PageSEO {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

interface SEOConfig {
  siteWideSEO: SiteWideSEO;
  pageSEO?: PageSEO;
  pageTitle?: string; // Fallback page title
  pageDescription?: string; // Fallback page description
}

/**
 * Generates comprehensive SEO metadata by merging site-wide and page-specific SEO settings
 */
export function generateSEOMetadata({
  siteWideSEO,
  pageSEO,
  pageTitle,
  pageDescription,
}: SEOConfig): Metadata {
  // Determine final title
  let finalTitle = pageSEO?.metaTitle;
  if (!finalTitle && siteWideSEO.defaultMetaTitle && pageTitle) {
    finalTitle = siteWideSEO.defaultMetaTitle.replace("{pageTitle}", pageTitle);
  }
  if (!finalTitle) {
    finalTitle = pageTitle || "Onterra Capital";
  }

  // Determine final description
  const finalDescription =
    pageSEO?.metaDescription ||
    siteWideSEO.defaultMetaDescription ||
    pageDescription ||
    "Strategic real estate investment firm building wealth through innovative investment strategies and proven market expertise.";

  // Build keywords array
  const keywords = [
    ...(pageSEO?.keywords || []),
    "real estate investment",
    "Onterra Capital",
    "strategic investment",
  ];

  // Remove duplicates and limit to reasonable number
  const uniqueKeywords = [...new Set(keywords)].slice(0, 10);

  const metadata: Metadata = {
    title: finalTitle,
    description: finalDescription,
    keywords: uniqueKeywords,
    authors: [{ name: "Onterra Capital" }],
    creator: "Onterra Capital",
    publisher: "Onterra Capital",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: pageSEO?.canonicalUrl || "https://onterra.in",
      siteName: "Onterra Capital",
      title: finalTitle,
      description: finalDescription,
      images: [
        {
          url: "/logo.png", // You can make this dynamic later
          width: 1200,
          height: 630,
          alt: "Onterra Capital Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: ["/logo.png"], // You can make this dynamic later
    },
    alternates: {
      canonical: pageSEO?.canonicalUrl,
    },
  };

  // Add organization schema if enabled
  if (siteWideSEO.organizationSchema) {
    const organizationData: Record<string, string> = {
      "organization:name": "Onterra Capital",
      "organization:url": "https://onterra.in",
      "organization:logo": "https://onterra.in/logo.png",
      "organization:description":
        siteWideSEO.defaultMetaDescription ||
        "Strategic real estate investment firm",
    };

    if (siteWideSEO.foundingDate) {
      organizationData["organization:foundingDate"] = siteWideSEO.foundingDate;
    }

    if (siteWideSEO.industry) {
      organizationData["organization:industry"] = siteWideSEO.industry;
    }

    metadata.other = {
      ...metadata.other,
      ...organizationData,
    };
  }

  return metadata;
}

/**
 * Generates structured data for organization schema
 */
export function generateOrganizationSchema(siteWideSEO: SiteWideSEO) {
  if (!siteWideSEO.organizationSchema) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Onterra Capital",
    url: "https://onterra.in",
    logo: "https://onterra.in/logo.png",
    description:
      siteWideSEO.defaultMetaDescription ||
      "Strategic real estate investment firm",
    ...(siteWideSEO.foundingDate && { foundingDate: siteWideSEO.foundingDate }),
    ...(siteWideSEO.industry && { industry: siteWideSEO.industry }),
    sameAs: [
      "https://linkedin.com/company/onterra-capital",
      "https://twitter.com/onterracapital",
    ],
  };
}

/**
 * Generates Google Analytics and Tag Manager scripts
 */
export function generateAnalyticsScripts(siteWideSEO: SiteWideSEO) {
  const scripts: string[] = [];

  if (siteWideSEO.googleAnalyticsId) {
    scripts.push(`
      <!-- Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=${siteWideSEO.googleAnalyticsId}"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${siteWideSEO.googleAnalyticsId}');
      </script>
    `);
  }

  if (siteWideSEO.googleTagManagerId) {
    scripts.push(`
      <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${siteWideSEO.googleTagManagerId}');</script>
    `);
  }

  return scripts.join("\n");
}
