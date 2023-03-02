export default {
  name: 'bio',
  type: 'document',
  title: 'Bio',
  fields: [
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
    },
    {
      title: 'Full Bio',
      name: 'fullBio',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Bio Photo',
      name: 'photo',
      type: 'photo',
    },
  ],
}
