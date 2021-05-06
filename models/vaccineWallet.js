module.exports = (sequelize, DataTypes) => {
    const VaccineWallet = sequelize.define('vaccineWallets', {
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nextDate: {
            type: DataTypes.DATE,
            allowNull: true
        }, 
        citizenSusNumber: {
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