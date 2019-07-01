const models = require('../models');
const prod = models.product;
const cust = models.customer;
const prod_pur = models.productpurchase;

var exphbs = require("express-handlebars");



module.exports = function(app) {
  app.set('view engine', 'hbs');
// Set Handlebars as the default templating engine.
app.engine("hbs", exphbs(
  {
    extname: 'hbs',
    defaultView: 'main'
  }
)
);
// Render product into main page
app.get("/", function (req, res) {
  prod.findAll({
    
  }).then(function (prods_from_db) {
  var prods_from_db_ =JSON.parse(JSON.stringify(prods_from_db));

  console.log("HERE is the output from the DB: \n "+JSON.stringify(prods_from_db)+'\n');
    res.render("product_hbs", {
      products_json: prods_from_db_
    });
  });
});

  // Get all products
  app.get("/api/all", function(req, res) {
    prod.findAll({
      raw: true
    }).then(function(results) {
        res.json(results);
    });
  });

  // Get a specific product by category
  app.get("/api/:category", function(req, res) {
    if (req.params.book) {
      prod.findAll({
        where: {
          category: req.params.category
        }
      }).then(function(results) {
        res.json(results);
      });
    }//end if
  })
};

