import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";

const onterraStandardsQuery = `*[_type == "onterraStandards"][0] {
  sectionTitle,
  subtitle,
  principles[] {
    title,
    description,
    points,
    icon {
      type,
      value
    }
  }
}`;

export function useOnterraStandardsContent() {
  return useQuery({
    queryKey: ["onterraStandardsContent"],
    queryFn: () => client.fetch(onterraStandardsQuery),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
}
