DROP DATABASE IF EXISTS product_db;
CREATE DATABASE product_db;

USE product_db;

CREATE TABLE productTable {
    id INTEGER AUTO_INCREMENT NOT NULL,
    productDepartment VARCHAR(50) NOT NULL,
    productCategory VARCHAR(10) NOT NULL,
    productName VARCHAR(50) NOT NULL,
    productInventory INTEGER (50) NOT NULL,
    productPrice DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id)  
}

INSERT INTO productTable (productDepartment, productCategory, productName, productInventory, productPrice)
VALUES ("Cosmetics", "Mascara", "Covergirl", 22, 15.95);

INSERT INTO productTable (productDepartment, productCategory, productName, productInventory, productPrice)
VALUES ("Hair Care", "Shampoo", "Pantene", 03, 8.95);

INSERT INTO productTable (productDepartment, productCategory, productName, productInventory, productPrice)
VALUES ("Hair Care", "Conditioner", "Pantene", 08, 10.95);

SELECT * FROM productTable;


--DROP DATABASE IF EXISTS testdb;
--CREATE DATABASE testdb;
