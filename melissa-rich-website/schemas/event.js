export default {
  name: "event",
  title: "Event",
  type: "document",
  description: "An event",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      description:
        "A short summary of the event, no more than 2 or 3 sentences",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      description: "A full description of the event",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "start",
      title: "Start date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "end",
      title: "End date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "An image relevant to the event",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      description: "The homepage of the event",
    },
    {
      name: "organizer",
      title: "Organizer",
      type: "reference",
      to: [
        {
          type: "organizer",
        },
      ],
    },
    {
      name: "venue",
      title: "Venue",
      type: "reference",
      to: [
        {
          type: "venue",
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      description: "This can be used to identify the event in a URL",
    },
  ],
  orderings: [
    {
      title: "Event name",
      name: "eventNameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
    {
      title: "Event date",
      name: "eventDateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "organizer.name",
      media: "image",
    },
  },
};