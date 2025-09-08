import { defineField, defineType } from "sanity";

export default defineType({
  name: "footerNavigation",
  title: "Footer Navigation",
  type: "document",
  icon: () => "🔗",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Footer Navigation",
      readOnly: true,
    }),
    defineField({
      name: "linkSections",
      title: "Link Sections",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "linkSection",
          title: "Link Section",
          fields: [
            defineField({
              name: "sectionTitle",
              title: "Section Title",
              type: "string",
              validation: (Rule) => Rule.required(),
              description: 'e.g., "Company", "Services", "Resources"',
            }),
            defineField({
              name: "sectionOrder",
              title: "Section Order",
              type: "number",
              validation: (Rule) => Rule.required().min(1),
              description: "Order in which sections appear (1, 2, 3, etc.)",
            }),
            defineField({
              name: "links",
              title: "Links",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  name: "footerLink",
                  title: "Footer Link",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Link Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "url",
                      title: "URL",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                      description:
                        "Internal link (/about) or external (https://...)",
                    }),
                    defineField({
                      name: "isExternal",
                      title: "External Link",
                      type: "boolean",
                      initialValue: false,
                      description: "Opens in new tab if external",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "string",
                      description: "Optional description for accessibility",
                    }),
                    defineField({
                      name: "order",
                      title: "Link Order",
                      type: "number",
                      validation: (Rule) => Rule.required().min(1),
                      description: "Order within the section",
                    }),
                  ],
                  preview: {
                    select: {
                      title: "title",
                      subtitle: "url",
                      order: "order",
                    },
                    prepare({ title, subtitle, order }) {
                      return {
                        title: `${order}. ${title}`,
                        subtitle,
                      };
                    },
                  },
                }),
              ],
              validation: (Rule) => Rule.min(1),
            }),
          ],
          preview: {
            select: {
              title: "sectionTitle",
              order: "sectionOrder",
              linksCount: "links.length",
            },
            prepare({ title, order, linksCount }) {
              return {
                title: `${order}. ${title}`,
                subtitle: `${linksCount} links`,
              };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1).max(6),
    }),
    defineField({
      name: "featuredCTA",
      title: "Featured Call-to-Action",
      type: "object",
      description: "Optional highlighted CTA in footer",
      fields: [
        defineField({
          name: "enabled",
          title: "Enable Featured CTA",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "title",
          title: "CTA Title",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "CTA Description",
          type: "text",
          rows: 2,
        }),
        defineField({
          name: "buttonText",
          title: "Button Text",
          type: "string",
        }),
        defineField({
          name: "buttonUrl",
          title: "Button URL",
          type: "string",
        }),
        defineField({
          name: "variant",
          title: "Button Variant",
          type: "string",
          options: {
            list: [
              { title: "Primary", value: "primary" },
              { title: "Secondary", value: "secondary" },
              { title: "Outline", value: "outline" },
            ],
          },
          initialValue: "primary",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      sectionsCount: "linkSections.length",
    },
    prepare({ sectionsCount }) {
      return {
        title: "Footer Navigation",
        subtitle: `${sectionsCount} sections`,
      };
    },
  },
});
