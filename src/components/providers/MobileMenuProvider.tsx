"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { MobileMenu } from "@/components/layout/MobileMenu";

interface MobileMenuContextType {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
  undefined
);

export function useMobileMenu() {
  const context = useContext(MobileMenuContext);
  if (context === undefined) {
    throw new Error("useMobileMenu must be used within a MobileMenuProvider");
  }
  return context;
}

interface MobileMenuProviderProps {
  children: ReactNode;
  navItems: Array<{
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
        image: string;
      }>;
    };
  }>;
  ctaButton: {
    text: string;
    url: string;
    variant: "primary" | "secondary" | "outline";
  };
}

export function MobileMenuProvider({
  children,
  navItems,
  ctaButton,
}: MobileMenuProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <MobileMenuContext.Provider value={{ isOpen, openMenu, closeMenu }}>
      {children}
      <MobileMenu
        isOpen={isOpen}
        onClose={closeMenu}
        navItems={navItems}
        ctaButton={ctaButton}
      />
    </MobileMenuContext.Provider>
  );
}
