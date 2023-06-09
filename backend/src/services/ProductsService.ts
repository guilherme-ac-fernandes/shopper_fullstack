import { IPacks } from '../interfaces/IPacks';
import Sequelize from '../database/models';
import { IProduct } from '../interfaces/IProduct';
import ProductsModel from '../models/ProductsModel';

export default class ProductService {
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

  public async create(newData: IProduct) {
    try {
      const newProduct = await this._product.create(newData);
      return { code: 200, data: newProduct };
    } catch (error) {
      return { code: 500, message: 'Internal server error' };
    }
  }

  public async updateSales(
    { code, name, costPrice }: IProduct,
    newPrice: number,
    { packId, qty }: IPacks,
  ) {
    const transaction = await Sequelize.transaction();
    try {
      const updatedProduct = { code, name, costPrice, salesPrice: newPrice };
      await this._product.updateSales(updatedProduct, transaction);
      await this._product.updateSales({
        code: packId, name, costPrice, salesPrice: newPrice * qty,
      }, transaction);
      await transaction.commit();
      return { code: 201, data: { ...updatedProduct, salesPrice: newPrice.toFixed(2) } };
    } catch (error) {
      console.log(error);

      await transaction.rollback();
      return { code: 500, message: 'Internal server error' };
    }
  }
}
