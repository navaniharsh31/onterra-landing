import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { QueryProvider } from "@/components/layout/providers/QueryProvider";
import { ClientLayout } from "@/components/layout/providers/ClientLayout";
import { getLayoutData } from "@/lib/sanity/queries";
import { generateSEOMetadata } from "@/lib/seo";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

// Revalidate layout data every 60 seconds
export const revalidate = 60;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"], // Specify subsets for smaller bundle size
  weight: ["400", "700"], // Specify desired weights
  display: "swap", // Recommended for better performance
});

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings } = await getLayoutData();

  return generateSEOMetadata({
    siteWideSEO: siteSettings?.seo || {},
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch layout data server-side
  const layoutData = await getLayoutData();
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        <QueryProvider>
          <SanityLive />
          <ClientLayout layoutData={layoutData}>{children}</ClientLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
