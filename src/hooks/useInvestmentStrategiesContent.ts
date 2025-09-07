import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";

const investmentStrategiesQuery = `*[_type == "investmentStrategies"][0] {
  sectionTitle,
  sectionDescription,
  categories[] {
    categoryName,
    categoryDescription,
    strategies[] {
      title,
      description,
      highlights,
      isExpandedByDefault
    }
  }
}`;

export function useInvestmentStrategiesContent() {
  return useQuery({
    queryKey: ["investmentStrategiesContent"],
    queryFn: () => client.fetch(investmentStrategiesQuery),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
}
