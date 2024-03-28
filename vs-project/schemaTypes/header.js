import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'HeroHeader',
  title: 'heroheader',
  type: 'document',

  fields: [
    defineField({
      name: 'Content',
      title: 'Content',
      type: 'string',
    }),
    defineField({
      name: 'InitialText',
      title: 'InitialText',
      type: 'string',
    }),
    defineField({
      name: 'HighlightedText',
      title: 'HighlightedText',
      type: 'string',
    }),
    defineField({
      name: 'FinalText',
      title: 'FinalText',
      type: 'string',
    }),
    defineField({
      name: 'ButtonText',
      title: 'ButtonText',
      type: 'string',
    }),
  ],
})
