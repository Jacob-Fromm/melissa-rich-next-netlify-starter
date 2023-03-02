export default {
  name: 'project',
  type: 'document',
  title: 'Project',
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
      title: 'Press',
      name: 'press',
      type: 'array',
      of: [{type: 'press'}],
    },
  ],
}
