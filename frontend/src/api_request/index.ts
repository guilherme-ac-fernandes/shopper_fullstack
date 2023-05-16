import axios from 'axios';

export const productsAPI = axios.create({
  baseURL: 'http://localhost:3001/products',
});

export const packsAPI = axios.create({
  baseURL: 'http://localhost:3001/packs',
});
