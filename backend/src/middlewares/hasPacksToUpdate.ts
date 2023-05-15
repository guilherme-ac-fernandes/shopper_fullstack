import { Request, Response, NextFunction } from 'express';
import { IPacks } from '../interfaces/IPacks';

import PacksModel from '../models/PacksModel';
import PacksService from '../services/PacksService';

const packsModel = new PacksModel();
const packsService = new PacksService(packsModel);

interface NewRequest extends Request {
  foundPacks?: IPacks,
}

export default async (req: NewRequest, _res: Response, next: NextFunction) => {
  const { product_code: productCode } = req.body;

  const foundPacks = await packsService.findByProductId(productCode);
  console.log(foundPacks.data);

  if (foundPacks.data) {
    req.foundPacks = foundPacks.data;
  }

  next();
};
