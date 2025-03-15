import {defineType, defineField} from 'sanity'

export const videoBlogType = defineType({
  title: 'Video blog post',
  name: 'videoBlogPost',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
     defineField({
          name: 'thumbnail',
          type: 'image',
        }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200,
        },
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'publishedAt',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      }),
    defineField({
      title: 'Excerpt',
      name: 'excerpt',
      type: 'string',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
        title: 'Video file',
        name: 'video',
        type: 'mux.video',
    }),
    defineField({
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{type: 'author'}],
      }),
      defineField({
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{type: 'category'}],
      }),
  ],
})
