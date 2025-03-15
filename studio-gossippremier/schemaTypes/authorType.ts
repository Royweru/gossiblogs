
import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: 'author',       
  title: 'Author',
  type: 'document',     
  fields:[
    defineField({
        name:'name',
        title:'Name',
        type:"string",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name:'email',
        title:'Email',
        type:"string",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name:'bio',
        title:'Bio',
        type:"text",
    }),
    defineField({
        name:'twitter',
        title:'Twitter',
        type:"string",
    }),
    defineField({
        name:'image',
        title:'Image',
        type:"image",
    }),
  ]
})