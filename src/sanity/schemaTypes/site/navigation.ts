import { defineField, defineType } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: () => "🧭",
  fields: [
    defineField({
      name: "title",
      title: "Navigation Title",
      type: "string",
      initialValue: "Main Navigation",
      validation: (Rule) => Rule.required(),
    }),
    // Header Navigation
    defineField({
      name: "navItems",
      title: "Header Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "navItem",
          title: "Navigation Item",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              description: "Unique identifier for this navigation item",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "type",
              title: "Type",
              type: "string",
              options: {
                list: [
                  { title: "Link", value: "link" },
                  { title: "Dropdown", value: "dropdown" },
                  { title: "Mega Menu", value: "megamenu" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "string",
              description: "Required for link type (e.g., /about, /contact)",
              hidden: ({ parent }) => parent?.type !== "link",
            }),
            defineField({
              name: "dropdownItems",
              title: "Dropdown Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "id",
                      title: "ID",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "url",
                      title: "URL",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: "title",
                      subtitle: "url",
                    },
                  },
                },
              ],
              description: "Required for dropdown type",
              hidden: ({ parent }) => parent?.type !== "dropdown",
            }),
            defineField({
              name: "megaMenuContent",
              title: "Mega Menu Content",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "sections",
                  title: "Sections",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        defineField({
                          name: "id",
                          title: "ID",
                          type: "string",
                          validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                          name: "title",
                          title: "Title",
                          type: "string",
                          validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                          name: "description",
                          title: "Description",
                          type: "text",
                          rows: 3,
                        }),
                        defineField({
                          name: "image",
                          title: "Image",
                          type: "imageWithAlt",
                        }),
                        defineField({
                          name: "url",
                          title: "URL",
                          type: "string",
                          validation: (Rule) => Rule.required(),
                        }),
                      ],
                      preview: {
                        select: {
                          title: "title",
                          subtitle: "description",
                          media: "image",
                        },
                      },
                    },
                  ],
                  validation: (Rule) => Rule.required().min(1),
                }),
              ],
              description: "Required for megamenu type",
              hidden: ({ parent }) => parent?.type !== "megamenu",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "type",
            },
            prepare(selection) {
              const { title, subtitle } = selection;
              return {
                title: title || "Navigation Item",
                subtitle: subtitle
                  ? `${subtitle.charAt(0).toUpperCase() + subtitle.slice(1)}`
                  : "",
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "ctaButton",
      title: "Header CTA Button",
      type: "ctaButton",
      description: "Optional call-to-action button in header",
    }),
    // Footer Navigation
    defineField({
      name: "footerNavigation",
      title: "Footer Navigation",
      type: "object",
      fields: [
        defineField({
          name: "useMainNavigation",
          title: "Use Main Header Navigation",
          type: "boolean",
          initialValue: true,
          description: "Use the main header navigation items in footer",
        }),
        defineField({
          name: "additionalSections",
          title: "Additional Footer Sections",
          type: "array",
          of: [
            {
              type: "object",
              name: "footerSection",
              title: "Footer Section",
              fields: [
                defineField({
                  name: "title",
                  title: "Section Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "links",
                  title: "Links",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        defineField({
                          name: "title",
                          title: "Title",
                          type: "string",
                          validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                          name: "url",
                          title: "URL",
                          type: "string",
                          description: "Relative URL (e.g., /privacy, /terms) or full URL",
                          validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                          name: "openInNewTab",
                          title: "Open in New Tab",
                          type: "boolean",
                          initialValue: false,
                        }),
                      ],
                      preview: {
                        select: {
                          title: "title",
                          subtitle: "url",
                        },
                      },
                    },
                  ],
                  validation: (Rule) => Rule.required().min(1),
                }),
              ],
              preview: {
                select: {
                  title: "title",
                  links: "links",
                },
                prepare({ title, links }) {
                  return {
                    title: title || "Footer Section",
                    subtitle: `${links?.length || 0} links`,
                  };
                },
              },
            },
          ],
          description: "Additional footer sections beyond main navigation (e.g., Legal, Resources)",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      navItems: "navItems",
    },
    prepare({ title, navItems }) {
      return {
        title: title || "Navigation",
        subtitle: `${navItems?.length || 0} header items`,
      };
    },
  },
});
