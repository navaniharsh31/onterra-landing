import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: () => "👤",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 8,
      description: "Main biography and experience description",
      validation: (Rule) => Rule.required().min(100),
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "string" }],
      description: "Educational qualifications and degrees",
    }),
    defineField({
      name: "careerHighlights",
      title: "Career Highlights",
      type: "array",
      of: [
        {
          type: "object",
          name: "careerHighlight",
          title: "Career Highlight",
          fields: [
            defineField({
              name: "period",
              title: "Time Period",
              type: "string",
              description: "e.g., '2006-12', '2012-20'",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "role",
              title: "Role/Position",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "role",
              subtitle: "period",
            },
          },
        },
      ],
    }),
    defineField({
      name: "certifications",
      title: "Certifications & Memberships",
      type: "array",
      of: [{ type: "string" }],
      description: "Professional certifications and association memberships",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),
    defineField({
      name: "isActive",
      title: "Active Team Member",
      type: "boolean",
      description: "Show this team member on the website",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "image",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || "Team Member",
        subtitle: subtitle || "No title",
        media: media,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Name A-Z",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
});
