// Modules
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var path = require("path");
var queries = require("./custom_modules/queries.js");

// Middleware
var app = express();
app.use(bodyParser.json());
app.use(express.json());

// Database Connection
var con = mysql.createConnection({
    host: "localhost",
    user: "btc",
    password: "cpsc2221",
    database: "booktradingclub"
});

con.connect(function(err) {
    if(err) throw err;
});

// Routing
app.use("/", express.static(path.join(__dirname, "public", "login")));
app.use("/register", express.static(path.join(__dirname, "public", "registration")));
app.use("/dashboard", express.static(path.join(__dirname, "public", "dashboard")));

// AJAX Handlers
app.post("/register", function(req, res) {
    try {
        queries.registerUser(con, req.body);
        res.status(200);
    } catch(e) {
        console.log(e);
        res.status(500);
    }
    res.send();
});

app.post("/dashboard", function(req, res) {
    try {
        queries.uploadBook(con, req.body);
        res.status(200);
    } catch (e) {
        console.log(e);
        res.status(500);
    }
    res.send();
});

// Listener
console.log("Listening on port 3000...");
app.listen(3000);
