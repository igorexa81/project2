const models = require('../models');
const prod = models.product;
const cust = models.customer;
const prod_pur = models.productpurchase;

var exphbs = require("express-handlebars");
const handlebars = require('handlebars');


// Routes
// =============================================================

// Uncomment this if the above successfully runs

module.exports = function (app) {
  // Create `ExpressHandlebars` instance with a default layout.


  // Set Handlebars as the default templating engine.
  app.engine('handlebars', exphbs({
    defaultView: 'main',
    extname: 'handlebars',
    layoutsDir: __dirname + '/../views/layouts/',
    partialsDir: __dirname + '/../views/partials/'
  }));

  app.set('view engine', 'handlebars');

  // Render product into main page
  app.get("/", function (req, res) {
    prod.findAll({}).then(function (allProducts) {

      console.log("HERE is the output from the DB: \n " + JSON.stringify(allProducts) + '\n');
      res.render("home_page", {
        products: allProducts,
        title: "All Products"
      });
    });
  });

  app.get("/item/:id", function (req, res) {
    prod.findByPk(req.params.id).then(currentProduct => {
      res.render("buyPage", {
        name: currentProduct.name,
        id: req.params.id,
        inventory: currentProduct.inventory
      });
    })
  });

  app.post("/search", async function (req, res) {

    try {
      let searchedProducts = await prod.findAll({
        where: {
          [models.Sequelize.Op.or]: [{
              name: {
                [models.Sequelize.Op.like]: `%${req.body.searchTerms}%`
              }
            },
            {
              department: {
                [models.Sequelize.Op.like]: `%${req.body.searchTerms}%`
              }
            },
            {
              category: {
                [models.Sequelize.Op.like]: `%${req.body.searchTerms}%`
              }
            }
          ]
  
        },
      });
      res.render("home_page", {
        products: searchedProducts,
        title: "Search Results"
      });
    } catch (error) {
      res.render("home_page", {
        products: [],
        title: "Error During Search"
      });
    }
    

  });

  app.post("/purchase/:id", function (req, res) {
    var quantity = 0;
    prod.findByPk(req.params.id).then(currentProduct => {
      quantity = currentProduct.inventory;
     prod.update(
        { inventory: quantity - req.body.purchase },
        { where: { prod_id: req.params.id }} 
        ).then(
          prod.findAll({}).then(function (allProducts) {

            console.log("HERE is the output from the DB: \n " + JSON.stringify(allProducts) + '\n');
            res.render("home_page", {
              products: allProducts,
              title: "All Products"
            });
          })
                
        );
      })
  });

  // Get all products by category
  app.get("/api/:category", function (req, res) {
    if (req.params.book) {
      prod.findAll({
        where: {
          category: req.params.category
        }
      }).then(function (results) {
        res.json(results);
      });
    } //end if
  })
};