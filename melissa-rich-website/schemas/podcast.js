export default {
  name: 'podcast',
  type: 'document',
  title: 'Podcast',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Description',
      type: 'text',
      name: 'description',
    },
    {
      title: 'Main Image',
      type: 'photo',
      name: 'mainImage',
    },
    {
      title: 'Listen Now URL',
      name: 'url',
      type: 'url',
    },
  ],
}
