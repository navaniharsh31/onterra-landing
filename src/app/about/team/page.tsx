import { TeamListSection } from "@/components/content/team/TeamListSection";
import { AboutHero } from "@/components/content/about/AboutHero";
import { StatisticsSection } from "@/components/content/statistics/StatisticsSection";
import { getTeamPageData, getLayoutData } from "@/lib/sanity/queries";
import { generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const [{ teamPage }, { siteSettings }] = await Promise.all([
    getTeamPageData(),
    getLayoutData(),
  ]);

  return generateSEOMetadata({
    siteWideSEO: siteSettings?.seo || {},
    pageSEO: teamPage?.seo,
    pageTitle: "Our Team",
    pageDescription:
      "Meet the experienced professionals behind Onterra Capital's success, combining decades of real estate expertise with innovative strategies.",
  });
}

export default async function TeamPage() {
  const { teamPage, teamMembers } = await getTeamPageData();

  // Use Sanity data or fallback
  const heroData = teamPage?.hero || {
    title: "Our Team",
    description:
      "Onward with real discipline, real returns - and the team that makes it happen.",
  };

  // Use Sanity data or fallback for detail view settings
  const detailViewSettings = teamPage?.detailViewSettings || {
    enableDetailView: true,
    detailViewTitle: "Team Member Details",
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Team-specific Hero Section */}
      <AboutHero heroData={heroData} />

      {/* Team Section with new list view */}
      <TeamListSection
        teamMembers={teamMembers}
        detailViewSettings={detailViewSettings}
      />
      {teamPage?.statistics && (
        <StatisticsSection content={teamPage.statistics} />
      )}
    </div>
  );
}
