import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import category from './category'
import subcategory from './subcategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,subcategory],
}
