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
        QuestionPrompt(result);
    });
 };

//The first should ask them the ID of the product they would like to buy.
//The second message should ask how many units of the product they would like to buy.

function QuestionPrompt(){
	inquirer.prompt([
	{
		name: "ID",
		type: "input",
		message:"Please enter Item ID of the product you like to buy.",
	},
	{
		name:"Quantity",
		type:"input",
		message:"How many units of the product would you like top buy?",
	},

 ]).then(function(answers){
 	var quantityNeeded = answers.Quantity;
 	var IDrequested = answers.ID;
 	buyProducts(IDrequested, quantityNeeded);
 });
};

function buyProducts(ID, totalNeeded){
	connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
		if(err){console.log(err)};
		if(totalNeeded <= res[0].stock_quantity){
			var totalCost = res[0].price * totalNeeded;
			console.log("Your total cost for " + totalNeeded + " " +res[0].product_name + " is $" + totalCost + " Thank you!");

			connection.query("UPDATE products SET stock_quantity = stock_quantity - " + totalNeeded + "WHERE item_id = " + ID);
		} else{
            console.log("Sorry we do not have enough " + res[0].product_name + " to complete your order, please check your quantity.");
            start();
		};
	
	});
};