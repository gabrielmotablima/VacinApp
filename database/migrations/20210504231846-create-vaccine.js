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
      date: {
          type: Sequelize.DATE,
          allowNull: false
      },
      nextDate: {
          type: Sequelize.DATE,
          allowNull: true
      },
      idVaccineWallet: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'vaccineWallets', 
          key: 'idDose'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updateAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vaccines');
  }
};
