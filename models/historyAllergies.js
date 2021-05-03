module.exports = (sequelize) => {
    const HistoryAllergy = sequelize.define('historyAllergys', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    },
        {
            classMethods: {
                associate: (models) => {
                    HistoryAllergy.hasMany(models.allergy, {
                        foreignKey: 'idAllergy',
                        as: 'allergy'
                    })
                    HistoryAllergy.belongsTo(models.citizen, {
                        foreignKey: 'citizenSusNumber',
                        as: 'citizen'
                    })
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return HistoryAllergy
}