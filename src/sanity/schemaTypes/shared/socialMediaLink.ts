import { defineField, defineType } from "sanity";

export const socialMediaLink = defineType({
  name: "socialMediaLink",
  title: "Social Media Link",
  type: "object",
  fields: [
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: [
          { title: "LinkedIn", value: "linkedin" },
          { title: "Twitter", value: "twitter" },
          { title: "Facebook", value: "facebook" },
          { title: "Instagram", value: "instagram" },
          { title: "YouTube", value: "youtube" },
          { title: "Newsletter", value: "newsletter" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
      description: "Full URL to the social media profile",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Accessibility Label",
      type: "string",
      description: "Screen reader friendly label",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "platform",
      subtitle: "url",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || "Social Media Link",
        subtitle: subtitle || "No URL",
      };
    },
  },
});
