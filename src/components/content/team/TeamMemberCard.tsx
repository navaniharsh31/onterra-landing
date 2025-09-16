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
  isFullWidth?: boolean;
}

export function TeamMemberCard({
  member,
  className,
  isFullWidth = true,
}: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full", className)}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Container - Enhanced and Larger */}
        <div className="relative w-full lg:w-96 h-80 lg:h-96 overflow-hidden">
          {member.image?.asset?.url ? (
            <Image
              src={member.image.asset.url}
              alt={member.image?.alt || member.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-100">
              <div className="text-slate-400 text-6xl font-light">
                {member.name?.charAt(0) || "?"}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 py-4">
          {/* Name and Title */}
          <div className="mb-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-2">
              {member.name}
            </h3>
            <p className="text-slate-600 font-medium text-lg">{member.title}</p>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
              Biography
            </h4>
            <p className="text-slate-600 text-base leading-relaxed">
              {member.bio}
            </p>
          </div>

          {/* Career Highlights */}
          {member.careerHighlights && member.careerHighlights.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                Career Highlights
              </h4>
              <div className="space-y-3">
                {member.careerHighlights.map((highlight, index) => (
                  <div key={index} className="border-l-2 border-slate-300 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <span className="text-slate-900 font-medium text-base">
                        {highlight.role}
                      </span>
                      <span className="text-slate-500 text-sm font-medium">
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
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                Education
              </h4>
              <ul className="space-y-1">
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
              <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                Certifications & Memberships
              </h4>
              <ul className="space-y-1">
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
    </motion.div>
  );
}
