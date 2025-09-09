import { type SchemaTypeDefinition } from "sanity";

// Site Configuration
import { siteSettings } from "./site/siteSettings";
import { navigation } from "./site/navigation";
import { contactDetails } from "./site/contactDetails";
import { socialLinks } from "./site/socialLinks";

// Content Schemas
import { heroSection } from "./content/heroSection";
import { statisticsSection } from "./content/statisticsSection";
import { onterraStandards } from "./content/onterraStandards";
import { investmentStrategies } from "./content/investmentStrategies";
import { teamMember } from "./content/teamMember";
import { aboutPage } from "./content/aboutPage";

// Shared Components
import { ctaButton } from "./shared/ctaButton";
import { imageWithAlt } from "./shared/imageWithAlt";
import { socialMediaLink } from "./shared/socialMediaLink";
import { address } from "./shared/address";
import { seoSettings } from "./shared/seoSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Site Configuration
    siteSettings,
    navigation,
    contactDetails,
    socialLinks,

    // Content Schemas
    heroSection,
    statisticsSection,
    onterraStandards,
    investmentStrategies,
    teamMember,
    aboutPage,

    // Shared Components
    ctaButton,
    imageWithAlt,
    socialMediaLink,
    address,
    seoSettings,
  ],
};
