import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  icon: () => "📞",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Contact Page Content",
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
          initialValue: "Get in Touch",
        }),
        defineField({
          name: "description",
          title: "Hero Description",
          type: "text",
          rows: 3,
          initialValue:
            "Ready to explore real estate investment opportunities? We'd love to hear from you. Get in touch with our team to discuss your investment goals and how we can help you achieve them.",
        }),
      ],
    }),
    defineField({
      name: "contactDetails",
      title: "Contact Details",
      type: "reference",
      to: [{ type: "contactDetails" }],
      validation: (Rule) => Rule.required(),
      description: "Reference to the main contact details document",
    }),
    defineField({
      name: "formSettings",
      title: "Form Settings",
      type: "object",
      fields: [
        defineField({
          name: "recipientEmail",
          title: "Recipient Email",
          type: "string",
          initialValue: "info@onterra.in",
          validation: (Rule) => Rule.required().email(),
        }),
        defineField({
          name: "successMessage",
          title: "Success Message",
          type: "text",
          rows: 2,
          initialValue:
            "Thank you for your message! We'll get back to you within 24 hours.",
        }),
        defineField({
          name: "errorMessage",
          title: "Error Message",
          type: "text",
          rows: 2,
          initialValue:
            "Sorry, there was an error sending your message. Please try again or contact us directly.",
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seoSettings",
      description: "SEO settings for this page",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "hero.title",
    },
  },
});
