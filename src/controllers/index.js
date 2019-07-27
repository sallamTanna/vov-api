const express = require('express');
const router = express.Router();

const {
  addNewProduct
} = require('./addNewProduct.js')
const {
  getProductById
} = require('./getProductById.js')
const {
  getAllCategories
} = require('./getAllCategories.js')
const {
  getRandomHotDeal
} = require('./getRandomHotDeal.js')
const {
  getProduct
} = require('./getProduct.js')
const {
  getAllProducts
} = require('./getAllProducts.js')

router.get('/products/hot-deal', getRandomHotDeal) //return random 5 hot-deal products
router.get('/products/:id', getProductById) //return product with specific id
router.get('/categories/:category/products', getProduct) // return all products of category, search for product n category by its name
router.post('/products', addNewProduct) //add new product
router.get('/products', getAllProducts) //return all oroducts
router.get('/categories', getAllCategories) //return all categories from db

module.exports = router;
