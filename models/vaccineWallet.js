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
                    VaccineWallet.belongsTo(models.citizen),
                        VaccineWallet.hasOne(models.vaccine)
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return VaccineWallet
}