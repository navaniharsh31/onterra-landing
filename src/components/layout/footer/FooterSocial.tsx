"use client";

import { cn } from "@/lib/utils";
import { FooterSettings } from "@/hooks/useFooterContent";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  ExternalLink,
} from "lucide-react";

interface FooterSocialProps {
  settings: FooterSettings;
  className?: string;
}

const SocialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  newsletter: Mail,
  default: ExternalLink,
};

export function FooterSocial({ settings, className }: FooterSocialProps) {
  const { socialMedia } = settings;

  if (!socialMedia || !Array.isArray(socialMedia) || socialMedia.length === 0) {
    return null;
  }

  return (
    <div className={cn("space-y-6", className)}>
      <h3 className="text-lg font-semibold text-white tracking-tight">
        Follow Us
      </h3>

      <div className="flex flex-wrap gap-3">
        {socialMedia.map((social: any) => {
          const IconComponent =
            SocialIcons[social.platform as keyof typeof SocialIcons];

          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200"
              aria-label={social.label || `Follow us on ${social.platform}`}
            >
              {IconComponent ? (
                <IconComponent className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors duration-200" />
              ) : (
                <ExternalLink className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors duration-200" />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
