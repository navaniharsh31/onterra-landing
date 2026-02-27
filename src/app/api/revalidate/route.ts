import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, type, slug } = body;
    // Verify the secret to prevent unauthorized revalidation
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    console.log("🔄 Revalidating content:", { type, slug });

    // Revalidate based on content type
    switch (type) {
      case "siteSettings":
      case "navigation":
      case "contactDetails":
      case "socialLinks":
        // Revalidate all pages for global content changes
        revalidatePath("/", "layout");
        revalidatePath("/about/overview");
        revalidatePath("/about/approach");
        revalidatePath("/about/team");
        revalidatePath("/contact");
        revalidateTag("layout-data");
        break;

      case "heroSection":
      case "homeIntroSection":
      case "investmentStrategies":
      case "onterraStandards":
        // Revalidate homepage for section changes
        revalidatePath("/");
        revalidateTag("homepage-data");
        break;

      case "overviewPage":
        revalidatePath("/about/overview");
        revalidateTag("overview-page");
        break;

      case "approachPage":
        revalidatePath("/about/approach");
        revalidateTag("approach-page");
        break;

      case "teamPage":
      case "teamMember":
        revalidatePath("/about/team");
        revalidateTag("team-data");
        break;

      case "contactPage":
        revalidatePath("/contact");
        revalidateTag("contact-page");
        break;

      case "legalPage":
        if (slug) {
          revalidatePath(`/legal/${slug}`);
        } else {
          revalidatePath("/legal");
        }
        revalidateTag("legal-pages");
        break;

      case "insightPdf":
        // Revalidate insights listing and individual pages
        revalidatePath("/insights");
        if (slug) {
          revalidatePath(`/insights/${slug}`);
        }
        revalidatePath("/", "layout");
        revalidateTag("insights-data");
        revalidateTag("pdf-data");
        break;

      case "insightsPage":
        // Revalidate insights page settings
        revalidatePath("/insights");
        revalidateTag("insights-data");
        break;

      default:
        // Fallback: revalidate all pages
        revalidatePath("/", "layout");
        revalidatePath("/about/overview");
        revalidatePath("/about/approach");
        revalidatePath("/about/team");
        revalidatePath("/contact");
        break;
    }

    console.log("✅ Revalidation completed successfully");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      type,
      slug,
    });
  } catch (err) {
    console.error("❌ Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
