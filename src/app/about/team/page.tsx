import { TeamSection } from "@/components/content/team/TeamSection";
import { AboutHero } from "@/components/content/about/AboutHero";
import { getTeamPageData } from "@/lib/sanity/queries";

export default async function TeamPage() {
  const { teamPage, teamMembers } = await getTeamPageData();

  // Use Sanity data or fallback
  const heroData = teamPage?.hero || {
    title: "Our Team",
    description:
      "Onward with real discipline, real returns - and the team that makes it happen.",
  };

  return (
    <div className="min-h-screen">
      {/* Team-specific Hero Section */}
      <AboutHero heroData={heroData} />

      {/* Team Section - No title/subtitle */}
      <TeamSection teamMembers={teamMembers} />
    </div>
  );
}
