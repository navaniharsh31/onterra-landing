import { defineField, defineType } from "sanity";

export const statisticsSection = defineType({
  name: "statisticsSection",
  title: "Statistics Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Optional section title (e.g., 'Our Impact')",
    }),
    defineField({
      name: "statistics",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          name: "statistic",
          title: "Statistic",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              description:
                "The main numerical value (e.g., '20+', '500', '95%')",
              validation: (Rule) => Rule.required().max(20),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "Descriptive text for the statistic",
              validation: (Rule) => Rule.required().max(100),
            }),
            defineField({
              name: "suffix",
              title: "Suffix",
              type: "string",
              description: "Optional suffix (e.g., '%', 'M+', 'K+', 'Years')",
              validation: (Rule) => Rule.max(10),
            }),
          ],
          preview: {
            select: {
              title: "value",
              subtitle: "label",
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(5).max(5),
      description: "Exactly 5 statistics required",
    }),
  ],
  preview: {
    select: {
      title: "title",
      statistics: "statistics",
    },
    prepare({ title, statistics }) {
      return {
        title: title || "Statistics Section",
        subtitle: `${statistics?.length || 0} statistics`,
      };
    },
  },
});
