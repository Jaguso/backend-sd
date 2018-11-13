'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address_Restaurants = sequelize.define('Address_Restaurants', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    zipcode: DataTypes.STRING
  }, {});
  Address_Restaurants.associate = function(models) {
    Address_Restaurants.belongsTo(models.Restaurants, {foreignKey: "restaurantId"});
  };
  return Address_Restaurants;
};