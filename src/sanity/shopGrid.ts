// schemas/shopGrid.js
export default {
    name: "shopGrid",
    title: "Shop Grid",
    type: "document",
    fields: [
      {
        name: "productTitle",
        title: "Product Title",
        type: "string",
      },
      {
        name: "id",
        title: "Product ID",
        type: "string",
        description: "A unique identifier for the product.",
      },
      {
        name: "productImage",
        title: "Product Image",
        type: "image",
        options: {
          hotspot: true, // Enables image cropping
        },
      },
      {
        name: "olderPrice",
        title: "Older Price",
        type: "number",
      },
      {
        name: "newPrice",
        title: "New Price",
        type: "number",
      },
      {
        name: "description",
        title: "Product Description",
        type: "text",
        description: "Optional description of the product.",
      },
    ],
  };
  