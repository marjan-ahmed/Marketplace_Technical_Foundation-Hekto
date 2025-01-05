import { type SchemaTypeDefinition } from 'sanity';
import { blogSchema } from '../blog';
import shopList from '../shopList';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogSchema,
    shopList
  ],
}
