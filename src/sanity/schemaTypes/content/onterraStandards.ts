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
      initialValue: "Our Standards",
      validation: (Rule) => Rule.required(),
      description: "Main title displayed on the left panel",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      initialValue:
        "Rooted in discipline and built on decades of institutional experience, our standards guide every investment decision and client interaction. We maintain the highest levels of excellence through rigorous processes and unwavering commitment to our principles.",
      validation: (Rule) => Rule.required().max(500),
      description: "Main description shown when no principle is hovered",
    }),
    defineField({
      name: "centralHub",
      title: "Central Hub",
      type: "object",
      fields: [
        defineField({
          name: "logo",
          title: "Logo Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
          description:
            "Logo image displayed at the center of the orbital display",
        }),
        defineField({
          name: "altText",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
          description: "Alt text for the logo image",
        }),
      ],
      description: "Central hub configuration for the orbital display",
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
              name: "id",
              title: "ID",
              type: "string",
              validation: (Rule) => Rule.required(),
              description:
                "Unique identifier for this principle (e.g., 'alignment', 'real-estate')",
            }),
            defineField({
              name: "title",
              title: "Full Title",
              type: "string",
              validation: (Rule) => Rule.required().max(100),
              description:
                "Full title displayed in the left panel when hovered",
            }),
            defineField({
              name: "shortTitle",
              title: "Short Title",
              type: "string",
              validation: (Rule) => Rule.required().max(50),
              description: "Short title displayed on the orbital node",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required().max(400),
              description:
                "Detailed description shown in left panel when principle is hovered",
            }),
            defineField({
              name: "points",
              title: "Key Points",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required().min(2).max(4),
              description: "Bullet points displayed under the description",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Target (Alignment)", value: "Target" },
                  { title: "Eye (Vision)", value: "Eye" },
                  { title: "Shield (Risk Management)", value: "Shield" },
                  { title: "Clock (Time Management)", value: "Clock" },
                  { title: "Lightbulb (Performance)", value: "Lightbulb" },
                  { title: "Handshake (Partnerships)", value: "Handshake" },
                ],
              },
              validation: (Rule) => Rule.required(),
              description: "Lucide icon displayed on the orbital node",
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
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "shortTitle",
              gridPosition: "gridPosition",
            },
            prepare({ title, subtitle, gridPosition }) {
              return {
                title: title || "Untitled Principle",
                subtitle: `${subtitle} (Row ${gridPosition?.row}, Col ${gridPosition?.column})`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().length(6),
      description: "Exactly 6 principles required for the grid display",
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      subtitle: "description",
      principles: "principles",
    },
    prepare({ title, subtitle, principles }) {
      return {
        title: title || "Onterra Standards",
        subtitle: `${principles?.length || 0} principles`,
        description: subtitle?.substring(0, 100) + "..." || "",
      };
    },
  },
});
