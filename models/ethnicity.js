module.exports = (sequelize, DataTypes) => {
    const Ethnicity = sequelize.define('ethnicitys', {
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