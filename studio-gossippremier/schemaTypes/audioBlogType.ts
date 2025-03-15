import {defineType, defineField} from 'sanity'

export const audioBlogType = defineType({
    title: 'Audio blog post',
    name: 'audioBlogPost',
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
                name: 'publishedAt',
                type: 'datetime',
                initialValue: () => new Date().toISOString(),
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
                title: 'Audio file',
                name: 'audio',
                type: 'file',
                options: {
                    accept: 'audio/*',
                },
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
