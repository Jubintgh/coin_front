'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    // price: Sequelize.DECIMAL
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
  Product.getAllProducts = async function () {
    const allProducts = await Product.findAll();
    return allProducts;
  }
  //create
  Product.createProduct = async function(ownerId, title, imageUrl, description) {

    const product = await Product.create({
      ownerId,
      title,
      imageUrl,
      description
    });
    return product;
  }
  //update
  Product.prototype.updateProduct = async function(editedProd){
    const currentProduct = await getCurrentProduct(editedProd.id);
    await currentProduct.update(editedProd)
    return res.json(currentProduct);
  }
  //delete
  Product.deleteProduct = async function(){
    Product.destroy({
      where: {
        productId
      }
    })
    return;
  }

  return Product;
};