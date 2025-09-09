import { TeamSection } from "@/components/content/team/TeamSection";
import { AboutHero } from "@/components/content/about/AboutHero";
import { getAboutPageData } from "@/lib/sanity/queries";

// Note: Metadata is handled by the layout.tsx file for SEO

export default async function AboutPage() {
  const aboutData = await getAboutPageData();
  return (
    <div className="min-h-screen">
      {/* Page Header Section */}
      <AboutHero heroData={aboutData.aboutPage?.hero} />

      {/* Team Section */}
      <TeamSection teamMembers={aboutData.teamMembers} />
    </div>
  );
}
