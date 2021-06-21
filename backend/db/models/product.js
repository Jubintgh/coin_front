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

  //read - single
  Product.getCurrentProductById = async function(productId){
    return Product.findByPk(productId);
  }
  //read - all
  Product.getAllProducts = function () {
    return Product.findAll();
  }
  //create
  Product.prototype.createProduct = async function(ownerId, title, imageUrl, description) {
    const product = await Product.create({
      ownerId,
      title,
      imageUrl,
      description
    });
    return product;
  }
  //update
  Product.prototype.updateProduct = async function(productId, updatedInfo){
    const currentProduct = getCurrentProduct(productId);
    currentProduct.update(updatedInfo)
  }
  //delete
  Product.deleteProduct = async function(productId){
    Product.destroy({
      where: {
        productId
      }
    })
  }
};