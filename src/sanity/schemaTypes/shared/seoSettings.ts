import { defineField, defineType } from "sanity";

export const seoSettings = defineType({
  name: "seoSettings",
  title: "SEO Settings",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Override the default page title for SEO",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description: "Brief description for search engines",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "organizationSchema",
      title: "Enable Organization Schema",
      type: "boolean",
      description: "Add structured data for better search engine understanding",
      initialValue: true,
    }),
    defineField({
      name: "foundingDate",
      title: "Founding Date",
      type: "date",
      description: "Company founding date for structured data",
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      description: "Business industry for structured data",
    }),
    defineField({
      name: "googleAnalyticsId",
      title: "Google Analytics ID",
      type: "string",
      description: "Google Analytics tracking ID (e.g., GA4-XXXXXXXXX)",
    }),
    defineField({
      name: "googleTagManagerId",
      title: "Google Tag Manager ID",
      type: "string",
      description: "Google Tag Manager container ID (e.g., GTM-XXXXXXX)",
    }),
  ],
});
