const models = require('./models');
const prod = models.product;
const cust = models.customer;
const prod_pur = models.productpurchase;

cust.create({
    name: "Irina Bka",
    PASSWORD: "IRS_JS",
    cust_id: 6000
  })
  .then((newCompany) => {
    // The get() function allows you to recover only the DataValues of the object
    console.log(newCompany.get())
  })
  .catch((err) => {
    console.log("Error while customer creation : ", err)
  })

  prod.create({
    name: "Retna A",
    department: "Skin Care",
    category: "Moisturiser",
    inventory: 38,
    price: 25,
    prod_id: 9000
  })
  .then((newCompany) => {
    // The get() function allows you to recover only the DataValues of the object
    console.log(newCompany.get())
  })
  .catch((err) => {
    console.log("Error while product creation : ", err)
  })