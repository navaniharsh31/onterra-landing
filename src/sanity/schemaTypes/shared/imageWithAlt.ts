import { defineField, defineType } from "sanity";

export const imageWithAlt = defineType({
  name: "imageWithAlt",
  title: "Image with Alt Text",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Alternative text for accessibility",
      validation: (Rule) => Rule.required().max(125),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "Optional caption for the image",
    }),
  ],
  preview: {
    select: {
      title: "alt",
      media: "asset",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || "Image",
        media: media,
      };
    },
  },
});
