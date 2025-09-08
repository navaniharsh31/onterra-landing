import { FullScreenSection } from "@/components/layout/FullScreenSection";
import { MultiVideoBackground } from "./MultiVideoBackground";
import { HeroOverlay } from "./HeroOverlay";
import { HeroContent } from "./HeroContent";

interface HeroSectionProps {
  content: {
    staticText: string;
    rotatingText: string[];
    lineDesign?: {
      enabled: boolean;
      color: string;
    };
    backgroundVideos?: Array<{
      asset?: {
        url?: string;
      };
    }>;
    ctaButtons?: Array<{
      text: string;
      url: string;
      variant: "primary" | "secondary" | "outline";
    }>;
    overlayOpacity?: number;
  };
  className?: string;
}

export function HeroSection({ content, className }: HeroSectionProps) {
  const {
    staticText,
    rotatingText,
    lineDesign,
    backgroundVideos,
    ctaButtons,
    overlayOpacity = 0.4,
  } = content;
  console.log("backgroundVideos", backgroundVideos);
  return (
    <FullScreenSection withHeader={false} className={className}>
      <MultiVideoBackground videos={backgroundVideos || []} />
      <HeroOverlay opacity={overlayOpacity} />
      <HeroContent
        staticText={staticText}
        rotatingText={rotatingText}
        lineDesign={lineDesign}
        ctaButtons={ctaButtons}
      />
    </FullScreenSection>
  );
}
