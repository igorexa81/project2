module.exports = function(sequelize, DataTypes) {
    var Purchase = sequelize.define("productPurchase", {
        prod_id: DataTypes.STRING,
        purchaseDate: DataTypes.Date,
      cust_id: DataTypes.Number,
      purchase_id: DataTypes.Number
    });
    return Purchase;
  };
  