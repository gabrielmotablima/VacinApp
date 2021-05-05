module.exports = (sequelize) => {
    const HistoryAllergy = sequelize.define('historyAllergys', {
    },
        {
            classMethods: {
                associate: (models) => {
                    HistoryAllergy.hasMany(models.allergy, {
                        foreignKey: 'idHistoryAllergies',
                        as: 'allergies'
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