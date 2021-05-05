module.exports = (sequelize, DataTypes) => {
    const Religion = sequelize.define('religions', {
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
                    Religion.belongsTo(models.citizen, {
                        foreignKey: 'citizenSusNumber',
                        as: 'citizens'
                    })
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return Religion
}