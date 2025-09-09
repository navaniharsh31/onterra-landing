import { HeroSection } from "@/components/content/HeroSection";
import { StatisticsSection } from "@/components/content/StatisticsSection";
import { OnterraStandardsSectionNew } from "@/components/content/OnterraStandardsSectionNew";
import { InvestmentStrategiesSectionNew } from "@/components/content/InvestmentStrategiesSectionNew";
import { client } from "@/sanity/lib/client";

// Server-side data fetching queries
const heroQuery = `*[_type == "heroSection"][0] {
  staticText,
  rotatingText,
  lineDesign {
    enabled,
    color
  },
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
}`;

const statisticsQuery = `*[_type == "statisticsSection"][0] {
  title,
  statistics[] {
    value,
    label,
    suffix
  }
}`;

export default async function Home() {
  try {
    // Parallel server-side data fetching
    const [heroContent, statisticsContent] = await Promise.all([
      client.fetch(heroQuery),
      client.fetch(statisticsQuery),
    ]);

    return (
      <div className="min-h-screen">
        {/* Hero Section - Server rendered */}
        <HeroSection content={heroContent} />

        {/* Statistics Section - Server rendered */}
        {statisticsContent && <StatisticsSection content={statisticsContent} />}

        {/* Interactive Sections - Client rendered */}
        <InvestmentStrategiesSectionNew />
        <OnterraStandardsSectionNew />
      </div>
    );
  } catch (error) {
    console.error("Error fetching content:", error);

    // Fallback content on error
    return (
      <div className="min-h-screen">
        {/* Hero Section Fallback */}
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900">
          <div className="max-w-4xl flex items-center px-4 sm:px-6 lg:px-8">
            {/* Vertical Line Design */}
            <div className="w-1 bg-blue-500 mr-6 flex-shrink-0 h-24" />

            {/* Text Content */}
            <div className="flex-1 text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Building wealth through{" "}
                <span className="text-blue-400">strategic</span> real estate
                investments
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="#contact"
                  className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-white/90 transition-colors font-semibold"
                >
                  Get Started
                </a>
                <a
                  href="#about"
                  className="inline-block border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Error message */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Content Loading Error
            </h2>
            <p className="text-gray-600">
              Please check your Sanity configuration and try again.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
