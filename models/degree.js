module.exports = (sequelize, DataTypes) => {
    const Degree = sequelize.define('degrees', {
        level: {
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
                    Degree.belongsTo(models.citizen, {
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
    return Degree
}