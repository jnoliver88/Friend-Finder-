
// The path package is required to route the correct path to my html pages
var path = require("path");
var app = express();


// ROUTING

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("*", function (req, res) {
      res.redirect("/");
  });

  module.exports = app;


