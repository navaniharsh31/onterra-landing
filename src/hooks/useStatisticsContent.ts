import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";

const statisticsQuery = `*[_type == "statisticsSection"][0] {
  title,
  statistics[] {
    value,
    label,
    suffix
  }
}`;

export function useStatisticsContent() {
  return useQuery({
    queryKey: ["statisticsContent"],
    queryFn: () => client.fetch(statisticsQuery),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
}
