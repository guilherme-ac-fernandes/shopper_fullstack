module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('packs', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      pack_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'products',
          key: 'code',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      product_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'products',
          key: 'code',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      qty: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('packs');
  },
};
