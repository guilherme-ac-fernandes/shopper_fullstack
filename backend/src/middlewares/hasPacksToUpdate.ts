import { Request, Response, NextFunction } from 'express';
import { IPacks } from '../interfaces/IPacks';

import PacksModel from '../models/PacksModel';
import PacksService from '../services/PacksService';

const packsModel = new PacksModel();
const packsService = new PacksService(packsModel);

interface NewRequest extends Request {
  foundPack?: IPacks,
}

export default async (req: NewRequest, _res: Response, next: NextFunction) => {
  const { product_code: productCode } = req.body;
  const foundPacks = await packsService.findByProductId(productCode);

  if (foundPacks.data) {
    const { id, packId, productId, qty } = foundPacks.data as unknown as IPacks;
    req.foundPack = { id, packId, productId, qty };
  }

  next();
};
