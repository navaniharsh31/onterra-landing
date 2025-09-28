"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface TeamMemberListItemProps {
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
    briefDescription: string;
  };
  onViewDetails: (member: any) => void;
  index: number;
  className?: string;
}

export function TeamMemberListItem({
  member,
  onViewDetails,
  index,
  className,
}: TeamMemberListItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={cn(
        "group relative bg-white rounded-xs shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-pointer border border-slate-100 hover:border-slate-200",
        className
      )}
    >
      <div
        className="p-6 h-full flex flex-col"
        onClick={() => onViewDetails(member)}
      >
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-slate-100 group-hover:ring-slate-200 transition-colors duration-300">
            {member.image?.asset?.url ? (
              <Image
                src={member.image.asset.url}
                alt={member.image?.alt || member.name}
                fill
                className="object-cover object-center"
                sizes="160px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-100">
                <div className="text-slate-400 text-2xl font-light">
                  {member.name?.charAt(0) || "?"}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            {member.name}
          </h3>
          <p className="text-base text-slate-600 font-medium">{member.title}</p>
        </div>

        {/* Brief Description - Flexible content */}
        <div className="text-center mb-6 flex-1">
          <p className="text-base text-slate-600 leading-relaxed">
            {member.briefDescription}
          </p>
        </div>

        {/* View Full Detail Button - Always at bottom */}
        <div className="mt-auto">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(member);
            }}
            variant="outline"
            className="group/btn rounded-xs font-medium tracking-wide transition-all duration-300 border-slate-300 text-slate-700 group-hover:bg-navy-600 group-hover:text-white group-hover:border-navy-600 hover:bg-navy-600 hover:text-white hover:border-navy-600 cursor-pointer w-full"
          >
            View Full Detail
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
