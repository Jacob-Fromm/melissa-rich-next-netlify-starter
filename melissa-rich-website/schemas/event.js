export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  description: 'An event',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      dateFormat: 'MMMM Do, YYYY',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Link to Event',
      type: 'url',
      description: 'The homepage of the event or ticket purchasing page',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'An image relevant to the event',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      description: 'A full description of the event',
      // validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      description: 'This can be used to identify the event in a URL',
    },
  ],
  orderings: [
    {
      title: 'Event name',
      name: 'eventNameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
    {
      title: 'Event date',
      name: 'eventDateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'date',
      media: 'image',
    },
  },
}
