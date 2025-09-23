"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavItem } from "./NavItem";

interface NavigationItem {
  id: string;
  title: string;
  type: "link" | "dropdown" | "megamenu";
  url?: string;
  dropdownItems?: Array<{
    id: string;
    title: string;
    url: string;
  }>;
  megaMenuContent?: {
    title: string;
    sections: Array<{
      id: string;
      title: string;
      description: string;
      image?: string;
    }>;
  };
}

interface NavigationProps {
  navItems: NavigationItem[];
  isScrolled: boolean;
  className?: string;
}

export function Navigation({
  navItems,
  isScrolled,
  className,
}: NavigationProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setActiveMenu(null);
    // Clear any pending hover timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, [pathname]);

  // Cleanup hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMenuEnter = (itemId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveMenu(itemId);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 300); // 300ms delay for better UX
    hoverTimeoutRef.current = timeout;
  };

  const handleMenuStay = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  return (
    <nav className={cn("flex items-center space-x-1", className)}>
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          isActive={activeMenu === item.id}
          isScrolled={isScrolled}
          onMenuEnter={() => handleMenuEnter(item.id)}
          onMenuLeave={handleMenuLeave}
          onMenuStay={handleMenuStay}
        />
      ))}
    </nav>
  );
}
