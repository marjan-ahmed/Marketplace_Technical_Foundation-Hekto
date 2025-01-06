// schemas/shopList.js
export default {
    name: 'shopList',
    title: 'Shop List',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Product Id',
        type: "string"
      },
      {
        name: 'productImage',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'productTitle',
        title: 'Product Title',
        type: 'string',
      },
      {
        name: 'productDesc',
        title: 'Product Description',
        type: 'string'
      },
      {
        name: 'oldPrice',
        title: 'Old Price',
        type: 'number',
      },
      {
        name: 'newPrice',
        title: 'Newer Price',
        type: 'number',
      },
    ],
  }
  