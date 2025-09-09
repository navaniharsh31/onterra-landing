import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/components/layout/providers/QueryProvider";
import { ClientLayout } from "@/components/layout/providers/ClientLayout";
import { getLayoutData } from "@/lib/sanity/queries";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Onterra - Real Estate Investment Firm",
  description: "Your trusted partner in real estate investment opportunities",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch layout data server-side
  const layoutData = await getLayoutData();

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <QueryProvider>
          <ClientLayout layoutData={layoutData}>{children}</ClientLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
