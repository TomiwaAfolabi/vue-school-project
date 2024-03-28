import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'basicCardContent',
  title: 'basicCardContent',
  type: 'document',

  fields: [
    defineField({
      name: 'BasicContent',
      title: 'BasicContent',
      type: 'string',
    }),
    defineField({
      title: 'title',
      name: 'titles',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
