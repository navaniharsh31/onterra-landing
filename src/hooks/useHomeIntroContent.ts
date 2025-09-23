import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";
import { queries } from "@/lib/sanity/queries";

export function useHomeIntroContent() {
  return useQuery({
    queryKey: ["homeIntroSection"],
    queryFn: async () => {
      const data = await client.fetch(queries.homeIntroSection);
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
}
