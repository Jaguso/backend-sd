'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    total: DataTypes.DECIMAL,
    status: {type: DataTypes.ENUM, values: ["in_cart", "confirmed", "cancelled"]},
    paypal_confirmation: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    Orders.hasOne(models.Comments)
    Orders.hasMany(models.Dishes)
  };
  return Orders;
};