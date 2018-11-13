'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    celphone: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Restaurants)
    Users.hasOne(models.Address_Users)
    Users.belongsTo(models.Comments, {foreignKey: "commentId"})
  };
  return Users;
};