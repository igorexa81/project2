'use strict';
module.exports = (sequelize, DataTypes) => {
  const productPurchase = sequelize.define('productPurchase', {
    purchaseDate: DataTypes.DATE,
    prod_id: DataTypes.INTEGER,
    cust_id: DataTypes.INTEGER
  }, {
    timestamps: false
  });
    
  productPurchase.associate = function(models) {
    // associations can be defined here

  };
  return productPurchase;
};