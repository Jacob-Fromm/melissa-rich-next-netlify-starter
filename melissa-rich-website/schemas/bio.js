export default {
  name: 'bio',
  type: 'document',
  title: 'Bio',
  fieldsets: [{name: 'socials', title: 'Socials'}],
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
    {
      title: 'Twitter',
      name: 'twitter',
      type: 'string',
      fieldset: 'socials',
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'string',
      fieldset: 'socials',
    },
    {
      title: 'TikTok',
      name: 'tiktok',
      type: 'string',
      fieldset: 'socials',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      fieldset: 'socials',
    },
  ],
}
