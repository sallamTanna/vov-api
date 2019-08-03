const {
  Product
} = require('../models/product');

const getRandomHotDeal = (req, res) => {
  Product.aggregate([{
        $match: {
          hotDeal: true
        }
      },
      {
        $sample: {
          size: 5
        }
      }
    ])
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
    }))
};

module.exports = {
  getRandomHotDeal
};
