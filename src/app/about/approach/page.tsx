import { AboutHero } from "@/components/content/about/AboutHero";
import { ApproachContent } from "@/components/content/about/ApproachContent";
import { getApproachPageData, getLayoutData } from "@/lib/sanity/queries";
import { generateSEOMetadata } from "@/lib/seo";

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateMetadata() {
  const [{ approachPage }, { siteSettings }] = await Promise.all([
    getApproachPageData(),
    getLayoutData(),
  ]);

  return generateSEOMetadata({
    siteWideSEO: siteSettings?.seo || {},
    pageSEO: approachPage?.seo,
    pageTitle: "Our Approach",
    pageDescription:
      "Discover Onterra Capital's independent, conflict-free approach to real estate investment with deep expertise and disciplined processes.",
  });
}

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
