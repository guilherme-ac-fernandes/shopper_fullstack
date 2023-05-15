import { IPacks } from '../interfaces/IPacks';
import Packs from '../database/models/Packs';
import Products from '../database/models/Products';

export default class PacksModel {
  protected _model = Packs;
  protected _product = Products;

  async findByProductId(productId: number): Promise<IPacks | null> {
    return this._model.findOne({ where: { productId } });
  }

  public include() {
    return [
      { model: this._product, as: 'pack' },
      { model: this._product, as: 'product' },
    ];
  }

  async findAll(): Promise<IPacks[] | null> {
    return this._model.findAll({ include: this.include() });
  }
}
