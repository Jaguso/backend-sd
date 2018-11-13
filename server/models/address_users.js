'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address_Users = sequelize.define('Address_Users', {
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
  Address_Users.associate = function(models) {
    Address_Users.belongsTo(models.Users, {foreignKey: "userId"})
  };
  return Address_Users;
};