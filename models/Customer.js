module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        name: DataTypes.STRING,
        PASSWORD: DataTypes.STRING,
      cust_id: DataTypes.INTEGER
    });
    return Customer;
  };
  