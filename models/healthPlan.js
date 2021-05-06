module.exports = (sequelize, DataTypes) => {
    const HealthPlan = sequelize.define('healthPlans', {
        description: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        citizenSusNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    HealthPlan.belongsTo(models.citizen, {
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
    return HealthPlan
}