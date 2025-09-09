"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { MobileMenu } from "../navigation/MobileMenu";

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
  siteSettings?: any;
  navigation?: any;
}

export function MobileMenuProvider({
  children,
  siteSettings,
  navigation,
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
        siteSettings={siteSettings}
        navigation={navigation}
      />
    </MobileMenuContext.Provider>
  );
}
