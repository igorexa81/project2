module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    productDepartment: DataTypes.STRING,
    productCategory: DataTypes.STRING,
    productName: DataTypes.STRING,
    id: DataTypes.STRING
  });
  return Product;
};
