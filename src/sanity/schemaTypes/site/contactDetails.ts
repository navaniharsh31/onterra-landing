import { defineField, defineType } from "sanity";

export const contactDetails = defineType({
  name: "contactDetails",
  title: "Contact Details",
  type: "document",
  icon: () => "📞",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Contact Details",
      readOnly: true,
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "address",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "businessHours",
      title: "Business Hours",
      type: "string",
      description: 'e.g., "Monday - Friday, 9 AM - 6 PM EST"',
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "email",
    },
  },
});
