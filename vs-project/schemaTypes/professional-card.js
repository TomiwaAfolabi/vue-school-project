import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'professionalCardContent',
  title: 'professionalCardContent',
  type: 'document',

  fields: [
    defineField({
      name: 'professionalContent',
      title: 'professionalContent',
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
