import { NextRequest, NextResponse } from "next/server";
import { sendInsightRequestEmail } from "@/lib/email";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface InsightRequestFormData {
  name: string;
  email: string;
  phone?: string;
  profession: string;
  insightTitle: string;
  insightId: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: InsightRequestFormData = await request.json();
    const { name, email, phone, profession, insightTitle, insightId } = body;

    // Fetch logo data from Sanity
    const siteSettings = await client.fetch(`*[_type == "siteSettings"][0] {
      logo {
        asset->{
          url
        },
        alt
      }
    }`);

    // Prepare logo data for email
    const logoData = siteSettings?.logo?.asset?.url
      ? {
          src: urlFor(siteSettings.logo).url(),
          alt: siteSettings.logo.alt || "Onterra Capital",
        }
      : undefined;

    // Validate required fields
    if (!name || !email || !profession || !insightTitle) {
      return NextResponse.json(
        { error: "Name, email, profession, and insight title are required" },
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

    // Validate name length
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    // Send email notification to Onterra team
    await sendInsightRequestEmail(
      {
        name,
        email,
        phone,
        profession,
        insightTitle,
        insightId,
      },
      logoData
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Our team will share the report with you shortly.",
      },
      { status: 200 }
    );
  } catch (_) {
    return NextResponse.json(
      {
        error:
          "Sorry, there was an error processing your request. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}

// Handle preflight requests
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
