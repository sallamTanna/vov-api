const {
  Product
} = require("../models/product");

let query = {};

const getAllProducts = (req, res) => {

  const page = +req.query.page || 1;
  const size = +req.query.size || 3;
  const skip = size * (page - 1);

  if (req.query.name) {
    query = {
      name: req.query.name
    };
  }

  Product.find(query)
    .limit(size)
    .skip(skip)
    .then(response =>{
      if(response.length > 0)
        return res.json({ data: {categories: response}, metadata:{status: 'ok'}})
      return res.status(404).json({response:"not found"})
      })
    .catch(error => res.status(500).json({ status: 500, msg: "Server error" }));
};

module.exports = {
  getAllProducts
};
