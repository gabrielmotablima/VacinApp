module.exports = (sequelize, DataTypes) => {
    const Citizen = sequelize.define('citizens', {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING(11),
            allowNull: false,
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
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    Citizen.hasOne(models.civilStatus, {
                        foreignKey: 'idCivilStatus', 
                        as: 'civilStatus'
                    })
                    Citizen.hasOne(models.degree, {
                        foreignKey: 'idDegree',
                        as: 'degree'
                    })
                    Citizen.hasOne(models.ethnicity, {
                        foreignKey: 'idEthnicity',
                        as: 'ethnicity'
                    })
                    Citizen.hasOne(models.vaccineWallet, {
                        foreignKey: 'idVaccineWallet',
                        as: 'vaccineWallet'
                    })
                    Citizen.hasOne(models.historyAllergies, {
                        foreignKey: 'idHistoryAllergies',
                        as: 'historyAllergies'
                    })
                    Citizen.hasOne(models.religion, {
                        foreignKey: 'idReligion',
                        as: 'religion'
                    })
                    Citizen.hasMany(models.healthPlan, {
                        foreignKey: 'idHealthPlan',
                        as: 'healthPlan'
                    });
                },
                get(data) {
                    return [];
                }
            }
        }
    )
    return Citizen;
}