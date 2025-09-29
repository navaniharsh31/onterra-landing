import { AboutHero } from "@/components/content/about/AboutHero";
import { OverviewContent } from "@/components/content/about/OverviewContent";
import { getOverviewPageData, getLayoutData } from "@/lib/sanity/queries";
import { generateSEOMetadata } from "@/lib/seo";

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateMetadata() {
  const [{ overviewPage }, { siteSettings }] = await Promise.all([
    getOverviewPageData(),
    getLayoutData(),
  ]);

  return generateSEOMetadata({
    siteWideSEO: siteSettings?.seo || {},
    pageSEO: overviewPage?.seo,
    pageTitle: "Overview",
    pageDescription:
      "Learn about India's real estate transformation and the opportunities in the evolving market landscape.",
  });
}

export default async function OverviewPage() {
  const { overviewPage } = await getOverviewPageData();

  // Use Sanity data or fallback
  const heroData = overviewPage?.hero || {
    title: "Overview",
    description:
      "India's real estate is rapidly formalizing and institutionalizing- driven by RERA, developer consolidation, post-COVID housing momentum, GCC growth and REITs - on track to reach $1.5TN by 2034 (~10.5% of GDP) with financing shifting from sales-led models to structured build-and-lease and fractional platforms.",
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Page Header Section */}
      <AboutHero heroData={heroData} />

      {/* Overview Content */}
      <OverviewContent content={overviewPage} />
    </div>
  );
}
