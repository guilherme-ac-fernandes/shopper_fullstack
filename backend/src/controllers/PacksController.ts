import { Request, Response, NextFunction } from 'express';
// import { IPacks } from '../interfaces/IPacks';
import PacksService from '../services/PacksService';

export default class PacksController {
  private _product: PacksService;
  constructor(service: PacksService) {
    this._product = service;
  }

  public async findAll(_req: Request, res: Response, next: NextFunction) {
    const { code, message, data } = await this._product.findAll();
    if (message) return next({ code, message });
    return res.status(code).json(data);
  }
}
