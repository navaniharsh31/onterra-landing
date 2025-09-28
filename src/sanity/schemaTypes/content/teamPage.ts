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
      name: "listViewSettings",
      title: "List View Settings",
      type: "object",
      fields: [
        defineField({
          name: "showAllMembers",
          title: "Show All Active Members",
          type: "boolean",
          description: "Show all active team members or only selected ones",
          initialValue: true,
        }),
        defineField({
          name: "selectedMembers",
          title: "Selected Team Members",
          type: "array",
          of: [
            {
              type: "reference",
              to: [{ type: "teamMember" }],
            },
          ],
          hidden: ({ parent }) => parent?.showAllMembers,
          validation: (Rule) =>
            Rule.custom((value, context) => {
              const parent = context.parent as any;
              if (!parent?.showAllMembers && (!value || value.length === 0)) {
                return "At least one team member must be selected when not showing all members";
              }
              return true;
            }),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "detailViewSettings",
      title: "Detail View Settings",
      type: "object",
      fields: [
        defineField({
          name: "enableDetailView",
          title: "Enable Detail View",
          type: "boolean",
          description: "Enable detailed view functionality for team members",
          initialValue: true,
        }),
        defineField({
          name: "detailViewTitle",
          title: "Detail View Title",
          type: "string",
          description: "Title shown in detail view modal/section",
          initialValue: "Team Member Details",
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
