import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../interfaces/IProduct';

import ProductsModel from '../models/ProductsModel';
import ProductsService from '../services/ProductsService';

const productModel = new ProductsModel();
const productService = new ProductsService(productModel);

interface NewRequest extends Request {
  foundProduct?: IProduct,
}

export default async (req: NewRequest, _res: Response, next: NextFunction) => {
  const { product_code: productCode, new_price: newPrice } = req.body;

  const { code, name, costPrice, salesPrice } = (await productService.findByCode(productCode))
    .data as unknown as IProduct;

  if (!code) {
    return next({ code: 400, message: 'Code not found' });
  }

  if (newPrice < (salesPrice * 0.9) || newPrice > (salesPrice * 1.1)) {
    return next({ code: 400, message: 'Invalid new sales price' });
  }

  req.foundProduct = { code, name, costPrice, salesPrice };

  next();
};
