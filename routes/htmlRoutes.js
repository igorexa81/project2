var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  // Load example page and pass in an example by id
  app.get("/products/:id", function (req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (product) {
      res.render("product", {
        product: product
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/purchase/:id", function (req, res) {
    db.Purchase.findOne({
      where: {
        prod_id: req.params.id,
        purchase_id: req.params.purchase_id,
        cust_id: req.params.cust_id

      }
    }).then(function (purchase) {
      res.render("purchase", {
        purchase: purchase
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};