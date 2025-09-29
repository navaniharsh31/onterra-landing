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
      {/* Premium Light Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50" />

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
