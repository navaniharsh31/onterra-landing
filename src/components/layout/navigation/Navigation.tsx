"use client";

import { useState } from "react";
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
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMenuEnter = (itemId: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveMenu(itemId);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 300); // 300ms delay for better UX
    setHoverTimeout(timeout);
  };

  const handleMenuStay = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
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
