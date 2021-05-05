'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('religions', { 
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
      citizenSusNumber: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        defaultValue: 0,
        references: {
          model: 'citizens', 
          key: 'susNumber'
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
    await queryInterface.dropTable('religions');
  }
};
