import {defineField, defineType} from 'sanity'
import {EditIcon, FileTextIcon, SearchIcon, SettingsIcon, QuoteIcon, ImageIcon} from 'lucide-react'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: EditIcon,
  groups: [
    {
      name: 'content',
      title: 'Writing Content',
      icon: FileTextIcon,
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO & Search',
      icon: SearchIcon,
    },
    {
      name: 'settings',
      title: 'Metadata & Setup',
      icon: SettingsIcon,
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
      description: 'Give your post a punchy headline',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      group: 'seo',
      description: 'Used for the link: studycubs.com/blog/your-slug. Auto-generated from title.',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')
          .slice(0, 96),
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'author',
      type: 'reference',
      group: 'settings',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Helpful for accessibility and SEO',
        },
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      group: 'settings',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      group: 'settings',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt (SEO Summary)',
      group: 'seo',
      description: 'Used for Google search results and sharing cards (max 160 characters).',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'body',
      type: 'array',
      group: 'content',
      title: 'Story Body',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
              {title: 'Highlight', value: 'highlight'},
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          icon: ImageIcon,
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Image Caption',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})

