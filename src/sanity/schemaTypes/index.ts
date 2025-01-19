import { type SchemaTypeDefinition } from 'sanity';
import { blogSchema } from '../blog';
import products from '../products';
import faq from '../faq';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    products,
    blogSchema,
    faq,
  ],
}
