import { Model, BIGINT } from 'sequelize';
import db from '.';
import Products from './Products';

class Packs extends Model {
  id!: number;
  packId: number;
  productId: number;
  qty: number;
}

Packs.init({
  id: {
    type: BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  packId: {
    type: BIGINT,
    allowNull: false,
    references: {
      model: 'products',
      key: 'code',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  productId: {
    type: BIGINT,
    allowNull: false,
    references: {
      model: 'products',
      key: 'code',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  qty: {
    type: BIGINT,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'packs',
  timestamps: false,
});

Packs.belongsTo(Products, { foreignKey: 'packId', as: 'pack' });
Packs.belongsTo(Products, { foreignKey: 'productId', as: 'product' });

Products.hasMany(Packs, { foreignKey: 'packId', as: 'pack' });
Products.hasMany(Packs, { foreignKey: 'productId', as: 'product' });

export default Packs;
