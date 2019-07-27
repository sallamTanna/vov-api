const mongoose = require('mongoose');
const uuid = require('uuid/v1')
const Schema = mongoose.Schema;

exports.Product = mongoose.model('Product', new Schema({
  name: String,
  img: String,
  rate: Number,
  price: Number,
  offerPercentage: Number,
  location: [String],
  hotDeal: Boolean,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  uuid: {
    type: String,
    default: uuid
  }
}));
