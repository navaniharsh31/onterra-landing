import { InsightsHero } from "@/components/content/insights/InsightsHero";
import { InsightsListing } from "@/components/content/insights/InsightsListing";
import { getInsightsPageData, getLayoutData } from "@/lib/sanity/queries";
import { generateSEOMetadata } from "@/lib/seo";

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateMetadata() {
  const [{ insightsPage }, { siteSettings }] = await Promise.all([
    getInsightsPageData(),
    getLayoutData(),
  ]);

  return generateSEOMetadata({
    siteWideSEO: siteSettings?.seo || {},
    pageSEO: insightsPage?.seo,
    pageTitle: "Insights",
    pageDescription:
      "Data-led perspectives on residential and commercial real estate, buyer behaviour, capital flows, and our outlook for the future.",
  });
}

export default async function InsightsPage() {
  const { insightsPage, pdfs } = await getInsightsPageData();

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <InsightsHero heroData={insightsPage?.hero} />

      {/* Insights Listing with Year Tabs */}
      <InsightsListing pdfs={pdfs} />
    </div>
  );
}
