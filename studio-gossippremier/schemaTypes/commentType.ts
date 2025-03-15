import { defineType, defineField } from 'sanity';

export const commentType = defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{ type: 'post' }],
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: "Comments won't show on the site without approval",
    }),
  ],
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      postTitle: 'post.title',
    },
    prepare({ name, comment, postTitle }) {
      return {
        title: `${name} on ${postTitle}`,
        subtitle: comment,
      };
    },
  },
});