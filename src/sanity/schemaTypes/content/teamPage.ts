import { defineType, defineField } from "sanity";

export const teamPage = defineType({
  name: "teamPage",
  title: "Team Page",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "Our Team",
    }),
    defineField({
      name: "pageSubtitle",
      title: "Page Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue:
        "Onward with real discipline, real returns - and the team that makes it happen.",
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
          initialValue: "Our Team",
        }),
        defineField({
          name: "description",
          title: "Hero Description",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.required(),
          initialValue:
            "Onward with real discipline, real returns - and the team that makes it happen.",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "statistics",
      title: "Statistics Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Section Title",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "Our Track Record",
        }),
        defineField({
          name: "statistics",
          title: "Statistics",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "value",
                  title: "Value",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "label",
                  title: "Label",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "suffix",
                  title: "Suffix",
                  type: "string",
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: "teamSection",
      title: "Team Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Section Title",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "Our Team",
        }),
        defineField({
          name: "subtitle",
          title: "Section Subtitle",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.required(),
          initialValue:
            "Meet the experienced professionals behind our success. Our team combines decades of real estate expertise with innovative investment strategies.",
        }),
        defineField({
          name: "teamMembers",
          title: "Team Members",
          type: "array",
          of: [
            {
              type: "reference",
              to: [{ type: "teamMember" }],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
      validation: (Rule) => Rule.required(),
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
        title: title || "Team Page",
        subtitle: subtitle || "Meet our team of professionals",
      };
    },
  },
});
