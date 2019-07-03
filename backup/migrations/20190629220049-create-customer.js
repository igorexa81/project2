'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers', {
      name: {
        type: Sequelize.STRING
      },
      PASSWORD: {
        type: Sequelize.STRING
      },
      cust_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customers');
  }
};