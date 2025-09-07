import { type SchemaTypeDefinition } from "sanity";
import { heroSection } from "./heroSection";
import { statisticsSection } from "./statisticsSection";
import { onterraStandards } from "./onterraStandards";
import { investmentStrategies } from "./investmentStrategies";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSection,
    statisticsSection,
    onterraStandards,
    investmentStrategies,
  ],
};
