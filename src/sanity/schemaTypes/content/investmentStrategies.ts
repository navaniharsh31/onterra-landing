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
      initialValue:
        "Our comprehensive approach to real estate investment spanning residential and commercial markets, designed to maximize returns while managing risk through diversified property portfolios.",
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: "strategies",
      title: "Investment Strategies",
      type: "array",
      of: [
        {
          type: "object",
          name: "strategy",
          title: "Strategy",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              validation: (Rule) => Rule.required(),
              description:
                "Unique identifier (e.g., 'multi-family', 'single-family', 'residential', 'commercial')",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required().max(100),
            }),
            defineField({
              name: "category",
              title: "Category",
              type: "string",
              options: {
                list: [
                  { title: "Residential", value: "residential" },
                  { title: "Commercial", value: "commercial" },
                  { title: "Main Category", value: "main-category" },
                ],
              },
              validation: (Rule) => Rule.required(),
              description:
                "Category determines styling and behavior in the flow chart",
            }),
            defineField({
              name: "mainPoint",
              title: "Main Point",
              type: "string",
              validation: (Rule) => Rule.required(),
              description:
                "Main category point (e.g., 'Residential', 'Commercial')",
            }),
            defineField({
              name: "gridPosition",
              title: "Grid Position",
              type: "object",
              fields: [
                defineField({
                  name: "row",
                  title: "Row",
                  type: "number",
                  validation: (Rule) => Rule.required().min(1).integer(),
                  description: "Row number in the grid (1, 2, etc.)",
                }),
                defineField({
                  name: "column",
                  title: "Column",
                  type: "number",
                  validation: (Rule) => Rule.required().min(1).integer(),
                  description: "Column position within the row (1, 2, 3, etc.)",
                }),
              ],
              validation: (Rule) => Rule.required(),
              description: "Position in the grid layout",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.max(500),
              description:
                "Detailed description shown in the right panel (required for selectable strategies)",
            }),
            defineField({
              name: "keyPoints",
              title: "Key Points",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.max(6),
              description:
                "Bullet points highlighting strategy benefits (for selectable strategies only)",
            }),
            defineField({
              name: "isSelectable",
              title: "Is Selectable",
              type: "boolean",
              initialValue: true,
              description:
                "Whether this strategy can be selected by users (false for main category nodes)",
            }),
          ],
          preview: {
            select: {
              title: "title",
              category: "category",
              mainPoint: "mainPoint",
              gridPosition: "gridPosition",
              isSelectable: "isSelectable",
            },
            prepare({
              title,
              category,
              mainPoint,
              gridPosition,
              isSelectable,
            }) {
              return {
                title: title || "Untitled Strategy",
                subtitle: `${mainPoint} | Row ${gridPosition?.row}, Col ${gridPosition?.column} | ${category}${!isSelectable ? " (Non-selectable)" : ""}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(10),
      description: "Investment strategies (1-10 items allowed)",
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      subtitle: "sectionDescription",
      strategies: "strategies",
    },
    prepare({ title, subtitle, strategies }) {
      return {
        title: title || "Investment Strategies",
        subtitle: `${strategies?.length || 0} strategies`,
        description: subtitle?.substring(0, 100) + "..." || "",
      };
    },
  },
});
