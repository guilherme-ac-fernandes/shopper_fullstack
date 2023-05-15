import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../interfaces/IProduct';

import ProductsModel from '../models/ProductsModel';
import ProductsService from '../services/ProductsService';

const productModel = new ProductsModel();
const productService = new ProductsService(productModel);

export default async (req: Request, _res: Response, next: NextFunction) => {
  const { code, name, costPrice, salesPrice } = req.body as IProduct;

  const foundProduct = await productService.findByCode(code);

  if (foundProduct.data) {
    return next({ code: 400, message: 'Code already exists' });
  }

  if (!name || name.length < 3) {
    return next({ code: 400, message: 'Invalid name product, must contain at least 3 characters' });
  }

  if (isNaN(costPrice)) {
    return next({ code: 400, message: 'Invalid cost price' });
  }

  if (isNaN(salesPrice)) {
    return next({ code: 400, message: 'Invalid sales price' });
  }

  if (salesPrice < (costPrice * 0.9) || salesPrice > (costPrice * 1.1)) {
    return next({ code: 400, message: 'Invalid sales price' });
  }

  next();
};
