// import { IPacks } from '../interfaces/IPacks';
import PacksModel from '../models/PacksModel';

export default class PacksService {
  private _product: PacksModel;

  constructor(userModel: PacksModel) {
    this._product = userModel;
  }

  public async findAll() {
    const products = await this._product.findAll();
    if (!products) return { code: 404, message: 'Packs not found' };
    return { code: 200, data: products };
  }
}
