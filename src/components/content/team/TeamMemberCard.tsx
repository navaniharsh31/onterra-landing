"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CareerHighlight {
  period: string;
  role: string;
  description: string;
}

interface TeamMemberCardProps {
  member: {
    _id: string;
    name: string;
    title: string;
    image: {
      asset: {
        url: string;
      };
      alt: string;
    };
    bio: string;
    education: string[];
    careerHighlights: CareerHighlight[];
    certifications: string[];
  };
  className?: string;
}

export function TeamMemberCard({ member, className }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-xs bg-white/95 backdrop-blur-xl border border-slate-200/60 hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {/* Premium Glass Morphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-slate-50/95 backdrop-blur-xl" />

      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-50/20 to-slate-100/30" />

      {/* Sophisticated Border Treatment */}
      <div className="absolute inset-0 ring-1 ring-inset ring-slate-200/40 rounded-xs" />

      {/* Professional Accent Points */}
      <div className="absolute top-3 right-3 w-1 h-1 bg-navy-500/60 rounded-full blur-[0.5px]" />
      <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-slate-400/40 rounded-full blur-[0.5px]" />

      {/* Premium Edge Highlights */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-300/40 to-transparent" />

      <div className="relative z-10 flex flex-col lg:flex-row">
        {/* Image Container - Left Side */}
        <div className="relative w-full lg:w-80 h-56 lg:h-72 overflow-hidden bg-slate-200">
          {member.image?.asset?.url ? (
            <Image
              src={member.image.asset.url}
              alt={member.image?.alt || member.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-200">
              <div className="text-slate-500 text-4xl font-light">
                {member.name?.charAt(0) || "?"}
              </div>
            </div>
          )}
          {/* Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content - Right Side */}
        <div className="flex-1 p-8 lg:p-10">
          {/* Name and Title */}
          <div className="mb-8">
            <h3 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-3 group-hover:text-navy-600 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-navy-600 font-medium text-lg">{member.title}</p>
          </div>

          {/* Full Bio */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-navy-600 mb-4 uppercase tracking-wide">
              Biography
            </h4>
            <p className="text-slate-600 text-base leading-relaxed">
              {member.bio}
            </p>
          </div>

          {/* Career Highlights */}
          {member.careerHighlights && member.careerHighlights.length > 0 && (
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-navy-600 mb-4 uppercase tracking-wide">
                Career Highlights
              </h4>
              <div className="space-y-4">
                {member.careerHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-mustard-400/50 pl-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <span className="text-slate-900 font-medium text-base">
                        {highlight.role}
                      </span>
                      <span className="text-mustard-600 text-sm font-medium">
                        {highlight.period}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {member.education && member.education.length > 0 && (
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-navy-600 mb-3 uppercase tracking-wide">
                Education
              </h4>
              <ul className="space-y-2">
                {member.education.map((edu, index) => (
                  <li key={index} className="text-slate-600 text-base">
                    • {edu}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {member.certifications && member.certifications.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-navy-600 mb-3 uppercase tracking-wide">
                Certifications & Memberships
              </h4>
              <ul className="space-y-2">
                {member.certifications.map((cert, index) => (
                  <li key={index} className="text-slate-600 text-base">
                    • {cert}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Sophisticated Professional Glow */}
      <div className="absolute -inset-2 bg-gradient-to-br from-navy-500/8 via-slate-200/5 to-slate-300/8 rounded-xs blur-xl -z-10 opacity-60" />

      {/* Premium Inner Shadow */}
      <div className="absolute inset-0 shadow-inner shadow-slate-200/20 rounded-xs pointer-events-none" />

      {/* Subtle Premium Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-slate-300 to-slate-400 rounded-xs mix-blend-overlay pointer-events-none" />
    </motion.div>
  );
}
