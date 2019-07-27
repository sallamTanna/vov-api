const { Product } = require("../models/product");

const addNewProduct = (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then(response =>  res.json({ response: response, status: "ok" }))
    .catch(error => res.status(500).json({ status: 500, msg: "Server error" }));
};

module.exports = { addNewProduct };
