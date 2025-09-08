#!/usr/bin/env node

/**
 * Sanity Content Seeding Script
 *
 * This script populates your Sanity database with initial content
 * for the Onterra Real Estate Investment Firm homepage.
 *
 * Usage:
 * 1. Make sure your Sanity project is set up
 * 2. Run: node scripts/seed-content.js
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
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // You'll need to add this to your .env.local
});

// Sample content data
const contentData = {
  footerSettings: {
    _type: "footerSettings",
    _id: "footer-settings-main",
    title: "Footer Settings",
    company: {
      name: "Onterra Capital",
      tagline: "Your trusted partner in real estate investment opportunities",
      logo: null, // Will be set manually in Sanity Studio
    },
    contact: {
      address: {
        street: "1234 Investment Boulevard, Suite 500",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States",
      },
      phone: "+1 (555) 123-4567",
      email: "info@onterracapital.com",
      businessHours: "Monday - Friday, 9:00 AM - 6:00 PM EST",
    },
    socialMedia: [
      {
        platform: "linkedin",
        url: "https://linkedin.com/company/onterra-capital",
        label: "Follow Onterra Capital on LinkedIn",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/onterracapital",
        label: "Follow Onterra Capital on Twitter",
      },
      {
        platform: "youtube",
        url: "https://youtube.com/onterracapital",
        label: "Subscribe to Onterra Capital on YouTube",
      },
      {
        platform: "newsletter",
        url: "/newsletter",
        label: "Subscribe to our newsletter",
      },
    ],
    legal: {
      copyrightText: "© 2024 Onterra Capital. All rights reserved.",
      legalLinks: [
        {
          title: "Privacy Policy",
          url: "/privacy-policy",
        },
        {
          title: "Terms of Service",
          url: "/terms-of-service",
        },
        {
          title: "Investment Disclaimer",
          url: "/disclaimer",
        },
        {
          title: "Regulatory Information",
          url: "/regulatory",
        },
      ],
    },
    seo: {
      organizationSchema: true,
      foundingDate: "2010-01-15",
      industry: "Real Estate Investment",
    },
  },

  footerNavigation: {
    _type: "footerNavigation",
    _id: "footer-navigation-main",
    title: "Footer Navigation",
    linkSections: [
      {
        sectionTitle: "Company",
        sectionOrder: 1,
        links: [
          {
            title: "About Us",
            url: "/about",
            isExternal: false,
            description: "Learn about our company and mission",
            order: 1,
          },
          {
            title: "Our Team",
            url: "/team",
            isExternal: false,
            description: "Meet our experienced professionals",
            order: 2,
          },
          {
            title: "Careers",
            url: "/careers",
            isExternal: false,
            description: "Join our growing team",
            order: 3,
          },
          {
            title: "News & Updates",
            url: "/news",
            isExternal: false,
            description: "Latest company news and announcements",
            order: 4,
          },
        ],
      },
      {
        sectionTitle: "Services",
        sectionOrder: 2,
        links: [
          {
            title: "Investment Management",
            url: "/services/investment-management",
            isExternal: false,
            description: "Professional investment management services",
            order: 1,
          },
          {
            title: "Property Development",
            url: "/services/development",
            isExternal: false,
            description: "Real estate development projects",
            order: 2,
          },
          {
            title: "Portfolio Management",
            url: "/services/portfolio",
            isExternal: false,
            description: "Comprehensive portfolio management",
            order: 3,
          },
          {
            title: "Consultation",
            url: "/services/consultation",
            isExternal: false,
            description: "Expert real estate investment advice",
            order: 4,
          },
        ],
      },
      {
        sectionTitle: "Resources",
        sectionOrder: 3,
        links: [
          {
            title: "Market Reports",
            url: "/resources/reports",
            isExternal: false,
            description: "Comprehensive market analysis and reports",
            order: 1,
          },
          {
            title: "Investment Analysis",
            url: "/resources/analysis",
            isExternal: false,
            description: "Detailed investment opportunity analysis",
            order: 2,
          },
          {
            title: "Market Trends",
            url: "/resources/trends",
            isExternal: false,
            description: "Current real estate market trends",
            order: 3,
          },
          {
            title: "FAQ",
            url: "/faq",
            isExternal: false,
            description: "Frequently asked questions",
            order: 4,
          },
        ],
      },
      {
        sectionTitle: "Investors",
        sectionOrder: 4,
        links: [
          {
            title: "Investment Opportunities",
            url: "/investors/opportunities",
            isExternal: false,
            description: "Current investment opportunities",
            order: 1,
          },
          {
            title: "Investor Portal",
            url: "/investors/portal",
            isExternal: false,
            description: "Access your investor account",
            order: 2,
          },
          {
            title: "Performance Reports",
            url: "/investors/performance",
            isExternal: false,
            description: "Investment performance and returns",
            order: 3,
          },
          {
            title: "Contact Investor Relations",
            url: "/investors/contact",
            isExternal: false,
            description: "Get in touch with our investor relations team",
            order: 4,
          },
        ],
      },
    ],
    featuredCTA: {
      enabled: true,
      title: "Ready to Start Investing?",
      description:
        "Join thousands of investors who trust Onterra Capital with their real estate investments. Get started with a personalized consultation today.",
      buttonText: "Schedule Consultation",
      buttonUrl: "/contact",
      variant: "primary",
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
        value: "$2.5B",
        label: "Total Assets Under Management",
        suffix: "",
      },
      {
        value: "500+",
        label: "Successful Property Acquisitions",
        suffix: "",
      },
      {
        value: "15%",
        label: "Average Annual Returns",
        suffix: "",
      },
      {
        value: "98%",
        label: "Client Satisfaction Rate",
        suffix: "",
      },
    ],
  },

  onterraStandardsNew: {
    _type: "onterraStandardsNew",
    _id: "onterra-standards-new-main",
    sectionTitle: "Our Standards",
    description:
      "Rooted in discipline and built on decades of institutional experience, our standards guide every investment decision and client interaction. We maintain the highest levels of excellence through rigorous processes and unwavering commitment to our principles.",
    // Note: Central hub logo will need to be added manually in Sanity Studio
    principles: [
      {
        id: "alignment",
        title: "Alignment Without Conflicts",
        shortTitle: "Alignment Without Conflicts",
        description:
          "We ensure complete alignment between our interests and our investors' interests, eliminating conflicts and ensuring transparent decision-making.",
        points: [
          "No hidden fees or conflicts of interest",
          "Transparent fee structure",
          "Investor-first decision making",
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
          "Exclusive real estate focus",
          "Complete investment lifecycle management",
          "Specialized expertise in property markets",
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
          "Comprehensive due diligence process",
          "Conservative underwriting standards",
          "Quality over quantity approach",
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
          "Transparent reporting and communication",
          "Honest assessment of opportunities and risks",
          "Regular investor updates and feedback",
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
          "Experienced investment team",
          "Specialized real estate expertise",
          "Focused investment strategy",
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
          "Long-term relationship focus",
          "Mutual benefit partnerships",
          "Trust-based collaboration",
        ],
        icon: "Handshake",
        position: 5,
      },
    ],
  },

  investmentStrategiesNew: {
    _type: "investmentStrategiesNew",
    _id: "investment-strategies-new-main",
    sectionTitle: "Investment Strategies",
    sectionDescription:
      "Our comprehensive approach to real estate investment spanning residential and commercial markets, designed to maximize returns while managing risk through diversified property portfolios.",
    strategies: [
      {
        id: "multi-family",
        title: "Multi-Family Properties",
        category: "residential",
        level: 0,
        index: 0,
        description:
          "Strategic investments in apartment complexes and multi-unit residential properties that provide stable cash flow through rental income. We focus on properties with strong fundamentals in growing markets with favorable demographic trends.",
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
        id: "single-family",
        title: "Single-Family Homes",
        category: "residential",
        level: 0,
        index: 1,
        description:
          "Carefully selected single-family rental properties in high-demand neighborhoods. Our strategy focuses on properties that attract quality tenants and offer strong appreciation potential through strategic improvements and market timing.",
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
        id: "student-housing",
        title: "Student Housing",
        category: "residential",
        level: 0,
        index: 2,
        description:
          "Purpose-built student accommodation near major universities and colleges. These properties benefit from consistent demand, higher rental rates per square foot, and long-term stability tied to educational institution growth.",
        keyPoints: [
          "Higher rental rates per square foot",
          "Consistent demand tied to university enrollment",
          "Parental guarantees reduce payment risk",
          "Opportunity for premium amenities and services",
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
        id: "office-buildings",
        title: "Office Buildings",
        category: "commercial",
        level: 3,
        index: 0,
        description:
          "Class A and B office buildings in central business districts and suburban office parks. We target buildings with stable tenant bases, modern amenities, and potential for rental growth through strategic capital improvements.",
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
        id: "retail-spaces",
        title: "Retail Spaces",
        category: "commercial",
        level: 3,
        index: 1,
        description:
          "Strategic retail investments in neighborhood shopping centers, strip malls, and standalone retail buildings. We focus on properties with strong demographics, high traffic counts, and tenants that provide essential services to local communities.",
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
          nodes: ["multi-family", "single-family", "student-housing"],
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
          childIds: ["office-buildings", "retail-spaces"],
          title: "Commercial Sectors",
        },
        {
          level: 3,
          nodes: ["office-buildings", "retail-spaces"],
          parentId: "commercial",
          title: "Investment Types",
        },
      ],
    },
  },
};

async function seedContent() {
  try {
    console.log("🌱 Starting content seeding process...\n");

    const forceUpdate = process.env.SANITY_FORCE_SEED === "true";

    // Check if content already exists
    const existingHero = await client.fetch('*[_type == "heroSection"][0]');
    if (existingHero && !forceUpdate) {
      console.log("⚠️  Hero section already exists. Skipping...");
    } else {
      if (existingHero && forceUpdate) {
        console.log("🔄 Updating existing hero section...");
        await client.createOrReplace(contentData.heroSection);
      } else {
        console.log("📝 Creating hero section...");
        await client.create(contentData.heroSection);
      }
      console.log("✅ Hero section created/updated successfully");
    }

    const existingStats = await client.fetch(
      '*[_type == "statisticsSection"][0]'
    );
    if (existingStats) {
      console.log("⚠️  Statistics section already exists. Skipping...");
    } else {
      console.log("📊 Creating statistics section...");
      await client.create(contentData.statisticsSection);
      console.log("✅ Statistics section created successfully");
    }

    const existingStandardsNew = await client.fetch(
      '*[_type == "onterraStandardsNew"][0]'
    );
    if (existingStandardsNew && !forceUpdate) {
      console.log(
        "⚠️  Onterra Standards (New) section already exists. Skipping..."
      );
    } else {
      if (existingStandardsNew && forceUpdate) {
        console.log("🔄 Updating existing Onterra Standards (New) section...");
        await client.createOrReplace(contentData.onterraStandardsNew);
      } else {
        console.log("🏛️  Creating Onterra Standards (New) section...");
        await client.create(contentData.onterraStandardsNew);
      }
      console.log(
        "✅ Onterra Standards (New) section created/updated successfully"
      );
    }

    const existingStrategiesNew = await client.fetch(
      '*[_type == "investmentStrategiesNew"][0]'
    );
    if (existingStrategiesNew && !forceUpdate) {
      console.log(
        "⚠️  Investment Strategies (New) section already exists. Skipping..."
      );
    } else {
      if (existingStrategiesNew && forceUpdate) {
        console.log(
          "🔄 Updating existing Investment Strategies (New) section..."
        );
        await client.createOrReplace(contentData.investmentStrategiesNew);
      } else {
        console.log("💼 Creating Investment Strategies (New) section...");
        await client.create(contentData.investmentStrategiesNew);
      }
      console.log(
        "✅ Investment Strategies (New) section created/updated successfully"
      );
    }

    // Seed Footer Settings
    const existingFooterSettings = await client.fetch(
      '*[_type == "footerSettings"][0]'
    );
    if (existingFooterSettings) {
      console.log("🔄 Updating existing Footer Settings...");
      await client.createOrReplace(contentData.footerSettings);
    } else {
      console.log("🦶 Creating Footer Settings...");
      await client.create(contentData.footerSettings);
    }
    console.log("✅ Footer Settings created/updated successfully");

    // Seed Footer Navigation
    const existingFooterNavigation = await client.fetch(
      '*[_type == "footerNavigation"][0]'
    );
    if (existingFooterNavigation) {
      console.log("🔄 Updating existing Footer Navigation...");
      await client.createOrReplace(contentData.footerNavigation);
    } else {
      console.log("🔗 Creating Footer Navigation...");
      await client.create(contentData.footerNavigation);
    }
    console.log("✅ Footer Navigation created/updated successfully");

    console.log("\n🎉 Content seeding completed successfully!");
    console.log(
      "📱 Visit your Sanity Studio at http://localhost:3000/studio to view the content"
    );
    console.log(
      "🌐 Your homepage should now display the seeded content at http://localhost:3000"
    );
    console.log("\n💡 Notes:");
    console.log("   📸 For the central hub logo in Onterra Standards:");
    console.log("      1. Upload a logo image through the Sanity Studio");
    console.log("      2. Edit the Onterra Standards (New Design) document");
    console.log("      3. Add the uploaded logo to the Central Hub section");
    console.log("   🦶 For the footer company logo:");
    console.log("      1. Upload a company logo through the Sanity Studio");
    console.log("      2. Edit the Footer Settings document");
    console.log("      3. Add the uploaded logo to the Company section");
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
