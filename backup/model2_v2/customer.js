'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    name: DataTypes.STRING,
    PASSWORD: DataTypes.STRING,
    cust_id: {type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false}
  }, {
    timestamps: false
  });
  customer.associate = function(models) {
    // associations can be defined here
    customer.belongsToMany(models.product, {
      through: models.productPurchase,
      foreignKey: 'cust_id',
      onDelete: 'CASCADE'
 }); 
  };
  return customer;
};