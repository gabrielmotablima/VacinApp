module.exports = (sequelize) => {
    const HistoryAllergy = sequelize.define('historyAllergys', {
    },
        {
            classMethods: {
                associate: (models) => {
                    HistoryAllergy.hasMany(models.allergy)
                    HistoryAllergy.belongsTo(models.citizen)
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return HistoryAllergy
}