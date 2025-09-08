import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";

// Type definitions matching our schema structure
export interface OnterraStandardsContent {
  sectionTitle: string;
  description: string;
  centralHub: {
    logo: {
      asset: {
        _id: string;
        url: string;
      };
    };
    altText: string;
  };
  principles: Array<{
    id: string;
    title: string;
    shortTitle: string;
    description: string;
    points: string[];
    icon: string;
    position: number;
  }>;
}

const onterraStandardsNewQuery = `*[_type == "onterraStandardsNew"][0] {
  sectionTitle,
  description,
  centralHub {
    logo {
      asset-> {
        _id,
        url
      }
    },
    altText
  },
  principles[] {
    id,
    title,
    shortTitle,
    description,
    points,
    icon,
    position
  } | order(position asc)
}`;

export function useOnterraStandardsContentNew() {
  return useQuery<OnterraStandardsContent>({
    queryKey: ["onterraStandardsContentNew"],
    queryFn: () => client.fetch(onterraStandardsNewQuery),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    refetchOnWindowFocus: false,
  });
}
