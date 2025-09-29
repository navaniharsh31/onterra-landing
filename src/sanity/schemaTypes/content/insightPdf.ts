import { defineField, defineType } from "sanity";

export const insightPdf = defineType({
  name: "insightPdf",
  title: "Insight PDF",
  type: "document",
  icon: () => "📄",
  fields: [
    defineField({
      name: "title",
      title: "PDF Title",
      type: "string",
      description: "Display name for the PDF (e.g., 'September 2025 Insights')",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Brief description of the PDF content",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "pdfFile",
      title: "PDF File",
      type: "file",
      options: {
        accept: ".pdf",
        storeOriginalFilename: true,
      },
      description:
        "Upload the PDF file (original filename will be preserved). After upload, the URL will be shown in the preview below.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      description: "When this insight was published",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Whether this PDF should be available for use",
      initialValue: true,
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seoSettings",
      description: "SEO metadata for this PDF",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedDate",
      media: "pdfFile",
      pdfUrl: "pdfFile.asset.url",
      filename: "pdfFile.asset.originalFilename",
    },
    prepare(selection) {
      const { title, subtitle, media, pdfUrl, filename } = selection;
      return {
        title: title || "Untitled PDF",
        subtitle: pdfUrl
          ? `📄 ${filename || "PDF"} - Click to copy link`
          : subtitle
            ? new Date(subtitle).toLocaleDateString()
            : "No PDF uploaded",
        media: media,
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
