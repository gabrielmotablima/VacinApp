'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('historyAllergies', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      idAllergy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'allergies', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
        citizenSusNumber: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'citizens', 
            key: 'susNumber'
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
    await queryInterface.dropTable('historyAllergies');
  }
};
