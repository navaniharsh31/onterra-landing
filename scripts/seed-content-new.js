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
      "Strategic real estate investment firm building wealth through innovative investment strategies and proven market expertise.",
    tagline: "Building wealth through strategic real estate investment",
    logo: null, // Will be set manually in Sanity Studio
    favicon: null, // Will be set manually in Sanity Studio
    seo: {
      organizationSchema: true,
      foundingDate: "2020-01-01",
      industry: "Real Estate Investment",
      googleAnalyticsId: null, // Will be set manually
      googleTagManagerId: null, // Will be set manually
    },
    copyrightText: "© 2024 Onterra Capital. All rights reserved.",
    privacyPolicyUrl: "/privacy-policy",
    termsOfServiceUrl: "/terms-of-service",
  },

  contactDetails: {
    _type: "contactDetails",
    _id: "contact-details-main",
    title: "Contact Details",
    address: {
      street: "123 Investment Plaza",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
    },
    phone: "+1 (555) 123-4567",
    email: "info@onterracapital.com",
    businessHours: "Monday - Friday, 9 AM - 6 PM EST",
  },

  socialLinks: {
    _type: "socialLinks",
    _id: "social-links-main",
    title: "Social Links",
    links: [
      {
        _type: "socialMediaLink",
        platform: "linkedin",
        url: "https://linkedin.com/company/onterra-capital",
        label: "Follow us on LinkedIn",
      },
      {
        _type: "socialMediaLink",
        platform: "twitter",
        url: "https://twitter.com/onterracapital",
        label: "Follow us on Twitter",
      },
      {
        _type: "socialMediaLink",
        platform: "youtube",
        url: "https://youtube.com/onterracapital",
        label: "Subscribe to our YouTube channel",
      },
    ],
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
        url: "/about",
        megaMenuContent: {
          title: "About",
          sections: [
            {
              id: "overview",
              title: "Overview",
              description:
                "Real estate is transforming rapidly. Financing mechanisms evolving too. Domestic investors kept away from real returns.",
            },
            {
              id: "our-approach",
              title: "Our Approach",
              description:
                "Independent and conflict free. Deep experience, discipline and data driven. Conservative, fair and simple approach.",
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

  statisticsSection: {
    _type: "statisticsSection",
    _id: "statistics-section-main",
    title: "Our Track Record",
    statistics: [
      {
        value: "20+",
        label: "Years of Real Estate Experience",
        suffix: "",
      },
      {
        value: "8,000 Cr +",
        label: "Total Assets Under Management",
        suffix: "",
      },
      {
        value: "80+",
        label: "# Investments Managed",
        suffix: "",
      },
      {
        value: "8",
        label: "# of Cities",
        suffix: "",
      },
      {
        value: "20%",
        label: "# IRR on Exit",
        suffix: "",
      },
    ],
  },

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
          "Avoid conflicrs that harm and value trust",
        ],
        icon: "Target",
        position: 0,
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
        position: 1,
      },
      {
        id: "risk-management",
        title: "Risk Management Over Deal Velocity",
        shortTitle: "Risk Management Over Deal Velocity",
        description:
          "We prioritize thorough risk assessment and management over quick deal execution, ensuring sustainable long-term returns.",
        points: [
          "Prioritizr risk assessment over quick deals",
          "Capital preservation guides decisions",
          "Structure investments to protect capital first",
        ],
        icon: "Shield",
        position: 2,
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
        position: 3,
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
        position: 4,
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
        position: 5,
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
        level: 0,
        index: 0,
        description:
          "Flexible and highly customized financing needed by quality develpoers to acquire land, get various building plan approvals before starting the project, address asset liability mismatches in the construction period and build longer runway to complete the project.",
        keyPoints: [
          "Stable monthly cash flow from multiple units",
          "Economies of scale in property management",
          "Appreciation potential in growing markets",
          "Lower vacancy risk through unit diversification",
        ],
        metrics: {
          averageReturn: "8-12%",
          holdPeriod: "5-7 years",
          minInvestment: "$500K",
        },
        isSelectable: true,
      },
      {
        id: "structured-entity-level-credit",
        title: "Structured Entity Level Credit",
        category: "residential",
        level: 0,
        index: 1,
        description:
          "Providing structured capital to select developers for specific projects with visible exit pathways. Our investments are designed to be repaid throught either the projects sales proceeds or a developer IPO, whichever materializes first, creating a blend of upside participation with downside protection.",
        keyPoints: [
          "Strong rental demand from families",
          "Easier property management and maintenance",
          "Attractive to owner-occupants for future sale",
          "Potential for value-add improvements",
        ],
        metrics: {
          averageReturn: "6-10%",
          holdPeriod: "3-5 years",
          minInvestment: "$200K",
        },
        isSelectable: true,
      },
      {
        id: "opportunistic-investing",
        title: "Opportunistic Investing",
        category: "residential",
        level: 0,
        index: 2,
        description:
          "Curated quity investments to unlock value in high-quality but capital-starved projects - which includes ",
        keyPoints: [
          "Last-mile (LIFO) funding for project completion",
          "Inventory-backed financing",
          "Capital restructuring with project reconfiguration in response to evolving market realities",
        ],
        metrics: {
          averageReturn: "10-14%",
          holdPeriod: "7-10 years",
          minInvestment: "$750K",
        },
        isSelectable: true,
      },
      {
        id: "residential",
        title: "Residential",
        category: "main-category",
        level: 1,
        index: 0,
        description: "",
        keyPoints: [],
        metrics: {},
        isSelectable: false,
      },
      {
        id: "commercial",
        title: "Commercial",
        category: "main-category",
        level: 2,
        index: 0,
        description: "",
        keyPoints: [],
        metrics: {},
        isSelectable: false,
      },
      {
        id: "value-add",
        title: "Value Add",
        category: "commercial",
        level: 3,
        index: 0,
        description:
          "India's office market is undergoing a structural shift, driven by rising demand from GCCs indian corporates and flex operators. We believe that there is a value-unlocking play in acquiring commercial assets with low/ no occupancy in strategic locations through targeted leasing and asset enhancements thereby transforming these properties into core yielding assets.",
        keyPoints: [
          "Focus on Class A and B office properties",
          "Central business district and suburban locations",
          "Long-term lease agreements with corporate tenants",
          "Strategic capital improvement programs",
        ],
        metrics: {
          averageReturn: "7-10%",
          holdPeriod: "5-8 years",
          minInvestment: "$1M+",
        },
        isSelectable: true,
      },
      {
        id: "core-plus",
        title: "Core / +",
        category: "commercial",
        level: 3,
        index: 1,
        description:
          "Investments in stabilized, income-generating Grade A commercial assets in prime micro-markets. Backed by marquee tenants, long leases, and embedded rent escalations - these assets offer predictable cash flow, capital preservation, and steady yield.",
        keyPoints: [
          "Neighborhood shopping centers and strip malls",
          "Essential service tenants (grocery, pharmacy, services)",
          "High traffic count locations",
          "Strong local demographic fundamentals",
        ],
        metrics: {
          averageReturn: "8-12%",
          holdPeriod: "7-10 years",
          minInvestment: "$750K",
        },
        isSelectable: true,
      },
    ],
    flowStructure: {
      levels: [
        {
          level: 0,
          nodes: [
            "private-credit",
            "structured-entity-level-credit",
            "opportunistic-investing",
          ],
          parentId: "residential",
          title: "Property Types",
        },
        {
          level: 1,
          nodes: ["residential"],
          parentId: null,
          childId: "commercial",
          title: "Asset Categories",
        },
        {
          level: 2,
          nodes: ["commercial"],
          parentId: "residential",
          childIds: ["value-add", "core-plus"],
          title: "Commercial Sectors",
        },
        {
          level: 3,
          nodes: ["value-add", "core-plus"],
          parentId: "commercial",
          title: "Investment Types",
        },
      ],
    },
  },

  aboutPage: {
    _type: "aboutPage",
    _id: "about-page-main",
    pageTitle: "About Us",
    pageSubtitle:
      "Learn about our team and our approach to real estate investment",
    hero: {
      title: "About Us",
      description:
        "Building wealth through strategic real estate investment with a team of experienced professionals who combine decades of expertise with innovative strategies.",
      backgroundStyle: {
        primaryColor: "navy-900",
        secondaryColor: "navy-800",
        accentColor: "mustard-400",
        showGridPattern: true,
        showGeometricAccents: true,
      },
    },
    teamSection: {
      title: "Our Team",
      subtitle:
        "Meet the experienced professionals behind our success, combining decades of real estate expertise with innovative investment strategies.",
      teamMembers: [], // Will be populated with references after team members are created
      allowNewTeamMembers: true,
      showInAbout: true,
    },
    seo: {
      metaTitle: "About Us - Onterra Capital",
      metaDescription:
        "Learn about Onterra Capital's experienced team of real estate investment professionals and our strategic approach to building wealth.",
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

    console.log("\n📊 Seeding Statistics Section...");
    const existingStats = await client.fetch(
      '*[_type == "statisticsSection"][0]'
    );
    if (existingStats && !forceUpdate) {
      console.log("⚠️ Statistics section already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating Statistics Section...");
      await client.createOrReplace(contentData.statisticsSection);
      console.log("✅ Statistics Section created/updated successfully");
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

    // Seed About Page
    console.log("\n📄 Seeding About Page...");
    const existingAboutPage = await client.fetch('*[_type == "aboutPage"][0]');
    if (existingAboutPage && !forceUpdate) {
      console.log("⚠️ About Page already exists. Skipping...");
    } else {
      console.log("🔄 Creating/updating About Page...");
      await client.createOrReplace(contentData.aboutPage);
      console.log("✅ About Page created/updated successfully");
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
