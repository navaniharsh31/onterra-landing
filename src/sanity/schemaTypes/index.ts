import { type SchemaTypeDefinition } from "sanity";
import { heroSection } from "./heroSection";
import { statisticsSection } from "./statisticsSection";
import { onterraStandardsNew } from "./onterraStandardsNew";
import { investmentStrategiesNew } from "./investmentStrategiesNew";
import footerSettings from "./footerSettings";
import footerNavigation from "./footerNavigation";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSection,
    statisticsSection,
    onterraStandardsNew,
    investmentStrategiesNew,
    footerSettings,
    footerNavigation,
  ],
};
