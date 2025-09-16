import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "backgroundVideos",
      title: "Background Videos",
      type: "array",
      of: [
        {
          type: "file",
          options: {
            accept: "video/*",
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "staticText",
      title: "Static Text",
      type: "string",
      initialValue: "Building wealth through",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rotatingText",
      title: "Rotating Text",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
      initialValue: ["strategic", "innovative", "proven"],
    }),
    defineField({
      name: "ctaButtons",
      title: "Call to Action Buttons",
      type: "array",
      of: [
        {
          type: "object",
          name: "ctaButton",
          title: "CTA Button",
          fields: [
            {
              name: "text",
              title: "Button Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "Button URL",
              type: "string",
              description: "Relative URL (e.g., /contact, /about) or full URL",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "variant",
              title: "Button Variant",
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
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: "overlayOpacity",
      title: "Video Overlay Opacity",
      type: "number",
      validation: (Rule) => Rule.min(0).max(1),
      initialValue: 0.4,
    }),
  ],
  preview: {
    select: {
      staticText: "staticText",
      rotatingText: "rotatingText",
    },
    prepare({ staticText, rotatingText }) {
      const rotatingPreview = rotatingText ? rotatingText[0] : "";
      return {
        title: "Hero Section",
        subtitle:
          `${staticText || ""} ${rotatingPreview || ""}`.trim() ||
          "Hero content",
      };
    },
  },
});
