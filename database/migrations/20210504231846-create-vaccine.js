'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vaccines', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      }, 
      description: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      type: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      idVaccineWallet: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'vaccineWallets', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('vaccines');
  }
};
