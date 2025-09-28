"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CareerHighlight {
  period: string;
  role: string;
  description: string;
}

interface TeamMemberDetailViewProps {
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

export function TeamMemberDetailView({
  member,
  className,
}: TeamMemberDetailViewProps) {
  return (
    <div className={cn("p-4 sm:p-6 lg:p-8", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Container */}
          <div className="relative w-full lg:w-86 h-72 lg:h-96 overflow-hidden rounded-xs">
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
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 mb-2 tracking-tight">
                <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {member.name}
                </span>
              </h1>
              <p className="text-lg text-slate-600 font-medium">
                {member.title}
              </p>
            </div>

            {/* Biography */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Biography
              </h2>
              <p className="text-slate-600 leading-relaxed">{member.bio}</p>
            </div>

            {/* Education */}
            {member.education && member.education.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Education
                </h2>
                <ul className="space-y-2">
                  {member.education.map((edu, index) => (
                    <li key={index} className="text-slate-600">
                      • {edu}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Career Highlights */}
            {member.careerHighlights && member.careerHighlights.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Career Highlights
                </h2>
                <div className="space-y-6">
                  {member.careerHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-slate-200 pl-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-medium text-slate-900">
                          {highlight.role}
                        </h3>
                        <span className="text-sm text-slate-500 font-medium">
                          {highlight.period}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {member.certifications && member.certifications.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Certifications & Memberships
                </h2>
                <ul className="space-y-2">
                  {member.certifications.map((cert, index) => (
                    <li key={index} className="text-slate-600">
                      • {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
