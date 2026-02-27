import { defineField, defineType } from "sanity";

export const insightPdf = defineType({
  name: "insightPdf",
  title: "Insight",
  type: "document",
  icon: () => "📊",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Display name for the insight (e.g., 'June 2025 Insights')",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "URL-friendly identifier (e.g., 'june-2025'). Click 'Generate' to auto-create from title.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      description:
        "A brief summary shown on the insights listing page (max 200 characters). If left empty, the full content will be automatically truncated.",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "content",
      title: "Full Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [],
          },
        },
      ],
      description:
        "The full insight content. Shown on the individual insight detail page. Supports paragraphs, headings, bold, and italic.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      description:
        "When this insight was published. Used for year-wise grouping on the insights page.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Whether this insight should be visible on the website",
      initialValue: true,
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seoSettings",
      description: "SEO metadata for this insight's detail page",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedDate",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || "Untitled Insight",
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })
          : "No date set",
      };
    },
  },
  orderings: [
    {
      title: "Published Date (Newest First)",
      name: "publishedDateDesc",
      by: [{ field: "publishedDate", direction: "desc" }],
    },
    {
      title: "Published Date (Oldest First)",
      name: "publishedDateAsc",
      by: [{ field: "publishedDate", direction: "asc" }],
    },
    {
      title: "Title A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});