'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dishes = sequelize.define('Dishes', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    pictures: DataTypes.ARRAY(sequelize.STRING)
  }, {});
  Dishes.associate = function(models) {
    Dishes.belongsTo(models.Restaurants, {foreignKey: "restaurantId"})
    Dishes.belongsTo(models.Orders, {foreignKey: "orderId"})
  };
  return Dishes;
};