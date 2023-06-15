export default {
  name: 'socialMedia',
  type: 'object',
  title: 'Social Medias',
  fieldsets: [{name: 'socials', title: 'Socials'}],
  fields: [
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
