const { Product } = require("../models/product");
const Joi = require('@hapi/joi');

const addNewProduct = (req, res) => {
  const { name, img, rate, price, offerPercentage, location, hotDeal, category } = req.body;
  const product = new Product(req.body);

   const schema = Joi.object().keys({
       name: Joi.string().required(),
       img: Joi.string().required(),
       rate: Joi.number(),
       price: Joi.number().required(),
       offerPercentage: Joi.number(),
       location: Joi.array(),
       hotDeal: Joi.boolean().required(),
       category: Joi.string().required(),
   }).with('name', 'img');

  const result = Joi.validate({name, img, rate,price, offerPercentage, location, hotDeal, category}, schema);

  if(result.error) {
    return res.status(400).json({ status: 400, msg: result.error.details[0].message.replace(/\"/g, "") })
  } else {
    product
    .save()
    .then(response => res.json({ response: response, status: "ok" }))
    .catch(error => res.status(500).json({ status: 500, msg: "Server error" }));
  }
};

module.exports = { addNewProduct };
