import { IProduct } from '../interfaces/IProduct';
import ProductsModel from '../models/ProductsModel';
// import Sequelize from '../database/models';

export default class UserService {
  private _product: ProductsModel;

  constructor(userModel: ProductsModel) {
    this._product = userModel;
  }

  public async findByCode(code: number) {
    const productFound = await this._product.findByCode(code) as unknown as IProduct;
    if (!productFound) return { code: 404, message: 'Product not found' };
    return { code: 200, data: productFound };
  }

  public async findAll() {
    const products = await this._product.findAll();
    if (!products) return { code: 404, message: 'Products not found' };
    return { code: 200, data: products };
  }

  // public async create() {
  //   // const transaction = await Sequelize.transaction();
  //   // try {
  //   //   const { id: accountId } = await this._account.create(
  //   //     { balance: 100.00 },
  //   //     transaction,
  //   //   );
  //   //   await this._product.create(
  //   //     { username, password: BcryptService.encrypt(password), accountId },
  //   //     transaction,
  //   //   );
  //   //   await transaction.commit();
  //   //   const token = TokenHelpers.createToken(username, accountId);
  //   //   return { code: 201, data: { token, username, accountId } };
  //   // } catch (error) {
  //   //   // console.log(error);
  //   //   await transaction.rollback();
  //   //   return { code: 500, message: 'Internal server error' };
  //   // }
  //   return { ok: ok }
  // }
}
