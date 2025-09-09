import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { MobileMenuProvider } from "@/components/providers/MobileMenuProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Navigation data
const navData = {
  navItems: [
    {
      id: "home",
      title: "Home",
      type: "link" as const,
      url: "/",
    },
    {
      id: "about",
      title: "About Us",
      type: "megamenu" as const,
      megaMenuContent: {
        title: "About Us",
        sections: [
          {
            id: "story",
            title: "Our Story",
            description:
              "Learn about our journey and mission in real estate investment. We've been building wealth through strategic investments for over two decades.",
            image: "/about-story.jpg",
          },
          {
            id: "team",
            title: "Our Team",
            description:
              "Meet the experienced professionals behind our success. Our team combines decades of real estate expertise with innovative investment strategies.",
            image: "/about-team.jpg",
          },
          {
            id: "values",
            title: "Our Values",
            description:
              "Discover the principles that guide our investment decisions. We believe in transparency, integrity, and delivering exceptional returns for our investors.",
            image: "/about-values.jpg",
          },
        ],
      },
    },
    {
      id: "services",
      title: "Services",
      type: "dropdown" as const,
      dropdownItems: [
        {
          id: "investment",
          title: "Investment Management",
          url: "/services/investment",
        },
        {
          id: "development",
          title: "Property Development",
          url: "/services/development",
        },
        {
          id: "consultation",
          title: "Consultation",
          url: "/services/consultation",
        },
        {
          id: "portfolio",
          title: "Portfolio Management",
          url: "/services/portfolio",
        },
      ],
    },
    {
      id: "properties",
      title: "Properties",
      type: "link" as const,
      url: "/properties",
    },
    {
      id: "insights",
      title: "Market Insights",
      type: "dropdown" as const,
      dropdownItems: [
        { id: "reports", title: "Market Reports", url: "/insights/reports" },
        {
          id: "analysis",
          title: "Investment Analysis",
          url: "/insights/analysis",
        },
        { id: "trends", title: "Market Trends", url: "/insights/trends" },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      type: "link" as const,
      url: "/contact",
    },
  ],
  ctaButton: {
    text: "Get Started",
    url: "/contact",
    variant: "primary" as const,
  },
};

export const metadata: Metadata = {
  title: "Onterra - Real Estate Investment Firm",
  description: "Your trusted partner in real estate investment opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <QueryProvider>
          <MobileMenuProvider
            navItems={navData.navItems}
            ctaButton={navData.ctaButton}
          >
            <Header navItems={navData.navItems} ctaButton={navData.ctaButton} />
            <main className="relative">{children}</main>
            <Footer />
          </MobileMenuProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
