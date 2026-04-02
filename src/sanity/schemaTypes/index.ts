import { type SchemaTypeDefinition } from 'sanity'

import { authorType } from './authorType'
import { testimonialType } from './testimonialType'
import { statType } from './statType'
import { postType } from './postType'
import { categoryType } from './categoryType'
import { courseType } from './courseType'
import { legalType } from './legalType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [courseType, testimonialType, statType, postType, authorType, categoryType, legalType],
}

