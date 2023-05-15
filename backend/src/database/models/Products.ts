import { Model, BIGINT, STRING, DECIMAL } from 'sequelize';
import db from '.';

class Products extends Model {
  code!: number;
  name!: string;
  costPrice!: number;
  salesPrice!: number;
}

Products.init({
  code: {
    type: BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  costPrice: {
    type: DECIMAL(9, 2),
    allowNull: false,
  },
  salesPrice: {
    type: DECIMAL(9, 2),
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'products',
  timestamps: false,
});

export default Products;
