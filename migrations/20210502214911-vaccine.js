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
        type: DataTypes.STRING(45),
        allowNull: false
      },
      type: {
          type: DataTypes.INT,
          allowNull: false
      },
      date: {
          type: DataTypes.DATE,
          allowNull: false
      },
      nextDate: {
          type: DataTypes.DATE,
          allowNull: true
      },
      idVaccineWallet: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'vaccines', 
          key: 'idDose'
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
    await queryInterface.dropTable('vaccines');
  }
};
