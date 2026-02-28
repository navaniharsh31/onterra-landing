import { NextRequest, NextResponse } from "next/server";
import { sendInsightRequestEmail, sendInsightPdfToUser } from "@/lib/email";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface InsightRequestFormData {
  name: string;
  organisation: string;
  designation: string;
  email: string;
  city: string;
  insightTitle: string;
  insightId: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: InsightRequestFormData = await request.json();
    const { name, organisation, designation, email, city, insightTitle, insightId } = body;

    // Validate required fields
    if (!name || !organisation || !designation || !email || !city || !insightTitle) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Fetch logo + PDF data from Sanity in parallel
    const [siteSettings, insightData] = await Promise.all([
      client.fetch(`*[_type == "siteSettings"][0] {
        logo {
          asset->{
            url
          },
          alt
        }
      }`),
      insightId
        ? client.fetch(
            `*[_type == "insightPdf" && _id == $id][0]{
              title,
              pdfFile { asset->{ url, originalFilename } }
            }`,
            { id: insightId }
          )
        : null,
    ]);

    // Prepare logo data for email
    const logoData = siteSettings?.logo?.asset?.url
      ? {
          src: urlFor(siteSettings.logo).url(),
          alt: siteSettings.logo.alt || "Onterra Capital",
        }
      : undefined;

    // Download the PDF buffer from Sanity CDN
    let pdfBuffer: Buffer | null = null;
    let pdfFilename: string | null = null;

    if (insightData?.pdfFile?.asset?.url) {
      const pdfUrl = insightData.pdfFile.asset.url;
      // Use original filename if available, otherwise use insight title
      pdfFilename =
        insightData.pdfFile.asset.originalFilename ||
        `${insightData.title || insightTitle}.pdf`;

      // Ensure filename ends with .pdf
      if (pdfFilename && !pdfFilename.toLowerCase().endsWith(".pdf")) {
        pdfFilename += ".pdf";
      }

      const pdfResponse = await fetch(pdfUrl);
      if (pdfResponse.ok) {
        const arrayBuffer = await pdfResponse.arrayBuffer();
        pdfBuffer = Buffer.from(arrayBuffer);
      }
    }

    // Send both emails in parallel:
    // 1. Notification to Onterra team (always)
    // 2. PDF delivery to user (if PDF available)
    const emailPromises: Promise<void>[] = [
      sendInsightRequestEmail(
        { name, organisation, designation, email, city, insightTitle, insightId },
        logoData
      ),
    ];

    if (pdfBuffer && pdfFilename) {
      emailPromises.push(
        sendInsightPdfToUser(
          { name, email, insightTitle },
          { buffer: pdfBuffer, filename: pdfFilename },
          logoData
        )
      );
    }

    await Promise.all(emailPromises);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! The report has been sent to your email.",
      },
      { status: 200 }
    );
  } catch (_) {
    return NextResponse.json(
      {
        error: "Sorry, there was an error processing your request. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
