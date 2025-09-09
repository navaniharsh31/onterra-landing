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
      title: "SEO Settings",
      type: "seoSettings",
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
      type: "url",
    }),
    defineField({
      name: "termsOfServiceUrl",
      title: "Terms of Service URL",
      type: "url",
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
