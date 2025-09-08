"use client";

import { cn } from "@/lib/utils";
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

  const formattedAddress = formatAddress(contact.address);

  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-lg font-semibold text-white tracking-tight">
        Contact
      </h3>

      <div className="space-y-3 text-slate-400">
        {/* Address */}
        {formattedAddress && (
          <div className="flex items-start space-x-3">
            <svg
              className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <address className="not-italic text-sm leading-relaxed">
              {contact.address?.street && <div>{contact.address.street}</div>}
              {(contact.address?.city ||
                contact.address?.state ||
                contact.address?.zipCode) && (
                <div>
                  {[
                    contact.address.city,
                    contact.address.state,
                    contact.address.zipCode,
                  ]
                    .filter(Boolean)
                    .join(", ")}
                </div>
              )}
              {contact.address?.country && <div>{contact.address.country}</div>}
            </address>
          </div>
        )}

        {/* Phone */}
        {contact.phone && (
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-slate-500 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a
              href={`tel:${contact.phone}`}
              className="text-sm hover:text-white transition-colors duration-200"
            >
              {contact.phone}
            </a>
          </div>
        )}

        {/* Email */}
        {contact.email && (
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-slate-500 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm hover:text-white transition-colors duration-200"
            >
              {contact.email}
            </a>
          </div>
        )}

        {/* Business Hours */}
        {contact.businessHours && (
          <div className="flex items-start space-x-3">
            <svg
              className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm leading-relaxed">
              {contact.businessHours}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
