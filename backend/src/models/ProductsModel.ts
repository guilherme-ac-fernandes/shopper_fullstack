import { Transaction } from 'sequelize/types';
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
    transaction: Transaction,
  ): Promise<IProduct | null> {
    return this._model.create(
      { code, name, costPrice, salesPrice },
      { transaction },
    );
  }

  async update({ code, costPrice, salesPrice }: IProduct, transaction: Transaction) {
    return this._model.update({ costPrice, salesPrice }, { where: { code }, transaction });
  }
}
