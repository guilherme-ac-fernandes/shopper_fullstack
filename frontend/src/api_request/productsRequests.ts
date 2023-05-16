import { productsAPI } from '.';

export const getAllProducts = async () => {
  const data = await productsAPI
    .get('/')
    .then((response) => response.data);
  return data;
};

export const updateProduct = async (productCode: number, newPrice: string) => {
  const data = await productsAPI
    .patch('/', {
      product_code: productCode, new_price: newPrice,
    })
    .then((response) => response.data);
  return data;
};
