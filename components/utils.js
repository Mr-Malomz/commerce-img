import {
  createBigCommerceClient,
  createBigCommerceEnhancer,
} from '@uniformdev/canvas-bigcommerce';

export const bigCommerceEnhancer = createBigCommerceEnhancer({
  client: createBigCommerceClient({
    storeHash: process.env.NEXT_PUBLIC_BIGCOMMERCE_STORE_HASH,
    token: process.env.NEXT_PUBLIC_BIGCOMMERCE_TOKEN,
  }),
  createProductOptions: () => {
    return {
      include_fields: ['id', 'name', 'price'],
    };
  },
});
