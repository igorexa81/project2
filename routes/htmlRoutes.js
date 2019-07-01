var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.prod.findAll({}).then(function (prods_from_db) {
    var prods_from_db_ =JSON.parse(JSON.stringify(prods_from_db));
    var prods_from_db_ =JSON.parse(JSON.stringify(prods_from_db));
    res.render("product",{
      products: prods_from_db_
    });
    });
  });

  // Load example page and pass in an example by id
  app.get("/products/:id", function (req, res) {
    db.prod.findOne({
      where: {
        prod_id: req.params.id
      }
    }).then(function (product_from_db) {
        var prods_from_db_ =JSON.parse(JSON.stringify(prods_from_db));
      res.render("product", {
        products: prods_from_db_
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};