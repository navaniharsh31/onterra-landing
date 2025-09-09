import { defineField, defineType } from "sanity";

export const address = defineType({
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
});
