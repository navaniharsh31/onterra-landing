"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { OrbitalDisplay } from "./OrbitalDisplay";
import { Shield, Eye, Target, Clock, Lightbulb, Handshake } from "lucide-react";

// Dummy data for testing
const dummyData = {
  sectionTitle: "Our Standards",
  description:
    "Rooted in discipline and built on decades of institutional experience, our standards guide every investment decision and client interaction. We maintain the highest levels of excellence through rigorous processes and unwavering commitment to our principles.",
  principles: [
    {
      id: "alignment",
      title: "Alignment Without Conflicts",
      shortTitle: "Alignment Without Conflicts",
      description:
        "We ensure complete alignment between our interests and our investors' interests, eliminating conflicts and ensuring transparent decision-making.",
      points: [
        "No hidden fees or conflicts of interest",
        "Transparent fee structure",
        "Investor-first decision making",
      ],
      icon: Target,
      position: 0,
    },
    {
      id: "real-estate",
      title: "Real Estate Only, End-to-end",
      shortTitle: "Real Estate Only, End-to-end",
      description:
        "We focus exclusively on real estate investments with comprehensive end-to-end services from acquisition to management.",
      points: [
        "Exclusive real estate focus",
        "Complete investment lifecycle management",
        "Specialized expertise in property markets",
      ],
      icon: Eye,
      position: 1,
    },
    {
      id: "risk-management",
      title: "Risk Management Over Deal Velocity",
      shortTitle: "Risk Management Over Deal Velocity",
      description:
        "We prioritize thorough risk assessment and management over quick deal execution, ensuring sustainable long-term returns.",
      points: [
        "Comprehensive due diligence process",
        "Conservative underwriting standards",
        "Quality over quantity approach",
      ],
      icon: Shield,
      position: 2,
    },
    {
      id: "integrity",
      title: "Integrity and Communication",
      shortTitle: "Integrity and Communication",
      description:
        "We maintain the highest standards of integrity and provide clear, honest communication throughout the investment process.",
      points: [
        "Transparent reporting and communication",
        "Honest assessment of opportunities and risks",
        "Regular investor updates and feedback",
      ],
      icon: Clock,
      position: 3,
    },
    {
      id: "performance",
      title: "Performance Through Talent and Focus",
      shortTitle: "Performance Through Talent and Focus",
      description:
        "We achieve superior performance through our talented team and laser focus on real estate investment excellence.",
      points: [
        "Experienced investment team",
        "Specialized real estate expertise",
        "Focused investment strategy",
      ],
      icon: Lightbulb,
      position: 4,
    },
    {
      id: "partnerships",
      title: "Built on Enduring Partnerships",
      shortTitle: "Built on Enduring Partnerships",
      description:
        "We build long-term, mutually beneficial partnerships with investors, partners, and stakeholders based on trust and shared success.",
      points: [
        "Long-term relationship focus",
        "Mutual benefit partnerships",
        "Trust-based collaboration",
      ],
      icon: Handshake,
      position: 5,
    },
  ],
};

interface OnterraStandardsSectionNewProps {
  className?: string;
}

export function OnterraStandardsSectionNew({
  className,
}: OnterraStandardsSectionNewProps) {
  const [activePrinciple, setActivePrinciple] = useState<
    (typeof dummyData.principles)[0] | null
  >(null);

  const handlePrincipleHover = (
    principle: (typeof dummyData.principles)[0]
  ) => {
    setActivePrinciple(principle);
  };

  const handlePrincipleLeave = () => {
    setActivePrinciple(null);
  };

  return (
    <section
      className={cn(
        "min-h-screen bg-gray-50 flex items-center justify-center",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-32 items-center">
          {/* Left Panel - Content */}
          <motion.div
            className="lg:col-span-2 flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-2xl">
              {activePrinciple ? (
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    {activePrinciple.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {activePrinciple.description}
                  </p>
                  <ul className="space-y-3">
                    {activePrinciple.points.map(
                      (point: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    {dummyData.sectionTitle}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {dummyData.description}
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Panel - Orbital Display */}
          <motion.div
            className="lg:col-span-3 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-3xl aspect-square flex items-center justify-center">
              <OrbitalDisplay
                principles={dummyData.principles}
                className="w-full h-full max-w-[600px] max-h-[600px]"
                onPrincipleHover={handlePrincipleHover}
                onPrincipleLeave={handlePrincipleLeave}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
