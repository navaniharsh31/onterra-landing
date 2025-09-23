import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: () => "⚙️",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      description: "The main title of your website",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
      description: "Brief description of your website for SEO",
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short tagline or slogan for your brand",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "imageWithAlt",
      description: "Main site logo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
      description: "Small icon for browser tabs (32x32px recommended)",
    }),
    defineField({
      name: "seo",
      title: "Site-Wide SEO Settings",
      type: "object",
      fields: [
        defineField({
          name: "defaultMetaTitle",
          title: "Default Meta Title Template",
          type: "string",
          description:
            "Default title template for pages (e.g., '{pageTitle} | Onterra Capital')",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "defaultMetaDescription",
          title: "Default Meta Description",
          type: "text",
          description: "Default description for pages without specific SEO",
          validation: (Rule) => Rule.max(160),
        }),
        defineField({
          name: "organizationSchema",
          title: "Enable Organization Schema",
          type: "boolean",
          description:
            "Add structured data for better search engine understanding",
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
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
      description: 'e.g., "© 2024 Onterra Capital. All rights reserved."',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "privacyPolicyUrl",
      title: "Privacy Policy URL",
      type: "string",
      description:
        "URL path for privacy policy page (e.g., '/legal/privacy-policy')",
    }),
    defineField({
      name: "termsOfServiceUrl",
      title: "Terms of Service URL",
      type: "string",
      description:
        "URL path for terms of service page (e.g., '/legal/terms-conditions')",
    }),
    defineField({
      name: "disclaimerUrl",
      title: "Disclaimer URL",
      type: "string",
      description: "URL path for disclaimer page (e.g., '/legal/disclaimer')",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "logo",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || "Site Settings",
        subtitle: subtitle || "No description",
        media: media,
      };
    },
  },
});
