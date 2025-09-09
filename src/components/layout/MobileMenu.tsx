"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
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

export function MobileMenu({
  isOpen,
  onClose,
  navItems,
  ctaButton,
}: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (itemId: string) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            onClick={onClose}
          />

          {/* Mobile Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[9999] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation Items */}
            <nav className="p-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.type === "link" ? (
                    <a
                      href={item.url}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={onClose}
                    >
                      {item.title}
                    </a>
                  ) : item.type === "dropdown" ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.id)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span>{item.title}</span>
                        <motion.div
                          animate={{
                            rotate: openDropdown === item.id ? 90 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.id && item.dropdownItems && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-2 space-y-1">
                              {item.dropdownItems.map((dropdownItem) => (
                                <a
                                  key={dropdownItem.id}
                                  href={dropdownItem.url}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                                  onClick={onClose}
                                >
                                  {dropdownItem.title}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item.type === "megamenu" ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.id)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span>{item.title}</span>
                        <motion.div
                          animate={{
                            rotate: openDropdown === item.id ? 90 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.id && item.megaMenuContent && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-2 space-y-3">
                              <h3 className="text-sm font-medium text-gray-900 px-4 py-2">
                                {item.megaMenuContent.title}
                              </h3>
                              {item.megaMenuContent.sections.map((section) => (
                                <a
                                  key={section.id}
                                  href={`/${section.id}`}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                                  onClick={onClose}
                                >
                                  <div className="font-medium">
                                    {section.title}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {section.description}
                                  </div>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="p-6 border-t border-gray-200">
              <Button
                asChild
                variant="default"
                size="lg"
                className="w-full rounded-xs font-medium"
              >
                <a href={ctaButton.url} onClick={onClose}>
                  {ctaButton.text}
                </a>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
