module.exports = (sequelize, DataTypes) => {
    const CivilStatus = sequelize.define('civilStatus', 
    {
        description: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    CivilStatus.belongsTo(models.citizen)
                },
                get(data) {
                    return []
                }
            }
        }
    )
    return CivilStatus
}