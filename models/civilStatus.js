module.exports = (sequelize, DataTypes) => {
    const CivilStatus = sequelize.define('civilStatus', 
    {
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
                    CivilStatus.belongsTo(models.citizen, {
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
    return CivilStatus
}