import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";

const heroQuery = `*[_type == "heroSection"][0] {
  staticText,
  rotatingText,
  lineDesign {
    enabled,
    color
  },
  backgroundVideos[] {
    asset->{
      url,
      _ref,
      _type
    }
  },
  ctaButtons[] {
    text,
    url,
    variant
  },
  overlayOpacity
}`;

export function useHeroContent() {
  return useQuery({
    queryKey: ["heroContent"],
    queryFn: () => client.fetch(heroQuery),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
}
