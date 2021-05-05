module.exports = (sequelize, DataTypes) => {
    const VaccineWallet = sequelize.define('vaccineWallets', {
        idDose: {
            type: DataTypes.INTEGER,
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
    return VaccineWallet
}