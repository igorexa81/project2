const models = require('../models');
const prod = models.product;
const cust = models.customer;
const prod_pur = models.productpurchase;

// Routes
// =============================================================

// Uncomment this if the above successfully runs

module.exports = function (app) {
  // Create `ExpressHandlebars` instance with a default layout.


  // Set Handlebars as the default templating engine.

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
    prod.findByPk(req.params.id).then(product => {
      res.render("buyPage", {
        product:product,
        // name: currentProduct.name,
        // id: req.params.id,
        // inventory: currentProduct.inventory,
        // price: currentProduct.price
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
      quantityAvailable = currentProduct.inventory;
     prod.update(
        { inventory: quantityAvailable - req.body.quantity },
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
    if (req.params.category) {
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