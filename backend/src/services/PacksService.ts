import { IPacks } from '../interfaces/IPacks';
import PacksModel from '../models/PacksModel';

export default class PacksService {
  private _packs: PacksModel;

  constructor(userModel: PacksModel) {
    this._packs = userModel;
  }

  public async findByProductId(code: number) {
    const packsFound = await this._packs.findByProductId(code) as unknown as IPacks;
    if (!packsFound) return { code: 404, message: 'Packs not found' };
    return { code: 200, data: packsFound };
  }

  public async findAll() {
    const products = await this._packs.findAll();
    if (!products) return { code: 404, message: 'Packs not found' };
    return { code: 200, data: products };
  }
}
