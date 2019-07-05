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
  product.sync().then(() => {
    product.create({
      name: 'Covergirl',
      category: 'Mascara',
      inventory: 22, 
      price: 16, 
      prod_id: 1, 
      department: "Cosmetics"
    });
    product.create({
      name: 'Pantene',
      category: 'Shampoo',
      inventory: 3, 
      price: 9, 
      prod_id: 2, 
      department: "Hair Care"
    });
    product.create({
      name: 'Pantene',
      category: 'Conditioner',
      inventory: 8, 
      price: 11, 
      prod_id: 3, 
      department: "Hair Care"
    });
    product.create({
      name: 'Retinol A',
      category: 'Moisturiser',
      inventory: 38, 
      price: 25, 
      prod_id: 4, 
      department: "Skin Care"
    });
    product.create({
      name: 'Retna A',
      category: 'Moisturiser',
      inventory: 38, 
      price: 25, 
      prod_id: 5, 
      department: "Skin Care"
    });
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