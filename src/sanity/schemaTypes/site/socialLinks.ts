import { defineField, defineType } from "sanity";

export const socialLinks = defineType({
  name: "socialLinks",
  title: "Social Links",
  type: "document",
  icon: () => "🔗",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Social Links",
      readOnly: true,
    }),
    defineField({
      name: "links",
      title: "Social Media Links",
      type: "array",
      of: [{ type: "socialMediaLink" }],
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
        title,
        subtitle: `${links?.length || 0} social links`,
      };
    },
  },
});
