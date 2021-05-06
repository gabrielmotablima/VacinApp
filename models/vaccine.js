module.exports = (sequelize, DataTypes) => {
    const Vaccine = sequelize.define('vaccines', {
        description: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idVaccineWallet: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    Vaccine.belongsTo(models.vaccineWallet, {
                        foreignKey: 'idVaccineWallet',
                        as: 'vaccineWallet'
                    })
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return Vaccine
}