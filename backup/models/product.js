'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    department: DataTypes.STRING,
    inventory: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    prod_id:  { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  product.associate = function(models) {
    product.belongsToMany(models.customer, {
      through: models.productPurchase,
      foreignKey: 'prod_id',
      onDelete: 'CASCADE'
 }); 
  };
  return product;
};