module.exports = (sequelize, DataTypes) => {
    const Ethnicity = sequelize.define('ethnicitys', {
        description: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    Ethnicity.belongsTo(models.citizen)
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return Ethnicity
}