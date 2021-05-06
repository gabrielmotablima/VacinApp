'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vaccineWallets', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      }, 
      citizenSusNumber: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        references: {
          model: 'citizens', 
          key: 'susNumber'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      nextDate: {
          type: Sequelize.DATE,
          allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vaccineWallets');
  }
};
