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
    .then(response =>{
      if(response.length > 0)
        return res.json({ data: {categories: response}, metadata:{status: 'ok'}})
      return res.status(404).json({response:"not found"})
      })
    .catch(error => res.status(500).json({ status: 500, msg: "Server error" }))
};

module.exports = {
  getRandomHotDeal
};
