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

  return (
    <div className={cn("space-y-6", className)}>
      {/* Logo and Company Name */}
      <div className="space-y-4">
        {company.logo?.asset?.url ? (
          <div className="flex items-center space-x-3">
            <Image
              src={company.logo.asset.url}
              alt={company.logo.alt || company.name}
              width={160}
              height={40}
              className="h-8 w-auto brightness-0 invert opacity-90"
              priority
            />
          </div>
        ) : (
          <h2 className="text-2xl font-light text-white tracking-tight">
            {company.name}
          </h2>
        )}

        {company.tagline && (
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            {company.tagline}
          </p>
        )}
      </div>

      {/* Company Description */}
      <div className="space-y-4">
        <p className="text-slate-400 leading-relaxed">
          Your trusted partner in real estate investment opportunities. We
          specialize in identifying and developing premium investment properties
          that deliver exceptional returns for our clients.
        </p>

        {/* Professional Credentials */}
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span>Licensed Real Estate Firm</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            <span>SEC Registered</span>
          </span>
        </div>
      </div>
    </div>
  );
}
