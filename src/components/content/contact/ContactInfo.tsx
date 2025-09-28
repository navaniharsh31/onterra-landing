"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactInfoProps {
  className?: string;
  contactDetails?: {
    _id?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      zipCode?: string;
      country?: string;
    };
    phone?: string;
    email?: string;
    businessHours?: string;
  };
}

export function ContactInfo({ className, contactDetails }: ContactInfoProps) {
  // Return null if no contact details from Sanity
  if (!contactDetails) {
    return null;
  }

  const { email, phone, address } = contactDetails;

  // Format address from structured data
  const formatAddress = (addr: typeof address) => {
    if (!addr) return "";
    const parts = [
      addr.street,
      addr.city,
      addr.state,
      addr.zipCode,
      addr.country,
    ].filter(Boolean);
    return parts.join(", ");
  };

  const formattedAddress = formatAddress(address);

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: email ? `mailto:${email}` : undefined,
    },
    {
      icon: Phone,
      label: "Phone",
      value: phone,
      href: phone ? `tel:${phone}` : undefined,
    },
    {
      icon: MapPin,
      label: "Address",
      value: formattedAddress,
    },
  ];

  return (
    <motion.div
      className={cn("w-full", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xs p-8 border border-gray-200/20">
        <div className="mb-8">
          <h2 className="text-2xl font-light text-slate-900 mb-2">
            Get in touch
          </h2>
          <p className="text-slate-600">
            We&apos;re here to help you explore real estate investment
            opportunities.
          </p>
        </div>

        <div className="space-y-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-slate-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-slate-700 mb-1">
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors duration-200 break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-600 break-words">{item.value}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
