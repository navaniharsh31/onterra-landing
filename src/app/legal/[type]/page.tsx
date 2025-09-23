import { notFound } from "next/navigation";
import { LegalHero } from "@/components/content/legal/LegalHero";
import { LegalContent } from "@/components/content/legal/LegalContent";
import { getLegalPageData, getLayoutData } from "@/lib/sanity/queries";
import { generateSEOMetadata } from "@/lib/seo";

interface LegalPageProps {
  params: Promise<{
    type: string;
  }>;
}

// Valid legal page types
const validTypes = ["privacy-policy", "terms-conditions", "disclaimer"];

export async function generateMetadata({ params }: LegalPageProps) {
  const { type } = await params;
  const { legalPage } = await getLegalPageData(type);
  const { siteSettings } = await getLayoutData();

  if (!legalPage) {
    return {
      title: "Page Not Found",
      description: "The requested legal page could not be found.",
    };
  }

  return generateSEOMetadata({
    siteWideSEO: siteSettings?.seo || {},
    pageSEO: legalPage?.seo,
    pageTitle: legalPage.title,
    pageDescription: legalPage.description,
  });
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { type } = await params;

  // Validate the type parameter
  if (!validTypes.includes(type)) {
    notFound();
  }

  const { legalPage } = await getLegalPageData(type);

  // If no legal page found or not active, show 404
  if (!legalPage || !legalPage.isActive) {
    notFound();
  }

  // Use Sanity data or fallback
  const heroData = legalPage?.hero || {
    title: legalPage?.title || "Legal Page",
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Legal Page Hero Section */}
      <LegalHero
        title={heroData.title}
      />

      {/* Legal Content */}
      <LegalContent content={legalPage?.content} />
    </div>
  );
}

// Generate static params for valid legal page types
export async function generateStaticParams() {
  return validTypes.map((type) => ({
    type,
  }));
}
