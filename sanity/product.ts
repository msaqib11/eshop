export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },{
        name: 'subCategory',
        title: 'Sub Category',
        type: 'reference',
        to: [
          {
            type: 'subcategory',
          },
        ],
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
          },
        ],
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [
          {
            type: 'category',
          },
        ],
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 200,
        },
      },
    ],
  };
  