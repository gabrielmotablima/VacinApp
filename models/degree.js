module.exports = (sequelize, DataTypes) => {
    const Degree = sequelize.define('degrees', {
        level: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    Degree.belongsTo(models.citizen)
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return Degree
}