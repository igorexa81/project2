module.exports = function(sequelize, DataTypes) {
    var Purchase = sequelize.define("productPurchase", {
        prod_id: DataTypes.STRING,
        purchaseDate: DataTypes.DATE,
      cust_id: DataTypes.INTEGER,
      purchase_id: DataTypes.INTEGER
    });
    return Purchase;
  };
  