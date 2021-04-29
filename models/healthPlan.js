module.exports = (sequelize, DataTypes) => {
    const HealthPlan = sequelize.define('healthPlans', {
        description: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    HealthPlan.belongsTo(models.citizen)
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return HealthPlan
}