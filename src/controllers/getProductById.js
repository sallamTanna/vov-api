const {
  Product
} = require('../models/product');

const getProductById = (req, res) => {
  Product.find({
      uuid: req.params.id
    })
    .populate('category')
    .then(response =>{
      if(response.length > 0)
        return res.json({ response: response, metadata:{status: 'ok'}})
      return res.status(404).json({response:"not found"})
      })
    .catch(error => res.status(500).json({ status: 500, msg: "Server error" }));
};

module.exports = {
  getProductById
};
