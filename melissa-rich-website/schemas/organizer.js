export default {
  name: "organizer",
  title: "Organizer",
  type: "document",
  description: "An organizer",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
  ],
};