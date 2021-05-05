'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('citizens', {
      name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      cpf: {
          type: Sequelize.STRING(11),
          allowNull: false
      },
      birthDate: {
          type: Sequelize.DATE,
          allowNull: false
      },
      motherName: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      sex: {
          type: Sequelize.STRING(1),
          allowNull: false
      },
      address: {
          type: Sequelize.STRING(80),
          allowNull: false
      },
      riskyGroup: {
          type: Sequelize.ENUM,
          values: ['Comorbidities', '65+', 'All', 'None']
      },
      susNumber: {
          type: Sequelize.INTEGER(5),
          allowNull: false,
          primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('citizens')
  }
};
