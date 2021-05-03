'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('citizens', {
      name: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      cpf: {
          type: DataTypes.STRING(11),
          allowNull: false
      },
      birthDate: {
          type: DataTypes.DATE,
          allowNull: false
      },
      motherName: {
          type: DataTypes.STRING(45),
          allowNull: false
      },
      sex: {
          type: DataTypes.CHARACTER(1),
          allowNull: false
      },
      address: {
          type: DataTypes.STRING(80),
          allowNull: false
      },
      riskyGroup: {
          type: DataTypes.ENUM,
          values: ['Comorbidities', '65+', 'All', 'None']
      },
      susNumber: {
          type: DataTypes.INT(5),
          allowNull: false,
          primaryKey: true
      },
      idCivilStatus: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'civilStatus', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idDegree: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'degrees', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idEthnicity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ethnicitys', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
      idHistoryAllergies: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'historyAllergies', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idReligion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'religions', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idHealthPlan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'healthPlans', 
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('citizens')
  }
};
