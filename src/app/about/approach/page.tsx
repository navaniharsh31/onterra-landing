import { AboutHero } from "@/components/content/about/AboutHero";
import { ApproachContent } from "@/components/content/about/ApproachContent";
import { getApproachPageData } from "@/lib/sanity/queries";

export default async function ApproachPage() {
  const { approachPage } = await getApproachPageData();

  // Use Sanity data or fallback
  const heroData = approachPage?.hero || {
    title: "Our Approach",
    description:
      "Onterra Capital is an independent, conflict-free and domestic real estate investment manager offering Indian family offices and various other investors early, aligned access to residential and commercial offices growth. We combine deep expertise across credit, equity and asset management with a disciplined and data-driven process.",
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Page Header Section */}
      <AboutHero heroData={heroData} />

      {/* Approach Content */}
      <ApproachContent content={approachPage} />
    </div>
  );
}
