import { defineType, defineField } from "sanity";

export const approachPage = defineType({
  name: "approachPage",
  title: "Approach Page",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "Our Approach",
    }),
    defineField({
      name: "pageSubtitle",
      title: "Page Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue:
        "Onterra Capital is an independent, conflict-free and domestic real estate investment manager offering Indian family offices and various other investors early, aligned access to residential and commercial offices growth.",
    }),
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Hero Title",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "Our Approach",
        }),
        defineField({
          name: "description",
          title: "Hero Description",
          type: "text",
          rows: 4,
          validation: (Rule) => Rule.required(),
          initialValue:
            "Onterra Capital is an independent, conflict-free and domestic real estate investment manager offering Indian family offices and various other investors early, aligned access to residential and commercial offices growth. We combine deep expertise across credit, equity and asset management with a disciplined and data-driven process.",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Content Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "contentSection",
          title: "Content Section",
          fields: [
            defineField({
              name: "id",
              title: "Section ID",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Section Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "content",
              title: "Section Content",
              type: "text",
              rows: 6,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "image",
              title: "Section Image",
              type: "imageWithAlt",
            }),
            defineField({
              name: "imagePosition",
              title: "Image Position",
              type: "string",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Right", value: "right" },
                ],
                layout: "radio",
              },
              initialValue: "left",
            }),
            defineField({
              name: "order",
              title: "Display Order",
              type: "number",
              validation: (Rule) => Rule.required().min(1).integer(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "id",
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seoSettings",
      description: "SEO settings for this page",
    }),
  ],
  preview: {
    select: {
      title: "pageTitle",
      subtitle: "pageSubtitle",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Approach Page",
        subtitle: subtitle || "Our investment approach and methodology",
      };
    },
  },
});
