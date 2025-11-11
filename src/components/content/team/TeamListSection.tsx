"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { TeamMemberListItem } from "./TeamMemberListItem";
import { TeamMemberDetailModal } from "./TeamMemberDetailModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  // Calculate the center member index for initial carousel position
  const centerMemberIndex = Math.floor(teamMembers.length / 2);

  // Calculate start index to center the carousel on the center member
  // For 3 visible cards, we want the center member to be in the middle card
  const startIndex = Math.max(0, centerMemberIndex - 1);

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Team Members Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
            startIndex: startIndex,
          }}
          className="w-full overflow-visible"
        >
          <CarouselContent className="-ml-4 flex items-stretch py-2 overflow-visible">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={member._id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 flex"
              >
                <div className="w-full px-1">
                  <TeamMemberListItem
                    member={member}
                    onViewDetails={handleViewDetails}
                    index={index}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 bg-navy-600 hover:bg-navy-700 text-white border-navy-600 hover:border-navy-700 shadow-lg size-8 sm:size-10" />
          <CarouselNext className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 bg-navy-600 hover:bg-navy-700 text-white border-navy-600 hover:border-navy-700 shadow-lg size-8 sm:size-10" />
        </Carousel>
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
