import { defineField, defineType } from "sanity";

export const ctaButton = defineType({
  name: "ctaButton",
  title: "Call to Action Button",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Button Text",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "url",
      title: "Button URL",
      type: "string",
      description: "Relative URL (e.g., /about, /contact) or full URL",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Button Style",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Outline", value: "outline" },
        ],
        layout: "radio",
      },
      initialValue: "primary",
    }),
    defineField({
      name: "openInNewTab",
      title: "Open in New Tab",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "url",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || "CTA Button",
        subtitle: subtitle || "No URL",
      };
    },
  },
});
