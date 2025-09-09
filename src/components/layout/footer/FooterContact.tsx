"use client";

import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail } from "lucide-react";
import { FooterSettings, formatAddress } from "@/hooks/useFooterContent";

interface FooterContactProps {
  settings: FooterSettings;
  className?: string;
}

export function FooterContact({ settings, className }: FooterContactProps) {
  const { contact } = settings;

  if (!contact) {
    return null;
  }

  return (
    <div className={cn("space-y-6", className)}>
      <h3 className="text-lg font-semibold text-white tracking-tight">
        Contact Us
      </h3>

      <div className="space-y-4">
        {/* Phone */}
        {contact.phone && (
          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-slate-300 text-sm">Phone</p>
              <a
                href={`tel:${contact.phone}`}
                className="text-white hover:text-slate-200 transition-colors duration-200"
              >
                {contact.phone}
              </a>
            </div>
          </div>
        )}

        {/* Email */}
        {contact.email && (
          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-slate-300 text-sm">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-white hover:text-slate-200 transition-colors duration-200"
              >
                {contact.email}
              </a>
            </div>
          </div>
        )}

        {/* Address */}
        {contact.address && (
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-slate-300 text-sm">Address</p>
              <p className="text-white leading-relaxed">
                {formatAddress(contact.address)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
