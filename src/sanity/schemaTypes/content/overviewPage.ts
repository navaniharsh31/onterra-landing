import { defineType, defineField } from "sanity";

export const overviewPage = defineType({
  name: "overviewPage",
  title: "Overview Page",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "Overview",
    }),
    defineField({
      name: "pageSubtitle",
      title: "Page Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue:
        "India's real estate is rapidly formalizing and institutionalizing- driven by RERA, developer consolidation, post-COVID housing momentum, GCC growth and REITs - on track to reach $1.5TN by 2034 (~10.5% of GDP) with financing shifting from sales-led models to structured build-and-lease and fractional platforms.",
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
          initialValue: "Overview",
        }),
        defineField({
          name: "description",
          title: "Hero Description",
          type: "text",
          rows: 4,
          validation: (Rule) => Rule.required(),
          initialValue:
            "India's real estate is rapidly formalizing and institutionalizing- driven by RERA, developer consolidation, post-COVID housing momentum, GCC growth and REITs - on track to reach $1.5TN by 2034 (~10.5% of GDP) with financing shifting from sales-led models to structured build-and-lease and fractional platforms.",
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
        title: title || "Overview Page",
        subtitle: subtitle || "Real estate transformation overview",
      };
    },
  },
});
