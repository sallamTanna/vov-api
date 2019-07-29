const {
  Category
} = require('../models/category');

const getAllCategories = (req, res) => {
  Category.find()
    .then(response => {
      if (response.length > 0)
        return res.json({
          response: response,
          metadata: {
            status: 'ok'
          }
        })
      return res.status(404).json({
        response: "not found"
      })
    })
    .catch(error => res.status(500).json({
      status: 500,
      msg: "Server error"
    }))
}

module.exports = {
  getAllCategories
};
