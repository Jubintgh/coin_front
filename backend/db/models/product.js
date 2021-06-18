'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Product.associate = function(models) {

    Product.belongsTo(models.User, {foreignKey: 'ownerId'});
    Product.hasMany(models.Review, {foreignKey: 'productId'});
  };
  return Product;
};