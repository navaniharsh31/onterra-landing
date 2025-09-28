"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { TeamMemberListItem } from "./TeamMemberListItem";
import { TeamMemberDetailModal } from "./TeamMemberDetailModal";

interface TeamListSectionProps {
  teamMembers: any[];
  detailViewSettings: {
    enableDetailView: boolean;
    detailViewTitle: string;
  };
  className?: string;
}

export function TeamListSection({
  teamMembers,
  detailViewSettings,
  className,
}: TeamListSectionProps) {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Return null if no team members
  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  const handleViewDetails = (member: any) => {
    setSelectedMember(member);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedMember(null);
  };

  return (
    <section
      className={cn(
        "relative py-8 sm:py-12 lg:py-16 overflow-x-hidden",
        className
      )}
    >
      {/* Premium Light Background with Animated Orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50 overflow-hidden">
        {/* Optional Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(71,85,105,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(71,85,105,0.3) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Dynamic Bouncing Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%)",
          }}
          animate={{
            x: [
              "calc(10vw - 192px)",
              "calc(90vw - 192px)",
              "calc(90vw - 192px)",
              "calc(10vw - 192px)",
              "calc(10vw - 192px)",
            ],
            y: [
              "calc(10vh - 192px)",
              "calc(10vh - 192px)",
              "calc(90vh - 192px)",
              "calc(90vh - 192px)",
              "calc(10vh - 192px)",
            ],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(100, 116, 139, 0.06) 0%, rgba(100, 116, 139, 0.03) 50%, transparent 70%)",
          }}
          animate={{
            x: [
              "calc(5vw - 160px)",
              "calc(50vw - 160px)",
              "calc(95vw - 160px)",
              "calc(50vw - 160px)",
              "calc(5vw - 160px)",
            ],
            y: [
              "calc(50vh - 160px)",
              "calc(5vh - 160px)",
              "calc(50vh - 160px)",
              "calc(95vh - 160px)",
              "calc(50vh - 160px)",
            ],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {teamMembers.map((member, index) => (
            <TeamMemberListItem
              key={member._id}
              member={member}
              onViewDetails={handleViewDetails}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {detailViewSettings.enableDetailView && (
        <TeamMemberDetailModal
          isOpen={isDetailOpen}
          onClose={handleCloseDetail}
          member={selectedMember}
        />
      )}
    </section>
  );
}
