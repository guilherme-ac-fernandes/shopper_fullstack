import { IProduct } from '../interfaces/IProduct';
import Products from '../database/models/Products';

export default class UserModel {
  protected _model = Products;

  async findByCode(code: number): Promise<IProduct | null> {
    return this._model.findOne({ where: { code } });
  }

  async findAll(): Promise<IProduct[] | null> {
    return this._model.findAll({ attributes: { exclude: ['id', 'password'] } });
  }

  async create(
    { code, name, costPrice, salesPrice }: IProduct,
  ): Promise<IProduct | null> {
    return this._model.create({ code, name, costPrice, salesPrice });
  }

  async updateSalesPrice({ code, salesPrice }: IProduct) {
    return this._model.update({ salesPrice }, { where: { code } });
  }
}
