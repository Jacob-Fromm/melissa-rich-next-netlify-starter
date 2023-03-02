export default {
  name: 'photo',
  type: 'image',
  title: 'Images',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
    },
    {
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    },
  ],
}
