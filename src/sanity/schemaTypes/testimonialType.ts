import {defineField, defineType} from 'sanity'
import {MessageCircleIcon} from 'lucide-react'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial / Feedback',
  type: 'document',
  icon: MessageCircleIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Student/Parent Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Title/Role (e.g. Parent of Grade 4 Student)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quote',
      type: 'text',
      title: 'Testimonial Content',
      description: 'The actual feedback given by the student or parent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'avatar',
      type: 'image',
      title: 'Profile Photo',
      options: {hotspot: true},
    }),
  ],
})
