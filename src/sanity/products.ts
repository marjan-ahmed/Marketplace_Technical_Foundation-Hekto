export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'productId',
        title: 'Product ID',
        type: 'string',
      },
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'productImage',
        title: 'Produc Image',
        type: 'image',
        options: {
          hotspot: true // Enables hotspot for better image cropping
        },
      },
      {
        name: 'imageSrc',
        title: 'Image Source URL',
        type: 'url',
      },
      {
        name: 'productPrice',
        title: 'Product Price',
        type: 'number',
      }
    ]
  };
  