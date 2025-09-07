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

  onterraStandards: {
    _type: "onterraStandards",
    _id: "onterra-standards-main",
    sectionTitle: "Onterra Standards",
    subtitle: "Rooted in Discipline",
    principles: [
      {
        title: "Due Diligence",
        description: "Comprehensive analysis of every investment opportunity",
        points: [
          "Market research and analysis",
          "Financial modeling and projections",
          "Risk assessment and mitigation",
        ],
        icon: {
          type: "iconify",
          value: "mdi:chart-line",
        },
      },
      {
        title: "Transparency",
        description: "Clear communication and honest reporting",
        points: [
          "Regular performance updates",
          "Transparent fee structure",
          "Open communication channels",
        ],
        icon: {
          type: "iconify",
          value: "mdi:eye",
        },
      },
      {
        title: "Risk Management",
        description: "Protecting capital through strategic planning",
        points: [
          "Diversified portfolio approach",
          "Conservative underwriting standards",
          "Continuous monitoring and adjustment",
        ],
        icon: {
          type: "iconify",
          value: "mdi:shield-check",
        },
      },
      {
        title: "Long-term Vision",
        description: "Building sustainable wealth over time",
        points: [
          "Multi-generational wealth building",
          "Market cycle awareness",
          "Patient capital deployment",
        ],
        icon: {
          type: "iconify",
          value: "mdi:timeline-clock",
        },
      },
      {
        title: "Innovation",
        description: "Leveraging technology and modern strategies",
        points: [
          "Data-driven decision making",
          "Technology integration",
          "Process optimization",
        ],
        icon: {
          type: "iconify",
          value: "mdi:lightbulb",
        },
      },
      {
        title: "Partnership",
        description: "Collaborative approach with all stakeholders",
        points: [
          "Client-focused solutions",
          "Vendor relationships",
          "Community engagement",
        ],
        icon: {
          type: "iconify",
          value: "mdi:handshake",
        },
      },
    ],
  },

  investmentStrategies: {
    _type: "investmentStrategies",
    _id: "investment-strategies-main",
    sectionTitle: "Investment Strategies",
    sectionDescription:
      "Our comprehensive approach to real estate investment across residential and commercial markets, designed to maximize returns while managing risk.",
    categories: [
      {
        categoryName: "Residential",
        categoryDescription:
          "Single-family homes, multi-family properties, and residential developments",
        strategies: [
          {
            title: "Single-Family Rentals",
            description:
              "Acquisition and management of individual single-family homes for rental income. We focus on properties in high-demand areas with strong rental yields and appreciation potential. Our approach includes thorough market analysis, property evaluation, and tenant screening to ensure consistent cash flow.",
            highlights: [
              "Target properties in growing markets",
              "Professional property management",
              "Regular maintenance and upgrades",
              "Tenant retention programs",
            ],
            isExpandedByDefault: true,
          },
          {
            title: "Multi-Family Properties",
            description:
              "Investment in apartment buildings and duplexes to achieve economies of scale. We target properties with 2-50 units, focusing on value-add opportunities and operational improvements. This strategy provides diversified income streams and reduced vacancy risk.",
            highlights: [
              "Scalable investment model",
              "Reduced vacancy risk",
              "Professional management systems",
              "Value-add renovation opportunities",
            ],
            isExpandedByDefault: false,
          },
          {
            title: "Residential Development",
            description:
              "Ground-up development of residential communities and subdivisions. We work with experienced developers to create high-quality housing that meets market demand. This strategy offers higher returns but requires longer investment horizons.",
            highlights: [
              "Higher potential returns",
              "Market timing expertise",
              "Development partnerships",
              "Long-term appreciation focus",
            ],
            isExpandedByDefault: false,
          },
        ],
      },
      {
        categoryName: "Commercial",
        categoryDescription:
          "Office buildings, retail spaces, industrial properties, and mixed-use developments",
        strategies: [
          {
            title: "Office Buildings",
            description:
              "Investment in Class A and B office properties in prime locations. We focus on buildings with strong tenant profiles, long-term leases, and modern amenities. Our strategy includes active asset management to maintain high occupancy rates.",
            highlights: [
              "Long-term lease agreements",
              "Creditworthy tenants",
              "Prime location focus",
              "Professional asset management",
            ],
            isExpandedByDefault: true,
          },
          {
            title: "Retail Properties",
            description:
              "Investment in shopping centers, strip malls, and standalone retail buildings. We target properties with strong anchor tenants and high foot traffic. Our approach includes careful tenant mix planning and regular property improvements.",
            highlights: [
              "Anchor tenant stability",
              "High foot traffic locations",
              "Diverse tenant mix",
              "Regular property improvements",
            ],
            isExpandedByDefault: false,
          },
          {
            title: "Industrial Properties",
            description:
              "Investment in warehouses, distribution centers, and manufacturing facilities. We focus on properties with modern infrastructure, good transportation access, and flexible layouts. This asset class offers stable income and growth potential.",
            highlights: [
              "Modern infrastructure",
              "Transportation access",
              "Flexible space configurations",
              "E-commerce growth driver",
            ],
            isExpandedByDefault: false,
          },
        ],
      },
    ],
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

    const existingStandards = await client.fetch(
      '*[_type == "onterraStandards"][0]'
    );
    if (existingStandards) {
      console.log("⚠️  Onterra Standards section already exists. Skipping...");
    } else {
      console.log("🏛️  Creating Onterra Standards section...");
      await client.create(contentData.onterraStandards);
      console.log("✅ Onterra Standards section created successfully");
    }

    const existingStrategies = await client.fetch(
      '*[_type == "investmentStrategies"][0]'
    );
    if (existingStrategies) {
      console.log(
        "⚠️  Investment Strategies section already exists. Skipping..."
      );
    } else {
      console.log("💼 Creating Investment Strategies section...");
      await client.create(contentData.investmentStrategies);
      console.log("✅ Investment Strategies section created successfully");
    }

    console.log("\n🎉 Content seeding completed successfully!");
    console.log(
      "📱 Visit your Sanity Studio at http://localhost:3000/studio to view the content"
    );
    console.log(
      "🌐 Your homepage should now display the seeded content at http://localhost:3000"
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
