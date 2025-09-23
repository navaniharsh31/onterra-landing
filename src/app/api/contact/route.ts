import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, sendAutoReplyEmail } from "@/lib/email";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, message } = body;

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
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
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

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long" },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: "Message must be less than 1000 characters" },
        { status: 400 }
      );
    }

    // Send email notification to Onterra team
    await sendContactEmail(
      {
        name,
        email,
        phone,
        message,
      },
      logoData
    );

    // Send auto-reply to user
    await sendAutoReplyEmail(email, name, logoData);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your message! We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (_) {
    return NextResponse.json(
      {
        error:
          "Sorry, there was an error sending your message. Please try again or contact us directly.",
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
