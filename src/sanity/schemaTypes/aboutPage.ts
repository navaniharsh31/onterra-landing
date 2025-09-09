import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: () => "👥",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "About Page Content",
      readOnly: true,
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
          initialValue: "About Us",
        }),
        defineField({
          name: "description",
          title: "Hero Description",
          type: "text",
          rows: 3,
          initialValue:
            "Building wealth through strategic real estate investment with a team of experienced professionals who combine decades of expertise with innovative strategies.",
        }),
        defineField({
          name: "backgroundStyle",
          title: "Background Style",
          type: "object",
          fields: [
            defineField({
              name: "primaryColor",
              title: "Primary Background Color",
              type: "string",
              initialValue: "navy-900",
              options: {
                list: [
                  { title: "Navy 900", value: "navy-900" },
                  { title: "Navy 800", value: "navy-800" },
                  { title: "Slate 900", value: "slate-900" },
                  { title: "Slate 800", value: "slate-800" },
                ],
              },
            }),
            defineField({
              name: "secondaryColor",
              title: "Secondary Background Color",
              type: "string",
              initialValue: "navy-800",
              options: {
                list: [
                  { title: "Navy 900", value: "navy-900" },
                  { title: "Navy 800", value: "navy-800" },
                  { title: "Slate 900", value: "slate-900" },
                  { title: "Slate 800", value: "slate-800" },
                ],
              },
            }),
            defineField({
              name: "accentColor",
              title: "Accent Color",
              type: "string",
              initialValue: "mustard-400",
              options: {
                list: [
                  { title: "Mustard 400", value: "mustard-400" },
                  { title: "Gold 400", value: "gold-400" },
                  { title: "Navy 400", value: "navy-400" },
                  { title: "Slate 400", value: "slate-400" },
                ],
              },
            }),
            defineField({
              name: "showGridPattern",
              title: "Show Grid Pattern",
              type: "boolean",
              initialValue: true,
            }),
            defineField({
              name: "showGeometricAccents",
              title: "Show Geometric Accents",
              type: "boolean",
              initialValue: true,
            }),
          ],
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
          initialValue: "Our Team",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 3,
          initialValue:
            "Meet the experienced professionals behind our success, combining decades of real estate expertise with innovative investment strategies.",
        }),
        defineField({
          name: "showInAbout",
          title: "Show Team Section on About Page",
          type: "boolean",
          initialValue: true,
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          description: "Title for search engines (max 60 characters)",
          validation: (Rule) => Rule.max(60),
          initialValue: "About Us - Onterra Capital",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 2,
          description: "Description for search engines (max 160 characters)",
          validation: (Rule) => Rule.max(160),
          initialValue:
            "Learn about Onterra Capital's experienced team of real estate investment professionals and our strategic approach to building wealth.",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "hero.title",
    },
  },
});
