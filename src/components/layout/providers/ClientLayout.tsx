"use client";

import { usePathname } from "next/navigation";
import { MobileMenuProvider } from "./MobileMenuProvider";
import { Header } from "../navigation/Header";
import { Footer } from "../footer/Footer";

interface ClientLayoutProps {
  children: React.ReactNode;
  layoutData?: any;
}

export function ClientLayout({ children, layoutData }: ClientLayoutProps) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  // If we're on the studio route, just render children without header/footer
  if (isStudio) {
    return <>{children}</>;
  }

  // For all other routes, render with header and footer
  return (
    <MobileMenuProvider
      siteSettings={layoutData?.siteSettings}
      navigation={layoutData?.navigation}
    >
      <Header
        siteSettings={layoutData?.siteSettings}
        navigation={layoutData?.navigation}
      />
      <main className="relative">{children}</main>
      <Footer
        siteSettings={layoutData?.siteSettings}
        navigation={layoutData?.navigation}
        contactDetails={layoutData?.contactDetails}
        socialLinks={layoutData?.socialLinks}
      />
    </MobileMenuProvider>
  );
}
