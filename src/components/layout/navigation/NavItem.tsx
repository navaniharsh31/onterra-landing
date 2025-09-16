"use client";

import { cn } from "@/lib/utils";
import { DropdownMenu } from "./DropdownMenu";
import { MegaMenu } from "./MegaMenu";
import { ChevronDownIcon } from "lucide-react";

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
      url?: string;
    }>;
  };
}

interface NavItemProps {
  item: NavigationItem;
  isActive: boolean;
  isScrolled: boolean;
  onMenuEnter: () => void;
  onMenuLeave: () => void;
  onMenuStay: () => void;
  className?: string;
}

export function NavItem({
  item,
  isActive,
  isScrolled,
  onMenuEnter,
  onMenuLeave,
  onMenuStay,
  className,
}: NavItemProps) {
  const hasMenu = item.type === "dropdown" || item.type === "megamenu";

  const baseClasses = cn(
    "relative flex items-center space-x-1 px-3 py-2 rounded-xs text-sm font-medium tracking-wide transition-all duration-200",
    isScrolled
      ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100/80"
      : "text-white/90 hover:text-white hover:bg-white/10",
    isActive && "bg-white/10",
    className
  );

  if (item.type === "link") {
    return (
      <a href={item.url} className={baseClasses}>
        <span>{item.title}</span>
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={onMenuEnter}
      onMouseLeave={onMenuLeave}
    >
      <button className={baseClasses}>
        <span>{item.title}</span>
        {hasMenu && (
          <ChevronDownIcon
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isActive && "rotate-180"
            )}
          />
        )}
      </button>

      {/* Dropdown Menu */}
      {item.type === "dropdown" && isActive && item.dropdownItems && (
        <DropdownMenu items={item.dropdownItems} onMenuStay={onMenuStay} />
      )}

      {/* Mega Menu */}
      {item.type === "megamenu" && isActive && item.megaMenuContent && (
        <MegaMenu
          content={item.megaMenuContent}
          parentUrl={item.url}
          onMenuStay={onMenuStay}
        />
      )}
    </div>
  );
}
