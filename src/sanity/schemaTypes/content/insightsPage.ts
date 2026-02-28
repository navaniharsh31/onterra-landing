import { defineField, defineType } from "sanity";

export const insightsPage = defineType({
  name: "insightsPage",
  title: "Insights Page",
  type: "document",
  icon: () => "📊",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Internal title for this page configuration",
      initialValue: "Insights Page",
      validation: (Rule) => Rule.required(),
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
          description: "Main heading for the insights page hero section",
          validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
          name: "description",
          title: "Hero Description",
          type: "text",
          rows: 3,
          description: "Subtitle text below the hero title",
          validation: (Rule) => Rule.max(300),
        }),
      ],
    }),
    defineField({
      name: "formSettings",
      title: "Report Request Form Settings",
      type: "object",
      fields: [
        defineField({
          name: "formTitle",
          title: "Form Title",
          type: "string",
          description: "Title shown at the top of the request form",
          initialValue: "Request This Report",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "formDescription",
          title: "Form Description",
          type: "text",
          rows: 2,
          description: "Short description shown below the form title",
          initialValue:
            "Fill in your details and the report will be sent to your email instantly.",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "successMessage",
          title: "Success Message",
          type: "string",
          description: "Message shown after successful form submission",
          initialValue:
            "Thank you! The report has been sent to your email.",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "errorMessage",
          title: "Error Message",
          type: "string",
          description: "Message shown if form submission fails",
          initialValue:
            "Something went wrong. Please try again or contact us directly.",
          validation: (Rule) => Rule.max(200),
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seoSettings",
      description: "SEO metadata for the insights page",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Insights Page",
        subtitle: "Page Configuration",
      };
    },
  },
});
