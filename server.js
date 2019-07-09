// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// configure handlebars view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static(path.join(__dirname, "public")));

// app.engine('handlebars', exphbs({
//   defaultView: 'main',
//   extname: 'handlebars',
//   layoutsDir: __dirname + '/../views/layouts/',
//   partialsDir: __dirname + '/../views/partials/'
// }));

// app.set('view engine', 'handlebars');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// Routes
// =============================================================
require("./routes/apiRoutes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
