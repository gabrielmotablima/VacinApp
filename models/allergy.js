module.exports = (sequelize, DataTypes) => {
    const Allergy = sequelize.define('allergys', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    Allergy.belongsTo(models.historyAllergies, {
                        foreignKey: 'idHistoryAllergies',
                        as: 'historyAllergies'
                    })
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return Allergy
}