"use client";

import { HeroSection } from "@/components/content/HeroSection";
import { StatisticsSection } from "@/components/content/StatisticsSection";
import { OnterraStandardsSectionNew } from "@/components/content/OnterraStandardsSectionNew";
import { InvestmentStrategiesSectionNew } from "@/components/content/InvestmentStrategiesSectionNew";
import { useHeroContent } from "@/hooks/useHeroContent";
import { useStatisticsContent } from "@/hooks/useStatisticsContent";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const {
    data: heroContent,
    isLoading: heroLoading,
    error: heroError,
  } = useHeroContent();
  const {
    data: statisticsContent,
    isLoading: statsLoading,
    error: statsError,
  } = useStatisticsContent();

  const isLoading = heroLoading || statsLoading;
  const hasError = heroError || statsError;

  if (isLoading) {
    return (
      <div className="min-h-screen">
        {/* Hero Section Loading */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <Skeleton className="h-12 w-96 mx-auto" />
            <Skeleton className="h-6 w-64 mx-auto" />
            <Skeleton className="h-10 w-32 mx-auto" />
          </div>
        </div>

        {/* Other Sections Loading */}
        <div className="space-y-16">
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Skeleton className="h-8 w-64 mx-auto mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (hasError || !heroContent) {
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

        {/* Fallback for other sections */}
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection content={heroContent} />

      {/* Statistics Section */}
      {statisticsContent && <StatisticsSection content={statisticsContent} />}

      {/* Onterra Standards Section */}
      <OnterraStandardsSectionNew />

      {/* Investment Strategies Section */}
      <InvestmentStrategiesSectionNew />
    </div>
  );
}
