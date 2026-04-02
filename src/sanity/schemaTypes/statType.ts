import {defineField, defineType} from 'sanity'
import {BarChart3Icon} from 'lucide-react'

export const statType = defineType({
  name: 'stat',
  title: 'Success Numbers (Stats)',
  type: 'document',
  icon: BarChart3Icon,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Counter Label',
      description: 'e.g. Total Students, Classes Conducted',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'count',
      type: 'string',
      title: 'Number/Stat to Show',
      description: 'e.g. 1500+, 95%',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon Preset',
      description: 'Choose which visual icon to display',
      options: {
        list: [
          {title: 'Student/Graduated Speakers', value: 'Stud'},
          {title: 'Classes/Hand', value: 'Hand'},
          {title: 'Expert Mentors/Group', value: 'Group'},
          {title: 'Levels/Course', value: 'Course'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
})

