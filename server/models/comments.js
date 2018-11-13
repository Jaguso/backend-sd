'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    rating: {type: DataTypes.ENUM, values: ["1", "2","3"]},
    comment: DataTypes.TEXT
  }, {});
  Comments.associate = function(models) {
    Comments.belongsTo(models.Orders, {foreignKey: "orderId"})
    Comments.hasOne(models.Users)
  };
  return Comments;
};