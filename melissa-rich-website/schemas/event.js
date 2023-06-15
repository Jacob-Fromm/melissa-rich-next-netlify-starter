import {format, parseISO} from 'date-fns'

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
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'MMMM D, YYYY',
        timeFormat: ' ',
      },
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
      title: 'Event date',
      name: 'eventDateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'date',
    },
  },
}
