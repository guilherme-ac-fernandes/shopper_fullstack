import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../interfaces/IProduct';
import ProductsService from '../services/ProductsService';

interface NewRequest extends Request {
  foundProduct?: IProduct,
}

export default class CarController {
  private _product: ProductsService;
  constructor(service: ProductsService) {
    this._product = service;
  }

  public async findByCode(req: Request, res: Response, next: NextFunction) {
    const { productCode } = req.params;
    const { code, message, data } = await this._product.findByCode(Number(productCode));
    if (message) return next({ code, message });
    return res.status(code).json(data);
  }

  public async findAll(_req: Request, res: Response, next: NextFunction) {
    const { code, message, data } = await this._product.findAll();
    if (message) return next({ code, message });
    return res.status(code).json(data);
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    const { code, message, data } = await this._product.create(req.body);
    if (message) return next({ code, message });
    return res.status(code).json(data);
  }

  public async updateSalesPrice(req: Request, res: Response, _next: NextFunction) {
    const { new_price: newPrice } = req.body;
    const { foundProduct } = req as NewRequest;

    try {
      const {
        code: updateCode, data: updateData,
      } = await this._product.updateSalesPrice(foundProduct as IProduct, Number(newPrice));
      return res.status(updateCode).json(updateData);
    } catch (error) {
      return { code: 500, message: 'Internal server error' };
    }
  }
}
