import { type SchemaTypeDefinition } from 'sanity';
import { blogSchema } from '../blog';
import shopList from '../shopList';
import shopGrid from '../shopGrid';
import products from '../products';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogSchema,
    products,
    shopGrid,
    shopList,
  ],
}
