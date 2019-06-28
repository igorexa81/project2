DROP DATABASE IF EXISTS product_db;
CREATE DATABASE product_db;

USE product_db;

CREATE TABLE productTable (
    id INTEGER AUTO_INCREMENT NOT NULL,
    productDepartment VARCHAR(50) NOT NULL,
    productCategory VARCHAR(50) NOT NULL,
    productName VARCHAR(50) NOT NULL,
    productInventory INTEGER (50) NOT NULL,
    productPrice DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id)  
);
CREATE TABLE customer (
    name VARCHAR(40) NOT NUll,
    PASSWORD VARCHAR(10) NOT NULL,
    cust_id VARCHAR(10) NOT NULL,
    PRIMARY KEY (cust_id)
);

CREATE TABLE productPurchase (
    prod_id INTEGER  NOT NULL,
    purchase_id INTEGER AUTO_INCREMENT NOT NULL,
    purchaseDate DATE NOT NULL,
    cust_id VARCHAR(10) NOT NULL,
    FOREIGN KEY (prod_id) REFERENCES productTable(id),
  FOREIGN KEY (cust_id) REFERENCES customer(cust_id),
    PRIMARY KEY (purchase_id)
);

INSERT INTO productTable (productDepartment, productCategory, productName, productInventory, productPrice)
VALUES ("Cosmetics", "Mascara", "Covergirl", 22, 15.95);

INSERT INTO productTable (productDepartment, productCategory, productName, productInventory, productPrice)
VALUES ("Hair Care", "Shampoo", "Pantene", 03, 8.95);

INSERT INTO productTable (productDepartment, productCategory, productName, productInventory, productPrice)
VALUES ("Hair Care", "Conditioner", "Pantene", 08, 10.95);

INSERT into customer (name, PASSWORD, cust_id )
VALUES ('Igor', '123den', 4);
INSERT into customer (name, PASSWORD, cust_id )
VALUES ('Igor_5', 'Auror_Den', 5);

SELECT * FROM productTable;

INSERT INTO productPurchase(prod_id,purchaseDate,cust_id)
VALUES (2,'2019-02-19',5)


