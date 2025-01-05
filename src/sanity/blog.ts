import { defineType } from "sanity";

export const blogSchema= defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'picture',
      type: 'image',
      title: 'Blog Picture',
      options: {
        hotspot: true, // Enables image cropping in the Studio
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Blog Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your article',
      options: {
        source: 'title', // Automatically generate a slug from the title
      },
    },    
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'publishDate',
      type: 'string',
      title: 'Publish Date',
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      description: 'A brief summary of the blog post, displayed in previews.',
    },
    {
      name: 'content1',
      type: 'array',
      title: 'Content 1 Section',
      of: [
        {
          type: 'block',
        }
      ],
  },
  {
    name: 'qoute',
    type: 'string',
    title: 'Any Qoute',
    description: 'please add ""(inverted commas)',
    validation: Rule => Rule.optional(),
  },
  {
    name: 'content2',
    type: 'array',
    title: 'Content 2 Section',
    of: [
      {
        type: 'block',
      }
    ],
},
{
  name: 'content3',
  type: 'array',
  title: 'Content 3 Section',
  of: [
    {
      type: 'block',
    }
  ],
},
{
  name: 'content4',
  type: 'array',
  title: 'Content 4 Section',
  of: [
    {
      type: 'block',
    }
  ],
},
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
      initialValue: 'Read More', // Default value for the field
    },
  ],
});
