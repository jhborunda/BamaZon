DROP DATABASE IF EXISTS bamaZon_DB;
CREATE DATABASE bamaZon_DB;

USE bamaZon_DB;

CREATE TABLE products(
 item_id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(100) NOT NULL,
 department_name VARCHAR(45) NOT NULL,
 price DECIMAL(10,2) NOT NULL,
 stock_quantity INT NOT NULL,
 PRIMARY KEY (item_id)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'rpnd81216';

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('75" UHD TV', 'Electronics', 1999.99, 12),
		('Foam Roller', 'Fitness', 21.99, 25),
        ('Garmin Vivoactive Watch', 'Fitness', 239.99, 15),
        ('iPhone 11', 'Electronics', 1799.99, 2),
        ('IAMS Dry Dog Food', 'Pets', 31.64, 100),
        ('Life Size ZEKE Statue', 'Sports', 999.99, 1),
        ('Kegerator', 'Appliances', 399.99, 7),
        ('Dogfish Head IPA', 'Liquor', 129.99, 7),
        ('Tortilla Chips', 'Grocery', 3.99, 60),
        ('Chucky Salsa', 'Grocery', 1.99, 80);
