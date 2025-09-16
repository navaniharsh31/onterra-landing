"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { FooterSettings } from "@/hooks/useFooterContent";

interface FooterBrandProps {
  settings: FooterSettings;
  className?: string;
}

export function FooterBrand({ settings, className }: FooterBrandProps) {
  const { company } = settings;

  if (!company) {
    return null;
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Logo */}
      {settings.logo?.asset?.url ? (
        <div className="relative h-12 w-auto">
          <Image
            src={settings.logo.asset.url}
            alt={settings.logo.alt || settings.siteTitle}
            fill
            className="object-contain object-left brightness-0 invert"
            priority
          />
        </div>
      ) : (
        <h2 className="text-2xl font-bold text-white tracking-tight">
          {settings.siteTitle}
        </h2>
      )}

      {/* Company Description */}
      <p className="text-slate-300 leading-relaxed max-w-sm">
        {company.description}
      </p>

      {/* Tagline */}
      <p className="text-sm text-slate-400 font-light">
        {settings.siteDescription}
      </p>
    </div>
  );
}
