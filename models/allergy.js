module.exports = (sequelize, DataTypes) => {
    const Allergy = sequelize.define('allergies', {
        description: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
        }, {});
        Allergy.associate = (models) => {
            Allergy.belongsTo(models.historyAllergies, {
                foreignKey: 'idHistoryAllergies',
                as: 'historyAllergies'
            })
        };
    return Allergy
}