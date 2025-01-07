import { type SchemaTypeDefinition } from 'sanity';
import { blogSchema } from '../blog';
import shopList from '../shopList';
import shopGrid from '../shopGrid';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogSchema,
    shopGrid,
    shopList
  ],
}
