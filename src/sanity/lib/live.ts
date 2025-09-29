// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
    apiVersion: "vX",
  }),
  // Disable tokens to silence warnings (only published content will be live)
  serverToken: false,
  browserToken: false,
});

// Live content queries for real-time updates
export const liveQueries = {
  siteSettings: `*[_type == "siteSettings"][0]`,
  navigation: `*[_type == "navigation"][0]`,
  hero: `*[_type == "heroSection"][0]`,
  homeIntroSection: `*[_type == "homeIntroSection"][0]`,
  investmentStrategies: `*[_type == "investmentStrategies"][0]`,
  onterraStandards: `*[_type == "onterraStandards"][0]`,
};
