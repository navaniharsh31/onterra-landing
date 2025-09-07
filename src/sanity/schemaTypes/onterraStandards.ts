import { defineField, defineType } from "sanity";

export const onterraStandards = defineType({
  name: "onterraStandards",
  title: "Onterra Standards",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Onterra Standards",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      initialValue: "Rooted in Discipline",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "principles",
      title: "Principles",
      type: "array",
      of: [
        {
          type: "object",
          name: "principle",
          title: "Principle",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required().max(100),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.max(200),
            }),
            defineField({
              name: "points",
              title: "Supporting Points",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required().min(2).max(3),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "object",
              fields: [
                defineField({
                  name: "type",
                  title: "Icon Type",
                  type: "string",
                  options: {
                    list: [
                      { title: "Image", value: "image" },
                      { title: "Iconify", value: "iconify" },
                    ],
                  },
                  initialValue: "iconify",
                }),
                defineField({
                  name: "value",
                  title: "Icon Value",
                  type: "string",
                  description:
                    "For image: URL or asset reference. For iconify: icon name (e.g., 'mdi:check-circle')",
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(6).max(6),
      description: "Exactly 6 principles required",
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      subtitle: "subtitle",
      principles: "principles",
    },
    prepare({ title, subtitle, principles }) {
      return {
        title: title || "Onterra Standards",
        subtitle: subtitle || "Rooted in Discipline",
        description: `${principles?.length || 0} principles`,
      };
    },
  },
});
