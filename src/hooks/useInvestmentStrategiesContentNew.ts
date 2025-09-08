import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";

// Type definitions matching our schema structure
export interface InvestmentStrategy {
  id: string;
  title: string;
  category: "residential" | "commercial" | "main-category";
  level: 0 | 1 | 2 | 3;
  index: number;
  description: string;
  keyPoints: string[];
  metrics: {
    averageReturn?: string;
    holdPeriod?: string;
    minInvestment?: string;
  };
  isSelectable: boolean;
}

export interface FlowStructureLevel {
  level: number;
  nodes: string[];
  parentId?: string;
  childId?: string;
  childIds?: string[];
  title: string;
}

export interface InvestmentStrategiesContent {
  sectionTitle: string;
  sectionDescription: string;
  strategies: InvestmentStrategy[];
  flowStructure: {
    levels: FlowStructureLevel[];
  };
}

const investmentStrategiesNewQuery = `*[_type == "investmentStrategiesNew"][0] {
  sectionTitle,
  sectionDescription,
  strategies[] {
    id,
    title,
    category,
    level,
    index,
    description,
    keyPoints,
    metrics {
      averageReturn,
      holdPeriod,
      minInvestment
    },
    isSelectable
  } | order(level asc, index asc),
  flowStructure {
    levels[] {
      level,
      nodes,
      parentId,
      childId,
      childIds,
      title
    } | order(level asc)
  }
}`;

export function useInvestmentStrategiesContentNew() {
  return useQuery<InvestmentStrategiesContent>({
    queryKey: ["investmentStrategiesContentNew"],
    queryFn: () => client.fetch(investmentStrategiesNewQuery),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    refetchOnWindowFocus: false,
  });
}
