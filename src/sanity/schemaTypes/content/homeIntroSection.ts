import { defineType, defineField } from "sanity";

export const homeIntroSection = defineType({
  name: "homeIntroSection",
  title: "Home Intro Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Transforming Real Estate Investment",
      validation: (Rule) => Rule.required().max(100),
      description: "Main title for the intro section",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      initialValue:
        "We combine institutional expertise with innovative technology to deliver exceptional real estate investment opportunities. Our disciplined approach and transparent processes ensure sustainable returns for our investors.",
      validation: (Rule) => Rule.required().max(500),
      description: "Brief description introducing Onterra's value proposition",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "imageWithAlt",
      validation: (Rule) => Rule.required(),
      description: "Background image for the intro section",
    }),
    defineField({
      name: "enableBackgroundImage",
      title: "Enable Background Image",
      type: "boolean",
      initialValue: true,
      description: "Toggle to enable/disable background image",
    }),
    defineField({
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      options: {
        list: [
          { title: "Bottom Half", value: "bottom" },
          { title: "Top Half", value: "top" },
          { title: "Full Background", value: "full" },
        ],
      },
      initialValue: "bottom",
      description: "Position of the background image within the section",
    }),
    defineField({
      name: "blendMode",
      title: "Blend Mode",
      type: "string",
      options: {
        list: [
          { title: "Overlay", value: "overlay" },
          { title: "Soft Light", value: "soft-light" },
          { title: "Multiply", value: "multiply" },
          { title: "Screen", value: "screen" },
        ],
      },
      initialValue: "overlay",
      description: "CSS blend mode for image integration with background",
    }),
    defineField({
      name: "imageOpacity",
      title: "Image Opacity",
      type: "number",
      initialValue: 0.8,
      validation: (Rule) => Rule.required().min(0).max(1),
      description: "Image opacity for blending with background (0-1)",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Home Intro Section",
        subtitle: subtitle
          ? subtitle.substring(0, 100) + "..."
          : "No description",
      };
    },
  },
});
