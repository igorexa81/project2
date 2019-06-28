module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    productDepartment: DataTypes.STRING,
    productCategory: DataTypes.STRING,
    productName: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      }
  });
  return Product;
};
