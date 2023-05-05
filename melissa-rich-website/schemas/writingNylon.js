export default {
  title: 'Writing - Nylon',
  type: 'document',
  name: 'writingNylon',
  fields: [
    {
      title: 'Title',
      type: 'string',
      name: 'title',
    },
    {
      title: 'Tagline',
      type: 'string',
      name: 'tagline',
    },
    {
      title: 'Image URL',
      type: 'url',
      name: 'image',
    },
    {
      title: 'Link to Piece',
      type: 'url',
      name: 'url',
    },
    {
      title: 'Publication Date',
      type: 'datetime',
      name: 'publicationDate',
      options: {
        dateFormat: 'MMMM D, YYYY',
        timeFormat: ' ',
      },
    },
  ],
}
