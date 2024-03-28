import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'basicUltraContent',
  title: 'basicUltraContent',
  type: 'document',

  fields: [
    defineField({
      name: 'UltraContent',
      title: 'UltraContent',
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
