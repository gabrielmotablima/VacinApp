'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vaccineWallets', { 
      idDose: {
        type: DataTypes.INT,
        allowNull: false
      }, 
      citizenSusNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'citizens', 
          key: 'susNumber'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idVaccine: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'vaccines', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vaccineWallets');
  }
};
