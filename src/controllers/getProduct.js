const {
  Product
} = require('../models/product');

const getProduct = async (req, res) => {

  let query = [{
      $lookup: {
        from: 'categories',
        localField: 'category',
        foreignField: '_id',
        as: "requiredName"
      }
    },
    {
      $match: {
        "requiredName.name": req.params.category
      }
    },
  ]

  const page = +req.query.page || 1;
  const size = +req.query.size || 3;
  const skip = size * (page - 1);

  if (req.query.name) {
    query.pop();
    query.push({
      $match: {
        $and: [{
          "requiredName.name": req.params.category
        }, {
          name: req.query.name
        }]
      }
    })
  }

  let countQuery = [...query];
  countQuery.push({
    $count: "count"
  })
  const count = await Product.aggregate(countQuery);

  query.push({
    $skip: size * (page - 1)
  }, {
    $limit: size
  })

  Product.aggregate(query)
    .then(response => res.json({
      response: response,
      metadata: {
        status: 'ok',
        pagesNumber: Math.ceil(count[0].count / size)
      }
    }))
    .catch(error => res.status(500).json({
      status: 500,
      msg: "Server error"
    }));
};

module.exports = {
  getProduct
};
