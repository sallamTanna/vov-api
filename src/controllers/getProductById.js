const {
  Product
} = require('../models/product');

const getProductById = (req, res) => {
  Product.find({
      uuid: req.params.id
    })
    .populate('category')
    .then(response =>
      res.json({
        response: response,
        metadata: {
          status: 'ok'
        }
      })
    )
    .catch(error => res.status(500).json({
      status: 500,
      msg: "Server error"
    }));
};

module.exports = {
  getProductById
};
