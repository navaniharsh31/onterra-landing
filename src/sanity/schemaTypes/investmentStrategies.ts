import { defineField, defineType } from "sanity";

export const investmentStrategies = defineType({
  name: "investmentStrategies",
  title: "Investment Strategies",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Investment Strategies",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "object",
          name: "category",
          title: "Category",
          fields: [
            defineField({
              name: "categoryName",
              title: "Category Name",
              type: "string",
              validation: (Rule) => Rule.required().max(50),
            }),
            defineField({
              name: "categoryDescription",
              title: "Category Description",
              type: "text",
              rows: 2,
              validation: (Rule) => Rule.max(200),
            }),
            defineField({
              name: "strategies",
              title: "Strategies",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "strategy",
                  title: "Strategy",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Strategy Title",
                      type: "string",
                      validation: (Rule) => Rule.required().max(100),
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                      rows: 4,
                      validation: (Rule) => Rule.required().max(500),
                    }),
                    defineField({
                      name: "highlights",
                      title: "Key Highlights",
                      type: "array",
                      of: [{ type: "string" }],
                      validation: (Rule) => Rule.max(5),
                    }),
                    defineField({
                      name: "isExpandedByDefault",
                      title: "Expanded by Default",
                      type: "boolean",
                      initialValue: false,
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
              validation: (Rule) => Rule.required().min(3).max(4),
            }),
          ],
          preview: {
            select: {
              title: "categoryName",
              subtitle: "categoryDescription",
              strategies: "strategies",
            },
            prepare({ title, strategies }) {
              return {
                title: title || "Category",
                subtitle: `${strategies?.length || 0} strategies`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(2).max(2),
      description: "Exactly 2 categories required (Residential and Commercial)",
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      subtitle: "sectionDescription",
      categories: "categories",
    },
    prepare({ title, categories }) {
      return {
        title: title || "Investment Strategies",
        subtitle: `${categories?.length || 0} categories`,
      };
    },
  },
});
