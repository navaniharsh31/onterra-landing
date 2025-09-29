import { type SchemaTypeDefinition } from "sanity";

// Site Configuration
import { siteSettings } from "./site/siteSettings";
import { navigation } from "./site/navigation";
import { contactDetails } from "./site/contactDetails";
import { socialLinks } from "./site/socialLinks";

// Content Schemas
import { heroSection } from "./content/heroSection";
import { onterraStandards } from "./content/onterraStandards";
import { investmentStrategies } from "./content/investmentStrategies";
import { teamMember } from "./content/teamMember";
import { overviewPage } from "./content/overviewPage";
import { approachPage } from "./content/approachPage";
import { teamPage } from "./content/teamPage";
import { contactPage } from "./content/contactPage";
import { homeIntroSection } from "./content/homeIntroSection";
import { legalPage } from "./content/legalPage";
import { insightPdf } from "./content/insightPdf";

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
    onterraStandards,
    investmentStrategies,
    teamMember,
    overviewPage,
    approachPage,
    teamPage,
    contactPage,
    homeIntroSection,
    legalPage,
    insightPdf,

    // Shared Components
    ctaButton,
    imageWithAlt,
    socialMediaLink,
    address,
    seoSettings,
  ],
};
