'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define('Restaurants', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    name: DataTypes.STRING,
    cathegory: {type: DataTypes.ENUM, values: ["1", "2", "3", "4", "5"]},
    pictures: DataTypes.ARRAY(DataTypes.STRING),
    opens: DataTypes.STRING,
    closes: DataTypes.STRING
  }, {});
  Restaurants.associate = function(models) {
    Restaurants.belongsTo(models.Users, {foreignKey: "userId"})
    Restaurants.hasMany(models.Dishes)
    Restaurants.hasOne(Address_Restaurants)
  };
  return Restaurants;
};