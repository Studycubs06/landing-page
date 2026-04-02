import {defineField, defineType} from 'sanity'
import {BookOpenIcon, InfoIcon, ListIcon, DollarSignIcon} from 'lucide-react'

export const courseType = defineType({
  name: 'course',
  title: 'Course Listing',
  type: 'document',
  icon: BookOpenIcon,
  groups: [
    {
      name: 'basic',
      title: 'Basic Info',
      icon: InfoIcon,
      default: true,
    },
    {
      name: 'details',
      title: 'Course Details',
      icon: ListIcon,
    },
    {
      name: 'pricing',
      title: 'Pricing & Setup',
      icon: DollarSignIcon,
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'basic',
      validation: (rule) => rule.required(),
      description: 'The name of the course as it appears on the website',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'basic',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      group: 'basic',
      options: {hotspot: true},
      description: 'Main thumbnail image for the course card',
    }),
    defineField({
      name: 'level',
      type: 'number',
      group: 'details',
      title: 'Difficulty Level (1, 2, or 3)',
      validation: (rule) => rule.required().min(1).max(3),
    }),
    defineField({
      name: 'grades',
      type: 'string',
      group: 'details',
      title: 'Grade Range (e.g. Grade 3 - 6)',
    }),
    defineField({
      name: 'description',
      type: 'text',
      group: 'details',
      description: 'Brief overview of the course content',
    }),
    defineField({
      name: 'features',
      type: 'array',
      group: 'details',
      of: [{type: 'string'}],
      title: 'Curriculum Features',
      description: 'Bullet points of what students will learn',
    }),
    defineField({
      name: 'price',
      type: 'number',
      group: 'pricing',
      title: 'Monthly Fee (PKR/USD)',
      initialValue: 3000,
    }),
    defineField({
      name: 'duration',
      type: 'string',
      group: 'pricing',
      title: 'Class Duration',
      initialValue: '1 Hour 15 Minutes',
    }),
    defineField({
      name: 'classesPerMonth',
      type: 'number',
      group: 'pricing',
      title: 'Classes per Month',
      initialValue: 12,
    }),
    defineField({
      name: 'mentorRatio',
      type: 'string',
      group: 'pricing',
      title: 'Mentor-Student Ratio',
      initialValue: '1:3',
    }),
  ],
})

