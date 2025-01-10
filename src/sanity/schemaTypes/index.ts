import { type SchemaTypeDefinition } from 'sanity';
import { blogSchema } from '../blog';
import shopList from '../shopList';
import shopGrid from '../shopGrid';
import product from '../product';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogSchema,
    product,
    shopGrid,
    shopList,
  ],
}
