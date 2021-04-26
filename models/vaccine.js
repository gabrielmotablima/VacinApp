module.exports = (sequelize, DataTypes) => {
    const Vaccine = sequelize.define('vaccines', {
        description: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        type: {
            type: DataTypes.INT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nextDate: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    Vaccine.belongsTo(models.vaccineWallet)
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return Vaccine
}