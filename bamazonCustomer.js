var mysql = require("mysql");
// var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rpnd81216",
  database: "bamaZon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
  });

function start() {
    console.log("Selecting all items available for sale...\n");
 
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        console.table(result);
        promptQuestions(result);
    })
 }

 //The first should ask them the ID of the product they would like to buy.
 //The second message should ask how many units of the product they would like to buy.

 