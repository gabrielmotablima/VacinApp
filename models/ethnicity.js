module.exports = (sequelize, DataTypes) => {
    const Ethnicity = sequelize.define('ethnicitys', {
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
                    Ethnicity.belongsTo(models.citizen, {
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
    return Ethnicity
}