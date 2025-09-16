"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { TeamMemberCard } from "./TeamMemberCard";
interface TeamSectionProps {
  className?: string;
  teamMembers?: any[];
}

export function TeamSection({ className, teamMembers }: TeamSectionProps) {
  // Return null if no team members
  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  return (
    <section className={cn("relative py-16 sm:py-20 lg:py-32", className)}>
      {/* Premium Light Background with Animated Orbs - EXACT SAME SYSTEM */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50">
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

        {/* Dynamic Bouncing Gradient Orbs - EXACT SAME SYSTEM */}

        {/* Blue Orb - EXTRA LARGE SIZE, VERY SUBTLE */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%)",
          }}
          animate={{
            x: [
              "calc(20vw - 192px)",
              "calc(80vw - 192px)",
              "calc(80vw - 192px)",
              "calc(20vw - 192px)",
              "calc(20vw - 192px)",
            ],
            y: [
              "calc(20vh - 192px)",
              "calc(20vh - 192px)",
              "calc(80vh - 192px)",
              "calc(80vh - 192px)",
              "calc(20vh - 192px)",
            ],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Slate Orb - EXTRA LARGE SIZE, VERY SUBTLE */}
        <motion.div
          className="absolute w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(100, 116, 139, 0.06) 0%, rgba(100, 116, 139, 0.03) 50%, transparent 70%)",
          }}
          animate={{
            x: [
              "calc(10vw - 160px)",
              "calc(50vw - 160px)",
              "calc(90vw - 160px)",
              "calc(50vw - 160px)",
              "calc(10vw - 160px)",
            ],
            y: [
              "calc(50vh - 160px)",
              "calc(10vh - 160px)",
              "calc(50vh - 160px)",
              "calc(90vh - 160px)",
              "calc(50vh - 160px)",
            ],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Purple Orb - EXTRA LARGE SIZE, VERY SUBTLE */}
        <motion.div
          className="absolute w-[28rem] h-[28rem] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(139, 92, 246, 0.02) 45%, transparent 65%)",
          }}
          animate={{
            x: [
              "calc(0vw)",
              "calc(25vw - 224px)",
              "calc(50vw - 224px)",
              "calc(75vw - 224px)",
              "calc(100vw - 448px)",
              "calc(75vw - 224px)",
              "calc(50vw - 224px)",
              "calc(25vw - 224px)",
              "calc(0vw)",
            ],
            y: [
              "calc(50vh - 224px)",
              "calc(25vh - 224px)",
              "calc(50vh - 224px)",
              "calc(75vh - 224px)",
              "calc(50vh - 224px)",
              "calc(25vh - 224px)",
              "calc(50vh - 224px)",
              "calc(75vh - 224px)",
              "calc(50vh - 224px)",
            ],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* No section header - title/subtitle removed */}

        {/* Team Members - Special Layout */}
        <div className="space-y-12">
          {/* First member - Full width */}
          {teamMembers.length > 0 && (
            <motion.div
              key={teamMembers[0]._id}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <TeamMemberCard member={teamMembers[0]} isFullWidth={true} />
            </motion.div>
          )}

          {/* Remaining members - Half width each */}
          {teamMembers.length > 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamMembers.slice(1).map((member, index) => (
                <motion.div
                  key={member._id}
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: (index + 1) * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard member={member} isFullWidth={false} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
