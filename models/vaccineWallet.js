module.exports = (sequelize, DataTypes) => {
    const VaccineWallet = sequelize.define('vaccineWallets', {
        idDose: {
            type: DataTypes.INT,
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    VaccineWallet.belongsTo(models.citizen, {
                        foreignKey: 'citizenSusNumber',
                        as: 'citizen'
                    }),
                        VaccineWallet.hasOne(models.vaccine, {
                            foreignKey: 'idVaccine',
                            as: 'vaccine'
                        })
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return VaccineWallet
}