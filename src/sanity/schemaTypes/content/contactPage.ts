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
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [
        defineField({
          name: "email",
          title: "Email Address",
          type: "string",
          initialValue: "info@onterra.in",
          validation: (Rule) => Rule.required().email(),
        }),
        defineField({
          name: "phone",
          title: "Phone Number",
          type: "string",
          initialValue: "+91 98765 43210",
        }),
        defineField({
          name: "address",
          title: "Address",
          type: "text",
          rows: 3,
          initialValue: "Mumbai, Maharashtra, India",
        }),
        defineField({
          name: "officeHours",
          title: "Office Hours",
          type: "string",
          initialValue: "Monday - Friday: 9:00 AM - 6:00 PM IST",
        }),
      ],
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
          initialValue: "Thank you for your message! We'll get back to you within 24 hours.",
        }),
        defineField({
          name: "errorMessage",
          title: "Error Message",
          type: "text",
          rows: 2,
          initialValue: "Sorry, there was an error sending your message. Please try again or contact us directly.",
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
          initialValue: "Contact Us - Onterra Capital",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 2,
          description: "Description for search engines (max 160 characters)",
          validation: (Rule) => Rule.max(160),
          initialValue:
            "Get in touch with Onterra Capital for real estate investment opportunities. Contact our team to discuss your investment goals and portfolio strategy.",
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
