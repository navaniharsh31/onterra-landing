import { defineField, defineType } from "sanity";

export default defineType({
  name: "footerSettings",
  title: "Footer Settings",
  type: "document",
  icon: () => "🦶",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Footer Settings",
      readOnly: true,
    }),
    defineField({
      name: "company",
      title: "Company Information",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Company Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "tagline",
          title: "Tagline",
          type: "string",
          description: "Brief company description or tagline",
        }),
        defineField({
          name: "logo",
          title: "Logo",
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
        }),
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact Information",
      type: "object",
      fields: [
        defineField({
          name: "address",
          title: "Address",
          type: "object",
          fields: [
            defineField({
              name: "street",
              title: "Street Address",
              type: "string",
            }),
            defineField({
              name: "city",
              title: "City",
              type: "string",
            }),
            defineField({
              name: "state",
              title: "State/Province",
              type: "string",
            }),
            defineField({
              name: "zipCode",
              title: "ZIP/Postal Code",
              type: "string",
            }),
            defineField({
              name: "country",
              title: "Country",
              type: "string",
            }),
          ],
        }),
        defineField({
          name: "phone",
          title: "Phone Number",
          type: "string",
        }),
        defineField({
          name: "email",
          title: "Email Address",
          type: "string",
          validation: (Rule) => Rule.email(),
        }),
        defineField({
          name: "businessHours",
          title: "Business Hours",
          type: "string",
          description: 'e.g., "Monday - Friday, 9 AM - 6 PM EST"',
        }),
      ],
    }),
    defineField({
      name: "socialMedia",
      title: "Social Media Links",
      type: "array",
      of: [
        defineField({
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
              type: "url",
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
          },
        }),
      ],
    }),
    defineField({
      name: "legal",
      title: "Legal Information",
      type: "object",
      fields: [
        defineField({
          name: "copyrightText",
          title: "Copyright Text",
          type: "string",
          description: 'e.g., "© 2024 Onterra Capital. All rights reserved."',
        }),
        defineField({
          name: "legalLinks",
          title: "Legal Links",
          type: "array",
          of: [
            defineField({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "url",
                  title: "URL",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "url",
                },
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      fields: [
        defineField({
          name: "organizationSchema",
          title: "Enable Organization Schema",
          type: "boolean",
          initialValue: true,
          description: "Include structured data for search engines",
        }),
        defineField({
          name: "foundingDate",
          title: "Founding Date",
          type: "date",
          description: "Company founding date for structured data",
        }),
        defineField({
          name: "industry",
          title: "Industry",
          type: "string",
          description: 'e.g., "Real Estate Investment"',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "company.name",
    },
    prepare({ title }) {
      return {
        title: title || "Footer Settings",
      };
    },
  },
});
