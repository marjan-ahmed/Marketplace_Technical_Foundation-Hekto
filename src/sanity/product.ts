import { title } from "process";

export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price',
        },
        {
            name: 'discountPercentage',
            type: 'number',
            title: 'Discount Percentage',
        },
        {
            name: 'priceWithoutDiscount',
            type: 'number',
            title: 'Price Without Discount',
            description: 'Original price before discount'
        },
        {
            name:'rating',
            type:'number',
            title:'Rating',
            description:'Rating of the product'
        },
        {
            name: 'ratingCount',
            type: 'number',
            title: 'Rating Count',
            description: 'Number of ratings'
        },
        {
            name: 'sku',
            title: 'SKU',
            type: 'string', 
        },
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            },
            description: 'Add tags like "new arrival", "bestseller", etc.'
        },
        {
            name: 'colors',
            type: 'array',
            title: 'Colors',
            of: [{ type: 'string' }], // Each color will be a string (e.g., "Red", "Blue", etc.)
            options: {
              layout: 'tags',  // The colors will appear as tags for easy selection
            },
            description: 'Add colors like Red, Blue, Green, etc.',
        },
        {
            name: 'sale',
            type: 'boolean',
            title: 'Sale',      
        },
        {
            name: 'image',
            type: 'image',
            title: 'Product Image',
            options: {
                hotspot: true // Enables cropping and focal point selection
            }
        }
    ]
};
