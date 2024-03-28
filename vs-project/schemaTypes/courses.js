import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'courseDetails',
  title: 'coursedetails',
  type: 'document',

  fields: [
    defineField({
      name: 'courseContent',
      title: 'courseContent',
      type: 'string',
    }),
    defineField({
      name: 'VideoLessonsAmount',
      title: 'VideoLessonsAmount',
      type: 'string',
    }),
    defineField({
      name: 'CourseAmount',
      title: 'CourseAmount',
      type: 'string',
    }),
    defineField({
      name: 'Duration',
      title: 'Duration',
      type: 'string',
    }),
  ],
})
