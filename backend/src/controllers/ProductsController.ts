import { Request, Response, NextFunction } from 'express';
import ProductsService from '../services/ProductsService';

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
}
