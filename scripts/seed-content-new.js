#!/usr/bin/env node

/**
 * Sanity Content Seeding Script - Simplified Schema
 *
 * This script populates your Sanity database with initial content
 * for the Onterra Real Estate Investment Firm homepage using the new simplified schema.
 *
 * Usage:
 * 1. Make sure your Sanity project is set up
 * 2. Run: node scripts/seed-content-new.js
 * 3. Check your Sanity Studio to see the populated content
 */

const { createClient } = require("@sanity/client");
require("dotenv").config({ path: ".env.local" });

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

// Simplified content data
const contentData = {
  siteSettings: {
    _type: "siteSettings",
    _id: "site-settings-main",
    title: "Onterra Capital",
    description:
      "Real estate investment management firm building wealth through innovative investment strategies and proven market expertise.",
    tagline: "Building wealth through strategic real estate investment",
    logo: null, // Will be set manually in Sanity Studio
    favicon: null, // Will be set manually in Sanity Studio
    seo: {
      defaultMetaTitle: "{pageTitle} | Onterra Capital",
      defaultMetaDescription:
        "Real estate investment management firm building wealth through innovative investment strategies and proven market expertise.",
      organizationSchema: true,
      foundingDate: "2020-01-01",
      industry: "Real Estate Investment",
      googleAnalyticsId: null, // Will be set manually
      googleTagManagerId: null, // Will be set manually
    },
    copyrightText: "© 2025 Onterra Capital. All rights reserved.",
    privacyPolicyUrl: "/legal/privacy-policy",
    termsOfServiceUrl: "/legal/terms-conditions",
    disclaimerUrl: "/legal/disclaimer",
  },

  contactDetails: {
    _type: "contactDetails",
    _id: "contact-details-main",
    title: "Contact Details",
    address: {
      street: "123 Business District",
      city: "Mumbai",
      state: "Maharashtra",
      zipCode: "400001",
      country: "India",
    },
    phone: "+91 98765 43210",
    email: "info@onterra.in",
    businessHours: "Monday - Friday: 9:00 AM - 6:00 PM IST",
  },

  socialLinks: {
    _type: "socialLinks",
    _id: "social-links-main",
    title: "Social Links",
    links: [],
  },

  navigation: {
    _type: "navigation",
    _id: "navigation-main",
    title: "Main Navigation",
    navItems: [
      {
        id: "home",
        title: "Home",
        type: "link",
        url: "/",
      },
      {
        id: "about",
        title: "About",
        type: "megamenu",
        megaMenuContent: {
          title: "About",
          sections: [
            {
              id: "overview",
              title: "Overview",
              description:
                "India's real estate is rapidly formalizing and institutionalizing- driven by RERA, developer consolidation, post-COVID housing momentum, GCC growth and REITs - on track to reach $1.5TN by 2034 (~10.5% of GDP) with financing shifting from sales-led models to structured build-and-lease and fractional platforms. Ironically, domestic investors have often been sidelined (foreign capital captured prime returns while many legacy residential credit funds underperformed), underscoring the need for disciplined, aligned, institutionally managed capital.",
              url: "/about/overview",
            },
            {
              id: "our-approach",
              title: "Our Approach",
              description:
                "Onterra Capital is an independent, conflict-free and domestic real estate investment manager offering Indian family offices and various other investors early, aligned access to residential and commercial offices growth. We combine deep expertise across credit, equity and asset management with a disciplined and data-driven process by keeping structures simple and conservative. Built on trust and integrity, we work to protect capital while unlocking upside across the capital stack.",
              url: "/about/approach",
            },
            {
              id: "our-team",
              title: "Our Team",
              description:
                "Onward with real discipline, real returns - and the team that makes it happen.",
              url: "/about/team",
            },
          ],
        },
      },
      {
        id: "insights",
        title: "Insights",
        type: "dropdown",
        dropdownItems: [
          {
            id: "sept-2025",
            title: "Sept 2025",
            url: "/insights/sept-2025",
          },
          {
            id: "aug-2025",
            title: "Aug 2025",
            url: "/insights/aug-2025",
          },
          {
            id: "jul-2025",
            title: "Jul 2025",
            url: "/insights/jul-2025",
          },
        ],
      },
      {
        id: "contact",
        title: "Contact",
        type: "link",
        url: "/contact",
      },
    ],
    footerNavigation: {
      useMainNavigation: true,
      additionalSections: [
        {
          title: "Company",
          links: [
            {
              title: "About Us",
              url: "/about",
              openInNewTab: false,
            },
            {
              title: "Our Team",
              url: "/team",
              openInNewTab: false,
            },
            {
              title: "Careers",
              url: "/careers",
              openInNewTab: false,
            },
          ],
        },
        {
          title: "Services",
          links: [
            {
              title: "Investment Strategies",
              url: "/strategies",
              openInNewTab: false,
            },
            {
              title: "Property Management",
              url: "/management",
              openInNewTab: false,
            },
            {
              title: "Consulting",
              url: "/consulting",
              openInNewTab: false,
            },
          ],
        },
        {
          title: "Resources",
          links: [
            {
              title: "Blog",
              url: "/blog",
              openInNewTab: false,
            },
            {
              title: "Case Studies",
              url: "/case-studies",
              openInNewTab: false,
            },
            {
              title: "Market Reports",
              url: "/reports",
              openInNewTab: false,
            },
          ],
        },
        {
          title: "Legal",
          links: [
            {
              title: "Privacy Policy",
              url: "/privacy-policy",
              openInNewTab: false,
            },
            {
              title: "Terms of Service",
              url: "/terms-of-service",
              openInNewTab: false,
            },
            {
              title: "Disclaimers",
              url: "/disclaimers",
              openInNewTab: false,
            },
          ],
        },
      ],
    },
  },

  heroSection: {
    _type: "heroSection",
    _id: "hero-section-main",
    staticText: "Committed to Making Real Estate Investing",
    rotatingText: ["INDEPENDENT", "TRANSPARENT", "PROFITABLE", "PREDICTABLE"],
    lineDesign: {
      enabled: true,
      color: "#fff",
    },
    overlayOpacity: 0.4,
  },

  homeIntroSection: {
    _type: "homeIntroSection",
    _id: "home-intro-main",
    title: "Transforming Real Estate Investment",
    description:
      "We combine institutional expertise with innovative technology to deliver exceptional real estate investment opportunities. Our disciplined approach and transparent processes ensure sustainable returns for our investors.",
    enableBackgroundImage: true,
    imagePosition: "bottom",
    blendMode: "overlay",
    backgroundImage: {
      _type: "imageWithAlt",
      asset: {
        _type: "reference",
        _ref: "image-home-intro-bg",
      },
      alt: "City Skyline Background",
    },
    imageOpacity: 0.8,
  },

  // Legal Pages
  legalPages: [
    {
      _type: "legalPage",
      _id: "legal-privacy-policy",
      pageType: "privacy-policy",
      title: "Privacy Policy",
      hero: {
        title: "Privacy Policy",
      },
      content: [
        {
          _type: "block",
          _key: "intro",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "intro-text",
              text: "At Onterra Capital, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h2-1",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "h2-1-text",
              text: "Information We Collect",
            },
          ],
        },
        {
          _type: "block",
          _key: "info-collect",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "info-collect-text",
              text: "We may collect personal information that you voluntarily provide to us when you:",
            },
          ],
        },
        {
          _type: "block",
          _key: "list-1",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              _key: "list-1-1",
              text: "Fill out contact forms or request information",
            },
          ],
        },
        {
          _type: "block",
          _key: "list-2",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              _key: "list-2-1",
              text: "Subscribe to our newsletter or updates",
            },
          ],
        },
        {
          _type: "block",
          _key: "list-3",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              _key: "list-3-1",
              text: "Communicate with us via email or phone",
            },
          ],
        },
        {
          _type: "block",
          _key: "h2-2",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "h2-2-text",
              text: "How We Use Your Information",
            },
          ],
        },
        {
          _type: "block",
          _key: "use-info",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "use-info-text",
              text: "We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h2-3",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "h2-3-text",
              text: "Contact Us",
            },
          ],
        },
        {
          _type: "block",
          _key: "contact",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "contact-text",
              text: "If you have any questions about this Privacy Policy, please contact us at info@onterra.in",
            },
          ],
        },
      ],
      lastUpdated: "2024-01-15",
      isActive: true,
      seo: {
        metaTitle: "Privacy Policy | Onterra Capital",
        metaDescription:
          "Learn how Onterra Capital protects your privacy and personal information. Our comprehensive privacy policy outlines our data collection and usage practices.",
        keywords:
          "privacy policy, data protection, personal information, Onterra Capital",
        canonicalUrl: "https://onterra.in/legal/privacy-policy",
      },
    },
    {
      _type: "legalPage",
      _id: "legal-terms-conditions",
      pageType: "terms-conditions",
      title: "Terms & Conditions",
      hero: {
        title: "Terms & Conditions",
      },
      content: [
        {
          _type: "block",
          _key: "intro",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "intro-text",
              text: "Welcome to Onterra Capital. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h2-1",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "h2-1-text",
              text: "Acceptance of Terms",
            },
          ],
        },
        {
          _type: "block",
          _key: "acceptance",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "acceptance-text",
              text: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h2-2",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "h2-2-text",
              text: "Use License",
            },
          ],
        },
        {
          _type: "block",
          _key: "license",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "license-text",
              text: "Permission is granted to temporarily download one copy of the materials on Onterra Capital's website for personal, non-commercial transitory viewing only.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h2-3",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "h2-3-text",
              text: "Disclaimer",
            },
          ],
        },
        {
          _type: "block",
          _key: "disclaimer",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "disclaimer-text",
              text: "The materials on Onterra Capital's website are provided on an 'as is' basis. Onterra Capital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
            },
          ],
        },
      ],
      lastUpdated: "2024-01-15",
      isActive: true,
      seo: {
        metaTitle: "Terms & Conditions | Onterra Capital",
        metaDescription:
          "Read Onterra Capital's terms and conditions for using our website and services. Understand your rights and obligations when engaging with our platform.",
        keywords:
          "terms and conditions, website terms, user agreement, Onterra Capital",
        canonicalUrl: "https://onterra.in/legal/terms-conditions",
      },
    },
    {
      _type: "legalPage",
      _id: "legal-disclaimer",
      pageType: "disclaimer",
      title: "Disclaimer",
      hero: {
        title: "Disclaimer",
      },
      content: [
        {
          _type: "block",
          _key: "intro",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "intro-text",
              text: "This disclaimer applies to all information, materials, and services provided by Onterra Capital. Please read this disclaimer carefully before using our website or services.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h2-1",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "h2-1-text",
              text: "Investment Risks",
            },
          ],
        },
        {
          _type: "block",
          _key: "risks",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "risks-text",
              text: "All investments carry risk, including the potential loss of principal. Past performance does not guarantee future results. Real estate investments are subject to market risks and may not be suitable for all investors.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h2-2",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "h2-2-text",
              text: "No Investment Advice",
            },
          ],
        },
        {
          _type: "block",
          _key: "no-advice",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "no-advice-text",
              text: "The information provided on this website is for informational purposes only and does not constitute investment advice, financial advice, or recommendations to buy or sell any securities.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h2-3",
          style: "h2",
          children: [
            {
              _type: "span",
              _key: "h2-3-text",
              text: "Professional Consultation",
            },
          ],
        },
        {
          _type: "block",
          _key: "consultation",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "consultation-text",
              text: "Before making any investment decisions, you should consult with qualified financial advisors and consider your individual circumstances, risk tolerance, and investment objectives.",
            },
          ],
        },
      ],
      lastUpdated: "2024-01-15",
      isActive: true,
      seo: {
        metaTitle: "Disclaimer | Onterra Capital",
        metaDescription:
          "Important disclaimers regarding Onterra Capital's investment services, risks, and limitations. Read before making investment decisions.",
        keywords:
          "investment disclaimer, risk warning, financial disclaimer, Onterra Capital",
        canonicalUrl: "https://onterra.in/legal/disclaimer",
      },
    },
  ],

  // Keep existing content schemas as they are
  onterraStandards: {
    _type: "onterraStandards",
    _id: "onterra-standards-new-main",
    sectionTitle: "Our Values",
    description:
      "Rooted in discipline and built on decades of institutional experience, our standards guide every investment decision and client interaction. We maintain the highest levels of excellence through rigorous processes and unwavering commitment to our principles.",
    principles: [
      {
        id: "alignment",
        title: "Alignment Without Conflicts",
        shortTitle: "Alignment Without Conflicts",
        description:
          "We ensure complete alignment between our interests and our investors' interests, eliminating conflicts and ensuring transparent decision-making.",
        points: [
          "Independent platform, no competing interests",
          "Returns from performance and alpha creation, not asset accumulation",
          "Avoid conflicts that harm and value trust",
        ],
        icon: "Target",
        gridPosition: {
          row: 1,
          column: 1,
        },
      },
      {
        id: "real-estate",
        title: "Real Estate Only, End-to-end",
        shortTitle: "Real Estate Only, End-to-end",
        description:
          "We focus exclusively on real estate investments with comprehensive end-to-end services from acquisition to management.",
        points: [
          "Exclusive focus on real estate lifecycle management",
          "Deep involvement: approvals, execution, structuring, exit",
          "Partner with experienced operators for strategic execution",
        ],
        icon: "Eye",
        gridPosition: {
          row: 1,
          column: 2,
        },
      },
      {
        id: "risk-management",
        title: "Risk Management Over Deal Velocity",
        shortTitle: "Risk Management Over Deal Velocity",
        description:
          "We prioritize thorough risk assessment and management over quick deal execution, ensuring sustainable long-term returns.",
        points: [
          "Prioritize risk assessment over quick deals",
          "Capital preservation guides decisions",
          "Structure investments to protect capital first",
        ],
        icon: "Shield",
        gridPosition: {
          row: 2,
          column: 1,
        },
      },
      {
        id: "integrity",
        title: "Integrity and Communication",
        shortTitle: "Integrity and Communication",
        description:
          "We maintain the highest standards of integrity and provide clear, honest communication throughout the investment process.",
        points: [
          "Transparent, timely, honest investor communication",
          "Institutional mindset with strong processes and governance",
          "Blend of data, technology, and human insight",
        ],
        icon: "Clock",
        gridPosition: {
          row: 2,
          column: 2,
        },
      },
      {
        id: "performance",
        title: "Performance Through Talent and Focus",
        shortTitle: "Performance Through Talent and Focus",
        description:
          "We achieve superior performance through our talented team and laser focus on real estate investment excellence.",
        points: [
          "High standards in underwriting, deal selection, due diligence",
          "Fewer, better decisions drive great outcomes",
          "Focus on deal selection and improving good deals",
        ],
        icon: "Lightbulb",
        gridPosition: {
          row: 3,
          column: 1,
        },
      },
      {
        id: "partnerships",
        title: "Built on Enduring Partnerships",
        shortTitle: "Built on Enduring Partnerships",
        description:
          "We build long-term, mutually beneficial partnerships with investors, partners, and stakeholders based on trust and shared success.",
        points: [
          "Treat investors, developers, and team as long-term partners",
          "Earn trust for premium deal access and capital support",
          "Relationships based on respect, transparency and shared success",
        ],
        icon: "Handshake",
        gridPosition: {
          row: 3,
          column: 2,
        },
      },
    ],
  },

  investmentStrategies: {
    _type: "investmentStrategies",
    _id: "investment-strategies-new-main",
    sectionTitle: "Investment Strategies",
    sectionDescription:
      "Our comprehensive approach to real estate investment spanning residential and commercial markets, designed to maximize returns while managing risk through diversified property portfolios.",
    strategies: [
      {
        id: "private-credit",
        title: "Private Credit",
        category: "residential",
        mainPoint: "Residential",
        gridPosition: {
          row: 1,
          column: 1,
        },
        description:
          "Flexible and highly customized financing needed by quality developers to acquire land, get various building plan approvals before starting the project, address asset liability mismatches in the construction period and build longer runway to complete the project.",
        isSelectable: true,
      },
      {
        id: "structured-entity-level-credit",
        title: "Structured Entity Level Credit",
        category: "residential",
        mainPoint: "Residential",
        gridPosition: {
          row: 1,
          column: 2,
        },
        description:
          "Providing structured capital to select developers for specific projects with visible exit pathways. Our investments are designed to be repaid through either the projects sales proceeds or a developer IPO, whichever materializes first, creating a blend of upside participation with downside protection.",
        isSelectable: true,
      },
      {
        id: "opportunistic-investing",
        title: "Opportunistic Investing",
        category: "residential",
        mainPoint: "Residential",
        gridPosition: {
          row: 1,
          column: 3,
        },
        description:
          "Curated equity investments to unlock value in high-quality but capital-starved projects - which includes last-mile (LIFO) funding for project completion, inventory-backed financing, and capital restructuring with project reconfiguration in response to evolving market realities.",
        isSelectable: true,
      },
      {
        id: "value-add",
        title: "Value Add",
        category: "commercial",
        mainPoint: "Commercial",
        gridPosition: {
          row: 2,
          column: 1,
        },
        description:
          "India's office market is undergoing a structural shift, driven by rising demand from GCCs, Indian corporates and flex operators. We believe that there is a value-unlocking play in acquiring commercial assets with low/no occupancy in strategic locations through targeted leasing and asset enhancements thereby transforming these properties into core yielding assets.",
        isSelectable: true,
      },
      {
        id: "core-plus",
        title: "Core / +",
        category: "commercial",
        mainPoint: "Commercial",
        gridPosition: {
          row: 2,
          column: 2,
        },
        description:
          "Investments in stabilized, income-generating Grade A commercial assets in prime micro-markets. Backed by marquee tenants, long leases, and embedded rent escalations - these assets offer predictable cash flow, capital preservation, and steady yield.",
        isSelectable: true,
      },
    ],
  },

  overviewPage: {
    _type: "overviewPage",
    _id: "overview-page-main",
    pageTitle: "Overview",
    pageSubtitle:
      "India's real estate is rapidly formalizing and institutionalizing- driven by RERA, developer consolidation, post-COVID housing momentum, GCC growth and REITs - on track to reach $1.5TN by 2034 (~10.5% of GDP) with financing shifting from sales-led models to structured build-and-lease and fractional platforms.",
    hero: {
      title: "Overview",
      description:
        "India's real estate is rapidly formalizing and institutionalizing- driven by RERA, developer consolidation, post-COVID housing momentum, GCC growth and REITs - on track to reach $1.5TN by 2034 (~10.5% of GDP) with financing shifting from sales-led models to structured build-and-lease and fractional platforms.",
    },
    sections: [
      {
        id: "real-estate-transforming",
        title: "Real estate is transforming rapidly",
        content:
          "Our journey is powered by a simple belief: India's real estate sector is transforming fast — driven by formalisation, organised capital, and structural reform. The introduction of RERA, ongoing consolidation of developers, strong residential sales momentum since Covid-19, growth in Global Capability Centres (GCCs), and the rise of listed REITs have reshaped the market and drawn new capital.",
        imagePosition: "left",
        order: 1,
      },
      {
        id: "financing-mechanisms-evolving",
        title: "Financing mechanisms evolving too",
        content:
          "India's real estate market is projected to reach $1.5 trillion by 2034, contributing 10.5% of national GDP — making it one of the most important wealth-creation engines of the next decade. The financing landscape is also evolving. From sale-driven residential credit models to build-and-lease and fractionalisation platforms in commercial office, warehousing, and retail — the shift toward institutional capital and structured investments is accelerating.",
        imagePosition: "right",
        order: 2,
      },
      {
        id: "domestic-investors-sidelined",
        title: "Domestic investors kept away from real returns",
        content:
          "Yet, much of India's high-quality commercial real estate is still institutionally owned by foreign capital, which entered in the last decade and enjoyed disproportionate upside. Domestic investors, in many cases, were allowed access only through REITs — often after the majority of returns had already been taken by global sponsors and private equity funds. Similarly, many domestic residential credit funds floated in the past decade showed low returns as they suffered from internal issues amidst a rapidly changing landscape for real estate developers.",
        imagePosition: "left",
        order: 3,
      },
    ],
    seo: {
      metaTitle: "Overview - Onterra Capital",
      metaDescription:
        "Learn about India's real estate transformation and the opportunities in the evolving market landscape.",
      keywords: [
        "real estate",
        "India",
        "RERA",
        "REITs",
        "investment",
        "transformation",
      ],
      canonicalUrl: "https://onterra.in/about/overview",
    },
  },

  approachPage: {
    _type: "approachPage",
    _id: "approach-page-main",
    pageTitle: "Our Approach",
    pageSubtitle:
      "Onterra Capital is an independent, conflict-free and domestic real estate investment manager offering Indian family offices and various other investors early, aligned access to residential and commercial offices growth.",
    hero: {
      title: "Our Approach",
      description:
        "Onterra Capital is an independent, conflict-free and domestic real estate investment manager offering Indian family offices and various other investors early, aligned access to residential and commercial offices growth. We combine deep expertise across credit, equity and asset management with a disciplined and data-driven process.",
    },
    sections: [
      {
        id: "independent-conflict-free",
        title: "Independent and conflict free",
        content:
          "We are an independent, domestic investment manager focused exclusively on real estate — offering Indian family offices and UHNI investors early, conflict-free access to commercial and residential real estate growth in India. Our platform is built on trust, integrity, resilience, and sustainable value creation. For long-term investors seeking capital protection with meaningful upside, we offer more than financial returns — we offer the chance to fund projects that shape India's urban future.",
        imagePosition: "left",
        order: 1,
      },
      {
        id: "deep-experience-discipline",
        title: "Deep experience, discipline and data driven",
        content:
          "We are a platform with deep domain expertise across real estate credit, real estate equity investing and asset management. Our investment process is disciplined, research-driven, and grounded in real-world execution — blending rigorous underwriting with a practical understanding of approvals, financing structures, and exit mechanisms.",
        imagePosition: "right",
        order: 2,
      },
      {
        id: "conservative-fair-simple",
        title: "Conservative, fair and simple approach",
        content:
          "In a space where project outcomes can vary dramatically from IC memo to actual exit, we keep things simple, conservative, and fair to all counterparties — a philosophy that has served us well across cycles. What truly sets us apart is our ability to navigate both credit and equity strategies fluently, and to unlock value — regardless of where we sit in the capital stack. Built on deep domain expertise, we aim to evolve into a real assets platform over time - while remaining disciplined, execution driven, conflict free and aligned.",
        imagePosition: "left",
        order: 3,
      },
    ],
    seo: {
      metaTitle: "Our Approach - Onterra Capital",
      metaDescription:
        "Discover Onterra Capital's independent, conflict-free approach to real estate investment with deep expertise and disciplined processes.",
      keywords: [
        "investment approach",
        "real estate",
        "independent",
        "conflict-free",
        "discipline",
      ],
      canonicalUrl: "https://onterra.in/about/approach",
    },
  },

  teamPage: {
    _type: "teamPage",
    _id: "team-page-main",
    pageTitle: "Our Team",
    pageSubtitle:
      "Onward with real discipline, real returns - and the team that makes it happen.",
    hero: {
      title: "Our Team",
      description:
        "Onward with real discipline, real returns - and the team that makes it happen.",
    },
    statistics: {
      title: "Our Track Record",
      statistics: [
        {
          value: "$500M+",
          label: "Assets Under Management",
          suffix: "",
        },
        {
          value: "15+",
          label: "Years of Combined Experience",
          suffix: "",
        },
        {
          value: "25+",
          label: "Successful Projects",
          suffix: "",
        },
        {
          value: "12%",
          label: "Average Annual Returns",
          suffix: "",
        },
        {
          value: "100%",
          label: "Client Retention Rate",
          suffix: "",
        },
      ],
    },
    teamSection: {
      title: "Our Team",
      subtitle:
        "Meet the experienced professionals behind our success. Our team combines decades of real estate expertise with innovative investment strategies.",
      teamMembers: [], // Will be populated with references after team members are created
    },
    seo: {
      metaTitle: "Our Team - Onterra Capital",
      metaDescription:
        "Meet the experienced professionals behind Onterra Capital's success, combining decades of real estate expertise with innovative strategies.",
      keywords: [
        "team",
        "professionals",
        "real estate",
        "expertise",
        "leadership",
      ],
      canonicalUrl: "https://onterra.in/about/team",
    },
  },

  teamMembers: [
    {
      _type: "teamMember",
      _id: "team-member-amar-merani",
      name: "Amar Merani",
      title: "Managing Partner and CEO",
      image: null, // Will be set manually in Sanity Studio
      bio: "20 years of leadership experience in real estate finance, has delivered from various vantage points from the time India opened up its real estate sector to foreign investor participation in 2005. In this period, successfully originated, structured, managed more than 90 transformative credit and equity transactions aggregating to over US$ 4bn for 40+ developers, many of who were first timers to tap external financing in the market. Before entering real estate, had a robust 10-year career – spending 6 years financing large-scale infrastructure projects (toll roads, power and telecom) during India's deregulation phase and 4 years in Technology consulting.",
      education: ["BE Electrical (Hons.) from VJTI", "MMS from NMIMS"],
      careerHighlights: [
        {
          period: "2006-12",
          role: "Executive Director & Head – Real Estate, Kotak Investment Banking",
          description:
            "Led real estate investment banking division during India's real estate sector opening to foreign investors.",
        },
        {
          period: "2012-20",
          role: "MD & CEO, Xander Finance – High-Yield Developer Credit",
          description:
            "Managed high-yield developer credit operations and strategic investments in real estate sector.",
        },
        {
          period: "2021-24",
          role: "CIO & Head (Real Assets), 360 One – Recovery from Legacy Portfolio, Fresh Investments in Equity of Yielding Real Assets and Credit",
          description:
            "Oversaw recovery from legacy portfolio and managed fresh investments in equity of yielding real assets and credit.",
        },
      ],
      certifications: [
        "Long-time member of several real estate associations",
        "Recently of NISM, having successfully cleared the XIX-D certification for managing Category 1 and 2 AIFs",
      ],
      order: 1,
      isActive: true,
    },
  ],

  contactPage: {
    _type: "contactPage",
    _id: "contact-page-main",
    title: "Contact Page Content",
    hero: {
      title: "Get in Touch",
      description:
        "Ready to explore real estate investment opportunities? We'd love to hear from you. Get in touch with our team to discuss your investment goals and how we can help you achieve them.",
    },
    contactDetails: {
      _type: "reference",
      _ref: "contact-details-main",
    },
    formSettings: {
      recipientEmail: "info@onterra.in",
      successMessage:
        "Thank you for your message! We'll get back to you within 24 hours.",
      errorMessage:
        "Sorry, there was an error sending your message. Please try again or contact us directly.",
    },
    seo: {
      metaTitle: "Contact Us - Onterra Capital",
      metaDescription:
        "Get in touch with Onterra Capital for real estate investment opportunities. Contact our team to discuss your investment goals and portfolio strategy.",
      keywords: [
        "contact",
        "real estate investment",
        "investment opportunities",
        "portfolio strategy",
        "Onterra Capital",
      ],
      canonicalUrl: "https://onterra.in/contact",
    },
  },
};

async function seedContent() {
  try {
    console.log("🌱 Starting simplified content seeding process...\n");

    const forceUpdate = process.env.SANITY_FORCE_SEED === "true";

    // Seed Site Settings
    console.log("⚙️ Seeding Site Settings...");
    const existingSiteSettings = await client.fetch(
      '*[_type == "siteSettings"][0]'
    );
    if (existingSiteSettings && !forceUpdate) {
      console.log("⚠️ Site Settings already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Site Settings...");
      await client.createOrReplace(contentData.siteSettings);
      console.log("✅ Site Settings created/updated successfully");
    }

    // Seed Contact Details
    console.log("\n📞 Seeding Contact Details...");
    const existingContactDetails = await client.fetch(
      '*[_type == "contactDetails"][0]'
    );
    if (existingContactDetails && !forceUpdate) {
      console.log("⚠️ Contact Details already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Contact Details...");
      await client.createOrReplace(contentData.contactDetails);
      console.log("✅ Contact Details created/updated successfully");
    }

    // Seed Social Links
    console.log("\n🔗 Seeding Social Links...");
    const existingSocialLinks = await client.fetch(
      '*[_type == "socialLinks"][0]'
    );
    if (existingSocialLinks && !forceUpdate) {
      console.log("⚠️ Social Links already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Social Links...");
      await client.createOrReplace(contentData.socialLinks);
      console.log("✅ Social Links created/updated successfully");
    }

    // Seed Navigation
    console.log("\n🧭 Seeding Navigation...");
    const existingNavigation = await client.fetch(
      '*[_type == "navigation"][0]'
    );
    if (existingNavigation && !forceUpdate) {
      console.log("⚠️ Navigation already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Navigation...");
      await client.createOrReplace(contentData.navigation);
      console.log("✅ Navigation created/updated successfully");
    }

    // Seed existing content (keep as is)
    console.log("\n🏠 Seeding Hero Section...");
    const existingHero = await client.fetch('*[_type == "heroSection"][0]');
    if (existingHero && !forceUpdate) {
      console.log("⚠️ Hero section already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Hero Section...");
      await client.createOrReplace(contentData.heroSection);
      console.log("✅ Hero Section created/updated successfully");
    }

    // Seed Home Intro Section
    console.log("\n🏡 Seeding Home Intro Section...");
    const existingHomeIntro = await client.fetch(
      '*[_type == "homeIntroSection"][0]'
    );
    if (existingHomeIntro && !forceUpdate) {
      console.log("⚠️ Home Intro section already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Home Intro Section...");
      await client.createOrReplace(contentData.homeIntroSection);
      console.log("✅ Home Intro Section created/updated successfully");
    }

    console.log("\n🏛️ Seeding Onterra Standards...");
    const existingStandards = await client.fetch(
      '*[_type == "onterraStandards"][0]'
    );
    if (existingStandards && !forceUpdate) {
      console.log("⚠️ Onterra Standards already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Onterra Standards...");
      await client.createOrReplace(contentData.onterraStandards);
      console.log("✅ Onterra Standards created/updated successfully");
    }

    console.log("\n💼 Seeding Investment Strategies...");
    const existingStrategies = await client.fetch(
      '*[_type == "investmentStrategies"][0]'
    );
    if (existingStrategies && !forceUpdate) {
      console.log("⚠️ Investment Strategies already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Investment Strategies...");
      await client.createOrReplace(contentData.investmentStrategies);
      console.log("✅ Investment Strategies created/updated successfully");
    }

    // Seed Overview Page
    console.log("\n📊 Seeding Overview Page...");
    const existingOverviewPage = await client.fetch(
      '*[_type == "overviewPage"][0]'
    );
    if (existingOverviewPage && !forceUpdate) {
      console.log("⚠️ Overview Page already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Overview Page...");
      await client.createOrReplace(contentData.overviewPage);
      console.log("✅ Overview Page created/updated successfully");
    }

    // Seed Approach Page
    console.log("\n🎯 Seeding Approach Page...");
    const existingApproachPage = await client.fetch(
      '*[_type == "approachPage"][0]'
    );
    if (existingApproachPage && !forceUpdate) {
      console.log("⚠️ Approach Page already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Approach Page...");
      await client.createOrReplace(contentData.approachPage);
      console.log("✅ Approach Page created/updated successfully");
    }

    // Seed Team Page
    console.log("\n👥 Seeding Team Page...");
    const existingTeamPage = await client.fetch('*[_type == "teamPage"][0]');
    if (existingTeamPage && !forceUpdate) {
      console.log("⚠️ Team Page already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Team Page...");
      await client.createOrReplace(contentData.teamPage);
      console.log("✅ Team Page created/updated successfully");
    }

    // Seed Contact Page
    console.log("\n📞 Seeding Contact Page...");
    const existingContactPage = await client.fetch(
      '*[_type == "contactPage"][0]'
    );
    if (existingContactPage && !forceUpdate) {
      console.log("⚠️ Contact Page already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Contact Page...");
      await client.createOrReplace(contentData.contactPage);
      console.log("✅ Contact Page created/updated successfully");
    }

    console.log("\n⚖️ Seeding Legal Pages...");
    for (const legalPage of contentData.legalPages) {
      const existingLegalPage = await client.fetch(
        `*[_type == "legalPage" && _id == "${legalPage._id}"][0]`
      );
      if (existingLegalPage && !forceUpdate) {
        console.log(`⚠️ ${legalPage.title} already exists. Skipping...`);
      } else {
        console.log(`🔄 Creating/updating ${legalPage.title}...`);
        await client.createOrReplace(legalPage);
        console.log(`✅ ${legalPage.title} created/updated successfully`);
      }
    }

    // Seed Team Members
    console.log("\n👥 Seeding Team Members...");
    for (const teamMember of contentData.teamMembers) {
      const existingMember = await client.fetch(
        `*[_type == "teamMember" && _id == "${teamMember._id}"][0]`
      );
      if (existingMember && !forceUpdate) {
        console.log(
          `⚠️ Team member ${teamMember.name} already exists. Skipping...`
        );
      } else {
        console.log(`🔄 Creating/updating team member: ${teamMember.name}...`);
        await client.createOrReplace(teamMember);
        console.log(
          `✅ Team member ${teamMember.name} created/updated successfully`
        );
      }
    }

    console.log("\n🎉 Simplified content seeding completed successfully!");
    console.log(
      "📱 Visit your Sanity Studio at http://localhost:3000/studio to view the content"
    );
    console.log(
      "🌐 Your homepage should now display the seeded content at http://localhost:3000"
    );
    console.log("\n💡 Notes:");
    console.log("   🏢 For site logo and favicon:");
    console.log("      1. Upload images through the Sanity Studio");
    console.log("      2. Edit the Site Settings document");
    console.log(
      "      3. Add the uploaded images to the logo and favicon fields"
    );
    console.log("   📸 For mega menu images:");
    console.log("      1. Upload images through the Sanity Studio");
    console.log("      2. Edit the Navigation document");
    console.log("      3. Add images to the About Us mega menu sections");
    console.log("   👥 For team member images:");
    console.log("      1. Upload profile images through the Sanity Studio");
    console.log("      2. Edit the Team Member documents");
    console.log("      3. Add the uploaded images to the Profile Image field");
    console.log("   📊 For analytics and SEO:");
    console.log("      1. Edit the Site Settings document");
    console.log(
      "      2. Add your Google Analytics and GTM IDs in the SEO section"
    );
  } catch (error) {
    console.error("❌ Error seeding content:", error.message);
    console.error("\n🔧 Troubleshooting:");
    console.error(
      "1. Make sure your .env.local file has NEXT_PUBLIC_SANITY_API_TOKEN"
    );
    console.error("2. Ensure your Sanity project is properly configured");
    console.error("3. Check that you have write permissions to your dataset");
    process.exit(1);
  }
}

// Run the seeding process
seedContent();
