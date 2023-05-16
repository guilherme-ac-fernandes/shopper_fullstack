import { productsAPI } from '.';

export const getAllProducts = async () => {
  const data = await productsAPI
    .get('/')
    .then((response) => response.data);
  return data;
};
