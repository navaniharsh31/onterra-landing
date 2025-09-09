import { TeamSection } from "@/components/content/team/TeamSection";
import { AboutHero } from "@/components/content/about/AboutHero";
import { StatisticsSection } from "@/components/content/statistics/StatisticsSection";
import { getAboutPageData } from "@/lib/sanity/queries";
const { client } = await import("@/sanity/lib/client");
const { queries } = await import("@/lib/sanity/queries");

// Note: Metadata is handled by the layout.tsx file for SEO

export default async function AboutPage() {
  const aboutData = await getAboutPageData();

  // Fetch statistics data
  const statistics = await client.fetch(queries.statistics);

  return (
    <div className="min-h-screen">
      {/* Page Header Section */}
      <AboutHero heroData={aboutData.aboutPage?.hero} />

      {/* Statistics Section */}

      {/* Team Section */}
      <TeamSection teamMembers={aboutData.teamMembers} />
      {statistics && (
        <StatisticsSection
          content={statistics}
          className="bg-gradient-to-br from-slate-50 via-white to-slate-50"
        />
      )}
    </div>
  );
}
