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
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true 
        },
      },
      {
        name: 'productCurrentPrice',
        title: 'Product Current Price',
        type: 'string',
        options: {
            placeholder: 'Enter "$" symbole before price'
        }
      },
      {
        name: 'productOldPrice',
        title: 'Product Old Price',
        type: 'string',
        options: {
            placeholder: 'Enter "$" symbole before price'
        }
      }
    ]
  };
  