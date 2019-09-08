var mysql = require("mysql");
var inquirer = require("inquirer");
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
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        console.table(result);
        questions(result);
    });
 };

//The first should ask them the ID of the product they would like to buy.
function questions(stock){
    inquirer
       .prompt([{
        type: "input",
        name: "itemID",
        message: "What is the ID number of the prodiuct you would like to buy?",
       }]).then(function (answer) {

        var productId = parseInt(answer.itemID);
        var product = checkForId(productId, stock);

        if (product) {
            quantity(product);
        } else {
            console.log("Opps. You did not select a valid ID");
            start();
        }
    });

};
 
 //The second message should ask how many units of the product they would like to buy.
 function quantity(product) {
    inquirer
        .prompt({
            type: "input",
            name: "quantityUnits",
            message: "How many units of this item would you like?"
        })
        .then(function (answer) {
            var userQuantity = parseInt(answer.quantityUnits);
            if (userQuantity > product.stock_quantity) {
                console.log("Sorry! Not enough items in stock.");
                start();
            } else {
                executePurchase(product, userQuantity);
            }
        });
 };
 
 //Execute purchase after quantity is seleceted

 function executePurchase(product, userQuantity) {





 }