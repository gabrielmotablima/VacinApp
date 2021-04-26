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
            values: ['Comorbidities', '65+', 'All']
        },
        susNumber: {
            type: DataTypes.INT,
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    Citizen.hasOne(models.civilStatus)
                    Citizen.hasOne(models.degree)
                    Citizen.hasOne(models.ethnicity)
                    Citizen.hasOne(models.vaccineWallet)
                    Citizen.hasOne(models.historyAllergies)
                    Citizen.hasOne(models.religion)
                    Citizen.hasMany(models.healthPlan)
                },
                get(data) {
                    return [];
                }
            }
        }
    )
    return Citizen;
}