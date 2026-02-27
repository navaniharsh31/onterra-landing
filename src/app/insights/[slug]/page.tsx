import { notFound } from "next/navigation";
import { InsightsHero } from "@/components/content/insights/InsightsHero";
import { InsightDetail } from "@/components/content/insights/InsightDetail";
import {
  getInsightBySlug,
  getInsightsPageData,
  getLayoutData,
} from "@/lib/sanity/queries";
import { generateSEOMetadata } from "@/lib/seo";
import { client } from "@/sanity/lib/client";

// Revalidate every 60 seconds
export const revalidate = 60;

// Generate static params for all active insights
export async function generateStaticParams() {
  const insights = await client.fetch(
    `*[_type == "insightPdf" && isActive == true]{ "slug": slug.current }`
  );

  return (insights || [])
    .filter((i: any) => i.slug)
    .map((i: any) => ({
      slug: i.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [{ insight }, { siteSettings }] = await Promise.all([
    getInsightBySlug(slug),
    getLayoutData(),
  ]);

  if (!insight) {
    return {
      title: "Insight Not Found",
    };
  }

  return generateSEOMetadata({
    siteWideSEO: siteSettings?.seo || {},
    pageSEO: insight?.seo,
    pageTitle: insight.title,
    pageDescription:
      insight.shortDescription ||
      "Onterra Capital market insight and analysis.",
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [{ insight }, { insightsPage }] = await Promise.all([
    getInsightBySlug(slug),
    getInsightsPageData(),
  ]);

  if (!insight) {
    notFound();
  }

  const formattedDate = new Date(insight.publishedDate).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long" }
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero — title + date, with breadcrumb back to /insights */}
      <InsightsHero
        heroData={{
          title: insight.title,
          description: formattedDate,
        }}
        breadcrumb={{
          label: "Insights",
          href: "/insights",
        }}
      />

      {/* Content + Form */}
      <InsightDetail
        insight={insight}
        formSettings={insightsPage?.formSettings}
      />
    </div>
  );
}
