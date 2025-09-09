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
              name: "level",
              title: "Tree Level",
              type: "number",
              validation: (Rule) => Rule.required().min(0).max(3).integer(),
              description:
                "Level in the tree hierarchy: 0=top row, 1=residential, 2=commercial, 3=bottom row",
            }),
            defineField({
              name: "index",
              title: "Index within Level",
              type: "number",
              validation: (Rule) => Rule.required().min(0).integer(),
              description: "Position within the tree level (0-based)",
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
              name: "metrics",
              title: "Investment Metrics",
              type: "object",
              fields: [
                defineField({
                  name: "averageReturn",
                  title: "Average Return",
                  type: "string",
                  description: "Expected return range (e.g., '8-12%')",
                }),
                defineField({
                  name: "holdPeriod",
                  title: "Hold Period",
                  type: "string",
                  description:
                    "Typical investment duration (e.g., '5-7 years')",
                }),
                defineField({
                  name: "minInvestment",
                  title: "Minimum Investment",
                  type: "string",
                  description: "Minimum investment amount (e.g., '$500K')",
                }),
              ],
              description:
                "Investment metrics (required for selectable strategies)",
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
              level: "level",
              index: "index",
              isSelectable: "isSelectable",
            },
            prepare({ title, category, level, index, isSelectable }) {
              return {
                title: title || "Untitled Strategy",
                subtitle: `Level ${level}, Index ${index} | ${category}${!isSelectable ? " (Non-selectable)" : ""}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(6).max(10),
      description: "All investment strategies including main category nodes",
    }),
    defineField({
      name: "flowStructure",
      title: "Flow Chart Structure",
      type: "object",
      fields: [
        defineField({
          name: "levels",
          title: "Tree Levels",
          type: "array",
          of: [
            {
              type: "object",
              name: "level",
              title: "Level",
              fields: [
                defineField({
                  name: "level",
                  title: "Level Number",
                  type: "number",
                  validation: (Rule) => Rule.required().min(0).max(3).integer(),
                }),
                defineField({
                  name: "nodes",
                  title: "Node IDs",
                  type: "array",
                  of: [{ type: "string" }],
                  validation: (Rule) => Rule.required().min(1),
                  description: "Array of strategy IDs at this level",
                }),
                defineField({
                  name: "parentId",
                  title: "Parent ID",
                  type: "string",
                  description: "ID of parent node (optional)",
                }),
                defineField({
                  name: "childId",
                  title: "Single Child ID",
                  type: "string",
                  description: "ID of single child node (optional)",
                }),
                defineField({
                  name: "childIds",
                  title: "Multiple Child IDs",
                  type: "array",
                  of: [{ type: "string" }],
                  description: "Array of child node IDs (optional)",
                }),
                defineField({
                  name: "title",
                  title: "Level Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                  description: "Descriptive title for this level",
                }),
              ],
              preview: {
                select: {
                  level: "level",
                  title: "title",
                  nodes: "nodes",
                },
                prepare({ level, title, nodes }) {
                  return {
                    title: `Level ${level}: ${title}`,
                    subtitle: `${nodes?.length || 0} nodes`,
                  };
                },
              },
            },
          ],
          validation: (Rule) => Rule.required().length(4),
          description: "Exactly 4 levels required for the tree structure",
        }),
      ],
      description: "Defines the hierarchical structure of the flow chart tree",
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
