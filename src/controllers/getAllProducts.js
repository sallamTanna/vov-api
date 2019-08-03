const {
  Product
} = require("../models/product");

let query = {};

const getAllProducts = async (req, res) => {

  const page = +req.query.page || 1;
  const size = +req.query.size || 3;
  const skip = size * (page - 1);

  if (req.query.name) {
    query = {
      'name': {
        '$regex': req.query.name
      }
    }
  }
  const count = await Product.countDocuments(query);

  Product.find(query)
    .limit(size)
    .skip(skip)
    .then(response => res.json({
      response: response,
      metadata: {
        status: 'ok',
        pagesNumber: Math.ceil(count / size)
      }
    }))
    .catch(error => res.status(500).json({
      status: 500,
      msg: "Server error"
    }));
};

module.exports = {
  getAllProducts
};
