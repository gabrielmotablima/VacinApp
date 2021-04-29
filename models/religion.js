module.exports = (sequelize, DataTypes) => {
    const Religion = sequelize.define('religions', {
        description: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    Religion.belongsTo(models.citizen)
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return Religion
}