//Dependencies:
var express = require('express');
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

//Express app set up
app.use(express.static(__dirname + '/app'));

//Routes to connect to the server
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app)

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on: http://localhost:" + PORT);
});