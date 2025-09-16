import { TeamSection } from "@/components/content/team/TeamSection";
import { AboutHero } from "@/components/content/about/AboutHero";
import { getTeamPageData } from "@/lib/sanity/queries";

export const metadata = {
  title: "Our Team - Onterra Capital",
  description:
    "Meet the experienced professionals behind Onterra Capital's success, combining decades of real estate expertise with innovative strategies.",
};

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
